import { useDispatch, useSelector } from "react-redux"
import { selectLoginForm } from "../store/selectors/form-selector"
import { setLoginEmail, setLoginPassword, resetLoginForm } from "../store/slice/formSlice"

import { useLoginMutation } from "../store/slice/userSlice"
import { useNavigate } from "react-router"

import InputLogin from "./InputLogin"
import Button from "./Button"

const FormLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, { isLoading, isError, error }] = useLoginMutation()

    const { email, password } = useSelector(selectLoginForm)


    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "email") {
            dispatch(setLoginEmail(value))
        } else if (name === "password") {
            dispatch(setLoginPassword(value))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = { email, password }
            const reponse = await login(user).unwrap()

            // console.log(reponse)
            if (reponse.id) {
                dispatch(resetLoginForm())
                navigate("/")
            }

        } catch (err) {
            console.error("Erreur lors de la connexion :", err)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-login">
            <InputLogin label="Email" name="email" value={email} onChange={handleChange} />
            <InputLogin label="Mot de passe" name="password" type="password" value={password} onChange={handleChange} />
            <Button
                label={isLoading ? "Connexion..." : "Login"}
                type="submit"
                disabled={isLoading}
                className="login"
            />
            {isError && (
                <div className="error-message">
                    Erreur : {error?.data?.message || "Connexion échouée"}
                </div>
            )}

        </form>
    )
}

export default FormLogin
