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
        className={`rounded-full p-4 md:p-5 cursor-pointer shadow-lg shadow-gray400 hover:scale-110 hover:bg-secondary ease-in duration-300 ${
          className || ""
        }`}
      >
        {children}
      </li>
    </Link>
  );
};

export default IconButton;
