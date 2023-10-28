import { gsap } from "gsap";

export const menuBarAnimation = (menuBarRef) => {
    const menuBarTimeline = gsap.timeline();

    menuBarTimeline.fromTo(menuBarRef.current,
        { yPercent: -100 },
        { yPercent: 20, ease: "expo.inOut", duration: 2 }
    );
    
    return menuBarTimeline;
}