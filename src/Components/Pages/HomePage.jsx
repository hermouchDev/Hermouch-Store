import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";

const HomePage = ({ products }) => {
    const featured = products.slice(0, 3);
    return (
        <div
            className="min-vh-100 d-flex flex-column"
            style={{ backgroundColor: "#F4F1EC", color: "#1F1B16" }}
        >
            {/* Hero */}
            <section className="position-relative overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-100"
                    style={{
                        objectFit: "cover",
                        aspectRatio: "16/8",
                        filter: "brightness(100%)",
                        minHeight: "230px",
                    }}
                >
                    <source src="/videos/brand-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.8))",
                    }}
                />
                <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-center"
                    style={{ zIndex: 1 }}
                >
                    <div className="text-center px-3 px-md-4">
                        <h1
                            className="hero-title fw-bold mb-3 mb-md-4"
                            style={{ 
                                fontFamily: "Playfair Display",
                                fontSize: "clamp(2rem, 8vw, 5.5rem)",
                                color: '#2e2c26ff',
                                opacity: 0.8
                            }}
                        >
                            HERMOUCH
                        </h1>
                        <p
                            className="hero-subtitle text-uppercase"
                            style={{ 
                                letterSpacing: "0.2em", 
                                opacity: 0.8,
                                fontSize: "clamp(0.75rem, 3vw, 1.25rem)"
                            }}
                        >
                            Luxury Streetwear Collection
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured */}
            <main className="container px-3 px-md-4 py-4 py-md-5 flex-grow-1">
                <div className="text-center mb-3 mb-md-4">
                    <h2 className="h2 mb-2" style={{ fontFamily: 'Playfair Display', fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 'bold' }}>Featured Collection</h2>
                    <p className="text-secondary small" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
                        Discover our exclusive pieces
                    </p>
                </div>
                <div className="row g-2 g-md-4">
                    {featured.map((p) => (
                        <div key={p.id} className="col-6 col-md-4">
                            <div
                                className="card h-100 rounded-3 rounded-md-4 border shadow-sm featured-card"
                                style={{ 
                                    background: "rgba(255,255,255,0.7)",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer"
                                }}
                            >
                                <div>
                                    <Link
                                        to={`/product/${p.id}`}
                                        className="text-decoration-none text-dark"
                                    >
                                        <div className="position-relative overflow-hidden rounded-top">
                                            <div>
                                                <img
                                                    src={p.image}
                                                    alt={p.name}
                                                    className="card-img-top"
                                                    style={{
                                                        aspectRatio: "4 / 5",
                                                        objectFit: "cover",
                                                        transition: "transform 0.3s ease"
                                                    }}
                                                />
                                                <div className="card-body px-2 px-md-3 py-2 py-md-3">
                                                    <p className="text-uppercase small mb-1 mb-md-2 text-secondary" style={{ fontSize: "clamp(0.65rem, 2vw, 0.875rem)" }}>
                                                        {p.type}
                                                    </p>
                                                    <h3 className="h6 mb-1 mb-md-2 fw-semibold" style={{ fontSize: "clamp(0.875rem, 2.5vw, 1.25rem)", lineHeight: "1.3" }}>
                                                        {p.name}
                                                    </h3>
                                                    <p className="fw-semibold mb-0" style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)", color: '#dbb32dff' }}>
                                                        {p.price.toLocaleString(
                                                            "en-GB"
                                                        )}{" "}
                                                        DH
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-3 mt-md-4">
                    <Link to="/shop" className="btn btn-dark rounded-pill px-4 py-2" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
                        Shop all
                    </Link>
                </div>
            </main>

            {/* About Section */}
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

            {/* Testimonials Section */}
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
            <Footer />
        </div>
    );
};

export default HomePage;
