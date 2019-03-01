<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>OpenMaps Application</title>
    <link rel="icon" href="assets/worldwide.png">
    <script src="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/build/ol.js"></script>
    <link rel="stylesheet" href="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/css/ol.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>
    <script src="http:////cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/js/bootstrap.min.js"></script>
    <script src="https://frogcat.github.io/ol-hash/ol-hash.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/graphhopper-js-api-client/dist/graphhopper-client.js"></script>

    <script src="https://www.amcharts.com/lib/4/core.js"></script>
    <script src="https://www.amcharts.com/lib/4/charts.js"></script>
    <script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>

    <script src="myJS/contextmenu/ol-contextmenu-debug.js"></script>
    <link href="myJS/contextmenu/ol-contextmenu.css" rel="stylesheet" />
    <script src="myJS/geocoder/ol-geocoder-debug.js"></script>
    <link href="myJS/geocoder/ol-geocoder.css" rel="stylesheet" />
    <script src="myJS/FileSaver.js"></script>
    <script src="myJS/allScripts.js"></script>
    <link rel="stylesheet" href="style/allCss.css">
    <link href="style/ol-ext.css" rel="stylesheet" />
    <script src="myJS/ol-ext.js"></script>

    <script src="myJS/sidebar.js"></script>
    <link href="style/sidebar.css" rel="stylesheet" />
