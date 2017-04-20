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
        answers: [{ text: 'insulin', value: 45 }, { text: 'sulfonylurea', value: 22 }, { text: 'meglitinide', value: 17 }]
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
