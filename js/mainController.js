(function() {
    'use strict';
  angular.module('angularApp').controller('mainController',
      function($scope, $location) {

        $scope.changeTab = function($event){

          $("nav ul li").removeClass("selected");
          $($event.target).parent("li").addClass("selected");
        }

      });

})();
