
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useFormik } from "formik";
import { registerDataValidate, signUpSchemas } from "@/schemas";
import Link from "next/link";
import server from "@/axois/server";

const initialValues = {
  name: "",
  phone: "",
  address: "",
  email: "",
  password: "",
  confirm_password: ""
}

const Register = () => {
  const router = useRouter();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchemas,
      onSubmit: async (values) => {
        try {
          const res = await server.post("api/user", values);

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
              router.push("/login");
            }, 2000);
          }
          else {
            console.error("Unexpected response:", res);
            toast.error("Unexpected response from server", {
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
          console.error("Error submitting form:", error);
          toast.error("Error submitting form", {
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
    })



  return (
    <Layout>
      <ToastContainer />
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex justify-center">
          <form className="bg-white shadow-md rounded px-8 pt-5 pb-8 mb-4 w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none" id="name" type="text" placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.name && touched.name ? (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
              <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none" id="phone" type="text" placeholder="Phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.phone && touched.phone ? (
                <p className="text-red-500 text-xs italic">{errors.phone}</p>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
              <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none" id="address" type="text" placeholder="Address"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.address && touched.address ? (
                <p className="text-red-500 text-xs italic">{errors.address}</p>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none" id="email" type="email" placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.email && touched.email ? (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              ) : null}
            </div>
            <div className="flex justify-around items-center">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none" id="password" type="password" placeholder="Enter Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                {errors.password && touched.password ? (
                  <p className="text-red-500 text-xs italic">{errors.password}</p>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">Confirm Password</label>
                <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none" id="confirm_password" type="password" placeholder="Confirm Password"
                  name="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="text-red-500 text-xs italic">{errors.confirm_password}</p>
                ) : null}
              </div>
            </div>
            <button className="text-lg bg-rose-600 text-white hover:bg-rose-700 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full">Sign Up</button>
            <p className="text-center mt-4">
              Have an account? <a className="text-blue-500 hover:text-blue-800" href="/login">Log in</a>
            </p>
          </form>
        </div>
      </div>



    </Layout >
  );
};

export default Register;
