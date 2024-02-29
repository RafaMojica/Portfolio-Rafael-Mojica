"use client";

import Link from "next/link";
import React, { useState } from "react";
import useScroll from "@/hook/useScroll";
import { Menu, RM, CloseX } from "@/common/Icons";
import socialNetworks from "@/data/socialNetworks";
import IconButton from "@/common/IconButton";

const Navbar = () => {
  const scroll = useScroll(90);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={
        !scroll
          ? "fixed w-full h-20 shadow-xl shadow-secondary/20  z-[100] bg-background"
          : "fixed w-full h-20 z-[100] "
      }
    >
      <section className="flex justify-between items-center w-full h-full px-2 lg:px-16">
        <Link href="/">
          <RM />
        </Link>
        <div>
          <ul className="hidden md:flex font-semibold gap-10">
            <li className="relative before:block before:h-[2px] before:bg-secondary before:absolute before:w-full before:-bottom-1 before:origin-bottom-right before:transition before:duration-300 before:scale-x-0 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-secondary">
              <Link href="/">Inicio</Link>
            </li>
            <li className="relative before:block before:h-[2px] before:bg-secondary before:absolute before:w-full before:-bottom-1 before:origin-bottom-right before:transition before:duration-300 before:scale-x-0 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-secondary">
              <Link href="/#about">Sobre mí</Link>
            </li>
            <li className="relative before:block before:h-[2px] before:bg-secondary before:absolute before:w-full before:-bottom-1 before:origin-bottom-right before:transition before:duration-300 before:scale-x-0 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-secondary">
              <Link href="/#skills">Stack</Link>
            </li>
            <li className="relative before:block before:h-[2px] before:bg-secondary before:absolute before:w-full before:-bottom-1 before:origin-bottom-right before:transition before:duration-300 before:scale-x-0 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-secondary">
              <Link href="/#projects">Proyectos</Link>
            </li>
            <li className="relative before:block before:h-[2px] before:bg-secondary before:absolute before:w-full before:-bottom-1 before:origin-bottom-right before:transition before:duration-300 before:scale-x-0 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-secondary">
              <Link href="/#contact">Contacto</Link>
            </li>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <Menu width="30" height="30" />
          </div>
        </div>
      </section>

      {/* Mobile Menu */}

      <section
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-7 bg-background ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <RM />
            </Link>
            <div className="cursor-pointer" onClick={handleNav}>
              <CloseX width="30" height="30" />
            </div>
          </div>
          <div className="border-b border-secondary mt-5">
            <p className="w-[85%] md:w-[98%] py-2 text-sm">
              Construyamos algo juntos
            </p>
          </div>
          <div className="flex flex-col mt-9">
            <ul className="flex flex-col text-sm uppercase gap-6">
              <li>
                <Link onClick={() => setNav(false)} href="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link onClick={() => setNav(false)} href="/#about">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link onClick={() => setNav(false)} href="/#skills">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link onClick={() => setNav(false)} href="/#projects">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link onClick={() => setNav(false)} href="/#contact">
                  Contacto
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <ul className="flex flex-wrap items-center gap-3 justify-center my-4 mx-auto w-[85%]">
                {socialNetworks.map(({ name, href, Icon }) => {
                  return (
                    <IconButton key={`${name}`} href={`${href}`}>
                      <Icon width="24" height="24" />
                    </IconButton>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
