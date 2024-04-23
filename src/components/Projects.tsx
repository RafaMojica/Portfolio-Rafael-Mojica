import React from "react";
import Layout from "@/common/Layout";
import Project from "@/common/Project";
import MainTitle from "@/common/MainTitle";
import { PROJECTS } from "@/data/project";

const Projects = () => {
  return (
    <Layout id="projects">
      <MainTitle title="Proyectos"/>
      <div className="flex flex-col gap-5">
        {PROJECTS.map((project) => {
          return <Project key={project.name} {...project} />;
        })}
      </div>
    </Layout>
  );
};

export default Projects;
