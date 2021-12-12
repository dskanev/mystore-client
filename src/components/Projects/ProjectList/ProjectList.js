import Project from "../Project";

const ProjectList = ({
    projects
}) => {
    return (
        <>
            {projects.length > 0
                ? (
                    <ul className="other-projects-list">
                        {projects.map(x => <Project key={x.id} project={x} />)}
                    </ul>
                ) 
                : <p className="no-projects">No projects in database!</p>
            }
        </>
    );
}

export default ProjectList;