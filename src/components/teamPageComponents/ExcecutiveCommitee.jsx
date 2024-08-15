import React from 'react'
import Card from "./Card/Card"
import useDetails from './context/Context'

function ExecutiveCommitee() {

  const details = useDetails();

  return (
    <>
      <div className="president_eb_ec core__page font-['Roboto'] ">
        <div className="title opacity-0 flex flex-col items-center justify-center gap-y-4">
          <div className="text-[#ACB8CB] font-semibold text-center w-[2.125rem] h-6">
            ISTE
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="text-[#6C90C2] font-bold text-5xl leading-[3.6rem] text-center w-[48rem] h-[3.625rem]">
              EXECUTIVE COMMITTEE
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 items-center justify-center">
          <div data-aos="fade-up" data-aos-once="true" className="gap-8 opacity-0 gap-x-8 justify-center flex-wrap md:flex mt-24" onContextMenu={(e) => e.preventDefault()}>
          {details.filter((_, i) => i >= 13 && i <= 23).map((val, i) => (
              <div key={i + 13}>
                <Card details={val} />
              </div>
            ))}
            {/* <Card details={details} />
            <Card details={details} />
            <Card details={details} />
            <Card details={details} />
            <Card details={details} />
            <Card details={details} />
            <Card details={details} />
            <Card details={details} />
            <Card details={details} />
            <Card details={details} /> */}
          </div>
          {/* <div data-aos="fade-up" data-aos-once="true" id='ecCardRow2' className="opacity-0 flex gap-x-8 justify-center">
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

export default ExecutiveCommitee