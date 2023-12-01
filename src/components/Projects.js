import { Link,Outlet } from "react-router-dom";

const Projects = () => {
    return (
        <div className="container-projects">
            <h1>Projects</h1>
            <nav>
                <Link to="/projects/featured">Featured Projects</Link>
                <Link to="/projects/new">New Projects</Link>
            </nav>
            <Outlet />
        </div>
      );
}
 
export default Projects;