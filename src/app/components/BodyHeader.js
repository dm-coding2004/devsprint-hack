import React from "react";

function BodyHeader() {
  return (
    <header className="mt-4 mb-32 pl-4 pr-4 max-w-[96rem] mr-auto ml-auto ">
      <div className="flex flex-row z-50">
        <div className="w-[70%] ml-40">
          <h1 className="text-8xl mb-0 mt-0  font-black relative tracking-[1px]">
            Sahay
          </h1>
          <h2 className="mt-10 mb-0 text-4xl font-normal line-clamp-2 ">
            Description
            <br />
            of product
          </h2>
        </div>
        <div className="pl-0 pr-0 flex flex-col  w-[330px] mr-[220px] cursor-pointer">
          <div className="flex items-center justify-center mt-[17px] h-[86px]  border-[1px] hover:border-black rounded-md border-[#ffc832] w-[340px] bg-[#ffc832]">
            <a id="#" className=" font-bold text-[25px]">
              Search Schemes
            </a>
          </div>
          <div className="flex items-center justify-center mt-4">
            <h1 className=" text-[26px] text-[#4299bf] underline">Namaste!</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
export default BodyHeader;
