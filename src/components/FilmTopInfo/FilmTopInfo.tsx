import Button from '../UI/Button/Button';
import styles from './FilmTopInfo.module.scss'


const FilmTopInfo = () => {
    return (
        <div className={styles.filmInfo}>
            <h1 className={styles.filmName}>Приключения Паддингтона</h1>
            <div className={styles.descriptionShort}>
                <span className={styles.ratingTop}>9.1,</span>
                <span className={styles.link}>2015,</span>
                <span className={styles.link}>Комедии,</span>
                <span className={styles.link}>Приключения,</span>
                <span className={styles.link}>Семейные,</span>
                <span className={styles.link}>Для детей,</span>
                <span className={styles.link}>6+, 92 мин,</span>
            </div>
            <div className={styles.description}>
                Две номинации на премию BAFTA. Экранизация известной детской книги английского писателя Майкла Бонда о медвежонке из Перу
            </div>
            <div className={styles.btnBox}>
                <Button >
                    <img src="https://start.ru/static/images/movie/play.svg" />
                    Смотреть бесплатно
                </Button>
                <Button variant="outlined">
                    <img src="https://start.ru/static/images/product/kino.svg" />
                    Смотреть трейлер
                </Button>
            </div>
        </div>
    );
};

export default FilmTopInfo;