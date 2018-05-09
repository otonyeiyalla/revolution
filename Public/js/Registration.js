angular.module('Revolution')
    .controller('RegistrationController', function ($scope, RevolutionService) {
        console.log ("registration");

        $scope.registration = function () {
            console.log($scope.data);

            if(!$scope.data || (!$scope.data.phoneNumber && !$scope.data.email)) {
                swal("Registration unsuccessful", "Please provide a phone number or email", "error");
            }else if (!($scope.data.size)) {
                swal("Registration unsuccessful", "Please provide shirt size", "error");
            /*}else if (!$scope.data.name){
                swal("Registration unsuccessful", "Please provide your name", "error");*/
            } else {
                RevolutionService.registration($scope.data).then(function (res) {
                    if (res.status == 200) {
                        swal("Registration successful", "", "success");
                        $scope.data = {};
                    }
                })
            }
        }


    });