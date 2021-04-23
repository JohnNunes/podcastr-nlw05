import axios from 'axios';

// Define a URL base da API para utilizar nas demais chamadas
export const api = axios.create({
    baseURL: 'http://localhost:3333',
});