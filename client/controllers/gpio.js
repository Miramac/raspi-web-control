function GpioCtrl($scope, $http) {
    $scope.gpio = "...";
    $http.get("/gpio")
    .success(function(response) {
        $scope.gpio = response.result;
    });
    
    $scope.changeHandler = function(id) {
        var value = ($scope.gpio['gpio'+1]) ? 'on' : 'off';
        $http.put("/gpio/"+id+"/"+value);
    };
}

module.exports = GpioCtrl;
