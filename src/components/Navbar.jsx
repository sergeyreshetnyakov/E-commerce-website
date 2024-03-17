import { Link } from "react-router-dom";
import CartIcon from "./svg/CartIcon";
import LogoIcon from "./svg/LogoIcon";

const Navbar = () => {
    return (
        <div className="flex justify-between my-5">
            <div className="flex">
                <div>
                    <h1 className="text-2xl font-logo">
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
