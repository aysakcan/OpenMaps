document.addEventListener("DOMContentLoaded", function (event) {
    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');

    var overlay = new ol.Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
            duration: 250
        }
    });

    var source = new ol.source.Vector({ wrapX: false });
    var vector = new ol.layer.Vector({
        title: "Çizimler",
        source: source,
        preview: "https://lh3.googleusercontent.com/vUEzH2qUPpzFGF5aRVm7LgoYizNVYeejH3GhAAEk3PIeN3MZJZofVBB2AHwS9ZuCExY"
    });

    var sourceSearch = new ol.source.Vector({ wrapX: false });
    var vectorSearch = new ol.layer.Vector({
        title: "Aramalar",
        source: sourceSearch,
        preview: 'https://cdn3.iconfinder.com/data/icons/maps-and-navigation-5/65/35-512.png'
    });
    var scaleLineControl = new ol.control.ScaleLine();

    var overviewMapControl = new ol.control.OverviewMap({
        // see in overviewmap-custom.html to see the custom CSS used
        //special api key 'url': 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' +'?apikey=Your API key from http://www.thunderforest.com/docs/apikeys/ here'
        className: 'ol-overviewmap ol-custom-overviewmap',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                    'url': 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' + '?apikey=yourapikey',
                    wrapX: false
                })
            })
        ],
        collapseLabel: '\u00BB',
        label: '\u00AB',
        collapsed: false
    });

    var mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        // comment the following two lines to have the mouse position
        // be placed within the map.
        className: 'custom-mouse-position',
        target: document.getElementById('mouse-position'),
        undefinedHTML: '&nbsp;'
    });

    var ol2d = new ol.Map({
        layers: [
            new ol.layer.Tile({
                title: "OSM",
                source: new ol.source.OSM()
            }),
            vector
        ],
        target: 'map',
        view: new ol.View({
            center: ol.proj.transform([35, 39], 'EPSG:4326', 'EPSG:3857'),
            zoom: 4
        }),
        controls: ol.control.defaults({
            attributionOptions: {
                collapsible: false
            }
        }).extend([
            scaleLineControl,
            new ol.control.ZoomToExtent({
                extent: [
                    2800000.7791264898, 4750000.284081122,
                    5000000.9639063801, 4750000.986909639
                ]
            }),
            mousePositionControl,
            overviewMapControl,
            new ol.control.FullScreen()
        ]),
    });

    var zoomslider = new ol.control.ZoomSlider();
    ol2d.addControl(zoomslider);

    ol2d.addControl(new ol.control.LayerSwitcherImage());
    $(window).on("load", function () { vector.changed(); });

    //special api key from https://developer.mapquest.com
    var geocoder = new Geocoder('nominatim', {
        provider: 'mapquest',
        key: 'yourapikey',
        lang: 'tr-TR', //, fr-FR
        placeholder: 'Ara',
        limit: 5,
        keepOpen: true,
        debug: false,
        autoComplete: true,
    });
    ol2d.addControl(geocoder);
    geocoder.on('addresschosen', function (evt) {
        var feature = evt.feature,
            coord = evt.coordinate,
            address = evt.address;
        // some popup solution
        content.innerHTML = '<p>' + address.formatted + '</p>';
        overlay.setPosition(coord);
        feature.set('type', 'removable');
        vectorSearch.getSource().addFeature(feature);
    });

    var ol3d = new olcs.OLCesium({
        map: ol2d,
    });
    ol3d.setEnabled(true);

    document.getElementById('open2D').addEventListener('click', function () {
        window.open("Default.aspx");
    });

});


    /*
     *   <input id="enable" type="button" value="Enable/disable" />
  var setEnabled = function() {ol3d.setEnabled(!ol3d.getEnabled())};
  document.getElementById('enable').addEventListener('click', setEnabled);
  */