import React from "react";
import Technologies from "../../../common/Technologies";
import DescriptionButton from "../../../common/DescriptionButton";
import HeaderProject from "../../../common/HeaderProject";
import { AiFillCaretRight } from "react-icons/ai";

const ComoEnCasa = () => {
  const { name, image, technologies, type, frontUrl, backUrl, demoUrl } =
    dataProyect[3];

  return (
    <div className="w-full">
      <HeaderProject name={name} image={image} type={type} />
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-4 gap-8 py-6">
        <div className="col-span-4 md:col-span-3">
          <h2 className="py-4">Descripción</h2>
          <p>Sitio web E-commerce funcional con temática de restaurante</p>
          <h3 className="uppercase tracking-wider pt-7 pb-3">
            Funcionalidades
          </h3>
          <h4 className="flex items-center">
            <AiFillCaretRight className="mx-2" />
            Administrador
          </h4>
          <p className="py-4">
            El administrador puede agregar, editar, actualizar o eliminar un
            producto, en cuento a los usuarios puede verlos, eliminarlos o
            asignarles un rol, por otro lado, ver el historial de pedidos y
            cambiar su estado (pendiente / enviado).
          </p>
          <h4 className="flex items-center">
            <AiFillCaretRight className="mx-2" />
            Usuario
          </h4>
          <p className="py-4">
            El usuario puede interactuar con el catálogo de los productos,
            agregar o eliminar la cantidad que deseada del carrito de compras,
            realizar el pagar correspondiente, ver su historial de pedidos y el
            estado en el que se encuentra (pendiente / enviado).
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

export default ComoEnCasa;
