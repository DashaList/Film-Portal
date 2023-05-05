export interface IFilm {
    id: number,
    name: string,
    img: string,
    rating: number,
    genre: genre[]
}
export interface genre {
    name: string,
    link: string
}
export interface IFilmItem {
    film: IFilm
}
export interface IPeople{
    id: number,
    name: string,
    img: string,
    birthday: string,
    city: string,
    films: film[]
}
export interface film{
    id: number,
    name: string,
}