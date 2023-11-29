import { useLayoutEffect, useState } from "react";
import { Navbar, HeroSection, Loader, Menu, Socials, ProjectChoice, HeroHeading, SwirlingSection, ScrollIndicator, HeroSlider, WordFromFounder } from "../components";
import { gsap } from "gsap";

const Home = () => {
    const [hasLoaded, setHasLoaded] = useState(true);
    const [timeline, setTimeline] = useState(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline();
            setTimeline(tl);
        });

        return () => context.revert();
    }, []);

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