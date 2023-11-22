import { useLayoutEffect, useState } from "react";
import { Navbar, HeroSection, Loader, Menu, Socials, ProjectChoice, HeroHeading, SwirlingSection, ScrollIndicator, HeroSlider } from "../components";
import './Home.css';
import { gsap } from "gsap";

const Home = () => {
    const [hasLoaded, setHasLoaded] = useState(true);
    const [timeline, setTimeline] = useState(null);

    console.log('hasloaded: so it re-renders?', hasLoaded);

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
                            {/* <Model3D beginAnim={hasLoaded} /> */}
                            <HeroSlider />
                            <Navbar />
                            <ScrollIndicator />
                            {/* <Menu />  */}
                            {/* ipodhiku menu ah inga vei.. but it should acutally come at the top after adding button and all */}
                            {/* <Socials /> */}
                        </HeroSection>
                        <ProjectChoice />
                        <SwirlingSection />
                    </>
                )
            }
        </>
    )
}

export default Home