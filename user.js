angular.module('UserApp', []);

angular.module('UserApp')
  .controller('user', [
    '$http',
    userCtrl
  ]);

function userCtrl($http) {
  var user       = this;
  user.inputFn   = false;
  user.inputLn   = false;
  // user.inputE    = false;
  user.message   = "Edit User";
  user.intro     = "Profile Name";
  user.firstname = "John";
  user.lastname  = "Doe";
  user.email     = "john.doe@aol.com";

  user.editFn = function() {
    console.log('editFn');
      user.inputFn = !user.inputFn;
  }
  user.editLn = function() {
    console.log('editLn');
      user.inputLn = !user.inputLn;
  }
  user.editE = function() {
    console.log('editE');
      user.inputE = !user.inputE;
  }

}
