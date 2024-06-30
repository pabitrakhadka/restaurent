import Dlayout from "@/components/Dlayout";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import { toast } from "react-toastify";

import server from "@/axois/server";
import Spinner from "@/components/Spinner";
import Tost from "@/components/Tost";


const product = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [data, setData] = useState([]);
  const [category, setcategory] = useState('all_menu');
  //edit product
  const editproduct = (id) => {
    router.push(`/admin/addproduct?id=${id}`);
  };
  //delete product
  const deleteProduct = async (id, index) => {
    try {
      if (confirm("Do You Want to Delete !")) {
        const res = await server.delete(
          `/api/product?id=${id}`);
        if (res && res.status === 200) {
          const updatedProducts = data.filter((product, i) => i !== index);
          setData(updatedProducts);
          toast.success(`${res.data.message}`);
        }

        else {
          toast.error(`${res.data.message}`);
        }
      }
    } catch (error) {
      console.log(error);
    }

  };

  //get Product
  const loaddata = async () => {
    try {
      const res = await server.get(`/api/product?category=${category}`);

      if (res.status === 200) {
        setData(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loaddata();
  }, [category]);
  const handleStatusChange = (event) => {
    setcategory(event.target.value);

  };
  return (
    <Dlayout>
      <Tost />
      <Link className="bg-rose-500 px-4 py-2 mb-4 rounded text-white text-center" href='/admin/addproduct'>Add Product</Link>
      {loading ?
        <>
          <Spinner />
        </> :
        <>
          <div>

            <div>
              <div className="input_field">

                <select id="large" name="category" onChange={handleStatusChange} defaultValue='all_menu' class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                  <option value="all_menu">All Product</option>
                  <option value="momo">Momo</option>
                  <option value="pizza">Pizza</option>
                  <option value="shorma">Shorma</option>
                  <option value="burger">Burger</option>

                </select>
              </div>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="col">S.N</th>
                    <th scope="col">ProductName</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Photo</th>
                    <th colSpan={2} scope="col">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.length > 0 ?
                    data.map((item, index) => {
                      return (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                          <td className="px-6 py-4" >{index + 1}</td>
                          <td className="px-6 py-4" >{item.name}</td>
                          <td className="px-6 py-4">RS. {item.price}</td>
                          <td className="px-6 py-4">{item.description}</td>
                          <td className="px-6 py-4" >
                            <Image
                              className="object-cover"
                              src={`/uploads/${item.image}`}
                              alt={item.image}
                              width={70}
                              height={70}
                              layout="fixed"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <button
                              className=" bg-rose-500 text-white text-center py-2 px-3"
                              onClick={() => {
                                editproduct(item.id);
                              }}
                            >
                              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </button>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              className="bg-rose-500 text-white text-center py-2 px-3"
                              onClick={() => {
                                deleteProduct(item.id, index);
                              }}
                              type="button"
                            >
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    }) : (
                      <tr>
                        <td>No Product Available !</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>

        </>
      }
    </Dlayout>
  );
};

export default product;
