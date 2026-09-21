import React from "react";
import { SiNodedotjs } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">

          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>

          <hr />

          <VerticalTimeline lineColor="#1e1e2c">

            {/* ================= LINKAPI ================= */}

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "white",
                color: "#1e1e2c",
              }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="Jun 2025 - Jul 2026"
              iconStyle={{
                background: "#1e1e2c",
                color: "#fff",
              }}
              icon={<SiNodedotjs />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>

              <h4 className="vertical-timeline-element-subtitle">
                Linkapi Tech Pvt Ltd
              </h4>

              <p>
                Designed and developed scalable backend services using Node.js,
                TypeScript, and Express.js with asynchronous processing,
                REST APIs, request validation, centralized error handling,
                and production-ready backend architecture.
              </p>

              <p>
                Developed Jio Pay payment processing workflows using Node.js
                and MySQL with retry mechanisms, audit logging, failure
                handling, and reliable transaction processing.
              </p>

              <p>
                Implemented AWS SQS for asynchronous message processing and
                secure APIs using JWT authentication, RBAC authorization,
                and middleware-based access control.
              </p>

              <p>
                Worked with MongoDB, AWS Lambda, S3, CloudWatch, and OpenAI API
                for database optimization, serverless processing, cloud
                operations, monitoring, and intelligent backend workflows.
              </p>
            </VerticalTimelineElement>

            {/* ================= SWAVISH ================= */}

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "white",
                color: "#1e1e2c",
              }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="May 2024 - May 2025"
              iconStyle={{
                background: "#1e1e2c",
                color: "#fff",
              }}
              icon={<SiNodedotjs />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>

              <h4 className="vertical-timeline-element-subtitle">
                Swavish Software
              </h4>

              <p>
                Developed scalable backend services and REST APIs using
                Node.js, Express.js, and MongoDB, implementing business logic,
                API validation, centralized error handling, and database
                operations.
              </p>

              <p>
                Integrated Razorpay and Stripe payment gateways using webhooks
                and idempotent event processing for payment verification,
                transaction states, callbacks, and failure handling.
              </p>

              <p>
                Built reusable backend components and integrated third-party
                APIs using asynchronous programming, RESTful API design,
                modular architecture, and clean coding practices.
              </p>

              <p>
                Containerized applications using Docker and automated build,
                testing, and deployment workflows using GitHub Actions and
                CI/CD pipelines.
              </p>
            </VerticalTimelineElement>

            {/* ================= MAXTRA ================= */}

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "white",
                color: "#1e1e2c",
              }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="Aug 2023 - Feb 2024"
              iconStyle={{
                background: "#1e1e2c",
                color: "#fff",
              }}
              icon={<SiNodedotjs />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>

              <h4 className="vertical-timeline-element-subtitle">
                Maxtra Technologies Pvt Ltd
              </h4>

              <p>
                Developed Node.js backend services and REST APIs using
                Express.js and MongoDB, implementing business logic, database
                operations, API validation, and third-party integrations.
              </p>

              <p>
                Optimized MongoDB queries, indexing strategies, and database
                operations while refactoring synchronous I/O using async/await
                and connection pooling to improve backend performance and
                scalability.
              </p>

              <p>
                Implemented request validation, centralized error handling,
                REST API testing, debugging, deployment support, production
                troubleshooting, and backend maintenance.
              </p>
            </VerticalTimelineElement>

            {/* ================= SINGSYS ================= */}

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "white",
                color: "#1e1e2c",
              }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="Aug 2022 - Aug 2023"
              iconStyle={{
                background: "#1e1e2c",
                color: "#fff",
              }}
              icon={<SiNodedotjs />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Development Engineer Intern
              </h3>

              <h4 className="vertical-timeline-element-subtitle">
                Singsys Software Services Pvt Ltd
              </h4>

              <p>
                Developed RESTful APIs using Node.js, Express.js, and MongoDB,
                implementing backend business logic, database operations,
                request handling, API validation, and third-party integrations.
              </p>

              <p>
                Implemented NodeMailer-based email notification workflows and
                reusable backend modules for user management, data processing,
                and application workflows.
              </p>

              <p>
                Performed REST API testing, debugging, deployment, production
                support, and backend issue resolution while collaborating with
                team members to maintain application reliability.
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;