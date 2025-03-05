import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";
import axios from "axios";

const Footer = () => {
  const [footer, setFooter] = useState([]);
  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooter(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getFooter();
  }, []);

const cart = useSelector((state) => state.cart);

  return (

<div>
<Link href="/cart">

            <span className="absolute bottom-10 left-10 bg-black text-white rounded-30">
              <FaShoppingCart
                className={`hover:text-primary transition-all cursor-pointer`}
              />
              <span className="w-8 h-8 text-xs grid place-content-center rounded-full bg-primary absolute -top-2 -right-3 text-black font-bold">
                {cart.products.length === 0 ? "0" : cart.products.length}
              </span>
 </span>
  </Link>
           
        
  

 <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <a  target="_blank" rel="noreferrer">
                <i className="fa fa-map-marker"></i>
                <span className="inline-block ml-2">Gaithersburg MD</span>
              </a>
              <div>
                <i className="fa fa-phone"></i>
                <a
                  className="inline-block ml-2"
                  href={`tel:+19087977164`}
                >
                +19087977164
                </a>
              </div>
              <a href={`mailto:${footer?.email}`}>
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">{footer?.email}</span>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]"></Title>
            <p className="mt-3">{footer?.desc}</p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              {footer?.socialMedia?.map((item, index) => (
                <a
                  href={item.link}
                  className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-white hover:bg-primary transition-all transform hover:scale-110 "
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">Sunday - Friday
                </span>
              </div>
              <div>
                <span className="inline-block ml-2">
                  
                  8 a.m. to 9 p.m.
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2025 All Rights Reserved By Authentic African Cuisine
        </p>
      </div>
</div>
</div>
  );
};

export default Footer;
