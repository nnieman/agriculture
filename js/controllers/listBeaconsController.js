angular.module('myApp').controller('listBeaconsController', ['$scope', function ($scope) {
    var NUM_BEACONS = 10;
    
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
    for (var i = 0; i < NUM_BEACONS; i++) {
        $scope.beacons.push(getRandomBeacon());
    }
}]);