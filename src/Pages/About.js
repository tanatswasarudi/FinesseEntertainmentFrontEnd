import React from "react";
import bgImage from "../Assets/contact.jpg";
import { useSelector } from "react-redux";
import NewsFeature from "../components/NewsFeature";
import banner from "../Assets/banner.jpg"
import {  BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import {BsFillSpeakerFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
import {IoMdCall} from 'react-icons/io'


const About = () => {
  const DataProduct = useSelector((state) => state.product.productList);
  const homeProductCartListChairs = DataProduct.filter(el => el.category === "trending",[])
  console.log(homeProductCartListChairs)
  const connectWithWhatsApp = () => {
    // Replace the following with your WhatsApp number
    const phoneNumber = '+263 783-677-124';

    // Create the WhatsApp URL
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    // Open the WhatsApp URL
    window.open(url);
  }
  const phoneNumber = '+263 783-677-124'; // Replace with the desired recipient's phone number

  const handleCallRequest = () => {
    const message = 'Please call me back!'; // Customize the call request message
    const callUrl = `tel:${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(callUrl);
  };
  

  return (
    <div
      className="bg-cover min-h-screen bg-center h-full"
      style={{ backgroundImage: `url(${bgImage})` }}
  >  
  <div className=" justify center mb-4">
    <img src={banner} alt="" className="w-full"/>
  </div>
  <h1 className="text-white text-lg md:px-8 font-serif mt-2 mb-6">
          We are here to provide the best service <BsFillSpeakerFill className='text-2xl text-red-500'/>
          </h1>     

     <div className="py-10 md:px-8 grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full ">
       <div className="text-cyan-500 cursor-pointer  ">
        <Link to={""}>
            <h1 className="bg-slate-200 rounded shadow text-center md:text-3xl text-base font-bold">
            OUR BEST OFFERS  <span> </span>
           
          </h1>
         
          </Link>
          <h3 className="bg-slate-200 font-serif mt-2 mb-6  rounded hover:bg-slate-500 shadow cursor-pointer">
          <span className="text-cyan-500 mb-6"> Connect With Us</span> 
          <span className="flex flex-row items-center  font-serif " onClick={connectWithWhatsApp}><FaWhatsappSquare className="text-3xl text-green-500"/></span>
            
          </h3>
        

        </div>
        <div className="px-10">
        <p className="text-gray-500 md:px-10 ">
              <span className="flex flex-row items-center cursor-pointer font-serif hover:text-green-900"><MdEmail/><strong>Email:</strong>finesseentertainment@gmail.com</span><br/>
              <span className="flex flex-row items-center cursor-pointer font-serif hover:text-blue-500"><BsFacebook className="text-blue-500" /><strong>Facebook: </strong>FinesseEntertainment</span><br/>
              <ul>
              <li className="flex flex-row items-center font-serif hover:text-yellow-500 text-gray-500" onClick={handleCallRequest}><IoMdCall className="text-blue-500"/> <strong>Phone:</strong>+263 783-677-124</li>
              </ul>
              </p>
        </div>
        </div>
           
    <div className='flex flex-col justify-center items-center gap-5 py-20 overflow-scroll scrollbar-none scroll-smooth' >
          {
            homeProductCartListChairs.map(el=>{
              return(
                <NewsFeature
                key={el._id}
                id={el._id}
                name={el.name}
                category={el.category}
                image={el.image}
                price={el.price}
                description={el.description}
                />
              )
            })
           }
          
        </div>
    
   

    </div>
  );
};



export default (About)