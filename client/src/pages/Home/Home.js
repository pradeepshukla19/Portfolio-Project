import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";

const Home = () => {
  const [theme, setTheme] = useTheme();

  // Handle theme
  const handleTheme = () => {
    setTheme((prevState) =>
      prevState === "light" ? "dark" : "light"
    );
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">

        {/* Theme Toggle */}
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>

        <div className="container home-content">

          <>
            <h2>Hi 👋 I'm</h2>

            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Backend Software Engineer",
                    "Node.js Developer",
                    "Full Stack Developer",
                    "MERN Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </h1>

            <p className="home-description">
              I build scalable backend services, REST APIs, payment
              integrations, and cloud-based applications using Node.js,
              TypeScript, Express.js, MongoDB, MySQL, and AWS.
            </p>
          </>

          <>
            <div className="home-buttons">

              {/* Hire Me */}
              <a
                className="btn btn-hire"
                href="#contact"
              >
                Hire Me
              </a>

              {/* Resume */}
              <a
                className="btn btn-cv"
                href={Resume}
                download="Pradeep-Shukla-Resume.pdf"
              >
                My Resume
              </a>

            </div>
          </>

        </div>
      </div>
    </>
  );
};

export default Home;