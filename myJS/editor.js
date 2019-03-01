﻿document.addEventListener("DOMContentLoaded", function (event) {
    var editLayer = new ol.layer.Vector({
        source: new ol.source.Vector()
    });
    var projection = ol.proj.get('EPSG:3857');
    var map = new ol.Map({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.WMTS({
                    url: 'https://api.mapbox.com/v4/geops.db9390ee/' +
                        '{TileMatrix}/{TileCol}/{TileRow}.png?access_token=' +
                        'pk.eyJ1IjoiZ2VvcHMiLCJhIjoiVnlkeXdzayJ9.aGtp4w0C-0vZZae1HneLGg',
                    requestEncoding: 'REST',
                    crossOrigin: 'anonymous',
                    layer: '0',
                    format: 'image/png',
                    projection: projection,
                    tileGrid: new ol.tilegrid.WMTS({
                        origin: ol.extent.getTopLeft(projection.getExtent()),
                        resolutions: [156543.03392811998, 78271.51696419998,
                            39135.758481959994, 19567.879241008, 9783.939620504,
                            4891.969810252, 2445.984905126, 1222.9924525644,
                            611.4962262807999, 305.74811314039994, 152.87405657047998,
                            76.43702828523999, 38.21851414248, 19.109257071295996,
                            9.554628535647998, 4.777314267823999, 2.3886571339119995,
                            1.1943285669559998, 0.5971642834779999, 0.29858214174039993
                        ],
                        matrixIds: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                            '10', '11', '12', '13', '14', '15', '16', '17', '18', '19']
                    })
                })
            }),
            editLayer
        ],
        target: 'map',
        view: new ol.View({
            center: [3900000.7791264898, 4750000.284081122],
            zoom: 6
        })
    });
    var editor = new ole.Editor(map);

    var cad = new ole.control.CAD({
        source: editLayer.getSource()
    });
    var draw = new ole.control.Draw({
        source: editLayer.getSource()
    });
    var drawLine = new ole.control.Draw({
        type: 'LineString',
        source: editLayer.getSource()
    });
    var rotate = new ole.control.Rotate({
        source: editLayer.getSource()
    });
    var drawPoly = new ole.control.Draw({
        type: 'Polygon',
        source: editLayer.getSource()
    });
    var move = new ole.control.Move({
        type: 'Polygon',
        source: editLayer.getSource()
    });
    var modify = new ole.control.Modify({
        source: editLayer.getSource()
    });
    var deleteC = new ole.control.Delete({
        source: editLayer.getSource()
    });
    var buffer = new ole.control.Buffer({
        source: editLayer.getSource()
    });
    var union = new ole.control.Union({
        source: editLayer.getSource()
    });
    var intersection = new ole.control.Intersection({
        source: editLayer.getSource()
    });
    var difference = new ole.control.Difference({
        source: editLayer.getSource()
    });
    editor.addControls([cad, draw, drawLine, drawPoly, modify, move,
        rotate, deleteC, buffer, union, intersection, difference
    ]);
    var ls = new ole.service.LocalStorage();
    editor.addService(ls);

});