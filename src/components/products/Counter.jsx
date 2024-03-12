import {
    addToCart,
    decrementAmount,
    incrementAmount,
} from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import MinusIcon from "../svg/MinusIcon";
import PlusIcon from "../svg/PlusIcon";
import Button from "../Button";
import "./Counter.sass";

const Counter = ({ data, cart }) => {
    const dispatch = useDispatch();

    const item = cart.find((e) => e.id === data.id);
    return (
        <div className="counter">
            {cart.find((e) => data.id === e.id) === undefined ? (
                <button onClick={() => dispatch(addToCart(data))}>
                    <Button text={"BUY NOW"} />
                </button>
            ) : (
                <div className="counter-container">
                    <button
                        className="counter-button"
                        onClick={() => dispatch(incrementAmount(data.id))}
                    >
                        <PlusIcon />
                    </button>
                    <div className="count-container">
                        <span className="count">
                            {item !== undefined ? item.amount : 0}
                        </span>
                    </div>
                    <button
                        className="counter-button"
                        onClick={() => dispatch(decrementAmount(data.id))}
                    >
                        <MinusIcon />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Counter;
