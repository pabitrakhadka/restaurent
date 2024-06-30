import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Layout from "@/components/Layout";
import { toast } from "react-toastify";


import Tost from "@/components/Tost";
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  const [authState, setAuthState] = useState({
    email: "",
    password: "",
    loginType: ""
  });
  const [pageState, setPageState] = useState({
    error: "",
    processing: false,
  });

  const handleFieldChange = (e) => {
    setAuthState((old) => ({ ...old, [e.target.id]: e.target.value }));
  };

  const simplifyError = (error) => {
    const errorMap = {
      CredentialsSignin: "Invalid username or password",
    };
    return errorMap[error] ?? "Unknown error occurred";
  };
  const handleGoogleAuth = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn('google', {
        callbackUrl: "/",
        redirect: false,
      });
      if (result.error) {
        toast.error("Google sign-in failed");
      } else {
        toast.success("Google sign-in successful");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("An error occurred during Google sign-in");
    }
  };

  const handleAuth = async () => {

    authState.loginType = "user";
    setPageState((old) => ({ ...old, processing: true, error: "" }));
    try {
      const response = await signIn("credentials", {

        ...authState,
        redirect: false,
      });

      if (response.error) {
        // Handle authentication error
        toast.error("Invalid username or password", {
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
          router.push("/");
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
  return (
    <Layout>
      <Tost />
      <div className="   flex justify-center items-center px-3 py-3">
        <form className="  sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="">
          <div className="mb-8 flex justify-center items-center">
            <i className="fa fa-user-circle-o text-5xl font-bold" arial-hidden="true"></i>

          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline"
              id="email"
              placeholder="pabitra@gmail.com"
              value={authState.email}
              onChange={handleFieldChange}
              type="text" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none" id="password" type="password" placeholder="Password"
              value={authState.password} onChange={handleFieldChange} />
            {pageState.error !== "" && <p className="text-red-500 text-xs italic">{simplifyError(pageState.error)}</p>}
          </div>
          <div>
            <div className="w-full flex justify-center items-center mb-2">
              <button className="text-lg cursor-pointer bg-rose-600 text-white hover:bg-rose-700 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-1/3" disabled={pageState.processing} onClick={handleAuth} type="submit">
                Sign In
              </button>

            </div>

            <button onClick={handleGoogleAuth} className="flex items-center   m-auto  justify-center items-center  p-3 rounded-full border">
              <img src="/uploads/googleicon.png" height={50} width={50} alt="" /> <h1 className="block text-sm">Continue With Google</h1>
            </button>

            <p className="text-center mt-4 ">
              <Link className="text-blue-500 hover:text-blue-800" href="/Forget">Forgot Account?</Link>
              Don't Have an account? <a className="text-blue-500 hover:text-blue-800" href="/register">Sign Up</a>
            </p>
          </div>
        </form>
      </div>

    </Layout>
  );
};

export default Login;
