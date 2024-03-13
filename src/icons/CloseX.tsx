import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const CloseX: FC<IconProps> = ({
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
      width={`${width || "30"}`}
      height={`${height || "30"}`}
      viewBox="0 0 24 24"
      strokeWidth={`${strokeWidth || "1.75"}`}
      fill={`${fill || "none"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
