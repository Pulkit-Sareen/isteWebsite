import "./contactUsComponents/contactUs.css";

/**
 * ContactPage component.
 * Renders a contact form for users to get in touch.
 * @returns {JSX.Element} The rendered ContactPage component.
 */
const ContactPage = () => {
	return (
		<div className="contact-page">
			{/* <h1 className="contact-h1">Get in touch</h1> */}
			<div className="contact-container">
				{/* <div className="left-column"></div> */}
				<div className="right-column">
					<form
						className="contact-form"
						onSubmit={(e) => e.preventDefault()}
					>
						<h2 className="contact-h2">Let&apos;s connect</h2>
						<p
							className="contact-p"
							style={{ textAlign: "center" }}
						>
							Reach out and let the magic of collaboration illuminate our
							skies.
						</p>
						<div className="form-group">
							<input
								type="text"
								placeholder="First Name"
								required
							/>
							<input
								type="text"
								placeholder="Last Name"
								required
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								placeholder="Email"
								required
							/>
						</div>
						<div className="form-group">
							<input
								type="tel"
								placeholder="Phone Number"
								required
							/>
						</div>
						<div className="form-group">
							<textarea
								placeholder="Message"
								rows={4}
								required
							></textarea>
						</div>
						<button
							className="contact-submit-btn"
							type="submit"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
