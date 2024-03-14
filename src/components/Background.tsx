import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed -z-30 h-full w-full bg-blue-600/20 dark:bg-gray-950">
        <div className="absolute left-[1100px] right-0 top-[150px] -z-30 m-auto h-[410px] w-[410px] rounded-full bg-blue-500 dark:bg-blue-600 opacity-20 dark:opacity-30 blur-[110px]"></div>
        <div className="absolute left-0 right-[1150px] top-[400px] -z-30 m-auto h-[510px] w-[510px] rounded-full bg-blue-500 dark:bg-blue-600 opacity-20 dark:opacity-30 blur-[110px]"></div>
        <div
          className="fixed inset-0 -z-30 h-full w-full bg-[size:6rem_4rem] md:opacity-60
          bg-[linear-gradient(to_right,#f0f0f0,transparent_1px),linear-gradient(to_bottom,#f0f0f0,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,#274C89,transparent_1px),linear-gradient(to_bottom,#274C89,transparent_1px)] md:dark:opacity-30"
        ></div>
      </div>
    </>
  );
};

export default Background;
