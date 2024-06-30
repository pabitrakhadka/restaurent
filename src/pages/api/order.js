import prisma from "@/db/db.config";
import { getServerSession } from "next-auth";
import isUserLoggedIn from "./validate/userAuth";

// Function to generate a random integer between min and max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to handle POST requests
async function handlePostRequest(req, res) {
    try {
        const isLoggedIn = await isUserLoggedIn(req);

        if (!isLoggedIn) return res.status(400).json({ message: "Unauthorized!" });
        const session = await getServerSession(req, res, null);

        const data = req.body;

        let token_num = getRandomInt(4, 99999999);
        let num = `${token_num}`;

        const existingOrder = await prisma.order.findFirst({
            where: {
                token_num: num
            },
        });


        if (!existingOrder) {
            const createdOrders = await Promise.all(
                data.map(async (item) => {

                    const orderData = {
                        user_id: session.user.email,
                        menu_id: item.id,
                        price: item.price.toString(),
                        quantity: item.quantity.toString(),
                        status: "pending",
                        token_num: num
                    };
                    return await prisma.order.create({ data: orderData });
                })
            );
            res.status(200).json({
                status: true,
                message: "Order Received",
                token_num,
                createdOrders,
            });
        } else {
            token_num = getRandomInt(4, 99999999);

        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            message: "An error occurred",
            error,
        });
    }
}

// Function to handle GET requests
async function handleGetRequest(req, res) {
    try {
        const l = req.query.l;

        const token_num = req.query.token_num;


        if (token_num) {
            const seeOrderData = await prisma.order.findMany({
                select: {
                    user: {
                        select: {
                            user_name: true,
                            user_phone: true,
                            user_address: true,
                            user_email: true
                        }
                    },
                    menu_id: true,
                    price: true,
                    quantity: true,
                    status: true,
                    token_num: true,
                    date: true,
                    product: {
                        select: {
                            name: true,

                        }
                    }
                },
                where: {
                    token_num: token_num
                }
            });
            res.status(200).json(seeOrderData);
        } else if (l) {
            console.log(l);
            const latestOrders = await prisma.order.findMany({
                select: {
                    id: true,
                    menu_id: true,
                    user_id: true,
                    price: true,
                    quantity: true,
                    date: true,
                    status: true,
                    token_num: true
                },
                orderBy: {
                    date: 'desc',
                }, take: 5
            });
            if (!latestOrders) {
                res.status(400).json({ message: "No Record Found" });
            }
            res.status(200).json(latestOrders);
        } else {
            const orderList = await prisma.order.findMany({
                orderBy: {
                    date: 'desc'
                },
            });
            if (!orderList) {
                res.status(400).json({ message: "No Record Found" });
            }
            res.status(200).json(orderList);
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred", error });
    }
}

// Function to handle PUT requests
async function handlePutRequest(req, res) {
    try {
        const token_num = req.query.token_num;
        const { status } = req.body;
        console.log("Status= and token num", status, token_num);
        if (token_num) {
            const updateStatus = await prisma.order.updateMany({
                where: {

                    token_num: token_num,
                },
                data: {
                    status: status,
                },

            });
            if (!updateStatus) {
                res.status(400).json({ message: "Error Update Status " });
            }
            res.status(200).json({ message: "Success" }, updateStatus);
        }



    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ message: "error" });
    }
}

// Main handler function
export default async function handler(req, res) {
    try {
        const isLoggedIn = await isUserLoggedIn(req);
        if (!isLoggedIn) {
            res.status(405).json({ message: "Unauthorized" });
        }
        if (req.method === "POST") {
            await handlePostRequest(req, res);
        } else if (req.method === "GET") {
            await handleGetRequest(req, res);
        } else if (req.method === "PUT") {
            await handlePutRequest(req, res);
        } else {
            res.status(405).json({ message: "Method not allowed" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred", error });
    }
}
