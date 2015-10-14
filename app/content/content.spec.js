describe('ContentController', function() {
  'use strict';

  beforeEach(module('theHive'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('ContentController', function() {
    it('intercept the :section', function() {
      var controller = $controller('ContentController', { $routeParams: {section: 'justTesting'} });
      expect(controller.section).toEqual('justTesting');
    });
  });
});
