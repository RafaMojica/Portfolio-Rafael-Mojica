import React from "react";
// import ProjectItem from "../common/ProjectItem";
// import dataProject from "../utils/dataProject"

const Projects = () => {
  return (
    <div id="projects" className="w-full px-2 py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto">
        <p className="uppercase text-xl tracking-widest text-secondary font-bold">
          Proyectos
        </p>
        <h2 className="py-4">¿Qué he desarrollado?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* {dataProject.map( project =>
            <ProjectItem key={project.name} project={project} />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
