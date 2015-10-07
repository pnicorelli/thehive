(function() {
    'use strict';

    angular
        .module('theHive.menu')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['CONFIG'];

    function MenuController(CONFIG) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
