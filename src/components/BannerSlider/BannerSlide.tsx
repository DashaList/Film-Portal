import { FC } from 'react'
import { IFilm } from '../../types/types'
import styles from './BannerSlide.module.scss'
import Button from '../UI/Button/Button'
import favorite from '../../assets/img/svg/favorite.svg'

interface BannerSlideProps {
    film: IFilm
}

const BannerSlide: FC<BannerSlideProps> = ({film}) => {
  return (
    <div className={styles.BannerSlide} >
      <div className={styles.banner} style={{backgroundImage: `url("https://startimg.ru/unsafe/1920x1080/filters:format(webp)/cf3ab902e40b4139b599076a3778902a/background_15x")`}}>
        {/* <img src={film.img} alt="" /> */}
      </div>

      <div className={styles.info}>
        <h1 className={styles.filmName}>{film?.name_ru}</h1>
        <div className={styles.descriptionShort}>
          <span className={styles.descItem}>{film?.year}</span>
            {film?.genre.map((genre, index) => (
              <span key={index} className={styles.descItem}>{genre.name}</span>
            ))}
          <span className={styles.descItem}>
            <div className={styles.age}>{film?.age}</div>
          </span>
        </div>
        <div className={styles.description}>
          {/* <p>{film?.description} </p> */}
        </div>
        <div className={styles.buttons}>
          <Button >
            <img src="https://start.ru/static/images/movie/play.svg" />
              Смотреть бесплатно
          </Button>
          <Button variant="translucent">
            <img src="https://start.ru/static/images/product/kino.svg" />
              Смотреть трейлер
          </Button>
          <Button variant="translucent">
            <img src={favorite}/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BannerSlide