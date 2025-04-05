import { useEffect, useLayoutEffect, useState } from "react";
import { Navbar, HeroSection, Loader, ProjectChoice, HeroHeading, SwirlingSection, ScrollIndicator, HeroSlider, WordFromFounder, Footer, HomepageMobile } from "../components";
import { gsap } from "gsap";
import { useLenis } from "@studio-freight/react-lenis";

const Home = () => {
    const [hasLoaded, setHasLoaded] = useState(true);
    const [timeline, setTimeline] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {!hasLoaded && <Loader />}
            {
                hasLoaded && (
                    isMobile ?
                    (<>
                    <center>
                    <Navbar />
                    </center>
                    <HomepageMobile /></>) 
                         : (
                        <>
                            <HeroSection>
                                <HeroSlider />
                                <Navbar />
                                {/* <ScrollIndicator height={575} /> */}
                                <HeroHeading />
                            </HeroSection>
                            <ProjectChoice />
                            <SwirlingSection />
                            <WordFromFounder />
                            <Footer />
                        </>
                    )
                )
            }
        </>
    )
}

export default Home
