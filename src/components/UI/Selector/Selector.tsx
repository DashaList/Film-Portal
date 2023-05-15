import { FC, useEffect, useState } from 'react'
import styles from './Selector.module.scss'
import { SelectorProps, genre } from '../../../types/types';
import { useNavigate } from 'react-router-dom';



const Selector: FC<SelectorProps> = ({ name, array, filter = 'none', setSort }) => {
    const [genreBoxState, setGenreBox] = useState(false);
    const toggleShowBox = () => setGenreBox(!genreBoxState);

    const [filterArray, setFilterArray] = useState<string[]>([]);
    const addFilterPosition = (filter: genre, isChecked: boolean) => {
        const updatedFilter = isChecked ? [...filterArray, filter.name_en] : filterArray.filter((item) => item !== filter.name_en);
        setFilterArray(updatedFilter);
    }

    const navigate = useNavigate()
    const createURL = (array: string[]) => {
        let url = ""
        array.forEach(function (elem: string, idx: number, array: string[]) {
            if (idx === array.length - 1) {
                url = url + elem;
            }
            else {
                url = url + elem + "+"
            }
        });
        return url
    }
    const goFilterUrl = (URL: string) => navigate(`/movies/${URL}`, { replace: true })
    useEffect(() => {
        goFilterUrl(createURL(filterArray))
    }, [filterArray])

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
                            <input type="checkbox" className={styles.genreCheckbox} onChange={(e) => addFilterPosition(filter, (e.target as HTMLInputElement).checked)} value={filter.name_en} name="genre" />
                            {filter.name_ru}
                        </label>
                    ))
                    }
                </div >
            </div>
        );
        case 'year': return (<></>);
        default: return (
            <select className={styles.selector} id={name} onChange={handleSelectChange}>
                <option className={styles.option} value="none" disabled selected>{name} <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" /> </option>
                {array.map(option => (
                    <option className={styles.option} value={option} key={option}>{option}</option>
                ))}
            </select>
        )
    }
}

export default Selector
