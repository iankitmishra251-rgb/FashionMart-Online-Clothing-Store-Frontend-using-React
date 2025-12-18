import React from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div className="contact-page">
            <Navbar />
            {/* Hero Section */}
            <section className="bg-special text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">Contact Us</h1>
                    <p className="lead mt-3">
                        Have questions? We’d love to hear from you! Reach out to us anytime.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* Contact Form */}
                        <div className="col-lg-7">
                            <h2 className="fw-bold mb-4">Send Us a Message</h2>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Your Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your name" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-control" rows="5" placeholder="Write your message"></textarea>
                                </div>

                                <button type="submit" className="btn bg-brown px-4">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="col-lg-5">
                            <h2 className="fw-bold mb-4">Get In Touch</h2>
                            <ul className="list-unstyled fs-5">
                                <li className="mb-3">
                                    📍 <strong>Address:</strong> 123 Market Street, New Delhi, India
                                </li>
                                <li className="mb-3">
                                    📞 <strong>Phone:</strong> +91 98765 43210
                                </li>
                                <li className="mb-3">
                                    📧 <strong>Email:</strong> support@trendvia.in
                                </li>
                            </ul>
                            <div className="mt-4">
                                <h5 className="fw-bold">Follow Us</h5>
                                <a href="#" className="me-3 fs-4 text-primary">
                                    🌐
                                </a>
                                <a href="#" className="me-3 fs-4 text-primary">
                                    📘
                                </a>
                                <a href="#" className="fs-4 text-primary">
                                    🐦
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <NewsLetter />
            <hr />
            <Footer />
        </div>
    );
};

export default Contact;
