import * as client from './client';

const baseUrl = 'https://localhost:5001/Project';

export const getAll = () => client.get(`${baseUrl}/all`);

export const create = async (input) => await client.post(`${baseUrl}/CreateProject`, input);