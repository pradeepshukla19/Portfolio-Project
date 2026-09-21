import React from "react";
import "./Techstack.css";
import { FaJava } from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiVite,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiAmazonaws,
  SiAwslambda,
  SiAmazons3,
  SiDocker,
  SiGithubactions,
  SiGithub,
  SiGitlab,
  SiOpenai,
} from "react-icons/si";

import {
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";

const Techstack = () => {
  const technologies = [
    // Languages / Web
    {
      name: "JavaScript (ES6+)",
      icon: SiJavascript,
      category: "Languages",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      category: "Languages",
    },
    {
      name: "Java",
      icon: FaJava,
      category: "Languages",
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      category: "Web",
    },
    {
      name: "CSS3",
      icon: SiCss3,
      category: "Web",
    },

    // Backend
    {
      name: "Node.js",
      icon: SiNodedotjs,
      category: "Backend",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      category: "Backend",
    },

    // Frontend
    {
      name: "React.js",
      icon: SiReact,
      category: "Frontend",
    },
    {
      name: "Vite",
      icon: SiVite,
      category: "Frontend",
    },

    // Databases
    {
      name: "MongoDB",
      icon: SiMongodb,
      category: "Database",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      category: "Database",
    },
    {
      name: "SQL",
      icon: SiMysql,
      category: "Database",
    },
    {
      name: "Redis",
      icon: SiRedis,
      category: "Database",
    },

    // AWS / DevOps
    {
      name: "AWS",
      icon: SiAmazonaws,
      category: "Cloud",
    },
    {
      name: "AWS Lambda",
      icon: SiAwslambda,
      category: "Cloud",
    },
    {
      name: "AWS S3",
      icon: SiAmazons3,
      category: "Cloud",
    },
    {
      name: "Docker",
      icon: SiDocker,
      category: "DevOps",
    },
    {
      name: "GitHub Actions",
      icon: SiGithubactions,
      category: "DevOps",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      category: "Version Control",
    },
    {
      name: "GitLab",
      icon: SiGitlab,
      category: "Version Control",
    },

    // AI
    {
      name: "OpenAI API",
      icon: SiOpenai,
      category: "AI",
    },
    {
      name: "ChatGPT",
      icon: SiOpenai,
      category: "AI",
    },

    // Tools
    {
      name: "Postman",
      icon: SiPostman,
      category: "Tools",
    },
    {
      name: "VS Code",
      icon: SiVisualstudiocode,
      category: "Tools",
    },
  ];

  return (
    <>
      <div className="container techstack" id="techstack">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>

          <hr />

          <p className="pb-3 text-center">
            Backend, frontend, databases, cloud, DevOps, AI, and development
            tools used in production and personal projects.
          </p>
        </RubberBand>

        <div className="row">
          {technologies.map((tech, index) => {
            const TechIcon = tech.icon;

            return (
              <Fade left key={`${tech.name}-${index}`}>
                <div className="col-md-3 col-sm-6 col-12">
                  <div className="card m-2 tech-card">
                    <div className="card-content">
                      <div className="card-body">
                        <div className="media d-flex align-items-center justify-content-center">
                          <div className="align-self-center">
                            <TechIcon className="tech-icon" />
                          </div>

                          <div className="media-body">
                            <h5>{tech.name}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Techstack;