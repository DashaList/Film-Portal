import { FC, useEffect, useRef, useState } from 'react'
import styles from './Selector.module.scss'
import { genre } from '../../../types/types';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../Checkbox/Checkbox';
import { useAppSelector } from '../../../hooks/redux';

export interface SelectorProps {
    name_ru: string,
    name_en: string,
    array: any[],
    filter: 'none' | 'genre' | 'year',
    func?: any
}

const Selector: FC<SelectorProps> = ({ name_ru, name_en, array, filter = 'none', func, }) => {
    const { RusLanguage } = useAppSelector(state => state.languageReducer)

    const [genreBoxState, setGenreBox] = useState(false);
    const toggleShowBox = () => setGenreBox(!genreBoxState);
    const blockRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: MouseEvent) => {
        if (blockRef.current?.contains(e.target as Node)) {
            return;
        }
        setGenreBox(false);
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        }
    }, []);

    const [genreFilterArray, setFilterArray] = useState<string[]>([]);
    const addFilterPosition = (filter: genre, isChecked: boolean) => {
        const updatedFilter = isChecked ? [...genreFilterArray, filter.name_en] : genreFilterArray.filter((item) => item !== filter.name_en);
        setFilterArray(updatedFilter);
    }
    const navigate = useNavigate()
    const createURL = (genre: string[] = []) => {
        let url = ''
        genre.forEach(function (elem: string, idx: number) {
            if (idx === genre.length - 1) {
                url = url + elem
            } else {
                url = url + elem + '+'
            }
        })
        return url
    }
    const goFilterUrl = (URL: string) => {
        let link = ''
        if (window.location.pathname.includes('/movies')) {
            link = '/movies/'
        }
        else {
            link = '/admin/'
        }
        link += URL
        navigate(link, { replace: true })
    }

    useEffect(() => {
        goFilterUrl(createURL(genreFilterArray))
    }, [genreFilterArray])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        func(e.target.value)
    }
    switch (filter) {
        case 'genre': return (
            <div className={styles.filter}  >
                <div className={styles.selector} onClick={toggleShowBox} id={name_ru}> {RusLanguage? name_ru:name_en}
                </div>
                {genreBoxState && (
                    <div className={styles.filterBox} ref={blockRef}>
                        {array.map(filter => (
                            <Checkbox position={filter} func={addFilterPosition} key={filter} />
                        ))
                        }
                    </div >)}
            </div>
        );
        case 'year': return (
            <select className={styles.selector} id={name_ru} onChange={handleChange}>
                <option className={styles.option} value="none" disabled selected>{RusLanguage? name_ru:name_en} <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" /> </option>
                {array.map(option => (
                    <option className={styles.option} value={option} key={option}>{option}</option>
                ))}
            </select>
        )
        default: return (
            <select className={styles.selector} id={name_ru} onChange={handleChange}>
                <option className={styles.option} value="none" disabled selected>{RusLanguage? name_ru:name_en} <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" /> </option>
                {array.map(option => (
                    <option className={styles.option} value={option} key={option}>{option}</option>
                ))}
            </select>
        )
    }
}

export default Selector
