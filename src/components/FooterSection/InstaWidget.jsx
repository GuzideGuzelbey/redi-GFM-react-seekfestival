import { useEffect } from "react";
const InstaWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.dataset.useServiceCore = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-e6cdb834-dc3b-48c5-90be-547d1c092ebc"
      data-elfsight-app-lazy
    ></div>
  );
};

export default InstaWidget;
