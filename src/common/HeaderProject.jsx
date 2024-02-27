import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const HeaderProject = ({ name, image, type }) => {
  return (
    <div className="relative w-screen h-[30vh]">
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-black/70 z-10" />
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={image}
        alt={`Imagen Proyecto ${name}`}
      />
      <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-buttonBgProject z-10 p-2">
        <h2 className="py-2">{name}</h2>
        <h3>{type}</h3>
      </div>
      <div className="absolute z-20 right-5 top-5">
        <Link href="/#projects">
          <div className="rounded-full shadow-lg shadow-gray500 p-3 cursor-pointer bg-background hover:scale-110 ease-in duration-300">
            <AiOutlineClose size={25} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderProject;
