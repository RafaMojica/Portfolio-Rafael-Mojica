import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const ArrowUp: FC<IconProps> = ({
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
      <path d="M17 11v6l-5 -4l-5 4v-6l5 -4z" />
    </svg>
  );
};
