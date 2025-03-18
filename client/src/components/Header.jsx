import { NavLink, Link } from "react-router";
import { useEffect } from "react";
import { useLogoutMutation, useGetUserQuery } from "../store/slice/userSlice";

import "../assets/style/header.scss";

const Header = () => {
    const [logout] = useLogoutMutation();
    const { data: user, refetch } = useGetUserQuery();


    const handleLogout = async () => {
        try {
            await logout();
            console.log(await logout())
            refetch();
            window.location.reload()
        } catch (error) {
            console.error("Erreur lors de la déconnexion :", error);
        }
    };

    return (
        <nav className="nav-bar">
            <h1>La pâtisserie 3WA</h1>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {user ? (
                    <>
                        <NavLink to="/admin">Admin</NavLink>
                        <NavLink to="/login" onClick={handleLogout}>
                            Logout
                        </NavLink>
                    </>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </div>
        </nav>
    );
};

export default Header;
