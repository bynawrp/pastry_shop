const Button = ({ label, onClick = () => { }, type = "button", className = "", disabled = false, style = {} }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={"btn " + className}
            disabled={disabled}
            style={style}
        >
            {label}
        </button>
    );
};

export default Button;