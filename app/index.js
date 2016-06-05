import 'bootstrap/dist/css/bootstrap.css';
//IMPORTUJE SOBIE FRAMEWORK BOOTSRRAP 
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './config';

import home from './features/directives'; 

const ngModule = angular.module('app',[
    uirouter,
    home
    ])
    .config(routing);