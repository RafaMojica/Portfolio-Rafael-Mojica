"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import useScroll from "@/hook/useScroll";
import IconButton from "@/common/IconButton";
import { SOCIAL_NETWORKS_INTRODUCTION } from "@/data/socialNetworks";
import { RM } from "@/icons/RM";
import { Menu } from "@/icons/Menu";
import { CloseX } from "@/icons/CloseX";
import { Sun } from "@/icons/Sun";
import { Moon } from "@/icons/Moon";

const Navbar = () => {
  const scroll = useScroll(90);
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <header
      className={
        !scroll
          ? "fixed w-full h-16 shadow-xl backdrop-blur-xl shadow-secondary/20 z-[100] dark:shadow-dark-secondary/20"
          : "fixed w-full h-16 z-[100] "
      }
    >
      <section className="flex justify-between items-center w-full h-full px-2 lg:px-16">
        <Link href="/">
          <RM className="fill-primary dark:fill-dark-primary" />
        </Link>
        <nav className="flex gap-2 md:gap-7">
          <ul className="hidden md:flex gap-8 justify-center items-center">
            <li
              className="relative text-primary before:block before:h-[2px] before:bg-secondary before:absolute before:w-full before:-bottom-1 before:origin-bottom-right before:transition before:duration-300 before:scale-x-0 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-secondary 
              dark:before:bg-dark-secondary dark:hover:text-dark-secondary dark:text-dark-primary"
            >
              <Link href="/">Inicio</Link>
            </li>
            <li
              className="relative text-primary before:block before:h-[2px] before:bg-secondary  before:absolute before:w-full before:-bottom-1 before:origin-bottom-right before:transition before:duration-300 before:scale-x-0 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-secondary 
              dark:before:bg-dark-secondary dark:hover:text-dark-secondary dark:text-dark-primary"
            >
              <Link href="/#about">Sobre mí</Link>
            </li>
            <li
              className="relative text-primary before:block before:h-[2px] before:bg-secondary  before:absolute before:w-full before:-bottom-1 before:origin-bottom-right before:transition before:duration-300 before:scale-x-0 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-secondary 
              dark:before:bg-dark-secondary dark:hover:text-dark-secondary dark:text-dark-primary"
            >
              <Link href="/#projects">Proyectos</Link>
            </li>
            <li
              className="relative text-primary before:block before:h-[2px] before:bg-secondary  before:absolute before:w-full before:-bottom-1 before:origin-bottom-right before:transition before:duration-300 before:scale-x-0 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:text-secondary 
              dark:before:bg-dark-secondary dark:hover:text-dark-secondary dark:text-dark-primary"
            >
              <Link href="/#skills">Habilidades</Link>
            </li>
          </ul>
          <button
            onClick={() => {
              setTheme((prevTheme) =>
                prevTheme === "light" ? "dark" : "light"
              );
            }}
          >
            {theme === "light" ? (
              <Moon
                className="stroke-gray-400 fill-gray-400"
                aria-label="Moon"
              />
            ) : (
              <Sun
                className="stroke-yellow-400 fill-yellow-400"
                aria-label="Sun"
              />
            )}
          </button>
          <div className="md:hidden" onClick={() => setNav(!nav)}>
            <Menu className="stroke-primary dark:stroke-dark-primary" />
          </div>
        </nav>
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-7 bg-gradient-to-b from-slate-50 from-70% to-blue-200 dark:bg-gradient-to-b dark:from-gray-950 dark:from-70% dark:to-blue-950 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <RM className="fill-primary dark:fill-dark-primary" />
            </Link>
            <div className="cursor-pointer" onClick={() => setNav(!nav)}>
              <CloseX className="stroke-primary dark:stroke-dark-primary" />
            </div>
          </div>
          <div className="text-primary dark:text-dark-primary border-b border-secondary dark:border-dark-secondary mt-5">
            <p className="w-[85%] md:w-[98%] py-2 text-sm">
              Construyamos algo juntos
            </p>
          </div>
          <nav className="flex flex-col mt-9">
            <ul className="flex flex-col text-sm uppercase gap-6">
              <li className="text-primary dark:text-dark-primary">
                <Link onClick={() => setNav(false)} href="/">
                  Inicio
                </Link>
              </li>
              <li className="text-primary dark:text-dark-primary">
                <Link onClick={() => setNav(false)} href="/#about">
                  Sobre Mí
                </Link>
              </li>
              <li className="text-primary dark:text-dark-primary">
                <Link onClick={() => setNav(false)} href="/#projects">
                  Proyectos
                </Link>
              </li>
              <li className="text-primary dark:text-dark-primary">
                <Link onClick={() => setNav(false)} href="/#skills">
                  Habilidades
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <div className="flex flex-wrap items-center gap-3 justify-center my-4 mx-auto w-[85%]">
                {SOCIAL_NETWORKS_INTRODUCTION.map(({ name, href, Icon }) => {
                  return (
                    <IconButton key={`${name}`} href={`${href}`}>
                      <Icon width="24" height="24" />
                    </IconButton>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
