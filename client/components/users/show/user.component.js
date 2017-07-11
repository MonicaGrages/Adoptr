import userShowController from "./user.controller";
import userShowTemplate from './user.html';

const userShowComponent = {
  controller: userShowController,
  template: userShowTemplate
};

angular.module("AdoptrApp").component("userShow", userShowComponent);
