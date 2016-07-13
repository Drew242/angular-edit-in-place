angular.module('UserApp', []);

angular.module('UserApp')
  .controller('user', [
    '$http',
    userCtrl
  ]);

function userCtrl($http) {
  var user        = this;
  user.inputFn    = false;
  user.inputLn    = false;
  user.inputE     = false;
  user.showFn     = true;
  user.showLn     = true;
  user.showE      = true;
  user.message    = "Hello";
  user.subMessage = "my name is";
  user.firstname  = "John";
  user.lastname   = "Doe";
  user.email      = "john.doe@aol.com";

  user.editFn = function() {
      user.inputFn = !user.inputFn;
      user.showFn  = !user.showFn;
  }
  user.editLn = function() {
      user.inputLn = !user.inputLn;
      user.showLn  = !user.showLn;
  }
  user.editE = function() {
      user.inputE = !user.inputE;
      user.showE = !user.showE;
  }

}
