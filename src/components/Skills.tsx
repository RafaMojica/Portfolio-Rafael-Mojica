import Layout from "@/common/Layout";
import IconButton from "@/common/IconButton";
import { STACK } from "@/data/stack";
import React from "react";

const Skills = () => {
  return (
    <Layout id="skills" className="pb-12 md:pb-16">
      <h2 className="text-center text-secondary dark:text-dark-secondary font-bold py-20">
        Habilidades
      </h2>
      <div className="max-w-5xl m-auto">
        <div className="flex flex-wrap justify-center items-center gap-5">
          {STACK.map(({ name, href, Icon }) => {
            return (
              <IconButton key={name} href={href}>
                <Icon />
              </IconButton>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
