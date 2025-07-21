import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Java Developer",
          "President, Cybernautics Tech Club",
          "Backend: JDBC, Servlet, JSP, Hibernate & JPA",
          "Frontend: HTML,CSS",
          "Turning ideas into Code",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
