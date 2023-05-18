import styles from './MainPage.module.scss'
import FilmData from '../../FilmData.json'
import Button from '../../components/UI/Button/Button'
import FilmsList from '../../components/FilmsList/FilmsList'
import { BannerSlider } from '../../components/BannerSlider/BannerSlider'
import Stories from '../../components/Stories/Stories'
import RowSlider from '../../components/RowSlider/RowSlider'
import FilmCard from '../../components/FilmCard/FilmCard'

const MainPage = () => {

  return (
    <div className={styles.MainPage}>
      {/* <div className={styles.slider}>
        <div className={styles.baner}>
          <div className={styles.info}>
            <h1 className={styles.filmName}>Slider</h1>
          </div>

          
        </div>
      </div> */}

      <BannerSlider slides={FilmData}></BannerSlider>
      {/* <Stories></Stories> */}
      <div className="">Top-10</div>
      <div className="">Ad Banner</div>
      <div className="">Календарь премьер?</div>
      <div className="">Новый сезон премьер?</div>
      <div className={styles.filmsRow}>
        <RowSlider title='Драмы' slides={
          FilmData.map(film => <FilmCard film={film} key={film.id} type={'forRow'}></FilmCard>)
        }></RowSlider>
      </div>
      <div className={styles.filmsRow}>
        <RowSlider title='Мелодрамы' slides={
          FilmData.map(film => <FilmCard film={film} key={film.id} type={'forRow'}></FilmCard>)
        }></RowSlider>
      </div>

    </div>
  )
}

export default MainPage