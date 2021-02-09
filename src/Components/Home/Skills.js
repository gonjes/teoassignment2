import React from "react";

let SkillsComponent = () => {

  let listAwards = [
    "HTML 5",
    "Javascript",
    "Node.js",
    "Django",
    "CSS3",
    "React",
    "Python",
    "Ember",
  ];

  return (
    <>
      <button>Skills</button>
      <ul>
        {listAwards.map((i) => {
          return <li> {i} </li>
        })}
      </ul>
    </>
  );
}

class Skills extends React.Component {
  render() {
    console.log(Skills)
    return (
      <div id="Skills" style={{ paddingLeft: 180, display: 'inline-block', width: '100%', height: '100vh' }}>
        <SkillsComponent />
      </div>
    );
  }
}


export default Skills;