(function() {
    'use strict';

    angular
        .module('theHive.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ["CONFIG"];

    function HomeController(CONFIG) {
        var vm = this;
        vm.uno = 1;


    }
})();
