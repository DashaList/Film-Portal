import { FC } from 'react'
import styles from './FilmsList.module.scss'
import { IFilm } from '../../types/types'
import FilmCard from '../FilmCard/FilmCard'

interface FilmsListProps {
  films: IFilm[]
}

const FilmsList: FC<FilmsListProps> = ({ films }) => {
  return (
    <div className={styles.FilmsList}>
      {films.length !== 0 ? films.map(film => (
        <FilmCard key={film.id} film={film} type={'forGrid'} />
      )):
      <div className={styles.empty}>К сожалению, мы ничего не нашли!</div>
      }
    </div>
  )
}

export default FilmsList