import prisma from "@/db/db.config";
import isUserLoggedIn from "./validate/userAuth";

export default async function handler(req, res) {
  try {
    const isLoggedIn = await isUserLoggedIn(req);

    if (!isLoggedIn) return res.status(400).json({ message: "Unauthorized!" });
    const id = await isUserLoggedIn(req);
    if (!id) {
      return res.status(500).json("Unauthorized Access");
    }
    if (req.method === "POST") {
      try {

        console.log("cart is jdfkj");
        const { id, user_id } = req.body;

        if (id && user_id) {
          const findCart = await prisma.cart.findFirst({
            where: {
              p_id: id,
              user_id: user_id
            }
          });
          if (!findCart) {
            // If cart is not found, create a new one
            const addCart = await prisma.cart.create({
              data: {
                p_id: id,
                user_id: user_id
              }
            });
            return res.status(200).json({ message: "Add Cart Success", addCart });
          } else {
            // If cart is already added, return appropriate message
            return res.status(400).json({ message: "Cart is Already Added", findCart });
          }
        }
        // Find the cart



      } catch (error) {
        // If any error occurs during execution, handle it here
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    } else if (req.method === "GET") {
      const CartData = await prisma.cart.findMany({

        include: {
          product: {
            select: {
              name: true,
              price: true
            }
          }
        }
      });

      if (CartData.length === 0) {
        return res.status(404).json({ message: "Cart Data not found" });
      }

      return res.status(200).json(CartData);

    }


  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error", error: error });
  }
}
