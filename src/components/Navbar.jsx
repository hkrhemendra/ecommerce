import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Navbar = () => {

  const cartItems = useSelector(state => {
    console.log('State ----> ', state)
   return state.cartSlice
  })
  console.log('Cart items -----> ', cartItems); 

  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link
              to="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              PROSHOP
            </Link>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="nav-link px-2">
                Shop
              </Link>
            </li>
            <li>
              <a href="/" className="nav-link px-2">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-2">
                FAQs
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-2">
                About
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <Link to='/checkout' className="btn btn-outline-success me-2"> <i class="ri-shopping-cart-2-fill"></i> {cartItems?.productCount}  </Link>
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
