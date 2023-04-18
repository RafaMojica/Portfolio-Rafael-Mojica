import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

const Technologies = ({ technologie }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-1">
      <p className="text-gray-600 py-2 flex items-center">
        <RiRadioButtonFill className="pr-1" /> {technologie}</p>
    </div>
  );
};

export default Technologies;
