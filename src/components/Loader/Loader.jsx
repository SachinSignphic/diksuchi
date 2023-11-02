import { useEffect, useRef } from 'react'
import './Loaders.css'
import { progressBarAnimation } from './animation';

const Loader = ({ timeline, setState }) => {
    const loadingPercentRef = useRef(); // use soon for numbering
    const loadingTitleRef = useRef();
    const loadingSideHRRef = useRef();

    useEffect(() => {
        // Use the timeline prop to create the timeline in the Loader component
        timeline && timeline.add(progressBarAnimation(
            loadingProgressRef,
            loadingPercentRef,
            loadingTitleRef,
            loadingBarRef,
            loadingSideHRRef,
            setState
        ));
    }, [timeline]);

    return (
        <div className='loading-screen'>
            <div className="loading-title-container">
                <hr className="loading-hr" ref={loadingSideHRRef} />
                <div className="title-container">
                    <h1 className='font-glacial-r loading-title' ref={loadingTitleRef}>DIKSUCHI</h1>
                    <h1 className='font-glacial-r loading-subtitle'>DESIGN STUDIO</h1>
                </div>
                {/* <hr className="loading-hr" ref={loadingSideHRRef} /> */}
            </div>
            {/* <div className="loading-progress-wrapper" ref={loadingProgressRef}>
                <h3 className="loading-percent font-glacial-r" ref={loadingPercentRef} >0</h3>
                <hr className="loading-bar" ref={loadingBarRef} />
            </div> */}
        </div>
    )
}

export default Loader