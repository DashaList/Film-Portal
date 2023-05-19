import { FC,  useState } from 'react';
import styles from './Checkbox.module.scss'

interface CheckboxProps {
    position: any
    func?: any
}

const Checkbox: FC<CheckboxProps> = ({ position, func }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        func(position, e.target.checked)
    };
    return (
        <label className={styles.checkboxPoint} key={position.name_en}>
            <input type="checkbox" defaultChecked={false} checked={checked} className={styles.checkbox} onChange={handleCheckboxChange} value={position.name_en} name="genre" />
            {position.name_ru}
        </label>
    );
};

export default Checkbox;