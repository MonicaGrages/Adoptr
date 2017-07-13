import footerController from "./footer.controller";
import footerTemplate from './footer.html';

const footerComponent = {
  controller: footerController,
  template: footerTemplate
};

angular.module("AdoptrApp").component("footerNav", footerComponent);
