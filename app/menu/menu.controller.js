(function() {
    'use strict';

    angular
        .module('theHive.menu')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['CONFIG', 'MenuService'];

    function MenuController(CONFIG, MenuService) {
        var vm = this;
        vm.sections = MenuService.getSections();

        activate();

        function activate() {

        }
    }
})();
