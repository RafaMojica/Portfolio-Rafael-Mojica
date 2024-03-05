import React from "react";
import Layout from "@/common/Layout";
// import ProjectItem from "../common/ProjectItem";
// import dataProject from "../utils/dataProject"

const Projects = () => {
  return (
    <Layout id="projects">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-center text-secondary font-bold">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* {dataProject.map( project =>
            <ProjectItem key={project.name} project={project} />
          )} */}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
