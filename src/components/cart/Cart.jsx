import { useSelector, useDispatch } from "react-redux";
import { clearCart, selectCart } from "../../features/cart/cartSlice";
import CartProduct from "../cart/CartProduct";
import Button from "../Button";
import "./Cart.sass";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);

    let cartSum = 0;
    cart[0] !== undefined
        ? cart.forEach(
              (item) => (cartSum += Math.floor(item.price * item.amount))
          )
        : console.log();
    return (
        <div className="App">
            <div className="cart">
                <h1 className="cart-header">Cart</h1>
                {cart[0] !== undefined ? (
                    cart.map((product) => <CartProduct data={product} />)
                ) : (
                    <h4 className="cart-empty">cart is empty</h4>
                )}
                <div className="cart-buy">
                    <h3 className="cart-cost-header">Cost</h3>
                    <span className="cart-cost">{cartSum}</span>
                    <div className="cart-buy-button">
                        <Button
                            text={" Buy "}
                            onClick={() => {
                                alert("buy success");
                                dispatch(clearCart());
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
