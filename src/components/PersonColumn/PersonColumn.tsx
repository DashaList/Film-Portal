import styles from './PersonColumn.module.scss'
import PeopleData from '../../PeopleData.json'
import { PersonColumnProps } from '../../types/types';
import { FC } from 'react';
import { Link } from 'react-router-dom';


const PersonColumn: FC<PersonColumnProps> = ({person}) => {
    const currentPerson = PeopleData.find((obj) => obj.id === person.id)
    return (
        <div className={styles.PersonColumn}>
            <Link to={`/persons/${currentPerson?.id}`} className={styles.personRow}>
                <img src={currentPerson?.img} alt="" className={styles.avatar} />
                <span className={styles.personName}>{currentPerson?.name}</span>
            </Link>
        </div>
    );
};

export default PersonColumn;