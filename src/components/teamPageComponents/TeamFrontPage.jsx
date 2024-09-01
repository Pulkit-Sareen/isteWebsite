import React, { useEffect } from 'react'


function TeamFrontPage() {

  return (
    <div id="frontPage" className='bg-black flex items-center justify-center min-w-full text-[#ACB8CB] font-["Roboto"] text-center mt-80 mb-72'>
      <div className='title opacity-0 flex flex-col items-center justify-center gap-y-6 min-w-full max-w-full'>
        <img src="./src/assets/images/logo.png" alt="Logo" className="logo" />
        <div className='text-[#6C90C2] lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold px-3'>Emphasize what&apos;s important to your company.</div>
        <div className='font-normal text-lg'>A place to learn, to thrive, to grow</div>
      </div>
    </div>
  ) 
}

export default TeamFrontPage