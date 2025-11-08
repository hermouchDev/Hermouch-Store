function Testimonials() {
    return (
        <section className="py-4 py-md-5" style={{ backgroundColor: "#F4F1EC" }}>
            <div className="container px-3 px-md-4">
                <div className="text-center mb-4 mb-md-5">
                    <h2 className="h2 mb-2" style={{ 
                        fontFamily: "Playfair Display",
                        fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                        fontWeight: 'bold'
                    }}>
                        What Our Clients Say
                    </h2>
                </div>
                <div className="row g-3 g-md-4">
                    <div className="col-12 col-md-4">
                        <div 
                            className="card h-100 rounded-3 rounded-md-4 border shadow-sm p-3 p-md-4 testimonial-card" 
                            style={{ 
                                background: "rgba(255,255,255,0.9)",
                                transition: "all 0.3s ease",
                                cursor: "pointer"
                            }}
                        >
                            <div className="mb-3">
                                <span style={{ color: "#D4AF37", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", letterSpacing: "0.1em" }}>
                                    ★★★★★
                                </span>
                            </div>
                            <p className="mb-3" style={{ 
                                color: "#1F1B16", 
                                lineHeight: "1.6",
                                fontSize: "clamp(0.875rem, 2vw, 1rem)"
                            }}>
                                "The quality is unmatched. Every piece I own from HERMOUCH has become a staple in my wardrobe. Absolutely worth the investment."
                            </p>
                            <p className="mb-0 fw-semibold" style={{ 
                                color: "#1F1B16",
                                fontSize: "clamp(0.875rem, 2vw, 1rem)"
                            }}>
                                Abdelmajid
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div 
                            className="card h-100 rounded-3 rounded-md-4 border shadow-sm p-3 p-md-4 testimonial-card" 
                            style={{ 
                                background: "rgba(255,255,255,0.9)",
                                transition: "all 0.3s ease",
                                cursor: "pointer"
                            }}
                        >
                            <div className="mb-3">
                                <span style={{ color: "#D4AF37", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", letterSpacing: "0.1em" }}>
                                    ★★★★★
                                </span>
                            </div>
                            <p className="mb-3" style={{ 
                                color: "#1F1B16", 
                                lineHeight: "1.6",
                                fontSize: "clamp(0.875rem, 2vw, 1rem)"
                            }}>
                                "Finally found a brand that understands luxury streetwear. The attention to detail and craftsmanship is exceptional."
                            </p>
                            <p className="mb-0 fw-semibold" style={{ 
                                color: "#1F1B16",
                                fontSize: "clamp(0.875rem, 2vw, 1rem)"
                            }}>
                                Hajar
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div 
                            className="card h-100 rounded-3 rounded-md-4 border shadow-sm p-3 p-md-4 testimonial-card" 
                            style={{ 
                                background: "rgba(255,255,255,0.9)",
                                transition: "all 0.3s ease",
                                cursor: "pointer"
                            }}
                        >
                            <div className="mb-3">
                                <span style={{ color: "#D4AF37", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", letterSpacing: "0.1em" }}>
                                    ★★★★★
                                </span>
                            </div>
                            <p className="mb-3" style={{ 
                                color: "#1F1B16", 
                                lineHeight: "1.6",
                                fontSize: "clamp(0.875rem, 2vw, 1rem)"
                            }}>
                                "HERMOUCH pieces elevate any outfit. The designs are timeless yet contemporary. I receive compliments every time I wear them."
                            </p>
                            <p className="mb-0 fw-semibold" style={{ 
                                color: "#1F1B16",
                                fontSize: "clamp(0.875rem, 2vw, 1rem)"
                            }}>
                                Lahcen
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
