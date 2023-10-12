import React from "react";
import "./bodySection.css";

const BodySection = () => {
  return (
    <div className="body" style={{ width: "100%" }}>
      <div className="self-intro">
        <div>
          {`
          Having fun so far? Let me introduce the author of this website with my pleasure.
          `}
        </div>
        <div>
          {`
          Hi there, I'm Daiwei Hou. You can also call me David if you find "Daiwei" is
          a bit hard to pronouce.(If you really want to know how to pronounce my name, 
          it pronouce similar to 'die way whole'.) 
          `}
        </div>
        <div>
          {`
        I am a Frontend Developer with passion, focusing on React.js. If you have a job opportunity, which I really hope so, please feel free to contact me through both email and cell phone.
        `}
        </div>
      </div>
      <div>Timeline of My Career</div>
      <div className="body-section">
        <div className="timeline-item">
          <div className="timeline-item-title left">
            <img
              alt="University of California, Davis"
              src="/assets/ucdLogo.png"
            />
            <p>2017 Aug </p>
          </div>
          <div>Enrolled in University of California, Davis</div>
          <div>Davis, California, United States</div>
          <span className="circle"></span>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-title right">
            <img
              alt="China Everbright Bank"
              src="/assets/chinaEverbrightBankLogo.png"
            />
            <p>2019 Jan - 2019 Jun</p>
          </div>
          <div>China Everbright Bank </div>
          <div>Harbin, Heilongjiang, China</div>
          <span className="circle"></span>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-title left">
            <img
              alt="China Everbright Bank"
              src="/assets/chinaEverbrightBankLogo.png"
            />
            <p>2020 Feb - 2020 Jul</p>
          </div>
          <div>China Everbright Bank </div>
          <div>Harbin, Heilongjiang, China</div>
          <span className="circle"></span>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-title right">
            <img
              alt="University of California, Davis"
              src="/assets/ucdLogo.png"
            />
            <p>2023 Jun</p>
          </div>
          <div>Graduated from University of California, Davis.</div>
          <div>Davis, California, United States</div>
          <span className="circle"></span>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-title left">
            <img
              alt="Logo of United Software Corporation"
              src="/assets/uscLogo.png"
            />
            <p>2023 May - present</p>
          </div>
          <div>United Software Corporation</div>
          <div>Austin, Texas, United States</div>
          <span className="circle"></span>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
