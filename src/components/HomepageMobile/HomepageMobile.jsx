import { useEffect } from "react";
import "./HomepageMobile.css"; // Assuming styles are in a separate CSS file
import {Link} from 'react-router-dom';
const HomepageMobile = () => {
  useEffect(() => {
    const initSwiper = (selector, speed, reverse = false) => {
      const swiper = document.querySelector(selector);
      if (!swiper) return;

      let position = reverse ? swiper.scrollWidth / 2 : 0;

      // Duplicate items for infinite scrolling effect
      const items = Array.from(swiper.children);
      items.forEach((item) => {
        let clone = item.cloneNode(true);
        swiper.appendChild(clone);
      });

      const step = () => {
        position += reverse ? -speed : speed;
        if (reverse ? position <= 0 : position >= swiper.scrollWidth / 2) {
          position = reverse ? swiper.scrollWidth / 2 : 0;
        }
        swiper.scrollLeft = position;
        requestAnimationFrame(step);
      };

      step();
    };

    initSwiper(".swiper_mobile", 0.7);
    initSwiper(".swiper1_mobile", 0.7);
    initSwiper(".swiper2_mobile", 0.7, true);
  }, []);

  return (
    <body>
      <div className="header1_mobile">
        <img src="/Frame 116.png" className="logo_mobile" alt="Logo" />
      </div>
      <div className="footer2_mobile">
        <p className="left_mobile">THE FINEST</p>
        <p className="right_mobile">DIKSUCHI@2023</p>
      </div>
      <div className="swiper_mobile">
        <div className="item1_mobile"></div>
        <div className="item2_mobile"></div>
        <div className="item3_mobile"></div>
        <div className="item4_mobile"></div>
        <div className="item5_mobile"></div>
      </div>
    <Link to="/architecture" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="arch_mobile">
            <div className="inner_mobile">
            <div className="image_mobile"></div>
            <div className="title_mobile">
                <p>ARCHITECTURE</p>
            </div>
        </div>
        </div>
    </Link>
    <Link to="/interiors" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="intr_mobile">
        <div className="inner_mobile">
          <div className="image_mobile"></div>
          <div className="title_mobile">
            <p>INTERIOR</p>
          </div>
        </div>
      </div>
    </Link>
      <div className="studio_mobile">
        <div className="top_mobile">
          <h1>OUR<br />STUDIO.</h1>
          <p>DIKSUCHI</p>
        </div>
        <div className="bottom_mobile">
          <p>
            DIKSUCHI. A LEADING ARCHITECTURAL POWERHOUSE. TAKES ITS NAME FROM THE COMPASS-A TOOL SYNONYMOUS WITH ORIENTATION AND NAVIGATION.
          </p>
        </div>
      </div>
      <div className="swiper1_mobile">
        <div className="items1_mobile"></div>
        <div className="items2_mobile"></div>
        <div className="items3_mobile"></div>
        <div className="items4_mobile"></div>
        <div className="items5_mobile"></div>
        <div className="items6_mobile"></div>
        <div className="items7_mobile"></div>
      </div>
      <div className="studio_mobile">
      <Link to="/ourstudio" style={{ textDecoration: "none", color: "inherit" }}>
        <button>
          STUDIO<img src="/arrow3.png" alt="Arrow" />
        </button>
      </Link>
      </div>
      <div className="social_mobile">
        <div className="social_links_mobile">
          <a href="https://www.instagram.com/diksuchidesignstudio/" className="insta_mobile"></a>
          <div className="line_mobile"></div>
          <a className="x_mobile"></a>
        </div>
        <div className="owner_mobile"></div>
      </div>
      <div className="about_mobile">
        <h1>ABOUT OUR <span>FOUNDER.</span></h1>
        <p>
          Experience the captivating blend of creativity and functionality at Diksuchi Design Studio in Hyderabad. Led by our Chief Architect with a B.Arch from C.S.I.I.T and an M.Arch from Bharati Vidyapeeth Pune, we specialize in sustainable architecture, exemplified by projects like the eco-conscious P House. Join us for a transformative journey where we harmonize human spaces with the environment.
        </p>
      </div>
      <div className="contact_mobile">
      <button onClick={() => { const contactTrigger = document.getElementById("contact-trigger"); if (contactTrigger) contactTrigger.click();}} data-blobity-magnetic="false" data-no-blobity className="font-glacial-r">CONTACT<img src="/arrow3.png" alt="Arrow" /></button>  
      </div>
      <div className="swiper2_mobile">
        <div className="item1_mobile"></div>
        <div className="item2_mobile"></div>
        <div className="item3_mobile"></div>
        <div className="item4_mobile"></div>
        <div className="item5_mobile"></div>
      </div>
      <div className="end_mobile">
        <img src="/Frame 116.png" alt="Logo" />
        <p>FLAT NO: 2B, KLSR TOWERS<br />MADHAPUR, TELANGANA,<br />PIN CODE: 500081.</p>
        <p>91 99666 6221</p>
        <p><u>diksuchidesignstudio@gmail.com</u></p>
      </div>
      <p className="credits_mobile">DIKSUCHI@2023</p>
    </body>
  );
};

export default HomepageMobile;
