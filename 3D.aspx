<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Cesium Application</title>
    <link rel="icon" href="assets/logo.png">

    <link rel="stylesheet" href="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/css/ol.css" type="text/css">
    <link rel="stylesheet" href="ol-cesium/olcs.css" type="text/css">
    <script src="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/build/ol.js"></script>
    <script src="ol-cesium/olcesium.js"></script>
    <script src="ol-cesium/node_modules/@camptocamp/cesium/Build/CesiumUnminified/Cesium.js"></script>

    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous"></script>
    <script src="http:////cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>

    <script src="myJS/cesiumAll.js"></script>
    <link href="style/ol-ext.css" rel="stylesheet" />
    <script src="myJS/ol-ext.js"></script>

    <script src="myJS/geocoder/ol-geocoder-debug.js"></script>
    <link href="myJS/geocoder/ol-geocoder.css" rel="stylesheet" />
</head>
<body>

    <div class="ui top attached demo menu">
        <a class="item" id="openmenu">
            <i class="sidebar icon"></i>Menu
        </a>
        <a class="item" id="open2D">
            <i class="sidebar map outline"></i>2D Map
        </a>
         <div class="right menu">
            <a class="item" id="mouse-position">
                <i class="icon dot circle outline"></i>Koordinat:
            </a>
        </div>
    </div>

    <div id="popup" class="ol-popup">
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content"></div>
    </div>

    <div id="wpopup"></div>

    <div class="ui bottom attached segment">
        <div class="ui inverted labeled icon left inline vertical demo sidebar menu" style="width: 160px;">
            <a class="item">
                <i class="icon map marker alternate"></i>Bu 3D Haritadır!
            </a>
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
    </script>
    <style>
        body{
            background: #00b5ad0f;
            overflow: hidden;
        }
        .ol-overviewmap {
            right: .5em;
            top: .5em;
            bottom: auto;
            left: auto;
        }
        .ol-scale-line {
            right: 8px;
            left:auto;
        }
        .ol-zoom .ol-zoom-out {
            margin-top: 204px;
        }
    </style>
</body>
</html>
