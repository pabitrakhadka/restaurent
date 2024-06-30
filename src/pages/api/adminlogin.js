import prisma from "@/db/db.config.js";
import { adminLoginSchema } from "./fieldValidate/index.js";
import { verifyPassword } from "./validate/hash";
import jwt from "jsonwebtoken";
import { middleware } from "@/middleware.js";
export default async function handler(req, res) {
  try {
    if (req.method == "POST") {

      const { error, value } = adminLoginSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const { email, password } = req.body;

      const findAdmin = await prisma.admin.findUnique({
        where: {
          email: email,
        },
      });
      if (!findAdmin || !verifyPassword(password, findAdmin.password)) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      let token;
      // Check if the user has a token in the database
      if (!findAdmin.token) {
        // Generate a new token
        token = jwt.sign(
          { id: findAdmin.id, email: findAdmin.email },
          process.env.JWT_SECRET_KEY
        );
        console.log("token", token);
        // Update user's token in the database
        await prisma.admin.update({
          where: { id: findAdmin.id },
          data: { token: token },
        });
      } else {
        // Use the existing token
        token = findAdmin.token;
      }

      return res.status(200).json({
        message: "Login successful",
        token: token,
        id: findAdmin.id,
        name: findAdmin.name,
        email: findAdmin.email,
      });
    } else if (req.method == "GET") {
      const id = parseInt(req.query.id);
      if (id) {
        const adminProfile = await prisma.admin.findMany({
          where: {
            id: id,
          },
          select: {
            name: true,
            phone: true,
            email: true,
          },
        });
        if (!adminProfile || adminProfile.length == 0) {
          return res.status(200).json({ message: "No Record Found !" });
        }
        return res.status(200).json(adminProfile);
      } else {
      }
    } else if (req.method === "DELETE") {
      const { authorization } = req.headers;

      try {
        const id = await middleware(authorization);
        if (!id) {
          console.log("Token is not valid");
          return res
            .status(401)
            .json({ status: "Failed", message: "Unauthorized Admin No Token" });
        }

        const deleteToken = await prisma.admin.update({
          where: {
            id: id,
          },
          data: {
            token: null,
          },
        });

        return res.status(200).json({ message: "Logout Success", deleteToken });
      } catch (error) {
        console.error("Route handler error:", error.message);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: 500, error: "Internal Server Error", error: error });
  }
}
