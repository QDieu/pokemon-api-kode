import { intance } from "./api";

type ResponseType = {
    data : Array<string>
}


export const selectAPI = {
    getTypes: () => {
        return intance.get<ResponseType>('types').then(response => response.data.data);
    },
    getSubTypes : () => {
        return intance.get<ResponseType>('subtypes').then(response => response.data.data);
    },
    getSuperTypes: () => {
        return intance.get<ResponseType>('supertypes').then(response => response.data.data);
    },  
    getRarities : () => {
        return intance.get<ResponseType>('rarities').then(response => response.data.data);
    }
}