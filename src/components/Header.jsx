import Button from "./Button";

const Header = () => {
    return (
        <div className="background bg-no-repeat bg-cover h-[50vh] mb-5 flex">
            <div className="py-8 px-5 ">
                <div>
                    <span className="font-sans text-base font-bold tracking-widest">
                        NUMBER ONE FASHION
                    </span>
                </div>
                <div>
                    <h1 className="font-monserrat text-5xl font-bold mb-2 inline-block transition duration-700 translate-x-0 hover:translate-x-3">
                        FASHION OF
                        <br />
                        FREEDOM
                    </h1>
                </div>
                <div>
                    <span className="font-monserrat text-base font-bold text-gray-400 transition duration-300 ease-in-out hover:text-black">
                        Starting from <span className="text-black">$10.00</span>
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
