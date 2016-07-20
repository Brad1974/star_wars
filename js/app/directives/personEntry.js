function PersonEntry () {
  return {

      scope: {},

      templateUrl: 'views/person.html',

      bindToController: { id: '='},

      controller: function (DataService) {
        var ctrl = this;
        ctrl.ships = [];
        if (ctrl.id.starships.length > 0) {
          ctrl.id.starships.forEach(function(ship){
            DataService.getStarWarsShip(ship)
            .then(function(result){
              ctrl.ships.push(result.data)
            })
          })
        }

      },
      controllerAs: 'pers'
    };
  };

    angular
      .module('app')
      .directive('personEntry', PersonEntry);
