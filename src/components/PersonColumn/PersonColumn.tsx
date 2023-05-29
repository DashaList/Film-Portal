import styles from './PersonColumn.module.scss'
import PeopleData from '../../PeopleData.json'
import { crossPoint } from '../../types/types';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import TranscriptionData from '../../TranscriptionData.json'

interface PersonColumnProps {
    person: crossPoint
}

const PersonColumn: FC<PersonColumnProps> = ({ person }) => {
    const { RusLanguage } = useAppSelector(state => state.languageReducer)
    const currentPerson = PeopleData.find((obj) => obj.id === person.id) ? PeopleData.find((obj) => obj.id === person.id) : person
    return (
        <div className={styles.PersonColumn}>
            <Link to={`/persons/${currentPerson?.id}`} className={styles.personRow}>
                <img src={currentPerson?.poster} alt="" className={styles.avatar} />
                <span className={styles.personName}>{RusLanguage ? currentPerson?.name_ru : currentPerson?.name_en}</span>
            </Link>
        </div>
    );
};

export default PersonColumn;