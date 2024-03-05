import { FC } from "react";
import { IconProps } from "./icon.types";

export interface Technology {
  name: string;
  Icon: FC<IconProps>;
  color: string;
  href: string;
}

export interface Technologies {
  Next: Technology;
  React: Technology;
  Redux: Technology;
  JavaScript: Technology;
  TypeScript: Technology;
  Node: Technology;
  Express: Technology;
  PostgreSQL: Technology;
  Sequialize: Technology;
  MongoDB: Technology;
  Mongoose: Technology;
  Jest: Technology;
  Docker: Technology;
  AWS: Technology;
  Tailwind: Technology;
  MaterialUI: Technology;
  Sass: Technology;
  HTML: Technology;
  CSS: Technology;
  Git: Technology;
  GitHub: Technology;
  Postman: Technology;
  Linux: Technology;
  VSCode: Technology;
  Figma: Technology;
  Notion: Technology;
}
