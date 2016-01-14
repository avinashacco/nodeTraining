'use strict';

angular.module('nodeJsTrainingApp.auth', [
  'nodeJsTrainingApp.constants',
  'nodeJsTrainingApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
