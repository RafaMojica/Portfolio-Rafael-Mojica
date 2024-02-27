"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import LinkNetworks from "@/common/LinkNetworks";
import {
  ArrowDown,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Mobil,
} from "@/common/Icons";

const Introduction = () => {
  const [arrow, setArrow] = useState(true);

  useEffect(() => {
    const handleArrow = () => {
      if (window.scrollY >= 90) {
        setArrow(false);
      } else {
        setArrow(true);
      }
    };
    window.addEventListener("scroll", handleArrow);
  }, []);

  return (
    <div id="introduction" className="w-full h-screen text-center">
      <div className="relative max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm sm:text-base tracking-widest text-gray600">
            Construyamos algo juntos
          </p>
          <h1 className="py-4 text-gray700">
            Hola, soy <span className="text-secondary">Rafael Mojica</span>
          </h1>
          <h1 className="py-2 text-gray700">Full-Stack Web Developer</h1>
          <p className="py-4 text-gray600 sm:max-w-[70%] m-auto text-sm sm:text-lg">
            A través de este espacio, espero poder compartir contigo mi pasión,
            experiencia y conocimientos en el mundo IT.
          </p>
          <div className="flex items-center justify-between max-w-[400px] m-auto py-4">
            <LinkNetworks href="https://www.linkedin.com/in/rafamojica/">
              <Linkedin />
            </LinkNetworks>
            <LinkNetworks href="https://github.com/RafaMojica">
              <Github />
            </LinkNetworks>
            <LinkNetworks href="https://instagram.com/rafa_mojica_">
              <Instagram />
            </LinkNetworks>
            <LinkNetworks href="mailto:rafael.mojica27@gmail.com">
              <Mail />
            </LinkNetworks>
            <LinkNetworks href="https://wa.link/r6856s">
              <Mobil />
            </LinkNetworks>
          </div>
        </div>
        <div
          className={
            arrow ? "absolute left-[45%] md:left-[48%] bottom-5" : "hidden"
          }
        >
          <Link href="/#about">
            <ArrowDown className="animate-bounce text-secondary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
