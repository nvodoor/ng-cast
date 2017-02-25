angular.module('video-player', [])

.controller('appController', function ($scope) {
  $scope.videoList = window.exampleVideoData;
})
 
.directive('app', function() {
  return {

    templateUrl: 'src/templates/app.html'
  };
});
