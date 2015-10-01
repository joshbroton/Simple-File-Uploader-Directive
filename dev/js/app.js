'use strict';

var fileUploaderApp = angular.module('fileUploaderApp', ['simpleFileUploader']);

fileUploaderApp.controller('SimpleFileUploaderController', ['$scope', function ($scope) {
    $scope.data = {
        fileUploaderValue: ''
    };

    console.log('here');
    $scope.init = function () {
        window.setInterval(function () {
            console.log($scope.data.fileUploaderValue);
        }, 1000);
    };
    $scope.init();

    $scope.fileChanged = function (event) {
        console.log(event.target.files);
        $scope.data.fileUploaderValue = event.target.files;
    };
}]);