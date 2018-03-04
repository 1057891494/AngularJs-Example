ctrlapp.register.controller('SelfDirectiveController', ['$scope', '$state', function($scope, $state) {
    $scope.initMethod = function() {
        $scope.info='[控制器里面的值]';
    };
    $scope.sendInfo=function(){
        window.alert('我被指令调用了');
    };
}]);
