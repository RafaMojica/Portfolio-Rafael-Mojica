import { SOCIAL_NETWORKS_FOOTER } from "@/data/socialNetworks";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="max-w-[950px] mx-auto px-3 pb-7 text-shadow"
    >
      <div className="flex gap-2 items-center justify-center">
        <p className="text-sm sm:text-base flex items-center justify-center">
          2024 • Rafael Mojica •
        </p>
        <div className="flex gap-2">
          {SOCIAL_NETWORKS_FOOTER.map(({ name, href, Icon }) => {
            return (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary dark:hover:text-dark-secondary"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
