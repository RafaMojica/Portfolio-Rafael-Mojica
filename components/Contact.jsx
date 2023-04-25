import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import SocialNetworks from "../common/SocialNetworks";

const Contact = () => {
  return (
    <div id="contact" className="w-full px-2 pt-16 md:pt-24">
      <div className="max-w-[1240px] m-auto">
        <p className="uppercase text-xl tracking-widest text-secondary font-bold">Contacto</p>
        <h2 className="py-4">¿Qué necesitas?</h2>
        <div className="md:flex gap-8 md:max-w-[80%] m-auto">
          <div data-aos="zoom-in" data-aos-offset="-200" className="flex md:flex-col items-center justify-between py-5 lg:py-10">
            <SocialNetworks size={20} padding={6} animation={"none"} />
          </div>

          <div data-aos="zoom-in" data-aos-offset="-200" className="w-full h-auto shadow-xl shadow-shodowGrey400 rounded-xl p-4 lg:p-10">
            <form action="https://formspree.io/f/xnqyljlz" method="POST" >
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Nombre</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray300"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Teléfono</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray300"
                    type="number"
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Correo</label>
                <input
                  className="border-2 rounded-lg p-3 border-gray300"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Asunto</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray300"
                  type="text"
                  name="subject"
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Mensaje</label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray300"
                  rows="10"
                  name="message"
                  required
                ></textarea>
              </div>
              <button className="w-full p-4 mt-4">Enviar Mensaje</button>
            </form>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="text-secondary rounded-full shadow-lg shadow-shodowGrey400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-secondary hover:text-buttonTextMain">
              <HiOutlineChevronDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
