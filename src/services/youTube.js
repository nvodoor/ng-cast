
angular.module('video-player')
.service('youTube', function($http, $window) {
  // TODO
  this.search = function(query, callback) {

    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 5,
        key: $window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      }
    })
  .then(function({data}) {
    if (callback) {
      callback(data.items);
      console.log('success');
    }
  })
  .catch(function ({data}) {
    data.errors.errors.forEach(function(err) {
      console.error('nooo!');
    });
  });
  };
});
