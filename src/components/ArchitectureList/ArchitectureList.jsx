import './ArchitectureList.css';
import './ArchitectureList-mobile.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import architectureGalleryData from '../ArchitectureGallery/architectureGalleryData';
import imageData from '../ArchitectureList/imageData';

const ArchitectureList = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <>
        <div className="wrapper_mobile">
          <h1>ARCHITECTURE</h1>
          <h3>ASTONISHING DESIGNS</h3>
        </div>

        {architectureGalleryData.map((item, index) => (
          <Link
            to={`/architecture/${item.slug}`}
            key={item.slug}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="card_mobile">
              <div
                className="image_container"
                style={{ backgroundImage: `url(${imageData[index]})` }}
              ></div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </>
    );
  }

  // Desktop layout
  return (
    <>
      <div className="wrapper">
        <h1>ARCHITECTURE</h1>
        <h2>ASTONISHING DESIGN</h2>
      </div>

      {architectureGalleryData.map((item, index) => (
        <Link preventScrollReset data-blobity-tooltip="visit ↗" data-blobity-magnetic="false" data-no-blobity
          to={`/architecture/${item.slug}`}
          key={item.slug}
          className={index % 2 === 0 ? 'card1' : 'card2'}
        >
          {index % 2 === 0 && <img src={imageData[index]} alt="" />}
          <div className={index % 2 === 0 ? 'grad1' : 'grad2'}>
            <div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
          {index % 2 !== 0 && <img src={imageData[index]} alt="" />}
        </Link>
      ))}
      <div className="footerp"></div>
    </>
  );
};

export default ArchitectureList;
