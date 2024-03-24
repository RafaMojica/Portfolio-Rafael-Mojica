import { Project } from "@/types/project.types";
import { TECHNOLOGIES } from "./technologies";
import TestImage from "../../public/BetaImage.png";

export const PROJECTS: Project[] = [
  {
    name: "Fast Delivery",
    web: "",
    demo: "",
    image: [TestImage],
    description:
      "Aplicación web para una empresa de logística que cuenta con una interfaz intuitiva y eficiente. Esta aplicación, con dos roles diferenciados, garantiza un seguimiento preciso y una gestión óptima de la entrega de paquetes en tiempo real.",
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
    web: "",
    demo: "",
    image: [TestImage],
    description:
      "Aplicación móvil diseñada específicamente para optimizar los procesos en el departamento de recursos humanos, con un enfoque claro en mejorar la eficiencia y la comodidad. Al automatizar tareas clave dentro del departamento.",
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
    web: "",
    demo: "",
    image: [TestImage],
    description:
      "Sitio web de películas donde los usuarios pueden explorar, buscar y disfrutar de un amplio catálogo de películas y series. Además, cuentan con la capacidad de registrarse lo que les proporciona una experiencia personalizada.",
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
    web: "",
    demo: "",
    image: [TestImage],
    description:
      "Sitio web e-commerce funcional con temática de restaurante, con dos roles, donde el administrador tiene el control total sobre los productos y pedidos y los clientes pueden explorar el menú para realizar su pedido en línea.",
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
