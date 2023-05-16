import { FC, useEffect, useState } from 'react'
import styles from './Selector.module.scss'
import { SelectorProps, genre } from '../../../types/types';
import { useNavigate } from 'react-router-dom';



const Selector: FC<SelectorProps> = ({ name, array, filter = 'none', setSort, setYearFilter }) => {

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


    const handleYearSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setYearFilter(e.target.value)
    }


    const handleSortSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(e.target.value)
    }
    switch (filter) {
        case 'genre': return (
            <div className={styles.filter}  >
                <div className={styles.selector} onClick={toggleShowBox} id={name}> {name}
                    <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
                </div>
                <div className={styles.filterBox} style={genreBoxState ? { display: 'grid' } : { display: 'none' }}>
                    {array.map(filter => (
                        <label className={styles.filterPoint} key={filter.name_en}>
                            <input type="checkbox" defaultChecked={false} className={styles.genreCheckbox} onChange={(e) => addFilterPosition(filter, (e.target as HTMLInputElement).checked)} value={filter.name_en} name="genre" />
                            {filter.name_ru}
                        </label>
                    ))
                    }
                </div >
            </div>
        );
        case 'year': return (
            <select className={styles.selector} id={name} onChange={handleYearSelectChange}>
                <option className={styles.option} value="none" disabled selected>{name} <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" /> </option>
                {array.map(option => (
                    <option className={styles.option} value={option} key={option}>{option}</option>
                ))}
            </select>
        )
        default: return (
            <select className={styles.selector} id={name} onChange={handleSortSelectChange}>
                <option className={styles.option} value="none" disabled selected>{name} <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" /> </option>
                {array.map(option => (
                    <option className={styles.option} value={option} key={option}>{option}</option>
                ))}
            </select>
        )
    }
}

export default Selector
