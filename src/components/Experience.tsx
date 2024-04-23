import React from "react";
import Layout from "@/common/Layout";
import MainTitle from "@/common/MainTitle";
import Image from "next/image";
import Card from "@/common/Card";
import { EXPERIENCE } from "@/data/experience";

const Experience = () => {
  return (
    <Layout
      id="experience"
      className="pt-11 md:pt-20 flex flex-col gap-11 md:gap-20"
    >
      <MainTitle title="Experiencia" />
      <div className="grid md:grid-cols-2 gap-8 xl:gap-12 justify-center items-center">
        {EXPERIENCE.map(({ name, logo, position, duration, tasks }) => {
          return (
            <Card key={name}>
              <Image src={logo} alt={`Foto Empresa ${name}`} />
              <div className="flex flex-col gap-1 font-medium text-center">
                <h3 className="text-dSecondary text-base sm:text-xl">
                  {position}
                </h3>
                <p className="text-dPrimary/80 text-sm">{duration}</p>
              </div>
              <ul className="flex flex-col self-start gap-5 list-inside list-disc text-dPrimary text-xs sm:text-base">
                {tasks.map((task, index) => {
                  return (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: task }}
                    />
                  );
                })}
              </ul>
            </Card>
          );
        })}
      </div>
    </Layout>
  );
};

export default Experience;
