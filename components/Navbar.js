import{NavLink}from "react-router-dom"

const Navbar = () => {
    return ( 
        
        <nav >
            <span>HYDERABAD</span>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">Contact Us</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/login"  style={{color: "yellow",paddingLeft:"70px"}}>Employee Login</NavLink>
        </nav>
     );
}
 
export default Navbar;