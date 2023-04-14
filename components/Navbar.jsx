import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import NavLogo from '../public/assets/img/LogoRM-SinBackground.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={NavLogo} alt="Logo Pagina RM" width="60" height="60"/>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Inicio</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Acerca de</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Habilidades</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Projectos</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Contacto</Link>
            </li>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>


      {/* Mobile Menu */}

      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div className={
          nav 
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" 
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image src={NavLogo} alt="Logo Pagina RM" width="60" height="60"/>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer' onClick={handleNav}>
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="border-b border-gray-300 my-5">
            <p className="w-[85%] md:w-[98%] py-3">Construyamos algo legendario juntos</p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li className="py-4 text-sm">
                <Link href="/">Inicio</Link>
              </li>
              <li className="py-4 text-sm">
                <Link href="/">Acerca de</Link>
              </li>
              <li className="py-4 text-sm">
                <Link href="/">Habilidades</Link>
              </li>
              <li className="py-4 text-sm">
                <Link href="/">Projectos</Link>
              </li>
              <li className="py-4 text-sm">
                <Link href="/">Contacto</Link>
              </li>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest font-bold">Cuentame que necesitas</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsTelephoneFill />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />  
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
