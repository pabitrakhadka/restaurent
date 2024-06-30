import Dlayout from '@/components/Dlayout'
import React, { useEffect, useState } from 'react'
import ImageAdd from '@/components/ImageAdd'

import Tost from '@/components/Tost';
import { toast } from 'react-toastify';
import server from '@/axois/server';
import Spinner from '@/components/Spinner';

const slider = () => {
    const [loading, setLoading] = useState(true);
    const [loadimage, setloadImage] = useState([]);
    const loadImage = async () => {
        const res = await server.get('/api/sliderImage');
        if (res.status === 200) {

            setloadImage(res.data);
            setLoading(false);
        }
    }
    useEffect(() => {
        loadImage();
    }, [])
    const [imageUpload, setImageUpload] = useState(null);
    const [image, setImage] = useState("");

    const hendelSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("image", image);
        console.log("data", data);

        try {
            const res = await server.post('/api/sliderImage', data);
            if (res.status === 200) {

                toast.success(`${res.data.message}`);
                setImageUpload(false);
            } else {
                toast.error(`${error}`);
            }
        } catch (error) {
            toast.error(`${error}`);
        }

    }
    const deleteImage = async (id, index) => {
        const res = await server.delete(`/api/sliderImage?id=${id}`);
        if (res.status === 200) {
            const updatedProducts = loadimage.filter((item, i) => i !== index);
            setloadImage(updatedProducts);
            toast.success(`${res.data.message}`);
        }
    }

    return (
        <>  <Dlayout>
            {loading ? <>
                <Spinner />
            </> : <>

                <Tost />
                <div>
                    <button onClick={() => setImageUpload(true)} className='text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800'>Add Image</button>
                    <h1>Slider Image</h1>


                    {imageUpload ? <div className="uploadImage">
                        <div>
                            <form onSubmit={hendelSubmit} className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Choose Image,</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline"
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                                <div>
                                    <button className="bg-rose-500 text-white text-center px-5 py-3" type="submit">
                                        Upload Image
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div> : <>

                        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3'>
                            {
                                loadimage && loadimage.map((item, index) => (
                                    <div key={index} className='cartImage box_shadow p-2 rounded-lg  dark:text-white '>

                                        <div className="cart ">
                                            <div className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg">
                                                <img
                                                    src={`/uploads/${item.image}`}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            <div className="body_cart flex justify-center items-center ">
                                                <button onClick={() => deleteImage(item.id, index)} className=' mt-2 text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800'>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                    </>}

                </div>

            </>}
        </Dlayout>
        </>

    )
}

export default slider