import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import SocialNetworks from "../common/SocialNetworks";

const Contact = () => {
  return (
    <div id="contact" className="w-full px-2 py-24">
      <div className="max-w-[1240px] m-auto">
        <p className="uppercase text-xl tracking-widest text-secondary font-bold">Contacto</p>
        <h2 className="py-4">¿Qué necesitas?</h2>
        <div className="md:flex gap-8 md:max-w-[80%] m-auto">
          <div className="flex md:flex-col items-center justify-between py-10">
            <SocialNetworks size={20} padding={6} />
          </div>

          <div className="w-full h-auto shadow-xl shadow-shodowGrey400 rounded-xl p-4 lg:p-10">
            <form action="" method="POST" encType="multipart/form-data" >
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Nombre</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray300"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Telefono</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray300"
                    type="text"
                    name="phone"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Correo</label>
                <input
                  className="border-2 rounded-lg p-3 border-gray300"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Asunto</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray300"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Mensaje</label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray300"
                  rows="10"
                  name="message"
                ></textarea>
              </div>
              <button className="w-full p-4 mt-4">Enviar Mensaje</button>
            </form>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-shodowGrey400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-secondary" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
