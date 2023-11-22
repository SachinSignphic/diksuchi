import './HeroSlider.css'
import sliderData from './HeroSliderData'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Navigation, Parallax } from 'swiper/modules'
import { useRef } from 'react'
import SliderControls from './SliderControls'
import gsap from 'gsap'

const HeroSlider = () => {
  const nextButtonRef = useRef()
  const prevButtonRef = useRef()

  return (
    <div className='hero-slider'>
      <Swiper
        className='swiper-slider'
        spaceBetween={50}
        parallax={true}
        speed={800}
        modules={[Autoplay, Navigation, Parallax]}
        // onSlideChange={(swiper) => {
        //   const slideToAnimate = swiper.slides.at(swiper.activeIndex)

        //   const title = slideToAnimate.querySelector('h1')
        //   const categoryBadge = slideToAnimate.querySelector('h4')
        //   const description = slideToAnimate.querySelector('p')

        //   //decide how to use gsap with this, or custom animation or gsap with swiperjs in Google.
        //   gsap.from([title, categoryBadge, description], { y: '500px', duration: 2, ease: "expo.inOut", stagger: 0.1 });
        // }}
        onSliderMove={(swiper) => {
          console.log(swiper.progress)
        }}
      // autoplay={{
      //   delay: 4000,
      // }}
      // onSwiper={() => hasSwiperLoaded.current = true}
      >
        {
          sliderData.map((slideData, id) => (
            <SwiperSlide key={id} className='swiper-slide'>
              {/* <img src={slideData.image} alt={slideData.title} />
              <div className="slide-details">
                <h4 className='font-glacial-r'>{slideData.category}</h4>
                <h1 className='font-glacial-r'>{slideData.title}</h1>
                <p className='font-glacial-r'>{slideData.description}</p>
              </div> */}
              <img src={slideData.image} data-swiper-parallax="-100%" data-swiper-parallax-scale="1.4" alt={slideData.title} />
              <div className="slide-details">
                <h4 className='font-glacial-r' data-swiper-parallax="-100">{slideData.category}</h4>
                <h1 className='font-glacial-r' data-swiper-parallax="-200">{slideData.title}</h1>
                <p className='font-glacial-r' data-swiper-parallax="-300">{slideData.description}</p>
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