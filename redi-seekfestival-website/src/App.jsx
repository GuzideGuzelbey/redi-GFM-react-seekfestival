import React from "react";
import "./App.css";
import PastEvents from "./components/PastEventsSection/PastEvents.jsx";
import Manifest from "./components/ManifestSection/Manifest.jsx";
import ManifestData from "./ManifestData.json";

const App = () => {
  return (
    <>
      <section>
        <Manifest text={ManifestData.manifestdescription} />
      </section>
      <section>
        <PastEvents />
      </section>
    </>
  );
};

export default App;
