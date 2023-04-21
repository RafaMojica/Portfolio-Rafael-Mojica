import React, { useEffect, useState } from "react";
import SocialNetworks from "../common/SocialNetworks";
import {BsArrowDown} from "react-icons/bs"
import Link from "next/link";

const Start = () => {
  const [arrow, setArrow] = useState(true);

  useEffect(() => {
    const handleArrow = () => {
      if (window.scrollY >= 90) {
        setArrow(false);
      } else {
        setArrow(true);
      }
    };
    window.addEventListener('scroll', handleArrow);
  }, []);

  return (
    <div id="start" className="w-full h-screen text-center">
      <div className="relative max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-base tracking-widest text-gray600">Logremos algo juntos</p>
          <h1 className="py-4 text-gray700">Hola, soy <span className="text-secondary"> Rafael Mojica</span></h1>
          <h1 className="py-2 text-gray700">Full-Stack Web Developer</h1>
          <p className="py-4 text-gray600 sm:max-w-[70%] m-auto text-lg">
            A través de este espacio, espero poder compartir contigo mi pasión,
            experiencia y conocimientos en el mundo IT.
          </p>
          <div className="flex items-center justify-between max-w-[400px] m-auto py-4">
            <SocialNetworks size={20} padding={6} />
          </div>
        </div>
        <div className={arrow ? "absolute left-[45%] md:left-[48%] bottom-5" : "hidden"}>
          <Link href="/#about">
              <BsArrowDown className="animate-bounce text-secondary" size={35} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
