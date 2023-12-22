"use client";
import { useRouter } from "next/navigation";
import React from "react";

function LoginHeader() {
  const router = useRouter();
  return (
    <nav className="lg:flex lg:flex-row flex-wrap max-w-full items-center text-center justify-end pb-4 pr-4 pl-4 mt-1">
      <div className=" cursor-pointer lg:flex-auto   flex lg:min-w-0 min-h-0 lg:self-start lg:w-auto text-left">
        <img
          className="w-20 mt-[-3px] align-middle ml-0"
          src="\icons8-logo.svg"
          onClick={() => router.push("/")}
        />

        <h1 className="text-7xl font-mono text-center mx-auto font-black">SCHEME</h1>
      </div>

      <div className=" relative inline-block lg:pl-12 text-base items-center mt-4 lg:mt-0">
        <select
          data-current-lang="en-US"
          className="  border-[1px] border-black"
        >
          <option title="English (en-US)" value="en-US">
            English (en-US)
          </option>
        </select>
      </div>
    </nav>
  );
}

export default LoginHeader;
