import HomePorfolio from "@/assets/projects/HomePorfolio.png";
import HomeWatchMe from "@/assets/projects/HomeWatchMe.png";
import HomeRRHH from "@/assets/projects/HomeRRHH.png";
import HomeComoEnCasa from "@/assets/projects/HomeComoEnCasa.png";

const dataProjects = [
  {
    name: "Portafolio",
    type: "Aplicacíon Web",
    projectUrl: "/project-porfolio",
    image: HomePorfolio,
    sumamary: "Portafolio profesional Rafael Mojica",
    technologies: ["Next.js", "React.js", "Tailwind", "Javascript", "Aos"],
    frontUrl: "https://github.com/RafaMojica/FRONT-Porfolio",
    demoUrl: "/Building",
    webUrl: "https://rafaelmojica.vercel.app/",
  },
  {
    name: "Watch Me",
    type: "Aplicacíon Web",
    projectUrl: "/project-watch-me",
    image: HomeWatchMe,
    sumamary: "Sitio Web enfocado en películas y series de televisión",
    technologies: [
      "React.js",
      "Redux",
      "Javascript",
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Sass",
    ],
    backUrl: "https://github.com/RafaMojica/BACK-Web-WatchMe",
    frontUrl: "https://github.com/RafaMojica/FRONT-Web-WatchMe",
    demoUrl: "/Building",
    webUrl: "/Building",
  },
  {
    name: "RRHH",
    type: "Aplicacíon Movil",
    projectUrl: "/project-rrhh",
    image: HomeRRHH,
    sumamary:
      "Aplicación Móvil para facilitar los procesos del departamento de recursos Humanos",
    technologies: [
      "React Native",
      "Redux",
      "Javascript",
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Material UI",
    ],
    backUrl: "https://github.com/RafaMojica/BACK-App-RRHH",
    frontUrl: "https://github.com/RafaMojica/FRONT-App-RRHH",
    demoUrl: "/Building",
    webUrl: "/Building",
  },
  {
    name: "Como en Casa",
    type: "Aplicacíon Web",
    projectUrl: "/project-como-en-casa",
    image: HomeComoEnCasa,
    sumamary: "Sitio web E-commerce con temática de restaurante",
    technologies: [
      "React.js",
      "Redux",
      "Javascript",
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Sass",
    ],
    backUrl: "https://github.com/RafaMojica/Como-en-casa",
    frontUrl: "https://github.com/RafaMojica/Como-en-casa",
    demoUrl: "/Building",
    webUrl: "/Building",
  },
];

module.exports = dataProjects;
