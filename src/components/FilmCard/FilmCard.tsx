import { FC } from 'react';
import { IPersonsFilms, TypeState } from '../../types/types';
import styles from './FilmCard.module.scss'
import { Link } from 'react-router-dom';
import HoverBaner from '../HoverBaner/HoverBaner';
import cn from 'classnames'
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';

interface FilmCardProps {
    film: IPersonsFilms,
    type: 'forGrid' | 'forRow'
}

const FilmCard: FC<FilmCardProps> = ({ film, type }) => {
    const { RusLanguage } = useAppSelector(state => state.languageReducer)
   
    switch (film.id) {
        case 0:
            return (
                <div className={styles.emptyFilm}>
                    <div className={styles.emptyBaner} />
                    <div className={styles.emptyText} />
                    <div className={styles.emptyText} />
                    <span className={styles.flare} />
                </div>
            )
        default: return (
            <div data-testid='FilmCard' >
                <Link to={`/film/${film.id}`}>
                    <div className={styles.FilmCard}>
                        <div className={styles.baner}>
                            {type == 'forGrid' && <img className={styles.imgBaner} src={film.poster} alt="" />}
                            {type == 'forRow' && <div className={styles.imgBannerDiv} style={{ backgroundImage: `url(${'"' + film.poster + '"'})` }}></div>}
                            <div className={film.rating >= 7 ? styles.ratingTop : styles.rating}> {film.rating.toFixed(1)}</div>
                            <HoverBaner />
                        </div>
                        <div className={cn(styles.text, type == 'forRow' ? styles.textForRow : '')}>
                            <div className={styles.name}> {RusLanguage? film.name_ru:film.name_en} </div>
                            <div className={styles.genre}>
                                {film.genres.map((genre, index) => (
                                    <span key={index}>
                                        {RusLanguage? genre.name_ru:genre.name_en}
                                        {index !== film.genres.length - 1 && ", "}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link >
            </div>

        );
    }


};

export default FilmCard;