import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Recent Projects
        </h2>

        <hr />

        <p className="pb-3 text-center project-description">
          A selection of backend-focused projects demonstrating scalable REST
          APIs, authentication, database optimization, caching, and
          asynchronous processing.
        </p>

        {/* Project Cards */}
        <div className="row" id="ads">
          <Spin>

            {/* ================= URL SHORTENER ================= */}

            <div className="col-md-6 col-lg-6 mb-4">
              <div className="card rounded project-card">

                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>

                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                    alt="URL Shortener Application"
                  />
                </div>

                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node.js</span>
                  <span className="card-detail-badge">Express.js</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">Redis</span>
                  <span className="card-detail-badge">JWT</span>
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      URL Shortener Application
                    </h5>
                  </div>

                  <p className="project-card-description">
                    Scalable URL shortening service with custom aliases,
                    collision-safe short codes, Redis caching, click
                    analytics, JWT authentication, RBAC, rate limiting,
                    and optimized MongoDB indexing.
                  </p>

                  <a
                    className="ad-btn"
                    href="https://github.com/pradeepshukla19"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </div>

              </div>
            </div>

            {/* ================= PAYMENT BACKEND ================= */}

            <div className="col-md-6 col-lg-6 mb-4">
              <div className="card rounded project-card">

                <div className="card-image">
                  <span className="card-notify-badge">
                    Payment Backend
                  </span>

                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
                    alt="Payment Processing Backend"
                  />
                </div>

                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node.js</span>
                  <span className="card-detail-badge">TypeScript</span>
                  <span className="card-detail-badge">MySQL</span>
                  <span className="card-detail-badge">AWS SQS</span>
                  <span className="card-detail-badge">REST API</span>
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Payment Processing System
                    </h5>
                  </div>

                  <p className="project-card-description">
                    Backend payment processing workflows with transaction
                    handling, retry mechanisms, audit logging, failure
                    handling, asynchronous processing, and reliable
                    payment operations.
                  </p>

                  <a
                    className="ad-btn"
                    href="#contact"
                  >
                    Contact Me
                  </a>
                </div>

              </div>
            </div>

          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;