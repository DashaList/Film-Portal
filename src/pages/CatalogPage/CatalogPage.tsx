import FilmData from '../../FilmData.json'
import styles from './CatalogPage.module.scss'
import Button from '../../components/UI/Button/Button';
import { Link } from 'react-router-dom';
import Path from '../../components/UI/Path/Path';
import FilmsList from '../../components/FilmsList/FilmsList';


const CatalogPage = () => {
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

            <FilmsList films={FilmData} ></FilmsList>

            <Button variant={'catalogBtn'}>
                Показать ещё
                <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
            </Button>
        </div>


    );
};

export default CatalogPage;