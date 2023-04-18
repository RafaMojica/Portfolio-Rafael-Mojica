import React from "react";
import dataProyect from "../utils/dataProject";
import Technologies from "../common/Technologies";
import DescriptionButton from "../common/DescriptionButton";
import HeaderProject from "../common/HeaderProject";

const Porfolio = () => {
  const {
    name,
    image,
    technologies,
    type,
    frontUrl,
    backUrl,
    demoUrl,
    webUrl,
  } = dataProyect[0];

  return (
    <div className="w-full">
      <HeaderProject name={name} image={image} type={type} />
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-4 gap-8 py-6">
        <div className="col-span-4 md:col-span-3">
          <h2 className="py-4">Descripción</h2>
          <p>
            Mi portafolio personal web donde encontrarás una selección de mis
            proyectos y trabajos realizados, que muestran mis habilidades y
            experiencia en el diseño y desarrollo de sitios web.
          </p>
          <h3 className="uppercase tracking-wider pt-7 pb-3">
            Funcionalidades
          </h3>
          <h4>- Usuario</h4>
          <p className="py-4">
            El usuario puede explorar entre las diferentes opciones acerca de,
            habilidades, proyectos. Por otro lado, si desea saber más sobre mí o
            mantenerse, en contacto conmigo, puede enviarme un correo
            directo o visitar las diferentes redes sociales que poseo.
          </p>
          <DescriptionButton
            frontUrl={frontUrl}
            backUrl={backUrl}
            demoUrl={demoUrl}
            webUrl={webUrl}
          />
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-6">
          <p className="text-center font-bold pb-2">Tecnologías</p>
          {technologies.map((technologie) => (
            <Technologies key={technologie} technologie={technologie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Porfolio;
