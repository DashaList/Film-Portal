import { FC, useEffect, useState } from "react"
import BannerSlide from "./BannerSlide"
import { IFilm } from "../../types/types"
import SliderIndicators from "../UI/SliderIndicators/SliderIndicators"
import styles from './BannerSlider.module.scss'
import Spinner from "../UI/Spinner/Spinner"
import { useWindowWidth } from "../../hooks/hooks"


interface BannerSliderProps {
    slides: IFilm[]
}

export const BannerSlider: FC<BannerSliderProps> = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [offset, setOffset] = useState(0)

    const windowWidth = useWindowWidth()
    const sliderWidth = windowWidth * slides.length    

    const goToPrev = () => {
        const newIndex = currentIndex == 0 ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)

        // const newOffset = offset == 0 ? sliderWidth - windowWidth : offset - windowWidth
        // setOffset(newOffset)
    }

    const goToNext = () => {
        const newIndex = currentIndex == slides.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)

        // const newOffset = offset == sliderWidth - windowWidth ? 0 : offset + windowWidth
        // setOffset(newOffset)
    }

    useEffect(() => {
        const newOffset = currentIndex * windowWidth

        setOffset(newOffset)
    }, [windowWidth, currentIndex])

  return (
    <div className={styles.BannerSlider} >
        <div className={styles.slide}>
            <div className={styles.slidesWrapper} style={{transform: `translateX(${-offset}px)`}}>
                {slides.map((slide, index) => {
                    return(
                        <BannerSlide key={index} film={slide}></BannerSlide>
                    )
                })}
            </div>
        </div>

        <SliderIndicators goToPrev={goToPrev} goToNext={goToNext} indicatorsNumber={slides.length}></SliderIndicators>
    </div>
  )
}
