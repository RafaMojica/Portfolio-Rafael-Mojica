import React, { FC } from "react";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  id: string;
  className?: string;
}

const Layout: FC<LayoutProps> = ({ id, children, className }) => {
  return (
    <section
      id={id}
      className={`max-w-[950px] mx-auto px-3
      ${className || ""}`}
    >
      {children}
    </section>
  );
};

export default Layout;
