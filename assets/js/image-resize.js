! function(t, e) { 
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ImageResize = e() : t.ImageResize = e()
}(this, function() {
    return function(t) {
        function e(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function(t) {
            return t
        }, e.d = function(t, n, o) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 38)
    }([function(t, e) {
        function n(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
        t.exports = n
    }, function(t, e, n) {
        var o = n(22),
            r = "object" == typeof self && self && self.Object === Object && self,
            i = o || r || Function("return this")();
        t.exports = i
    }, function(t, e) {
        function n(t) {
            return null != t && "object" == typeof t
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var o = t[e];
                this.set(o[0], o[1])
            }
        }
        var r = n(75),
            i = n(76),
            a = n(77),
            u = n(78),
            s = n(79);
        o.prototype.clear = r, o.prototype.delete = i, o.prototype.get = a, o.prototype.has = u, o.prototype.set = s, t.exports = o
    }, function(t, e, n) {
        function o(t, e) {
            for (var n = t.length; n--;)
                if (r(t[n][0], e)) return n;
            return -1
        }
        var r = n(8);
        t.exports = o
    }, function(t, e, n) {
        function o(t) {
            return null == t ? void 0 === t ? s : u : c && c in Object(t) ? i(t) : a(t)
        }
        var r = n(16),
            i = n(64),
            a = n(87),
            u = "[object Null]",
            s = "[object Undefined]",
            c = r ? r.toStringTag : void 0;
        t.exports = o
    }, function(t, e, n) {
        function o(t, e) {
            var n = t.__data__;
            return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
        }
        var r = n(73);
        t.exports = o
    }, function(t, e, n) {
        var o = n(11),
            r = o(Object, "create");
        t.exports = r
    }, function(t, e) {
        function n(t, e) {
            return t === e || t !== t && e !== e
        }
        t.exports = n
    }, function(t, e, n) {
        "use strict";

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        n.d(e, "a", function() {
            return r
        });
        var r = function t(e) {
            o(this, t), this.onCreate = function() {}, this.onDestroy = function() {}, this.onUpdate = function() {}, this.overlay = e.overlay, this.img = e.img, this.options = e.options, this.requestUpdate = e.onUpdate
        }
    }, function(t, e, n) {
        function o(t, e, n) {
            "__proto__" == e && r ? r(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : t[e] = n
        }
        var r = n(21);
        t.exports = o
    }, function(t, e, n) {
        function o(t, e) {
            var n = i(t, e);
            return r(n) ? n : void 0
        }
        var r = n(48),
            i = n(65);
        t.exports = o
    }, function(t, e, n) {
        function o(t) {
            return null != t && i(t.length) && !r(t)
        }
        var r = n(13),
            i = n(30);
        t.exports = o
    }, function(t, e, n) {
        function o(t) {
            if (!i(t)) return !1;
            var e = r(t);
            return e == u || e == s || e == a || e == c
        }
        var r = n(5),
            i = n(0),
            a = "[object AsyncFunction]",
            u = "[object Function]",
            s = "[object GeneratorFunction]",
            c = "[object Proxy]";
        t.exports = o
    }, function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function(t, e, n) {
        var o = n(11),
            r = n(1),
            i = o(r, "Map");
        t.exports = i
    }, function(t, e, n) {
        var o = n(1),
            r = o.Symbol;
        t.exports = r
    }, function(t, e) {
        function n(t, e, n) {
            switch (n.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, n[0]);
                case 2:
                    return t.call(e, n[0], n[1]);
                case 3:
                    return t.call(e, n[0], n[1], n[2])
            }
            return t.apply(e, n)
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t, e, n) {
            (void 0 === n || i(t[e], n)) && (void 0 !== n || e in t) || r(t, e, n)
        }
        var r = n(10),
            i = n(8);
        t.exports = o
    }, function(t, e, n) {
        function o(t, e, n, l, f) {
            t !== e && a(e, function(a, c) {
                if (s(a)) f || (f = new r), u(t, e, c, n, o, l, f);
                else {
                    var p = l ? l(t[c], a, c + "", t, e, f) : void 0;
                    void 0 === p && (p = a), i(t, c, p)
                }
            }, c)
        }
        var r = n(41),
            i = n(18),
            a = n(46),
            u = n(51),
            s = n(0),
            c = n(32);
        t.exports = o
    }, function(t, e, n) {
        function o(t, e) {
            return a(i(t, e, r), t + "")
        }
        var r = n(26),
            i = n(89),
            a = n(90);
        t.exports = o
    }, function(t, e, n) {
        var o = n(11),
            r = function() {
                try {
                    var t = o(Object, "defineProperty");
                    return t({}, "", {}), t
                } catch (t) {}
            }();
        t.exports = r
    }, function(t, e, n) {
        (function(e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n
        }).call(e, n(107))
    }, function(t, e, n) {
        var o = n(88),
            r = o(Object.getPrototypeOf, Object);
        t.exports = r
    }, function(t, e) {
        function n(t, e) {
            return !!(e = null == e ? o : e) && ("number" == typeof t || r.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
        var o = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        t.exports = n
    }, function(t, e) {
        function n(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || o)
        }
        var o = Object.prototype;
        t.exports = n
    }, function(t, e) {
        function n(t) {
            return t
        }
        t.exports = n
    }, function(t, e, n) {
        var o = n(47),
            r = n(2),
            i = Object.prototype,
            a = i.hasOwnProperty,
            u = i.propertyIsEnumerable,
            s = o(function() {
                return arguments
            }()) ? o : function(t) {
                return r(t) && a.call(t, "callee") && !u.call(t, "callee")
            };
        t.exports = s
    }, function(t, e) {
        var n = Array.isArray;
        t.exports = n
    }, function(t, e, n) {
        (function(t) {
            var o = n(1),
                r = n(102),
                i = "object" == typeof e && e && !e.nodeType && e,
                a = i && "object" == typeof t && t && !t.nodeType && t,
                u = a && a.exports === i,
                s = u ? o.Buffer : void 0,
                c = s ? s.isBuffer : void 0,
                l = c || r;
            t.exports = l
        }).call(e, n(14)(t))
    }, function(t, e) {
        function n(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o
        }
        var o = 9007199254740991;
        t.exports = n
    }, function(t, e, n) {
        var o = n(49),
            r = n(54),
            i = n(86),
            a = i && i.isTypedArray,
            u = a ? r(a) : o;
        t.exports = u
    }, function(t, e, n) {
        function o(t) {
            return a(t) ? r(t, !0) : i(t)
        }
        var r = n(43),
            i = n(50),
            a = n(12);
        t.exports = o
    }, function(t, e, n) {
        "use strict";
        e.a = {
            modules: ["DisplaySize", "Toolbar", "Resize"],
            overlayStyles: {
                position: "absolute",
                boxSizing: "border-box",
                border: "1px dashed #444"
            },
            handleStyles: {
                position: "absolute",
                height: "12px",
                width: "12px",
                backgroundColor: "white",
                border: "1px solid #777",
                boxSizing: "border-box",
                opacity: "0.80"
            },
            displayStyles: {
                position: "absolute",
                font: "12px/1.0 Arial, Helvetica, sans-serif",
                padding: "4px 8px",
                textAlign: "center",
                backgroundColor: "white",
                color: "#333",
                border: "1px solid #777",
                boxSizing: "border-box",
                opacity: "0.80",
                cursor: "default"
            },
            toolbarStyles: {
                position: "absolute",
                top: "-12px",
                right: "0",
                left: "0",
                height: "0",
                minWidth: "100px",
                font: "12px/1.0 Arial, Helvetica, sans-serif",
                textAlign: "center",
                color: "#333",
                boxSizing: "border-box",
                cursor: "default"
            },
            toolbarButtonStyles: {
                display: "inline-block",
                width: "24px",
                height: "24px",
                background: "white",
                border: "1px solid #999",
                verticalAlign: "middle"
            },
            toolbarButtonSvgStyles: {
                fill: "#444",
                stroke: "#444",
                strokeWidth: "2"
            }
        }
    }, function(t, e, n) {
        "use strict";

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        n.d(e, "a", function() {
            return u
        });
        var a = n(9),
            u = function(t) {
                function e() {
                    var t, n, i, a;
                    o(this, e);
                    for (var u = arguments.length, s = Array(u), c = 0; c < u; c++) s[c] = arguments[c];
                    return n = i = r(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(s))), i.onCreate = function() { 
                        i.display = document.createElement("div"), Object.assign(i.display.style, i.options.displayStyles), i.overlay.appendChild(i.display)
                    }, i.onDestroy = function() {}, i.onUpdate = function() {
                        if (i.display && i.img) {
                            var t = i.getCurrentSize();
                            if (i.display.innerHTML = t.join(" &times; "), t[0] > 120 && t[1] > 30) Object.assign(i.display.style, {
                                right: "4px",
                                bottom: "4px",
                                left: "auto"
                            });
                            else if ("right" == i.img.style.float) {
                                var e = i.display.getBoundingClientRect();
                                Object.assign(i.display.style, {
                                    right: "auto",
                                    bottom: "-" + (e.height + 4) + "px",
                                    left: "-" + (e.width + 4) + "px"
                                })
                            } else {
                                var n = i.display.getBoundingClientRect();
                                Object.assign(i.display.style, {
                                    right: "-" + (n.width + 4) + "px",
                                    bottom: "-" + (n.height + 4) + "px",
                                    left: "auto"
                                })
                            }
                        }
                    }, i.getCurrentSize = function() {
                        return [i.img.width, Math.round(i.img.width / i.img.naturalWidth * i.img.naturalHeight)]
                    }, a = n, r(i, a)
                }
                return i(e, t), e
            }(a.a)
    }, function(t, e, n) {
        "use strict";

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        n.d(e, "a", function() {
            return u
        });
        var a = n(9),
            u = function(t) {
                function e() {
                    var t, n, i, a;
                    o(this, e);
                    for (var u = arguments.length, s = Array(u), c = 0; c < u; c++) s[c] = arguments[c];
                    return n = i = r(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(s))), i.onCreate = function() {
                        i.boxes = [], i.addBox("nwse-resize"), i.addBox("nesw-resize"), i.addBox("nwse-resize"), i.addBox("nesw-resize"), i.positionBoxes()
                    }, i.onDestroy = function() { 
                        i.setCursor("")
                    }, i.positionBoxes = function() {
                        var t = -parseFloat(i.options.handleStyles.width) / 2 + "px",
                            e = -parseFloat(i.options.handleStyles.height) / 2 + "px";
                        [{
                            left: t,
                            top: e
                        }, {
                            right: t,
                            top: e
                        }, {
                            right: t,
                            bottom: e
                        }, {
                            left: t,
                            bottom: e
                        }].forEach(function(t, e) {
                            Object.assign(i.boxes[e].style, t)
                        })
                    }, i.addBox = function(t) { 
                        var e = document.createElement("div");
                        Object.assign(e.style, i.options.handleStyles), e.style.cursor = t, e.style.width = i.options.handleStyles.width + "px", e.style.height = i.options.handleStyles.height + "px", e.addEventListener("mousedown", i.handleMousedown, !1), e.addEventListener("touchstart", i.handleMousedown, !1), i.overlay.appendChild(e), i.boxes.push(e)
                    }, i.handleMousedown = function(t) {
                        i.dragBox = t.target, t.touches ? i.dragStartX = t.touches[0].clientX : i.dragStartX = t.clientX, i.preDragWidth = i.img.width || i.img.naturalWidth, i.setCursor(i.dragBox.style.cursor), document.addEventListener("touchend", i.handleMouseup, !1), document.addEventListener("touchmove", i.handleDrag, !1), document.addEventListener("mousemove", i.handleDrag, !1), document.addEventListener("mouseup", i.handleMouseup, !1)
                    }, i.handleMouseup = function() {
                        i.setCursor(""), document.removeEventListener("touchend", i.handleMouseup), document.removeEventListener("touchmove", i.handleDrag), document.removeEventListener("mousemove", i.handleDrag), document.removeEventListener("mouseup", i.handleMouseup)
                    }, i.handleDrag = function(t) {
                        if (i.img) {
                            var e = void 0;
                            e = t.touches ? t.touches[0].clientX - i.dragStartX : t.clientX - i.dragStartX, i.dragBox === i.boxes[0] || i.dragBox === i.boxes[3] ? i.img.width = Math.round(i.preDragWidth - e) : i.img.width = Math.round(i.preDragWidth + e), i.requestUpdate()
                        }
                    }, i.setCursor = function(t) {
                        [document.body, i.img].forEach(function(e) {
                            e.style.cursor = t
                        })
                    }, a = n, r(i, a)
                }
                return i(e, t), e
            }(a.a)
    }, function(t, e, n) {
        "use strict";

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        n.d(e, "a", function() {
            return b
        });
        var a = n(105),
            u = n.n(a),
            s = n(104),
            c = n.n(s),
            l = n(106),
            f = n.n(l),
            p = n(9),
            d = window.Quill.imports.parchment,
            h = new d.Attributor.Style("float", "float"),
            v = new d.Attributor.Style("margin", "margin"),
            y = new d.Attributor.Style("display", "display"),
            b = function(t) {
                function e() {
                    var t, n, i, a;
                    o(this, e);
                    for (var s = arguments.length, l = Array(s), p = 0; p < s; p++) l[p] = arguments[p];
                    return n = i = r(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(l))), i.onCreate = function() { 
                        i.toolbar = document.createElement("div"), Object.assign(i.toolbar.style, i.options.toolbarStyles), i.overlay.appendChild(i.toolbar), i._defineAlignments(), i._addToolbarButtons()
                    }, i.onDestroy = function() {}, i.onUpdate = function() {}, i._defineAlignments = function() {
                        i.alignments = [{
                            icon: u.a,
                            apply: function() {
                                y.add(i.img, "inline"), h.add(i.img, "left"), v.add(i.img, "0 1em 1em 0")
                            },
                            isApplied: function() {
                                return "left" == h.value(i.img)
                            }
                        }, {
                            icon: c.a,
                            apply: function() {
                                y.add(i.img, "block"), h.remove(i.img), v.add(i.img, "auto")
                            },
                            isApplied: function() {
                                return "auto" == v.value(i.img)
                            }
                        }, {
                            icon: f.a,
                            apply: function() {
                                y.add(i.img, "inline"), h.add(i.img, "right"), v.add(i.img, "0 0 1em 1em")
                            },
                            isApplied: function() {
                                return "right" == h.value(i.img)
                            }
                        }]
                    }, i._addToolbarButtons = function() {
                        var t = [];
                        i.alignments.forEach(function(e, n) {
                            var o = document.createElement("span");
                            t.push(o), o.innerHTML = e.icon, o.addEventListener("click", function() {
                                t.forEach(function(t) {
                                    return t.style.filter = ""
                                }), e.isApplied() ? (h.remove(i.img), v.remove(i.img), y.remove(i.img)) : (i._selectButton(o), e.apply()), i.requestUpdate()
                            }), Object.assign(o.style, i.options.toolbarButtonStyles), n > 0 && (o.style.borderLeftWidth = "0"), Object.assign(o.children[0].style, i.options.toolbarButtonSvgStyles), e.isApplied() && i._selectButton(o), i.toolbar.appendChild(o)
                        })
                    }, i._selectButton = function(t) {
                        t.style.filter = "invert(20%)"
                    }, a = n, r(i, a)
                }
                return i(e, t), e
            }(p.a)
    }, function(t, e, n) {
        var o = n(17),
            r = n(20),
            i = n(63),
            a = n(101),
            u = r(function(t) {
                return t.push(void 0, i), o(a, void 0, t)
            });
        t.exports = u
    }, function(t, e, n) {
        "use strict";

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(37),
            i = n.n(r),
            a = n(33),
            u = n(34),
            s = n(36),
            c = n(35),
            l = {
                DisplaySize: u.a,
                Toolbar: s.a,
                Resize: c.a
            },
            f = function t(e) {
                var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o(this, t), this.initializeModules = function() {
                    n.removeModules(), n.modules = n.moduleClasses.map(function(t) {
                        return new(l[t] || t)(n)
                    }), n.modules.forEach(function(t) {
                        t.onCreate()
                    }), n.onUpdate()
                }, this.onUpdate = function() {
                    n.repositionElements(), n.modules.forEach(function(t) {
                        t.onUpdate()
                    })
                }, this.removeModules = function() {
                    n.modules.forEach(function(t) {
                        t.onDestroy()
                    }), n.modules = []
                }, this.handleClick = function(tt) {
					var t=tt.detail; 
                    if (t.target && t.target.tagName && "IMG" === t.target.tagName.toUpperCase()) {	
                        if (n.img === t.target) return;
                        n.img && n.hide(), n.show(t.target)
                    } else n.img && n.hide()
                }, this.show = function(t) {
                    n.img = t, n.showOverlay(), n.initializeModules()
                }, this.showOverlay = function() {
                    n.overlay && n.hideOverlay(), n.quill.setSelection(null), n.setUserSelect("none"), document.addEventListener("keyup", n.checkImage, !0), n.quill.root.addEventListener("input", n.checkImage, !0), n.overlay = document.createElement("div"), Object.assign(n.overlay.style, n.options.overlayStyles), n.quill.root.parentNode.appendChild(n.overlay), n.repositionElements()
                }, this.hideOverlay = function() {
                    n.overlay && (n.quill.root.parentNode.removeChild(n.overlay), n.overlay = void 0, document.removeEventListener("keyup", n.checkImage), n.quill.root.removeEventListener("input", n.checkImage), n.setUserSelect(""))
                }, this.repositionElements = function() {
                    if (n.overlay && n.img) {
                        var t = n.quill.root.parentNode,
                            e = n.img.getBoundingClientRect(),
                            o = t.getBoundingClientRect();
                        Object.assign(n.overlay.style, {
                            left: e.left - o.left - 1 + t.scrollLeft + "px",
                            top: e.top - o.top + t.scrollTop + "px",
                            width: e.width + "px",
                            height: e.height + "px"
                        })
                    }
                }, this.hide = function() {
                    n.hideOverlay(), n.removeModules(), n.img = void 0
                }, this.setUserSelect = function(t) {
                    ["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"].forEach(function(e) {
                        n.quill.root.style[e] = t, document.documentElement.style[e] = t
                    })
                }, this.checkImage = function(t) {
                    n.img && (46 != t.keyCode && 8 != t.keyCode || window.Quill.find(n.img).deleteAt(0), n.hide())
                }, this.quill = e;
                var u = !1;
                r.modules && (u = r.modules.slice()), this.options = i()({}, r, a.a), !1 !== u && (this.options.modules = u), document.execCommand("enableObjectResizing", !1, "false"), //this.quill.root.addEventListener("click", this.handleClick, !1), 
				this.quill.root.addEventListener("slider", this.handleClick ),
				this.quill.root.parentNode.style.position = this.quill.root.parentNode.style.position || "relative", this.moduleClasses = this.options.modules, this.modules = []
            };
        e.default = f, window.Quill && window.Quill.register("modules/imageResize", f)
    }, function(t, e, n) {
        function o(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var o = t[e];
                this.set(o[0], o[1])
            }
        }
        var r = n(66),
            i = n(67),
            a = n(68),
            u = n(69),
            s = n(70);
        o.prototype.clear = r, o.prototype.delete = i, o.prototype.get = a, o.prototype.has = u, o.prototype.set = s, t.exports = o
    }, function(t, e, n) {
        function o(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var o = t[e];
                this.set(o[0], o[1])
            }
        }
        var r = n(80),
            i = n(81),
            a = n(82),
            u = n(83),
            s = n(84);
        o.prototype.clear = r, o.prototype.delete = i, o.prototype.get = a, o.prototype.has = u, o.prototype.set = s, t.exports = o
    }, function(t, e, n) {
        function o(t) {
            var e = this.__data__ = new r(t);
            this.size = e.size
        }
        var r = n(3),
            i = n(92),
            a = n(93),
            u = n(94),
            s = n(95),
            c = n(96);
        o.prototype.clear = i, o.prototype.delete = a, o.prototype.get = u, o.prototype.has = s, o.prototype.set = c, t.exports = o
    }, function(t, e, n) {
        var o = n(1),
            r = o.Uint8Array;
        t.exports = r
    }, function(t, e, n) {
        function o(t, e) {
            var n = a(t),
                o = !n && i(t),
                l = !n && !o && u(t),
                p = !n && !o && !l && c(t),
                d = n || o || l || p,
                h = d ? r(t.length, String) : [],
                v = h.length;
            for (var y in t) !e && !f.call(t, y) || d && ("length" == y || l && ("offset" == y || "parent" == y) || p && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || s(y, v)) || h.push(y);
            return h
        }
        var r = n(53),
            i = n(27),
            a = n(28),
            u = n(29),
            s = n(24),
            c = n(31),
            l = Object.prototype,
            f = l.hasOwnProperty;
        t.exports = o
    }, function(t, e, n) {
        function o(t, e, n) {
            var o = t[e];
            u.call(t, e) && i(o, n) && (void 0 !== n || e in t) || r(t, e, n)
        }
        var r = n(10),
            i = n(8),
            a = Object.prototype,
            u = a.hasOwnProperty;
        t.exports = o
    }, function(t, e, n) {
        var o = n(0),
            r = Object.create,
            i = function() {
                function t() {}
                return function(e) {
                    if (!o(e)) return {};
                    if (r) return r(e);
                    t.prototype = e;
                    var n = new t;
                    return t.prototype = void 0, n
                }
            }();
        t.exports = i
    }, function(t, e, n) {
        var o = n(62),
            r = o();
        t.exports = r
    }, function(t, e, n) {
        function o(t) {
            return i(t) && r(t) == a
        }
        var r = n(5),
            i = n(2),
            a = "[object Arguments]";
        t.exports = o
    }, function(t, e, n) {
        function o(t) {
            return !(!a(t) || i(t)) && (r(t) ? h : c).test(u(t))
        }
        var r = n(13),
            i = n(74),
            a = n(0),
            u = n(97),
            s = /[\\^$.*+?()[\]{}|]/g,
            c = /^\[object .+?Constructor\]$/,
            l = Function.prototype,
            f = Object.prototype,
            p = l.toString,
            d = f.hasOwnProperty,
            h = RegExp("^" + p.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = o
    }, function(t, e, n) {
        function o(t) {
            return a(t) && i(t.length) && !!u[r(t)]
        }
        var r = n(5),
            i = n(30),
            a = n(2),
            u = {};
        u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1, t.exports = o
    }, function(t, e, n) {
        function o(t) {
            if (!r(t)) return a(t);
            var e = i(t),
                n = [];
            for (var o in t)("constructor" != o || !e && s.call(t, o)) && n.push(o);
            return n
        }
        var r = n(0),
            i = n(25),
            a = n(85),
            u = Object.prototype,
            s = u.hasOwnProperty;
        t.exports = o
    }, function(t, e, n) {
        function o(t, e, n, o, g, x, m) {
            var _ = t[n],
                j = e[n],
                w = m.get(j);
            if (w) return void r(t, n, w);
            var O = x ? x(_, j, n + "", t, e, m) : void 0,
                S = void 0 === O;
            if (S) {
                var E = l(j),
                    A = !E && p(j),
                    z = !E && !A && y(j);
                O = j, E || A || z ? l(_) ? O = _ : f(_) ? O = u(_) : A ? (S = !1, O = i(j, !0)) : z ? (S = !1, O = a(j, !0)) : O = [] : v(j) || c(j) ? (O = _, c(_) ? O = b(_) : (!h(_) || o && d(_)) && (O = s(j))) : S = !1
            }
            S && (m.set(j, O), g(O, j, o, x, m), m.delete(j)), r(t, n, O)
        }
        var r = n(18),
            i = n(56),
            a = n(57),
            u = n(58),
            s = n(71),
            c = n(27),
            l = n(28),
            f = n(99),
            p = n(29),
            d = n(13),
            h = n(0),
            v = n(100),
            y = n(31),
            b = n(103);
        t.exports = o
    }, function(t, e, n) {
        var o = n(98),
            r = n(21),
            i = n(26),
            a = r ? function(t, e) {
                return r(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: o(e),
                    writable: !0
                })
            } : i;
        t.exports = a
    }, function(t, e) {
        function n(t, e) {
            for (var n = -1, o = Array(t); ++n < t;) o[n] = e(n);
            return o
        }
        t.exports = n
    }, function(t, e) {
        function n(t) {
            return function(e) {
                return t(e)
            }
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t) {
            var e = new t.constructor(t.byteLength);
            return new r(e).set(new r(t)), e
        }
        var r = n(42);
        t.exports = o
    }, function(t, e, n) {
        (function(t) {
            function o(t, e) {
                if (e) return t.slice();
                var n = t.length,
                    o = c ? c(n) : new t.constructor(n);
                return t.copy(o), o
            }
            var r = n(1),
                i = "object" == typeof e && e && !e.nodeType && e,
                a = i && "object" == typeof t && t && !t.nodeType && t,
                u = a && a.exports === i,
                s = u ? r.Buffer : void 0,
                c = s ? s.allocUnsafe : void 0;
            t.exports = o
        }).call(e, n(14)(t))
    }, function(t, e, n) {
        function o(t, e) {
            var n = e ? r(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.length)
        }
        var r = n(55);
        t.exports = o
    }, function(t, e) {
        function n(t, e) {
            var n = -1,
                o = t.length;
            for (e || (e = Array(o)); ++n < o;) e[n] = t[n];
            return e
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t, e, n, o) {
            var a = !n;
            n || (n = {});
            for (var u = -1, s = e.length; ++u < s;) {
                var c = e[u],
                    l = o ? o(n[c], t[c], c, n, t) : void 0;
                void 0 === l && (l = t[c]), a ? i(n, c, l) : r(n, c, l)
            }
            return n
        }
        var r = n(44),
            i = n(10);
        t.exports = o
    }, function(t, e, n) {
        var o = n(1),
            r = o["__core-js_shared__"];
        t.exports = r
    }, function(t, e, n) {
        function o(t) {
            return r(function(e, n) {
                var o = -1,
                    r = n.length,
                    a = r > 1 ? n[r - 1] : void 0,
                    u = r > 2 ? n[2] : void 0;
                for (a = t.length > 3 && "function" == typeof a ? (r--, a) : void 0, u && i(n[0], n[1], u) && (a = r < 3 ? void 0 : a, r = 1), e = Object(e); ++o < r;) {
                    var s = n[o];
                    s && t(e, s, o, a)
                }
                return e
            })
        }
        var r = n(20),
            i = n(72);
        t.exports = o
    }, function(t, e) {
        function n(t) {
            return function(e, n, o) {
                for (var r = -1, i = Object(e), a = o(e), u = a.length; u--;) {
                    var s = a[t ? u : ++r];
                    if (!1 === n(i[s], s, i)) break
                }
                return e
            }
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t, e, n, a, u, s) {
            return i(t) && i(e) && (s.set(e, t), r(t, e, void 0, o, s), s.delete(e)), t
        }
        var r = n(19),
            i = n(0);
        t.exports = o
    }, function(t, e, n) {
        function o(t) {
            var e = a.call(t, s),
                n = t[s];
            try {
                t[s] = void 0;
                var o = !0
            } catch (t) {}
            var r = u.call(t);
            return o && (e ? t[s] = n : delete t[s]), r
        }
        var r = n(16),
            i = Object.prototype,
            a = i.hasOwnProperty,
            u = i.toString,
            s = r ? r.toStringTag : void 0;
        t.exports = o
    }, function(t, e) {
        function n(t, e) {
            return null == t ? void 0 : t[e]
        }
        t.exports = n
    }, function(t, e, n) {
        function o() {
            this.__data__ = r ? r(null) : {}, this.size = 0
        }
        var r = n(7);
        t.exports = o
    }, function(t, e) {
        function n(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0, e
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t) {
            var e = this.__data__;
            if (r) {
                var n = e[t];
                return n === i ? void 0 : n
            }
            return u.call(e, t) ? e[t] : void 0
        }
        var r = n(7),
            i = "__lodash_hash_undefined__",
            a = Object.prototype,
            u = a.hasOwnProperty;
        t.exports = o
    }, function(t, e, n) {
        function o(t) {
            var e = this.__data__;
            return r ? void 0 !== e[t] : a.call(e, t)
        }
        var r = n(7),
            i = Object.prototype,
            a = i.hasOwnProperty;
        t.exports = o
    }, function(t, e, n) {
        function o(t, e) {
            var n = this.__data__;
            return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
        }
        var r = n(7),
            i = "__lodash_hash_undefined__";
        t.exports = o
    }, function(t, e, n) {
        function o(t) {
            return "function" != typeof t.constructor || a(t) ? {} : r(i(t))
        }
        var r = n(45),
            i = n(23),
            a = n(25);
        t.exports = o
    }, function(t, e, n) {
        function o(t, e, n) {
            if (!u(n)) return !1;
            var o = typeof e;
            return !!("number" == o ? i(n) && a(e, n.length) : "string" == o && e in n) && r(n[e], t)
        }
        var r = n(8),
            i = n(12),
            a = n(24),
            u = n(0);
        t.exports = o
    }, function(t, e) {
        function n(t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t) {
            return !!i && i in t
        }
        var r = n(60),
            i = function() {
                var t = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
                return t ? "Symbol(src)_1." + t : ""
            }();
        t.exports = o
    }, function(t, e) {
        function n() {
            this.__data__ = [], this.size = 0
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t) {
            var e = this.__data__,
                n = r(e, t);
            return !(n < 0) && (n == e.length - 1 ? e.pop() : a.call(e, n, 1), --this.size, !0)
        }
        var r = n(4),
            i = Array.prototype,
            a = i.splice;
        t.exports = o
    }, function(t, e, n) {
        function o(t) {
            var e = this.__data__,
                n = r(e, t);
            return n < 0 ? void 0 : e[n][1]
        }
        var r = n(4);
        t.exports = o
    }, function(t, e, n) {
        function o(t) {
            return r(this.__data__, t) > -1
        }
        var r = n(4);
        t.exports = o
    }, function(t, e, n) {
        function o(t, e) {
            var n = this.__data__,
                o = r(n, t);
            return o < 0 ? (++this.size, n.push([t, e])) : n[o][1] = e, this
        }
        var r = n(4);
        t.exports = o
    }, function(t, e, n) {
        function o() {
            this.size = 0, this.__data__ = {
                hash: new r,
                map: new(a || i),
                string: new r
            }
        }
        var r = n(39),
            i = n(3),
            a = n(15);
        t.exports = o
    }, function(t, e, n) {
        function o(t) {
            var e = r(this, t).delete(t);
            return this.size -= e ? 1 : 0, e
        }
        var r = n(6);
        t.exports = o
    }, function(t, e, n) {
        function o(t) {
            return r(this, t).get(t)
        }
        var r = n(6);
        t.exports = o
    }, function(t, e, n) {
        function o(t) {
            return r(this, t).has(t)
        }
        var r = n(6);
        t.exports = o
    }, function(t, e, n) {
        function o(t, e) {
            var n = r(this, t),
                o = n.size;
            return n.set(t, e), this.size += n.size == o ? 0 : 1, this
        }
        var r = n(6);
        t.exports = o
    }, function(t, e) {
        function n(t) {
            var e = [];
            if (null != t)
                for (var n in Object(t)) e.push(n);
            return e
        }
        t.exports = n
    }, function(t, e, n) {
        (function(t) {
            var o = n(22),
                r = "object" == typeof e && e && !e.nodeType && e,
                i = r && "object" == typeof t && t && !t.nodeType && t,
                a = i && i.exports === r,
                u = a && o.process,
                s = function() {
                    try {
                        return u && u.binding && u.binding("util")
                    } catch (t) {}
                }();
            t.exports = s
        }).call(e, n(14)(t))
    }, function(t, e) {
        function n(t) {
            return r.call(t)
        }
        var o = Object.prototype,
            r = o.toString;
        t.exports = n
    }, function(t, e) {
        function n(t, e) {
            return function(n) {
                return t(e(n))
            }
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t, e, n) {
            return e = i(void 0 === e ? t.length - 1 : e, 0),
                function() {
                    for (var o = arguments, a = -1, u = i(o.length - e, 0), s = Array(u); ++a < u;) s[a] = o[e + a];
                    a = -1;
                    for (var c = Array(e + 1); ++a < e;) c[a] = o[a];
                    return c[e] = n(s), r(t, this, c)
                }
        }
        var r = n(17),
            i = Math.max;
        t.exports = o
    }, function(t, e, n) {
        var o = n(52),
            r = n(91),
            i = r(o);
        t.exports = i
    }, function(t, e) {
        function n(t) {
            var e = 0,
                n = 0;
            return function() {
                var a = i(),
                    u = r - (a - n);
                if (n = a, u > 0) {
                    if (++e >= o) return arguments[0]
                } else e = 0;
                return t.apply(void 0, arguments)
            }
        }
        var o = 800,
            r = 16,
            i = Date.now;
        t.exports = n
    }, function(t, e, n) {
        function o() {
            this.__data__ = new r, this.size = 0
        }
        var r = n(3);
        t.exports = o
    }, function(t, e) {
        function n(t) {
            var e = this.__data__,
                n = e.delete(t);
            return this.size = e.size, n
        }
        t.exports = n
    }, function(t, e) {
        function n(t) {
            return this.__data__.get(t)
        }
        t.exports = n
    }, function(t, e) {
        function n(t) {
            return this.__data__.has(t)
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t, e) {
            var n = this.__data__;
            if (n instanceof r) {
                var o = n.__data__;
                if (!i || o.length < u - 1) return o.push([t, e]), this.size = ++n.size, this;
                n = this.__data__ = new a(o)
            }
            return n.set(t, e), this.size = n.size, this
        }
        var r = n(3),
            i = n(15),
            a = n(40),
            u = 200;
        t.exports = o
    }, function(t, e) {
        function n(t) {
            if (null != t) {
                try {
                    return r.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }
        var o = Function.prototype,
            r = o.toString;
        t.exports = n
    }, function(t, e) {
        function n(t) {
            return function() {
                return t
            }
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t) {
            return i(t) && r(t)
        }
        var r = n(12),
            i = n(2);
        t.exports = o
    }, function(t, e, n) {
        function o(t) {
            if (!a(t) || r(t) != u) return !1;
            var e = i(t);
            if (null === e) return !0;
            var n = f.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && l.call(n) == p
        }
        var r = n(5),
            i = n(23),
            a = n(2),
            u = "[object Object]",
            s = Function.prototype,
            c = Object.prototype,
            l = s.toString,
            f = c.hasOwnProperty,
            p = l.call(Object);
        t.exports = o
    }, function(t, e, n) {
        var o = n(19),
            r = n(61),
            i = r(function(t, e, n, r) {
                o(t, e, n, r)
            });
        t.exports = i
    }, function(t, e) {
        function n() {
            return !1
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t) {
            return r(t, i(t))
        }
        var r = n(59),
            i = n(32);
        t.exports = o
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n</svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n</svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n</svg>'
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }])
});