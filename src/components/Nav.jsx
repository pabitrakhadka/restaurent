import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Tost from "./Tost";

import { useRouter } from "next/router";
import { data } from "autoprefixer";



const Nav = () => {
  const router = useRouter();
  function FirstLetter(name) {
    if (name.length > 0) {
      return name.charAt(0).toUpperCase();
    } else {
      return '';
    }
  }

  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isshow, setIsshow] = useState(false);

  const counter = useSelector((state) => state.cartCounter.value);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const showLogout = () => {
    // setIsshow(pre => !pre);
    setIsshow(!isshow);
  }
  const logout = () => {
    toast.success("LogOut Successful");
    signOut();
    router.push('/');
  };
  return (
    <>
      <Tost />
      <nav className="bg-white border-gray-200   dark:bg-blue-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/photos/logo.png" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sc Restaurent</span>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none   
 
          {isMenuOpen ? 'gray-200' : 'gray-600'} dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href

                  ="/Menu" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Menu</Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
              </li>
              {session?.user?.image === "user" ? (
                <>
                  <li className="relative">
                    <Link href="/cart" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Cart
                      {counter > 0 ? <> <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{counter}</span></> : <></>}
                    </Link>
                  </li>



                  <li>
                    <Link href="/UserOrder" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Order</Link>
                  </li>
                </>
              ) : (
                <></>
              )}
              {session?.user?.image === "user" ? (
                <>
                  <li>
                    <button onClick={showLogout} className="rounded-full bg-red-500 text-white w-8 h-8 text-center" >
                      {FirstLetter(session.user.name)}
                    </button>
                    {isshow ? (
                      <> <div className="box_shadow  absolute top-0 right-0 p-2 z-100 text-center flex justify-center items-center">
                        <ul className="">
                          <li className=" ">{session?.user?.name}</li>
                          <li className=" ">
                            <button onClick={logout} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Out</button>
                          </li>
                        </ul>
                      </div></>
                    ) : (<></>)}

                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign In</Link>
                  </li>
                </>
              )}
              {/* <li>
                <Link href="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">SignIn</Link>
              </li>
              <li>
                <Link href="/register" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">SignUp</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className="navbar navbar-expand-lg header">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand  " href="/">
              <h3 className=" d-flex justify-content-center align-items-center dancing">
                <i className="bi bi-egg-fill "></i>{" "}
                <span className="text-white dancing">SC RESTAURENT</span>
                <i className="bi bi-cup-hot-fill m-1  fs-3 "></i>
              </h3>
            </Link>
            <ul className="navbar-nav m-auto unlist">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" href="/">
                  <i className="bi bi-house"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/Menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </li>

              {session?.user?.image === "user" ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href="/cart">
                      Cart
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/UserOrder">
                     Order
                    </Link>
                  </li>
                 
                </>
              ) : (
                <></>
              )}

              {session?.user?.image === "user" ? (
                <li className="nav-item logout_button">
                  <Link className="nav-link" href={"/"} onClick={logout}>
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" href="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        
         
        </div>
        
        <ToastContainer />
      </nav> */}
    </>
  );
};

export default Nav;
