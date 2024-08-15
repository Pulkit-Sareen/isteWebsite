import React, { useEffect } from 'react'
import Card from "./Card/Card"
import useDetails from './context/Context'



function ExecutiveBoard() {


  

  const details = useDetails();

  return (
    <>
      <div id={'executiveBoard'} className="president_eb_ec font-['Roboto']">
        <div className="title opacity-0 flex flex-col items-center justify-center gap-y-4 max-2xsm:mt-52">
          <div className="text-[#ACB8CB] font-semibold text-center w-[2.125rem] h-6">
            ISTE
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="text-[#6C90C2] font-bold text-5xl leading-[3.6rem] text-center w-[48rem] h-[3.625rem]">
              EXECUTIVE BOARD
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 items-center justify-center mt-24">
          <div data-aos='fade-up' data-aos-once='true' className=" gap-10 justify-center flex-wrap md:flex" onContextMenu={(e) => e.preventDefault()}>
          {details.filter((_, i) => i >= 2 && i <= 12).map((val, i) => (
              <div key={i + 3}>
                <Card details={val} />
              </div>
            ))}
            {/* <Card details={details[3]} />
            <Card details={details[4]} />
            <Card details={details[5]} />
            <Card details={details[6]} /> 
            <Card details={details[7]} /> 
            <Card details={details[8]} />
            <Card details={details[9]} /> 
            <Card details={details[10]} />
            <Card details={details[11]} />
            <Card details={details[12]} /> */}
          </div>
          {/* <div data-aos='fade-up' data-aos-once='true' id='ebCardRow2' className="opacity-0 gap-x-8 justify-center flex-wrap md:flex">
            <Card details={details} />
            <Card details={details} /> 
            <Card details={details} />
            <Card details={details} />           
          </div> */}
        </div>
      </div>
    </>
  )
}

export default ExecutiveBoard