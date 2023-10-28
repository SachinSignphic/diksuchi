import { useLayoutEffect, useRef } from 'react'
import './Loaders.css'
import gsap from 'gsap'
import { progressBarAnimation } from './animation';

const Loader = () => {
    const loadingProgressRef = useRef();
    const loadingPercentRef = useRef();
    const loadingTitleRef = useRef();
    const loadingBarRef = useRef();

    useLayoutEffect(() => {
        const timeline = gsap.timeline();

        timeline.add(progressBarAnimation(loadingProgressRef, loadingPercentRef, loadingTitleRef, loadingBarRef));
        // timeline.to(loadingBarRef.current, { opacity: 0 });
    }, []);

    return (
        <div className='loading-screen'>
            <h1 className='font-pearl loading-title' ref={loadingTitleRef}>DIKSUCHI</h1>
            <h1 className='font-glacial-r loading-subtitle'>CONSTRUCTIONS</h1>
            <div className="loading-progress-wrapper" ref={loadingProgressRef}>
                <h3 className="loading-percent font-glacial-r" ref={loadingPercentRef} >0</h3>
                <hr className="loading-bar" ref={loadingBarRef} />
            </div>
        </div>
    )
}

export default Loader