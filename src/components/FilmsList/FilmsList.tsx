import { FC } from 'react'
import styles from './FilmsList.module.scss'
import { FilmsListProps } from '../../types/types'
import FilmCard from '../FilmCard/FilmCard'



const FilmsList: FC<FilmsListProps> = ({ films }) => {
  return (
    <div className={styles.FilmsList}>
      {films.map(film => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  )
}

export default FilmsList