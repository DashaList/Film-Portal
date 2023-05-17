import { FC } from 'react';
import { IFilm} from '../../types/types';
import styles from './FilmCard.module.scss'
import { Link } from 'react-router-dom';
import HoverBaner from '../HoverBaner/HoverBaner';

interface FilmCardProps {
    film: IFilm,
    type: 'forGrid' | 'forRow'
}

const FilmCard: FC<FilmCardProps> = ({ film, type }) => {
    return (
        <Link to ={`/movie/${film.id}`}>
        <div className={styles.FilmCard}>
            <div className={styles.baner}>
                {type == 'forGrid' && <img className={styles.imgBaner} src={film.img} alt="" /> }
                {type == 'forRow' && <div className={styles.imgBannerDiv} style={{backgroundImage: `url("https://startimg.ru/unsafe/204x292/filters:format(webp):watermark(16.png,15,-0,0,15,15)/bec70d626b4c438d9b03f1823e4a18ce/vertical_15x")`}}></div>}
                <div className={film.rating >= 7 ? styles.ratingTop : styles.rating}> {film.rating.toFixed(1)}</div>
                <HoverBaner/>
            </div>
            <div className={styles.text}>
                <div className={styles.name}> {film.name_ru} </div>
                <div className={styles.genre}>
                    {film.genre.map((genre, index) => (
                        <span key={index}>
                            {genre.name_ru}
                            {index !== film.genre.length - 1 && ", "}
                        </span>
                    ))}
                </div>
            </div>
        </div>
        </Link>
    );
};

export default FilmCard;