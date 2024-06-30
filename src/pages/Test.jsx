import React from 'react'
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import Layout from '@/components/Layout'
import Tests from '@/components/Tests'
import server from '@/axois/server'
import axios from 'axios';
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