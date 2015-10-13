(function() {
    'use strict';

    angular.module('theHive', [
      'ngRoute',
      'ngMaterial',
      'slugifier',
      'theHive.home',
      'theHive.menu',
      'theHive.toolbar',
      'theHive.footer',
      'theHive.content'
    ])
    .config(config);

  function config( $routeProvider ){
    $routeProvider.otherwise({ redirectTo: '/home' });
  }

})();
