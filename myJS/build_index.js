(function (e, t) {
    'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define('ole', [], t) : 'object' == typeof exports ? exports.ole = t() : e.ole = t()
})('undefined' == typeof self ? this : self, function () {
    return function (e) {
        function t(a) {
            if (o[a]) return o[a].exports;
            var r = o[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        var o = {};
        return t.m = e, t.c = o, t.d = function (e, o, a) {
            t.o(e, o) || Object.defineProperty(e, o, {
                configurable: !1,
                enumerable: !0,
                get: a
            })
        }, t.n = function (e) {
            var o = e && e.__esModule ? function () {
                return e['default']
            } : function () {
                return e
            };
            return t.d(o, 'a', o), o
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = '', t(t.s = 4)
    }([function (e, t) {
        'use strict';

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function r(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var i = Object.assign || function (e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var a in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        },
            n = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            l = function e(t, o, a) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, o);
                if (r === void 0) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, o, a)
                }
                if ('value' in r) return r.value;
                var n = r.get;
                return void 0 === n ? void 0 : n.call(a)
            },
            M = function (e) {
                function t(e) {
                    o(this, t);
                    var r = document.createElement('button');
                    r.className = 'ole-control ' + e.className;
                    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                        element: r
                    }));
                    n.properties = i({}, e), n.className = e.className, n.title = e.title;
                    var l = document.createElement('img');
                    return l.src = e.image, r.appendChild(l), r.title = n.title, n.source = e.source || new ol.source.Vector({
                        features: e.features
                    }), n.editor = null, n.standalone = !0, r.addEventListener('click', n.onClick.bind(n)), n
                }
                return r(t, e), n(t, [{
                    key: 'getElement',
                    value: function () {
                        return this.element
                    }
                }, {
                    key: 'onClick',
                    value: function () {
                        this.active ? this.deactivate() : this.activate()
                    }
                }, {
                    key: 'setMap',
                    value: function (e) {
                        this.map = e, l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'setMap', this).call(this, this.map)
                    }
                }, {
                    key: 'setEditor',
                    value: function (e) {
                        this.editor = e
                    }
                }, {
                    key: 'activate',
                    value: function () {
                        this.active = !0, this.element.className += ' active', this.dispatchEvent(new CustomEvent('change:active', {
                            detail: {
                                control: this
                            }
                        })), this.openDialog()
                    }
                }, {
                    key: 'deactivate',
                    value: function (e) {
                        this.active = !1, this.element.classList.remove('active'), e || this.dispatchEvent(new CustomEvent('change:active', {
                            detail: {
                                control: this
                            }
                        })), this.closeDialog()
                    }
                }, {
                    key: 'getActive',
                    value: function () {
                        return this.active
                    }
                }, {
                    key: 'openDialog',
                    value: function () {
                        this.getDialogTemplate && (this.dialogDiv = document.createElement('div'), this.dialogDiv.innerHTML = '\n        <div class="ole-dialog">\n          ' + this.getDialogTemplate() + '\n        </div>\n      ', this.map.getTargetElement().appendChild(this.dialogDiv))
                    }
                }, {
                    key: 'closeDialog',
                    value: function () {
                        this.dialogDiv && (this.map.getTargetElement().removeChild(this.dialogDiv), this.dialogDiv = null)
                    }
                }, {
                    key: 'setProperties',
                    value: function (e, t) {
                        this.properties = i({}, this.properties, e), t || this.dispatchEvent(new CustomEvent('propertychange', {
                            detail: {
                                properties: this.properties,
                                control: this
                            }
                        }))
                    }
                }, {
                    key: 'getProperties',
                    value: function () {
                        return i({}, this.properties)
                    }
                }]), t
            }(ol.control.Control);
        t.a = M
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function i(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var n = o(0),
            l = o(31),
            M = o(2),
            c = o.n(M),
            u = Object.assign || function (e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var a in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            },
            p = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            y = function e(t, o, a) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, o);
                if (r === void 0) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, o, a)
                }
                if ('value' in r) return r.value;
                var n = r.get;
                return void 0 === n ? void 0 : n.call(a)
            },
            d = function (e) {
                function t(e) {
                    a(this, t);
                    var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, u({
                        title: 'TopoloyOp',
                        className: 'ole-control-topology',
                        image: c.a
                    }, e)));
                    return o.selectInteraction = new ol.interaction.Select({
                        toggleCondition: function () {
                            return !0
                        },
                        hitTolerance: e.hitTolerance || 10,
                        source: o.source,
                        multi: !0
                    }), o.selectInteraction.on('select', function () {
                        var e = o.selectInteraction.getFeatures();
                        try {
                            o.applyTopologyOperation(e.getArray())
                        } catch (t) {
                            l.a.logError('Unable to process features.'), e.clear()
                        }
                    }), o
                }
                return i(t, e), p(t, [{
                    key: 'applyTopologyOperation',
                    value: function (e) {
                        this.topologyFeatures = e
                    }
                }, {
                    key: 'activate',
                    value: function () {
                        this.map.addInteraction(this.selectInteraction), this.addedFeatures = [], y(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'activate', this).call(this)
                    }
                }, {
                    key: 'deactivate',
                    value: function (e) {
                        this.addedFeatures = [], this.map.removeInteraction(this.selectInteraction), y(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'deactivate', this).call(this, e)
                    }
                }]), t
            }(n.a);
        t.a = d
    }, function (e) {
        e.exports = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NzIuNTM4IiBoZWlnaHQ9IjU1Ni4wOTQiIHZpZXdCb3g9IjAgMCA1MzYuNzU1IDUyMS4zMzgiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTQ5MS45NzggMTA0Ljg1OEwzNzUuMDUzIDMyMi42MzNsLTE5Ny45OTUgMzMuNTI4LTUyLjExMiAxMjAuNTYyIDUwLjUwOC0xMjAuNzY1IDIwMC0zMHoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSI5MCIvPjxwYXRoIGQ9Ik00OTEuOTc4IDEwNC44NThMMzc1LjA1MyAzMjIuNjMzbC0xOTcuOTk1IDMzLjUyOC01Mi4xMTIgMTIwLjU2MiA1MC41MDgtMTIwLjc2NSAyMDAtMzB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNDAiLz48cGF0aCBkPSJNMzgxLjk3OCAxNC44NThMMjY1LjA1MyAyMzIuNjMzIDY3LjA1OCAyNjYuMTYgMTQuOTQ2IDM4Ni43MjNsNTAuNTA4LTEyMC43NjUgMjAwLTMweiIgc3Ryb2tlPSIjOGE4YThhIiBzdHJva2Utd2lkdGg9IjMwIi8+PC9nPjwvc3ZnPg=='
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function i(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var n = o(39),
            l = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            M = function e(t, o, a) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, o);
                if (r === void 0) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, o, a)
                }
                if ('value' in r) return r.value;
                var n = r.get;
                return void 0 === n ? void 0 : n.call(a)
            },
            c = function (e) {
                function t(e) {
                    a(this, t);
                    var o = e || {},
                        i = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, o));
                    return i.controls = o.controls, i.ignoreKeys = ['title', 'image', 'className'], i
                }
                return i(t, e), l(t, [{
                    key: 'activate',
                    value: function () {
                        var e = this;
                        M(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'activate', this).call(this), this.controls = this.controls || this.editor.getControls().getArray(), this.restoreProperties(), this.restoreActiveControls(), this.controls.forEach(function (t) {
                            t.addEventListener('propertychange', function (t) {
                                e.storeProperties(t.detail.control.getProperties().title, t.detail.properties)
                            }), t.addEventListener('change:active', function () {
                                e.storeActiveControls()
                            })
                        })
                    }
                }, {
                    key: 'deactivate',
                    value: function () {
                        M(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'deactivate', this).call(this), this.controls.forEach(function (e) {
                            e.removeEventListener('propertychange')
                        })
                    }
                }, {
                    key: 'storeProperties',
                    value: function (e, t) {
                        for (var o, a = {}, r = Object.keys(t), n = 0; n < r.length; n += 1) o = r[n], -1 !== this.ignoreKeys.indexOf(o) || t[o] instanceof Object || (a[o] = t[o]);
                        return a
                    }
                }, {
                    key: 'restoreProperties',
                    value: function () { }
                }, {
                    key: 'storeActiveControls',
                    value: function () {
                        var e = this.editor.getActiveControls();
                        return e.getArray().map(function (e) {
                            return e.getProperties().title
                        })
                    }
                }, {
                    key: 'restoreActiveControls',
                    value: function () { }
                }]), t
            }(n.a);
        t.a = c
    }, function (e, t, o) {
        e.exports = o(5)
    }, function (e, t, o) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var a = o(6),
            r = o(13),
            i = o(37);
        o.d(t, 'control', function () {
            return r
        }), o.d(t, 'service', function () {
            return i
        }), o.d(t, 'Editor', function () {
            return a.a
        })
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        var r = o(7),
            i = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            n = function () {
                function e(t, o) {
                    a(this, e), this.map = t, this.controls = new ol.Collection, this.activeControls = new ol.Collection, this.services = new ol.Collection, this.options = o || {}, this.editFeature = null, 'undefined' == typeof this.options.showToolbar && (this.options.showToolbar = !0), this.options.showToolbar && (this.toolbar = new r.a(this.map, this.controls))
                }
                return i(e, [{
                    key: 'addControl',
                    value: function (e) {
                        var t = this;
                        e.setMap(this.map), e.setEditor(this), e.addEventListener('change:active', function (o) {
                            t.activeStateChange(o.detail.control)
                        }), this.controls.push(e)
                    }
                }, {
                    key: 'addService',
                    value: function (e) {
                        e.setMap(this.map), e.setEditor(this), e.activate(), this.services.push(e)
                    }
                }, {
                    key: 'addControls',
                    value: function (e) {
                        for (var t = e instanceof ol.Collection ? e : new ol.Collection(e), o = 0; o < t.getLength(); o += 1) this.addControl(t.item(o))
                    }
                }, {
                    key: 'remove',
                    value: function () {
                        this.controls.forEach(function (e) {
                            e.deactivate(!0)
                        }), this.toolbar.destroy()
                    }
                }, {
                    key: 'getControls',
                    value: function () {
                        return this.controls
                    }
                }, {
                    key: 'getActiveControls',
                    value: function () {
                        return this.activeControls
                    }
                }, {
                    key: 'setEditFeature',
                    value: function (e) {
                        this.editFeature = e
                    }
                }, {
                    key: 'getEditFeature',
                    value: function () {
                        return this.editFeature
                    }
                }, {
                    key: 'activeStateChange',
                    value: function (e) {
                        if (e.getActive() && e.standalone)
                            for (var t = 0; t < this.controls.getLength(); t += 1) this.controls.item(t) !== e && this.controls.item(t).standalone && this.controls.item(t).deactivate();
                        var o = this.controls.getArray().filter(function (e) {
                            return e.getActive()
                        });
                        this.activeControls.clear(), this.activeControls.extend(o)
                    }
                }]), e
            }();
        t.a = n
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function i(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var n = o(8),
            l = o.n(n),
            M = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            c = function (e) {
                function t(e, o) {
                    a(this, t);
                    var i = document.createElement('div');
                    i.setAttribute('id', 'ole-toolbar');
                    var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                        element: i
                    }));
                    return n.controls = o, n.map = e, n.map.getTargetElement().appendChild(n.element), n.load(), n.controls.on('change:length', n.load, n), n
                }
                return i(t, e), M(t, [{
                    key: 'load',
                    value: function () {
                        for (var e, t = 0; t < this.controls.getLength(); t += 1) e = this.controls.item(t).getElement(), this.element.appendChild(e)
                    }
                }, {
                    key: 'destroy',
                    value: function () {
                        for (var e, t = 0; t < this.controls.getLength(); t += 1) e = this.controls.item(t).getElement(), this.element.removeChild(e)
                    }
                }]), t
            }(ol.control.Control);
        t.a = c
    }, function (e, t, o) {
        var a = o(9);
        'string' == typeof a && (a = [
            [e.i, a, '']
        ]);
        var r, i = {
            hmr: !0
        };
        i.transform = r, i.insertInto = void 0;
        o(11)(a, i);
        a.locals && (e.exports = a.locals), !1
    }, function (e, t, o) {
        t = e.exports = o(10)(!1), t.push([e.i, '#ole-toolbar {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n}\n\n#ole-toolbar button.ole-control {\n  background: #fafafa;\n  border: 0;\n  color: #999;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 36px;\n  height: 45px;\n  padding: 0 8px;\n  transition: all .3s ease-out;\n}\n\n#ole-toolbar button.ole-control:first-child {\n  border-radius: 4px 0 0 4px;\n}\n\n#ole-toolbar button.ole-control:last-child {\n  border-radius: 0 4px 4px 0;\n}\n\n#ole-toolbar button.ole-control:hover {\n  color: #5c5c5c;\n}\n\n#ole-toolbar button.ole-control:focus {\n  outline: 0;\n}\n\n#ole-toolbar button.ole-control.active {\n  box-shadow: 0 4px 4px 0 rgba(0,0,0,0.3);\n  color: #5c5c5c;\n  filter: brightness(90%);\n}\n\n/* buttons */\n#ole-toolbar button.ole-control {\n  padding: 5px;\n}\n\n#ole-toolbar button.ole-control img {\n  height: 35px;\n}\n\n\n/* dialog */\n.ole-dialog {\n  background: #fafafa;\n  border-radius: 4px;\n  right: 20px;\n  padding: 10px;\n  position: absolute;\n  text-align: left;\n  top: 75px;\n  width: 330px;\n  z-index: 2;\n}\n\n/* font */\n#ole-toolbar, .ole-dialog {\n  font-family: Arial;\n  font-size:  14px;\n}\n\n/* shadow */\n#ole-toolbar button.ole-control, .ole-dialog {\n  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2);\n}\n\n#width-input {\n  width: 50px;\n}\n', ''])
    }, function (e) {
        function t(e, t) {
            var a = e[1] || '',
                r = e[3];
            if (!r) return a;
            if (t && 'function' == typeof btoa) {
                var i = o(r),
                    n = r.sources.map(function (e) {
                        return '/*# sourceURL=' + r.sourceRoot + e + ' */'
                    });
                return [a].concat(n).concat([i]).join('\n')
            }
            return [a].join('\n')
        }

        function o(e) {
            var t = btoa(unescape(encodeURIComponent(JSON.stringify(e))));
            return '/*# ' + ('sourceMappingURL=data:application/json;charset=utf-8;base64,' + t) + ' */'
        }
        e.exports = function (e) {
            var o = [];
            return o.toString = function () {
                return this.map(function (o) {
                    var a = t(o, e);
                    return o[2] ? '@media ' + o[2] + '{' + a + '}' : a
                }).join('')
            }, o.i = function (e, t) {
                'string' == typeof e && (e = [
                    [null, e, '']
                ]);
                for (var a, r = {}, n = 0; n < this.length; n++) a = this[n][0], 'number' == typeof a && (r[a] = !0);
                for (n = 0; n < e.length; n++) {
                    var i = e[n];
                    'number' == typeof i[0] && r[i[0]] || (t && !i[2] ? i[2] = t : t && (i[2] = '(' + i[2] + ') and (' + t + ')'), o.push(i))
                }
            }, o
        }
    }, function (e, t, o) {
        function a(e, t) {
            for (var o = 0; o < e.length; o++) {
                var a = e[o],
                    r = s[a.id];
                if (r) {
                    r.refs++;
                    for (var i = 0; i < r.parts.length; i++) r.parts[i](a.parts[i]);
                    for (; i < a.parts.length; i++) r.parts.push(u(a.parts[i], t))
                } else {
                    for (var n = [], i = 0; i < a.parts.length; i++) n.push(u(a.parts[i], t));
                    s[a.id] = {
                        id: a.id,
                        refs: 1,
                        parts: n
                    }
                }
            }
        }

        function r(e, t) {
            for (var o = [], a = {}, r = 0; r < e.length; r++) {
                var i = e[r],
                    n = t.base ? i[0] + t.base : i[0],
                    l = i[1],
                    M = i[2],
                    c = i[3],
                    u = {
                        css: l,
                        media: M,
                        sourceMap: c
                    };
                a[n] ? a[n].parts.push(u) : o.push(a[n] = {
                    id: n,
                    parts: [u]
                })
            }
            return o
        }

        function i(e, t) {
            var o = g(e.insertInto);
            if (!o) throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');
            var a = T[T.length - 1];
            if ('top' === e.insertAt) a ? a.nextSibling ? o.insertBefore(t, a.nextSibling) : o.appendChild(t) : o.insertBefore(t, o.firstChild), T.push(t);
            else if ('bottom' === e.insertAt) o.appendChild(t);
            else if ('object' == typeof e.insertAt && e.insertAt.before) {
                var r = g(e.insertInto + ' ' + e.insertAt.before);
                o.insertBefore(t, r)
            } else throw new Error('[Style Loader]\n\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\n Must be \'top\', \'bottom\', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n')
        }

        function n(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = T.indexOf(e);
            0 <= t && T.splice(t, 1)
        }

        function l(e) {
            var t = document.createElement('style');
            return e.attrs.type = 'text/css', c(t, e.attrs), i(e, t), t
        }

        function M(e) {
            var t = document.createElement('link');
            return e.attrs.type = 'text/css', e.attrs.rel = 'stylesheet', c(t, e.attrs), i(e, t), t
        }

        function c(e, t) {
            Object.keys(t).forEach(function (o) {
                e.setAttribute(o, t[o])
            })
        }

        function u(e, t) {
            var o, a, r, i;
            if (t.transform && e.css)
                if (i = t.transform(e.css), i) e.css = i;
                else return function () { };
            if (t.singleton) {
                var c = L++;
                o = j || (j = l(t)), a = p.bind(null, o, c, !1), r = p.bind(null, o, c, !0)
            } else e.sourceMap && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && 'function' == typeof URL.revokeObjectURL && 'function' == typeof Blob && 'function' == typeof btoa ? (o = M(t), a = d.bind(null, o, t), r = function () {
                n(o), o.href && URL.revokeObjectURL(o.href)
            }) : (o = l(t), a = y.bind(null, o), r = function () {
                n(o)
            });
            return a(e),
                function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        a(e = t)
                    } else r()
                }
        }

        function p(e, t, o, a) {
            var r = o ? '' : a.css;
            if (e.styleSheet) e.styleSheet.cssText = m(t, r);
            else {
                var i = document.createTextNode(r),
                    n = e.childNodes;
                n[t] && e.removeChild(n[t]), n.length ? e.insertBefore(i, n[t]) : e.appendChild(i)
            }
        }

        function y(e, t) {
            var o = t.css,
                a = t.media;
            if (a && e.setAttribute('media', a), e.styleSheet) e.styleSheet.cssText = o;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(o))
            }
        }

        function d(e, t, o) {
            var a = o.css,
                r = o.sourceMap,
                i = t.convertToAbsoluteUrls === void 0 && r;
            (t.convertToAbsoluteUrls || i) && (a = D(a)), r && (a += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + ' */');
            var n = new Blob([a], {
                type: 'text/css'
            }),
                l = e.href;
            e.href = URL.createObjectURL(n), l && URL.revokeObjectURL(l)
        }
        var s = {},
            N = function (e) {
                var t;
                return function () {
                    return 'undefined' == typeof t && (t = e.apply(this, arguments)), t
                }
            }(function () {
                return window && document && document.all && !window.atob
            }),
            I = function (e) {
                return document.querySelector(e)
            },
            g = function () {
                var e = {};
                return function (t) {
                    if ('function' == typeof t) return t();
                    if ('undefined' == typeof e[t]) {
                        var o = I.call(this, t);
                        if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
                            o = o.contentDocument.head
                        } catch (t) {
                            o = null
                        }
                        e[t] = o
                    }
                    return e[t]
                }
            }(),
            j = null,
            L = 0,
            T = [],
            D = o(12);
        e.exports = function (e, t) {
            if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document) throw new Error('The style-loader cannot be used in a non-browser environment');
            t = t || {}, t.attrs = 'object' == typeof t.attrs ? t.attrs : {}, t.singleton || 'boolean' == typeof t.singleton || (t.singleton = N()), t.insertInto || (t.insertInto = 'head'), t.insertAt || (t.insertAt = 'bottom');
            var o = r(e, t);
            return a(o, t),
                function (e) {
                    for (var n = [], l = 0; l < o.length; l++) {
                        var i = o[l],
                            M = s[i.id];
                        M.refs-- , n.push(M)
                    }
                    if (e) {
                        var c = r(e, t);
                        a(c, t)
                    }
                    for (var M, l = 0; l < n.length; l++)
                        if (M = n[l], 0 === M.refs) {
                            for (var u = 0; u < M.parts.length; u++) M.parts[u]();
                            delete s[M.id]
                        }
                }
        };
        var m = function () {
            var e = [];
            return function (t, o) {
                return e[t] = o, e.filter(Boolean).join('\n')
            }
        }()
    }, function (e) {
        e.exports = function (e) {
            var t = 'undefined' != typeof window && window.location;
            if (!t) throw new Error('fixUrls requires window.location');
            if (!e || 'string' != typeof e) return e;
            var o = t.protocol + '//' + t.host,
                a = o + t.pathname.replace(/\/[^\/]*$/, '/'),
                r = e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                    var r = t.trim().replace(/^"(.*)"$/, function (e, t) {
                        return t
                    }).replace(/^'(.*)'$/, function (e, t) {
                        return t
                    });
                    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)) return e;
                    var i;
                    return i = 0 === r.indexOf('//') ? r : 0 === r.indexOf('/') ? o + r : a + r.replace(/^\.\//, ''), 'url(' + JSON.stringify(i) + ')'
                });
            return r
        }
    }, function (e, t, o) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var a = o(0),
            r = o(14),
            i = o(16),
            n = o(19),
            l = o(23),
            M = o(25),
            c = o(27),
            u = o(29),
            p = o(30),
            y = o(33),
            d = o(35);
        o.d(t, 'Control', function () {
            return a.a
        }), o.d(t, 'CAD', function () {
            return r.a
        }), o.d(t, 'Rotate', function () {
            return i.a
        }), o.d(t, 'Draw', function () {
            return n.a
        }), o.d(t, 'Move', function () {
            return l.a
        }), o.d(t, 'Modify', function () {
            return M.a
        }), o.d(t, 'Delete', function () {
            return c.a
        }), o.d(t, 'Buffer', function () {
            return u.a
        }), o.d(t, 'Union', function () {
            return p.a
        }), o.d(t, 'Intersection', function () {
            return y.a
        }), o.d(t, 'Difference', function () {
            return d.a
        })
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function i(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var n = o(0),
            l = o(15),
            M = o.n(l),
            c = Object.assign || function (e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var a in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            p = function e(t, o, a) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, o);
                if (r === void 0) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, o, a)
                }
                if ('value' in r) return r.value;
                var n = r.get;
                return void 0 === n ? void 0 : n.call(a)
            },
            y = function (e) {
                function t(e) {
                    a(this, t);
                    var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, c({
                        title: 'CAD control',
                        className: 'ole-control-cad',
                        image: M.a,
                        showSnapPoints: !0,
                        showSnapLines: !1,
                        snapPointDist: 10
                    }, e)));
                    return o.pointerInteraction = new ol.interaction.Pointer({
                        handleMoveEvent: o.onMove.bind(o)
                    }), o.snapLayer = new ol.layer.Vector({
                        source: new ol.source.Vector,
                        style: [new ol.style.Style({
                            image: new ol.style.RegularShape({
                                fill: new ol.style.Fill({
                                    color: '#E8841F'
                                }),
                                stroke: new ol.style.Stroke({
                                    width: 1,
                                    color: '#618496'
                                }),
                                points: 4,
                                radius: 5,
                                radius2: 0,
                                angle: Math.PI / 4
                            }),
                            stroke: new ol.style.Stroke({
                                width: 1,
                                lineDash: [5, 10],
                                color: '#618496'
                            })
                        })]
                    }), o.linesLayer = new ol.layer.Vector({
                        source: new ol.source.Vector,
                        style: [new ol.style.Style({
                            stroke: new ol.style.Stroke({
                                width: 1,
                                lineDash: [5, 10],
                                color: '#FF530D'
                            })
                        })]
                    }), o.snapTolerance = e.snapTolerance || 10, o.snapInteraction = new ol.interaction.Snap({
                        pixelTolerance: o.snapTolerance,
                        source: o.snapLayer.getSource()
                    }), o.standalone = !1, o
                }
                return i(t, e), u(t, [{
                    key: 'getDialogTemplate',
                    value: function () {
                        var e = this.properties.useMapUnits ? 'map units' : 'px';
                        return '\n      <div>\n        <input\n          id="aux-cb"\n          type="radio"\n          name="radioBtn"\n          ' + (this.properties.showSnapLines ? 'checked' : '') + '\n        >\n        <label>Show snap lines</label>\n      </div>\n      <div>\n        <input\n          id="dist-cb"\n          type="radio"\n          name="radioBtn"\n          ' + (this.properties.showSnapPoints ? 'checked' : '') + '\n        >\n        <label>Show snap points. Distance (' + e + '):</label>\n        <input type="text" id="width-input"\n          value="' + this.properties.snapPointDist + '">\n      </div>\n    '
                    }
                }, {
                    key: 'setMap',
                    value: function (e) {
                        var o = this;
                        p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'setMap', this).call(this, e), this.map.addLayer(this.snapLayer), this.map.addLayer(this.linesLayer), this.map.getInteractions().on('change:length', function (t) {
                            var e = t.target.getArray().indexOf(o.snapInteraction);
                            o.active && -1 < e && e !== t.target.getLength() - 1 && (o.deactivate(), o.activate())
                        })
                    }
                }, {
                    key: 'onMove',
                    value: function (e) {
                        var t = this.getClosestFeatures(e.coordinate, 5),
                            o = this.editor.getEditFeature();
                        o && -1 < t.indexOf(o) && t.splice(t.indexOf(o), 1), this.linesLayer.getSource().clear(), this.snapLayer.getSource().clear(), this.properties.showSnapLines && this.drawSnapLines(t, e.coordinate), this.properties.showSnapPoints && t.length && this.drawSnapPoints(e.coordinate, t[0])
                    }
                }, {
                    key: 'getClosestFeatures',
                    value: function (e, t) {
                        var o = [-Infinity, -Infinity, Infinity, Infinity],
                            a = {};
                        this.source.forEachFeatureInExtent(o, function (t) {
                            var o = t.getGeometry().getClosestPoint(e),
                                r = o[0] - e[0],
                                i = o[1] - e[1];
                            a[r * r + i * i] = t
                        });
                        var r = Object.keys(a),
                            n = [],
                            l = Math.min(r.length, t || 1);
                        r.sort(function (e, t) {
                            return e - t
                        });
                        for (var M = 0; M < l; M += 1) n.push(a[r[M]]);
                        return n
                    }
                }, {
                    key: 'drawSnapLines',
                    value: function (e, t) {
                        for (var o = [], a = 0; a < e.length; a += 1) {
                            var r = e[a].getGeometry(),
                                i = r.getCoordinates();
                            if (r instanceof ol.geom.Point) o.push(i);
                            else {
                                if (r instanceof ol.geom.LineString)
                                    for (var n = 0; n < i.length; n += 1) o.push(i[n]);
                                else if (r instanceof ol.geom.Polygon)
                                    for (var l = 0; l < i[0].length; l += 1) o.push(i[0][l]);
                                var M = ol.geom.Polygon.fromExtent(r.getExtent()).getCoordinates()[0];
                                o = o.concat(M)
                            }
                        }
                        for (var c = this.map.getPixelFromCoordinate(t), u = null, p = 0; p < o.length; p += 1) {
                            var y = this.snapTolerance,
                                d = this.map.getPixelFromCoordinate(o[p]),
                                s = c[0] > d[0] - this.snapTolerance / 2 && c[0] < d[0] + this.snapTolerance / 2,
                                N = c[1] > d[1] - this.snapTolerance / 2 && c[1] < d[1] + this.snapTolerance / 2;
                            if (s) {
                                var I = c[1];
                                I += c[1] < d[1] ? 2 * -y : 2 * y;
                                var j = this.map.getCoordinateFromPixel([d[0], I]);
                                u = [
                                    [o[p][0], j[1]], o[p]
                                ]
                            } else if (N) {
                                var L = c[0];
                                L += c[0] < d[0] ? 2 * -y : 2 * y;
                                var T = this.map.getCoordinateFromPixel([L, d[1]]);
                                u = [
                                    [T[0], o[p][1]], o[p]
                                ]
                            }
                            if (u) {
                                var D = new ol.geom.LineString(u);
                                this.snapLayer.getSource().addFeature(new ol.Feature(D))
                            }
                        }
                        var g = null,
                            m = null,
                            b = this.snapLayer.getSource().getFeatures();
                        if (b.length) {
                            b.forEach(function (e) {
                                var t = e.getGeometry().getCoordinates(),
                                    o = t[0][0],
                                    a = t[1][0],
                                    r = t[0][1],
                                    i = t[1][1];
                                o === a && (g = o), r === i && (m = r)
                            });
                            var z = [];
                            if (g && m) {
                                z.push(g), z.push(m), this.linesLayer.getSource().addFeatures(b), this.snapLayer.getSource().clear();
                                var S = new ol.geom.Point(z);
                                this.snapLayer.getSource().addFeature(new ol.Feature(S))
                            }
                        }
                    }
                }, {
                    key: 'drawSnapPoints',
                    value: function (e, t) {
                        var o = t.getGeometry().getClosestPoint(e),
                            a = this.map.getPixelFromCoordinate(o),
                            r = [];
                        if (this.properties.useMapUnits) r = [
                            [o[0] - this.properties.snapPointDist, o[1]],
                            [o[0] + this.properties.snapPointDist, o[1]],
                            [o[0], o[1] - this.properties.snapPointDist],
                            [o[0], o[1] + this.properties.snapPointDist]
                        ];
                        else
                            for (var i = [
                                [a[0] - this.properties.snapPointDist, a[1]],
                                [a[0] + this.properties.snapPointDist, a[1]],
                                [a[0], a[1] - this.properties.snapPointDist],
                                [a[0], a[1] + this.properties.snapPointDist]
                            ], n = 0; n < i.length; n += 1) r.push(this.map.getCoordinateFromPixel(i[n]));
                        var l = new ol.geom.MultiPoint(r);
                        this.snapLayer.getSource().addFeature(new ol.Feature(l))
                    }
                }, {
                    key: 'activate',
                    value: function () {
                        var e = this;
                        p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'activate', this).call(this), this.map.addInteraction(this.pointerInteraction), this.map.addInteraction(this.snapInteraction), document.getElementById('aux-cb').addEventListener('change', function (t) {
                            e.setProperties({
                                showSnapLines: t.target.checked,
                                showSnapPoints: !t.target.checked
                            })
                        }), document.getElementById('dist-cb').addEventListener('change', function (t) {
                            e.setProperties({
                                showSnapPoints: t.target.checked,
                                showSnapLines: !t.target.checked
                            })
                        }), document.getElementById('width-input').addEventListener('keyup', function (t) {
                            var o = parseFloat(t.target.value);
                            o && e.setProperties({
                                snapPointDist: o
                            })
                        })
                    }
                }, {
                    key: 'deactivate',
                    value: function (e) {
                        p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'deactivate', this).call(this, e), this.map.removeInteraction(this.pointerInteraction), this.map.removeInteraction(this.snapInteraction)
                    }
                }]), t
            }(n.a);
        t.a = y
    }, function (e) {
        e.exports = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI3IDEyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PGcgc2VyaWY6aWQ9IkxheWVyIDEiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0yMi4yMDQgMTE3LjI5M2w5NC45MjUtOTUuMDc1LjA3NCA5NS05NC45OTkuMDc1eiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjE4LjQiLz48cGF0aCBkPSJNNjEuNzQ5IDU2LjE4NGwxMC42MDcgMTAuNjA3bTMuNTM1LTI0Ljc0OWw3LjA3MSA3LjA3MU00Ny42MDcgNzAuMzI2bDcuMDcxIDcuMDcxbS0yMS4yMTMgNy4wNzFsNy4wNzEgNy4wNzFNOTAuMDMzIDI3LjlsNy4wNzEgNy4wNzFtNy4wNzEtMjEuMjEzbDcuMDcxIDcuMDcxTTE5LjMyMyA5OC42MWw3LjA3MSA3LjA3MiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjcuMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48L3N2Zz4='
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function i(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var n = o(0),
            l = o(17),
            M = o.n(l),
            c = o(18),
            u = o.n(c),
            p = Object.assign || function (e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var a in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            },
            y = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            d = function e(t, o, a) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, o);
                if (r === void 0) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, o, a)
                }
                if ('value' in r) return r.value;
                var n = r.get;
                return void 0 === n ? void 0 : n.call(a)
            },
            s = function (e) {
                function t(e) {
                    a(this, t);
                    var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, p({
                        title: 'Rotate',
                        className: 'icon-rotate',
                        image: M.a
                    }, e)));
                    return o.pointerInteraction = new ol.interaction.Pointer({
                        handleDownEvent: o.onDown.bind(o),
                        handleDragEvent: o.onDrag.bind(o),
                        handleUpEvent: o.onUp.bind(o)
                    }), o.rotateAttribute = e.rotateAttribute || 'ole_rotation', o.rotateLayer = new ol.layer.Vector({
                        source: new ol.source.Vector,
                        style: function (e) {
                            var t = e.get(o.rotateAttribute);
                            return [new ol.style.Style({
                                geometry: new ol.geom.Point(o.center),
                                image: new ol.style.Icon({
                                    rotation: t,
                                    src: u.a
                                })
                            })]
                        }
                    }), o
                }
                var o = Math.atan2;
                return i(t, e), y(t, [{
                    key: 'onDown',
                    value: function (e) {
                        var t = this;
                        return this.dragging = !1, this.feature = this.map.forEachFeatureAtPixel(e.pixel, function (e) {
                            return -1 < t.source.getFeatures().indexOf(e) ? e : null
                        }), this.center && this.feature && (this.feature.set(this.rotateAttribute, this.feature.get(this.rotateAttribute) || 0), this.initialRotation = o(e.coordinate[1] - this.center[1], e.coordinate[0] - this.center[0]) + this.feature.get(this.rotateAttribute)), !!this.feature
                    }
                }, {
                    key: 'onDrag',
                    value: function (e) {
                        if (this.dragging = !0, this.feature && this.center) {
                            var t = o(e.coordinate[1] - this.center[1], e.coordinate[0] - this.center[0]),
                                a = this.initialRotation - t,
                                r = a - this.feature.get(this.rotateAttribute);
                            this.feature.getGeometry().rotate(-r, this.center), this.rotateFeature.getGeometry().rotate(-r, this.center), this.feature.set(this.rotateAttribute, a), this.rotateFeature.set(this.rotateAttribute, a)
                        }
                    }
                }, {
                    key: 'onUp',
                    value: function (e) {
                        this.dragging || (this.feature ? (this.rotateFeature = this.feature, this.center = e.coordinate, this.rotateLayer.getSource().clear(), this.rotateLayer.getSource().addFeature(this.rotateFeature)) : this.rotateLayer.getSource().clear())
                    }
                }, {
                    key: 'activate',
                    value: function () {
                        this.map.addInteraction(this.pointerInteraction), this.map.addLayer(this.rotateLayer), d(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'activate', this).call(this)
                    }
                }, {
                    key: 'deactivate',
                    value: function (e) {
                        this.rotateLayer.getSource().clear(), this.map.removeLayer(this.rotateLayer), this.map.removeInteraction(this.pointerInteraction), d(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'deactivate', this).call(this, e)
                    }
                }]), t
            }(n.a);
        t.a = s
    }, function (e) {
        e.exports = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTE0IDExNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48ZyBzZXJpZjppZD0iTGF5ZXIgMSIgc3Ryb2tlPSIjMDAwIj48cGF0aCBkPSJNMTA3LjcwOSA2My4wNDNhNTAuOTEzIDUwLjkxMyAwIDAgMS0xNS44OTQgMzEuMjk4Yy0yMC42NDggMTkuMjUzLTUyLjk5NCAxOC4xMjItNzIuMjQ4LTIuNTI2Qy4zMTQgNzEuMTY3IDEuNDQ1IDM4LjgyMSAyMi4wOTMgMTkuNTY3IDQyLjc0MS4zMTQgNzUuMDg4IDEuNDQ1IDk0LjM0MSAyMi4wOTMiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMTEuNzQiLz48cGF0aCBkPSJNMTAzLjM4OCAxNS45M0w4Ni43NDkgMjguNzA4bDE2LjMwNSA0LjAxMS4zMzQtMTYuNzg5eiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2Utd2lkdGg9IjQuMTIiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTU2Ljc3MyA0MS4yMnYxNS43MzRoMTUuNzM0TTU2Ljc3MyA3Mi42ODhWNTYuOTU0SDQxLjAzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjIiLz48L2c+PC9zdmc+'
    }, function (e) {
        e.exports = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAuMDA1IiBoZWlnaHQ9IjExMC4wMDEiPjxwYXRoIG9wYWNpdHk9Ii4wMSIgZmlsbD0iaXZvcnkiIGQ9Ik0wIDBoMTEwdjExMEgweiIvPjxwYXRoIGQ9Ik0xMDcuMzc4IDYyLjM2NWE1MC45MTQgNTAuOTE0IDAgMCAxLTE1Ljg5NSAzMS4yOThjLTIwLjY0OCAxOS4yNTMtNTIuOTk0IDE4LjEyMi03Mi4yNDctMi41MjZDLS4wMTggNzAuNDkgMS4xMTMgMzguMTQzIDIxLjc2IDE4Ljg5IDQyLjQxLS4zNjQgNzQuNzU2Ljc2NyA5NC4wMSAyMS40MTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSI1LjI0NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTEwMy4wNTYgMTUuMjUzTDg2LjQxNyAyOC4wM2wxNi4zMDYgNC4wMXoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIuNTI0Ii8+PHBhdGggZD0iTTU2LjQ0IDQwLjU0MnYxNS43MzRoMTUuNzM1TTU2LjQ0IDcyLjAxVjU2LjI3N0g0MC43MDciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIzLjE5OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+'
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function i(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var n = o(0),
            l = o(20),
            M = o.n(l),
            c = o(21),
            u = o.n(c),
            p = o(22),
            y = o.n(p),
            d = Object.assign || function (e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var a in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            },
            s = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            N = function e(t, o, a) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, o);
                if (r === void 0) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, o, a)
                }
                if ('value' in r) return r.value;
                var n = r.get;
                return void 0 === n ? void 0 : n.call(a)
            },
            I = function (e) {
                function t(e) {
                    a(this, t);
                    var o = null;
                    switch (e.type) {
                        case 'Polygon':
                            o = u.a;
                            break;
                        case 'LineString':
                            o = y.a;
                            break;
                        default:
                            o = M.a;
                    }
                    var i = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, d({
                        title: 'Draw ' + (e.type || 'Point'),
                        className: 'ole-control-draw',
                        image: o
                    }, e)));
                    return i.drawInteraction = new ol.interaction.Draw({
                        type: e.type || 'Point',
                        features: e.features,
                        source: e.source
                    }), i
                }
                return i(t, e), s(t, [{
                    key: 'activate',
                    value: function () {
                        this.map.addInteraction(this.drawInteraction), N(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'activate', this).call(this)
                    }
                }, {
                    key: 'deactivate',
                    value: function (e) {
                        this.map.removeInteraction(this.drawInteraction), N(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'deactivate', this).call(this, e)
                    }
                }]), t
            }(n.a);
        t.a = I
    }, function (e) {
        e.exports = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NTQuNjgxIiBoZWlnaHQ9IjEyMG1tIiB2aWV3Qm94PSIwIDAgNDI2LjI2NCA0MjUuMTk3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzLjczNiAtMzU3LjI3NikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTUzMCA2NTcuMzYydjEyMG0tNjAtNjBoMTIwIiBzdHJva2Utd2lkdGg9IjMwIi8+PGNpcmNsZSBjeD0iMzExLjcyNCIgY3k9IjU0MC41NDEiIHI9Ijk2LjY4NyIgc3Ryb2tlLXdpZHRoPSIyOC41MSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg=='
    }, function (e) {
        e.exports = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NTQuNjgxIiBoZWlnaHQ9IjEyMG1tIiB2aWV3Qm94PSIwIDAgNDI2LjI2NCA0MjUuMTk3Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0zNjYuMjY0IDMwMC4wODd2MTIwIiBzdHJva2Utd2lkdGg9IjMwIi8+PHBhdGggZD0iTTE3Ni4yNjQgNDE1LjA4N0wzNDQuNTQ4IDIxMC42NCAyNzAuODEyIDEyLjQ1NyA3MC41NDkgNzYuNTE1IDEwIDIzNy43MTZsMTY2LjI2NSAxNzcuMzciIHN0cm9rZS13aWR0aD0iMjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zMDYuMjY0IDM2MC4wODdoMTIwIiBzdHJva2Utd2lkdGg9IjMwIi8+PC9nPjwvc3ZnPg=='
    }, function (e) {
        e.exports = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NTQuNjgxIiBoZWlnaHQ9IjEyMG1tIiB2aWV3Qm94PSIwIDAgNDI2LjI2NCA0MjUuMTk3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzLjczNiAtMzU3LjI3NikiPjxwYXRoIGQ9Ik01MzAgNjU3LjM2MnYxMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIzMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xODkuNDkyIDc1My4xMjdsNTIuMTEyLTEyMC41NjIgMTk3Ljk5NS0zMy41MjggMTE2LjkyNS0yMTcuNzc0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik00NzAgNzE3LjM2MmgxMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIzMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjE5MCIgY3k9Ijc1Mi4zNjIiIHI9IjI1Ii8+PGNpcmNsZSBjeD0iNTU1IiBjeT0iMzgyLjM2MiIgcj0iMjUiLz48L2c+PC9zdmc+'
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function i(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var n = o(0),
            l = o(24),
            M = o.n(l),
            c = Object.assign || function (e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var a in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            p = function e(t, o, a) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, o);
                if (r === void 0) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, o, a)
                }
                if ('value' in r) return r.value;
                var n = r.get;
                return void 0 === n ? void 0 : n.call(a)
            },
            y = function (e) {
                function t(e) {
                    a(this, t);
                    var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, c({
                        title: 'Move geometries',
                        className: 'icon-move',
                        image: M.a
                    }, e)));
                    return o.coordinate = null, o.cursor = 'pointer', o.previousCursor = null, o.feature = null, o.pointerInteraction = new ol.interaction.Pointer({
                        handleDownEvent: o.handleDownEvent.bind(o),
                        handleDragEvent: o.handleDragEvent.bind(o),
                        handleMoveEvent: o.handleMoveEvent.bind(o),
                        handleUpEvent: o.handleUpEvent.bind(o)
                    }), o
                }
                return i(t, e), u(t, [{
                    key: 'handleDownEvent',
                    value: function (e) {
                        var t = this,
                            o = e.map.forEachFeatureAtPixel(e.pixel, function (e) {
                                return -1 < t.source.getFeatures().indexOf(e) ? e : null
                            });
                        return !!o && (this.coordinate = o.getGeometry() instanceof ol.geom.Point ? ol.extent.getCenter(o.getGeometry().getExtent()) : e.coordinate, this.feature = o, this.editor.setEditFeature(o), !0)
                    }
                }, {
                    key: 'handleDragEvent',
                    value: function (e) {
                        var t = e.coordinate[0] - this.coordinate[0],
                            o = e.coordinate[1] - this.coordinate[1];
                        this.feature.getGeometry().translate(t, o), this.coordinate = e.coordinate
                    }
                }, {
                    key: 'handleMoveEvent',
                    value: function (e) {
                        if (this.cursor) {
                            var t = e.map.getTargetElement(),
                                o = e.map.forEachFeatureAtPixel(e.pixel, function (e) {
                                    return e
                                });
                            o ? t.style.cursor !== this.cursor && (this.previousCursor = t.style.cursor, t.style.cursor = this.cursor) : null !== this.previousCursor && (t.style.cursor = this.previousCursor, this.previousCursor = null)
                        }
                    }
                }, {
                    key: 'handleUpEvent',
                    value: function () {
                        return this.coordinate = null, this.feature = null, this.editor.setEditFeature(null), !1
                    }
                }, {
                    key: 'activate',
                    value: function () {
                        this.map.addInteraction(this.pointerInteraction), p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'activate', this).call(this)
                    }
                }, {
                    key: 'deactivate',
                    value: function (e) {
                        this.map.removeInteraction(this.pointerInteraction), p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'deactivate', this).call(this, e)
                    }
                }]), t
            }(n.a);
        t.a = y
    }, function (e) {
        e.exports = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ2IDE0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PGcgc2VyaWY6aWQ9IkxheWVyIDEiPjxwYXRoIGQ9Ik0zMi41ODUgNzguOTk5djE1LjE5NkwwIDcyLjQ3MmwzMi41ODUtMjEuNzIzdjE1LjE5Nmg3OS44MzVWNTAuNzQ5bDMyLjU4NSAyMS43MjMtMzIuNTg1IDIxLjcyM1Y3OC45OTlIMzIuNTg1eiIvPjxwYXRoIGQ9Ik02NS45OCAzMi41ODVINTAuNjg4TDcyLjQxMSAwbDIxLjcyNCAzMi41ODVINzguODQydjc5LjgzNWgxNS4yOTNsLTIxLjcyNCAzMi41ODUtMjEuNzIzLTMyLjU4NUg2NS45OFYzMi41ODV6Ii8+PGNpcmNsZSBjeD0iNzIuNTIzIiBjeT0iNzIuNDcyIiByPSIzMS45ODUiIGZpbGw9IiNmZmYiLz48Y2lyY2xlIGN4PSI3Mi41MjMiIGN5PSI3Mi40NzIiIHI9IjE3LjQ0NyIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjkuMyIvPjwvZz48L3N2Zz4='
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function i(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var n = o(0),
            l = o(26),
            M = o.n(l),
            c = Object.assign || function (e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var a in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            p = function e(t, o, a) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, o);
                if (r === void 0) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, o, a)
                }
                if ('value' in r) return r.value;
                var n = r.get;
                return void 0 === n ? void 0 : n.call(a)
            },
            y = function (e) {
                function t(e) {
                    a(this, t);
                    var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, c({
                        title: 'Modify geometry',
                        className: 'ole-control-modify',
                        image: M.a
                    }, e)));
                    return o.selectInteraction = new ol.interaction.Select({
                        source: o.source,
                        features: o.features
                    }), o.modifyInteraction = new ol.interaction.Modify({
                        features: o.selectInteraction.getFeatures()
                    }), o
                }
                return i(t, e), u(t, [{
                    key: 'activate',
                    value: function () {
                        this.map.addInteraction(this.selectInteraction), this.map.addInteraction(this.modifyInteraction), p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'activate', this).call(this)
                    }
                }, {
                    key: 'deactivate',
                    value: function (e) {
                        this.map.removeInteraction(this.selectInteraction), this.map.removeInteraction(this.modifyInteraction), p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'deactivate', this).call(this, e)
                    }
                }]), t
            }(n.a);
        t.a = y
    }, function (e) {
        e.exports = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NTQuNjgxIiBoZWlnaHQ9IjEyMG1tIiB2aWV3Qm94PSIwIDAgNDI2LjI2NCA0MjUuMTk3Ij48cGF0aCBkPSJNMTg0LjEyIDQwNC4zNzJMMzIwLjkwOCA5Ny42NjdsLTUwLjA5NS04NS4yMUw3MC41NDkgNzYuNTE1IDEwIDIzNy43MTZsMTc0LjEyMiAxNjYuNjU2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIHN0eWxlPSJsaW5lLWhlaWdodDpub3JtYWw7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpBY3F1YWludGFuY2U7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC10cmFuc2Zvcm06bm9uZTtibG9jay1wcm9ncmVzc2lvbjp0YjttYXJrZXI6bm9uZSIgZD0iTTMwNS4yMjQgMjAyLjQ1N2MtLjA0NiAyLjk0My0uMDYgNS44ODMtLjA4MiA4LjgyOGwtLjAxNiAxLjIzOC0xLjIzOC4wNDljLTIuOTM3LjA5Ni01Ljg4OC4xMy04Ljg0NC4xNDYtLjE2IDI5LjkwNS0uMDcyIDU5Ljc5Ny0uMDgyIDg5LjY5NnYxLjI4NmwtMS4yODYuMDE3Yy0yLjQ4Mi4wMjYtNC45OC4wNDktNy40NzYuMTE0bC0xLjM1Mi4wMzIuMDE2LTEuMzUyYy4wNTEtMi45MjIuMDMtNS44NDEtLjAzMi04Ljc0Ni0xMC4xNDQtLjA4NS0yMC4yOTgtLjEzNy0zMC40NDIuMDMzLjAxMyAxMC4xMDQtLjAyIDIwLjIwNiAwIDMwLjMxIDIuOTQuMDU3IDUuOTE2LjE5NSA4Ljg5My0uMDE2bDEuNjI5LS4xMTQtLjI0NCAxLjYxM2MtLjQyNiAyLjkxOC0uMTQyIDUuODctLjEzIDguNzk1IDIuODA2LjE0NyA1LjYzMi4xNzUgOC40NjkuMThoMS4yMDVsLjA5OCAxLjIwNGMuNDcgNi4yNDcuMjM4IDEyLjUyLjM0MiAxOC43OTYgMi45MTUuMTIgNS44NS4xNjcgOC43NzkuMTk2bDEuMjcuMDE2LjAxNyAxLjI3Yy4wNDcgNi4yNjcuMDMyIDEyLjUzLjEzIDE4Ljc5NiAyLjk0Mi4wNDcgNS45MDUuMTk2IDguODc3LjAxN2wxLjQ5OC0uMDgyLS4xMTQgMS40ODJjLS40OTUgNi4yNjQtLjA2NiAxMi41OC0uMTE0IDE4Ljg2MSAyLjg2Ni4wNTcgNS43MjguMDk3IDguNi4xMTRoMS4yODdsLjAxNiAxLjI4N2MuMTI2IDkuNjc2LjA2NCAxOS4zNi4xOTUgMjkuMDQgMTYuNzA1LjI0MiAzMy40MjIuMjY0IDUwLjEzMy4yNDUgMTcuMTA5LS4wMjYgMzQuMjE0LjExNyA1MS4zMjItLjI5My0uMjczLTkuNjUyLjU5MS0xOS4yOTkuMTk2LTI4Ljk0M2wtLjA1LTEuMzg1IDEuMzg1LjAzM2MyLjg3Mi4wOCA1Ljc0OC4wMjQgOC42LS4wNjUuMTA2LTkuNi4xMTgtMTkuMjEzLjEzLTI4LjgxM3YtMS4xODlsMS4xNzMtLjExNGMyLjkxNi0uMjc5IDUuODU3LS4zIDguODEyLS4yNzcuMDcxLTEwLjc1Mi0uMTMtMjEuNDk3LjE5NS0zMi4yNDl2LS4wNjVjLS4zNTctMTIuOTE1LS4xMDQtMjUuODQzLS4yNi0zOC43NjRhMzg4LjAxIDM4OC4wMSAwIDAgMS04LjY2NS0uMDVsLTEuMjU1LS4wMTYtLjAzMi0xLjI1NGMtLjA1OC0yLjg1LS4wOTUtNS43MTYtLjA0OS04LjU4My0yLjk3NC0uMDg3LTUuOTI5LjAwNi04Ljg3Ny0uMTYzbC0xLjE0LS4wNjUtLjA4MS0xLjE0Yy0uMjEtMi45NjMtLjEwNi01Ljk1Ni0uMTQ3LTguOTU5LTYuMzAzLS4wMjQtMTIuNjAxLjAyNy0xOC44OTMtLjA2NWwtMS4yNy0uMDE2LS4wMTctMS4yN2EyOTMuNDIgMjkzLjQyIDAgMCAxLS4wNDktOC41NTFjLTkuNjctLjUxMi0xOS4zNjYtLjE4MS0yOS4wNC0uMjk0bC0xLjIzOC0uMDE2LS4wNS0xLjIyMmMtLjEzMi0yLjkzLS4xODUtNS44NjgtLjE3OC04LjgyNy02LjI5MS0uMDMtMTIuNTguMDItMTguODYxLS4xMTRsLTEuMjU1LS4wMzMtLjAxNi0xLjI1NGMtLjEyNC0xMy4wMTctLjA1My0yNi4wMzktLjA5OC0zOS4wNThhNjQ4LjQ1IDY0OC40NSAwIDAgMC01LjAzMy0uMDMyYy0xLjI1LS4wMDItMi40OTYuMDAzLTMuNzQ2LjAxNmwtMS4zMzUuMDE3LjAxNi0xLjMzNmMuMDQ1LTIuOTg4LjA0LTUuOTc3LS4yNDQtOC45NDItNi42NTIuMDItMTMuMy4wNC0xOS45NTIgMHoiIGNvbG9yPSIjMDAwIiBmb250LXdlaWdodD0iNDAwIiBmb250LWZhbWlseT0iQWNxdWFpbnRhbmNlIiBvdmVyZmxvdz0idmlzaWJsZSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0zMDUuMjQzIDIwMi4zNmM2LjY1Mi4wMzkgMTMuMzA0LjAyNiAxOS45NTYuMDA2LjMxOSAzLjMzNi4zMDYgNi42OS4yNCAxMC4wMzMtNi43NjIuMDY1LTEzLjUxOC0uMDItMjAuMjguMDY1LjAyNi0zLjM2OC4wMzItNi43MzYuMDg0LTEwLjEwNXptLTEwLjE3NiAxMC4yNmMzLjM2Mi0uMDE5IDYuNzMtLjAxMiAxMC4wOTItLjE1Ni4wMDYgMzcuMTk0LjA2NSA3NC4zODkuMDI2IDExMS41ODNhMjI5LjYgMjI5LjYgMCAwIDEtMTAuMTY0LjAwNiAzMDAuNzUgMzAwLjc1IDAgMCAxLS4wMi0xMGMtMy4zNjgtLjEzLTYuNzM2LS4xMTEtMTAuMTA0LS4wOTgtLjExLTMuNC0uMTM3LTYuODA4LS4wMDctMTAuMjA5IDMuMzYyLS4xMjQgNi43My0uMDg1IDEwLjA5OS0uMTM3LjAxMy0zMC4zMjctLjA4NS02MC42NTUuMDc4LTkwLjk4OHptMzAuNDEyLjAxNGMzLjM1NS0uMDQ2IDYuNzEtLjAyNiAxMC4wNjYuMDA2LjA0NSAxMy40NDctLjA0NiAyNi45LjA5NyA0MC4zNDggNi43MS4xNzUgMTMuNDIxLjA3OCAyMC4xMzIuMTEtLjAwNyAzLjM1NiAwIDYuNzEuMTk1IDEwLjA2NiAxMC4wOTguMTYzIDIwLjIxNi0uMjQxIDMwLjMwOC4yOTMtLjA0IDMuMjc3LS4wMiA2LjU1NC4wNTIgOS44MzEgNi43MjMuMTI0IDEzLjQ1My4wNDYgMjAuMTgzLjA3Mi4wNDYgMy4zNjgtLjE2OSA2Ljc1Ni4xOSAxMC4xMTEgMy4zNDIuMjkzIDYuNjk3LjExOCAxMC4wNDYuMjE1YTIzNC40NCAyMzQuNDQgMCAwIDAgLjA1OCA5Ljg1MWMzLjMxLjA1OSA2LjYyNi4wODUgOS45NDkuMDU5LjE1NiAxMi45MzItLjA5OCAyNS44NjQuMjYgMzguNzktLjMyNiAxMC43NjMtLjEzIDIxLjUyNi0uMjAyIDMyLjI4OC0zLjMzNi0uMDI2LTYuNjcxLS4wMzktOS45OC4zNzItLjAxNCAxMC0uMDIgMjAuMDA3LS4xMzEgMzAuMDA4LTMuMzIzLjEwNC02LjY1Mi4yMTUtOS45NjguMDUyLS4zNzgtMTAuMTc3LS4yMDItMjAuMzY2LS4xMDQtMzAuNTQ5IDMuMzQyLjAzMyA2LjY5LjAzMyAxMC4wNC4wMDYuMDA2LTIzLjY0OS4wMjUtNDcuMjkyLjAzOC03MC45NDEtMy4zNDItLjA0Ni02LjY4NC0uMDQtMTAuMDI2IDAtLjE5LTMuMjkuMDI2LTYuNi0uMjQxLTkuODg0LTMuMzE2LS42MzgtNi43MDQtLjI0Ny0xMC4wNTMtLjI2LS4wNzIgMTAuMTQ0LjExNyAyMC4yODctLjA4NSAzMC40MzgtMy4zMS4wMDYtNi42MjUuMDA2LTkuOTM1LjAxMy0uMjI4LTEzLjUzMi4wMDYtMjcuMDY0LS4wNzgtNDAuNTk1LTYuNzgyLS4wNC0xMy41NjQtLjAyLTIwLjM0IDAgMCAxMC4xMzcuMTA0IDIwLjI3NS0uMDEzIDMwLjQwNWEyNDYuODYgMjQ2Ljg2IDAgMCAxLTEwLjA3Mi4wMDdjLS4wNjUtMTMuNTE5LS4wNzgtMjcuMDQ0LjA4NC00MC41NjMtNi43ODgtLjAzMi0xMy41Ny0uMDM5LTIwLjM1OS4wNC0uMDcyIDEzLjUwNS4wNTIgMjcuMDEgMCA0MC41MTYtMy4zOTQuMDk4LTYuNzk1LjEwNC0xMC4xOS4wMDcgMC0zMC4zNjcuMDItNjAuNzQuMDc5LTkxLjExM3oiIGZpbGw9IiMxYzFjMWMiLz48cGF0aCBkPSJNMjU0LjQyIDI5My43YzEwLjE0NC0uMTcgMjAuMjk0LS4xMTcgMzAuNDM4LS4wMzMuMDcxIDMuMzYyLjEzIDYuNzE3LjAzMiAxMC4wOC02LjczLjE1NS0xMy40Ni4wMzgtMjAuMTgzLjA5LS4yNDggNi42OTguMzU4IDEzLjQxNS0uMDk4IDIwLjEwNi0zLjM4OC4zOS02LjgwMi4xMy0xMC4xOTYuMDY1LS4wMi0xMC4xMDUuMDItMjAuMjAzLjAwNy0zMC4zMDh6bTEwLjQ2MyAzMC40N2MzLjI1Ny0uNTAxIDYuNTY3LS4zMTIgOS44NS0uMjIuMDcyIDMuMzguMDc5IDYuNzY4LjA0NiAxMC4xNTYgMy4zODguMDIgNi43Ny4wMTMgMTAuMTU3LjA1OS4wNzggNi43NDMgMCAxMy40ODYuMDM5IDIwLjIyOSAzLjM0Mi0uMDIgNi42OS0uMDEzIDEwLjA0LjAzMi0uMDQ2IDYuNzYzLjQzNiAxMy41NzctLjI1NCAyMC4zMDctMy4yOTcuMy02LjYuMDY2LTkuODkuMDE0LS4xMDQtNi42ODUtLjA5MS0xMy4zNy0uMTUtMjAuMDU0LTMuMzQ5LS4wMi02LjY5OC0uMDc4LTEwLjA0Ni0uMjE1LS4xMTEtNi42NTguMjE1LTEzLjMzLS4zOTEtMTkuOTY4LTMuMjM4LjAxMy02LjQ4My0uMDQ2LTkuNzE0LS4yMTUtLjAxMy0zLjM3NS0uNDU2LTYuODAyLjMxMy0xMC4xMjR6bTMwLjM0IDUwLjYxYzMuMzEtLjI2MSA2LjYzOS0uMTA1IDkuOTYyLS4wODYuMDkgNi43My4wMDYgMTMuNDYuMDI2IDIwLjE4NCAzLjM3NC0uMDEzIDYuNzYyLS4wMTMgMTAuMTQ0LjEwNC4wNjUgNi43My0uMDYgMTMuNDY3LjAzOSAyMC4xOTcgMjYuOTc4LjA2NSA1My45NTcuMDUyIDgwLjkzNS4wMzkuMTA1LTYuNzM3LS4wMjYtMTMuNDczLjA0Ni0yMC4yMTYgMy40NTMtLjA0NiA2LjkwNi0uMDkyIDEwLjM1OS4xMDQuNTQ3IDEwLjA5OC0uNDQzIDIwLjIwMy0uMTU2IDMwLjMxNC0xNy4xMDkuNDEtMzQuMjE3LjI2LTUxLjMyNi4yODctMTYuNzEuMDItMzMuNDIyIDAtNTAuMTI2LS4yNDEtLjEzNy0xMC4xMDUtLjA2NS0yMC4yMS0uMjE1LTMwLjMwOGE1NTQuOTQzIDU1NC45NDMgMCAwIDEtOS44OS0uMTI0Yy4wNTItNi43NS0uNDg5LTEzLjU0NC4yMDItMjAuMjU1eiIgZmlsbD0iIzFjMWMxYyIvPjwvc3ZnPg=='
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function i(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var n = o(0),
            l = o(28),
            M = o.n(l),
            c = Object.assign || function (e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var a in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            p = function e(t, o, a) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, o);
                if (r === void 0) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, o, a)
                }
                if ('value' in r) return r.value;
                var n = r.get;
                return void 0 === n ? void 0 : n.call(a)
            },
            y = function (e) {
                function t(e) {
                    a(this, t);
                    var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, c({
                        title: 'Delete geometry',
                        className: 'ole-control-delete',
                        image: M.a
                    }, e)));
                    return o.selectInteraction = new ol.interaction.Select({
                        source: o.source,
                        multi: e.multi || !1
                    }), o.selectInteraction.on('select', function (e) {
                        e.selected.forEach(function (e) {
                            o.source.removeFeature(e), o.selectInteraction.getFeatures().clear()
                        })
                    }), o
                }
                return i(t, e), u(t, [{
                    key: 'activate',
                    value: function () {
                        this.map.addInteraction(this.selectInteraction), p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'activate', this).call(this)
                    }
                }, {
                    key: 'deactivate',
                    value: function (e) {
                        this.map.removeInteraction(this.selectInteraction), p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'deactivate', this).call(this, e)
                    }
                }]), t
            }(n.a);
        t.a = y
    }, function (e) {
        e.exports = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTg4IDE4OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHVzZSB4bGluazpocmVmPSIjX0ltYWdlMSIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIHRyYW5zZm9ybT0ic2NhbGUoMS4yNSkiLz48ZGVmcz48aW1hZ2UgaWQ9Il9JbWFnZTEiIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpZQUFBQ1dDQVlBQUFBOEFYSGlBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBUGtFbEVRVlI0bk8yZGU2d1Z4Um5BZnhmdXZVZFF3WHVSdDVXSGlBaUMxTVRFYW14QnJTSmdxazNicEJIRlYvcXdqWWFIdG1ucUUyMGJRMnJidjJvVnhTZVZndlZSZklOYUh4VmFZMzJCYlJSdHFvQkJ0QmpoY3U4VlQvLzR6dEhEeXM3TTdzN3U3TzZaWHpJaEJIYm1tNW52N0RmN3pUZmZnTWZqOFhnOFRVMkxhd0VjVVFIMnFaVit3RmhnQW5BWThDVmdHREFjR0ZUNzk5YkE4NThBWGNBMllET3dCZmd2OEM5Z0EvQlc3ZDkzMVVwM3FyM0pJYzJpV0MzQUZPQUlZQkl3RGxHbVE0QURVbXJ6UTJBajhDYndCckFlZUtWV3FpbTE2Y21JTTRCN2tMZktoOGlibytxb2ROZGsyQXlzQkU1UHNkOGVpMVNBSWNCTTRFSGNLVkRVc2dvNHRTWjd1L1ZSOGNTbUE1Z0xMRVBXT3E0VkpXN1pBdHdGbkUxNjV0bGp3RWpnWm1BcjBJTjd4YkJWZW1wOXVnbjVnUEJrUUR1eTRMNFY5d3FRVmJrRitkQW9sSmtzMGxmaExPQTg0SnNwMVY5ZldMOEhiSytWajVCRmR5L2lZZ0J4UGJRaGE3b0J3TUJhR1lxNEtUcFRrbThsc0FSNEtLWDZyVklFeFpvSzNJaTRDZnBacW5NbjhCVHdIUEFzNGhMb1JzeFFYWWwyMS82c2h0VFJnaWhaWHo1WHRuWkU0Y1lCeHdISEFsK3pLSGNYNHE2NG9QYW5Kd2Fkd0c5SWJrcDJJQXZqTmNCRmlDbk5tbkcxdHArb3liSkRJYTlwV1l4OHVIZ002UXNzUkV4U2tvRi9HcmdhbUVGNjVpa09uWWg3WVJId0RNbjZ1Qm1ZRC9USnRBY0ZaQXJ3T3ZBcDhRWjZGM0E1TUJyWVAxdlJZN0UvTUFhNGt2ak8yMDhSci83RWJFVXZCdjJCUzRnM3NEdUJseEQvVDlFNUIzZ1o2Vk9jc1ppUHZmVmM0VGtLK2RLSm8xQkxFVk5YTm1ZaUxwVXVvby9MWDRBanN4YzVYOHhGSWdTaUR0NGRpRzhuR0hWUUpscVJENDFsUkIrZnJjQ1oyWXZzbmdyd1U2SU5WaS93UEJMZTBteE1CTllpWXhCbHpCWlNNTWRxRWtZQ0R4QnRnTmJScEwvQUJscUFzNEIvRUczczdxTUp0b2FHSWNGd1VRYm1NdnltYkNNZHdGVkVHOE1Od0dBWHdtYkJFVVQ3MnRrSWZObUpwTVhnYU9CdHpNZHpCeVYwU2N3QVBzWjhFQmJqUDV0TjZBOWNqL200ZmdTYzdFVFNGSmlPT0M1Tk90NkQ3SzhWWVE4ekw3UUF4L1A1dnFhdWRDSDdsNFZtT3VhL3BoY3A4VG9nQTRZaHpsWFQ4UzZzY3MzQS9FMTFLMzZCYm9NTzRIYk14bnduQlRTTFIyQytwbHFBYkR4NzdOQUtYSXI1bXV0d04ySkdaeGhtV3hIZHdEeEhNallEQ3pBTDJmNllBaXhCUm1MdXAvcUJJeG1iaVFzeG00djE1TmlKV3NIY28zNnFJeG1ia1ptWXpjbTk1SFQ3eDJUdnJ4di9wbkxCaFppWnhZV3VCQXhqTG1hL0NyK21jc2RDek9ab2ppc0JneHlGV2VqTEFsY0NlajdENUd0eEt6bUk1K3FQV1pEZXJYaVhRaDVvUldMWmRQTzFDc2RiYWliaHhQL0VPei96UkFkbUh2cjVyZ1NjWWlCY053WHdrVFFod3pBTEdzdzhHcUl2Y3BwR0o5aXhXUXZtTWVaNDlQTzNub3lQbGkxRWYwUnJNVDVLSWMrMG9BKzUyVTJHWC9LZDZBK1Ric1RIVXhXQi9raGFTOVZjYmlLakU5Y214OTU5NUdkeE9CcjlmRjZYdGhCVERZUzRMRzBoUE5ZeGlhR2ZuS1lBZjljMHZnN3ZXaWdpSGNBTHFPZjIrYlFhbjRYNk1FUXYvb2hXa1RrYnRRdGlCeW1jT3E4Z2liK2NhTFFuRTFvUWk2T2E0K1ZZam9BNFJOTmdGVGNubE1jamI5SVJEdHBPaTRPQTJjQ2hEdHFlaEg2ZXg5aHNVSmZ6ODA2YmpSblFnWnp3YlpUaFp1VE5XbFFxZkRGZWZTWFpyMW1YbzU3ckpiWWFHcWxwYUNlU29DTkxna3BWTDQrVHJ5UnJwZ3hDc3YzdHJVOHJNcFpsSFByUWNpdlJwamRyR2xsS3RsbGZ4bXZrZVJ6SkIxb1UyZ2hYcWxUTWo0Wlc0RGFOUEg5STJrZ0hFcCtqZWx0bG5aOXFsa0tlZW5tRVlpaFhHN0FhZlg5T3lWZ3VuUWRnSzVJeE9qWnpVWWUwdnBTazhwaU1VTWhUSkxPb01uL0JNc1NCZktyUW1oNGs4MDBzS3VpVGZybEt6Nmd6ejNrM2l5Ym1yMTUrNzBqR2N6VnkzVWxNMThNUTFIZlQ3RW9vZUJJcWlOS1lURXplektLcCthc0NqK0wyUzFkbHJUWVJNOVpPZDJ6bzhxUlNKMlFRNWhQMGVPMy91eWFLK1hzVTkzbmNkWHVJc2RaK3VxdlpSaWNVMmdadHlBU1lUTlJxM0w2NW9waS9COG5IVzNZTWFqa2ZpRk9wcXNLbnlVOGU5YWlteGNXRUZVSEd2YkUvY2lXTVN0NUluS0dwN0dvYlVsc2tpbGxjVGJabXNXam1MOGcxcUdVK0xVcGw5eWdxU21XWDJ3SjVOSXRGTkg5QmRENnQ1YVlWdFNCM3RJUlZ0SVg4K29meVpIS2l5UEpZeXJJazRVRFVvZWliVENzNkVybTdMNnlpTlRhbFRvRkJpSXdtRTdxR2RNeGlGUFAzR1BuOW9kWjVrbkQ1UDBEeW9XazVFL1dGUVJkWkZqb04ycEFKTTFVdW0yK0xNcGkvSVBNSTcwTTM4RjJUU242aHFLU0ttL3YrNHRDRytadkxsaWtxaS9rTGNoanF2bHlqcTZDQ09oNW5SeHBTcDBpV1pyRnM1aStJYWdIL1J6VGJPd05SWDZueFlGcFNwMGdXWnJHTTVpL0l3NFQzYVIyaU82RU1SYjF3LzNsYVVxZE1tbWF4ck9ZdnlCV0U5K3Q5TkJFWU9oZis5TFNrem9BMHpHTFp6VjhqSjZIdTN5alZ3eWRvSGo0NExha3pvZzN6cUFpZFdZeGkvaDdTMUZVRURrYmR4NitxSGxabDJmMEFNWlZGSjRwWkRJdm5haGJ6MTRodW1mUjkxY08vVlR6NEd2bmJ4NHBMRXJQWVRPYXZrUTRrclZGWVg2OVhQYXphSTF3RDdKZVcxQTZJYWhiYmE2V1p6RjhqKzZIdSs1OVVEeituZVBEUHdENXBTZTJJS0dieEFlUWk3eVFtdE1qc2crU0NEK3Z6MDZxSDMxSTh1SlR5RFJaRU0yMm1TbFVXODlkSUcrcUR5MjgwL3VkZ0drRFZKL1pIeUoxNFpXTWJjZ3VXamMzMVI1QmJOejZ3VUZmZTJJM29RQmdITnY0bHFGaXFMSHoxamVreTBvdkVtRDJab0k3VlNOQmJydzJCY3NpbmlBNkVzWWZ1QkJWTGRhSzVyQU5XcHhmNEZ2R1Vhelh3SFpwampNTFlZNjh3U2tiY01wckJJTnVRa3llcklqeHpIM0tpcVl6bUw0anhEeWZUVk11ZTVpR0tZbVdaK01NVmc1QUYrS3dJejN3RGlWZ280NWRnRUdPdlFGQ3hWT2F1aks2R1J0cVFsRUhUWWp4N0loTEgxZ3hqRkVaUDQxK0NpdFdsZUxCQ2VTOEVhRVBpamFZbHFPTkV4SUZhVnVYcWcvcTQveDY2RTFTc2JZb0hCMUJPY3pnSU9iRnpnb1c2VGthMmNzcG9GdnVpRHVaN3YvRXZRY1hhckhod0lPVzdHaTZLK2J1dlZuU1UxU3oyUlowVFM2VTdUYmNKSFNXcFNIMFQyblRqT2s5SDVXMndIK3BqWU1wTjZHWUttekhkSHd6dS9YVmlybHhaSCtkUGt3NWdBK0Y5VlliTnFBTDl0bEdlUUQ5VHBYcVk4RUMvUnd6cmNKM2x4aGE2UUwvdnFSNmVybml3U2psQ2s2T1lQMTFvY2pPWnhWR28rNmdNVFI2dGVkakdsNU1ya3BpL01KckpMSDRkZGY5R3FSNGVpdXg1aFQxYzFKdTkwano0MEN4bThVckMrNlU5L3FVN3NQcFFTa0tuU1JZSEg2S1l4YUllcmxEOWVOYWlTYzlkQWU1V1ZMQXpMYWxUSXN1REQxSE1ZbHBaYnRKRWRWdkZNZ3d5S0YrcnFLQ0tYSWxSQkZ5Yys0dGlGbTFudVVtVENhajdvazBLQXVWSlkrVHEzRjhaemVKOHd2dGduTVpvQ21wL3hSTzJwYlpNSHM3OWxjMHNQa1c0L01hSjE0cWVLdEpVcWRMTytsSVdzemdZUzZraVFYMmI2ZzdrSkVyZXlPT3g5eWhtTWE5bkVYWEpiZStPVXRucGlvcXF3Q0piVWxzaUQrWXZqS0tiUmQzSDNPeW9GYW9xZTRaOFhTQ1FGL09ua3JHSVpuRUE2dFB4MVRpVnJ0SlVtT1hsakdIazBmeUZVVVN6T0JhMW5QZkhxVlIzU2RNVlNhVk9TTlFiSC9Md3dWRTBzN2dJdFl5eExtblNYU3VuT2hXYk5oWHliLzdDaUdvV1hWNHIxeHNpVnhWNGw1alh5clVEZHlrcXJnTG5KSk03TnNIYjNsVnZxandwVlowb1puR3BHeEU1WHlQWDdjUzhDQlBrQmxYVlpZZ3ZKeEE4TGdjcDVBa3FWWjRqWHFPWXhSRU81SHRGSVU4UHNrTVRtd1BRWHpZK00wa0RNWml0a0NldjVpOE1VN01ZNVFDdERXYWozblJPZk5rNHdFMktCcXBJenFRc2o0VWRxcEVucitZdkRCT3pPRFpEZVZxQk96VHkzR0Nqb2VHYVJyckkvaHFVc0oyQnZKdS9NRlJtY1VYR3NveEg3dnRXemZrd1c0M2RvbWxvbWEyR0REbUFMeDVWdTVFRWk4a2NVT0dMNDd3QzZXdVdyRUE5MXpmWmJFem5LS3NDRTIwMkdFR3VHVmo4QmVXQTRVaWZYRGlncDZDZjU5RTJHMnhIcjhscktXOXVoMmFnRCtxdzlDcXk0V3pkS3B5S2VwZTdGNWhqdTFGUFpweUQyaUc2QThsTmtRcHJGUTFYRVkzUGVrM2dTVTRuOENMcXVYMHVUUUVtYXhxdklzZUVQTVZDRnhwVEJTYWxMY1JpQXlHT1Rsc0lqeldPUVQrZnY4cENrQTdVb2N0VjRHMmdmeGJDZUJLeEx6Slhxcmw4QjgwbGx6YVpqK1Q5VmdsMFBmNHJNYyswb000dVZFVXVEYmc0UzZINm9FNXBVeS9LUkJFZXAweERQMyt2dWhCc2tvRmd2WlFqOVZIWkdJSGU0bFNSMit1ZG9EcklXQzh2VTh6OXU3TFNpYnlKZFBPV3FRa00wZzk5Ykh3VkNRb3JZMkxjb3RHS1BuaXppc1N5Tzc5Q2NDcVN4a1luN0NXdUJQUjh4cy9RejlOV3hGK1pDK2FnRjdnS0xIQWxvSWVmWURaSFJua1lzbVFoZXFGN2dCKzZFckNKK1JIcUVQTjZtZWRLUUJYdFNCNTBrMTlGMXVITXpjd3N6T1prSlRtT1p4dU9tWCtyaW1SbzlxVExqekdiaTFjcFFFemJFQ1RFd3NRc0xuUWtZek53S1dibWJ6dUJhM2Z6ekVUay9tQ1RYOHVsZUZlRVRWb3grL3FySzVVekoyaGNUa0Y5aEtpeDNJRjNvdHFnRXpNL1ZSVUoyanpKalpqSm1ZWlpKNnVJaDk1di84Um5CSEl0amVsNEgrOUdUSHRNdy96TjFZdDAyRWRGbU5PQ2pMSEozbC85VFZWNHBhcHpNdVpycmlyd2Ezdzhsd243QXIvRGZGeTNVMkR6RjhiaHdNZVlEOEpiK0VoVUZjZWdEOUlyL0VMZGxNSEFlc3dIb3dwY2hWL1lOOUtKV1l4NlkzbVZBcmtVNGpJY3VKZG9BL01Da3ZtbW1kZGVmWkFqV3JyVE5NR3lrZ0k0UDIzUmp0bmVZbkJodjQ0TVRvdmtrQ25JMGJwUGlEWm04OGp4TmsyYXpNRXM1Q1pZN2thdVhpbXpZN1VWeWF5ak80Ryt0N0tWSEVZcFpNMVV6SUlGZzZVTHVJM3NjMGRsd1d6RWFhekwrckszY2o4NWlxZHlUVC9Nd3B6M1ZuWWl6dFZ6TTVmYVB1Y2ptZlJNL1g3QmNqRTVpUHpNSXhPUnIwWlRaMSt3OUNCZmtXUElUeDU2RlFPUWpEbUxNTnN3M2x2WmpTaGphVjBKdHVpRExEbzNFVytnNitWWjVMcXptZVRyVTNzd1lyNnZSWitjWDFmZW9SaTNzZVdLRHVBNmtnMTgzVlMrQnp5SktLeUxYL1lFeE5RL1ZaTkZsYlhIdFB5U0hDZGdLWUpmYURLU3JXOHk5clo1dW9DL0FuOUQzbXovUnZMVzl5QnVqVThRRTdNYk1jdDdvdy9RdDFaYWtWeWk3Y2dhWnp4d0hQQVY1TkN1clhWUGZUMTVBYkxobkZ1S29GaDFaZ0RuQWQ5T3FmNy9JVGtwM2tPMlA3WWorNXZkaUxMMTF2NWZXNjFVa0p3R0E1QTN4MURFRVpuV1cyUTVzQVRKcytxeFREdXlNRjlDY2xOU2xISWprcDZ4S1IyZExoaU9EUHBXNG45UjViSDAxUHAwQTAyMEZaTkhCZ0puQVhlUy9FdlNaWGtYT1RGK0poYVM4M3ZzMFk1OHlwK0NlSjlkSzRwcHVSK0pWeHVNTjNlRjRUUmswYnNKdVVDOUczY0sxSTFjekwwSjJldU1mRE5wa1NqU1YyRlNKaU8zclU5Q05yREgxa3BhZHdKdUE5NEVOdGIrZkEzeGtEdkpPWlUxemFSWWpiUWorNU9WMnAramtBalhDY2p0WXNPUWo0TURhLzhlTkZFOWlDL3NmY1JGc1FYeGdtOEFYZ2YrVS92M1hiWFNrMnB2UEI2UHgrUHg1STMvQTdHTU1HaHhsVFpuQUFBQUFFbEZUa1N1UW1DQyIvPjwvZGVmcz48L3N2Zz4='
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function i(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var n = o(0),
            l = o(2),
            M = o.n(l),
            c = Object.assign || function (e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var a in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            p = function e(t, o, a) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, o);
                if (r === void 0) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, o, a)
                }
                if ('value' in r) return r.value;
                var n = r.get;
                return void 0 === n ? void 0 : n.call(a)
            },
            y = function (e) {
                function t(e) {
                    a(this, t);
                    var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, c({
                        title: 'Buffer geometry',
                        className: 'ole-control-buffer',
                        image: M.a,
                        buffer: 50
                    }, e)));
                    return o.selectInteraction = new ol.interaction.Select({
                        source: o.source,
                        hitTolerance: e.hitTolerance || 10,
                        multi: 'undefined' == typeof e.multi || e.multi
                    }), o
                }
                return i(t, e), u(t, [{
                    key: 'getDialogTemplate',
                    value: function () {
                        return '\n      <label>Buffer width: &nbsp;\n        <input type="text" id="buffer-width"\n          value="' + this.properties.buffer + '"\n        />\n      </label>\n      <input type="button" value="OK" id="buffer-btn" />\n    '
                    }
                }, {
                    key: 'buffer',
                    value: function (e) {
                        for (var t = new jsts.io.OL3Parser, o = this.selectInteraction.getFeatures().getArray(), a = 0; a < o.length; a += 1) {
                            var r = t.read(o[a].getGeometry()),
                                i = new jsts.operation.buffer.BufferOp(r),
                                n = i.getResultGeometry(e);
                            o[a].setGeometry(t.write(n))
                        }
                    }
                }, {
                    key: 'activate',
                    value: function () {
                        var o = this;
                        this.map.addInteraction(this.selectInteraction), p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'activate', this).call(this), document.getElementById('buffer-width').addEventListener('change', function (t) {
                            o.setProperties({
                                buffer: t.target.value
                            })
                        }), document.getElementById('buffer-btn').addEventListener('click', function () {
                            var e = document.getElementById('buffer-width'),
                                t = parseInt(e.value, 10);
                            t && o.buffer(t)
                        })
                    }
                }, {
                    key: 'deactivate',
                    value: function () {
                        this.map.removeInteraction(this.selectInteraction), p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'deactivate', this).call(this)
                    }
                }]), t
            }(n.a);
        t.a = y
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function i(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var n = o(1),
            l = o(32),
            M = o.n(l),
            c = Object.assign || function (e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var a in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            p = function e(t, o, a) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, o);
                if (r === void 0) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, o, a)
                }
                if ('value' in r) return r.value;
                var n = r.get;
                return void 0 === n ? void 0 : n.call(a)
            },
            y = function (e) {
                function t(e) {
                    return a(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, c({
                        title: 'Union',
                        className: 'ole-control-union',
                        image: M.a
                    }, e)))
                }
                return i(t, e), u(t, [{
                    key: 'applyTopologyOperation',
                    value: function (e) {
                        p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'applyTopologyOperation', this).call(this, e);
                        for (var o = new jsts.io.OL3Parser, a = 1; a < e.length; a += 1) {
                            var r = o.read(e[0].getGeometry()),
                                i = o.read(e[a].getGeometry()),
                                n = jsts.operation.overlay.OverlayOp.union(r, i);
                            e[0].setGeometry(o.write(n)), e[a].setGeometry(null)
                        }
                    }
                }]), t
            }(n.a);
        t.a = y
    }, function (e, t) {
        'use strict';

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        var a = function () {
            function e(e, t) {
                for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
            return function (t, o, a) {
                return o && e(t.prototype, o), a && e(t, a), t
            }
        }(),
            r = function () {
                function e() {
                    o(this, e)
                }
                return a(e, null, [{
                    key: 'logError',
                    value: function (t) {
                        console.error(t)
                    }
                }]), e
            }();
        t.a = r
    }, function (e) {
        e.exports = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NTMuNDk1IiBoZWlnaHQ9IjQ1NC42NDkiIHZpZXdCb3g9IjAgMCA0MjUuMTUxIDQyNi4yMzMiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzEuMjIgLTM1MS40OSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PGNpcmNsZSBjeD0iMzA4Ljk0NiIgY3k9IjQ5MC4yODYiIHI9IjEyMy43NDQiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzhhOGE4YSIgc3Ryb2tlLXdpZHRoPSIyMCIvPjxjaXJjbGUgY3g9IjQ0Ni45NyIgY3k9IjYyOC4zMjIiIHI9IjEzOC4yMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGE4YThhIiBzdHJva2Utd2lkdGg9IjIyLjM0MSIvPjxwYXRoIGQ9Ik0zMDcuNDYyIDM2My45OUExMjMuNzQ0IDEyMy43NDQgMCAwIDAgMTgzLjcyIDQ4Ny43MzRhMTIzLjc0NCAxMjMuNzQ0IDAgMCAwIDEyMy43NDIgMTIzLjc0NCAxMjMuNzQ0IDEyMy43NDQgMCAwIDAgLjU2My0uMDIgMTM4LjIzIDEzOC4yMyAwIDAgMC0uNzY4IDE0LjMxMSAxMzguMjMgMTM4LjIzIDAgMCAwIDEzOC4yMyAxMzguMjMgMTM4LjIzIDEzOC4yMyAwIDAgMCAxMzguMjMtMTM4LjIzIDEzOC4yMyAxMzguMjMgMCAwIDAtMTM4LjIzLTEzOC4yMyAxMzguMjMgMTM4LjIzIDAgMCAwLTE0LjMxNi44OTggMTIzLjc0NCAxMjMuNzQ0IDAgMCAwIC4wMzUtLjcwM0ExMjMuNzQ0IDEyMy43NDQgMCAwIDAgMzA3LjQ2MiAzNjMuOTl6IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMjUiLz48L2c+PC9zdmc+'
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function i(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var n = o(1),
            l = o(34),
            M = o.n(l),
            c = Object.assign || function (e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var a in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            p = function e(t, o, a) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, o);
                if (r === void 0) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, o, a)
                }
                if ('value' in r) return r.value;
                var n = r.get;
                return void 0 === n ? void 0 : n.call(a)
            },
            y = function (e) {
                function t(e) {
                    return a(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, c({
                        title: 'Intersection',
                        className: 'ole-control-intersection',
                        image: M.a
                    }, e)))
                }
                return i(t, e), u(t, [{
                    key: 'applyTopologyOperation',
                    value: function (e) {
                        if (p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'applyTopologyOperation', this).call(this, e), !(2 > e.length))
                            for (var o = new jsts.io.OL3Parser, a = 1; a < e.length; a += 1) {
                                var r = o.read(e[0].getGeometry()),
                                    i = o.read(e[a].getGeometry()),
                                    n = jsts.operation.overlay.OverlayOp.intersection(r, i);
                                e[0].setGeometry(o.write(n)), e[a].setGeometry(null)
                            }
                    }
                }]), t
            }(n.a);
        t.a = y
    }, function (e) {
        e.exports = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NDkuMjQ3IiBoZWlnaHQ9IjQ0OS4yNTkiIHZpZXdCb3g9IjAgMCA0MjEuMTY5IDQyMS4xODEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzUuMjAyIC0zNTYuNTQyKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIzMDguOTQ2IiBjeT0iNDkwLjI4NiIgcj0iMTIzLjc0NCIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjOGE4YThhIiBzdHJva2Utd2lkdGg9IjIwIi8+PGNpcmNsZSBjeD0iNDQ2Ljk3IiBjeT0iNjI4LjMyMiIgcj0iMTM4LjIzIiBmaWxsPSJub25lIiBzdHJva2U9IiM4YThhOGEiIHN0cm9rZS13aWR0aD0iMjIuMzQxIi8+PHBhdGggZD0iTTQzMy40MiA0ODguNzgxYTEzOC4yMyAxMzguMjMgMCAwIDAtMTI2Ljk2MiAxMjYuOTk2IDEyMy43NDQgMTIzLjc0NCAwIDAgMCAzLjM0LjE2NkExMjMuNzQ0IDEyMy43NDQgMCAwIDAgNDMzLjU0MiA0OTIuMmExMjMuNzQ0IDEyMy43NDQgMCAwIDAtLjEyMS0zLjQxOHoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyNSIvPjwvZz48L3N2Zz4='
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function i(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var n = o(1),
            l = o(36),
            M = o.n(l),
            c = Object.assign || function (e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var a in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            p = function e(t, o, a) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, o);
                if (r === void 0) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, o, a)
                }
                if ('value' in r) return r.value;
                var n = r.get;
                return void 0 === n ? void 0 : n.call(a)
            },
            y = function (e) {
                function t(e) {
                    return a(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, c({
                        title: 'Difference',
                        className: 'ole-control-difference',
                        image: M.a
                    }, e)))
                }
                return i(t, e), u(t, [{
                    key: 'applyTopologyOperation',
                    value: function (e) {
                        if (p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'applyTopologyOperation', this).call(this, e), !(2 > e.length))
                            for (var o = new jsts.io.OL3Parser, a = 1; a < e.length; a += 1) {
                                var r = o.read(e[0].getGeometry()),
                                    i = o.read(e[a].getGeometry()),
                                    n = jsts.operation.overlay.OverlayOp.difference(r, i);
                                e[0].setGeometry(o.write(n)), e[a].setGeometry(null)
                            }
                    }
                }]), t
            }(n.a);
        t.a = y
    }, function (e) {
        e.exports = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NDkuMjQ3IiBoZWlnaHQ9IjQ0OS4yNTkiIHZpZXdCb3g9IjAgMCA0MjEuMTY5IDQyMS4xODEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzUuMjAyIC0zNTYuNTQyKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIzMDguOTQ2IiBjeT0iNDkwLjI4NiIgcj0iMTIzLjc0NCIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjOGE4YThhIiBzdHJva2Utd2lkdGg9IjIwIi8+PGNpcmNsZSBjeD0iNDQ2Ljk3IiBjeT0iNjI4LjMyMiIgcj0iMTM4LjIzIiBmaWxsPSJub25lIiBzdHJva2U9IiM4YThhOGEiIHN0cm9rZS13aWR0aD0iMjIuMzQxIi8+PHBhdGggZD0iTTMwOC45NDYgMzY2LjU0MmExMjMuNzQ0IDEyMy43NDQgMCAwIDAtMTIzLjc0NCAxMjMuNzQ0QTEyMy43NDQgMTIzLjc0NCAwIDAgMCAzMDguOTQ2IDYxNC4wM2ExMjMuNzQ0IDEyMy43NDQgMCAwIDAgLjU2My0uMDIgMTM4LjIzIDEzOC4yMyAwIDAgMSAxMjMuMTQ2LTEyMy4wMjMgMTIzLjc0NCAxMjMuNzQ0IDAgMCAwIC4wMzUtLjcgMTIzLjc0NCAxMjMuNzQ0IDAgMCAwLTEyMy43NDQtMTIzLjc0NXoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyNSIvPjwvZz48L3N2Zz4='
    }, function (e, t, o) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var a = o(38),
            r = o(3);
        o.d(t, 'Storage', function () {
            return r.a
        }), o.d(t, 'LocalStorage', function () {
            return a.a
        })
    }, function (e, t, o) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function i(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var n = o(3),
            l = function () {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function (t, o, a) {
                    return o && e(t.prototype, o), a && e(t, a), t
                }
            }(),
            M = function e(t, o, a) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, o);
                if (r === void 0) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, o, a)
                }
                if ('value' in r) return r.value;
                var n = r.get;
                return void 0 === n ? void 0 : n.call(a)
            },
            c = function (e) {
                function t() {
                    return a(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return i(t, e), l(t, [{
                    key: 'storeProperties',
                    value: function (e, o) {
                        var a = M(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'storeProperties', this).call(this, e, o);
                        window.localStorage.setItem(e, JSON.stringify(a))
                    }
                }, {
                    key: 'restoreProperties',
                    value: function () {
                        for (var e = 0; e < this.controls.length; e += 1) {
                            var t = this.controls[e].getProperties().title,
                                o = window.localStorage.getItem(t);
                            o && this.controls[e].setProperties(JSON.parse(o), !0)
                        }
                    }
                }, {
                    key: 'storeActiveControls',
                    value: function () {
                        var e = M(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'storeActiveControls', this).call(this);
                        window.localStorage.setItem('active', JSON.stringify(e))
                    }
                }, {
                    key: 'restoreActiveControls',
                    value: function () {
                        var e = window.localStorage.getItem('active');
                        if (e = e ? JSON.parse(e) : [], !!e.length)
                            for (var t, o = 0; o < this.controls.length; o += 1) t = this.controls[o].getProperties().title, -1 < e.indexOf(t) ? this.controls[o].activate() : this.controls[o].deactivate()
                    }
                }]), t
            }(n.a);
        t.a = c
    }, function (e, t) {
        'use strict';

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        var a = function () {
            function e(e, t) {
                for (var o, a = 0; a < t.length; a++) o = t[a], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
            return function (t, o, a) {
                return o && e(t.prototype, o), a && e(t, a), t
            }
        }(),
            r = function () {
                function e() {
                    o(this, e), this.active = !1, this.editor = null, this.map = null
                }
                return a(e, [{
                    key: 'activate',
                    value: function () {
                        this.active = !0
                    }
                }, {
                    key: 'deactivate',
                    value: function () {
                        this.active = !1
                    }
                }, {
                    key: 'setEditor',
                    value: function (e) {
                        this.editor = e
                    }
                }, {
                    key: 'setMap',
                    value: function (e) {
                        this.map = e
                    }
                }]), e
            }();
        t.a = r
    }])
});
//# sourceMappingURL=index.js.map