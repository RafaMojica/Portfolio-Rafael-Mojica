import { Github } from "@/icons/Github";
import { Instagram } from "@/icons/Instagram";
import { Linkedin } from "@/icons/Linkedin";
import { Mail } from "@/icons/Mail";
import { Mobil } from "@/icons/Mobil";
import { IconDescription } from "@/types/icon.types";

const SOCIAL_NETWORKS: IconDescription[] = [
  {
    name: "linkedin",
    Icon: Linkedin,
    color: "#000000",
    href: "https://www.linkedin.com/in/rafamojica/",
  },
  {
    name: "github",
    Icon: Github,
    color: "#000000",
    href: "https://github.com/RafaMojica",
  },
  {
    name: "instagram",
    Icon: Instagram,
    color: "#000000",
    href: "https://instagram.com/rafa_mojica_",
  },
  {
    name: "mail",
    Icon: Mail,
    color: "#000000",
    href: "mailto:rafael.mojica27@gmail.com",
  },
  {
    name: "mobil",
    Icon: Mobil,
    color: "#000000",
    href: "https://wa.link/r6856s",
  },
];

export default SOCIAL_NETWORKS;
