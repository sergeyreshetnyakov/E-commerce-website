import { useGetProductsQuery } from "../../app/fetchProducts";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/cart/cartSlice";
import Product from "./Product";

const ProductList = () => {
    const { data, isLoading } = useGetProductsQuery();
    const cart = useSelector(selectCart);
    return (
        <div>
            <div>
                <h2 className="font-sans text-base font-bold mb-2 ">
                    PRODUCTS
                </h2>
                <hr className="pb-5 px-5 " />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-11 ">
                {isLoading ? (
                    <span className="text-xl text-center font-monserrat">
                        Loading...
                    </span>
                ) : (
                    data.map((product) => <Product data={product} />)
                )}
            </div>
        </div>
    );
};

export default ProductList;
