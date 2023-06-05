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
import CountyData from '../CountryData.json'
import { IFilm, IFilter } from '../../types/types';
import { useTranslation } from 'react-i18next';
import { fetchFilms, fetchFilteredFilms } from '../../store/actions/filmActions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

interface CatalogProps {
    genres: string[]
}

const Catalog: FC<CatalogProps> = ({ genres }) => {

    const { films, loading, error } = useAppSelector(state => state.filmReducer)
    const dispatch = useAppDispatch()
    const [yearFilter, setYearFilter] = useState<number>(0)
    const [ratingFilter, setRatingFilter] = useState<number>(0)
    const [marksFilter, setMarksFilter] = useState<number>(0)
    const [countryFilter, setCountryFilter] = useState<string>("")
    const [actrosFilter, setActrosFilter] = useState<string>("")
    const [directorFilter, setDirectorFilter] = useState<string>("")
    const [pageIndex, setPageIndex] = useState<number>(0)
    const [filter, setFilter] = useState({} as IFilter)
    const clearFilter = () => {
        setYearFilter(0),
            setRatingFilter(0),
            setMarksFilter(0),
            setCountryFilter(""),
            setActrosFilter(""),
            setDirectorFilter(""),
            setPageIndex(0)
    }

    useEffect(() => {
        setFilter({
            pageIndex: pageIndex,
            year: yearFilter,
            rating: ratingFilter,
            marks: marksFilter,
            country: countryFilter,
            actors: actrosFilter,
            directors: directorFilter,
        })
        console.log('Filter Obj', filter)
    }, [yearFilter, genres, ratingFilter, marksFilter, countryFilter, actrosFilter, directorFilter, pageIndex])

    useEffect(() => {
        dispatch(fetchFilteredFilms(filter, 'drama')) // запросы в filmActions находятся
    }, [filter])


    // const [Films, setFilms] = useState(FilmData);
    const [Films, setFilms] = useState(Film);
    const [sortState, setSort] = useState('none');

    const { t } = useTranslation()
    const [film, setFilm] = useState<IFilm | null>(null)

    useEffect(() => {
        fetchFilms()
        console.log("film", film)
    }, [])

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
                <Selector func={setCountryFilter} name={t('countries')} array={CountyData} filter='none' />
                <Slider func={setRatingFilter} max={10} name={t('rating_from')} />
                <Slider func={setMarksFilter} max={1000000} name={t('number_of_ratings_from')} />
                <Input type='text' placeholder={t('search_by_actors')} onChange={(e) => setActrosFilter(e.target.value)} style='dark' />
                <Input type='text' placeholder={t('search_by_director')} onChange={(e) => setDirectorFilter(e.target.value)} style='dark' />
                <Selector name={t('sort')} filter='none' func={setSort}
                    array={[t('by_the_number_of_ratings'), t('by_popularity'), t('newest'), t('oldest'), t('alphabetically_(A-Z)'), t('alphabetically_(Z-A)')]} />
                <Link to='/movies/' onClick={clearFilter}>
                    <Button variant='outlined' >{t('Button.clean')}</Button>
                </Link >
            </div >
            <FilmsList films={Films}></FilmsList>
            <div onClick={() => setPageIndex(prev => prev + 1)}>
                <Button variant='outlined'>
                    {t('Button.more')}
                    <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
                </Button>
            </div>

        </>

    );
};

export default Catalog;