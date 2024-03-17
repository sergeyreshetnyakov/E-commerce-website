import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../../features/cart/cartSlice";
import CartProduct from "../cart/CartProduct";
import Button from "../Button";
import Navbar from "../Navbar";

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
        <div className="mx-[20%] min-h-[50vh] max-2xl:mx-[15%]">
            <Navbar />
            <div className="flex flex-col justify-middle min-h-[60vh]">
                <h1 className="font-sans font-bold text-5xl mb-8">Cart</h1>
                {cart[0] !== undefined ? (
                    cart.map((product) => <CartProduct data={product} />)
                ) : (
                    <h4 className="flex justify-center text-3xl mb-8">cart is empty</h4>
                )}
                <div className="p-10 border-2 shadow flex flex-col">
                    <h3 className="font-bold font-sans text-3xl mb-2">Cost</h3>
                    <span className="font-sans text-xl border-b-2 mb-3">{cartSum}</span>
                    <div className="flex justify-center ">
                        <Button
                            text={" Buy "}
                            onClick={() => {
                                alert("buy success");
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
