angular.module('video-player')

.directive('search', function() {
  return {
    // TODO
    scope: {
      selectVideo: '<'
    },

    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log($scope);
    },

    templateUrl: 'src/templates/search.html'
  };
});
