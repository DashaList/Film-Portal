import { FC } from 'react';
import styles from './Search.module.scss';

interface SearchProps {
    name: string
    func?: any
}
const Search: FC<SearchProps> = ({ name, func }) => {
    return <div className={styles.searchBox}>
        <input autoFocus type="text" autoComplete='off' placeholder={name} className={styles.search} onChange={(e) => func(e.target.value)} />
    </div>;

}
export default Search;
