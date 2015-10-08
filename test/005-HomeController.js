describe('HomeController', function() {
  beforeEach(module('theHive'));

    var $controller;

    beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
    }));

    describe('HomeController', function() {
      it('should istantiate the controller', function() {
        var controller = $controller('HomeController');
        expect(controller).toBeDefined();
      });
    });
});
