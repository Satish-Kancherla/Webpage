import { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
import log1 from "./images/l1.jpg";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const[name,setName]=useState(" ");
    return ( 
        <div className="log">
            <div className="log-img">
                <img src={log1} alt=""/>
            </div>
            <div className="log-a">
            <h1>LOGIN</h1>
            <label>UserName</label>
            <input type="text" name="name"  id="name" value={name} placeholder="enter username"onChange={(e) => setName(e.target.value)}/>
            <br/>
            <button onClick={() => {
                login(name);
                navigate("/", { replace: true });}}
            >Login</button>
            </div>
        </div>
     );
}
 
export default Login;