import axios from 'axios';

export const intance = axios.create({
    baseURL: "https://api.pokemontcg.io/v2/",
})