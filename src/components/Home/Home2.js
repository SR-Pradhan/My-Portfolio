import React from "react";
import { SiGmail } from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatarV2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
  Meet the<span className="purple"> Full Stack Developer</span>
</h1>
<p className="home-about-body">
  I'm <b className="purple">Sruti Ranjan Pradhan</b>, an enthusiastic developer who loves to build, learn, and innovate.
  <br /><br />
  While still on my learning journey, I enjoy exploring various technologies and working on meaningful projects that make a difference.
  <br /><br />
  This space showcases my <b className="purple">projects, skills</b>, and <b className="purple">developer journey</b>. I’ve worked with technologies like 
  <b className="purple"> Java, C, C++, DSA, JSP, Servlets, JDBC, SQL Server</b>, and more.
  <br /><br />
  I’m always looking for ways to <b className="purple">collaborate, grow</b>, and solve real-world problems through tech.
  <br /><br />
  Feel free to check out my work and <b className="purple">let’s connect to build something amazing — together!</b>
</p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>Let’s Merge Ideas</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SR-Pradhan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sruti-ranjan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=pradhansr2003@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="icon-colour home-social-icons"
>
  <SiGmail />
</a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
