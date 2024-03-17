import { useSelector } from "react-redux";
import Counter from "./Counter";

const Product = ({ data }) => {
    const cart = useSelector((state) => state.cart.cart);

    return (
        <div className="border rounded-lg max-h-96 p-2 flex flex-col justify-between py-2 px-2 shadow-none duration-700 ease-out hover:shadow-md">
            <img
                className="max-h-44 w-auto overflow-hidden m-auto transition-transform duration-300 delay-75 ease-out hover:scale-105"
                src={data.image}
            />
            <div className="bottom-container">
                <div>
                    <h1 className="my-2 line-clamp-1 font-sans text-base font-normal transition duration-500 hover:translate-x-2">
                        {data.title}
                    </h1>
                </div>
                <div className="flex justify-between flex-col-reverse lg:flex-row">
                    <div>
                        <Counter data={data} cart={cart} />
                    </div>
                    <div className="flex flex-col justify-end">
                        <span className="font-sans text-base font-bold ">
                            ${Math.floor(data.price)}.00
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
