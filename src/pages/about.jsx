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
      {/* <div className="flex justify-center items-center md:w-full flex-col-reverse md:p-3 xl:p-5">
        <div className="md:p-3  sm:p-5">
          <h1 className="text-3xl font-bold">About Us</h1>
          <h1 className="text-3xl font-bold">Making People Happy</h1>
          <h1 className="text-3xl font-bold">Through Food</h1>
          <p class="mb-4 mt-0    leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            libero iste quod quibusdam maxime recusandae odit eveniet,
            aspernatur culpa provident error molestiae vitae corporis in vero
            est! Beatae, ipsum voluptatibus.
          </p>
          <p data-aos="fade-up" className="mb-4 mt-0">
            Our menu features a variety of mouthwatering dishes that are sure to
            satisfy any appetite. From our signature shrimp and grits to our
            succulent fried chicken, each dish is made with the freshest
            ingredients sourced from local farms and markets.
          </p>
          <p data-aos="fade-up" className="mb-4 mt-0">
            The ambiance at SC Restaurant is warm and inviting, with cozy booths
            and a rustic decor that pays homage to the rich history and culture
            of the region. Whether you're celebrating a special occasion or
            simply looking for a delicious meal, our attentive and friendly
            staff will ensure that your dining experience is unforgettable.
          </p>
          <p data-aos="fade-up" className="mb-4 mt-0">
            In addition to our regular menu, we also offer a range of seasonal
            specials and craft cocktails that are sure to delight your taste
            buds. So come on in and join us for a taste of true southern
            hospitality at SC Restaurant."
          </p>
        </div>
        <div>
          <Image placeholder="blur"
            quality={100}
            blurDataURL="blur"
            width={800}
            height={800}

            src="https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.jpg?s=612x612&w=0&k=20&c=EDqQ0oBcpFGV25p61vWUF5N-6lRJdbmZmQMe5kyuxyA="
            alt=""
          />
        </div>
      </div> */}


      <div class="flex flex-col lg:flex-row justify-around items-center">
        <div class="w-full lg:w-1/2">
          <h2 className="p-2 text-3xl font-bold">Contact Us</h2>
          <form onSubmit={handleSubmit} class=" space-y-4">
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
            <button
              type="submit"
              className="button "
            >
              Send
            </button>
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
