import PasswordResetController from "./passwordReset.controller";
import PasswordResetTemplate from './passwordReset.html';

const PasswordResetComponent = {
  controller: PasswordResetController,
  template: PasswordResetTemplate
};

angular.module("AdoptrApp").component("passwordReset", PasswordResetComponent);
