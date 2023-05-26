import { FC } from 'react';
import styles from './InputBox.module.scss';
import { useAppSelector } from '../../../hooks/redux';

interface InputBoxProps {
    inpType?: 'text' | 'number' | 'radio',
    name_ru: string,
    name_en: string,
    func?: any
}
const InputBox: FC<InputBoxProps> = ({ inpType = 'text', name_ru, name_en, func }) => {
    const { RusLanguage } = useAppSelector(state => state.languageReducer)
    return <div className={styles.InputBox}>
        <input type={inpType} autoComplete='off' data-testid='inputBox' placeholder={RusLanguage ? name_ru : name_en} className={styles.input} onChange={(e) => func(e.target.value)} />
    </div>;

}
export default InputBox;
