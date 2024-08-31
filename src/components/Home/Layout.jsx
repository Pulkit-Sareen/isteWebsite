import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Layout.module.css";
// import '../App.css'
function Layout() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