</head>
<body>
    <div id="popup" class="ol-popup" style="display: none;">
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content"></div>
    </div>

    <div id="wpopup"></div>
    <div id="chartdiv"></div>

    <div class="ui top attached demo menu">
        <a class="item" id="openmenu">
            <i class="sidebar icon"></i>Menu
        </a>
        <a class="item" id="downloadPng">
            <i class="icon images outline"></i>Kaydet
                <!--<div class="floating ui blue label"><i style="margin: 0" class="icon download"></i></div>-->
        </a>
        <a class="item" id="pulseActive">
            <i class="icon crosshairs"></i>Pulse
                <!--<div class="floating ui olive label"><i style="margin: 0" class="icon heart"></i></div>-->
        </a>
        <a class="item" id="rotateInfo">
            <i class="icon sync"></i>Döndür
                <!--<div class="floating ui green label"><i style="margin: 0" class="icon arrow up"></i></div>-->
        </a>
        <a class="item" id="open3D">
            <i class="icon globe"></i>3D Map
                <!--<div class="floating ui green label"><i style="margin: 0" class="icon arrow up"></i></div>-->
        </a>
        <a class="item" id="swipeMaps">
            <i class="icon nintendo switch"></i>Swipe
                <!--<div class="floating ui green label"><i style="margin: 0" class="icon arrow up"></i></div>-->
        </a>
        <a class="item" id="drawChart">
            <i class="icon chart pie"></i>Grafik
                <!--<div class="floating ui green label"><i style="margin: 0" class="icon arrow up"></i></div>-->
        </a>
         <a class="item" id="drawUndo">
            <i class="icon undo"></i>Geri Al
                <!--<div class="floating ui green label"><i style="margin: 0" class="icon arrow up"></i></div>-->
        </a>
         <a class="item" id="drawRedo">
            <i class="icon redo"></i>İleri Al
                <!--<div class="floating ui green label"><i style="margin: 0" class="icon arrow up"></i></div>-->
        </a>
        <div class="right menu">
            <a class="item" id="mouse-position">
                <i class="icon dot circle outline"></i>Koordinat:
            </a>
            <a class="item" id="openrightmenu">
                <i class="icon list alternate outline"></i>Liste
            </a>
        </div>

    </div>

    <div id="myError" class="ui warning message" style="display: none">
        <i class="close icon"></i>
        <div class="header" id="info"></div>
    </div>

    <div class="ui bottom attached segment">
        <div class="ui inverted labeled icon left inline vertical demo sidebar menu" style="width: 160px;">
            <a class="item" id="whereIam">
                <i class="icon map marker alternate"></i>Nerdeyim?
                <!--<div class="floating ui red label"><i style="margin: 0" class="icon rss"></i></div>-->
            </a>
            <a class="item">
                <i class="icon edit outline"></i>
                <label>Çizim</label>
                <form class="ui form">
                    <select class="ui fluid dropdown" id="type">
                        <option value="None">Kapalı</option>
                        <option value="Point">Nokta</option>
                        <option value="LineString">Çizgi</option>
                        <option value="Polygon">Alan</option>
                        <option value="Circle">Çember</option>
                        <option value="Three">Üçgen</option>
                        <option value="Square">Kare</option>
                        <option value="Box">Kutu</option>
                    </select>
                </form>
                <!--<div class="floating ui orange label"><i style="margin: 0" class="icon paint brush"></i></div>-->
            </a>
            <a class="item">
                <i class="icon cut"></i>
                <label>Düzenle</label>
                <form class="ui form">
                    <select class="ui fluid dropdown" id="editButton">
                        <option value="None">Kapalı</option>
                        <option value="Edit">Açık</option>
                    </select>
                </form>
                <!--<div class="floating ui grey label"><i style="margin: 0" class="icon pencil alternate"></i></div>-->
            </a>
            <a class="item">
                <i class="icon crop"></i>
                <label>Ölçüm</label>
                <form class="ui form">
                    <select class="ui fluid dropdown" id="typeMeasure">
                        <option value="None">Kapalı</option>
                        <option value="length">Uzunluk</option>
                        <option value="area">Alan</option>
                    </select>
                </form>
                <!--<div class="floating ui purple label"><i style="margin: 0" class="icon calculator"></i></div>-->
            </a>
            <!--<a class="item" id="editorOpen">
                <i class="icon print"></i>Editör
                <div class="floating ui brown  label"><i style="margin: 0" class="icon eye dropper"></i></div>
            </a>-->
            <a class="item">
                <div class="ui toggle checkbox" style="margin-left: 10px;">
                    <input type="checkbox" id="checkWeather" name="newsletter">
                    <label style="color: white"></label>
                </div>
                <br />
                <br />
                <label style="color: white">Hava Durumu</label>
                <!--<div class="floating ui teal  label"><i style="margin: 0" class="icon sun"></i></div>-->
            </a>
            <a class="item">
                <i class="icon car"></i>
                <label>Rota Aracı</label>
                <form class="ui form">
                    <select class="ui fluid dropdown" id="typeRouteVehicle">
                        <option value="car">Araba</option>
                        <option value="foot">Ayak</option>
                        <option value="truck">Tır</option>
                        <option value="bike">Bisiklet</option>
                    </select>
                </form>
                <!--<div class="floating ui black label"><i style="margin: 0" class="icon rocket"></i></div>-->
            </a>
            <a class="item">
                <i class="icon building outline"></i>
                <label>Ekranda Ara</label>
                <form class="ui form">
                    <select class="ui fluid dropdown" id="typeFindLocation">
                        <option value="Hospitals">Hastane</option>
                        <option value="ATMs">ATM</option>
                        <option value="Pharmacys">Eczane</option>
                        <option value="Airports">Hava Limanı</option>
                    </select>
                </form>
                <!--<div class="floating ui black label"><i style="margin: 0" class="icon rocket"></i></div>-->
            </a>
            <a class="item" onclick="location.reload();">
                <i class="icon trash alternate outline"></i>Temizle
                <!--<div class="floating ui pink label"><i style="margin: 0" class="icon history"></i></div>-->
            </a>
        </div>

        <div class="ui inverted labeled icon right inline vertical demo sidebar menu" style="width: 300px;">
            <div class="item customList" id="screensearchpanel" style="display: none">
                <div class="item">
                    <i class="icon list alternate outline"></i>
                    Ekranda Arama Listesi
                </div>
                <div class="ui search">
                    <div class="ui icon input">
                        <input class="prompt" type="text" onkeyup="myFilterFunction()" id="findfilter" placeholder="Filtrele">
                        <i class="search icon"></i>
                    </div>
                    <div class="results"></div>
                </div>
                <ol class="ui list" id="findListArea" style="text-align: left"></ol>
            </div>
            <div class="item customList" id="routepanel" style="display: none">
                <div class="item">
                    <i class="icon car"></i>
                    Rota Güzergahı
                </div>
                <hr>
                <p id="routeTimeArea">Süre</p>
                <p id="routeMeasureArea">Uzaklık</p>
                <hr>
                <ol class="ui list" id="routeListArea" style="text-align: left"></ol>
            </div>
            <div class="item" id="warningpanel">
                <i class="icon eye slash outline"></i>
                Uyarı
                <p>Rota çizmeli veya ekranda arama yapmalısınız!</p>
                <table id="measureTable" style=" border: 1px solid white;width: 270px;display:none;">
                    <tr><td>Ölçüm Alanı</td><td>Uzunluk</td></tr>
                </table>
            </div>
        </div>

        <div class="pusher">
            <div class="ui basic segment">
                <div id="map" class="map"></div>
            </div>
        </div>
    </div>

    <script>
        $('.ui.left.sidebar').sidebar({
            context: $('.bottom.segment')
        }).sidebar('attach events', '#openmenu');
        $('.ui.right.sidebar').sidebar({
            context: $('.bottom.segment')
        }).sidebar('attach events', '#openrightmenu');
        //message hidden
        $('.message .close')
            .on('click', function () {
                $("#myError").css("display", "none");
            });

    </script>
</body>
</html>
