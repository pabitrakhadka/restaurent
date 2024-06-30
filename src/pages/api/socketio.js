import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";

export const config = {
    api: {
        bodyParser: false,
    },
};
export default async function (req, res) {
    if (!res.socket.server.io) {
        console.log("New Socket.io server...");
        const httpServer = res.socket.server;
        const io = new ServerIO(httpServer, {
            path: "/api/socketio",
        });
        // append SocketIO server to Next.js socket server response
        res.socket.server.io = io;
    }
    res.end();
}
