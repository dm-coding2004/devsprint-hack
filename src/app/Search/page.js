"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useRouter } from "next/navigation";
import Link from "next/link";

function page() {
  const [filter, setFilter] = useState(false);
  const router = useRouter();
  const [schemeLists, setSchemeLists] = useState([]);
  const [fiveQuery, setFiveQuery] = useState({
    gender: "Any",
    scheme_cat: "Any",
    region: "Central",
  });
  async function handleClick(e) {
    e.preventDefault();
    // const response = await fetch(`http://localhost:9000/search/v1`, {
    //   method: "GET",
    //   // body: JSON.stringify({...fiveQuery}),
    // });
    // const data = await response.json();
    // console.log(data);
    // setSchemeLists(data);
  }

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://devsprint-hack-server-production.up.railway.app/search/v1`, {
        method: "GET",
      });
      const data = await response.json();
      // console.log(data);
      setSchemeLists(data);
    }
    getData();
  }, []);
  return (
    <>
      <Header />
      <div className="flex items-center justify-around flex-row  my-8 ">
        <div className=" block w-[50%] relative">
          <span onClick={handleClick}>
            <SearchIcon
              className="inline absolute text-black text-4xl -translate-x-1/2 -translate-y-1/2 
          top-1/2 left-12 z-10 m-0 "
            />
          </span>
          <form onSubmit={handleClick}>
            <input
              className="bg-slate-100 border-0 border-slate-500 active:outline-0 active:border-collapse
        hover:border-collapse hover:outline-0 focus:outline-none pl-24
        focus:border-4 w-full p-7 rounded-lg text-xl top-0
        font-bold tracking-wider text-black"
              type="text"
            />
            <button style={{ display: "none" }} type="submit">
              Ok
            </button>
          </form>

          <span onClick={() => setFilter(!filter)}>
            <FilterListIcon
              className="inline absolute cursor-pointer text-black text-4xl translate-x-1/2 -translate-y-1/2 
          top-1/2 right-12 z-10 m-0 "
            />
          </span>
        </div>
      </div>
      {filter && (
        <div
          className="bg-slate-300 h-auto pb-10 flex flex-wrap flex-row justify-between
       items-center "
        >
          <div className="ml-6 mr-6 mt-9">
            <label
              className="py-4 px-12 text-lg font-sans font-bold"
              for="gender"
            >
              Gender:
            </label>
            <select
              className="p-4 text-lg font-sans font-bold focus:outline-0"
              id="gender"
              name="gender"
              value={fiveQuery.gender}
              onChange={(e) =>
                setFiveQuery({ ...fiveQuery, gender: e.target.value })
              }
            >
              <option value="Any" selected={fiveQuery.gender === "Any"}>
                Any
              </option>
              <option value="Women" selected={fiveQuery.gender === "Women"}>
                Women
              </option>
              <option value="Men" selected={fiveQuery.gender === "Men"}>
                Men
              </option>
            </select>
          </div>

          <div className="ml-6 mr-6 mt-9">
            <label
              className="py-4 px-12 text-lg font-sans font-bold"
              for="region"
            >
              Region:
            </label>
            <select
              className="p-4 text-lg font-sans font-bold focus:outline-0"
              id="region"
              name="region"
              value={fiveQuery.region}
              onChange={(e) =>
                setFiveQuery({ ...fiveQuery, region: e.target.value })
              }
            >
              <option value="Central" selected={fiveQuery.region === "Central"}>
                Central
              </option>
              <option
                value="Karnataka"
                selected={fiveQuery.region === "Karnataka"}
              >
                Karnataka
              </option>
            </select>
          </div>
          <div className="ml-6 mr-6 mt-9">
            <label
              className="py-4 px-12 text-lg font-sans font-bold"
              for="scheme_cat"
            >
              Scheme Category:
            </label>
            <select
              className="p-4 text-lg font-sans font-bold focus:outline-0"
              id="scheme_cat"
              name="scheme_cat"
              value={fiveQuery.scheme_cat}
              onChange={(e) =>
                setFiveQuery({ ...fiveQuery, scheme_cat: e.target.value })
              }
            >
              <option value="Any" selected={fiveQuery.scheme_cat === "Any"}>
                Any
              </option>
              <option
                value="Finance"
                selected={fiveQuery.scheme_cat === "Finance"}
              >
                Finance
              </option>
              <option
                value="Agriculture"
                selected={fiveQuery.scheme_cat === "Agriculture"}
              >
                Agriculture
              </option>
              <option
                value="Women And Child Development"
                selected={
                  fiveQuery.scheme_cat === "Women And Child Development"
                }
              >
                Women and Child Development
              </option>
              <option
                value="Industry"
                selected={fiveQuery.scheme_cat === "Industry"}
              >
                {" "}
                Skill and Industry
              </option>
              <option value="Misc" selected={fiveQuery.scheme_cat === "Misc"}>
                {" "}
                Power and Electronics
              </option>
            </select>
          </div>
        </div>
      )}

      {schemeLists.map((ele) => (
        <div
          className="bg-stone-300 hover:bg-stone-400/65 mt-6 p-4 text-black font-black"
          // onClick={() => router.push(`/scheme/${ele.scheme_sname}`)}
        >
          <Link href={`/scheme/${ele.scheme_sname}`} target="_blank">
            <h2
              className="bg-slate-400 cursor-pointer
           rounded-md p-3 text-3xl"
            >
              {ele.scheme_name} <span>{`(${ele.scheme_sname})`}</span>
            </h2>
            <p className="bg-stone-400 mt-4 p-3 text-lg">{ele.scheme_desc}</p>
          </Link>
        </div>
      ))}

      <Footer />
    </>
  );
}

export default page;
