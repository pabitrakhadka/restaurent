import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import NotLogin from '../components/NotLogin';
import Tost from './Tost';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';

const SuperLayout = ({ children }) => {
    const { data: session, status } = useSession();
    const [image, setImage] = useState();
    const router = useRouter();
    useEffect(() => {
        getAdminProfile();


    }, [session?.user?.email]);


    const logoutBtn = async () => {
        toast.success("LogOut Successful");
        signOut();
        router.push(`${process.env.BASE_URL}`);

    };


    const getAdminProfile = async () => {
        try {
            if (session?.user?.image === 'super' && session?.user?.email) {
                const id = session.user.email;
                console.log(id)
                const res = await server.get(`/api/admin?id=${id}`);
                if (res.status === 200) {

                    console.log(res.data.data[0].image);
                    // setImage(res.data.data[0].image);

                }
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            {session?.user?.image === "superadmin" && (
                <>
                    <Tost />
                    <div className="dashboards w-full bg-gray-100 min-h-screen fixed">
                        <div className="top bg-zinc-800 text-[#97979A] flex justify-around p-3  ">
                            <div className="">
                                <h1 className="text-base font-bold text-white">Sc Restaurent Dashboard</h1>
                            </div>
                            <div className="flex justify-around items-center">
                                <div className="flex justify-center items-center">
                                    <div>
                                        <i class="fa fa-bell px-2" aria-hidden="true"></i>
                                    </div>

                                    <Link href='/superadmin/profile'>
                                        <div className="image_icons">
                                            <Image className="rounded-full" width={30} height={30} src={`/uploads/${image}`} alt="" />
                                        </div></Link>
                                    <div className="px-2 text-white">{session?.user.image === 'superadmin' && session?.user.name}</div>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard h-screen w-full grid grid-cols-1 md:grid-cols-4 gap-4 fixed top-15 left-0">
                            <div class="left bg-[#181a20] text-[#97979A]   ">
                                <ul >
                                    <li class="p-2  text-[#97979a] hover:text-white   ">
                                        <Link href="/superadmin" class="w-full block  font-bold text-base">
                                            <i class="fa fa-home px-2" aria-hidden="true"></i>
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li class="p-2  text-[#97979A]  hover:text-white ">
                                        <Link href="/superadmin/admin" class="w-full block font-bold text-base">
                                            <i class="fa fa-home px-2" aria-hidden="true"></i>Admins
                                        </Link>
                                    </li>

                                    <li class="p-2  text-[#97979A]  hover:text-white">
                                        <button onClick={logoutBtn} class="  block font-bold text-base">

                                            <i class="fa fa-sign-out px-2" aria-hidden="true"></i>Logout
                                        </button>

                                    </li>
                                </ul>
                            </div>
                            <div class="dashboard_right col-span-3 bg-white p-4 rounded shadow overflow-scroll">
                                {children}
                            </div>
                        </div>

                    </div>

                </>
            )}

            {
                !(session?.user?.image === "superadmin") && (
                    <div className="notLogin">
                        <NotLogin type="superadmin" />
                    </div>
                )
            }
        </>
    )
}

export default SuperLayout