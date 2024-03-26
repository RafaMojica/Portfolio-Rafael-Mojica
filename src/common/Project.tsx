import React, { FC } from "react";
import Image from "next/image";
import type { Project } from "@/types/project.types";
import { ExternalLink } from "@/icons/ExternalLink";
import Link from "next/link";
import Tag from "./Tag";

const Project: FC<Project> = ({
  name,
  web,
  demo,
  image,
  description,
  technologies,
  repositoryFront,
  repositoryBack,
}) => {
  return (
    <div className="bg-secondary/5 dark:bg-dark-secondary/5 backdrop-blur-lg shadow-lg rounded-2xl shadow-shadow/60 dark:shadow-dark-shadow">
      <div className="flex flex-wrap justify-center items-center md:flex-nowrap gap-6 p-4">
        <Image src={image[0]} alt="imageTest" />
        <div className="w-full flex flex-col justify-center items-center text-description dark:text-dark-description">
          <div className="flex justify-center items-center gap-2 text-secondary text-2xl font-bold">
            <h3>{name}</h3>
            <Link href={web} target="_blank" rel="noreferrer">
              <ExternalLink className="hover:stroke-secondary dark:hover:stroke-dark-secondary" />
            </Link>
          </div>
          <p className="py-8 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map(({ name, color, Icon }) => {
              return <Tag key={name} name={name} color={color} Icon={Icon} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
