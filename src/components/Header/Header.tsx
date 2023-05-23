import Button from '../UI/Button/Button'
import styles from './Header.module.scss'
import logo from '../../assets/img/svg/logo_white.svg'
import search from '../../assets/img/svg/search.svg'
import avatar from '../../assets/img/svg/avatar.svg'
import { Link, useNavigate } from 'react-router-dom'
import burger from '../../assets/img/svg/burger.svg'
import { useWindowScrollY, useWindowWidth } from '../../hooks/hooks'
import cn from 'classnames';
import LanguageFlag from '../LanguageFlag/LanguageFlag'
import { useAppSelector } from '../../hooks/redux'
import { useEffect, useState } from 'react'
import TranscriptionData from '../../TranscriptionData.json'


const Header = () => {
    const { RusLanguage } = useAppSelector(state => state.toogleLanguage)
    const [language, setLanguage] = useState(TranscriptionData[0])
    useEffect(() => {
        RusLanguage ? setLanguage(TranscriptionData[0]) : setLanguage(TranscriptionData[1])
    }, [RusLanguage])
    const windowWidth = useWindowWidth()
    const scrollY = useWindowScrollY()

    const navigate = useNavigate()
    const tryFreeHandler = () => navigate("/signUp")

    return (
        <header className={cn(styles.Header, scrollY > 10 && styles.Header_small)}>
            <div className={styles.left}>
                <Link to='/'>
                    <img className={styles.logo} src={logo} alt="START" />
                </Link>
                {windowWidth > 1024 && <nav>
                    {windowWidth >= 1120 && <div className={styles.link}>
                        <a href="https://start.ru/archive">{language.Header.TV_Movies}</a>
                    </div>}
                    <div className={styles.link}>
                        <Link to="/movies">{language.Header.Movies}</Link>
                    </div>
                    <div className={styles.link}>
                        <a href="https://start.ru/series">{language.Header.Serials}</a>
                    </div>
                    <div className={styles.link}>
                        <Link to="/movies/animation">{language.Header.Animation}</Link>
                    </div>
                    <div className={styles.link}>
                        <Link to="/movies/comedy">{language.Header.Comedy}</Link>
                    </div>
                    <div className={styles.link}>
                        <a href="https://start.ru/new">{language.Header.New}</a>
                    </div>
                    {windowWidth >= 1200 && <div className={styles.link}>
                        <a href="https://start.ru/journal">{language.Header.Journal}</a>
                    </div>}
                    <div className={styles.link}>
                        <a href="https://start.ru/tvchannels">{language.Header.TV}</a>
                    </div>
                    <div className={styles.link}>
                        <Link to="/admin">{language.Header.Administration}</Link>
                    </div>
                </nav>}
            </div>
            <div className={styles.right}>
                {windowWidth > 1024 && <Button onClick={tryFreeHandler}>{language.Button.test_free}</Button>}
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
                <LanguageFlag />
            </div>
        </header>
    )
}

export default Header