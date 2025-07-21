import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJava, DiPython } from "react-icons/di";
import { SiMysql, SiHtml5, SiCss3 } from "react-icons/si";
import { TbSql } from "react-icons/tb";

// Updated: More spacing, centered, modern feel
function Techstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "36px",
        paddingTop: "8px",
        gap: "12px",
      }}
    >
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
    </Row>
  );
}

export default Techstack;