import { FC } from 'react'
import PlayButton from '../UI/PlayButton/PlayButton'
import styles from './Top10Card.module.scss'

interface Top10CardProps {
    topNumber: number
    imgLink: string | undefined
    filmLink: string
}

const Top10Card: FC<Top10CardProps> = ({topNumber, imgLink, filmLink}) => {
  return (
    <div className={styles.Top10Card}>
        <a href={filmLink} className={styles.link} target="_blank">
            <div className={styles.number}>
                <img src={`https://start.ru/static/images/newVideoUnit/topTen/${topNumber}.svg`} alt={topNumber.toString()} />
            </div>
            <div className={styles.content} style={{backgroundImage: `url(${'"' + imgLink +'"'})`}}>
                <div className={styles.playBtn}>
                    <PlayButton />
                </div>
            </div>
        </a>
    </div>
  )
}

export default Top10Card