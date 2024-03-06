import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const Menu: FC<IconProps> = ({
  width,
  height,
  strokeWidth,
  stroke,
  fill,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${className || ""}`}
      width={`${width || "24"}`}
      height={`${height || "24"}`}
      viewBox="0 0 24 24"
      strokeWidth={`${strokeWidth || "1.75"}`}
      stroke={`${stroke || "currentColor"}`}
      fill={`${fill || "none"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
    </svg>
  );
};