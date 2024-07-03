import Layout from "@/components/Layout";
import server from "@/axois/server";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import NotLogin from "../components/NotLogin";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import Tost from "@/components/Tost";
import Image from "next/image";
import Spinner from "@/components/Spinner";
import { useDispatch } from "react-redux";
import { increment } from "@/store/slice/cartCounter";
import axios from "axios";
import { upperCase } from "@/components/CapitalFun";



const menu = ({ products, isproduct }) => {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const numberPagination = ['1', '2', '3', '4', '5'];

  const changePage = async (num) => {
    console.log(num);
    setPage(num);
    try {
      const res = await server.get(`api/product?${page}`);


    } catch (error) {

    }
  }
  //Store Cart Local Storage
  const storeDataLocal = (id, name, price) => {
    if (session && session?.user?.image === 'user') {

      const cartItem = { id, name, price, quantity: 1 };

      let isNew = true;
      const data =
        JSON.parse(localStorage.getItem(`${session.user.name + session.user.email}`)) || [];
      data.map((obj, i) => {

        if (obj.id === id) {
          data[i].quantity += parseInt(cartItem.quantity);
          isNew = false;
        }
      });
      if (isNew) {
        dispatch(increment());
        data.push(cartItem);
      }
      localStorage.setItem(`${session.user.name + session.user.email}`, JSON.stringify(data));

      toast.success("Success Cart Added!");

    } else {
      toast.error("Please Login!",);
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }
  }


  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const [current, setCurrent] = useState("all_menu");


  const handleClick = (menuItem) => {
    setCurrent(menuItem);
  };

  const router = useRouter();
  const { data: session } = useSession();

  const addcart = async (id) => {
    console.log("product id", id);
    if (session?.user?.image === "user") {
      const user_id = session?.user?.email;


      const response = await server.post('/api/cart', { id, user_id });
      console.log(id, user_id);
      if (response.status === 200) {
        // toast.success(`${response.data.message}`);
      } else {
        // toast.error(`${response.data.message}`);
      }

    } else {
      toast.error("Please Login!");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }

  };

  // Update the state variable
  let category = router.query.category || "";
  useEffect(() => {
    if (category != "") {
      setCurrent(category);
    }
  }, []);






  const runderDiv = () => {
    switch (current) {
      case "all_menu":

        return (
          <>
            {products && products.length > 0 ? (
              products.map((item, index) => {
                return (
                  <div
                    data-aos="zoom-out"
                    className="box_shadow p-2 rounded-lg shadow dark:bg-surface-dark dark:text-white  "
                    key={index}
                  >
                    <div className="flex flex-col items-center">
                      <div className="mb-3">
                        <Image
                          className="rounded-full h-32 w-32 sm:h-40 sm:w-40"
                          src={`/uploads/${item.image}`}
                          alt={item.description}
                          width={200}
                          height={200}
                        />
                      </div>

                      <div className="info_product  text-center">
                        <h2 className="font-bold">{upperCase(item.name)}</h2>
                        <p className="ml-2">Rs.{item.price}</p>
                        <div className="flex justify-center items-center mb-2">
                          <p className="">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                          </p>

                        </div>
                        <div>
                          <button onClick={() => { storeDataLocal(item.id, item.name, item.price) }} className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">
                            Add Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })) : (
              <i><p className="text-center">Product Not Found !</p></i>
            )}
          </>
        );

      case "shorma":
        return (
          <>
            {products && products.length > 0 ? (
              products
                .filter((item) => item.category === "shorma")
                .map((item, index) => (
                  <div
                    data-aos="zoom-out"
                    className="box_shadow p-2 rounded-lg shadow dark:bg-surface-dark dark:text-white"
                    key={index}
                  >
                    <div className="flex flex-col items-center">
                      <div className="mb-3">
                        <Image
                          className="rounded-full h-32 w-32 sm:h-40 sm:w-40"
                          src={`/uploads/${item.image}`}
                          alt={item.description}
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="info_product text-center">
                        <h2 className="font-bold">{upperCase(item.name)}</h2>
                        <p className="ml-2">Rs. {item.price}</p>
                        <div className="flex justify-center items-center mb-2">
                          <p className="">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                          </p>

                        </div>
                        <div>
                          <button
                            onClick={() => storeDataLocal(item.id, item.name, item.price)}
                            className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <i><p className="text-center">Product Not Found !</p></i>
            )}
          </>
        );
      case "momo":
        const momoproduct = products?.filter((item) => item.category === "momo");
        return (
          <>
            {momoproduct &&
              momoproduct.length > 0 ? (
              momoproduct.map((item, index) => {
                return (
                  <div
                    data-aos="zoom-out"
                    className="box_shadow p-2 rounded-lg shadow dark:bg-surface-dark dark:text-white  "
                    key={index}
                  >
                    <div className="flex flex-col items-center">
                      <div className="mb-3">
                        <Image
                          className="rounded-full h-32 w-32 sm:h-40 sm:w-40"
                          src={`/uploads/${item.image}`}
                          alt={item.description}
                          width={200}
                          height={200}
                        />
                      </div>

                      <div className="info_product  text-center">
                        <h2 className="font-bold">{upperCase(item.name)}</h2>
                        <p className="ml-2">Rs.{item.price}</p>
                        <div className="flex justify-center items-center mb-2">
                          <p className="">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                          </p>

                        </div>
                        <div>
                          <button onClick={() => { storeDataLocal(item.id, item.name, item.price) }} className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">
                            Add Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })) : (
              <i><p className="text-center">Product Not Found !</p></i>
            )}
          </>
        );
      case "burger":
        const burgerProducts = products?.filter((item) => item.category === "burger");
        return (
          <>

            {burgerProducts && burgerProducts.length > 0 ? (
              burgerProducts.map((item, index) => (
                <div
                  data-aos="zoom-out"
                  className="box_shadow p-2 rounded-lg shadow dark:bg-surface-dark dark:text-white"
                  key={index}
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-3">
                      <Image
                        className="rounded-full h-32 w-32 sm:h-40 sm:w-40"
                        src={`/uploads/${item.image}`}
                        alt={item.description}
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="info_product text-center">
                      <h2 className="font-bold">{upperCase(item.name)}</h2>
                      <p className="ml-2">Rs. {item.price}</p>
                      <div className="flex justify-center items-center mb-2">
                        <p className="">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star-o" aria-hidden="true"></i>
                        </p>

                      </div>
                      <div>
                        <button
                          onClick={() => storeDataLocal(item.id, item.name, item.price)}
                          className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <i><p className="text-center">Product Not Found !</p></i>
            )}
          </>
        );
      case "pizza":
        const pizzaProduct = products?.filter((item) => item.category === "pizza");
        return (
          <>
            {pizzaProduct &&
              pizzaProduct.length > 0 ?

              pizzaProduct.map((item, index) => {
                return (
                  <div
                    data-aos="zoom-out"
                    className="box_shadow p-2 rounded-lg shadow dark:bg-surface-dark dark:text-white  "
                    key={index}
                  >
                    <div className="flex flex-col items-center">
                      <div className="mb-3">
                        <Image
                          className="rounded-full h-32 w-32 sm:h-40 sm:w-40"
                          src={`/uploads/${item.image}`}
                          alt={item.description}
                          width={200}
                          height={200}
                        />
                      </div>

                      <div className="info_product  text-center">
                        <h2 className="font-bold">{upperCase(item.name)}</h2>
                        <p className="ml-2">Rs.{item.price}</p>
                        <div className="flex justify-center items-center mb-2">
                          <p className="">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                          </p>

                        </div>
                        <div>
                          <button onClick={() => { storeDataLocal(item.id, item.name, item.price) }} className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">
                            Add Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }) : (
                <i><p className="text-center">Product Not Found !</p></i>
              )}
          </>
        );

      default:
        return <div className="text-center">Product Not Found !</div>;
    }
  };
  return (
    <Layout>
      <Tost />
      <div className="flex justify-center items-center">
        <div className="menu_container p-2">
          <h1 className="text-center text-3xl font-bold">Our Menu</h1>
          <div className="w-full m-auto  ">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400  ">
              <li
                className={`${current === "all_menu"
                  ? 'rounded-lg active aria-current="page" '
                  : ""
                  }hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer me-2 inline-block px-4 py-3 rounded-lg text-black`}
                onClick={() => handleClick("all_menu")}
              >
                All Menu
              </li>
              <li
                className={`hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer me-2 inline-block px-4 py-3 text-black  rounded-lg `}
                onClick={() => handleClick("shorma")}
              >
                Shorma
              </li>
              <li
                className={`hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer me-2 inline-block px-4 py-3 text-black  rounded-lg `}
                onClick={() => handleClick("burger")}
              >
                Burger
              </li>
              <li
                className={`hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer me-2 inline-block px-4 py-3 text-black   rounded-lg  last`}
                onClick={() => handleClick("momo")}
              >
                Momo
              </li>
              <li
                className={`hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer me-2 inline-block px-4 py-3 text-black   rounded-lg  `}
                onClick={() => handleClick("pizza")}
              >
                Pizza
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="show product h-screen">
        {
          isproduct ? <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
              {runderDiv()}
            </div>
          </> :
            <>
              <Spinner />
            </>
        }
        <>

        </>
      </div>
      <div>{products.stargazers_count}</div>
      <div className="flex justify-center item">
        <nav aria-label="Page navigation example">
          <ul class="flex items-center -space-x-px h-8 text-sm">
            {
              numberPagination.map((item, index) => (
                <li key={index}>
                  <button key={index} onClick={() => changePage(item)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{item}</button>
                </li>
              ))
            }


          </ul>
        </nav>
      </div>


    </Layout>
  );
};
export async function getServerSideProps() {
  try {
    // Fetch data from external API
    const response = await axios.get('http://localhost:3000/api/product');
    const products = response.data;


    return {
      props: { products, isproduct: true }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { products: [] } // Return an empty array or handle the error as appropriate
    };
  }
}
export default menu;
