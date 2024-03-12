import { useSelector } from "react-redux";
import Counter from "./Counter";
import "./Product.sass";

const Product = ({ data }) => {
    const cart = useSelector((state) => state.cart.cart);

    return (
        <div className="product">
            <div className="product-image-container">
                <img className="product-image" src={data.image} />
            </div>
            <div className="bottom-container">
                <div>
                    <h1 className="product-header">{data.title}</h1>
                </div>
                <div className="button-container">
                    <div>
                        <Counter data={data} cart={cart} />
                    </div>
                    <div className="product-cost-container">
                        <span className="product-cost">
                            ${Math.floor(data.price)}.00
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
