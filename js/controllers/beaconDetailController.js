angular.module('myApp').controller('beaconDetailController', ['$scope', '$routeParams', 'm2x',
    function ($scope, $routeParams, m2x) {
    $scope.beaconId = $routeParams.beaconId;

    m2x.getGeoLocationPoints().then(function(geoLocationPoints) {
        var points = _.map(geoLocationPoints, convertM2XToMaps);
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: 39.967066291756, lng: -86.008531004270},
          mapTypeId: 'terrain'
        });

        /*var points = [
          {lat: 37.772, lng: -122.214},
          {lat: 21.291, lng: -157.821}, EXAMPLE POINTS FROM ASIA TO NORTH AMERICA
          {lat: -18.142, lng: 178.431}, IT LOOKS LIKE THE COORDINATES WE HAVE ARE TOO CLOSE TOGETHER
          {lat: -27.467, lng: 153.027} FOR GOOGLE MAPS TO DISPLAY
        ];*/

        var line = new google.maps.Polyline({
          path: points,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 4
        });
        line.setMap(map);
    });

    function convertM2XToMaps(point) {
        return {
            lat: Number(point.values.Latitude),
            lng: Number(point.values.Longitude)
        };
    }
}]);