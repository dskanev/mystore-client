import { useState, useEffect } from 'react';

import * as projectService from '../../../services/projectService';
import { useAuthContext } from '../../../contexts/AuthContext';

import ProjectList from '../ProjectList';

const UserProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        projectService.getUserProjects()
            .then(result => {
                setProjects(result);
            });
    }, []);

    return (
        <section id="my-projects-page" className="my-projects">
            <h1>My Projects</h1>

            <ProjectList projects={projects} />
        </section>
    );
}

export default UserProjects;