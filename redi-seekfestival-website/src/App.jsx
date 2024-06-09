import React from "react";
import PastEvents from "./components/PastEventsSection/PastEvents.jsx";
import About from "./components/AboutSection/About";
import Manifest from "./components/ManifestSection/Manifest.jsx";
import ManifestData from "./ManifestData.json";
import Team from "./components/TeamSection/Team.jsx";
import Banner from "./components/BannerSection/Banner";
import Footer from "./components/FooterSection/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import UpButton from "./components/GoUpButton/UpButton.jsx";
const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <Banner />
      </section>
      <section id="manifest">
        <Manifest text={ManifestData.manifestdescription} />
      </section>
      <section id="past-events">
        <PastEvents />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="team">
        <Team />
      </section>
      <footer id="contact">
        <Footer />
      </footer>
      <UpButton />
    </>
  );
};

export default App;
