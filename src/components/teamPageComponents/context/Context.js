import React, {useContext, createContext} from "react";
import { p1 } from "../Card/Card Imgs/CardimgIndex";

const Details = createContext([
  {
    dp: p1,
    name: "Full Name",
    title: "Job Title",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/himanish-puri-066767277/",
  },
]);

export const DetailsProvider = Details.Provider;

export default function useDetails() {
  return useContext(Details);
}