import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education
        </h2>

        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "white",
              color: "black",
            }}
            contentArrowStyle={{
              borderRight: "7px solid white",
            }}
            date="Jul 2018 - Jun 2022"
            iconStyle={{
              background: "#138781",
              color: "#fff",
            }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor's Degree - Computer Science
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Dr. A.P.J. Abdul Kalam Technical University, India
            </h4>

            <p className="education-cgpa">
              CGPA: 7.82 / 10
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;