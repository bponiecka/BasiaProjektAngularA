export default function routing($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
}
//Config.js pozwala developerowi na skomfigurowanie applikacji w blokach XML
//zamiast  hard-coding values w skryptach, albo w objektacg JSON.
