import { useEffect, useState } from "react";

import * as dropdownService from '../../../../services/dropdownService';

const UnitsDropdown = () => {
    const [units, setUnits] = useState([]);

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
        <select id="unitOfMeasurementId" name="unitOfMeasurementId" defaultValue={'DEFAULT'}>
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