import { IconProps } from "@/types/icon.types";
import { FC } from "react";

export const Moon: FC<IconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="#9ca3af"
      stroke="#9ca3af"
      viewBox="0 0 24 24"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992zM17 4a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2M19 11h2m-1-1v2" />
    </svg>
  );
};
