import PersonData from '../../PeopleData.json'
import FilmData from '../../FilmData.json'
import FilmsList from '../../components/FilmsList/FilmsList'
import styles from './PersonPage.module.scss'
import Path from '../../components/UI/Path/Path'
import { Link, useParams } from 'react-router-dom'

const PersonPage = () => {

    const { id } = useParams()
    const person = PersonData.find((person) => person.id === Number(id))

    const films = FilmData.filter(film => person?.films.find(personFilm => personFilm.id == film.id))

  return (
    <div className={styles.PersonPage}>
        <div className={styles.top}>
            <div className={styles.left_wrapper}>
                {/* <div className={styles.background} style={{backgroundImage: `url(${person.img})`}}></div> */}
                    
                <div className={styles.left}>
                <Path>
                    <p> Главная </p>
                    <Link to="/persons">Персоны</Link>
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
            <h1>{person?.name}: фильмография</h1>
            <FilmsList films={films}></FilmsList>
        </div>
    </div>
  )
}

export default PersonPage