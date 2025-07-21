import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Sruti Ranjan Pradhan</span>, a dedicated and pre-final year Computer Science Engineering student at 
            <span className="purple"> Sunstone, GD Goenka University</span>.
            <br />
            <br />
            I specialize in programming languages like <span className="purple">Java, C, and C++</span>, and I'm actively developing full-stack web applications using 
            <span className="purple"> JDBC, JSP, Servlets, Hibernate, and JPA</span>.
            <br />
            <br />
            Some of my proudest projects include 
            <span className="purple"> DoCure.ai </span>(an AI health assistant), 
            <span className="purple"> OnlineQuizWebApp</span>, and 
            <span className="purple"> Fresh Fuel </span>(a fitness-focused e-commerce site).
            <br />
            <br />
            I'm also familiar with tools and technologies such as 
            <span className="purple"> Git, GitHub, Docker, Azure Data Studio, MySQL, and SQL Server</span>. 
            <br />
            <br />
            Currently, I’m on a journey to become a proficient 
            <span className="purple"> Full Stack Java Developer</span> by mastering core & advanced Java, Spring, and modern backend tools.
            <br />
            <br />
            Besides coding, I enjoy:
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Photography & Videography
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let’s collaborate to solve real-world problems with technology."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
