angular.module('myApp').service('m2x', ['$http', 'M2X_API_KEY', 'M2X_DEVICE_ID', 'M2X_API_BASE',
function ($http, M2X_API_KEY, M2X_DEVICE_ID, M2X_API_BASE) {
    
    this.getGeoLocationPoints = function () {
        return $http.get(M2X_API_BASE + 'devices/' + M2X_DEVICE_ID + '/values', {
            headers: {
                'X-M2X-KEY': M2X_API_KEY
            }
        }).then(function(geoData) {
            return _.filter(geoData.data.values, function (value) {
                return _.has(value, 'values.Latitude') && _.has(value, 'values.Longitude') && _.has(value, 'values.DeviceID') && value.values.Longitude > 0 && value.values.Latitude < 0;
            });
        })
    };

    this.getBeacons = function () {
        return $http.get(M2X_API_BASE + 'devices/' + M2X_DEVICE_ID + '/values', {
            headers: {
                'X-M2X-KEY': M2X_API_KEY
            }
        }).then(function(geoData) {
            // console.log(geoData);
            return _.filter(geoData.data.values, function (value) {
                return _.has(value, 'values.Latitude') && _.has(value, 'values.Longitude') && _.has(value, 'values.DeviceID');
            });
        })
    };
}]);