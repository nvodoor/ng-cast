angular.module('video-player', [])

.controller('appController', function ($scope) {
  $scope.videoList = window.exampleVideoData;
  $scope.currentplaying = window.exampleVideoData[0];
  $scope.onClick = function () {};
  $scope.url = window.exampleVideoData[0].id.videoId;
})
 
.filter('trustAsResourceUrl', ['$sce', function($sce) {
  return function(val) {
    return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + val);
  };
}])

.directive('app', function() {
  return {

    templateUrl: 'src/templates/app.html'
  };
});
