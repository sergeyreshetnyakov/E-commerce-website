import { useSelector } from "react-redux";
import Counter from "../products/Counter";
import "./CartProduct.sass";

const CartProduct = ({ data }) => {
    const cart = useSelector((state) => state.cart.cart);

    return (
        <div className="cart-product">
            <div>
                <img className="cart-product-image" src={data.image} />
                <h1 className="cart-product-header">{data.title}</h1>
            </div>
            <div className="cart-product-info">
                <Counter data={data} cart={cart} />
                <span className="cart-product-cost">
                    ${Math.floor(data.price)}.00
                </span>
            </div>
        </div>
    );
};

export default CartProduct;
