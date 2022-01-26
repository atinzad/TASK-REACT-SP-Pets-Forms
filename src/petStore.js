import { action, makeObservable, observable } from "mobx";
import petsData from "./petsData";
class PetStore {
  pets = petsData;

  constructor() {
    makeObservable(this, {
      pets: observable,
      handleAdopt: action,
    });
  }

  handleAdopt = (petId) => {
    this.pets = this.pets.filter((pet) => pet.id !== petId);
  };

  handleAdd = (newPet) => {
    const newId = this.pets[this.pets.length - 1].id + 1;
    this.pets.push({
      name: newPet.name,
      type: newPet.type,
      image: newPet.image,
      id: newId,
    });
  };

  handleUpdate = (updatedPet) => {
    this.pets = this.pets.map((pet) =>
      pet.id === updatedPet.id ? updatedPet : pet
    );
  };
}

const petStore = new PetStore();
export default petStore;
