import Image from "next/image";
import React from "react";
import photoPorfile from "@/assets/img/Photo-ConBackground.jpg";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import Layout from "@/common/Layout";

const About = () => {
  return (
    <Layout id="about" className="flex items-center md:py-24">
      <div className="m-auto md:grid grid-cols-3 gap-16">
        <div
          className="flex flex-col justify-center col-span-2"
        >
          <p className="uppercase text-xl tracking-widest text-secondary font-bold">
            Sobre Mí
          </p>
          <h2 className="py-4">¿Quién Soy?</h2>
          <p className="py-2 text-primary">
            Como apasionado desarrollador, estoy constantemente en busca de
            desafíos que me permitan expandir mis habilidades y adquirir
            conocimientos sobre nuevas tecnologías. Mi compromiso, capacidad
            para trabajar en equipo y habilidad para resolver problemas generan
            un impacto positivo en el desarrollo de aplicaciones web,
            contribuyendo al éxito de diferentes proyectos.
          </p>
          <a
            href="https://drive.google.com/file/d/1P1VRNPb3dgXHkVWUlvW2f2LmG8UFFunP/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center py-2">
              <div
                className={`flex rounded-full shadow-lg shadow-shadow p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-secondary hover:text-buttonTextMain`}
              >
                <BsFillFileEarmarkSpreadsheetFill size={20} />
                <p className="font-bold px-2">CV</p>
              </div>
            </div>
          </a>
        </div>
        <div
          className="flex h-full items-center w-[80%] mx-auto md:w-full"
        >
          <div className="mt-12 md:m-0 rounded-3xl bg-gradient-to-r from-terciario to-shadow">
            <div className="rounded-3xl rotate-12 duration-300 hover:rotate-0 overflow-hidden">
              <Image
                className="rounded-3xl"
                src={photoPorfile}
                alt="Foto de Perfil"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
