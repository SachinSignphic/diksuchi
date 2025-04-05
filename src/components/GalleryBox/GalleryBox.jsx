import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import './GalleryBox.css';
import './GalleryBox-mobile.css';
import gsap from 'gsap';

const GalleryBox = () => {
    const galleryBoxRef = useRef();
    const galleryModalRef = useRef();

    const [modalOpen, setModalOpen] = useState(false);
    const imageToOpenURL = useRef('');
    const initial = useRef(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleModalOpen = (e) => {
        imageToOpenURL.current = e.target.src;
        setModalOpen(!modalOpen);
    };

    useLayoutEffect(() => {
        const imagesInGallery = galleryBoxRef.current?.querySelectorAll("img") || [];

        imagesInGallery.forEach(image => {
            image.addEventListener("click", toggleModalOpen);
        });

        return () => imagesInGallery.forEach(image => image.removeEventListener("click", toggleModalOpen));
    }, []);

    useLayoutEffect(() => {
        if (!galleryModalRef.current) return;

        const modalContext = gsap.context(() => {
            const tl = gsap.timeline();

            if (initial.current) {
                initial.current = false;
                tl.set(galleryModalRef.current, { autoAlpha: 0 });
                return;
            }

            if (modalOpen) {
                tl.from(galleryModalRef.current, { autoAlpha: 0 });
            } else {
                tl.to(galleryModalRef.current, { autoAlpha: 0 });
            }
        });

        return () => modalContext.revert();
    }, [modalOpen]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) {
            const swiper = document.querySelector(".swiper1_mob");
            let speed = 0.7;
            let position = 0;

            function duplicateItems() {
                const items = Array.from(swiper.children);
                items.forEach(item => {
                    let clone = item.cloneNode(true);
                    swiper.appendChild(clone);
                });
            }

            function startScrolling() {
                function step() {
                    position += speed;
                    if (position >= swiper.scrollWidth / 2) {
                        position = 0;
                    }
                    swiper.scrollLeft = position;
                    requestAnimationFrame(step);
                }
                step();
            }

            duplicateItems();
            startScrolling();
        }
    }, [isMobile]);

    if (isMobile) {
        return (
            <div className="gallery-box-mobile" ref={galleryBoxRef}>
                <div className="studio_mob">
                    <div className="top_mob">
                        <h1>OUR<br />STUDIO.</h1>
                        <p>DIKSUCHI</p>
                    </div>
                </div>
                <div className="swiper1_mob">
                    <div className="items1_mob"></div>
                    <div className="items2_mob"></div>
                    <div className="items3_mob"></div>
                    <div className="items4_mob"></div>
                    <div className="items5_mob"></div>
                    <div className="items6_mob"></div>
                    <div className="items7_mob"></div>
                </div>
                <p className="p1_mob">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p className="p1_mob">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                <div className="main-img_mob">
                    <img src="/slider-1.webp" alt="Studio" />
                </div>
                <div className="end_mob">
                    <img src="/Frame 116.png" alt="Logo" />
                    <p>FLAT NO: 2B, KLSR TOWERS<br />MADHAPUR, TELANGANA,<br />PIN CODE: 500081.</p>
                    <p>91 99666 6221</p>
                    <p><u>diksuchidesignstudio@gmail.com</u></p>
                </div>
                <p className="credits_mob">DIKSUCHI@2023</p>
            </div>
        );
    }

    return (
        <>
            <div className="gallery-modal" ref={galleryModalRef}>
                <button data-blobity-magnetic="false" data-blobity-tooltip='close' onClick={toggleModalOpen}>
                    <span></span><span></span>
                </button>
                {imageToOpenURL.current && <img src={imageToOpenURL.current} alt="zoomed" />}
            </div>

            <div className="gallery-box" ref={galleryBoxRef}>
                <div className="gallery-title">
                    <h1 className='font-glacial-r'>OUR STUDIO</h1>
                    <h3 className='font-glacial-r'>WORK PARADISE</h3>
                </div>
                <div className="content">
                    <div className="content-box1"></div>
                    <div className="content-box"></div>
                    <div className="content-box"></div>
                </div>
                <div className="text-section">
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                </div>
                <div className="footer-box"></div>
            </div>
        </>
    );
};

export default GalleryBox;
