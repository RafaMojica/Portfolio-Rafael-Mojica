import React from "react";
import Layout from "@/common/Layout";
import MainTitle from "@/common/MainTitle";
import Card from "@/common/Card";
import Image from "next/image";
import PhotoProfile from "../../public/Photo.webp";
import LinkPrimary from "@/common/LinkPrimary";
import { CONTACTS } from "@/data/socialNetworks";

const About = () => {
  return (
    <Layout
      id="aboutMe"
      className="pt-11 md:pt-20 flex flex-col gap-11 md:gap-20"
    >
      <MainTitle title="Sobre Mí" />
      <div className="flex flex-wrap gap-12 items-center justify-center">
        <Card className="basis-96 grow">
          <p className="leading-6 md:leading-8 text-sm md:text-lg text-dPrimary">
            Como apasionado{" "}
            <span className="font-bold text-dEmphasis">desarrollador</span>,
            estoy constantemente en busca de{" "}
            <span className="font-bold text-dEmphasis">desafíos</span> que me
            permitan expandir mis{" "}
            <span className="font-bold text-dEmphasis">habilidades</span> y
            adquirir conocimientos sobre nuevas tecnologías. Mi compromiso,
            capacidad para{" "}
            <span className="font-bold text-dEmphasis">trabajar en equipo</span>{" "}
            y habilidad para{" "}
            <span className="font-bold text-dEmphasis">resolver problemas</span>{" "}
            generan un impacto positivo en el desarrollo de{" "}
            <span className="font-bold text-dEmphasis">aplicaciones web</span>,
            contribuyendo al éxito de diferentes proyectos.
          </p>
          <LinkPrimary href={CONTACTS.cv.href} name="Descargar CV" />
        </Card>
        <div className="relative">
          <Image
            src={PhotoProfile}
            className="w-72 md:w-80"
            alt="Foto perfil Rafale Mojica"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-10%"></div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
