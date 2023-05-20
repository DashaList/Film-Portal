import styles from './PersonColumn.module.scss'
import PeopleData from '../../PeopleData.json'
import { crossPoint } from '../../types/types';
import { FC } from 'react';
import { Link } from 'react-router-dom';
interface PersonColumnProps {
    person: crossPoint
}

const PersonColumn: FC<PersonColumnProps> = ({ person }) => {
    const currentPerson = PeopleData.find((obj) => obj.id === person.id) ? PeopleData.find((obj) => obj.id === person.id) : person
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