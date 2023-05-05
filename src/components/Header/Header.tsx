import Button from '../UI/Button/Button'
import styles from './Header.module.scss'
import logo from '../../assets/img/svg/logo_white.svg'
import search from '../../assets/img/svg/search.svg'
import avatar from '../../assets/img/svg/avatar.svg'
import { Link } from 'react-router-dom'
import burger from '../../assets/img/svg/burger.svg'
import { useWindowWidth } from '../../hooks/hooks'
import cn from 'classnames';

const Header = () => {
    const windowWidth = useWindowWidth()

  return (
    <header className={styles.Header}>
        <div className={styles.left}>
            <a href="!#">
                <img className={styles.logo} src={logo} alt="START" />
            </a>
            {windowWidth > 1024 && <nav>
                {windowWidth >= 1120 && <div className={styles.link}>
                    <a href="!#">Кино&nbsp;на&nbsp;ТВ</a>
                </div>}
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
                {windowWidth >= 1200 && <div className={styles.link}>
                    <a href="!#">Журнал</a>
                </div>}
                <div className={styles.link}>
                    <a href="!#">ТВ</a>
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