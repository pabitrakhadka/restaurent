import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotLogin from "../components/NotLogin";
import server from "@/axois/server";
import Image from "next/image";
const Dlayout = ({ children }) => {

  const { data: session, status } = useSession();
  const [image, setImage] = useState();

  useEffect(() => {
    getAdminProfile();
  }, [session?.user?.email]);
  const router = useRouter();

  const logoutBtn = async () => {
    toast.success("LogOut Successful");
    signOut();
  };


  const getAdminProfile = async () => {
    try {
      if (session?.user?.image === 'admin' && session?.user?.email) {
        const id = session.user.email;
        console.log(id)
        const res = await server.get(`/api/admin?id=${id}`);
        if (res.status === 200) {

          console.log(res.data.data[0].image);
          setImage(res.data.data[0].image);

        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {session?.user?.image === "admin" && (
        <>
          <ToastContainer />
          <div className="dashboards bg-gray-100 min-h-screen">
            <div className="top bg-zinc-800 text-[#97979A] flex justify-around p-3  ">
              <div className="">
                <Link href={`${process.env.BASE_URL}`}>view site</Link>
              </div>
              <div className="flex justify-around items-center">
                <div className="flex justify-center items-center">
                  <div>
                    <button> <i class="fa fa-bell px-2 text-white" aria-hidden="true"></i></button>
                  </div>

                  <Link href='/admin/profile'>
                    <div className="image_icons">
                      <Image className="rounded-full" width={30} height={30} src={`/uploads/${image}`} alt="" />
                    </div></Link>
                  <div className="px-2 text-white">{session?.user.image === 'admin' && session?.user.name}</div>
                </div>
              </div>
            </div>
            <div class="dashboard h-screen w-full grid grid-cols-1 md:grid-cols-4 gap-4 fixed top-15 left-0">
              <div class="left bg-[#181a20] text-[#97979A]   ">
                <ul >
                  <li class="p-2  text-[#97979a] hover:text-white   ">
                    <Link href="/admin" class="w-full block  font-bold text-base">
                      <i class="fa fa-home px-2" aria-hidden="true"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li class="p-2  text-[#97979A]  hover:text-white ">
                    <Link href="/admin/admins" class="w-full block font-bold text-base">
                      <i class="fa fa-home px-2" aria-hidden="true"></i>Admins
                    </Link>
                  </li>
                  <li class="p-2  text-[#97979A]  hover:text-white ">
                    <Link href="/admin/slider" class="w-full block font-bold text-base">
                      <i class="fa fa-picture-o px-2" aria-hidden="true"></i>Slider Image
                    </Link>
                  </li>
                  <li class="p-2  text-[#97979A]   hover:text-white">
                    <Link href="/admin/users" class="w-full block font-bold text-base">
                      <i class="fa fa-users px-2" aria-hidden="true"></i>Users
                    </Link>
                  </li>
                  <li class="p-2  text-[#97979A]  hover:text-white">
                    <Link href="/admin/product" class="w-full block font-bold text-base">
                      <i class="fa fa-home px-2" aria-hidden="true"></i>Product
                    </Link>
                  </li>
                  <li class="p-2  text-[#97979A] hover:text-white ">
                    <Link href="/admin/order" class="w-full block font-bold text-base">
                      <i class="fa fa-shopping-cart px-2" aria-hidden="true"></i>Order
                    </Link>
                  </li>
                  <li class="p-2  text-[#97979A] hover:text-white ">
                    <Link href="/admin/chat" class="w-full block font-bold text-base">
                      <i class="fa fa-commenting-o  px-2" aria-hidden="true"></i>Chat
                    </Link>
                  </li>
                  <li class="p-2  text-[#97979A]  hover:text-white">
                    <Link href="/admin/contact_details" class="w-full block font-bold text-base">
                      <i class="fa fa-home px-2" aria-hidden="true"></i>Contact
                    </Link>
                  </li>
                  <li class="p-2  text-[#97979A]  hover:text-white">
                    <button onClick={logoutBtn} class="   font-bold text-base">

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
      )
      }

      {
        !(session?.user?.image === "admin") && (
          <div className="notLogin">
            <NotLogin type="admin" />
          </div>
        )
      }
    </>
  );
};

export default Dlayout;
