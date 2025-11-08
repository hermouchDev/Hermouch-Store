function About() {
    return (
        <section className="py-4 py-md-5" style={{ backgroundColor: "#ecebeaff" }}>
            <div className="container px-3 px-md-4">
                <div className="row g-4 g-md-5 align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="d-flex flex-column h-100 justify-content-center">
                            <h2 className="h2 mb-3 mb-md-4" style={{ 
                                fontFamily: "Playfair Display",
                                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                                fontWeight: 'bold'
                            }}>
                                About Us
                            </h2>
                            <p className="mb-3" style={{ 
                                color: "#6D6556", 
                                lineHeight: "1.6",
                                fontSize: "clamp(0.875rem, 2vw, 1rem)"
                            }}>
                                Welcome to Hermouch, where luxury meets streetwear. We curate premium fashion pieces that blend contemporary style with timeless elegance.
                            </p>
                            <p className="mb-3" style={{ 
                                color: "#6D6556", 
                                lineHeight: "1.6",
                                fontSize: "clamp(0.875rem, 2vw, 1rem)"
                            }}>
                                Our collection is designed for those who appreciate quality craftsmanship and unique designs that make a statement.
                            </p>

                                {/* Brand Values */}
                            <div className="row g-3 mb-4">
                                <div className="col-6">
                                    <div className="d-flex align-items-start gap-2">
                                        <span className="fs-4">✓</span>
                                        <div>
                                            <h4 className="h6 fw-semibold mb-1" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>Premium Quality</h4>
                                            <p className="small mb-0" style={{ color: "#6D6556", fontSize: "clamp(0.75rem, 1.8vw, 0.875rem)" }}>
                                                Handpicked materials
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex align-items-start gap-2">
                                        <span className="fs-4">✓</span>
                                        <div>
                                            <h4 className="h6 fw-semibold mb-1" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>Unique Design</h4>
                                            <p className="small mb-0" style={{ color: "#6D6556", fontSize: "clamp(0.75rem, 1.8vw, 0.875rem)" }}>
                                                Exclusive pieces
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex align-items-start gap-2">
                                        <span className="fs-4">✓</span>
                                        <div>
                                            <h4 className="h6 fw-semibold mb-1" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>Free Shipping</h4>
                                            <p className="small mb-0" style={{ color: "#6D6556", fontSize: "clamp(0.75rem, 1.8vw, 0.875rem)" }}>
                                                Over 200 DH
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex align-items-start gap-2">
                                        <span className="fs-4">✓</span>
                                        <div>
                                            <h4 className="h6 fw-semibold mb-3" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>Easy Returns</h4>
                                            <p className="small mb-0" style={{ color: "#6D6556", fontSize: "clamp(0.75rem, 1.8vw, 0.875rem)" }}>
                                                30-day guarantee
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>  

                            {/* Statistics Section - Add after the text paragraphs */}
                            <div className="row g-3 g-md-4 mb-4">
                                <div className="col-4 col-md-3">
                                    <div className="text-center">
                                        <h3 className="h4 fw-bold mb-1" style={{ color: "#1F1B16", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>1+</h3>
                                        <p className="small mb-0" style={{ color: "#6D6556", fontSize: "clamp(0.75rem, 1.8vw, 0.875rem)" }}>Years</p>
                                    </div>
                                </div>
                                <div className="col-4 col-md-3">
                                    <div className="text-center">
                                        <h3 className="h4 fw-bold mb-1" style={{ color: "#1F1B16", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>20+</h3>
                                        <p className="small mb-0" style={{ color: "#6D6556", fontSize: "clamp(0.75rem, 1.8vw, 0.875rem)" }}>Products</p>
                                    </div>
                                </div>
                                <div className="col-4 col-md-3">
                                    <div className="text-center">
                                        <h3 className="h4 fw-bold mb-1" style={{ color: "#1F1B16", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>10K+</h3>
                                        <p className="small mb-0" style={{ color: "#6D6556", fontSize: "clamp(0.75rem, 1.8vw, 0.875rem)" }}>Customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="position-relative rounded-3 rounded-md-4 overflow-hidden">
                            <img
                                src="/images/about-image.png"
                                alt="About Hermouch"
                                className="w-100"
                                style={{
                                    aspectRatio: "5 / 4",
                                    objectFit: "cover",
                                    minHeight: "300px",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
