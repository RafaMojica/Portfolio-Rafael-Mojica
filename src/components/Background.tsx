import React from "react";

const Background = () => {
  return (
    <>
      <div
        className="fixed -z-30 h-full w-full bg-background-bg
        bg-gradient-to-b dark:from-dark-background-bg dark:from-75% dark:to-blue-950 md:from-0% md:dark:to-dark-background-bg"
      >
        <div
          className="absolute left-[1100px] right-0 top-[150px] -z-30 m-auto h-[410px] w-[410px] rounded-full bg-background-circleUpBg
         dark:bg-dark-background-bg md:dark:bg-dark-background-circleUpBg opacity-20 dark:opacity-30 blur-[110px]"
        ></div>
        <div
          className="absolute left-0 right-[1150px] top-[400px] -z-30 m-auto h-[510px] w-[510px] rounded-full bg-background-circleDownBg
         dark:bg-dark-background-bg md:dark:bg-dark-background-circleDownBg opacity-20 dark:opacity-30 blur-[110px]"
        ></div>
      </div>
    </>
  );
};

export default Background;
