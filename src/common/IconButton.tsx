import React, { ComponentPropsWithoutRef, FC } from "react";
import Link from "next/link";

interface IconButtonProps extends ComponentPropsWithoutRef<"a"> {
  children: JSX.Element | JSX.Element[];
  href: string;
  className?: string;
}

const IconButton: FC<IconButtonProps> = ({ children, href, className }) => {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <li
        className={`text-primary rounded-full p-4 md:p-5 cursor-pointer  hover:scale-110 hover:bg-secondary ease-in duration-300
         dark:hover:bg-dark-secondary shadow-lg shadow-shadow dark:shadow-dark-shadow dark:bg-dark-button/50 dark:text-dark-primary ${
           className || ""
         }`}
      >
        {children}
      </li>
    </Link>
  );
};

export default IconButton;
