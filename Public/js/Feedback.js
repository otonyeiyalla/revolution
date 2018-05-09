angular.module('Revolution')
    .controller('FeedbackController', function ($scope, RevolutionService) {
        console.log ("feedback");

        $scope.feedback = function () {
            console.log($scope.data);

            if(!$scope.data) {
                swal("Feedback unsuccessful", "Please enter your name and give a feedback before submitting", "error");
            }else {
                RevolutionService.feedback($scope.data).then(function (res) {
                    if (res.status == 200) {
                        swal("Feedback successful", "", "success");
                        $scope.data = {};
                    }
                })
            }
        }


    });