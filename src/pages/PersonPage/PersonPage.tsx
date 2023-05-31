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
import axios from 'axios'
import { IPerson, IPersonsFilms } from '../../types/types'
import Person from '../../person.json'


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
    ////////////
    const url = ""
    const filmPageAxios = (method: string = "GET", body: any = null) => {
        axios({
            method: method,
            url: url,
            data: body
        })
            .then(response => {
                let person: IPerson = response.data
                return person
            })
            .catch(error => (console.log(error)))
    }
    filmPageAxios()
    ///////////////
    // const person = persons.find((person) => person.id === Number(id))
    // const films = FilmData.filter(film => person?.films.find(personFilm => personFilm.id == film.id))

    const person: IPerson = Person
    let films: IPersonsFilms[] = person.operator


    return (
        <div className={styles.PersonPage}>
            <Path>
                <p> {language.Path.main} </p>
                <Link to="/persons">{language.Path.persons}</Link>
            </Path>
            <div className={styles.top}>
                <div className={styles.left}>
                    <div className={styles.personPhoto}>
                        <img src={person?.poster} alt="" data-testid='avatarPerson' />
                    </div>
                </div>
                <div className={styles.right_wrapper}>

                    <h3 data-testid='fullName'>{RusLanguage ? person?.name_ru : person?.name_en}</h3>
                    <p className={styles.description} data-testid='biography'>{language.PersonPage.birthday}{person?.birthday || "-"}</p>
                    <p className={styles.description} data-testid='biography'>{language.PersonPage.place_of_birth}{person?.place_of_birth || "-"} </p>

                </div>
            </div>
            <div className={styles.bottom}>
                <h1 data-testid='filmgraphy'>{RusLanguage ? person?.name_ru : person?.name_en} {language.PersonPage.films}</h1>
                <FilmsList films={films} ></FilmsList>
            </div>
        </div>
    )
}

export default PersonPage