import Spinner from '@/components/Spinner'
import SuperLayout from '@/components/SuperLayout'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

import server from '@/axois/server'
const Index = () => {
  useEffect(() => {
    if (status == "authenticated") {
      console.log("user authenticateion");
    }
    loaddashData();
  });

  const Index = () => {
    const { data: session, status } = useSession();

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (status === "authenticated") {
        loaddashData();
      }
    }, [status]);

    const loaddashData = async () => {
      const res = await server.get("/api/dashData?dashData=dashData");
      if (res.status === 200) {
        setData(res.data.data)
        setLoading(false);
      }
    }

    return (
      <SuperLayout>
        {status === "unauthenticated" ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div>
            {loading ? (
              <Spinner />
            ) : (
              data && (
                <div className="flex flex-wrap justify-center text-center">
                  <div className="box_shadow p-4 flex-grow basis-80 m-2 text-center">
                    <h1 className="font-bold text-2xl">TotalProduct</h1>
                    <p className="font-bold text-gray">{data.TotalProduct}</p>
                  </div>
                  <div className="box_shadow p-4 flex-grow basis-1 m-2">
                    <h1 className="font-bold text-2xl">TotalOrder</h1>
                    <p className="font-bold text-gray">{data.TotalOrder}</p>
                  </div>
                  <div className="box_shadow p-4 flex-grow basis-80 m-2">
                    <h1 className="font-bold text-2xl">TotalUser</h1>
                    <p className="font-bold text-gray">{data.TotalUser}</p>
                  </div>
                  <div className="box_shadow p-4 flex-grow basis-80 m-2">
                    <h1 className="font-bold text-2xl">TotalProductDelevery</h1>
                    <p className="font-bold text-gray">{data.TotalProductDelevery}</p>
                  </div>
                  <div className="box_shadow p-4 flex-grow m-2">
                    <h1 className="font-bold text-2xl">Feedback</h1>
                    <p className="font-bold text-gray">{data.Feedback}</p>
                  </div>
                  <div className="box_shadow p-4 flex-grow basis-1 m-2">
                    <h1 className="font-bold text-2xl">PendingOrder</h1>
                    <p className="font-bold text-gray">{data.PendingOrder}</p>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </SuperLayout>
    )
  }
}

export default Index;
