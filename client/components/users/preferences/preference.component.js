import preferenceController from "./preference.controller.js";
import preferenceTemplate from './preference.html';

const preferenceComponent = {
  controller: preferenceController,
  template: preferenceTemplate
};

angular.module("AdoptrApp").component("enterPreferences", preferenceComponent);
