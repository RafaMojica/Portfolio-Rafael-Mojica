import React, { FC } from "react";
import Image from "next/image";
import { Project } from "@/types/project.types";

const Project: FC<Project> = ({
  name,
  type,
  web,
  demo,
  image,
  description,
  technologies,
  repositoryFront,
  repositoryBack,
}) => {
  return (
    <div>
      <Image src={image[0]} alt="" height={500} width={500} />
    </div>
  );
};

export default Project;
