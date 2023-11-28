import './HeroSlider.css'
import sliderData from './HeroSliderData'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Parallax, Thumbs, FreeMode } from 'swiper/modules'
import { useState, useRef, useEffect } from 'react'
import SliderControls from './SliderControls'
import gsap from 'gsap'
import SplitType from 'split-type'

const HeroSlider = () => {
  const nextButtonRef = useRef()
  const prevButtonRef = useRef()
  const [thumbSwiper, setThumbSwiper] = useState(null)

  useEffect(() => {
    return () => thumbSwiper?.destroy()
  }, [thumbSwiper])

  return (
    <div className='hero-slider'>
      <Swiper
        onSwiper={setThumbSwiper}
        className='swiper-thumb'
        spaceBetween={1}
        speed={2000}
        direction={"vertical"}
        modules={[Navigation, Parallax, Thumbs]}
        slidesPerView={6}
        centeredSlides={true}
        centeredSlidesBounds={true}
        watchSlidesProgress={true}
        // centeredSlides={true}
      >
        {
          sliderData.map((slideData, id) => (
            <SwiperSlide key={id + (id*2)} className='thumb-slide'>
              <img src={`/slider-${id+1}.webp`} alt={slideData.title} />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <Swiper
        className='swiper-slider'
        // navigation={true}
        slidesPerView={1}
        speed={2000}
        thumbs={{ swiper: thumbSwiper? thumbSwiper: null }}
        modules={[Thumbs, Navigation, Parallax, Autoplay]}
        parallax={true}
        spaceBetween={30}
        autoplay={{
          delay: 2000
        }}
        // on={(swiper) => {
        //   const currentSlide = swiper.slides
        //   console.log(currentSlide)
        //   // const badge = currentSlide.querySelector("h4")
        //   // const title = currentSlide.querySelector("h1")
        //   // const charsFromTitle = SplitType.create(title)
        //   // const desc = currentSlide.querySelector("p")
        //   // gsap.from(badge, { yPercent: 100, opacity: 0, duration: 2, ease: "expo.inOut" })
        //   // gsap.from(charsFromTitle.chars, { yPercent: 100, duration: 2, ease: "expo.inOut", stagger: 0.1 })
        //   // gsap.from(desc, { yPercent: 200, duration: 2, ease: "expo.inOut" })
        // }}
        onSlideChange={(swiper) => {
          const currentSlide = swiper.slides[swiper.activeIndex]
          
          const badge = currentSlide.querySelector("h4")
          const title  = currentSlide.querySelector("h1")
          const charsFromTitle = SplitType.create(title)

          gsap.from(badge, { yPercent: 100, opacity: 0, duration: 2, ease: "expo.inOut" })
          gsap.from(charsFromTitle.chars, { yPercent: 100, duration: 2, ease: "expo.inOut", stagger: 0.05 })
        }}
      >
        {
          sliderData.map((slideData, id) => (
            <SwiperSlide key={id} className='swiper-slide'>
              <img src={`/slider-${id + 1}.webp`} alt={slideData.title} data-swiper-parallax="60%" />
              <div className="slide-details">
                <h4 className='font-glacial-r'><span>{slideData.category}</span></h4>
                <h1 className='font-glacial-r'>{slideData.title}</h1>
              </div>
            </SwiperSlide>
          ))
        }
        <SliderControls prevButtonRef={prevButtonRef} nextButtonRef={nextButtonRef}  />
      </Swiper>
    
    </div>
  )
}

export default HeroSlider