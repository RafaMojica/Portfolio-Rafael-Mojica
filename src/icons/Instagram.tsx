import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const Instagram: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={`${className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 30 30"
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#a)"
      >
        <path d="M5 10a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V10Z" />
        <path d="M11.25 15a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0ZM20.625 9.375v.012" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
