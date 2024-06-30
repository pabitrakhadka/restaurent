import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import isUserLoggedIn from './validate/userAuth';
dotenv.config();

export default async function handler(req, res) {
    const isLoggedIn = await isUserLoggedIn(req);
    if (!isLoggedIn) return res.status(400).json({ message: "Unauthorized!" });
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });
    const { to, subject, bodytext } = req.body;

    if (to && subject && bodytext) {
        try {
            const info = await transporter.sendMail({
                from: {
                    name: "Restaurant",
                    address: process.env.EMAIL,
                },
                to: to,
                subject: subject,
                html: bodytext
            });

            console.log('Message sent: %s', info.messageId);
            res.status(200).json({ messageId: info.messageId });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        }
    }
}
