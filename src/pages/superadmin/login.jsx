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

    const handleAuth = async () => {
        authState.loginType = "superadmin";
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
                    router.push("/superadmin");
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
        <>
            <Tost />
            <div className=" bg-zinc-800 h-screen  ">
                <div className="flex justify-center items-center h-96 m-auto">
                    <form className=" bg-white w-96  sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl shadow rounded px-4 pt-4 pb-4 mb-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="">
                        <div className="mb-8 flex justify-center items-center">
                            <h1>Super Admin Login</h1>
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
                            <div className="w-full flex justify-center items-center">
                                <button className="text-lg bg-rose-600 text-white hover:bg-rose-700 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline  " disabled={pageState.processing} onClick={handleAuth} type="submit">
                                    Sign In
                                </button>

                            </div>

                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Login;
