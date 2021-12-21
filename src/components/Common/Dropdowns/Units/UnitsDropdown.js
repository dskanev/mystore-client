import { useEffect, useState } from "react";

import * as dropdownService from '../../../../services/dropdownService';

const UnitsDropdown = ({
    existingValue
}) => {
    const [units, setUnits] = useState([]);
    const [selectedClient, setSelectedClient] = useState(existingValue?.id); //default value

    function handleSelectChange(event) {
        setSelectedClient(event.target.value);
    }

    useEffect(() => {
        dropdownService.getUnits()
            .then(result => {
                setUnits(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <select id="unitOfMeasurementId" name="unitOfMeasurementId" value={existingValue?.id ?? 'DEFAULT'} onChange={handleSelectChange}>
            <option value='DEFAULT' disabled>Select Unit of Measurement</option>
            {
                units.map(x => {
                    return(
                        <option key={x.id} value={x.id}>{x.description}</option>
                    )
                })
            }
        </select>        
    );
}

export default UnitsDropdown;