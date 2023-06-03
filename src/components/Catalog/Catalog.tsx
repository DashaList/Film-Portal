import { FC, useEffect, useState } from 'react';
import styles from './Catalog.module.scss';
import FilmData from '../../FilmData.json';
import Film from '../../film.json';
import FilmsList from '../../components/FilmsList/FilmsList';
import Selector from '../UI/Selector/Selector';
import Button from '../../components/UI/Button/Button';
import YearData from '../../YearData.json'
import Slider from '../../components/UI/Slider/Slider';
import GenresData from '../../GenresData.json'
import { Link } from 'react-router-dom';
import Input from '../UI/Input/Input';
import axios from 'axios';
import { IFilm } from '../../types/types';
import { useTranslation } from 'react-i18next';

interface CatalogProps {
    genres: string[]
}

const Catalog: FC<CatalogProps> = ({ genres }) => {
    // const [Films, setFilms] = useState(FilmData);
    const [Films, setFilms] = useState(Film);


    const [sortState, setSort] = useState('none');
    const [yearFilter, setYearFilter] = useState<string>('')
    const [ratingFilter, setRatingFilter] = useState<number>(0)
    const [ratingValueFilter, setratingValueFilter] = useState<number>(0)
    const [countryFilter, setCountryFilter] = useState<string>("")
    const [actrosFilter, setActrosFilter] = useState<string>("")
    const [directorFilter, setDirectorFilter] = useState<string>("")

    const { t } = useTranslation()

    useEffect(() => {
        let filterFilms = Film;
        if (yearFilter) {
            filterFilms = filterFilms.filter(film => String(new Date(film.world_premier).getFullYear()) === yearFilter.toLowerCase());
        }
        if (!genres.includes('')) {

            filterFilms = filterFilms.filter(film => {
                return film.genres.some(genre => {
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
            filterFilms = filterFilms.filter(film => film.country.map(e => e.name.toLowerCase()).includes(countryFilter.toLowerCase()));
        }
        if (actrosFilter) {
            filterFilms = filterFilms.filter((film) =>
                film.persons.actors.some((actor) => actor.name_ru.includes(actrosFilter)) || film.persons.actors.some((actor) => actor.name_en?.includes(actrosFilter))
            );
        }
        // if (directorFilter) {
        //     filterFilms = filterFilms.filter((film) =>
        //         film.director.some((director) => director.name_ru.includes(actrosFilter)|| director.name_en.includes(actrosFilter))
        //     );
        // }
        setFilms(filterFilms)
    }, [yearFilter, genres, ratingFilter, ratingValueFilter, countryFilter, actrosFilter, directorFilter])
    ////////////
    const url = ""
    const filmPageAxios = (method: string = "GET", body: any = null) => {
        axios({
            method: method,
            url: url,
            data: body
        })
            .then(response => {
                let film: IFilm = response.data
                return film
            })
            .catch(error => (console.log(error)))
    }
    filmPageAxios()

    useEffect(() => {
        const filterData = {
            year: yearFilter,
            genres: genres,
            rating: ratingFilter,
            marks: ratingValueFilter,
            country: countryFilter,
            actors: actrosFilter,
            directors: directorFilter
        }
    }, [yearFilter, genres, ratingFilter, ratingValueFilter, countryFilter, actrosFilter, directorFilter])
    ///////////////

    useEffect(() => {
        switch (sortState) {
            case 'По рейтингу' || 'By popularity':
                setFilms(prev => [...prev].sort((a, b) => b.rating - a.rating));
                break;
            case 'По дате выхода (сначала свежие)' || 'Newest':
                setFilms(prev => [...prev].sort((a, b) => new Date(b.world_premier).getFullYear() - new Date(a.world_premier).getFullYear()));
                break;
            case 'По дате выхода (сначала старые)' || 'Aldest':
                setFilms(prev => [...prev].sort((a, b) => new Date(a.world_premier).getFullYear() - new Date(b.world_premier).getFullYear()));
                break;
            case 'По алфавиту (А-Я)' || 'Alphabetically (A-Z)':
                setFilms(prev => [...prev].sort((a, b) => a.name_ru.localeCompare(b.name_ru)));
                break;
            case 'По алфавиту (Я-А)' || 'Alphabetically (Z-A)':
                setFilms(prev => [...prev].sort((a, b) => b.name_ru.localeCompare(a.name_ru)));
                break;
            default:
                setFilms(Film);
                break;
        }
    }, [sortState]);

    return (
        <>
            <div className={styles.filtersBox}>
                <Selector name={t('genre')} array={GenresData} filter={'genre'} />
                <Selector func={setYearFilter} name={t('year')} array={YearData} filter={'year'} />
                <Selector func={setCountryFilter} name={t('countries')} array={["США", "Росcия"]} filter='none' />
                <Slider func={setRatingFilter} max={10} name={t('rating_from')} />
                <Slider func={setratingValueFilter} max={1000000} name={t('number_of_ratings_from')} />
                <Input type='text' placeholder={t('search_by_actors')} onChange={(e) => setActrosFilter(e.target.value)} style='dark' />
                <Input type='text' placeholder={t('search_by_director')} onChange={(e) => setDirectorFilter(e.target.value)} style='dark' />
                <Link to='/movies/'>
                    <Button variant='outlined' >{t('Button.clean')}</Button>
                </Link >
                <Selector name={t('sort')} filter='none' func={setSort}
                array={[t('by_the_number_of_ratings'), t('by_popularity'), t('newest'), t('oldest'), t('alphabetically_(A-Z)'), t('alphabetically_(Z-A)')]} />
            </div >
            <FilmsList films={Films}></FilmsList>
            <Button variant='outlined'>
                {t('Button.more')}
                <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
            </Button>
        </>

    );
};

export default Catalog;