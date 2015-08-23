'use strict';

angular.module('rocketMapApp')
  .controller('MainCtrl', function ($scope) {

    $scope.map = {
      center: {
        latitude: 32.7883637,
        longitude: -79.9367905
      },
      zoom: 12
      // markers: []
    }

    $scope.marker = {
      coords: {
        latitude: 32.7883637,
        longitude: -79.9367905
      },
      idKey: 1
    }

    $scope.marker1 = {
      coords: {
        latitude: 32.7983637,
        longitude: -79.9467905
      },
      idKey: 1
    }

    $scope.marker2 = {
      coords: {
        latitude: 32.8083637,
        longitude: -79.9567905
      },
      idKey: 1
    }

    $scope.marker3 = {
      coords: {
        latitude: 32.8183637,
        longitude: -79.9667905
      },
      idKey: 1
    }

    $scope.markerList = [
    {
      coords: {
        latitude: 45,
        longitude: -73
      },
      idKey: 1
    },
    {
      coords: {
        latitude: 46,
        longitude: -74
      },
      idKey: 2
    },
    {
      coords: {
        latitude: 47,
        longitude: -75
      },
      idKey: 3
    }
    ]

  });

//   uiGmapIsReady.promise().then(function () {
//          $scope.markers.push({
//             idKey: 1,
//               coords: {
//                 latitude: 36.132411,
//                 longitude: -80.290481
//         },        
// });
