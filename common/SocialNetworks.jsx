import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const SocialNetworks = ({size, padding}) => {
  return (
    <>
      <a href="https://www.linkedin.com/in/rafamojica/" target="_blank" rel="noreferrer" >
        <div className={`rounded-full shadow-lg shadow-shodowGrey400 p-${padding} cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-secondary hover:text-buttonTextMain`}>
          <FaLinkedinIn size={size} />
        </div>
      </a>
      <a href="https://github.com/RafaMojica" target="_blank" rel="noreferrer">
        <div className={`rounded-full shadow-lg shadow-shodowGrey400 p-${padding} cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-secondary hover:text-buttonTextMain`}>
          <FaGithub size={size} />
        </div>
      </a>
      <a href="https://instagram.com/rafa_mojica_" target="_blank" rel="noreferrer" >
        <div className={`rounded-full shadow-lg shadow-shodowGrey400 p-${padding} cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-secondary hover:text-buttonTextMain`}>
          <FaInstagram size={size} />
        </div>
      </a>
      <Link href="/#contact">
        <div className={`rounded-full shadow-lg shadow-shodowGrey400 p-${padding} cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-secondary hover:text-buttonTextMain`}>
          <AiOutlineMail size={size} />
        </div>
      </Link>
      <a href="https://wa.link/r6856s" target="_blank" rel="noreferrer">
        <div className={`rounded-full shadow-lg shadow-shodowGrey400 p-${padding} cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-secondary hover:text-buttonTextMain`}>
          <BsTelephoneFill size={size} />
        </div>
      </a>
    </>
  );
};

export default SocialNetworks;
