import { FC, useEffect, useState } from 'react';
import styles from './Catalog.module.scss';
import FilmData from '../../FilmData.json';
import FilmsList from '../../components/FilmsList/FilmsList';
import Selector from '../UI/Selector/Selector';
import Button from '../../components/UI/Button/Button';
import YearData from '../../YearData.json'
import Slider from '../../components/UI/Slider/Slider';
import InputBox from '../UI/InputBox/InputBox';
import GenresData from '../../GenresData.json'
import { Link } from 'react-router-dom';

interface CatalogProps {
    genres: string[]
}
const Catalog: FC<CatalogProps> = ({ genres }) => {
    const [Films, setFilms] = useState(FilmData);
    const [sortState, setSort] = useState('none');
    const [yearFilter, setYearFilter] = useState<string>('')
    const [ratingFilter, setRatingFilter] = useState<number>(0)
    const [ratingValueFilter, setratingValueFilter] = useState<number>(0)
    const [countryFilter, setCountryFilter] = useState<string>("")
    const [actrosFilter, setActrosFilter] = useState<string>("")
    const [directorFilter, setDirectorFilter] = useState<string>("")
    useEffect(() => {
        let filterFilms = FilmData;
        if (yearFilter) {
            filterFilms = filterFilms.filter(film => String(film.year) === yearFilter.toLowerCase());
        }
        if (!genres.includes('')) {

            filterFilms = filterFilms.filter(film => {
                return film.genre.some(genre => {
                    return genres?.includes(genre.name_en);
                });
            });
        }
        if (ratingFilter) {
            filterFilms = filterFilms.filter(film => film.rating >= ratingFilter);

        }
        // if (ratingValueFilter) {
        //     filterFilms = filterFilms.filter(film => film.ratingValue === ratingValueFilter);

        // 
        if (countryFilter) {
            filterFilms = filterFilms.filter(film => film.country.map(e => e.toLowerCase()).includes(countryFilter.toLowerCase()));
        }
        if (actrosFilter) {
            filterFilms = filterFilms.filter((film) =>
                film.actor.some((actor) => actor.name.includes(actrosFilter))
            );
        }
        // if (directorFilter) {
        //     filterFilms = filterFilms.filter((film) =>
        //         film.director.some((director) => director.name_ru.includes(actrosFilter)|| director.name_en.includes(actrosFilter))
        //     );
        // }
        setFilms(filterFilms)
    }, [yearFilter, genres, ratingFilter, ratingValueFilter, countryFilter, actrosFilter, directorFilter])
    useEffect(() => {
        switch (sortState) {
            case 'по рейтингу':
                setFilms(prev => [...prev].sort((a, b) => b.rating - a.rating));
                break;
            case 'по дате выхода (сначала свежие)':
                setFilms(prev => [...prev].sort((a, b) => b.year - a.year));
                break;
            case 'по дате выхода (сначала старые)':
                setFilms(prev => [...prev].sort((a, b) => a.year - b.year));
                break;
            case 'по алфавиту (А-Я)':
                setFilms(prev => [...prev].sort((a, b) => a.name_ru.localeCompare(b.name_ru)));
                break;
            case 'по алфавиту (Я-А)':
                setFilms(prev => [...prev].sort((a, b) => b.name_ru.localeCompare(a.name_ru)));
                break;
            default:
                setFilms(FilmData);
                break;
        }
    }, [sortState]);
    return (
        <>
            <div className={styles.filtersBox}>
                <Selector name={'Жанр'} array={GenresData} filter={'genre'} />
                <Selector func={setYearFilter} name={'Год'} array={YearData} filter={'year'} />
                <Selector func={setCountryFilter} name={'Страны'} array={["США", "Росcия"]} filter='none' />
                <Slider func={setRatingFilter} max={10} name={'Рейтинг от'} />
                <Slider func={setratingValueFilter} max={1000000} name={'Кол-во оценок от'} />
                <InputBox name='Поиск по актёрам' func={setActrosFilter} />
                <InputBox name='Поиск по режиссёру' func={setDirectorFilter} />
                <Link to='/movies/'>
                    <Button variant='outlined' >Сбросить</Button>
                </Link >
                <Selector name={"Сортировка"} filter='none' func={setSort} array={['по количеству оценок на кинопоиске', 'по рейтингу', 'по дате выхода (сначала свежие)', 'по дате выхода (сначала старые)', 'по алфавиту (А-Я)', 'по алфавиту (Я-А)']} />
            </div >
            <FilmsList films={Films}></FilmsList>
            <Button variant='outlined'>
                Показать ещё
                <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
            </Button>
        </>

    );
};

export default Catalog;