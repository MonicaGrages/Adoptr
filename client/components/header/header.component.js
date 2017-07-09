import headerController from "./header.controller";
import headerTemplate from './header.html';

const headerComponent = {
  controller: headerController,
  template: headerTemplate
};

angular.module("AdoptrApp").component("headerNav", headerComponent);
