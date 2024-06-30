import React, { useEffect } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useSession } from 'next-auth/react'
import server from '@/axois/server'
import { setAdmin } from '@/store/slice/adminData';
import { upperCase } from '@/components/CapitalFun';
const ChatTop = () => {


    const dispatch = useDispatch();
    const { data: session, status } = useSession();
    useEffect(() => {
        if (session?.user?.image === 'user') {
            loadAdminData();
        }
    }, [])
    const { adminId, adminName, adminImage } = useSelector(state => state.adminData.admin);
    { console.log(adminName) }
    const { user_id, name } = useSelector(state => state.setUserSlice.selectedUser);
    const loadAdminData = async () => {
        const res = await server.get('/api/admin?adminid=adminid');
        if (res.status === 200) {

            dispatch(setAdmin(res.data));
        }
    }


    return (
        <div className='bg-[#333] text-white'>
            <div className='flex items-center p-4'>
                <div className='rounded-full overflow-hidden'>

                </div>
                <div className='ml-2'>
                    <h3 className='text-lg font-semibold text-white'>{session?.user.image === 'user' ? upperCase(adminName) : upperCase(name)}</h3>
                    <p className='text-xs'>{ }</p>
                </div>
            </div>
        </div>

    )
}

export default ChatTop