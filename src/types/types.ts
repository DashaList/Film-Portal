export interface IFilm {
    id: number,
    name_ru: string,
    name_en: string,
    img: string,
    rating: number,
    genre: genre[],
    year: number,
    age: string,
    time: string,
    description: string,
    actor: crossPoint[]
    country: string[]
}
export interface genre {
    id: number,
    name_ru: string,
    name_en: string
}

export interface IPeople {
    id: number,
    name: string,
    img: string,
    birthday: string,
    city: string,
    films: crossPoint[]
}

export interface crossPoint {
    id: number,
    img?: string,
    name: string,
}
