'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarController =
//end-non-standard

//start-non-standard
function NavbarController() {
  _classCallCheck(this, NavbarController);

  this.menu = [{
    'title': 'Home',
    'state': 'main'
  }];
  this.isCollapsed = true;
};

angular.module('feudApp').controller('NavbarController', NavbarController);
//# sourceMappingURL=navbar.controller.js.map
