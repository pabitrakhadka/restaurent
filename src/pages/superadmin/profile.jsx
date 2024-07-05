import server from "@/axois/server";
import Spinner from "@/components/Spinner";
import SuperLayout from "@/components/SuperLayout";
import Tost from "@/components/Tost";


import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [profile, setProfile] = useState(null);
  const { data: session } = useSession();
  const [showUploadComponent, setShowUploadComponent] = useState(false);

  const upperCase = (name) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const getAdminProfile = async () => {
    try {
      if (session?.user?.image === 'superadmin' && session?.user?.email) {
        const id = session.user.email;
        console.log(id)
        const res = await server.get(`/api/superadmin/superadmin?id=${id}`);
        if (res.status === 200) {
          console.log(res.data);
          setProfile(res.data.data);
          setImage(res.data.data[0].image);
          setLoading(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [loading, setLoading] = useState(true);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Perform logic to send image data to the server
      const formData = new FormData();
      formData.append("image", image);

      const id = session?.user?.email;

      const response = await server.put(`/api/admin?id=${id}&image=image`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        toast.success(`${response.data.message}`);
        router.push("/admin/profile");

      } else {
        toast.success(`${response.data.message}`);
        router.push("/admin/profile");
      }
      // console.log("Image uploaded successfully:", response.data);
      // Optionally, update the UI or show a success message
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error, show error message, etc.
    }
  };

  const uploadPhoto = () => {
    setShowUploadComponent(true);
  };

  useEffect(() => {
    getAdminProfile();
  }, [session?.user?.email]);

  return (
    <SuperLayout>
      <Tost />
      {
        loading ? <>
          <Spinner />
        </> :
          <>  <h1>Profile</h1>
            <div className="profile">
              {!showUploadComponent && (
                <>
                  <div className="image relative">
                    <img
                      src={`/uploads/${image}`} width={100} height={100}
                      alt=""
                      className="rounded-full hidden-15"
                    />
                    <h4>Change Image</h4>
                    <button onClick={uploadPhoto} className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800">
                      <i className="fa fa-upload"></i>
                    </button>
                  </div>


                  <div className="text mt-3">
                    {profile &&
                      profile.map((item, index) => (
                        <React.Fragment key={index}>
                          <p>Name: <b>{upperCase(item.name)}</b></p>
                          <p>Phone: <b>{item.phone}</b></p>
                          <p>Email: <b>{item.email}</b></p>
                        </React.Fragment>
                      ))}
                  </div>
                </>
              )}
              {showUploadComponent && (
                <UploadComponent
                  image={image}
                  onClose={() => setShowUploadComponent(false)}
                  onSubmit={handleSubmit}
                  onImageChange={(e) => setImage(e.target.files[0])}
                />
              )}
            </div></>
      }
    </SuperLayout>
  );
};

const UploadComponent = ({ image, onClose, onSubmit, onImageChange }) => {
  return (
    <div className="upload-component">
      <form className="block text-gray-700 text-sm font-bold mb-2" onSubmit={onSubmit} action="">
        {image && (
          <div className="navbar-brand">
            <h2>Selected Image</h2>
            <img
              src={URL.createObjectURL(image)} // Use URL.createObjectURL to display the selected image
              className="img-thumbnail"
              name="image"
              alt="Selected"
              height={100}
              width={100}
              style={{ maxWidth: "100%" }}
            />
          </div>
        )}
        <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline" type="file" onChange={onImageChange} />
        <button type="submit" className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800">Upload</button>
      </form>
      <button className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800" onClick={onClose}>Close</button>
    </div>
  );
};

export default Profile;
