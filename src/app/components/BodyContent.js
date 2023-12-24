import React from "react";

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
            <h1 className=" font-semibold text-[33px] "> Overview</h1>
            <p className=" font-light text-[19px]   pt-[35px]">
              India has implemented a plethora of government schemes aimed at
              fostering socio-economic development and improving the quality of
              life for its citizens.Additionally, the Swachh Bharat Abhiyan
              strives to achieve nationwide cleanliness and sanitation.
            </p>
          </section>

          <section className="pb-0 pt-0 pr-0 pl-0 mt-10 w-full ml-[65px] ">
            <h1 className=" font-semibold text-[33px] "> Social Welfare</h1>
            <p className=" font-light text-[19px]  pt-[35px]">
              Several government schemes specifically target social welfare,
              focusing on vulnerable and marginalized sections of society. The
              Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)
              guarantees 100 days of employment in a financial year to rural
              households.
            </p>
          </section>

          <section className="pb-0 pt-0 pr-0 pl-0 mt-10 w-full ml-[65px] ">
            <h1 className=" font-semibold text-[33px] ">
              Economic Dev
            </h1>
            <p className=" font-light text-[19px] pt-[35px]">
              To stimulate economic growth and entrepreneurship, the government
              has introduced schemes such as the Make in India campaign,
              promoting manufacturing and job creation.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default BodyContent;
