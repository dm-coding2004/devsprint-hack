import React from 'react'

function BodyContent() {
  return (
  <section className="bg-[#0b7261] text-white w-full h-[500px] top-0 mt-[-22px]">
      <div className="mr-auto ml-auto h-full w-full pr-4 pl-4  ">
        <div className="w-full h-[76px]">
          <header className="pb-0 pt-[10px] pr-0 ml-[56px]  inline-block mt-7 h-[76px] w-52 text-center bg-[#0b7261]">
            <h2 className="font-bold text-4xl">Schemes?</h2>
            <div className="bg-[#2e2459] h-3 relative top-0 w-[105%] rounded-sm"></div>
          </header>
        </div>
        <div className="flex">
          <section className="pb-0 pt-0 pr-0 pl-0 mt-10 w-full ml-[65px] ">
            <h1 className=" font-semibold text-[33px] ">Performance</h1>
            <p className=" font-light text-[19px]   pt-[35px]">
              Schemes is blazingly fast and memory-efficient: with no runtime or
              garbage collector, it can power performance-critical services, run
              on embedded devices, and easily integrate with other languages.
            </p>
          </section>

          <section className="pb-0 pt-0 pr-0 pl-0 mt-10 w-full ml-[65px] ">
            <h1 className=" font-semibold text-[33px] ">Reliability</h1>
            <p className=" font-light text-[19px]  pt-[35px]">
              Schemes's rich type system and ownership model guarantee
              memory-safety and thread-safety — enabling you to eliminate many
              classes of bugs at compile-time.
            </p>
          </section>

          <section className="pb-0 pt-0 pr-0 pl-0 mt-10 w-full ml-[65px] ">
            <h1 className=" font-semibold text-[33px] ">Performance</h1>
            <p className=" font-light text-[19px] pt-[35px]">
              Schemes has great documentation, a friendly compiler with useful
              error messages, and top-notch tooling — an integrated package
              manager and build tool, smart multi-editor support with
              auto-completion and type inspections, an auto-formatter, and more.
            </p>
          </section>
        </div>
      </div>
      </section>

  )
}

export default BodyContent