import styles from './MainPage.module.scss'
import FilmData from '../../FilmData.json'
import Top10Data from '../../Top10Data.json'
import StoriesData from '../../StoriesData.json'
import BannerSlider from '../../components/BannerSlider/BannerSlider'
import StoriesCard from '../../components/StoriesCard/StoriesCard'
import RowSlider from '../../components/RowSlider/RowSlider'
import FilmCard from '../../components/FilmCard/FilmCard'
import Top10Card from '../../components/Top10Card/Top10Card'
import { useEffect, useState } from 'react'
import { fetchMainPageFilms } from '../../store/actions/filmActions'
import { IPersonsFilms } from '../../types/types'

const MainPage = () => {

  const [dramaFilms, setDramaFilms] = useState<IPersonsFilms[] | null>(null)
  const [comedyFilms, setComedyFilms] = useState<IPersonsFilms[] | null>(null)
  const [topFilms, setTopFilms] = useState<IPersonsFilms[]>([])

  useEffect( () => {
    fetchMainPageFilms( setDramaFilms, setComedyFilms, setTopFilms)
  }, [])

  return (
    <div className={styles.MainPage}>

      {dramaFilms &&
        <BannerSlider slides={dramaFilms}></BannerSlider>
      }

      <div className={styles.contentRow} data-testid='RowSlider'>
        <RowSlider title={'Истории'} slides={
          StoriesData.concat(StoriesData).concat(StoriesData).map(item => <StoriesCard imgSrc={item}></StoriesCard>)
        }></RowSlider>
      </div>
      <div className={styles.contentRow} data-testid='RowSlider'>
      {topFilms &&
          <RowSlider title={'Топ-10 на START'} slides={
            topFilms.map((item, index) => <Top10Card topNumber={index + 1} imgLink={item.poster} filmLink={''} key={index} />)
          } />
      }
      </div>

      <div className={styles.contentRow} data-testid='RowSlider'>
        {dramaFilms &&
          <RowSlider title='Драмы' slides={
          dramaFilms.map(film => <FilmCard film={film} key={film.id} type={'forRow'} />)
        } />
        }
      </div>
      <div className={styles.contentRow} data-testid='RowSlider'>
        {comedyFilms &&
          <RowSlider title='Мелодрамы'  slides={
          comedyFilms.map(film => <FilmCard film={film} key={film.id} type={'forRow'} />)
        } />
        }
      </div>

    </div>
  )
}

export default MainPage