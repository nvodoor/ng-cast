angular.module('video-player', [])

.controller('appController', function ($scope) {
  // $scope.videos = window.exampleVideoData;
  // $scope.currentplaying = window.exampleVideoData[0];
  // $scope.currentVideo = window.exampleVideoData[0];
  // $scope.onClick = function (selection) {
  //   $scope.currentplaying = selection;
  //   console.log(selection);
  // };
  // $scope.url = window.exampleVideoData[0].id.videoId;
  // $scope.selectVideo = function() {};
})


 
.filter('trustAsResourceUrl', ['$sce', function($sce) {
  return function(val) {
    return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + val);
  };
}])

.directive('app', function() {
  return {
    scope: {
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      $scope.ctrl.videos = window.exampleVideoData;
      $scope.ctrl.currentplaying = window.exampleVideoData[0];
      $scope.ctrl.currentVideo = window.exampleVideoData[0];
      $scope.ctrl.onClick = function (selection) {
        $scope.ctrl.currentplaying = selection;
        console.log(selection);
      };
      $scope.ctrl.url = window.exampleVideoData[0].id.videoId;
      $scope.ctrl.selectVideo = function() {};
      console.log($scope);
    },
    templateUrl: 'src/templates/app.html'
  };



});
