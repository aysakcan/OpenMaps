document.addEventListener("DOMContentLoaded", function (event) {

    var scaleLineControl = new ol.control.ScaleLine();

    var view = new ol.View({
        center: [3900000, 4800000],
        zoom: 7,
        minZoom: 2
    });


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

    closer.onclick = function () {
        overlay.setPosition(undefined);
        closer.blur();
        return false;
    };

    var mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        // comment the following two lines to have the mouse position
        // be placed within the map.
        className: 'custom-mouse-position',
        target: document.getElementById('mouse-position'),
        undefinedHTML: '&nbsp;'
    });

    var overviewMapControl = new ol.control.OverviewMap({
        // see in overviewmap-custom.html to see the custom CSS used
        //special api key 'url': 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' +'?apikey=Your API key from http://www.thunderforest.com/docs/apikeys/ here'
        className: 'ol-overviewmap ol-custom-overviewmap',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                    'url': 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' + '?apikey=yourapikey',
                    wrapX: false,
                    noWrap: true
                })
            })
        ],
        collapseLabel: '\u00BB',
        label: '\u00AB',
        collapsed: false
    });

    var stamenMap = new ol.layer.Tile(
        {
            title: "Watercolor",
            source: new ol.source.Stamen({
                layer: 'watercolor'
            }),
            visible: false
        });
    var osmMap = new ol.layer.Tile({
        title: "OSM",
        source: new ol.source.OSM({
            wrapX: false,
            noWrap: true,
            baseLayer: true
        })
    });

    var styleCountries = new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.6)'
        }),
        stroke: new ol.style.Stroke({
            color: '#319FD3',
            width: 1
        }),
        text: new ol.style.Text({
            font: '12px Calibri,sans-serif',
            fill: new ol.style.Fill({
                color: '#000'
            }),
            stroke: new ol.style.Stroke({
                color: '#fff',
                width: 3
            })
        })
    });

    var vectorCountries = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: 'https://openlayers.org/en/v4.6.5/examples/data/geojson/countries.geojson',
            format: new ol.format.GeoJSON()
        }),
        style: function (feature) {
            styleCountries.getText().setText(feature.get('name'));
            return styleCountries;
        },
        title: 'Ülkeler',
        visible: false,
        preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGB7waPiI4Vyj0mtUr4rlgd3V9TwVrtoNUaCBsLz8dlCIKTkd9'
    });

    var map = new ol.Map({
        interactions: ol.interaction.defaults().extend([
            new ol.interaction.DragRotateAndZoom()
        ]),
        layers: [
            osmMap,
            vector,
            stamenMap,
            vectorCountries
        ],
        target: 'map',
        controls: ol.control.defaults({
            attributionOptions: {
                collapsible: false
            }
        }).extend([
            scaleLineControl, mousePositionControl,
            new ol.control.ZoomToExtent({
                extent: [
                    2800000.7791264898, 4750000.284081122,
                    5000000.9639063801, 4750000.986909639
                ]
            }), overviewMapControl, new ol.control.FullScreen()
        ]),
        overlays: [overlay],
        view: view
    });

    //note to screen on map
    var notification = new ol.control.Notification({});
    map.addControl(notification);
    //notification.show("Hoş Geldiniz");

    //layerswicher
    map.addControl(new ol.control.LayerSwitcherImage());
    $(window).on("load", function () { vector.changed(); });

    //modify selection
    var modify;
    var editSelect = document.getElementById('editButton');
    editSelect.onchange = function () {
        if (editSelect.value === 'None') {
            map.removeInteraction(modify);
        } else {
            modify = new ol.interaction.Modify({ source: source });
            map.addInteraction(modify);
        }
    };

    zoomslider = new ol.control.ZoomSlider();
    map.addControl(zoomslider);

    var geolocation = new ol.Geolocation({
        projection: view.getProjection()
    });


    function el(id) {
        return document.getElementById(id);
    }

    el('rotateInfo').addEventListener('click', function () {
        notification.show("Shift tuşu ve mouse hareketleri ile haritayı döndürebilirsiniz!");
    //alert("Shift tuşu ve mouse hareketleri ile haritayı döndürebilirsiniz!")
    });

    el('whereIam').addEventListener('click', function () {
        geolocation.setTracking(this.click);

        geolocation.on('change', function () {
            map.getView().animate({ center: [geolocation.getPosition()[0], geolocation.getPosition()[1]], zoom: 10 });
        });

        geolocation.on('error', function (error) {
            var info = document.getElementById('info');
            var myError = document.getElementById('myError');
            info.innerHTML = error.message;
            info.style.display = '';
            myError.style.display = '';
        });

        var accuracyFeature = new ol.Feature();
        geolocation.on('change:accuracyGeometry', function () {
            accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
        });

        var positionFeature = new ol.Feature();
        positionFeature.setStyle(new ol.style.Style({
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({
                    color: '#3399CC'
                }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 2
                })
            })
        }));

        geolocation.on('change:position', function () {
            var coordinates = geolocation.getPosition();
            positionFeature.setGeometry(coordinates ?
                new ol.geom.Point(coordinates) : null);
        });

        new ol.layer.Vector({
            map: map,
            source: new ol.source.Vector({
                features: [accuracyFeature, positionFeature]
            })
        });
    });

    /*el('editorOpen').addEventListener('click', function () {
        window.open("Ole.aspx");
    });*/

    el('pulseActive').addEventListener('click', function () {
        //alert("Zoom ölçeğini en küçüğe çekerek görebilirsiniz!")
        notification.show("Zoom ölçeğini en küçüğe çekerek görebilirsiniz!");

        function addRandomFeature() {
            var x = Math.random() * 360 - 180;
            var y = Math.random() * 180 - 90;
            var geom = new ol.geom.Point(ol.proj.transform([x, y],
                'EPSG:4326', 'EPSG:3857'));
            var feature = new ol.Feature(geom);
            source.addFeature(feature);
        }

        var duration = 1000;
        function flash(feature) {
            var start = new Date().getTime();
            var listenerKey;

            function animate(event) {
                var vectorContext = event.vectorContext;
                var frameState = event.frameState;
                var flashGeom = feature.getGeometry().clone();
                var elapsed = frameState.time - start;
                var elapsedRatio = elapsed / duration;
                // radius will be 5 at start and 30 at end.
                var radius = ol.easing.easeOut(elapsedRatio) * 25 + 5;
                var opacity = ol.easing.easeOut(1 - elapsedRatio);

                var style = new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: radius,
                        snapToPixel: false,
                        stroke: new ol.style.Stroke({
                            color: 'rgba(255, 0, 0, ' + opacity + ')',
                            width: 0.25 + opacity
                        })
                    })
                });

                vectorContext.setStyle(style);
                vectorContext.drawGeometry(flashGeom);
                if (elapsed > duration) {
                    ol.Observable.unByKey(listenerKey);
                    return;
                }
                // tell OpenLayers to continue postcompose animation
                map.render();
            }
            listenerKey = map.on('postcompose', animate);
        }

        source.on('addfeature', function (e) {
            flash(e.feature);
        });

        window.setInterval(addRandomFeature, 1000);
    });

    el('downloadPng').addEventListener('click', function () {
        map.once('postcompose', function (event) {
            var canvas = event.context.canvas;
            if (navigator.msSaveBlob) {
                navigator.msSaveBlob(canvas.msToBlob(), 'map.png');
            } else {
                canvas.toBlob(function (blob) {
                    saveAs(blob, 'map.png');
                });
            }
        });
        map.renderSync();
    });

    var typeSelect = document.getElementById('type');
    var typeSelectMeasure = document.getElementById('typeMeasure');

    //draw elements
    var draw;
    typeSelect.onchange = function () {
        map.removeInteraction(draw);
        var value = typeSelect.value;
        if (value === 'LineString' || value === 'Polygon' || value === 'Circle' || value === 'Point') {
            draw = new ol.interaction.Draw({
                source: source,
                type: typeSelect.value,
                freehand: true
            });
            map.addInteraction(draw);
        } else if (value !== 'None') {
            var geometryFunction;
            if (value === 'Square') {
                value = 'Circle';
                geometryFunction = ol.interaction.Draw.createRegularPolygon(4);
            } else if (value === 'Box') {
                value = 'Circle';
                geometryFunction = ol.interaction.Draw.createBox();
            } else if (value === 'Three') {
                value = 'Circle';
                geometryFunction = ol.interaction.Draw.createRegularPolygon(3);
            }
            draw = new ol.interaction.Draw({
                source: source,
                type: value,
                geometryFunction: geometryFunction
            });
            map.addInteraction(draw);
        }
    };

    //measure elements
    var measureTooltipElement;
    var helpTooltipElement;
    var sketch;
    var listener;
    typeSelectMeasure.onchange = function () {
        map.removeInteraction(draw);
        if (typeSelectMeasure.value === 'None') {
            $('#measureTable').hide();
            $('.ui.inverted.labeled.icon.right.inline.vertical.demo.sidebar.menu.visible').removeClass('visible');
        } else {
            var type = (typeSelectMeasure.value == 'area' ? 'Polygon' : 'LineString');
            draw = new ol.interaction.Draw({
                source: source,
                type: type,
                style: new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 255, 255, 0.2)'
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 0, 0, 0.5)',
                        lineDash: [10, 10],
                        width: 3
                    }),
                    image: new ol.style.Circle({
                        radius: 5,
                        stroke: new ol.style.Stroke({
                            color: 'rgba(0, 0, 0, 0.7)'
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 255, 255, 0.2)'
                        })
                    })
                })
            });
            map.addInteraction(draw);

            createMeasureTooltip();
            createHelpTooltip();

            var segment = 0;
            var line = 1;
            var all = 0;
            draw.on('drawstart',
                function (evt) {
                    // set sketch
                    sketch = evt.feature;
                    /*if (typeSelectMeasure.value === 'length') {
                        $('.ui.inverted.labeled.icon.right.inline.vertical.demo.sidebar.menu').addClass('visible');
                        $('#measureTable').show();
                        $('#measureTable tr:last').after('<tr><td>Çizgi ' + (line++) + '</td><td>km</td></tr>');
                        segment = 0;
                        all = 0;
                        $('#measureTable tr:last').after('<tr><td>Segment ' + (segment++) + '</td><td>0</td></tr>');
                    }*/
                    console.log("drawstart");
                    /** @type {ol.Coordinate|undefined} */
                    var tooltipCoord = evt.coordinate;

                    listener = sketch.getGeometry().on('change', function (evt) {
                        var geom = evt.target;
                        var output;
                        if (geom instanceof ol.geom.Polygon) {
                            output = formatArea(geom);
                            tooltipCoord = geom.getInteriorPoint().getCoordinates();
                        } else if (geom instanceof ol.geom.LineString) {
                            output = formatLength(geom);
                            tooltipCoord = geom.getLastCoordinate();
                        }
                        measureTooltipElement.innerHTML = output;
                        measureTooltip.setPosition(tooltipCoord);
                    });
                }, this);

            map.on('click', function (evt) {

                /** @type {string} */
                var helpMsg = '0.00 km';

                if (sketch) {
                    var geom = (sketch.getGeometry());
                    if (geom instanceof ol.geom.Polygon) {
                        helpMsg = "Alana Devam";
                    } else if (geom instanceof ol.geom.LineString) {
                        if (measureTooltipElement.innerHTML !== "") {
                            helpTooltipElement = createHelpTooltip(helpTooltipElement);
                            helpTooltipElement.innerHTML = measureTooltipElement.innerHTML;
                            helpTooltip.setPosition(evt.coordinate);
                            helpTooltipElement.classList.remove('hidden');
                        }
                    }
                }
            });

            draw.on('drawend',
                function () {
                    console.log("drawend");
                    measureTooltipElement.className = 'tooltip tooltip-static';
                    measureTooltip.setOffset([0, -7]);
                    // unset sketch
                    sketch = null;
                    // unset tooltip so that a new one can be created
                    measureTooltipElement = null;
                    createMeasureTooltip();
                    ol.Observable.unByKey(listener);
                }, this);

            var formatLength = function (line) {
                var length = line.getLength();
                var output;
                if (length > 100) {
                    output = (Math.round(length / 1000 * 100) / 100) +
                        ' ' + 'km';
                } else {
                    output = (Math.round(length * 100) / 100) +
                        ' ' + 'm';
                }
                return (Math.round(length / 1000 * 100) / 100);
            };

            var formatArea = function (polygon) {
                var area = polygon.getArea();
                var output;
                if (area > 10000) {
                    output = (Math.round(area / 1000000 * 100) / 100) +
                        ' ' + 'km<sup>2</sup>';
                } else {
                    output = (Math.round(area * 100) / 100) +
                        ' ' + 'm<sup>2</sup>';
                }
                return output;
            };
        }
    };

    function createMeasureTooltip() {
        if (measureTooltipElement) {
            measureTooltipElement.parentNode.removeChild(measureTooltipElement);
        }
        measureTooltipElement = document.createElement('div');
        measureTooltipElement.className = 'tooltip tooltip-measure';
        measureTooltip = new ol.Overlay({
            element: measureTooltipElement,
            offset: [0, -15],
            positioning: 'bottom-center'
        });
        map.addOverlay(measureTooltip);
    }

    function createHelpTooltip(helpTooltipElement) {

        helpTooltipElement = document.createElement('div');
        helpTooltipElement.className = 'tooltip tooltip-measure';
        helpTooltip = new ol.Overlay({
            element: helpTooltipElement,
            offset: [-50, -50],
            positioning: 'center-left'
        });
        map.addOverlay(helpTooltip);
        return helpTooltipElement;
    }
    //if open drawing, not show click coordinates
    /*map.on('singleclick', function (evt) {
        if (typeSelect.value === 'None' && typeSelectMeasure.value === 'None') {
            var coordinate = evt.coordinate;
            var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(
                coordinate, 'EPSG:3857', 'EPSG:4326'));

            content.innerHTML = '<p>Burayı gösterdiniz: </p><code>' + hdms +
                '</code>';
            overlay.setPosition(coordinate);
        }
    });*/
    var sourceWeather = new ol.source.Vector({ wrapX: false });
    var vectorWeather = new ol.layer.Vector({
        title: "Hava Durumu",
        source: sourceWeather,
        preview: 'http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/weather-icon.png'
    });
    map.addLayer(vectorWeather);

    var wElem = [];
    $('#checkWeather').click(
        function () {
            if ($('#checkWeather').is(':checked')) {
                //var url = 'https://api.openweathermap.org/data/2.5/weather?q=ankara,tr&appid=017802ed5b47c114d59d22a2b6e74cdd&lang=tr';
                //special api key from https://openweathermap.org/api
                var url = 'https://api.openweathermap.org/data/2.5/box/city?bbox=26.0433512713,35.8215347357,44.7939896991,42.1414848903,8&lang=tr&appid=yourapikey';

                $.getJSON(url, function (data) {

                    if (data.list != null && data.list.length > 0) {
                        for (var i = 0; i < data.list.length; i++) {
                            var temp = jsonToGeoJson(data.list[i]);
                            var image = drawIcons(temp);
                            wElem.push(image);
                            vectorWeather.getSource().addFeature(image);
                        }
                    } else {
                        var temp = jsonToGeoJson(data);
                        var image = drawIcons(temp);
                        map.addLayer(image);
                    }
                });

                var jsonToGeoJson = function (weatherItem) {
                    var feature = {
                        type: "Feature",
                        properties: {
                            city: weatherItem.name,
                            clouds: weatherItem.clouds.today,
                            weather: weatherItem.weather[0].description,
                            temperature: weatherItem.main.temp,
                            min: weatherItem.main.temp_min,
                            max: weatherItem.main.temp_max,
                            humidity: weatherItem.main.humidity,
                            pressure: weatherItem.main.pressure,
                            windSpeed: weatherItem.wind.speed,
                            windDegrees: weatherItem.wind.deg,
                            windGust: weatherItem.wind.gust,
                            icon: "http://openweathermap.org/img/w/"
                                + weatherItem.weather[0].icon + ".png",
                            coordinates: [weatherItem.coord.Lon, weatherItem.coord.Lat]
                            //coordinates: [weatherItem.coord.lon, weatherItem.coord.lat]

                        },
                        geometry: {
                            type: "Point",
                            coordinates: [weatherItem.coord.Lon, weatherItem.coord.Lat]
                        }
                    };

                    // returns object
                    return feature;
                };

                var drawIcons = function (weather) {
                    var point = ol.proj.fromLonLat([weather.properties.coordinates[0], weather.properties.coordinates[1]]);
                    var template = '<div style="text-align:center"><img src=' + weather.properties.icon + '>' + weather.properties.city + '<br>' + weather.properties.temperature + '°C<br>' + weather.properties.weather + '</div>';
                    var iconStyle = new ol.style.Style({
                        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
                            anchor: [0.4, 20],
                            anchorXUnits: 'fraction',
                            anchorYUnits: 'pixels',
                            opacity: 0.95,
                            src: weather.properties.icon
                        })),
                        stroke: new ol.style.Stroke({
                            width: 3,
                            color: [255, 0, 0, 1]
                        }),
                        fill: new ol.style.Fill({
                            color: [0, 0, 255, 0.6]
                        })
                    });
                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(point),
                        text: template
                                });
                    feature.setStyle(iconStyle);
                    return feature;
                };

                var element = document.getElementById('wpopup');

                var wpopup = new ol.Overlay({
                    element: element,
                    positioning: 'bottom-center',
                    stopEvent: false,
                    offset: [0, 0]
                });

                map.addOverlay(wpopup);

                map.on('pointermove', function (evt) {
                    var wfeature = map.forEachFeatureAtPixel(evt.pixel,
                        function (wfeature) {
                            return wfeature;
                        });
                    if (wfeature) {
                        var coordinates = wfeature.getGeometry().getCoordinates();
                        wpopup.setPosition(coordinates);
                        $(element).popover({
                            placement: 'center',
                            html: true,
                            content: wfeature.get('text')
                        });
                        $(element).popover('show');
                    } else {
                        $(element).popover('destroy');
                    }
                });
            }
            else {
                for (var i = 0; i < wElem.length; i++) {
                    vectorWeather.getSource().removeFeature(wElem[i]);
                }
				wElem = [];
            }
        }
    );
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
    map.addControl(geocoder);
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
    /*ol.hash(map);*/

    var closeIcon = 'assets/close.png';
    var deleteIcon = 'assets/delete.png';
    var startIcon = 'assets/start2.png';
    var finishIcon = 'assets/finish.png';
    var weatherIcon = 'assets/weather.png';
    var pinIcon = 'assets/pin_drop.png';
    var centerIcon = 'assets/center.png';
    var listIcon = 'assets/view_list.png';
    var buildIcon = 'assets/building.png';
    var HospitalsIcon = 'assets/Hospitals.png';
    var ATMsIcon = 'assets/ATMs.png';
    var PharmacysIcon = 'assets/Pharmacys.png';
    var AirportsIcon = 'assets/Airports.png';

    var startPoint = null;

    var contextmenuItems = [
        {
            text: 'Kapat',
            classname: 'bold',
            icon: closeIcon,
            callback: close
        },
        {
            text: 'Hava Durumu',
            classname: 'bold',
            icon: weatherIcon,
            callback: getWeather
        },
        {
            text: 'Ekranda Ara',
            classname: 'bold',
            icon: buildIcon,
            callback: findonScreen
        },
        {
            text: 'Rota Başlat',
            classname: 'bold',
            icon: startIcon,
            callback: start
        },
        {
            text: 'Rota Sonlandır',
            classname: 'bold',
            icon: finishIcon,
            callback: getRoute
        },
        {
            text: 'İşlemler',
            icon: listIcon,
            items: [
                {
                    text: 'Merkeze Al',
                    icon: centerIcon,
                    callback: center
                },
                {
                    text: 'Marker Ekle',
                    icon: pinIcon,
                    callback: marker
                }
            ]
        },
        '-' // this is a separator
    ];

    var contextmenu = new ContextMenu({
        width: 180,
        items: contextmenuItems
    });
    map.addControl(contextmenu);

    var removeMarkerItem = {
        text: 'Marker Sil',
        classname: 'marker',
        icon: deleteIcon,
        callback: removeMarker
    };

    var closeMenu = {
        text: 'Kapat',
        classname: 'bold',
        icon: closeIcon,
        callback: close
    };

    contextmenu.on('open', function (evt) {
        var feature = map.forEachFeatureAtPixel(evt.pixel, ft => ft);

        if (feature && feature.get('type') === 'removable') {
            contextmenu.clear();
            removeMarkerItem.data = { marker: feature };
            contextmenu.push(closeMenu);
            contextmenu.push(removeMarkerItem);
        } else {
            contextmenu.clear();
            contextmenu.extend(contextmenuItems);
            contextmenu.extend(contextmenu.getDefaultItems());
        }
    });
    map.on('singleclick', function (evt) {
        $('.ol-ctx-menu-container').addClass('ol-ctx-menu-hidden');
    });

    map.on('pointermove', function (e) {
        if (e.dragging) return;

        var pixel = map.getEventPixel(e.originalEvent);
        var hit = map.hasFeatureAtPixel(pixel);

        map.getTargetElement().style.cursor = hit ? 'pointer' : '';
    });

    function elastic(t) {
        return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
    }

    function center(obj) {
        view.animate({
            duration: 700,
            easing: elastic,
            center: obj.coordinate
        });
    }

    function close() {

    }

    function removeMarker(obj) {
        try {
            vector.getSource().removeFeature(obj.data.marker);
        }
        catch (err) {
            try {
                vectorWeather.getSource().removeFeature(obj.data.marker);
            }
            catch (err) {
                try {
                    vectorRoute.getSource().removeFeature(obj.data.marker);
                }
                catch (err) {
                    try {
                        vectorSearch.getSource().removeFeature(obj.data.marker);
                    }
                    catch (err) {
                        console.alert("Katman Bulunamadı: " + err.message);
                    }
                }
            }
        }
    }

    function marker(obj) {
        var coord4326 = ol.proj.transform(obj.coordinate, 'EPSG:3857', 'EPSG:4326'),
            template = 'Koordinatlar: ({x} | {y})',
            iconStyle = new ol.style.Style({
                image: new ol.style.Icon({ scale: .6, src: pinIcon }),
                text: new ol.style.Text({
                    offsetY: 25,
                    text: ol.coordinate.format(coord4326, template, 2),
                    font: '15px Open Sans,sans-serif',
                    fill: new ol.style.Fill({ color: '#111' }),
                    stroke: new ol.style.Stroke({ color: '#eee', width: 2 })
                })
            }),
            feature = new ol.Feature({
                type: 'removable',
                geometry: new ol.geom.Point(obj.coordinate)
            });

        feature.setStyle(iconStyle);
        vector.getSource().addFeature(feature);
    }

    function getWeather(obj) {
        var coord4326 = ol.proj.transform(obj.coordinate, 'EPSG:3857', 'EPSG:4326');
        //special api key from https://api.openweathermap.org
        var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + coord4326[1] + '&lon=' + coord4326[0] + '&appid=yourapikey&lang=tr';
        $.getJSON(url, function (data) {
            template = data.name + ' / ' + temperatureConverter(data.main.temp) + '°C / ' + data.weather[0].description,
                iconStyle = new ol.style.Style({
                    image: new ol.style.Icon({
                        scale: 1, src: "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
                    }),
                    text: new ol.style.Text({
                        text: template,
                        offsetY: 25,
                        font: '15px Open Sans,sans-serif',
                        fill: new ol.style.Fill({ color: '#111' }),
                        stroke: new ol.style.Stroke({ color: '#eee', width: 2 }),
                        backgroundFill: new ol.style.Fill({ color: '#fff' })
                    })
                }),
                feature = new ol.Feature({
                    type: 'removable',
                    geometry: new ol.geom.Point(obj.coordinate)
                });

            feature.setStyle(iconStyle);
            vectorWeather.getSource().addFeature(feature);
        });
    }

    function temperatureConverter(valNum) {
        valNum = parseFloat(valNum);
        return (valNum - 273.15).toFixed(2);
    }

    var sourceRoute = new ol.source.Vector({ wrapX: false });
    var vectorRoute = new ol.layer.Vector({
        title: "Rotalar",
        source: sourceRoute,
        preview: 'https://cdn0.iconfinder.com/data/icons/map-and-navigation-2/65/66-512.png'
    });
    map.addLayer(vectorRoute);

    function start(obj) {
        
        startPoint = ol.proj.transform(obj.coordinate, 'EPSG:3857', 'EPSG:4326');
        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon({ scale: .1, src: startIcon })
        }),
            feature = new ol.Feature({
                type: 'removable',
                geometry: new ol.geom.Point(obj.coordinate)
            });

        feature.setStyle(iconStyle);
        vectorRoute.getSource().addFeature(feature);
    }

    function msToTime(millisec) {
        var seconds = (millisec / 1000).toFixed(1);

        var minutes = (millisec / (1000 * 60)).toFixed(1);

        var hours = (millisec / (1000 * 60 * 60)).toFixed(1);

        var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

        if (seconds < 60) {
            return seconds + " Saniye";
        } else if (minutes < 60) {
            return minutes + " Dakika";
        } else if (hours < 24) {
            return hours + " Saat";
        } else {
            return days + " Gün"
        }
    }

    var routeVehicle = document.getElementById('typeRouteVehicle');

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRoute(obj) {
        
        var finish = ol.proj.transform(obj.coordinate, 'EPSG:3857', 'EPSG:4326');
        //draw lines
        //special api key from https://graphhopper.com/api/1/docs/
        if (startPoint !== null) {
            var ghRouting = new GraphHopper.Routing({
                key: "yourapikey",
                vehicle: routeVehicle.value,
                elevation: false
            });

            ghRouting.addPoint(new GHInput(startPoint[1], startPoint[0]));
            ghRouting.addPoint(new GHInput(finish[1], finish[0]));

            ghRouting.doRequest()
                .then(function (json) {
                    //console.log(json.paths[0].time);

                    $('#routeTimeArea').text("Tahmini Varış Süresi: " + msToTime(json.paths[0].time));
                    $('#routeMeasureArea').text("Uzaklık: " + (json.paths[0].distance / 1000).toFixed(2) + " Km");

                    var colorPath = getRandomColor();
                    var listSearch = $('#routeListArea')[0];
                    listSearch.innerHTML = "";

                    for (var tmp = 0; tmp < json.paths[0].instructions.length; tmp++) {
                        var inst = json.paths[0].instructions[tmp];
                        listSearch.innerHTML += " <li><a data-coor=" + ol.proj.transform(json.paths[0].points.coordinates[inst.interval[0]], 'EPSG:4326', 'EPSG:3857')+">" + inst.text + "</a></li>";
                    }

                    $('#screensearchpanel').hide();
                    $('#routepanel').show();
                    $('#warningpanel').hide();
                    $("a[data-coor]").on('click', function (event) {
                        map.setView(new ol.View({
                            center: [this.dataset['coor'].split(",")[0], this.dataset['coor'].split(",")[1]],
                            zoom: 18,
                            minZoom: 2
                        }));
                    });
                    $('.ui.right.sidebar')
                        .sidebar('toggle')
                        ;

                    for (var point = 0; point < json.paths[0].points.coordinates.length; point++) {
                        if (point === 0 || point === json.paths[0].points.coordinates.length - 1) {
                            var temp = json.paths[0].points.coordinates[point];
                            var iconStyle = new ol.style.Style({
                                image: new ol.style.Circle({
                                    radius: 10,
                                    snapToPixel: false,
                                    fill: new ol.style.Fill({ color: 'red' }),
                                    stroke: new ol.style.Stroke({ color: 'red', width: 1 })
                                })
                            }),
                                feature = new ol.Feature({
                                    //type: 'removable',
                                    geometry: new ol.geom.Point(ol.proj.transform(temp, 'EPSG:4326', 'EPSG:3857'))
                                });

                            feature.setStyle(iconStyle);
                            vectorRoute.getSource().addFeature(feature);
                        }/* else {
                            var temp = json.paths[0].points.coordinates[point];
                            var iconStyle = new ol.style.Style({
                                image: new ol.style.Circle({
                                    radius: 5,
                                    snapToPixel: false,
                                    fill: new ol.style.Fill({ color: 'green' }),
                                    stroke: new ol.style.Stroke({ color: 'green', width: 1 })
                                })
                            }),
                                feature = new ol.Feature({
                                    //type: 'removable',
                                    geometry: new ol.geom.Point(ol.proj.transform(temp, 'EPSG:4326', 'EPSG:3857'))
                                });

                            feature.setStyle(iconStyle);
                            vectorRoute.getSource().addFeature(feature);
                        }*/
                        if (point + 1 !== json.paths[0].points.coordinates.length) {
                            var temp = json.paths[0].points.coordinates[point];
                            var temp2 = json.paths[0].points.coordinates[point + 1];

                            var lienfeature = new ol.Feature({
                                geometry: new ol.geom.LineString([ol.proj.transform(temp, 'EPSG:4326', 'EPSG:3857'), ol.proj.transform(temp2, 'EPSG:4326', 'EPSG:3857')], 'XY'),
                                name: 'Line'
                            });
                            var lineStyle = new ol.style.Style({
                                fill: new ol.style.Fill({ color: colorPath }),
                                stroke: new ol.style.Stroke({
                                    color: colorPath,
                                    width: 5
                                })
                            });
                            lienfeature.setStyle(lineStyle);
                            vectorRoute.getSource().addFeature(lienfeature);
                        }
                    }
                    var iconStyle = new ol.style.Style({
                        image: new ol.style.Icon({ scale: .2, src: finishIcon })
                    }),
                        feature = new ol.Feature({
                            type: 'removable',
                            geometry: new ol.geom.Point(obj.coordinate)
                        });

                    feature.setStyle(iconStyle);
                    vectorRoute.getSource().addFeature(feature);

                    var coordinate = obj.coordinate;
                    content.innerHTML = '<p>Zaman : ' + msToTime(json.paths[0].time) + '</p>';
                    content.innerHTML += '<p>Mesafe : ' + (json.paths[0].distance / 1000).toFixed(2) + ' Km</p>';
                    overlay.setPosition(coordinate);

                    map.getView().fit(
                        ol.proj.transformExtent([json.paths[0].bbox[0] - 1, json.paths[0].bbox[1], json.paths[0].bbox[2] + 1, json.paths[0].bbox[3]], 'EPSG:4326', 'EPSG:3857'),
                        map.getSize()
                    );
                })
                .catch(function (err) {
                    console.error(err.message);
                    var info = document.getElementById('info');
                    var myError = document.getElementById('myError');
                    info.innerHTML = 'Kötü rota isteği :(';
                    info.style.display = '';
                    myError.style.display = '';
                });
            startPoint = null;
        }
    }

    var sourceSearch = new ol.source.Vector({ wrapX: false });
    var vectorSearch = new ol.layer.Vector({
        title: "Aramalar",
        source: sourceSearch,
        preview: 'https://cdn3.iconfinder.com/data/icons/maps-and-navigation-5/65/35-512.png'
    });
    map.addLayer(vectorSearch);

    var allPolygons = [];
    var allHospital = [];
    var allATM = [];
    var allPharmacy = [];
    var allAirport = [];
    var findLocation = document.getElementById('typeFindLocation');
    var clusters = null;

    function findonScreen() {
        for (var i = 0; i < allHospital.length; i++) {
            try {
                vectorSearch.getSource().removeFeature(allHospital[i]);
            }
            catch (err) {
                console.error("Feature Bulunamadı.");
            }
        }
        for (var i = 0; i < allATM.length; i++) {
            try {
                vectorSearch.getSource().removeFeature(allATM[i]);
            }
            catch (err) {
                console.error("Feature Bulunamadı.");
            }
        }
        for (var i = 0; i < allPharmacy.length; i++) {
            try {
                vectorSearch.getSource().removeFeature(allPharmacy[i]);
            }
            catch (err) {
                console.error("Feature Bulunamadı.");
            }
        }
        for (var i = 0; i < allAirport.length; i++) {
            try {
                vectorSearch.getSource().removeFeature(allAirport[i]);
            }
            catch (err) {
                console.error("Feature Bulunamadı.");
            }
        }
        for (var i = 0; i < allPolygons.length; i++) {
            try {
                vectorSearch.getSource().removeFeature(allPolygons[i]);
            }
            catch (err) {
                console.error("Feature Bulunamadı.");
            }
        }

        if (clusters !== null)
            map.removeLayer(clusters);
        allPolygons = [];
        allHospital = [];
        allATM = [];
        allPharmacy = [];
        allAirport = [];

        var mapExtent = map.getView().calculateExtent(map.getSize());
        mapExtent = ol.extent.applyTransform(mapExtent, ol.proj.getTransform("EPSG:3857", "EPSG:4326"));

        var url = 'https://nominatim.openstreetmap.org/?q=' + findLocation.value + '&bounded=1&limit=100&polygon_geojson=1&format=json&viewbox=' + mapExtent[0] + ',' + mapExtent[1] + ',' + mapExtent[2] + ',' + mapExtent[3];
        $.getJSON(url, function (data) {
            var logoIcon;
            if (findLocation.value === 'Hospitals')
                logoIcon = new ol.style.Icon({ scale: .1, src: HospitalsIcon });
            else if (findLocation.value === 'ATMs')
                logoIcon = new ol.style.Icon({ scale: .05, src: ATMsIcon });
            else if (findLocation.value === 'Pharmacys')
                logoIcon = new ol.style.Icon({ scale: .1, src: PharmacysIcon });
            else if (findLocation.value === 'Airports')
                logoIcon = new ol.style.Icon({ scale: .1, src: AirportsIcon });

            var listSearch = $('#findListArea')[0];
            listSearch.innerHTML = "";

            for (var tmp = 0; tmp < data.length; tmp++) {
                var coorArray = [];
                coorArray.push(parseFloat(data[tmp].lon));
                coorArray.push(parseFloat(data[tmp].lat));

                var template = data[tmp].display_name.split(",")[0];

                var iconStyle = new ol.style.Style({
                    image: logoIcon,
                    text: new ol.style.Text({
                        offsetY: 25,
                        //text: template,
                        font: '15px Open Sans,sans-serif',
                        fill: new ol.style.Fill({ color: '#111' }),
                        stroke: new ol.style.Stroke({ color: '#eee', width: 2 })
                    })
                });
                var feature = new ol.Feature({
                    type: 'removable',
                    text: template,
                    geometry: new ol.geom.Point(ol.proj.transform(coorArray, 'EPSG:4326', 'EPSG:3857'))
                });

                feature.setId(tmp);
                feature.setStyle(iconStyle);
                vectorSearch.getSource().addFeature(feature);

                listSearch.innerHTML += " <li><a data-coor='" + vectorSearch.getSource().getFeatureById(tmp).getGeometry().getCoordinates()+"'>" + template + "</a></li>";
              
                var coor = data[tmp].geojson.coordinates[0];
                var poly = [];
                for (var i = 0; i < coor.length-1; i++) {
                    poly.push([ol.proj.transform(coor[i+1], 'EPSG:4326', 'EPSG:3857'), ol.proj.transform(coor[i], 'EPSG:4326', 'EPSG:3857')]);
                }
                if (poly.length !== 0) {
                    var featurePoly = new ol.Feature({
                        type: 'removable',
                        geometry: new ol.geom.Polygon(poly)
                    });
                    var stylePoly = new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: 'blue',
                            width: 3
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(0, 0, 255, 0.1)'
                        })
                    });
                    featurePoly.setStyle(stylePoly);
                    vectorSearch.getSource().addFeature(featurePoly);

                    allPolygons.push(featurePoly);
                }
                if (findLocation.value === 'Hospitals') {
                    allHospital.push(feature);
                }
                else if (findLocation.value === 'ATMs') {
                    allATM.push(feature);
                }
                else if (findLocation.value === 'Pharmacys') {
                    allPharmacy.push(feature);
                }
                else if (findLocation.value === 'Airports') {
                    allAirport.push(feature);
                }
            }

            $('#screensearchpanel').show();
            $('#routepanel').hide();
            $('#warningpanel').hide();
            $("a[data-coor]").on('click', function (event) {
                map.setView(new ol.View({
                    center: [this.dataset['coor'].split(",")[0], this.dataset['coor'].split(",")[1]],
                    zoom: 18,
                    minZoom: 2
                }));
            });
            $('.ui.right.sidebar')
                .sidebar('toggle');

            if (findLocation.value == 'Hospitals') {
                var source = new ol.source.Vector({
                    features: allHospital
                });
            }
            else if (findLocation.value == 'ATMs') {
                var source = new ol.source.Vector({
                    features: allATM
                });
            }
            else if (findLocation.value == 'Pharmacys') {
                var source = new ol.source.Vector({
                    features: allPharmacy
                });
            }
            else if (findLocation.value == 'Airports') {
                var source = new ol.source.Vector({
                    features: allAirport
                });
            }

            var clusterSource = new ol.source.Cluster({
                distance: 4,
                source: source
            });

            var styleCache = {};
            clusters = new ol.layer.Vector({
                preview: 'https://www.clustercollaboration.eu/sites/default/files/01_Cluster-Cooperation2.jpg',
                title: 'Cluster',
                source: clusterSource,
                style: function (feature) {
                    var size = feature.get('features').length;
                    var style = styleCache[size];
                    var color = size > 5 ? "192,0,0" : size > 2 ? "255,128,0" : "0,128,0";
                    var radius = Math.max(8, Math.min(size * 0.75, 20));
                    if (!style) {
                        style = new ol.style.Style({
                            image: new ol.style.Circle({
                                radius: radius,
                                stroke: new ol.style.Stroke({
                                    color: "rgba(" + color + ",0.5)", 
                                }),
                                fill: new ol.style.Fill({
                                    color: "rgba(" + color + ",1)"
                                })
                            }),
                            text: new ol.style.Text({
                                text: size.toString(),
                                fill: new ol.style.Fill({
                                    color: '#fff'
                                })
                            })
                        });
                        styleCache[size] = style;
                    }
                    return style;
                }
            });
            map.addLayer(clusters);

            var element = document.getElementById('wpopup');

            var wpopup = new ol.Overlay({
                element: element,
                positioning: 'bottom-center',
                stopEvent: false,
                offset: [0, 0]
            });

            map.addOverlay(wpopup);

            map.on('pointermove', function (evt) {
                var wfeature = map.forEachFeatureAtPixel(evt.pixel,
                    function (wfeature) {
                        return wfeature;
                    });
                if (wfeature) {
                    var coordinates = wfeature.getGeometry().getCoordinates();
                    wpopup.setPosition(coordinates);
                    $(element).popover({
                        placement: 'center',
                        html: true,
                        content: wfeature.get('text')
                    });
                    $(element).popover('show');
                } else {
                    $(element).popover('destroy');
                }
            });

            map.on("click", function (e) {
                map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
                    if (layer.values_['title'] === 'Aramalar') {
                        var ext = feature.getGeometry().getExtent();
                        var center = ol.extent.getCenter(ext);
                        map.setView(new ol.View({
                            center: [center[0], center[1]],
                            zoom: 18
                        }));
                    }
                });
            });
        });
    }
    var undoInteraction = new ol.interaction.UndoRedo();
    map.addInteraction(undoInteraction);
    undoInteraction.on('undo', function (e) {});//custom function

    $('#drawUndo').on('click', function () {
        undoInteraction.undo();
    });
    $('#drawRedo').on('click', function () {
        undoInteraction.redo();
    });

    el('open3D').addEventListener('click', function () {
        window.open("3D.aspx");
    });

    //swipe map
    var ctrlSwipe = new ol.control.Swipe();
    ctrlSwipe.addLayer(stamenMap);//left
    ctrlSwipe.addLayer(osmMap, true);//right
    var ctrlSwipeBool = false;

    el('swipeMaps').addEventListener('click', function () {
        if (ctrlSwipeBool) {
            for (var i = 0; i < map.getLayers().array_.length; i++) {
                var temp = map.getLayers().array_[i];
                if (temp.values_.title === 'Watercolor')
                    temp.values_.visible = false;
            }
            map.removeControl(ctrlSwipe);
            ctrlSwipeBool = false;
        }
        else {
            for (var i = 0; i < map.getLayers().array_.length; i++) {
                var temp = map.getLayers().array_[i];
                if (temp.values_.title === 'Watercolor')
                    temp.values_.visible = true;
            }
            map.addControl(ctrlSwipe);
            ctrlSwipeBool = true;
        }
    });
    //overlayer as globe
    var overGlobe = new ol.control.Globe({
			    layers:[new ol.layer.Tile({	source: new ol.source.OSM()	})],
			    follow: true,
			    panAnimation: "elastic"
			});
    map.addControl(overGlobe);


    //amcharts settings
    var chart = new ol.Overlay({
        element: document.getElementById('chartdiv')
    });
    map.addOverlay(chart);
    drawPieChart(50, 50, 50, 50);

    el('drawChart').addEventListener('click', function () {
        drawPieChart(0, 0, 0, 0);
        setGif("loading.gif");
        var mapExtent = map.getView().calculateExtent(map.getSize());
        mapExtent = ol.extent.applyTransform(mapExtent, ol.proj.getTransform("EPSG:3857", "EPSG:4326"));

        var countAtm = 0, countHos = 0, countAir = 0, countPha = 0;
        var url = 'https://nominatim.openstreetmap.org/?q=ATMs&bounded=1&limit=100&polygon_geojson=1&format=json&viewbox=' + mapExtent[0] + ',' + mapExtent[1] + ',' + mapExtent[2] + ',' + mapExtent[3];
        $.getJSON(url, function (data) {
            countAtm = data.length;
        });
        url = 'https://nominatim.openstreetmap.org/?q=Hospitals&bounded=1&limit=100&polygon_geojson=1&format=json&viewbox=' + mapExtent[0] + ',' + mapExtent[1] + ',' + mapExtent[2] + ',' + mapExtent[3];
        $.getJSON(url, function (data) {
            countHos = data.length;
        });
        url = 'https://nominatim.openstreetmap.org/?q=Airports&bounded=1&limit=100&polygon_geojson=1&format=json&viewbox=' + mapExtent[0] + ',' + mapExtent[1] + ',' + mapExtent[2] + ',' + mapExtent[3];
        $.getJSON(url, function (data) {
            countAir = data.length;
        });
        url = 'https://nominatim.openstreetmap.org/?q=Pharmacys&bounded=1&limit=100&polygon_geojson=1&format=json&viewbox=' + mapExtent[0] + ',' + mapExtent[1] + ',' + mapExtent[2] + ',' + mapExtent[3];
        $.getJSON(url, function (data) {
            countPha = data.length;
        });
        setTimeout(function () {
            var image_x = document.getElementById('loadChart');
            image_x.parentNode.removeChild(image_x);
            console.log(countAtm + " " + countHos + " " + countAir + " " + countPha);
            drawPieChart(countAtm, countHos, countAir, countPha);
        }, 2000);
    });
    
});
setTimeout(function () {
    $('.ol-zoom-extent.ol-unselectable.ol-control button').html("TR");
    $('.ol-uncollapsible ul li').html("<img src='assets/logo.png' title='Yardım ve Destek' style='max-height:4em !important; width:4em;'>");
    $('.ol-uncollapsible ul li').on("click", function () {
        window.open("https://openlayers.org");
    })
}, 100);

function myFilterFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("findfilter");
    filter = input.value.toUpperCase();
    ul = document.getElementById("findListArea");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function drawPieChart(atm, hos, air, pha) {
    am4core.useTheme(am4themes_animated);
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.PieChart);
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "name";
    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);
    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template
      // change the cursor on hover to make it apparent the object can be interacted with
      .cursorOverStyle = [
        {
            "property": "cursor",
            "value": "pointer"
        }
      ];
    //radial
    //let rgm = new am4core.RadialGradientModifier();
    //rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, -0.5);
    //pieSeries.slices.template.fillModifier = rgm;
    //pieSeries.slices.template.strokeModifier = rgm;
    //pieSeries.slices.template.strokeOpacity = 0.4;
    //pieSeries.slices.template.strokeWidth = 0;

    // Create a base filter effect (as if it's not there) for the hover to return to
    var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;
    // Create hover state
    var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists
    // Slightly shift the shadow and make it more prominent on hover
    var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;
    // Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "bottom";
    chart.data = [{
        "name": "Hava Limanı",
        "value": air
    }, {
        "name": "Eczane",
        "value": pha
    }, {
        "name": "Hastane",
        "value": hos
    }, {
        "name": "ATM",
        "value": atm
    }];
    //label and tricks
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    //animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
}

