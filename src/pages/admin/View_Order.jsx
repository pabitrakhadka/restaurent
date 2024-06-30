import Dlayout from "@/components/Dlayout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Tost from "@/components/Tost";
import server from "@/axois/server";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Spinner from "@/components/Spinner";
import transporter from "../api/email"; ''
const View_Order = () => {
    const steps = [
        'Accept',
        'Food Ready',
        'Delebery Men Received',
        'Food in Your Door',
        'Complete'
    ];
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        orderId: ""
    });

    const [loading, setLoading] = useState(true);
    const [orderData, setOrderData] = useState([]);
    const [status, setStatus] = useState("");
    const [total, setTotal] = useState("");
    const [step, setstep] = useState();
    const router = useRouter();
    const token_num = router.query.token_num;
    useEffect(() => {

        if (token_num) {
            loadData();
        }

    }, [token_num]);

    const loadData = async () => {
        const res = await server.get(`/api/order?token_num=${token_num}`);

        if (res.status === 200) {

            console.log(res.data);
            userData.email = res.data[0].user.user_email;
            userData.name = res.data[0].user.user_name;
            userData.orderId = res.data[0].token_num;
            console.log("User data details=", userData);

            setOrderData(res.data);
            const currentStatusIndex = steps.indexOf(res.data[0].status);
            if (currentStatusIndex !== -1) {
                setstep(currentStatusIndex);
            }
            setLoading(false);
            // setstep(res.data[0].status);
            setStatus(res.data.status);
            let totalPrice = 0;
            res.data.forEach((item) => {
                totalPrice += parseFloat(item.price); // Assuming price is in number format
            });
            setTotal(totalPrice);


        }
    };

    const sendMainUser = () => {

        const to = userData.email;
        let subject;
        let bodytext;

        if (status === 'Order Accepted') {
            subject = "Order Accepted: Meal Preparation in Progress";
            bodytext = `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f9f9f9;
                        color: #333;
                        line-height: 1.6;
                        padding: 20px;
                    }
                    .email-container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                    }
                    .email-header {
                        background-color: #F42f2c;
                        color: white;
                        padding: 10px;
                        text-align: center;
                        border-radius: 5px 5px 0 0;
                    }
                    .email-body {
                        padding: 20px;
                    }
                    .email-footer {
                        padding: 10px;
                        text-align: center;
                        font-size: 12px;
                        color: #777;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="email-header">
                        <h1>${subject}</h1>
                    </div>
                    <div class="email-body">
                        <p style="font-size: 18px;">Hello <b>${userData.name}</b>,</p>
                        <p>We're thrilled to inform you that your order # <b>${userData.orderId}</b> has been accepted. Our team is now working diligently to prepare your meal.</p>
                        <p>Thank you for choosing SC Restaurant. We'll keep you updated on the progress of your order.</p>
                        <p>Best regards,<br>SC Restaurant</p>
                    </div>
                    <div class="email-footer">
                        <p>&copy; 2024 SC Restaurant. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>`;
        } else if (status === 'Food Ready') {
            subject = "Your Food is Ready for Delivery!";
            bodytext = `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f9f9f9;
                        color: #333;
                        line-height: 1.6;
                        padding: 20px;
                    }
                    .email-container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                    }
                    .email-header {
                        background-color: #F42f2c;
                        color: white;
                        padding: 10px;
                        text-align: center;
                        border-radius: 5px 5px 0 0;
                    }
                    .email-body {
                        padding: 20px;
                    }
                    .email-footer {
                        padding: 10px;
                        text-align: center;
                        font-size: 12px;
                        color: #777;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="email-header">
                        <h1>${subject}</h1>
                    </div>
                    <div class="email-body">
                        <p style="font-size: 18px;">Hello <b>${userData.name}</b>,</p>
                        <p>Exciting news! Your order # <b>${userData.orderId}</b> is now ready for delivery. Our chefs have prepared your meal with care, and it's all set to be dispatched to your doorstep.</p>
                        <p>Sit back, relax, and anticipate the delicious flavors coming your way!</p>
                        <p>Best regards,<br>SC Restaurant</p>
                    </div>
                    <div class="email-footer">
                        <p>&copy; 2024 SC Restaurant. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>`;
        } else if (status === 'Delivery Men Received') {
            subject = "Delivery Confirmation: Your Order is En Route!";
            bodytext = `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f9f9f9;
                        color: #333;
                        line-height: 1.6;
                        padding: 20px;
                    }
                    .email-container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                    }
                    .email-header {
                        background-color: #F42f2c;
                        color: white;
                        padding: 10px;
                        text-align: center;
                        border-radius: 5px 5px 0 0;
                    }
                    .email-body {
                        padding: 20px;
                    }
                    .email-footer {
                        padding: 10px;
                        text-align: center;
                        font-size: 12px;
                        color: #777;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="email-header">
                        <h1>${subject}</h1>
                    </div>
                    <div class="email-body">
                        <p style="font-size: 18px;">Hello <b>${userData.name}</b>,</p>
                        <p>Your order # <b>${userData.orderId}</b> is on its way to you! Our delivery team has received your package and is en route to deliver it to your specified location.</p>
                        <p>We appreciate your patience and hope you enjoy your meal when it arrives.</p>
                        <p>Best regards,<br>SC Restaurant</p>
                    </div>
                    <div class="email-footer">
                        <p>&copy; 2024 SC Restaurant. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>`;
        } else if (status === 'Food at Your Door') {
            subject = "Your Order is at Your Doorstep!";
            bodytext = `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f9f9f9;
                        color: #333;
                        line-height: 1.6;
                        padding: 20px;
                    }
                    .email-container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                    }
                    .email-header {
                        background-color: #F42f2c;
                        color: white;
                        padding: 10px;
                        text-align: center;
                        border-radius: 5px 5px 0 0;
                    }
                    .email-body {
                        padding: 20px;
                    }
                    .email-footer {
                        padding: 10px;
                        text-align: center;
                        font-size: 12px;
                        color: #777;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="email-header">
                        <h1>${subject}</h1>
                    </div>
                    <div class="email-body">
                        <p style="font-size: 18px;">Hello <b>${userData.name}</b>,</p>
                        <p>Your order # <b>${userData.orderId}</b> has reached your doorstep! Our delivery personnel has successfully delivered your meal, and it's now awaiting your enjoyment.</p>
                        <p>Thank you for choosing SC Restaurant. We hope you have a delightful dining experience.</p>
                        <p>Best regards,<br>SC Restaurant</p>
                    </div>
                    <div class="email-footer">
                        <p>&copy; 2024 SC Restaurant. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>`;
        } else if (status === 'Complete') {
            subject = "Order Delivered: Enjoy Your Meal!";
            bodytext = `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f9f9f9;
                        color: #333;
                        line-height: 1.6;
                        padding: 20px;
                    }
                    .email-container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                    }
                    .email-header {
                        background-color: #5b23dc;
                        color: white;
                        padding: 8px;
                        text-align: center;
                        border-radius: 5px 5px 0 0;
                    }
                    .email-body {
                        padding: 20px;
                    }
                    .email-footer {
                        padding: 10px;
                        text-align: center;
                        font-size: 12px;
                        color: #777;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="email-header">
                        <h1>${subject}</h1>
                    </div>
                    <div class="email-body">
                        <p style="font-size: 18px;">Hello <b>${userData.name}</b>,</p>
                        <p>Congratulations! Your order # <b>${userData.orderId}</b> has been successfully delivered. We hope you're excited to indulge in your delicious meal.</p>
                        <p>Thank you for choosing SC Restaurant. We look forward to serving you again soon.</p>
                        <p>Best regards,<br>SC Restaurant</p>
                    </div>
                    <div class="email-footer">
                        <p>&copy; 2024 SC Restaurant. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>`;
        }
        console.log(to, subject, bodytext);
        const sendmail = async () => {
            const res = server.post('/api/email', { to, subject, bodytext });
            console.log(to, subject, bodytext);
            if (res.status === 200) {
                console.log("success email send");
            } else {
                console.log("error send email");
            }

        }
        sendmail();
    }


    const updateOrderStatus = async (e, token_num) => {


        e.preventDefault();
        sendMainUser();

        const res = await server.put(`/api/order?token_num=${token_num}`, { status });
        if (res.status === 200) {
            toast.success(`${res.data.message}`);
            setTimeout(() => {
                router.push('/admin/order');
            }, 1000)
        } else {
            toast.error(`${res.data.message}`);
            setTimeout(() => {
                router.push('/admin/order');
            }, 1000)
        }
    }


    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <Dlayout>
            <Tost />
            {
                loading ? <>
                    <Spinner />
                </>
                    : <>
                        <h1>View Order</h1>

                        <div className=" ">
                            <div className="relative overflow-x-auto ">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead>
                                        <tr >
                                            <th scope="col">Name</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Menu Id</th>
                                            <th scope="col">Menu</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Order Date</th>
                                            <th scope="col">Token_Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderData.map((item, index) => (
                                            <>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                                    <td className=" ">{item.user.user_name}</td>
                                                    <td className="">{item.user.user_phone}</td>
                                                    <td className="">{item.user.user_address}</td>
                                                    <td className="">{item.menu_id}</td>
                                                    <td className="">{item.product.name}</td>
                                                    <td className="">Rs.{item.price}</td>
                                                    <td className="">{item.quantity}</td>
                                                    <td className="">{item.date}</td>
                                                    <td className="">{item.token_num}</td>

                                                </tr>

                                            </>
                                        ))}
                                        <tr>
                                            <td colSpan={5}>
                                                <div className="order_status_box">
                                                    <Box sx={{ width: '100%' }}>

                                                        <Stepper activeStep={step} alternativeLabel>
                                                            {steps.map((label, labelIndex) => (
                                                                <Step key={labelIndex}>
                                                                    <StepLabel>{label}</StepLabel>
                                                                </Step>
                                                            ))}
                                                        </Stepper>
                                                    </Box>
                                                </div>
                                            </td>
                                            <td colSpan={2}><b>Total Price</b></td>
                                            <td><b>{total}</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <form>

                                    <div className="form-floating">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="floatingSelect">Status</label>
                                        <select
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            id="floatingSelect"
                                            aria-label="Floating label select example"
                                            name="status"
                                            value={status}
                                            onChange={handleStatusChange}
                                        >
                                            <option value="pending">Select a Status</option>
                                            <option value="Accept">Order Accept</option>
                                            <option value="Food Ready">Food ready</option>
                                            <option value="Delebery Men Received">Delebery Men Received</option>
                                            <option value="Food in Your Door">Food in Your Door</option>
                                            <option value="Complete">Complete</option>
                                        </select>

                                    </div>

                                    <button

                                        onClick={(e) => updateOrderStatus(e, token_num)}
                                        className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800"
                                    >
                                        Update
                                    </button>
                                </form>
                            </div>
                        </div>
                    </>
            }


        </Dlayout>
    );
};

export default View_Order;
