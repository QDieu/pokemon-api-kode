import { intance } from "./api"

type AttackType = {
    name?: string,
    cost?: Array<string>,
    convertedEnergyCost?: number,
    damage?: number,
    text?: string,
}

type WeaknessType = {
    type?: string,
    value?: string,
}

type SetType = {
    id?: string,
    name?: string,
    series?: string,
    printedTotal?: number,
    total?: number,
    legalities?: { unlimited?: string, expanded?: string },
    ptcgoCode?: string,
    releaseDate?: string,
    updatedAt?: string,
    images?: { symbol?: string, logo?: string }
}

type TCGPlayerType = {
    url? : string,
    updatedAt? : string,
    prices?: pricesType,
}

type pricesType = {
    holofoil? : {
        low? : number,
        mid? : number,
        high? : number,
        market? : number,
        directLow? : number,
    }
}

type AbilitiesType = {
    name : string,
    text : string,
    type : string,
}

type ResistancesType = {
    type : string,
    value : string,
}

export type CardType = {
    id: string,
    name: string,
    supertype?: string,
    subtypes: Array<string>,
    hp: number,
    types?: Array<string>,
    evolvesFrom?: string,
    evolvesTo?: Array<string>,
    rules?: Array<string>,
    attacks?: Array<AttackType>,
    weaknesses?: Array<WeaknessType>,
    retreatCost?: Array<string>,
    convertedRetreatCost?: number,
    set?: SetType,
    number?: string,
    artist?: string,
    rarity?: string,
    nationalPokedexNumbers?: Array<number>,
    legalities?: {unlimited? : string, expanded? : string},
    images?: {
        small?: string,
        large?: string
    },
    tcgplayer?: TCGPlayerType,
    abilities? : Array<AbilitiesType>,
    resistances? : Array<ResistancesType>,
}

type ResponseType = {
    data : Array<CardType>,
    page : number,
    pageSize : number,
    count : number,
    totalCount : number,
}

type ResponseTypeInfo = {
    data : CardType
}

export const cardAPI = {
    getCard: (pageSize = 20, page = 1, filter: string) => {
        return intance.get<ResponseType>('cards', {
            params: {
                pageSize: pageSize,
                page: page,
                q: filter
            }
        }).then(response => response.data);
    },
    getCardInfo: (id: number | string) => {
        return intance.get<ResponseTypeInfo>(`cards/${id}`).then(response => response.data);
    }
}