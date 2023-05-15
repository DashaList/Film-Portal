import styles from './MainPage.module.scss'
import FilmData from '../../FilmData.json'
import Button from '../../components/UI/Button/Button'
import FilmsList from '../../components/FilmsList/FilmsList'
import { BannerSlider } from '../../components/BannerSlider/BannerSlider'

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
      <div className="">Истории</div>
      <div className="">Top-10</div>
      <div className="">Ad Banner</div>
      <div className="">Календарь премьер?</div>
      <div className="">Новый сезон премьер?</div>
      <div className={styles.filmsRow}>
        <FilmsList films={FilmData}></FilmsList>
      </div>
      <div className={styles.filmsRow}>
        <FilmsList films={FilmData}></FilmsList>
      </div>

    </div>
  )
}

export default MainPage