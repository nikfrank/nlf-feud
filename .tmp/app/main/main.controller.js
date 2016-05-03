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

										this.reveal = function (answer) {
															if (answer.show) return;
															// play the ding
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
															_this.scores[teamI] += _this.qscore;
															_this.qscore = 0;
										};

										this.gameI = -1;

										this.prevGame = function () {
															_this.gameI = Math.max(0, _this.gameI - 1);
															_this.qI = 0;
										};

										this.nextGame = function () {
															_this.gameI = Math.min(_this.games.length - 1, _this.gameI + 1);
															_this.qI = 0;
															_this.fms = [[], []];
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
										};

										this.games = [{
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
					};

					angular.module('feudApp').component('main', {
										templateUrl: 'app/main/main.html',
										controller: MainController
					});
})();
//# sourceMappingURL=main.controller.js.map
