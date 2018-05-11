'use strict'

angular.module('queryForm').
  component('queryForm', {
    templateUrl: 'query-form/query-form.template.html',
    controller: ['$http',
      function QueryFormController($http){
        var self = this;
        self.test = 'This is a test string';

        self.getCoords = function(mapQuery){
          $http.get('http://maps.google.com/maps/api/geocode/json?address=' + mapQuery).then(function(response){
            var mapsData = response.data;
            if(mapsData.results[0] == undefined || mapQuery == null) {
              return alert('Please enter a valid address!')
            };
            var coords = mapsData.results[0].geometry.location;
            self.longitude = coords.lng;
            return self.latitude = coords.lat;
          });
        }
      }
    ]
  });
