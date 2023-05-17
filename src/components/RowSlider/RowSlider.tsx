import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import styles from './RowSlider.module.scss'
import Paginator from '../UI/Paginator/Paginator'
import arrow from '../../assets/img/svg/arrow.svg'
import cn from 'classnames'
import { useWindowWidth } from '../../hooks/hooks'

interface RowSliderProps {
    slides: ReactNode[]
}

const RowSlider: FC<RowSliderProps> = ({slides}) => {
    
    const windowWidth = useWindowWidth()
    const sliderWrapperRef = useRef<HTMLDivElement>(null)

    const goToPrev = () => {
        if (sliderWrapperRef.current) {
            sliderWrapperRef.current.scrollLeft -= windowWidth * 0.9
        }
    }

    const goToNext = () => {
        if (sliderWrapperRef.current) {
            sliderWrapperRef.current.scrollLeft += windowWidth * 0.9
        }
    }
    

  return (
    <div className={styles.RowSlider}>
        <div className={styles.slide}>
            <div className={styles.sliderWrapper} ref={sliderWrapperRef}>
                {slides.concat(slides).map((slide, index) => <div className={styles.slideItem} key={index}>{slide}</div>)}
            </div>

            <Paginator></Paginator>
            <div className={cn(
                styles.arrow,
                styles.rightArrow
            )} onClick={goToNext}>
                <img src={arrow} alt=">" />
            </div>
            <div className={cn(
                styles.arrow,
                styles.leftArrow
            )} onClick={goToPrev}>
                <img src={arrow} alt="<" />
            </div>
        </div>
    </div>
  )
}

export default RowSlider