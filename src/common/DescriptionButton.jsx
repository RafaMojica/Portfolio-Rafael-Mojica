import React from "react";

const DescriptionButton = ({ frontUrl, demoUrl }) => {
  return (
    <>
      <a href={frontUrl} target="_blank" rel="noreferrer">
        <button className="px-8 py-2 mt-8 hover:scale-110 ease-in duration-300">
          Front
        </button>
      </a>
      <a href={demoUrl} target="_blank" rel="noreferrer">
        <button className="px-8 py-2 mt-8 hover:scale-110 ease-in duration-300">
          Demo
        </button>
      </a>
    </>
  );
};

export default DescriptionButton;
