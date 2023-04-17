import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Start = () => {
  return (
    <div id="start" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">Logremos algo juntos</p>
          <h1 className="py-4 text-gray-700">Hola, yo soy <span className="text-[#5651e5]"> Rafael</span></h1>
          <h1 className="py-2 text-gray-700">Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            A través de este espacio, espero poder compartir contigo mi pasión,
            experiencia y conocimientos en el mundo IT.
          </p>
          <div className="flex items-center justify-between max-w-[400px] m-auto py-4">
            <a href="https://www.linkedin.com/in/rafamojica/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn size={20} />
              </div>
            </a>
            <a href="https://github.com/RafaMojica" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub size={20} />
              </div>
            </a>
            <a href="https://instagram.com/rafa_mojica_" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaInstagram size={20} />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={20} />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsTelephoneFill size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
