import { useState, useEffect } from 'react';

import * as projectService from '../../../services/projectService';

const ApplicantsList = ({
    projectId
}) => {    
    const [applicants, setApplicants] = useState([]);
    useEffect(() => {
        projectService.getProjectApplicants(projectId)
            .then(result => {
                setApplicants(result.data);
            });
    }, []);

    return (
        <>   
        {applicants.length > 0
            ? (
                <ul className="other-projects-list">
            {applicants.map(x => <h2>{x.email} {x.lastName}</h2>)}
        </ul>
            ) 
            : <p className="no-projects">No applicants yet.</p>
        }
        <></>
        </>                   
    );
}

export default ApplicantsList;