import 'bootstrap/dist/css/bootstrap.css';
//IMPORTUJE SOBIE FRAMEWORK BOOTSRRAP 
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './config';

<<<<<<< HEAD
import home from './home'; 
//import home from './features/directives'; 
=======
import home from './features/directives'; 
>>>>>>> dde09f8e182b6fdd921dd563acef905189f965a2

const ngModule = angular.module('app',[
    uirouter,
    home
    ])
    .config(routing);