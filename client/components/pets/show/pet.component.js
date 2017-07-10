import petShowController from "./pet.controller";
import petShowTemplate from './pet.html';

const petShowComponent = {
  controller: petShowController,
  template: petShowTemplate
};

angular.module("AdoptrApp").component("petShow", petShowComponent);
