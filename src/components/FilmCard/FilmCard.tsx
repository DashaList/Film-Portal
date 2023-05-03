import styles from './FilmCard.module.scss'


const FilmCard = ({ film }: any) => {
    return (
        <div className={styles.filmcard}>
            <div className={styles.baner}>
                <img className={styles.imgBaner} src={film.img} alt="" />
                <div className={styles.rating}> {film.rating}</div>
                <div className={styles.hoverBaner}>
                    <img src="https://start.ru/static/images/global/play.svg" alt="" className={styles.playIcon} />
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.name}> {film.name} </div>
                {/* {film.genre.map(genre => (
                    <div className={styles.genre}> {genre.name} </div>
                ))} */}

            </div>

        </div>
    );
};

export default FilmCard;