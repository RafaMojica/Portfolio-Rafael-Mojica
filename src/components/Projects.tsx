import React from "react";
import Layout from "@/common/Layout";
import Project from "@/common/Project";
import { PROJECTS } from "@/data/project";

const Projects = () => {
  return (
    <Layout id="projects">
      <h2 className="text-center text-secondary font-bold">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        {PROJECTS.map((project) => {
          return <Project key={project.name} {...project} />;
        })}
      </div>
    </Layout>
  );
};

export default Projects;
