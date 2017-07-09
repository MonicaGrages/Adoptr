import searchController from "./search.controller";
import searchTemplate from './search.html';

const searchComponent = {
  controller: searchController,
  template: searchTemplate
};

angular.module("AdoptrApp").component("petSearch", searchComponent);
