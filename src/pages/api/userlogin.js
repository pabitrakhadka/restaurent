import prisma from '@/db/db.config.js';
import { userLoginSchema } from "./fieldValidate/index.js";
import { hashPassword, verifyPassword } from "./validate/hash";
import jwt from "jsonwebtoken";
import generateOpt from './validate/generateOpt.js';
import transporter from './validate/sendEmail.js';

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const data = req.query?.data;
            console.log('Query data:', data);
            if (data === "google") {
                const { name, email } = req.body;
                console.log('Received name:', name, 'Received email:', email);
                try {
                    let findUser = await prisma.user.findFirst({
                        where: { user_email: email },
                    });
                    console.log("Google find user:", findUser);

                    if (!findUser) {
                        findUser = await prisma.user.create({
                            data: {
                                user_name: name,
                                user_email: email,
                            }
                        });
                    }

                    return res.status(200).json({
                        message: "Login Success",
                        id: findUser.user_id,
                        name: findUser.user_name,
                        email: findUser.user_email
                    });

                } catch (error) {
                    console.error('Error interacting with the database:', error);
                    return res.status(500).json({ message: "Internal Server Error" });
                }
            }

            let { em, pin } = req.query;
            if (em && pin) {
                pin = pin.toString();

                const checkOtp = await prisma.user.findFirst({
                    where: {
                        user_email: em,
                        user_otp: pin,
                    }
                });

                if (checkOtp) {
                    const deleteOtp = await prisma.user.update({
                        where: { user_email: em },
                        data: { user_otp: null },
                    });
                    return res.status(200).json({ message: "Success", deleteOtp });
                } else {
                    return res.status(400).json({ message: "Pin Don't Match" });
                }
            }

            const { error, value } = userLoginSchema.validate(req.body);
            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }

            const { email, password } = req.body;
            console.log("email and password=", email, password);
            const findUser = await prisma.user.findUnique({
                where: { user_email: email },
            });
            if (!findUser || !verifyPassword(password, findUser.user_password)) {
                return res.status(401).json({ error: "Invalid credentials" });
            }

            let token;
            if (!findUser.user_token) {
                token = jwt.sign(
                    { id: findUser.user_id, email: findUser.user_email },
                    process.env.JWT_SECRET_KEY
                );
                await prisma.user.update({
                    where: { user_id: findUser.user_id },
                    data: { user_token: token },
                });
            } else {
                token = findUser.user_token;
            }

            return res.status(200).json({
                message: "Login Successful",
                token: token,
                id: findUser.user_id,
                name: findUser.user_name,
                email: findUser.user_email,
            });
        } else if (req.method === 'GET') {
            const email = req.query.email;
            const id = parseInt(req.query?.id);
            if (id) {
                const findUser = await prisma.user.findMany({
                    where: {
                        user_id: id
                    }, select: {
                        user_id: true,
                        user_name: true
                    }
                })
                return res.status(200).json({
                    message: "Get Data",
                    findUser
                });
            }
            if (email) {
                try {
                    const userEmail = await prisma.user.findFirst({
                        where: { user_email: email }
                    });

                    if (userEmail) {
                        const otp = generateOpt();
                        const updatedUser = await prisma.user.update({
                            where: { user_email: email },
                            data: { user_otp: `${otp}` }
                        });

                        try {
                            const subject = "Reset Your Password";
                            const info = await transporter.sendMail({
                                from: {
                                    name: "Restaurant",
                                    address: process.env.EMAIL,
                                },
                                to: userEmail.user_email,
                                subject: subject,
                                html: `
                                    <html>
                                        <style>
                                            body {
                                                font-family: Arial, sans-serif;
                                                background-color: #f9f9f9;
                                                color: #333;
                                                line-height: 1.6;
                                                padding: 20px;
                                            }
                                            .email-container {
                                                max-width: 600px;
                                                margin: 0 auto;
                                                background-color: #ffffff;
                                                padding: 20px;
                                                border: 1px solid #ddd;
                                                border-radius: 5px;
                                            }
                                            .email-header {
                                                background-color: #F42f2c;
                                                color: white;
                                                padding: 10px;
                                                text-align: center;
                                                border-radius: 5px 5px 0 0;
                                            }
                                            .email-body {
                                                padding: 20px;
                                            }
                                            .email-footer {
                                                padding: 10px;
                                                text-align: center;
                                                font-size: 12px;
                                                color: #777;
                                            }
                                        </style>
                                    </head>
                                    <body>
                                        <div class="email-container">
                                            <div class="email-header">
                                                <h1>${subject}</h1>
                                            </div>
                                            <div class="email-body">
                                                <p style="font-size: 18px;">Hello,</p>
                                                <p>Your OTP is <b>${otp}</b>.</p>
                                                <p>You have requested to reset your password. Please use the above OTP to reset your password.</p>
                                                <p>If you did not request a password reset, please ignore this email.</p>
                                                <p>Best regards,<br>Restaurant Team</p>
                                            </div>
                                            <div class="email-footer">
                                                <p>&copy; ${new Date().getFullYear()} Restaurant. All rights reserved.</p>
                                            </div>
                                        </div>
                                    </body>
                                    </html>`
                            });

                            return res.status(200).json({ message: "Success", messageId: info.messageId });
                        } catch (error) {
                            console.error('Error sending email:', error);
                            res.status(500).json({ error: 'Error sending email' });
                        }
                    } else {
                        return res.status(400).json({ message: 'Your Email is Not Found in Our Database' });
                    }
                } catch (error) {
                    console.error('Error:', error);
                    return res.status(500).json({ message: 'Internal Server Error' });
                }
            } else {
                return res.status(400).json({ message: 'Please Enter Your Email' });
            }
        } else if (req.method === 'PUT') {
            try {
                const changepassword = req.query.changepassword;
                if (changepassword === 'c') {
                    const { emails, newpassword, confirm_password } = req.body;
                    console.log(emails, newpassword);
                    const updatePassword = await prisma.user.update({
                        where: { user_email: emails },
                        data: { user_password: hashPassword(newpassword) }
                    });
                    return res.status(200).json({ message: 'Successfully Changed Password', updatePassword });
                } else {
                    return res.status(500).json({ message: 'Internal Server Error' });
                }
            } catch (error) {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        } else {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, error: 'Internal Server Error', error });
    }
}