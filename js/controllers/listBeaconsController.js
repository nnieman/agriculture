angular.module('myApp').controller('listBeaconsController', ['$scope', 'm2x', '$timeout', function ($scope, m2x, $timeout) {
    var NUM_BEACONS = 10;

    function updateListRoute() {
        m2x.getBeacons().then(function(geoLocationPoints) {
            var points = _.map(geoLocationPoints, convertM2XToMaps);
            
            points = _.sortBy(points, function(p) { return p.id}).reverse();

            var id = "";
            var activated = "";
            var processed = "";
            for (var i = 0; i < points.length; i++) {
                if (points[i].id == id) continue;
                if (i > 0 && id.substring(0,4) != "stop") {
                    $scope.beacons.push({
                        id: id,
                        activation_datetime: moment(activated),
                        processed_datetime: moment(points[i-1].time)
                    });
                }
                id = points[i].id;
                activated = points[i].time;
            }
        });
    }

    function convertM2XToMaps(point) {
        return {
            lat: Number(point.values.Latitude),
            lng: Number(point.values.Longitude),
            id: point.values.DeviceID,
            time: point.timestamp
        };
    }
    
    function getMinuteCount() {
        var MAX_MINUTES = 300;
        return Math.floor(Math.random() * MAX_MINUTES);
    }

    function getRandomMetricValue() {
        return Math.round(Math.random() * 100) / 100; 
    }
    
    function getRandomBeacon() {
        var endDatetime = moment().subtract(getMinuteCount() , 'minutes');
        var startDatetime = moment(endDatetime).subtract(getMinuteCount(), 'minutes');
        
        return {
            id: getMinuteCount(),
            activation_datetime: startDatetime,
            processed_datetime: endDatetime
        };
    }
    
    $scope.beacons = [];
    // for (var i = 0; i < NUM_BEACONS; i++) {
    //     $scope.beacons.push(getRandomBeacon());
    // }

    updateListRoute()
}]);