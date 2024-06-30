import React, { useEffect, useState } from "react";

import router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn, useSession } from "next-auth/react";
import Tost from "@/components/Tost";

const admin = () => {
  const { data: session, status } = useSession();
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
    loginType: ""
  });
  const [pageState, setPageState] = useState({
    error: "",
    processing: false,
  });

  const handleFieldChange = (e) => {

    admin.loginType = "admin";
    setAdmin((old) => ({ ...old, [e.target.id]: e.target.value }));
  };
  const simplifyError = (error) => {
    const errorMap = {
      CredentialsSignin: "Invalid username or password",
    };
    return errorMap[error] ?? "Unknown error occurred";
  };

  const handleAuth = async () => {

    setPageState((old) => ({ ...old, processing: true, error: "" }));
    try {
      const response = await signIn("credentials", {
        ...admin,

        redirect: false,
      });

      if (response.error) {
        // Handle authentication error
        toast.error("Invalid Email or password", {
          // ...
        });
        setPageState((old) => ({
          ...old,
          processing: false,
          error: response.error,
        }));
      } else if (response.ok) {
        // Handle successful login
        toast.success("Login Successful !");
        setTimeout(() => {
          router.push("/admin");
        }, 1000);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      // Handle unexpected errors
      setPageState((old) => ({
        ...old,
        processing: false,
        error: "Something went wrong!",
      }));
    }
  };
  useEffect(() => {
    if (session?.user?.image === 'admin') {
      router.push("/admin");
    }
  }, [session])
  return (
    <div className=" bg-zinc-800 w-full h-screen">
      <Tost />
      {status === 'loading' ? <p className="text-center text-white">Loading</p>
        :
        <div className="flex justify-center items-center h-96">
          <form className="bg-white w-full  sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl shadow rounded px-4 pt-4 pb-4 mb-4">
            <h1 className="text-2xl m-3 text-center">Admin Login</h1>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none" type="email"
                required
                onChange={handleFieldChange}
                value={admin.email}
                id="email" name="email" placeholder="Email" />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none" type="password"
                required

                placeholder="name@example.com"
                onChange={handleFieldChange}
                value={admin.password}
                id="password" name="password" />
            </div>
            {pageState.error !== "" && <p> {simplifyError(pageState.error)}</p>}

            <div className="flex justify-center items-center">
              <button
                disabled={pageState.processing}
                onClick={handleAuth}
                className="text-lg bg-rose-600 text-white hover:bg-rose-700 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-1/3"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      }


    </div >
  );
};

export default admin;
