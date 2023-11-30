import { useEffect, useLayoutEffect, useState } from "react";
import { Navbar, HeroSection, Loader, ProjectChoice, HeroHeading, SwirlingSection, ScrollIndicator, HeroSlider, WordFromFounder } from "../components";
import { gsap } from "gsap";
import { useLenis } from "@studio-freight/react-lenis";

const Home = () => {
    const [hasLoaded, setHasLoaded] = useState(true);
    const [timeline, setTimeline] = useState(null);

    const scroller = useLenis()

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline();
            setTimeline(tl);
        });

        return () => context.revert();
    }, []);

    useEffect(() => {
        console.log("detect aachaa")
        if (window.scrollX) window.scrollTo({left: 0, behavior: "instant"})
    }, [window.scrollX])

    return (
        <>
            {!hasLoaded && <Loader timeline={timeline} setState={setHasLoaded} />}
            {
                hasLoaded && (
                    <>
                        <HeroSection>
                            <HeroSlider />
                            <Navbar />
                            <ScrollIndicator />
                            <HeroHeading />
                        </HeroSection>
                        <ProjectChoice />
                        <SwirlingSection />
                        <WordFromFounder />
                    </>
                )
            }
        </>
    )
}

export default Home