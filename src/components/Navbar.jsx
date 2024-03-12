import React from "react";
import CartIcon from "./svg/CartIcon";
import LogoIcon from "./svg/LogoIcon";
import { Link } from "react-router-dom";
import "./Navbar.sass";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <div>
                    <h1 className="navbar-logo-text">
                        <Link to='/'>Craik</Link>
                    </h1>
                </div>
                <div>
                    <LogoIcon />
                </div>
            </div>
            <div>
                <Link to="/cart">
                    <CartIcon />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
