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
                    <h2 className="h2 mb-2" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>Featured Collection</h2>
                    <p className="text-secondary small" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
                        Discover our exclusive pieces
                    </p>
                </div>
                <div className="row g-2 g-md-4">
                    {featured.map((p) => (
                        <div key={p.id} className="col-6 col-md-4">
                            <div
                                className="card h-100 rounded-3 rounded-md-4 border shadow-sm"
                                style={{ background: "rgba(255,255,255,0.7)" }}
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
            <Footer />
        </div>
    );
};

export default HomePage;
