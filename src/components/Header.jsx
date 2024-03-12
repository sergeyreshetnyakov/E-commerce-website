import Button from "./Button";
import "./Header.sass";

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div>
                    <span className="header-text">NUMBER ONE FASHION</span>
                </div>
                <div>
                    <h1 className="header-header-text">
                        FASHION OF
                        <br />
                        FREEDOM
                    </h1>
                </div>
                <div>
                    <span className="header-cost">
                        Starting from{" "}
                        <span className="header-cost-numbers">$10.00</span>
                    </span>
                </div>
                <div className="mt-4">
                    <Button text={"SHOP NOW"} />
                </div>
            </div>
        </div>
    );
};

export default Header;
