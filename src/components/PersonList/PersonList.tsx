import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import styles from './PersonList.module.scss'
import TranscriptionData from '../../TranscriptionData.json'
import PersonColumn from '../PersonColumn/PersonColumn';
import { crossPoint } from '../../types/types';

interface PersonListProps {
    position: crossPoint[],
    nameProfessions: string
}

const PersonList: FC<PersonListProps> = ({ position, nameProfessions }) => {
    const { RusLanguage } = useAppSelector(state => state.languageReducer)
    const [language, setLanguage] = useState(TranscriptionData[0])
    useEffect(() => {
        RusLanguage ? setLanguage(TranscriptionData[0]) : setLanguage(TranscriptionData[1])
    }, [RusLanguage])
    const [PersonLenghtState, getPersonLenghtState] = useState(false)
    const showMore = () => {
        getPersonLenghtState(!PersonLenghtState)
        setNumVisible(position.length)
    }
    const showHide = () => {
        getPersonLenghtState(!PersonLenghtState)
        setNumVisible(position.length)
    }
    const [numVisible, setNumVisible] = useState(5)
    return (
        <div>
            <h3 className={styles.columnHeader} data-testid='persons'> {nameProfessions} </h3>
            {position.slice(0, numVisible).map((person) => (
                <PersonColumn person={person} />
            ))}
            {numVisible < position.length &&
                <div>
                    <div className={styles.toggleLenght} style={PersonLenghtState ? { display: 'none' } : { display: 'flex' }} onClick={showMore}>
                        <div className={styles.more} data-testid='more'> {language.FilmPage.more}</div>
                        <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
                    </div>
                    <div className={styles.toggleLenght} style={PersonLenghtState ? { display: 'flex' } : { display: 'none' }} onClick={showHide}>
                        <div className={styles.more} data-testid='hide'> {language.FilmPage.hide}</div>
                        <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
                    </div>
                </div>}

        </div >

    );
};

export default PersonList;