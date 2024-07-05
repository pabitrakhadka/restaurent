import server from '@/axois/server';
import SuperLayout from '@/components/SuperLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const Admin = () => {
    const router = useRouter();
    const [admin, setAdmin] = useState([]);
    const [loading, setLoading] = useState(true);

    const load = async () => {
        try {
            const res = await server.get('/api/admin');
            console.log(res.data);
            setAdmin(res.data.data);
            console.log(res.data);

            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        load();
    }, []);


    const editAdmin = (id) => {
        router.push(`/superadmin/addAdmin?id=${id}`);
    };

    // Function to handle deleting admin
    const deleteAdmin = async (id, index) => {
        try {
            if (confirm('Do You Want to Delete!')) {
                const res = await server.delete(`/api/superadmin/superadmin?id=${id}`);
                if (res && res.data.status === 200) {
                    console.log(res.data.message);
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
        <SuperLayout>
            <div>
                <div>
                    <Link className="bg-rose-500 text-white px-3 py-3 rounded-full" href="/superadmin/addAdmin">
                        Add Admin
                    </Link>
                    <div className="">
                        <h1 className="mt-2">Manage Admin</h1>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="col">S.N</th>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Email</th>
                                    <th scope="col" className="px-6 py-3">Phone</th>
                                    <th scope="col" className="px-6 py-3">Password</th>
                                    <th colSpan={2} scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {admin && admin.map((adminData, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <td className="px-6 py-4">{adminData.name}</td>
                                        <td className="px-6 py-4">{adminData.email}</td>
                                        <td className="px-6 py-4">{adminData.phone}</td>
                                        <td className="px-6 py-4">**********</td>
                                        <td className="px-6 py-4">
                                            <button
                                                className="bg-rose-500 text-white px-5 py-3 rounded-full"
                                                onClick={() => {
                                                    editAdmin(adminData.id);
                                                }}
                                            >
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="bg-rose-500 text-white px-5 py-3 rounded-full"
                                                onClick={() => {
                                                    deleteAdmin(adminData.id, index);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </SuperLayout>
    );
};

export default Admin;
