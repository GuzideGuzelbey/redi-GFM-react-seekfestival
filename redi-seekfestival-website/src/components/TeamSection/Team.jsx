import React from "react";
import Title from "../TitleContainer/Title.jsx";
import Description from "./Description.jsx";
import TeamCard from "./TeamCard.jsx";
import teamDescription from "../../TeamDescription.json";
import teamMembers from "../../TeamMembers.json";
import "./Team.css";

const Team = () => {
  return (
    <div className="outer-team-container">
      <div className="team-title-container">
        <Title text="OUR LOVELY TEAM" className="team-title" />
      </div>
      <Description description={teamDescription.description} />
      <div className="team-card-container">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
