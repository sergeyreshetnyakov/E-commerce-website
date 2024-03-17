import {
    addToCart,
    decrementAmount,
    incrementAmount,
} from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import MinusIcon from "../svg/MinusIcon";
import PlusIcon from "../svg/PlusIcon";
import Button from "../Button";

const Counter = ({ data, cart }) => {
    const dispatch = useDispatch();
    let item;

    if(cart !== undefined || cart !== Array) {
        item = cart.find((e) => e.id === data.id);
    }

    return (
        <div className="flex flex-col justify-center">
            { item === undefined ? (
                <button onClick={() => dispatch(addToCart(data))}>
                    <Button text={"BUY NOW"} />
                </button>
            ) : (
                <div className="border shadow-inner rounded-lg flex flex-row justify-center ">
                    <button
                        className="px-2"
                        onClick={() => dispatch(incrementAmount(data.id))}
                    >
                        <PlusIcon />
                    </button>
                    <div className="flex flex-col justify-center">
                        <span className="text-black text-lg mx-2 leading-5 w-5 text-center">
                            {item !== undefined ? item.amount : 0}
                        </span>
                    </div>
                    <button
                        className="px-2"
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
