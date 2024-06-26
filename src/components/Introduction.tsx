"use client";

import React from "react";
import Layout from "@/common/Layout";
import useScroll from "@/hook/useScroll";
import LinkButton from "@/common/LinkButton";
import { ArrowDown } from "@/icons/ArrowDown";
import { SOCIAL_NETWORKS } from "@/data/socialNetworks";

const Introduction = () => {
  const scroll = useScroll(90);

  return (
    <Layout
      id="introduction"
      className="h-screen flex flex-col items-center justify-center"
    >
      <header className="mt-16 h-[calc(100vh-50px-64px)] flex items-center justify-center">
        <div className="flex flex-col gap-6 text-center">
          <p className="uppercase text-xs sm:text-base tracking-widest text-dPrimary">
            Construyamos algo juntos
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dGradientPrimary to-dGradientSecondary">
              Rafael Mojica
            </span>
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dSecondary to-dPrimary">
              Full-Stack Web Developer
            </span>
          </h2>
          <p className="text-sm sm:max-w-[70%] sm:text-lg m-auto text-dPrimary">
            A través de este espacio, espero poder compartir contigo mi pasión,
            experiencia y conocimientos en el mundo IT.
          </p>
          <div className="flex items-center justify-between gap-2 md:gap-3 max-w-[400px] m-auto">
            {SOCIAL_NETWORKS.map(({ name, href, Icon }) => {
              return (
                <LinkButton key={name} href={href} name={name}>
                  <Icon />
                </LinkButton>
              );
            })}
          </div>
        </div>
      </header>
      <footer className="h-[60px]">
        <div className={scroll ? "visible" : "hidden"}>
          <ArrowDown className="animate-bounce" />
        </div>
      </footer>
    </Layout>
  );
};

export default Introduction;
