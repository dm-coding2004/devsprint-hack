"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function page() {
  const [choice, setChoice] = useState("profile");
  return (
    <div>
      <Header />
      <div className="w-full h-auto flex flex-row">
        <div className="basis-[540px] bg-slate-50 flex-shrink-0 h-[80vh]">
          <div
            onClick={() => setChoice("profile")}
            className="h-28 w-full text-2xl font-bold tracking-wider
           font-sans p-6 bg-slate-100 align-sub
          border-2 border-stone-200 text-center hover:bg-slate-200 cursor-pointer"
          >
            <p className="mx-auto mt-4">Profile</p>
          </div>
          <div
            onClick={() => setChoice("liked Scheme")}
            className="h-28 w-full text-2xl text-center 
          font-bold tracking-wider hover:bg-slate-200 cursor-pointer
           border-stone-200 font-sans p-6 bg-slate-100  border-2"
          >
            <p className="mx-auto mt-4">Liked Scheme</p>
          </div>
        </div>
        <div className="flex-1 bg-stone-100 flex-shrink-0 h-[80vh]">
          <h2
            className="font-extrabold font-sans text-4xl ml-5 
          mt-5 border-b-slate-800 border-b-2 pb-4 mr-5"
          >
            {choice[0].toLocaleUpperCase() + choice.slice(1)}
          </h2>
          {choice === "profile" ? (
            <>
              {" "}
              <div className="ml-7 mt-10 mr-5  bg-stone-200 ">
                <p
                  className="text-2xl 
          font-bold tracking-wider
           border-b-stone-300 font-sans p-10   border-b-2"
                >
                  <span>Phone No.:</span>
                  {"  "}
                  <span>{localStorage.getItem("phoneNumber")}</span>
                </p>
              </div>
              <div className="ml-7 mr-5 bg-stone-200 ">
                <p
                  className="text-2xl 
          font-bold tracking-wider 
           border-b-stone-300 font-sans p-10 border-b-2"
                >
                  <span>Unique ID:</span>
                  {"  "}
                  <span>{localStorage.getItem("userUID")}</span>
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Make that into reuseable Component! */}
              {/* <div className="ml-7 mt-10 mr-5  bg-stone-200 ">
                <p
                  className="text-2xl 
          font-bold tracking-wider
           border-b-stone-300 font-sans p-10   border-b-2"
                >
                  <span>Phone No.:</span>
                  {"  "}
                  <span>{localStorage.getItem("phoneNumber")}</span>
                </p>
              </div> */}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
