import { useSession } from 'next-auth/react';
import React from 'react';
import { date } from '@/components/CapitalFun';
const Message = ({ message }) => {
    const { data: session } = useSession();


    const self = message?.senderId === session.user.email;

    const containerClasses = self ? 'justify-end clear-both' : 'justify-start clear-both';
    const messageClasses = self ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white';
    const triangleClasses = self ? 'right-0' : 'left-0';


    return (
        <>

            <div className={`flex ${containerClasses}  mb-2`}>

                <div className='max-w-[70%] w-max'>
                    <p className='text-xs mr-1'>{date(message.createdAt)}</p>
                    <div className={`${messageClasses} p-2 relative rounded-lg`}>

                        {message.message}
                        <div className={`absolute bottom-0 h-0 w-0    border-solid ${triangleClasses}`}></div>


                    </div>
                </div>

            </div>
        </>
    );
}

export default Message;
