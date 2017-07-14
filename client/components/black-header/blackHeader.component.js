import blackHeaderController from "./blackHeader.controller";
import blackHeaderTemplate from './blackHeader.html';

const blackHeaderComponent = {
  controller: blackHeaderController,
  template: blackHeaderTemplate
};

angular.module("AdoptrApp").component("blackHeader", blackHeaderComponent);
