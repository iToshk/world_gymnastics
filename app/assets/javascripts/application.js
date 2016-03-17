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
    $scope.womens_vault_group_1 = "グループ1： 第１/第２空中局面でひねりを伴うまたは伴わない、宙返りのない跳躍技（倒立回転とび、ヤマシタとび、ロンダート入り）"
    $scope.womens_vault_group_2 = "グループ2： 第１空中局面で１回（360°）ひねりを伴うまたは伴わない前方倒立回転とび〜第２空中局面でひねりを伴うまたは伴わない前方または後方宙返り"
    $scope.womens_vault_group_3 = "グループ3： 第１空中局面で1/4〜1/2（90°〜180°）ひねりを伴う倒立回転とび（ツカハラ）〜第２空中局面でひねりを伴うまたは伴わない後方宙返り"
    $scope.womens_vault_group_4 = "グループ4： ロンダートから第１空中局面で後ろとび3/4（270°）ひねりを伴うまたは伴わない入り（ユルチェンコ）〜第２空中局面でひねりを伴うまたは伴わない後方宙返り"
    $scope.womens_vault_group_5 = "グループ5： ロンダートから第１空中局面で後ろとび1/2（180°）ひねりを伴う入り〜第２空中局面でひねりを伴う、または伴わない前方宙返りまたは後方宙返り"

    $scope.uneven_bars = "段違い平行棒"
    $scope.uneven_bars_group_1 = "グループ1： 開始技"
    $scope.uneven_bars_group_2 = "グループ2： 振り出し、浮き支持回転技（日本語訳）"
    $scope.uneven_bars_group_3 = "グループ3： 懸垂振動技（日本語訳）"
    $scope.uneven_bars_group_4 = "グループ4： 浮腰回転技（シュタルダー技）（日本語訳）"
    $scope.uneven_bars_group_5 = "グループ5： 屈伸回転技（日本語訳）"
    $scope.uneven_bars_group_6 = "グループ6： 終末技"

    $scope.balance_beam = "平均台"
    $scope.balance_beam_group_1 = "グループ1： 開始技"
    $scope.balance_beam_group_2 = "グループ2： リープ、ジャンプ、ホップ技（日本語訳）"
    $scope.balance_beam_group_3 = "グループ3： ターン技"
    $scope.balance_beam_group_4 = "グループ4： 姿勢保持技、空中局面を伴わないアクロバット技（日本語訳）"
    $scope.balance_beam_group_5 = "グループ5： 空中局面を伴うアクロバット技（日本語訳）"
    $scope.balance_beam_group_6 = "グループ6： 終末技"

    $scope.womens_floor = "床（女子）"
    $scope.womens_floor_group_1 = "グループ1： リープ、ジャンプ、ホップ技（日本語訳）"
    $scope.womens_floor_group_2 = "グループ2： ターン技"
    $scope.womens_floor_group_3 = "グループ3： 腕支持を伴う技（日本語訳）"
    $scope.womens_floor_group_4 = "グループ4： 前方系の跳躍技、側方系の跳躍技（日本語訳）"
    $scope.womens_floor_group_5 = "グループ5： 後方系の跳躍技（日本語訳）"

    $scope.mens_floor_group_1_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "倒立からおろして開脚前挙（脚前挙）支持（２秒）", sample_link: "" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "脚上挙支持（２秒）", sample_link: "https://www.youtube.com/watch?v=rQF-_pLzqkg" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "脚上挙支持（腰が水平、２秒）（マンナ）", sample_link: "https://www.youtube.com/watch?v=q3DgYJEG63Y" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "立位から伸腕屈伸倒立（２秒）", sample_link: "https://www.youtube.com/watch?v=CdAfTSGESas" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "伸腕屈伸閉脚力倒立（２秒）\n 屈腕伸身力倒立（２秒）", sample_link: "https://www.youtube.com/watch?v=0Uyd36ycptA" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "脚上挙支持(２秒)から伸腕屈身閉脚力倒立(２秒)", sample_link: "https://www.youtube.com/watch?v=VLZQfABBmhk" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "マンナ（２秒）から伸腕屈身閉（開）脚力倒立(２秒)", sample_link: "https://www.youtube.com/watch?v=aOJAO86aa3E" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "正面支持臥から勢いをつけて屈腕伸身力倒立(２秒)", sample_link: "###" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "開脚座（脚前挙支持or開脚前挙支持or正面支持臥）から、伸腕屈身力倒立(２秒)", sample_link: "https://www.youtube.com/watch?v=-a9OQdTOdtc" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "マンナ（２秒）から肩転位して倒立", sample_link: "https://www.youtube.com/watch?v=oTW_G7vamg0" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "マンナ（２秒）から肩転位して倒立(２秒)", sample_link: "https://www.youtube.com/watch?v=oTW_G7vamg0" },
        { number_of_skill: "19", dificulty_of_skill: "A", name_of_skill: "倒立（２秒）", sample_link: "https://www.youtube.com/watch?v=gHqU3kG8iQY" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "倒立から下ろして十字倒立（２秒）\n振動から十字倒立（２秒）", sample_link: "###" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "伸腕屈身力十字力倒立（２秒）", sample_link: "https://www.youtube.com/watch?v=ki3NshFvgqI" },
        { number_of_skill: "25", dificulty_of_skill: "A", name_of_skill: "開脚水平支持（２秒）", sample_link: "https://www.youtube.com/watch?v=iM0o_AwHz-A" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "水平支持（２秒）", sample_link: "https://www.youtube.com/watch?v=GNi316pL24s" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "中水平支持", sample_link: "https://www.youtube.com/watch?v=DzyAKcFdTi8" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "倒立（１回）ひねり\n１回（１/２）ひねり倒立", sample_link: "###" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "開脚水平支持（２秒）から伸腕伸身力倒立（２秒）", sample_link: "https://www.youtube.com/watch?v=E1Nv2kCrwwg" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "水平支持（２秒）から伸腕伸身力倒立（２秒）", sample_link: "https://www.youtube.com/watch?v=fjvSXkuLCXY" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "中水平支持（２秒）から伸腕伸身力倒立（２秒）（アルバニロ）", sample_link: "" },
        { number_of_skill: "37", dificulty_of_skill: "A", name_of_skill: "脚上挙などから後方回転開脚立ち", sample_link: "" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "倒立前転開脚浮腰支持経過倒立（２秒）", sample_link: "https://www.youtube.com/watch?v=hanU8mesxZ8" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "倒立から伸膝前転脚前挙支持経過倒立（２秒）", sample_link: "https://www.youtube.com/watch?v=I0GaF78xs30" },
        { number_of_skill: "49", dificulty_of_skill: "A", name_of_skill: "後方倒立回転\n背面支持臥から片足でけって倒立(メリケニ)", sample_link: "https://www.youtube.com/watch?v=sTbQS7JzvwM" },
        { number_of_skill: "55", dificulty_of_skill: "A", name_of_skill: "前方倒立回転", sample_link: "" },
        { number_of_skill: "61", dificulty_of_skill: "A", name_of_skill: "前後（左右）開脚座", sample_link: "https://www.youtube.com/watch?v=-yZhdt7EQ00" },
        { number_of_skill: "67", dificulty_of_skill: "A", name_of_skill: "片足平均立ち（２秒）（正面、側面、背面）", sample_link: "https://www.youtube.com/watch?v=zl7lBLQEpR0" },
        { number_of_skill: "68", dificulty_of_skill: "B", name_of_skill: "脚を保持しない180°片足平均立ち(2秒：正面、側面、背面)", sample_link: "" },
        { number_of_skill: "73", dificulty_of_skill: "A", name_of_skill: "前とび正面支持臥 or 前とび１回ひねり正面支持臥 or 前とび倒立 or 前とび（1/4 or 1/2ひねり）倒立", sample_link: "https://www.youtube.com/watch?v=GsA_3dbEgKg" },
        { number_of_skill: "74", dificulty_of_skill: "B", name_of_skill: "とび２回ひねり正面支持臥", sample_link: "" },
        { number_of_skill: "79", dificulty_of_skill: "A", name_of_skill: "後ろとびひねり正面支持臥", sample_link: "https://www.youtube.com/watch?v=_u1a9J97KGM" },
        { number_of_skill: "80", dificulty_of_skill: "B", name_of_skill: "後ろとび３/２ひねり正面支持臥", sample_link: "https://www.youtube.com/watch?v=4VZENTA8ugQ" },
        { number_of_skill: "81", dificulty_of_skill: "C", name_of_skill: "後ろとび５/２ひねり正面支持臥", sample_link: "" },
        { number_of_skill: "85", dificulty_of_skill: "A", name_of_skill: "後ろとび正面支持臥", sample_link: "###" },
        { number_of_skill: "86", dificulty_of_skill: "B", name_of_skill: "屈、伸身後ろとび正面支持臥(エンドー)\n後ろとび１回ひねり正面支持臥", sample_link: "https://www.youtube.com/watch?v=l-KHwdEJckw" },
        { number_of_skill: "91", dificulty_of_skill: "A", name_of_skill: "バタフライ", sample_link: "https://www.youtube.com/watch?v=YmPvN2zHfx0" },
        { number_of_skill: "92", dificulty_of_skill: "B", name_of_skill: "バタフライ１回ひねり（トンフェイ）", sample_link: "https://www.youtube.com/watch?v=ai_dY7ESL5Q" },
        { number_of_skill: "93", dificulty_of_skill: "C", name_of_skill: "バタフライ２回ひねり", sample_link: "" },
        { number_of_skill: "97", dificulty_of_skill: "A", name_of_skill: "ブレイクダンスの変形", sample_link: "https://www.youtube.com/watch?v=kConKGBVY4w" },
        { number_of_skill: "103", dificulty_of_skill: "A", name_of_skill: "閉脚（開脚）旋回２回", sample_link: "https://www.youtube.com/watch?v=QbrWkeprrkg" },
        { number_of_skill: "104", dificulty_of_skill: "B", name_of_skill: "閉脚（開脚）旋回倒立", sample_link: "https://www.youtube.com/watch?v=AvP1pStVJoo" },
        { number_of_skill: "105", dificulty_of_skill: "C", name_of_skill: "閉脚（開脚）旋回倒立、振り下ろして旋回(開脚or閉脚)(ゴゴラーゼ)", sample_link: "https://www.youtube.com/watch?v=fPwp3s0GJm4" },
        { number_of_skill: "106", dificulty_of_skill: "D", name_of_skill: "開脚旋回倒立、とび1回ひねり開脚旋回", sample_link: "https://www.youtube.com/watch?v=lGQ_IKs2NLk" },
        { number_of_skill: "110", dificulty_of_skill: "B", name_of_skill: "倒立から下ろして閉脚（開脚）旋回", sample_link: "" },
        { number_of_skill: "115", dificulty_of_skill: "A", name_of_skill: "開脚旋回ひねり", sample_link: "" },
        { number_of_skill: "116", dificulty_of_skill: "B", name_of_skill: "開脚旋回１回ひねり", sample_link: "https://www.youtube.com/watch?v=AIDjnvbT_rU" },
        { number_of_skill: "117", dificulty_of_skill: "C", name_of_skill: "閉脚（開脚)旋回1回ひねり倒立", sample_link: "https://www.youtube.com/watch?v=nXKmyTrfLjM" },
        { number_of_skill: "122", dificulty_of_skill: "B", name_of_skill: "開脚旋回ひねり倒立", sample_link: "" },
        { number_of_skill: "124", dificulty_of_skill: "D", name_of_skill: "開脚旋回1回ひねり倒立、振り下して閉脚（開脚）旋回", sample_link: "https://www.youtube.com/watch?v=XoXtrYTQPUI" },
        { number_of_skill: "127", dificulty_of_skill: "A", name_of_skill: "ロシアン360°（or540°）転向", sample_link: "" },
        { number_of_skill: "128", dificulty_of_skill: "B", name_of_skill: "ロシアン720°（or900°）転向", sample_link: "" },
        { number_of_skill: "129", dificulty_of_skill: "C", name_of_skill: "ロシアン1080°以上転向(フェドルチェンコ)", sample_link: "https://www.youtube.com/watch?v=B-cuJ6c3q1w" },
        { number_of_skill: "133", dificulty_of_skill: "A", name_of_skill: "後転倒立ひねり", sample_link: "https://www.youtube.com/watch?v=JAjm7D46cD8" },
        { number_of_skill: "134", dificulty_of_skill: "B", name_of_skill: "後転倒立とび１回ひねり", sample_link: "" },
        { number_of_skill: "139", dificulty_of_skill: "A", name_of_skill: "正面支持臥から開脚入れ背面支持臥", sample_link: "" }
    ];

    $scope.mens_floor_group_2_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "首（頭）はね起き（座or正面支持臥）", sample_link: "https://www.youtube.com/watch?v=sa-Hi7R8aeg" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "首（頭）はね起きひねり倒立（１回ひねり背面支持臥）", sample_link: "" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "前転とび前方かかえ込み宙返り（モランディ）", sample_link: "https://www.youtube.com/watch?v=hrrMqrULJ8U" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "前転とび\n両足踏み切り前転とび", sample_link: "https://www.youtube.com/watch?v=OjKIRQTjldY" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "（両足踏み切り）前転とび直接正面支持臥", sample_link: "" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "前転とび直接前方(かかえ込みor屈身)宙返り(マリニチ)転", sample_link: "" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "前転とび直接前方伸身宙返り転", sample_link: "https://www.youtube.com/watch?v=vX_7PpJSkvs" },
        { number_of_skill: "19", dificulty_of_skill: "A", name_of_skill: "伸身前とび前転", sample_link: "https://www.youtube.com/watch?v=BBnSFng2jPs" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "伸身前とび１回ひねり前転\n１回ひねり前転とび", sample_link: "https://www.youtube.com/watch?v=Y7eftsTPO4M" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "伸身前とび２回ひねり前転", sample_link: "" },
        { number_of_skill: "25", dificulty_of_skill: "A", name_of_skill: "前方かかえ込み（屈伸）宙返り", sample_link: "https://www.youtube.com/watch?v=zZlJ0BppW10" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "前方かかえ込み（屈身)宙返り転", sample_link: "https://www.youtube.com/watch?v=1kTsCuS8qUo" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "前方かかえ込み２回宙返り", sample_link: "https://www.youtube.com/watch?v=G-Hwya1Osw8" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "前方屈伸２回宙返り", sample_link: "https://www.youtube.com/watch?v=Xnn4_LES-CY" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "片足踏み切り前方伸身宙返り", sample_link: "https://www.youtube.com/watch?v=NVvflyCbt5c" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "前方かかえ込み２回宙返りひねり", sample_link: "" },
        { number_of_skill: "35", dificulty_of_skill: "E", name_of_skill: "前方屈伸２回宙返りひねり", sample_link: "" },
        { number_of_skill: "38", dificulty_of_skill: "B", name_of_skill: "前方伸身宙返り", sample_link: "https://www.youtube.com/watch?v=nACXBMlzktw" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "前方伸身宙返り正面支持臥", sample_link: "" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "前方伸身宙返り転", sample_link: "" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "前方宙返りひねり", sample_link: "https://www.youtube.com/watch?v=CmFpMWsEkgM" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "前方宙返り１回ひねり", sample_link: "https://www.youtube.com/watch?v=O9dv_JDkjHI" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "前方宙返り２回ひねり", sample_link: "https://www.youtube.com/watch?v=SA_qEV68xKY" },
        { number_of_skill: "47", dificulty_of_skill: "E", name_of_skill: "前方宙返り５/２ひねり", sample_link: "https://www.youtube.com/watch?v=SfPE_vQBusY" },
        { number_of_skill: "48", dificulty_of_skill: "F", name_of_skill: "前方宙返り３回ひねり", sample_link: "https://www.youtube.com/watch?v=AsBmqk3K0Us" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "前方宙返り３/２ひねり", sample_link: "https://www.youtube.com/watch?v=hurg0fpZ5zE" },
        { number_of_skill: "56", dificulty_of_skill: "B", name_of_skill: "前方かかえ込み（屈伸）宙返り正面支持臥", sample_link: "https://www.youtube.com/watch?v=rlvzy4uxifM" },
        { number_of_skill: "57", dificulty_of_skill: "C", name_of_skill: "前方かかえ込み（屈伸or伸身）宙返り１回ひねり正面支持臥", sample_link: "" },
        { number_of_skill: "58", dificulty_of_skill: "D", name_of_skill: "前方かかえ込み（屈伸）宙返り１回ひねり転（バンローン）", sample_link: "https://www.youtube.com/watch?v=AxVhywhtUng" }
    ];

    $scope.mens_floor_group_3_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "後方かかえ込み（屈伸）宙返り", sample_link: "https://www.youtube.com/watch?v=YI3HN1ryncc" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "後方かかえ込み２回宙返り", sample_link: "https://www.youtube.com/watch?v=DjclRSPKcJ8" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "後方かかえ込み２回宙返り１回（１/２）ひねり（ツカハラ）", sample_link: "https://www.youtube.com/watch?v=rjKPlD3ByIs" },
        { number_of_skill: "5", dificulty_of_skill: "E", name_of_skill: "後方かかえ込み２回宙返り２回（５/２）ひねり", sample_link: "https://www.youtube.com/watch?v=y1AHryZqD74" },
        { number_of_skill: "6", dificulty_of_skill: "G", name_of_skill: "後方かかえ込み２回宙返り３回ひねり（リ・ジョンソン）", sample_link: "https://www.youtube.com/watch?v=Jxh7K63E0ws" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "後方宙返り開脚座", sample_link: "" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "後方宙返り１回ひねり開脚座", sample_link: "" },
        { number_of_skill: "12", dificulty_of_skill: "G", name_of_skill: "後方かかえ込み３回宙返り（リューキン）", sample_link: "https://www.youtube.com/watch?v=m7rrTMls66U" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "後転とび", sample_link: "https://www.youtube.com/watch?v=p9-TklSPGd0" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "後方速伸身宙返り(テンポ宙返り)", sample_link: "https://www.youtube.com/watch?v=ZlyRe-OERtk" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "後方屈伸２回宙返り", sample_link: "https://www.youtube.com/watch?v=R-m0x5gC8SQ" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "後方屈身２回宙返り(1回or3/2)ひねり", sample_link: "" },
        { number_of_skill: "18", dificulty_of_skill: "F", name_of_skill: "後方伸身宙返り２回ひねり屈伸宙返り（コリバノフ）", sample_link: "https://www.youtube.com/watch?v=tm5XwpnxtI4" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "後方伸身宙返り", sample_link: "https://www.youtube.com/watch?v=gkY2jvYtGDs" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "後方伸身２回宙返り(ひねり)", sample_link: "https://www.youtube.com/watch?v=V7YpnpPZ3pw" },
        { number_of_skill: "23", dificulty_of_skill: "E", name_of_skill: "後方伸身２回宙返り１回（３/２）ひねり", sample_link: "https://www.youtube.com/watch?v=R-m0x5gC8SQ" },
        { number_of_skill: "24", dificulty_of_skill: "F", name_of_skill: "後方伸身２回宙返り２回（５/２）ひねり", sample_link: "https://www.youtube.com/watch?v=lMHmPOoU4Yg" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "後方宙返りひねり", sample_link: "https://www.youtube.com/watch?v=EBBS-VTUO5A" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "後方宙返り３/２ひねり", sample_link: "https://www.youtube.com/watch?v=e-cYtLkhtPo" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "後方宙返り５/２ひねり", sample_link: "https://www.youtube.com/watch?v=vhxsj0JEolk" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "後方宙返り７/２ひねり", sample_link: "https://www.youtube.com/watch?v=HUbStuaAmKE" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "後方宙返り１回ひねり", sample_link: "https://www.youtube.com/watch?v=2NozbPuLDJI" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "後方宙返り２回ひねり", sample_link: "https://www.youtube.com/watch?v=jUmKkkryLuo" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "後方宙返り３回ひねり", sample_link: "https://www.youtube.com/watch?v=b88R1xTa8qo" },

        { number_of_skill: "36", dificulty_of_skill: "F", name_of_skill: "後方宙返り４回ひねり", sample_link: "https://www.youtube.com/watch?v=U9ZRu2mDL5w" }
    ];

    $scope.mens_floor_group_4_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "後ろとびひねり前転", sample_link: "https://www.youtube.com/watch?v=FvN-3dh2UNs" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "後ろとび３/２ひねり前転", sample_link: "" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "後ろとび５/２ひねり前転", sample_link: "" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "後ろとびひねり前方かかえ込み（屈伸）宙返り", sample_link: "https://www.youtube.com/watch?v=G8sIs8Mmh7w" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "後ろとびひねり前方かかえ込み２回宙返り", sample_link: "https://www.youtube.com/watch?v=r99B0U0FOu4" },
        { number_of_skill: "11", dificulty_of_skill: "E", name_of_skill: "後ろろびひねり前方屈伸２回宙返り", sample_link: "https://www.youtube.com/watch?v=CWPrM3xg5dg" },
        { number_of_skill: "12", dificulty_of_skill: "F", name_of_skill: "後ろとびひねり前方伸身２回宙返り（タマヨ）", sample_link: "https://www.youtube.com/watch?v=TdBRKSUOT14" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "後ろとびひねり前方伸身宙返り", sample_link: "https://www.youtube.com/watch?v=8uOWHvz0bIQ" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "後ろとびひねり前方かかえ込み２回宙返りひねり", sample_link: "https://www.youtube.com/watch?v=r99B0U0FOu4" },
        { number_of_skill: "17", dificulty_of_skill: "E", name_of_skill: "後ろとびひねり前方屈伸２回宙返りひねり", sample_link: "https://www.youtube.com/watch?v=CWPrM3xg5dg" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "後ろとびひねり前方かかえ込み（屈伸）宙返り正面支持臥", sample_link: "" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "後ろとびひねり前方かかえ込み（屈伸）宙返り転", sample_link: "https://www.youtube.com/watch?v=Uf5JeGAVysY" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "後ろとびひねり前方伸身宙返り転（ウ・グォニアン）", sample_link: "https://www.youtube.com/watch?v=9wiA5XlmkJs" },
        { number_of_skill: "24", dificulty_of_skill: "F", name_of_skill: "後ろとびひねり前方伸身２回宙返りひねり（ベネフ）", sample_link: "https://www.youtube.com/watch?v=wYDPG-fSFhw" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "後ろとび３/２ひねり前方かかえ込み（屈伸）宙返り転（トーマス）", sample_link: "https://www.youtube.com/watch?v=YQ0FTlfMNxg" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "後ろとび３/２ひねり前方伸身宙返り転（コロブチンスキー）", sample_link: "https://www.youtube.com/watch?v=LwX3_kR7Oso" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "前とびひねり後方宙返り", sample_link: "" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "前とびひねり後方かかえ込み（屈伸）２回宙返り（デファー）", sample_link: "" },
        { number_of_skill: "37", dificulty_of_skill: "A", name_of_skill: "片足踏み切り側方宙返り", sample_link: "https://www.youtube.com/watch?v=WfyHnWA19JY" },
        { number_of_skill: "43", dificulty_of_skill: "A", name_of_skill: "側方かかえ込み（屈伸）宙返り", sample_link: "https://www.youtube.com/watch?v=Sqy4ojEl-hk" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "側方伸身宙返り", sample_link: "https://www.youtube.com/watch?v=49DbRwJfT6A" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "側方かかえ込み２回宙返り", sample_link: "https://www.youtube.com/watch?v=hLt2dakOdUI" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "側方屈伸２回宙返り", sample_link: "" },
        { number_of_skill: "50", dificulty_of_skill: "B", name_of_skill: "側方宙返りひねり", sample_link: "" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "側方宙返り１回ひねり", sample_link: "https://www.youtube.com/watch?v=uI4O2LfLENo" },
        { number_of_skill: "57", dificulty_of_skill: "C", name_of_skill: "側方屈伸宙返り１/４ひねり転（リ・イェジュウ）", sample_link: "https://www.youtube.com/watch?v=qdmNjGxrolY" },
        { number_of_skill: "59", dificulty_of_skill: "E", name_of_skill: "側方開脚２回宙返り３/４ひねり（ロウ・ユン）", sample_link: "https://www.youtube.com/watch?v=JdWvN15iZ8Q" }
    ];

    $scope.pommel_horse_group_1_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "正交差", sample_link: "https://www.youtube.com/watch?v=qeR-fQaVC7c" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "正交差１/４ひねり一把手上倒立経過、下ろして開脚支持（リーニン）", sample_link: "" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "正交差ひねり正交差入れ", sample_link: "" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "正交差とび横移動\n正交差とび横移動ひねり正交差入れ", sample_link: "" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "正交差とび横移動（馬端～馬端）", sample_link: "https://www.youtube.com/watch?v=l96YYrCqjto" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "逆交差", sample_link: "https://www.youtube.com/watch?v=qeR-fQaVC7c" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "正交差ひねり逆交差入れ", sample_link: "https://www.youtube.com/watch?v=FN9QjKpnpCs" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "正交差横移動ひねり逆交差入れ", sample_link: "" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "正交差とび横移動ひねり逆交差入れ（馬端～馬端）（ミクラッタ）", sample_link: "" },
        { number_of_skill: "19", dificulty_of_skill: "A", name_of_skill: "逆交差ひねり逆交差入れ", sample_link: "" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "逆交差１/４ひねり一把手上倒立経過、下ろして開脚支持", sample_link: "https://www.youtube.com/watch?v=_KLME-1fjCE" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "逆交差とび横移動\n逆交差とび横移動ひねり逆交差入れ", sample_link: "" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "逆交差とび横移動（馬端～馬端）", sample_link: "" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "逆交差ひねり正交差入れ", sample_link: "" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "正交差１/４ひねり倒立１/４ひねり逆把手に片腕支持逆交差入れ（ブライアン）", sample_link: "" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "開脚縦向き支持から振り上げて倒立経過逆交差入れ", sample_link: "" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "逆交差１/４ひねり倒立１/４ひねり逆把手に片腕支持逆交差入れ", sample_link: "" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "（開脚）支持から後ろ振り抜き倒立、振り下して開脚支持", sample_link: "" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "（開脚）支持から後ろ振り抜き倒立、振り下して閉脚（開脚）旋回", sample_link: "" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "（開脚）支持から後ろ振り抜き倒立１回ひねり、振り下して閉脚（開脚）旋回", sample_link: "" }
    ];

    $scope.pommel_horse_group_2_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "横向き旋回\n横向き開脚旋回（トーマス）", sample_link: "https://www.youtube.com/watch?v=IuZsf09_DP8" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "一把手上横向き旋回", sample_link: "" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "両把手を挟んで横向き旋回\nあん部馬背横向き旋回", sample_link: "" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "馬端中向き縦向き旋回", sample_link: "" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "一把手上縦向き旋回（前または後に１/４転向を伴っても）", sample_link: "" },
        { number_of_skill: "19", dificulty_of_skill: "A", name_of_skill: "馬端外向き縦向き旋回", sample_link: "" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "あん部馬背縦向き旋回", sample_link: "" },
        { number_of_skill: "25", dificulty_of_skill: "A", name_of_skill: "横向き旋回１/４ひねり縦向き支持", sample_link: "" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "横向き旋回ひねり", sample_link: "" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "横向き旋回１回ひねり（２回以内の旋回で）", sample_link: "https://www.youtube.com/watch?v=jT30ChbaUOc" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "両把手を挟んで（開脚）旋回１回ひねり（２回以内の旋回で）", sample_link: "" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "馬端縦向き旋回１/４ひねり横向き支持", sample_link: "" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "馬端縦向き旋回ひねり", sample_link: "" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "縦向き旋回１回ひねり（２回以内の旋回で）（マジャール）", sample_link: "https://www.youtube.com/watch?v=jT30ChbaUOc" },
        { number_of_skill: "35", dificulty_of_skill: "E", name_of_skill: "あん部馬背縦向き旋回１回ひねり（２回以内の旋回で）", sample_link: "" },
        { number_of_skill: "38", dificulty_of_skill: "B", name_of_skill: "（開脚）旋回倒立、下ろして開脚支持", sample_link: "" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "（開脚）旋回倒立ひねり、下ろして（開脚）旋回（チッペルト）", sample_link: "" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "背面とび横移動倒立経過、下ろして開脚支持", sample_link: "https://www.youtube.com/watch?v=uQ_Sc08m-3s" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "背面とび横移動倒立経過、下ろして開脚旋回", sample_link: "https://www.youtube.com/watch?v=3aUfFtAZK8U" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "下向き逆移動（orDSA）倒立経過、下ろして開脚支持", sample_link: "" },
        { number_of_skill: "54", dificulty_of_skill: "G", name_of_skill: "下向き逆移動（orDSA）倒立３/３部分移動１回ひねり、下ろして開脚旋回（ブスナリ）", sample_link: "https://www.youtube.com/watch?v=Dd87tQCP4q4" }
    ];

    $scope.pommel_horse_group_3_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "正面横移動（１/４転向を伴っても）", sample_link: "" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "正面横移動連続（馬端～馬端）", sample_link: "" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "正面横移動連続（馬端～馬端：あん部馬背着手", sample_link: "" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "１回の旋回で正面横移動（馬端から両把手を超えて逆馬端）", sample_link: "" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "正面とび横移動", sample_link: "" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "正面とび横移動連続（馬端～馬端）", sample_link: "" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "正面とび横移動（馬端～馬端）", sample_link: "" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "背面横移動", sample_link: "" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "背面横移動連続（馬端～馬端）", sample_link: "" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "背面横移動連続（馬端～馬端：あん部馬背着手）", sample_link: "" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "２回の旋回で背面横移動（馬端馬背から両把手を超えて逆馬端馬背）", sample_link: "" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "背面とび横移動", sample_link: "" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "背面とび横移動連続（馬端～馬端）", sample_link: "" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "背面とび横移動（馬端～馬端）", sample_link: "" },
        { number_of_skill: "23", dificulty_of_skill: "E", name_of_skill: "背面とび横移動（馬端馬背～馬端馬背）（ヤマワキ）", sample_link: "" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "正面横移動ひねり、背面横移動ひねり（馬端～馬端）", sample_link: "" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "全ての旋回移動ひねり", sample_link: "" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "背面横移動ひねり、正面横移動ひねり（馬端～馬端）", sample_link: "" },
        { number_of_skill: "43", dificulty_of_skill: "A", name_of_skill: "縦向き前移動（１/３部分）", sample_link: "" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "縦向き前移動（２/３or１/２部分）", sample_link: "" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "縦向き前移動（３/３馬端ー把手ー把手ー馬端）", sample_link: "https://www.youtube.com/watch?v=r0owogez7PY" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "縦向き前移動（３/３馬端ー把手ーあん部馬背ー把手ー馬端（マジャール）", sample_link: "https://www.youtube.com/watch?v=C0onQu1WvHI" },
        { number_of_skill: "47", dificulty_of_skill: "E", name_of_skill: "縦向きとび前移動（馬端～馬端）（ドリッグス）", sample_link: "https://www.youtube.com/watch?v=7fl7yllA5fA" },
        { number_of_skill: "50", dificulty_of_skill: "B", name_of_skill: "縦向き前移動１/４ひねり\n縦向き後ろ移動１/４ひねり", sample_link: "" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "片手ずつ支持して前移動連続横向き支持（ビロゼルチェフ）", sample_link: "" },
        { number_of_skill: "55", dificulty_of_skill: "A", name_of_skill: "縦向き後ろ移動（１/３部分）", sample_link: "" },
        { number_of_skill: "56", dificulty_of_skill: "B", name_of_skill: "縦向き後ろ移動（２/３or１/２部分）", sample_link: "" },
        { number_of_skill: "57", dificulty_of_skill: "C", name_of_skill: "縦向き後ろ移動（３/３：馬端ー把手ー把手ー馬端）", sample_link: "" },
        { number_of_skill: "58", dificulty_of_skill: "D", name_of_skill: "縦向き後ろ移動（３/３：あん部馬背着手）（シバド）", sample_link: "https://www.youtube.com/watch?v=3l5eZWi8RyE" }
    ];

    $scope.pommel_horse_group_4_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "上向き転向", sample_link: "" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "把手上上向き転向", sample_link: "" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "馬端横向き支持から上向き転向、下向き逆移動（ウルジカ）", sample_link: "https://www.youtube.com/watch?v=46dqU5wJtUg" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "馬端横向き支持から上向き転向、下向き逆移動、上向き転向（モギルニー）", sample_link: "https://www.youtube.com/watch?v=zASU7U38Jl4" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "シュテクリA（DSA）", sample_link: "" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "一腕上上向き270°転向／※縦向き支持から横向き支持＝B（ショーンの捌き）", sample_link: "" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "一腕上上向き全転向（ショーン）", sample_link: "https://www.youtube.com/watch?v=t71PB_jRLV4" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "シュテクリB（DSB）", sample_link: "https://www.youtube.com/watch?v=vo1mnJDZcK4" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "馬端横向き支持から下向き逆移動、上向き転向、下向き逆移動（ベレンキ）", sample_link: "https://www.youtube.com/watch?v=NT8Qcf0blYI" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "トラムロー／直接トラムロー", sample_link: "" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "下向き逆移動", sample_link: "" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "馬端外向き支持から下向き逆移動で反対の馬端外向き支持", sample_link: "" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "一腕上下向き全転向（ベズゴ）", sample_link: "https://www.youtube.com/watch?v=sTIz3JHQtgU" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "下向き正転向移動", sample_link: "" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "下向き正転向移動（把手間に着手なしで逆馬端へ）（横向き～横向き支持、横向き～縦向き支持、縦向き～横向き支持）", sample_link: "" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "下向き正転向移動（馬端～馬端、把手または把手間の着手なしで）（横向き～横向き支持、横向き～縦向き支持、縦向き～横向き支持）（トンフェイ）", sample_link: "" },
        { number_of_skill: "38", dificulty_of_skill: "B", name_of_skill: "下向きとび転向（スイスドゥーブル）", sample_link: "" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "両把手を挟んで下向き転向（ビネーロ）", sample_link: "" },
        { number_of_skill: "43", dificulty_of_skill: "A", name_of_skill: "馬端下向き転向", sample_link: "" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "把手上（あん部馬背）下向き転向", sample_link: "" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "把手を挟んだ横向き支持からロシアン360°転向移動（クロル）", sample_link: "" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "ロシアン360°転向移動（3/3部分）（ロス）", sample_link: "https://www.youtube.com/watch?v=pwa3V2KF5PA" },
        { number_of_skill: "47", dificulty_of_skill: "E", name_of_skill: "ロシアン720°（以上）転向移動（3/3部分）（ウ・グォニアン）", sample_link: "https://www.youtube.com/watch?v=G1o4e7sWdKU" },
        { number_of_skill: "49", dificulty_of_skill: "A", name_of_skill: "把手上ロシアン180°(270°)転向", sample_link: "" },
        { number_of_skill: "50", dificulty_of_skill: "B", name_of_skill: "把手上ロシアン360°(540°)転向", sample_link: "" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "把手ロシアン720°（900°）転向", sample_link: "" },
        { number_of_skill: "52", dificulty_of_skill: "D", name_of_skill: "把手上ロシアン1080°以上転向", sample_link: "" },
        { number_of_skill: "55", dificulty_of_skill: "A", name_of_skill: "馬端馬背ロシアン180°(270°)転向", sample_link: "" },
        { number_of_skill: "56", dificulty_of_skill: "B", name_of_skill: "馬端馬背ロシアン360°(540°)転向", sample_link: "" },
        { number_of_skill: "57", dificulty_of_skill: "C", name_of_skill: "馬端馬背ロシアン720°（900°）転向", sample_link: "" },
        { number_of_skill: "58", dificulty_of_skill: "D", name_of_skill: "馬端馬背ロシアン1080°以上転向", sample_link: "https://www.youtube.com/watch?v=760hl2-LSvA" },
        { number_of_skill: "62", dificulty_of_skill: "B", name_of_skill: "一把手上（あん部馬背）ロシアン180°（270°）転向", sample_link: "" },
        { number_of_skill: "63", dificulty_of_skill: "C", name_of_skill: "一把手上（あん部馬背）ロシアン360°（540°）転向", sample_link: "" },
        { number_of_skill: "64", dificulty_of_skill: "D", name_of_skill: "一把手上（あん部馬背）ロシアン720°（900°）転向", sample_link: "https://www.youtube.com/watch?v=mLeqqrFF14Q" },
        { number_of_skill: "65", dificulty_of_skill: "E", name_of_skill: "一把手上（あん部馬背）ロシアン1080°以上転向", sample_link: "https://www.youtube.com/watch?v=cGF36gOWf58" },
        { number_of_skill: "69", dificulty_of_skill: "C", name_of_skill: "馬端から両把手を超えてロシアン180°転向移動", sample_link: "" },
        { number_of_skill: "71", dificulty_of_skill: "E", name_of_skill: "両把手を超えてロシアン360°（540°）転向", sample_link: "" }
    ];

    $scope.pommel_horse_group_5_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "下向き転向下り", sample_link: "https://www.youtube.com/watch?v=seO4D4jl6_s" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "シャギニアン下り", sample_link: "" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "旋回倒立450°（以上）ひねり3/3部分移動下り（コリバノフ）", sample_link: "" },
        { number_of_skill: "5", dificulty_of_skill: "E", name_of_skill: "DSA倒立450°（以上）ひねり3/3部分移動下り", sample_link: "https://www.youtube.com/watch?v=Rd6F0LWYLAQ" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "ロシアン360°(540°) 転向下り", sample_link: "" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "ロシアン720°(900°) 転向下り", sample_link: "" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "ロシアン1080°(以上) 転向下り", sample_link: "https://www.youtube.com/watch?v=XC0Y7Lnk1B0" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "下向き正移動下向き転向下り", sample_link: "" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "下向き逆移動 (DSA) 倒立下り", sample_link: "https://www.youtube.com/watch?v=xeLuDrTBEc8" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "DSA直接背面とび横移動倒立下り", sample_link: "" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "・(開脚)旋回倒立下り　・(開脚)旋回倒立3/4ひねり下り（移動の有無にかかわらず）", sample_link: "https://www.youtube.com/watch?v=XN-Mo-4Ir1Q" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "(開脚)旋回背面とび横移動倒立下り", sample_link: "" }
    ];

    $scope.rings_group_1_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "懸垂前振り上がり支持", sample_link: "" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "懸垂前振り上がり脚前挙支持(2秒)", sample_link: "https://www.youtube.com/watch?v=qCdRuwr2vB8" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "支持後ろ振り、前に振りながら懸垂", sample_link: "" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "前振り上がり支持前方回転振り出し懸垂後ろ振り（ケキ）", sample_link: "" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "懸垂から伸腕前振り出し(肩が輪の高さ以上) (ナカヤマ)", sample_link: "" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "背面前振り上がり支持前方回転振り出し懸垂後ろ振り(ショラニー)", sample_link: "" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "懸垂後ろ振り出し、背面懸垂前振り上がり(リー・ニン)", sample_link: "https://www.youtube.com/watch?v=Cb4wCwwqqNw" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "支持後ろ振り出し、背面懸垂前振り上がり(リー・ニン２)", sample_link: "https://www.youtube.com/watch?v=YGvCEGOHDdg" },
        { number_of_skill: "25", dificulty_of_skill: "A", name_of_skill: "ほん転逆上がり支持", sample_link: "" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "伸腕ほん転逆上がり倒立経過", sample_link: "" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "後方かかえ込み２回宙返り懸垂(グチョギー)", sample_link: "https://www.youtube.com/watch?v=1dMiJHgJiJE" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "後方屈身２回宙返り懸垂", sample_link: "https://www.youtube.com/watch?v=cx9kdK-KJ0w" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "後方伸身２回宙返り懸垂(オニール)", sample_link: "https://www.youtube.com/watch?v=-C4oPDbbMjk" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "後方屈身(伸身)懸垂回転", sample_link: "https://www.youtube.com/watch?v=HzmhOW7mEBQ" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "ほん転逆上がり、脚を腕の上に乗せた開脚前挙支持(2秒) (デルチェフ)", sample_link: "https://www.youtube.com/watch?v=pZMJJZnG4hw" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "・グチョギー背面懸垂　・背面懸垂前振りからグチョギー", sample_link: "" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "屈身グチョギー背面懸垂", sample_link: "" },
        { number_of_skill: "35", dificulty_of_skill: "E", name_of_skill: "伸身グチョギー背面懸垂", sample_link: "" },
        { number_of_skill: "37", dificulty_of_skill: "A", name_of_skill: "後ろ振り上がり支持", sample_link: "" },
        { number_of_skill: "38", dificulty_of_skill: "B", name_of_skill: "・後ろ振り上がり倒立経過　・前方(屈身)車輪倒立経過", sample_link: "" },
        { number_of_skill: "43", dificulty_of_skill: "A", name_of_skill: "前方屈身(伸身)懸垂回転", sample_link: "" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "前方ほん転逆上がり支持(脚前挙支持) (２秒)", sample_link: "https://www.youtube.com/watch?v=YgeWzzMH1LE" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "前方伸身ほん転逆上がり支持", sample_link: "" },
        { number_of_skill: "49", dificulty_of_skill: "A", name_of_skill: "懸垂からゆっくりと肩転位", sample_link: "" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "前方かかえ込み２回宙返り懸垂(ヤマワキ)", sample_link: "https://www.youtube.com/watch?v=gQhXJhdaPXs" },
        { number_of_skill: "52", dificulty_of_skill: "D", name_of_skill: "前方屈身(伸身)２回宙返り懸垂(ジョナサン)", sample_link: "https://www.youtube.com/watch?v=mCoIFO3FYbI" },
        { number_of_skill: "55", dificulty_of_skill: "A", name_of_skill: "け上がり支持", sample_link: "" },
        { number_of_skill: "56", dificulty_of_skill: "B", name_of_skill: "け上がり脚前挙支持(２秒)", sample_link: "https://www.youtube.com/watch?v=u-ihDhhKMKQ" },
        { number_of_skill: "61", dificulty_of_skill: "A", name_of_skill: "後方け上がり支持", sample_link: "https://www.youtube.com/watch?v=Iq99_2XAfco" },
        { number_of_skill: "62", dificulty_of_skill: "B", name_of_skill: "後方伸腕け上がり支持", sample_link: "" },
        { number_of_skill: "67", dificulty_of_skill: "A", name_of_skill: "支持前振り出し懸垂後ろ振り", sample_link: "" },
        { number_of_skill: "68", dificulty_of_skill: "B", name_of_skill: "後ろ振り上がり開脚前挙支持(２秒)", sample_link: "" },
        { number_of_skill: "69", dificulty_of_skill: "C", name_of_skill: "支持後ろ振り前方かかえ込み(屈身)宙返り支持", sample_link: "" },
        { number_of_skill: "73", dificulty_of_skill: "A", name_of_skill: "屈身(伸身)逆上がり支持", sample_link: "" }
    ];


    $scope.rings_group_2_skills = [
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "・後方け上がり倒立(２秒)　・後方伸身支持回転倒立(２秒)", sample_link: "" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "・後方車輪(２秒)　・ほん転逆上がり倒立(２秒)", sample_link: "https://www.youtube.com/watch?v=KrWRdkMeIQs" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "・前方車輪(２秒)　・後ろ振り上がり倒立(２秒)", sample_link: "https://www.youtube.com/watch?v=SENO8_aiTdY" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "支持後ろ振り倒立(２秒)", sample_link: "" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "ホンマ支持後ろ振り倒立(２秒)", sample_link: "https://www.youtube.com/watch?v=VMB_ZhSgynY" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "伸身ホンマ支持後ろ振り倒立(２秒)", sample_link: "" },
    ];

    $scope.rings_group_3_skills = [
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "前振り上がり十字(脚前挙十字)懸垂(２秒)", sample_link: "https://www.youtube.com/watch?v=ehzVeaIWaKs" },
        { number_of_skill: "6", dificulty_of_skill: "F", name_of_skill: "前振り上がり上向き中水平支持(２秒)　(ロドリゲス)", sample_link: "https://www.youtube.com/watch?v=XB_puCX__no" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "前振り上がり脚上挙懸垂(２秒)", sample_link: "" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "支持後ろ振り出し、背面懸垂前振り上がり十字(脚前挙十字)懸垂(２秒)", sample_link: "" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "背面懸垂前振り上がり十字(脚前挙十字)懸垂(２秒)", sample_link: "" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "ほん転逆上がり開脚水平支持(２秒)", sample_link: "" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "ほん転逆上がり水平支持(２秒)", sample_link: "" },
        { number_of_skill: "23", dificulty_of_skill: "E", name_of_skill: "ほん転逆上がり中水平支持(２秒)", sample_link: "" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "ほん転逆上がり十字(脚前挙十字)懸垂(２秒)", sample_link: "" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "ほん転逆上がり十字倒立(２秒)", sample_link: "https://www.youtube.com/watch?v=HmstQce4fMU" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "後ろ振り上がり開脚水平支持(２秒)", sample_link: "" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "後ろ振り上がり水平支持(２秒)", sample_link: "" },
        { number_of_skill: "35", dificulty_of_skill: "E", name_of_skill: "後ろ振り上がり中水平支持(２秒)", sample_link: "https://www.youtube.com/watch?v=6qnGCryOU9A" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "後ろ振り上がり十字(脚前挙十字)懸垂(２秒)", sample_link: "https://www.youtube.com/watch?v=aT4EPT2IuKE" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "輪の高さで前方宙返り直接十字(脚前挙十字)懸垂(２秒)", sample_link: "" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "け上がり十字(脚前挙十字)懸垂(２秒)", sample_link: "" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "支持後ろ振り前方屈身宙返り直接十字(脚前挙十字)懸垂(２秒)", sample_link: "https://www.youtube.com/watch?v=LneB_BKAt70" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "け上がり脚上挙支持(２秒)", sample_link: "" },
        { number_of_skill: "52", dificulty_of_skill: "D", name_of_skill: "後ろ振り上がり十字倒立(２秒)", sample_link: "https://www.youtube.com/watch?v=SENO8_aiTdY" },
        { number_of_skill: "54", dificulty_of_skill: "F", name_of_skill: "け上がり上向き中水平支持(２秒)", sample_link: "" },
        { number_of_skill: "57", dificulty_of_skill: "C", name_of_skill: "後方け上がり開脚水平支持(２秒)", sample_link: "" },
        { number_of_skill: "58", dificulty_of_skill: "D", name_of_skill: "後方け上がり水平支持(２秒)", sample_link: "" },
        { number_of_skill: "59", dificulty_of_skill: "E", name_of_skill: "後方け上がり中水平支持(２秒)", sample_link: "" },
        { number_of_skill: "63", dificulty_of_skill: "C", name_of_skill: "後方け上がり十字(脚前挙十字)懸垂(２秒)", sample_link: "" },
        { number_of_skill: "64", dificulty_of_skill: "D", name_of_skill: "後方け上がり十字倒立(２秒)", sample_link: "" },
        { number_of_skill: "70", dificulty_of_skill: "D", name_of_skill: "け上がり脚上挙十字懸垂(２秒)　(モリナリ)", sample_link: "" },
        { number_of_skill: "76", dificulty_of_skill: "D", name_of_skill: "伸身逆上がり水平支持(２秒)", sample_link: "" }
    ];

    $scope.rings_group_4_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "・脚前挙支持(２秒)　・開脚前挙支持(２秒)", sample_link: "" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "脚上挙支持(２秒)", sample_link: "" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "十字倒立(２秒)", sample_link: "" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "十字倒立から押し上げ倒立(２秒)", sample_link: "" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "背面水平懸垂(２秒)", sample_link: "https://www.youtube.com/watch?v=OPaT-SLR67M" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "開脚水平支持(２秒)", sample_link: "" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "水平支持(２秒)", sample_link: "" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "中水平支持(２秒)　(ヒロンデル)", sample_link: "" },
        { number_of_skill: "11", dificulty_of_skill: "E", name_of_skill: "上向き中水平支持(２秒)", sample_link: "" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "正面水平懸垂(２秒)", sample_link: "" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "・十字懸垂(２秒)　・脚前挙十字懸垂(２秒)", sample_link: "https://www.youtube.com/watch?v=MicNiyejMhM" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "脚上挙十字懸垂(２秒)", sample_link: "" },
        { number_of_skill: "25", dificulty_of_skill: "A", name_of_skill: "屈腕屈身力倒立(２秒)", sample_link: "" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "・屈腕伸身力倒立(２秒)　・伸腕屈身(開脚)力倒立(２秒)　・開脚水平支持から伸腕伸身力倒立(２秒)", sample_link: "" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "支持(水平支持)から伸腕伸身力倒立(２秒)", sample_link: "" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "中水平から伸腕伸身力倒立(２秒)", sample_link: "" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "ゆっくりと前方屈身支持回転", sample_link: "" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "ゆっくりと前方伸身支持回転", sample_link: "" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "ゆっくりと前方伸身支持回転伸腕伸身力倒立(２秒)", sample_link: "" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "ゆっくりと前方伸腕伸身支持回転十字倒立(２秒)", sample_link: "" },
        { number_of_skill: "38", dificulty_of_skill: "B", name_of_skill: "ゆっくりと伸腕伸身逆上がり脚前挙支持(２秒)", sample_link: "" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "ゆっくりと前方伸腕伸身支持回転十字(脚前挙十字)(２秒)", sample_link: "" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "伸腕伸身正面水平懸垂経過十字(脚前挙十字)(２秒)　(ピネダ)", sample_link: "https://www.youtube.com/watch?v=3fU0OtVW0xg" },
        { number_of_skill: "41", dificulty_of_skill: "E", name_of_skill: "伸腕伸身正面水平経過中水平支持(２秒)　(バブサー)", sample_link: "https://www.youtube.com/watch?v=vTXDy23AwT4" },
        { number_of_skill: "47", dificulty_of_skill: "E", name_of_skill: "ゆっくりと後方伸腕伸身逆上がり水平支持(２秒)　(ヤン・ミンヨン)", sample_link: "https://www.youtube.com/watch?v=36_5lczwbMc" },
        { number_of_skill: "48", dificulty_of_skill: "F", name_of_skill: "ゆっくりと後方伸腕伸身逆上がり中水平支持(２秒)", sample_link: "https://www.youtube.com/watch?v=_9kBxReVg5U" },
        { number_of_skill: "50", dificulty_of_skill: "B", name_of_skill: "屈腕引き上げ背面水平(２秒)", sample_link: "" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "伸腕引き上げ背面水平(２秒)", sample_link: "" },
        { number_of_skill: "52", dificulty_of_skill: "D", name_of_skill: "伸腕伸身逆上がり十字(脚前挙十字)懸垂(２秒)　(アザリアン)", sample_link: "https://www.youtube.com/watch?v=JOwDpby49b0" },
        { number_of_skill: "53", dificulty_of_skill: "E", name_of_skill: "懸垂から伸腕伸身中水平支持(２秒)　(バランディン１)", sample_link: "" },
        { number_of_skill: "56", dificulty_of_skill: "B", name_of_skill: "十字(脚前挙十字)懸垂から背面水平懸垂(２秒)", sample_link: "" },
        { number_of_skill: "57", dificulty_of_skill: "C", name_of_skill: "伸腕引き上げ支持", sample_link: "" },
        { number_of_skill: "58", dificulty_of_skill: "D", name_of_skill: "背面水平懸垂経過十字(脚前挙十字)懸垂(２秒)　(ナカヤマ)", sample_link: "" },
        { number_of_skill: "59", dificulty_of_skill: "E", name_of_skill: "懸垂から伸腕伸身十字倒立(２秒)　(バランディン２)", sample_link: "https://www.youtube.com/watch?v=KuFi9nkfDpU" },
        { number_of_skill: "60", dificulty_of_skill: "F", name_of_skill: "背面水平懸垂経過引き上げ十字倒立(２秒)　(カルモナ)", sample_link: "https://www.youtube.com/watch?v=E63fyuUjOjk" },
        { number_of_skill: "62", dificulty_of_skill: "B", name_of_skill: "倒立から中水平を経過して背面水平懸垂(２秒)", sample_link: "" },
        { number_of_skill: "63", dificulty_of_skill: "C", name_of_skill: "支持から伸腕で下して懸垂、引き上げ十字懸垂(２秒)　(リー・シャオシュン)", sample_link: "https://www.youtube.com/watch?v=9grDX0QBPfc" },
        { number_of_skill: "64", dificulty_of_skill: "D", name_of_skill: "懸垂から伸腕で引き上げ十字懸垂(２秒)", sample_link: "" },
        { number_of_skill: "65", dificulty_of_skill: "E", name_of_skill: "・水平にゆっくり下して背面水平懸垂経過引き上げ中水平支持(２秒)　・中水平支持から水平にゆっくり下して背面水平経過引き上げ水平支持(バンゲルダー)", sample_link: "https://www.youtube.com/watch?v=6c0OftNtTVM" },
        { number_of_skill: "68", dificulty_of_skill: "B", name_of_skill: "倒立からゆっくり伸腕で十字倒立経過逆懸垂", sample_link: "" },
        { number_of_skill: "70", dificulty_of_skill: "D", name_of_skill: "中水平支持から押し上げ水平支持(２秒)", sample_link: "" },
        { number_of_skill: "71", dificulty_of_skill: "E", name_of_skill: "中水平支持からゆっくり背面水平懸垂経過中水平支持(２秒)", sample_link: "" },
        { number_of_skill: "72", dificulty_of_skill: "F", name_of_skill: "背面水平懸垂から引き上げ中水平支持(２秒)", sample_link: "https://www.youtube.com/watch?v=jHmorkecHWI" },
        { number_of_skill: "75", dificulty_of_skill: "C", name_of_skill: "脚前挙支持から伸腕屈身力十字倒立(２秒)", sample_link: "" },
        { number_of_skill: "76", dificulty_of_skill: "D", name_of_skill: "脚前挙十字懸垂から伸腕屈身力十字倒立(２秒)", sample_link: "" },
        { number_of_skill: "77", dificulty_of_skill: "E", name_of_skill: "十字懸垂から伸腕伸身力十字倒立(２秒)", sample_link: "https://www.youtube.com/watch?v=Qqwzdw8i1gU" },
        { number_of_skill: "81", dificulty_of_skill: "C", name_of_skill: "十字(脚前挙十字)懸垂から引き上げ脚前挙支持(２秒)", sample_link: "https://www.youtube.com/watch?v=9gfvhwd_8HI" },
        { number_of_skill: "82", dificulty_of_skill: "D", name_of_skill: "水平支持から伸腕伸身力十字倒立(２秒)", sample_link: "" },
        { number_of_skill: "83", dificulty_of_skill: "E", name_of_skill: "中水平支持から伸腕伸身力十字倒立(２秒)", sample_link: "" },
        { number_of_skill: "88", dificulty_of_skill: "D", name_of_skill: "十字懸垂から引き上げ水平支持(２秒)", sample_link: "https://www.youtube.com/watch?v=a0Jpsr9zsPk" },
        { number_of_skill: "89", dificulty_of_skill: "E", name_of_skill: "十字懸垂から伸腕伸身中水平支持(２秒)", sample_link: "https://www.youtube.com/watch?v=aAZLJvUqPio" },
        { number_of_skill: "94", dificulty_of_skill: "D", name_of_skill: "十字倒立からゆっくり下して逆懸垂経過伸腕伸身逆上がり十字懸垂(２秒)　(ボロビオフ)", sample_link: "" },
        { number_of_skill: "95", dificulty_of_skill: "E", name_of_skill: "十字倒立からゆっくり下して逆懸垂経過伸腕伸身逆上がり中水平支持(２秒)　(ヨブチェフ)", sample_link: "" }
    ];

    $scope.rings_group_5_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "前方屈身(伸身)宙返り下り", sample_link: "https://www.youtube.com/watch?v=d2-5cRJKJYI" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "前方屈身(伸身)宙返りひねり下り", sample_link: "" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "前方屈身(伸身)宙返り１回(3/2)ひねり下り", sample_link: "" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "前方屈身(伸身)宙返り２回下り", sample_link: "" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "前方かかえ込み２回宙返り(ひねり)下り", sample_link: "" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "前方かかえ込み２回宙返り3/2ひねり下り　(フィッシャー)", sample_link: "" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "前方屈身２回宙返り(ひねり)下り　(バラバノフ)", sample_link: "https://www.youtube.com/watch?v=NPHBkEhIyIU" },
        { number_of_skill: "17", dificulty_of_skill: "E", name_of_skill: "前方屈身２回宙返り3/2ひねり下り", sample_link: "" },
        { number_of_skill: "19", dificulty_of_skill: "A", name_of_skill: "後ろ振り上がり後方かかえ込み宙返り下り　(ケステ)", sample_link: "" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "後ろ振り上がり後方屈身(伸身)宙返り下り", sample_link: "" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "後ろ振り上がり後方伸身宙返り１回ひねり下り", sample_link: "" },
        { number_of_skill: "25", dificulty_of_skill: "A", name_of_skill: "後方屈身(伸身)宙返り下り", sample_link: "" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "後方伸身宙返り(１回)ひねり下り", sample_link: "" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "後方伸身宙返り２回(3/2)ひねり下り", sample_link: "https://www.youtube.com/watch?v=NtUN3UXb_Ss" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "後方伸身宙返り３回ひねり下り", sample_link: "" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "後方かかえ込み(屈身)２回宙返り下り", sample_link: "https://www.youtube.com/watch?v=THGBdduQlKo" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "後方伸身２回宙返り下り", sample_link: "https://www.youtube.com/watch?v=RlsE-Xl6oxU" },
        { number_of_skill: "36", dificulty_of_skill: "F", name_of_skill: "後方かかえ込み３回宙返り下り", sample_link: "https://www.youtube.com/watch?v=28wgf7LXcdM" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "後方かかえ込み(屈身or伸・屈or屈・伸)２回宙返り１回ひねり下り", sample_link: "https://www.youtube.com/watch?v=v3Jcrmyc5vY" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "後方かかえ込み(屈身)２回宙返り3/2回ひねり下り", sample_link: "https://www.youtube.com/watch?v=wgR1vmyOgZo" },
        { number_of_skill: "41", dificulty_of_skill: "E", name_of_skill: "後方かかえ込み(屈身)２回宙返り２回ひねり下り", sample_link: "https://www.youtube.com/watch?v=wgR1vmyOgZo" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "後方伸身宙返り１回ひねり後方かかえ込み宙返り下り", sample_link: "" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "後方伸身２回宙返り１回(3/2)ひねり下り", sample_link: "https://www.youtube.com/watch?v=9W4F2lcUcj4" },
        { number_of_skill: "48", dificulty_of_skill: "F", name_of_skill: "後方伸身２回宙返り２回(3/2)ひねり下り", sample_link: "https://www.youtube.com/watch?v=Wy58fxBJMGI" }
    ];

    $scope.mens_vault_group_1_skills = [
        { number_of_skill: "1", dificulty_of_skill: "2.0", name_of_skill: "前転とび", sample_link: "###" },
        { number_of_skill: "2", dificulty_of_skill: "2.4", name_of_skill: "前転とびひねり", sample_link: "###" },
        { number_of_skill: "3", dificulty_of_skill: "2.8", name_of_skill: "前転とび１回ひねり", sample_link: "###" },
        { number_of_skill: "4", dificulty_of_skill: "3.2", name_of_skill: "前転とび3/2ひねり", sample_link: "###" },
        { number_of_skill: "5", dificulty_of_skill: "3.6", name_of_skill: "前転とび２回ひねり", sample_link: "###" },
        { number_of_skill: "6", dificulty_of_skill: "3.0", name_of_skill: "ヤマシタとび", sample_link: "###" },
        { number_of_skill: "7", dificulty_of_skill: "3.4", name_of_skill: "ヤマシタとびひねり", sample_link: "###" },
        { number_of_skill: "8", dificulty_of_skill: "3.8", name_of_skill: "ヤマシタとび１回ひねり", sample_link: "###" },
        { number_of_skill: "9", dificulty_of_skill: "4.2", name_of_skill: "ヤマシタとび3/2ひねり", sample_link: "###" },
        { number_of_skill: "10", dificulty_of_skill: "4.6", name_of_skill: "ヤマシタとび２回ひねり", sample_link: "###" },
        { number_of_skill: "11", dificulty_of_skill: "2.8", name_of_skill: "前転とび前方かかえ込み宙返り", sample_link: "###" },
        { number_of_skill: "12", dificulty_of_skill: "3.2", name_of_skill: "前転とび前方かかえ込み宙返りひねり（クエルボとび）", sample_link: "###" },
        { number_of_skill: "13", dificulty_of_skill: "3.6", name_of_skill: "前転とび前方かかえ込み宙返り１回ひねり（クエルボとびひねり）", sample_link: "###" },
        { number_of_skill: "14", dificulty_of_skill: "4.0", name_of_skill: "前転とび前方かかえ込み宙返り3/2ひねり（クエルボとび１回ひねり）", sample_link: "###" },
        { number_of_skill: "15", dificulty_of_skill: "4.4", name_of_skill: "前転とび前方かかえ込み宙返り２回ひねり（クエルボとび3/2ひねり）", sample_link: "###" },
        { number_of_skill: "16", dificulty_of_skill: "3.2", name_of_skill: "前転とび前方屈身宙返り", sample_link: "###" },
        { number_of_skill: "17", dificulty_of_skill: "3.6", name_of_skill: "前転とび前方屈身宙返りひねり（屈身クエルボとび）", sample_link: "###" },
        { number_of_skill: "18", dificulty_of_skill: "4.0", name_of_skill: "前転とび前方屈身宙返り１回ひねり（屈身クエルボとびひねり）", sample_link: "###" },
        { number_of_skill: "19", dificulty_of_skill: "4.4", name_of_skill: "前転とび前方屈身宙返り3/2ひねり（屈身クエルボとび１回ひねり）", sample_link: "###" },
        { number_of_skill: "20", dificulty_of_skill: "4.4", name_of_skill: "前転とび１回ひねり前方かかえ込み宙返り（ベーレント）", sample_link: "###" },
        { number_of_skill: "21", dificulty_of_skill: "4.8", name_of_skill: "前転とび１回ひねり前方屈身宙返り（レーム）", sample_link: "###" },
        { number_of_skill: "22", dificulty_of_skill: "4.0", name_of_skill: "前転とび前方伸身宙返り", sample_link: "###" },
        { number_of_skill: "23", dificulty_of_skill: "4.4", name_of_skill: "前転とび前方伸身宙返りひねり（伸身クエルボとび）", sample_link: "###" },
        { number_of_skill: "24", dificulty_of_skill: "4.8", name_of_skill: "前転とび前方伸身宙返り１回ひねり（伸身クエルボとびひねり", sample_link: "###" },
        { number_of_skill: "25", dificulty_of_skill: "5.2", name_of_skill: "前転とび前方伸身宙返り3/2ひねり（伸身クエルボとび１回ひねり：ロー・ユン）", sample_link: "###" },
        { number_of_skill: "26", dificulty_of_skill: "5.6", name_of_skill: "前転とび前方伸身宙返り２回ひねり（伸身クエルボとび3/2ひねり", sample_link: "###" },
        { number_of_skill: "27", dificulty_of_skill: "6.0", name_of_skill: "前転とび前方伸身宙返り5/2ひねり（ヨー２）", sample_link: "###" },
        { number_of_skill: "28", dificulty_of_skill: "5.6", name_of_skill: "前転とび前方かかえ込み２回宙返り（ローチェ）", sample_link: "###" },
        { number_of_skill: "29", dificulty_of_skill: "6.0", name_of_skill: "前転とび前方かかえ込み２回宙返りひねり（ドラグレスク）", sample_link: "###" },
        { number_of_skill: "30", dificulty_of_skill: "6.0", name_of_skill: "前転とびひねり後方かかえ込み２回宙返り（ジマーマン）", sample_link: "###" },
        { number_of_skill: "31", dificulty_of_skill: "6.0", name_of_skill: "前転とび前方屈身２回宙返り（ブラニク）", sample_link: "###" },
        { number_of_skill: "32", dificulty_of_skill: "6.4", name_of_skill: "前転とび前方屈身2回宙返りひねり", sample_link: "###" },
        { number_of_skill: "33", dificulty_of_skill: "6.4", name_of_skill: "前転とび前方伸身宙返り3回ひねり（ヤンハクソン）", sample_link: "###" }
    ];

    $scope.mens_vault_group_2_skills = [
        { number_of_skill: "34", dificulty_of_skill: "2.0", name_of_skill: "側転とび1/4ひねり", sample_link: "###" },
        { number_of_skill: "35", dificulty_of_skill: "2.4", name_of_skill: "側転とび3/4ひねり", sample_link: "###" },
        { number_of_skill: "36", dificulty_of_skill: "2.8", name_of_skill: "側転とび5/4ひねり", sample_link: "###" },
        { number_of_skill: "37", dificulty_of_skill: "2.8", name_of_skill: "側転とび1/4ひねり前方かかえ込み宙返り", sample_link: "###" },
        { number_of_skill: "38", dificulty_of_skill: "3.2", name_of_skill: "側転とび1/4ひねり前方屈身宙返り", sample_link: "###" },
        { number_of_skill: "39", dificulty_of_skill: "4.4", name_of_skill: "側転とび1/4ひねり前方伸身宙返り", sample_link: "###" },
        { number_of_skill: "40", dificulty_of_skill: "2.8", name_of_skill: "側転とび1/4ひねり後方かかえ込み宙返り（ツカハラとび）", sample_link: "###" },
        { number_of_skill: "41", dificulty_of_skill: "3.2", name_of_skill: "かかえ込みツカハラとびひねり", sample_link: "###" },
        { number_of_skill: "42", dificulty_of_skill: "3.6", name_of_skill: "かかえ込みツカハラとび１回ひねり（カサマツとび）", sample_link: "###" },
        { number_of_skill: "43", dificulty_of_skill: "4.0", name_of_skill: "かかえ込みツカハラとび3/2ひねり（カサマツとびひねり）", sample_link: "###" },
        { number_of_skill: "44", dificulty_of_skill: "4.4", name_of_skill: "かかえ込みツカハラとび２回ひねり（カサマツとび１回ひねり）", sample_link: "###" },
        { number_of_skill: "45", dificulty_of_skill: "3.0", name_of_skill: "屈身ツカハラとび", sample_link: "###" },
        { number_of_skill: "46", dificulty_of_skill: "3.8", name_of_skill: "屈身ツカハラとび１回ひねり", sample_link: "###" },
        { number_of_skill: "47", dificulty_of_skill: "3.6", name_of_skill: "伸身ツカハラとび", sample_link: "###" },
        { number_of_skill: "48", dificulty_of_skill: "4.0", name_of_skill: "伸身ツカハラとびひねり", sample_link: "###" },
        { number_of_skill: "49", dificulty_of_skill: "4.4", name_of_skill: "伸身ツカハラとび１回ひねり（伸身カサマツとび）", sample_link: "###" },
        { number_of_skill: "50", dificulty_of_skill: "4.8", name_of_skill: "伸身ツカハラとび3/2ひねり（伸身カサマツとびひねり）", sample_link: "###" },
        { number_of_skill: "51", dificulty_of_skill: "5.2", name_of_skill: "伸身ツカハラとび２回ひねり（伸身カサマツとび１回ひねり：アカピアン）", sample_link: "###" },
        { number_of_skill: "52", dificulty_of_skill: "5.6", name_of_skill: "伸身ツカハラとび5/2ひねり（伸身カサマツとび3/2ひねり：ドリッグス）", sample_link: "###" },
        { number_of_skill: "53", dificulty_of_skill: "6.0", name_of_skill: "伸身ツカハラとび３回ひねり（伸身カサマツとび２回ひねり：ロペス）", sample_link: "###" },
        { number_of_skill: "54", dificulty_of_skill: "5.6", name_of_skill: "側転とび1/4ひねり後方かかえ込み２回宙返り（ヨー）", sample_link: "###" },
        { number_of_skill: "55", dificulty_of_skill: "6.4", name_of_skill: "側転とび3/4ひねり後方かかえ込み2回宙返り(リ・セグァン)", sample_link: "###" },
        { number_of_skill: "56", dificulty_of_skill: "6.0", name_of_skill: "側転とび1/4ひねり後方屈身２回宙返り（ルー・ユーフ）", sample_link: "###" }
    ];

    $scope.mens_vault_group_3_skills = [
        { number_of_skill: "57", dificulty_of_skill: "2.0", name_of_skill: "ロンダート、後転とび", sample_link: "###" },
        { number_of_skill: "58", dificulty_of_skill: "2.4", name_of_skill: "ロンダート、後転とびひねり", sample_link: "###" },
        { number_of_skill: "59", dificulty_of_skill: "2.8", name_of_skill: "ロンダート、後転とび１回ひねり", sample_link: "###" },
        { number_of_skill: "60", dificulty_of_skill: "2.8", name_of_skill: "ロンダート、後転とび後方かかえ込み宙返り（ユルチェンコ）", sample_link: "###" },
        { number_of_skill: "61", dificulty_of_skill: "3.2", name_of_skill: "ロンダート、後転とび後方かかえ込み宙返りひねり", sample_link: "###" },
        { number_of_skill: "62", dificulty_of_skill: "3.6", name_of_skill: "ロンダート、後転とび後方かかえ込み宙返り１回ひねり", sample_link: "###" },
        { number_of_skill: "63", dificulty_of_skill: "4.0", name_of_skill: "ロンダート、後転とび後方かかえ込み宙返り3/2ひねり", sample_link: "###" },
        { number_of_skill: "64", dificulty_of_skill: "4.4", name_of_skill: "ロンダート、後転とび後方かかえ込み宙返り２回ひねり", sample_link: "###" },
        { number_of_skill: "65", dificulty_of_skill: "3.0", name_of_skill: "屈身ユルチェンコとび", sample_link: "###" },
        { number_of_skill: "66", dificulty_of_skill: "3.8", name_of_skill: "屈身ユルチェンコと１回ひねり", sample_link: "###" },
        { number_of_skill: "67", dificulty_of_skill: "5.6", name_of_skill: "ロンダート、後転とび後方かかえ込み２回宙返り（メリサニディス）", sample_link: "###" },
        { number_of_skill: "68", dificulty_of_skill: "6.0", name_of_skill: "ロンダート、後転とび後方屈身２回宙返り", sample_link: "###" },
        { number_of_skill: "69", dificulty_of_skill: "3.6", name_of_skill: "伸身ユルチェンコとび", sample_link: "###" },
        { number_of_skill: "70", dificulty_of_skill: "4.0", name_of_skill: "伸身ユルチェンコとびひねり", sample_link: "###" },
        { number_of_skill: "71", dificulty_of_skill: "4.4", name_of_skill: "伸身ユルチェンコとび１回ひねり", sample_link: "###" },
        { number_of_skill: "72", dificulty_of_skill: "4.8", name_of_skill: "伸身ユルチェンコとび3/2ひねり", sample_link: "###" },
        { number_of_skill: "73", dificulty_of_skill: "5.2", name_of_skill: "伸身ユルチェンコとび２回ひねり", sample_link: "###" },
        { number_of_skill: "74", dificulty_of_skill: "5.6", name_of_skill: "伸身ユルチェンコとび5/2ひねり(シューフェルト)", sample_link: "###" },
        { number_of_skill: "75", dificulty_of_skill: "6.0", name_of_skill: "伸身ユルチェンコとび3回ひねり(シライ/キムヒフン)", sample_link: "###" }
    ];

    $scope.mens_vault_group_4_skills = [
        { number_of_skill: "76", dificulty_of_skill: "2.2", name_of_skill: "ロンダート、後ろとびひねり着手前転とび", sample_link: "###" },
        { number_of_skill: "77", dificulty_of_skill: "2.2", name_of_skill: "ロンダート、後ろとびひねり着手ヤマシタとび", sample_link: "###" },
        { number_of_skill: "78", dificulty_of_skill: "2.6", name_of_skill: "ロンダート、後ろとびひねり着手前転とびひねり", sample_link: "###" },
        { number_of_skill: "79", dificulty_of_skill: "2.6", name_of_skill: "ロンダート、後ろとびひねり着手ヤマシタとびひねり", sample_link: "###" },
        { number_of_skill: "80", dificulty_of_skill: "3.0", name_of_skill: "ロンダート、後ろとびひねり着手前転とび１回ひねり", sample_link: "###" },
        { number_of_skill: "81", dificulty_of_skill: "3.0", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方かかえ込み宙返り", sample_link: "###" },
        { number_of_skill: "82", dificulty_of_skill: "3.4", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方かかえ込み宙返りひねり", sample_link: "###" },
        { number_of_skill: "83", dificulty_of_skill: "5.8", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方かかえ込み２回宙返り", sample_link: "###" },
        { number_of_skill: "84", dificulty_of_skill: "3.4", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方屈身宙返り", sample_link: "###" },
        { number_of_skill: "85", dificulty_of_skill: "3.8", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方屈身宙返りひねり（ネモフ）", sample_link: "###" },
        { number_of_skill: "86", dificulty_of_skill: "4.2", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方伸身宙返り", sample_link: "###" },
        { number_of_skill: "87", dificulty_of_skill: "4.6", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方伸身宙返りひねり（ハッチェオン）", sample_link: "###" },
        { number_of_skill: "88", dificulty_of_skill: "5.0", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方伸身宙返り１回ひねり", sample_link: "###" },
        { number_of_skill: "89", dificulty_of_skill: "5.4", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方伸身宙返り3/2ひねり", sample_link: "###" },
        { number_of_skill: "90", dificulty_of_skill: "5.8", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方伸身宙返り２回ひねり", sample_link: "###" },
        { number_of_skill: "91", dificulty_of_skill: "6.2", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方伸身宙返り5/2ひねり（リー・シャオペン）", sample_link: "###" }
    ];

    $scope.mens_vault_group_5_skills = [
        { number_of_skill: "92", dificulty_of_skill: "2.4", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび", sample_link: "###" },
        { number_of_skill: "93", dificulty_of_skill: "2.8", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とびひねり", sample_link: "###" },
        { number_of_skill: "94", dificulty_of_skill: "3.2", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび１回ひねり", sample_link: "###" },
        { number_of_skill: "95", dificulty_of_skill: "3.2", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび後方かかえ込み宙返り", sample_link: "###" },
        { number_of_skill: "96", dificulty_of_skill: "3.6", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび後方かかえ込み宙返りひねり", sample_link: "###" },
        { number_of_skill: "97", dificulty_of_skill: "4.0", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび後方かかえ込み宙返り１回ひねり", sample_link: "###" },
        { number_of_skill: "98", dificulty_of_skill: "4.4", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび後方かかえ込み宙返り3/2ひねり", sample_link: "###" },
        { number_of_skill: "99", dificulty_of_skill: "4.8", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび後方かかえ込み宙返り２回ひねり", sample_link: "###" },
        { number_of_skill: "100", dificulty_of_skill: "3.4", name_of_skill: "ロンダート、後ろとび１回ひねり着手後方後転とび屈身宙返り", sample_link: "###" },
        { number_of_skill: "101", dificulty_of_skill: "4.0", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび後方伸身宙返り（シェルボとび）", sample_link: "###" },
        { number_of_skill: "102", dificulty_of_skill: "4.4", name_of_skill: "シェルボとびひねり", sample_link: "###" },
        { number_of_skill: "103", dificulty_of_skill: "4.8", name_of_skill: "シェルボとび１回ひねり", sample_link: "###" },
        { number_of_skill: "104", dificulty_of_skill: "5.2", name_of_skill: "シェルボとび3/2ひねり", sample_link: "###" },
        { number_of_skill: "105", dificulty_of_skill: "5.6", name_of_skill: "シェルボとび２回ひねり", sample_link: "###" }
    ];

    $scope.parallel_bars_group_1_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "倒立（２秒）\n単棒倒立（２秒）\n後ろ振り倒立（２秒）", sample_link: "###" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "屈腕前振り上向きとび転向", sample_link: "###" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "前振りひねり倒立（両棒or単棒）", sample_link: "###" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "脚前挙支持（２秒）\n単棒脚前挙支持（２秒）", sample_link: "###" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "前振り１回ひねり腕支持（カルミニッチ）", sample_link: "###" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "・前振り１/４ひねり単棒倒立（ビロゼルチェフ）　\n・後方棒上宙がえり１/４ひねり単棒倒立（ピータース）　\n・前振り３/４ひねりとび（軸手と反対側の）単棒縦向き倒立（１/４ひねり両棒倒立まで）（ディミック）", sample_link: "###" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "支持後ろ振り開脚入れ支持（脚前挙支持：２秒）", sample_link: "###" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "支持前振り開脚抜き倒立", sample_link: "###" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "前振り片腕支持３/４ひねり単棒縦向き倒立経過背面とび懸垂（デフレタス）", sample_link: "###" },
        { number_of_skill: "19", dificulty_of_skill: "A", name_of_skill: "支持前振り開脚抜き支持", sample_link: "###" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "支持前振り開脚抜き前方宙返り腕支持", sample_link: "###" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "前振り片腕支持１回（５/４）ひねり倒立（ディアミドフ）", sample_link: "###" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "前振り片腕支持５/４ひねり単棒倒立経過１/４ひねり両棒倒立", sample_link: "###" },
        { number_of_skill: "23", dificulty_of_skill: "E", name_of_skill: "前振り片腕支持５/４ひねり単棒倒立経過単棒１回ひねり（ぺガン）", sample_link: "###" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "屈腕伸身力倒立（２秒）\n伸腕屈身（開脚）力倒立（２秒）", sample_link: "###" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "マクーツ腕支持\n前振り片腕支持３/４ひねり単棒倒立経過同軸手で３/４ひねり支持", sample_link: "###" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "前振り片腕支持３/４ひねり単棒倒立経過、軸手を換えて３/４ひねり支持（マクーツ）", sample_link: "###" },
        { number_of_skill: "30", dificulty_of_skill: "F", name_of_skill: "前振り片腕支持５/４ひねり単棒倒立経過、軸手を換えて片腕支持５/４ひねり支持", sample_link: "###" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "前振り倒立とび肩転位支持（カルバロ）", sample_link: "###" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "後方棒上宙返り倒立\n後方棒上宙返り単棒縦向き倒立（１秒）＝D", sample_link: "###" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "後方棒上宙返り開脚入れ支持", sample_link: "###" },
        { number_of_skill: "35", dificulty_of_skill: "E", name_of_skill: "前振り片腕支持５/４ひねり単棒倒立経過、軸手を換えて片腕支持５/４ひねり腕支持", sample_link: "###" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "後方棒上宙返りひねり腕支持（ツミロビッチ）", sample_link: "###" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "後方棒上抱え込み２回宙返り腕支持", sample_link: "###" },
        { number_of_skill: "41", dificulty_of_skill: "E", name_of_skill: "後方棒上屈身２回宙返り腕支持（ファン・リーピン）", sample_link: "###" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "倒立１/４ひねり直ちに片腕支持３/４ひねり支持", sample_link: "###" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "倒立３/４ひねり直ちに片腕支持３/４ひねり支持", sample_link: "###" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "後方棒上かかえ込み3/2宙返りひねり腕支持(スアレス)", sample_link: "###" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "後ろ振りひねり開脚抜き支持", sample_link: "###" },
        { number_of_skill: "56", dificulty_of_skill: "B", name_of_skill: "後ろ振りひねり支持", sample_link: "###" },
        { number_of_skill: "57", dificulty_of_skill: "C", name_of_skill: "後ろ振り倒立経過ひねり支持(ノビコフ)", sample_link: "###" },
        { number_of_skill: "62", dificulty_of_skill: "B", name_of_skill: "片腕支持1回ひねり腕支持", sample_link: "###" },
        { number_of_skill: "63", dificulty_of_skill: "C", name_of_skill: "単棒倒立から片腕支持１回（５/４)ひねり腕支持", sample_link: "###" },
        { number_of_skill: "64", dificulty_of_skill: "D", name_of_skill: "片腕支持1回ひねり支持（ヒーリー）\n単棒倒立から片腕支持１回（５/４)ひねり支持", sample_link: "###" },
        { number_of_skill: "65", dificulty_of_skill: "E", name_of_skill: "単棒倒立から片腕支持１回（５/４)ひねり支持（B難度以上の振動技で単棒倒立から）", sample_link: "###" },
        { number_of_skill: "68", dificulty_of_skill: "B", name_of_skill: "後ろ振りとびひねり倒立", sample_link: "###" },
        { number_of_skill: "69", dificulty_of_skill: "C", name_of_skill: "後ろ振りとび３/４ひねり倒立", sample_link: "###" },
        { number_of_skill: "70", dificulty_of_skill: "D", name_of_skill: "後ろ振りとび１回ひねり倒立（ギャツスン１）", sample_link: "###" },
        { number_of_skill: "71", dificulty_of_skill: "E", name_of_skill: "後ろ振りとび５/４ひねり倒立直ちに１/４ひねり倒立（ギャツスン2）", sample_link: "###" },
        { number_of_skill: "73", dificulty_of_skill: "A", name_of_skill: "正倒立ひねり（２秒）", sample_link: "###" },
        { number_of_skill: "74", dificulty_of_skill: "B", name_of_skill: "後ろ振り1回ひねり倒立", sample_link: "###" },
        { number_of_skill: "79", dificulty_of_skill: "A", name_of_skill: "逆倒立ひねり（２秒）", sample_link: "###" },
        { number_of_skill: "80", dificulty_of_skill: "B", name_of_skill: "単棒倒立から３/４（１/２）ひねり倒立", sample_link: "###" },
        { number_of_skill: "87", dificulty_of_skill: "C", name_of_skill: "倒立から前方宙返り支持\n倒立から肩転移支持（カルバロ２）", sample_link: "###" },
        { number_of_skill: "89", dificulty_of_skill: "E", name_of_skill: "前方開脚５/４宙返り支持経過（直接懸垂）（リー・チョルホン）（ササキ）", sample_link: "###" },
        { number_of_skill: "92", dificulty_of_skill: "B", name_of_skill: "前方かかえ込み（屈身）５/４宙返り腕支持", sample_link: "###" },
        { number_of_skill: "93", dificulty_of_skill: "B", name_of_skill: "前方宙返り支持", sample_link: "###" },
        { number_of_skill: "94", dificulty_of_skill: "D", name_of_skill: "前方開脚５/４宙返り腕支持", sample_link: "###" },
        { number_of_skill: "95", dificulty_of_skill: "E", name_of_skill: "前方開脚５/４宙返り屈腕支持", sample_link: "###" },
        { number_of_skill: "98", dificulty_of_skill: "B", name_of_skill: "前方かかえ込み（屈身）宙返り１/４ひねり単棒懸垂", sample_link: "###" },
        { number_of_skill: "99", dificulty_of_skill: "C", name_of_skill: "棒端、前方かかえ込み（屈身）宙返り懸垂", sample_link: "###" },
        { number_of_skill: "100", dificulty_of_skill: "D", name_of_skill: "前方かかえ込み2回宙返り腕支持", sample_link: "###" },
        { number_of_skill: "101", dificulty_of_skill: "E", name_of_skill: "前方屈身2回宙返り腕支持", sample_link: "###" },
        { number_of_skill: "103", dificulty_of_skill: "A", name_of_skill: "棒端中向き（開脚）旋回１回", sample_link: "###" },
        { number_of_skill: "104", dificulty_of_skill: "B", name_of_skill: "棒の中央（棒端外向き）で（開脚）旋回１回", sample_link: "###" },
        { number_of_skill: "105", dificulty_of_skill: "C", name_of_skill: "棒端で下向き360°転向(デレサレ)", sample_link: "###" },
        { number_of_skill: "107", dificulty_of_skill: "E", name_of_skill: "前方宙返り1回ひねり腕支持(ウルジカ)", sample_link: "###" },
        { number_of_skill: "111", dificulty_of_skill: "C", name_of_skill: "開脚旋回倒立", sample_link: "###" },
        { number_of_skill: "117", dificulty_of_skill: "C", name_of_skill: "開脚旋回倒立ひねり", sample_link: "###" }
    ];

    $scope.parallel_bars_group_2_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "前振り上がり", sample_link: "###" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "前振り上がり開脚抜き倒立", sample_link: "###" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "前振り上がりひねり倒立", sample_link: "###" },
        { number_of_skill: "5", dificulty_of_skill: "E", name_of_skill: "前振り上がり片腕支持1回ひねり倒立(リチャード)", sample_link: "###" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "前振り上がり1/4ひねり単棒横向き懸垂", sample_link: "###" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "ほん転ひねり腕支持（ワタナベ）\n前振りとび上向き転向支持", sample_link: "###" },
        { number_of_skill: "11", dificulty_of_skill: "E", name_of_skill: "前振り上がり片腕支持3/4ひねり単棒横向き倒立経過、軸手を換えて片腕支持3/4ひねり腕支持", sample_link: "###" },
        { number_of_skill: "12", dificulty_of_skill: "G", name_of_skill: "前振り上がり片腕支持3/4ひねり単棒横向き倒立経過、片腕支持3/4ひねり支持(ソラキディス 1)  ", sample_link: "https://www.youtube.com/watch?v=FqO2M2agjzA&feature=youtu.be&t=48s" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "ほん転倒立", sample_link: "###" },
        { number_of_skill: "18", dificulty_of_skill: "F", name_of_skill: "前振り上がり片腕支持5/4ひねり単棒横向き倒立経過、1/4ひねり倒立(ソラキディス2)", sample_link: "###" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "ほん転開脚入れ腕支持", sample_link: "###" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "ほん転開脚入れ支持", sample_link: "###" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "前振り上がり後方かかえ込み宙返りひねり腕支持（ハラダ）", sample_link: "###" },
        { number_of_skill: "23", dificulty_of_skill: "E", name_of_skill: "前振り上がり後方かかえ込み2回宙返り腕支持(ドミトリェンコ)", sample_link: "###" },
        { number_of_skill: "24", dificulty_of_skill: "F", name_of_skill: "前振り上がり後方屈身2回宙返り腕支持（リー・シャオペン）", sample_link: "###" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "後ろ振り上がり(ひねり)支持", sample_link: "###" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "後ろ振り上がりとびひねり倒立", sample_link: "###" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "後ろ振り上がりとび3/4ひねり単棒横向き倒立", sample_link: "###" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "後ろ振り上がり開脚抜き腕支持  ", sample_link: "###" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "後ろ振り上がり開脚抜き支持", sample_link: "###" },
        { number_of_skill: "38", dificulty_of_skill: "B", name_of_skill: "後ろ振り上がりひねり支持", sample_link: "###" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "後ろ振り上がり前方かかえ込み(屈身or開脚)5/4宙返り腕支持(ヤマワキ)", sample_link: "###" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "後ろ振り上がり前方屈身宙返り支持", sample_link: "https://www.youtube.com/watch?v=XkHNK4cew7U" },
        { number_of_skill: "43", dificulty_of_skill: "A", name_of_skill: "後ろ振り上がり開脚入れ屈腕支持", sample_link: "###" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "後ろ振り上がり開脚入れ伸腕支持", sample_link: "###" }
    ];

    $scope.parallel_bars_group_3_skills = [
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "懸垂前振り上がり開脚抜き屈腕（腕）支持", sample_link: "###" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "倒立から伸膝で振り下ろし懸垂前振り上がり開脚抜き倒立(チッペルト)", sample_link: "https://www.youtube.com/watch?v=T1Yl4pmYbnw" },
        { number_of_skill: "5", dificulty_of_skill: "E", name_of_skill: "懸垂前振り上がり開脚抜き伸身かつ水平位で懸垂(バブサー)", sample_link: "###" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "懸垂前振り上がり開脚抜きひねり腕支持", sample_link: "###" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "倒立から伸膝で振り下ろし懸垂前振り上がり1回ひねり腕支持(ノレット)", sample_link: "###" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "倒立から伸膝で振り下ろし懸垂前振り上がり前方かかえ込み（屈身or開脚）宙返り腕支持", sample_link: "###" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "懸垂前振り上がり支持(モイ)\n懸垂前振り上がり肩転位支持", sample_link: "###" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "後方車輪倒立（ケンモツ）\n後方車輪（１/４）ひねり倒立\n後方背面車輪（ひねり）倒立（ウエルス）", sample_link: "###" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "後方車輪単棒縦向き倒立（１秒）（ピアスキー）", sample_link: "###" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "後方車輪片腕支持1回ひねり倒立", sample_link: "###" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "後方車輪片腕支持5/4ひねり単棒横向き(＋1/4ひねり)倒立", sample_link: "###" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "後方伸身宙返り懸垂", sample_link: "###" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "懸垂前振り後方宙返りひねり腕支持(グシケン)", sample_link: "###" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "懸垂前振り後方宙返りひねり支持(マリニチ)", sample_link: "###" },
        { number_of_skill: "36", dificulty_of_skill: "G", name_of_skill: "懸垂前振り後方かかえ込み2回宙返り1回ひねり腕支持(キンテロ)", sample_link: "https://www.youtube.com/watch?v=UoRbZ9dNwcg" },
        { number_of_skill: "38", dificulty_of_skill: "B", name_of_skill: "後方車輪開脚入れ腕支持", sample_link: "###" },
        { number_of_skill: "39", dificulty_of_skill: "D", name_of_skill: "後方車輪開脚入れ支持(コロレフ)", sample_link: "###" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "懸垂前振り後方かかえ込み2回宙返り腕支持(ベーレ)", sample_link: "###" },
        { number_of_skill: "41", dificulty_of_skill: "E", name_of_skill: "懸垂前振り後方屈身2回宙返り腕支持", sample_link: "###" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "棒端、懸垂前振り後方宙返りひねり懸垂（チャートランド）", sample_link: "###" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "懸垂前振り後方かかえ込み（屈身）宙返りひねり腕支持（懸垂）", sample_link: "###" },
        { number_of_skill: "47", dificulty_of_skill: "E", name_of_skill: "懸垂前振り後方かかえ込み（屈身）宙返りひねり支持（トレス）", sample_link: "###" },
        { number_of_skill: "48", dificulty_of_skill: "F", name_of_skill: "懸垂前振りひねり前方2回宙返り腕支持(タナカ)", sample_link: "###" },
        { number_of_skill: "49", dificulty_of_skill: "A", name_of_skill: "け上がり支持（両棒or単棒）", sample_link: "###" },
        { number_of_skill: "50", dificulty_of_skill: "B", name_of_skill: "け上がりひねり支持", sample_link: "###" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "後方け上がり倒立", sample_link: "###" },
        { number_of_skill: "56", dificulty_of_skill: "B", name_of_skill: "け上がり開脚抜き（両棒or単棒）倒立", sample_link: "###" },
        { number_of_skill: "62", dificulty_of_skill: "B", name_of_skill: "単棒横向き前方浮腰上がり開脚浮腰支持経過横向き倒立", sample_link: "###" },
        { number_of_skill: "63", dificulty_of_skill: "C", name_of_skill: "単棒横向き前方浮腰上がり脚前挙支持経過横向き倒立", sample_link: "###" },
        { number_of_skill: "64", dificulty_of_skill: "D", name_of_skill: "単棒横向き前方浮腰上がり脚前挙支持経過とび3/4ひねり倒立", sample_link: "###" },
        { number_of_skill: "68", dificulty_of_skill: "B", name_of_skill: "単棒横向き前方浮腰上がり脚上挙支持経過とびひねり反対の棒に懸垂(リー・ドンファ)", sample_link: "###" }
    ];

    $scope.parallel_bars_group_4_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "棒下振り出し腕支持", sample_link: "###" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "棒下振り出し支持", sample_link: "###" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "棒下宙返りひねり腕支持", sample_link: "###" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "棒下宙返りひねり支持", sample_link: "###" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "棒下振り出しひねり腕支持", sample_link: "###" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "棒下振り出しひねり支持", sample_link: "###" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "逆上がり（棒下宙返り）倒立\n逆上がり（棒下宙返り）背面倒立経過とび倒立（クシェラ）（セレン）", sample_link: "###" },
        { number_of_skill: "11", dificulty_of_skill: "E", name_of_skill: "逆上がり（棒下宙返り）ひねり倒立（１/４or１/２or３/４) ", sample_link: "###" },
        { number_of_skill: "12", dificulty_of_skill: "G", name_of_skill: "逆上がり（棒下宙返り）5/4ひねり倒立（シュウ・シーフォン）", sample_link: "https://www.youtube.com/watch?v=4VxQ_Ed8UXI" },
        { number_of_skill: "15", dificulty_of_skill: "B", name_of_skill: "棒下振り出し開脚抜き倒立(アリカン)", sample_link: "###" },
        { number_of_skill: "18", dificulty_of_skill: "F", name_of_skill: "逆上がり（棒下宙返り）１回ひねり倒立（テンハイビン）", sample_link: "###" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "逆上がり（棒下宙返り）懸垂", sample_link: "###" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "逆上がり（棒下宙返り）開脚入れ支持", sample_link: "###" },
        { number_of_skill: "23", dificulty_of_skill: "E", name_of_skill: "逆上がり（棒下宙返り）単棒倒立（１秒）", sample_link: "###" },
        { number_of_skill: "25", dificulty_of_skill: "A", name_of_skill: "前方棒下宙返り支持", sample_link: "###" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "前方棒下宙返りひねり支持", sample_link: "###" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "棒下宙返り直接かかえ込み宙返り腕支持(タジェダ)", sample_link: "###" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "正面横向き立ちから遠い方の棒を握り逆上がり倒立、手前の棒に移り懸垂", sample_link: "###" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "正面横向き立ちから遠い方の棒を握り逆上がり1/4ひねり倒立", sample_link: "###" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "正面横向き立ちから遠い方の棒を握り後方開脚浮き腰回転単棒横向き倒立", sample_link: "###" }
    ];

    $scope.parallel_bars_group_5_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "前方屈身（伸身）宙返り下り", sample_link: "###" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "前方屈身（伸身）宙返りひねり下り", sample_link: "###" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "前方屈身（伸身）宙返り１回（３/２）ひねり下り", sample_link: "###" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "前方屈身（伸身）宙返り１回（５/２)ひねり下り", sample_link: "###" },
        { number_of_skill: "5", dificulty_of_skill: "E", name_of_skill: "前方かかえ込み2回宙返り下り", sample_link: "###" },
        { number_of_skill: "6", dificulty_of_skill: "F", name_of_skill: "前方屈身2回宙返り下り（ベルヤフスキー）", sample_link: "###" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "棒端、前方かかえ込み2回宙返り下り", sample_link: "###" },
        { number_of_skill: "12", dificulty_of_skill: "F", name_of_skill: "前方かかえ込み2回宙返りひねり下り\n支持前振りひねり後方かかえ込み2回宙返り下り", sample_link: "###" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "後方屈身（伸身）宙返り下り", sample_link: "###" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "後方屈身（伸身）宙返りひねり下り", sample_link: "###" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "後方屈身（伸身）宙返り１回（３/２)ひねり下り", sample_link: "###" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "後方伸身宙返り2回ひねり下り", sample_link: "###" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "後ろ振り片腕支持ひねり後方かかえ込み（屈身）宙返り下り（ロースリスバーガー）", sample_link: "###" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "棒端、後方かかえ込み2回宙返り下り", sample_link: "###" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "後方かかえ込み2回宙返り下り", sample_link: "###" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "後方屈身2回宙返り下り", sample_link: "https://www.youtube.com/watch?v=XkHNK4cew7U" },
        { number_of_skill: "30", dificulty_of_skill: "G", name_of_skill: "後方かかえ込み2回宙返り1回ひねり下り(カトウヒロユキ)", sample_link: "https://www.youtube.com/watch?v=HOmp9CWTryw#t=39" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "棒端、懸垂前振り後方伸身宙返り下り", sample_link: "###" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "棒端、懸垂前振り後方かかえ込み2回宙返り下り", sample_link: "###" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "棒端、懸垂前振り後方屈身2回宙返り下り", sample_link: "###" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "棒端、懸垂前振り後方かかえ込み2回宙返り1回ひねり下り", sample_link: "https://www.youtube.com/watch?v=HeYg5xSjn9k" }
    ];

    $scope.womens_floor_group_1_skills = [
        { number_of_skill: "1.101", dificulty_of_skill: "A", name_of_skill: "片足踏み切り、前後開脚とび", sample_link: "https://www.youtube.com/watch?v=JRa57M5VFic" },
        { number_of_skill: "1.101", dificulty_of_skill: "A", name_of_skill: "片足踏み切り、前とび1/4ひねりから左右開脚屈伸（両足は水平より上）、または左右開脚、（片足、両足）着地", sample_link: "###" },
        { number_of_skill: "1.201", dificulty_of_skill: "B", name_of_skill: "片足踏み切り、前後開脚とび1/2ひねり", sample_link: "###" },
        { number_of_skill: "1.201", dificulty_of_skill: "B", name_of_skill: "カデット、片足着地", sample_link: "###" },
        { number_of_skill: "1.301", dificulty_of_skill: "C", name_of_skill: "片足踏み切り、前後開脚とび１回ひねり", sample_link: "###" },
        { number_of_skill: "1.301", dificulty_of_skill: "C", name_of_skill: "片足踏み切り、前後開脚とび1１回ひねり、開脚座", sample_link: "###" },
        { number_of_skill: "1.301", dificulty_of_skill: "C", name_of_skill: "片足踏み切り、左右開脚とび１回ひねり", sample_link: "###" },
        { number_of_skill: "1.401", dificulty_of_skill: "D", name_of_skill: "片足踏み切り、前後開脚とび１1/2ひねり", sample_link: "###" },
        { number_of_skill: "1.102", dificulty_of_skill: "A", name_of_skill: "両足踏み切り、前後開脚とび or 鹿とび、または1/2ひねり", sample_link: "###" },
        { number_of_skill: "1.202", dificulty_of_skill: "B", name_of_skill: "両足踏み切り、前後開脚とび1/2ひねり", sample_link: "###" },
        { number_of_skill: "1.302", dificulty_of_skill: "C", name_of_skill: "両足踏み切り、前後開脚とび１回ひねり", sample_link: "###" },
        { number_of_skill: "1.402", dificulty_of_skill: "D", name_of_skill: "両足踏み切り、前後開脚とび１1/2ひねり", sample_link: "###" },
        { number_of_skill: "1.103", dificulty_of_skill: "A", name_of_skill: "かかえ込みとび、空中で前後開脚", sample_link: "###" },
        { number_of_skill: "1.204", dificulty_of_skill: "B", name_of_skill: "前へ脚交差した前後開脚とび", sample_link: "###" },
        { number_of_skill: "1.304", dificulty_of_skill: "C", name_of_skill: "前へ脚交差した前後開脚とび1/2ひねり", sample_link: "###" },
        { number_of_skill: "1.404", dificulty_of_skill: "D", name_of_skill: "前へ脚交差した前後開脚とび１回ひねり", sample_link: "###" },
        { number_of_skill: "1.205", dificulty_of_skill: "B", name_of_skill: "前へ脚交差し、1/4ひねりとび［ジョンソン］", sample_link: "###" },
        { number_of_skill: "1.305", dificulty_of_skill: "C", name_of_skill: "ジョンソン1/2ひねり", sample_link: "###" },
        { number_of_skill: "1.405", dificulty_of_skill: "D", name_of_skill: "ジョンソン１回ひねり", sample_link: "###" },
        { number_of_skill: "1.106", dificulty_of_skill: "A", name_of_skill: "両足踏み切り、屈伸とび", sample_link: "###" },
        { number_of_skill: "1.206", dificulty_of_skill: "B", name_of_skill: "両足踏み切り、屈伸とび１回ひねり", sample_link: "###" },
        { number_of_skill: "1.306", dificulty_of_skill: "C", name_of_skill: "１回の（前方、後方）バタフライ", sample_link: "###" },
        { number_of_skill: "1.107", dificulty_of_skill: "A", name_of_skill: "左右開脚屈伸とびまたは左右開脚とび", sample_link: "###" },
        { number_of_skill: "1.207", dificulty_of_skill: "B", name_of_skill: "左右開脚屈伸とびまたは左右開脚とび1/2ひねり", sample_link: "###" },
        { number_of_skill: "1.307", dificulty_of_skill: "C", name_of_skill: "左右開脚屈伸とびまたは左右開脚１回ひねり", sample_link: "###" },
        { number_of_skill: "1.407", dificulty_of_skill: "D", name_of_skill: "左右開脚屈伸とびまたは左右開脚とび１1/2ひねり", sample_link: "###" },
        { number_of_skill: "1.108", dificulty_of_skill: "A", name_of_skill: "左右開脚屈伸または左右開脚とびから正面支持臥または1/2ひねり", sample_link: "###" },
        { number_of_skill: "1.108", dificulty_of_skill: "A", name_of_skill: "片足踏み切り、片脚を振り上げながら１回ひねり左右開脚、正面支持臥", sample_link: "###" },
        { number_of_skill: "1.208", dificulty_of_skill: "B", name_of_skill: "左右開脚屈伸または左右開脚とび１回ひねり正面支持臥", sample_link: "###" },
        { number_of_skill: "1.208", dificulty_of_skill: "B", name_of_skill: "片足踏み切り、水平で両脚を閉じた１1/2ひねりとび、正面支持臥", sample_link: "###" },
        { number_of_skill: "1.109", dificulty_of_skill: "A", name_of_skill: "両脚踏み切り、シソンヌ片足着地", sample_link: "###" },
        { number_of_skill: "1.109", dificulty_of_skill: "A", name_of_skill: "両脚踏み切り、輪とび", sample_link: "###" },
        { number_of_skill: "1.109", dificulty_of_skill: "A", name_of_skill: "両脚踏み切り、前脚を曲げた輪とび", sample_link: "###" },
        { number_of_skill: "1.209", dificulty_of_skill: "B", name_of_skill: "カデットから輪", sample_link: "###" },
        { number_of_skill: "1.209", dificulty_of_skill: "B", name_of_skill: "両脚を頭につけるように頭部後屈し、アーチ姿勢に反ったジャンプ（羊とび）", sample_link: "###" },
        { number_of_skill: "1.309", dificulty_of_skill: "C", name_of_skill: "前へ脚交差した前後開脚とびから輪", sample_link: "###" },
        { number_of_skill: "1.309", dificulty_of_skill: "C", name_of_skill: "片足踏み切り、輪とび", sample_link: "###" },
        { number_of_skill: "1.409", dificulty_of_skill: "D", name_of_skill: "片足踏み切り、または両足踏み切り、前後開脚とび１回ひねりから輪 or 前へ脚交差した前後開脚とびから輪、1/2ひねり", sample_link: "https://www.youtube.com/watch?v=BjCZkJn4mPc" },
        { number_of_skill: "1.110", dificulty_of_skill: "A", name_of_skill: "（片足、両足）踏み切り、伸身とび１回ひねり", sample_link: "###" },
        { number_of_skill: "1.210", dificulty_of_skill: "B", name_of_skill: "（片足、両足）踏み切り、伸身とび２回ひねり", sample_link: "###" },
        { number_of_skill: "1.111", dificulty_of_skill: "A", name_of_skill: "ねことび", sample_link: "###" },
        { number_of_skill: "1.211", dificulty_of_skill: "B", name_of_skill: "ねことび１回ひねり", sample_link: "###" },
        { number_of_skill: "1.311", dificulty_of_skill: "C", name_of_skill: "ねことび２回ひねり", sample_link: "###" },
        { number_of_skill: "1.112", dificulty_of_skill: "A", name_of_skill: "片脚を前に振り上げた1/2ひねりとび、正面水平立ち", sample_link: "###" },
        { number_of_skill: "1.312", dificulty_of_skill: "C", name_of_skill: "片足踏み切り、初めから終わりまで片脚を前に伸ばして水平より上に上げた１回ひねりとび", sample_link: "###" },
        { number_of_skill: "1.113", dificulty_of_skill: "A", name_of_skill: "（片足、両足）踏み切り、かかえ込みとび", sample_link: "###" },
        { number_of_skill: "1.213", dificulty_of_skill: "B", name_of_skill: "（片足、両足）踏み切り、かかえ込みとび１回ひねり", sample_link: "###" },
        { number_of_skill: "1.313", dificulty_of_skill: "C", name_of_skill: "（片足、両足）踏み切り、かかえ込みとび２回ひねり、または正面支持臥", sample_link: "###" },
        { number_of_skill: "1.114", dificulty_of_skill: "A", name_of_skill: "（片足、両足）踏み切り、ウルフとび", sample_link: "###" },
        { number_of_skill: "1.114", dificulty_of_skill: "A", name_of_skill: "前へ脚交差したウルフとび", sample_link: "###" },
        { number_of_skill: "1.214", dificulty_of_skill: "B", name_of_skill: "（片足、両足）踏み切り、ウルフとび１回ひねり", sample_link: "###" },
        { number_of_skill: "1.214", dificulty_of_skill: "B", name_of_skill: "（片足、両足）踏み切り、ウルフとび１回ひねり、正面支持臥", sample_link: "###" },
        { number_of_skill: "1.314", dificulty_of_skill: "D", name_of_skill: "（片足、両足）踏み切り、ウルフとび２回ひねり", sample_link: "###" }
    ];

    $scope.womens_floor_group_2_skills = [
        { number_of_skill: "2.101", dificulty_of_skill: "A", name_of_skill: "片足立ち１回ターン", sample_link: "https://www.youtube.com/watch?v=zq9oB-k27rw" },
        { number_of_skill: "2.201", dificulty_of_skill: "B", name_of_skill: "片足立ち２回ターン", sample_link: "###" },
        { number_of_skill: "2.301", dificulty_of_skill: "C", name_of_skill: "片足立ち３回ターン", sample_link: "###" },
        { number_of_skill: "2.501", dificulty_of_skill: "E", name_of_skill: "片足立ち４回ターン", sample_link: "###" },
        { number_of_skill: "2.202", dificulty_of_skill: "B", name_of_skill: "前へ上げた浮脚の踵をターンの初めから終わりまで水平に保つ１回ターン", sample_link: "###" },
        { number_of_skill: "2.402", dificulty_of_skill: "D", name_of_skill: "前へ上げた浮脚の踵をターンの初めから終わりまで水平に保つ２回ターン", sample_link: "###" },
        { number_of_skill: "2.203", dificulty_of_skill: "B", name_of_skill: "180度開脚した浮脚の上方をターンの初めから終わりまで手で保持した１回ターン", sample_link: "###" },
        { number_of_skill: "2.403", dificulty_of_skill: "D", name_of_skill: "180度開脚した浮脚の上方をターンの初めから終わりまで手で保持した２回ターン", sample_link: "###" },
        { number_of_skill: "2.503", dificulty_of_skill: "E", name_of_skill: "180度開脚した浮脚の上方をターンの初めから終わりまで手で保持した３回ターン", sample_link: "https://www.youtube.com/watch?v=PxS1NkmG09E" },
        { number_of_skill: "2.204", dificulty_of_skill: "B", name_of_skill: "後ろへ上げた浮脚の大腿部をターンの初めから終わりまで水平に保つ片足立ち１回ターン", sample_link: "###" },
        { number_of_skill: "2.404", dificulty_of_skill: "D", name_of_skill: "後ろへ上げた浮脚の大腿部をターンの初めから終わりまで水平に保つ片足立ち２回ターン", sample_link: "###" },
        { number_of_skill: "2.205", dificulty_of_skill: "B", name_of_skill: "後ろへ上げた浮脚をターンの初めから終わりまで手で上方に保持した１回ターン", sample_link: "###" },
        { number_of_skill: "2.206", dificulty_of_skill: "B", name_of_skill: "浮脚や手が床に触れないで、片脚を後ろに振り上げた前後開脚立ち１回ターン（イリュージョン）", sample_link: "###" },
        { number_of_skill: "2.306", dificulty_of_skill: "C", name_of_skill: "浮脚や手が床に触れないで、片脚を後ろに振り上げた前後開脚立ち２回ターン（イリュージョン）", sample_link: "###" },
        { number_of_skill: "2.107", dificulty_of_skill: "A", name_of_skill: "片足上でしゃがみ立ち１回ターン", sample_link: "###" },
        { number_of_skill: "2.207", dificulty_of_skill: "B", name_of_skill: "片足上でしゃがみ立ち２回ターン（浮脚は曲げる）", sample_link: "###" },
        { number_of_skill: "2.407", dificulty_of_skill: "D", name_of_skill: "片足上でしゃがみ立ち３回ターン", sample_link: "###" },
        { number_of_skill: "2.507", dificulty_of_skill: "E", name_of_skill: "片足上でしゃがみ立ち４回ターン", sample_link: "###" },
        { number_of_skill: "2.208", dificulty_of_skill: "B", name_of_skill: "屈伸仰臥姿勢で２回以上のターン", sample_link: "###" }
    ];

    $scope.womens_floor_group_3_skills = [
        { number_of_skill: "3.101", dificulty_of_skill: "A", name_of_skill: "（とび、引き上げ）倒立、または1/2～２回）ひねり", sample_link: "###" },
        { number_of_skill: "3.102", dificulty_of_skill: "A", name_of_skill: "とび前転", sample_link: "###" },
        { number_of_skill: "3.103", dificulty_of_skill: "A", name_of_skill: "後転倒立1/2～１1/2ひねり", sample_link: "###" },
        { number_of_skill: "3.203", dificulty_of_skill: "B", name_of_skill: "後転倒立２回ひねり", sample_link: "###" },
        { number_of_skill: "3.104", dificulty_of_skill: "A", name_of_skill: "（立位、前脚を伸ばした座）から、倒立局面で、１回ひねりをした後方倒立回転", sample_link: "###" },
        { number_of_skill: "3.105", dificulty_of_skill: "A", name_of_skill: "（片足、両足踏み切り、前とび）前転とび", sample_link: "###" },
        { number_of_skill: "3.105", dificulty_of_skill: "A", name_of_skill: "後ろとび1/2ひねり前転とび", sample_link: "###" },
        { number_of_skill: "3.305", dificulty_of_skill: "C", name_of_skill: "前転とび１回ひねり、前とび１回ひねり前転とび", sample_link: "###" },
        { number_of_skill: "3.106", dificulty_of_skill: "A", name_of_skill: "ロンダート", sample_link: "###" },
        { number_of_skill: "3.107", dificulty_of_skill: "A", name_of_skill: "すべての後転とび or 片手後転とび or アウエルバッハ後転とび", sample_link: "###" },
        { number_of_skill: "3.107", dificulty_of_skill: "A", name_of_skill: "後ろとび1/4ひねり、支持なし側方倒立回転からさらに1/4ひねり、正面支持臥", sample_link: "###" },
        { number_of_skill: "3.207", dificulty_of_skill: "A", name_of_skill: "後転倒立1/2～１1/2ひねり", sample_link: "###" },
        { number_of_skill: "3.203", dificulty_of_skill: "B", name_of_skill: "手支持の前に１回ひねりをした後転とび", sample_link: "###" },
    ];





    $scope.womens_floor_group_4_skills = [
        { number_of_skill: "4.101", dificulty_of_skill: "A", name_of_skill: "前方宙返り（かかえ込み、屈伸）", sample_link: "###" },
        { number_of_skill: "4.201", dificulty_of_skill: "B", name_of_skill: "前方かかえ込み宙返り（1/2、１回）ひねり or 前方屈伸宙返り1/2ひねり", sample_link: "###" },
        { number_of_skill: "4.301", dificulty_of_skill: "C", name_of_skill: "前方かかえ込み宙返り１1/2ひねり", sample_link: "###" },
        { number_of_skill: "4.501", dificulty_of_skill: "E", name_of_skill: "前方かかえ込み２回宙返り", sample_link: "###" },
        { number_of_skill: "4.601", dificulty_of_skill: "F", name_of_skill: "前方かかえ込み２回宙返り1/2ひねり or 前方屈伸２回宙返り", sample_link: "https://www.youtube.com/watch?v=5EcmLUQ5Ueo&feature=youtu.be" },
        { number_of_skill: "4.202", dificulty_of_skill: "B", name_of_skill: "前方伸身宙返り、または1/2ひねり", sample_link: "###" },
        { number_of_skill: "4.302", dificulty_of_skill: "C", name_of_skill: "前方伸身宙返り（１回、１1/2ひねり）ひねり or 前方屈伸宙返り1/2ひねり", sample_link: "###" },
        { number_of_skill: "4.402", dificulty_of_skill: "D", name_of_skill: "前方伸身宙返り２回ひねり", sample_link: "###" },
        { number_of_skill: "4.502", dificulty_of_skill: "E", name_of_skill: "前方伸身宙返り２1/2ひねり", sample_link: "###" },
        { number_of_skill: "4.103", dificulty_of_skill: "A", name_of_skill: "片脚踏み切り、前方伸身宙返り", sample_link: "###" },
        { number_of_skill: "4.104", dificulty_of_skill: "A", name_of_skill: "片足踏み切り、側方宙返り、または手支持のないロンダート", sample_link: "###" },
        { number_of_skill: "4.105", dificulty_of_skill: "A", name_of_skill: "（片足、両足）踏み切り、側方宙返り（かかえ込み、屈伸）", sample_link: "###" },
        { number_of_skill: "4.205", dificulty_of_skill: "B", name_of_skill: "後ろとび1/2ひねり前方宙返り（かかえ込み、屈伸、伸身）", sample_link: "###" },
        { number_of_skill: "4.505", dificulty_of_skill: "E", name_of_skill: "後ろとび1/2ひねり前方かかえ込み２回宙返り、または1/2ひねり", sample_link: "###" },
        { number_of_skill: "4.605", dificulty_of_skill: "F", name_of_skill: "後ろとび1/2ひねり前方屈伸２回宙返り", sample_link: "###" },
        { number_of_skill: "4.705", dificulty_of_skill: "G", name_of_skill: "後ろとび1/2ひねり前方伸身２回宙返り", sample_link: "###" }
    ];

    $scope.womens_floor_group_5_skills = [
        { number_of_skill: "5.101", dificulty_of_skill: "A", name_of_skill: "後方宙返り（かかえ込み、屈伸、伸身）", sample_link: "###" },
        { number_of_skill: "5.201", dificulty_of_skill: "B", name_of_skill: "後方宙返り（かかえ込み、伸身）（1/2、１回）ひねり", sample_link: "###" },
        { number_of_skill: "5.301", dificulty_of_skill: "C", name_of_skill: "後方伸身宙返り（１1/2、２回）ひねり", sample_link: "###" },
        { number_of_skill: "5.401", dificulty_of_skill: "D", name_of_skill: "後方伸身宙返り２1/2ひねり", sample_link: "###" },
        { number_of_skill: "5.501", dificulty_of_skill: "E", name_of_skill: "後方伸身宙返り３回ひねり", sample_link: "###" },
        { number_of_skill: "5.601", dificulty_of_skill: "F", name_of_skill: "後方伸身宙返り３1/2ひねり", sample_link: "###" },
        { number_of_skill: "5.402", dificulty_of_skill: "D", name_of_skill: "後方２回宙返り（かかえ込み、屈伸）", sample_link: "###" },
        { number_of_skill: "5.502", dificulty_of_skill: "E", name_of_skill: "後方２回宙返り１回ひねり（かかえ込み、屈伸）", sample_link: "###" },
        { number_of_skill: "5.802", dificulty_of_skill: "H", name_of_skill: "後方かかえ込み２回宙返り２回ひねり", sample_link: "###" },
        { number_of_skill: "5.603", dificulty_of_skill: "F", name_of_skill: "後方伸身２回宙返り", sample_link: "###" },
        { number_of_skill: "5.703", dificulty_of_skill: "G", name_of_skill: "後方伸身２回宙返り1/2ひねり", sample_link: "###" },
        { number_of_skill: "5.803", dificulty_of_skill: "H", name_of_skill: "後方伸身２回宙返り１回ひねり", sample_link: "###" },
        { number_of_skill: "5.903", dificulty_of_skill: "I", name_of_skill: "後方伸身２回宙返り２回ひねり", sample_link: "###" },
        { number_of_skill: "5.104", dificulty_of_skill: "A", name_of_skill: "後方テンポ宙返り", sample_link: "###" },
        { number_of_skill: "5.204", dificulty_of_skill: "B", name_of_skill: "テンポ宙返り（1/2、１回）ひねり", sample_link: "###" },
        { number_of_skill: "5.105", dificulty_of_skill: "A", name_of_skill: "アウエルバッハ宙返り（かかえ込み、屈伸、伸身）", sample_link: "###" },
        { number_of_skill: "5.205", dificulty_of_skill: "B", name_of_skill: "アウエルバッハかかえ込み宙返り１回ひねり", sample_link: "###" },
        { number_of_skill: "5.206", dificulty_of_skill: "B", name_of_skill: "前とび1/2ひねり後方宙返り（かかえ込み、屈伸）", sample_link: "###" }
    ];



    $scope.scrollSmoothTo = function(elementOrName){var element = {'true':$('*[name='+elementOrName+'],'+'#'+elementOrName).eq(0),       'false':elementOrName}[typeof elementOrName === 'string'];if(!element){    return;}if(!element.offset){    element = $(element);}if(!element.offset){    return;}var top = Math.max(0, element.offset().top - ($(window).height()/8));$('html,body').animate(    {'scrollTop': top},    'slow');
    };
}]);






