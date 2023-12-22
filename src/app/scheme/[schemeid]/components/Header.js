"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Header({ user }) {
  const router = useRouter();

  return (
    <nav className="lg:flex lg:flex-row flex-wrap max-w-full items-center text-center justify-end pb-4 pr-4 pl-4 mt-1">
      <div className=" cursor-pointer lg:flex-auto   lg:flex lg:min-w-0 min-h-0 lg:self-start lg:w-auto text-left">
        <img
          className="w-20 mt-[-3px] align-middle ml-0 "
          src="\icons8-logo.svg "
          alt="S"
          onClick={() => router.push("/")}
        />
      </div>
      <ul className="flex lg:flex-row flex-col list-none  items-center justify-center  lg:space-x-[35px]  text-lg m-auto  text-black cursor-pointer">
        <li className="lg:pl-8 underline mt-4 lg:mt-0 ">
          {user !== null && user?.phoneNumber}
        </li>
        <li
          className="lg:pl-8 underline mt-4 lg:mt-0 "
          onClick={() => {
            if (user === null) {
              router.push("Login");
            } else {
              router.push("Search");
            }
          }}
        >
          Search
        </li>

        <li
          className=" lg:pl-8 underline mt-4 lg:mt-0"
          onClick={() => {
            if (user === null) {
              router.push("Login");
            } else {
              router.push("Settings");
            }
          }}
        >
          Settings/Profile
        </li>
        {user === null && (
          <li
            className=" lg:pl-8 underline  lg:full line mt-4 lg:mt-0"
            onClick={() => router.push("Login")}
          >
            Login
          </li>
        )}

        <li
          className=" lg:pl-8 underline mt-4 lg:mt-0"
          onClick={() => router.push("AboutUs")}
        >
          About Us
        </li>
      </ul>
      <div className=" relative inline-block lg:pl-12 text-base items-center  lg:mt-0">
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

export default Header;
