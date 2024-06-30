import Dlayout from "@/components/Dlayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Spinner from "@/components/Spinner";
const order = () => {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState();
  const loadData = async () => {
    const res = await axios.get("/api/order");
    // console.log(res.data);
    if (res.status === 200) {
      setOrder(res.data);
      setLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Dlayout>
      {
        loading ? <>

          <Spinner />
        </> : <>
          <div className="">
            <h1>Orders List</h1>
          </div>

          <table className="table-responsive overflow-x-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3" scope="col">Order id</th>
                <th className="px-6 py-3" scope="col">Menu Id</th>
                <th className="px-6 py-3" scope="col">UserId</th>
                <th className="px-6 py-3" scope="col">Price</th>
                <th className="px-6 py-3" scope="col">Quantity</th>
                <th className="px-6 py-3" scope="col">Date</th>
                <th className="px-6 py-3" scope="col">Token_Num</th>
                <th className="px-6 py-3" scope="col">Status</th>
                <th className="px-6 py-3" scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {order && order.map((item, index) => {

                return (
                  <tr key={index}>
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{item.menu_id}</td>
                    <td className="px-6 py-4">{item.user_id}</td>
                    <td className="px-6 py-4">Rs.{item.price}</td>
                    <td className="px-6 py-4">{item.quantity}</td>
                    <td className="px-6 py-4">{item.date}</td>
                    <td className="px-6 py-4">{item.token_num}</td>
                    <td className="px-6 py-4">{item.status}</td>
                    <td className="px-6 py-4">
                      <Link href={`/admin/View_Order?token_num=${item.token_num}&user_id=${item.user_id}`}>
                        <button className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800">View Details</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}

            </tbody>
          </table></>
      }
    </Dlayout >
  );
};

export default order;
