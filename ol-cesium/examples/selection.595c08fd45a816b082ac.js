!function(e){function t(t){for(var r,u,l=t[0],i=t[1],c=t[2],s=0,p=[];s<l.length;s++)u=l[s],o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={16:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=i;a.push([181,0]),n()}({181:function(e,t,n){e.exports=n(182)},182:function(e,t,n){"use strict";n.r(t);var r=n(24),o=n(30),a=n(22),u=n(27),l=n(21),i=n(100),c=n(37),f=n(49),s=n(25),p=n(17),d=n(26);const w=new p.a({source:new s.b}),b=new f.a({source:new c.a({format:new i.a,url:"data/geojson/countries.geojson"})}),y=new d.a({layers:[w,b],target:"map2d",view:new l.a({center:[0,0],zoom:2})});new u.a({map:y,target:"map3d"}).setEnabled(!0);const v=new a.b({fill:new o.a({color:[255,255,255,.6]}),stroke:new r.a({color:[0,153,255,1],width:3})});let g;y.on("click",e=>{g&&g.setStyle(null),(g=y.forEachFeatureAtPixel(e.pixel,(e,t)=>e))&&g.setStyle(v)}),t.default={}}});
//# sourceMappingURL=selection.595c08fd45a816b082ac.js.map