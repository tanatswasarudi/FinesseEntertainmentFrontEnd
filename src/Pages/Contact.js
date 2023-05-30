import React, { useState } from "react";
import bgImage from "../Assets/about.jpg";
import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { toast } from "react-hot-toast";
import { FaWhatsappSquare } from "react-icons/fa";
import {BsFacebook} from 'react-icons/bs';

const Contact = () => {
  const [data, setData] = useState({
    name: " ",
    email: "",
    phone: "",
    message: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = data;
    if (name && email && phone && message) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DORMIN}/send`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();
      console.log(fetchRes);
      toast(fetchRes.message);
      alert("Message Sent");
      setData(() => {
        return {
          name: " ",
          email: "",
          phone: "",
          message: "",
        };
      });
    } else {
      toast("Enter Missing Fields");
    }
  };

  return ( 
    <div
      className="bg-cover bg-center h-full min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="py-20 px-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="text-cyan-500 ">
          <h1 className="text-2xl relative inline font-bold">
            Contact Us
            <span className="absolute left-1/2 bg-cyan-600 -bottom-2 -translate-x-1/2 h-[1px] w-[100px]"></span>
          </h1>
          <p className="text-gray-700 py-3">
              <span className="flex flex-row items-center cursor-pointer hover:text-yellow-500"><MdEmail/><strong>Email:</strong>finesseentertainment@gmail.com</span><br/>
              <span className="flex flex-row items-center cursor-pointer hover:text-yellow-500"><BsFacebook /><strong>Facebook: </strong>FinesseEntertainment</span><br/>
              <span className="flex flex-row items-center cursor-pointer hover:text-yellow-500"><FaWhatsappSquare /><strong>WhatsApp:</strong>+918264420815</span><br/>
              </p>
        </div>
        <form
          className="text-black items-center w-[400px] bg-slate-500 font-semibold shadow drop-shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="py-3 px-3 w-full">
            <label htmlFor="name" className="text-lg">
              Your Name{" "}
              <span className="text-md text-blue-200">(required)</span>
            </label>
            <div className="flex items-center bg-slate-300 border-red-600 focus:border mt-2 w-[360px] h-10">
              <span>
                <FaUserTie className="text-xl flex" />
              </span>
              <input
                type={"text"}
                name="name"
                id="name"
                placeholder="johnDoe12"
                className=" flex items-center bg-slate-300 outline-none"
                onChange={handleOnChange}
                value={data.name}
              />
            </div>
          </div>
          <div className="w-full py-3  px-3">
            <label htmlFor="email" className="text-lg">
              Your Email{" "}
              <span className="text-md text-blue-200">(required)</span>
            </label>
            <div className="bg-slate-300 mt-2 flex items-center w-[360px] border-red-600 focus:border h-10">
              <span>
                <MdEmail className="text-xl flex " />
              </span>
              <input
                type={"email"}
                name="email"
                id="email"
                placeholder="johnDoe@gmail.com"
                className="flex items-center bg-slate-300 outline-none"
                onChange={handleOnChange}
                value={data.email}
              />
            </div>
          </div>
          <div className="w-full py-3  px-3">
            <label htmlFor="phone" className="text-lg">
              Your Phone{" "}
              <span className="text-md text-blue-200">(required)</span>
            </label>
            <div className="bg-slate-300 mt-2 flex items-center w-[360px] border-red-600 focus:border h-10">
              <span>
                <IoMdCall className="text-xl flex " />
              </span>
              <input
                type={"number"}
                name="phone"
                id="id"
                placeholder="+263 123456789"
                className="flex items-center bg-slate-300 outline-none"
                onChange={handleOnChange}
                value={data.phone}
              />
            </div>
          </div>
          <div className="w-full py-3  px-3">
            <label htmlFor="message" className="text-lg">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell Us What You Think"
              rows="6"
              className="mt-2 flex items-center w-[360px] bg-slate-300 border-red-600 focus:border "
              onChange={handleOnChange}
              value={data.message}
            ></textarea>
          </div>
          <div className="py-3 px-3">
            <button className="bg-teal-600 text-white hover:bg-teal-950 hover:text-black duration-300 w-full rounded py-2 ">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
