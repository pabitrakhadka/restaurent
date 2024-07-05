import Dlayout from "@/components/Dlayout";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Addproduct = () => {
  const router = useRouter();
  const { id } = router.query || null;
  const [image, setImage] = useState("");
  const [showimage, setShowImage] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [special, setSpecial] = useState(false);



  useEffect(() => {
    if (id) {
      const fetchData = async () => {

        const res = await axios.get(`/api/product?id=${id}`);

        if (res && res.status === 200 && res.data) {
          setProductName(res.data.name
          );
          setPrice(res.data.price);
          setDescription(res.data.description);
          setImage(res.data.image);
          setCategory(res.data.category
          )
        }
      };

      fetchData();
    }
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `/api/product`;
    const data = new FormData();
    data.append("name", productName);
    data.append("price", price);
    data.append("description", description);
    data.append("image", image);
    data.append("category", category);
    data.append("special", special ? "special_menu" : "menu");
    try {
      const method = id ? "put" : "post";
      let res; // declare res variable outside if block

      if (method === "put") {
        res = await axios.put(`/api/product?id=${id}`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },

        });
      } else {
        res = await axios.post(url, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
      }

      if (res.status === 200) {
        toast.success(`${res.data.message}`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          theme: "colored",
        });
        setTimeout(() => {
          router.push("/admin/product");
        }, 3000)
      } else {
        toast.error(`${res.data.message}`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          theme: "colored",
        });
      }

    } catch (err) {

      alert("server Error");
    }
  };
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setShowImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Dlayout>
      <ToastContainer />
      <div>
        <form onSubmit={handleSubmit} className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-3">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                {image ? (
                  <img
                    src={showimage}
                    alt="Selected Image"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                )}
                <input
                  id="dropzone-file"
                  onChange={handleFileChange}
                  name="image"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>

          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName"> Product Name</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline"
              id="floatingInput"
              placeholder="productName"
              name="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />

          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price Rs,</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline"
              id="price"
              placeholder="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline"
              id="des"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

          </div>
          <div className="pt-3">
            <select
              name="category"
              className="fshadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline"
              aria-label="Default select example"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value={""}>Select Category</option>
              <option value="momo">Momo</option>
              <option value="pizza">Pizza</option>
              <option value="shorma">Shorma</option>
              <option value="burger">Burger</option>
              <option value="shorma">Shorma</option>

            </select>
          </div>
          {id ? (
            <div></div>
          ) : (
            <div className="my-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialMenu">
                Special Menu
              </label>
              <input
                className=""
                type="checkbox"
                name="specialMenu"
                checked={special}
                onChange={(e) => setSpecial(e.target.checked)}
                id="flexCheckDefault"
              />

            </div>
          )}

          <div className="text-center m-2 text-white">
            {
              id ? (
                <button className="bg-rose-500 text-white text-center px-5 py-3" type="submit">
                  Update Product
                </button>
              ) : (<button className="bg-rose-500 text-white text-center px-5 py-3" type="submit">
                Add Product
              </button>)
            }


          </div>
        </form>
      </div>


    </Dlayout >
  );
};

export default Addproduct;