import { useState } from "react"
import InputLogin from "./InputLogin"
import { useLoginMutation } from "../store/slice/loginSlice"
import { useNavigate } from "react-router"

const FormLogin = () => {
    const navigate = useNavigate()
    const [login, { isLoading, isError, error }] = useLoginMutation()
    const [formData, setFormData] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const reponse = await login(formData)
            console.log(reponse)

            if (reponse.data) {
                setFormData({ email: "", password: "" })
                navigate("/home")
            }

        } catch (err) {
            console.error("Erreur lors de la connexion :", err);
            alert("Échec de la connexion !");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-login">
            <InputLogin label="Email" name="email" value={formData.email} onChange={handleChange} />
            <InputLogin label="Mot de passe" name="password" type="password" value={formData.password} onChange={handleChange} />
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Connexion..." : "Login"}
            </button>
            {isError && <p style={{ color: "red" }}>Erreur : {error?.data?.message || "Connexion échouée"}</p>}
        </form>
    );
};

export default FormLogin;
