githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var self = this;

  var searchResource = $resource('https://api.github.com/search/users?access_token=fd29572032dc58198ec5fed2cf13d53379c4aa86');

  self.doSearch = function() {
    self.searchResult = searchResource.get(
        { q: self.searchTerm }
      )
    };
}])
