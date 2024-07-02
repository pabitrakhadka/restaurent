import prisma from "@/db/db.config.js";
import { userSchema } from "./fieldValidate/index.js";
import { hashPassword } from "./validate/hash.js";
import isUserLoggedIn from "./validate/userAuth.js";
import { getServerSession } from "next-auth";
export default async function handler(req, res) {
  try {

    if (req.method == "POST") {
      const { error, value } = userSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const { name, phone, address, email, password, confirm_password } =
        req.body;

      const findUser = await prisma.user.findUnique({
        where: {
          user_email: email,
        },
      });

      if (findUser) {
        return res.status(200).json({
          message: "Email already Register. Please login.",
        });
      }

      const addUser = await prisma.user.create({
        data: {
          user_name: name,
          user_address: address,
          user_phone: phone,
          user_email: email,
          user_password: hashPassword(password),
        },
      });

      return res.status(200).json({
        status: 200,
        data: addUser,
        message: "User is Added successfully.",
      });
    } else if (req.method == "GET") {

      try {
        const data = await prisma.user.findMany();
        if (!data || data.length <= 0) {
          return res.status(200).json({
            status: false,
            message: "No Record Found !",
          });
        }
        return res.status(200).json({
          status: true,
          data: data,
        });



      } catch (error) {
        return res.status(401).json({
          status: "Failed",
          message: "Unauthorized Access",
        });
      }
    } else if (req.method == "PUT") {
      try {
        const id = parseInt(req.query.id);
        if (id) {
          const { location } = req.body;

          const updateUser = await prisma.user.update({
            where: {
              user_id: id,
            },
            data: {
              location: location,
            },
          });
          return res.status(200).json({ message: "Success", updateUser });
        }
      } catch (error) {
        console.log("Error");
        return res
          .status(500)
          .json({ status: 500, error: "Internal Server Error" });
      }
    }
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ status: 500, error: "Internal Server Error" });
  }
}
