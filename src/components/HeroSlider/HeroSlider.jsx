import './HeroSlider.css'
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { useState, useRef, useEffect } from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Scroller from '../Scroller/Scroller'

const HeroSlider = () => {
  const nextButtonRef = useRef()
  const prevButtonRef = useRef()
  const [thumbSwiper, setThumbSwiper] = useState(null)

  return (
    (
      navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    )?
    <>
    </>:
    
    <HeroSection>
      <div className='left-side'>
      <div className='design'></div>
        <div className='logo_pc'>
          <img src='./Frame 116 (1).png'/>
        </div>
        <div className='design2'></div>
        <div className='footer'>
            <p>THE FINEST</p>
            <p>DIKSUCHI@2023</p>
        </div>
      </div>

      <Scroller />
    </HeroSection>
  )
}

export default HeroSlider