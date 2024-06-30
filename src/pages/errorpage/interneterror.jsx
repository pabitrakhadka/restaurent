import React from 'react'

const interneterror = () => {
    return (

        <div>
            <div className="internet_error mx-auto w-1/4 box_shadow rounded-lg">
                <div>
                    <div className="internet_icon ">
                        <img className='mx-auto' height={100} width={100} src="/photos/nointernet.jpg" alt="nointernetconnectionicon" />
                    </div>
                    <div className='text-center'>
                        <h3 > <b>No Internet Connectin</b></h3>
                        <p>You don't seem to be connected to the internet. Please check your connection and try again or exit and retry later.</p>
                    </div>
                    <div className=''>
                        <div className='flex justify-around py-1'>
                            <button className='bg-black text-white px-5  text-sm'>Exit</button>
                            <button className='bg-black text-white  px-5  text-sm' >Retry</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default interneterror