import { useState } from "react"
import { useLoginMutation } from "../store/slice/userSlice"
import { useNavigate } from "react-router"

import InputLogin from "./InputLogin"
import Button from "./Button"

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
            const reponse = await login(formData).unwrap();

            console.log(reponse)
            if (reponse.id) {
                setFormData({ email: "", password: "" })
                navigate("/")
            }

        } catch (err) {
            console.error("Erreur lors de la connexion :", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-login">
            <InputLogin label="Email" name="email" value={formData.email} onChange={handleChange} />
            <InputLogin label="Mot de passe" name="password" type="password" value={formData.password} onChange={handleChange} />
            <Button
                label={isLoading ? "Connexion..." : "Login"}
                type="submit"
                disabled={isLoading}
                className="login"
            />
            {isError ? <p>Erreur : {error?.data?.message || "Connexion échouée"}</p> : <><br /> <br /></>}
        </form>
    );
};

export default FormLogin;
