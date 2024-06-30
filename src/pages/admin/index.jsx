import Dlayout from "@/components/Dlayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NotLogin from "@/components/NotLogin";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
import server from "@/axois/server";
import Spinner from "@/components/Spinner";
const dashboard = () => {
  const [data, setData] = useState({});
  const { data: session, status } = useSession();
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(true);


  const loaddashData = async () => {
    const res = await server.get("/api/dashData?dashData=dashData");
    if (res.status === 200) {
      setData(res.data.data)
      setLoad(false);
      console.log(res.data);


    }
  }
  const loadData = async () => {
    const res = await server.get("/api/order?l=letest");
    if (res.status === 200) {
      setOrder(res.data);
      setLoading(false);

    } else {

    }
  };

  useEffect(() => {

    if (status === 'authenticated') {
      loaddashData();
      loadData();
    }

  }, []);

  return (
    <>

      {status === 'loading' ? (
        <>
          <Spinner />
        </>
      ) : (
        <>


          {(session?.user?.image === 'admin') && (
            <>

              <Dlayout>
                <ToastContainer />

                <div className="flex justify-center items-center">
                  {load ? (
                    <Spinner />
                  ) : (
                    <>
                      {data && (
                        <>
                          <div className="flex flex-wrap justify-center  text-center">
                            <div className="box_shadow p-4 flex-grow basis-80 m-2 text-center ">
                              <h1 className="font-bold text-2xl ">TotalProduct</h1>
                              <p className="font-bold text-gray">{data.TotalProduct}</p>
                            </div>
                            <div className="box_shadow p-4 flex-grow basis-1 m-2   ">
                              <h1 className="font-bold text-2xl ">TotalOrder</h1>
                              <p className="font-bold text-gray">{data.TotalOrder}</p>
                            </div>
                            <div className="box_shadow p-4 flex-grow basis-80 m-2  ">
                              <h1 className="font-bold text-2xl ">TotalUser</h1>
                              <p className="font-bold text-gray">{data.TotalUser}</p>
                            </div>
                            <div className="box_shadow p-4 flex-grow basis-80 m-2  ">
                              <h1 className="font-bold text-2xl ">TotalProductDelevery</h1>
                              <p className="font-bold text-gray">{data.TotalProductDelevery}</p>
                            </div>
                            <div className="box_shadow p-4 flex-grow m-2  ">
                              <h1 className="font-bold text-2xl ">Feedback</h1>
                              <p className="font-bold text-gray">{data.Feedback}</p>
                            </div>
                            <div className="box_shadow p-4 flex-grow basis-1 m-2 ">
                              <h1 className="font-bold text-2xl ">PendingOrder</h1>
                              <p className="font-bold text-gray">{data.PendingOrder}</p>
                            </div>
                          </div>
                        </>
                      )

                      }


                    </>
                  )},
                </div>

                <div className="chart_show">

                </div>
                < div className="class_RecentOrder">
                  <div className="shadow-md p-5">
                    <h2>Recent Order</h2>
                    {loading ?
                      (<div className="flex items-center justify-center w-full h-96 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"><div className="" role="status ">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                        <span class="sr-only">Loading...</span>
                      </div></div>) :
                      (


                        <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                          <thead>
                            <tr>
                              <th scope="col" class="px-6 py-4">Order id</th>
                              <th scope="c ol" class="px-6 py-4">Menu Id</th>
                              <th scope="col" class="px-6 py-4">UserId</th>
                              <th scope="col" class="px-6 py-4">Price</th>
                              <th scope="col" class="px-6 py-4">Quantity</th>
                              <th scope="col" class="px-6 py-4">Date</th>
                              <th scope="col" class="px-6 py-4">Status</th>
                              <th scope="col" class="px-6 py-4">Action</th>
                            </tr>
                          </thead>
                          <tbody>

                            {
                              order ? (
                                order.map((item, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>{item.id}</td>
                                      <td>{index + 1}</td>
                                      <td>Rs,{item.price}</td>
                                      <td>{item.quantity}</td>
                                      <td>{item.date}</td>
                                      <td>{item.status}</td>
                                      <td>
                                        <Link
                                          href={`/admin/View_Order?token_num=${item.token_num}`}
                                        >
                                          <button className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800">
                                            View Details
                                          </button>
                                        </Link>
                                      </td>
                                    </tr>
                                  );
                                })
                              ) : (
                                <tr>
                                  <td colSpan="8">No data available</td>
                                </tr>
                              )}
                          </tbody>
                        </table>
                      )}
                  </div>
                </div>


              </Dlayout>
            </>
          )
          }
        </>)}
      {
        !(session?.user?.image === "admin") && (
          <div className="notLogin">
            <NotLogin type="admin" />
          </div>
        )
      }

    </>
  );
};

export default dashboard;
