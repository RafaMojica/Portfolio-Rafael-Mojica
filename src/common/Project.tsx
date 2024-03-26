import React, { FC } from "react";
import Image from "next/image";
import type { Project } from "@/types/project.types";
import { ExternalLink } from "@/icons/ExternalLink";
import Link from "next/link";
import Tag from "./Tag";
import BadgeProject from "./BadgeProject";
import { GithubOfficial } from "@/icons/GithubOfficial";
import { Play } from "@/icons/Play";

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
          <div className="flex justify-center items-center gap-2 text-secondary text-2xl font-bold pb-5">
            <h3>{name}</h3>
            {web && (
              <Link href={web} target="_blank" rel="noreferrer">
                <ExternalLink className="hover:stroke-secondary dark:hover:stroke-dark-secondary" />
              </Link>
            )}
          </div>
          <p className="leading-relaxed">{description}</p>
          <div className="pt-5 pb-6">
            <div className="flex flex-wrap items-center justify-center gap-5">
              {repositoryFront.client && (
                <BadgeProject
                  href={repositoryFront.client ? repositoryFront.client : ""}
                  title="Client"
                  Icon={<GithubOfficial className="h-6 w-6" />}
                />
              )}
              {repositoryFront.backOffice && (
                <BadgeProject
                  href={
                    repositoryFront.backOffice ? repositoryFront.backOffice : ""
                  }
                  title="BackOffice"
                  Icon={<GithubOfficial className="h-6 w-6" />}
                />
              )}
              {repositoryBack.api && (
                <BadgeProject
                  href={repositoryBack.api ? repositoryBack.api : ""}
                  title="Api"
                  Icon={<GithubOfficial className="h-6 w-6" />}
                />
              )}
              {demo && (
                <BadgeProject
                  href={demo ? demo : ""}
                  title="Demo"
                  Icon={<Play className="h-6 w-6" />}
                />
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center justify-center md:justify-normal ">
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
