angular.module('myApp').controller('beaconDetailController', ['$scope', '$timeout', '$routeParams', 'm2x',
    function ($scope, $timeout, $routeParams, m2x) {
    $scope.beaconId = $routeParams.beaconId;

    function updateBeaconRoute() {
        m2x.getGeoLocationPoints().then(function(geoLocationPoints) {
            var points = _.map(geoLocationPoints, convertM2XToMaps);
            
            /*var points = [
            {lat: 37.772, lng: -122.214},
            {lat: 21.291, lng: -157.821}, // EXAMPLE POINTS FROM ASIA TO NORTH AMERICA
            {lat: -18.142, lng: 178.431}, // IT LOOKS LIKE THE COORDINATES WE HAVE ARE TOO CLOSE TOGETHER
            {lat: -27.467, lng: 153.027} // FOR GOOGLE MAPS TO DISPLAY
            ];*/
            /*var points = [
                {lat: -86.772, lng: 39.214},
                {lat: 21.291, lng: -157.821},
            ];*/

            /*var points = [
            {lng: -86.008, lat: 39.966},
            {lng: -80.008, lat: 45.966}, // EXAMPLE POINTS FROM ASIA TO NORTH AMERICA
            ];*/

            var line = new google.maps.Polyline({
                path: points,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 4
            });
            line.setMap(map);

            $timeout(updateBeaconRoute, 1500);
        });
    }

    function updateTemperatureGraph() {
        var TEMP_GRAPH_URL = "https://api-m2x.att.com/v2/charts/d1edaffde45a1b34158bcbb959b3e582.png";
        var tempGraphUrl = TEMP_GRAPH_URL + "?rand=" + Math.random();

        var tempGraph = document.getElementById('tempGraph');
        tempGraph.src = tempGraphUrl;

        $timeout(updateTemperatureGraph, 5000);
    }

    function updateHumidityGraph() {
        var TEMP_GRAPH_URL = "https://api-m2x.att.com/v2/charts/d1edaffde45a1b34158bcbb959b3e582.png";
        var tempGraphUrl = TEMP_GRAPH_URL + "?rand=" + Math.random();

        var tempGraph = document.getElementById('humidGraph');
        tempGraph.src = tempGraphUrl;

        $timeout(updateHumidityGraph, 5000);
    }

    function updateTemperatureGraph2() {
        var TEMP_GRAPH_URL = "https://api-m2x.att.com/v2/charts/d1edaffde45a1b34158bcbb959b3e582.png";
        var tempGraphUrl = TEMP_GRAPH_URL + "?rand=" + Math.random();

        var tempGraph = document.getElementById('tempGraph2');
        tempGraph.src = tempGraphUrl;

        $timeout(updateTemperatureGraph2, 1500);
    }

    function updateTemperatureGraph3() {
        var TEMP_GRAPH_URL = "https://api-m2x.att.com/v2/charts/d1edaffde45a1b34158bcbb959b3e582.png";
        var tempGraphUrl = TEMP_GRAPH_URL + "?rand=" + Math.random();

        var tempGraph = document.getElementById('tempGraph3');
        tempGraph.src = tempGraphUrl;

        $timeout(updateTemperatureGraph3, 5000);
    }

    function updateBatteryGraph() {
        var TEMP_GRAPH_URL = "https://api-m2x.att.com/v2/charts/d1edaffde45a1b34158bcbb959b3e582.png";
        var tempGraphUrl = TEMP_GRAPH_URL + "?rand=" + Math.random();

        var tempGraph = document.getElementById('batteryGraph');
        tempGraph.src = tempGraphUrl;

        $timeout(updateBatteryGraph, 5000);
    }

    function convertM2XToMaps(point) {
        return {
            lat: Number(point.values.Longitude), // TODO: FIX THIS WHEN YOU FLIP THEM BACK
            lng: Number(point.values.Latitude)
        };
    }

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 39.967066291756, lng: -86.008531004270},
        mapTypeId: 'terrain'
    });

    updateBeaconRoute();
    updateTemperatureGraph();
    updateHumidityGraph();
    updateTemperatureGraph2();
    updateTemperatureGraph3();
    updateBatteryGraph();
}]);