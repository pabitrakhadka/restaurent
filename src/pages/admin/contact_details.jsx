import Dlayout from "@/components/Dlayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Spinner from "@/components/Spinner";
import Tost from "@/components/Tost";
const contact_details = () => {
  const [loading, setLoading] = useState(true);

  //delete contact 
  const contactDelete = async (e, id, index) => {
    e.preventDefault();
    const text = 'Can You Delete ?';
    if (confirm(text) == true) {
      const res = await axios.delete(`http://localhost:3000/api/about?id=${id}`)
      if (res.status === 200) {
        toast.success(`${res.data.message}`);
        const updateContact_data = contact.filter((data, i) => i != index);
        setContact(updateContact_data);
      } else {
        toast.error("Please Login!",);
      }
    } else {

    }
  }
  const [contact, setContact] = useState([]);
  const loadContact = async () => {
    const res = await axios.get("/api/about");
    if (res.status === 200) {

      setContact(res.data);
      setLoading(false);
    }
  };
  useEffect(() => {
    loadContact();
  }, []);
  return (
    <Dlayout>
      <Tost />
      {
        loading ? <>
          <Spinner />
        </> :
          <> <h1>Contact details</h1>
            <div className="">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr >
                    <th className="px-6 py-3" scope="col">Id</th>
                    <th className="px-6 py-3" scope="col">Name</th>
                    <th className="px-6 py-3" scope="col">Email</th>
                    <th className="px-6 py-3" scope="col">Subject</th>
                    <th className="px-6 py-3" scope="col">Message</th>
                    <th className="px-6 py-3" scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contact && contact.length > 0 ? (
                    contact.map((data, index) => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">{data.name}</td>
                        <td className="px-6 py-4">
                          <a href={`mailto:${data.email}`}>{data.email}</a>
                        </td>
                        <td className="px-6 py-4">{data.subject}</td>
                        <td className="px-6 py-4">{data.message}</td>
                        <td className="px-6 py-4">
                          <button onClick={(e) => contactDelete(e, data.id, index)} className="btn bg-danger text-white mx-2 button">Delete</button>
                          <button className="btn bg-success button"><Link className="text-white" href={`mailto:${data.email}`}>Reply</Link></button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center pt-5">No Record Found !</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
      }
    </Dlayout >
  );
};

export default contact_details;
