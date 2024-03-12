import { useGetProductsQuery } from "../../app/fetchProducts";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/cart/cartSlice";
import Product from "./Product";
import "./Products.sass";

const ProductList = () => {
    const { data, isLoading } = useGetProductsQuery();
    const cart = useSelector(selectCart);
    return (
        <div>
            <div>
                <h2 className="product-list-header-text">PRODUCTS</h2>
            </div>
            <div>
                <hr />
            </div>
            <div className="product-list">
                {isLoading ? (
                    <span className="product-list-loading">Loading...</span>
                ) : (
                    data.map((product) => <Product data={product} />)
                )}
            </div>
        </div>
    );
};

export default ProductList;
