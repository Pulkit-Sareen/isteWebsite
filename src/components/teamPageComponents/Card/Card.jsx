import React from "react";
import { linkdin, google } from "./Card Imgs/CardimgIndex";

function Card({ details }) {
  const handleSocialMediaLinks = (e) => {
    if (e.target.id === "google") {
      window.location.href = `mailto:${details.email}`;
    } else if (e.target.id === "linkdin") {
      window.open(details?.linkdin, "_blank");
    }
  };

  return (
    <div className='flex flex-col items-center font-["Roboto"] max-w-[20rem] bg-black flex-wrap hover:bg-gray-700/20 hover:scale-[1.05] duration-300 hover:rounded-b-2xl cursor-default card_class '>
      <img className="max-h-[18rem]" draggable={false} src={details.dp}></img>
      <div className="flex flex-col justify-center items-center h-36 w-[18rem]  gap-y-4">
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <div className="text-[#6C90C2] text-3xl ">{details.name}</div>
          <div className="text-[#ACB8CB] text-xl">{details.title}</div>
        </div>
      </div>
      <div
        className="flex items-center justify-center gap-x-5"
        onClick={handleSocialMediaLinks}
      >
        <img
          id={"linkdin"}
          src={linkdin}
          className="cursor-pointer scale-[1.2]"
        ></img>
        <img
          id={"google"}
          src={google}
          className="cursor-pointer scale-[1.2]"
        ></img>
      </div>
    </div>
  );
}

export default Card;
