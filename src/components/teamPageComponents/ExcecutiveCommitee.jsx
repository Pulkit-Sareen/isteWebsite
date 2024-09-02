import React from 'react';
import Card from "./Card/Card";
import useDetails from './context/Context';

function ExecutiveCommitee() {
  const details = useDetails();

  return (
    <>
      <div className="president_eb_ec core__page font-['Roboto']">
        <div className="title flex flex-col items-center justify-center gap-y-4 px-4">
          <div className="text-[#ACB8CB] font-semibold text-center text-base sm:text-lg">
            ISTE
          </div>
          <div className="flex flex-col gap-y-6 items-center">
            <div className="text-[#6C90C2] font-bold text-center leading-tight max-w-full w-full px-4">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                EXECUTIVE COMMITTEE
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 items-center justify-center">
          <div 
            data-aos="fade-up" 
            data-aos-once="true" 
            className="opacity-0 gap-4 md:gap-8 flex flex-wrap justify-center mt-12 sm:mt-24 px-4 sm:px-8 w-full" 
            onContextMenu={(e) => e.preventDefault()}
          >
            {details.filter((_, i) => i >= 13 && i <= 23).map((val, i) => (
              <div key={i + 13} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
                <Card details={val} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExecutiveCommitee;
