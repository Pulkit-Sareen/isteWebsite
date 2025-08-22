import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Home/Layout.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import './index.css';
import ProjectComponent from "./components/ProjectPageComponent/Heading.jsx";
// Lazy load components (code splitting)
const Homepage1 = lazy(() => import("./components/Home/Homepage1.jsx"));
const TeamPage = lazy(() => import("./components/teamPageComponents/TeamPageMain.jsx"));
const ContactUs = lazy(() => import("./components/contactUsComponents/ContactUs.jsx"));
const Event = lazy(() => import("./components/event/EventPage.jsx"));
const AlumniPage = lazy(() => import("./components/AlumniPageComponents/AlumniPage.jsx"));

const SponsorPage = lazy(() => import("./components/SponsorPageComponents/SponsorPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading Home...</div>}>
            <Homepage1 />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: <Navigate to={"/"} />,
      },
      {
        path: "/events",
        element: (
          <Suspense fallback={<div>Loading Events...</div>}>
            <Event />
          </Suspense>
        ),
      },
      {
        path: "/team",
        element: (
          <Suspense fallback={<div>Loading Team...</div>}>
            <TeamPage />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading Contact...</div>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/alumni",
        element: (
          <Suspense fallback={<div>Loading Alumni...</div>}>
            <AlumniPage />
          </Suspense>
        ),
      },
      {
        path: "/projects",
        element: (
          <Suspense fallback={<div>Loading Projects...</div>}>
            <ProjectComponent />
          </Suspense>
        ),
      },
      {
        path: "/sponsor",
        element: (
          <Suspense fallback={<div>Loading Sponsors...</div>}>
            <SponsorPage />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
