import gsap from "gsap";

export const progressBarAnimation =  (loadingTitleRef, loadingSideHRRef, loadingScreenRef, setState) => {
    const tl = gsap.timeline();

    tl.to(loadingTitleRef.current, { backgroundPositionX: "100px", duration: 2, repeat: -1, ease: "linear" }, "<");
    // tl.fromTo(loadingProgressRef.current, { width: 0 } , { width: "100%", duration: 6, ease: "power3.inOut" });
    tl.fromTo(loadingSideHRRef.current, { width: 0 }, { width: "100%", duration: 5, ease: "power3.inOut" }, "<");
    // tl.to(loadingPercentRef.current, { textContent: "100", duration: 6, roundProps: "textContent", ease: "power3.inOut" }, "<" );
    tl.to(loadingSideHRRef.current, { transform: `scaleX(2) scaleY(${window.innerWidth})`, ease: "expo.inOut", duration: 2 });
    tl.to(loadingScreenRef.current, { opacity: 0, ease: "expo.inOut", duration: 2, onComplete: () => setState(true) });
    
    return tl;
}