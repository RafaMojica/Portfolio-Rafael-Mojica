import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const ArrowDown: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={`${className || ""}`}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_31)">
        <path
          d="M42.5 32.5V17.5L30 27.5L17.5 17.5V32.5L30 42.5L42.5 32.5Z"
          stroke="url(#paint0_linear_1_31)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="59"
        height="59"
        stroke="black"
        strokeOpacity="0.1"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_31"
          x1="30"
          y1="17.5"
          x2="30"
          y2="42.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2275EE" />
          <stop offset="1" stopColor="#EB00FF" />
        </linearGradient>
        <clipPath id="clip0_1_31">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
