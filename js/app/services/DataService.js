function DataService($http) {

  this.getPeople = function(page){
    return $http.get('http://swapi.co/api/people/?format=json&page=' + page)
  }

  this.getStarWarsShip = function(url){
    return $http.get(url)
  }

}

angular
    .module('app')
    .service('DataService', DataService);
