//create a new module
angular.module('qln',['ui.router', 'ng-showdown'])

//config routing
.config(['$stateProvider','$urlRouterProvider','$locationProvider', '$showdownProvider',
        function($stateProvider,$urlRouterProvider,$locationProvider, $showdownProvider) {

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);

  $stateProvider

    .state('index', {
        abstract: true,
        url: '/',
        templateUrl: 'html/index.html',
        controller: 'IndexCtrl'
    })

    .state('index.preview', {
        url: '',
        templateUrl: 'html/preview.html',
        controller: 'PreviewCtrl'
    })

}]);
