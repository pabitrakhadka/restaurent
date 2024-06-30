

import server from "@/axois/server";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserId } from "@/store/slice/setUserSlice";

const UserChat = () => {
    function FirstLetter(name) {
        if (name.length > 0) {
            return name.charAt(0).toUpperCase();
        } else {
            return '';
        }
    }
    const dispatch = useDispatch();
    const [user, setUser] = useState([]);
    const loadData = async () => {
        const res = await server.get('/api/selectchatuser');
        if (res.status === 200) {
            console.log(res.data);
            setUser(res.data.data);
        }
    }
    useEffect(() => {
        loadData();
    }, [])

    const setUserid = (user_id, name) => {
        dispatch(setUserId({ user_id, name }));
    }
    return (
        <div>

            {user && user.map((item, index) => (
                <button onClick={() => setUserid(item.userid, item.user.user_name)} key={item.user_id} className='flex  mb-3 relative p-3'>

                    <div className="rounded-full bg-red-500 text-white font-bold text-2xl w-8 h-8 text-center" >  {FirstLetter(item.user.user_name)}
                    </div>
                    <span className='active_status w-2 h-2 bg-green-500 rounded-full absolute '></span>

                    <div className='px-2 '>
                        <h3 className='text-left text-white'>{item.user.user_name}</h3>

                    </div>
                </button >
            ))}

        </div >
    );
};

export default UserChat;
