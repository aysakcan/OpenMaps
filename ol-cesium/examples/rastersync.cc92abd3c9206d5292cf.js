!function(e){function r(r){for(var t,s,i=r[0],u=r[1],c=r[2],p=0,d=[];p<i.length;p++)s=i[p],o[s]&&d.push(o[s][0]),o[s]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);for(l&&l(r);d.length;)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,r=0;r<a.length;r++){for(var n=a[r],t=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(t=!1)}t&&(a.splice(r--,1),e=s(s.s=n[0]))}return e}var t={},o={14:0},a=[];function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,r,n){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)s.d(n,t,function(r){return e[r]}.bind(null,t));return n},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=r,i=i.slice();for(var c=0;c<i.length;c++)r(i[c]);var l=u;a.push([177,0]),n()}({177:function(e,r,n){e.exports=n(178)},178:function(e,r,n){"use strict";n.r(r);var t=n(122),o=n(138),a=n(27),s=n(78),i=n(26),u=n(111),c=n(25),l=n(17),p=n(6);const d=new(n(21).a)({center:Object(p.k)([-112.2,36.06],"EPSG:4326","EPSG:3857"),zoom:11}),f=new l.a({source:new c.b}),y=new l.a({source:new u.a({url:"https://tileserver.maptiler.com/grandcanyon.json",crossOrigin:"anonymous"})}),w=new u.a({url:"https://api.tiles.mapbox.com/v3/mapbox.world-borders-light.json",crossOrigin:"anonymous"}),m=new l.a({source:w}),g=new i.a({layers:[f,new s.a({layers:[y,m]})],target:"map2d",view:d,renderer:"webgl"});Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MzAyNzUyYi0zY2QxLTQxZDItODRkOS1hNTA3MDU3ZTBiMDUiLCJpZCI6MjU0MSwiaWF0IjoxNTMzNjI1MTYwfQ.oHn1SUWJa12esu7XUUtEoc1BbEbuZpRocLetw6M6_AA";const b=new a.a({map:g,target:"map3d"});b.getCesiumScene().terrainProvider=Cesium.createWorldTerrain(),b.setEnabled(!0);const v=new t.a({url:"http://demo.boundlessgeo.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},serverType:"geoserver",crossOrigin:"anonymous"});let h=0;window.global={ol2d:g,removeLastLayer:function(){const e=g.getLayers().getLength();e>0&&g.getLayers().removeAt(e-1)},addStamen:function(){g.addLayer(new l.a({source:new o.a({opacity:.7,layer:"watercolor"})}))},addTileWMS:function(){g.addLayer(new l.a({opacity:.5,extent:[-13884991,2870341,-7455066,6338219],source:v}))},addTileJSON:function(){g.addLayer(new l.a({source:w}))},changeTileWMSParams:function(){v.updateParams({LAYERS:h++%2==0?"nurc:Img_Sample":"topp:states"})},layer0:f,layer1:y,layer2:m},r.default={}}});
//# sourceMappingURL=rastersync.cc92abd3c9206d5292cf.js.map