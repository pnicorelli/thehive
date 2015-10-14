(function() {
  'use strict';

  angular
  .module('theHive.menu')
  .controller('MenuController', MenuController);

  MenuController.$inject = ['CONFIG', 'MenuService', 'Slug'];

  function MenuController(CONFIG, MenuService, Slug) {
    var vm = this;
    vm.sections = MenuService.getSections();

    vm.addSection = function () {
      if( vm.newSection !== ''){
        var newItem = {
          label: vm.newSection,
          slug: Slug.slugify(vm.newSection)
        }
        var exists = false;
        angular.forEach( vm.sections, function( value, key, object ){
          if( value.slug === newItem.slug ){
            exists = true;
          }
        });
        if( !exists ){
          vm.sections.push( newItem );
        }
        vm.newSection = '';
      }
    }
  }
})();
