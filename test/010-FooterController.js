describe('FooterController', function() {
  beforeEach(module('theHive'));

    var $controller;

    beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
    }));

    describe('FooterController', function() {
      it('show Envinroment on footer', function() {
        var controller = $controller('FooterController', {
          'CONFIG': {
            'ENV': 'custom.env'
          }
        });
        expect(controller.envLabel).toEqual(' - custom.env');
      });
    });
});