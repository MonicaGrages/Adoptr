import passesController from "./passes.controller";
import passesTemplate from './passes.html';

const passesComponent = {
  controller: passesController,
  template: passesTemplate
};

angular.module("AdoptrApp").component("passes", passesComponent);
