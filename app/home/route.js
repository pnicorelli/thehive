(function() {
    'use strict';

    angular
        .module('theHive.home')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/home', {
              templateUrl: 'view/home.html',
              controller: 'HomeController',
              controllerAs: 'vm'
            });
    }

})();
