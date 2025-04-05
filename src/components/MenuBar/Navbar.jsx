import React, { useLayoutEffect, useRef, useState } from 'react';
import './Navbar.css';
import './Navbar-mobile.css';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
// import useBlobity from 'blobity/lib/react/useBlobity';
import { Socials } from '../'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState({
    toggle: false,
    initial: true
  })
  const [openLeft, setOpenLeft] = useState({
    toggle: false,
    initial: true
  })
  const menuBarRef = useRef();
  const contactFormWrapper = useRef()
  const contactForm = useRef()
  const closeBtn = useRef()
  const getInTouch = useRef()
  const email = useRef()
  const message = useRef()
  const submitBtn = useRef()
  const menuItemsRef = useRef()
  const menuWrapperRef = useRef()
  const menuStripsRef = useRef()

  useLayoutEffect(() => {
    const menuAnim = gsap.context(() => {
      const tl1 = gsap.timeline();
      tl1.set(menuBarRef.current, { yPercent: 45 })
      // tl1.fromTo(menuBarRef.current, { yPercent: -100, duration: 2, ease: "expo.inOut" }, { yPercent: 45 })
      
      // const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power1.inOut" } })
      // if (openMenu.initial) {
      //   tl.set(contactFormWrapper.current, { autoAlpha: 0 })
      //   tl.set(contactForm.current, { autoAlpha: 0 })
      //   setOpenMenu({ ...openMenu, initial: false })
      // }

    })

    return () => menuAnim.revert();
  }, []);
  
  useLayoutEffect(() => {
    const menuContext = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.4 } })
      const selector = gsap.utils.selector(menuItemsRef.current)
      console.log("openLeft usfct", openLeft)
      if (openLeft.initial) {
        console.log("initial run")
        tl
          .set(selector('a'), { autoAlpha: 0 })
          .to(menuStripsRef.current.children, { xPercent: -100, stagger: 0.35, delay: 0.7 })
          .set(menuWrapperRef.current, { autoAlpha: 0 })
      } else if (openLeft.toggle) {
        tl
          .set(menuWrapperRef.current, { autoAlpha: 1 })
          .from(menuStripsRef.current.children, { xPercent: -100, stagger: 0.25 })
          .from(selector("a"), { y: "100vh", opacity: 0, stagger: 0.2 })
      } else if (!openLeft.toggle && !openLeft.initial) {
        tl
          .to(selector("a"), { y: "100vh", opacity: 0, stagger: 0.2 })
          .to(menuStripsRef.current.children, { xPercent: -100, stagger: 0.25 })
          .set(menuWrapperRef.current, { autoAlpha: 0 })
      }
    })
    
    return () => menuContext.revert()
  }, [openLeft])
  
  useLayoutEffect(() => {
    const contactFormContext = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power1.inOut" } })
      const items = [closeBtn.current, getInTouch.current, contactForm.current.querySelector('input'), contactForm.current.querySelector('textarea'), email.current, message.current, submitBtn.current]

      if (openMenu.initial) {
        tl.set(contactFormWrapper.current, { autoAlpha: 0 })
        tl.set(contactForm.current, { autoAlpha: 0 })

      } else if (openMenu.toggle) {
        tl
        // .set(contactFormWrapper.current, { zIndex: 1000 })
          .fromTo(contactFormWrapper.current, { autoAlpha: 0 }, { autoAlpha: 1 })
          .set(contactForm.current, { autoAlpha: 1, xPercent: 100 })
          .from(contactForm.current, { xPercent: 100 })
          .from(items, { opacity: 0, yPercent: 100, stagger: 0.2 })
      } else if (!openMenu.toggle && !openMenu.initial) {
        // console.log("closing")
        tl
          .to(items, { opacity: 0, yPercent: 100, stagger: 0.1 })
          .to(contactForm.current, { xPercent: 100 })
          .set(contactForm.current, { autoAlpha: 0, xPercent: 0 })
          .fromTo(contactFormWrapper.current, { autoAlpha: 1 }, { autoAlpha: 0 })
          .set(contactFormWrapper.current, { zIndex: -50 })
      }
    })

    return () => contactFormContext.revert()
  }, [openMenu])

  return (
    <>
      <div className='menu-nav' ref={menuBarRef}>
        <div className="menu-icon" data-blobity-magnetic="false" data-blobity-tooltip="≡menu" onClick={() => setOpenLeft({ initial: false, toggle: true })}>
          <span className="menu-line"></span>
          <span className="menu-line short"></span>
        </div>
        <Link to={"#"} id="contact-trigger" data-blobity-magnetic="false" data-no-blobity data-blobity-tooltip="◂open" onClick={() => setOpenMenu({ initial: false, toggle: true })} className='contact-btn font-glacial-r'>+ Contact</Link>
      </div>

      <div className='contact-form-wrapper' ref={contactFormWrapper}>
        <div className="contact-form" ref={contactForm}>
          <button ref={closeBtn} data-blobity-magnetic="false" data-blobity-tooltip="close▸" onClick={() => setOpenMenu({ initial: false, toggle: false })}>
            <span></span>
            <span></span>
          </button>
          <h1 ref={getInTouch} className='font-glacial-r'>GET IN TOUCH</h1>
          <label ref={email} className='font-glacial-r' htmlFor='email'>EMAIL</label>
          <input className='font-glacial-r' type="email" name="email" id="email" />
          <label ref={message} className='font-glacial-r' htmlFor='review'>MESSAGE</label>
          <textarea name="message" className='font-glacial-r' id="review"></textarea>
          <button ref={submitBtn} data-blobity-magnetic="false" data-no-blobity className='font-glacial-r'>
            SUBMIT
          </button>
          {/* <Socials /> */}
          {/* <div className="socials-wtf">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div> */}
        </div>
      </div>

      <div className="menu-wrapper" ref={menuWrapperRef}>
        <div className="strips-container" ref={menuStripsRef}>
          <div className="menu-strip"></div>
          <div className="menu-strip"></div>
          <div className="menu-strip"></div>
          <div className="menu-strip"></div>
        </div>
        <button data-blobity-magnetic="false" onClick={() => setOpenLeft({ initial: false, toggle: false })} data-blobity-tooltip="close▸">
          <span></span>
          <span></span>
        </button>
        <ul className="menu-items" ref={menuItemsRef}>
          <li>
            <Link to="/" data-no-blobity className='font-glacial-b'>HOME</Link>
          </li>
          <li>
            <Link to="/about" data-no-blobity className='font-glacial-b'>ABOUT</Link>
          </li>
          <li>
            <Link to="/architecture" data-no-blobity className='font-glacial-b'>ARCHITECTURE</Link>
          </li>
          <li>
            <Link to="/interiors" data-no-blobity className='font-glacial-b'>INTERIORS</Link>
          </li>
          <li>
            <Link to="/ourstudio" data-no-blobity className='font-glacial-b'>OUR STUDIO</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar