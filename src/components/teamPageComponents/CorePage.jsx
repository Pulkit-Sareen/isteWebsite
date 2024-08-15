import React, { useEffect } from "react";
import CoreCard from "./Card/CoreCard";
import useDetails from "./context/Context";

function CorePage() {
  // useEffect(() => {
  //   const options = {
  //     threshold: [0, 0.25, 0.5, 0.75, 1],
  //     root: null,
  //     rootMargin: '0px',
  //   }

  //   const observer = new IntersectionObserver(([entries]) => {
  //     if (entries.intersectionRatio > 0.5) {
  //         entries.target.classList.add('bg-black');
  //     } else {
  //       entries.target.classList.remove('bg-black');
  //     }
  //   }, options)

  //   observer.observe(document.getElementById('cr'));

  // }, [])
  const details = useDetails();

  return (
    <div
      id="corePage"
      className="president_eb_ec font-['Roboto']"
    >
    <div className="title opacity-0 flex flex-col items-center justify-center gap-y-4">
          <div className="text-[#ACB8CB] font-semibold text-center w-[2.125rem] h-6">
            ISTE
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="text-[#6C90C2] font-bold text-5xl leading-[3.6rem] text-center w-[48rem] h-[3.625rem]">
              CORE
            </div>
          </div>
        </div>
      <div className="flex flex-col gap-y-24 mt-24">
        <div data-aos='fade-up' data-aos-once='true' className="opacity-0 gap-x-8 justify-center flex-wrap md:flex flex-grow" onContextMenu={(e) => e.preventDefault()}>
        {details.filter((_, i) => i >= 24).map((val, i) => (
              <div key={i + 24}>
                <CoreCard details={val} />
              </div>
            ))}
        </div>
        {/* <div data-aos='fade-up' data-aos-once='true' className="flex gap-x-8 opacity-0">
          <CoreCard details={details} />
          <CoreCard details={details} />
          <CoreCard details={details} />
          <CoreCard details={details} />
        </div> */}
      </div>
    </div>
  );
}

export default CorePage;
