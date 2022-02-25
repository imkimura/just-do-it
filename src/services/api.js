import axios from 'axios';


const api = axios.create({
    baseURL: 'https://treino-backend.proselfit.com.br',
});

api.defaults.headers.chave = 'producao';

export default api;