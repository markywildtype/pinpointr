'use strict'

angular.module('queryForm').
  component('queryForm', {
    templateUrl: 'query-form/query-form.template.html',
    controller: ['$http',
      function QueryFormController($http){
        var self = this;

        // $http.get('http://maps.google.com/maps/api/geocode/json?address=' + mapQuery).then(function(response){
        $http.get('http://maps.google.com/maps/api/geocode/json?address=1+Orwell+Terrace,+Edinburgh').then(function(response){
          var mapsData = response.data;
          var coords = mapsData.results[0].geometry.location;
          self.latitude = coords.lat;
          self.longitude = coords.lng;
        });

        self.mapQuery = "";
        //
        // self.latitude = null;
        // self.longitude = null;
      }
    ]
  });
