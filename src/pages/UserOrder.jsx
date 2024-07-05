
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Layout from '@/components/Layout';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useState } from 'react';
import NotLogin from "../components/NotLogin";
import server from '@/axois/server';
import Uispinner from '@/components/Uispinner';
import Link from 'next/link';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';


const UserOrder = () => {


  const { data: session, status } = useSession();
  const [count, setCount] = useState();
  const steps = [
    'Accept',
    'Food Ready',
    'Delebery Men Received',
    'Food in Your Door',
    'Complete'
  ];

  const [message, setMessage] = useState();
  const [token, setToken_num] = useState('');
  const [orderItem, setOrderItem] = useState([]);

  function groupBy(array) {
    const groupedData = {};
    array.forEach(item => {
      const keyValue = item['token_num'];
      if (groupedData[keyValue]) {
        groupedData[keyValue].push(item);
      } else {
        groupedData[keyValue] = [item];
      }
    });
    return Object.values(groupedData);
  }
  const loadOrderItems = async () => {
    const res = await server.get("/api/viewOrder");
    if (res.status === 200) {

      const orders = groupBy(res.data);
      setOrderItem(orders);
    } else {
      console.log("Error");
    }
  }



  useEffect(() => {
    if (status === "authenticated") {
      loadOrderItems();
    } else {

    }

  }, [])
  const router = useRouter();
  return (
    <Layout>
      {orderItem.length > 0 ? <>
        <>
          {status === 'authenticated' ? (<> {session?.user?.email && (
            <div className=' table-responsive overflow-x-auto w-full flex justify-center items-center m-auto px-2 py-2'>
              <div className='  shadow p-5'>
                <h1>Your Order Status</h1>
                <p><i>Delightful! Happiness delivered. Enjoy the journey, embrace the joy. Thank you for choosing us!</i></p>

                <div>
                  <img className='max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800' height={80} width={80} src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="" />
                </div>
                <div className="name_show">
                  <h2 className='text-2xl font-bold p-2'>Hello,{session?.user?.name}</h2>
                </div>
                <div className="show_details relative overflow-x-auto">
                  <table class=" table-responsive overflow-x-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Product Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Rate
                        </th>
                        <th>Quantity</th>
                        <th scope="col" class="px-6 py-3">Total Price</th>
                        <th scope="col" class="px-6 py-3">Order Number</th>
                        <th scope="col" class="px-6 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderItem &&
                        orderItem.map((itemGroup, index) => (
                          <React.Fragment key={index}>
                            {itemGroup && itemGroup.map((item, itemIndex) => (
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={itemIndex}>
                                <td class="px-6 py-4">{item.product.name}</td>
                                <td class="px-6 py-4"> {item.price}</td>
                                <td class="px-6 py-4">{item.quantity}</td>
                                <td class="px-6 py-4">RS. {item.price * item.quantity}</td>
                                <td class="px-6 py-4">{item.token_num}</td>
                                <td class="px-6 py-4">{item.date}</td>
                              </tr>

                            ))}
                            <tr className="p-3">
                              <td colSpan={6}>
                                <div className="order_status_box">
                                  <Box sx={{ width: '100%' }}>

                                    <Stepper
                                      activeStep={steps.findIndex((step) => step === itemGroup[0].status)}
                                      alternativeLabel
                                    >
                                      {steps.map((label, labelIndex) => (
                                        <Step key={labelIndex}>
                                          <StepLabel>{label}</StepLabel>
                                        </Step>
                                      ))}
                                    </Stepper>
                                  </Box>
                                </div>
                              </td>
                            </tr>
                          </React.Fragment>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>


          )}
            {!session?.user?.email && <>
              <div className="notLogin">
                <NotLogin />
              </div>
            </>}</>) : (<>
              <Uispinner />
              <NotLogin />
            </>)}
        </>
      </> : <>
        <div className="w-96 h-96 mx-auto flex items-center">
          <div className="flex items-center mx-auto justify-center box_shadow p-10 ">
            <div>
              <h2 className="mt-5 font-bold text-3xl">No any Order ?</h2>
              <div className="mt-5 mx-3 px-10"> <Uispinner /></div>
              <div className="my-5">
                <Button onClick={() => { router.push("/cart") }} className=" button mx-3">Please Add Order ?</Button >
              </div>
            </div>
          </div>
        </div>
      </>}
    </Layout>
  )
}

export default UserOrder







