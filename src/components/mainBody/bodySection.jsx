import React from "react";
import "./bodySection.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoIosSchool } from "react-icons/io";
import { MdWorkHistory } from "react-icons/md";
import { GiBookAura } from "react-icons/gi";
import {
  BsStars,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import starSky from "./staticStarSky.png";
const BodySection = () => {
  return (
    <div
      className="body"
      style={{
        width: "100%",
        backgroundImage: `url(${starSky})`,
      }}
    >
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

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2017 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<IoIosSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Undergraduate Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Davis, CA</h4>
          <img
            src="/assets/ucdLogo.png"
            alt="ucdavis logo"
            style={{
              position: "absolute",
              width: "3rem",
              top: "2rem",
              right: "2rem",
            }}
          />
          <p>
            Enrolled in undergraduate program in University of California, Davis
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(1, 150, 24)", color: "#fff" }}
          date="2019 Jan - 2019 Jun"
          iconStyle={{ background: "rgb(1, 150, 24)", color: "#fff" }}
          icon={<MdWorkHistory />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Harbin, Heilongjiang, China
          </h4>
          <img
            src="/assets/chinaEverbrightBankLogo.png"
            alt="china EverBrightBank logo"
            style={{
              position: "absolute",
              width: "3rem",
              top: "2rem",
              right: "2rem",
            }}
          />
          <p>
            As a software development intern in China EverBright Bank,
            Heilongjiang Branch, my main responsibility was to create webpage,
            style CSS, code Javascript. Assist the development team to test as a
            user to make sure the code flow works well.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 Feb - 2020 Jul"
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<MdWorkHistory />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Development Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Harbin, Heilongjiang, China
          </h4>
          <img
            src="/assets/chinaEverbrightBankLogo.png"
            alt="china EverBrightBank logo"
            style={{
              position: "absolute",
              width: "3rem",
              top: "2rem",
              right: "2rem",
            }}
          />
          <p>
            As a Software Development Intern at China Everbright Bank, I focused
            on frontend development utilizing React to enhance and optimize the
            bank's web applications. I was integral in a team of seasoned
            developers, where I not only honed my technical skills but also
            contributed to designing intuitive and responsive user interfaces.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GiBookAura />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor Degree earned
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Davis, CA</h4>
          <img
            src="/assets/ucdLogo.png"
            alt="ucdavis logo"
            style={{
              position: "absolute",
              width: "3rem",
              top: "2rem",
              right: "2rem",
            }}
          />
          <p>Graduated from University of California, Davis.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 May - present"
          contentStyle={{ background: "rgb(1, 150, 24)", color: "#fff" }}
          iconStyle={{ background: "rgb(1, 150, 24)", color: "#fff" }}
          icon={<MdWorkHistory />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Austin, Texas</h4>
          <img
            src="/assets/uscLogo.png"
            alt="United Software corporation logo"
            style={{
              position: "absolute",
              width: "3rem",
              top: "2rem",
              right: "2rem",
            }}
          />
          <p>
            Working as a frontend developer in United Software Corporation, I
            developed a frontend interface for a company inventory management
            system including implement and designing web page: Profile, Invoice,
            Order, and Invoice. Integrated user and inventory data using
            React.js and MongoDB.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 214, 180)", color: "#fff" }}
          icon={<BsStars />}
        />
      </VerticalTimeline>

      <div className="footer-section">
        <h4>feel free to contact me!</h4>
        <div className="footer-logo-section">
          <a href="https://github.com/dhou47">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/daiwei-hou-a24446203/">
            <BsLinkedin />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100016905728915">
            <BsFacebook />
          </a>
          <a href="https://www.instagram.com/davidhouuidev/">
            <BsInstagram />
          </a>
        </div>
        <div className="footer-text-section">
          <p>{"dhou@ucdavis.edu | 530-219-2018"}</p>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
