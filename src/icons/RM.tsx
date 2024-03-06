import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const RM: FC<IconProps> = ({ width, height, fill, className }) => {
  return (
    <svg
      className={`${className || ""}`}
      width={`${width || "60"}`}
      height={`${height || "60"}`}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 501.000000 498.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,498.000000) scale(0.100000,-0.100000)"
        fill={`${fill || "#000000"}`}
        stroke="none"
      >
        <path
          d="M79 4936 c-14 -8 -30 -26 -37 -40 -15 -34 -18 -3898 -3 -3939 6 -14
            22 -34 38 -44 24 -16 58 -18 313 -21 320 -4 359 -1 398 33 l27 23 5 707 c5
            688 6 707 25 721 16 12 63 14 253 12 l234 -3 100 -215 c55 -118 149 -321 209
            -452 l109 -236 -204 -477 c-113 -263 -201 -474 -197 -469 7 8 159 271 732
            1264 84 146 163 283 176 305 12 22 23 46 23 52 0 7 -29 74 -65 149 -36 75 -65
            145 -65 155 0 13 22 29 75 56 245 121 396 328 461 633 22 101 32 763 14 923
            -14 128 -46 255 -89 349 -94 210 -284 383 -503 459 -191 66 -135 62 -1113 66
            -752 2 -894 0 -916 -11z m1667 -716 c78 -40 123 -95 149 -183 23 -76 22 -710
            -1 -787 -29 -99 -84 -158 -184 -197 -40 -15 -92 -18 -445 -21 -340 -3 -403 -1
            -420 12 -20 14 -20 28 -23 592 -2 512 -1 579 13 601 l16 24 413 -3 413 -3 69
            -35z"
        />
        <path
          d="M3864 4093 c-54 -10 -50 -1 -249 -658 -144 -476 -431 -1424 -471
            -1553 -31 -100 -37 -113 -56 -110 -18 3 -35 50 -135 383 -63 209 -112 389
            -109 400 3 11 95 229 205 484 111 256 199 466 197 468 -2 2 -52 -81 -112 -184
            -59 -103 -249 -433 -422 -733 -173 -300 -319 -554 -324 -565 -7 -16 14 -94 86
            -328 53 -168 148 -481 212 -694 63 -214 147 -494 186 -623 38 -129 78 -251 89
            -271 20 -40 67 -84 100 -94 30 -10 83 2 113 26 43 34 69 98 165 419 130 429
            376 1241 483 1590 50 162 145 476 212 697 111 368 136 437 151 422 3 -3 6
            -691 7 -1530 3 -1448 4 -1525 21 -1550 34 -51 58 -54 372 -54 317 0 344 4 370
            56 13 24 15 292 15 1976 0 1912 0 1949 -20 1980 -13 21 -31 35 -57 42 -36 10
            -979 14 -1029 4z"
        />
        <path
          d="M1966 1298 c-14 -22 -494 -853 -638 -1105 -39 -68 -68 -129 -65 -137
            9 -23 72 -27 372 -24 248 3 284 5 308 21 15 9 29 27 32 40 4 21 12 1227 8
            1227 -2 0 -9 -10 -17 -22z"
        />
      </g>
    </svg>
  );
};
