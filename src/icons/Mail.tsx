import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const Mail: FC<IconProps> = ({ className }) => {
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
        <path d="M3.75 8.75a2.5 2.5 0 0 1 2.5-2.5h17.5a2.5 2.5 0 0 1 2.5 2.5v12.5a2.5 2.5 0 0 1-2.5 2.5H6.25a2.5 2.5 0 0 1-2.5-2.5V8.75Z" />
        <path d="M3.75 8.75 15 16.25l11.25-7.5" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
