import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import profileImage from "../../assets/profile.jpeg";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={profileImage}
                alt="profile_pic"
              />
            </div>

            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>

              <p>
                I am a Backend-focused Software Engineer with 3+ years of
                experience building scalable and production-ready backend
                applications using Node.js, TypeScript, Express.js, MongoDB,
                and MySQL.
              </p>

              <p>
                I specialize in developing REST APIs, payment integrations,
                JWT authentication, RBAC, asynchronous processing, and
                database optimization. I have worked with payment platforms
                such as Jio Pay, Razorpay, and Stripe, focusing on reliable
                transaction processing and secure backend workflows.
              </p>

              <p>
                I also have hands-on experience with AWS services including
                Lambda, S3, SQS, and CloudWatch, along with Docker, GitHub
                Actions, and CI/CD pipelines. I enjoy solving backend
                problems, improving API performance, and building clean,
                maintainable, and scalable software.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;