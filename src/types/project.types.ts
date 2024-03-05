import { Technology } from "./technology.types";

interface Repository {
  backOffice?: string;
  client?: string;
  api?: string;
}

export interface Project {
  name: string;
  type: string;
  web: string;
  demo: string;
  image: string[];
  description: string;
  technologies: Technology[];
  repositoryFront: Repository;
  repositoryBack: Repository;
}
