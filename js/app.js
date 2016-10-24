var app = angular.module('playgroundApp', ['ngDragDrop', 'ngAnimate']);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.controller('PlayGroundCtrl', ['_', "$scope", function(_, $scope) {
  var vm = this;

  vm.list1 = [
    { 'title': 'N', 'drag': true },
    { 'title': 'L', 'drag': true },
    { 'title': 'I', 'drag': true },
    { 'title': 'I', 'drag': true },
    { 'title': 'E', 'drag': true },
    { 'title': 'N', 'drag': true }
  ];
  vm.list2 = [
    { 'title': 'N', 'drag': true },
    { 'title': 'L', 'drag': true },
    { 'title': 'I', 'drag': true },
    { 'title': 'I', 'drag': true },
    { 'title': 'E', 'drag': true },
    { 'title': 'N', 'drag': true }
  ];

  vm.nestedList = [
    {
      name: 'this is row 1',
      components: [
        {name: 'this is component 1'},
        {name: 'this is component 2'},
        {name: 'this is component 3'}
      ]
    },
    {
      name: 'this is row 2',
      components: [
        {name: 'this is component 1'},
        {name: 'this is component 2'},
        {name: 'this is component 3'}
      ]
    },
    {
      name: 'this is row 3',
      components: [
        {name: 'this is component 1'},
        {name: 'this is component 2'},
        {name: 'this is component 3'}
      ]
    }
  ];

  // vm.onStart = function () {
  //   console.log('hello');
  // };
  //
  vm.logData = function () {
    console.log(vm.list1);
  };
}]);

app.component('grid', {
  controller: 'PlayGroundCtrl',
  restrict: 'E',
  templateUrl: "grid.html"
});
