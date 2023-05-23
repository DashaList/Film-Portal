import { FC, useEffect, useState } from 'react';
import styles from './Slider.module.scss'
import { useAppSelector } from '../../../hooks/redux';

interface SliderProps {
    name_ru: string
    name_en: string
    max: number
    func?: any
}
const Slider: FC<SliderProps> = ({ name_ru, name_en, max, func }) => {
    const { RusLanguage } = useAppSelector(state => state.toogleLanguage)

    const [valueSlider, setValueSlider] = useState(0)
    useEffect(() => {
        func(valueSlider)
    }, [valueSlider])
    return (
        <div className={styles.sliderBox}>
            <output className={styles.output} id="volume"> {RusLanguage? name_ru:name_en} {valueSlider}</output>
            <input type="range" className={styles.slider} defaultValue={valueSlider} onChange={(e) => { setValueSlider(+e.target.value) }} min='0' max={String(max)} step={max / 100} />
        </div>
    );
};

export default Slider;