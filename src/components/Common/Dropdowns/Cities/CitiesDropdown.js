import { useEffect, useState } from "react";

import * as dropdownService from '../../../../services/dropdownService';

const CitiesDropdown = () => {
    const [cities, setCities] = useState([]);

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
        <select id="cityId" name="cityId" defaultValue={'DEFAULT'}>
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