(function() {
    'use strict';

    angular.module('theHive', [
      'ngRoute',
      'ngMaterial',
      'theHive.home',
      'theHive.menu',
      'theHive.toolbar',
      'theHive.footer'
    ])
    .config(config);

  function config( $routeProvider ){
    $routeProvider.otherwise({ redirectTo: '/home' });
  }

})();
