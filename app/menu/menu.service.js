(function() {
    'use strict';

    angular
        .module('theHive.menu')
        .service('MenuService', MenuService);

    MenuService.$inject = ['CONFIG'];

    function MenuService(CONFIG) {
        this.getSections = getSections; // GET ALL THE SECTIONS

        function getSections() {
          return [
            'intro',
            'auth',
            'users',
            'boh'
          ];
        }
    }
})();
