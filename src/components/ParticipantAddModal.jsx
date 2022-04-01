import React from "react";
import Modal from "react-modal";
import { useForm } from "../hooks/useForm";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const ParticipantAddModal = ({ handleAdd }) => {
  const { formValues, reset, handleInputChange } = useForm({
    participant: "",
    desc: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!participant.trim()) return;

    const newParticipant = {
      id: new Date().getTime(),
      name: participant,
      step: "Entrevista inicial",
      idStep: 0,
      comments: desc,
    };

    handleAdd(newParticipant);
    closeModal();
    reset();
  };

  const { participant, desc } = formValues;

  //   let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <button onClick={openModal} className="btn btn-success mt-3">
        Agregar candidato
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={onSubmit}>
          <label className="mb-2">Participant</label>
          <input
            className="form-control mb-2"
            type="text"
            name="participant"
            placeholder="Insert participant"
            value={participant}
            onChange={handleInputChange}
          />

          <label className="mb-2">Description </label>
          <input
            className="form-control mb-3"
            type="text"
            name="desc"
            placeholder="Description text"
            value={desc}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary w-100">Add</button>
        </form>
      </Modal>
    </>
  );
};
