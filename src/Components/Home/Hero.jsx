function Hero() {
    return (
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
    )
}

export default Hero
