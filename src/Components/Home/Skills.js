import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";

const ModalSkillsDetail = ({
  isOpen,
  toggle,
  children,
  name,
  modalAttribute,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{children}</ModalHeader>
      <ModalBody>{modalAttribute.skill}</ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

let SkillsComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalAttribute, setModalAttribute] = useState("");

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

  const onChangeModal = (v = "") => {
    axios
      .get("https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/unit")
      .then(({ data }) => {
        if (typeof v === "string") {
          setModalAttribute(data);
        }
        setIsOpen(!isOpen);
      });
  };

  return (
    <>
      <ModalSkillsDetail
        toggle={onChangeModal}
        modalAttribute={modalAttribute}
        isOpen={isOpen}
        name={"aaasas"}
      >
        <h1>Faisal</h1>
      </ModalSkillsDetail>
      <button>Skills {modalAttribute.skill}</button>
      <ul>
        {listAwards.map((v) => {
          return <li onClick={() => onChangeModal(v)}>{v}</li>;
        })}
      </ul>
    </>
  );
};

class Skills extends React.Component {
  render() {
    console.log(Skills);
    return (
      <div
        id="Skills"
        style={{
          paddingLeft: 180,
          display: "inline-block",
          width: "100%",
          height: "100vh",
        }}
      >
        <SkillsComponent />
      </div>
    );
  }
}

export default Skills;
