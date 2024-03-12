const Button = ({ text, onClick }) => {
    return (
        <button
            className="transition duration-700 ease-in-out inline-block bg-black px-4 py-2.5 hover:bg-red-300"
            onClick={() => (onClick !== undefined ? onClick() : console.log())}
        >
            <span className="text-white font-monserrat text-base font-bold ">
                {text}
            </span>
        </button>
    );
};

export default Button;
