import { FC } from "react";
import { IconProps } from "./icon.types";

export interface Contact {
  linkedin: SocialNetworks;
  github: SocialNetworks;
  instagram: SocialNetworks;
  mail: SocialNetworks;
  mobil: SocialNetworks;
}

export interface SocialNetworks {
  name: string;
  Icon: FC<IconProps>;
  color: string;
  href: string;
}
