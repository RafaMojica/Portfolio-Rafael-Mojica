import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ project }) => {
  const { image, name, sumamary, projectUrl } = project;
  return (
    <div className="relative p-4 flex items-center justify-center h-auto w-full shadow-xl shadow-shodowGrey400 rounded-xl group hover:bg-gradient-to-b from-secondary to-background md:hover:scale-105 ease-in duration-300">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={image}
        alt={`Proyecto ${name}`}
        width="800"
        height="800"
      />
      <div className="hidden group-hover:block absolute w-[80%]">
        <h3 className="text-2xl tracking-wider text-center">{name}</h3>
        <p className="pb-4 pt-2 text-center">{sumamary}</p>
        <Link className="flex justify-center" href={projectUrl}>
          <p className="px-5 py-2 bg-buttonBgProject font-bold shadow-xl shadow-shodowGrey400 rounded-xl hover:scale-110 ease-in duration-300">
            Ver más
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
