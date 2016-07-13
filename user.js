angular.module('UserApp', []);

angular.module('UserApp')
  .controller('user', [
    '$http',
    userCtrl
  ]);

function userCtrl($http) {
  var user       = this;
  user.message   = "Edit User";
  user.intro     = "Profile Name";
  user.firstname = "";
  user.lastname  = "";
  user.email  = ""; 
}
