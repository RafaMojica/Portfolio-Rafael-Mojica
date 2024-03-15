import React from "react";

const Background = () => {
  return (
    <>
      <div
        className="fixed -z-30 h-full w-full bg-blue-600/20
        bg-gradient-to-b dark:from-gray-950 dark:from-70% dark:to-blue-950 md:from-0% md:dark:to-gray-950"
      >
        <div className="absolute left-[1100px] right-0 top-[150px] -z-30 m-auto h-[410px] w-[410px] rounded-full bg-blue-500 dark:bg-gray-900 md:dark:bg-blue-600 opacity-20 dark:opacity-30 blur-[110px]"></div>
        <div className="absolute left-0 right-[1150px] top-[400px] -z-30 m-auto h-[510px] w-[510px] rounded-full bg-blue-500 dark:bg-gray-900 md:dark:bg-blue-600 opacity-20 dark:opacity-30 blur-[110px]"></div>
        <div className="hidden md:block">
          <div
            className="fixed inset-0 -z-30 h-full w-full bg-[size:6rem_4rem] md:opacity-60
            bg-[linear-gradient(to_right,#f0f0f0,transparent_1px),linear-gradient(to_bottom,#f0f0f0,transparent_1px)] 
            dark:bg-[linear-gradient(to_right,#274C89,transparent_1px),linear-gradient(to_bottom,#274C89,transparent_1px)] md:dark:opacity-20"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Background;
