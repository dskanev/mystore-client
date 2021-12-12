import { useEffect, useState } from "react";

import * as projectService from '../../services/projectService';

import ProjectList from "../Projects/ProjectList";

const Dashboard = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        projectService.getAll()
            .then(result => {
                setProjects(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <section>
                <ProjectList projects={projects} />
            </section>
        </section>
        
    );
}

export default Dashboard;