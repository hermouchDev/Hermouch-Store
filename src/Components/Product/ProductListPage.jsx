import { Link, useNavigate } from "react-router-dom";

const ProductListPage = ({ products, addItem }) => {
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        if (product.sizes && product.sizes.length > 0) {
            alert("Please select a size. Redirecting to product page...");
            navigate(`/product/${product.id}`);
            return;
        }
        addItem(product);
    };

    return (
        <div>
        <div className="container px-0">
            <section className="row g-2 g-md-3 g-lg-4">
            {products.map((product) => (
                <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                    <div className="card h-100 rounded-3 rounded-md-4 border shadow-sm" style={{ background: 'rgba(255,255,255,0.7)' }}>
                        <div className="position-relative">
                            <Link to={`/product/${product.id}`} className="text-decoration-none">
                                <div className="position-relative overflow-hidden rounded-top">
                                <img src={product.image} alt={product.name} loading="lazy" decoding="async"
                                    className="w-100" style={{ aspectRatio: '4 / 5', objectFit: 'cover' }} />
                                </div>
                            </Link>
                            <span className="position-absolute top-0 end-0 m-1 m-md-2 m-lg-3 rounded-pill px-1 px-md-2 px-lg-3 py-1 small"
                            style={{ background: 'rgba(255,255,255,0.75)', letterSpacing: '0.2em', color: '#8A826F', fontSize: 'clamp(0.6rem, 1.8vw, 0.875rem)' }}>
                            {product.type}
                            </span>
                        </div>
                        <div className="px-2 px-md-3 px-lg-4 py-2 py-md-3 py-lg-4">
                            <div className="mb-2">
                                <h2 className="h6 fw-semibold text-capitalize mb-1" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)', lineHeight: '1.3' }}>{product.name}</h2>
                                <p className="small mb-0" style={{ color: '#D4AF37', fontSize: 'clamp(0.8rem, 2vw, 1rem)', fontWeight: 'bold' }}>{product.price.toLocaleString("en-GB")} DH</p>
                            </div>
                            <p className="small mb-0 d-none d-md-block" style={{ color: 'rgba(128, 116, 95, 1)', fontSize: 'clamp(0.8rem, 2vw, 0.875rem)' }}>{product.description}</p>
                        </div>
                        <div className="px-2 px-md-3 px-lg-4 pb-2 pb-md-3 pb-lg-4 mt-auto">
                            <div className="d-flex gap-1 gap-md-2">
                                <Link to={`/product/${product.id}`} className="btn btn-outline-secondary rounded-pill w-50 py-1 py-md-2 d-flex align-items-center justify-content-center text-decoration-none" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>details</Link>
                                <button type="button" className="btn btn-dark rounded-pill w-50 py-1 py-md-2" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }} onClick={() => handleAddToCart(product)}>add</button>
                            </div>
                        </div>          
                    </div>
                </div>
            ))}
            </section>
        </div>
        </div>
    );    
};

export default ProductListPage;