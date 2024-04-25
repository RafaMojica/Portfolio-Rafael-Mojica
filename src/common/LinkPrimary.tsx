import { Github } from "@/icons/Github";
import Link from "next/link";
import React, { ComponentPropsWithoutRef, FC } from "react";

interface LinkButtonProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  name: string;
}

const LinkPrimary: FC<LinkButtonProps> = ({ href, name }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`enlace repositorio github`}
      className="p-[2px] rounded-full font-medium bg-gradient-to-b from-dGradientPrimary to-dGradientSecondary hover:scale-110 duration-500 ease-in-out"
    >
      <div className="flex gap-2 text-sm justify-center items-center px-6 py-3 rounded-full bg-[#0D0D0D] text-dSecondary hover:text-dBg hover:bg-gradient-to-b hover:from-dGradientPrimary hover:to-dGradientSecondary">
        {href.startsWith("https://github.com") ? <Github /> : ""} {name}
      </div>
    </Link>
  );
};

export default LinkPrimary;
