import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img
            src="/footer-logo.png"
            alt="Diksuchi Design Studio Logo"
            className="footer-logo"
          />
          <p className="footer-address">
            flat no: 2b, klsr towers madhapur,<br />
            telangana, pin code: 500081.
          </p>
          <div className="footer-contact">
            <span className="footer-phone">+91 99666 62421</span>
            <span className="footer-email">diksuchidesignstudio@gmail.com</span>
          </div>
        </div>
        <div className="footer-right">
          <img
            src="/map.png"
            alt="Diksuchi Design Studio Location Map"
            className="footer-map"
          />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
