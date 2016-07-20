function StarWarsController(DataService) {

  var ctrl = this;

  ctrl.peopleArray = [];

  ctrl.populateCharacters = function(){
    var pages
    DataService.getPeople(1)
    .then(function(result){
      pages = Math.ceil(result.data.count / 10);
      ctrl.getAllPages(pages)
    });
  }

  ctrl.getAllPages = function(pages){
    for (i = 1; i <= pages; i++) {
      ctrl.getEachPage(i);
    }
  };

  ctrl.getEachPage = function(page) {
    DataService.getPeople(page)
    .then(function(result){
      result.data.results.forEach(function(item){
        ctrl.peopleArray.push(item)
      })
    })
  }

  ctrl.populateCharacters();

};

angular
    .module('app')
    .controller('StarWarsController', StarWarsController);
