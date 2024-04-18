import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const Sun: FC<IconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 35 36"
    >
      <g
        stroke="#FACC15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#a)"
      >
        <path
          fill="#FACC15"
          d="M21.624 22.124a5.835 5.835 0 1 0-8.107-8.393 5.835 5.835 0 0 0 8.107 8.393Z"
        />
        <path d="m9.25 26.25-2.062 2.062M9.25 9.75 7.188 7.688M25.75 9.75l2.062-2.062M25.75 26.25l2.062 2.062M5.833 18H2.917M17.5 6.333V3.417M29.167 18h2.916M17.5 29.667v2.916" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .5h35v35H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
