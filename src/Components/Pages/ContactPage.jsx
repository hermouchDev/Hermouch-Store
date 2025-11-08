import { useState } from "react";
// import Footer from "../Layout/Footer";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div
            className="min-vh-100 d-flex flex-column"
            style={{ backgroundColor: "#F4F1EC", color: "#1F1B16" }}
        >
            <main className="container px-3 px-md-4 py-4 py-md-5 flex-grow-1">
                <div className="text-center mb-4 mb-md-5">
                    <h1
                        className="h2 fw-bold mb-2"
                        style={{
                            fontFamily: "Playfair Display",
                            fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                        }}
                    >
                        Contact Us
                    </h1>
                    <p
                        className="text-secondary"
                        style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
                    >
                        We'd love to hear from you. Get in touch with us.
                    </p>
                </div>

                <div className="row g-4 g-md-5">
                    {/* Contact Form */}
                    <div className="col-12 col-md-7 col-lg-8">
                        <div
                            className="card rounded-3 rounded-md-4 border shadow-sm p-4 p-md-5"
                            style={{ background: "rgba(255,255,255,0.7)" }}
                        >
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3 g-md-4">
                                    <div className="col-12 col-md-6">
                                        <label
                                            htmlFor="name"
                                            className="form-label fw-semibold"
                                            style={{
                                                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                            }}
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                                border: "1px solid #ddd",
                                            }}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label
                                            htmlFor="email"
                                            className="form-label fw-semibold"
                                            style={{
                                                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                            }}
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                                border: "1px solid #ddd",
                                            }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label
                                            htmlFor="subject"
                                            className="form-label fw-semibold"
                                            style={{
                                                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                            }}
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                                border: "1px solid #ddd",
                                            }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label
                                            htmlFor="message"
                                            className="form-label fw-semibold"
                                            style={{
                                                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                            }}
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows="6"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                                border: "1px solid #ddd",
                                                resize: "vertical",
                                            }}
                                        ></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button
                                            type="submit"
                                            className="btn btn-dark rounded-pill px-4 py-2"
                                            style={{
                                                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                                letterSpacing: "0.1em",
                                            }}
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    {/* Contact Information */}
                    <div className="col-12 col-md-5 col-lg-4">
                        <div className="d-flex flex-column h-100">
                            <h2
                                className="h4 fw-semibold mb-4"
                                style={{
                                    fontFamily: "Playfair Display",
                                    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                                }}
                            >
                                Get in Touch
                            </h2>

                            <div className="mb-4">
                                <h3
                                    className="h6 fw-semibold mb-2 text-uppercase small"
                                    style={{
                                        fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                                        letterSpacing: "0.1em",
                                        color: "#5C5548",
                                    }}
                                >
                                    Email
                                </h3>
                                <a
                                    href="mailto:support@hermouch.com"
                                    className="text-decoration-none"
                                    style={{
                                        color: "#1F1B16",
                                        fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                    }}
                                >
                                    support@hermouch.com
                                </a>
                            </div>

                            <div className="mb-4">
                                <h3
                                    className="h6 fw-semibold mb-2 text-uppercase small"
                                    style={{
                                        fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                                        letterSpacing: "0.1em",
                                        color: "#5C5548",
                                    }}
                                >
                                    Phone
                                </h3>
                                <a
                                    href="tel:+212650502976"
                                    className="text-decoration-none"
                                    style={{
                                        color: "#1F1B16",
                                        fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                    }}
                                >
                                    +212 650502976
                                </a>
                            </div>

                            <div className="mb-4">
                                <h3
                                    className="h6 fw-semibold mb-2 text-uppercase small"
                                    style={{
                                        fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                                        letterSpacing: "0.1em",
                                        color: "#5C5548",
                                    }}
                                >
                                    Business Hours
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        color: "#1F1B16",
                                        fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                    }}
                                >
                                    Mon-Fri: 9AM-6PM UTC +1
                                </p>
                            </div>

                            <div className="mt-auto">
                                <h3
                                    className="h6 fw-semibold mb-3 text-uppercase small"
                                    style={{
                                        fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                                        letterSpacing: "0.1em",
                                        color: "#5C5548",
                                    }}
                                >
                                    Follow Us
                                </h3>
                                <div className="d-flex gap-3">
                                    <a
                                        href="#"
                                        aria-label="Instagram"
                                        className="text-dark"
                                        style={{ fontSize: "1.5rem" }}
                                    >
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                    <a
                                        href="#"
                                        aria-label="Facebook"
                                        className="text-dark"
                                        style={{ fontSize: "1.5rem" }}
                                    >
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/abdelmajid-hermouch/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        className="text-dark"
                                        style={{ fontSize: "1.5rem" }}
                                    >
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default ContactPage;