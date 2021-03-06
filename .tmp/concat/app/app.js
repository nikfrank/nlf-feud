'use strict';

angular.module('feudApp', ['feudApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap']).config(["$urlRouterProvider", "$locationProvider", function ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
}]);
//# sourceMappingURL=app.js.map

'use strict';

angular.module('feudApp.util', []);
//# sourceMappingURL=util.module.js.map

'use strict';

(function (angular, undefined) {
  'use strict';

  angular.module('feudApp.constants', []).constant('appConfig', { userRoles: ['guest', 'user', 'admin'] });
})(angular);
//# sourceMappingURL=app.constant.js.map

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MainController = function MainController() {
    var _this = this;

    _classCallCheck(this, MainController);

    var avs = ['bernie', 'hillary', 'trump', 'bibi'];

    this.av = ['trump', 'bibi'];
    this.rotateAv = function (n) {
      var c = avs.indexOf(_this.av[n]);
      var c2 = avs.indexOf(_this.av[(n + 1) % 2]);

      if ((c + 1) % avs.length === c2) c = (c + 2) % avs.length;else c = (c + 1) % avs.length;

      _this.av[n] = avs[c];
    };

    this.sum = function (arr) {
      return arr.reduce(function (p, c) {
        return p + 1 * c;
      }, 0);
    };

    var ding = new Audio('assets/audio/ding.mp3');
    var buzz = new Audio('assets/audio/buzz.mp3');
    var theme = new Audio('assets/audio/theme.mp3');

    this.toggleTheme = function () {
      theme.paused ? theme.play() : theme.pause();
    };

    this.reveal = function (answer) {
      if (answer.show) return;
      ding.play();

      answer.show = true;
      if (_this.xs < 3) _this.qscore += answer.value;
    };

    this.scores = [0, 0];
    this.qscore = 0;
    this.xs = 0;
    this.arr = function (n) {
      return Array.apply(null, new Array(n)).map(function (m) {
        return 1;
      });
    };

    this.ff = function (a) {
      return (a || []).slice(0, 5);
    };
    this.lf = function (a) {
      return (a || []).slice(5, 10);
    };

    this.scoreTo = function (teamI) {
      if (_this.games[_this.gameI].type === 'questions') {
        _this.scores[teamI] += _this.qscore;
        _this.qscore = 0;
      } else {
        if (_this.sum(_this.fms[0]) + _this.sum(_this.fms[1]) > 199) {
          _this.win = 'TEAM ' + _this.av[teamI].toUpperCase() + ' WINS';
        } else {
          _this.win = 'TEAM ' + _this.av[teamI].toUpperCase() + ' LOSES';
        }
      }
    };

    this.gameI = -1;

    this.prevGame = function () {
      _this.gameI = Math.max(0, _this.gameI - 1);
      _this.qI = 0;
      if (_this.games[_this.gameI].type === 'questions') _this.clear();
    };

    this.nextGame = function () {
      _this.gameI = Math.min(_this.games.length - 1, _this.gameI + 1);
      _this.qI = 0;
      _this.fms = [[], []];
      if (_this.games[_this.gameI].type === 'questions') _this.clear();
    };

    this.prevQ = function () {
      _this.qI = Math.max(0, _this.qI - 1);
      _this.qscore = 0;
      _this.xs = 0;
    };

    this.nextQ = function () {
      _this.qI = Math.min(_this.games[_this.gameI].questions.length - 1, _this.qI + 1);
      _this.qscore = 0;
      _this.xs = 0;
    };

    this.x = function () {
      _this.xs += 1;
      buzz.play();
    };

    this.clear = function () {
      _this.xs = 0;
      _this.scores = [0, 0];
      _this.win = '';
      _this.hideFM = false;
    };

    this.toggleHideFM = function () {
      return _this.hideFM = !_this.hideFM;
    };

    this.oldGames = [{
      type: 'questions',
      questions: [{ "text": "name a valve located in the heart",
        "answers": [{ "text": "tricuspid", "value": 25 }, { "text": "bicuspid/mitral", "value": 25 }, { "text": "pulmonary", "value": 25 }, { "text": "aortic", "value": 25 }] }, { "text": "name a factor that influences blood pressure",
        "answers": [{ "text": "heart rate", "value": 20 }, { "text": "blood volume", "value": 20 }, { "text": "strength of heart contraction", "value": 20 }, { "text": "blood viscosity", "value": 20 }, { "text": "resistance to blood flow", "value": 20 }] }, { "text": "name an endocrine gland",
        "answers": [{ "text": "hypothalamus", "value": 10 }, { "text": "pituitary", "value": 10 }, { "text": "thyroid", "value": 10 }, { "text": "parathyroid", "value": 10 }, { "text": "pineal", "value": 10 }, { "text": "thymus", "value": 10 }, { "text": "adrenal", "value": 10 }, { "text": "pancreatic islet/pancreas", "value": 10 }, { "text": "ovary", "value": 10 }, { "text": "testis", "value": 10 }] }, { "text": "what body functions are influenced by prostaglandins",
        "answers": [{ "text": "blood pressure", "value": 20 }, { "text": "respiration", "value": 20 }, { "text": "inflammation", "value": 20 }, { "text": "reproductive system", "value": 20 }, { "text": "gastrointestinal secretions", "value": 20 }] }, { "text": "name an organ of the lymphatic system",
        "answers": [{ "text": "lymph nodes", "value": 25 }, { "text": "tonsils", "value": 25 }, { "text": "thymus", "value": 25 }, { "text": "spleen", "value": 25 }] }]
    }, {
      type: 'fast-money'
    }, {
      type: 'questions',
      questions: [{ "text": "name a hormone secreted by the anterior pituitary gland",
        "answers": [{ "text": "thyroid-stimulating hormone", "value": 17 }, { "text": "adrenocorticotropic hormone", "value": 17 }, { "text": "follicle-stimulating hormone", "value": 17 }, { "text": "luteinizing hormone", "value": 17 }, { "text": "growth hormone", "value": 16 }, { "text": "prolactin", "value": 16 }] }, { "text": "name a structure that makes up the conduction system of the heart",
        "answers": [{ "text": "sinoatrial node/SA node/pacemaker", "value": 25 }, { "text": "atrioventricular node/AV node", "value": 25 }, { "text": "AV bundle/bundle of his", "value": 25 }, { "text": "Purkinje fibers/subendocardial branches", "value": 25 }] }, { "text": "name a pulse point",
        "answers": [{ "text": "superficial temporal artery", "value": 10 }, { "text": "facial artery", "value": 10 }, { "text": "carotid artery", "value": 10 }, { "text": "axillary artery", "value": 10 }, { "text": "brachial artery", "value": 10 }, { "text": "radial artery ", "value": 10 }, { "text": "femoral artery", "value": 10 }, { "text": "popliteal", "value": 10 }, { "text": "posterior tibial", "value": 10 }, { "text": "dorsalis pedis", "value": 10 }] }, { "text": "name a type of blood vessel",
        "answers": [{ "text": "artery", "value": 34 }, { "text": "vein", "value": 33 }, { "text": "capillary", "value": 33 }] }, { "text": "name a type of nonspecific immune defense in the body",
        "answers": [{ "text": "mechanical/chemical barrier", "value": 20 }, { "text": "inflammation", "value": 20 }, { "text": "phagocytosis", "value": 20 }, { "text": "complement", "value": 20 }, { "text": "interferon", "value": 20 }] }]
    }, {
      type: 'fast-money'
    }];

    this.games = [{
      type: 'questions',
      questions: [{
        text: 'Which classes of diabetic medications can cause hypoglycemia (low sugar)?',
        answers: [{ text: 'insulin', value: 55 }, { text: 'sulfonylurea', value: 25 }, { text: 'meglitinide', value: 20 }]
      }, {
        text: 'Which classes of diabetic medications can cause weight gain?',
        answers: [{ text: 'insulin', value: 28 }, { text: 'sulfonylurea', value: 26 }, { text: 'meglitinide', value: 24 }, { text: 'thiazolidinedione', value: 22 }]
      }, {
        text: 'Name signs of diabetes',
        answers: [{ text: 'glucosuria', value: 25 }, { text: 'polyuria', value: 21 }, { text: 'polydipsia', value: 21 }, { text: 'blurred vision', value: 18 }, { text: 'polyphagia', value: 18 }, { text: 'weight loss', value: 27 }]
      }, {
        text: 'name long-term complications of diabetes',
        answers: [{ text: 'cardiovascular disease', value: 32 }, { text: 'neuropathy', value: 15 }, { text: 'nephropathy', value: 14 }, { text: 'retinopathy', value: 14 }, { text: 'erectile dysfunction', value: 13 }, { text: 'dental problems', value: 6 }, { text: 'skin problems', value: 6 }]
      }, {
        text: 'name a fast-acting insulin',
        answers: [{ text: 'aspart', value: 37 }, { text: 'glulisine', value: 34 }, { text: 'lispro', value: 29 }]
      }, {
        text: 'name signs of hypoglycemia (low sugar)',
        answers: [{ text: 'sweating', value: 15 }, { text: 'headache', value: 14 }, { text: 'fatigue', value: 14 }, { text: 'trembling', value: 14 }, { text: 'hunger', value: 13 }, { text: 'diziness', value: 12 }, { text: 'mood changes', value: 12 }, { text: 'blurred vision', value: 5 }]
      }, {
        text: 'What equals 15 gram of a fast-acting carbohydrate (to treat hypoglycemia)?',
        answers: [{ text: '3 packets of table sugar', value: 19 }, { text: '1 tablespoon of honey', value: 18 }, { text: '3/4 cup of juice or regular soda', value: 16 }, { text: '6 Lifesavers', value: 16 }, { text: '2 packets of Rockets', value: 16 }, { text: '4 Dex 4 tablets', value: 15 }]
      }, {
        text: 'Risk factors of diabetes',
        answers: [{ text: 'increasing age', value: 23 }, { text: 'family history', value: 22 }, { text: 'obesity', value: 19 }, { text: 'physical inactivity', value: 18 }, { text: 'smoking', value: 18 }]
      }]
    }, {
      type: 'fast-money'
    }, {
      type: 'questions',
      questions: [{
        text: 'name a symptom of hyperthyroidism',
        answers: [{ text: 'rapid heart rate', value: 22 }, { text: 'tremor', value: 21 }, { text: 'nervousness', value: 18 }, { text: 'sweating', value: 17 }, { text: 'heat intolerance', value: 17 }, { text: 'bulging eyes (give small amount of points)', value: 5 }]
      }, {
        text: 'Name a symptom of hypothyroidism',
        answers: [{ text: 'slow heart rate', value: 28 }, { text: 'lethargy', value: 26 }, { text: 'dry coarse hair', value: 24 }, { text: 'cold intolerance', value: 22 }]
      }, {
        text: 'Name a specific type of body fluid (in a specific area)',
        answers: [{ text: 'cerebrospinal fluid', value: 23 }, { text: 'synovial fluid', value: 22 }, { text: 'intracellular fluid', value: 20 }, { text: 'blood', value: 18 }, { text: 'aqueous and/or vitreous humor', value: 17 }]
      }, {
        text: 'name an anion in the body',
        answers: [{ text: 'bicarbonate HCO_3 (−)', value: 28 }, { text: 'chloride Cl (−)', value: 26 }, { text: 'phosphate PO_4 (−)', value: 24 }, { text: 'sulfate SO_4 (2−)', value: 22 }]
      }, {
        text: 'Name a cation in the body',
        answers: [{ text: 'calcium Ca (2+)', value: 27 }, { text: 'magnesium Mg (2+)', value: 26 }, { text: 'potassium K (+)', value: 25 }, { text: 'sodium Na (+)', value: 22 }]
      }, {
        text: 'name a cause of hypercalcemia',
        answers: [{ text: 'lung/breast cancer', value: 18 }, { text: 'overactive parathyroid', value: 18 }, { text: 'osteoporosis', value: 17 }, { text: 'thiazide diuretics', value: 16 }, { text: 'vitamin D supplements', value: 16 }, { text: 'excessive doses of calcium', value: 15 }]
      }, {
        text: 'name a sign/symptom of hypokalemia',
        answers: [{ text: 'cardiac arrhythmias', value: 33 }, { text: 'muscle weakness', value: 25 }, { text: 'anorexia', value: 7 }, { text: 'nausea', value: 7 }, { text: 'vomiting', value: 7 }, { text: 'depression', value: 7 }, { text: 'confusion', value: 7 }, { text: 'decreased reflexes', value: 7 }]
      }]
    }, {
      type: 'fast-money'
    }];
  };

  angular.module('feudApp').component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });
})();
//# sourceMappingURL=main.controller.js.map

