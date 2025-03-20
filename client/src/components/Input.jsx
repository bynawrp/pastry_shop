const Input = ({ label, name, type = "text", value, onChange, className }) => {
    return (

        <div className={`input-form ${className ? className : ""}`}>
            {label && <label>{label}</label>}
            <input type={type} name={name} value={value} onChange={onChange} required />
        </div>
    )
}

export default Input
