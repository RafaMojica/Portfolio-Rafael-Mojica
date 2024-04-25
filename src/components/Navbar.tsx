"use client";

import Link from "next/link";
import React, { useState } from "react";
import useScroll from "@/hook/useScroll";
import Layout from "@/common/Layout";
import { RM } from "@/icons/RM";
import { Menu } from "@/icons/Menu";
import { CloseX } from "@/icons/CloseX";
import { Sun } from "@/icons/Sun";
import { Moon } from "@/icons/Moon";
import { FlagCol } from "@/icons/FlagCol";
import { FlagUsa } from "@/icons/FlagUsa";
import { CONTACTS, SOCIAL_NETWORKS } from "@/data/socialNetworks";

const Navbar = () => {
  const scroll = useScroll(90);
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("spanish");

  // useEffect(() => {
  //   theme === "dark"
  //     ? document.documentElement.classList.add("dark")
  //     : document.documentElement.classList.remove("dark");
  // }, [theme]);

  return (
    <header
      className={
        !scroll
          ? "fixed w-full h-16 z-[100] backdrop-blur-xl shadow-xl shadow-dGradientPrimary/10"
          : "fixed w-full h-16 z-[100]"
      }
    >
      <Layout
        id="navbarDesktop"
        className="h-full flex justify-between items-center"
      >
        <div className="flex h-full justify-start items-center lg:basis-40">
          <Link href="/" aria-label="Logo portafolio web">
            <RM className="text-white" />
          </Link>
        </div>
        <nav className="flex items-center justify-center gap-4 md:gap-8">
          <button
            role="button"
            onClick={() => {
              setLanguage((prevTheme) =>
                prevTheme === "spanish" ? "english" : "spanish"
              );
            }}
          >
            {language === "spanish" ? <FlagUsa /> : <FlagCol />}
          </button>
          <ul className="hidden lg:flex gap-8 justify-center items-center">
            <li className="UnderlineEffect">
              <Link href="">Inicio</Link>
            </li>
            <li className="UnderlineEffect">
              <Link href="/#experience">Experiencia</Link>
            </li>
            <li className="UnderlineEffect">
              <Link href="/#projects">Proyectos</Link>
            </li>
            <li className="UnderlineEffect">
              <Link href="/#aboutMe">Sobre mí</Link>
            </li>
            <li className="UnderlineEffect">
              <Link href="/#skills">Habilidades</Link>
            </li>
          </ul>
          <button
            role="button"
            onClick={() => {
              setTheme((prevTheme) =>
                prevTheme === "light" ? "dark" : "light"
              );
            }}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <button
            role="button"
            className="lg:hidden"
            onClick={() => setNav(!nav)}
          >
            <Menu />
          </button>
        </nav>
        <div className="hidden lg:flex h-full justify-end items-center lg:basis-40">
          <Link
            href={`${CONTACTS.cv.href}`}
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 rounded-full font-medium text-dSecondary hover:text-dBg duration-300 ease-in-out
          bg-gradient-to-b from-dGradientPrimary/80 to-dGradientSecondary/80
          hover:from-dGradientPrimary hover:to-dGradientSecondary"
          >
            Descargar CV
          </Link>
        </div>
      </Layout>

      {/* Mobile Menu */}

      <Layout
        id="navbarMobile"
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] p-7 ease-in duration-500 sm:w-[60%] md:w-[45%] h-screen bg-dBg"
              : "fixed left-[-100%] top-0 p-7 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/" aria-label="Logo portafolio web">
              <RM className="text-white" />
            </Link>
            <button role="button" onClick={() => setNav(!nav)}>
              <CloseX />
            </button>
          </div>
          <div className="mt-5 text-dSecondary border-b border-dGradientPrimary">
            <p className="w-[85%] md:w-[98%] py-2 text-sm">
              Construyamos algo juntos
            </p>
          </div>
          <nav className="flex flex-col mt-9 gap-6">
            <ul className="flex flex-col text-sm gap-5">
              <li className="text-dSecondary">
                <Link onClick={() => setNav(false)} href="">
                  Inicio
                </Link>
              </li>
              <li className="text-dSecondary">
                <Link onClick={() => setNav(false)} href="/#experience">
                  Experiencia
                </Link>
              </li>
              <li className="text-dSecondary">
                <Link onClick={() => setNav(false)} href="/#projects">
                  Proyectos
                </Link>
              </li>
              <li className="text-dSecondary">
                <Link onClick={() => setNav(false)} href="/#aboutMe">
                  Sobre mí
                </Link>
              </li>
              <li className="text-dSecondary">
                <Link onClick={() => setNav(false)} href="/#skills">
                  Habilidades
                </Link>
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-3 justify-center my-4 mx-auto w-[85%]">
              {SOCIAL_NETWORKS.map(({ name, href, Icon }) => {
                return (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`enlace a la red social ${name}`}
                    className="p-[2px] rounded-full bg-gradient-to-b from-dGradientPrimary to-dGradientSecondary hover:scale-110 duration-500 ease-in-out"
                  >
                    <div className="bg-dBg p-4 text-white hover:text-black rounded-full hover:bg-gradient-to-b hover:from-dGradientPrimary hover:to-dGradientSecondary">
                      <Icon className="w-5 h-5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </Layout>
    </header>
  );
};

export default Navbar;
