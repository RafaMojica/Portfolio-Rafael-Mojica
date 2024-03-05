import Layout from "@/common/Layout";
import IconButton from "@/common/IconButton";
import STACK from "@/data/stack";
import React from "react";

const Skills = () => {
  return (
    <Layout id="skills" className="pt-11">
      <h2 className="text-center text-secondary font-bold">Habilidades</h2>
      <ul className="flex flex-wrap justify-center items-center gap-5 pt-12">
        {STACK.map(({ name, href, Icon }) => {
          return (
            <IconButton key={name} href={href}>
              <Icon />
            </IconButton>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Skills;
