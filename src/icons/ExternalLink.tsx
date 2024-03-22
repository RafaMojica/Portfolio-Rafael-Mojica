import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const ExternalLink: FC<IconProps> = ({
  width,
  height,
  fill,
  strokeWidth,
  stroke,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${className || ""}`}
      width={`${width || "22"}`}
      height={`${height || "22"}`}
      viewBox="0 0 24 24"
      strokeWidth={`${strokeWidth || "1.75"}`}
      stroke={`${stroke || "currentColor"}`}
      fill={`${fill || "none"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
      <path d="M11 13l9 -9" />
      <path d="M15 4h5v5" />
    </svg>
  );
};
