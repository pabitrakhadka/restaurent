import { NextApiRequest, NextApiResponse } from 'next';
import { Server as ServerIO } from 'socket.io';
import { message } from './message';

export default async function handler(req, res) {
    if (req.method === "POST") {

        try {
            // get message
            const data = req.body;
            // dispatch to channel "message"
            res?.socket?.server?.io?.emit("message", data);

            // Save data to database
            const savedMessage = await message.saveMessage(data);

            // Respond with the saved message
            res.status(200).json(savedMessage);
        } catch (error) {
            console.error("Error saving message:", error);
            res.status(500).json({ message: "Error saving message" });
        }
    }
}
