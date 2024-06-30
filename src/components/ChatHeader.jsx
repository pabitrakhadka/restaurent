import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ChatHeader = () => {
    return (
        <div className='flex justify-around items-center box_shadow p-4'>
            <div>
                <Link href="/" className='text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800'><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
            </div>
            <div className='flex items-center'>
                <Image className='block' src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" height={20} width={20} />
                <p className='block ml-2'>Name</p>
            </div>
            <div className="close">
                <Link href="/" className='text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800'>
                    <i class="fa fa-window-close" aria-hidden="true"></i>
                </Link>
            </div>
        </div>
    )
}

export default ChatHeader