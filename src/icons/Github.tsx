import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const Github: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={`${className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 30 30"
    >
      <g clip-path="url(#a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.25 23.75C5.875 25.5 5.875 20.625 3.75 20m15 6.25v-4.375c0-1.25.125-1.75-.625-2.5 3.5-.375 6.875-1.75 6.875-7.5a5.75 5.75 0 0 0-1.625-4 5.25 5.25 0 0 0-.125-4S21.875 3.5 18.875 5.5a15.375 15.375 0 0 0-7.75 0c-3-2-4.375-1.625-4.375-1.625a5.25 5.25 0 0 0-.125 4 5.75 5.75 0 0 0-1.625 4c0 5.75 3.375 7.125 6.875 7.5-.75.75-.75 1.5-.625 2.5v4.375"
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
