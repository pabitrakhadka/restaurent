


import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import NotLogin from "../components/NotLogin";
import Tost from "@/components/Tost";
import Spinner from "@/components/Spinner";
import { useDispatch } from "react-redux";
import { decrement } from "@/store/slice/cartCounter";
import { useSelector } from "react-redux";
import Uispinner from "@/components/Uispinner";
import Link from "next/link";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orderItem, setOrderItem] = useState([]);
  const [sum, setSum] = useState(0);

  const { data: session, status } = useSession();
  const router = useRouter();
  const counter = useSelector((state) => state.cartCounter.value);
  const dispatch = useDispatch();
  useEffect(() => {
    if (session?.user?.image === "user" && session?.user?.email) {
      const data = JSON.parse(localStorage.getItem(`${session?.user?.name}${session?.user?.email}`));
      setCartItems(data);

      console.log("datas= ", data);
    }
  }, [session])


  useEffect(() => {
    updateTotal();
  }, [orderItem]);

  const checkoutbtn = () => {
    if (orderItem.length === 0) {
      toast.error("Cart is Empty!");
    } else {
      localStorage.setItem("order_itms", JSON.stringify(orderItem));
      router.push('/CheckOuts');
    }
  };

  const handleCheckboxChange = (index, checked) => {
    if (checked) {
      setOrderItem(prev => [...prev, cartItems[index]]);
    } else {
      setOrderItem(prev => prev.filter(item => item.id !== cartItems[index].id));
    }
  };

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
    localStorage.setItem(`${session.user.name}${session?.user?.email}`, JSON.stringify(updatedCartItems));
  };

  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity--;
      setCartItems(updatedCartItems);
      localStorage.setItem(`${session.user.name}${session?.user?.email}`, JSON.stringify(updatedCartItems));
    }
  };

  const checkClick = (index) => {
    const text = "Are you sure ?";
    if (confirm(text) === true) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);
      setCartItems(updatedCartItems);
      localStorage.setItem(`${session.user.name}${session.user.email}`, JSON.stringify(updatedCartItems));
      dispatch(decrement());
      toast.warn("Deleted ?");
    }
  };

  const updateTotal = () => {
    let total = 0;
    orderItem.forEach(item => {
      total += item.quantity * item.price;
    });
    setSum(total);
  };

  return (
    <Layout>


      <Tost />
      {counter > 0 ? <>
        {session?.user?.name && session?.user?.image === 'user' ? (
          <div className="table-responsive overflow-x-auto w-full flex justify-center flex-col md:flex-row">
            <div className="shadow-5 dark:bg-surface-dark border p-5 md:w-1/2 md:mr-4 mb-4 md:mb-0">
              <h1 className="text-3xl font-bold pb-5 text-center">Cart</h1>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-responsive overflow-x-auto">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        name="allselect"
                      />
                    </th>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Unit Price</th>
                    <th scope="col" className="px-6 py-3">Quantity</th>
                    <th scope="col" className="px-6 py-3">Total Price</th>
                    <th scope="col" className="px-6 py-3">Delete!</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems &&
                    cartItems.map((item, index) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </td>
                        <td className="px-6 py-4">{item.name}</td>
                        <td className="px-6 py-4">{item.price}</td>
                        <td className="d-flex justify-center align-center">
                          <div className="flex">
                            <button onClick={() => decreaseQuantity(index)} className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800">
                              <i className="fa fa-minus" aria-hidden="true"></i>
                            </button>
                            <p className="text-xl font-semibold m-2">{item.quantity}</p>
                            <button onClick={() => increaseQuantity(index)} className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800">
                              <i className="fa fa-plus" aria-hidden="true"></i>
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold">Rs. {item.quantity * item.price}</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => checkClick(index)}
                            className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800"
                          >
                            <i className="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="table-responsive overflow-x-auto shadow-5 dark:bg-surface-dark border p-5 md:w-1/2 md:mr-4 mb-4 md:mb-0 md:text-sm">
              <h1 className="text-3xl font-bold pb-5 text-center">Continue Process To Order</h1>
              <span>Your Order Product is: {orderItem.length}</span>
              <table className="table-responsive overflow-x-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Unit Price</th>
                    <th scope="col" className="px-6 py-3">Quantity</th>
                    <th scope="col" className="px-6 py-3">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItem.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">Rs. {item.price}</td>
                      <td className="d-flex justify-center align-center">
                        <div className="flex">
                          <p className="text-xl font-semibold m-2">{item.quantity}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold">Rs. {item.quantity * item.price}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={3} className="px-6 py-4">Total</td>
                    <td className="px-6 py-4 font-semibold">Rs. {sum}</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-center items-center">
                <button className="text-white text-center bg-rose-500 py-3 px-4" onClick={checkoutbtn}>Go To CheckOut</button>
              </div>
            </div>
          </div>
        ) : (
          < Spinner />
        )}</> : <>
        <div className="w-96 h-96 mx-auto flex items-center">
          <div className="flex items-center mx-auto justify-center box_shadow p-10 ">
            <div>
              <h2 className="mt-5">Your Cart is Empty ?</h2>
              <div className="mt-5 mx-3 px-10"> <Uispinner /></div>
              <div className="my-5">
                <Link href="/Menu" className="button mx-3">Please add Cart ?</Link >
              </div>
            </div>
          </div>
        </div>
      </>}


    </Layout >
  );
};

export default Cart;
