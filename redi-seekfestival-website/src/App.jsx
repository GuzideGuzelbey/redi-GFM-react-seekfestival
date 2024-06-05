import React from "react";
import "./App.css";
import PastEvents from "./components/PastEventsSection/PastEvents.jsx";
import Manifest from "./components/ManifestSection/Manifest.jsx";
import ManifestData from "./ManifestData.json";
import Footer from "./components/FooterSection/footer.jsx";

const App = () => {
  return (
    <>
      <section className="manifest-class">
        <Manifest text={ManifestData.manifestdescription} />
      </section>
      <section>
        <PastEvents className="pastevents-class" />
      </section>
      <Footer />
    </>
  );
};

export default App;
