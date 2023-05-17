import { FC, useEffect, useState } from 'react';
import styles from './Slider.module.scss'

interface SliderProps {
    name: string
    max: number
    func?: any
}
const Slider: FC<SliderProps> = ({ name, max, func }) => {
    const [valueSlider, setValueSlider] = useState(0)
    useEffect(() => {
        func(valueSlider)
    }, [valueSlider])
    return (
        <div className={styles.sliderBox}>
            <output className={styles.output} id="volume"> {name} {valueSlider}</output>
            <input type="range" className={styles.slider} onChange={(e) => { setValueSlider(+e.target.value) }} min='0' max={String(max)} step={max / 100} />
        </div>
    );
};

export default Slider;