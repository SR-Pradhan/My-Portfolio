import React from "react";
import { FaDownload } from 'react-icons/fa';
import "../../App.css";
import { Col, Row } from "react-bootstrap";
import {
  SiEclipseide,
  SiVisualstudiocode,
  SiGit,
  SiGithub,
  SiDocker,
  SiMysql,
  SiApachemaven,
} from "react-icons/si";

function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiEclipseide />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiApachemaven />
        </Col>
      </Row>

      {/* Leadership & Impact Section */}
      <div style={{ padding: "0 20px" }}>
        <h2>
          Beyond the Code: <strong className="purple">Leadership & Impact</strong>
        </h2>
        <p style={{color: "#a9a9a9", marginBottom: "20px"}}>
          Making impact beyond the classroom through leadership, collaboration, and creativity.
        </p>
        <br></br>
        <h4><strong className="purple">President, Cybernautics </strong>— The Tech Club of <strong className="purple">Sunstone, GDGU Campus.</strong></h4>
        <p style={{color: "#a9a9a9"}}>
          As the head of our Sunstone’s official tech club, I’ve been at the forefront of
          organizing and leading technical events, mentorship series, and national-level hackathons.
        </p>
        <p style={{ marginBottom: "60px"}}>
          Spearheaded events like SyntaxSprint’25 and Python Series 1.0 & 2.0, ensuring hands-on learning experiences.
          Collaborated with peers, faculty, and industry guests to host speaker sessions and competitions.
          Handled branding, content, and outreach to boost visibility and engagement across our digital platforms.
          Blended my love for technology and storytelling through event Photography and Videography.
        </p>
      </div>

      {/* Resume Section */}
<div>
  <h2>
    Take a Look at My <span className="purple">Resume</span>
  </h2>
  <p style={{color: "#a9a9a9"}}>Click below to view or download my resume and explore my professional journey.</p>
  
  <div style={{ position: "relative", zIndex: 2, marginBottom: "70px" }}>
  <a
  href="/My-Portfolio/MyResumeV3.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    backgroundColor: "#5f287a",
    color: "white",
    padding: "5px 30px",
    borderRadius: "9px",
    display: "inline-flex",
    alignItems: "center",
    fontSize: "1.35rem",
    fontWeight: 500,
    textDecoration: "none",
    cursor: "pointer",
    zIndex: 3,
    boxShadow: "0 6px 24px rgba(125,97,194,0.18)",
    transition: "background 0.2s, transform 0.18s, box-shadow 0.2s"
  }}
  onMouseEnter={e => {
    e.target.style.backgroundColor = "#8538aa";
    e.target.style.transform = "translateY(-2px) scale(1.03)";
    e.target.style.boxShadow = "0 12px 32px rgba(143,94,255,0.25)";
  }}
  onMouseLeave={e => {
    e.target.style.backgroundColor = "#723092";
    e.target.style.transform = "none";
    e.target.style.boxShadow = "0 6px 24px rgba(125,97,194,0.18)";
  }}
>
  <FaDownload style={{ marginRight: "14px", fontSize: "1em"}} />
  View Resume
</a>

  </div>
</div>
    </>
  );
}
export default Toolstack;