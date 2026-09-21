import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";

import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";

import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <ToastContainer />

        {/* Mobile Navigation */}
        <MobileNav />

        {/* Home / Hero Section */}
        <Layout />

        <div className="container">
          {/* About Me */}
          <About />

          {/* Work Experience */}
          <WorkExp />

          {/* Education */}
          <Education />

          {/* Technical Skills */}
          <Techstack />

          {/* Projects */}
          <Projects />

          {/* Contact */}
          <Contact />
        </div>

        {/* Footer */}
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">
              © 2026 Pradeep Shukla | Backend / Node.js Software Engineer
            </h4>
          </Tada>
        </div>
      </div>

      {/* Scroll To Top */}
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{
          backgroundColor: "#1e1e2c",
          borderRadius: "80px",
          bottom: "25px",
          right: "25px",
        }}
      />
    </>
  );
}

export default App;