import "./FooterMobile.css";

const FooterMobile = () => {
  return (
    <footer className="footer-mob">
      <div className="footer-container-mob">
        <div className="footer-right-mob">
          <img
            src="/map.png"
            alt="Diksuchi Design Studio Location Map"
            className="footer-map-mob"
          />
        </div>
        <div className="footer-left-mob">
          <img
            src="/footer-logo.png"
            alt="Diksuchi Design Studio Logo"
            className="footer-logo-mob"
          />
          <p className="footer-address-mob">
            flat no: 2b, klsr towers madhapur,<br />
            telangana, pin code: 500081.
          </p>
          <div className="footer-contact-mob">
            <span className="footer-phone-mob">+91 99666 62421</span>
            <span className="footer-email-mob">diksuchidesignstudio@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
