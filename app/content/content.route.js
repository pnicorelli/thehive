(function() {
    'use strict';

    angular
        .module('theHive.content')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/content/:section', {
              templateUrl: 'view/content/content.html',
              controller: 'ContentController',
              controllerAs: 'vm'
            });
    }

})();
