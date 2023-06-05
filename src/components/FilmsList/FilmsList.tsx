import { FC, useEffect, useState } from 'react'
import styles from './FilmsList.module.scss'
import { IFilm } from '../../types/types'
import FilmCard from '../FilmCard/FilmCard'
import { useTranslation } from 'react-i18next'


interface FilmsListProps {
  films: IFilm[] | null
}

const FilmsList: FC<FilmsListProps> = ({ films }) => {

  const { t } = useTranslation()

  return (
    <div className={styles.FilmsList}>
      {films?.length !== 0 && films? films.map(film => (
      <FilmCard key={film.id} film={film} type={'forGrid'} data-testid="FilmCard" />
      )) :
      <div className={styles.empty}>{t('FilmsList.empty')}</div>
      }
    </div>
  )
}

export default FilmsList