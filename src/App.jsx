import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ProductList from "./components/products/ProductList";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/cart/Cart";
import "./App.sass";

const ShopPage = () => {
    return (
        <div className="App">
            <Header />
            <ProductList />
        </div>
    )
}
const App = () => {
    return (
        <Provider store={store}>
            <Navbar />
            <Routes>
                <Route path="/" element={<ShopPage />} />
                <Route path="cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Provider>
    );
};

export default App;
