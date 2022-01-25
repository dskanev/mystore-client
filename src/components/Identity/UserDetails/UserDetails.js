import { useState, useEffect } from 'react';
import * as userService from '../../../services/userService';
import CitiesDropdown from '../../Common/Dropdowns/Cities/CitiesDropdown';

const UserDetails = () => {
    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        userService.getUserDetails()
            .then(result => {
                setUserDetails(result);
            });
    }, []);

    const userDetailsEditSubmitHandler = (e) => {
        e.preventDefault();

        let userData = Object.fromEntries(new FormData(e.currentTarget));
        userService.saveUserDetails(userData);
    }

    return (
        <section id="user-details" className="user-details">
            <form id="user-details-form" onSubmit={userDetailsEditSubmitHandler} method="POST">
                <fieldset>
                    <legend>UserDetails</legend>
                    <p className="field">
                        <label htmlFor="name">First Name</label>
                        <span className="input">
                            <input type="text" name="firstName" id="firstName" placeholder="First Name" defaultValue={userDetails.firstName}/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="name">Last Name</label>
                        <span className="input">
                            <input type="text" name="lastName" id="lastName" placeholder="Last Name" defaultValue={userDetails.lastName}/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="name">Phone Number</label>
                        <span className="input">
                            <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" defaultValue={userDetails.phoneNumber}/>
                        </span>
                    </p>                        

                    <p className="field">
                        <label htmlFor="cityId">City</label>
                        <span className="input">
                            <CitiesDropdown existingValue = {userDetails.city}/>
                        </span>
                    </p>

                    <input className="button submit" type="submit" value="Save User Details" />
                </fieldset>
            </form>
        </section>
    );
}

export default UserDetails;