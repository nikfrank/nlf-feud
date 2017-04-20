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
