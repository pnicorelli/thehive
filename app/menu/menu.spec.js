describe('MenuController', function() {
  beforeEach(module('theHive'));

    var $controller;

    // define the mock Menu service
    beforeEach(function() {
      MenuServiceMock = {
        getSections: function() {
          return [
            { label: 'Intro', slug: 'intro'},
            { label: 'Auth', slug: 'auth'},
          ];
        }

       };
    });

    beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
    }));

    describe('MenuController', function() {
      it('should load sections', function() {
        var controller = $controller('MenuController', {MenuService: MenuServiceMock});
        expect(controller.sections).toContain({ label: 'Intro', slug: 'intro'});
      });
    });
});
