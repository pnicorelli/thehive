(function() {
    'use strict';

    angular
        .module('theHive.toolbar')
        .controller('ToolbarController', ToolbarController);

    ToolbarController.$inject = ['CONFIG'];

    function ToolbarController(CONFIG) {

        var vm = this;
        vm.env = CONFIG.ENV;

        activate();

        function activate() {

        }
    }
})();