'use strict';

angular.module('feudApp').config(["$stateProvider", function ($stateProvider) {
  $stateProvider.state('main', {
    url: '/',
    template: '<main></main>'
  });
}]);
//# sourceMappingURL=main.js.map

'use strict';

angular.module('feudApp').directive('footer', function () {
  return {
    templateUrl: 'components/footer/footer.html',
    restrict: 'E',
    link: function link(scope, element) {
      element.addClass('footer');
    }
  };
});
//# sourceMappingURL=footer.directive.js.map

'use strict';

angular.module('feudApp').factory('Modal', ["$rootScope", "$uibModal", function ($rootScope, $uibModal) {
  /**
   * Opens a modal
   * @param  {Object} scope      - an object to be merged with modal's scope
   * @param  {String} modalClass - (optional) class(es) to be applied to the modal
   * @return {Object}            - the instance $uibModal.open() returns
   */
  function openModal() {
    var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var modalClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'modal-default';

    var modalScope = $rootScope.$new();

    angular.extend(modalScope, scope);

    return $uibModal.open({
      templateUrl: 'components/modal/modal.html',
      windowClass: modalClass,
      scope: modalScope
    });
  }

  // Public API here
  return {

    /* Confirmation modals */
    confirm: {

      /**
       * Create a function to open a delete confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
       * @param  {Function} del - callback, ran when delete is confirmed
       * @return {Function}     - the function to open the modal (ex. myModalFn)
       */
      delete: function _delete() {
        var del = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : angular.noop;

        /**
         * Open a delete confirmation modal
         * @param  {String} name   - name or info to show on modal
         * @param  {All}           - any additional args are passed straight to del callback
         */
        return function () {
          var args = Array.prototype.slice.call(arguments),
              name = args.shift(),
              deleteModal;

          deleteModal = openModal({
            modal: {
              dismissable: true,
              title: 'Confirm Delete',
              html: '<p>Are you sure you want to delete <strong>' + name + '</strong> ?</p>',
              buttons: [{
                classes: 'btn-danger',
                text: 'Delete',
                click: function click(e) {
                  deleteModal.close(e);
                }
              }, {
                classes: 'btn-default',
                text: 'Cancel',
                click: function click(e) {
                  deleteModal.dismiss(e);
                }
              }]
            }
          }, 'modal-danger');

          deleteModal.result.then(function (event) {
            del.apply(event, args);
          });
        };
      }
    }
  };
}]);
//# sourceMappingURL=modal.service.js.map

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

