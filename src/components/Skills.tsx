import React from "react";
import Layout from "@/common/Layout";
import MainTitle from "@/common/MainTitle";
import IconButton from "@/common/IconButton";
import { STACK } from "@/data/stack";

const Skills = () => {
  return (
    <Layout id="skills" className="pb-12 md:pb-16">
      <MainTitle title="Habilidades" />
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
