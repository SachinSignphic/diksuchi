import { useLayoutEffect, useState } from "react";
import { Navbar, HeroSection, Loader, Menu, Socials, ProjectChoice, HeroHeading, SwirlingSection, ScrollIndicator, Model3D } from "../components";
import './Home.css';
import { gsap } from "gsap";

const Home = () => {
    const [hasLoaded, setHasLoaded] = useState(true);
    const [timeline, setTimeline] = useState(null);

    console.log('hasloaded', hasLoaded);
    console.log('new timeline is', timeline);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline();
            setTimeline(tl);
        });

        return () => context.revert();
    }, []);

    return (
        <>
            {!hasLoaded ? (
                <Loader timeline={timeline} setState={setHasLoaded} />
            ) : (
                <>
                    <HeroSection>
                        <ScrollIndicator />
                        <Navbar />
                        {/* <Menu />  */}
                        {/* ipodhiku menu ah inga vei.. but it should acutally come at the top after adding button and all */}
                        <Socials />
                        <Model3D />
                    </HeroSection>
                    <ProjectChoice />
                    <SwirlingSection />
                </>
            )}
        </>
    );
};

export default Home