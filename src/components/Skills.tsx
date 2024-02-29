import Layout from "@/common/Layout";
import IconButton from "@/common/IconButton";
import stack from "@/data/skills";
import React from "react";

const Skills = () => {
  return (
    <Layout id="skills">
      <h2 className="text-center text-secondary font-bold">Stack</h2>
      <ul className="flex flex-wrap justify-center items-center gap-5 pt-12">
        {stack.map(({ name, href, Icon }) => {
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
