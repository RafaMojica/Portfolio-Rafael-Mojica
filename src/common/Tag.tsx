import { IconProps } from "@/types/icon.types";
import React, { FC } from "react";

interface TagProps {
  name: string;
  Icon: FC<IconProps>;
  color: string;
}

const Tag = ({ name, Icon }: TagProps) => {
  return (
    <span
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full inline-flex items-center
       bg-tag/10 text-primary
       dark:bg-dark-tag/50 dark:text-primary`}
    >
      <Icon
        className="p-0.5 me-1"
        aria-hidden="true"
        height="22px"
        width="22px"
      />
      {name}
    </span>
  );
};

export default Tag;
