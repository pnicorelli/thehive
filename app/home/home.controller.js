(function() {
    'use strict';

    angular
        .module('theHive.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;
console.log("yooo")
        activate();

        vm.one = "unooo";

        function activate() {

        }
    }
})();
