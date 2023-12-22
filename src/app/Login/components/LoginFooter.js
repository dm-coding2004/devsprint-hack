import React from "react";

function LoginFooter() {
  return (
    <footer className="bg-[#2a3439] text-white max-w-full lg:h-[250px] h-full top-0 lg:mt-[-22px] flex  items-center justify-center ">
      <div className="mr-auto ml-auto max-h-full max-w-[1300px] pr-4 pl-4  md:flex flex-col items-center justify-center hidden ">
        <h1 className="text-yellow-400 text-sm lg:text-3xl font-semibold">
          Login to retain your progress!{" "}
        </h1>
        <h1 className="text-yellow-400 text-sm lg:text-3xl font-semibold lg:pt-10">
          Thank you &#128578;
        </h1>
      </div>
    </footer>
  );
}

export default LoginFooter;
