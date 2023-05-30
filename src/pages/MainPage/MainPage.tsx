import styles from './MainPage.module.scss'
import FilmData from '../../FilmData.json'
import Top10Data from '../../Top10Data.json'
import StoriesData from '../../StoriesData.json'
import BannerSlider from '../../components/BannerSlider/BannerSlider'
import StoriesCard from '../../components/StoriesCard/StoriesCard'
import RowSlider from '../../components/RowSlider/RowSlider'
import FilmCard from '../../components/FilmCard/FilmCard'
import Top10Card from '../../components/Top10Card/Top10Card'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useEffect } from 'react'
import { fetchFilms } from '../../store/actions/filmActions'

const MainPage = () => {

  const {films, loading, error} = useAppSelector(state => state.filmReducer)
  const dispatch = useAppDispatch()

  useEffect( () => {
    dispatch(fetchFilms())
  }, [])

  return (
    <div className={styles.MainPage}>

      <BannerSlider slides={films}></BannerSlider>

      <div className={styles.contentRow} data-testid='RowSlider'>
        <RowSlider title={'Истории'} slides={
          StoriesData.concat(StoriesData).map(item => <StoriesCard imgSrc={item}></StoriesCard>)
        }></RowSlider>
      </div>
      <div className={styles.contentRow} data-testid='RowSlider'>
        <RowSlider title={'Топ-10 на START'} slides={
          films.map((item, index) => <Top10Card topNumber={index + 1} imgLink={item.img} filmLink={item.img} key={index}></Top10Card>)
        }></RowSlider>
      </div>
      <div className="">Ad Banner</div>
      <div className="">Календарь премьер?</div>
      <div className="">Новый сезон премьер?</div>
      <div className={styles.contentRow} data-testid='RowSlider'>
        <RowSlider title='Драмы' slides={
          films.concat(FilmData).concat(FilmData).map(film => <FilmCard film={film} key={film.id} type={'forRow'}></FilmCard>)
        }></RowSlider>
      </div>
      <div className={styles.contentRow} data-testid='RowSlider'>
        <RowSlider title='Мелодрамы'  slides={
          FilmData.map(film => <FilmCard film={film} key={film.id} type={'forRow'}></FilmCard>)
        }></RowSlider>
      </div>

    </div>
  )
}

export default MainPage