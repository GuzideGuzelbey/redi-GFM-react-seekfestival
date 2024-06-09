import React from "react";
import Title from "../TitleContainer/Title.jsx";
import Description from "./Description.jsx";
import TeamCard from "./TeamCard.jsx";
import teamDescription from "../../TeamDescription.json";
import teamMembers from "../../TeamMembers.json";
import titles from "../../titles.json";
import "./Team.css";

const Team = () => {
  const SectionTitles = titles[0];
  return (
    <div className="outer-team-container">
      <div className="team-title-container">
        <Title text={SectionTitles.team} className="team-title" />
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
