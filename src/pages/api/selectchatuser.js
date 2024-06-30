import prisma from "@/db/db.config";

export default async function handler(req, res) {
    try {

        if (req.method === "GET") {
            const findUser = await prisma.message.findMany({
                select: {
                    userid: true,
                    user: {
                        select: {
                            user_name: true
                        }
                    }
                },
                distinct: ['userid']
            })
            if (findUser) {

                res.status(200).json({ status: true, data: findUser });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: error });
    }
}