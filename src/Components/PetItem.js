import petStore from "../petStore";
import PetUpdateModal from "./PetUpdateModal";
import { useState } from "react";
import { observer } from "mobx-react";
import petsData from "../petsData";

const PetItem = ({ pet }) => {
  const [isUpdateShown, setIsUpdateShown] = useState(false);
  const [petName, setPetName] = useState(pet.Name);

  const handleShowUpdate = () => {
    setIsUpdateShown(true);
  };

  const handleCloseUpdate = () => {
    setIsUpdateShown(false);
  };

  const handleChangeName = (event) => {
    setPetName(event.target.value);
  };

  const submitChange = () => {
    const updatedPet = { ...pet };
    updatedPet.name = petName;
    console.log(updatedPet.name);
    petStore.handleUpdate(updatedPet);
    handleCloseUpdate();
  };

  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image" alt={pet.name} src={pet.image} />
        <div class="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            class="btn btn-info"
            onClick={() => petStore.handleAdopt(pet.id)}
          >
            Adopt
          </button>
          <br />
          <br />

          <button type="button" class="btn btn-info" onClick={handleShowUpdate}>
            Update
          </button>
          {isUpdateShown && (
            <PetUpdateModal
              pet={pet}
              handleCloseUpdate={handleCloseUpdate}
              handleChangeName={handleChangeName}
              submitChange={submitChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(PetItem);
