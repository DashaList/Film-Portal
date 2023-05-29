import styles from './LanguageFlag.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeLanguage } from '../../store/actions/languageActions'


const LanguageFlag = () => {
    const { RusLanguage } = useAppSelector(state => state.languageReducer)
    const dispatch = useAppDispatch()

    const change = () => {
        dispatch(changeLanguage())
        console.log(RusLanguage)
    }

    return (
        <div className={styles.flagBox}>
            <img data-testid='Language flag' src={RusLanguage ? "https://cdn-icons-png.flaticon.com/512/3054/3054051.png" : "https://cdn-icons-png.flaticon.com/512/4009/4009124.png"} alt="" className={styles.Flag} onClick={change} />
        </div>
    );
};

export default LanguageFlag;