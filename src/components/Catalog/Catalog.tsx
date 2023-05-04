import FilmData from '../../FilmData.json'
import styles from './Catalog.module.scss'
import FilmCard from '../FilmCard/FilmCard';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import Path from '../UI/Path/Path';


const Catalog = () => {
    return (

        <div className={styles.page}>
            <Path>
                <p> Главная </p>
                <Link to="/movies">Фильмы</Link>
            </Path>
            <h1 className={styles.header} > Фильмы смотреть онлайн </h1>
            <div className={styles.filtersBox}>
                <Button variant={'catalogBtn'}>
                    Жанр
                    <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
                </Button>
                <Button variant={'catalogBtn'}>
                    Год
                    <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
                </Button>
                <Button variant={'catalogBtn'}>
                    Сортировка
                    <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
                </Button>
            </div>

            <div className={styles.catalog}>
                {FilmData.map(film => (
                    <FilmCard key={film.id} film={film} />
                ))}
            </div>
            <Button variant={'catalogBtn'}>
                Показать ещё
                <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
            </Button>
        </div>


    );
};

export default Catalog;