angular.module('todoApp.main', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/index");  

    $stateProvider.state('index', {
      url: "/index",
      template: "<ui-view></ui-view>",
      controller:'TodoListController as todoList'
      }).state('index.home', {
        url: "/home",
        templateUrl: "/html/main/main.home.html",
      //  controller:'TodoListController as todoList'
        });
  });
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