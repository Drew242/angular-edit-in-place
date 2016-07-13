console.log('angular time');
angular.module('UserApp', []);

angular.module('UserApp')
  .controller('user', [
    '$http',
    userCtrl
  ]);

function userCtrl($http) {
  console.log('FML', $http);
  var userCtrl = this;
  userCtrl.message = "Edit User";
}
