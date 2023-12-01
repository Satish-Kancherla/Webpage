import About from "./About";
import Contacts from "./Contacts";
import Home from "./Home";
import Navbar from "./Navbar";
import {Routes,Route} from "react-router-dom";
import Projects from "./Projects";
import FeaturedProjects from "./Featured-Project";
import NewProjects from "./New-Projects";
import Login from "./Login"; 

const Main = () => {
    return ( 
            <div className="main"> 
                <div className="content">
                <Navbar />
                <div className="button"> 
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/contacts" element={<Contacts />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Projects />}>
                    <Route path="featured" element={<FeaturedProjects />}/>
                    <Route path="new" element={<NewProjects />}/>
                </Route>
                <Route path="/login" element={<Login />}/>
            </Routes>
            </div>
            </div>
                        
        </div>  
     );
}
 
export default Main;
