import React from "react";
import { useRouter } from "next/router";

const NotLoginForm = (props) => {
  const { type } = props;
  const router = useRouter();

  const renderButtons = () => {
    switch (type) {
      case "user":
        return (
          <>
            <button
              className="btn bg-danger text-white"
              onClick={() => router.push("/register")}
            >
              Register
            </button>
            <div className="flex justify-center items-center w-full">
              <button
                className="bg-rose-500 py-2 px-4 text-white text-2xl font-bold text-center"
                onClick={() => router.push("/login")}
              >
                Login
              </button>
            </div>
          </>
        );
      case "admin":
        return (
          <div className="flex justify-center items-center w-full">
            <button
              className="bg-rose-500 py-2 px-4 text-white text-2xl font-bold text-center"
              onClick={() => router.push("/admin-login")}
            >
              Admin Login
            </button>
          </div>
        );
      case "superadmin":
        return (
          <div className="flex justify-center items-center w-full">
            <button
              className="bg-rose-500 py-2 px-4 text-white text-2xl font-bold text-center"
              onClick={() => router.push("/superadmin/login")}
            >
              Super admin Login
            </button>
          </div>
        );
      default:
        return (
          <div className="flex justify-center items-center w-full">
            <button
              className="bg-rose-500 py-2 px-4 text-white text-2xl font-bold text-center"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          </div>
        );
    }
  };

  return (
    <div className="flex justify-center items-center mx-auto h-screen">
      <div className="shadow p-3 mb-5 bg-blue-900 rounded w-80">
        <h1 className="mb-5 text-white text-2xl font-bold text-center">
          Please Login!
        </h1>
        <div className="flex mt-3 space-x-2">
          {renderButtons()}
        </div>
      </div>
    </div>
  );
};

export default NotLoginForm;
