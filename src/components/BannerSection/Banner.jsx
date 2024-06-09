import "./Banner.css";

const Banner = () => {
  const scrollToManifest = () => {
    const manifestSection = document.getElementById("about");
    manifestSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="banner">
      <button onClick={scrollToManifest}>TELL ME MORE</button>
    </div>
  );
};

export default Banner;
