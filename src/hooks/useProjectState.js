import { useState, useEffect, useMemo } from 'react';

import * as projectService from '../services/projectService';

const useProjectState = (projectId) => {
    const [project, setProject] = useState({});

    const controller = useMemo(() => {
        const controller = new AbortController();

        return controller;
    }, [])

    useEffect(() => {
        projectService.getProject(projectId, controller.signal)
            .then(result => {
                setProject(result);
            })

        return () => {
            controller.abort();
        }
    }, [projectId, controller]);

    return [
        project,
        setProject
    ]
};

export default useProjectState;