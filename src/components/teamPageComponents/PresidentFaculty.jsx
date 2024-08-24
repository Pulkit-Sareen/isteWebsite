import React, { useEffect } from 'react'
import PresidentCard from './Card/PresidentCard'
import useDetails from './context/Context'



function PresidentFaculty() {
  const details = useDetails();


  return (
    <div id={'president'} className='president_eb_ec'>
      <div className="title opacity-0 flex flex-col items-left justify-center w-full gap-y-4">
          <div className="text-[#ACB8CB] font-semibold text-left">
            ISTE
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="text-[#6C90C2] font-bold text-5xl leading-[3.6rem] text-left">
            PRESIDENT & FACULTY
            </div>
          </div>
        </div>
      <div data-aos="fade-up" data-aos-once="true" className='president__cards mt-32' onContextMenu={(e) => e.preventDefault()}>
      <PresidentCard details={details[0]}/>
      <PresidentCard details={details[1]}/>
      </div>
    </div>
  )
}

export default PresidentFaculty