import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Footer from "../Layout/Footer";

const CheckoutPage = ({ items, getTotalPrice }) => {
    const navigate = useNavigate();
    const totalPrice = getTotalPrice();
    const shipping = 50;
    const finalTotal = totalPrice + shipping;

    const [isProcessing, setIsProcessing] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        email: "",
        cardNumber: "",
        expiration: "",
        cvc: "",
        country: "Morocco",
        zip: "",
        fullName: "",
        address: "",
        city: "",
        state: "",
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (
            !formData.cardNumber ||
            formData.cardNumber.replace(/\s/g, "").length < 16
        ) {
            newErrors.cardNumber = "Please enter a valid card number";
        }
        if (
            !formData.expiration ||
            !/^\d{2}\/\d{2}$/.test(formData.expiration)
        ) {
            newErrors.expiration =
                "Please enter a valid expiration date (MM/YY)";
        }
        if (!formData.cvc || formData.cvc.length < 3) {
            newErrors.cvc = "Please enter a valid CVC";
        }

        if (!formData.fullName) {
            newErrors.fullName = "Please enter your full name";
        }
        if (!formData.address) {
            newErrors.address = "Please enter your address";
        }
        if (!formData.city) {
            newErrors.city = "Please enter your city";
        }
        if (!formData.state) {
            newErrors.state = "Please enter your state";
        }
        if (!formData.zip || formData.zip.length < 5) {
            newErrors.zip = "Please enter a valid ZIP code";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const formatCardNumber = (value) => {
        const cleaned = value.replace(/\s/g, "");
        const matches = cleaned.match(/.{1,4}/g);
        return matches ? matches.join(" ") : cleaned;
    };

    const handleCardNumberChange = (e) => {
        const formatted = formatCardNumber(e.target.value);
        setFormData((prev) => ({ ...prev, cardNumber: formatted }));
        if (errors.cardNumber) {
            setErrors((prev) => ({ ...prev, cardNumber: "" }));
        }
    };

    const handleExpirationChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length >= 2) {
            value = value.slice(0, 2) + "/" + value.slice(2, 4);
        }
        setFormData((prev) => ({ ...prev, expiration: value }));
        if (errors.expiration) {
            setErrors((prev) => ({ ...prev, expiration: "" }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        setIsProcessing(true);
        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            // Navigate to confirmation page with order data
            navigate("/checkout/confirmation", {
                state: {
                    orderData: {
                        items,
                        total: finalTotal,
                        shipping,
                        paymentMethod: "card",
                        formData,
                    },
                },
            });
        }, 2000);
    };

    if (items.length === 0) {
        return (
            <div
                className="min-vh-100 d-flex flex-column"
                style={{ backgroundColor: "#F4F1EC", color: "#1F1B16" }}
            >
                <main className="container px-3 px-md-4 py-4 py-md-5 flex-grow-1">
                    <div className="text-center">
                        <h2
                            className="h4 text-uppercase fw-light"
                            style={{ color: "#5C5548" }}
                        >
                            Your cart is empty
                        </h2>
                        <Link
                            to="/shop"
                            className="btn btn-dark rounded-pill mt-3 px-4 py-2"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </main>
                {/* <Footer /> */}
            </div>
        );
    }

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
                        to="/cart"
                        className="text-decoration-none"
                        style={{ color: "#5C5548" }}
                    >
                        ← Back to cart
                    </Link>
                    <h1
                        className="mt-2 display-6 fw-bold text-uppercase"
                        style={{
                            fontFamily: "Playfair Display",
                            fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                        }}
                    >
                        Checkout
                    </h1>
                </div>
            </header>

            <main className="container px-3 px-md-4 py-4 py-md-5 flex-grow-1">
                <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                        {/* Left Column - Forms */}
                        <div className="col-12 col-lg-8">
                            {/* Order Summary - Mobile */}
                            <div
                                className="card rounded-4 border shadow-sm mb-4 d-lg-none"
                                style={{ background: "rgba(255,255,255,0.7)" }}
                            >
                                <div className="card-body p-3 p-md-4">
                                    <h2 className="h5 fw-semibold text-uppercase mb-3">
                                        Order Summary
                                    </h2>
                                    <div className="d-flex flex-column gap-2 mb-3">
                                        {items.slice(0, 3).map((item) => (
                                            <div
                                                key={item.id}
                                                className="d-flex align-items-center gap-3"
                                            >
                                                <div
                                                    className="rounded-3 overflow-hidden flex-shrink-0"
                                                    style={{
                                                        width: 60,
                                                        height: 60,
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
                                                    <p className="small mb-0 fw-semibold">
                                                        {item.name}
                                                    </p>
                                                    <p
                                                        className="small mb-0"
                                                        style={{
                                                            color: "#5C5548",
                                                        }}
                                                    >
                                                        Qty: {item.quantity} ×{" "}
                                                        {item.price.toLocaleString(
                                                            "en-GB"
                                                        )}{" "}
                                                        DH
                                                    </p>
                                                </div>
                                                <p className="small mb-0 fw-medium">
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
                                        {items.length > 3 && (
                                            <p className="small text-muted">
                                                +{items.length - 3} more item(s)
                                            </p>
                                        )}
                                    </div>
                                    <div className="pt-2 border-top">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span
                                                className="small"
                                                style={{ color: "#5C5548" }}
                                            >
                                                Subtotal
                                            </span>
                                            <span className="small">
                                                {totalPrice.toLocaleString(
                                                    "en-GB"
                                                )}{" "}
                                                DH
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <span
                                                className="small"
                                                style={{ color: "#5C5548" }}
                                            >
                                                Shipping
                                            </span>
                                            <span className="small">
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
                                                {finalTotal.toLocaleString(
                                                    "en-GB"
                                                )}{" "}
                                                DH
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div
                                className="card rounded-4 border shadow-sm mb-4"
                                style={{ background: "rgba(255,255,255,0.7)" }}
                            >
                                <div className="card-body p-3 p-md-4">
                                    <h2 className="h5 fw-semibold text-uppercase mb-3 mb-md-4" style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}>
                                        Shipping Address
                                    </h2>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label
                                                htmlFor="fullName"
                                                className="form-label small text-uppercase"
                                                style={{
                                                    letterSpacing: "0.1em",
                                                    color: "#5C5548",
                                                    fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                                                }}
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                className={`form-control ${
                                                    errors.fullName
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                placeholder="John Doe"
                                                aria-label="Full Name"
                                                aria-describedby={
                                                    errors.fullName
                                                        ? "fullName-error"
                                                        : undefined
                                                }
                                            />
                                            {errors.fullName && (
                                                <div
                                                    id="fullName-error"
                                                    className="invalid-feedback"
                                                >
                                                    {errors.fullName}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-12">
                                            <label
                                                htmlFor="address"
                                                className="form-label small text-uppercase"
                                                style={{
                                                    letterSpacing: "0.1em",
                                                    color: "#5C5548",
                                                }}
                                            >
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                id="address"
                                                name="address"
                                                className={`form-control ${
                                                    errors.address
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                placeholder="123 Main Street"
                                                aria-label="Address"
                                                aria-describedby={
                                                    errors.address
                                                        ? "address-error"
                                                        : undefined
                                                }
                                            />
                                            {errors.address && (
                                                <div
                                                    id="address-error"
                                                    className="invalid-feedback"
                                                >
                                                    {errors.address}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label
                                                htmlFor="city"
                                                className="form-label small text-uppercase"
                                                style={{
                                                    letterSpacing: "0.1em",
                                                    color: "#5C5548",
                                                }}
                                            >
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                id="city"
                                                name="city"
                                                className={`form-control ${
                                                    errors.city
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                placeholder="New York"
                                                aria-label="City"
                                                aria-describedby={
                                                    errors.city
                                                        ? "city-error"
                                                        : undefined
                                                }
                                            />
                                            {errors.city && (
                                                <div
                                                    id="city-error"
                                                    className="invalid-feedback"
                                                >
                                                    {errors.city}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label
                                                htmlFor="state"
                                                className="form-label small text-uppercase"
                                                style={{
                                                    letterSpacing: "0.1em",
                                                    color: "#5C5548",
                                                }}
                                            >
                                                State
                                            </label>
                                            <input
                                                type="text"
                                                id="state"
                                                name="state"
                                                className={`form-control ${
                                                    errors.state
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                placeholder="NY"
                                                aria-label="State"
                                                aria-describedby={
                                                    errors.state
                                                        ? "state-error"
                                                        : undefined
                                                }
                                            />
                                            {errors.state && (
                                                <div
                                                    id="state-error"
                                                    className="invalid-feedback"
                                                >
                                                    {errors.state}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label
                                                htmlFor="country"
                                                className="form-label small text-uppercase"
                                                style={{
                                                    letterSpacing: "0.1em",
                                                    color: "#5C5548",
                                                }}
                                            >
                                                Country
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                className="form-select"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                aria-label="Country"
                                            >
                                                <option value="Morocco">
                                                    Morocco
                                                </option>
                                                <option value="Canada">
                                                    Canada
                                                </option>
                                                <option value="United States">
                                                    United States
                                                </option>
                                                <option value="France">
                                                    France
                                                </option>
                                                <option value="Germany">
                                                    Germany
                                                </option>
                                                <option value="Korea">
                                                    Korea
                                                </option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label
                                                htmlFor="zip"
                                                className="form-label small text-uppercase"
                                                style={{
                                                    letterSpacing: "0.1em",
                                                    color: "#5C5548",
                                                }}
                                            >
                                                ZIP Code
                                            </label>
                                            <input
                                                type="text"
                                                id="zip"
                                                name="zip"
                                                className={`form-control ${
                                                    errors.zip
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                value={formData.zip}
                                                onChange={handleInputChange}
                                                placeholder="12345"
                                                aria-label="ZIP Code"
                                                aria-describedby={
                                                    errors.zip
                                                        ? "zip-error"
                                                        : undefined
                                                }
                                            />
                                            {errors.zip && (
                                                <div
                                                    id="zip-error"
                                                    className="invalid-feedback"
                                                >
                                                    {errors.zip}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div
                                className="card rounded-4 border shadow-sm mb-4"
                                style={{ background: "rgba(255,255,255,0.7)" }}
                            >
                                <div className="card-body p-3 p-md-4">
                                    <h2 className="h5 fw-semibold text-uppercase mb-3 mb-md-4" style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}>
                                        Complete checkout
                                    </h2>

                                    <div className="mb-3">
                                        <label
                                            htmlFor="email"
                                            className="form-label small text-uppercase"
                                            style={{
                                                letterSpacing: "0.1em",
                                                color: "#5C5548",
                                            }}
                                        >
                                            Email
                                        </label>
                                        <div className="position-relative">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className={`form-control ${
                                                    errors.email
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="you@example.com"
                                                aria-label="Email"
                                                aria-describedby={
                                                    errors.email
                                                        ? "email-error"
                                                        : undefined
                                                }
                                                style={{
                                                    paddingLeft: "2.5rem",
                                                }}
                                            />
                                            <span
                                                className="position-absolute top-50 start-0 translate-middle-y ms-3"
                                                style={{ fontSize: "0.9rem" }}
                                            >
                                                ✉
                                            </span>
                                        </div>
                                        {errors.email && (
                                            <div
                                                id="email-error"
                                                className="invalid-feedback"
                                            >
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label
                                            htmlFor="cardNumber"
                                            className="form-label small text-uppercase"
                                            style={{
                                                letterSpacing: "0.1em",
                                                color: "#5C5548",
                                            }}
                                        >
                                            Card number
                                        </label>
                                        <div className="position-relative">
                                            <input
                                                type="text"
                                                id="cardNumber"
                                                name="cardNumber"
                                                className={`form-control ${
                                                    errors.cardNumber
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                value={formData.cardNumber}
                                                onChange={
                                                    handleCardNumberChange
                                                }
                                                placeholder="1234 1234 1234 1234"
                                                maxLength="19"
                                                aria-label="Card Number"
                                                aria-describedby={
                                                    errors.cardNumber
                                                        ? "cardNumber-error"
                                                        : undefined
                                                }
                                                style={{ paddingRight: "6rem" }}
                                            />
                                            <div className="position-absolute top-50 end-0 translate-middle-y me-3 d-flex gap-1">
                                                <span
                                                    className="small"
                                                    style={{ color: "#5C5548" }}
                                                >
                                                    Visa
                                                </span>
                                                <span
                                                    className="small"
                                                    style={{ color: "#5C5548" }}
                                                >
                                                    MC
                                                </span>
                                                <span
                                                    className="small"
                                                    style={{ color: "#5C5548" }}
                                                >
                                                    Amex
                                                </span>
                                                <span
                                                    className="small"
                                                    style={{ color: "#5C5548" }}
                                                >
                                                    Discover
                                                </span>
                                            </div>
                                        </div>
                                        {errors.cardNumber && (
                                            <div
                                                id="cardNumber-error"
                                                className="invalid-feedback"
                                            >
                                                {errors.cardNumber}
                                            </div>
                                        )}
                                    </div>

                                    <div className="row g-3">
                                        <div className="col-6">
                                            <label
                                                htmlFor="expiration"
                                                className="form-label small text-uppercase"
                                                style={{
                                                    letterSpacing: "0.1em",
                                                    color: "#5C5548",
                                                }}
                                            >
                                                Expiration
                                            </label>
                                            <input
                                                type="text"
                                                id="expiration"
                                                name="expiration"
                                                className={`form-control ${
                                                    errors.expiration
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                value={formData.expiration}
                                                onChange={
                                                    handleExpirationChange
                                                }
                                                placeholder="MM/YY"
                                                maxLength="5"
                                                aria-label="Expiration Date"
                                                aria-describedby={
                                                    errors.expiration
                                                        ? "expiration-error"
                                                        : undefined
                                                }
                                            />
                                            {errors.expiration && (
                                                <div
                                                    id="expiration-error"
                                                    className="invalid-feedback"
                                                >
                                                    {errors.expiration}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-6">
                                            <label
                                                htmlFor="cvc"
                                                className="form-label small text-uppercase"
                                                style={{
                                                    letterSpacing: "0.1em",
                                                    color: "#5C5548",
                                                }}
                                            >
                                                CVC
                                            </label>
                                            <div className="position-relative">
                                                <input
                                                    type="text"
                                                    id="cvc"
                                                    name="cvc"
                                                    className={`form-control ${
                                                        errors.cvc
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    value={formData.cvc}
                                                    onChange={handleInputChange}
                                                    placeholder="CVC"
                                                    maxLength="4"
                                                    aria-label="CVC"
                                                    aria-describedby={
                                                        errors.cvc
                                                            ? "cvc-error"
                                                            : undefined
                                                    }
                                                    style={{
                                                        paddingRight: "2.5rem",
                                                    }}
                                                />
                                                <span
                                                    className="position-absolute top-50 end-0 translate-middle-y me-3"
                                                    style={{
                                                        fontSize: "0.75rem",
                                                        color: "#5C5548",
                                                    }}
                                                >
                                                    🔒
                                                </span>
                                            </div>
                                            {errors.cvc && (
                                                <div
                                                    id="cvc-error"
                                                    className="invalid-feedback"
                                                >
                                                    {errors.cvc}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Order Summary - Desktop */}
                        <div className="col-12 col-lg-4">
                            <div
                                className="card rounded-4 border shadow-sm sticky-top"
                                style={{
                                    background: "rgba(255,255,255,0.7)",
                                    top: "1rem",
                                }}
                            >
                                <div className="card-body p-3 p-md-4">
                                    <h2 className="h5 fw-semibold text-uppercase mb-3">
                                        Order Summary
                                    </h2>
                                    <div className="d-flex flex-column gap-2 mb-3">
                                        {items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="d-flex align-items-center gap-3"
                                            >
                                                <div
                                                    className="rounded-3 overflow-hidden flex-shrink-0"
                                                    style={{
                                                        width: 60,
                                                        height: 60,
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
                                                    <p className="small mb-0 fw-semibold">
                                                        {item.name}
                                                    </p>
                                                    <p
                                                        className="small mb-0"
                                                        style={{
                                                            color: "#5C5548",
                                                        }}
                                                    >
                                                        Qty: {item.quantity} ×{" "}
                                                        {item.price.toLocaleString(
                                                            "en-GB"
                                                        )}{" "}
                                                        DH
                                                    </p>
                                                </div>
                                                <p className="small mb-0 fw-medium">
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
                                    <div className="pt-2 border-top">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span
                                                className="small"
                                                style={{ color: "#5C5548" }}
                                            >
                                                Subtotal
                                            </span>
                                            <span className="small">
                                                {totalPrice.toLocaleString(
                                                    "en-GB"
                                                )}{" "}
                                                DH
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <span
                                                className="small"
                                                style={{ color: "#5C5548" }}
                                            >
                                                Shipping
                                            </span>
                                            <span className="small">
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
                                                {finalTotal.toLocaleString(
                                                    "en-GB"
                                                )}{" "}
                                                DH
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-dark rounded-pill w-100 mt-4 py-3"
                                        disabled={isProcessing}
                                        style={{ backgroundColor: "#1F1B16" }}
                                    >
                                        {isProcessing ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm me-2"
                                                    role="status"
                                                    aria-hidden="true"
                                                ></span>
                                                Processing...
                                            </>
                                        ) : (
                                            `Pay ${finalTotal.toLocaleString(
                                                "en-GB"
                                            )} DH`
                                        )}
                                    </button>

                                    <div className="text-center mt-3">
                                        <small
                                            className="d-flex align-items-center justify-content-center gap-2"
                                            style={{ color: "#5C5548" }}
                                        >
                                            <span>🔒</span>
                                            <span>
                                                Payment secured by Stripe
                                            </span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default CheckoutPage;
