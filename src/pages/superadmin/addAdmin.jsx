// import Dlayout from "@/components/Dlayout";
import Dlayout from "@/components/Dlayout";
import React, { useState } from "react";
import { useRouter } from 'next/router'
import { toast } from "react-toastify";
import { useEffect } from "react";
import Tost from "@/components/Tost";
import server from "@/axois/server";
import SuperLayout from "@/components/SuperLayout";
import axios from "axios";



const Addadmin = () => {
  const router = useRouter();
  const { query } = useRouter();
  const id = query.id;
  useEffect(() => {
    if (id) {
      loadEditData(id);
    }
  }, [id])
  const loadEditData = async (id) => {
    const res = await server.get(`/api/admin?id=${id}`);

    if (res.status === 200) {
      const adminData = res.data.data[0];
      console.log(adminData.name);
      setAdmin({
        name: adminData.name,
        email: adminData.email,
        phone: adminData.phone,

      });
    }
  };
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const handelInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdmin((pr) => ({ ...pr, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("admin data =", admin);
    try {
      const res = id
        ? await axios.put(`/api/superadmin/superadmin?id=${id}`, admin)
        : await axios.post(`/api/superadmin/superadmin`, admin);

      console.log("admin data=", admin);
      console.log('Response message:', res.data.message);

      if (res.data.status === 200) {
        toast.success(`${res.data.message}`);
        setTimeout(() => {
          router.push('/superadmin/admin');
        }, 3000);
      } else {
        toast.error(`${res.data.message}`);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(`${error.response.data.message}`);
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };


  return (
    <>
      <SuperLayout>
        <Tost />
        <h1>Add Admin</h1>
        <div className="">
          <form className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitForm}>
            <div className="mb-4   ">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="floatingInput">Name</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline"
                id="floatingInputname"
                required
                placeholder="name"
                name="name"
                value={admin.name}
                onChange={handelInputChange}
              />

            </div>
            <div className="mb-4 ">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="floatingInput">Email</label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline"
                id="floatingInputemail"
                required
                placeholder="enter email"
                value={admin.email}
                onChange={handelInputChange}
                name="email"
              />

            </div>
            <div className="mb-4 ">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="floatingInput">Phone</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline"
                id="floatingInputnumber"
                required
                placeholder="enter Phone Number"
                value={admin.phone}
                onChange={handelInputChange}
                name="phone"
              />

            </div>
            <div className="mb-4 ">
              <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="floatingPassword">Password</label>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline"
                id="floatingPassword"
                required
                placeholder="Password"
                value={admin.password}
                onChange={handelInputChange}
                name="password"
              />

            </div>
            {id ? (
              <button className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800" type="submit">
                Update Admin
              </button>
            ) : (
              <button className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800" type="submit">
                Add Admin
              </button>
            )}
          </form>
        </div>

      </SuperLayout>
    </>
  );
};
export default Addadmin;
