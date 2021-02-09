import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div id="Education">
        <h1
          className="edutitle"
          style={{
            color: "black",
            backgroundColor: "yellow",
            paddingLeft: 50,
            borderBottomStyle: "solid",
          }}
        >
          Education
        </h1>
        <h2 style={{ paddingLeft: 20 }}>
          SAMPOERNA INSTITUTE OF INFORMATION TECHNOLOGY
        </h2>
        <h3 style={{ paddingLeft: 20 }}>BACHELOR OF TECHNOLOGY</h3>
        <a style={{ paddingLeft: 20 }}>12.14</a>
      </div>
    );
  }
}

export default Education;
