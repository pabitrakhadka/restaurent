import prisma from "@/db/db.config";
import isUserLoggedIn from "./validate/userAuth";

//Handel Get Request
async function hendleGetRequest(req, res) {

    const count = req.query;
    const dashData = req.query.dashData;
    if (dashData === 'dashData') {

        const TotalProduct = await prisma.product.count();
        const TotalOrder = await prisma.order.count();
        const TotalUsers = await prisma.user.count();
        const FeedBack = await prisma.contact.count();
        const PendingOrder = await prisma.order.count(
            {
                where: {
                    status: "Pending"
                }
            }
        );
        const TotalProductDelevery = await prisma.order.count({
            where: {
                status: 'Complete'
            }
        });
        let data = {
            "TotalProduct": TotalProduct,
            "TotalOrder": TotalOrder,
            "TotalUser": TotalUsers,
            "TotalProductDelevery": TotalProductDelevery,
            "Feedback": FeedBack,
            "PendingOrder": PendingOrder

        };

        if (TotalProduct >= 0 && TotalOrder >= 0 && TotalUsers >= 0 && TotalProductDelevery >= 0 && FeedBack >= 0 && PendingOrder >= 0) {

            return res.status(200).json({ data: data });
        }
        return res.status(400).json("Server Error");

    }
    return res.status(400).json("Server Error");
}


export default async function handler(req, res) {
    try {
        // const isLoggedIn = await isUserLoggedIn(req);
        // if (!isLoggedIn) {
        //     return res.status(400).json({ message: "Unauthorized Access" });
        // }
        if (req.method === "GET") {
            await hendleGetRequest(req, res);
        }
    } catch (error) {
        console.error("An error occurred while handling GET request:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}