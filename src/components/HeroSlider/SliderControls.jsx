import { useEffect } from 'react'
import './HeroSlider.css'
import { useSwiper } from 'swiper/react'

const SliderControls = ({ prevButtonRef, nextButtonRef }) => {
    const heroSliderInstance = useSwiper()

    useEffect(() => {
        heroSliderInstance.params.navigation.prevEl = prevButtonRef.current
        heroSliderInstance.params.navigation.nextEl = nextButtonRef.current
        heroSliderInstance.navigation.update()
    }, [])

    return (
        <div className="swiper-controls">
            <button data-blobity-magnetic="true" onClick={() => heroSliderInstance.slidePrev()} ref={prevButtonRef}>←</button>
            <button data-blobity-magnetic="true" onClick={() => heroSliderInstance.slideNext()} ref={nextButtonRef}>→</button>
        </div>
    )
}

export default SliderControls