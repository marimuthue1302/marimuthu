import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [scrollPercentage, setscrollPercentage] = useState(0);

  useEffect(() => {
    const handlescroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercentage =
        (scrollY / (documentHeight - windowHeight)) * 100;
      setscrollPercentage(scrollPercentage);
    };
      window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  return (
    <div>
      <div className="progress-container">
        <div
          className="progress-fill"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
