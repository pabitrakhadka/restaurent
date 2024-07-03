import Layout from "@/components/Layout";
import axios from "axios";
import React, { useState } from "react";
import { contactform } from "@/schemas";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";
import "aos/dist/aos.css";
const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const router = useRouter();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactform,
      onSubmit: async (values) => {
        const res = await axios.post("/api/about", values);

        if (res.status === 200) {
          toast.success(`Thanks You For feed Back`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
          });
          values.name = "";
          values.email = "";
          values.subject = "";
          values.message = "";
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


  return (
    <Layout>
      <ToastContainer />
      <div class="flex flex-col md:flex-row justify-center items-center px-10 w-full h-screen">
        <div class="w-full md:w-1/3 mb-8 md:mb-0">
          <h1 class="font-bold text-3xl mb-4">About Our Story</h1>
          <p class="text-gray-700">Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="my-5">
            <Link href="/Menu" className="button mx-3">View Our Menu</Link >
          </div>
        </div>
        <div class="w-full md:w-auto md:ml-5">
          <img src="/photos/back.jpeg" class="overflow-hidden" width={500} height={500} alt="About Our Story" />
        </div>
      </div>



      <div class="flex flex-col lg:flex-row justify-around items-center">
        <div class="w-full lg:w-1/2">
          <h2 className="p-2 text-3xl font-bold">Contact Us</h2>
          <form onSubmit={handleSubmit} class=" space-y-4 p-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="text-red-800 ">{errors.name}</p>
              ) : null}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              />
              {errors.email && touched.email ? (
                <p className="text-red-800 ">{errors.email}</p>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              />
              {errors.subject && touched.subject ? (
                <p className="text-red-800 ">{errors.subject}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="message">Enter Message</label>
              <textarea
                placeholder="Message"
                rows="6"
                name="message"
                class="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              {errors.message && touched.message ? (
                <p className="text-red-800 ">{errors.message}</p>
              ) : null}
            </div>
            <div className="text-center"> <button
              type="submit"
              className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 "
            >
              Send
            </button></div>
          </form>
        </div>
        <div className="mt-4 lg:mt-0">
          <h1 className="text-xl lg:text-2xl font-bold">About Our Restaurent</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, commodi?
            Address: Tulsipur,Dang
          </p>
          <p className="mt-2">Submit Form or Call Us</p>
          <p className="mt-2">  Phone.9800000000</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
