import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="h-auto md:h-96 w-full bg-indigo-950 flex flex-col md:flex-row justify-around items-center py-2  md:px-2 py-2">
        <div className="w-full md:w-1/3 flex justify-center items-center md:items-center">
          <div>
            <ul className="text-center md:text-left">
              <li className="py-1">
                <h1 className="text-white md:px-1 text-3xl">Contact Us</h1>
              </li>
              <li className="py-1">
                <a className="text-white hover:text-rose-600" href="">
                  <i className="fa fa-map-marker px-2 text-xl" aria-hidden="true"></i>
                  Location
                </a>
              </li>
              <li className="py-1">
                <a className="text-white hover:text-rose-600" href="">
                  <i className="fa fa-phone px-2 text-xl" aria-hidden="true"></i>
                  Call +9779800000000
                </a>
              </li>
              <li className="py-1">
                <a className="text-white hover:text-rose-600" href="">
                  <i className="fa fa-envelope px-2 text-xl" aria-hidden="true"></i>
                  screstaurent@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center md:items-start">
          <div>
            <h3 className="text-white md:px-1 text-3xl text-center md:text-center">
              Sc Restaurant
            </h3>
            <p className="text-white text-center md:text-center">
              Necessary, making this the first true generator on the Internet. It
              uses a dictionary of over 200 Latin words, combined with
            </p>
            <ul className="text-white flex justify-center md:justify-center items-center py-5">
              <li className="px-3">
                <a className="" href="">
                  <i className="fa fa-facebook-official hover:text-rose-600 text-2xl" aria-hidden="true"></i>
                </a>
              </li>
              <li className="px-3">
                <a className="" href="">
                  <i className="fa fa-twitter hover:text-rose-600 text-2xl" aria-hidden="true"></i>
                </a>
              </li>
              <li className="px-3">
                <a className="" href="">
                  <i className="fa fa-linkedin hover:text-rose-600 text-2xl" aria-hidden="true"></i>
                </a>
              </li>
              <li className="px-3">
                <a className="" href="">
                  <i className="fa fa-whatsapp hover:text-rose-600 text-2xl" aria-hidden="true"></i>
                </a>
              </li>
              <li className="px-3">
                <a className="" href="">
                  <i className="fa fa-instagram hover:text-rose-600 text-2xl" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <p className="text-white text-center">
              © 2024 All Rights Reserved By Sc Restaurant
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center md:items-center">
          <div>
            <h5 className="text-white md:px-1 text-3xl">Opening Hours</h5>
            <p className="text-white text-center md:text-center">Everyday</p>
            <p className="text-white text-center md:text-center">10.00 AM - 10.00 PM</p>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
