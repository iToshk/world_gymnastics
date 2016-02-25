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

    $scope.mens_floor_group_1_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "倒立からおろして開脚前挙（脚前挙）支持（２秒）", sample_link: "###" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "脚上挙支持（２秒）", sample_link: "###" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "脚上挙支持（腰が水平、２秒）（マンナ）", sample_link: "###" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "立位から伸腕屈伸倒立（２秒）", sample_link: "###" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "伸腕屈伸閉脚力倒立（２秒）\n 屈腕伸身力倒立（２秒）", sample_link: "###" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "脚上挙支持(２秒)から伸腕屈身閉脚力倒立(２秒)", sample_link: "###" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "マンナ（２秒）から伸腕屈身閉（開）脚力倒立(２秒)", sample_link: "###" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "正面支持臥から勢いをつけて屈腕伸身力倒立(２秒)", sample_link: "###" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "開脚座（脚前挙支持or開脚前挙支持or正面支持臥）から、伸腕屈身力倒立(２秒)", sample_link: "###" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "マンナ（２秒）から肩転位して倒立", sample_link: "###" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "マンナ（２秒）から肩転位して倒立(２秒)", sample_link: "###" },
        { number_of_skill: "19", dificulty_of_skill: "A", name_of_skill: "倒立（２秒）", sample_link: "###" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "倒立から下ろして十字倒立（２秒）\n振動から十字倒立（２秒）", sample_link: "###" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "伸腕屈身力十字力倒立（２秒）", sample_link: "###" },
        { number_of_skill: "25", dificulty_of_skill: "A", name_of_skill: "開脚水平支持（２秒）", sample_link: "###" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "水平支持（２秒）", sample_link: "###" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "中水平支持", sample_link: "###" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "倒立（１回）ひねり\n１回（１/２）ひねり倒立", sample_link: "###" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "開脚水平支持（２秒）から伸腕伸身力倒立（２秒）", sample_link: "###" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "水平支持（２秒）から伸腕伸身力倒立（２秒）", sample_link: "###" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "中水平支持（２秒）から伸腕伸身力倒立（２秒）（アルバニロ）", sample_link: "###" },
        { number_of_skill: "37", dificulty_of_skill: "A", name_of_skill: "脚上挙などから後方回転開脚立ち", sample_link: "###" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "倒立前転開脚浮腰支持経過倒立（２秒）", sample_link: "###" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "倒立から伸膝前転脚前挙支持経過倒立（２秒）", sample_link: "###" },
        { number_of_skill: "49", dificulty_of_skill: "A", name_of_skill: "後方倒立回転\n背面支持臥から片足でけって倒立(メリケニ)", sample_link: "###" },
        { number_of_skill: "55", dificulty_of_skill: "A", name_of_skill: "前方倒立回転", sample_link: "###" },
        { number_of_skill: "61", dificulty_of_skill: "A", name_of_skill: "前後（左右）開脚座", sample_link: "###" },
        { number_of_skill: "67", dificulty_of_skill: "A", name_of_skill: "片足平均立ち（２秒）（正面、側面、背面）", sample_link: "###" },
        { number_of_skill: "68", dificulty_of_skill: "B", name_of_skill: "脚を保持しない180°片足平均立ち(2秒：正面、側面、背面)", sample_link: "###" },
        { number_of_skill: "73", dificulty_of_skill: "A", name_of_skill: "前とび正面支持臥 or 前とび１回ひねり正面支持臥 or 前とび倒立 or 前とび（1/4 or 1/2ひねり）倒立", sample_link: "###" },
        { number_of_skill: "74", dificulty_of_skill: "B", name_of_skill: "とび２回ひねり正面支持臥", sample_link: "###" },
        { number_of_skill: "79", dificulty_of_skill: "A", name_of_skill: "後ろとびひねり正面支持臥", sample_link: "###" },
        { number_of_skill: "80", dificulty_of_skill: "B", name_of_skill: "後ろとび３/２ひねり正面支持臥", sample_link: "###" },
        { number_of_skill: "81", dificulty_of_skill: "C", name_of_skill: "後ろとび５/２ひねり正面支持臥", sample_link: "###" },
        { number_of_skill: "85", dificulty_of_skill: "A", name_of_skill: "後ろとび正面支持臥", sample_link: "###" },
        { number_of_skill: "86", dificulty_of_skill: "B", name_of_skill: "屈、伸身後ろとび正面支持臥(エンドー)\n後ろとび１回ひねり正面支持臥", sample_link: "###" },
        { number_of_skill: "91", dificulty_of_skill: "A", name_of_skill: "バタフライ", sample_link: "###" },
        { number_of_skill: "92", dificulty_of_skill: "B", name_of_skill: "バタフライ１回ひねり（トンフェイ）", sample_link: "###" },
        { number_of_skill: "93", dificulty_of_skill: "C", name_of_skill: "バタフライ２回ひねり", sample_link: "###" },
        { number_of_skill: "97", dificulty_of_skill: "A", name_of_skill: "ブレイクダンスの変形", sample_link: "###" },
        { number_of_skill: "103", dificulty_of_skill: "A", name_of_skill: "閉脚（開脚）旋回２回", sample_link: "###" },
        { number_of_skill: "104", dificulty_of_skill: "B", name_of_skill: "閉脚（開脚）旋回倒立", sample_link: "###" },
        { number_of_skill: "105", dificulty_of_skill: "C", name_of_skill: "閉脚（開脚）旋回倒立、振り下ろして旋回(開脚or閉脚)(ゴゴラーゼ)", sample_link: "###" },
        { number_of_skill: "106", dificulty_of_skill: "D", name_of_skill: "開脚旋回倒立、とび1回ひねり開脚旋回", sample_link: "###" },
        { number_of_skill: "110", dificulty_of_skill: "B", name_of_skill: "倒立から下ろして閉脚（開脚）旋回", sample_link: "###" },
        { number_of_skill: "115", dificulty_of_skill: "A", name_of_skill: "開脚旋回ひねり", sample_link: "###" },
        { number_of_skill: "116", dificulty_of_skill: "B", name_of_skill: "開脚旋回１回ひねり", sample_link: "###" },
        { number_of_skill: "117", dificulty_of_skill: "C", name_of_skill: "閉脚（開脚)旋回1回ひねり倒立", sample_link: "###" },
        { number_of_skill: "122", dificulty_of_skill: "B", name_of_skill: "開脚旋回ひねり倒立", sample_link: "###" },
        { number_of_skill: "124", dificulty_of_skill: "D", name_of_skill: "開脚旋回1回ひねり倒立、振り下して閉脚（開脚）旋回", sample_link: "###" },
        { number_of_skill: "127", dificulty_of_skill: "A", name_of_skill: "ロシアン360°（or540°）転向", sample_link: "###" },
        { number_of_skill: "128", dificulty_of_skill: "B", name_of_skill: "ロシアン720°（or900°）転向", sample_link: "###" },
        { number_of_skill: "129", dificulty_of_skill: "C", name_of_skill: "ロシアン1080°以上転向(フェドルチェンコ)", sample_link: "###" },
        { number_of_skill: "133", dificulty_of_skill: "A", name_of_skill: "後転倒立ひねり", sample_link: "###" },
        { number_of_skill: "134", dificulty_of_skill: "B", name_of_skill: "後転倒立とび１回ひねり", sample_link: "###" },
        { number_of_skill: "139", dificulty_of_skill: "A", name_of_skill: "正面支持臥から開脚入れ背面支持臥", sample_link: "###" }
    ];

    $scope.mens_floor_group_2_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "首（頭）はね起き（座or正面支持臥）", sample_link: "###" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "首（頭）はね起きひねり倒立（１回ひねり背面支持臥）", sample_link: "###" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "前転とび前方かかえ込み宙返り（モランディ）", sample_link: "###" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "前転とび\n両足踏み切り前転とび", sample_link: "###" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "（両足踏み切り）前転とび直接正面支持臥", sample_link: "###" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "前転とび直接前方(かかえ込みor屈身)宙返り(マリニチ)転", sample_link: "###" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "前転とび直接前方伸身宙返り転", sample_link: "###" },
        { number_of_skill: "19", dificulty_of_skill: "A", name_of_skill: "伸身前とび前転", sample_link: "###" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "伸身前とび１回ひねり前転\n１回ひねり前転とび", sample_link: "###" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "伸身前とび２回ひねり前転", sample_link: "###" },
        { number_of_skill: "25", dificulty_of_skill: "A", name_of_skill: "前方かかえ込み（屈伸）宙返り", sample_link: "###" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "前方かかえ込み（屈身)宙返り転", sample_link: "###" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "前方かかえ込み２回宙返り", sample_link: "###" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "前方屈伸２回宙返り", sample_link: "###" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "片足踏み切り前方伸身宙返り", sample_link: "###" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "前方かかえ込み２回宙返りひねり", sample_link: "###" },
        { number_of_skill: "35", dificulty_of_skill: "E", name_of_skill: "前方屈伸２回宙返りひねり", sample_link: "###" },
        { number_of_skill: "38", dificulty_of_skill: "B", name_of_skill: "前方伸身宙返り", sample_link: "###" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "前方伸身宙返り正面支持臥", sample_link: "###" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "前方伸身宙返り転", sample_link: "###" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "前方宙返りひねり", sample_link: "###" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "前方宙返り１回ひねり", sample_link: "###" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "前方宙返り２回ひねり", sample_link: "###" },
        { number_of_skill: "47", dificulty_of_skill: "E", name_of_skill: "前方宙返り５/２ひねり", sample_link: "###" },
        { number_of_skill: "48", dificulty_of_skill: "F", name_of_skill: "前方宙返り３回ひねり", sample_link: "###" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "前方宙返り３/２ひねり", sample_link: "###" },
        { number_of_skill: "56", dificulty_of_skill: "B", name_of_skill: "前方かかえ込み（屈伸）宙返り正面支持臥", sample_link: "###" },
        { number_of_skill: "57", dificulty_of_skill: "C", name_of_skill: "前方かかえ込み（屈伸or伸身）宙返り１回ひねり正面支持臥", sample_link: "###" },
        { number_of_skill: "58", dificulty_of_skill: "D", name_of_skill: "前方かかえ込み（屈伸）宙返り１回ひねり転（バンローン）", sample_link: "###" }
    ];

    $scope.mens_floor_group_3_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "後方かかえ込み（屈伸）宙返り", sample_link: "###" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "後方かかえ込み２回宙返り", sample_link: "###" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "後方かかえ込み２回宙返り１回（１/２）ひねり（ツカハラ）", sample_link: "###" },
        { number_of_skill: "5", dificulty_of_skill: "E", name_of_skill: "後方かかえ込み２回宙返り２回（５/２）ひねり", sample_link: "###" },
        { number_of_skill: "6", dificulty_of_skill: "G", name_of_skill: "後方かかえ込み２回宙返り３回ひねり（リ・ジョンソン）", sample_link: "###" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "後方宙返り開脚座", sample_link: "###" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "後方宙返り１回ひねり開脚座", sample_link: "###" },
        { number_of_skill: "12", dificulty_of_skill: "G", name_of_skill: "後方かかえ込み３回宙返り（リューキン）", sample_link: "###" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "後転とび", sample_link: "###" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "後方速伸身宙返り(テンポ宙返り)", sample_link: "###" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "後方屈伸２回宙返り", sample_link: "###" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "後方屈身２回宙返り(1回or3/2)ひねり", sample_link: "###" },
        { number_of_skill: "18", dificulty_of_skill: "F", name_of_skill: "後方伸身宙返り２回ひねり屈伸宙返り（コリバノフ）", sample_link: "###" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "後方伸身宙返り", sample_link: "###" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "後方伸身２回宙返り(ひねり)", sample_link: "###" },
        { number_of_skill: "23", dificulty_of_skill: "E", name_of_skill: "後方伸身２回宙返り１回（３/２）ひねり", sample_link: "###" },
        { number_of_skill: "24", dificulty_of_skill: "F", name_of_skill: "後方伸身宙返り２回（５/２）ひねり", sample_link: "###" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "後方宙返りひねり", sample_link: "###" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "後方宙返り３/２ひねり", sample_link: "###" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "後方宙返り５/２ひねり", sample_link: "###" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "後方宙返り７/２ひねり", sample_link: "###" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "後方宙返り１回ひねり", sample_link: "###" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "後方宙返り２回ひねり", sample_link: "###" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "後方宙返り３回ひねり", sample_link: "###" },

        { number_of_skill: "36", dificulty_of_skill: "F", name_of_skill: "後方宙返り４回ひねり", sample_link: "###" }
    ];

    $scope.mens_floor_group_4_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "後ろとびひねり前転", sample_link: "###" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "後ろとび３/２ひねり前転", sample_link: "###" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "後ろとび５/２ひねり前転", sample_link: "###" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "後ろとびひねり前転とび", sample_link: "###" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "後ろとびひねり前方かかえ込み（屈伸）宙返り", sample_link: "###" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "後ろとびひねり前方かかえ込み２回宙返り", sample_link: "###" },
        { number_of_skill: "11", dificulty_of_skill: "E", name_of_skill: "後ろろびひねり前方屈伸２回宙返り", sample_link: "###" },
        { number_of_skill: "12", dificulty_of_skill: "F", name_of_skill: "後ろとびひねり前方伸身２回宙返り（タマヨ）", sample_link: "###" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "後ろとびひねり前方伸身宙返り", sample_link: "###" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "後ろとびひねり前方かかえ込み２回宙返りひねり", sample_link: "###" },
        { number_of_skill: "17", dificulty_of_skill: "E", name_of_skill: "後ろとびひねり前方屈伸２回宙返りひねり", sample_link: "###" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "後ろとびひねり前方かかえ込み（屈伸）宙返り正面支持臥", sample_link: "###" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "後ろとびひねり前方かかえ込み（屈伸）宙返り転", sample_link: "###" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "後ろとびひねり前方伸身宙返り転（ウ・グォニアン）", sample_link: "###" },
        { number_of_skill: "24", dificulty_of_skill: "F", name_of_skill: "後ろとびひねり前方伸身２回宙返りひねり（ベネフ）", sample_link: "###" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "後ろとび３/２ひねり前方かかえ込み（屈伸）宙返り転（トーマス）", sample_link: "###" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "後ろとび３/２ひねり前方伸身宙返り転（コロブチンスキー）", sample_link: "###" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "前とびひねり後方宙返り", sample_link: "###" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "前とびひねり後方かかえ込み（屈伸）２回宙返り（デファー）", sample_link: "###" },
        { number_of_skill: "37", dificulty_of_skill: "A", name_of_skill: "片足踏み切り側方宙返り", sample_link: "###" },
        { number_of_skill: "43", dificulty_of_skill: "A", name_of_skill: "側方かかえ込み（屈伸）宙返り", sample_link: "###" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "側方伸身宙返り", sample_link: "###" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "側方かかえ込み２回宙返り", sample_link: "###" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "側方屈伸２回宙返り", sample_link: "###" },
        { number_of_skill: "50", dificulty_of_skill: "B", name_of_skill: "側方宙返りひねり", sample_link: "###" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "側方宙返り１回ひねり", sample_link: "###" },
        { number_of_skill: "57", dificulty_of_skill: "C", name_of_skill: "側方屈伸宙返り１/４ひねり転（リ・イェジュウ）", sample_link: "###" },
        { number_of_skill: "59", dificulty_of_skill: "E", name_of_skill: "側方開脚２回宙返り３/４ひねり（ロウ・ユン）", sample_link: "###" }
    ];

    $scope.pommel_horse_group_1_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "正交差", sample_link: "###" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "正交差１/４ひねり一把手上倒立経過、下ろして開脚支持（リーニン）", sample_link: "###" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "正交差ひねり正交差入れ", sample_link: "###" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "正交差とび横移動\n正交差とび横移動ひねり正交差入れ", sample_link: "###" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "正交差とび横移動（馬端～馬端）", sample_link: "###" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "逆交差", sample_link: "###" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "正交差ひねり逆交差入れ", sample_link: "###" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "正交差横移動ひねり逆交差入れ", sample_link: "###" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "正交差とび横移動ひねり逆交差入れ（馬端～馬端）（ミクラッタ）", sample_link: "###" },
        { number_of_skill: "19", dificulty_of_skill: "A", name_of_skill: "逆交差ひねり逆交差入れ", sample_link: "###" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "逆交差１/４ひねり一把手上倒立経過、下ろして開脚支持", sample_link: "###" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "逆交差とび横移動\n逆交差とび横移動ひねり逆交差入れ", sample_link: "###" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "逆交差とび横移動（馬端～馬端）", sample_link: "###" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "逆交差ひねり正交差入れ", sample_link: "###" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "正交差１/４ひねり倒立１/４ひねり逆把手に片腕支持逆交差入れ（ブライアン）", sample_link: "###" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "開脚縦向き支持から振り上げて倒立経過逆交差入れ", sample_link: "###" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "逆交差１/４ひねり倒立１/４ひねり逆把手に片腕支持逆交差入れ", sample_link: "###" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "（開脚）支持から後ろ振り抜き倒立、振り下して開脚支持", sample_link: "###" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "（開脚）支持から後ろ振り抜き倒立、振り下して閉脚（開脚）旋回", sample_link: "###" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "（開脚）支持から後ろ振り抜き倒立１回ひねり、振り下して閉脚（開脚）旋回", sample_link: "###" }
    ];

    $scope.pommel_horse_group_2_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "横向き旋回\n横向き開脚旋回（トーマス）", sample_link: "###" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "一把手上横向き旋回", sample_link: "###" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "両把手を挟んで横向き旋回\nあん部馬背横向き旋回", sample_link: "###" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "馬端中向き縦向き旋回", sample_link: "###" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "一把手上縦向き旋回（前または後に１/４転向を伴っても）", sample_link: "###" },
        { number_of_skill: "19", dificulty_of_skill: "A", name_of_skill: "馬端外向き縦向き旋回", sample_link: "###" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "あん部馬背縦向き旋回", sample_link: "###" },
        { number_of_skill: "25", dificulty_of_skill: "A", name_of_skill: "横向き旋回１/４ひねり縦向き支持", sample_link: "###" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "横向き旋回ひねり", sample_link: "###" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "横向き旋回１回ひねり（２回以内の旋回で）", sample_link: "###" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "両把手を挟んで（開脚）旋回１回ひねり（２回以内の旋回で）", sample_link: "###" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "馬端縦向き旋回１/４ひねり横向き支持", sample_link: "###" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "馬端縦向き旋回ひねり", sample_link: "###" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "縦向き旋回１回ひねり（２回以内の旋回で）（マジャール）", sample_link: "###" },
        { number_of_skill: "35", dificulty_of_skill: "E", name_of_skill: "あん部馬背縦向き旋回１回ひねり（２回以内の旋回で）", sample_link: "###" },
        { number_of_skill: "38", dificulty_of_skill: "B", name_of_skill: "（開脚）旋回倒立、下ろして開脚支持", sample_link: "###" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "（開脚）旋回倒立ひねり、下ろして（開脚）旋回（チッペルト）", sample_link: "###" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "背面とび横移動倒立経過、下ろして開脚支持", sample_link: "###" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "背面とび横移動倒立経過、下ろして開脚旋回", sample_link: "###" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "下向き逆移動（orDSA）倒立経過、下ろして開脚支持", sample_link: "###" },
        { number_of_skill: "54", dificulty_of_skill: "G", name_of_skill: "下向き逆移動（orDSA）倒立３/３部分移動１回ひねり、下ろして開脚旋回（ブスナリ）", sample_link: "###" }
    ];

    $scope.pommel_horse_group_3_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "正面横移動（１/４転向を伴っても）", sample_link: "###" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "正面横移動連続（馬端～馬端）", sample_link: "###" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "正面横移動連続（馬端～馬端：あん部馬背着手", sample_link: "###" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "１回の旋回で正面横移動（馬端から両把手を超えて逆馬端）", sample_link: "###" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "正面とび横移動", sample_link: "###" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "正面とび横移動連続（馬端～馬端）", sample_link: "###" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "正面とび横移動（馬端～馬端）", sample_link: "###" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "背面横移動", sample_link: "###" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "背面横移動連続（馬端～馬端）", sample_link: "###" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "背面横移動連続（馬端～馬端：あん部馬背着手）", sample_link: "###" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "２回の旋回で背面横移動（馬端馬背から両把手を超えて逆馬端馬背）", sample_link: "###" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "背面とび横移動", sample_link: "###" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "背面とび横移動連続（馬端～馬端）", sample_link: "###" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "背面とび横移動（馬端～馬端）", sample_link: "###" },
        { number_of_skill: "23", dificulty_of_skill: "E", name_of_skill: "背面とび横移動（馬端馬背～馬端馬背）（ヤマワキ）", sample_link: "###" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "正面横移動ひねり、背面横移動ひねり（馬端～馬端）", sample_link: "###" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "全ての旋回移動ひねり", sample_link: "###" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "背面横移動ひねり、正面横移動ひねり（馬端～馬端）", sample_link: "###" },
        { number_of_skill: "43", dificulty_of_skill: "A", name_of_skill: "縦向き前移動（１/３部分）", sample_link: "###" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "縦向き前移動（２/３or１/２部分）", sample_link: "###" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "縦向き前移動（３/３馬端ー把手ー把手ー馬端）", sample_link: "###" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "縦向き前移動（３/３馬端ー把手ーあん部馬背ー把手ー馬端（マジャール）", sample_link: "###" },
        { number_of_skill: "47", dificulty_of_skill: "E", name_of_skill: "縦向きとび前移動（馬端～馬端）（ドリッグス）", sample_link: "###" },
        { number_of_skill: "50", dificulty_of_skill: "B", name_of_skill: "縦向き前移動１/４ひねり\n縦向き後ろ移動１/４ひねり", sample_link: "###" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "片手ずつ支持して前移動連続横向き支持（ビロゼルチェフ）", sample_link: "###" },
        { number_of_skill: "55", dificulty_of_skill: "A", name_of_skill: "縦向き後ろ移動（１/３部分）", sample_link: "###" },
        { number_of_skill: "56", dificulty_of_skill: "B", name_of_skill: "縦向き後ろ移動（２/３or１/２部分）", sample_link: "###" },
        { number_of_skill: "57", dificulty_of_skill: "C", name_of_skill: "縦向き後ろ移動（３/３：馬端ー把手ー把手ー馬端）", sample_link: "###" },
        { number_of_skill: "58", dificulty_of_skill: "D", name_of_skill: "縦向き後ろ移動（３/３：あん部馬背着手）（シバド）", sample_link: "###" }
    ];

    $scope.pommel_horse_group_4_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "上向き転向", sample_link: "###" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "把手上上向き転向", sample_link: "###" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "馬端横向き支持から上向き転向、下向き逆移動（ウルジカ）", sample_link: "###" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "馬端横向き支持から上向き転向、下向き逆移動、上向き転向（モギルニー）", sample_link: "###" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "シュテクリA（DSA）", sample_link: "###" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "一腕上上向き270°転向／※縦向き支持から横向き支持＝B（ショーンの捌き）", sample_link: "###" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "一腕上上向き全転向（ショーン）", sample_link: "###" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "シュテクリB（DSB）", sample_link: "###" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "馬端横向き支持から下向き逆移動、上向き転向、下向き逆移動（ベレンキ）", sample_link: "###" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "トラムロー／直接トラムロー", sample_link: "###" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "下向き逆移動", sample_link: "###" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "馬端外向き支持から下向き逆移動で反対の馬端外向き支持", sample_link: "###" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "一腕上下向き全転向（ベズゴ）", sample_link: "###" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "下向き正転向移動", sample_link: "###" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "下向き正転向移動（把手間に着手なしで逆馬端へ）（横向き～横向き支持、横向き～縦向き支持、縦向き～横向き支持）", sample_link: "###" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "下向き正転向移動（馬端～馬端、把手または把手間の着手なしで）（横向き～横向き支持、横向き～縦向き支持、縦向き～横向き支持）（トンフェイ）", sample_link: "###" },
        { number_of_skill: "", dificulty_of_skill: "", name_of_skill: "", sample_link: "###" },
    ];

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






