import React from "react";
import Layout from "@/common/Layout";
import { SOCIAL_NETWORKS } from "@/data/socialNetworks";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-dPrimary/10 to-dBg/50 mt-11 md:mt-20 p-6">
      <Layout
        id="footer"
        className="flex flex-col gap-6 justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center gap-4 text-dSecondary">
          <p>Contacto</p>
          <div className="flex gap-4">
            {SOCIAL_NETWORKS.map(({ name, href, Icon }) => {
              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-dGradientPrimary"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
        <p className=" text-dSecondary">
          Diseñado y Desarrollado por Rafael Mojica
        </p>
      </Layout>
    </footer>
  );
};

export default Footer;
