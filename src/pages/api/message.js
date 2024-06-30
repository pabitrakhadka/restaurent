import prisma from "@/db/db.config";

class Message {
    constructor() {

    }

    async saveMessage(data) {
        try {
            const { user_id, admin_id, senderId, receiverId, message, } = data;
            const addMessage = await prisma.message.create({
                data: {
                    userid: user_id,
                    adminId: admin_id,
                    senderId: senderId,
                    receiverId: receiverId,
                    message: message
                }
            });

            if (addMessage) {
                return { status: true, data: addMessage };
            } else {
                return { status: false, data: null };
            }
        } catch (error) {
            console.error("Error saving message:", error);
            return { status: false, data: null };
        }
    }
}

const message = new Message();

export { message };

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const { status, data } = await message.saveMessage(req.body);
            res.status(status ? 200 : 500).json({ data, message: status ? 'success' : 'failed' });
        } else if (req.method === "GET") {

            const user_id = parseInt(req.query.user_id);
            const admin_id = parseInt(req.query.admin_id);

            if (!user_id || isNaN(user_id) || !admin_id || isNaN(admin_id)) {
                return res.status(400).json({ message: "Invalid user_id parameter" });
            }

            const messages = await prisma.message.findMany({
                where: {
                    userid: user_id,
                    adminId: admin_id
                },
                select: {
                    message: true,
                    userid: true,
                    adminId: true,
                    senderId: true,
                    receiverId: true,
                    createdAt: true
                },
            });


            if (messages) {
                console.log("get messsage api=", message);
                res.status(200).json({ message: "Success", data: messages });
            } else {
                res.status(200).json({ message: "No messages found", data: null });
            }
        }
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: "Server error" });
    }
}
