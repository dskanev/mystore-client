import * as client from './client';

const baseUrl = 'https://localhost:5001/Project';

export const getAll = () => client.get(`${baseUrl}/all`);

export const create = async (input) => await client.post(`${baseUrl}/CreateProject`, input);

export const getProject = async (id) => await client.get(`${baseUrl}/GetById?id=${id}`);

export const getUserProjects = async () => await client.get(`${baseUrl}/UserProjects`);

export const update = async (input) => await client.put(`${baseUrl}/UpdateProject`, input);

export const deleteProject = async (projectId) => await client.del(`${baseUrl}/DeleteProject?projectId=${projectId}`);

export const postComment = async (input) => await client.post(`${baseUrl}/PostComment`, input);

export const getCommentsForProject = async (projectId) => await client.get(`${baseUrl}/GetCommentsForProject?projectId=${projectId}`);