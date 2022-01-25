import * as client from './client';

const baseUrl = 'https://localhost:5001/Identity';

export const getUserDetails = async () => await client.get(`${baseUrl}/GetCurrentUserDetails`);

export const saveUserDetails = async (input) => await client.post(`${baseUrl}/SaveUserDetails`, input);

