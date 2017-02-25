angular.module('video-player')
.directive('videoListEntry', function() {

  return {
    scope: {
      video: '<'
    },
    // TODO
    // controllerAs: 'props',
    // bindToController: true,
    // controller: function($scope) {
    //   console.log($scope);
    // }, 

    templateUrl: 'src/templates/videoListEntry.html'
  };
});
