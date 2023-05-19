import styles from './MainPage.module.scss'
import FilmData from '../../FilmData.json'
import Top10Data from '../../Top10Data.json'
import StoriesData from '../../StoriesData.json'
import BannerSlider from '../../components/BannerSlider/BannerSlider'
import StoriesCard from '../../components/StoriesCard/StoriesCard'
import RowSlider from '../../components/RowSlider/RowSlider'
import FilmCard from '../../components/FilmCard/FilmCard'
import Top10Card from '../../components/Top10Card/Top10Card'

const MainPage = () => {

  return (
    <div className={styles.MainPage}>

      <BannerSlider slides={FilmData}></BannerSlider>

      <div className={styles.contentRow}>
        <RowSlider title={'Истории'} slides={
          StoriesData.concat(StoriesData).map(item => <StoriesCard imgSrc={item}></StoriesCard>)
        }></RowSlider>
      </div>
      <div className={styles.contentRow}>
        <RowSlider title={'Топ-10 на START'} slides={
          Top10Data.map((item, index) => <Top10Card topNumber={index + 1} imgLink={item.imgLink} filmLink={item.filmLink} key={index}></Top10Card>)
        }></RowSlider>
      </div>
      <div className="">Ad Banner</div>
      <div className="">Календарь премьер?</div>
      <div className="">Новый сезон премьер?</div>
      <div className={styles.contentRow}>
        <RowSlider title='Драмы' slides={
          FilmData.concat(FilmData).concat(FilmData).map(film => <FilmCard film={film} key={film.id} type={'forRow'}></FilmCard>)
        }></RowSlider>
      </div>
      <div className={styles.contentRow}>
        <RowSlider title='Мелодрамы' slides={
          FilmData.map(film => <FilmCard film={film} key={film.id} type={'forRow'}></FilmCard>)
        }></RowSlider>
      </div>

    </div>
  )
}

export default MainPage