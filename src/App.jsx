import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./Components/Layout/Header";
import ScrollToTop from "./Components/Common/ScrollToTop";

// Page Components
import HomePage from "./Components/Pages/HomePage";
import ShopPage from "./Components/Pages/ShopPage";
import CartPage from "./Components/Pages/CartPage";
import CheckoutPage from "./Components/Pages/CheckoutPage";
import OrderConfirmationPage from "./Components/Pages/OrderConfirmationPage";
import ProductDetailPage from "./Components/Pages/ProductDetailPage";

function App() {
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then((r) => r.json())
            .then(setProducts);
    }, []);

    const addItem = (product) => {
        setItems((prev) => {
            // Handle products with sizes - treat each size as separate item
            const itemKey = product.selectedSize
                ? `${product.id}-${product.selectedSize}`
                : product.id;
            const found = prev.find(
                (i) =>
                    i.id === itemKey ||
                    (i.id === product.id &&
                        !i.selectedSize &&
                        !product.selectedSize)
            );
            if (found)
                return prev.map((i) =>
                    i.id === itemKey ||
                    (i.id === product.id &&
                        !i.selectedSize &&
                        !product.selectedSize)
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            return [...prev, { ...product, id: itemKey, quantity: 1 }];
        });
    };

    const removeItem = (id) =>
        setItems((prev) => prev.filter((i) => i.id !== id));
    const updateQuantity = (id, quantity) => {
        setItems((prev) => {
            const q = Math.max(0, quantity);
            if (q === 0) return prev.filter((i) => i.id !== id);
            return prev.map((i) => (i.id === id ? { ...i, quantity: q } : i));
        });
    };

    const getTotalItems = () => items.reduce((s, i) => s + i.quantity, 0);
    const getTotalPrice = () =>
        items.reduce((s, i) => s + i.price * i.quantity, 0);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header totalItems={getTotalItems()} />
            <Routes>
                <Route path="/" element={<HomePage products={products} />} />
                <Route
                    path="/shop"
                    element={
                        <ShopPage
                            products={products}
                            addItem={addItem}
                            totalItems={getTotalItems()}
                            cartTotal={getTotalPrice()}
                        />
                    }
                />
                <Route
                    path="/product/:id"
                    element={
                        <ProductDetailPage
                            products={products}
                            addItem={addItem}
                        />
                    }
                /> 
                <Route
                    path="/cart"
                    element={
                        <CartPage
                            items={items}
                            updateQuantity={updateQuantity}
                            removeItem={removeItem}
                            getTotalItems={getTotalItems}
                            getTotalPrice={getTotalPrice}
                        />
                    }
                />
                <Route
                    path="/checkout"
                    element={
                        <CheckoutPage
                            items={items}
                            getTotalPrice={getTotalPrice}
                        />
                    }
                />
                <Route
                    path="/checkout/confirmation"
                    element={<OrderConfirmationPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
