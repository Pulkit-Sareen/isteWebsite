import React, { useState, useEffect } from "react";
import "./EventList.css";

const EventList = ({ events, onSelectEvent }) => {
	// const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);

	// const handleResize = () => {
	// 	setIsMobile(window.innerWidth <= 400);
	// };

	// useEffect(() => {
	// 	window.addEventListener("resize", handleResize);
	// 	return () => {
	// 		window.removeEventListener("resize", handleResize);
	// 	};
	// }, []);

	// if (isMobile) {
	// 	return null;
	// }

	return (
		<div className="container">
			<h2 className="my-4">ISTE</h2>
			<div className="row">
				{events.map((event, index) => (
					<div
						key={index}
						className="col-md-6 mb-4"
					>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{event.name}</h5>
								<p className="card-text">{event.intro}</p>
								<button
									onClick={() => onSelectEvent(event)}
									className="btn btn-primary"
								>
									Photos
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default EventList;
