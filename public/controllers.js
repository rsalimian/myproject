// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {

    // TODO: load history data from mongoDB and show as a ul undernead the Get Forecast button.
    $scope.cityHistory = cityService.history;

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });

    $scope.submit = function() {
        $location.path("/forecast");

        // TODO: add to monogoDB 

    };

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'weatherService', function($scope, $resource, $routeParams, cityService, weatherService) {

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2';
    $scope.weatherResult = weatherService.get($scope.city, $scope.days);

    $scope.convertToFahrenheit = function(degK) {

        return Math.round((1.8 * (degK - 273)) + 32);

    }

    $scope.convertToDate = function(dt) {

        return new Date(dt * 1000);

    };

}]);