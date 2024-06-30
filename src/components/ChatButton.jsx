import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import server from '@/axois/server'
import { useDispatch } from 'react-redux'
import { setClick } from '@/store/slice/chatSlice'



const ChatButton = () => {


    const dispatch = useDispatch();
    const { data: session } = useSession();
    const router = useRouter();
    const checkLogin = () => {
        if (session?.user?.image === 'user') {
            dispatch(setClick(true));
        } else {
            toast.error("Please Login ?");
            router.push('/login');
        }
    }
    return (
        <>
            <div className="chat_button_show  z-100 right-20 bottom-10 fixed">
                <button onClick={() => checkLogin()} className="flex items-center justify-center text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    <i className="fa fa-commenting font-bold text-3xl mr-2" aria-hidden="true"></i>
                </button>

            </div>
        </>
    )

}


export default ChatButton;
