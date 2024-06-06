import React from "react";
import "./App.css";
import PastEvents from "./components/PastEventsSection/PastEvents.jsx";
import Manifest from "./components/ManifestSection/Manifest.jsx";
import ManifestData from "./ManifestData.json";
import Banner from "./components/BannerSection/Banner";

const App = () => {
  return (
    <>
      <section>
        <Banner />
      </section>
      <section className="manifest-class">
        <Manifest text={ManifestData.manifestdescription} />
      </section>
      <section>
        <PastEvents className="pastevents-class" />
      </section>
    </>
  );
};

export default App;
