import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Home/Layout.jsx";
import Homepage1 from "./components/Home/Homepage1.jsx";
import Cards from "./components/Home/Cards.jsx";
import TeamPage from "./components/teamPageComponents/TeamPageMain.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ContactUs from "./components/contactUsComponents/ContactUs.jsx";
import Event from "./components/event/EventPage.jsx";
import AlumniPage from "./components/AlumniPageComponents/AlumniPage.jsx";
import ProjectComponent from "./components/ProjectPageComponent/Heading.jsx";
import SponsorPage from "./components/SponsorPageComponents/SponsorPage.jsx";
import './index.css'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage1 />,
      },
      {
        path: "/home",
        element: <Navigate to={"/"} />,
      },
      {
        path: "/events",
        element: <Event />,
      },
      {
        path: "/team",
        element: <TeamPage />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/alumni",
        element: <AlumniPage />,
      },
      {
        path: "/projects",
        element: <ProjectComponent />,
      },
      {
        path: "/sponsor",
        element: <SponsorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
