import "./About.css";
import Title from "../TitleContainer/Title.jsx";
import titles from "../../titles.json";
import aboutData from "../../aboutData.json";
import timelineAbout from "../../timelineAbout.json";

const About = () => {
  const sectionTitles = titles[0];
  const { introText, highlightText, questionText } = aboutData;

  return (
    <div className="container-about">
      <div className="title-container">
        <Title text={sectionTitles.about} className="about-title" />
      </div>
      <p className="intro-text-about">{introText}</p>
      <p className="highlight">{highlightText}</p>
      <p className="question" style={{ color: "#FE8A17", fontWeight: "bold" }}>
        {questionText}
      </p>
      <ul className="timeline">
        {timelineAbout.map((item, index) => (
          <li
            key={index}
            className={`timeline-item ${
              item.reverse ? "timeline-inverted" : ""
            }`}
          >
            <div className="timeline-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className={`timeline-panel${item.reverse ? "-reverse" : ""}`}>
              <div className="timeline-heading">
                <h4>{item.year}</h4>
                <h4 className="subheading">{item.title}</h4>
              </div>
              <div className="timeline-body">
                <p>{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
