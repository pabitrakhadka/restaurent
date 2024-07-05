import Dlayout from "@/components/Dlayout";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
import server from "@/axois/server";
import Spinner from "@/components/Spinner";
import Tost from "@/components/Tost";

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const [admin, setAdmin] = useState([]);

  const load = async () => {
    try {

      const res = await server.get("/api/admin");
      console.log(res.data);
      setAdmin(res.data.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    load();
  }, []);
  const router = useRouter();
  const editAdmin = (id) => {
    console.log("edit id", id);
    router.push(`/admin/addAdmin?id=${id}`);
  };

  const deleteAdmin = async (id, index) => {

    try {
      if (confirm("Do You Want to Delete !")) {

        const res = await server.delete(`/api/admin?id=${id}`);
        if (res && res.data.status) {
          const updateAdmin = admin.filter((data, i) => i !== index);
          setAdmin(updateAdmin);
          toast.success(`${res.data.message}`);
        } else {
          toast.error(`${res.data.message}`);
        }
      }




    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Dlayout>
      <Tost />

      {loading ? <>
        <Spinner />
      </>
        :
        <>
          <div>

            {/* <Link className=" mb-2 bg-rose-500 text-white px-5 py-3 rounded-full" href={"/admin/addAdmin"} >Add Admin</Link> */}
            <div className="">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                  <th scope="col">S.N</th>
                  <th scope="col" class="px-6 py-3">Name</th>
                  <th scope="col" class="px-6 py-3">Email</th>
                  <th scope="col" class="px-6 py-3">Phone</th>
                  {/* <th scope="col" class="px-6 py-3">Password</th> */}
                  {/* <th colSpan={2} scope="col" class="px-6 py-3">
                    Action
                  </th> */}
                </tr>
                <tbody>
                  {admin && admin.map((adminData, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">{adminData.name}</td>
                      <td className="px-6 py-4">{adminData.email}</td>
                      <td className="px-6 py-4">{adminData.phone}</td>


                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </>}
    </Dlayout>
  );
};

export default Admin;
