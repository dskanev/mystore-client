import { Link } from "react-router-dom";

const Project = ({
    project
}) => {
    return (
        <li className="otherproject">
            <h3>Name: {project.name}</h3>
            <p>Description: {project.description}</p>
            <p>Measurement: {project.measurement}</p>
            <Link className="button" to="/">Details</Link>
        </li>
    )
}

export default Project;