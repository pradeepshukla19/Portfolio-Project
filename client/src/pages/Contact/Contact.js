import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !msg.trim()) {
      toast.error("Please provide all fields");
      return;
    }

    try {
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name: name.trim(),
        email: email.trim(),
        msg: msg.trim(),
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Unable to send message. Please try again.");
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">

            {/* Contact Image */}
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="Contact Pradeep Shukla"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">

                    <h2 className="contact-title">
                      Get In Touch
                    </h2>

                    <p className="contact-subtitle">
                      Have a project, opportunity, or just want to connect?
                      Feel free to send me a message.
                    </p>

                    {/* Social Links */}
                    <div className="social-links">
                      <a
                        href="https://www.linkedin.com/in/pradeep-shukla-139251175/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                      >
                        <BsLinkedin size={28} />
                      </a>

                      <a
                        href="https://github.com/pradeepshukla19"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                      >
                        <BsGithub size={28} />
                      </a>

                      <a
                        href="mailto:pk6806786@gmail.com"
                        aria-label="Email"
                      >
                        <BsEnvelopeFill size={28} />
                      </a>
                    </div>

                    {/* Divider */}
                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>

                    {/* Name */}
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    {/* Email */}
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    {/* Message */}
                    <div className="row px-3">
                      <textarea
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        rows="5"
                      />
                    </div>

                    {/* Submit */}
                    <div className="row px-3">
                      <button
                        type="button"
                        className="button"
                        onClick={handleSubmit}
                      >
                        SEND MESSAGE
                      </button>
                    </div>

                  </div>
                </div>
              </Rotate>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;