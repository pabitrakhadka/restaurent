import React from "react";
import { useSession } from "next-auth/react";
import Tost from '@/components/Tost';

import Layout from "@/components/Layout";
import { toast } from "react-toastify";

const Component = () => {
  const { data: session, status } = useSession();

  const handleClick = () => {
    // Here you can use toast directly from react-toastify
    toast.error("Hello");
    toast.warning("Hello");

  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // If user is authenticated and session exists
  if (session) {
    return (
      <Layout>
        <h1>User Details</h1>
        <p>Id: {session.user.id}</p>
        <p>Name: {session.user.name}</p>
        <p>Image: {session.user.image}</p>
        <p>Email: {session.user.email}</p>
        <p>Token: {session.user.token}</p>
        <div> <button onClick={handleClick}>Success</button> </div>
        <Tost />
      </Layout>
    );
  } else {
    // If user is not authenticated
    return <div> <button onClick={handleClick}>Success</button> </div>;
  }
};

export default Component;
