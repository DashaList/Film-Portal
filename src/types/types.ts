import { existsSync } from "fs"

// export interface IFilm {
//     id: number,
//     name_ru: string,
//     name_en: string,
//     img: string,
//     rating: number,
//     genre: genre[],
//     year: number,
//     age: string,
//     time: string,
//     description: string,
//     actor: crossPoint[]
//     country: string[]
// }
export interface IFilm {
    id: number,
    id_kinopoisk: number,
    name_ru: string,
    name_en: string,
    tagline: string,
    world_premier: string,
    age: string,
    MPAA: string,
    duration_min: number,
    rating: number,
    marks: number,
    poster: string | undefined,
    genres: genre[],
    country: ICountry[],
    budget?: IBudget,
    description?: string,
    persons: IFimsPersons
}
export interface genre {
    id: number,
    name_ru: string,
    name_ru_singular?: string,
    name_en: string
}

// export interface IPeople {
//     id: number,
//     name: string,
//     img: string,
//     birthday: string,
//     city: string,
//     films: crossPoint[]
// }
export interface TypeState {
    deleteMode: boolean,
}
export interface crossPoint {
    id: number,
    poster?: string | undefined,
    name_ru?: string | null,
    name_en?: string | null,

}

export interface IBudget {
    currency: string,
    number: number
}
export interface IFimsPersons {
    actors: crossPoint[],
    composers?: crossPoint[],
    designers?: crossPoint[],
    directors: crossPoint[],
    editors?: crossPoint[],
    operators?: crossPoint[],
    producer?: crossPoint[],
    translators?: crossPoint[],
    voiceDirectors?: crossPoint[],
    voices?: crossPoint[],
    writers?: crossPoint[],
}

export interface ICountry {
    id: number,
    name: string
}
export interface IPersonsFilms {
    id: number;
    name_ru: string;
    name_en: string;
    poster: string;
    rating: number;
    genres: genre[];
    country: ICountry[];
}
export interface IPerson {
    id: number,
    name_ru: string,
    name_en: string,
    birthday?: string|null,
    place_of_birth: string,
    poster: string,
    actor: IPersonsFilms[]|[],
    composer: IPersonsFilms[]|[],
    designer: IPersonsFilms[]|[],
    director: IPersonsFilms[]|[],
    editor: IPersonsFilms[]|[],
    operator: IPersonsFilms[]|[],
    producer: IPersonsFilms[]|[],
    translator: crossPoint[]|[],
    voiceDirector: IPersonsFilms[]|[],
    voice: IPersonsFilms[]|[],
    writer: IPersonsFilms[]|[],
}
export interface IMain {
    drama: IPersonsFilms[],
    comedy: IPersonsFilms[],
    rating: IPersonsFilms[]
}
export interface IAuth {
    email: string,
    password: string
}