import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import NavLogo from '../public/assets/img/LogoRM-Black.png'
import SocialNetworks from "../common/SocialNetworks";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100] bg-background" : "fixed w-full h-20 z-[100]"}>
      <div className="flex justify-between items-center w-full h-full px-2 lg:px-16">
        <Link href="/">
          <Image src={NavLogo} alt="Logo RM" width="60" height="60"/>
        </Link>
        <div>
          <ul className="hidden md:flex uppercase">
            <li className="ml-10 text-sm hover:text-secondary">
              <Link href="/">Inicio</Link>
            </li>
            <li className="ml-10 text-sm hover:text-secondary">
              <Link href="/#about">Sobre Mí</Link>
            </li>
            <li className="ml-10 text-sm hover:text-secondary">
              <Link href="/#skills">Habilidades</Link>
            </li>
            <li className="ml-10 text-sm hover:text-secondary">
              <Link href="/#projects">Proyectos</Link>
            </li>
            <li className="ml-10 text-sm hover:text-secondary">
              <Link href="/#contact">Contacto</Link>
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
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-background p-10 ease-in duration-500" 
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <Image src={NavLogo} alt="Logo Pagina RM" width="60" height="60"/>
            </Link>
            <div className='rounded-full shadow-lg shadow-shodowGrey400 p-3 cursor-pointer' onClick={handleNav}>
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="border-b border-secondary my-5">
            <p className="w-[85%] md:w-[98%] py-3">Construyamos algo juntos</p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li className="py-4 text-sm">
                <Link onClick={() => setNav(false)} href="/">Inicio</Link>
              </li>
              <li className="py-4 text-sm">
                <Link onClick={() => setNav(false)} href="/#about">Sobre Mí</Link>
              </li>
              <li className="py-4 text-sm">
                <Link onClick={() => setNav(false)} href="/#skills">Habilidades</Link>
              </li>
              <li className="py-4 text-sm">
                <Link onClick={() => setNav(false)} href="/#projects">Proyectos</Link>
              </li>
              <li className="py-4 text-sm">
                <Link onClick={() => setNav(false)} href="/#contact">Contacto</Link>
              </li>
            </ul>
            <div className="pt-2">
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <SocialNetworks size={0} padding={3} animation={"none"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
