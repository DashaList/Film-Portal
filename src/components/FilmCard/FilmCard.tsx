import { FC } from 'react';
import { IFilmItem } from '../../types/types';
import styles from './FilmCard.module.scss'
import { Link } from 'react-router-dom';
import HoverBaner from '../HoverBaner/HoverBaner';


const FilmCard: FC<IFilmItem> = ({ film }) => {
    switch (film.id) {
        case 0 :
            return (
                <div className={styles.emptyFilm}>
                    <div className={styles.emptyBaner} />
                    <div className={styles.emptyText} />
                    <div className={styles.emptyText} />
                    <span className={styles.flare} />
                </div>
            )
        default: return (
            <Link to={`/movie/${film.id}`
            }>
                <div className={styles.filmcard}>
                    <div className={styles.baner}>
                        <img className={styles.imgBaner} src={film.img} alt="" />
                        <div className={film.rating >= 7 ? styles.ratingTop : styles.rating}> {film.rating.toFixed(1)}</div>
                        <HoverBaner />
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
            </Link >
        );
    }


};

export default FilmCard;