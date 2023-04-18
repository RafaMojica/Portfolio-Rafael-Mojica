import React from "react";
import dataProyect from "../utils/dataProject";
import Technologies from "../common/Technologies";
import DescriptionButton from "../common/DescriptionButton";
import HeaderProject from "../common/HeaderProject";

const ComoEnCasa = () => {
  const {
    name,
    image,
    technologies,
    type,
    frontUrl,
    backUrl,
    demoUrl,
    webUrl,
  } = dataProyect[3];

  return (
    <div className="w-full">
      <HeaderProject name={name} image={image} type={type} />
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-4 gap-8 py-6">
        <div className="col-span-4 md:col-span-3">
          <h2 className="py-4">Descripción</h2>
          <p>Sitio web E-commerce funcional con temática de restaurante</p>
          <h3 className="uppercase tracking-wider pt-7 pb-3">Funcionalidades</h3>
          <h4>- Administrador</h4>
          <p className="py-4">
            El administrador puede agregar, editar, eliminar y definir el stock de un producto,
            también ver los usuarios registrados, asignar roles de admin a ellos
            o eliminarlos, por otro lado ver el historial de pedidos y cambiar
            el estado del pedido de pediente a enviado.
          </p>
          <h4>- Usuario</h4>
          <p className="py-4">
            El usuario puede interactuar con el catálogo de los productos, agregar o
            eliminaro del carrito de compras, escoger la cantidad que desea,
            realizar el pagar correspondiente, ver su historial de pedidos y el
            estado en el que se encuentra el pedido (pendiente / enviado).
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

export default ComoEnCasa;