'use strict';

angular.module('feudApp').directive('navbar', function () {
  return {
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  };
});
//# sourceMappingURL=navbar.directive.js.map

'use strict';

(function () {

  /**
   * The Util service is for thin, globally reusable, utility functions
   */
  UtilService.$inject = ["$window"];
  function UtilService($window) {
    var Util = {
      /**
       * Return a callback or noop function
       *
       * @param  {Function|*} cb - a 'potential' function
       * @return {Function}
       */
      safeCb: function safeCb(cb) {
        return angular.isFunction(cb) ? cb : angular.noop;
      },


      /**
       * Parse a given url with the use of an anchor element
       *
       * @param  {String} url - the url to parse
       * @return {Object}     - the parsed url, anchor element
       */
      urlParse: function urlParse(url) {
        var a = document.createElement('a');
        a.href = url;

        // Special treatment for IE, see http://stackoverflow.com/a/13405933 for details
        if (a.host === '') {
          a.href = a.href;
        }

        return a;
      },


      /**
       * Test whether or not a given url is same origin
       *
       * @param  {String}           url       - url to test
       * @param  {String|String[]}  [origins] - additional origins to test against
       * @return {Boolean}                    - true if url is same origin
       */
      isSameOrigin: function isSameOrigin(url, origins) {
        url = Util.urlParse(url);
        origins = origins && [].concat(origins) || [];
        origins = origins.map(Util.urlParse);
        origins.push($window.location);
        origins = origins.filter(function (o) {
          return url.hostname === o.hostname && url.port === o.port && url.protocol === o.protocol;
        });
        return origins.length >= 1;
      }
    };

    return Util;
  }

  angular.module('feudApp.util').factory('Util', UtilService);
})();
//# sourceMappingURL=util.service.js.map

