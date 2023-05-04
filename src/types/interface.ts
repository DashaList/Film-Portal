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