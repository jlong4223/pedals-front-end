import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "320px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const MyModal = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="">
      <button className="btn btn-default" onClick={() => setModalIsOpen(true)}>
        {" "}
        <i className="fas fa-question-circle fa-lg"></i>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <h2>Questions?</h2>
        <p>
          Is there a trail that you would like to add? Are you having a hard
          time connecting to a host? Are you having trouble using the page?
        </p>
        <p>
          Whatever the question, contact the creater himself, Jared Long at
          &nbsp;
          <a href="mailto:jlong4223@gmail.com">jlong4223@gmail.com</a>
        </p>
        <button
          className="btn btn-default"
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default MyModal;
