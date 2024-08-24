import React from "react";
import { google } from "./Card Imgs/CardimgIndex";

function PresidentCard({ details }) {

  const handleGoogleClick = () => {window.location.href = `mailto:${details.email}`}

  return (
    <div className=" president_card font-['Roboto'] text-[#ACB8CB] cursor-default">
      <img src={details.dp} draggable={false} className="president_image"></img>
      <div className=" flex flex-col gap-y-7 items-start">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col w-[18.5rem] h-[3.5rem]">
            <div className="font-semibold text-[#6C90C2] text-xl">{details.name}</div>
            <div className="font-normal text-lg">{details.title}</div>
          </div>
          <div className="text-base font-normal pr-2 ">{details.info}</div>
        </div>
        <img className="aspect-square h-5 cursor-pointer" onClick={handleGoogleClick} src={google}></img>
      </div>
    </div>
  );
}

export default PresidentCard;
