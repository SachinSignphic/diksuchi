import { gsap } from "gsap";

export const navBarAnimation = (menuBarRef) => {
    const menuBarTimeline = gsap.timeline();

    menuBarTimeline.fromTo(menuBarRef.current,
        { yPercent: -150 },
        { yPercent: 20, ease: "expo.inOut", duration: 2 }
    );
    
    return menuBarTimeline;
}