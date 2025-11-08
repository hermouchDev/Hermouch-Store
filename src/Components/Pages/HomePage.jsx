import Footer from "../Layout/Footer";
import Hero from "../Home/Hero";
import Featured from "../Home/Featured";
import About from "../Home/About";
import Testimonials from "../Home/Testimonials";

const HomePage = ({ products }) => {
    const featured = products.slice(0, 3);
    return (
        <div
            className="min-vh-100 d-flex flex-column"
            style={{ backgroundColor: "#F4F1EC", color: "#1F1B16" }}
        >
            <Hero />
            <Featured featured={featured} />
            <About />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default HomePage;
