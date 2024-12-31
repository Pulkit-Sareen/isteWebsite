import React from "react";
import Card from "./Card/Card";
import useDetails from "./context/Context";

function ExecutiveBoard() {
  const details = useDetails();

  return (
    <>
      <div
        id={"executiveBoard"}
        className="president_eb_ec font-['Roboto'] mx-auto w-full "
      >
        <div className="eb flex flex-col items-center justify-center gap-y-6 w-full max-w-[48rem]">
          <div className="text-[#6C90C2] text-3xl sm:text-4xl md:text-5xl font-bold">
            EXECUTIVE BOARD
          </div>
        </div>
        <div className="flex flex-col gap-y-8 items-center justify-center mt-12 sm:mt-16 md:mt-24">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="gap-4 sm:gap-6 md:gap-8 justify-center flex-wrap flex"
            onContextMenu={(e) => e.preventDefault()}
          >
            {details
              .filter((_, i) => i >= 2 && i <= 12)
              .map((val, i) => (
                <div key={i + 3} className="align_items_center">
                  <Card details={val} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExecutiveBoard;
