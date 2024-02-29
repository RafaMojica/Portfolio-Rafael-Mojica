import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

const Technologies = ({ technologie }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-1">
      <p className="text-primary py-2 flex items-center">
        <RiRadioButtonFill className="pr-1" /> {technologie}</p>
    </div>
  );
};

export default Technologies;
