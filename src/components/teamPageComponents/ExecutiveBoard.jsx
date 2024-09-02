import React from 'react'
import Card from "./Card/Card"
import useDetails from './context/Context'

function ExecutiveBoard() {
  const details = useDetails();

  return (
    <>
      <div id={'executiveBoard'} className="president_eb_ec font-['Roboto']">
        <div className="title opacity-0 flex flex-col items-center justify-center gap-y-4 mt-12 sm:mt-20 md:mt-32 lg:mt-52">
          <div className="text-[#ACB8CB] font-semibold text-center w-full h-6">
            ISTE
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="text-[#6C90C2] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-center w-full max-w-3xl mx-auto">
              EXECUTIVE BOARD
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 items-center justify-center mt-12 sm:mt-16 md:mt-24">
          <div data-aos='fade-up' data-aos-once='true' className="gap-4 sm:gap-6 md:gap-8 justify-center flex-wrap flex" onContextMenu={(e) => e.preventDefault()}>
            {details.filter((_, i) => i >= 2 && i <= 12).map((val, i) => (
              <div key={i + 3} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <Card details={val} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ExecutiveBoard
