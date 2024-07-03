import Layout from "@/components/Layout";
import { forgotSchema } from "@/schemas";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useRef } from 'react';
import server from "@/axois/server";
import Spinner from "@/components/Spinner";
import Uispinner from "@/components/Uispinner";

const initialValues = {
    newpassword: "",
    confirm_password: "",
};

const Forget = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState("");
    const [currentform, setCurrentform] = useState("forgot");
    const [emails, setUpdateEmail] = useState('');
    const [otp, setOTP] = useState({ one: '', two: '', three: '', four: '' });
    const [error, setError] = useState({});
    const inputTwoRef = useRef(null);
    const inputThreeRef = useRef(null);
    const inputFourRef = useRef(null);

    const handleChanges = (e, ref) => {
        const { name, value } = e.target;
        setOTP(prevOTP => ({
            ...prevOTP,
            [name]: value
        }));


        if (value && ref) {
            ref.current.focus();
        }
    };

    const handleClick = () => {
        setLoading(false);

    }

    //submit email
    const submitEmail = async (e) => {
        handleClick();
        console.log("submit email");
        e.preventDefault();
        try {

            console.log(e);
            const res = await server.get(`/api/userlogin?email=${email}`);
            console.log(res.data);
            if (res.status === 200) {
                setLoading(true);
                setUpdateEmail(email);
                toast.success(`${res.data.message}`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                });
                setTimeout(() => {
                    setCurrentform("enterpin");
                }, 1000)
            } else {
                toast.error(`${res.data.message}`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                });
            }
        } catch (error) {
            console.log("Catch ", error);
        }
    };
    const toastOptions = {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
    };
    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };
    const pinSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        for (const key in otp) {
            if (!otp[key]) {
                toast.error("Please enter a value", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                });
            } else if (otp[key].length !== 1 || isNaN(otp[key])) {
                newErrors[key] = 'Please enter a single digit';
                toast.error("Please enter a single digit", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                });
            }
        }
        if (Object.keys(newErrors).length === 0) {
            try {
                let pin = `${otp.one}${otp.two}${otp.three}${otp.four}`;
                const response = await server.post(`/api/userlogin?em=${email}&pin=${pin}`);

                if (response.status === 200) {
                    setUpdateEmail(email);
                    toast.success(response.data.message, toastOptions);
                    setTimeout(() => setCurrentform("changepassword"), 1000);
                } else {
                    toast.error(response.data.message, toastOptions);
                    setTimeout(() => setCurrentform("enterpin"), 1000);
                    console.log("error");
                }
                setError({});
            } catch (error) {

                toast.error("Error Pin !");
            }
        } else {
            setError(newErrors);
        }
    };


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: forgotSchema,
            onSubmit: async (values) => {
                console.log(values);
                values.emails = emails;
                const res = await axios.put(
                    "/api/userlogin?changepassword=c",
                    values
                );
                if (res.status === 200) {
                    toast.success(`${res.data.message}`, {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        theme: "colored",
                    });
                    setTimeout(() => {
                        router.push('/login');
                    }, 1000)
                } else {
                    toast.error(`${res.data.message}`, {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        theme: "colored",
                    });
                }
            },
        });


    const renderdiv = () => {
        switch (currentform) {
            case "forgot":
                return (
                    <>
                        <div className="forget_password_div">
                            <div className="text-center">
                                <h1 className="px-6 py-6 text-3xl font-bold">Forgot Password</h1>
                                <h2 className="py-3">Enter Your Email Address</h2>
                            </div>
                            <form  >
                                <div className="form-floating mb-6 pt-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="floatingInput">Email address</label>
                                    <input
                                        type="email"
                                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none"
                                        name="email"
                                        required
                                        onChange={handleEmail}
                                        value={email}
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                    />

                                </div>
                                <div className="text-center">
                                    {loading ?
                                        (
                                            <>
                                                <button type="submit" onClick={submitEmail} className="allbtn btn button">
                                                    Continue
                                                </button>
                                            </>) :
                                        (<>
                                            <Uispinner />
                                        </>)}
                                </div>
                            </form>
                        </div>
                    </>
                );
            case "enterpin":
                return (
                    <>
                        <div className="enterpin_section py-6">
                            <h1 className="text-center font-bold text-3xl">Reset Your Password</h1>
                            <p className="text-gray px-2 py-4">We just sent a 4 digit otp to. Enter the code here to be process.</p>
                            <div class="form-floating mb-3 flex justify-center items-center">
                                <input
                                    name="one"
                                    onChange={(e) => handleChanges(e, inputTwoRef)}
                                    value={otp.one}
                                    type="text"
                                    className=" h-10 w-10 rounded-lg bg-gray-200 text-center text-black font-bold mx-2"
                                    id="floatingInput"
                                    maxLength={1}
                                />
                                <input
                                    ref={inputTwoRef}
                                    name="two"
                                    onChange={(e) => handleChanges(e, inputThreeRef)}
                                    value={otp.two}
                                    type="text"
                                    className=" h-10 w-10 rounded-lg bg-gray-200 text-center text-black font-bold mx-2"
                                    id="floatingInput"
                                    maxLength={1}
                                />
                                <input
                                    ref={inputThreeRef}
                                    name="three"
                                    onChange={(e) => handleChanges(e, inputFourRef)}
                                    value={otp.three}
                                    type="text"
                                    className=" h-10 w-10 rounded-lg bg-gray-200 text-center text-black font-bold mx-2"
                                    id="floatingInput"
                                    maxLength={1}
                                />
                                <input
                                    ref={inputFourRef}
                                    name="four"
                                    onChange={handleChanges}
                                    value={otp.four}
                                    type="text"
                                    className=" h-10 w-10 rounded-lg bg-gray-200 text-center text-black font-bold mx-2"
                                    id="floatingInput"
                                    maxLength={1}
                                />

                            </div>
                            <div className="">
                                <button type="submit" onClick={pinSubmit} className="button">
                                    Continue
                                </button>
                            </div>

                        </div>

                    </>
                )
            case "changepassword":
                return (
                    <>
                        <div className="forget_password_div change_password px-3 py-4 ">
                            <h1 className="font-bold text-3xl text-center">New Password</h1>
                            <div className="warning_text bg-warning text-center  m-1 p-1">
                                <p>
                                    Please a New Password That you don't use an any other site
                                </p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newpassword">Create New Password</label>
                                    <input
                                        type="password"
                                        name="newpassword"
                                        value={values.newpassword}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none"
                                        onBlur={handleBlur}
                                        id="newpassword"
                                        placeholder="name@example.com"
                                    />

                                    {errors.newpassword && touched.newpassword ? (
                                        <i> <p className="text-red-600">{errors.newpassword}</p></i>
                                    ) : null}
                                </div>
                                <div className="form-floating mb-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">Confirm New Password</label>
                                    <input
                                        type="password"
                                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none"
                                        name="confirm_password"
                                        value={values.confirm_password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="confirm_password"
                                        placeholder="name@example.com"
                                    />

                                    {errors.confirm_password && touched.confirm_password ? (
                                        <p className="text-red-600 w-48 h-10 text-sm">{errors.confirm_password}</p>
                                    ) : null}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="button">
                                        Change
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>
                );
        }
    };

    return (
        <Layout>
            <div className="forget_page h-96  flex justify-center items-center ">
                <div className="forgetPage_view box_shadow px-5">{renderdiv()}</div>
            </div>

        </Layout>
    );
};

export default Forget;
