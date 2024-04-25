import Link from "next/link";
import React, { ComponentPropsWithoutRef, FC } from "react";

interface LinkButtonProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  name: string;
  children: JSX.Element | JSX.Element[];
}

const LinkButton: FC<LinkButtonProps> = ({
  name,
  href,
  children,
  className,
  ...linkButtonProps
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`enlace a la pagina ${name}`}
      className={`p-[2px] rounded-full bg-gradient-to-b from-dGradientPrimary to-dGradientSecondary hover:scale-110 duration-500 ease-in-out ${
        className || ""
      }`}
      {...linkButtonProps}
    >
      <div className="p-4 md:p-5 rounded-full bg-dBg text-dSecondary hover:text-dBg hover:bg-gradient-to-b hover:from-dGradientPrimary hover:to-dGradientSecondary">
        {children}
      </div>
    </Link>
  );
};

export default LinkButton;
