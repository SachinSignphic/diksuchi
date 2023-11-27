import React, { useLayoutEffect, useRef, useState } from 'react';
import './Navbar.css';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menuBarRef = useRef();
  const contactFormWrapper = useRef()
  const contactForm = useRef()
  const closeBtn = useRef()
  const getInTouch = useRef()
  const email = useRef()
  const message = useRef()
  const submitBtn = useRef()

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(menuBarRef.current, { yPercent: -100, duration: 2, ease: "expo.inOut" }, { yPercent: 45 })

    return () => tl.revert();
  }, []);

  useLayoutEffect(() => {
    console.log("contact form toggled?", openMenu)
    const contactFormContext = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power1.inOut" } })
      const items = [closeBtn.current, getInTouch.current, email.current, message.current, submitBtn.current]
      if (openMenu) {
        tl
          .from(contactFormWrapper.current, { xPercent: 100 })
          .fromTo(contactFormWrapper.current, { autoAlpha: 0 },  { autoAlpha: 1 })
          .from(items, { opacity: 0, yPercent: 100, stagger: 0.2 })
        } else {
          tl
          .to(items, { opacity: 0, yPercent: 100, stagger: 0.2 })
          .fromTo(contactFormWrapper.current, { autoAlpha: 1 },  { autoAlpha: 0 })
          .to(contactFormWrapper.current, { xPercent: 100 })
      }
    })

    return () => contactFormContext.revert()
  }, [openMenu])

  return (
    <>
      <div className='menu-nav' ref={menuBarRef}>
          <div className="menu-icon">
            <span className="menu-line"></span>
            <span className="menu-line short"></span>
          </div>
          <Link to={"#"} onClick={() => setOpenMenu(!openMenu)} className='contact-btn font-glacial-r'>+ Contact</Link>
      </div>
      <div className='contact-form-wrapper' ref={contactFormWrapper}>
              <div className="contact-form" ref={contactForm}>
                  <button ref={closeBtn} data-blobity-magnetic="false" onClick={() => setOpenMenu(!openMenu)}>
                    <span></span>
                    <span></span>
                  </button>
                  <h1 ref={getInTouch} className='font-glacial-r'>GET IN TOUCH</h1>
                  <label ref={email} className='font-glacial-r' htmlFor='email'>EMAIL</label>
                  <input className='font-glacial-r' type="email" name="email" id="email" />
                  <label ref={message} className='font-glacial-r' htmlFor='review'>MESSAGE</label>
                  <textarea name="message" className='font-glacial-r' id="review"></textarea>
                  <button data-blobity-magnetic="false">
                    <img ref={submitBtn} src="/submit.png" alt="" />
                  </button>
              </div>
      </div>
    </>
  )
}

export default Navbar