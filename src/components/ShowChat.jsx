import React from 'react'
import Messages from './Messages'

const ShowChat = () => {
    return (
        <div className='w-96 h-96 overflow-hidden overflow-y-scroll'>
            <Messages />
        </div>
    )
}

export default ShowChat