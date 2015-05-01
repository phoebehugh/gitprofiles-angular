githubUserSearch.factory('Search', ['$http', function($http) {

  var queryUrl = 'https://api.github.com/search/users';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          //'access_token': 'fd29572032dc58198ec5fed2cf13d53379c4aa86',
          'q': searchTerm
        }
      });
    }
  }

}]);
