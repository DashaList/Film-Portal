import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Path from '../../components/UI/Path/Path';
import styles from './FilmPage.module.scss'
import FilmTopInfo from '../../components/FilmTopInfo/FilmTopInfo';
import FilmBotInfo from '../../components/FilmBotInfo/FilmBotInfo';


const FilmPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.baner}>
                <div className={styles.banerBox}>
                    <img className={styles.imgBaner} src="https://api.start.ru/images/unsafe/1920x1080/filters:format(webp)/e8d553d0a70d467687e85aab70ee6881/images-packshot_detailsbg_15x?size=680x446" alt="" />
                </div>
                <div className={styles.topBlock}>
                    <Breadcrumbs></Breadcrumbs>
                    <Path>
                        <p> Главная </p>
                        <Link to="/movies">Фильмы</Link>
                        <p>Комедии</p>
                        <Link to="/movies/:id">Приключения Паддингтона</Link>
                    </Path>
                    <FilmTopInfo />
                </div>
            </div>
            <FilmBotInfo />
        </div>
    );
};

export default FilmPage;