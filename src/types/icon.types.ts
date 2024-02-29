import { FC } from "react";

export interface IconProps {
  width?: string;
  height?: string;
  strokeWidth?: string;
  stroke?: string;
  fill?: string;
  className?: string;
}

export interface IconDescription {
  name: string;
  Icon: FC<IconProps>;
  color: string;
  href: string;
};
