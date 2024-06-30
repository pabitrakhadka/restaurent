import server from '@/axois/server'
import ChatFront from '@/components/ChatFront'
import ChatHeader from '@/components/ChatHeader'
import ChatTop from '@/components/ChatTop'
import Layout from '@/components/Layout'
import Messages from '@/components/Messages'
import SendMessage from '@/components/SendMessage'
import { useSession } from 'next-auth/react'

const Chat = ({ admin_id }) => {

    { console.log("adimid=", admin_id) }
    const { data: session } = useSession();


    return (
        <>
            {session?.user?.email &&
                <div className='flex w-full h-screen  bg-zinc-800'>
                    <div>
                        <div className="  w-screen h-screen    bg-gray-100  ">
                            <ChatTop />
                            <Messages />
                            <SendMessage />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Chat
export async function getServerSideProps() {
    try {
        const res = await server.get(`${process.env.BASE_URL}/api/chatAdmin`);
        const admin_id = res.data.id;
        console.log("admin-id", admin_id);
        return {
            props: {
                admin_id
            }
        }
    } catch (error) {
        console.error("Error fetching sladmin_ider images:", error);
        return {
            props: {
                admin_id: null// Return empty array or handle accordingly
            }
        };
    }
}