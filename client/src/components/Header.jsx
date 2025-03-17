import { NavLink } from "react-router"

const Header = ({ user }) => {
    return (
        <nav className={`nav-bar ${user ? "logged-in" : "logged-out"}`}>
            <h1>La pâtisserie 3WA</h1>

            {user ? (
                <div className="nav-links">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/admin">Admin</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/">Logout</NavLink>
                </div>
            ) : (
                <NavLink to="/">Login</NavLink>
            )}
        </nav>
    );
};

export default Header
