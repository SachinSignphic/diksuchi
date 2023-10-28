import gsap from "gsap";

export const progressBarAnimation = (loadingProgressRef, loadingPercentRef, loadingTitleRef, loadingBarRef, setState) => {
    const tl = gsap.timeline();

    tl.to(loadingTitleRef.current, { backgroundPositionX: "100px", duration: 2, repeat: -1, ease: "linear" }, "<");
    tl.fromTo(loadingProgressRef.current, { width: 0 } , { width: "100%", duration: 6, ease: "power3.inOut" });
    tl.to(loadingPercentRef.current, { textContent: "100", duration: 6, roundProps: "textContent", ease: "power3.inOut" }, "<" );
    tl.to(loadingBarRef.current, { transform: `scale(2, ${window.innerHeight*1.5}) translateY(-0.25px)`, ease: "expo.inOut", duration: 2, onComplete: () => setState(true) });
    
    return tl;
}