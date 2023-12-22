"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function page({ params }) {
  const [data, setData] = useState(null);
  const schemeID = params.schemeid;
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://localhost:9000/scheme/v1/${schemeID}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result);
      const some = result.scheme_desc_more.split("\n");
      console.log(some);
      setData(result);
    }
    getData();
  }, []);
  return (
    <main>
      <Header />
      <main className="w-full h-auto">
        <div className="w-[60%]  ml-[20%] mr-[20%] py-10">
          <h1 className="font-sans font-black text-8xl">{data?.scheme_name}</h1>
        </div>
        <div className="bg-yellow-400 h-6 w-[70%] ml-[20%] mr-[10%]"></div>
        <div className="font-sans font-medium py-4 px-4 h-full text-2xl w-[70%] ml-[20%] mr-[10%] flow-root">
          {/* More Details Metadata */}
          <p className="float-left">
            Date : <span className="font-black">{data?.date_formed.slice(0,10)}</span>,
          </p>
          <pre className="float-left"> </pre>
          <p className="float-left">
            Scheme Cat : <span className="font-black">{data?.scheme_cat}</span>,
          </p>
          <pre className="float-left"> </pre>
          <p className="float-left">
            Region : <span className="font-black">{data?.region}</span>
          </p>
        </div>
        <div
          className="clear-both p-4 mt-6 mb-2 tracking-wider leading-relaxed
        w-[60%] ml-[20%] mr-[20%] font-medium text-2xl"
        >
          {data?.scheme_desc}
        </div>
        {data?.scheme_desc_more.split("\n").map((ele, index) => {
          if (ele.endsWith(":\r")) {
            return (
              <h2
                className="font-sans text-6xl pl-4
               w-[60%] ml-[20%] mr-[20%] font-black "
              >
                {ele}
              </h2>
            );
          } else if (ele === "\r") {
            null;
          } else {
            return (
              <div
                className="clear-both p-4 mt-6 tracking-wider leading-relaxed
        w-[60%] ml-[20%] mr-[20%] font-medium text-2xl"
              >
                <span className="text-lg align-middle">{"⚫"}</span> {ele}
              </div>
            );
          }
        })}
      </main>
      <Footer />
    </main>
  );
}

function tempComp() {
  return (
    <>
      <h2
        className="font-sans text-6xl pl-4
     w-[60%] ml-[20%] mr-[20%] font-black "
      >
        SubTitle
      </h2>
      <div
        className="clear-both p-4 mt-6 tracking-wider leading-relaxed
    w-[60%] ml-[20%] mr-[20%] font-medium text-2xl"
      >
        This is a big milestone, and we know many users will be itching to try
        these out in their own code. However, we are still missing some
        important features that many users need. Read on for recommendations on
        when and how to use the stabilized features.
      </div>
      <div
        className="clear-both p-4  tracking-wider leading-relaxed
        w-[60%] ml-[20%] mr-[20%] font-medium text-2xl"
      >
        This is a big milestone, and we know many users will be itching to try
        these out in their own code. However, we are still missing some
        important features that many users need. Read on for recommendations on
        when and how to use the stabilized features.
      </div>
    </>
  );
}

export default page;
