import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./TeamCard.css";

const iconMap = {
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebook,
};

const TeamCard = ({ photo, name, role, socialMedia }) => {
  const renderSocialMediaIcons = () => {
    return Object.keys(socialMedia).map((platform) => {
      const IconComponent = iconMap[platform];
      return (
        <a
          key={platform}
          href={socialMedia[platform]}
          className="social-media-icon"
          target="_blank"
        >
          <IconComponent />
        </a>
      );
    });
  };

  return (
    <div className="team-card">
      <img src={photo} alt={`${name}'s photo`} className="team-photo" />
      <div className="team-info-container">
        <div className="team-name">{name}</div>
        <div className="team-role">{role}</div>
        <div className="social-media-icons">{renderSocialMediaIcons()}</div>
      </div>
    </div>
  );
};

export default TeamCard;
