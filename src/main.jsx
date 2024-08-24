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
import TeamPage from "./components/TeamsPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Event from "./components/event/Event.jsx";

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
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
