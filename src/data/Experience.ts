import logoP5 from "../../public/P5.svg";
import logoUma from "../../public/Uma.webp";

const COMPANIES = {
  plataforma5: {
    name: "Plataforma 5",
    logo: logoP5,
    position: "Mentor en desarrollo de sofware",
    duration: "abr 2023 - nov 2023",
    tasks: [
      `Desempeñe el rol de <span class="highlightedWords">tech leader</span> en distintos equipos alcanzando los <span class="highlightedWords">objetivos</span> establecidos de manera <span class="highlightedWords">puntual</span>.`,
      `En calidad de <span class="highlightedWords">scrum master</span>, lideré sesiones que impulsaron la <span class="highlightedWords">participación</span> y <span class="highlightedWords">eficiencia</span> de los equipos.`,
      `Proporcioné <span class="highlightedWords">retroalimentación</span> sobre el <span class="highlightedWords">código</span> de los estudiantes logrando incrementar su <span class="highlightedWords">nivel técnico</span>.`,
      `Realice <span class="highlightedWords">sesiones educativas</span> sobre distintas <span class="highlightedWords">tecnologias</span> asegurando el entendimiento de los estudiantes.`,
    ],
  },
  Uma: {
    name: "UMA",
    logo: logoUma,
    position: "Desarrollador Full Stack",
    duration: "may 2023 - ago 2023",
    tasks: [
      `Participé en el desarrollo de una <span class="highlightedWords">aplicación</span> que ofrece el servicio de <span class="highlightedWords">delivery</span> para repartidores.`,
      `Cree diferentes <span class="highlightedWords">endpoints</span> para la <span class="highlightedWords">API</span> en el <span class="highlightedWords">backend</span>.`,
      `Realice <span class="highlightedWords">vistas</span> en el <span class="highlightedWords">frontend</span> con su conexion al backend.`,
      `Implementé <span class="highlightedWords">test unitarias</span> y de <span class="highlightedWords">integración</span>.`,
      `Desarrollé la <span class="highlightedWords">dockerización</span>, así como la implementación de <span class="highlightedWords">CI/CD</span> con <span class="highlightedWords">Github Actions</span>.`,
    ],
  },
};

export const EXPERIENCE = [COMPANIES.plataforma5, COMPANIES.Uma];
