import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
import messageApi from "./pages/api/message.js";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();
const sendMessage = async (data) => {
    try {
        const res = await ser.post("/api/message", data);
        if (res.status === 200) {
            console.log("Success: Data saved to database");
        } else {
            console.log("Error: Unable to save data to database");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};
app.prepare().then(() => {
    const httpServer = createServer(handler);

    const io = new Server(httpServer);

    io.on("connection", (socket) => {
        console.log("A user connected");

        socket.on('send', async (data) => {
            console.log("server data=", data);
            // Emitting 'received' event to all connected clients
            io.emit('received', data);
            await messageApi.sendMessage(data);
            console.log("Saved message:");
            console.log("Data after saving message:", data);
        });
        // Remove this block from here
        // socket.emit("send", { user_id, admin_id: null, message });

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });
    httpServer
        .once("error", (err) => {
            console.error(err);
            process.exit(1);
        })
        .listen(port, () => {
            console.log(`> Ready on http://${hostname}:${port}`);
        });
});

