import { Link, useParams } from 'react-router-dom';
import Catalog from '../../components/Catalog/Catalog';
import styles from './AdminPage.module.scss';
import Path from '../../components/UI/Path/Path';
import InputBox from '../../components/UI/InputBox/InputBox'
import GenresData from '../../GenresData.json'
import FilmData from '../../FilmData.json'
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import ProfessionsData from '../../ProfessionsData.json'
import Button from '../../components/UI/Button/Button';
import { useEffect, useState } from 'react';


const AdminPage = () => {
    const { genre } = useParams()
    const genres = genre?.split('+') || ['']
    const [newFilmImg, setNewFilmImg] = useState('')
    const [newFilmYear, setNewFilmYear] = useState(0)
    const [newFilmCountry, setNewFilmCountry] = useState([''])
    const [newFilmTagline, setNewFilmTagline] = useState('')
    const [newFilmAge, setNewFilmAge] = useState(0)
    const [newFilmTime, setNewFilmTime] = useState(0)
    const [newFilmRating, setNewFilmRating] = useState(0.0)
    const [newFilmMarks, setNewFilmMarks] = useState(0)
    const [newFilmName_ru, setNewFilmName_ru] = useState('')
    const [newFilmName_en, setNewFilmName_en] = useState('')
    const [newFilmDescription, setNewFilmDescription] = useState('')
    const [newFilmGenres, setNewFilmGenres] = useState<string[]>([])
    const [newFilmDirectore, setNewFilmDirectore] = useState([])
    const [newFilmActor, setNewFilmActor] = useState([])
    const [newFilmProducer, setNewFilmProducer] = useState([])
    const [newFilmVoice, setNewnewFilmVoice] = useState([])
    const [newFilmWriter, setNewnewFilmWriter] = useState([])
    const [newFilmOperator, setNewnewFilmOperator] = useState([])
    const [newFilmComposer, setNewnewFilmComposer] = useState([])
    const [newFilmDesign, setNewFilmDesign] = useState([])
    const [newFilmEditor, setNewFilmEditor] = useState([])
    const formatTime = (minutes: number) => {
        let hours = Math.floor(minutes / 60);
        let mins = minutes % 60;
        let result = minutes + " мин. / " + (hours < 10 ? "0" : "") + hours + ":" + (mins < 10 ? "0" : "") + mins;
        return result;
    }
    const addGenrePosition = (genre: any, isChecked: boolean) => {
        const updatedGenres = isChecked ? [...newFilmGenres, genre.name_en] : newFilmGenres.filter((item) => item !== genre.name_en);
        setNewFilmGenres(updatedGenres);
        
    }
    let addedFilm = {}

    useEffect(() => {
        addedFilm = {
            id: FilmData.length + 1,
            img: newFilmImg,
            year: newFilmYear,
            country: newFilmCountry,
            tagline: newFilmTagline,
            age: `${newFilmAge}+`,
            time: formatTime(newFilmTime),
            rating: newFilmRating,
            marks: newFilmMarks,
            name_ru: newFilmName_ru,
            name_en: newFilmName_en,
            description: newFilmDescription,
            genres: newFilmGenres,
            director: newFilmDirectore,
            actor: newFilmActor,
            producer: newFilmProducer,
            voice: newFilmVoice,
            writer: newFilmWriter,
            operator: newFilmOperator,
            composer: newFilmComposer,
            design: newFilmDesign,
            editor: newFilmEditor
        }
        console.log(addedFilm)
    }, [newFilmImg,
        newFilmYear,
        newFilmCountry,
        newFilmTagline,
        newFilmAge,
        newFilmTime,
        newFilmRating,
        newFilmMarks,
        newFilmName_ru,
        newFilmName_en,
        newFilmDescription,
        newFilmGenres,
        newFilmDirectore,
        newFilmActor,
        newFilmProducer,
        newFilmVoice,
        newFilmWriter,
        newFilmOperator,
        newFilmComposer,
        newFilmDesign,
        newFilmEditor])

    const [newFilm, setNewFilm] = useState(addedFilm)


    const addNewFilm = () => {
        setNewFilm(addedFilm)
        console.log(newFilm)
    }
    return (
        <div className={styles.page}>
            <Path>
                <Link to="/"> Главная </Link>
                <Link to="/admin">Администрация</Link>
            </Path>
            <h1 className={styles.header}> Администрация </h1>
            <div className={styles.adminBox}>
                <div className={styles.inputs}>
                    <InputBox name={'Адрес изображения'} func={setNewFilmImg} />
                    <InputBox name={'Год'} inpType='number' func={setNewFilmYear} />
                    <InputBox name={'Страна'} func={setNewFilmCountry} />
                    <InputBox name={'Краткое описание'} func={setNewFilmTagline} />
                    <InputBox name={'Возрастное ограничение'} inpType='number' func={setNewFilmAge} />
                    <InputBox name={'Продолжительность в мин'} inpType='number' func={setNewFilmTime} />
                    <InputBox name={'Рейтинг'} inpType='number' func={setNewFilmRating} />
                    <InputBox name={'Кол-во оценок'} inpType='number' func={setNewFilmMarks} />
                    <InputBox name={'Название на русском'} func={setNewFilmName_ru} />
                    <InputBox name={'Название на английском'} func={setNewFilmName_en} />
                    <textarea placeholder='Полное описание' onChange={(e) => setNewFilmDescription(e.target.value)} />
                </div>

                <div className={styles.genreBox}>
                    {GenresData.map(filter => (
                        <Checkbox position={filter} key={filter.name_en} func={addGenrePosition} />
                    ))}
                </div >
                <div className={styles.inputs}>
                    <InputBox name={'Фамилия человека'} />
                    <InputBox name={'Имя человека'} />
                    <div className={styles.genreBox}>
                        {ProfessionsData.map(profession => (
                            <Checkbox position={profession} key={profession.name_en} />
                        ))}
                    </div >
                    <Button variant='outlined'>+ Добавить человека</Button>
                </div>
            </div>
            <div onClick={addNewFilm}>
                <Button variant='outlined'>+ Добавить фильм</Button>
            </div>

            <Catalog genres={genres} />
        </div>
    );
};

export default AdminPage;