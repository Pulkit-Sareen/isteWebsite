import React, { useState } from "react";
import "./contactUs.css";
import contactImage from "./contactUs.jpg"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

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
        <section className="contact">
            <div className="contact-page">
                <div className="contact-info-section">
                    <div className="contact-info">
                        <h2 className="contact-h2">
                            Contact Information
                        </h2>
                        <div className="contact-content">
                            <div className="contact-image"><MdEmail /></div>
                            <div className="info">
                                <h3>Email</h3>
                                <p>iste_thapar@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-content">
                            <div className="contact-image"><MdPhone /></div>
                            <div className="info">
                                <h3>Phone</h3>
                                <p>XXXXXXXXXX</p>
                            </div>
                        </div>

                        <div className="contact-content">
                            <div className="contact-image"><MdLocationOn /></div>
                            <div className="info">
                                <h3>Address</h3>
                                <p>Thapar Institute of Engineering Technology, Patiala, Punjab</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-social-links">
                        <h2 className="contact-h2">Connect With Us</h2>
                        <div className="links">
                            <div className="contact-image">
                            <FaFacebook />
                            </div>
                            <div className="contact-image">
                            <FaInstagram />
                            </div>
                            <div className="contact-image">
                            <FaLinkedin />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-container">
                    <div className="right-column">
                            <h2 className="contact-h2">Let's connect</h2>
                        <form className="contact-form" onSubmit={handleSubmit}>

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
        </section>
    );
};

export default ContactPage;
