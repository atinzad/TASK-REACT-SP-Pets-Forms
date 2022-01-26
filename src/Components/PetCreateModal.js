import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import petStore from "../petStore";
import { useState } from "react";

const PetCreateModal = ({ isFormShown, handleClose }) => {
  const pets = petStore.pets;

  const [petData, setPetData] = useState({
    id: "",
    name: "",
    type: "",
    image: "",
  });

  const handleChange = (field, value) => {
    petData[field] = value;
  };

  const handleSubmit = (event) => {
    console.log(petData);
    pets.handleAdd(petData);
    event.preventDefault();
  };

  return (
    <div>
      <Modal show={isFormShown} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Pet</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => handleChange("name", e.target.value)}
                type="text"
                placeholder="Enter Pet Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Type</Form.Label>
              <Form.Select
                onChange={(e) => handleChange("type", e.target.value)}
                aria-label="Default select example"
              >
                <option>Select Type</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Rabbit">Rabbit</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="image" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PetCreateModal;
