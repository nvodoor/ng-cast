angular.module('video-player', [])

.controller('appController', function ($scope) {
  $scope.videoList = window.exampleVideoData;
  $scope.currentplaying = window.exampleVideoData[0];
  $scope.currentVideo = window.exampleVideoData[0];
  $scope.onClick = function (selection) {
    $scope.currentplaying = selection;
    console.log(selection);
  };
  $scope.url = window.exampleVideoData[0].id.videoId;
  $scope.selectVideo = function() {};
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
