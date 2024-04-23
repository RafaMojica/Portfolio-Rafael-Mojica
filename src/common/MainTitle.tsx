import React, { FC } from "react";

interface MainTitleProps {
  title: string;
  className?: string;
}

const MainTitle: FC<MainTitleProps> = ({ title, className }) => {
  return (
    <h2
      className={`text-3xl sm:text-4xl text-center font-bold text-dSecondary ${
        className || ""
      }`}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-dSecondary to-dPrimary">
        {title}
      </span>
    </h2>
  );
};

export default MainTitle;
