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
    $scope.code_of_points_2013_to_2016 = "器械体操 難度表 （2013年度-2016年度版）"
    $scope.number_of_skill = "技番号"
    $scope.dificulty_of_skill = "難度"
    $scope.name_of_skill = "技名"
    $scope.sample_link = "参考リンク"

    $scope.mens_floor = "床（男子）"
    $scope.mens_floor_group_1 = "グループI： 跳躍技以外の技"
    $scope.mens_floor_group_2 = "グループII： 前方系の跳躍技"
    $scope.mens_floor_group_3 = "グループIII： 後方系の跳躍技"
    $scope.mens_floor_group_4 = "グループIV： 側方系、とびひねり宙返り系の跳躍技"

    $scope.pommel_horse = "鞍馬"
    $scope.pommel_horse_group_1 = "グループI： 片足振動技と交差技"
    $scope.pommel_horse_group_2 = "グループII： 旋回技、旋回ひねり技、倒立技"
    $scope.pommel_horse_group_3 = "グループIII： 旋回移動技（横向き、縦向き）"
    $scope.pommel_horse_group_4 = "グループIV： 転向技、フロップやコンバイン技"
    $scope.pommel_horse_group_5 = "グループV： 終末技"

    $scope.rings = "吊り輪"
    $scope.rings_group_1 = "グループI： け上がりと振動技（脚前挙になるものを含む）"
    $scope.rings_group_2 = "グループII： 振動倒立技（２秒静止）"
    $scope.rings_group_3 = "グループIII： 振動からの力静止技（脚前挙になるものを除く）（２秒静止）"
    $scope.rings_group_4 = "グループIV： 力技と静止技（２秒静止）"
    $scope.rings_group_5 = "グループV： 終末技"

    $scope.mens_vault = "跳馬（男子）"
    $scope.mens_vault_group_1 = "グループI： 前転とび技、ヤマシタとび技"
    $scope.mens_vault_group_2 = "グループII： 第一局面で1/4または1/2ひねる技"
    $scope.mens_vault_group_3 = "グループIII： ロンダート踏み切り、後転とび技"
    $scope.mens_vault_group_4 = "グループIV： ロンダート踏み切り、ひねり前転とび技"
    $scope.mens_vault_group_5 = "グループV： ロンダート踏み切り、3/4または1回ひねり後転とび技"

    $scope.parallel_bars = "平行棒"
    $scope.parallel_bars_group_1 = "グループI： 両腕での支持技"
    $scope.parallel_bars_group_2 = "グループII： 腕支持振動技"
    $scope.parallel_bars_group_3 = "グループIII： 両棒・単棒での長振動懸垂技"
    $scope.parallel_bars_group_4 = "グループIV： 逆懸垂振動技"
    $scope.parallel_bars_group_5 = "グループV： 終末技"

    $scope.horizontal_bar = "鉄棒"
    $scope.horizontal_bar_group_1 = "グループI： ひねりを伴うまたは伴わない懸垂振動技"
    $scope.horizontal_bar_group_2 = "グループII： 手放し技"
    $scope.horizontal_bar_group_3 = "グループIII： バーに近い技"
    $scope.horizontal_bar_group_4 = "グループIV： 大逆手・背面の技、バーに対して背面の技"
    $scope.horizontal_bar_group_5 = "グループV： 終末技"

    $scope.womens_vault = "跳馬（女子）"
    $scope.womens_vault_group_1 = ""

    $scope.uneven_bar = "段違い平行棒"
    $scope.uneven_bar_group_1 = "グループ1： "
    $scope.uneven_bar_group_2 = "グループ2： "
    $scope.uneven_bar_group_3 = "グループ3： "
    $scope.uneven_bar_group_4 = "グループ4： "
    $scope.uneven_bar_group_5 = "グループ5： "

    $scope.balance_beam = "平均台"
    $scope.balance_beam_group_1 = "グループ1： "
    $scope.balance_beam_group_2 = "グループ2： "
    $scope.balance_beam_group_3 = "グループ3： "
    $scope.balance_beam_group_4 = "グループ4： "
    $scope.balance_beam_group_5 = "グループ5： "

    $scope.womens_floor = "床（女子）"
    $scope.womens_floor_group_1 = "グループ1： "
    $scope.womens_floor_group_2 = "グループ2： "
    $scope.womens_floor_group_3 = "グループ3： "
    $scope.womens_floor_group_4 = "グループ4： "
    $scope.womens_floor_group_5 = "グループ5： "



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






