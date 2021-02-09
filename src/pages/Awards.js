import React from "react";

let AwardsComponent = () => {

  let listAwards = [
    "Hack 36 3rd prize winner",
    "Mentor OpenCode’19",
    "Started North Indonesia First Student Design and Developer Conference",
  ];

  return (
    <>
      <h1>AWARDS & CERTIFICATION </h1>
      <ul>
        {listAwards.map((i) => {
          return <li> {i} </li>
        })}
      </ul>
    </>
  );
}

class Awards extends React.Component {
  render() {
    console.log(Awards)
    return (
      <div id="Awards" style={{ paddingLeft: 180, display: 'inline-block', width: '100%', height: '100vh' }}>
        <AwardsComponent />
      </div>
    );
  }
}


export default Awards;