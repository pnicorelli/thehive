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
            { label: 'Intro', slug: 'intro'},
            { label: 'Auth', slug: 'auth'},
            { label: 'Users', slug: 'users'},
            { label: 'Stuff', slug: 'stuff'}
          ];
        }
    }
})();
