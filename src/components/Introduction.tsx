"use client";

import React from "react";
import { ArrowDown } from "@/icons/ArrowDown";
import Link from "next/link";
import useScroll from "@/hook/useScroll";
import Layout from "@/common/Layout";
import IconButton from "@/common/IconButton";
import { SOCIAL_NETWORKS_INTRODUCTION } from "@/data/socialNetworks";

const Introduction = () => {
  const scroll = useScroll(90);

  return (
    <Layout id="introduction" className="h-screen">
      <div className="relative h-screen flex justify-center items-center text-center">
        <header className="flex flex-col gap-6 col-span-2">
          <p className="uppercase text-sm sm:text-base tracking-widest text-description dark:text-dark-description">
            Construyamos algo juntos
          </p>
          <h1 className="font-bold text-primary dark:text-dark-primary">
            <span className="text-secondary dark:text-dark-secondary">
              {" "}
              Rafael Mojica
            </span>
            <span className="pt-5 block text-primary dark:text-dark-primary">
              Full-Stack Web Developer
            </span>
          </h1>
          <p className="text-description sm:max-w-[70%] m-auto text-sm sm:text-lg dark:text-dark-description">
            A través de este espacio, espero poder compartir contigo mi pasión,
            experiencia y conocimientos en el mundo IT.
          </p>
          <ul className="flex items-center justify-between gap-2 md:gap-3 max-w-[400px] m-auto py-2">
            {SOCIAL_NETWORKS_INTRODUCTION.map(({ name, href, Icon }) => {
              return (
                <IconButton
                  key={`${name}`}
                  href={`${href}`}
                  className="hover:text-background dark:hover:text-dark-background"
                >
                  <Icon />
                </IconButton>
              );
            })}
          </ul>
        </header>
        <footer
          className={
            scroll ? "absolute left-[41%] md:left-[47%] bottom-5" : "hidden"
          }
        >
          <Link href="/#about">
            <ArrowDown
              width="60"
              height="60"
              strokeWidth="1"
              className="animate-bounce text-secondary dark:text-dark-secondary"
            />
          </Link>
        </footer>
      </div>
    </Layout>
  );
};

export default Introduction;
