import landingPageController from "./landingPage.controller.js";
import landingPageTemplate from './landingPage.html';

const landingPageComponent = {
  controller: landingPageController,
  template: landingPageTemplate
};

angular.module("AdoptrApp").component("landingPage", landingPageComponent);
