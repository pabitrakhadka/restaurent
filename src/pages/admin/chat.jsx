import Chats from '@/components/Chats';
import Dlayout from '@/components/Dlayout';
import Sidebar from '@/components/Sidebar';
import React from 'react';

const chat = () => {
    return (
        <Dlayout>
            <div className="flex w-full  chat_box_component overflow-hidden fixed  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Sidebar />
                <Chats />
            </div>
        </Dlayout>
    )
}

export default chat