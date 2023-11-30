import './HeroSlider.css'
import sliderData from './HeroSliderData'
import { Swiper, SwiperSlide } from 'swiper/react'
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

  return (
    <div className='hero-slider'>
      <div className="filler-gradient"></div>
      <Swiper
        onSwiper={setThumbSwiper}
        className='swiper-thumb'
        spaceBetween={1}
        speed={2000}
        // loop={true}
        direction={"vertical"}
        modules={[Navigation, Thumbs]}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesPerView={3}
        watchSlidesProgress={true}
      >
        {
          sliderData.map((slideData, id) => (
            <SwiperSlide key={id + (id*2)} className='thumb-slide'>
              <img src={`/thumb-${id+1}.webp`} alt={slideData.title} />
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
        // loop={true}
        spaceBetween={30}
        // autoplay={{
        //   delay: 2000
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
              <div className='hero-slider-counter'>
                <h1 data-swiper-parallax="200%" className='font-glacial-b color-bw-gradient-title'>
                  {(id+1).toString().padStart(2, "0")}
                </h1>
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