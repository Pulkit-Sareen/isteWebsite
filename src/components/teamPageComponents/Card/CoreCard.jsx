import React from "react";
import useDetails from "../context/Context";
import { linkdin, google } from "./Card Imgs/CardimgIndex";

function CoreCard({ details }) {
  const handleSocialMediaLinks = (e) => {
    if (e.target.id === "google") {
      window.location.href = `mailto:${details.email}`;
    } else if (e.target.id === "linkdin") {
      window.open(details?.linkdin, "_blank");
    }
  };

  return (
    <div className='flex flex-col items-center justify-center  py-[0.85rem] gap-y-6  font-["Roboto"] bg-black flex-wrap hover:bg-gray-700/20 hover:scale-[1.05] duration-300 hover:rounded-xl cursor-default '>
      <img
        className="rounded-full w-[130px]"
        draggable={false}
        src={details?.dp}
      ></img>
      <div className="flex flex-col justify-center items-center  gap-y-4">
        <div className="flex flex-col justify-center items-center ">
          <div className="text-[#6C90C2] center">{details?.name}</div>
          <div className="text-[#ACB8CB] center">{details?.title}</div>
        </div>
        <div className="text-center text-[#ACB8CB]">{details?.info}</div>
      </div>
      <div
        className="flex items-center justify-center h-6 gap-x-4"
        onClick={handleSocialMediaLinks}
      >
        <img id={"linkdin"} src={linkdin} className="cursor-pointer"></img>
        <img id={"google"} src={google} className="cursor-pointer"></img>
      </div>
    </div>
  );
}

export default CoreCard;
