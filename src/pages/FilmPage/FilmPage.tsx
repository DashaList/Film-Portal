import { Link, useParams } from 'react-router-dom';
import Path from '../../components/UI/Path/Path';
import styles from './FilmPage.module.scss'
import FilmData from '../../FilmData.json'
import Button from '../../components/UI/Button/Button';
import PersonColumn from '../../components/PersonColumn/PersonColumn';
import { useEffect, useState } from 'react';
import CommentBox from '../../components/CommentBox/CommentBox';
import { useAppSelector } from '../../hooks/redux';
import TranscriptionData from '../../TranscriptionData.json'



const FilmPage = () => {
    const { RusLanguage } = useAppSelector(state => state.toogleLanguage)
    const [language, setLanguage] = useState(TranscriptionData[0])
    useEffect(() => {
        RusLanguage ? setLanguage(TranscriptionData[0]) : setLanguage(TranscriptionData[1])
    }, [RusLanguage])

    const { id } = useParams()
    const film = FilmData.find((obj) => obj.id === Number(id))
    const [DescriptionState, getDescriptionState] = useState(false)

    const toggleDiscription = () => {
        getDescriptionState(!DescriptionState)
    }
    return (
        <div className={styles.page}>
            <div className={styles.baner}>
                <div className={styles.banerBox}>
                    <img className={styles.imgBaner} src={film?.img} alt="" />
                </div>
                <div className={styles.topBlock}>
                    <Path>
                        <Link to="/"> {language.Path.main} </Link>
                        <Link to="/movies">{language.Path.main}</Link>
                        <Link to={`/movies/:${film?.genre[0].name_en}`}>{RusLanguage ? film?.genre[0].name_ru : film?.genre[0].name_en}</Link>
                        <Link to="/movie/:id">{RusLanguage ? film?.name_ru : film?.name_en}</Link>
                    </Path>
                    <div className={styles.filmInfo}>
                        <h1 className={styles.filmName}>{RusLanguage ? film?.name_ru : film?.name_en}</h1>
                        <div className={styles.descriptionShort}>
                            <span className={Number(film?.rating) >= 7 ? styles.ratingTop : styles.rating}> {Number(film?.rating).toFixed(1)},</span>
                            <span className={styles.link}>{film?.year},</span>
                            {film?.genre.map(genre => (
                                <span className={styles.link}>{RusLanguage ? genre.name_ru:genre.name_en},</span>
                            ))}
                            <span className={styles.link}>{film?.age}, {film?.time} </span>
                        </div>
                        <div className={styles.description}>
                            <p>{film?.description} </p>
                        </div>
                        <div className={styles.btnBox}>
                            <Button >
                                <img src="https://start.ru/static/images/movie/play.svg" />
                                {language.Button.watch_free}
                            </Button>
                            <Button variant="outlined">
                                <img src="https://start.ru/static/images/product/kino.svg" />
                                {language.Button.watch_tr}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.FilmBotInfo}>
                <h1 className={styles.header}> Фильм {film?.name_ru} смотреть онлайн </h1>
                <div className={styles.trailerBox}>
                    <iframe className={styles.trailer} src="https://www.youtube.com/embed/otmeAaifX04" title="YouTube trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                </div>
                <div className={styles.descriptionWrapper}>
                    <div className={DescriptionState ? styles.descriptionFull : styles.descriptionFullSlash}>
                        <p>{film?.description} <br></br></p>

                    </div>
                    <div className={styles.socialBox}>
                        <div className={styles.box}>
                            <Button variant='outlined'>
                                <img src="https://start.ru/static/images/product/like.svg" alt="" />
                            </Button>
                            <Button variant='outlined'>
                                <img src="https://start.ru/static/images/product/dislike.svg" alt="" />
                            </Button>
                        </div>
                        <div className={styles.box}>
                            Поделиться:
                            <svg viewBox="0 0 64 64" width="32" height="32"><circle cx="32" cy="32" r="31" fill="#45668e"></circle><path d="M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z" fill="white"></path></svg>
                            <svg viewBox="0 0 64 64" width="32" height="32"><circle cx="32" cy="32" r="31" fill="#f2720c"></circle><path d="M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z " fill="white"></path></svg>
                            <img src="https://start.ru/static/images/product/tg.svg" alt="tg"></img>
                        </div>
                    </div>
                </div>
                <div className={styles.toggleDescription} style={DescriptionState ? { display: 'none' } : { display: 'flex' }} onClick={toggleDiscription}>
                    <div className={styles.more} > {language.FilmPage.more}</div>
                    <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
                </div>
                <div className={styles.toggleDescription} style={DescriptionState ? { display: 'flex' } : { display: 'none' }} onClick={toggleDiscription}>
                    <div className={styles.more}> {language.FilmPage.hide}</div>
                    <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
                </div>

                <h2 className={styles.subheader}>{language.FilmPage.persons}</h2>
                <div className={styles.persons}>
                    <h3 className={styles.columnHeader}> {language.FilmPage.actor} </h3>
                    {film?.actor.map(person => (
                        <PersonColumn person={person} />
                    ))}

                </div>
            </div>
            <CommentBox />
        </div>
    );
};

export default FilmPage;