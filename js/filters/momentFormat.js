angular.module('myApp').filter('momentFormat', function() {
    return function(momentDatetime) {
        return momentDatetime.format("H:mm a M/D/YYYY");
    }
});