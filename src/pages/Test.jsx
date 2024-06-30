import React from 'react'
import Layout from '@/components/Layout'
import { useSession } from 'next-auth/react';
const Test = ({ children }) => {
    const { data: session, status } = useSession();
    return (
        <>
            <Layout>
                <div className='   '>
                    <p>Email:{session?.user?.email}</p>
                    <p>Name:{session?.user?.name}</p>
                    <p>Image:{session?.user?.image}</p>

                </div>
            </Layout>
        </>
    )
}

export default Test