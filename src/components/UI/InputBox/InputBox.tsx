import { FC } from 'react';
import styles from './InputBox.module.scss';

interface InputBoxProps {
    inpType?: 'text'|'number'|'radio',
    name: string,
    func?: any
}
const InputBox: FC<InputBoxProps> = ({ inpType='text', name, func }) => {
    return <div className={styles.InputBox}>
        <input autoFocus type={inpType} autoComplete='off' placeholder={name} className={styles.input} onChange={(e) => func(e.target.value)} />
    </div>;

}
export default InputBox;
