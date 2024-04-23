import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const Mobil: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={`${className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 30 30"
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6.25 5h5l2.5 6.25-3.125 1.875a13.75 13.75 0 0 0 6.25 6.25l1.875-3.125 6.25 2.5v5a2.5 2.5 0 0 1-2.5 2.5A20 20 0 0 1 3.75 7.5 2.5 2.5 0 0 1 6.25 5Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
