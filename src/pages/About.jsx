import React from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div className="about-page">
            <Navbar />
            {/* Hero Section */}
            <section className="bg-special text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">About Us</h1>
                    <p className="lead mt-3">
                        Welcome to <strong>TrendVia</strong> — your go-to destination for
                        trends, quality products, and a seamless shopping experience.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-3">Our Mission</h2>
                    <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "700px" }}>
                        Our mission is to provide a <strong>modern and reliable shopping platform</strong>
                        where customers can discover products they love — with the trust of
                        quality and the joy of affordability.
                    </p>
                </div>
            </section>

            {/* Why Shop With Us */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="fw-bold text-center mb-5">Why Shop With Us?</h2>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 shadow-sm border-0 text-center p-4">
                                <div className="fs-1">🛒</div>
                                <h5 className="fw-bold mt-3">Curated Collections</h5>
                                <p className="text-muted">
                                    Every product is handpicked with care.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 shadow-sm border-0 text-center p-4">
                                <div className="fs-1">⚡</div>
                                <h5 className="fw-bold mt-3">Fast & Secure</h5>
                                <p className="text-muted">
                                    Checkout safely with multiple payment options.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 shadow-sm border-0 text-center p-4">
                                <div className="fs-1">📦</div>
                                <h5 className="fw-bold mt-3">Quick Shipping</h5>
                                <p className="text-muted">
                                    Get your orders delivered at lightning speed.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 shadow-sm border-0 text-center p-4">
                                <div className="fs-1">💬</div>
                                <h5 className="fw-bold mt-3">Customer Support</h5>
                                <p className="text-muted">
                                    We’re here for you whenever you need help.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promise Section */}
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-3">Our Promise</h2>
                    <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "700px" }}>
                        We’re not just another online store. We’re a community passionate
                        about bringing <strong>value, style, and convenience</strong> to your
                        everyday life. Your satisfaction is our top priority.
                    </p>
                </div>
            </section>

            <NewsLetter />
            <hr />
            <Footer />
        </div>
    );
};

export default About;
