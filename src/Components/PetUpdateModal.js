import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const PetUpdateModal = ({
  pet,
  handleCloseUpdate,
  isUpdateShown,
  handleChangeName,
  submitChange,
}) => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton={true} onHide={handleCloseUpdate}>
          <Modal.Title>Update {pet.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{pet.name}</Form.Label>
            <Form.Control
              type="text"
              placeholder={pet.name}
              onChange={handleChangeName}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button variant="primary" onClick={submitChange}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default PetUpdateModal;
