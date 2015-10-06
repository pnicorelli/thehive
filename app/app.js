(function() {
    'use strict';

    angular.module('theHive', [
      'ngRoute',
      'ngMaterial',
      'theHive.home',
      'theHive.toolbar'
    ])
    .config(config);

  function config( $routeProvider ){
    $routeProvider.otherwise({ redirectTo: '/home' });
  }

})();
