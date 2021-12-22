import { useEffect, useState } from "react";

import * as dropdownService from '../../../../services/dropdownService';

const CitiesDropdown = ({
    existingValue
}) => {
    const [cities, setCities] = useState([]);
    const [selectedValue, setSelectedValue] = useState(existingValue?.id);
    let presetValue = existingValue?.id ?? 'DEFAULT';

    function handleSelectChange(event) {
        setSelectedValue(event.target.value);
    }

    useEffect(() => {
        dropdownService.getCities()
            .then(result => {
                setCities(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    
    return (
        <select id="cityId" name="cityId" value={selectedValue ?? presetValue} onChange={handleSelectChange}>
            <option value='DEFAULT' disabled>Select City</option>
            {
                cities.map(x => {
                    return(
                        <option key={x.id} value={x.id}>{x.name}</option>
                    )
                })
            }
        </select>        
    );
}

export default CitiesDropdown;