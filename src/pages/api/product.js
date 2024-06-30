import prisma from "@/db/db.config.js";
import multer from "multer";
import isUserLoggedIn from "./validate/userAuth";
import client from "@/db/client";
import menu from "../Menu";


// Define the destination directory for uploads
const uploadDirectory = process.env.IMAGE_DIRCTORY;
const storage = multer.diskStorage({
  destination: uploadDirectory,
  filename: (req, file, cb) => {
    return cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage }).single("image");

export default async function handler(req, res) {

  try {
    // const isLoggedIn = await isUserLoggedIn(req);
    // if (!isLoggedIn) {
    //   return res.status(400).json({ message: "Unauthorized!" });
    // }
    if (req.method === "POST") {
      const isLoggedIn = await isUserLoggedIn(req);
      if (!isLoggedIn) {
        return res.status(400).json({ message: "Unauthorized!" });
      }
      upload(req, res, async (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Error uploading product image" });
        } else {
          const { name, price, description, special, category } = req.body;
          const imageName = req.file.filename;

          const addProduct = await prisma.product.create({
            data: {
              name: name,
              price: parseInt(price),
              description: description,
              image: imageName,
              special: special,
              category: category
            }
          });

          return res.status(200).json({ message: "Product Added Successfully", addProduct });
        }
      });
    } else if (req.method === "GET") {

      const page = req.query?.page;
      const special_menu = req.query?.special_menu;
      if (special_menu) {
        const menu = await prisma.product.findMany({
          where: {
            special: special_menu
          },
          take: 4
        });
        if (!menu) {
          return res.status(400).json({ status: false, message: "no product" });
        }
        return res.status(200).json({ menu });

      }
      const id = parseInt(req.query.id);
      const category = req.query?.category;

      if (id) {
        const data = await prisma.product.findFirst({
          where: {
            id: id
          }
        });
        return res.status(200).json(data);

      } else if (category) {

        if (category === 'all_menu') {
          const data = await prisma.product.findMany();
          if (!data || data.length === 0) {
            return res.status(404).json({ message: "No records found" });
          }
          return res.status(200).json(data);

        }
        const categoryProduct = await prisma.product.findMany({
          where: {
            category: category
          }
        })
        if (!category || categoryProduct.length === 0) {
          return res.status(404).json({ message: "No records found" });
        }
        return res.status(200).json(categoryProduct);
      }
      else {

        const { page = 1, perpage = 8 } = req.query;
        const pageNumber = parseInt(page);
        const products = await prisma.product.findMany({
          skip: perpage * (pageNumber - 1),
          take: parseInt(perpage)
        })
        if (products) {
          res.status(200).json(products);
        }
        // client.get("product", async (err, cacheProduct) => {
        //   if (err) throw err;

        //   if (cacheProduct) {
        //     console.log('Product retrieved from cache');
        //     return res.status(200).json(JSON.parse(cacheProduct)); // Assuming `res` is defined
        //   } else {
        //     const { page = 1, perpage = 8 } = req.query;
        //     const pageNumber = parent(page);

        //     console.log("djfkd", page, pageNumber);
        //     const products = await prisma.product.findMany({
        //       skip: perpage * (pageNumber - 1),
        //       take: parseInt(perpage)
        //     });
        //     // Set the value of the key "product" in Redis with an expiration of 3600 seconds (1 hour)
        //     await client.set("product", JSON.stringify(products), 'EX', 5);
        //     console.log('Products retrieved from database and cached');
        //     res.status(200).json(products);


        //   }
        // });
      }
    } else if (req.method == "PUT") {

      const id = parseInt(req.query.id);
      if (id) {

        upload(req, res, async (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error uploading product image" });
          } else {
            const { name, price, description, category } = req.body;
            const imageName = req.file.filename;

            const updateProduct = await prisma.product.update({
              where: {
                id: id
              },
              data: {
                name: name,
                price: parseInt(price),
                description: description,
                image: imageName,

                category: category
              }
            });

            return res.status(200).json({ message: "Product Update Successfully", updateProduct });
          }
        });



      }
    } else if (req.method === "DELETE") {
      const id = parseInt(req.query.id);
      if (id) {
        await prisma.cart.delete({
          where: {
            p_id: id
          }
        });
        await prisma.order.delete({
          where: {
            menu_id: id
          }
        });
        await prisma.orderuserdata.delete({
          where: {
            menu_id: id
          }
        });
        const deleteProduct = await prisma.product.delete({
          where: {
            id: id
          }
        });
        return res.status(200).json({ message: "Product Deleted !", deleteProduct });
      }
    }
    else {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
