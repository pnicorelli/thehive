describe('MenuController', function() {
  'use strict';

  beforeEach(module('theHive'));

  var $controller, MenuServiceMock;

  // define the mock Menu service
  beforeEach(function() {
    MenuServiceMock = {
      getSections: function() {
        return [
          { label: 'Intro', slug: 'intro'},
          { label: 'Auth', slug: 'auth'}
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
      expect(controller.sections.length).toEqual(2);
      expect(controller.sections).toContain({ label: 'Intro', slug: 'intro'});
    });

    it('should add a new section', function() {
      var controller = $controller('MenuController', {MenuService: MenuServiceMock});
      controller.newSection = 'Test';
      controller.addSection();
      expect(controller.sections).toContain({ label: 'Test', slug: 'test'});
    });

    it('should not add a section with same slug', function() {
      var controller = $controller('MenuController', {MenuService: MenuServiceMock});
      controller.newSection = 'Test';
      controller.addSection();
      controller.newSection = 'tEst';
      controller.addSection();
      expect(controller.sections).not.toContain({ label: 'tEst', slug: 'test'});
    });
  });
});
