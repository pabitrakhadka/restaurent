import prisma from "@/db/db.config";
import { superAdminSchema } from "./fieldValidate";
import isUserLoggedIn from "./validate/userAuth";
import { hashPassword } from "./validate/hash";

export default async function handler(req, res) {
    try {

        if (req.method === "POST") {
            const spassword = req.query.spassword;
            const checkpassword = process.env.superadminpassword;
            if (spassword === checkpassword) {
                const { error, value } = superAdminSchema.validate(req.body);
                if (error) {
                    return res.status(400).json({ error: error.details[0].message });
                }

                const { name, email, password } = value;
                console.log("Value", value);
                console.log("Name ", name, "Email ", email, "password ", password);
                const addAdmin = await prisma.superAdmin.create({
                    data: {
                        name: name,
                        email: email,
                        password: hashPassword(password)
                    }

                })
                if (addAdmin) {
                    res.status(200).json({ messae: "Success Super Admin is Added" });
                } else {
                    res.status(400).json({ messae: "Error" });
                }
            } else {
                res.status(401).json({ message: "Unauthorized Access" });
            }


        }

    } catch (error) {

    }
}