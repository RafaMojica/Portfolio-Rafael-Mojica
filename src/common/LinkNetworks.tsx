import React, { ComponentPropsWithoutRef, FC } from "react";
import NextLink from "next/link";

interface LinkNetworks extends ComponentPropsWithoutRef<"a"> {
  children: JSX.Element | JSX.Element[];
  padding?: string;
  href: string;
}

const LinkNetworks: FC<LinkNetworks> = ({
  children,
  href,
  className,
  padding,
}) => {
  return (
    <NextLink
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <div
        className={`rounded-full shadow-lg shadow-shodowGrey400 p-${
          padding || 6
        } cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-secondary hover:text-buttonTextMain ${
          className || ""
        }`}
      >
        {children}
      </div>
    </NextLink>
  );
};

export default LinkNetworks;
