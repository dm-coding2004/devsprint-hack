"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-[#2a3439] mt-10 text-white max-w-full h-full ">
      <div className="mr-auto ml-auto max-h-full max-w-[1300px] pr-4 pl-4  ">
        <div className="lg:flex">
          <section className="lg:pb-0  pr-0 pl-0 lg:mt-10  max-w-full sm:ml-[100px] lg:pt-0    pt-10">
            <h1 className=" font-semibold text-[33px]  ">Get help!</h1>
            <ul className=" font-light text-[19px] pb-4 text-[#ffc832] pt-[35px] space-y-4 cursor-pointer">
              <li className="text-2xl cursor-default">Help us improve ? </li>
              <li
                className="hover:underline text-xl"
                onClick={() => router.push("Feedback")}
              >
                {" "}
                Give feedback
              </li>
            </ul>
            <div className=" relative inline-block  text-base  ">
              <select
                data-current-lang="en-US"
                className=" text-black border-[1px] border-black"
              >
                <option title="English (en-US)" value="en-US">
                  English (en-US)
                </option>
              </select>
            </div>
          </section>

          <section className="pb-0 pt-0 pr-0 pl-0 mt-10 max-w-full sm:ml-[100px] ">
            <h1 className=" font-semibold text-[33px] ">Terms and policies</h1>
            <ul className=" font-light text-[19px] pb-4 text-[#ffc832] pt-[35px] space-y-4 cursor-pointer ">
              <li className="hover:underline">Code of Conduct</li>
              <li className="hover:underline">Licenses</li>
              <li className="hover:underline">Logo Policy and Media Guide</li>
              <li className="hover:underline">Secutity Disclosures</li>
              <li className="hover:underline">Privacy Notice</li>
              <li className="hover:underline">All Policies</li>
            </ul>
          </section>

          <section className="lg:pb-0 pt-0 pr-0 pl-0 mt-10 pb-40 max-w-full sm:ml-[100px] ">
            <h1 className=" font-semibold text-[33px] ">Social</h1>
            <div className="brand cursor-pointer  self-start w-auto flex space-x-6 pt-6">
              <img
                src="https://www.rust-lang.org/static/images/mastodon.svg"
                className="w-10 mt-[-3px] align-middle ml-0"
              ></img>

              <img
                src="https://www.rust-lang.org/static/images/twitter.svg"
                className="w-10 mt-[-3px] align-middle ml-0"
              ></img>

              <img
                src="https://www.rust-lang.org/static/images/youtube.svg"
                className="w-10 mt-[-3px] align-middle ml-0"
              ></img>

              <img
                src="https://www.rust-lang.org/static/images/discord.svg"
                className="w-10 mt-[-3px] align-middle ml-0"
              ></img>

              <img
                src="https://www.rust-lang.org/static/images/github.svg"
                className="w-10 mt-[-3px] align-middle ml-0"
              ></img>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
