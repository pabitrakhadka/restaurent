import prisma from "@/db/db.config.js";
import { adminSchema } from "./fieldValidate/index.js";
import { hashPassword, verifyPassword } from "./validate/hash.js";
import multer from "multer";
import bodyParser from "body-parser";


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
      if (req.method === "POST") {
        const apassword = req.query.apassword;
        const checkpassword = process.env;
        if (apassword === checkpassword) {
          const { error, value } = adminSchema.validate(req.body);
          if (error) {
            return res.status(400).json({ message: error.details[0].message });
          }
          const { name, email, phone, password } = value;
          const findAdmin = await prisma.admin.findUnique({
            where: { email: email },
          });
          if (findAdmin) {
            return res.status(400).json({
              status: 400,
              message: "Email already taken. Please choose another Email.",
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
          return res
            .status(200)
            .json({ message: "Admin is Added successfully.", addAdmin });
        } else {
          return res.status(401)
            .json({ message: "Unauthorized Access" });
        }
      } else if (req.method === "GET") {
        try {

          try {
            const adminid = req.query.adminid;
            if (adminid === 'adminid') {
              const id = await prisma.admin.findFirst({
                select: {
                  id: true,
                  name: true,
                  image: true
                }, take: 1
              })
              if (id) {
                return res.status(200).json(id);
              }
              return res.status(400).json({ id: null });
            }
            const id = parseInt(req.query.id);

            if (id) {
              const data = await prisma.admin.findMany({
                where: { id: id },
                select: {
                  id: true,
                  name: true,
                  email: true,
                  phone: true,
                  password: true,
                  image: true,
                },
              });
              return res.status(200).json({ status: 200, data: data });
            } else {
              const data = await prisma.admin.findMany({
                select: {
                  id: true,
                  name: true,
                  email: true,
                  phone: true,
                },
              });

              if (!data || data.length === 0) {
                return res.status(200).json({ message: "No Record Found" });
              }

              res.status(200).json({ data });
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
        const id = parseInt(req.query.id);
        const image = req.query.image;

        if (id && image) {
          console.log(id, image);
          console.log(id, image);
          upload(req, res, async (err) => {
            if (err) {
              console.error(err);
              return res
                .status(500)
                .json({ error: "Error uploading product image" });
            }

            const imageName = req.file.filename;

            const updateImage = await prisma.admin.update({
              where: {
                id: id,
              },
              data: {
                image: imageName,
              },
            });
            if (updateImage) {
              return res
                .status(200)
                .json({ message: "Image Upload Successfully" });
            } else {
              return res.status(400).json({ message: "Error Image Upload" });
            }
          });
        } else if (id) {
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
            }
            // Check if the provided password matches the previous password
            const ispasswordMatch = verifyPassword(password, admin.password);
            if (!ispasswordMatch) {
              const updatedAdmin = await prisma.admin.update({
                where: { id: id },
                data: {
                  name: name,
                  email: email,
                  phone: phone,
                  password: hashPassword(password), // Assuming hashPassword is a function that hashes the password
                },
              });
              return res.status(200).json({
                status: 200,
                data: updatedAdmin,
                message: "Admin is updated successfully.",
              });
            } else {

              return res.status(400).json({
                status: 400,
                message: "Your Previous Password Please New Password ?",
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
