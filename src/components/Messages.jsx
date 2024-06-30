// Messages Component
import React, { useEffect, useRef, useState } from 'react';
import Message from './Message';

import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import server from '@/axois/server';
import { setMessages } from '@/store/slice/userMessage';
import Spinner from './Spinner';
const Messages = () => {
    const { adminId } = useSelector(state => state.adminData.admin);
    const { user_id, name } = useSelector(state => state.setUserSlice.selectedUser);

    const dispatch = useDispatch();
    const { data: session } = useSession();
    const { messages } = useSelector(state => state.userMessage);

    const [loading, setLoading] = useState(true);
    const messagesEndRef = useRef(null);
    const params = session?.user?.image === 'user' ? `user_id=${session?.user.email}&admin_id=${adminId}` : `user_id=${user_id}&admin_id=${session?.user.email}`;


    const loadData = async () => {

        const res = await server.get(`/api/message?${params}`);
        if (res.status === 200) {
            setLoading(false);
            console.log(res.data.data);
            dispatch(setMessages(res.data.data));


        } else {
            console.log("error",);
        }
    }
    useEffect(() => {
        // Scroll to the bottom of the message container whenever messages change
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    useEffect(() => {
        loadData();


    }, [user_id])
    return (
        <>
            {
                loading ?
                    <>
                        < Spinner />
                    </> : <>
                        <div className='flex flex-col w-full gap-y-1  '>
                            {messages.map((message, index) => (
                                <Message key={index} message={message} />
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                    </>
            }
        </>
    );
}

export default Messages;
