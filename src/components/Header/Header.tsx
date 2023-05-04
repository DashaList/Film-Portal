import Button from '../UI/Button/Button'
import styles from './Header.module.scss'
import logo from '../../assets/img/svg/logo_white.svg'
import search from '../../assets/img/svg/search.svg'
import avatar from '../../assets/img/svg/avatar.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.left}>
                <a href="!#">
                    <img src={logo} alt="START" />
                </a>
                <nav>
                    <div className={styles.link}>
                        <a href="!#">Кино&nbsp;на&nbsp;ТВ</a>
                    </div>
                    <div className={styles.link}>
                        <Link to="/movies">Фильмы</Link>
                    </div>
                    <div className={styles.link}>
                        <a href="!#">Сериалы</a>
                    </div>
                    <div className={styles.link}>
                        <a href="!#">Мультфильмы</a>
                    </div>
                    <div className={styles.link}>
                        <a href="!#">Новинки</a>
                    </div>
                    <div className={styles.link}>
                        <a href="!#">Журнал</a>
                    </div>
                    <div className={styles.link}>
                        <a href="!#">ТВ</a>
                    </div>
                </nav>
            </div>
            <div className={styles.right}>
                <Button variant={'contained'}>Попробовать бесплатно</Button>
                <div className={styles.icons}>
                    <a href="!#">
                        <img className={styles.icon} src={search} alt="" />
                    </a>
                    <a href="!#">
                        <img className={styles.icon} src={avatar} alt="" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header