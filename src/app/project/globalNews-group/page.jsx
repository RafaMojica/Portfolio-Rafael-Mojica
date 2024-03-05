import React from "react";
import dataProyect from "../../../utils/dataProject";
import Technologies from "../../../common/Technologies";
import DescriptionButton from "../../../common/DescriptionButton";
import HeaderProject from "../../../common/HeaderProject";
import { AiFillCaretRight } from "react-icons/ai";

const RRHH = () => {
  const { name, image, technologies, type, frontUrl, backUrl, demoUrl } =
    dataProyect[2];

  return (
    <div className="w-full">
      <HeaderProject name={name} image={image} type={type} />
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-4 gap-8 py-6">
        <div className="col-span-4 md:col-span-3">
          <h2 className="py-4">Descripción</h2>
          <p>
            App Móvil para la empresa GlobalNewsGroup como proyecto profesional
            del bootcamp para facilitar procesos entre personal y RRHH
          </p>
          <h3 className="uppercase tracking-wider pt-7 pb-3">
            Funcionalidades
          </h3>
          <h4 className="flex items-center">
            <AiFillCaretRight className="mx-2" />
            Administrador
          </h4>
          <p className="py-4">
            El administrador (RRHH) puede crear, editar, eliminar y ver
            usuarios, equipos y oficinas, también puede ver si el usuario se
            encuentra activo o ausente, ver su historial de asistencia y
            filtrarlos por mes/año, ver novedades solicitadas por los usuarios y
            cambiar su estado (pendiente / aprobado / rechazado)
          </p>
          <h4 className="flex items-center">
            <AiFillCaretRight className="mx-2" />
            Usuario
          </h4>
          <p className="py-4">
            El usuario puede ver su perfil, datos laborales y editar
            determinados campos, ver las oficinas que cuenta la empresa, fichar
            asistencia y ver historial donde puede filtrlas por mes/año, ver su
            equipo de trabajo, información de ellos y quien se encuentra activo
            o ausente, solicitar novedades y ver el estado de las novedades
            solicitadas (pendiente / aprobado / rechazado)
          </p>
          <div className="flex justify-around flex-wrap">
            <a href={backUrl} target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-8 hover:scale-110 ease-in duration-300">
                Back
              </button>
            </a>
            <DescriptionButton frontUrl={frontUrl} demoUrl={demoUrl} />
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-shodowGrey400 rounded-xl p-6">
          <p className="text-center font-bold pb-2">Tecnologías</p>
          {technologies.map((technologie) => (
            <Technologies key={technologie} technologie={technologie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RRHH;
