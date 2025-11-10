import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../Layout/Footer";

const ProductDetailPage = ({ products, addItem }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState(null);

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return (
            <div
                className="min-vh-100 d-flex flex-column"
                style={{ backgroundColor: "#F4F1EC", color: "#1F1B16" }}
            >
                <main className="container px-3 px-md-4 py-5 flex-grow-1 d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <h2 className="h4 mb-3">Product not found</h2>
                        <Link to="/shop" className="btn btn-dark rounded-pill">
                            Back to shop
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const handleAddToCart = () => {
        if (!selectedSize && product.sizes && product.sizes.length > 0) {
            alert("Please select a size");
            return;
        }
        const productToAdd = selectedSize
            ? { ...product, selectedSize, id: `${product.id}-${selectedSize}` }
            : { ...product, id: `${product.id}` };
        addItem(productToAdd);
        navigate("/cart");
    };

    return (
        <div
            className="min-vh-100 d-flex flex-column"
            style={{ backgroundColor: "#F4F1EC", color: "#1F1B16" }}
        >
            <header
                className="border-bottom"
                style={{ background: "rgba(249,247,243,0.8)" }}
            >
                <div className="container px-3 px-md-4 py-3 py-md-4">
                    <Link
                        to="/shop"
                        className="text-decoration-none d-inline-flex align-items-center gap-2 mb-3"
                        style={{ color: "#5C5548" }}
                    >
                        <span>←</span>
                        <span className="small">Back to shop</span>
                    </Link>
                </div>
            </header>

            <main className="container px-3 px-md-4 py-4 py-md-5 flex-grow-1">
                <div className="row g-4 g-md-5">
                    <div className="col-12 col-md-6">
                        <div
                            className="position-relative rounded-3 rounded-md-4 overflow-hidden"
                            style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                        >
                            <img
                                src={product.image2 || product.image}
                                alt={product.name}
                                className="w-100"
                                style={{
                                    aspectRatio: "4 / 5",
                                    objectFit: "cover",
                                    minHeight: "300px",
                                }}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="d-flex flex-column h-100">
                            {product.category && (
                                <p className="text-uppercase small text-secondary mb-2" style={{ fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}>
                                    {product.category}
                                </p>
                            )}
                            <h1
                                className="display-5 fw-light text-capitalize mb-2 mb-md-3"
                                style={{
                                    fontSize: "clamp(1.5rem, 5vw, 3rem)",
                                    lineHeight: "1.2",
                                }}
                            >
                                {product.name}
                            </h1>
                            <p className="h4 mb-3 mb-md-4" style={{ color: "#1F1B16", fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
                                {product.price.toLocaleString("en-GB")} DH
                            </p>
                            <p
                                className="mb-3 mb-md-4"
                                style={{ 
                                    color: "#6D6556", 
                                    lineHeight: "1.6",
                                    fontSize: "clamp(0.875rem, 2vw, 1rem)"
                                }}
                            >
                                {product.description}
                            </p>

                            {product.sizes && product.sizes.length > 0 && (
                                <div className="mb-3 mb-md-4">
                                    <h3 className="h6 fw-semibold mb-2 mb-md-3 text-uppercase small" style={{ fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}>
                                        Select Size
                                    </h3>
                                    <div className="d-flex flex-wrap gap-2">
                                        {product.sizes.map((size) => (
                                            <button
                                                key={size}
                                                type="button"
                                                className={`btn rounded-pill px-3 px-md-4 py-2 ${
                                                    selectedSize === size
                                                        ? "btn-dark"
                                                        : "btn-outline-secondary"
                                                }`}
                                                onClick={() =>
                                                    setSelectedSize(size)
                                                }
                                                style={{
                                                    minWidth: "clamp(50px, 10vw, 60px)",
                                                    fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                                                    transition: "all 0.2s",
                                                }}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <button
                                type="button"
                                className="btn btn-dark rounded-pill w-100 py-2 py-md-3 mb-3 mb-md-4"
                                onClick={handleAddToCart}
                                style={{
                                    fontSize: "clamp(0.875rem, 2vw, 0.9rem)",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                ADD TO CART
                            </button>

                            <div className="border-top pt-3 pt-md-4 mt-auto">
                                <ul
                                    className="list-unstyled mb-0"
                                    style={{ color: "#6D6556" }}
                                >
                                    <li className="mb-2 small" style={{ fontSize: "clamp(0.8rem, 2vw, 0.875rem)" }}>
                                        ✓ Free shipping on orders over 300 DH
                                    </li>
                                    <li className="mb-2 small" style={{ fontSize: "clamp(0.8rem, 2vw, 0.875rem)" }}>
                                        ✓ 30-day returns & exchanges
                                    </li>
                                    <li className="small" style={{ fontSize: "clamp(0.8rem, 2vw, 0.875rem)" }}>
                                        ✓ Premium quality guaranteed
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetailPage;
