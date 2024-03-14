import React from "react";
import Layout from "@/common/Layout";

const About = () => {
  return (
    <Layout id="about" className="pt-14 pb-12 md:pb-16">
      <h2 className="text-center text-secondary dark:text-dark-secondary font-bold">
        Sobre Mí
      </h2>
      <p className="text-lg pt-10 text-description dark:text-dark-description">
        Como apasionado desarrollador, estoy constantemente en busca de desafíos
        que me permitan expandir mis habilidades y adquirir conocimientos sobre
        nuevas tecnologías. Mi compromiso, capacidad para trabajar en equipo y
        habilidad para resolver problemas generan un impacto positivo en el
        desarrollo de aplicaciones web, contribuyendo al éxito de diferentes
        proyectos.
      </p>
    </Layout>
  );
};

export default About;
