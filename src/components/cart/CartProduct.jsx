import { useSelector } from "react-redux";
import Counter from "../products/Counter";

const CartProduct = ({ data }) => {
    const cart = useSelector((state) => state.cart.cart);

    return (
        <div className="flex justify-between px-6 py-4 my-5 w-full border shadow rounded-lg">
            <div>
                <img className="size-24" src={data.image} />
                <h1 className="font-sans flex flex-col justify-between">{data.title}</h1>
            </div>
            <div className="font-sans flex flex-col justify-between">
                <Counter data={data} cart={cart} />
                <span className="font-sans font-bold flex flex-col justify-end text-center">
                    ${Math.floor(data.price)}.00
                </span>
            </div>
        </div>
    );
};

export default CartProduct;
