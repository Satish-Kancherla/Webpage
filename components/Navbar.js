import{NavLink}from "react-router-dom"
import { useAuth } from "./Auth";
import PrivateRoute from "./Private-Route";


const Navbar = () => {
    const { user, logout } = useAuth();
    return ( 
        <div className="con">
        <nav >
            <span>HYDERABAD</span>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">Contact Us</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">
                Projects
            </NavLink>
            {/* <NavLink to="/projects">
                <PrivateRoute>Projects</PrivateRoute>
            </NavLink> */}
            {/* <NavLink to="/login"  style={{color: "yellow",paddingLeft:"70px"}}>Employee Login</NavLink> */}
            
            {user ? (
                    <NavLink to="/logout" onClick={logout}>Logout</NavLink>
            ) : (
                    <NavLink to="/login">Login</NavLink>
            )}
        </nav>
        </div>
     );
}
 
export default Navbar;