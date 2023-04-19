import Image from "next/image";
import React from "react";
import photoPorfile from "../public/assets/img/Photo-ConBackground.jpg";
import {BsFillFileEarmarkSpreadsheetFill} from "react-icons/bs"

const About = () => {
  return (
    <div id="about" className="w-full px-2 flex items-center py-24">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="flex flex-col justify-center col-span-2">
          <p className="uppercase text-xl tracking-widest text-secondary font-bold">Acerca de</p>
          <h2 className="py-4">¿Quien Soy?</h2>
          <p className="py-2 text-gray600">
            Te cuento un poco de mi! a comienzos del 2022, después de un tiempo
            ejerciendo mi carrera como Ingeniero Civil y sintiéndome
            insatisfecho salí de mi zona de confort, dándole un giro a mi vida
            decidí tomar un camino diferente y un nuevo desafío. Desde pequeño
            siempre tuve el gusto y la pasión por la tecnología que al día de
            hoy persiste, así fue que comenzó mi camino por el mundo de las IT.
          </p>
          <p className="py-2 text-gray600">
            Empece de manera autodidacta a investigar de que se trataba, seguí
            algunos tutoriales y leí documentación para luego anotarme en una
            carrera FullStack, donde dedique más de 800 horas aprendiendo y
            consolidando mis conocimientos, por otro lado, en este proceso
            descubrí nuevas cualidades en mi, entre ellas puedo decir que soy
            una persona curiosa y colaboradora, me gusta estar en continuo
            aprendizaje trabajando en equipo, conociendo nuevas personar y
            formando amistades.
          </p>
          <a href="https://drive.google.com/file/d/10NP9QdL1YZylSzzRFpGT7lOkwdaC0Ont/view?usp=share_link" target="_blank" rel="noreferrer" >
          <div className="flex items-center justify-center py-2">
            <div className={`flex rounded-full shadow-lg shadow-shodowGrey400 p-6 cursor-pointer hover:scale-110 ease-in duration-300`}>
              <BsFillFileEarmarkSpreadsheetFill size={20} />
              <p className="font-bold px-2">CV</p>
            </div>
          </div>
          </a>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-shodowGrey400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={photoPorfile} alt="Foto de Perfil" />
        </div>
      </div>
    </div>
  );
};

export default About;
