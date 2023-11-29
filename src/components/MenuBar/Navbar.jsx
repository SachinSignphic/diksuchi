import React, { useLayoutEffect, useRef, useState } from 'react';
import './Navbar.css';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
// import useBlobity from 'blobity/lib/react/useBlobity';
import SplitType from 'split-type';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openLeft, setOpenLeft] = useState(false)
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

    const tl = gsap.timeline();
    tl.fromTo(menuBarRef.current, { yPercent: -100, duration: 2, ease: "expo.inOut" }, { yPercent: 45 })

    return () => tl.revert();
  }, []);

  useLayoutEffect(() => {
    const menuContext = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.4 } })
      const selector = gsap.utils.selector(menuItemsRef.current)
      if (openLeft) {
        tl
          .set(menuWrapperRef.current, { autoAlpha: 1 })
          .from(menuStripsRef.current.children, { xPercent: -100, stagger: 0.25 })
          .from(selector("a"), { y: "100vh", opacity: 0, stagger: 0.2 })
      } else {
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
      const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power1.inOut" } })
      const items = [closeBtn.current, getInTouch.current, email.current, message.current, submitBtn.current]
      if (openMenu) {
        // console.log("opening")
        tl
        .from(contactFormWrapper.current, { xPercent: 100 })
        .fromTo(contactFormWrapper.current, { autoAlpha: 0 },  { autoAlpha: 1 })
        .from(contactForm.current, { xPercent: 100 })
        .from(items, { opacity: 0, yPercent: 100, stagger: 0.2 })
      } else {
          // console.log("closing")
          tl
          .to(items, { opacity: 0, yPercent: 100, stagger: 0.2 })
          .to(contactForm.current, { xPercent: 100 })
          .fromTo(contactFormWrapper.current, { autoAlpha: 1 },  { autoAlpha: 0 })
          .to(contactFormWrapper.current, { xPercent: 100 })
      }
    })

    return () => contactFormContext.revert()
  }, [openMenu])

  return (
    <>
      <div className='menu-nav' ref={menuBarRef}>
        <div className="menu-icon" data-no-blobity data-blobity-tooltip="≡menu" onClick={() => setOpenLeft(true)}>
            <span className="menu-line"></span>
            <span className="menu-line short"></span>
          </div>
          <Link to={"#"} data-blobity-magnetic="false" data-no-blobity data-blobity-tooltip="◂open" onClick={() => setOpenMenu(true)} className='contact-btn font-glacial-r'>+ Contact</Link>
      </div>
      <div className='contact-form-wrapper' ref={contactFormWrapper}>
        <div className="contact-form" ref={contactForm}>
            <button ref={closeBtn} data-blobity-magnetic="false" data-blobity-tooltip="close▸" onClick={() => setOpenMenu(false)}>
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
      <div className="menu-wrapper" ref={menuWrapperRef}>
        <div className="strips-container" ref={menuStripsRef}>
          <div className="menu-strip"></div>
          <div className="menu-strip"></div>
          <div className="menu-strip"></div>
          <div className="menu-strip"></div>
        </div>
        <button data-blobity-magnetic="false" onClick={() => setOpenLeft(false)} data-blobity-tooltip="close▸">
          <span></span>
          <span></span>
        </button>
        <ul className="menu-items" ref={menuItemsRef}>
          <li>
            <Link to="/" data-no-blobity className='font-glacial-b'>HOME</Link>
          </li>
          <li>
            <Link to="/architecture" data-no-blobity className='font-glacial-b'>ARCHITECTURE</Link>
          </li>
          <li>
            <Link to="/interiors" data-no-blobity className='font-glacial-b'>INTERIORS</Link>
          </li>
          <li>
            <Link to="/gallery" data-no-blobity className='font-glacial-b'>GALLERY</Link>
          </li>
          <li>
            <Link to="/about" data-no-blobity className='font-glacial-b'>ABOUT</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar