import prisma from "@/db/db.config.js";

import multer from "multer";
import bodyParser from "body-parser";
import { hashPassword } from "../validate/hash";
import { adminSchema } from "../fieldValidate";
// import isUserLoggedIn from "../validate/userAuth.js";


// Define the destination directory for uploads
const uploadDirectory = "public/uploads";
const storage = multer.diskStorage({
    destination: uploadDirectory,
    filename: (req, file, cb) => {
        return cb(null, Date.now() + "_" + file.originalname);
    },
});

const upload = multer({ storage }).single("image");
export default async function handler(req, res) {
    bodyParser.json()(req, res, async () => {
        try {
            // const isLoggedIn = await isUserLoggedIn(req);

            // if (!isLoggedIn) return res.status(400).json({ message: "Unauthorized!" });
            if (req.method === 'POST') {
                const { error, value } = adminSchema.validate(req.body);
                if (error) {
                    return res.status(400).json({ status: 400, message: error.details[0].message });
                }

                const { name, email, phone, password } = value;
                console.log(name, email, phone, password);

                const findAdmin = await prisma.admin.findFirst({
                    where: { email: email },
                });

                if (findAdmin) {
                    return res.status(400).json({
                        status: 400,
                        message: 'Email already taken. Please choose another Email.',
                    });
                }

                const addAdmin = await prisma.admin.create({
                    data: {
                        name: name,
                        email: email,
                        phone: phone,
                        password: hashPassword(password),
                    },
                });
                return res.status(200).json({ status: 200, message: 'Admin is added successfully.', addAdmin });
            } else if (req.method === "GET") {
                try {
                    try {
                        const suuperadminid = req.query.id;
                        if (suuperadminid) {
                            const superAdminData = await prisma.superAdmin.findMany({
                                where: {
                                    id: suuperadminid
                                }
                            });
                            if (superAdminData) {
                                return res.status(200).json(superAdminData);
                            } else {
                                return res.status(400).json({ id: null });
                            }


                        }

                    } catch (error) {
                        console.error("Error:", error);
                        return res
                            .status(500)
                            .json({ status: 500, error: "Unauthorizes Access" });
                    }
                } catch (error) {
                    console.error("Error:", error);
                    return res
                        .status(500)
                        .json({ status: 500, error: "Internal Server Error" });
                }
            } else if (req.method == "PUT") {
                const id = parseInt(req.query?.id);
                if (id) {
                    const { error, value } = adminSchema.validate(req.body);
                    if (error) {
                        return res.status(400).json({ error: error.details[0].message });
                    }
                    const { name, email, phone, password } = value;
                    try {
                        const admin = await prisma.admin.findUnique({
                            where: { id: id },
                        });
                        if (!admin) {
                            return res.status(404).json({
                                status: 404,
                                message: "Admin not found",
                            });
                        } else {
                            const updatedAdmin = await prisma.admin.update({
                                where: { id: id },
                                data: {
                                    name: name,
                                    email: email,
                                    phone: phone,
                                    password: hashPassword(password),
                                },
                            });
                            return res.status(200).json({
                                status: 200,
                                data: updatedAdmin,
                                message: "Admin is updated successfully.",
                            });
                        }
                    } catch (error) {
                        console.error("Error updating admin:", error);
                        return res.status(500).json({
                            status: 500,
                            message: "Internal server error",
                        });
                    }
                }
            } else if (req.method === "DELETE") {
                const id = parseInt(req.query?.id);
                if (id) {
                    try {
                        const admin = await prisma.admin.findUnique({
                            where: { id: id },
                        });
                        if (!admin) {
                            return res.status(404).json({
                                status: 404,
                                message: "Admin not found",
                            });
                        } else {
                            const deleteAdmin = await prisma.admin.delete({
                                where: { id: id }
                            });
                            return res.status(200).json({
                                status: 200,
                                data: deleteAdmin,
                                message: "Admin is Deleete successfully.",
                            });
                        }
                    } catch (error) {
                        console.error("Error updating admin:", error);
                        return res.status(500).json({
                            status: 500,
                            message: "Internal server error",
                        });
                    }
                }
            }
        } catch (error) {
            console.error("Error:", error);
            return res
                .status(500)
                .json({ status: 500, error: "Internal Server Error", data: error });
        }
    });
}

export const config = {
    api: {
        bodyParser: false,
    },
};
