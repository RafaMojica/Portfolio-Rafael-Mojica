import { Github } from "@/icons/Github";
import { Instagram } from "@/icons/Instagram";
import { Linkedin } from "@/icons/Linkedin";
import { Mail } from "@/icons/Mail";
import { Mobil } from "@/icons/Mobil";
import { IconDescription } from "@/types/icon.types";

const CONTACT = {
  linkedin: {
    name: "linkedin",
    Icon: Linkedin,
    color: "#000000",
    href: "https://www.linkedin.com/in/rafamojica/",
  },
  github: {
    name: "github",
    Icon: Github,
    color: "#000000",
    href: "https://github.com/RafaMojica",
  },
  instagram: {
    name: "instagram",
    Icon: Instagram,
    color: "#000000",
    href: "https://instagram.com/rafa_mojica_",
  },
  mail: {
    name: "mail",
    Icon: Mail,
    color: "#000000",
    href: "mailto:rafael.mojica27@gmail.com",
  },
  mobil: {
    name: "mobil",
    Icon: Mobil,
    color: "#000000",
    href: "https://wa.link/r6856s",
  },
};

const SOCIAL_NETWORKS: IconDescription[] = [
  CONTACT.linkedin,
  CONTACT.github,
  CONTACT.instagram,
  CONTACT.mail,
  CONTACT.mobil,
];

export const SOCIAL_NETWORKS_FOOTER: IconDescription[] = [
  CONTACT.linkedin,
  CONTACT.github,
  CONTACT.instagram,
];

export default SOCIAL_NETWORKS;
