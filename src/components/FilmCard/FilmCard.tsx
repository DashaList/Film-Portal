import { FC } from 'react';
import { IFilmItem } from '../../types/interface';
import styles from './FilmCard.module.scss'
import { Link } from 'react-router-dom';


const FilmCard: FC<IFilmItem> = ({ film }) => {
    return (
        <Link to ={`/movies/${film.id}`}>
        <div className={styles.filmcard}>
            <div className={styles.baner}>
                <img className={styles.imgBaner} src={film.img} alt="" />
                <div className={film.rating >= 7 ? styles.ratingTop : styles.rating}> {film.rating.toFixed(1)}</div>
                <div className={styles.hoverBaner}>
                    <img src="https://start.ru/static/images/global/play.svg" alt="" className={styles.playIcon} />
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.name}> {film.name} </div>
                <div className={styles.genre}>
                    {film.genre.map((genre, index) => (
                        <span>
                            {genre.name}
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