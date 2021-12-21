import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as projectService from '../../../services/projectService';
import useProjectState from '../../../hooks/useProjectState';
import { Alert } from 'react-bootstrap';
import CitiesDropdown from '../../Common/Dropdowns/Cities/CitiesDropdown';
import UnitsDropdown from '../../Common/Dropdowns/Units/UnitsDropdown';

const Edit = () => {
    const { projectId } = useParams();
    const [errors, setErrors] = useState({name: false})
    const [project, setProject] = useProjectState(projectId);
    
    const projectEditSubmitHandler = (e) => {
        e.preventDefault();

        let projectData = Object.fromEntries(new FormData(e.currentTarget));
        projectData.id = projectId;
        projectService.update(projectData);
    }

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" onSubmit={projectEditSubmitHandler} method="POST">
                <fieldset>
                    <legend>Add new project</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" defaultValue={project.name}/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description" defaultValue={project.description}></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="unitOfMeasurementId">Unit Of Measurement</label>
                        <span className="input">
                            <UnitsDropdown />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="measurement">Measurement</label>
                        <span className="input">
                            <input type="text" name="measurement" id="measurement" defaultValue={project.measurement}/>
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="cityId">City</label>
                        <span className="input">
                            <CitiesDropdown />
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="deadline">Deadline</label>
                        <span className="input">
                            <input type="date" id="deadline" name="deadline" defaultValue={project.deadline}/>
                        </span>
                    </p>
                    
                    <input className="button submit" type="submit" value="Save Project" />
                </fieldset>
            </form>
        </section>
    );
}

export default Edit;