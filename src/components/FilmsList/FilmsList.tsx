import { FC, useEffect, useState } from 'react'
import styles from './FilmsList.module.scss'
import { IFilm } from '../../types/types'
import FilmCard from '../FilmCard/FilmCard'
import { useAppSelector } from '../../hooks/redux'
import TranscriptionData from '../../TranscriptionData.json'


interface FilmsListProps {
  films: IFilm[]
}

const FilmsList: FC<FilmsListProps> = ({ films }) => {
  
  const { RusLanguage } = useAppSelector(state => state.toogleLanguage)
  const [language, setLanguage] = useState(TranscriptionData[0])
  useEffect(() => {
    RusLanguage ? setLanguage(TranscriptionData[0]) : setLanguage(TranscriptionData[1])
  }, [RusLanguage])

  return (
    <div className={styles.FilmsList}>
      {films.length !== 0 ? films.map(film => (
        <FilmCard key={film.id} film={film} type={'forGrid'} />
      )) :
        <div className={styles.empty}>{language.FilmsList.empty}</div>
      }
    </div>
  )
}

export default FilmsList