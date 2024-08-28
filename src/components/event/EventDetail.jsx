import React, { useEffect, useRef } from "react";
import "./EventDetail.css";
import { motion, AnimatePresence } from "framer-motion";

const EventDetail = ({ event }) => {
	const eventDetailRef = useRef(null);

	useEffect(() => {
		if (event && eventDetailRef.current) {
			eventDetailRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [event]);

	if (!event) {
		return (
			<div style={{ width: "70%", padding: "1px" }}>
				{/* Select an event to see details */}
			</div>
		);
	}

	return (
		<div
			ref={eventDetailRef}
			className="event-detail-container"
		>
			<h2 className="event-detail-title">{event.name} Details</h2>
			<ul className="timeline">
				<AnimatePresence>
					{event.subEvents.map((subEvent, index) => (
						<motion.li
							className="event"
							key={`${event.name}-${index}`}
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: index * 0.3 }}
						>
							<p className="data_event">{subEvent.ev1}</p>
							<h2 className="headline">{subEvent.detail1}</h2>
							<p className="event_context">{subEvent.detail2}</p>
							<img
								src={subEvent.img1}
								alt="eventPhoto"
								className="event-img"
								style={{ width: "20rem", aspectRatio: "5/3" }} //  remove or change this if image size is not squarish.
							/>
							{/* <button>Photos</button> */}
						</motion.li>
					))}
				</AnimatePresence>
			</ul>
		</div>
	);
};

export default EventDetail;
