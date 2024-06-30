
import prisma from "@/db/db.config";
import { getServerSession } from "next-auth/next";
import isUserLoggedIn from "./validate/userAuth";
import order from "../admin/order";

export default async function handler(req, res) {

    try {
        const isLoggedIn = await isUserLoggedIn(req);
        if (!isLoggedIn) {
            return res.status(500).json({ message: 'Unauthorized Access' });
        }
        if (req.method === 'GET') {
            const session = await getServerSession(req, res, null);
            const id = session?.user?.email;
            console.log(id);
            const orders = await prisma.order.findMany({
                select: {
                    product: {
                        select: {
                            name: true
                        }
                    },
                    token_num: true,
                    price: true,
                    status: true,
                    quantity: true,
                    date: true,

                },

                where: {
                    user_id: id,
                },
            });
            console.log(orders);
            res.status(200).json(orders);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
}