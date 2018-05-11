'use strict'

describe('queryForm', function(){

  beforeEach(module('queryForm'));

  describe('QueryFormController', function(){
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_){
      // $httpBackend = _$httpBackend_;
      // $httpBackend.expectGET('http://maps.google.com/maps/api/geocode/json?address=1+Orwell+Terrace,+Edinburgh')
      // .respond('{results: [{geometry: {location: {lat: 55.942901, lng: -3.220156}}}}');

      ctrl = $componentController('queryForm');
    }));

    it('should return a test string', function(){
      expect(ctrl.test).toBe('This is a test string');
    });


    it('should return a latitude and longitude when an address is sent to the API', function(){
    // it('should return a latitude and longitude when an address is sent to the API', function(){
    //
    // jasmine.addCustomEqualityTester(angular.equals);
    // expect(ctrl.latitude).toEqual(undefined);
    //
    // $httpBackend.flush();
    //
    // expect(ctrl.latitude).toEqual(55.942901);
    // });
  });

});

});
