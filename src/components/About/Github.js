import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading">
      <strong className="purple">Code</strong><b>.</b><strong className="purple"> Commit</strong><b>.</b><strong className="purple"> Repeat</strong><b>.</b></h1>
      <p style={{color: "#a9a9a9",paddingBottom: "10px" }}>Every line of code is a step forward in my professional journey</p>
      <GitHubCalendar
        username="SR-Pradhan"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
