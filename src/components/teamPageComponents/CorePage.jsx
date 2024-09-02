import React from "react";
import CoreCard from "./Card/CoreCard";
import useDetails from "./context/Context";

function CorePage() {
  const details = useDetails();

  return (
    <div id="corePage" className="president_eb_ec font-['Roboto']">
      <div className="title flex flex-col items-center justify-center gap-y-4 mt-12 sm:mt-16 md:mt-24">
        <div className="text-[#ACB8CB] font-semibold text-center text-sm sm:text-base">
          ISTE
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="text-[#6C90C2] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-center w-full max-w-2xl mx-auto">
            CORE
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-24 mt-12 sm:mt-16 md:mt-24">
        <div data-aos='fade-up' data-aos-once='true' className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8" onContextMenu={(e) => e.preventDefault()}>
          {details.filter((_, i) => i >= 24).map((val, i) => (
            <div key={i + 24} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <CoreCard details={val} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CorePage;
