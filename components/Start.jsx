import React from "react";
import SocialNetworks from "../common/SocialNetworks";

const Start = () => {
  return (
    <div id="start" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">Logremos algo juntos</p>
          <h1 className="py-4 text-gray-700">Hola, soy <span className="text-[#5651e5]"> Rafael Mojica</span></h1>
          <h1 className="py-2 text-gray-700">Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            A través de este espacio, espero poder compartir contigo mi pasión,
            experiencia y conocimientos en el mundo IT.
          </p>
          <div className="flex items-center justify-between max-w-[400px] m-auto py-4">
            <SocialNetworks size={20} padding={6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
