import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Moment from 'moment';

import * as projectService from '../../../services/projectService';
import { useAuthContext } from "../../../contexts/AuthContext";
import { Button } from "react-bootstrap";
import ConfirmDialog from '../../Common/ConfirmDialog';
import useProjectState from "../../../hooks/useProjectState";

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { projectId } = useParams();
    const [project, setProject] = useProjectState(projectId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const deleteHandler = (e) => {
        e.preventDefault();

        // implement delete
    };

    const deleteClickHandler = (e) => {
        e.preventDefault();
        console.log(process.env.NODE_ENV);
        setShowDeleteDialog(true);
    }

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${project.id}`}>Edit</Link>
            <a className="button" href="#" onClick={deleteClickHandler}>Delete</a>
        </>
    ); 

    return (        
        <>
            <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />
            <section id="details-page" className="details">
                <div className="project-information">
                    <h3>Name: {project.name}</h3>
                    <p className="type">City: {project.city?.name}</p>
                    <p className="type">Unit of Measurement: {project.unitOfMeasurement?.description}</p>
                    <p className="type">Measurement: {project.measurement}</p>
                    <p className="type">Deadline: {Moment(project.deadline).format('DD-MM-yyyy')}</p>                    
                </div>
                
                <div className="project-description">
                    <h3>Description:</h3>
                    <p>{project.description}</p>
                </div>
                <div>
                        {project.id && (user.id == project._ownerId
                            ? ownerButtons
                            : null
                        )}
                </div>
            </section>
        </>
    );
}

export default Details;