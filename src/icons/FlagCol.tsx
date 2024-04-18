import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const FlagCol: FC<IconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="25"
      fill="none"
      viewBox="0 0 35 35"
    >
      <g fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
        <path fill="#FACD37" d="M0 0h35v35H0V0Z" />
        <path fill="#00148E" d="M0 16.5h35V35H0V17.5Z" />
        <path fill="#DA0010" d="M0 26.25h35V35H0v-8.75Z" />
      </g>
      <defs>
        <clipPath id="a">
          <rect width="35" height="35" fill="#fff" rx="17.5" />
        </clipPath>
      </defs>
    </svg>
  );
};
