const Footer = () => {
    return (
        <footer
            className="mt-auto"
            style={{ background: "rgba(249,247,243,0.8)", color: "#1F1B16" }}
        >
            <div className="container px-3 px-md-4 py-5 border-top">
                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-3">
                        <h5
                            className="fw-bold text-uppercase mb-3"
                            style={{
                                color: "#D4AF37",
                                letterSpacing: "0.06em",
                                fontFamily: "Playfair Display",
                                fontSize: "clamp(1rem, 3vw, 1.25rem)",
                            }}
                        >
                            HERMOUCH
                        </h5>
                        <p
                            className="small mb-0"
                            style={{
                                color: "#5C5548",
                                fontSize: "clamp(0.8rem, 2vw, 0.875rem)",
                            }}
                        >
                            Luxury streetwear redefined. Premium quality,
                            timeless design.
                        </p>
                    </div>

                    {/* Shop */}
                    <div className="col-6 col-md-6 col-lg-2">
                        <h6
                            className="text-uppercase small mb-3"
                            style={{ fontSize: "clamp(0.8rem, 2vw, 0.875rem)" }}
                        >
                            Shop
                        </h6>
                        <ul className="list-unstyled small mb-0">
                            <li className="mb-2">
                                <a
                                    className="text-decoration-none"
                                    style={{
                                        color: "#5C5548",
                                        fontSize:
                                            "clamp(0.8rem, 2vw, 0.875rem)",
                                    }}
                                    href="#"
                                >
                                    T-Shirts
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    className="text-decoration-none"
                                    style={{
                                        color: "#5C5548",
                                        fontSize:
                                            "clamp(0.8rem, 2vw, 0.875rem)",
                                    }}
                                    href="#"
                                >
                                    Hoodies
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    className="text-decoration-none"
                                    style={{
                                        color: "#5C5548",
                                        fontSize:
                                            "clamp(0.8rem, 2vw, 0.875rem)",
                                    }}
                                    href="#"
                                >
                                    Outerwear
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    className="text-decoration-none"
                                    style={{
                                        color: "#5C5548",
                                        fontSize:
                                            "clamp(0.8rem, 2vw, 0.875rem)",
                                    }}
                                    href="#"
                                >
                                    Sneakers
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-decoration-none"
                                    style={{
                                        color: "#5C5548",
                                        fontSize:
                                            "clamp(0.8rem, 2vw, 0.875rem)",
                                    }}
                                    href="#"
                                >
                                    Pants
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-6 col-md-6 col-lg-3">
                        <h6
                            className="text-uppercase small mb-3"
                            style={{ fontSize: "clamp(0.8rem, 2vw, 0.875rem)" }}
                        >
                            Contact
                        </h6>
                        <ul
                            className="list-unstyled small mb-0"
                            style={{
                                color: "#5C5548",
                                fontSize: "clamp(0.8rem, 2vw, 0.875rem)",
                            }}
                        >
                            <li className="mb-2">support@hermouch.com</li>
                            <li className="mb-2">+212 650502976</li>
                            <li>Mon-Fri: 9AM-6PM UTS +1</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <h6
                            className="text-uppercase small mb-3"
                            style={{ fontSize: "clamp(0.8rem, 2vw, 0.875rem)" }}
                        >
                            Newsletter
                        </h6>
                        <p
                            className="small mb-2 mb-md-3"
                            style={{
                                color: "#5C5548",
                                fontSize: "clamp(0.8rem, 2vw, 0.875rem)",
                            }}
                        >
                            Subscribe for exclusive updates
                        </p>
                        <form
                            className="d-flex flex-column flex-sm-row gap-2"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                aria-label="Email"
                                style={{
                                    fontSize: "clamp(0.8rem, 2vw, 0.875rem)",
                                }}
                            />
                            <button
                                className="btn btn-dark"
                                style={{
                                    fontSize: "clamp(0.8rem, 2vw, 0.875rem)",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <hr className="mt-4" />
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-2">
                    <small style={{ color: "#6D6556" }}>
                        © {new Date().getFullYear()} HERMOUCH. All rights
                        reserved.
                    </small>
                    <div className="d-flex gap-3 mt-2 mt-sm-0">
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="text-dark"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" aria-label="Facebook" className="text-dark">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abdelmajid-hermouch/"
                            target="_blanc"
                            aria-label="Linkedin"
                            className="text-dark"
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
