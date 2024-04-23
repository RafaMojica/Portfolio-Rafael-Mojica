import { Github } from "@/icons/Github";
import { Instagram } from "@/icons/Instagram";
import { Linkedin } from "@/icons/Linkedin";
import { Mail } from "@/icons/Mail";
import { Mobil } from "@/icons/Mobil";

export const CONTACTS = {
  linkedin: {
    name: "linkedin",
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/rafamojica/",
  },
  github: {
    name: "github",
    Icon: Github,
    href: "https://github.com/RafaMojica",
  },
  instagram: {
    name: "instagram",
    Icon: Instagram,
    href: "https://instagram.com/rafa_mojica_",
  },
  mail: {
    name: "mail",
    Icon: Mail,
    href: "mailto:rafael.mojica27@gmail.com",
  },
  mobil: {
    name: "mobil",
    Icon: Mobil,
    href: "https://wa.link/r6856s",
  },
  cv: {
    name: "curriculum",
    href: "https://drive.google.com/file/d/1Pe-UKjdPGVZC53y1DmgpNwx3PUDryUd4/view",
  },
};

export const SOCIAL_NETWORKS = [
  CONTACTS.linkedin,
  CONTACTS.github,
  CONTACTS.instagram,
  CONTACTS.mail,
  CONTACTS.mobil,
];
