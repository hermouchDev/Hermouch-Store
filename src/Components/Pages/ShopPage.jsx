import { useState } from "react";
import ProductListPage from "../Product/ProductListPage";
import Footer from "../Layout/Footer";

const ShopPage = ({ products, addItem, totalItems, cartTotal }) => {
    const CATEGORIES = [
        { value: "ALL", label: "All" },
        { value: "T-SHIRT", label: "T-Shirts" },
        { value: "HOODIE", label: "Hoodies" },
        { value: "OUTERWEAR", label: "Outerwear" },
        { value: "SWEATSHIRT", label: "Sweatshirts" },
        { value: "SNEAKERS", label: "Sneakers" },
        { value: "PANTS", label: "Pants" },
        { value: "CAP", label: "Caps" },
    ];

    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const filteredProducts =
        selectedCategory === "ALL"
            ? products
            : products.filter(
                (product) =>
                    (product.type || "").toUpperCase() === selectedCategory
            );

    return (
        <div
            className="min-vh-100 d-flex flex-column"
            style={{ backgroundColor: "#F4F1EC", color: "#1F1B16" }}
        >
            <main className="container px-3 px-md-4 py-4 py-md-5 flex-grow-1">
                <div className="mb-4 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-5">
                    <h1
                        className="h2 fw-bold m-0"
                        style={{
                            fontFamily: "Playfair Display",
                            fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                        }}
                    >
                        Shop
                    </h1>

                    <div className="w-30 w-md-auto" style={{ maxWidth: "100%", minWidth: "200px" }}>
                        <label
                            htmlFor="category-filter"
                            className="form-label mb-2 mx-3"
                            style={{
                                letterSpacing: "0.1em",
                                fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
                                color: "#5C5548",
                            }}
                        >
                            Filter
                        </label>
                        <div className="position-relative">
                            <select
                                id="category-filter"
                                className="form-select border-0"
                                style={{
                                    boxShadow: "0 6px 16px #a0a0a017",
                                    borderRadius: "999px",
                                    padding: "clamp(0.625rem, 2vw, 0.75rem) clamp(2rem, 5vw, 3rem) clamp(0.625rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)",
                                    backgroundColor: "white",
                                    color: "#000",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
                                    width: "100%",
                                }}
                                value={selectedCategory}
                                onChange={(event) =>
                                    setSelectedCategory(event.target.value)
                                }
                            >
                                {CATEGORIES.map(({ value, label }) => (
                                    <option
                                        key={value}
                                        value={value}
                                        style={{ color: "#1F1B16" }}
                                    >
                                        {label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <ProductListPage
                    products={filteredProducts}
                    addItem={addItem}
                    totalItems={totalItems}
                    cartTotal={cartTotal}
                />
            </main>
            <Footer />
        </div>
    );
};

export default ShopPage;
