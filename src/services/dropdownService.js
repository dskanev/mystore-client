import * as client from './client';

const baseUrl = 'https://localhost:5001/Nomenclature';
const getCitiesUrl = `${baseUrl}/GetCities`;
const getUnitsUrl = `${baseUrl}/GetUnits`;

export const getCities = () => client.get(getCitiesUrl);
export const getUnits = () => client.get(getUnitsUrl);


