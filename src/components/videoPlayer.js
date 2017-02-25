angular.module('video-player')

.directive('videoPlayer', function() {
  var videoString = 'https://www.youtube.com/embed/1w8Z0UOXVaY';
  return {
    scope: {
      videoListForPlayer: '<',
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
