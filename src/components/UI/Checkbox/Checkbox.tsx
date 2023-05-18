import { FC, useState } from 'react';
import styles from './Checkbox.module.scss'

interface CheckboxProps {
    position: any
    func?: any
}

const Checkbox: FC<CheckboxProps> = ({ position, func }) => {
    return (
        <label className={styles.checkboxPoint} key={position.name_en}>
            <input type="checkbox" defaultChecked={false} className={styles.checkbox} onChange={(e) => func(position, (e.target as HTMLInputElement).checked)} value={position.name_en} name="genre" />
            {position.name_ru}
        </label>
    );
};

export default Checkbox;