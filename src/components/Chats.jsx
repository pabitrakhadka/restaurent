import React from 'react';
import Messages from './Messages';
import SendMessage from './SendMessage';
import ChatTop from './ChatTop';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';
import server from '@/axois/server';


const Chats = () => {

    const { user_id, name } = useSelector(state => state.setUserSlice.selectedUser);
    return (
        <>
            {user_id ? (
                <div className='w-1/2 flex flex-col'>
                    <ChatTop />
                    <div className='flex-1 overflow-y-scroll bg-gray-100 px-4 py-6'>
                        <Messages />
                    </div>
                    <div className='bg-gray-200 p-4'>
                        <SendMessage />
                    </div>
                </div>
            ) : (
                <div>
                    <Spinner />
                </div>
            )}
        </>
    );
}

export default Chats;
