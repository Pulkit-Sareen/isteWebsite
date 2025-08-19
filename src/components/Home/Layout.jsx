import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Layout.module.css";

function Layout() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to top on route change
	}, [location.pathname]);

	return (
		<div className={styles.outer}>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default Layout;
