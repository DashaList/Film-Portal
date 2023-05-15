import { FC } from 'react';
import arrow from '../../../assets/img/svg/arrow.svg'
import styles from './SliderIndicators.module.scss'
import cn from 'classnames'

interface SliderIndicatorsProps {
    goToPrev: () => void;
    goToNext: () => void;
    indicatorsNumber: number;
}

const SliderIndicators: FC<SliderIndicatorsProps> = ({goToPrev, goToNext, indicatorsNumber}) => {
  return (
    <div className={styles.SliderIndicators}>
        <div className={styles.SliderIndicatorsWrapper}>
        <div className={cn(
            styles.arrow,
            styles.leftArrow
        )} onClick={goToPrev}>
            <img src={arrow} alt="<" />
        </div>
        <div className={styles.indicatorsWrapper}>
            { [...Array(indicatorsNumber)].map((item, index) => {
                return(<div key={index} className={styles.indicatorBox}>
                    <div className={styles.indicator}></div>
                </div>)
            }) }
        </div>
        <div className={cn(
            styles.arrow,
            styles.rightArrow
        )} onClick={goToNext}>
            <img src={arrow} alt=">" />
        </div>
        </div>
    </div>
  )
}

export default SliderIndicators