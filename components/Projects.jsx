import React from "react";
import ProjectItem from "../common/ProjectItem";
import dataProject from "../utils/dataProject"

const Projects = () => {
  return (
    <div id="projects" className="w-full px-2 py-24">
      <div className="max-w-[1240px] mx-auto">
        <p className="uppercase text-xl tracking-widest text-[#5651e5] font-bold">Proyectos</p>
        <h2 className="py-4">¿Qué he desarrollado?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {dataProject.map( project =>
            <ProjectItem key={project.name} src={project.image} name={project.name} desciption={project.desciption} projectUrl={project.projectUrl} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
