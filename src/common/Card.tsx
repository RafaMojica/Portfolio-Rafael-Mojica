import React, { FC } from "react";

interface CardProps {
  children: JSX.Element[] | JSX.Element;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <article
      className={`p-5 sm:p-9 rounded-2xl flex flex-col items-center gap-6 h-full bg-dSecondary/5 ${
        className || ""
      }`}
    >
      {children}
    </article>
  );
};

export default Card;
