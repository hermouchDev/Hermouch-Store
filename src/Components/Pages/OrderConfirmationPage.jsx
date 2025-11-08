import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Footer from "../Layout/Footer";

const OrderConfirmationPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const orderData = location.state?.orderData;

    useEffect(() => {
        if (!orderData) {
            navigate("/shop");
        }
    }, [orderData, navigate]);

    if (!orderData) {
        return null;
    }

    const { items, total, shipping, paymentMethod } = orderData;
    const orderNumber = `ORD-${Date.now().toString().slice(-8)}`;

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
                    <h1
                        className="mt-2 display-6 fw-bold text-uppercase"
                        style={{
                            fontFamily: "Playfair Display",
                            fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                        }}
                    >
                        Order Confirmation
                    </h1>
                </div>
            </header>

            <main className="container px-3 px-md-4 py-4 py-md-5 flex-grow-1">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div
                            className="card rounded-4 border shadow-sm text-center"
                            style={{ background: "rgba(255,255,255,0.7)" }}
                        >
                            <div className="card-body p-4 p-md-5">
                                <div
                                    className="mb-4"
                                    style={{ fontSize: "clamp(3rem, 8vw, 4rem)" }}
                                >
                                    ✓
                                </div>
                                <h2 className="h3 fw-bold mb-3" style={{ fontSize: "clamp(1.25rem, 4vw, 1.75rem)" }}>
                                    Thank you for your order!
                                </h2>
                                <p
                                    className="mb-4"
                                    style={{ color: "#5C5548", fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
                                >
                                    Your order has been successfully placed.
                                    We've sent a confirmation email with your
                                    order details.
                                </p>
                                <div
                                    className="mb-4 p-3 rounded-3"
                                    style={{
                                        background: "rgba(31, 27, 22, 0.05)",
                                    }}
                                >
                                    <p
                                        className="small mb-1"
                                        style={{ color: "#5C5548" }}
                                    >
                                        Order Number
                                    </p>
                                    <p className="fw-bold mb-0">
                                        {orderNumber}
                                    </p>
                                </div>

                                <div className="text-start mb-4">
                                    <h3 className="h5 fw-semibold text-uppercase mb-3">
                                        Order Details
                                    </h3>
                                    <div className="d-flex flex-column gap-3">
                                        {items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="d-flex align-items-center gap-3"
                                            >
                                                <div
                                                    className="rounded-3 overflow-hidden flex-shrink-0"
                                                    style={{
                                                        width: "clamp(60px, 12vw, 80px)",
                                                        height: "clamp(60px, 12vw, 80px)",
                                                    }}
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-100 h-100"
                                                        style={{
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-1 fw-semibold">
                                                        {item.name}
                                                    </p>
                                                    <p
                                                        className="small mb-0"
                                                        style={{
                                                            color: "#5C5548",
                                                        }}
                                                    >
                                                        Quantity:{" "}
                                                        {item.quantity} ×{" "}
                                                        {item.price.toLocaleString(
                                                            "en-GB"
                                                        )}{" "}
                                                        DH
                                                    </p>
                                                </div>
                                                <p className="fw-medium">
                                                    {(
                                                        item.price *
                                                        item.quantity
                                                    ).toLocaleString(
                                                        "en-GB"
                                                    )}{" "}
                                                    DH
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-3 border-top mt-3">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span style={{ color: "#5C5548" }}>
                                                Subtotal
                                            </span>
                                            <span>
                                                {(
                                                    total - shipping
                                                ).toLocaleString("en-GB")}{" "}
                                                DH
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <span style={{ color: "#5C5548" }}>
                                                Shipping
                                            </span>
                                            <span>
                                                {shipping.toLocaleString(
                                                    "en-GB"
                                                )}{" "}
                                                DH
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between pt-2 border-top">
                                            <span className="fw-medium">
                                                Total
                                            </span>
                                            <span className="fw-medium">
                                                {total.toLocaleString("en-GB")}{" "}
                                                DH
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-3 pt-3 border-top">
                                        <p
                                            className="small mb-1"
                                            style={{ color: "#5C5548" }}
                                        >
                                            Payment Method
                                        </p>
                                        <p className="mb-0 fw-semibold text-capitalize">
                                            {paymentMethod === "card"
                                                ? "Credit/Debit Card"
                                                : "PayPal"}
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                                    <Link
                                        to="/shop"
                                        className="btn btn-outline-secondary rounded-pill px-4 py-2"
                                    >
                                        Continue Shopping
                                    </Link>
                                    <Link
                                        to="/"
                                        className="btn btn-dark rounded-pill px-4 py-2"
                                    >
                                        Back to Home
                                    </Link>
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

export default OrderConfirmationPage;
