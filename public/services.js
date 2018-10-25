// SERVICES
weatherApp.service('cityService', function() {

    this.city = "New York";

});

weatherApp.service('weatherService', ['$resource', function($resource) {

    this.get = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast");

        return weatherAPI.get({ q: city, cnt: days, appid: '89be0cde3678aa299468c70199b9a60e' });

    };

}]);