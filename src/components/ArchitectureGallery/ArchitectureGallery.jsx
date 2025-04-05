import { useLayoutEffect, useState, useRef } from 'react';
import './ArchitectureGallery.css';
import './ArchitectureGallery-mobile.css';
import gsap from 'gsap';
import architectureProjects from './architectureGalleryData';  // Architecture data
import interiorProjects from './interiorGalleryData';  // Interior data
import { useParams } from 'react-router-dom';

const ArchitectureGallery = ({ type, title, subtitle }) => {
    const { slug } = useParams();  // Get 'slug' from the URL parameter
    const image1 = useRef();
    const image2 = useRef();
    const image3 = useRef();
    const image4 = useRef();
    const image5 = useRef();
    const p1 = useRef();
    const [projectNo, setProjectNo] = useState(0);

    // Decide which data to use based on the 'type' (architecture or interior)
    const data = useRef(type === 'architecture' ? architectureProjects : interiorProjects);

    // Find the current project based on the slug from the URL
    const currentProject = data.current.find(project => project.slug === slug);

    // Default to the first project if not found
    const project = currentProject || data.current[0];

    useLayoutEffect(() => {
        const anim = gsap.context(() => {
            const tl = gsap.timeline();
            const images = [
                image1.current,
                p1.current,
                image2.current,
                image3.current,
                image4.current,
                image5.current,
            ];

            tl.from(images, { x: '-100vw', stagger: 0.1, duration: 1.5, ease: "expo.inOut" });
        });

        return () => anim.revert();
    }, [projectNo]);

    return (
        (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) ? (
            <div className='architecture-wrapper'>
                <div className="architecture-title-wrapper">
                    <h1 className='font-glacial-r'>{project.title}</h1>
                    <h2 className='font-glacial-r'>{project.subtitle}</h2>
                </div>
                <div className="title-image-container">
                    <img loading="lazy" ref={image1} src={`/${type}/${project.slug}/${project.prefix}5.webp`} alt='' />
                    <p className="font-glacial-r" ref={p1}>{project.title}</p>
                </div>
                <div className="first-image" ref={image2}>
                    <img loading="lazy" src={`/${type}/${project.slug}/${project.prefix}1.webp`} alt='' />
                    <p className="font-glacial-r">{project.description}</p>
                </div>
                <div className="second-image" ref={image3}>
                    <img loading="lazy" src={`/${type}/${project.slug}/${project.prefix}2.webp`} alt='' />
                </div>
                <div className="third-image" ref={image4}>
                    <img loading="lazy" src={`/${type}/${project.slug}/${project.prefix}3.webp`} alt='' />
                </div>
                <div className="fourth-image" ref={image5}>
                    <img loading="lazy" src={`/${type}/${project.slug}/${project.prefix}4.webp`} alt='' />
                    <p className="font-glacial-r">{project.location}</p>
                </div>
            </div>
        ) : (
            <div className='architecture-wrapper'>
                <div className="architecture-title-wrapper">
                    <h1 className='font-glacial-r'>{project.title}</h1>
                    <h2 className='font-glacial-r'>{project.subtitle}</h2>
                </div>
                <div className="architecture-images">
                    <div className="left-images">
                        <div className="small-big-container">
                            <div className="image-1">
                                <img loading="lazy" src={`/${type}/${project.slug}/${project.prefix}1.webp`} alt='' ref={image4} />
                            </div>
                            <div className="image-2">
                                <img loading="lazy" src={`/${type}/${project.slug}/${project.prefix}2.webp`} alt="" ref={image5} />
                            </div>
                        </div>
                        <div className="modern-container" ref={image3}>
                            <h1 className='font-glacial-r'>{project.title}</h1>
                            <div className="image-3">
                                <img loading="lazy" src={`/${type}/${project.slug}/${project.prefix}3.webp`} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="right-images">
                        <div className="text-and-image">
                            <p className='font-glacial-r' ref={p1}>{project.description}</p>
                            <div className='little-container' ref={image1}>
                                <div className="image-4">
                                    <img loading="lazy" src={`/${type}/${project.slug}/${project.prefix}4.webp`} alt="" />
                                </div>
                                <p className='font-glacial-r'></p>
                            </div>
                        </div>
                        <div className="image-bottom-2" ref={image2}>
                            <div className="image-5">
                                <img loading="lazy" src={`/${type}/${project.slug}/${project.prefix}5.webp`} alt="" />
                            </div>
                            <h1 className='font-glacial-r'>{project.location}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default ArchitectureGallery;
