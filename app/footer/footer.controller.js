(function() {
    'use strict';

    angular
        .module('theHive.footer')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['CONFIG'];

    function FooterController(CONFIG) {
        var vm = this;
        vm.env = CONFIG.ENV;

        activate();
console.log(11)
        function activate() {

        }
    }
})();