function setGif(thisImg) {
    var img = document.createElement("IMG");
    img.src = "assets/" + thisImg;
    img.id = "loadChart";
    document.getElementById('chartdiv').appendChild(img);
}

function drawBodyChart(atm, hos, air, pha) {
    am4core.useTheme(am4themes_animated);
    // Themes end

    var iconPath = "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"



    var chart = am4core.create("chartdiv", am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    chart.data = [{
        "name": "Hava Limanı",
        "value": air
    }, {
        "name": "Eczane",
        "value": pha
    }, {
        "name": "Hastane",
        "value": hos
    }, {
        "name": "ATM",
        "value": atm
    }];

    var series = chart.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    series.alignLabels = false;

    series.maskSprite.path = iconPath;
    //series.ticks.template.locationX = 1;
    //series.ticks.template.locationY = 0.5;

    series.labelsContainer.width = 200;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "bottom";
    chart.legend.valign = "bottom";

    //label and ticks
    series.labels.template.disabled = true;
    series.ticks.template.disabled = true;
}

/*  //set topbar to map
    mainbar = new ol.control.Bar();
    map.addControl(mainbar);
    var nested = new ol.control.Bar({ toggleOne: true, group: true });
    mainbar.addControl(nested);
    var selectCtrl = new ol.control.Toggle(
        {
            html: '<i class="icon hand pointer outline"> Point</i>',
            className: "select",
            title: "Select",
            interaction: new ol.interaction.Select(),
            active: true,
            onToggle: function (active) {
                $("#info").text("Select is " + (active ? "activated" : "deactivated"));
            }
        });
    nested.addControl(selectCtrl);*/
