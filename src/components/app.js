angular.module('video-player', [])

.controller('appController', function ($scope) {
  $scope.videoList = window.exampleVideoData;
  $scope.currentplaying = window.exampleVideoData[0];
  $scope.onClick = function () {};
})
 
.directive('app', function() {
  return {

    templateUrl: 'src/templates/app.html'
  };
});
