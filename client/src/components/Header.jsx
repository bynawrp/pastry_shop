import { NavLink } from "react-router"
import { useLogoutMutation, useGetUserQuery } from "../store/slice/userSlice"

import "../assets/style/header.scss"
const Header = () => {
    const [logout] = useLogoutMutation()
    const { isSuccess } = useGetUserQuery()

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.error("Erreur lors de la déconnexion :", error)
        }
    }

    return (
        <header>
            <h1>La pâtisserie 3WA</h1>

            <nav className="nav-bar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {isSuccess ? (
                    <>
                        <NavLink to="/admin">Admin</NavLink>
                        <NavLink to="/login" onClick={handleLogout}>
                            Logout
                        </NavLink>
                    </>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </nav>
        </header>
    )
}

export default Header
