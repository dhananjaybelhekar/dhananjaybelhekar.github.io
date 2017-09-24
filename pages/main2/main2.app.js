angular.module('todoApp.main2', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
   //   $locationProvider.html5Mode(true);
  //    $urlRouterProvider.otherwise("index2");  
      $stateProvider.state('index2', {
        url: "/index2",
        templateUrl: "/html/main2/main2.html",
        controller:'todoApp.main2.controller as todoList'
        });
    });