import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const Instagram: FC<IconProps> = ({
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
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M16.5 7.5l0 .01" />
    </svg>
  );
};
