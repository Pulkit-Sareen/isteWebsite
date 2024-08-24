import React from "react";
import "./Timeline.css";
const Timeline = ({ date, headline, context, src }) => {
	return (
		<div>
			<div class="container">
				<ul class="timeline">
					<li class="event">
						<p className="data_event">{date}</p>
						<p className="headline">{headline}</p>
						<p className="event_context">{context}</p>
						<button>click</button>
						<button>click</button>
						<img
							src={src}
							alt="event photo"
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Timeline;
