import React from "react";
import "./App.css";
import PastEvents from "./components/PastEventsSection/PastEvents.jsx";
import About from "./components/AboutSection/About";
import Manifest from "./components/ManifestSection/Manifest.jsx";
import ManifestData from "./ManifestData.json";
import Team from "./components/TeamSection/Team.jsx";
import Banner from "./components/BannerSection/Banner";
//import Footer from "./components/FooterSection/footer.jsx";

const App = () => {
  return (
    <>
      <section>
        <Banner />
      </section>
      <section>
        <Manifest text={ManifestData.manifestdescription} />
      </section>
      <section>
        <PastEvents />
      </section>
      <section id="about">
        <About />
      </section>
      <section>
        <Team />
      </section>
      {/*<Footer />*/}
    </>
  );
};

export default App;
