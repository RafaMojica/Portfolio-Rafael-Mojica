import { Project } from "@/types/project.types";
import TECHNOLOGIES from "./technologies";
import mockUp from "../../public/MockUpPrueba.png";
import mockUp2 from "../../public/MockUpPrueba2.png";
import mockMobil from "../../public/MackUpMovil.png";

const PROJECTS: Project[] = [
  {
    name: "Fast Delivery",
    type: "Aplicación Web",
    web: "",
    demo: "",
    image: [mockUp],
    description:
      "Aplicación que ofrece el servicio de mensajeria de un establecimiento de repartos.",
    technologies: [
      TECHNOLOGIES.Next,
      TECHNOLOGIES.React,
      TECHNOLOGIES.Redux,
      TECHNOLOGIES.TypeScript,
      TECHNOLOGIES.Node,
      TECHNOLOGIES.Express,
      TECHNOLOGIES.MongoDB,
      TECHNOLOGIES.Mongoose,
      TECHNOLOGIES.Jest,
      TECHNOLOGIES.Docker,
      TECHNOLOGIES.AWS,
      TECHNOLOGIES.Tailwind,
    ],
    repositoryFront: {
      backOffice: "https://github.com/RafaMojica/staffys-backoffice-client",
      client: "https://github.com/RafaMojica/staffys-delivery-client",
    },
    repositoryBack: { api: "https://github.com/RafaMojica/staffys-api" },
  },
  {
    name: "GlobalNews Group",
    type: "Aplicación Móvil",
    web: "",
    demo: "",
    image: [mockUp2],
    description:
      "Aplicación con el fin de automatizar procesos en el departamento de recursos humanos.",
    technologies: [
      TECHNOLOGIES.React,
      TECHNOLOGIES.Redux,
      TECHNOLOGIES.JavaScript,
      TECHNOLOGIES.Node,
      TECHNOLOGIES.Express,
      TECHNOLOGIES.PostgreSQL,
      TECHNOLOGIES.Sequialize,
      TECHNOLOGIES.MaterialUI,
    ],
    repositoryFront: { client: "https://github.com/RafaMojica/FRONT-App-RRHH" },
    repositoryBack: { api: "https://github.com/RafaMojica/BACK-App-RRHH" },
  },
  {
    name: "Watch Me",
    type: "Sitio Web",
    web: "",
    demo: "",
    image: [mockMobil],
    description:
      "Sitio web que brinda un gran catálogo de películas y series de televisión.",
    technologies: [
      TECHNOLOGIES.React,
      TECHNOLOGIES.Redux,
      TECHNOLOGIES.JavaScript,
      TECHNOLOGIES.Node,
      TECHNOLOGIES.Express,
      TECHNOLOGIES.PostgreSQL,
      TECHNOLOGIES.Sequialize,
      TECHNOLOGIES.Sass,
    ],
    repositoryFront: {
      client: "https://github.com/RafaMojica/FRONT-Web-WatchMe",
    },
    repositoryBack: { api: "https://github.com/RafaMojica/BACK-Web-WatchMe" },
  },
  {
    name: "Como en Casa",
    type: "Sitio Web",
    web: "",
    demo: "",
    image: [mockMobil],
    description: "Sitio web E-commerce con temática de restaurante",
    technologies: [
      TECHNOLOGIES.React,
      TECHNOLOGIES.Redux,
      TECHNOLOGIES.JavaScript,
      TECHNOLOGIES.Node,
      TECHNOLOGIES.Express,
      TECHNOLOGIES.PostgreSQL,
      TECHNOLOGIES.Sequialize,
      TECHNOLOGIES.Sass,
    ],
    repositoryFront: { client: "https://github.com/RafaMojica/Como-en-casa" },
    repositoryBack: {
      api: "https://github.com/RafaMojica/Como-en-casa/tree/main/api",
    },
  },
];

export default PROJECTS;
