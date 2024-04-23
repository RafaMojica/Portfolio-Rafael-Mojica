import logoP5 from "../../public/P5.svg";
import logoUma from "../../public/Uma.webp";

const COMPANIES = {
  plataforma5: {
    name: "Plataforma 5",
    logo: logoP5,
    position: "Mentor en desarrollo de sofware",
    duration: "abr 2023 - nov 2023",
    tasks: [
      `Desempeñe el rol de <span class="font-bold text-dEmphasis">tech leader</span> en distintos equipos alcanzando los <span class="font-bold text-dEmphasis">objetivos</span> establecidos de manera <span class="font-bold text-dEmphasis">puntual</span>.`,
      `En calidad de <span class="font-bold text-dEmphasis">scrum master</span>, lideré sesiones que impulsaron la <span class="font-bold text-dEmphasis">participación</span> y <span class="font-bold text-dEmphasis">eficiencia</span> de los equipos.`,
      `Proporcioné <span class="font-bold text-dEmphasis">retroalimentación</span> sobre el <span class="font-bold text-dEmphasis">código</span> de los estudiantes logrando incrementar su <span class="font-bold text-dEmphasis">nivel técnico</span>.`,
      `Realice <span class="font-bold text-dEmphasis">sesiones educativas</span> sobre distintas <span class="font-bold text-dEmphasis">tecnologias</span> asegurando el entendimiento de los estudiantes.`,
    ],
  },
  Uma: {
    name: "UMA",
    logo: logoUma,
    position: "Desarrollador Full Stack",
    duration: "may 2023 - ago 2023",
    tasks: [
      `Participé en el desarrollo de una <span class="font-bold text-dEmphasis">aplicación</span> que ofrece el servicio de <span class="font-bold text-dEmphasis">delivery</span> para repartidores.`,
      `Cree diferentes <span class="font-bold text-dEmphasis">endpoints</span> para la <span class="font-bold text-dEmphasis">API</span> en el <span class="font-bold text-dEmphasis">backend</span>.`,
      `Realice <span class="font-bold text-dEmphasis">vistas</span> en el <span class="font-bold text-dEmphasis">frontend</span> con su conexion al backend.`,
      `Implementé <span class="font-bold text-dEmphasis">test unitarias</span> y de <span class="font-bold text-dEmphasis">integración</span>.`,
      `Desarrollé la <span class="font-bold text-dEmphasis">dockerización</span>, así como la implementación de <span class="font-bold text-dEmphasis">CI/CD</span> con <span class="font-bold text-dEmphasis">Github Actions</span>.`,
    ],
  },
};

export const EXPERIENCE = [COMPANIES.plataforma5, COMPANIES.Uma];
