// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { MessageRecived, onFormChange, onMessageSent, setMessages } from '@/store/slice/userMessage';
// import { useSession } from 'next-auth/react';
// import io from 'socket.io-client';
// import server from '@/axois/server';


// const SendMessage = () => {
//     const [connected, setIsConnected] = useState();
//     const { data: session } = useSession();
//     const { message } = useSelector(state => state.userMessage.form);
//     const dispatch = useDispatch();
//     const [socket, setSocket] = useState(null);
//     const { user_id, name } = useSelector(state => state.setUserSlice.selectedUser);
//     const { adminId } = useSelector(state => state.adminData.admin);

//     const audioRef = useRef(null);
//     useEffect(() => {
//         const newSocket = io.connect('http://localhost:3000/', {
//             path: "/api/socketio",
//         });

//         // Log socket connection
//         newSocket.on("connect", () => {
//             console.log("SOCKET CONNECTED!", newSocket.id);
//             setIsConnected(true);
//         });
//         newSocket.on("message", (message) => {
//             console.log("receive message", message);
//             dispatch(MessageRecived(message));
//         });

//         setSocket(newSocket);

//         // Disconnect socket on unmount
//         return () => {
//             if (newSocket) newSocket.disconnect();
//         };
//     }, []);

//     const handleMessageChange = (event) => {

//         dispatch(onFormChange(event.target.value));
//     };

//     const handleMessageSend = async (e) => {

//         // Check if the string is null or undefined
//         if (message === null || message === undefined) {
//             console.log("messageing is null or undefined");
//         } else {
//             // Check if the messageing is empty or contains only whitespace
//             if (message.trim() === "") {
//                 console.log("messageing is empty or contains only whitespace");
//             } else {
//                 try {
//                     if (socket) {

//                         if (session?.user?.image === 'user') {
//                             dispatch(onMessageSent({ user_id: session?.user?.email, admin_id: adminId, senderId: session?.user?.email, receiverId: adminId, message }));

//                         } else {
//                             dispatch(onMessageSent({ user_id: user_id, admin_id: session?.user.email, senderId: session?.user?.email, receiverId: user_id, message }));
//                         }

//                         // dispatch message to other users
//                         const res = await server.post("/api/chat", session?.user.image === "user" ? { user_id: session?.user?.email, admin_id: adminId, senderId: session?.user?.email, receiverId: adminId, message } : { user_id: user_id, admin_id: session?.user.email, senderId: session?.user?.email, receiverId: user_id, message });
//                         if (res.status === 200) {
//                             if (audioRef.current) {
//                                 audioRef.current.play();
//                             }
//                         }
//                         socket.emit("send", session?.user.image === "user" ? { user_id: session?.user?.email, admin_id: adminId, senderId: session?.user?.email, receiverId: adminId, message } : { user_id: user_id, admin_id: session?.user.email, senderId: session?.user?.email, receiverId: user_id, message });
//                         dispatch(onFormChange(''));
//                     }


//                 } catch (error) {
//                     console.error('Error:', error);
//                 }
//             }
//         }

//         e.preventDefault();


//     };

//     return (
//         <>
//             <div className='flex'>
//                 <input
//                     type='text'
//                     value={message}
//                     required
//                     onChange={handleMessageChange}
//                     placeholder='Type your message...'
//                     className='flex-1 mr-2 px-3 py-2 border border-gray-300 rounded'
//                 />
//                 <button
//                     onClick={handleMessageSend}
//                     className={`px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 ${message.trim() === '' ? 'cursor-not-allowed opacity-50' : ''}`}
//                     disabled={message.trim() === ''}
//                 >
//                     Send
//                 </button>
//                 <audio ref={audioRef} src="/uploads/ting.mp3" />

//             </div >
//         </>
//     );
// };

// export default SendMessage;

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MessageRecived, onFormChange, onMessageSent } from '@/store/slice/userMessage';
import { useSession } from 'next-auth/react';
import io from 'socket.io-client';
import server from '@/axois/server';

const SendMessage = () => {
    const [connected, setIsConnected] = useState(false);
    const { data: session } = useSession();
    const { message } = useSelector(state => state.userMessage.form);
    const dispatch = useDispatch();
    const socketRef = useRef(null);  // Use ref to hold socket instance
    const { user_id, name } = useSelector(state => state.setUserSlice.selectedUser);
    const { adminId } = useSelector(state => state.adminData.admin);
    const audioRef = useRef(null);

    useEffect(() => {
        // Check if socket is already connected
        if (!socketRef.current) {
            const newSocket = io.connect(process.env.BASE_URL, {
                path: "/api/socketio",
            });

            newSocket.on("connect", () => {
                console.log("SOCKET CONNECTED!", newSocket.id);
                setIsConnected(true);
            });

            newSocket.on("message", (message) => {
                console.log("receive message", message);
                dispatch(MessageRecived(message));
            });

            socketRef.current = newSocket;

            // Cleanup function to disconnect socket on unmount
            return () => {
                if (newSocket) newSocket.disconnect();
            };
        }
    }, [dispatch]);

    const handleMessageChange = (event) => {
        dispatch(onFormChange(event.target.value));
    };

    const handleMessageSend = async (e) => {
        e.preventDefault();

        if (message === null || message === undefined || message.trim() === "") {
            console.log("Message is null, undefined, or contains only whitespace");
            return;
        }

        const payload = session?.user.image === 'user'
            ? { user_id: session?.user?.email, admin_id: adminId, senderId: session?.user?.email, receiverId: adminId, message }
            : { user_id: user_id, admin_id: session?.user.email, senderId: session?.user?.email, receiverId: user_id, message };

        try {
            if (socketRef.current) {
                // Dispatch message to the store
                dispatch(onMessageSent(payload));

                // Send message to the server
                const res = await server.post("/api/chat", payload);
                if (res.status === 200 && audioRef.current) {
                    audioRef.current.play();
                }

                // Emit message to other users via socket
                socketRef.current.emit("send", payload);

                // Clear the form
                dispatch(onFormChange(''));
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='flex'>
            <input
                type='text'
                value={message}
                required
                onChange={handleMessageChange}
                placeholder='Type your message...'
                className='flex-1 mr-2 px-3 py-2 border border-gray-300 rounded'
            />
            <button
                onClick={handleMessageSend}
                className={`px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 ${message.trim() === '' ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={message.trim() === ''}
            >
                Send
            </button>
            <audio ref={audioRef} src="/uploads/ting.mp3" />
        </div>
    );
};

export default SendMessage;
