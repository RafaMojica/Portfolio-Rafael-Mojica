import { StaticImageData } from "next/image";
import { Technology } from "./technology.types";

interface Repository {
  backOffice?: string;
  client?: string;
  api?: string;
}

export interface Project {
  name: string;
  web: string;
  demo: string;
  image: StaticImageData[];
  description: string;
  technologies: Technology[];
  repositoryFront: Repository;
  repositoryBack: Repository;
}
