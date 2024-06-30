import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { validates } from "@/schemas";
import axios from "axios";
import { useSession } from "next-auth/react";
import { validate } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { set } from "react-hook-form";
import Khalti from "./Khalti";
import crypto from "crypto";
import { useSelector } from "react-redux";
import server from "@/axois/server";

const initialValues = {
    name: "",
    phone: "",
    email: "",
    location: "",
};

const CheckOuts = () => {
    const { data: session, status } = useSession();
    const [orderItem, setOrderItem] = useState([]);
    useEffect(() => {
        if (session?.user?.image === "user" && session?.user?.email) {
            loadUserData();
            loadOrder_data();
        } else {
            toast.error("Please Login!",);
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        }
    }, []);
    useEffect(() => {
        calculatedTotal();
    }, [orderItem]);
    const router = useRouter();
    const [isCompleted, setIsCompleted] = useState(false);


    const parseQueryParams = () => {
        const {
            pidx,
            transaction_id,
            tidx,
            amount,
            total_amount,
            mobile,
            status,
            purchase_order_id,
            purchase_order_name,
        } = router.query;


        if (status === "Completed") {
            submitOrder();
        }
    };
    useEffect(() => {
        parseQueryParams();
        console.log("useffect is called");
    });

    useEffect(() => { }, [session?.user?.image === "user"]);

    const [showKhalti, setShowKhalti] = useState("");

    const handlePaymentClick = async (value) => {

        if (value === "khalti") {
            const khaltiob = {
                return_url: "http://localhost:3000/CheckOuts",
                website_url: "http://localhost:3000/",
                amount: sum * 100,
                purchase_order_id: `100`,
                purchase_order_name: `${values.name.trim()}`,
                customer_info: {
                    name: `${values.name}`,
                    email: `${values.email}`,
                    phone: `${values.phone}`,
                },
            };

            try {
                const rs = await axios.post('https://a.khalti.com/api/v2/epayment/initiate/', khaltiob, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `key  c14ac25061a7424cb36ed785426934cf`,
                    },
                });
                if (rs.status === 200) {
                    window.location.href = rs.data.payment_url;
                }
            } catch (error) {
                alert(`${error}`);
                console.log("error", error);
            }
        } else if (value === "esewa") {
            const generateSignature = (message) => {
                const sicret = process.env.ESEWA_SECRET;
                const hmac = crypto.createHmac("sha256", sicret);
                hmac.update(message);
                var hashInBase64 = hmac.digest("base64");
                return hashInBase64;
            };
            const signature = generateSignature("110,test,EPAYTES");

            const formData = {
                amount: "100",
                failure_url: "http://localhost:3000/CheckOut",
                product_delivery_charge: "0",
                product_service_charge: "0",
                product_code: "EPAYTEST",
                signature: `${signature}`,
                signed_field_names: "total_amount,transaction_uuid,product_code",
                success_url: "http://localhost:3000/CheckOut",
                tax_amount: "10",
                total_amount: "110",
                transaction_uuid: "ab14a8f2b02c3",
            };
            const headers = {
                "Content-Type": "application/json",
            };
            try {
                // Using a CORS proxy service
                const res = await axios.post(
                    `${process.env.ESEWA_API}`,
                    formData,
                    { headers: headers }
                );
                if (res.status === 200) {
                    console.log("success");
                } else {
                    console.log("error");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            alert("SELEct Payment Method");
            setShowKhalti("other");
        }
    };



    const [sum, setSum] = useState();

    const loadOrder_data = () => {
        const data = JSON.parse(localStorage.getItem(`order_itms`));
        setOrderItem(data);

    }
    const loadUserData = async () => {
        const res = await server.get(`/api/user_data`);
        if (res.status === 200) {
            values.name = res.data.user_name;
            values.email = res.data.user_email;
            values.phone = res.data.user_phone;
        }
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: validates,
            onSubmit: async (values) => {
                // const res = await axios.post('api/', values);
                // console.log("k ho data ", values)
                // const res = await axios.post('api/', values);
                // console.log(res.data);

            },
        });



    const calculatedTotal = () => {
        let total = 0;
        if (orderItem.length > 0) {
            orderItem.forEach((item) => {
                total += item.price * item.quantity;
            });
        }

        setSum(total);
    };


    const [step, setStep] = useState(0);

    const validateForm = () => {
        if (step === 1) {
            if (
                values.name !== "" &&
                values.location !== "" &&
                values.email !== "" &&
                values.phone
            ) {
                return true;
            } else {
                toast.error("All Input Fiedl are required!", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "colored",
                });
                return false;
            }
        }
    };
    const submitOrder = async () => {
        const respond = await axios.put(
            `/api/user?id=${session?.user?.email}`,
            values
        );
        const res = await axios.post("/api/order", orderItem);

        if (res.status === 200 && respond.status === 200) {

            toast.success("Thanks You For Order", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                theme: "colored",
            });
            setTimeout(() => {
                router.push("/UserOrder");
            }, 2000);
        } else {
            toast.error(`${res.data.message}`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                theme: "colored",
            });
        }
    };


    const next = () => {
        if (step > 3) {
            setStep(3);
        }
        if (step === 2) {
            setStep(3)
        }
        if (step == 0) {
            setStep(1);

        } else if (step === 1) {
            if (validateForm()) {
                setStep(2);
            } else {
                setStep(1);
            }
        }
    };

    const pre = () => {
        if (step > 0) {
            setStep(step - 1);
        } else {
            setStep(0);
        }
    };

    const steps = ["Cart", "Login and Address", "Final", "Payment"];

    const renderForm = () => {
        switch (step) {
            case 0:
                return (
                    <>
                        <div>
                            <table class="min-w-full text-left text-sm font-light text-surface dark:text-white">
                                <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">
                                            Name
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Unit Price
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Quantity
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Tatol Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderItem &&
                                        orderItem.map((item, index) => {

                                            return (
                                                <tr
                                                    key={index}
                                                    className="border-b border-neutral-200 dark:border-white/10"
                                                >
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {item.name}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {item.price}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {item.quantity}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {item.price * item.quantity}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    <tr>
                                        <td colSpan={3}> Total</td>
                                        <td>{sum}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                );
            case 1:
                return (
                    <div className="form">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="floatingInput">Name</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                {errors.name && touched.name ? (
                                    <p className="text-red-500 text-xs italic">{errors.name}</p>
                                ) : null}
                            </div>
                            <div className="form-floating mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="floatingInput">Email address</label>
                                <input
                                    type="email"
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />

                                {errors.email && touched.email ? (
                                    <p className="text-red-500 text-xs italic">{errors.email}</p>
                                ) : null}
                            </div>
                            <div className="form-floating mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="floatingInput">Enter Phone Number</label>
                                <input
                                    type="text"
                                    className="shadow appearance-none rounded w-full outline-none px-4 py-3 text-black leading-tight focus:outline-none"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="floatingInput"
                                    required
                                    placeholder="Enter Number"
                                />

                                {errors.phone && touched.phone ? (
                                    <p className="text-red-500 text-xs italic">{errors.phone}</p>
                                ) : null}
                            </div>
                            <div>
                                <select
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none"
                                    name="location"
                                    value={values.location}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    aria-label="Default select example"
                                >
                                    <option value="" disabled>
                                        Select Your Near Location
                                    </option>
                                    <option value="Buspark">Buspart</option>
                                    <option value="Bp Chok">Bp Chok</option>
                                    <option value="Brendra Chok">Brendra Chok</option>
                                </select>
                                {errors.location && touched.location ? (
                                    <p className="text-red-500 text-xs italic">{errors.location}</p>
                                ) : null}
                            </div>
                        </form>
                    </div>
                );
            case 2:
                return (
                    <div className="">
                        <div className="shadow p-5 m-auto">
                            <div className="com_details">
                                <img src="/uploads/logo.png" height={100} width={100} alt="" />
                            </div>
                            <h1 className="text-xl font-black">Order Details</h1>
                            <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                                    <tr className="border-b border-neutral-200 dark:border-white/10">
                                        <th scope="col">Name </th>
                                        <th scope="col">Price </th>
                                        <th scope="col">Quantity </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderItem &&
                                        orderItem.map((item, index) => {
                                            return (
                                                <tr className="border-b border-neutral-200 dark:border-white/10" key={index}>
                                                    <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{item.price}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{item.quantity}</td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                            <div className="user_data">
                                <h1 className="text-xl font-black">User Details</h1>
                                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">

                                    <tbody>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <td>{values.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>{values.email}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Phone </th>
                                            <td>{values.phone}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                );
            case 3:
                return (
                    <div className="payment flex justify-center">
                        <div className="flex flex-col md:flex-row justify-around items-center">
                            <div className="mb-4 md:mb-0">
                                <img
                                    onClick={() => {
                                        handlePaymentClick("khalti");
                                    }}
                                    className="cursor-pointer max-w-xs md:max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
                                    src="https://web.khalti.com/static/img/logo1.png"
                                    alt="Khalti"
                                />
                            </div>
                            <div>
                                <img
                                    onClick={() => {
                                        handlePaymentClick("esewa");
                                    }}
                                    className="cursor-pointer max-w-xs md:max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
                                    src="https://cdn.esewa.com.np/ui/images/esewa_og.png?111"
                                    alt="eSewa"
                                />
                            </div>
                        </div>
                    </div>

                );
            default:
                return null;
        }
    };
    return (
        <Layout>
            <ToastContainer />
            <div className="container mx-auto">
                <Box>
                    <Stepper activeStep={step} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <div className="w-full md:w-1/2 mx-auto  mt-3 p-10  box_shadow">{renderForm()}</div>
                <div className="flex flex-col md:flex-row justify-around items-center mt-2">
                    <button
                        onClick={pre}
                        className=" button bg-rose-500 text-2xl font-bold text-white px-8 py-2 mb-2 md:mb-0 md:mr-2"
                    >
                        Pre
                    </button>
                    <button
                        onClick={next}
                        className=" button bg-rose-500 text-2xl font-bold text-white px-8 py-2 mb-2 md:mb-0 md:mr-2"
                    >
                        Next
                    </button>
                </div>
            </div>



        </Layout>
    );
};

export default CheckOuts;
