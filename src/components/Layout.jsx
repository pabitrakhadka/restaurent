import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import ChatButton from "./ChatButton";
import Tost from "./Tost";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import ChatTop from "./ChatTop";
import Messages from "./Messages";
import SendMessage from "./SendMessage";


const Layout = ({ children }) => {

  const { isSelected } = useSelector(state => state.chatSlice.selectChat);

  return (
    <div>
      <Nav />
      <ChatButton />

      {isSelected && (
        <div className="z-10 right-20 top-15 fixed w-72 h-96 border overflow-hidden">
          <div class="card bg-[#fff] border ">
            <ChatTop />
            <div class="chat-window">
              <Messages />
            </div>
            <SendMessage />
          </div>

        </div>
      )}
      <Tost />
      <main className="bg-gray-100" style={{ minHeight: "100vh" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
