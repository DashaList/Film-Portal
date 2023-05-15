
import { FC } from 'react'
import styles from './Selector.module.scss'
import { SelectorProps } from '../../../types/types';



const Selector: FC<SelectorProps> = ({ name, array, filter, setSort }) => {
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value);
    }
    return (
        <select className={styles.selector} id={name} onChange={handleSelectChange}>
            <option className={styles.option} value="none" disabled selected>{name} <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" /> </option>
            {filter ?
                <option>non-filter</option> :
                array.map(option => (
                    <option className={styles.option} value={option} key={option}>{option}</option>
                ))
            }
        </select>
    )
}

export default Selector