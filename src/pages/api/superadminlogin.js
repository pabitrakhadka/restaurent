import prisma from "@/db/db.config";
import { superAdminLogin } from "./fieldValidate";
import { verifyPassword } from "./validate/hash";

export default async function handler(req, res) {
    try {

        if (req.method === "POST") {
            const { error, value } = superAdminLogin.validate(req.body);
            if (error) {
                return res.status(400).json({ status: false, message: error.details[0].message });
            }
            const { email, password } = value;
            const findSuperAdmin = await prisma.superAdmin.findFirst({
                where: {
                    email: email
                }
            });
            const checkPassworde = verifyPassword(password, findSuperAdmin.password);
            if (findSuperAdmin && checkPassworde) {

                res.status(200).json({
                    status: true, message: "Successfull Login ",
                    id: findSuperAdmin.id,
                    name: findSuperAdmin.name
                });

            } else {
                res.status(400).json({ message: "Error" });
            }
        }
    } catch (error) {
        res.status(500).json({ message: "Error", error: error });
    }
}