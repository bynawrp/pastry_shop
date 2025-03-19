const Button = ({ label, onClick = () => { }, type = "button", className = "", disabled = false }) => {
    return (
        <button onClick={onClick} type={type} className={"btn " + className} disabled={disabled}>{label}</button>
    )
}

export default Button