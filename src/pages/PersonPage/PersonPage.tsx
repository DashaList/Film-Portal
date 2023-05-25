import PersonData from '../../PeopleData.json'
import FilmData from '../../FilmData.json'
import FilmsList from '../../components/FilmsList/FilmsList'
import styles from './PersonPage.module.scss'
import Path from '../../components/UI/Path/Path'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useEffect, useState } from 'react'
import { fetchPersons } from '../../store/actions/personActions'
import TranscriptionData from '../../TranscriptionData.json'


const PersonPage = () => {

    const { persons, loading, error } = useAppSelector(state => state.personReducer)
    const dispatch = useAppDispatch()

    const { RusLanguage } = useAppSelector(state => state.languageReducer)
    const [language, setLanguage] = useState(TranscriptionData[0])
    useEffect(() => {
        RusLanguage ? setLanguage(TranscriptionData[0]) : setLanguage(TranscriptionData[1])
    }, [RusLanguage])

    useEffect(() => {
        dispatch(fetchPersons())
    }, [])

    const { id } = useParams()
    const person = persons.find((person) => person.id === Number(id))

    const films = FilmData.filter(film => person?.films.find(personFilm => personFilm.id == film.id))

    return (
        <div className={styles.PersonPage}>
            <div className={styles.top}>
                <div className={styles.left_wrapper}>
                    {/* <div className={styles.background} style={{backgroundImage: `url(${person.img})`}}></div> */}

                    <div className={styles.left}>
                        <Path>
                            <p> {language.Path.main} </p>
                            <Link to="/persons">{language.Path.persons}</Link>
                        </Path>
                        <h3>{person?.name}</h3>
                        <p className={styles.description}>Эдди Мёрфи (Eddie Murphy) — популярный американский актер, режиссер, сценарист, продюсер и музыкант. Обладатель премии «Золотой глобус» и номинант на премию «Оскар» за роль второго плана (фильм «Девушка мечты»).</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.personPhoto}>
                        <img src={person?.img} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <h1>{person?.name} {language.PersonPage.films}</h1>
                <FilmsList films={films}></FilmsList>
            </div>
        </div>
    )
}

export default PersonPage