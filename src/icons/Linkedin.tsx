import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const Linkedin: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={`${className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 7.5A2.5 2.5 0 0 1 7.5 5h15A2.5 2.5 0 0 1 25 7.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 5 22.5v-15ZM10 13.75V20M10 10v.012M15 20v-6.25"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 20v-3.75a2.5 2.5 0 0 0-5 0"
      />
    </svg>
  );
};
