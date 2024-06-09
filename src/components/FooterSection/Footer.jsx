import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import InstaWidget from "./InstaWidget";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info-container">
        <div className="footer-column-first">
          <h3>Contact Info</h3>
          <p>Angelo Alexander Banister:</p>
          <p>angelobannister@gmail.com</p>
        </div>
        <div className="footer-column-second">
          <h3>Social Media</h3>
          <div className="social-icons-container">
            <div>
              <a href="https://www.facebook.com/SEEKFestival/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/seekfestival/?utm_source=ig_web_button_share_sheet"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-column-third">
          <p>
            <a href="#">Privacy Policy</a>
          </p>
          <p>
            <a href="#">Terms of Use</a>
          </p>
        </div>
      </div>
      <div className="footer-widget-container">
        <InstaWidget />
      </div>
      <div className="footer-copywright-container">Copyright © SEEK 2024</div>
    </div>
  );
};
export default Footer;
