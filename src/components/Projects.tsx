import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/common/Layout";
import MainTitle from "@/common/MainTitle";
import Card from "@/common/Card";
import { ExternalLink } from "@/icons/ExternalLink";
import { PROJECTS } from "@/data/project";

const Projects = () => {
  return (
    <Layout
      id="projects"
      className="pt-11 md:pt-20 flex flex-col gap-11 md:gap-20"
    >
      <MainTitle title="Proyectos" />
      <div className="grid md:grid-cols-2 gap-8 xl:gap-12 justify-center items-center">
        {PROJECTS.map(({ name, web, description, image, technologies }) => {
          return (
            <Card key={name}>
              <div className="flex justify-center items-center gap-2 text-dSecondary text-2xl md:text-3xl font-medium">
                <h3>{name}</h3>
                {web && (
                  <Link href={web} target="_blank" rel="noreferrer">
                    <ExternalLink className="hover:stroke-dGradientPrimary" />
                  </Link>
                )}
              </div>
              <p
                className="text-dPrimary leading-6 md:leading-8 text-sm sm:text-lg"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <Image src={image} alt={`logo del proyecto ${name}`} />
              <div className="flex flex-wrap justify-center items-center gap-3 pt-3">
                {technologies.map(({ name }) => {
                  return (
                    <span
                      key={name}
                      className={`text-xs md:text-sm px-4 md:px-5 py-1 rounded-full text-dSecondary/80 bg-dPrimary/10 border-dPrimary/40 border`}
                    >
                      {name}
                    </span>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;
