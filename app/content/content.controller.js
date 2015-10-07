(function() {
    'use strict';

    angular
        .module('theHive.home')
        .controller('ContentController', ContentController);

    ContentController.$inject = ['CONFIG', '$routeParams'];

    function ContentController(CONFIG, $routeParams) {
        var vm = this;
        vm.section = $routeParams.section;


    }
})();
