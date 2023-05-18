import { FC, useEffect, useState } from 'react'
import styles from './Selector.module.scss'
import { genre } from '../../../types/types';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../Checkbox/Checkbox';

interface SelectorProps {
    name: string,
    array: any[],
    filter: 'none' | 'genre' | 'year',
    func?: any
}

const Selector: FC<SelectorProps> = ({ name, array, filter = 'none', func }) => {

    const [genreBoxState, setGenreBox] = useState(false);
    const toggleShowBox = () => setGenreBox(!genreBoxState);

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
        let link = '/movies/'
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
                <div className={styles.selector} onClick={toggleShowBox} id={name}> {name}
                </div>
                <div className={styles.filterBox} style={genreBoxState ? { display: 'grid' } : { display: 'none' }}>
                    {array.map(filter => (
                        <Checkbox position={filter} func={addFilterPosition} />
                    ))
                    }
                </div >
            </div>
        );
        case 'year': return (
            <select className={styles.selector} id={name} onChange={handleChange}>
                <option className={styles.option} value="none" disabled selected>{name} <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" /> </option>
                {array.map(option => (
                    <option className={styles.option} value={option} key={option}>{option}</option>
                ))}
            </select>
        )
        default: return (
            <select className={styles.selector} id={name} onChange={handleChange}>
                <option className={styles.option} value="none" disabled selected>{name} <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" /> </option>
                {array.map(option => (
                    <option className={styles.option} value={option} key={option}>{option}</option>
                ))}
            </select>
        )
    }
}

export default Selector
