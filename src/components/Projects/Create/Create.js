import { useNavigate } from 'react-router-dom';
import * as projectService from '../../../services/projectService';
import { useAuthContext } from '../../../contexts/AuthContext';

const Create = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const onProjectCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let unitOfMeasurementId = formData.get('unitOfMeasurementId');
        let cityId = formData.get('cityId');
        let measurement = formData.get('measurement');

        projectService.create({
            name,
            description,
            unitOfMeasurementId,
            cityId,
            measurement
        })
            .then(result => {
                navigate('/dashboard');
            })
    }

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onProjectCreate} method="POST">
                <fieldset>
                    <legend>Add new project</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="unitOfMeasurementId">Unit Of Measurement</label>
                        <span className="input">
                            <input type="text" name="unitOfMeasurementId" id="unitOfMeasurementId" placeholder="unitOfMeasurementId" />
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="cityId">City</label>
                        <span className="input">
                            <input type="text" name="cityId" id="cityId" placeholder="cityId" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="measurement">Measurement</label>
                        <span className="input">
                            <input type="text" name="measurement" id="measurement" placeholder="measurement" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Project" />
                </fieldset>
            </form>
        </section>
    );
}

export default Create;