import './InteriorList.css';
import './InteriorList-mobile.css';
import { Link } from 'react-router-dom';
import interiorGalleryData from '../ArchitectureGallery/interiorGalleryData';
import imageData from '../InteriorList/imageData';
import { useEffect, useState } from 'react';

const InteriorList = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // adjust as needed
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <div className="wrapper_mobile">
            <h1>INTERIORS</h1>
            <h3>ELEGANT INTERIORS</h3>
          </div>
          {interiorGalleryData.map((item, index) => (
            <Link
              to={`/interiors/${item.slug}`}
              key={item.slug}
              className="card_mobile"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  backgroundImage: `url(${imageData[index + 7]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "55%",
                  width: "100%",
                  borderRadius: "5%",
                }}
              ></div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          ))}
        </>
      ) : (
        <>
          <div className="wrapper">
            <h1>INTERIORS</h1>
            <h2>ELEGANT INTERIORS</h2>
          </div>
          {interiorGalleryData.map((item, index) => (
            <Link
              to={`/interiors/${item.slug}`}
              key={item.slug}
              className={index % 2 === 0 ? "card1" : "card2"}
              data-blobity-tooltip="visit ↗"
              data-blobity-magnetic="false"
              data-no-blobity
            >
              {index % 2 === 0 && <img src={imageData[index + 7]} alt="" />}
              <div className={index % 2 === 0 ? "grad1" : "grad2"}>
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
              {index % 2 !== 0 && <img src={imageData[index + 7]} alt="" />}
            </Link>
          ))}
          <div className="footerp"></div>
        </>
      )}
    </>
  );
};

export default InteriorList;


