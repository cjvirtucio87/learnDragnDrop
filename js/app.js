var app = angular.module('playgroundApp', ['ngDragDrop']);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.controller('PlayGroundCtrl', ['_', "$scope", function(_, $scope) {
  var vm = this;

  vm.list1 = [
    { 'title': 'N' },
    { 'title': 'L' },
    { 'title': 'I' },
    { 'title': 'I' },
    { 'title': 'E' },
    { 'title': 'N' }
  ];
  vm.list2 = [
    { 'title': 'N' },
    { 'title': 'L' },
    { 'title': 'I' },
    { 'title': 'I' },
    { 'title': 'E' },
    { 'title': 'N' }
  ];

  // vm.onStart = function () {
  //   console.log('hello');
  // };
  //
  // vm.onDrop = function () {
  //   console.log('dropped');
  // };
}]);

app.component('grid', {
  controller: 'PlayGroundCtrl',
  restrict: 'E',
  templateUrl: "grid.html"
});
