import React, { useState } from "react";
import "./contactUsComponents/contactUs.css";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	});
	
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [showError, setShowError] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const resetForm = () => {
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			message: "",
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setShowError(false);
		
		try {
			const response = await fetch("https://iste-backend.vercel.app/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			
			const result = await response.json();
			
			if (response.ok) {
				setShowSuccess(true);
				resetForm();
				// Hide success message after 5 seconds
				setTimeout(() => setShowSuccess(false), 5000);
			} else {
				setShowError(true);
				setTimeout(() => setShowError(false), 5000);
			}
		} catch (err) {
			setShowError(true);
			setTimeout(() => setShowError(false), 5000);
			console.error(err);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="contact-page">
			<div className="contact-container">
				<div className="right-column">
					{/* Success Message */}
					{showSuccess && (
						<div className="success-message">
							<div className="success-icon">✓</div>
							<h3>Message Sent Successfully!</h3>
							<p>Thank you for reaching out. We'll get back to you soon.</p>
						</div>
					)}
					
					{/* Error Message */}
					{showError && (
						<div className="error-message">
							<div className="error-icon">✗</div>
							<h3>Something went wrong!</h3>
							<p>Please try again or contact us directly.</p>
						</div>
					)}
					
					<form className="contact-form" onSubmit={handleSubmit}>
						<h2 className="contact-h2">Let's connect</h2>
						<div className="form-group">
							<input 
								type="text" 
								name="firstName" 
								placeholder="First Name" 
								value={formData.firstName}
								onChange={handleChange} 
								required 
								disabled={isSubmitting}
							/>
							<input 
								type="text" 
								name="lastName" 
								placeholder="Last Name" 
								value={formData.lastName}
								onChange={handleChange} 
								required 
								disabled={isSubmitting}
							/>
						</div>
						<div className="form-group">
							<input 
								type="email" 
								name="email" 
								placeholder="Email" 
								value={formData.email}
								onChange={handleChange} 
								required 
								disabled={isSubmitting}
							/>
						</div>
						<div className="form-group">
							<input 
								type="tel" 
								name="phone" 
								placeholder="Phone Number" 
								value={formData.phone}
								onChange={handleChange} 
								required 
								disabled={isSubmitting}
							/>
						</div>
						<div className="form-group">
							<textarea 
								name="message" 
								placeholder="Message" 
								rows={4} 
								value={formData.message}
								onChange={handleChange} 
								required 
								disabled={isSubmitting}
							/>
						</div>
						<button 
							className={`contact-submit-btn ${isSubmitting ? 'submitting' : ''}`}
							type="submit"
							disabled={isSubmitting}
						>
							{isSubmitting ? 'Sending...' : 'Submit'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
