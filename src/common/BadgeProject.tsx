import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface BadgeProjectProps {
  href: string;
  title: string;
  Icon: ReactNode;
}

const BadgeProject: FC<BadgeProjectProps> = ({ Icon, title, href }) => {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-center justify-center px-4 py-2 rounded-xl gap-1 hover:scale-105 transition ease-in-out duration-300 font-medium border-2 border-transparent outline-transparent
      text-white bg-gray-700 hover:bg-black
      dark:text-white dark:bg-gray-700 dark:hover:bg-black hover:border-secondary hover:outline-secondary
      "
    >
      {Icon}
      <span>{title}</span>
    </Link>
  );
};

export default BadgeProject;
