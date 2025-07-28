import React, { useState } from "react";
import "./contactUs.css";
import contactImage from "./contactUs.jpg"

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://iste-backend.vercel.app/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            alert(result.message || "Message sent!");

            // 🔄 Clear form fields
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (err) {
            alert("Error sending message.");
            console.error(err);
        }
    };

    return (
        <div className="contact-page">
            {/* <img src={contactImage} alt="Contact Us" className="contact-image" /> */}
            <div className="contact-container">
                <div className="right-column">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2 className="contact-h2">Let's connect</h2>

                        <div className="form-group">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                onChange={handleChange}
                                value={formData.firstName}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={handleChange}
                                value={formData.lastName}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                value={formData.email}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                onChange={handleChange}
                                value={formData.phone}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={4}
                                onChange={handleChange}
                                value={formData.message}
                                required
                            />
                        </div>

                        <button className="contact-submit-btn" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
