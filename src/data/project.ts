import { TECHNOLOGIES } from "./technologies";
import LogoFastDelivery from "../../public/FastDelivery.webp";
import LogoGlobalNewsGroup from "../../public/GlobalNewsGroup.webp";
import LogoWatchMe from "../../public/WatchMe.svg";
import LogoComoEnCasa from "../../public/ComoEnCasa.webp";

const PROJECT = {
  FastDelivery: {
    name: "Fast Delivery",
    web: "",
    image: LogoFastDelivery,
    description: `<span class="highlightedWords">Aplicación web</span> para una empresa de <span class="highlightedWords">logística</span> que cuenta con una interfaz <span class="highlightedWords">intuitiva</span> y <span class="highlightedWords">eficiente</span>. Esta aplicación, con dos roles diferenciados, garantiza un <span class="highlightedWords">seguimiento preciso</span> y una gestión <span class="highlightedWords">óptima</span> de la entrega de paquetes.`,
    technologies: [
      TECHNOLOGIES.Next,
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
  GlobalNewsGroup: {
    name: "GlobalNews Group",
    web: "",
    image: LogoGlobalNewsGroup,
    description: `<span class="highlightedWords">Aplicación móvil</span> diseñada específicamente para <span class="highlightedWords">optimizar</span> los <span class="highlightedWords">procesos</span> en el departamento de <span class="highlightedWords">recursos humanos</span>, con un enfoque claro en mejorar la <span class="highlightedWords">eficiencia</span> y la comodidad. Al <span class="highlightedWords">automatizar</span> tareas clave dentro del departamento.`,
    technologies: [
      TECHNOLOGIES.ReactNative,
      TECHNOLOGIES.Redux,
      TECHNOLOGIES.JavaScript,
      TECHNOLOGIES.Node,
      TECHNOLOGIES.Express,
      TECHNOLOGIES.PostgreSQL,
      TECHNOLOGIES.Sequialize,
      TECHNOLOGIES.MaterialUI,
    ],
    repositoryFront: {
      backOffice: "",
      client: "https://github.com/RafaMojica/FRONT-App-RRHH",
    },
    repositoryBack: { api: "https://github.com/RafaMojica/BACK-App-RRHH" },
  },
  WatchMe: {
    name: "Watch Me",
    web: "",
    image: LogoWatchMe,
    description: `<span class="highlightedWords">Sitio web</span> de películas donde los <span class="highlightedWords">usuarios</span> pueden explorar, buscar y disfrutar de un amplio catálogo de <span class="highlightedWords">películas</span> y <span class="highlightedWords">series</span>. Además, cuentan con la capacidad de registrarse lo que les <span class="highlightedWords">proporciona</span> una <span class="highlightedWords">experiencia personalizada</span>.`,
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
      backOffice: "",
      client: "https://github.com/RafaMojica/FRONT-Web-WatchMe",
    },
    repositoryBack: { api: "https://github.com/RafaMojica/BACK-Web-WatchMe" },
  },
  ComoEnCasa: {
    name: "Como en Casa",
    web: "",
    image: LogoComoEnCasa,
    description: `Sitio web <span class="highlightedWords">e-commerce</span> funcional con temática de <span class="highlightedWords">restaurante</span>, con dos roles, donde el <span class="highlightedWords">administrador</span> tiene el control total sobre los <span class="highlightedWords">productos</span> y pedidos y los clientes pueden explorar el menú para realizar su <span class="highlightedWords">pedido en línea</span>.`,
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
      backOffice: "",
      client: "https://github.com/RafaMojica/Como-en-casa",
    },
    repositoryBack: {
      api: "https://github.com/RafaMojica/Como-en-casa/tree/main/api",
    },
  },
};

export const PROJECTS = [
  PROJECT.FastDelivery,
  PROJECT.GlobalNewsGroup,
  PROJECT.WatchMe,
  PROJECT.ComoEnCasa,
];
