import FilmData from '../../FilmData.json'
import styles from './Catalog.module.scss'
import FilmCard from '../FilmCard/FilmCard';


const Catalog = () => {
    return (
        <div className={styles.page}>
            {FilmData.map(film => (
                <FilmCard film={film} key={film.id} />
            ))}

        </div>
    );
};

export default Catalog;