import { Server } from "socket.io";

export default async function handler(req, res) {
    const io = new Server(res.socket.server);
    res.socket.server = io;

    io.on('connection', (socket) => {
        socket.on('send-message', (message) => {
            io.emit('receive-message', message);
        });
    });

    console.log("Setting socket");
    res.end();
}
