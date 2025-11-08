import { Link, NavLink } from "react-router-dom";

const Header = ({ totalItems }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top" style={{ backdropFilter: 'saturate(180%) blur(8px)' }}>
      <div className="container px-3 px-md-4">
        <Link to="/" className="navbar-brand fw-bold text-uppercase" style={{ color: '#D4AF37', letterSpacing: '0.08em', fontFamily: 'Playfair Display', fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }}>
          HERMOUCH
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item me-lg-4">
              <NavLink to="/" end className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>Shop</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/cart" className="nav-link position-relative d-flex align-items-center">
                <i className="bi bi-bag" style={{ fontSize: 'clamp(rem, 3vw, 1.2rem)' }}></i>
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" style={{ fontSize: 'clamp(0.65rem, 2vw, 0.75rem)' }}>
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;


