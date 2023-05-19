import Button from '../UI/Button/Button'
import styles from './Header.module.scss'
import logo from '../../assets/img/svg/logo_white.svg'
import search from '../../assets/img/svg/search.svg'
import avatar from '../../assets/img/svg/avatar.svg'
import { Link } from 'react-router-dom'
import burger from '../../assets/img/svg/burger.svg'
import { useWindowScrollY, useWindowWidth } from '../../hooks/hooks'
import cn from 'classnames';

const Header = () => {
    const windowWidth = useWindowWidth()
    const scrollY = useWindowScrollY()

    return (
        <header className={cn(styles.Header, scrollY > 10 && styles.Header_small)}>
            <div className={styles.left}>
                <Link to='/'>
                    <img className={styles.logo} src={logo} alt="START" />
                </Link>
                {windowWidth > 1024 && <nav>
                    {windowWidth >= 1120 && <div className={styles.link}>
                        <a href="https://start.ru/archive">Кино&nbsp;на&nbsp;ТВ</a>
                    </div>}
                    <div className={styles.link}>
                        <Link to="/movies">Фильмы</Link>
                    </div>
                    <div className={styles.link}>
                        <a href="https://start.ru/series">Сериалы</a>
                    </div>
                    <div className={styles.link}>
                        <Link to="/movies/animation">Мультфильмы</Link>
                    </div>
                    <div className={styles.link}>
                        <Link to="/movies/comedy">Комедии</Link>
                    </div>
                    <div className={styles.link}>
                        <a href="https://start.ru/new">Новинки</a>
                    </div>
                    {windowWidth >= 1200 && <div className={styles.link}>
                        <a href="https://start.ru/journal">Журнал</a>
                    </div>}
                    <div className={styles.link}>
                        <a href="https://start.ru/tvchannels">ТВ</a>
                    </div>
                    <div className={styles.link}>
                        <Link to="/admin/">Администрация</Link>
                    </div>
                </nav>}
            </div>
            <div className={styles.right}>
                {windowWidth > 1024 && <Button>Попробовать бесплатно</Button>}
                <div className={styles.icons}>
                    <a href="!#">
                        <img className={styles.icon} src={search} alt="search" />
                    </a>
                    {windowWidth > 1024 && <a href="!#">
                        <img className={styles.icon} src={avatar} alt="avatar" />
                    </a>}
                    {windowWidth <= 1024 && <a href="!#">
                        <img className={cn(styles.icon, styles.burger)} src={burger} alt="burger" />
                    </a>}
                </div>
            </div>
        </header>
    )
}

export default Header