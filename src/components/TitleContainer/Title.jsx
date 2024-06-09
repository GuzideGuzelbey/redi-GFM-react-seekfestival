import "./Title.css";

const Title = ({ text, className = "" }) => {
  return (
    <div className="title-container">
      <h1 className={`title ${className}`}>{text}</h1>
    </div>
  );
};

export default Title;
