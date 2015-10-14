describe('FooterController', function() {
  'use strict';

  beforeEach(module('theHive'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('FooterController', function() {
    it('show Envinroment on footer', function() {
      var controller = $controller('FooterController');
      expect(controller.envLabel).toEqual(' - development');
    });
  });
});