angular.module('feudApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/main/main.html',
    "<div ng-if=\"$ctrl.gameI == -1\" class=logo><img src=assets/images/logo.png ng-click=$ctrl.toggleTheme()></div><div ng-if=\"$ctrl.games[$ctrl.gameI].type == 'questions'\"><div class=question-text>{{$ctrl.games[$ctrl.gameI].questions[$ctrl.qI].text}}</div><div class=qscore>{{$ctrl.qscore}}</div><div class=answer-col-container><ul class=answers><li ng-repeat=\"answer in $ctrl.ff($ctrl.games[$ctrl.gameI].questions[$ctrl.qI].answers)\" ng-click=$ctrl.reveal(answer)><div ng-show=answer.show><span class=answer-text>{{answer.text}} </span><span class=answer-value>{{answer.value}}</span></div><div ng-hide=answer.show>{{$index+1}}</div></li></ul><ul class=answers ng-show=\"$ctrl.games[$ctrl.gameI].questions[$ctrl.qI].answers.length>5\"><li ng-repeat=\"answer in $ctrl.lf($ctrl.games[$ctrl.gameI].questions[$ctrl.qI].answers)\" ng-click=$ctrl.reveal(answer)><div ng-show=answer.show><span class=answer-text>{{answer.text}} </span><span class=answer-value>{{answer.value}}</span></div><div ng-hide=answer.show>{{$index+6}}</div></li></ul></div></div><div ng-if=\"$ctrl.games[$ctrl.gameI].type == 'fast-money'\"><h1>FAST MONEY - - - <button ng-click=$ctrl.toggleHideFM()>{{$ctrl.hideFM? 'show':'hide'}}</button></h1><div class=fast-money><div class=fast-round ng-repeat=\"b in [0,1]\"><input ng-repeat-start=\"a in [0,1,2,3,4]\" ng-class={hidefm:$ctrl.hideFM&&!b}> <input ng-model=$ctrl.fms[b][a]><br ng-repeat-end><div class=player-total>{{$ctrl.sum($ctrl.fms[b])}}</div></div></div><hr><div class=team-total ng-click=\"$ctrl.win = ''\">{{$ctrl.win}}</div></div><div class=x-container><img src=assets/images/x.png ng-repeat=\"x in $ctrl.arr($ctrl.xs) track by $index\"></div><!--controls for game, x, teams...--><div class=controls><div class=team ng-click=$ctrl.scoreTo(0)><span ng-click=$ctrl.rotateAv(0)>TEAM {{$ctrl.av[0] | uppercase}}: {{$ctrl.scores[0]}} </span><img ng-src=assets/images/{{$ctrl.av[0]}}.png></div><button ng-click=$ctrl.prevQ()>Prev Q</button> <button ng-click=$ctrl.nextQ()>Next Q</button> <button ng-click=$ctrl.x()>BUZZ</button> <button ng-click=$ctrl.clear()>Clear</button> <button ng-click=$ctrl.prevGame()>Prev Game</button> <button ng-click=$ctrl.nextGame()>Next Game</button><div class=team ng-click=$ctrl.scoreTo(1)><span ng-click=$ctrl.rotateAv(1)>TEAM {{$ctrl.av[1] | uppercase}}: {{$ctrl.scores[1]}} </span><img ng-src=assets/images/{{$ctrl.av[1]}}.png></div></div>"
  );


  $templateCache.put('components/footer/footer.html',
    "<div class=container><p>Angular Fullstack v3.6.1 | <a href=https://twitter.com/tyhenkel>@tyhenkel</a> | <a href=\"https://github.com/DaftMonk/generator-angular-fullstack/issues?state=open\">Issues</a></p></div>"
  );


  $templateCache.put('components/modal/modal.html',
    "<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat=\"button in modal.buttons\" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>"
  );


  $templateCache.put('components/navbar/navbar.html',
    "<div class=\"navbar navbar-default navbar-static-top\" ng-controller=NavbarController><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click=\"nav.isCollapsed = !nav.isCollapsed\"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href=/ class=navbar-brand>feud</a></div><div uib-collapse=nav.isCollapsed class=\"navbar-collapse collapse\" id=navbar-main><ul class=\"nav navbar-nav\"><li ng-repeat=\"item in nav.menu\" ui-sref-active=active><a ui-sref={{item.state}}>{{item.title}}</a></li></ul></div></div></div>"
  );

}]);

