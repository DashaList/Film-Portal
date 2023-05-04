import FilmData from '../../FilmData.json'
import styles from './Catalog.module.scss'
import FilmCard from '../FilmCard/FilmCard';
import Button from '../UI/Button/Button';


const Catalog = () => {
    return (
        <>
            <div className={styles.page}>
                {FilmData.map(film => (
                    <FilmCard key={film.id} film={film} />
                ))}
            </div>
            <Button variant={'catalogBtn'}>
                Показать ещё
                <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
            </Button>
        </>

    );
};

export default Catalog;