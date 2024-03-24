import React from "react";
import Layout from "@/common/Layout";
import Project from "@/common/Project";
import { PROJECTS } from "@/data/project";

const Projects = () => {
  return (
    <Layout id="projects">
      <h2 className="text-center text-secondary dark:text-dark-secondary font-bold pb-20">
        Proyectos
      </h2>
      <div className="flex flex-col gap-5">
        {PROJECTS.map((project) => {
          return <Project key={project.name} {...project} />;
        })}
      </div>
    </Layout>
  );
};

export default Projects;
