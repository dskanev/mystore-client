import { Link } from "react-router-dom";

const Project = ({
    project
}) => {
    return (
        <li className="otherProject">
            <div className="floatLeft">
                <h2>{project.name}</h2>
            </div>            
            <Link className="button floatRight" to="/">Details</Link>
        </li>
    )
}

export default Project;