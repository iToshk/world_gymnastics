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
    $scope.share_the_moment = "Share the moment"

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
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "正面支持臥から勢いをつけて屈腕伸身力倒立(２秒)", sample_link: "" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "開脚座（脚前挙支持or開脚前挙支持or正面支持臥）から、伸腕屈身力倒立(２秒)", sample_link: "https://www.youtube.com/watch?v=-a9OQdTOdtc" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "マンナ（２秒）から肩転位して倒立", sample_link: "https://www.youtube.com/watch?v=oTW_G7vamg0" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "マンナ（２秒）から肩転位して倒立(２秒)", sample_link: "https://www.youtube.com/watch?v=oTW_G7vamg0" },
        { number_of_skill: "19", dificulty_of_skill: "A", name_of_skill: "倒立（２秒）", sample_link: "https://www.youtube.com/watch?v=gHqU3kG8iQY" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "倒立から下ろして十字倒立（２秒）\n振動から十字倒立（２秒）", sample_link: "" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "伸腕屈身力十字力倒立（２秒）", sample_link: "https://www.youtube.com/watch?v=ki3NshFvgqI" },
        { number_of_skill: "25", dificulty_of_skill: "A", name_of_skill: "開脚水平支持（２秒）", sample_link: "https://www.youtube.com/watch?v=iM0o_AwHz-A" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "水平支持（２秒）", sample_link: "https://www.youtube.com/watch?v=GNi316pL24s" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "中水平支持", sample_link: "https://www.youtube.com/watch?v=DzyAKcFdTi8" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "倒立（１回）ひねり\n１回（１/２）ひねり倒立", sample_link: "" },
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
        { number_of_skill: "85", dificulty_of_skill: "A", name_of_skill: "後ろとび正面支持臥", sample_link: "" },
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
        { number_of_skill: "1", dificulty_of_skill: "2.0", name_of_skill: "前転とび", sample_link: "" },
        { number_of_skill: "2", dificulty_of_skill: "2.4", name_of_skill: "前転とびひねり", sample_link: "" },
        { number_of_skill: "3", dificulty_of_skill: "2.8", name_of_skill: "前転とび１回ひねり", sample_link: "" },
        { number_of_skill: "4", dificulty_of_skill: "3.2", name_of_skill: "前転とび3/2ひねり", sample_link: "" },
        { number_of_skill: "5", dificulty_of_skill: "3.6", name_of_skill: "前転とび２回ひねり", sample_link: "" },
        { number_of_skill: "6", dificulty_of_skill: "3.0", name_of_skill: "ヤマシタとび", sample_link: "" },
        { number_of_skill: "7", dificulty_of_skill: "3.4", name_of_skill: "ヤマシタとびひねり", sample_link: "" },
        { number_of_skill: "8", dificulty_of_skill: "3.8", name_of_skill: "ヤマシタとび１回ひねり", sample_link: "" },
        { number_of_skill: "9", dificulty_of_skill: "4.2", name_of_skill: "ヤマシタとび3/2ひねり", sample_link: "" },
        { number_of_skill: "10", dificulty_of_skill: "4.6", name_of_skill: "ヤマシタとび２回ひねり", sample_link: "" },
        { number_of_skill: "11", dificulty_of_skill: "2.8", name_of_skill: "前転とび前方かかえ込み宙返り", sample_link: "" },
        { number_of_skill: "12", dificulty_of_skill: "3.2", name_of_skill: "前転とび前方かかえ込み宙返りひねり（クエルボとび）", sample_link: "" },
        { number_of_skill: "13", dificulty_of_skill: "3.6", name_of_skill: "前転とび前方かかえ込み宙返り１回ひねり（クエルボとびひねり）", sample_link: "" },
        { number_of_skill: "14", dificulty_of_skill: "4.0", name_of_skill: "前転とび前方かかえ込み宙返り3/2ひねり（クエルボとび１回ひねり）", sample_link: "" },
        { number_of_skill: "15", dificulty_of_skill: "4.4", name_of_skill: "前転とび前方かかえ込み宙返り２回ひねり（クエルボとび3/2ひねり）", sample_link: "" },
        { number_of_skill: "16", dificulty_of_skill: "3.2", name_of_skill: "前転とび前方屈身宙返り", sample_link: "" },
        { number_of_skill: "17", dificulty_of_skill: "3.6", name_of_skill: "前転とび前方屈身宙返りひねり（屈身クエルボとび）", sample_link: "" },
        { number_of_skill: "18", dificulty_of_skill: "4.0", name_of_skill: "前転とび前方屈身宙返り１回ひねり（屈身クエルボとびひねり）", sample_link: "" },
        { number_of_skill: "19", dificulty_of_skill: "4.4", name_of_skill: "前転とび前方屈身宙返り3/2ひねり（屈身クエルボとび１回ひねり）", sample_link: "" },
        { number_of_skill: "20", dificulty_of_skill: "4.4", name_of_skill: "前転とび１回ひねり前方かかえ込み宙返り（ベーレント）", sample_link: "" },
        { number_of_skill: "21", dificulty_of_skill: "4.8", name_of_skill: "前転とび１回ひねり前方屈身宙返り（レーム）", sample_link: "" },
        { number_of_skill: "22", dificulty_of_skill: "4.0", name_of_skill: "前転とび前方伸身宙返り", sample_link: "" },
        { number_of_skill: "23", dificulty_of_skill: "4.4", name_of_skill: "前転とび前方伸身宙返りひねり（伸身クエルボとび）", sample_link: "" },
        { number_of_skill: "24", dificulty_of_skill: "4.8", name_of_skill: "前転とび前方伸身宙返り１回ひねり（伸身クエルボとびひねり", sample_link: "" },
        { number_of_skill: "25", dificulty_of_skill: "5.2", name_of_skill: "前転とび前方伸身宙返り3/2ひねり（伸身クエルボとび１回ひねり：ロー・ユン）", sample_link: "" },
        { number_of_skill: "26", dificulty_of_skill: "5.6", name_of_skill: "前転とび前方伸身宙返り２回ひねり（伸身クエルボとび3/2ひねり", sample_link: "" },
        { number_of_skill: "27", dificulty_of_skill: "6.0", name_of_skill: "前転とび前方伸身宙返り5/2ひねり（ヨー２）", sample_link: "" },
        { number_of_skill: "28", dificulty_of_skill: "5.6", name_of_skill: "前転とび前方かかえ込み２回宙返り（ローチェ）", sample_link: "" },
        { number_of_skill: "29", dificulty_of_skill: "6.0", name_of_skill: "前転とび前方かかえ込み２回宙返りひねり（ドラグレスク）", sample_link: "" },
        { number_of_skill: "30", dificulty_of_skill: "6.0", name_of_skill: "前転とびひねり後方かかえ込み２回宙返り（ジマーマン）", sample_link: "" },
        { number_of_skill: "31", dificulty_of_skill: "6.0", name_of_skill: "前転とび前方屈身２回宙返り（ブラニク）", sample_link: "" },
        { number_of_skill: "32", dificulty_of_skill: "6.4", name_of_skill: "前転とび前方屈身2回宙返りひねり", sample_link: "" },
        { number_of_skill: "33", dificulty_of_skill: "6.4", name_of_skill: "前転とび前方伸身宙返り3回ひねり（ヤンハクソン）", sample_link: "" }
    ];

    $scope.mens_vault_group_2_skills = [
        { number_of_skill: "34", dificulty_of_skill: "2.0", name_of_skill: "側転とび1/4ひねり", sample_link: "" },
        { number_of_skill: "35", dificulty_of_skill: "2.4", name_of_skill: "側転とび3/4ひねり", sample_link: "" },
        { number_of_skill: "36", dificulty_of_skill: "2.8", name_of_skill: "側転とび5/4ひねり", sample_link: "" },
        { number_of_skill: "37", dificulty_of_skill: "2.8", name_of_skill: "側転とび1/4ひねり前方かかえ込み宙返り", sample_link: "" },
        { number_of_skill: "38", dificulty_of_skill: "3.2", name_of_skill: "側転とび1/4ひねり前方屈身宙返り", sample_link: "" },
        { number_of_skill: "39", dificulty_of_skill: "4.4", name_of_skill: "側転とび1/4ひねり前方伸身宙返り", sample_link: "" },
        { number_of_skill: "40", dificulty_of_skill: "2.8", name_of_skill: "側転とび1/4ひねり後方かかえ込み宙返り（ツカハラとび）", sample_link: "" },
        { number_of_skill: "41", dificulty_of_skill: "3.2", name_of_skill: "かかえ込みツカハラとびひねり", sample_link: "" },
        { number_of_skill: "42", dificulty_of_skill: "3.6", name_of_skill: "かかえ込みツカハラとび１回ひねり（カサマツとび）", sample_link: "" },
        { number_of_skill: "43", dificulty_of_skill: "4.0", name_of_skill: "かかえ込みツカハラとび3/2ひねり（カサマツとびひねり）", sample_link: "" },
        { number_of_skill: "44", dificulty_of_skill: "4.4", name_of_skill: "かかえ込みツカハラとび２回ひねり（カサマツとび１回ひねり）", sample_link: "" },
        { number_of_skill: "45", dificulty_of_skill: "3.0", name_of_skill: "屈身ツカハラとび", sample_link: "" },
        { number_of_skill: "46", dificulty_of_skill: "3.8", name_of_skill: "屈身ツカハラとび１回ひねり", sample_link: "" },
        { number_of_skill: "47", dificulty_of_skill: "3.6", name_of_skill: "伸身ツカハラとび", sample_link: "" },
        { number_of_skill: "48", dificulty_of_skill: "4.0", name_of_skill: "伸身ツカハラとびひねり", sample_link: "" },
        { number_of_skill: "49", dificulty_of_skill: "4.4", name_of_skill: "伸身ツカハラとび１回ひねり（伸身カサマツとび）", sample_link: "" },
        { number_of_skill: "50", dificulty_of_skill: "4.8", name_of_skill: "伸身ツカハラとび3/2ひねり（伸身カサマツとびひねり）", sample_link: "" },
        { number_of_skill: "51", dificulty_of_skill: "5.2", name_of_skill: "伸身ツカハラとび２回ひねり（伸身カサマツとび１回ひねり：アカピアン）", sample_link: "" },
        { number_of_skill: "52", dificulty_of_skill: "5.6", name_of_skill: "伸身ツカハラとび5/2ひねり（伸身カサマツとび3/2ひねり：ドリッグス）", sample_link: "" },
        { number_of_skill: "53", dificulty_of_skill: "6.0", name_of_skill: "伸身ツカハラとび３回ひねり（伸身カサマツとび２回ひねり：ロペス）", sample_link: "" },
        { number_of_skill: "54", dificulty_of_skill: "5.6", name_of_skill: "側転とび1/4ひねり後方かかえ込み２回宙返り（ヨー）", sample_link: "" },
        { number_of_skill: "55", dificulty_of_skill: "6.4", name_of_skill: "側転とび3/4ひねり後方かかえ込み2回宙返り(リ・セグァン)", sample_link: "" },
        { number_of_skill: "56", dificulty_of_skill: "6.0", name_of_skill: "側転とび1/4ひねり後方屈身２回宙返り（ルー・ユーフ）", sample_link: "" }
    ];

    $scope.mens_vault_group_3_skills = [
        { number_of_skill: "57", dificulty_of_skill: "2.0", name_of_skill: "ロンダート、後転とび", sample_link: "" },
        { number_of_skill: "58", dificulty_of_skill: "2.4", name_of_skill: "ロンダート、後転とびひねり", sample_link: "" },
        { number_of_skill: "59", dificulty_of_skill: "2.8", name_of_skill: "ロンダート、後転とび１回ひねり", sample_link: "" },
        { number_of_skill: "60", dificulty_of_skill: "2.8", name_of_skill: "ロンダート、後転とび後方かかえ込み宙返り（ユルチェンコ）", sample_link: "" },
        { number_of_skill: "61", dificulty_of_skill: "3.2", name_of_skill: "ロンダート、後転とび後方かかえ込み宙返りひねり", sample_link: "" },
        { number_of_skill: "62", dificulty_of_skill: "3.6", name_of_skill: "ロンダート、後転とび後方かかえ込み宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "63", dificulty_of_skill: "4.0", name_of_skill: "ロンダート、後転とび後方かかえ込み宙返り3/2ひねり", sample_link: "" },
        { number_of_skill: "64", dificulty_of_skill: "4.4", name_of_skill: "ロンダート、後転とび後方かかえ込み宙返り２回ひねり", sample_link: "" },
        { number_of_skill: "65", dificulty_of_skill: "3.0", name_of_skill: "屈身ユルチェンコとび", sample_link: "" },
        { number_of_skill: "66", dificulty_of_skill: "3.8", name_of_skill: "屈身ユルチェンコと１回ひねり", sample_link: "" },
        { number_of_skill: "67", dificulty_of_skill: "5.6", name_of_skill: "ロンダート、後転とび後方かかえ込み２回宙返り（メリサニディス）", sample_link: "" },
        { number_of_skill: "68", dificulty_of_skill: "6.0", name_of_skill: "ロンダート、後転とび後方屈身２回宙返り", sample_link: "" },
        { number_of_skill: "69", dificulty_of_skill: "3.6", name_of_skill: "伸身ユルチェンコとび", sample_link: "" },
        { number_of_skill: "70", dificulty_of_skill: "4.0", name_of_skill: "伸身ユルチェンコとびひねり", sample_link: "" },
        { number_of_skill: "71", dificulty_of_skill: "4.4", name_of_skill: "伸身ユルチェンコとび１回ひねり", sample_link: "" },
        { number_of_skill: "72", dificulty_of_skill: "4.8", name_of_skill: "伸身ユルチェンコとび3/2ひねり", sample_link: "" },
        { number_of_skill: "73", dificulty_of_skill: "5.2", name_of_skill: "伸身ユルチェンコとび２回ひねり", sample_link: "" },
        { number_of_skill: "74", dificulty_of_skill: "5.6", name_of_skill: "伸身ユルチェンコとび5/2ひねり(シューフェルト)", sample_link: "" },
        { number_of_skill: "75", dificulty_of_skill: "6.0", name_of_skill: "伸身ユルチェンコとび3回ひねり(シライ/キムヒフン)", sample_link: "" }
    ];

    $scope.mens_vault_group_4_skills = [
        { number_of_skill: "76", dificulty_of_skill: "2.2", name_of_skill: "ロンダート、後ろとびひねり着手前転とび", sample_link: "" },
        { number_of_skill: "77", dificulty_of_skill: "2.2", name_of_skill: "ロンダート、後ろとびひねり着手ヤマシタとび", sample_link: "" },
        { number_of_skill: "78", dificulty_of_skill: "2.6", name_of_skill: "ロンダート、後ろとびひねり着手前転とびひねり", sample_link: "" },
        { number_of_skill: "79", dificulty_of_skill: "2.6", name_of_skill: "ロンダート、後ろとびひねり着手ヤマシタとびひねり", sample_link: "" },
        { number_of_skill: "80", dificulty_of_skill: "3.0", name_of_skill: "ロンダート、後ろとびひねり着手前転とび１回ひねり", sample_link: "" },
        { number_of_skill: "81", dificulty_of_skill: "3.0", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方かかえ込み宙返り", sample_link: "" },
        { number_of_skill: "82", dificulty_of_skill: "3.4", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方かかえ込み宙返りひねり", sample_link: "" },
        { number_of_skill: "83", dificulty_of_skill: "5.8", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方かかえ込み２回宙返り", sample_link: "" },
        { number_of_skill: "84", dificulty_of_skill: "3.4", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方屈身宙返り", sample_link: "" },
        { number_of_skill: "85", dificulty_of_skill: "3.8", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方屈身宙返りひねり（ネモフ）", sample_link: "" },
        { number_of_skill: "86", dificulty_of_skill: "4.2", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方伸身宙返り", sample_link: "" },
        { number_of_skill: "87", dificulty_of_skill: "4.6", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方伸身宙返りひねり（ハッチェオン）", sample_link: "" },
        { number_of_skill: "88", dificulty_of_skill: "5.0", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方伸身宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "89", dificulty_of_skill: "5.4", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方伸身宙返り3/2ひねり", sample_link: "" },
        { number_of_skill: "90", dificulty_of_skill: "5.8", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方伸身宙返り２回ひねり", sample_link: "" },
        { number_of_skill: "91", dificulty_of_skill: "6.2", name_of_skill: "ロンダート、後ろとびひねり着手前転とび前方伸身宙返り5/2ひねり（リー・シャオペン）", sample_link: "" }
    ];

    $scope.mens_vault_group_5_skills = [
        { number_of_skill: "92", dificulty_of_skill: "2.4", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび", sample_link: "" },
        { number_of_skill: "93", dificulty_of_skill: "2.8", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とびひねり", sample_link: "" },
        { number_of_skill: "94", dificulty_of_skill: "3.2", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび１回ひねり", sample_link: "" },
        { number_of_skill: "95", dificulty_of_skill: "3.2", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび後方かかえ込み宙返り", sample_link: "" },
        { number_of_skill: "96", dificulty_of_skill: "3.6", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび後方かかえ込み宙返りひねり", sample_link: "" },
        { number_of_skill: "97", dificulty_of_skill: "4.0", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび後方かかえ込み宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "98", dificulty_of_skill: "4.4", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび後方かかえ込み宙返り3/2ひねり", sample_link: "" },
        { number_of_skill: "99", dificulty_of_skill: "4.8", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび後方かかえ込み宙返り２回ひねり", sample_link: "" },
        { number_of_skill: "100", dificulty_of_skill: "3.4", name_of_skill: "ロンダート、後ろとび１回ひねり着手後方後転とび屈身宙返り", sample_link: "" },
        { number_of_skill: "101", dificulty_of_skill: "4.0", name_of_skill: "ロンダート、後ろとび１回ひねり着手後転とび後方伸身宙返り（シェルボとび）", sample_link: "" },
        { number_of_skill: "102", dificulty_of_skill: "4.4", name_of_skill: "シェルボとびひねり", sample_link: "" },
        { number_of_skill: "103", dificulty_of_skill: "4.8", name_of_skill: "シェルボとび１回ひねり", sample_link: "" },
        { number_of_skill: "104", dificulty_of_skill: "5.2", name_of_skill: "シェルボとび3/2ひねり", sample_link: "" },
        { number_of_skill: "105", dificulty_of_skill: "5.6", name_of_skill: "シェルボとび２回ひねり", sample_link: "" }
    ];

    $scope.parallel_bars_group_1_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "倒立（２秒）\n単棒倒立（２秒）\n後ろ振り倒立（２秒）", sample_link: "" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "屈腕前振り上向きとび転向", sample_link: "" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "前振りひねり倒立（両棒or単棒）", sample_link: "" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "脚前挙支持（２秒）\n単棒脚前挙支持（２秒）", sample_link: "" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "前振り１回ひねり腕支持（カルミニッチ）", sample_link: "" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "・前振り１/４ひねり単棒倒立（ビロゼルチェフ）　\n・後方棒上宙がえり１/４ひねり単棒倒立（ピータース）　\n・前振り３/４ひねりとび（軸手と反対側の）単棒縦向き倒立（１/４ひねり両棒倒立まで）（ディミック）", sample_link: "" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "支持後ろ振り開脚入れ支持（脚前挙支持：２秒）", sample_link: "" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "支持前振り開脚抜き倒立", sample_link: "" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "前振り片腕支持３/４ひねり単棒縦向き倒立経過背面とび懸垂（デフレタス）", sample_link: "" },
        { number_of_skill: "19", dificulty_of_skill: "A", name_of_skill: "支持前振り開脚抜き支持", sample_link: "" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "支持前振り開脚抜き前方宙返り腕支持", sample_link: "" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "前振り片腕支持１回（５/４）ひねり倒立（ディアミドフ）", sample_link: "" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "前振り片腕支持５/４ひねり単棒倒立経過１/４ひねり両棒倒立", sample_link: "" },
        { number_of_skill: "23", dificulty_of_skill: "E", name_of_skill: "前振り片腕支持５/４ひねり単棒倒立経過単棒１回ひねり（ぺガン）", sample_link: "" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "屈腕伸身力倒立（２秒）\n伸腕屈身（開脚）力倒立（２秒）", sample_link: "" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "マクーツ腕支持\n前振り片腕支持３/４ひねり単棒倒立経過同軸手で３/４ひねり支持", sample_link: "" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "前振り片腕支持３/４ひねり単棒倒立経過、軸手を換えて３/４ひねり支持（マクーツ）", sample_link: "" },
        { number_of_skill: "30", dificulty_of_skill: "F", name_of_skill: "前振り片腕支持５/４ひねり単棒倒立経過、軸手を換えて片腕支持５/４ひねり支持", sample_link: "" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "前振り倒立とび肩転位支持（カルバロ）", sample_link: "" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "後方棒上宙返り倒立\n後方棒上宙返り単棒縦向き倒立（１秒）＝D", sample_link: "" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "後方棒上宙返り開脚入れ支持", sample_link: "" },
        { number_of_skill: "35", dificulty_of_skill: "E", name_of_skill: "前振り片腕支持５/４ひねり単棒倒立経過、軸手を換えて片腕支持５/４ひねり腕支持", sample_link: "" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "後方棒上宙返りひねり腕支持（ツミロビッチ）", sample_link: "" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "後方棒上抱え込み２回宙返り腕支持", sample_link: "" },
        { number_of_skill: "41", dificulty_of_skill: "E", name_of_skill: "後方棒上屈身２回宙返り腕支持（ファン・リーピン）", sample_link: "" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "倒立１/４ひねり直ちに片腕支持３/４ひねり支持", sample_link: "" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "倒立３/４ひねり直ちに片腕支持３/４ひねり支持", sample_link: "" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "後方棒上かかえ込み3/2宙返りひねり腕支持(スアレス)", sample_link: "" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "後ろ振りひねり開脚抜き支持", sample_link: "" },
        { number_of_skill: "56", dificulty_of_skill: "B", name_of_skill: "後ろ振りひねり支持", sample_link: "" },
        { number_of_skill: "57", dificulty_of_skill: "C", name_of_skill: "後ろ振り倒立経過ひねり支持(ノビコフ)", sample_link: "" },
        { number_of_skill: "62", dificulty_of_skill: "B", name_of_skill: "片腕支持1回ひねり腕支持", sample_link: "" },
        { number_of_skill: "63", dificulty_of_skill: "C", name_of_skill: "単棒倒立から片腕支持１回（５/４)ひねり腕支持", sample_link: "" },
        { number_of_skill: "64", dificulty_of_skill: "D", name_of_skill: "片腕支持1回ひねり支持（ヒーリー）\n単棒倒立から片腕支持１回（５/４)ひねり支持", sample_link: "" },
        { number_of_skill: "65", dificulty_of_skill: "E", name_of_skill: "単棒倒立から片腕支持１回（５/４)ひねり支持（B難度以上の振動技で単棒倒立から）", sample_link: "" },
        { number_of_skill: "68", dificulty_of_skill: "B", name_of_skill: "後ろ振りとびひねり倒立", sample_link: "" },
        { number_of_skill: "69", dificulty_of_skill: "C", name_of_skill: "後ろ振りとび３/４ひねり倒立", sample_link: "" },
        { number_of_skill: "70", dificulty_of_skill: "D", name_of_skill: "後ろ振りとび１回ひねり倒立（ギャツスン１）", sample_link: "" },
        { number_of_skill: "71", dificulty_of_skill: "E", name_of_skill: "後ろ振りとび５/４ひねり倒立直ちに１/４ひねり倒立（ギャツスン2）", sample_link: "" },
        { number_of_skill: "73", dificulty_of_skill: "A", name_of_skill: "正倒立ひねり（２秒）", sample_link: "" },
        { number_of_skill: "74", dificulty_of_skill: "B", name_of_skill: "後ろ振り1回ひねり倒立", sample_link: "" },
        { number_of_skill: "79", dificulty_of_skill: "A", name_of_skill: "逆倒立ひねり（２秒）", sample_link: "" },
        { number_of_skill: "80", dificulty_of_skill: "B", name_of_skill: "単棒倒立から３/４（１/２）ひねり倒立", sample_link: "" },
        { number_of_skill: "87", dificulty_of_skill: "C", name_of_skill: "倒立から前方宙返り支持\n倒立から肩転移支持（カルバロ２）", sample_link: "" },
        { number_of_skill: "89", dificulty_of_skill: "E", name_of_skill: "前方開脚５/４宙返り支持経過（直接懸垂）（リー・チョルホン）（ササキ）", sample_link: "" },
        { number_of_skill: "92", dificulty_of_skill: "B", name_of_skill: "前方かかえ込み（屈身）５/４宙返り腕支持", sample_link: "" },
        { number_of_skill: "93", dificulty_of_skill: "B", name_of_skill: "前方宙返り支持", sample_link: "" },
        { number_of_skill: "94", dificulty_of_skill: "D", name_of_skill: "前方開脚５/４宙返り腕支持", sample_link: "" },
        { number_of_skill: "95", dificulty_of_skill: "E", name_of_skill: "前方開脚５/４宙返り屈腕支持", sample_link: "" },
        { number_of_skill: "98", dificulty_of_skill: "B", name_of_skill: "前方かかえ込み（屈身）宙返り１/４ひねり単棒懸垂", sample_link: "" },
        { number_of_skill: "99", dificulty_of_skill: "C", name_of_skill: "棒端、前方かかえ込み（屈身）宙返り懸垂", sample_link: "" },
        { number_of_skill: "100", dificulty_of_skill: "D", name_of_skill: "前方かかえ込み2回宙返り腕支持", sample_link: "" },
        { number_of_skill: "101", dificulty_of_skill: "E", name_of_skill: "前方屈身2回宙返り腕支持", sample_link: "" },
        { number_of_skill: "103", dificulty_of_skill: "A", name_of_skill: "棒端中向き（開脚）旋回１回", sample_link: "" },
        { number_of_skill: "104", dificulty_of_skill: "B", name_of_skill: "棒の中央（棒端外向き）で（開脚）旋回１回", sample_link: "" },
        { number_of_skill: "105", dificulty_of_skill: "C", name_of_skill: "棒端で下向き360°転向(デレサレ)", sample_link: "" },
        { number_of_skill: "107", dificulty_of_skill: "E", name_of_skill: "前方宙返り1回ひねり腕支持(ウルジカ)", sample_link: "" },
        { number_of_skill: "111", dificulty_of_skill: "C", name_of_skill: "開脚旋回倒立", sample_link: "" },
        { number_of_skill: "117", dificulty_of_skill: "C", name_of_skill: "開脚旋回倒立ひねり", sample_link: "" }
    ];

    $scope.parallel_bars_group_2_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "前振り上がり", sample_link: "" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "前振り上がり開脚抜き倒立", sample_link: "" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "前振り上がりひねり倒立", sample_link: "" },
        { number_of_skill: "5", dificulty_of_skill: "E", name_of_skill: "前振り上がり片腕支持1回ひねり倒立(リチャード)", sample_link: "" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "前振り上がり1/4ひねり単棒横向き懸垂", sample_link: "" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "ほん転ひねり腕支持（ワタナベ）\n前振りとび上向き転向支持", sample_link: "" },
        { number_of_skill: "11", dificulty_of_skill: "E", name_of_skill: "前振り上がり片腕支持3/4ひねり単棒横向き倒立経過、軸手を換えて片腕支持3/4ひねり腕支持", sample_link: "" },
        { number_of_skill: "12", dificulty_of_skill: "G", name_of_skill: "前振り上がり片腕支持3/4ひねり単棒横向き倒立経過、片腕支持3/4ひねり支持(ソラキディス 1)  ", sample_link: "https://www.youtube.com/watch?v=FqO2M2agjzA&feature=youtu.be&t=48s" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "ほん転倒立", sample_link: "" },
        { number_of_skill: "18", dificulty_of_skill: "F", name_of_skill: "前振り上がり片腕支持5/4ひねり単棒横向き倒立経過、1/4ひねり倒立(ソラキディス2)", sample_link: "" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "ほん転開脚入れ腕支持", sample_link: "" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "ほん転開脚入れ支持", sample_link: "" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "前振り上がり後方かかえ込み宙返りひねり腕支持（ハラダ）", sample_link: "" },
        { number_of_skill: "23", dificulty_of_skill: "E", name_of_skill: "前振り上がり後方かかえ込み2回宙返り腕支持(ドミトリェンコ)", sample_link: "" },
        { number_of_skill: "24", dificulty_of_skill: "F", name_of_skill: "前振り上がり後方屈身2回宙返り腕支持（リー・シャオペン）", sample_link: "" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "後ろ振り上がり(ひねり)支持", sample_link: "" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "後ろ振り上がりとびひねり倒立", sample_link: "" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "後ろ振り上がりとび3/4ひねり単棒横向き倒立", sample_link: "" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "後ろ振り上がり開脚抜き腕支持  ", sample_link: "" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "後ろ振り上がり開脚抜き支持", sample_link: "" },
        { number_of_skill: "38", dificulty_of_skill: "B", name_of_skill: "後ろ振り上がりひねり支持", sample_link: "" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "後ろ振り上がり前方かかえ込み(屈身or開脚)5/4宙返り腕支持(ヤマワキ)", sample_link: "" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "後ろ振り上がり前方屈身宙返り支持", sample_link: "https://www.youtube.com/watch?v=XkHNK4cew7U" },
        { number_of_skill: "43", dificulty_of_skill: "A", name_of_skill: "後ろ振り上がり開脚入れ屈腕支持", sample_link: "" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "後ろ振り上がり開脚入れ伸腕支持", sample_link: "" }
    ];

    $scope.parallel_bars_group_3_skills = [
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "懸垂前振り上がり開脚抜き屈腕（腕）支持", sample_link: "" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "倒立から伸膝で振り下ろし懸垂前振り上がり開脚抜き倒立(チッペルト)", sample_link: "https://www.youtube.com/watch?v=T1Yl4pmYbnw" },
        { number_of_skill: "5", dificulty_of_skill: "E", name_of_skill: "懸垂前振り上がり開脚抜き伸身かつ水平位で懸垂(バブサー)", sample_link: "" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "懸垂前振り上がり開脚抜きひねり腕支持", sample_link: "" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "倒立から伸膝で振り下ろし懸垂前振り上がり1回ひねり腕支持(ノレット)", sample_link: "" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "倒立から伸膝で振り下ろし懸垂前振り上がり前方かかえ込み（屈身or開脚）宙返り腕支持", sample_link: "" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "懸垂前振り上がり支持(モイ)\n懸垂前振り上がり肩転位支持", sample_link: "" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "後方車輪倒立（ケンモツ）\n後方車輪（１/４）ひねり倒立\n後方背面車輪（ひねり）倒立（ウエルス）", sample_link: "" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "後方車輪単棒縦向き倒立（１秒）（ピアスキー）", sample_link: "" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "後方車輪片腕支持1回ひねり倒立", sample_link: "" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "後方車輪片腕支持5/4ひねり単棒横向き(＋1/4ひねり)倒立", sample_link: "" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "後方伸身宙返り懸垂", sample_link: "" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "懸垂前振り後方宙返りひねり腕支持(グシケン)", sample_link: "" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "懸垂前振り後方宙返りひねり支持(マリニチ)", sample_link: "" },
        { number_of_skill: "36", dificulty_of_skill: "G", name_of_skill: "懸垂前振り後方かかえ込み2回宙返り1回ひねり腕支持(キンテロ)", sample_link: "https://www.youtube.com/watch?v=UoRbZ9dNwcg" },
        { number_of_skill: "38", dificulty_of_skill: "B", name_of_skill: "後方車輪開脚入れ腕支持", sample_link: "" },
        { number_of_skill: "39", dificulty_of_skill: "D", name_of_skill: "後方車輪開脚入れ支持(コロレフ)", sample_link: "" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "懸垂前振り後方かかえ込み2回宙返り腕支持(ベーレ)", sample_link: "" },
        { number_of_skill: "41", dificulty_of_skill: "E", name_of_skill: "懸垂前振り後方屈身2回宙返り腕支持", sample_link: "" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "棒端、懸垂前振り後方宙返りひねり懸垂（チャートランド）", sample_link: "" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "懸垂前振り後方かかえ込み（屈身）宙返りひねり腕支持（懸垂）", sample_link: "" },
        { number_of_skill: "47", dificulty_of_skill: "E", name_of_skill: "懸垂前振り後方かかえ込み（屈身）宙返りひねり支持（トレス）", sample_link: "" },
        { number_of_skill: "48", dificulty_of_skill: "F", name_of_skill: "懸垂前振りひねり前方2回宙返り腕支持(タナカ)", sample_link: "" },
        { number_of_skill: "49", dificulty_of_skill: "A", name_of_skill: "け上がり支持（両棒or単棒）", sample_link: "" },
        { number_of_skill: "50", dificulty_of_skill: "B", name_of_skill: "け上がりひねり支持", sample_link: "" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "後方け上がり倒立", sample_link: "" },
        { number_of_skill: "56", dificulty_of_skill: "B", name_of_skill: "け上がり開脚抜き（両棒or単棒）倒立", sample_link: "" },
        { number_of_skill: "62", dificulty_of_skill: "B", name_of_skill: "単棒横向き前方浮腰上がり開脚浮腰支持経過横向き倒立", sample_link: "" },
        { number_of_skill: "63", dificulty_of_skill: "C", name_of_skill: "単棒横向き前方浮腰上がり脚前挙支持経過横向き倒立", sample_link: "" },
        { number_of_skill: "64", dificulty_of_skill: "D", name_of_skill: "単棒横向き前方浮腰上がり脚前挙支持経過とび3/4ひねり倒立", sample_link: "" },
        { number_of_skill: "68", dificulty_of_skill: "B", name_of_skill: "単棒横向き前方浮腰上がり脚上挙支持経過とびひねり反対の棒に懸垂(リー・ドンファ)", sample_link: "" }
    ];

    $scope.parallel_bars_group_4_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "棒下振り出し腕支持", sample_link: "" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "棒下振り出し支持", sample_link: "" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "棒下宙返りひねり腕支持", sample_link: "" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "棒下宙返りひねり支持", sample_link: "" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "棒下振り出しひねり腕支持", sample_link: "" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "棒下振り出しひねり支持", sample_link: "" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "逆上がり（棒下宙返り）倒立\n逆上がり（棒下宙返り）背面倒立経過とび倒立（クシェラ）（セレン）", sample_link: "" },
        { number_of_skill: "11", dificulty_of_skill: "E", name_of_skill: "逆上がり（棒下宙返り）ひねり倒立（１/４or１/２or３/４) ", sample_link: "" },
        { number_of_skill: "12", dificulty_of_skill: "G", name_of_skill: "逆上がり（棒下宙返り）5/4ひねり倒立（シュウ・シーフォン）", sample_link: "https://www.youtube.com/watch?v=4VxQ_Ed8UXI" },
        { number_of_skill: "15", dificulty_of_skill: "B", name_of_skill: "棒下振り出し開脚抜き倒立(アリカン)", sample_link: "" },
        { number_of_skill: "18", dificulty_of_skill: "F", name_of_skill: "逆上がり（棒下宙返り）１回ひねり倒立（テンハイビン）", sample_link: "" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "逆上がり（棒下宙返り）懸垂", sample_link: "" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "逆上がり（棒下宙返り）開脚入れ支持", sample_link: "" },
        { number_of_skill: "23", dificulty_of_skill: "E", name_of_skill: "逆上がり（棒下宙返り）単棒倒立（１秒）", sample_link: "" },
        { number_of_skill: "25", dificulty_of_skill: "A", name_of_skill: "前方棒下宙返り支持", sample_link: "" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "前方棒下宙返りひねり支持", sample_link: "" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "棒下宙返り直接かかえ込み宙返り腕支持(タジェダ)", sample_link: "" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "正面横向き立ちから遠い方の棒を握り逆上がり倒立、手前の棒に移り懸垂", sample_link: "" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "正面横向き立ちから遠い方の棒を握り逆上がり1/4ひねり倒立", sample_link: "" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "正面横向き立ちから遠い方の棒を握り後方開脚浮き腰回転単棒横向き倒立", sample_link: "" }
    ];

    $scope.parallel_bars_group_5_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "前方屈身（伸身）宙返り下り", sample_link: "" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "前方屈身（伸身）宙返りひねり下り", sample_link: "" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "前方屈身（伸身）宙返り１回（３/２）ひねり下り", sample_link: "" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "前方屈身（伸身）宙返り１回（５/２)ひねり下り", sample_link: "" },
        { number_of_skill: "5", dificulty_of_skill: "E", name_of_skill: "前方かかえ込み2回宙返り下り", sample_link: "" },
        { number_of_skill: "6", dificulty_of_skill: "F", name_of_skill: "前方屈身2回宙返り下り（ベルヤフスキー）", sample_link: "" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "棒端、前方かかえ込み2回宙返り下り", sample_link: "" },
        { number_of_skill: "12", dificulty_of_skill: "F", name_of_skill: "前方かかえ込み2回宙返りひねり下り\n支持前振りひねり後方かかえ込み2回宙返り下り", sample_link: "" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "後方屈身（伸身）宙返り下り", sample_link: "" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "後方屈身（伸身）宙返りひねり下り", sample_link: "" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "後方屈身（伸身）宙返り１回（３/２)ひねり下り", sample_link: "" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "後方伸身宙返り2回ひねり下り", sample_link: "" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "後ろ振り片腕支持ひねり後方かかえ込み（屈身）宙返り下り（ロースリスバーガー）", sample_link: "" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "棒端、後方かかえ込み2回宙返り下り", sample_link: "" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "後方かかえ込み2回宙返り下り", sample_link: "" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "後方屈身2回宙返り下り", sample_link: "https://www.youtube.com/watch?v=XkHNK4cew7U" },
        { number_of_skill: "30", dificulty_of_skill: "G", name_of_skill: "後方かかえ込み2回宙返り1回ひねり下り(カトウヒロユキ)", sample_link: "https://www.youtube.com/watch?v=HOmp9CWTryw#t=39" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "棒端、懸垂前振り後方伸身宙返り下り", sample_link: "" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "棒端、懸垂前振り後方かかえ込み2回宙返り下り", sample_link: "" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "棒端、懸垂前振り後方屈身2回宙返り下り", sample_link: "" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "棒端、懸垂前振り後方かかえ込み2回宙返り1回ひねり下り", sample_link: "https://www.youtube.com/watch?v=HeYg5xSjn9k" }
    ];

    $scope.horizontal_bar_group_1_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "後ろ振り上がり倒立", sample_link: "" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "後ろ振り上がり1回ひねり倒立", sample_link: "" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "順手後ろ振り上がり1回ひねり倒立", sample_link: "" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "後ろ振り上がりひねり倒立", sample_link: "" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "後ろ振り1回ひねり懸垂", sample_link: "" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "後ろ振り上がり1回ひねり支持", sample_link: "" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "前方車輪", sample_link: "" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "前方車輪1回ひねり片大逆手", sample_link: "" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "前方車輪1回ひねり大逆手", sample_link: "" },
        { number_of_skill: "19", dificulty_of_skill: "A", name_of_skill: "前方車輪ひねり倒立", sample_link: "" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "前方とび車輪", sample_link: "" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "前方とび車輪1回ひねり", sample_link: "" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "前方片手車輪", sample_link: "" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "前方車輪1回ひねり片大逆手後ろ振り上がり1回ひねり逆手倒立(ツォ・リミン)", sample_link: "https://www.youtube.com/watch?v=UGNpFHD29ks" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "後方車輪", sample_link: "" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "後方片手車輪", sample_link: "" },
        { number_of_skill: "37", dificulty_of_skill: "A", name_of_skill: "後方車輪ひねり倒立", sample_link: "" },
        { number_of_skill: "43", dificulty_of_skill: "A", name_of_skill: "後方車輪とび逆手持ち換え", sample_link: "" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "後方とび車輪", sample_link: "" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "後方とび車輪1回ひねり(クースト)", sample_link: "https://www.youtube.com/watch?v=HNBcyURfxjA" },
        { number_of_skill: "46", dificulty_of_skill: "D", name_of_skill: "後方車輪2回ひねり", sample_link: "" },
        { number_of_skill: "50", dificulty_of_skill: "B", name_of_skill: "後方車輪ひねり大逆手", sample_link: "" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "懸垂前振り1回ひねり大逆手", sample_link: "" },
        { number_of_skill: "56", dificulty_of_skill: "B", name_of_skill: "懸垂前とび大逆手持ち換え", sample_link: "" },
        { number_of_skill: "62", dificulty_of_skill: "B", name_of_skill: "後方車輪とびひねり大逆手", sample_link: "" },
        { number_of_skill: "63", dificulty_of_skill: "C", name_of_skill: "後方とび車輪3/2ひねり(逆手or片逆手or片大逆手)", sample_link: "" },
        { number_of_skill: "64", dificulty_of_skill: "D", name_of_skill: "後方とび車輪3/2ひねり大逆手(リバルコ)", sample_link: "https://www.youtube.com/watch?v=ErAVP4JuZr4" }
    ];

    $scope.horizontal_bar_group_2_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "前方閉脚浮腰回転開脚抜き(懸垂or支持)", sample_link: "" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "前方閉脚浮腰回転開脚抜き倒立経過", sample_link: "" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "前方閉脚浮腰回転開脚抜きひねり懸垂(カルバロ)", sample_link: "https://www.youtube.com/watch?v=ViFlZyHpU6g" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "前方閉脚浮腰回転開脚抜き1回ひねり片大逆手懸垂(キンテロ)", sample_link: "https://www.youtube.com/watch?v=eGwwM95V7_o" },
        { number_of_skill: "5", dificulty_of_skill: "E", name_of_skill: "前方閉脚浮腰回転開脚抜き1回ひねり大逆手懸垂", sample_link: "" },
        { number_of_skill: "8", dificulty_of_skill: "B", name_of_skill: "後ろ振り上がり開脚とび越し背面懸垂", sample_link: "" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "後ろ振り上がり開脚とび越しひねり懸垂(マルケロフ)", sample_link: "https://www.youtube.com/watch?v=voCDTolzUL0" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "閉脚マルケロフ(ヤマワキ)", sample_link: "https://www.youtube.com/watch?v=26uMeAxyAM0" },
        { number_of_skill: "11", dificulty_of_skill: "E", name_of_skill: "後ろ振り上がり伸身とび越3/2ひねり懸垂(ウェルストロム)", sample_link: "https://www.youtube.com/watch?v=Yt7qjJN6Z4o" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "懸垂前振り(開脚or屈身)背面とび越し懸垂(トカチェフ)", sample_link: "https://www.youtube.com/watch?v=cJ6VCn6LJMw" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "伸身トカチェフ", sample_link: "https://www.youtube.com/watch?v=f-ybvWAiAkc" },
        { number_of_skill: "17", dificulty_of_skill: "E", name_of_skill: "伸身トカチェフひねり片大逆手後ろ振り倒立(モズニク)(開脚はD)", sample_link: "https://www.youtube.com/watch?v=ASxaSG94m9c" },
        { number_of_skill: "18", dificulty_of_skill: "F", name_of_skill: "伸身トカチェフ1回ひねり懸垂(リューキン)", sample_link: "https://www.youtube.com/watch?v=ddSlPczca4U" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "懸垂前振り開脚前方宙返り懸垂(シャオ・ルイチ)", sample_link: "https://www.youtube.com/watch?v=ohse1FWjKVs" },
        { number_of_skill: "23", dificulty_of_skill: "E", name_of_skill: "開脚トカチェフひねり大逆手懸垂　(Kulesza)", sample_link: "" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "後ろ振り上がり屈身ひねりとび越し懸垂(ボローニン)", sample_link: "https://www.youtube.com/watch?v=ZK_-awjdelc" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "(シュタルダーor足裏支持回転orほん転)から開脚トカチェフ(ピアッティ)", sample_link: "https://www.youtube.com/watch?v=Bqlp_UTUzOQ" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "伸身ピアッティ", sample_link: "" },
        { number_of_skill: "29", dificulty_of_skill: "E", name_of_skill: "伸身ピアッティひねり", sample_link: "" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "後ろ振り上がり上向きとび越し懸垂  ", sample_link: "" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "屈身ピアッティ", sample_link: "https://www.youtube.com/watch?v=DHkHeNXIk2w" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "ピアッティひねり", sample_link: "" },
        { number_of_skill: "36", dificulty_of_skill: "F", name_of_skill: "伸身ピアッティ1回ひねり(スアレス)", sample_link: "https://www.youtube.com/watch?v=U-uAnFX3x9I" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "後ろ振り前方(かかえ込みor屈身or開脚)宙返り懸垂(イエーガー)", sample_link: "https://www.youtube.com/watch?v=K3m7HBnXgl0" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "・前方伸身宙返り懸垂(バラバノフ)　・大逆手後ろ振り、前方伸身宙返り懸垂", sample_link: "https://www.youtube.com/watch?v=EpHbG5-abFo" },
        { number_of_skill: "41", dificulty_of_skill: "E", name_of_skill: "・前方伸身宙返り1回ひねり懸垂(ウィンクラー)　・大逆手後ろ振り、前方伸身宙返り1回ひねり懸垂(ポゴレノフ)", sample_link: "https://www.youtube.com/watch?v=6vck_pvRTI8" },
        { number_of_skill: "47", dificulty_of_skill: "E", name_of_skill: "伸身ヤマワキひねり片大逆手後ろ振り倒立　(Monoz - Pozo)", sample_link: "" },
        { number_of_skill: "52", dificulty_of_skill: "D", name_of_skill: "バーを越えながら前方(かかえ込みor開脚)宙返り懸垂(ゲイロード)", sample_link: "https://www.youtube.com/watch?v=sBkqkV4lU3c" },
        { number_of_skill: "53", dificulty_of_skill: "E", name_of_skill: "ゲイロードひねり(ペガン) ", sample_link: "https://www.youtube.com/watch?v=PBUWH5wrNX4" },
        { number_of_skill: "57", dificulty_of_skill: "C", name_of_skill: "順手背面車輪、開脚背面とび越し懸垂", sample_link: "" },
        { number_of_skill: "59", dificulty_of_skill: "E", name_of_skill: "屈身ゲイロード", sample_link: "https://www.youtube.com/watch?v=q-Cs1vjuKY8" },
        { number_of_skill: "60", dificulty_of_skill: "F", name_of_skill: "屈身ペガン", sample_link: "https://www.youtube.com/watch?v=M2UFu5XeKZ4" },
        { number_of_skill: "63", dificulty_of_skill: "C", name_of_skill: "懸垂前振りひねり、前方開脚宙返り懸垂(デルチェフ)", sample_link: "https://www.youtube.com/watch?v=i5pc4ogPhws" },
        { number_of_skill: "66", dificulty_of_skill: "G", name_of_skill: "伸身コバチ１回ひねり(カッシーナ)", sample_link: "https://www.youtube.com/watch?v=KSmIgN_Olmk" },
        { number_of_skill: "69", dificulty_of_skill: "C", name_of_skill: "懸垂前振り、後方屈身宙返りひねり懸垂(ギンガー)", sample_link: "https://www.youtube.com/watch?v=DaFymug2aEQ" },
        { number_of_skill: "71", dificulty_of_skill: "E", name_of_skill: "懸垂前振り、後方宙返り3/2ひねり懸垂(デフ)", sample_link: "https://www.youtube.com/watch?v=ce4aMi54Xes" },
        { number_of_skill: "75", dificulty_of_skill: "C", name_of_skill: "シュタルダーひねり直ちにひねりとび越し懸垂", sample_link: "" },
        { number_of_skill: "76", dificulty_of_skill: "D", name_of_skill: "バーを越えながら、かかえ込みギンガー懸垂", sample_link: "" },
        { number_of_skill: "77", dificulty_of_skill: "E", name_of_skill: "バーを越えながら、屈身ギンガー懸垂(ゲイロード2)", sample_link: "https://www.youtube.com/watch?v=TrfPcKejDHs" },
        { number_of_skill: "78", dificulty_of_skill: "G", name_of_skill: "バーを越えながら、ギンガーひねり懸垂(ピネダ)", sample_link: "https://www.youtube.com/watch?v=xJjjLMBTSLc" },
        { number_of_skill: "82", dificulty_of_skill: "D", name_of_skill: "バーを越えながら、後方かかえ込み2回宙返り懸垂(コバチ)", sample_link: "" },
        { number_of_skill: "83", dificulty_of_skill: "E", name_of_skill: "屈身コバチ", sample_link: "https://www.youtube.com/watch?v=4eIeFojH-RE" },
        { number_of_skill: "89", dificulty_of_skill: "E", name_of_skill: "伸身コバチ", sample_link: "https://www.youtube.com/watch?v=H7sQObkjsDY" },
        { number_of_skill: "90", dificulty_of_skill: "F", name_of_skill: "コバチ1回ひねり(コールマン)", sample_link: "https://www.youtube.com/watch?v=4RXMDYgwysg" },
        { number_of_skill: "96", dificulty_of_skill: "G", name_of_skill: "コバチ3/2ひねり(シャハム)", sample_link: "https://www.youtube.com/watch?v=IgSH1OtwQII" }
    ];

    $scope.horizontal_bar_group_3_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "・(短振)け上がり　・け上がりとび(ひねり)倒立", sample_link: "" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "倒立から前方浮き支持回転倒立(ワイラー)", sample_link: "https://www.youtube.com/watch?v=TFuGrlkvfGk" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "倒立から前方浮き支持回転1回ひねり片大逆手", sample_link: "https://www.youtube.com/watch?v=krm3kPc3iMQ" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "倒立から前方浮き支持回転1回ひねり大逆手", sample_link: "https://www.youtube.com/watch?v=Dy6BA6ayKFk" },
        { number_of_skill: "7", dificulty_of_skill: "A", name_of_skill: "・懸垂振り出し倒立　・後方浮支持回転倒立", sample_link: "" },
        { number_of_skill: "13", dificulty_of_skill: "A", name_of_skill: "・懸垂振り出しひねり倒立　・後方浮支持回転ひねり倒立", sample_link: "" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "・懸垂振り出しひねり大逆手　・後方浮支持回転ひねり大逆手", sample_link: "" },
        { number_of_skill: "19", dificulty_of_skill: "A", name_of_skill: "・懸垂振り出しとび逆手倒立　・後方浮支持回転とび逆手持ち換え", sample_link: "" },
        { number_of_skill: "20", dificulty_of_skill: "B", name_of_skill: "・懸垂振り出しとび1回ひねり倒立　・後方浮支持回転とび1回ひねり倒立", sample_link: "" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "前方(開脚or閉脚)浮腰回転倒立(エンドー)", sample_link: "https://www.youtube.com/watch?v=mF21rHLoFNk" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "エンドーひねり倒立", sample_link: "https://www.youtube.com/watch?v=u3R_3Z4WOzY" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "エンドー1回ひねり片大逆手", sample_link: "https://www.youtube.com/watch?v=giuwD4drWvg" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "エンドー1回ひねり大逆手", sample_link: "https://www.youtube.com/watch?v=jZqCqNqEIAc" },
        { number_of_skill: "38", dificulty_of_skill: "B", name_of_skill: "後方(開脚or閉脚)浮腰回転倒立(シュタルダー)", sample_link: "https://www.youtube.com/watch?v=dhyqkhjhA9I" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "シュタルダーとび1回ひねり倒立", sample_link: "https://www.youtube.com/watch?v=2q9RzhKdDfI" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "シュタルダーとび1回ひねり大逆手", sample_link: "https://www.youtube.com/watch?v=5Pvp9E_mgd0" },
        { number_of_skill: "41", dificulty_of_skill: "E", name_of_skill: "シュタルダーとび3/2ひねり大逆手", sample_link: "https://www.youtube.com/watch?v=dQIG2kmzGS4" },
        { number_of_skill: "44", dificulty_of_skill: "B", name_of_skill: "シュタルダーひねり倒立", sample_link: "https://www.youtube.com/watch?v=vgo5VubWEbs" },
        { number_of_skill: "45", dificulty_of_skill: "C", name_of_skill: "シュタルダーひねり大逆手", sample_link: "https://www.youtube.com/watch?v=JIzzCVfkL_c" },
        { number_of_skill: "50", dificulty_of_skill: "B", name_of_skill: "シュタルダーとび逆手持ち換え", sample_link: "" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "シュタルダーとび大逆手持ち換え", sample_link: "" }
    ];

    $scope.horizontal_bar_group_4_skills = [
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "前方浮腰回転振り出し倒立(アドラー)", sample_link: "https://www.youtube.com/watch?v=Yvk8bbH5rD8" },
        { number_of_skill: "4", dificulty_of_skill: "D", name_of_skill: "前方浮腰回転振り出しひねり倒立", sample_link: "https://www.youtube.com/watch?v=DYqEXhsa9fQ" },
        { number_of_skill: "5", dificulty_of_skill: "E", name_of_skill: "前方浮腰回転振り出し1回ひねり逆手倒立　", sample_link: "https://www.youtube.com/watch?v=_PtDNhoICMM" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "前方浮腰回転振り出しとび(逆手or順手)倒立", sample_link: "https://www.youtube.com/watch?v=zh9zYDkczj4" },
        { number_of_skill: "14", dificulty_of_skill: "B", name_of_skill: "大逆手車輪", sample_link: "https://www.youtube.com/watch?v=hcYFkMlAbhs" },
        { number_of_skill: "15", dificulty_of_skill: "C", name_of_skill: "逆手背面車輪", sample_link: "https://www.youtube.com/watch?v=ge4h0UV1ziM" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "前方浮腰回転振り出し1回ひねり片大逆手倒立", sample_link: "https://www.youtube.com/watch?v=krm3kPc3iMQ" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "大逆手振り上がり1回ひねり倒立", sample_link: "" },
        { number_of_skill: "25", dificulty_of_skill: "A", name_of_skill: "順手背面後ろ振り出し", sample_link: "https://www.youtube.com/watch?v=JDhRcUxxG-g" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "順手背面懸垂前振り上がり背面支持(シュタイネマン)", sample_link: "" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "後方浮腰回転後ろ振り出し順手背面懸垂", sample_link: "https://www.youtube.com/watch?v=MXVrwAC6g0g" },
        { number_of_skill: "28", dificulty_of_skill: "D", name_of_skill: "順手背面車輪(チェコ式車輪)", sample_link: "" },
        { number_of_skill: "31", dificulty_of_skill: "A", name_of_skill: "大順手車輪(スコーマル)", sample_link: "" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "順手背面懸垂前振り上がりひねり支持(オノ)", sample_link: "https://www.youtube.com/watch?v=eDi-Aw4H4uI" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "順手背面懸垂前振り上がり抜き倒立(ケステ)", sample_link: "https://www.youtube.com/watch?v=35tDL1aKayI" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "順手背面車輪ひねり倒立から前方車輪", sample_link: "" },
        { number_of_skill: "38", dificulty_of_skill: "B", name_of_skill: "順手背面懸垂前振り上がり両脚横抜き(支持or懸垂)", sample_link: "" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "大逆手エンドー", sample_link: "https://www.youtube.com/watch?v=QiUs2EX2nOw" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "大逆手エンドー1回ひねり　", sample_link: "" }
    ];

    $scope.horizontal_bar_group_5_skills = [
        { number_of_skill: "1", dificulty_of_skill: "A", name_of_skill: "前方(屈身or伸身)宙返りひねり下り", sample_link: "" },
        { number_of_skill: "2", dificulty_of_skill: "B", name_of_skill: "前方伸身宙返り(1回or3/2)ひねり下り", sample_link: "" },
        { number_of_skill: "3", dificulty_of_skill: "C", name_of_skill: "前方伸身宙返り(2回or5/2)ひねり下り", sample_link: "" },
        { number_of_skill: "6", dificulty_of_skill: "F", name_of_skill: "前方かかえ込み3回宙返り下り(ルンブティス)", sample_link: "" },
        { number_of_skill: "9", dificulty_of_skill: "C", name_of_skill: "前方(かかえ込みor屈身)2回宙返り(ひねり)下り", sample_link: "https://www.youtube.com/watch?v=aZ3yIqe3jW8" },
        { number_of_skill: "10", dificulty_of_skill: "D", name_of_skill: "前方(かかえ込みor屈身)2回宙返り(1回or3/2)ひねり下り", sample_link: "https://www.youtube.com/watch?v=UoNLmi_-gSk" },
        { number_of_skill: "11", dificulty_of_skill: "E", name_of_skill: "前方(かかえ込みor屈身)2回宙返り(2回or5/2)ひねり下り", sample_link: "" },
        { number_of_skill: "16", dificulty_of_skill: "D", name_of_skill: "前方伸身2回宙返り(ひねり)下り", sample_link: "" },
        { number_of_skill: "17", dificulty_of_skill: "E", name_of_skill: "前方伸身2回宙返り(1回or3/2)ひねり下り", sample_link: "https://www.youtube.com/watch?v=KmQJww_ava0" },
        { number_of_skill: "21", dificulty_of_skill: "C", name_of_skill: "バーを越えながら前方(かかえ込みor屈身)2回宙返り(ひねり)下り", sample_link: "https://www.youtube.com/watch?v=oOBW2IkAGJ8" },
        { number_of_skill: "22", dificulty_of_skill: "D", name_of_skill: "バーを越えながら前方(かかえ込みor屈身)2回宙返り(1回or3/2)ひねり下り", sample_link: "" },
        { number_of_skill: "25", dificulty_of_skill: "A", name_of_skill: "・後方伸身宙返り下り　・後方(屈身or伸身)宙返り(ひねりor1回ひねり)下り", sample_link: "https://www.youtube.com/watch?v=Uu3NLd_0XII" },
        { number_of_skill: "26", dificulty_of_skill: "B", name_of_skill: "後方伸身宙返り(3/2or2回)ひねり下り", sample_link: "https://www.youtube.com/watch?v=dSrnqoYqO8g" },
        { number_of_skill: "27", dificulty_of_skill: "C", name_of_skill: "後方伸身宙返り(5/2or3回)ひねり下り", sample_link: "" },
        { number_of_skill: "32", dificulty_of_skill: "B", name_of_skill: "後方(かかえ込みor屈身)2回宙返り下り", sample_link: "https://www.youtube.com/watch?v=Nle2BYtUTjA" },
        { number_of_skill: "33", dificulty_of_skill: "C", name_of_skill: "後方(かかえ込みor屈身)2回宙返り1回ひねり下り(ツカハラ)", sample_link: "https://www.youtube.com/watch?v=Zb-XHHLXMKA" },
        { number_of_skill: "34", dificulty_of_skill: "D", name_of_skill: "後方(かかえ込みor屈身)2回宙返り2回ひねり下り(新月面)", sample_link: "" },
        { number_of_skill: "39", dificulty_of_skill: "C", name_of_skill: "後方伸身2回宙返り下り", sample_link: "https://www.youtube.com/watch?v=lflkT9X9bDY" },
        { number_of_skill: "40", dificulty_of_skill: "D", name_of_skill: "後方伸身2回宙返り1回ひねり下り", sample_link: "https://www.youtube.com/watch?v=3JEsxh74Gv4" },
        { number_of_skill: "41", dificulty_of_skill: "E", name_of_skill: "後方伸身2回宙返り2回ひねり下り(ワタナベ)", sample_link: "" },
        { number_of_skill: "42", dificulty_of_skill: "F", name_of_skill: "後方伸身2回宙返り3回ひねり下り(フェドルチェンコ)", sample_link: "https://www.youtube.com/watch?v=sXvbhE8Z1wc" },
        { number_of_skill: "47", dificulty_of_skill: "E", name_of_skill: "・後方かかえ込み3回宙返り下り(アンドリアノフ)　・バーを越えながら、後方かかえ込み3回宙返り下り(ホフマン)", sample_link: "https://www.youtube.com/watch?v=i1h4dXvPHO0#https://www.youtube.com/watch?v=cfuBiK4J4Ug" },
        { number_of_skill: "50", dificulty_of_skill: "B", name_of_skill: "バーを越えながら、後方(かかえ込みor屈身)2回宙返り下り", sample_link: "" },
        { number_of_skill: "51", dificulty_of_skill: "C", name_of_skill: "バーを越えながら、後方(かかえ込みor屈身)2回宙返り1回ひねり下り", sample_link: "" },
        { number_of_skill: "52", dificulty_of_skill: "D", name_of_skill: "バーを越えながら、後方(かかえ込みor屈身)2回宙返り2回ひねり下り", sample_link: "https://www.youtube.com/watch?v=gn8xV-BtQL4" },
        { number_of_skill: "53", dificulty_of_skill: "E", name_of_skill: "後方屈身3回宙返り下り(ファルダン)", sample_link: "https://www.youtube.com/watch?v=FGxvuWGtAxc" },
        { number_of_skill: "57", dificulty_of_skill: "C", name_of_skill: "バーを越えながら、後方伸身2回宙返り下り", sample_link: "" },
        { number_of_skill: "58", dificulty_of_skill: "D", name_of_skill: "バーを越えながら、後方伸身2回宙返り1回ひねり下り(ヘイデン)", sample_link: "https://www.youtube.com/watch?v=egHTX9kyb64" },
        { number_of_skill: "60", dificulty_of_skill: "F", name_of_skill: "後方かかえ込み3回宙返り一回ひねり下り(ベーレ)", sample_link: "https://www.youtube.com/watch?v=l2E8tOha8_E" },
        { number_of_skill: "61", dificulty_of_skill: "A", name_of_skill: "(大開脚or大伸身)とび越し(ひねり)下り", sample_link: "https://www.youtube.com/watch?v=FInj5I1CItE" },
        { number_of_skill: "62", dificulty_of_skill: "B", name_of_skill: "大伸身とび越し(1回or3/2)ひねり下り", sample_link: "https://www.youtube.com/watch?v=BWtp6KWEjp8" },
        { number_of_skill: "64", dificulty_of_skill: "D", name_of_skill: "大伸身とび越し2回ひねり下り", sample_link: "" }
    ];

    $scope.womens_vault_group_1_skills = [
        { number_of_skill: "1.00", dificulty_of_skill: "2.40", name_of_skill: "前転とび", sample_link: "" },
        { number_of_skill: "1.01", dificulty_of_skill: "2.80", name_of_skill: "前転とび1/2ひねり", sample_link: "" },
        { number_of_skill: "1.02", dificulty_of_skill: "3.20", name_of_skill: "前転とび１回ひねり", sample_link: "" },
        { number_of_skill: "1.03", dificulty_of_skill: "3.60", name_of_skill: "前転とび１1/2ひねり", sample_link: "" },
        { number_of_skill: "1.04", dificulty_of_skill: "4.00", name_of_skill: "前転とび２回ひねり", sample_link: "" },
        { number_of_skill: "1.05", dificulty_of_skill: "4.50", name_of_skill: "前転とび２1/2ひねり", sample_link: "" },
        { number_of_skill: "1.10", dificulty_of_skill: "2.60", name_of_skill: "ヤマシタとび", sample_link: "" },
        { number_of_skill: "1.11", dificulty_of_skill: "3.00", name_of_skill: "ヤマシタとび1/2ひねり", sample_link: "" },
        { number_of_skill: "1.12", dificulty_of_skill: "3.40", name_of_skill: "ヤマシタとび１回ひねり", sample_link: "" },
        { number_of_skill: "1.20", dificulty_of_skill: "2.40", name_of_skill: "前とび1/2ひねりとび", sample_link: "" },
        { number_of_skill: "1.21", dificulty_of_skill: "3.00", name_of_skill: "前とび1/2ひねり～倒立回転とび1/2ひねり", sample_link: "" },
        { number_of_skill: "1.22", dificulty_of_skill: "3.40", name_of_skill: "前とび1/2ひねり～倒立回転とび１回ひねり", sample_link: "" },
        { number_of_skill: "1.23", dificulty_of_skill: "3.80", name_of_skill: "前とび1/2ひねり～倒立回転とび１1/2ひねり", sample_link: "" },
        { number_of_skill: "1.24", dificulty_of_skill: "4.20", name_of_skill: "前とび1/2ひねり～倒立回転とび２回ひねり", sample_link: "" },
        { number_of_skill: "1.30", dificulty_of_skill: "3.20", name_of_skill: "前とび1１回ひねり～前転とび", sample_link: "" },
        { number_of_skill: "1.31", dificulty_of_skill: "4.00", name_of_skill: "前とび１回ひねり～前転とび１回ひねり", sample_link: "" },
        { number_of_skill: "1.40", dificulty_of_skill: "2.60", name_of_skill: "ロンダート後転とび", sample_link: "" },
        { number_of_skill: "1.50", dificulty_of_skill: "2.60", name_of_skill: "ロンダート後ろとび1/2ひねり～前転とび", sample_link: "" },
        { number_of_skill: "1.51", dificulty_of_skill: "3.40", name_of_skill: "ロンダート後ろとび1/2ひねり～前転とび１回ひねり", sample_link: "" },
        { number_of_skill: "1.52", dificulty_of_skill: "3.80", name_of_skill: "ロンダート後ろとび1/2ひねり～前転とび１1/2ひねり", sample_link: "" },
        { number_of_skill: "1.53", dificulty_of_skill: "4.00", name_of_skill: "ロンダート後ろとび１回ひねり～倒立回転とび１回ひねり", sample_link: "" }
    ];

    $scope.womens_vault_group_2_skills = [
        { number_of_skill: "2.10", dificulty_of_skill: "4.40", name_of_skill: "前転とび～前方かかえ込み宙返り", sample_link: "" },
        { number_of_skill: "2.11", dificulty_of_skill: "4.80", name_of_skill: "前転とび～前方かかえ込み宙返り1/2ひねり or 前転とび～1/2ひねり後方かかえ込み宙返り", sample_link: "" },
        { number_of_skill: "2.12", dificulty_of_skill: "5.30", name_of_skill: "前転とび～前方かかえ込み宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "2.13", dificulty_of_skill: "5.70", name_of_skill: "前転とび～前方かかえ込み宙返り１1/2ひねり", sample_link: "" },
        { number_of_skill: "2.20", dificulty_of_skill: "4.60", name_of_skill: "前転とび～前方屈身宙返り", sample_link: "" },
        { number_of_skill: "2.21", dificulty_of_skill: "5.00", name_of_skill: "前転とび～前方屈身宙返り1/2ひねり or 前転とび～1/2ひねり後方屈伸宙返り", sample_link: "" },
        { number_of_skill: "2.22", dificulty_of_skill: "5.50", name_of_skill: "前転とび～前方屈身宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "2.30", dificulty_of_skill: "5.00", name_of_skill: "前転とび～前方伸身宙返り", sample_link: "" },
        { number_of_skill: "2.31", dificulty_of_skill: "5.40", name_of_skill: "前転とび～前方伸身宙返り1/2ひねり", sample_link: "" },
        { number_of_skill: "2.32", dificulty_of_skill: "5.80", name_of_skill: "前転とび～前方伸身宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "2.33", dificulty_of_skill: "6.20", name_of_skill: "前転とび～前方伸身宙返り１1/2ひねり", sample_link: "" },
        { number_of_skill: "2.40", dificulty_of_skill: "5.20", name_of_skill: "前とび１回ひねり～前方かかえ込み宙返り", sample_link: "" },
        { number_of_skill: "2.41", dificulty_of_skill: "5.40", name_of_skill: "前とび１回ひねり～前方屈身宙返り", sample_link: "" },
        { number_of_skill: "2.50", dificulty_of_skill: "7.00", name_of_skill: "前転とび～前方かかえ込み２回宙返り", sample_link: "" },
    ];

    $scope.womens_vault_group_3_skills = [
        { number_of_skill: "3.10", dificulty_of_skill: "4.00", name_of_skill: "かかえ込みツカハラとび", sample_link: "" },
        { number_of_skill: "3.11", dificulty_of_skill: "4.30", name_of_skill: "かかえ込みツカハラとび1/2ひねり", sample_link: "" },
        { number_of_skill: "3.12", dificulty_of_skill: "4.60", name_of_skill: "かかえ込みツカハラとび１回ひねり", sample_link: "" },
        { number_of_skill: "3.13", dificulty_of_skill: "4.90", name_of_skill: "かかえ込みツカハラとび１1/2ひねり", sample_link: "" },
        { number_of_skill: "3.14", dificulty_of_skill: "5.40", name_of_skill: "かかえ込みツカハラとび２回ひねり", sample_link: "" },
        { number_of_skill: "3.20", dificulty_of_skill: "4.20", name_of_skill: "屈身ツカハラとび", sample_link: "" },
        { number_of_skill: "3.30", dificulty_of_skill: "4.60", name_of_skill: "かかえ込みツカハラとび", sample_link: "" },
        { number_of_skill: "3.31", dificulty_of_skill: "4.90", name_of_skill: "伸身ツカハラとび1/2ひねり", sample_link: "" },
        { number_of_skill: "3.32", dificulty_of_skill: "5.20", name_of_skill: "伸身ツカハラとび１回ひねり", sample_link: "" },
        { number_of_skill: "3.33", dificulty_of_skill: "5.50", name_of_skill: "伸身ツカハラとび１1/2ひねり", sample_link: "" },
        { number_of_skill: "3.34", dificulty_of_skill: "6.00", name_of_skill: "伸身ツカハラとび２回ひねり", sample_link: "" },
        { number_of_skill: "3.35", dificulty_of_skill: "6.50", name_of_skill: "伸身ツカハラとび２1/2ひねり", sample_link: "" }
    ];



    $scope.womens_vault_group_4_skills = [
        { number_of_skill: "4.10", dificulty_of_skill: "3.80", name_of_skill: "ロンダート後転とび～後方かかえ込み宙返り", sample_link: "" },
        { number_of_skill: "4.11", dificulty_of_skill: "4.10", name_of_skill: "ロンダート後転とび～後方かかえ込み宙返り1/2ひねり", sample_link: "" },
        { number_of_skill: "4.12", dificulty_of_skill: "4.40", name_of_skill: "ロンダート後転とび～後方かかえ込み宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "4.13", dificulty_of_skill: "4.70", name_of_skill: "ロンダート後転とび～後方かかえ込み宙返り１1/2ひねり", sample_link: "" },
        { number_of_skill: "4.14", dificulty_of_skill: "5.20", name_of_skill: "ロンダート後転とび～後方かかえ込み宙返り２回ひねり", sample_link: "" },
        { number_of_skill: "4.20", dificulty_of_skill: "4.00", name_of_skill: "ロンダート後転とび～後方屈身宙返り", sample_link: "" },
        { number_of_skill: "4.30", dificulty_of_skill: "4.40", name_of_skill: "ロンダート後転とび～後方伸身宙返り", sample_link: "" },
        { number_of_skill: "4.31", dificulty_of_skill: "4.70", name_of_skill: "ロンダート後転とび～後方伸身宙返り1/2ひねり", sample_link: "" },
        { number_of_skill: "4.32", dificulty_of_skill: "5.00", name_of_skill: "ロンダート後転とび～後方伸身宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "4.33", dificulty_of_skill: "5.30", name_of_skill: "ロンダート後転とび～後方伸身宙返り１1/2ひねり", sample_link: "" },
        { number_of_skill: "4.34", dificulty_of_skill: "5.80", name_of_skill: "ロンダート後転とび～後方伸身宙返り２回ひねり", sample_link: "" },
        { number_of_skill: "4.35", dificulty_of_skill: "6.30", name_of_skill: "ロンダート後転とび～後方伸身宙返り２1/2ひねり", sample_link: "" },
        { number_of_skill: "4.40", dificulty_of_skill: "4.60", name_of_skill: "ロンダート後ろとび3/4ひねり～後方かかえ込み宙返り", sample_link: "" },
        { number_of_skill: "4.41", dificulty_of_skill: "4.90", name_of_skill: "ロンダート後ろとび3/4ひねり～後方かかえ込み宙返り1/2ひねり", sample_link: "" },
        { number_of_skill: "4.42", dificulty_of_skill: "5.20", name_of_skill: "ロンダート後ろとび3/4ひねり～後方かかえ込み宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "4.50", dificulty_of_skill: "4.80", name_of_skill: "ロンダート後ろとび3/4ひねり～後方屈身宙返り", sample_link: "" },
        { number_of_skill: "4.51", dificulty_of_skill: "5.20", name_of_skill: "ロンダート後ろとび3/4ひねり～後方伸身宙返り", sample_link: "" },
        { number_of_skill: "4.52", dificulty_of_skill: "5.50", name_of_skill: "ロンダート後ろとび3/4ひねり～後方伸身宙返り1/2ひねり", sample_link: "" },
        { number_of_skill: "4.53", dificulty_of_skill: "5.80", name_of_skill: "ロンダート後ろとび3/4ひねり～後方伸身宙返り１回ひねり", sample_link: "" },
    ];

    $scope.womens_vault_group_5_skills = [
        { number_of_skill: "5.10", dificulty_of_skill: "4.60", name_of_skill: "ロンダート後ろとび1/2ひねり～前方かかえ込み宙返り", sample_link: "" },
        { number_of_skill: "5.11", dificulty_of_skill: "5.00", name_of_skill: "ロンダート後ろとび1/2ひねり～前方かかえ込み宙返り1/2ひねり or ロンダート後ろとび1/2ひねり～1/2ひねり後方かかえ込み宙返り", sample_link: "" },
        { number_of_skill: "5.12", dificulty_of_skill: "5.50", name_of_skill: "ロンダート後ろとび1/2ひねり～前方かかえ込み宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "5.13", dificulty_of_skill: "5.90", name_of_skill: "ロンダート後ろとび1/2ひねり～前方かかえ込み宙返り１1/2ひねり", sample_link: "" },
        { number_of_skill: "5.20", dificulty_of_skill: "4.80", name_of_skill: "ロンダート後ろとび1/2ひねり～前方屈身宙返り", sample_link: "" },

        { number_of_skill: "5.21", dificulty_of_skill: "5.20", name_of_skill: "ロンダート後ろとび1/2ひねり～前方屈身宙返り1/2ひねり or ロンダート後ろとび1/2ひねり～1/2ひねり後方屈伸宙返り", sample_link: "" },
        { number_of_skill: "5.22", dificulty_of_skill: "5.70", name_of_skill: "ロンダート後ろとび1/2ひねり～前方屈身宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "5.30", dificulty_of_skill: "5.20", name_of_skill: "ロンダート後ろとび1/2ひねり～前方伸身宙返り", sample_link: "" },
        { number_of_skill: "5.31", dificulty_of_skill: "5.60", name_of_skill: "ロンダート後ろとび1/2ひねり～前方伸身宙返り1/2ひねり", sample_link: "" },
        { number_of_skill: "5.32", dificulty_of_skill: "6.00", name_of_skill: "ロンダート後ろとび1/2ひねり～前方伸身宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "5.33", dificulty_of_skill: "6.40", name_of_skill: "ロンダート後ろとび1/2ひねり～前方伸身宙返り１1/2ひねり", sample_link: "" }
    ];

    $scope.uneven_bars_group_1_skills = [
        { number_of_skill: "1.101", dificulty_of_skill: "A", name_of_skill: "低棒け上がり、または低棒け上がり1/2ひねり", sample_link: " https://youtu.be/z7OGj3J9uV8" },
        { number_of_skill: "1.102", dificulty_of_skill: "A", name_of_skill: "前とび1/2ひねり低棒け上がり・前とび1/2ひねり低棒浮腰上がり", sample_link: "" },
        { number_of_skill: "1.103", dificulty_of_skill: "A", name_of_skill: "(低棒、高棒)浮腰上がり、背面支持または浮腰上がり開脚抜き～同一棒に懸垂", sample_link: "" },
        { number_of_skill: "1.104", dificulty_of_skill: "A", name_of_skill: "高棒け上がり(順手、逆手)", sample_link: "https://youtu.be/z7OGj3J9uV8" },
        { number_of_skill: "1.105", dificulty_of_skill: "A", name_of_skill: "高棒内向き、前とび１回ひねり高棒懸垂", sample_link: "" },
        { number_of_skill: "1.106", dificulty_of_skill: "A", name_of_skill: "低棒支持開脚とび越し～高棒懸垂", sample_link: "" },
        { number_of_skill: "1.202", dificulty_of_skill: "B", name_of_skill: "前とび１回ひねり低棒け上がり", sample_link: "" },
        { number_of_skill: "1.203", dificulty_of_skill: "B", name_of_skill: "低棒背面け上がり・高棒背面け上がり", sample_link: "" },
        { number_of_skill: "1.204", dificulty_of_skill: "B", name_of_skill: "高棒内向き、前とび1/2ひねり高棒け上がり・前とび1/2ひねり低棒とび越し～高棒懸垂", sample_link: "" },
        { number_of_skill: "1.206", dificulty_of_skill: "B", name_of_skill: "低棒支持なし開脚とび越し～高棒懸垂・低棒支持とび越し(閉脚伸身)～高棒懸垂", sample_link: "" },
        { number_of_skill: "1.207", dificulty_of_skill: "B", name_of_skill: "前方宙返り(かかえ込み、屈伸、開脚)～低棒とび越し～低棒大逆手懸垂", sample_link: "" },
        { number_of_skill: "1.208", dificulty_of_skill: "B", name_of_skill: "ロンダート後ろとび～低棒開脚浮腰支持", sample_link: "" },
        { number_of_skill: "1.210", dificulty_of_skill: "B", name_of_skill: "前とび低棒屈伸倒立、または倒立上で1/2ひねり", sample_link: "" },
        { number_of_skill: "1.304", dificulty_of_skill: "C", name_of_skill: "前とび1/2ひねり低棒とび越し～高棒け上がり", sample_link: "" },
        { number_of_skill: "1.306", dificulty_of_skill: "C", name_of_skill: "低棒支持なし閉脚伸身とび越し～高棒懸垂", sample_link: "" },
        { number_of_skill: "1.307", dificulty_of_skill: "C", name_of_skill: "高棒内向き、前方宙返り～高棒懸垂・低棒支持～前方屈伸回転～上移動高棒懸垂", sample_link: "" },
        { number_of_skill: "1.308", dificulty_of_skill: "C", name_of_skill: "ロンダート後ろとび～低棒とび越し(開脚、閉脚)～高棒懸垂", sample_link: "" },
        { number_of_skill: "1.310", dificulty_of_skill: "C", name_of_skill: "前とび低棒屈伸倒立、倒立上で１回ひねり・前とび低棒伸身倒立、または1/2ひねり", sample_link: "" },
        { number_of_skill: "1.407", dificulty_of_skill: "D", name_of_skill: "前方かかえ込み宙返り、低棒に触れずにとび越し～高棒懸垂", sample_link: "" },
        { number_of_skill: "1.408", dificulty_of_skill: "D", name_of_skill: "ロンダート後ろとび１回ひねり～低棒とび越し～高棒懸垂", sample_link: "" },
        { number_of_skill: "1.409", dificulty_of_skill: "D", name_of_skill: "ロンダート～後方かかえ込み宙返り低棒とび越し～低棒懸垂・ロンダート～後転とび低棒倒立", sample_link: "" },
        { number_of_skill: "1.410", dificulty_of_skill: "D", name_of_skill: "前とび低棒伸身倒立、倒立上で１回ひねり", sample_link: "" },
        { number_of_skill: "1.411", dificulty_of_skill: "D", name_of_skill: "前とび高棒浮支持～後方浮支持回転倒立、または倒立上で1/2ひねり", sample_link: "" },
        { number_of_skill: "1.509", dificulty_of_skill: "E", name_of_skill: "ロンダート～後ろとび１回ひねり～低棒浮支持、または低棒倒立・ロンダート～後ろとび1/2ひねり～前方宙返り(かかえ込み、屈伸)～低棒に触れずにとび越し～高棒懸垂", sample_link: "" }
    ];

    $scope.uneven_bars_group_2_skills = [
        { number_of_skill: "2.101", dificulty_of_skill: "A", name_of_skill: "後ろ振り上げ(開脚、屈伸)倒立、またはとび持ち換え", sample_link: " https://youtu.be/z7OGj3J9uV8" },
        { number_of_skill: "2.104", dificulty_of_skill: "A", name_of_skill: "前方支持回転(棒に接しながら) ", sample_link: "" },
        { number_of_skill: "2.105", dificulty_of_skill: "A", name_of_skill: "後方支持回転(棒に接しながら)・低棒後方浮支持回転、または後方臥回転～後ろへはねて低棒懸垂", sample_link: "" },
        { number_of_skill: "2.201", dificulty_of_skill: "B", name_of_skill: "後ろ振り上げ閉脚伸身倒立、またはとび(逆手、大逆手)持ち換え、または後ろ振り上げ(閉脚、開脚)倒立1/2ひねり", sample_link: "" },
        { number_of_skill: "2.202", dificulty_of_skill: "B", name_of_skill: "高棒支持～高棒下向きとび越し(屈伸、開脚)～1/2ひねり高棒懸垂", sample_link: "" },
        { number_of_skill: "2.301", dificulty_of_skill: "C", name_of_skill: "後ろ振り上げ倒立１回ひねり", sample_link: "" },
        { number_of_skill: "2.302", dificulty_of_skill: "C", name_of_skill: "後方臥回転、または後方浮支持回転～前とび出し上向き転向～懸垂(同一棒上で)", sample_link: "" },
        { number_of_skill: "2.303", dificulty_of_skill: "C", name_of_skill: "高棒支持～後ろ振り、手を放して１回ひねり高棒懸垂", sample_link: "" },
        { number_of_skill: "2.305", dificulty_of_skill: "C", name_of_skill: "後方浮支持回転倒立、または倒立局面でとび逆手持ち換え、または1/2ひねり", sample_link: "" },
        { number_of_skill: "2.306", dificulty_of_skill: "C", name_of_skill: "低棒、棒下振り出し(足の支持なし)～切り返しを伴った上移動高棒懸垂", sample_link: "" },
        { number_of_skill: "2.307", dificulty_of_skill: "C", name_of_skill: "低棒支持～後方浮支持回転前とび出し(開脚、閉脚)～上移動高棒懸垂、または1/2ひねり上移動高棒懸垂", sample_link: "" },
        { number_of_skill: "2.401", dificulty_of_skill: "D", name_of_skill: "後ろ振り上げ倒立１1/2ひねり", sample_link: "" },
        { number_of_skill: "2.403", dificulty_of_skill: "D", name_of_skill: "低棒外向き支持～後ろ振り上げ前方宙返り～上移動高棒懸垂[ラドフラ宙返り]", sample_link: "" },
        { number_of_skill: "2.404", dificulty_of_skill: "D", name_of_skill: "前方浮支持回転倒立、または1/2ひねり", sample_link: "" },
        { number_of_skill: "2.405", dificulty_of_skill: "D", name_of_skill: "後方浮支持回転倒立１回ひねり", sample_link: "" },
        { number_of_skill: "2.406", dificulty_of_skill: "D", name_of_skill: "低棒外向き支持～後方浮支持回転倒立～背面とび出し上移動高棒懸垂[シャポシニコヴァ]", sample_link: "" },
        { number_of_skill: "2.503", dificulty_of_skill: "E", name_of_skill: "高棒支持～後ろ振り上げ前方開脚宙返り～高棒懸垂[コマネチ宙返り]", sample_link: "" },
        { number_of_skill: "2.505", dificulty_of_skill: "E", name_of_skill: "後方浮支持回転倒立１1/2ひねり", sample_link: "" },
        { number_of_skill: "2.506", dificulty_of_skill: "E", name_of_skill: "後方浮支持回転～開脚背面とび越し～高棒懸垂・低棒外向き支持～後方浮支持回転倒立～背面とび出し1/2ひねり上移動高棒懸垂", sample_link: "" }
    ];

    $scope.uneven_bars_group_3_skills = [
        { number_of_skill: "3.201", dificulty_of_skill: "B", name_of_skill: "後方車輪(順手)、または片手後方車輪、または1/2ひねり", sample_link: "" },
        { number_of_skill: "3.206", dificulty_of_skill: "B", name_of_skill: "前方車輪(逆手、順手、片逆手)、または振り上がりが(開脚、屈伸)、または1/2ひねり", sample_link: "" },
        { number_of_skill: "3.301", dificulty_of_skill: "C", name_of_skill: "後方車輪１回ひねり", sample_link: "" },
        { number_of_skill: "3.304", dificulty_of_skill: "C", name_of_skill: "高棒内向き、高棒懸垂～前振り出し～後方回転(開脚)～下移動低棒浮支持", sample_link: "" },
        { number_of_skill: "3.306", dificulty_of_skill: "C", name_of_skill: "前方車輪１回ひねり", sample_link: "" },
        { number_of_skill: "3.307", dificulty_of_skill: "C", name_of_skill: "後ろ振り～開脚低棒とび越し～低棒倒立", sample_link: "" },
        { number_of_skill: "3.308", dificulty_of_skill: "C", name_of_skill: "後ろ振り～前方かかえ込み宙返り～高棒懸垂[イェーガー宙返り]", sample_link: "" },
        { number_of_skill: "3.309", dificulty_of_skill: "C", name_of_skill: "後ろ振り～1/2ひねり転向とび越し(屈伸、開脚)～高棒懸垂", sample_link: "" },
        { number_of_skill: "3.310", dificulty_of_skill: "C", name_of_skill: "大逆手(逆手背面)前方車輪(屈伸、伸身)、または1/2ひねり", sample_link: "" },
        { number_of_skill: "3.401", dificulty_of_skill: "D", name_of_skill: "後方車輪(１1/2または２回ひねり)、またはとび１回ひねり", sample_link: "" },
        { number_of_skill: "3.402", dificulty_of_skill: "D", name_of_skill: "高棒懸垂～前振り出し1/2ひねり低棒とび越し～低棒倒立", sample_link: "https://youtu.be/12z5LW9F1Zk" },
        { number_of_skill: "3.403", dificulty_of_skill: "D", name_of_skill: "前振り出し～背面とび越し(開脚)～高棒懸垂[トゥカチェフ]・前振り出し～1/2ひねり～屈身とび越し～高棒懸垂", sample_link: "https://youtu.be/CHX2rWobvKI" },
        { number_of_skill: "3.404", dificulty_of_skill: "D", name_of_skill: "高棒内向き、高棒懸垂～前振り出し～後方伸身宙返り～下移動低棒浮支持[パク宙返り]", sample_link: "https://youtu.be/z7OGj3J9uV8" },
        { number_of_skill: "3.405", dificulty_of_skill: "D", name_of_skill: "前振り出し～1/2ひねり前方開脚宙返り～高棒懸垂[デルチェフ宙返り]、または前振り出し～後方宙返り(屈身、伸身)1/2ひねり[ギンガー宙返り]～高棒懸垂", sample_link: "" },
        { number_of_skill: "3.407", dificulty_of_skill: "D", name_of_skill: "後ろ振り～棒間でとび1/2ひねり下移動低棒懸垂", sample_link: "" },
        { number_of_skill: "3.408", dificulty_of_skill: "D", name_of_skill: "イェーガー宙返り(開脚、屈身)～高棒懸垂", sample_link: "https://youtu.be/z7OGj3J9uV8" },
        { number_of_skill: "3.409", dificulty_of_skill: "D", name_of_skill: "後ろ振り～1/2ひねり開脚背面とび越し～高棒懸垂", sample_link: "" },
        { number_of_skill: "3.410", dificulty_of_skill: "D", name_of_skill: "大逆手前方車輪１回ひねり", sample_link: "" },
        { number_of_skill: "3.502", dificulty_of_skill: "E", name_of_skill: "高棒懸垂～前振り出し１1/2ひねり低棒とび越し～低棒懸垂", sample_link: "" },
        { number_of_skill: "3.503", dificulty_of_skill: "E", name_of_skill: "伸身トゥカチェフ・トゥカチェフ1/2ひねり・前振り出し～1/2ひねり～1/2ひねり背面とび越し(開脚)～高棒懸垂", sample_link: "" },
        { number_of_skill: "3.504", dificulty_of_skill: "E", name_of_skill: "パク宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "3.506", dificulty_of_skill: "E", name_of_skill: "前方車輪片手上で１回ひねり(倒立前にひねりを開始)、または前方車輪１1/2ひねり", sample_link: "" },
        { number_of_skill: "3.508", dificulty_of_skill: "E", name_of_skill: "イェーガー宙返り(伸身)～高棒懸垂・イェーガー宙返り(開脚)1/2ひねり～高棒懸垂", sample_link: "https://youtu.be/CHX2rWobvKI" },
        { number_of_skill: "3.510", dificulty_of_skill: "E", name_of_skill: "大逆手前方車輪、大逆手の片手上で１回ひねり(倒立前にひねりを開始する)、または大逆手前方車輪１1/2ひねり(どの技術も認める)", sample_link: "" },
        { number_of_skill: "3.604", dificulty_of_skill: "F", name_of_skill: "高棒外向き～前振り出し～前方開脚宙返り～逆手懸垂", sample_link: "" },
        { number_of_skill: "3.705", dificulty_of_skill: "G", name_of_skill: "前振り出し～後方伸身宙返り１1/2ひねり～高棒懸垂", sample_link: "" },
        { number_of_skill: "3.708", dificulty_of_skill: "G", name_of_skill: "後ろ振り～高棒を越えながら前方かかえ込み宙返り～高棒懸垂", sample_link: "" }
    ];

    $scope.uneven_bars_group_4_skills = [
        { number_of_skill: "4.101", dificulty_of_skill: "A", name_of_skill: "前方開脚浮腰前転", sample_link: "" },
        { number_of_skill: "4.104", dificulty_of_skill: "A", name_of_skill: "後方開脚浮腰回転", sample_link: "" },
        { number_of_skill: "4.106", dificulty_of_skill: "A", name_of_skill: "背面支持～前方閉脚浮腰回転～背面支持", sample_link: "" },
        { number_of_skill: "4.107", dificulty_of_skill: "A", name_of_skill: "背面支持～後方閉脚浮腰回転～背面支持", sample_link: "" },
        { number_of_skill: "4.201", dificulty_of_skill: "B", name_of_skill: "高棒開脚浮腰上がり～後ろ振り上げ開脚屈身倒立1/2ひねり", sample_link: "" },
        { number_of_skill: "4.202", dificulty_of_skill: "B", name_of_skill: "高棒、後方開脚浮腰回転～前とび出し～下移動低棒懸垂", sample_link: "" },
        { number_of_skill: "4.301", dificulty_of_skill: "C", name_of_skill: "前方シュタルダー、または1/2ひねり", sample_link: "" },
        { number_of_skill: "4.302", dificulty_of_skill: "C", name_of_skill: "低棒内向き～後方開脚浮腰回転前振り出し～切り返しを伴った上移動高棒懸垂", sample_link: "" },
        { number_of_skill: "4.304", dificulty_of_skill: "C", name_of_skill: "シュタルダー(後方開脚浮腰回転倒立)、またはとび逆手持ち換え、または1/2ひねり", sample_link: "" },
        { number_of_skill: "4.305", dificulty_of_skill: "C", name_of_skill: "低棒内向き～後方開脚浮腰回転前とび出し～上移動高棒懸垂", sample_link: "https://youtu.be/12z5LW9F1Zk" },
        { number_of_skill: "4.308", dificulty_of_skill: "C", name_of_skill: "後方閉脚浮腰回転前とび出し～上移動高棒懸垂", sample_link: "" },
        { number_of_skill: "4.309", dificulty_of_skill: "C", name_of_skill: "後方閉脚浮腰回転前振り出し～切り返しを伴った上移動高棒懸垂", sample_link: "" },
        { number_of_skill: "4.401", dificulty_of_skill: "D", name_of_skill: "前方シュタルダー１回ひねり", sample_link: "" },
        { number_of_skill: "4.402", dificulty_of_skill: "D", name_of_skill: "高棒、後方開脚浮腰回転～前とび出し～下移動低棒倒立", sample_link: "" },
        { number_of_skill: "4.403", dificulty_of_skill: "D", name_of_skill: "大逆手前方シュタルダー、または1/2ひねり", sample_link: "" },
        { number_of_skill: "4.404", dificulty_of_skill: "D", name_of_skill: "シュタルダー１回ひねり", sample_link: "https://youtu.be/CHX2rWobvKI" },
        { number_of_skill: "4.405", dificulty_of_skill: "D", name_of_skill: "低棒外向き～シュタルダー背面とび出し～上移動高棒懸垂", sample_link: "" },
        { number_of_skill: "4.406", dificulty_of_skill: "D", name_of_skill: "前方閉脚浮腰回転倒立、または1/2ひねり[閉脚エンドー]", sample_link: "" },
        { number_of_skill: "4.407", dificulty_of_skill: "D", name_of_skill: "後方閉脚浮腰回転倒立、または1/2ひねり", sample_link: "" },
        { number_of_skill: "4.408", dificulty_of_skill: "D", name_of_skill: "倒立～後方閉脚浮腰回転～脚前挙", sample_link: "" },
        { number_of_skill: "4.502", dificulty_of_skill: "E", name_of_skill: "高棒、後方開脚浮腰回転～開脚背面とび越し～高棒懸垂", sample_link: "" },
        { number_of_skill: "4.503", dificulty_of_skill: "E", name_of_skill: "大逆手前方シュタルダー１回ひねり(あらゆる技術を認める)", sample_link: "" },
        { number_of_skill: "4.504", dificulty_of_skill: "E", name_of_skill: "シュタルダー１1/2ひねり", sample_link: "" },
        { number_of_skill: "4.505", dificulty_of_skill: "E", name_of_skill: "シュタルダー背面とび出し1/2ひねり～上移動高棒懸垂", sample_link: "" },
        { number_of_skill: "4.506", dificulty_of_skill: "E", name_of_skill: "前方閉脚浮腰回転倒立１回ひねり", sample_link: "" },
        { number_of_skill: "4.507", dificulty_of_skill: "E", name_of_skill: "後方閉脚浮腰回転倒立１回ひねり", sample_link: "" },
        { number_of_skill: "4.508", dificulty_of_skill: "E", name_of_skill: "低棒外向き～後方閉脚浮腰回転倒立～背面とび出し1/2ひねり～上移動高棒懸垂・低棒外向き～後方閉脚浮腰回転倒立～背面とび出し～上移動高棒懸垂", sample_link: "" },
        { number_of_skill: "4.509", dificulty_of_skill: "E", name_of_skill: "後方閉脚浮腰回転～(空中局面の前に腰を開いて)開脚背面とび越し～高棒懸垂", sample_link: "" },
        { number_of_skill: "4.602", dificulty_of_skill: "F", name_of_skill: "高棒、後方開脚浮腰回転～閉脚屈身背面とび越し～高棒懸垂", sample_link: "" }
    ];

    $scope.uneven_bars_group_5_skills = [
        { number_of_skill: "5.101", dificulty_of_skill: "A", name_of_skill: "(低棒、高棒)背面支持～前方閉脚浮腰回転～開脚抜き懸垂", sample_link: "" },
        { number_of_skill: "5.104", dificulty_of_skill: "A", name_of_skill: "高棒屈身逆懸垂～後ろ振り出し[シュレイデム]～高棒懸垂", sample_link: "" },
        { number_of_skill: "5.105", dificulty_of_skill: "A", name_of_skill: "前方足裏支持回転(屈身、開脚)", sample_link: "" },
        { number_of_skill: "5.106", dificulty_of_skill: "A", name_of_skill: "大逆手前方足裏支持回転(屈身、開脚)", sample_link: "" },
        { number_of_skill: "5.108", dificulty_of_skill: "A", name_of_skill: "後方足裏支持回転(屈身、開脚)", sample_link: "" },
        { number_of_skill: "5.202", dificulty_of_skill: "B", name_of_skill: "高棒背面支持～後方閉脚浮腰回転～下移動低棒懸垂", sample_link: "" },
        { number_of_skill: "5.207", dificulty_of_skill: "B", name_of_skill: "低棒棒下振り出し(足裏支持)～切り返しを伴った上移動高棒懸垂", sample_link: "" },
        { number_of_skill: "5.301", dificulty_of_skill: "C", name_of_skill: "高棒背面支持～屈身逆懸垂、または前方閉脚浮腰回転～開脚抜き～下移動低棒とび越し～低棒懸垂・低棒背面支持～前方閉脚浮腰回転～開脚抜き～上移動高棒懸垂", sample_link: "" },
        { number_of_skill: "5.302", dificulty_of_skill: "C", name_of_skill: "高棒背面閉脚浮支持～順手背面振り上がり～高棒背面浮支持", sample_link: "" },
        { number_of_skill: "5.303", dificulty_of_skill: "C", name_of_skill: "高棒背面閉脚浮支持～順手背面振り出し～閉脚抜き～高棒懸垂", sample_link: "" },
        { number_of_skill: "5.304", dificulty_of_skill: "C", name_of_skill: "高棒でシュレイデム(倒立近くへ)～とび順手持ち換え", sample_link: "" },
        { number_of_skill: "5.305", dificulty_of_skill: "C", name_of_skill: "逆手前方屈身足裏支持回転倒立、または1/2ひねり", sample_link: "" },
        { number_of_skill: "5.306", dificulty_of_skill: "C", name_of_skill: "大逆手前方屈身足裏支持回転倒立、または1/2ひねり", sample_link: "" },
        { number_of_skill: "5.307", dificulty_of_skill: "C", name_of_skill: "(低棒、高棒)棒下振り出し～持ち換え１1/2ひねり懸垂", sample_link: "" },
        { number_of_skill: "5.308", dificulty_of_skill: "C", name_of_skill: "後方屈身足裏支持回転倒立、または倒立局面でとび逆手持ち換え、または1/2ひねり", sample_link: "" },
        { number_of_skill: "5.402", dificulty_of_skill: "D", name_of_skill: "高棒背面閉脚浮支持～―順手背面振り出し～順手背面車輪―順手背面振り出し～棒間で後方宙返り(伸身、屈身)～下移動低棒浮支持―順手背面振り出し～1/2ひねり～下移動低棒倒立", sample_link: "" },
        { number_of_skill: "5.403", dificulty_of_skill: "D", name_of_skill: "高棒背面閉脚浮支持～順手背面振り出し～開脚背面とび越し～高棒懸垂", sample_link: "" },
        { number_of_skill: "5.404", dificulty_of_skill: "D", name_of_skill: "高棒(懸垂、背面支持)～屈身逆懸垂後ろ振り出し～低棒とび越し～低棒倒立", sample_link: "" },
        { number_of_skill: "5.405", dificulty_of_skill: "D", name_of_skill: "逆手前方屈身足裏支持回転倒立１回ひねり", sample_link: "" },
        { number_of_skill: "5.406", dificulty_of_skill: "D", name_of_skill: "大逆手前方屈身足裏支持回転倒立１回ひねり", sample_link: "" },
        { number_of_skill: "5.408", dificulty_of_skill: "D", name_of_skill: "後方屈身足裏支持回転倒立１回ひねり", sample_link: "" },
        { number_of_skill: "5.409", dificulty_of_skill: "D", name_of_skill: "低棒内向き～後方屈身足裏支持回転倒立～背面とび出し上移動高棒懸垂・高棒屈身足裏支持回転～開脚背面とび越し～高棒懸垂", sample_link: "" },
        { number_of_skill: "5.501", dificulty_of_skill: "E", name_of_skill: "前方閉脚浮腰回転～前振り出し～大逆手倒立(垂直から30度以内)、または1/2ひねり", sample_link: "" },
        { number_of_skill: "5.508", dificulty_of_skill: "E", name_of_skill: "後方屈身足裏支持回転倒立１1/2ひねり", sample_link: "" },
        { number_of_skill: "5.509", dificulty_of_skill: "E", name_of_skill: "低棒外向き～後方屈身足裏支持回転倒立～背面とび出し1/2ひねり上移動高棒懸垂、または１回ひねり上移動高棒懸垂、または高棒後方屈身足裏支持回転～屈身背面とび越し～高棒懸垂", sample_link: "" },
        { number_of_skill: "5.607", dificulty_of_skill: "F", name_of_skill: "高棒外向き～棒下振り出し(足裏支持)～前方開脚宙返り～高棒懸垂", sample_link: "" },
        { number_of_skill: "5.609", dificulty_of_skill: "F", name_of_skill: "高棒後方屈身足裏支持回転～開脚背面とび越し1/2ひねり～片大逆手高棒懸垂", sample_link: "" },
        { number_of_skill: "5.709", dificulty_of_skill: "G", name_of_skill: "高棒後方屈身足裏支持回転～伸身背面とび越し～高棒懸垂", sample_link: "" }
    ];

    $scope.uneven_bars_group_6_skills = [
        { number_of_skill: "6.101", dificulty_of_skill: "A", name_of_skill: "高棒～棒下振り出し1/2ひねり下り、または１回ひねり下り", sample_link: "" },
        { number_of_skill: "6.102", dificulty_of_skill: "A", name_of_skill: "高棒～浮支持回転前振り出し1/2ひねり下り、または１回ひねり下り", sample_link: "" },
        { number_of_skill: "6.104", dificulty_of_skill: "A", name_of_skill: "前振り～後方宙返り(かかえ込み、屈身、伸身)下り", sample_link: "" },
        { number_of_skill: "6.108", dificulty_of_skill: "A", name_of_skill: "後ろ振り～前方宙返り(かかえ込み、屈身、伸身)下り、または高棒で前方開脚浮腰回転～後ろ振り～前方かかえ込み宙返り宙返り下り", sample_link: "" },
        { number_of_skill: "6.201", dificulty_of_skill: "B", name_of_skill: "高棒～高棒振り出し～前方宙返り(かかえ込み、屈身)下り", sample_link: "" },
        { number_of_skill: "6.204", dificulty_of_skill: "B", name_of_skill: "前振り～後方宙返り(かかえ込み、伸身)1/2ひねり、または１回ひねり下り", sample_link: "" },
        { number_of_skill: "6.205", dificulty_of_skill: "B", name_of_skill: "前振り～後方かかえ込み２回宙返り下り", sample_link: "" },
        { number_of_skill: "6.208", dificulty_of_skill: "B", name_of_skill: "後ろ振り～前方宙返り(かかえ込み、伸身)1/2ひねり下り、または１回ひねり下り", sample_link: "" },
        { number_of_skill: "6.209", dificulty_of_skill: "B", name_of_skill: "(低棒、高棒)後方臥回転とび出し下り、または後方浮支持回転とび出し下り", sample_link: "" },
        { number_of_skill: "6.210", dificulty_of_skill: "B", name_of_skill: "高棒～前方かかえ込み宙返り下り", sample_link: "" },
        { number_of_skill: "6.301", dificulty_of_skill: "C", name_of_skill: "高棒～棒下振り出し～前方宙返り(かかえ込み、屈身)1/2ひねり下り、または１回ひねり下り", sample_link: "" },
        { number_of_skill: "6.302", dificulty_of_skill: "C", name_of_skill: "高棒～浮支持回転前振り出し～前方宙返り(かかえ込み、屈身)下り、または開脚浮腰回転前振り出し～前方かかえ込み宙返り下り", sample_link: "" },
        { number_of_skill: "6.303", dificulty_of_skill: "C", name_of_skill: "高棒～棒下振り出し1/2ひねり～後方宙返り(かかえ込み、屈身)下り[コマネチ]・高棒～浮支持回転前振り出し1/2ひねり～後方宙返り(かかえ込み、屈身)下り", sample_link: "" },
        { number_of_skill: "6.304", dificulty_of_skill: "C", name_of_skill: "前振り～後方伸身宙返り１1/2ひねり下り、または２回ひねり下り", sample_link: "" },
        { number_of_skill: "6.305", dificulty_of_skill: "C", name_of_skill: "前振り後方屈身２回宙返り下り", sample_link: "" },
        { number_of_skill: "6.308", dificulty_of_skill: "C", name_of_skill: "後ろ振り～前方伸身宙返り１1/2ひねり下り、または２回ひねり下り", sample_link: "" },
        { number_of_skill: "6.309", dificulty_of_skill: "C", name_of_skill: "(低棒、高棒)(後方臥回転、浮支持回転)とび出し１回ひねり下り", sample_link: "" },
        { number_of_skill: "6.310", dificulty_of_skill: "C", name_of_skill: "高棒～前方屈身宙返り下り、または後方宙返り(かかえ込み、屈身)下り", sample_link: "" },
        { number_of_skill: "6.401", dificulty_of_skill: "D", name_of_skill: "高棒～棒下振り出し～前方かかえ込み宙返り１1/2ひねり下り・高棒～棒下振り出し～前方伸身宙返り1/2ひねり下り", sample_link: "" },
        { number_of_skill: "6.402", dificulty_of_skill: "D", name_of_skill: "高棒～浮支持回転前振り出し～前方かかえ込み宙返り１回ひねり下り・後方閉脚浮腰回転前振り出し～前方伸身宙返り1/2ひねり下り", sample_link: "" },
        { number_of_skill: "6.403", dificulty_of_skill: "D", name_of_skill: "高棒～棒下振り出し1/2ひねり～後方伸身宙返り下り・高棒～浮支持回転前振り出し1/2ひねり～後方伸身宙返り下り・高棒～棒下振り出し1/2ひねり～後方かかえ込み宙返り１回ひねり下り", sample_link: "" },
        { number_of_skill: "6.404", dificulty_of_skill: "D", name_of_skill: "前振り～後方伸身宙返り２1/2ひねり下り", sample_link: "" },
        { number_of_skill: "6.405", dificulty_of_skill: "D", name_of_skill: "前振り～後方２回宙返り１回ひねり下り(かかえ込み、屈身)(１回目または２回目の宙返りでひねる)", sample_link: "https://youtu.be/CHX2rWobvKI" },
        { number_of_skill: "6.406", dificulty_of_skill: "D", name_of_skill: "前振り～後方伸身２回宙返り下り", sample_link: "" },
        { number_of_skill: "6.407", dificulty_of_skill: "D", name_of_skill: "前振り～後方かかえ込み宙返り1/2ひねり～前方かかえ込み宙返り下り・前振り1/2ひねり～前方かかえ込み２回宙返り下り", sample_link: "" },
        { number_of_skill: "6.408", dificulty_of_skill: "D", name_of_skill: "後ろ振り～前方かかえ込み２回宙返り下り・後ろ振り～前方かかえ込み２回宙返り1/2ひねり下り、または前方かかえ込み宙返り1/2ひねり～後方かかえ込み宙返り下り", sample_link: "" },
        { number_of_skill: "6.409", dificulty_of_skill: "D", name_of_skill: "(低棒、高棒)(後方臥回転、浮支持回転)とび出し～後方かかえ込み宙返り下り", sample_link: "" },
        { number_of_skill: "6.502", dificulty_of_skill: "E", name_of_skill: "高棒～浮支持回転前振り出し～前方かかえ込み宙返り１1/2ひねり下り", sample_link: "" },
        { number_of_skill: "6.504", dificulty_of_skill: "E", name_of_skill: "前振り～後方伸身宙返り３回ひねり下り", sample_link: "" },
        { number_of_skill: "6.505", dificulty_of_skill: "E", name_of_skill: "前振り～後方かかえ込み２回宙返り１1/2ひねり下り", sample_link: "" },
        { number_of_skill: "6.506", dificulty_of_skill: "E", name_of_skill: "前振り～後方伸身２回宙返り１回ひねり下り(１回目または２回目の宙返りでひねる)", sample_link: "" },
        { number_of_skill: "6.507", dificulty_of_skill: "E", name_of_skill: "前振り～後方伸身宙返り1/2ひねり～前方伸身宙返り下り・前振り1/2ひねり～前方屈身２回宙返り下り", sample_link: "" },
        { number_of_skill: "6.508", dificulty_of_skill: "E", name_of_skill: "後ろ振り～前方屈身２回宙返り1/2ひねり下り", sample_link: "" },
        { number_of_skill: "6.509", dificulty_of_skill: "E", name_of_skill: "(低棒、高棒)(後方臥回転、浮支持回転)とび出し1/2ひねり～前方宙返り下り", sample_link: "" },
        { number_of_skill: "6.605", dificulty_of_skill: "F", name_of_skill: "前振り～後方かかえ込み２回宙返り２回ひねり下り", sample_link: "" },
        { number_of_skill: "6.706", dificulty_of_skill: "G", name_of_skill: "前振り～後方伸身２回宙返り２回ひねり下り", sample_link: "" },
        { number_of_skill: "6.707", dificulty_of_skill: "G", name_of_skill: "前振り～後方かかえ込み３回宙返り下り", sample_link: "" },
        { number_of_skill: "6.609", dificulty_of_skill: "F", name_of_skill: "(低棒、高棒)(後方臥回転、浮支持回転)とび出し～後方宙返り１回ひねり下り", sample_link: "" }
    ];

    $scope.balance_beam_group_1_skills = [
        { number_of_skill: "1.101（ダ）", dificulty_of_skill: "A", name_of_skill: "片足踏み切り、とび上がり、片足着台アラベスクへ（浮脚は水平以上）", sample_link: "" },
        { number_of_skill: "1.201（ダ）", dificulty_of_skill: "B", name_of_skill: "・両足踏み切り、伸身とび1/2ひねり立ち　・片足踏み切り、前後開脚とび上がり（開脚は180度）", sample_link: "" },
        { number_of_skill: "1.301（ダ）", dificulty_of_skill: "C", name_of_skill: "・（台の端、斜め）へ、両足踏み切り、とび上がり1回ひねり立ち　・前へ脚交差した前後開脚とび上がり（最初の振り上げ脚は45度", sample_link: "" },
        { number_of_skill: "1.102（ダ）", dificulty_of_skill: "A", name_of_skill: "台の横へ、片足踏み切り、手支持なしで台を越えて背面支持", sample_link: "" },
        { number_of_skill: "1.103", dificulty_of_skill: "A", name_of_skill: "・台の横に立ち、閉脚入れ、背面支持、または上向き転向1/2ひねり背面支持　・台を支持して踏み切り、手支持で3/4ひねり～縦向きに大腿部で座", sample_link: "" },
        { number_of_skill: "1.203", dificulty_of_skill: "B", name_of_skill: "開脚旋回2回", sample_link: "" },
        { number_of_skill: "1.303", dificulty_of_skill: "C", name_of_skill: "・閉脚旋回2回から開脚旋回　・開脚旋回3回", sample_link: "" },
        { number_of_skill: "1.204", dificulty_of_skill: "B", name_of_skill: "・台の横へ、とび上がり1/2ひねり開脚浮腰支持　台の横へ、後ろ向きで両足踏み切り、開脚屈身姿勢で台をとび越し正面支持　・台に後ろ向きで立ち、後ろにとび上がり、台を支持して左右開脚座", sample_link: "" },
        { number_of_skill: "1.304", dificulty_of_skill: "C", name_of_skill: "台の横へ、ロンダート、後ろへ開脚屈身とびで台を越え、後方支持回転", sample_link: "" },
        { number_of_skill: "1.105（ダ）", dificulty_of_skill: "A", name_of_skill: "両足踏み切り、左右開脚座（手の支持は認められる）または、台の斜めへ、片足踏み切り、とび上がり前後開脚座（手の支持は認められる）", sample_link: "https://youtu.be/pSSvZ0F0tkc" },
        { number_of_skill: "1.305（ダ）", dificulty_of_skill: "C", name_of_skill: "・台の斜めへ、両足踏み切り、手支持なしでとび上がり前後開脚座　・台の斜めへ、片足踏み切り、前へ脚を交差した前後開脚とび上がり、手支持なしで前後開脚座", sample_link: "" },
        { number_of_skill: "1.106", dificulty_of_skill: "A", name_of_skill: "台の横に立ち、脚をかかえ込む、または伸ばしたまま台を通過させて背面支持", sample_link: "" },
        { number_of_skill: "1.206", dificulty_of_skill: "B", name_of_skill: "台の横に立ち、脚をかかえ込む、または伸ばしたまま台を通過させて脚上挙支持（2秒）", sample_link: "" },
        { number_of_skill: "1.107", dificulty_of_skill: "A", name_of_skill: "台の（端、中）へ前転、または台の端で、開脚浮腰支持から後ろ振り上げ前転", sample_link: "" },
        { number_of_skill: "1.108", dificulty_of_skill: "A", name_of_skill: "胸倒立を経過した屈腕側方回転、台をまたいだ座へ", sample_link: "" },
        { number_of_skill: "1.208", dificulty_of_skill: "B", name_of_skill: "踏み切って、1/2ひねり、肩を経過した首倒立から1/2ひねり胸倒立[シリバス]", sample_link: "" },
        { number_of_skill: "1.308", dificulty_of_skill: "B", name_of_skill: "踏み切って、1/2ひねり、肩を経過した首倒立から（1回、１1/2）ひねり首倒立", sample_link: "" },
        { number_of_skill: "1.209", dificulty_of_skill: "B", name_of_skill: "・台の端へ、頭はねおき　・台の端へ、前方屈身倒立回転", sample_link: "" },
        { number_of_skill: "1.309", dificulty_of_skill: "C", name_of_skill: "台の端へ、屈身前転とび、片足ずつ着台、または両足着台", sample_link: "" },
        { number_of_skill: "1.509", dificulty_of_skill: "E", name_of_skill: "台の端へ、ロンダート、後ろとび1/2ひねり前方倒立回転", sample_link: "" },
        { number_of_skill: "1.210", dificulty_of_skill: "B", name_of_skill: "（踏み切って、引き上げて、後ろに振り上げて）（横向き、縦向き）倒立（2秒）または1/2ひねり、台に触れた姿勢または開脚浮腰支持へ", sample_link: "" },
        { number_of_skill: "1.310", dificulty_of_skill: "C", name_of_skill: "（踏み切って、引き上げて、後ろに振り上げて）（縦向き、横向き）倒立（1回、１1/2）ひねり、台に触れた姿勢または開脚浮腰支持へ", sample_link: "" },
        { number_of_skill: "1.211", dificulty_of_skill: "B", name_of_skill: "踏み切って、腰を曲げて上げ、横向き上水平支持（少なくとも水平より45度上に）（2秒）戻し方は自由", sample_link: "" },
        { number_of_skill: "1.311", dificulty_of_skill: "C", name_of_skill: "・踏み切って、腰を伸ばして上水平支持（少なくとも45度）（2秒）、または踏み切って、引き上げて、後ろに引き上げて（縦向き、横向き）倒立からおろして上水平支持（少なくとも45度）（2秒）　（・倒立から実施する場合は1/2ひねりからでも）　・（踏み切って、引き上げて、後ろに振り上げて）（縦向き、横向き）倒立（2秒）から片手を放して横向きに下ろす（倒立から実施する場合は1/2ひねりからでも）", sample_link: "" },
        { number_of_skill: "1.411", dificulty_of_skill: "D", name_of_skill: "・（踏み切って、引き上げて、後ろに振り上げて）（縦向き、横向き）倒立1回ひねりから上水平支持（少なくとも45度）または脚上挙支持（2秒）　・（踏み切って、引き上げて、後ろに振り上げて）（縦向き、横向き）倒立1回ひねりから片手を放して横向きに下ろす}", sample_link: "" },
        { number_of_skill: "1.312", dificulty_of_skill: "C", name_of_skill: "・縦向きで身体を後ろへ大きく反らせた倒立、または片脚を垂直にもう一方は曲げた屈身倒立（2秒）戻し方は自由　・（縦向き、横向き）後屈して脚を水平に保った倒立、またはその変形技（2秒）戻し方は自由", sample_link: "" },
        { number_of_skill: "1.412", dificulty_of_skill: "D", name_of_skill: "（踏み切って、引き上げて）横向き倒立、前方倒立回転、両足着台", sample_link: "" },
        { number_of_skill: "1.213", dificulty_of_skill: "B", name_of_skill: "引き上げて、横向き倒立、脚の曲げ伸ばしでとび1/4ひねり縦向き倒立戻し方は自由", sample_link: "" },
        { number_of_skill: "1.313", dificulty_of_skill: "C", name_of_skill: "（踏み切って、引き上げて、後ろに振り上げて）倒立から片手倒立（2秒）戻し方は自由", sample_link: "" },
        { number_of_skill: "1.413", dificulty_of_skill: "D", name_of_skill: "（踏み切って、引き上げて）片手倒立戻し方は自由、または（踏み切って、引き上げて、後ろに振り上げて）（縦向き、横向き）倒立から横向きの片手倒立（2秒）、片手開脚浮腰支持へまたは1/4ひねり", sample_link: "" },
        { number_of_skill: "1.114", dificulty_of_skill: "A", name_of_skill: "踏み切って、（膝を曲げ、または脚を伸ばして）倒立、戻し方は自由", sample_link: "" },
        { number_of_skill: "1.214", dificulty_of_skill: "B", name_of_skill: "台の端へ、（片手、両手）側方倒立回転", sample_link: "" },
        { number_of_skill: "1.314", dificulty_of_skill: "C", name_of_skill: "・台の横へ、踏み切って、空中局面で腰を伸ばし1/4ひねり、片手倒立を瞬時経過し1/4ひねりからもう一方の手で支えて横向き倒立、戻し方は自由　・後ろ向きから、後転とび、正面支持（後方支持回転につなげてもつなげなくても）　・台の横へ、ロンダート、後ろとび1/2ひねり、横向き倒立近くへ、戻し方は自由", sample_link: "" },
        { number_of_skill: "1.514", dificulty_of_skill: "E", name_of_skill: "台の横へ、ロンダート、手支持の前に1回ひねりをした後転とび、後方支持回転", sample_link: "" },
        { number_of_skill: "1.215", dificulty_of_skill: "B", name_of_skill: "・台の横へ、跳躍板上の手支持による前転とび、背面支持、または1/4ひねり、大腿部に座　・台の横へ、前方開脚伸身宙返り、または1/4ひねり、大腿部に座　・台の横へ、側方開脚伸身宙返り～正面支持", sample_link: "" },
        { number_of_skill: "1.515", dificulty_of_skill: "E", name_of_skill: "台の端へ、両足踏み切り前方開脚伸身宙返り、縦向き着台", sample_link: "" },
        { number_of_skill: "1.416", dificulty_of_skill: "D", name_of_skill: "台の端へ、前方かかえ込み宙返り（縦向き、横向き）着台", sample_link: "" },
        { number_of_skill: "1.516", dificulty_of_skill: "E", name_of_skill: "・台の端へ、前方屈身宙返り　・台の端へ、前方かかえ込み宙返り1/2ひねり", sample_link: "" },
        { number_of_skill: "1.716", dificulty_of_skill: "G", name_of_skill: "台の端へ、ロンダート、後ろとび1/2ひねり前方かかえ込み宙返り", sample_link: "" },
        { number_of_skill: "1.317", dificulty_of_skill: "C", name_of_skill: "台の端へ、ロンダート（片手、両手支持）後転とび、または台をまたいだ座", sample_link: "" },
        { number_of_skill: "1.417", dificulty_of_skill: "D", name_of_skill: "台の端へ、ロンダート、手支持の前に1回ひねりをした後転とびから台をまたいだ座", sample_link: "" },
        { number_of_skill: "1.517", dificulty_of_skill: "E", name_of_skill: "台の端へ、ロンダート、手支持の前に3/4ひねりをした後転とび、縦向き着台", sample_link: "" },
        { number_of_skill: "1.418", dificulty_of_skill: "D", name_of_skill: "台の端へ、ロンダート、後方宙返り（かかえ込み、屈身、開脚伸身）（縦向き、横向き）着台", sample_link: "" },
        { number_of_skill: "1.518", dificulty_of_skill: "E", name_of_skill: "台の端へ、ロンダート、後方伸身宙返り、縦向き着台", sample_link: "" },
        { number_of_skill: "1.618", dificulty_of_skill: "F", name_of_skill: "台の端へ、ロンダート、後方かかえ込み宙返り1回ひねり、縦向き着台", sample_link: "" },
        { number_of_skill: "1.718", dificulty_of_skill: "G", name_of_skill: "台の端へ、ロンダート、後方伸身宙返り1回ひねり、縦向き着台", sample_link: "" },
        { number_of_skill: "1.519", dificulty_of_skill: "E", name_of_skill: "前とび1/2ひねり、後方屈身宙返り", sample_link: "" }
    ];

    $scope.balance_beam_group_2_skills = [
        { number_of_skill: "2.101", dificulty_of_skill: "A", name_of_skill: "片足踏み切り、前後開脚とび（開脚は180度）", sample_link: "" },
        { number_of_skill: "2.201", dificulty_of_skill: "B", name_of_skill: "片足踏み切り、前とび1/4ひねりから左右開脚屈身へ（両脚は水平より上）、（片足、両足）着台", sample_link: "" },
        { number_of_skill: "2.301", dificulty_of_skill: "C", name_of_skill: "片足踏み切り、前後開脚とび1/2ひねり　カデット（開脚は180度）、片足着台", sample_link: "" },
        { number_of_skill: "2.401", dificulty_of_skill: "D", name_of_skill: "片足踏み切り、前後開脚とび1回ひねり", sample_link: "" },
        { number_of_skill: "2.102", dificulty_of_skill: "A", name_of_skill: "（縦向き、横向き）両足踏み切り、前後開脚とび（開脚は180度）", sample_link: "" },
        { number_of_skill: "2.202", dificulty_of_skill: "B", name_of_skill: "・横向き、両足踏み切り、後ろ脚を90度に曲げた前後開脚とび　・（縦向き、横向き）両足踏み切り、前後開脚とび1/2ひねり", sample_link: "" },
        { number_of_skill: "2.302", dificulty_of_skill: "C", name_of_skill: "縦向き、両足踏み切り、前後開脚とび1回ひねり", sample_link: "" },
        { number_of_skill: "2.402", dificulty_of_skill: "D", name_of_skill: "縦向き、両足踏み切り、上体を反らせ、頭部後屈した前後開脚とび（開脚は180度を越える）[ヤンボー]", sample_link: "" },
        { number_of_skill: "2.502", dificulty_of_skill: "E", name_of_skill: "横向き、両足踏み切り、上体を反らせ、頭部後屈した前後開脚とび（開脚は180度を越える）", sample_link: "" },
        { number_of_skill: "2.103", dificulty_of_skill: "A", name_of_skill: "（縦向き、横向き）両足踏み切り、左右開脚屈身とび（両脚は水平より上）、または左右開脚とび", sample_link: "" },
        { number_of_skill: "2.203", dificulty_of_skill: "B", name_of_skill: "（縦向き、横向き）両足踏み切り、左右開脚屈身とび1/2ひねり", sample_link: "" },
        { number_of_skill: "2.303", dificulty_of_skill: "C", name_of_skill: "縦向き、両足踏み切り、左右開脚屈身とび1回ひねり", sample_link: "" },
        { number_of_skill: "2.204", dificulty_of_skill: "B", name_of_skill: "片脚を前に振り上げた1/2ひねりとび、正面水平立ち（浮脚は水平より）片脚を前に伸ばして、水平より上に振り上げた1/2ひねりとび", sample_link: "" },
        { number_of_skill: "2.305", dificulty_of_skill: "C", name_of_skill: "前へ脚交差した前後開脚とび（最初の振り上げ脚は45度、脚交差後の開脚は180度）", sample_link: "" },
        { number_of_skill: "2.405", dificulty_of_skill: "D", name_of_skill: "前へ脚交差した前後開脚とび1/2ひねり", sample_link: "" },
        { number_of_skill: "2.306", dificulty_of_skill: "C", name_of_skill: "前へ脚交差し1/4ひねり（左右開脚、左右開脚屈身）とび[ジョンソン]", sample_link: "" },
        { number_of_skill: "2.406", dificulty_of_skill: "D", name_of_skill: "ジョンソン1/2ひねり", sample_link: "" },
        { number_of_skill: "2.107", dificulty_of_skill: "A", name_of_skill: "（縦向き、横向き）両足踏み切り、屈身とび（腰角度は90度より深く）", sample_link: "" },
        { number_of_skill: "2.207", dificulty_of_skill: "B", name_of_skill: "（縦向き、横向き）両足踏み切り、屈身とび1/2ひねり", sample_link: "" },
        { number_of_skill: "2.307", dificulty_of_skill: "C", name_of_skill: "縦向き、両足踏み切り、屈身とび1回ひねり", sample_link: "" },
        { number_of_skill: "2.108", dificulty_of_skill: "A", name_of_skill: "両足踏み切り、シソンヌ、片足着台（開脚は対角に180度/床に対して45度）", sample_link: "" },
        { number_of_skill: "2.208", dificulty_of_skill: "B", name_of_skill: "両足踏み切り、輪とび（後ろ足は頭の高さ、上体はアーチ姿勢で頭部後屈、開脚は180度）または前脚を曲げた輪とび", sample_link: "" },
        { number_of_skill: "2.408", dificulty_of_skill: "D", name_of_skill: "両足を頭につけるように頭部後屈し、アーチ姿勢に反ったジャンプ[羊とび] 片足踏み切り、輪とび（開脚は180度）", sample_link: "" },
        { number_of_skill: "2.508", dificulty_of_skill: "E", name_of_skill: "前へ脚交差した前後開脚とびから輪", sample_link: "" },
        { number_of_skill: "2.209", dificulty_of_skill: "B", name_of_skill: "縦向き、（片足、両足）踏み切り伸身とび1回ひねり", sample_link: "" },
        { number_of_skill: "2.309", dificulty_of_skill: "C", name_of_skill: "縦向き、（片足、両足）踏み切り伸身とび１1/2ひねり", sample_link: "" },
        { number_of_skill: "2.110", dificulty_of_skill: "A", name_of_skill: "ねことび1/2ひねり（膝は交互に水平より上）", sample_link: "" },
        { number_of_skill: "2.210", dificulty_of_skill: "B", name_of_skill: "ねことび1回ひねり", sample_link: "" },
        { number_of_skill: "2.111", dificulty_of_skill: "A", name_of_skill: "（縦向き、横向き）（両足、片足）踏み切り、かかえ込みとび1/2回ひねり（腰角度、膝角度は45度）", sample_link: "" },
        { number_of_skill: "2.211", dificulty_of_skill: "B", name_of_skill: "縦向き、（両足、片足）踏み切り、かかえ込みとび1回ひねり", sample_link: "" },
        { number_of_skill: "2.411", dificulty_of_skill: "D", name_of_skill: "縦向き、（両足、片足）踏み切り、かかえ込みとび１1/2回ひねり", sample_link: "" },
        { number_of_skill: "2.112", dificulty_of_skill: "A", name_of_skill: "・（縦向き、横向き）（両足、片足）踏み切り、ウルフとび（腰角度は45度、膝はそろえる）　・前へ脚交差したウルフとび（腰角度は45度）", sample_link: "" },
        { number_of_skill: "2.212", dificulty_of_skill: "B", name_of_skill: "（縦向き、横向き）（両足、片足）踏み切り、ウルフとび1/2ひねり", sample_link: "" },
        { number_of_skill: "2.312", dificulty_of_skill: "C", name_of_skill: "縦向き、（両足、片足）踏み切り、ウルフとび1回ひねり", sample_link: "" },
        { number_of_skill: "2.512", dificulty_of_skill: "E", name_of_skill: "縦向き、（両足、片足）踏み切り、ウルフとび１1/2回ひねり", sample_link: "" }
    ];

    $scope.balance_beam_group_3_skills = [
        { number_of_skill: "3.101", dificulty_of_skill: "A", name_of_skill: "片足立ち1回ターン（浮脚は水平より下で自由）", sample_link: "" },
        { number_of_skill: "3.201", dificulty_of_skill: "B", name_of_skill: "片足立ち１1/2回ターン（浮脚は水平より下で自由）", sample_link: "" },
        { number_of_skill: "3.401", dificulty_of_skill: "D", name_of_skill: "片足立ち2回ターン（浮脚は水平より下で自由）", sample_link: "" },
        { number_of_skill: "3.501", dificulty_of_skill: "E", name_of_skill: "片足立ち3回ターン（浮脚は水平より下で自由）", sample_link: "" },
        { number_of_skill: "3.302", dificulty_of_skill: "C", name_of_skill: "後ろへ上げた浮脚の大腿部をターンの始めから終わりまで水平に保つ片足立ち1回ターン", sample_link: "" },
        { number_of_skill: "3.402", dificulty_of_skill: "D", name_of_skill: "・後ろへ上げた浮脚の大腿部をターンの始めから終わりまで水平に保つ片足立ち１1/2回ターン　・後ろへ上げた浮脚を両手で保持した1回ターン", sample_link: "" },
        { number_of_skill: "3.303", dificulty_of_skill: "C", name_of_skill: "前へ上げた浮脚の踵をターンの始めから終わりまで水平に保つ1回ターン（軸足と浮脚は曲げても伸ばしてもよい）", sample_link: "" },
        { number_of_skill: "", dificulty_of_skill: "", name_of_skill: "前へ上げた浮脚の踵をターンの始めから終わりまで水平に保つ１1/2回ターン（軸足と浮脚は曲げても伸ばしてもよい）", sample_link: "" },
        { number_of_skill: "3.503", dificulty_of_skill: "E", name_of_skill: "前へ上げた浮脚の踵をターンの始めから終わりまで水平に保つ2回ターン（軸足と浮脚は曲げても伸ばしてもよい）", sample_link: "" },
        { number_of_skill: "3.304", dificulty_of_skill: "C", name_of_skill: "180度開脚した上方をターンの始めから終わりまで手で保持した1回ターン", sample_link: "" },
        { number_of_skill: "3.404", dificulty_of_skill: "C", name_of_skill: "180度開脚した上方をターンの始めから終わりまで手で保持した１1/2回ターン", sample_link: "" },
        { number_of_skill: "3.205", dificulty_of_skill: "B", name_of_skill: "浮脚が台に触れずに、片脚を後ろに振り上げた前後開脚立ち経過1/2ターン（片手は瞬時台に触れてもよい）（イリュージョン）", sample_link: "" },
        { number_of_skill: "3.405", dificulty_of_skill: "D", name_of_skill: "浮脚が台に触れずに、片脚を後ろに振り上げた前後開脚立ち経過1回ターン（片手は瞬時台に触れてもよい）（イリュージョン）", sample_link: "" },
        { number_of_skill: "3.106", dificulty_of_skill: "A", name_of_skill: "片膝水平立ち1回ターン（手は交互に支えて）", sample_link: "" },
        { number_of_skill: "3.206", dificulty_of_skill: "B", name_of_skill: "片膝水平立ち１1/2回ターン（手は交互に支えて）", sample_link: "" },
        { number_of_skill: "3.306", dificulty_of_skill: "C", name_of_skill: "片膝水平立ち2回ターン（手は交互に支えて）", sample_link: "" },
        { number_of_skill: "3.207", dificulty_of_skill: "B", name_of_skill: "片足上で、しゃがみ立ち1回ターン（浮脚は自由）", sample_link: "" },
        { number_of_skill: "3.307", dificulty_of_skill: "C", name_of_skill: "片足上で、しゃがみ立ち１1/2回ターン（浮脚は自由）", sample_link: "" },
        { number_of_skill: "3.407", dificulty_of_skill: "D", name_of_skill: "片足上で、しゃがみ立ち2回ターン（浮脚は自由）", sample_link: "" },
        { number_of_skill: "3.507", dificulty_of_skill: "E", name_of_skill: "片足上で、しゃがみ立ち２1/2または3回ターン（浮脚は自由）", sample_link: "" },
        { number_of_skill: "3.208", dificulty_of_skill: "B", name_of_skill: "伏臥（1回、１1/2）ターン（手は交互に支えてもよい）", sample_link: "" },
        { number_of_skill: "3.308", dificulty_of_skill: "C", name_of_skill: "屈身仰臥姿勢で１1/4ターン", sample_link: "" }
    ];


    $scope.balance_beam_group_4_skills = [
        { number_of_skill: "4.101（ダ）", dificulty_of_skill: "A", name_of_skill: "膝をついた座の姿勢からつま先立ちを経過し、波動しながら立ち上がる", sample_link: "" },
        { number_of_skill: "4.102（ダ）", dificulty_of_skill: "A", name_of_skill: "両手を支えた前後開脚立ち（開脚は180度）（2秒）、または浮脚を前に上げ、足を頭より上に保持した片足立ち（2秒）　支持脚を伸ばした正面水平立ち（開脚は180度）（2秒）", sample_link: "" },
        { number_of_skill: "4.103", dificulty_of_skill: "A", name_of_skill: "（片腕、両腕）で屈腕上水平支持（2秒）、または前後開脚の姿勢", sample_link: "" },
        { number_of_skill: "4.104", dificulty_of_skill: "A", name_of_skill: "（横向き、縦向き）倒立（2秒）、台に触れた姿勢へ", sample_link: "" },
        { number_of_skill: "4.204", dificulty_of_skill: "B", name_of_skill: "倒立前転（手支持あり、なし）、座の姿勢またはしゃがみ立ちへ", sample_link: "" },
        { number_of_skill: "4.105", dificulty_of_skill: "A", name_of_skill: "手支持なしで前転、座の姿勢またはしゃがみ立ちへ", sample_link: "" },
        { number_of_skill: "4.205", dificulty_of_skill: "B", name_of_skill: "手支持なしで肩倒立を経過した前転、座の姿勢またはしゃがみ立ちへ", sample_link: "" },
        { number_of_skill: "4.206", dificulty_of_skill: "B", name_of_skill: "後転倒立、台に触れた姿勢へ", sample_link: "" },
        { number_of_skill: "4.207", dificulty_of_skill: "B", name_of_skill: "横転（かかえ込み、伸身）、または体を伸ばし、首倒立を経過した横転、または肩倒立を経過して1/2ひねり", sample_link: "" },
        { number_of_skill: "4.108", dificulty_of_skill: "A", name_of_skill: "側方倒立回転、片手支持の側方倒立回転、側転とび、とび側転）", sample_link: "" },
        { number_of_skill: "4.208", dificulty_of_skill: "B", name_of_skill: "左右開脚から開脚伸身で横転（終わりの姿勢は自由）　台の下をつかみ、開脚伸身姿勢で横転、座の姿勢へ", sample_link: "" },
        { number_of_skill: "4.109", dificulty_of_skill: "A", name_of_skill: "・前方倒立回転、または（交互に手支持、片手支持）の前方倒立回転[ティンシカ]　・前方倒立回転から着台足を戻す（チックタック）", sample_link: "" },
        { number_of_skill: "4.209", dificulty_of_skill: "B", name_of_skill: "縦向き、倒立1/2ひねり、前方倒立回転", sample_link: "" },
        { number_of_skill: "4.309", dificulty_of_skill: "C", name_of_skill: "横向き、前方倒立回転、横向き立ち", sample_link: "" },
        { number_of_skill: "4.110", dificulty_of_skill: "A", name_of_skill: "後方倒立回転（交互に手支持、片手支持）後方倒立回転（台をまたいだ座につなげても）", sample_link: "" },
        { number_of_skill: "4.210", dificulty_of_skill: "B", name_of_skill: "後方倒立回転1/2ひねりから前方倒立回転", sample_link: "" },
        { number_of_skill: "4.310", dificulty_of_skill: "C", name_of_skill: "横向き、後方倒立回転、横向き立ち　後方倒立回転から片脚をとの間に通して前後開脚座", sample_link: "" },
        { number_of_skill: "4.211", dificulty_of_skill: "B", name_of_skill: "片脚を伸ばした座から後方倒立回転[ヴァルデス]", sample_link: "" },
        { number_of_skill: "4.311", dificulty_of_skill: "C", name_of_skill: "・ヴァルデス1回ひねり、台に触れた姿勢へ　・片脚を伸ばした座から片手支持で始めから終わりまで水平位で後方回転", sample_link: "" }
    ];


    $scope.balance_beam_group_5_skills = [
        { number_of_skill: "5.201", dificulty_of_skill: "B", name_of_skill: "前転とび（片足、両足）着台、または片手支持の前転とび", sample_link: "" },
        { number_of_skill: "5.301", dificulty_of_skill: "C", name_of_skill: "空中局面で脚交差した前転とび", sample_link: "" },
        { number_of_skill: "5.401", dificulty_of_skill: "D", name_of_skill: "後ろとび1/2ひねり、前方倒立回転、または片手支持、またはチックタックへ", sample_link: "" },
        { number_of_skill: "5.202", dificulty_of_skill: "B", name_of_skill: "ロンダート", sample_link: "" },
        { number_of_skill: "5.203", dificulty_of_skill: "B", name_of_skill: "後転とび、両足着台", sample_link: "" },
        { number_of_skill: "5.303", dificulty_of_skill: "C", name_of_skill: "後ろとび1/2ひねりから倒立（2秒）戻し方は自由", sample_link: "" },
        { number_of_skill: "5.403", dificulty_of_skill: "D", name_of_skill: "後ろとび1/2ひねり、前転とび、両足着台", sample_link: "" },
        { number_of_skill: "5.304", dificulty_of_skill: "C", name_of_skill: "後ろとび1/4ひねりから倒立（2秒）戻し方は自由", sample_link: "" },
        { number_of_skill: "5.404", dificulty_of_skill: "D", name_of_skill: "後ろとび3/4ひねりから横向き倒立、（2秒）戻し方は自由", sample_link: "" },
        { number_of_skill: "5.205", dificulty_of_skill: "B", name_of_skill: "・開脚後転とび　・片手支持の開脚後転とび", sample_link: "" },
        { number_of_skill: "5.305", dificulty_of_skill: "C", name_of_skill: "手支持の後に1/2ひねりをした後転とび", sample_link: "" },
        { number_of_skill: "5.405", dificulty_of_skill: "D", name_of_skill: "手支持の前に3/4ひねりをした後転とび", sample_link: "" },
        { number_of_skill: "5.306", dificulty_of_skill: "C", name_of_skill: "横向き、後転とび（正面支持、後方支持回転）", sample_link: "" },
        { number_of_skill: "5.406", dificulty_of_skill: "D", name_of_skill: "・横向き、開脚後転とび　・横向き、後ろとび1/2ひねり、横向き倒立戻し方は自由", sample_link: "" },
        { number_of_skill: "5.506", dificulty_of_skill: "E", name_of_skill: "横向き、手支持の前に1回ひねりをした後転とび、後方支持回転", sample_link: "" },
        { number_of_skill: "5.207", dificulty_of_skill: "B", name_of_skill: "・アウエルバッハ後転とび　・片手支持のアウエルバッハ後転とび", sample_link: "" },
        { number_of_skill: "5.307", dificulty_of_skill: "C", name_of_skill: "アウエルバッハ後転とび1/4ひねりから倒立（2秒）、戻し方は自由　もし、さらに倒立1/2ひねりを追加した場合は、2秒静止の要求はない", sample_link: "" },
        { number_of_skill: "5.407", dificulty_of_skill: "D", name_of_skill: "手支持の前に3/4ひねりをしたアウエルバッハ後転とび", sample_link: "" },
        { number_of_skill: "5.208", dificulty_of_skill: "B", name_of_skill: "高い空中局面を伴う後転とびまたはアウエルバッハ後転とびから台をまたいだ座", sample_link: "" },
        { number_of_skill: "5.308", dificulty_of_skill: "C", name_of_skill: "空中局面で屈身姿勢から伸身姿勢をとった後転とびまたはアウエルバッハ後転とびから台をまたいだ座", sample_link: "" },
        { number_of_skill: "5.408", dificulty_of_skill: "D", name_of_skill: "手支持の前に1回ひねりをした後転とびから台をまたいだ座", sample_link: "" },
        { number_of_skill: "5.409", dificulty_of_skill: "D", name_of_skill: "片足踏み切り、側方開脚伸身宙返り（縦向き、横向き）（片足、両足）着台または脚交差した側方開脚伸身宙返り", sample_link: "" },
        { number_of_skill: "5.509", dificulty_of_skill: "E", name_of_skill: "両足踏み切り、手支持のない（かかえ込み、屈身）ロンダート、", sample_link: "" },
        { number_of_skill: "5.410", dificulty_of_skill: "D", name_of_skill: "片足踏み切り、側方開脚伸身宙返り（片足、両足）着台", sample_link: "" },
        { number_of_skill: "5.311", dificulty_of_skill: "C", name_of_skill: "片足踏み切り、前方かかえ込み宙返り（片足、両足）着台", sample_link: "" },
        { number_of_skill: "5.411", dificulty_of_skill: "D", name_of_skill: "前方かかえ込み宙返り、縦向き着台", sample_link: "" },
        { number_of_skill: "5.511", dificulty_of_skill: "E", name_of_skill: "前方屈身宙返り、縦向き着台", sample_link: "" },
        { number_of_skill: "5.611", dificulty_of_skill: "F", name_of_skill: "両足踏み切り、前方かかえ込み宙返り1/2ひねり", sample_link: "" },
        { number_of_skill: "5.412", dificulty_of_skill: "D", name_of_skill: "（前方、側方）片足踏み切り、側方かかえ込み宙返り、横向き着台", sample_link: "" },
        { number_of_skill: "5.512", dificulty_of_skill: "E", name_of_skill: "片足踏み切り、側方かかえ込み宙返り1/2ひねり、横向き着台", sample_link: "" },
        { number_of_skill: "5.612", dificulty_of_skill: "F", name_of_skill: "後ろとび1/2ひねり、前方かかえ込み宙返り", sample_link: "" },
        { number_of_skill: "5.313", dificulty_of_skill: "C", name_of_skill: "後方宙返り（かかえ込み、屈身、開脚伸身）", sample_link: "" },
        { number_of_skill: "5.513", dificulty_of_skill: "E", name_of_skill: "後方伸身宙返り、両足着台", sample_link: "" },
        { number_of_skill: "5.613", dificulty_of_skill: "F", name_of_skill: "後方かかえ込み宙返り1回ひねり", sample_link: "" },
        { number_of_skill: "5.713", dificulty_of_skill: "G", name_of_skill: "後方伸身宙返り1回ひねり", sample_link: "" },
        { number_of_skill: "5.314", dificulty_of_skill: "C", name_of_skill: "アウエルバッハ後方宙返り（かかえ込み、屈身、開脚伸身）", sample_link: "" },
        { number_of_skill: "5.514", dificulty_of_skill: "E", name_of_skill: "前とび1/2ひねり、後方宙返り（かかえ込み、屈身）", sample_link: "" }

    ];


    $scope.balance_beam_group_6_skills = [
        { number_of_skill: "6.101", dificulty_of_skill: "A", name_of_skill: "片足踏み切り、前方伸身宙返り1/2ひねり下り", sample_link: "" },
        { number_of_skill: "6.201", dificulty_of_skill: "B", name_of_skill: "片足踏み切り、前方伸身宙返り1回ひねり下り", sample_link: "" },
        { number_of_skill: "6.301", dificulty_of_skill: "C", name_of_skill: "片足踏み切り、前方伸身宙返り１1/2ひねり下り", sample_link: "" },
        { number_of_skill: "6.401", dificulty_of_skill: "D", name_of_skill: "片足踏み切り、側方開脚伸身宙返りから後方かかえ込み宙返り下り", sample_link: "" },
        { number_of_skill: "6.102", dificulty_of_skill: "A", name_of_skill: "前方宙返り（かかえ込み、屈身）、または1/2ひねり下り", sample_link: "" },
        { number_of_skill: "6.202", dificulty_of_skill: "B", name_of_skill: "・前方伸身宙返り、または1/2ひねり下り　・前方かかえ込み宙返り1回ひねり下り", sample_link: "" },
        { number_of_skill: "6.302", dificulty_of_skill: "C", name_of_skill: "前方伸身宙返り1回ひねり下り　または前方宙返り（かかえ込み、伸身）１1/2ひねり下り", sample_link: "" },
        { number_of_skill: "6.402", dificulty_of_skill: "D", name_of_skill: "前方伸身宙返り2回ひねり下り", sample_link: "" },
        { number_of_skill: "6.602", dificulty_of_skill: "F", name_of_skill: "前方かかえ込み2回宙返り下り", sample_link: "" },
        { number_of_skill: "6.203", dificulty_of_skill: "B", name_of_skill: "後ろとび1/2ひねり、前方宙返り（かかえ込み、屈身）下り　（アラビアン宙返り）", sample_link: "" },
        { number_of_skill: "6.303", dificulty_of_skill: "C", name_of_skill: "前とび1回ひねり、前方宙返り（かかえ込み、屈身、伸身）下り", sample_link: "" },
        { number_of_skill: "6.703", dificulty_of_skill: "G", name_of_skill: "後ろとび1/2ひねり、前方かかえ込み2回宙返り下り", sample_link: "" },
        { number_of_skill: "6.104", dificulty_of_skill: "A", name_of_skill: "後方宙返り（かかえ込み、屈身、伸身）、または1/2ひねり下り", sample_link: "" },
        { number_of_skill: "6.204", dificulty_of_skill: "B", name_of_skill: "後方宙返り（かかえ込み、伸身）1回ひねり下り", sample_link: "" },
        { number_of_skill: "6.304", dificulty_of_skill: "C", name_of_skill: "・後方宙返り（かかえ込み、伸身）１1/2回ひねり下り　・後方伸身宙返り下り2回ひねり下り", sample_link: "" },
        { number_of_skill: "6.404", dificulty_of_skill: "D", name_of_skill: "後方伸身宙返り２1/2ひねり下り", sample_link: "" },
        { number_of_skill: "6.604", dificulty_of_skill: "F", name_of_skill: "後方伸身宙返り3回ひねり下り", sample_link: "" },
        { number_of_skill: "6.405", dificulty_of_skill: "D", name_of_skill: "後方かかえ込み2回宙返り下り", sample_link: "" },
        { number_of_skill: "6.505", dificulty_of_skill: "E", name_of_skill: "後方屈身2回宙返り下り", sample_link: "" },
        { number_of_skill: "6.705", dificulty_of_skill: "G", name_of_skill: "後方2回宙返り、1回ひねり下り（かかえ込み、屈身）", sample_link: "" },
        { number_of_skill: "6.106", dificulty_of_skill: "A", name_of_skill: "台の横へ、アウエルバッハ宙返り（かかえ込み、屈身、伸身）、または1/2ひねり下り", sample_link: "" },
        { number_of_skill: "6.206", dificulty_of_skill: "B", name_of_skill: "台の横へ、アウエルバッハ宙返り（かかえ込み、伸身）1回ひねり下り", sample_link: "" },
        { number_of_skill: "6.306", dificulty_of_skill: "C", name_of_skill: "台の横へ、アウエルバッハ宙返り（かかえ込み、伸身）（１1/2、2回）ひねり下り", sample_link: "" },
        { number_of_skill: "6.406", dificulty_of_skill: "D", name_of_skill: "台の横へ、アウエルバッハ伸身宙返り２1/2ひねり下り", sample_link: "" },
        { number_of_skill: "6.606", dificulty_of_skill: "F", name_of_skill: "台の横へ、アウエルバッハ伸身宙返り3回ひねり下り", sample_link: "" },

        { number_of_skill: "6.207", dificulty_of_skill: "B", name_of_skill: "台の端へ、アウエルバッハかかえ込み宙返り下り", sample_link: "" },
        { number_of_skill: "6.307", dificulty_of_skill: "C", name_of_skill: "台の端へ、アウエルバッハ屈身宙返り下り、または台の端へ、アウエルバッハかかえ込み宙返り1回ひねり下り", sample_link: "" },

        { number_of_skill: "6.407", dificulty_of_skill: "D", name_of_skill: "台の端へ、アウエルバッハ閉脚伸身宙返り下り", sample_link: "" },

        { number_of_skill: "6.507", dificulty_of_skill: "E", name_of_skill: "台の端へ、アウエルバッハ伸身宙返り1回ひねり下り", sample_link: "" }

    ];


    $scope.womens_floor_group_1_skills = [
        { number_of_skill: "1.101", dificulty_of_skill: "A", name_of_skill: "片足踏み切り、前後開脚とび", sample_link: "https://www.youtube.com/watch?v=JRa57M5VFic" },
        { number_of_skill: "1.101", dificulty_of_skill: "A", name_of_skill: "片足踏み切り、前とび1/4ひねりから左右開脚屈伸（両足は水平より上）、または左右開脚、（片足、両足）着地", sample_link: "" },
        { number_of_skill: "1.201", dificulty_of_skill: "B", name_of_skill: "片足踏み切り、前後開脚とび1/2ひねり", sample_link: "" },
        { number_of_skill: "1.201", dificulty_of_skill: "B", name_of_skill: "カデット、片足着地", sample_link: "" },
        { number_of_skill: "1.301", dificulty_of_skill: "C", name_of_skill: "片足踏み切り、前後開脚とび１回ひねり", sample_link: "" },
        { number_of_skill: "1.301", dificulty_of_skill: "C", name_of_skill: "片足踏み切り、前後開脚とび1１回ひねり、開脚座", sample_link: "" },
        { number_of_skill: "1.301", dificulty_of_skill: "C", name_of_skill: "片足踏み切り、左右開脚とび１回ひねり", sample_link: "" },
        { number_of_skill: "1.401", dificulty_of_skill: "D", name_of_skill: "片足踏み切り、前後開脚とび１1/2ひねり", sample_link: "" },
        { number_of_skill: "1.102", dificulty_of_skill: "A", name_of_skill: "両足踏み切り、前後開脚とび or 鹿とび、または1/2ひねり", sample_link: "" },
        { number_of_skill: "1.202", dificulty_of_skill: "B", name_of_skill: "両足踏み切り、前後開脚とび1/2ひねり", sample_link: "" },
        { number_of_skill: "1.302", dificulty_of_skill: "C", name_of_skill: "両足踏み切り、前後開脚とび１回ひねり", sample_link: "" },
        { number_of_skill: "1.402", dificulty_of_skill: "D", name_of_skill: "両足踏み切り、前後開脚とび１1/2ひねり", sample_link: "" },
        { number_of_skill: "1.103", dificulty_of_skill: "A", name_of_skill: "かかえ込みとび、空中で前後開脚", sample_link: "" },
        { number_of_skill: "1.204", dificulty_of_skill: "B", name_of_skill: "前へ脚交差した前後開脚とび", sample_link: "" },
        { number_of_skill: "1.304", dificulty_of_skill: "C", name_of_skill: "前へ脚交差した前後開脚とび1/2ひねり", sample_link: "" },
        { number_of_skill: "1.404", dificulty_of_skill: "D", name_of_skill: "前へ脚交差した前後開脚とび１回ひねり", sample_link: "" },
        { number_of_skill: "1.205", dificulty_of_skill: "B", name_of_skill: "前へ脚交差し、1/4ひねりとび［ジョンソン］", sample_link: "" },
        { number_of_skill: "1.305", dificulty_of_skill: "C", name_of_skill: "ジョンソン1/2ひねり", sample_link: "" },
        { number_of_skill: "1.405", dificulty_of_skill: "D", name_of_skill: "ジョンソン１回ひねり", sample_link: "" },
        { number_of_skill: "1.106", dificulty_of_skill: "A", name_of_skill: "両足踏み切り、屈伸とび", sample_link: "" },
        { number_of_skill: "1.206", dificulty_of_skill: "B", name_of_skill: "両足踏み切り、屈伸とび１回ひねり", sample_link: "" },
        { number_of_skill: "1.306", dificulty_of_skill: "C", name_of_skill: "１回の（前方、後方）バタフライ", sample_link: "" },
        { number_of_skill: "1.107", dificulty_of_skill: "A", name_of_skill: "左右開脚屈伸とびまたは左右開脚とび", sample_link: "" },
        { number_of_skill: "1.207", dificulty_of_skill: "B", name_of_skill: "左右開脚屈伸とびまたは左右開脚とび1/2ひねり", sample_link: "" },
        { number_of_skill: "1.307", dificulty_of_skill: "C", name_of_skill: "左右開脚屈伸とびまたは左右開脚１回ひねり", sample_link: "" },
        { number_of_skill: "1.407", dificulty_of_skill: "D", name_of_skill: "左右開脚屈伸とびまたは左右開脚とび１1/2ひねり", sample_link: "" },
        { number_of_skill: "1.108", dificulty_of_skill: "A", name_of_skill: "左右開脚屈伸または左右開脚とびから正面支持臥または1/2ひねり", sample_link: "" },
        { number_of_skill: "1.108", dificulty_of_skill: "A", name_of_skill: "片足踏み切り、片脚を振り上げながら１回ひねり左右開脚、正面支持臥", sample_link: "" },
        { number_of_skill: "1.208", dificulty_of_skill: "B", name_of_skill: "左右開脚屈伸または左右開脚とび１回ひねり正面支持臥", sample_link: "" },
        { number_of_skill: "1.208", dificulty_of_skill: "B", name_of_skill: "片足踏み切り、水平で両脚を閉じた１1/2ひねりとび、正面支持臥", sample_link: "" },
        { number_of_skill: "1.109", dificulty_of_skill: "A", name_of_skill: "両脚踏み切り、シソンヌ片足着地", sample_link: "" },
        { number_of_skill: "1.109", dificulty_of_skill: "A", name_of_skill: "両脚踏み切り、輪とび", sample_link: "" },
        { number_of_skill: "1.109", dificulty_of_skill: "A", name_of_skill: "両脚踏み切り、前脚を曲げた輪とび", sample_link: "" },
        { number_of_skill: "1.209", dificulty_of_skill: "B", name_of_skill: "カデットから輪", sample_link: "" },
        { number_of_skill: "1.209", dificulty_of_skill: "B", name_of_skill: "両脚を頭につけるように頭部後屈し、アーチ姿勢に反ったジャンプ（羊とび）", sample_link: "" },
        { number_of_skill: "1.309", dificulty_of_skill: "C", name_of_skill: "前へ脚交差した前後開脚とびから輪", sample_link: "" },
        { number_of_skill: "1.309", dificulty_of_skill: "C", name_of_skill: "片足踏み切り、輪とび", sample_link: "" },
        { number_of_skill: "1.409", dificulty_of_skill: "D", name_of_skill: "片足踏み切り、または両足踏み切り、前後開脚とび１回ひねりから輪 or 前へ脚交差した前後開脚とびから輪、1/2ひねり", sample_link: "https://www.youtube.com/watch?v=BjCZkJn4mPc" },
        { number_of_skill: "1.110", dificulty_of_skill: "A", name_of_skill: "（片足、両足）踏み切り、伸身とび１回ひねり", sample_link: "" },
        { number_of_skill: "1.210", dificulty_of_skill: "B", name_of_skill: "（片足、両足）踏み切り、伸身とび２回ひねり", sample_link: "" },
        { number_of_skill: "1.111", dificulty_of_skill: "A", name_of_skill: "ねことび", sample_link: "" },
        { number_of_skill: "1.211", dificulty_of_skill: "B", name_of_skill: "ねことび１回ひねり", sample_link: "" },
        { number_of_skill: "1.311", dificulty_of_skill: "C", name_of_skill: "ねことび２回ひねり", sample_link: "" },
        { number_of_skill: "1.112", dificulty_of_skill: "A", name_of_skill: "片脚を前に振り上げた1/2ひねりとび、正面水平立ち", sample_link: "" },
        { number_of_skill: "1.312", dificulty_of_skill: "C", name_of_skill: "片足踏み切り、初めから終わりまで片脚を前に伸ばして水平より上に上げた１回ひねりとび", sample_link: "" },
        { number_of_skill: "1.113", dificulty_of_skill: "A", name_of_skill: "（片足、両足）踏み切り、かかえ込みとび", sample_link: "" },
        { number_of_skill: "1.213", dificulty_of_skill: "B", name_of_skill: "（片足、両足）踏み切り、かかえ込みとび１回ひねり", sample_link: "" },
        { number_of_skill: "1.313", dificulty_of_skill: "C", name_of_skill: "（片足、両足）踏み切り、かかえ込みとび２回ひねり、または正面支持臥", sample_link: "" },
        { number_of_skill: "1.114", dificulty_of_skill: "A", name_of_skill: "（片足、両足）踏み切り、ウルフとび", sample_link: "" },
        { number_of_skill: "1.114", dificulty_of_skill: "A", name_of_skill: "前へ脚交差したウルフとび", sample_link: "" },
        { number_of_skill: "1.214", dificulty_of_skill: "B", name_of_skill: "（片足、両足）踏み切り、ウルフとび１回ひねり", sample_link: "" },
        { number_of_skill: "1.214", dificulty_of_skill: "B", name_of_skill: "（片足、両足）踏み切り、ウルフとび１回ひねり、正面支持臥", sample_link: "" },
        { number_of_skill: "1.314", dificulty_of_skill: "D", name_of_skill: "（片足、両足）踏み切り、ウルフとび２回ひねり", sample_link: "" }
    ];

    $scope.womens_floor_group_2_skills = [
        { number_of_skill: "2.101", dificulty_of_skill: "A", name_of_skill: "片足立ち１回ターン", sample_link: "https://www.youtube.com/watch?v=zq9oB-k27rw" },
        { number_of_skill: "2.201", dificulty_of_skill: "B", name_of_skill: "片足立ち２回ターン", sample_link: "" },
        { number_of_skill: "2.301", dificulty_of_skill: "C", name_of_skill: "片足立ち３回ターン", sample_link: "" },
        { number_of_skill: "2.501", dificulty_of_skill: "E", name_of_skill: "片足立ち４回ターン", sample_link: "" },
        { number_of_skill: "2.202", dificulty_of_skill: "B", name_of_skill: "前へ上げた浮脚の踵をターンの初めから終わりまで水平に保つ１回ターン", sample_link: "" },
        { number_of_skill: "2.402", dificulty_of_skill: "D", name_of_skill: "前へ上げた浮脚の踵をターンの初めから終わりまで水平に保つ２回ターン", sample_link: "" },
        { number_of_skill: "2.203", dificulty_of_skill: "B", name_of_skill: "180度開脚した浮脚の上方をターンの初めから終わりまで手で保持した１回ターン", sample_link: "" },
        { number_of_skill: "2.403", dificulty_of_skill: "D", name_of_skill: "180度開脚した浮脚の上方をターンの初めから終わりまで手で保持した２回ターン", sample_link: "" },
        { number_of_skill: "2.503", dificulty_of_skill: "E", name_of_skill: "180度開脚した浮脚の上方をターンの初めから終わりまで手で保持した３回ターン", sample_link: "https://www.youtube.com/watch?v=PxS1NkmG09E" },
        { number_of_skill: "2.204", dificulty_of_skill: "B", name_of_skill: "後ろへ上げた浮脚の大腿部をターンの初めから終わりまで水平に保つ片足立ち１回ターン", sample_link: "" },
        { number_of_skill: "2.404", dificulty_of_skill: "D", name_of_skill: "後ろへ上げた浮脚の大腿部をターンの初めから終わりまで水平に保つ片足立ち２回ターン", sample_link: "" },
        { number_of_skill: "2.205", dificulty_of_skill: "B", name_of_skill: "後ろへ上げた浮脚をターンの初めから終わりまで手で上方に保持した１回ターン", sample_link: "" },
        { number_of_skill: "2.206", dificulty_of_skill: "B", name_of_skill: "浮脚や手が床に触れないで、片脚を後ろに振り上げた前後開脚立ち１回ターン（イリュージョン）", sample_link: "" },
        { number_of_skill: "2.306", dificulty_of_skill: "C", name_of_skill: "浮脚や手が床に触れないで、片脚を後ろに振り上げた前後開脚立ち２回ターン（イリュージョン）", sample_link: "" },
        { number_of_skill: "2.107", dificulty_of_skill: "A", name_of_skill: "片足上でしゃがみ立ち１回ターン", sample_link: "" },
        { number_of_skill: "2.207", dificulty_of_skill: "B", name_of_skill: "片足上でしゃがみ立ち２回ターン（浮脚は曲げる）", sample_link: "" },
        { number_of_skill: "2.407", dificulty_of_skill: "D", name_of_skill: "片足上でしゃがみ立ち３回ターン", sample_link: "" },
        { number_of_skill: "2.507", dificulty_of_skill: "E", name_of_skill: "片足上でしゃがみ立ち４回ターン", sample_link: "" },
        { number_of_skill: "2.208", dificulty_of_skill: "B", name_of_skill: "屈伸仰臥姿勢で２回以上のターン", sample_link: "" }
    ];

    $scope.womens_floor_group_3_skills = [
        { number_of_skill: "3.101", dificulty_of_skill: "A", name_of_skill: "（とび、引き上げ）倒立、または1/2～２回）ひねり", sample_link: "" },
        { number_of_skill: "3.102", dificulty_of_skill: "A", name_of_skill: "とび前転", sample_link: "" },
        { number_of_skill: "3.103", dificulty_of_skill: "A", name_of_skill: "後転倒立1/2～１1/2ひねり", sample_link: "" },
        { number_of_skill: "3.203", dificulty_of_skill: "B", name_of_skill: "後転倒立２回ひねり", sample_link: "" },
        { number_of_skill: "3.104", dificulty_of_skill: "A", name_of_skill: "（立位、前脚を伸ばした座）から、倒立局面で、１回ひねりをした後方倒立回転", sample_link: "" },
        { number_of_skill: "3.105", dificulty_of_skill: "A", name_of_skill: "（片足、両足踏み切り、前とび）前転とび", sample_link: "" },
        { number_of_skill: "3.105", dificulty_of_skill: "A", name_of_skill: "後ろとび1/2ひねり前転とび", sample_link: "" },
        { number_of_skill: "3.305", dificulty_of_skill: "C", name_of_skill: "前転とび１回ひねり、前とび１回ひねり前転とび", sample_link: "" },
        { number_of_skill: "3.106", dificulty_of_skill: "A", name_of_skill: "ロンダート", sample_link: "" },
        { number_of_skill: "3.107", dificulty_of_skill: "A", name_of_skill: "すべての後転とび or 片手後転とび or アウエルバッハ後転とび", sample_link: "" },
        { number_of_skill: "3.107", dificulty_of_skill: "A", name_of_skill: "後ろとび1/4ひねり、支持なし側方倒立回転からさらに1/4ひねり、正面支持臥", sample_link: "" },
        { number_of_skill: "3.207", dificulty_of_skill: "A", name_of_skill: "後転倒立1/2～１1/2ひねり", sample_link: "" },
        { number_of_skill: "3.203", dificulty_of_skill: "B", name_of_skill: "手支持の前に１回ひねりをした後転とび", sample_link: "" },
    ];





    $scope.womens_floor_group_4_skills = [
        { number_of_skill: "4.101", dificulty_of_skill: "A", name_of_skill: "前方宙返り（かかえ込み、屈伸）", sample_link: "" },
        { number_of_skill: "4.201", dificulty_of_skill: "B", name_of_skill: "前方かかえ込み宙返り（1/2、１回）ひねり or 前方屈伸宙返り1/2ひねり", sample_link: "" },
        { number_of_skill: "4.301", dificulty_of_skill: "C", name_of_skill: "前方かかえ込み宙返り１1/2ひねり", sample_link: "" },
        { number_of_skill: "4.501", dificulty_of_skill: "E", name_of_skill: "前方かかえ込み２回宙返り", sample_link: "" },
        { number_of_skill: "4.601", dificulty_of_skill: "F", name_of_skill: "前方かかえ込み２回宙返り1/2ひねり or 前方屈伸２回宙返り", sample_link: "https://www.youtube.com/watch?v=5EcmLUQ5Ueo&feature=youtu.be" },
        { number_of_skill: "4.202", dificulty_of_skill: "B", name_of_skill: "前方伸身宙返り、または1/2ひねり", sample_link: "" },
        { number_of_skill: "4.302", dificulty_of_skill: "C", name_of_skill: "前方伸身宙返り（１回、１1/2ひねり）ひねり or 前方屈伸宙返り1/2ひねり", sample_link: "" },
        { number_of_skill: "4.402", dificulty_of_skill: "D", name_of_skill: "前方伸身宙返り２回ひねり", sample_link: "" },
        { number_of_skill: "4.502", dificulty_of_skill: "E", name_of_skill: "前方伸身宙返り２1/2ひねり", sample_link: "" },
        { number_of_skill: "4.103", dificulty_of_skill: "A", name_of_skill: "片脚踏み切り、前方伸身宙返り", sample_link: "" },
        { number_of_skill: "4.104", dificulty_of_skill: "A", name_of_skill: "片足踏み切り、側方宙返り、または手支持のないロンダート", sample_link: "" },
        { number_of_skill: "4.105", dificulty_of_skill: "A", name_of_skill: "（片足、両足）踏み切り、側方宙返り（かかえ込み、屈伸）", sample_link: "" },
        { number_of_skill: "4.205", dificulty_of_skill: "B", name_of_skill: "後ろとび1/2ひねり前方宙返り（かかえ込み、屈伸、伸身）", sample_link: "" },
        { number_of_skill: "4.505", dificulty_of_skill: "E", name_of_skill: "後ろとび1/2ひねり前方かかえ込み２回宙返り、または1/2ひねり", sample_link: "" },
        { number_of_skill: "4.605", dificulty_of_skill: "F", name_of_skill: "後ろとび1/2ひねり前方屈伸２回宙返り", sample_link: "" },
        { number_of_skill: "4.705", dificulty_of_skill: "G", name_of_skill: "後ろとび1/2ひねり前方伸身２回宙返り", sample_link: "" }
    ];

    $scope.womens_floor_group_5_skills = [
        { number_of_skill: "5.101", dificulty_of_skill: "A", name_of_skill: "後方宙返り（かかえ込み、屈伸、伸身）", sample_link: "" },
        { number_of_skill: "5.201", dificulty_of_skill: "B", name_of_skill: "後方宙返り（かかえ込み、伸身）（1/2、１回）ひねり", sample_link: "" },
        { number_of_skill: "5.301", dificulty_of_skill: "C", name_of_skill: "後方伸身宙返り（１1/2、２回）ひねり", sample_link: "" },
        { number_of_skill: "5.401", dificulty_of_skill: "D", name_of_skill: "後方伸身宙返り２1/2ひねり", sample_link: "" },
        { number_of_skill: "5.501", dificulty_of_skill: "E", name_of_skill: "後方伸身宙返り３回ひねり", sample_link: "" },
        { number_of_skill: "5.601", dificulty_of_skill: "F", name_of_skill: "後方伸身宙返り３1/2ひねり", sample_link: "" },
        { number_of_skill: "5.402", dificulty_of_skill: "D", name_of_skill: "後方２回宙返り（かかえ込み、屈伸）", sample_link: "" },
        { number_of_skill: "5.502", dificulty_of_skill: "E", name_of_skill: "後方２回宙返り１回ひねり（かかえ込み、屈伸）", sample_link: "" },
        { number_of_skill: "5.802", dificulty_of_skill: "H", name_of_skill: "後方かかえ込み２回宙返り２回ひねり", sample_link: "" },
        { number_of_skill: "5.603", dificulty_of_skill: "F", name_of_skill: "後方伸身２回宙返り", sample_link: "" },
        { number_of_skill: "5.703", dificulty_of_skill: "G", name_of_skill: "後方伸身２回宙返り1/2ひねり", sample_link: "" },
        { number_of_skill: "5.803", dificulty_of_skill: "H", name_of_skill: "後方伸身２回宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "5.903", dificulty_of_skill: "I", name_of_skill: "後方伸身２回宙返り２回ひねり", sample_link: "" },
        { number_of_skill: "5.104", dificulty_of_skill: "A", name_of_skill: "後方テンポ宙返り", sample_link: "" },
        { number_of_skill: "5.204", dificulty_of_skill: "B", name_of_skill: "テンポ宙返り（1/2、１回）ひねり", sample_link: "" },
        { number_of_skill: "5.105", dificulty_of_skill: "A", name_of_skill: "アウエルバッハ宙返り（かかえ込み、屈伸、伸身）", sample_link: "" },
        { number_of_skill: "5.205", dificulty_of_skill: "B", name_of_skill: "アウエルバッハかかえ込み宙返り１回ひねり", sample_link: "" },
        { number_of_skill: "5.206", dificulty_of_skill: "B", name_of_skill: "前とび1/2ひねり後方宙返り（かかえ込み、屈伸）", sample_link: "" }
    ];

    $scope.scrollSmoothTo = function(elementOrName){var element = {'true':$('*[name='+elementOrName+'],'+'#'+elementOrName).eq(0),       'false':elementOrName}[typeof elementOrName === 'string'];if(!element){    return;}if(!element.offset){    element = $(element);}if(!element.offset){    return;}var top = Math.max(0, element.offset().top - ($(window).height()/8));$('html,body').animate(    {'scrollTop': top},    'slow');
    };
}]);






