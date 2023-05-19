import styles from './CatalogPage.module.scss'
import { Link, useParams } from 'react-router-dom';
import Path from '../../components/UI/Path/Path';
import GenresData from '../../GenresData.json'
import Catalog from '../../components/Catalog/Catalog';




const CatalogPage = () => {
    const { genre } = useParams()
    const genres = genre?.split('+') || ['']
    const genreRus = genres?.map((genre) => {
        const foundGenre = GenresData.find((data) => data.name_en === genre);
        return foundGenre ? foundGenre.name_ru : '';
    });
    return (
        <div className={styles.page}>
            <Path>
                <Link to="/"> Главная </Link>
                <Link to="/movies">Фильмы</Link>
                {genreRus?.map(genreRus => {
                    return <Link to={`/movies/${genreRus}`}>{genreRus}</Link>
                })}
            </Path>
            <h1 className={styles.header} > Фильмы смотреть онлайн </h1>
            <Catalog genres={genres} />
        </div >
    );
};

export default CatalogPage;