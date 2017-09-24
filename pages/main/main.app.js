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