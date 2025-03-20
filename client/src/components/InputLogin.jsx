const InputLogin = ({ label, name, type = "text", value, onChange }) => {
    return (
        <div className="input-form">
            <label>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} required />
        </div>
    )
}

export default InputLogin
