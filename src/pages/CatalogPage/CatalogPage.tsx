import styles from './CatalogPage.module.scss'
import { Link, useParams } from 'react-router-dom';
import Path from '../../components/UI/Path/Path';
import GenresData from '../../GenresData.json'
import Catalog from '../../components/Catalog/Catalog';
import { useAppSelector } from '../../hooks/redux';
import { useEffect, useState } from 'react';
import TranscriptionData from '../../TranscriptionData.json'





const CatalogPage = () => {
    const { RusLanguage } = useAppSelector(state => state.toogleLanguage)
    const [language, setLanguage] = useState(TranscriptionData[0])
    useEffect(() => {
        RusLanguage ? setLanguage(TranscriptionData[0]) : setLanguage(TranscriptionData[1])
    }, [RusLanguage])
    const { genre } = useParams()
    const genres = genre?.split('+') || ['']
    const genrePosition = genres?.map((genre) => {
        const foundGenre = GenresData.find((data) => data.name_en === genre);
        return RusLanguage ? foundGenre?.name_ru : foundGenre?.name_en;
    });
    if (!genres.includes('')) {

    }


    return (
        <div className={styles.page}>
            <Path>
                <Link to="/"> {language.Path.main} </Link>
                <Link to="/movies">{language.Path.Movies}</Link>
                {!genres.includes('') && genrePosition?.map(genrePosition => {
                    return <Link to={`/movies/${genrePosition}`}>{genrePosition}</Link>
                })}
            </Path>
            <h1 className={styles.header} > {language.Catalog.header}</h1>
            <Catalog genres={genres} />
        </div >
    );
};

export default CatalogPage;