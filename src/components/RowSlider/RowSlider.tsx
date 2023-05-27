import { FC, ReactNode, useRef, useState, UIEvent } from 'react'
import styles from './RowSlider.module.scss'
import Paginator from '../UI/Paginator/Paginator'
import arrow from '../../assets/img/svg/arrow.svg'
import cn from 'classnames'
import { useWindowWidth } from '../../hooks/hooks'

interface RowSliderProps {
    slides: ReactNode[],
    title: string
}

const RowSlider: FC<RowSliderProps> = ({ slides, title }) => {

    const windowWidth = useWindowWidth()
    const sliderWrapperRef = useRef<HTMLDivElement>(null)
    const [scroll, setScroll] = useState(0)

    const sliderWidth = sliderWrapperRef.current ? sliderWrapperRef.current.scrollWidth : 0

    const goToPrev = () => {
        if (sliderWrapperRef.current) {
            sliderWrapperRef.current.scrollLeft -= windowWidth * 0.9
        }
    }

    const goToNext = () => {
        if (sliderWrapperRef.current) {
            sliderWrapperRef.current.scrollLeft += windowWidth * 0.9
            console.log('scroll', sliderWrapperRef.current.scrollLeft)
        }
    }

    const handleScroll = (e: UIEvent<HTMLDivElement>) => {
        setScroll(e.currentTarget.scrollLeft)
    }


    return (
        <div className={styles.RowSlider}>
            <div className={styles.header}>
                <h2>{title}</h2>
            </div>

            <div className={styles.slide} style={{ width: windowWidth }}>

                <div className={styles.sliderWrapper} data-testid='slider-wrapper' ref={sliderWrapperRef} onScroll={handleScroll}>
                    {slides.map((slide, index) => <div className={styles.slideItem} key={index}>{slide}</div>)}
                </div>

                <Paginator sliderWidth={sliderWidth} scroll={scroll} ></Paginator>
                <div className={cn(
                    styles.arrow,
                    styles.rightArrow
                )} onClick={goToNext} data-testid='right-arrow'>
                    <img src={arrow} alt=">" />
                </div>
                <div className={cn(
                    styles.arrow,
                    styles.leftArrow
                )} onClick={goToPrev}>
                    <img src={arrow} alt="<" data-testid='left-arrow' />
                </div>

                <div className={cn(
                    styles.fade,
                    styles.fadeRight
                )}></div>
                <div className={cn(
                    styles.fade,
                    styles.fadeLeft
                )}></div>
            </div>
        </div>
    )
}

export default RowSlider