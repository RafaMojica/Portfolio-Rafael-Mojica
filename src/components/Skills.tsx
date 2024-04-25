import React from "react";
import Layout from "@/common/Layout";
import MainTitle from "@/common/MainTitle";
import { STACK } from "@/data/skills";

const Skills = () => {
  return (
    <Layout
      id="skills"
      className="pt-11 md:pt-20 flex flex-col gap-11 md:gap-20"
    >
      <MainTitle title="Habilidades" />
      <div className="max-w-5xl m-auto">
        <div className="flex flex-wrap justify-center items-center gap-5">
          {STACK.map(({ name, Icon }) => {
            return (
              <span key={name}>
                <div
                  className={`text-primary rounded-full p-4 md:p-5 cursor-pointer  hover:scale-110 hover:bg-secondary ease-in duration-300
                 dark:hover:bg-dark-secondary shadow-lg shadow-shadow dark:shadow-dark-shadow dark:bg-dark-button/50 dark:text-dark-primary`}
                >
                  <Icon />
                </div>
              </span>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
