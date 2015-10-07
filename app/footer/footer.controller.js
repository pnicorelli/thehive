(function() {
    'use strict';

    angular
        .module('theHive.footer')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['CONFIG'];

    function FooterController(CONFIG) {
        var vm = this;
        vm.envLabel = (CONFIG.ENV === 'production'? '' : ' - '+CONFIG.ENV);

        activate();

        function activate() {

        }
    }
})();
