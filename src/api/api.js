import axios from 'axios';

export const intance = axios.create({
    baseURL: "https://api.pokemontcg.io/v2/",
})

export const cardAPI = {
    getCard: (pageSize = 20, page = 1, filter) => {
        return intance.get('cards', {
            params: {
                pageSize: pageSize,
                page: page,
                q: filter
            }
        }).then(response => response.data);
    },
    getCardInfo: (id) => {
        return intance.get(`cards/${id}`).then(response => response.data);
    }
}

export const selectAPI = {
    getTypes: () => {
        return intance.get('types').then(response => response.data);
    },
    getSubTypes : () => {
        return intance.get('subtypes').then(response => response.data);
    },
    getSuperTypes: () => {
        return intance.get('supertypes').then(response => response.data);
    },  
    getRarities : () => {
        return intance.get('rarities').then(response => response.data);
    }
}