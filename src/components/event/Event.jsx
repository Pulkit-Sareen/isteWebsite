import React, { useState } from "react";
import "./Event.css";
import EventList from "./EventList";
import EventDetail from "./EventDetail";
import { sample } from "../../assets/images/index.js";
import { sample1 } from "../../assets/images/index.js";
import { sample2 } from "../../assets/images/index.js";
import { sample3 } from "../../assets/images/index.js";
import { sample4 } from "../../assets/images/index.js";
import { sample5 } from "../../assets/images/index.js";
import { sample6 } from "../../assets/images/index.js";
import { sample7 } from "../../assets/images/index.js";
import { sample8 } from "../../assets/images/index.js";
import { sample9 } from "../../assets/images/index.js";
import { sample10 } from "../../assets/images/index.js";
import { sample11 } from "../../assets/images/index.js";
const events = [
	{
		name: "Orientation (2023)",
		intro: "Welcome to the ISTE community! During the orientation, new members were introduced to our dynamic organization, delved into exciting projects, and embarked on their tech journeys. They joined us to learn, connect, and innovate, forming valuable connections along the way. Together, we anticipated advancing technology and shaping the future through everyone s unique contributions.",
		subEvents: [
			{
				ev1: "Orientation",
				// detail1: "Short heading 1.1",
				// detail2: "Loreum 1.1",
				img1: sample,
			},
			{
				// detail1: "Short heading 1.1",
				// detail2: "Loreum 1.1",
				img1: sample1,
			},
			{
				// detail1: "Short heading 1.1",
				// detail2: "Loreum 1.1",
				img1: sample2,
			},
		],
	},
	{
		name: "Xpedition",
		intro: "Experience the thrill of Xpedition, a distinguished treasure hunt event hosted by ISTE. From the challenge of unraveling cryptic clues to the suspense of navigating intricate bomb puzzles, this event was filled with unforgettable experiences. XPEDITION combined adventure, wit, and excitement, creating adrenaline-filled moments that participants will never forget.",
		subEvents: [
			{
				ev1: "Xpedition",
				// detail1: "Short heading 1.1",
				// detail2: "Loreum 1.1",
				img1: sample3,
			},
			{
				// detail1: "Short heading 1.1",
				// detail2: "Loreum 1.1",
				img1: sample4,
			},
			{

				// detail1: "Short heading 1.1",
				// detail2: "Loreum 1.1",
				img1: sample5,
			},
		],
	},
	{
		name: "Omega",
		intro: "Relive the excitement of Omega, the ultimate competitive programming event hosted by ISTE! This electrifying competition spanned two intense rounds, where participants demonstrated their exceptional coding skills, creativity, and problem-solving abilities. Omega was a thrilling journey of innovation and excellence, highlighting the remarkable talents of our community.",
		subEvents: [
			{
				ev1: "Omega",
				// detail1: "Short heading 1.1",
				// detail2: "Loreum 1.1",
				img1: sample6,
			},
			{
				// detail1: "Short heading 1.1",
				// detail2: "Loreum 1.1",
				img1: sample7,
			},
			{

				// detail1: "Short heading 1.1",
				// detail2: "Loreum 1.1",
				img1: sample8,
			},
		],
	},
	{
		name: "Colloquium",
		intro: "Colloquium, the flagship event of our technical society, was a much-awaited and an excitement-loaded four-day celebration of innovation and intellect.It featured unique sub-events that tested participants skills in coding without sight, creative electronic project building, strategic problem-solving in a competitive setting, and quick-witted knowledge battles.",
		subEvents: [
			{
				ev1: "Colloquium",
				// detail1: "Short heading 1.1",
				// detail2: "Loreum 1.1",
				img1: sample9,
			},
			{
				// detail1: "Short heading 1.1",
				// detail2: "Loreum 1.1",
				img1: sample10,
			},
			{
				// detail1: "Short heading 1.1",
				// detail2: "Loreum 1.1",
				img1: sample11,
			},
		],
	},
];

const Event = () => {
	const [selectedEvent, setSelectedEvent] = useState(null);
	const handleSelectEvent = (event) => {
		setSelectedEvent(event);
	};

	return (
		<div className="app-container">
			<div
				className={`event-list-container `}
			>
				<EventList
					events={events}
					onSelectEvent={handleSelectEvent}
				/>
			</div>
			<div
				className={`event-detail-container `}
			>
				<EventDetail event={selectedEvent} />
			</div>
		</div>
	);
};

export default Event;
