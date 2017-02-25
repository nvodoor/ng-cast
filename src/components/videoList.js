angular.module('video-player')
// .controller('videoListController', function (scope) {
//   scope.videoListEntry = videoList[0];
//   // $scope.console = function() { console.log('test'); };
// })
.directive('videoList', function() {
  return {
    scope: {
      vids: '<'
    },

    templateUrl: 'src/templates/videoList.html'
  };
});
