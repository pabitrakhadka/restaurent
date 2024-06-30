import React from 'react'
import UserChat from './UserChat'

const Sidebar = () => {
    return (
        <div className='w-1/5 overflow-y-scroll bg-zinc-800 text-white'>
            <UserChat />
        </div>
    )
}

export default Sidebar