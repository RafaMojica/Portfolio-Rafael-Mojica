import React from "react";

const DescriptionButton = ({frontUrl, backUrl, demoUrl, webUrl}) => {
  return (
    <div className="flex justify-around flex-wrap">
      <a href={backUrl} target="_blank" rel="noreferrer">
        <button className="px-8 py-2 mt-8 hover:scale-110 ease-in duration-300">Back</button>
      </a>
      <a href={frontUrl} target="_blank" rel="noreferrer">
        <button className="px-8 py-2 mt-8 hover:scale-110 ease-in duration-300">Front</button>
      </a>
      <a href={demoUrl} target="_blank" rel="noreferrer">
        <button className="px-8 py-2 mt-8 hover:scale-110 ease-in duration-300">Demo</button>
      </a>
      <a href={webUrl} target="_blank" rel="noreferrer">
        <button className="px-8 py-2 mt-8 hover:scale-110 ease-in duration-300">Pagina Web</button>
      </a>
    </div>
  );
};

export default DescriptionButton;
