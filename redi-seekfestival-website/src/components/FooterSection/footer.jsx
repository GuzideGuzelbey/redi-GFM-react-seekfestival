// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-column">
                <h3>Contact Info</h3>
                <ul>
                    <p>Angelo Alexander Banister:</p>
                    <p>angelobannister@gmail.com</p>
                    <p>99009900</p>

                </ul>
            </div>
            <div className="footer-column">
                <p><a href='#'>Privacy Policy</a></p>
                <p><a href='#'>Terms of Use</a></p>

            </div>
            <div className="footer-column">
                <h3>Social Media</h3>

                <p><a href='https://www.facebook.com/SEEKFestival/' target="_blank" rel='noopener noreferrer'>Facebook</a></p>
                <p><a href='https://www.instagram.com/seekfestival/?utm_source=ig_web_button_share_sheet'>Instagram</a></p>

            </div>
        </div>

    );
};

export default Footer;
