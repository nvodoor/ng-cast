angular.module('video-player')

.controller('SearchController', function() {
  this.handleClick = () => {
    this.service.search(this.input, (data) => {
      console.log(data);
      this.result(data);
    });
  };
})

.directive('search', function() {
  return {
    // TODO
    scope: {
      service: '<',
      result: '<'
    },

    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log($scope);
    },

    templateUrl: 'src/templates/search.html'
  };
});
