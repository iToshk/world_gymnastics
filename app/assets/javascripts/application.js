// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui
//= require angular
//= require angular-animate
//= require angular-bootstrap
//= require angular-ui-router
//= require angular-animate
//= require underscore
//= require bootstrap-sass
//= require_tree .




var app = angular.module("app", [
    "ngAnimate",
    "ui.router",
    "ui.bootstrap"
]);

app.controller("ApplicationController", ['$scope', function(
    $scope)
{
    $scope.mens_floor = "床（男子）";

    $scope.scrollSmoothTo = function(elementOrName){
        var element = {'true':$('*[name='+elementOrName+'],'+
                                '#'+elementOrName).eq(0),
                       'false':elementOrName}[typeof elementOrName === 'string'];
        if(!element){
            return;
        }
        if(!element.offset){
            element = $(element);
        }
        if(!element.offset){
            return;
        }
        var top = Math.max(0, element.offset().top - ($(window).height()/8));
        $('html,body').
        animate(
            {'scrollTop': top},
            'slow'
        );
    };
}]);






