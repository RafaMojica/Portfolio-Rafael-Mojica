import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const Mail: FC<IconProps> = ({
  width,
  height,
  strokeWidth,
  stroke,
  fill,
  className,
}) => {
  return (
    <svg
      className={`${className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
      width={`${width || "30"}`}
      height={`${height || "30"}`}
      viewBox="0 0 24 24"
      strokeWidth={`${strokeWidth || "1.5"}`}
      stroke={`${stroke || "currentColor"}`}
      fill={`${fill || "none"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
      <path d="M3 7l9 6l9 -6" />
    </svg>
  );
};
