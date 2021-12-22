import * as client from './client';

const baseUrl = 'http://localhost:5001/Nomenclature';
const getCitiesUrl = `${baseUrl}/GetCities`;
const getUnitsUrl = `${baseUrl}/GetUnits`;

export const getCities = () => client.get(getCitiesUrl);
export const getUnits = () => client.get(getUnitsUrl);


