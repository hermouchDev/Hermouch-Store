import { Link } from "react-router-dom";
// import Footer from "../Layout/Footer";

const CartPage = ({
    items,
    updateQuantity,
    removeItem,
    getTotalPrice,
    getTotalItems,
}) => {
    const totalPrice = getTotalPrice();
    const totalItems = getTotalItems();

    if (items.length === 0) {
        return (
            <div
                className="min-vh-100 d-flex flex-column"
                style={{ backgroundColor: "#F4F1EC", color: "#1F1B16" }}
            >
                <header
                    className="border-bottom"
                    style={{ background: "rgba(249,247,243,0.8)" }}
                >
                    <div className="container d-flex flex-column gap-3 px-3 px-md-4 py-3 py-md-4 flex-sm-row align-items-sm-center justify-content-sm-between">
                        <div>
                            <p className="text-uppercase small text-secondary mb-1" style={{ fontSize: "clamp(0.7rem, 2vw, 0.875rem)" }}>
                                atelier
                            </p>
                            <h1
                                className="mt-1 display-6 fw-bold text-uppercase"
                                style={{
                                    fontFamily: "Playfair Display",
                                    fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                                }}
                            >
                                shopping cart
                            </h1>
                        </div>
                        <Link
                            to="/shop"
                            className="btn btn-outline-secondary rounded-pill align-self-start align-self-sm-auto w-100 w-sm-auto text-center"
                        >
                            continue shopping
                        </Link>
                    </div>
                </header>

                <main className="container px-3 px-md-4 py-4 py-md-5">
                    <div className="text-center">
                        <h2
                            className="h4 h5-md text-uppercase fw-light"
                            style={{
                                color: "#5C5548",
                                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                            }}
                        >
                            your cart is empty
                        </h2>
                        <p className="mt-3" style={{ color: "#6D6556" }}>
                            Discover our curated collection of home decor
                            pieces.
                        </p>
                        <Link
                            to="/shop"
                            className="btn btn-dark rounded-pill mt-3 px-4 py-2"
                        >
                            start shopping
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
                <div className="container d-flex flex-column gap-3 px-3 px-md-4 py-3 py-md-4 flex-sm-row align-items-sm-center justify-content-sm-between">
                        <div>
                            <h1
                                className="mt-1 display-6 fw-bold text-uppercase"
                                style={{
                                    fontFamily: "Playfair Display",
                                    fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                                }}
                            >
                                shopping cart
                            </h1>
                            <p className="mt-2 small" style={{ color: "#5C5548", fontSize: "clamp(0.8rem, 2vw, 0.875rem)" }}>
                                {totalItems} item{totalItems === 1 ? "" : "s"}
                            </p>
                        </div>
                    <Link
                        to="/shop"
                        className="btn btn-outline-secondary rounded-pill align-self-start align-self-sm-auto w-100 w-sm-auto text-center"
                    >
                        continue shopping
                    </Link>
                </div>
            </header>

            <main className="container px-3 px-md-4 py-4 py-md-5">
                <div className="row g-3 g-md-4">
                    <div className="col-12 col-lg-8">
                        <div className="d-flex flex-column gap-3">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="card rounded-4 border shadow-sm"
                                    style={{
                                        background: "rgba(255,255,255,0.7)",
                                    }}
                                >
                                    <div className="card-body p-3 p-md-4">
                                        <div className="d-flex flex-column flex-sm-row gap-3 gap-md-4">
                                            <div
                                                className="rounded-3 overflow-hidden flex-shrink-0 mx-auto mx-sm-0"
                                                style={{
                                                    width: "clamp(80px, 15vw, 96px)",
                                                    height: "clamp(80px, 15vw, 96px)",
                                                    minWidth: "80px",
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
                                            <div className="d-flex flex-column justify-content-between flex-grow-1 text-center text-sm-start">
                                                <div>
                                                    <h3 className="h6 text-capitalize fw-semibold mb-1" style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}>
                                                        {item.name}
                                                    </h3>
                                                    {item.selectedSize && (
                                                        <span className="small text-secondary" style={{ fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}>
                                                            Size:{" "}
                                                            {item.selectedSize}
                                                        </span>
                                                    )}
                                                    <p
                                                        className="small mb-0"
                                                        style={{
                                                            color: "#5C5548",
                                                            fontSize: "clamp(0.8rem, 2vw, 0.875rem)"
                                                        }}
                                                    >
                                                        {item.price.toLocaleString(
                                                            "en-GB"
                                                        )}{" "}
                                                        DH
                                                    </p>
                                                </div>
                                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between mt-2 gap-2">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <button
                                                            type="button"
                                                            aria-label="Decrease quantity"
                                                            className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                                                            style={{
                                                                width: 32,
                                                                height: 32,
                                                            }}
                                                            onClick={() =>
                                                                updateQuantity(
                                                                    item.id,
                                                                    item.quantity -
                                                                        1
                                                                )
                                                            }
                                                        >
                                                            −
                                                        </button>
                                                        <span
                                                            className="text-center fw-semibold"
                                                            style={{
                                                                width: 32,
                                                            }}
                                                        >
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            aria-label="Increase quantity"
                                                            className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                                                            style={{
                                                                width: 32,
                                                                height: 32,
                                                            }}
                                                            onClick={() =>
                                                                updateQuantity(
                                                                    item.id,
                                                                    item.quantity +
                                                                        1
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-link p-0 small"
                                                        style={{
                                                            color: "#8A826F",
                                                        }}
                                                        onClick={() =>
                                                            removeItem(item.id)
                                                        }
                                                    >
                                                        remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-center text-sm-end">
                                                <p className="fw-medium mb-0" style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}>
                                                    {(
                                                        item.price *
                                                        item.quantity
                                                    ).toLocaleString(
                                                        "en-GB"
                                                    )}{" "}
                                                    DH
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

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
                                    summary
                                </h2>
                                <div className="d-flex flex-column gap-2">
                                    <div className="d-flex justify-content-between small">
                                        <span style={{ color: "#5C5548" }}>
                                            subtotal
                                        </span>
                                        <span>
                                            {totalPrice.toLocaleString("en-GB")}{" "}
                                            DH
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between small">
                                        <span style={{ color: "#5C5548" }}>
                                            shipping
                                        </span>
                                        <span>calculated at checkout</span>
                                    </div>
                                    <div className="pt-2 border-top">
                                        <div className="d-flex justify-content-between fw-medium">
                                            <span>total</span>
                                            <span>
                                                {totalPrice.toLocaleString(
                                                    "en-GB"
                                                )}{" "}
                                                DH
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to="/checkout"
                                    className="btn btn-dark rounded-pill w-100 mt-3 py-2 text-decoration-none text-center"
                                >
                                    proceed to checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default CartPage;
