!function t(e, i, n) {
    function s(o, r) {
        if (!i[o]) {
            if (!e[o]) {
                var l = "function" == typeof require && require;
                if (!r && l)
                    return l(o, !0);
                if (a)
                    return a(o, !0);
                var c = new Error("Cannot find module '" + o + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var h = i[o] = {
                exports: {}
            };
            e[o][0].call(h.exports, (function(t) {
                return s(e[o][1][t] || t)
            }
            ), h, h.exports, t, e, i, n)
        }
        return i[o].exports
    }
    for (var a = "function" == typeof require && require, o = 0; o < n.length; o++)
        s(n[o]);
    return s
}({
    1: [function(t, e, i) {
        "use strict";
        e.exports = {
            EventEmitterMicro: t(2)
        }
    }
    , {
        2: 2
    }],
    2: [function(t, e, i) {
        "use strict";
        function n() {
            this._events = {}
        }
        let s = n.prototype;
        s.on = function(t, e) {
            return this._events[t] = this._events[t] || [],
            this._events[t].unshift(e),
            e
        }
        ,
        s.once = function(t, e) {
            let i = this;
            return this.on(t, (function n(s) {
                i.off(t, n),
                void 0 !== s ? e(s) : e()
            }
            ))
        }
        ,
        s.off = function(t, e) {
            if (!this.has(t))
                return;
            if (1 === arguments.length)
                return this._events[t] = null,
                void delete this._events[t];
            let i = this._events[t].indexOf(e);
            -1 !== i && this._events[t].splice(i, 1)
        }
        ,
        s.trigger = function(t, e) {
            if (this.has(t))
                for (let i = this._events[t].length - 1; i >= 0; i--)
                    void 0 !== e ? this._events[t][i](e) : this._events[t][i]()
        }
        ,
        s.has = function(t) {
            return t in this._events != !1 && 0 !== this._events[t].length
        }
        ,
        s.destroy = function() {
            for (let t in this._events)
                this._events[t] = null;
            this._events = null
        }
        ,
        e.exports = n
    }
    , {}],
    3: [function(t, e, i) {
        "use strict";
        const n = t(5)
          , s = {
            className: "footer"
        };
        e.exports = class {
            constructor(t, e) {
                e = Object.assign({}, s, e),
                this.el = t,
                this._selectors = {
                    wrapper: "." + e.className,
                    directory: e.directorySelector || `.${e.className}-directory`,
                    mini: e.miniSelector || `.${e.className}-mini`
                },
                this._initializeDirectory(e),
                this._initializeLangLink()
            }
            _initializeDirectory(t) {
                if (this._directory = this.el.querySelector(this._selectors.directory),
                !this._directory)
                    return;
                this._directory.querySelectorAll(this._selectors.directory + "-c-section").forEach(e => {
                    const i = e.querySelector(this._selectors.directory + "-c-s-t-button")
                      , s = e.querySelector(this._selectors.directory + "-c-s-t-icon")
                      , a = e.querySelector(this._selectors.directory + "-c-s-list");
                    n.create(e, i, s, a, {
                        expandedClassName: t.className + "-d-c-expanded"
                    })
                }
                )
            }
            _initializeLangLink() {
                if (this._langLink = this.el.querySelector(this._selectors.mini + "-locale-lang"),
                !this._langLink)
                    return;
                let t = window.location.pathname;
                const e = this._langLink.getAttribute("data-locale-current")
                  , i = this._langLink.pathname;
                if (t.includes(e)) {
                    t = t.replace(e, i);
                    t.startsWith("/") || (t = "/" + t),
                    this._langLink.href = t
                }
            }
        }
    }
    , {
        5: 5
    }],
    4: [function(t, e, i) {
        const n = {
            collapsed: "10.075 0.675 5.5 5.323 0.925 0.675",
            halfway: "10.075 3 5.5 3 0.925 3",
            expanded: "10.075 5.325 5.5 0.676 0.925 5.325"
        }
          , s = {
            Template: `<svg class="footer-icon-svg" width="11" height="6" viewBox="0 0 11 6">\n\t<polyline data-footer-icon-shape stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd" points="${n.collapsed}">\n\t\t<animate\n\t\t\tdata-footer-animate="expand"\n\t\t\tattributeName="points"\n\t\t\tvalues="${n.collapsed};\n\t\t\t\t\t${n.halfway};\n\t\t\t\t\t${n.expanded}"\n\t\t\tdur="320ms"\n\t\t\tbegin="indefinite"\n\t\t\tfill="freeze"\n\t\t\tkeyTimes="0;\n\t\t\t\t\t0.5;\n\t\t\t\t\t1"\n\t\t\tcalcMode="spline"\n\t\t\tkeySplines="0.12, 0, 0.38, 0;\n\t\t\t\t\t\t0.2, 1, 0.68, 1"\n\t\t/>\n\t\t<animate\n\t\t\tdata-footer-animate="collapse"\n\t\t\tattributeName="points"\n\t\t\tvalues="${n.expanded};\n\t\t\t\t\t${n.halfway};\n\t\t\t\t\t${n.collapsed}"\n\t\t\tdur="320ms"\n\t\t\tbegin="indefinite"\n\t\t\tfill="freeze"\n\t\t\tkeyTimes="0;\n\t\t\t\t\t0.5;\n\t\t\t\t\t1"\n\t\t\tcalcMode="spline"\n\t\t\tkeySplines="0.2, 0, 0.68, 0;\n\t\t\t\t\t\t0.2, 1, 0.68, 1"\n\t\t/>\n\t</polyline>\n</svg>`,
            Points: n,
            Selector: "[data-footer-icon]",
            ShapeSelector: "[data-footer-icon-shape]",
            ExpandAnimationSelector: '[data-footer-animate="expand"]',
            CollapseAnimationSelector: '[data-footer-animate="collapse"]'
        };
        e.exports = s
    }
    , {}],
    5: [function(t, e, i) {
        const n = t(7)
          , s = t(4)
          , a = {
            expandedClassName: "footer-d-c-expanded"
        }
          , o = new n({
            breakpoints: [{
                name: "xsmall",
                mediaQuery: "only screen and (max-width: 480px)"
            }, {
                name: "small",
                mediaQuery: "only screen and (min-width: 481px) and (max-width: 833px)"
            }, {
                name: "medium",
                mediaQuery: "only screen and (min-width: 834px) and (max-width: 1023px)"
            }, {
                name: "large",
                mediaQuery: "only screen and (min-width: 1024px)"
            }]
        });
        class r {
            constructor(t, e, i, o, l) {
                this.options = Object.assign({}, a, l),
                this.section = t,
                this.button = e,
                this.icon = i,
                this.list = o,
                this.expanded = !1,
                this.icon.innerHTML = s.Template,
                this.icon.iconExpandAnimationEl = this.icon.querySelector(s.ExpandAnimationSelector),
                this.icon.iconCollapseAnimationEl = this.icon.querySelector(s.CollapseAnimationSelector),
                this.button.addEventListener("click", this.toggle.bind(this)),
                r._viewports.on(n.CHANGE_EVENTS.VIEWPORT, this.onViewportChange.bind(this));
                const c = r._viewports.getBreakpoint();
                this.onViewportChange({
                    viewport: c
                })
            }
            static create(t, e, i, n, s) {
                return new r(t,e,i,n,s)
            }
            isExpanded() {
                return this.expanded
            }
            toggle() {
                this.isExpanded() ? this.collapse() : this.expand()
            }
            expand() {
                this.expanded || (this.icon.iconExpandAnimationEl.beginElement(),
                this.expanded = !0,
                this.section.classList.add(this.options.expandedClassName),
                this.button.ariaExpanded = !0)
            }
            collapse() {
                this.expanded && (this.icon.iconCollapseAnimationEl.beginElement(),
                this.expanded = !1,
                this.section.classList.remove(this.options.expandedClassName),
                this.button.ariaExpanded = !1)
            }
            _isBreakPointWithMenu(t) {
                return "small" === t || "xsmall" === t
            }
            onViewportChange(t) {
                this._isBreakPointWithMenu(t.viewport) ? (this.button.removeAttribute("disabled"),
                this.button.setAttribute("aria-expanded", "false"),
                this.button.setAttribute("aria-controls", this.list.id)) : (this.collapse(),
                this.button.setAttribute("disabled", ""),
                this.button.removeAttribute("aria-expanded"),
                this.button.removeAttribute("aria-controls"))
            }
            destroy() {
                this.button.removeEventListener("click", this.toggle.bind(this))
            }
        }
        r._viewports = o,
        e.exports = r
    }
    , {
        4: 4,
        7: 7
    }],
    6: [function(t, e, i) {
        e.exports = class {
            constructor(t, e) {
                this._target = t,
                this._tests = {},
                this.addTests(e)
            }
            addTests(t) {
                this._tests = Object.assign(this._tests, t)
            }
            htmlClass() {
                this._target.classList.remove("no-js"),
                this._target.classList.add("js");
                for (let t of Object.keys(this._tests))
                    this._addClass(t)
            }
            _supports(t) {
                return void 0 !== this._tests[t] && ("function" == typeof this._tests[t] && (this._tests[t] = this._tests[t]()),
                this._tests[t])
            }
            _addClass(t, e) {
                e = e || "no-",
                this._supports(t) ? this._target.classList.add(t) : this._target.classList.add(e + t)
            }
        }
    }
    , {}],
    7: [function(t, e, i) {
        "use strict";
        const n = t(1).EventEmitterMicro
          , s = [{
            name: "S",
            mediaQuery: "only screen and (max-width: 734px)"
        }, {
            name: "M",
            mediaQuery: "only screen and (min-width: 735px) and (max-width: 1068px)"
        }, {
            name: "L",
            mediaQuery: "only screen and (min-width: 1069px) and (max-width: 1440px)"
        }, {
            name: "X",
            mediaQuery: "only screen and (min-width: 1441px)"
        }]
          , a = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)"
          , o = "only screen and (orientation: portrait)";
        class r extends n {
            constructor(t={}) {
                super(),
                this.BREAKPOINTS = t.breakpoints || s,
                this._setupProperties(),
                this._onRetinaChange = this._onRetinaChange.bind(this),
                this._onOrientationChange = this._onOrientationChange.bind(this),
                this.listenersAdded = {
                    orientation: !1,
                    retina: !1,
                    viewport: !1
                }
            }
            static get CHANGE_EVENTS() {
                return {
                    ORIENTATION: "change:orientation",
                    RETINA: "change:retina",
                    VIEWPORT: "change:viewport"
                }
            }
            on() {
                this._setupListeners(arguments[0]),
                super.on.apply(this, arguments)
            }
            _onRetinaChange() {
                this.trigger(r.CHANGE_EVENTS.RETINA, this)
            }
            _onOrientationChange() {
                this.trigger(r.CHANGE_EVENTS.ORIENTATION, this)
            }
            _setupProperties() {
                Object.defineProperty(this, "retina", {
                    get: () => window.matchMedia(a).matches
                }),
                Object.defineProperty(this, "orientation", {
                    get: () => window.matchMedia(o).matches ? "portrait" : "landscape"
                }),
                this.viewport = this.getBreakpoint()
            }
            _setupListeners(t) {
                if (t !== r.CHANGE_EVENTS.RETINA || this.listenersAdded.retina || (window.matchMedia(a).addListener(this._onRetinaChange),
                this.listenersAdded.retina = !0),
                t !== r.CHANGE_EVENTS.ORIENTATION || this.listenersAdded.orientation || (window.matchMedia(o).addListener(this._onOrientationChange),
                this.listenersAdded.orientation = !0),
                t === r.CHANGE_EVENTS.VIEWPORT && !this.listenersAdded.viewport) {
                    for (let t = 0; t < this.BREAKPOINTS.length; t++) {
                        let e = this.BREAKPOINTS[t];
                        window.matchMedia(e.mediaQuery).addListener(t => {
                            t.matches && (this.oldViewport = this.viewport,
                            this.viewport = e.name,
                            this.trigger(r.CHANGE_EVENTS.VIEWPORT, this))
                        }
                        )
                    }
                    this.listenersAdded.viewport = !0
                }
            }
            getBreakpoint() {
                for (let t = 0; t < this.BREAKPOINTS.length; t++) {
                    let e = this.BREAKPOINTS[t];
                    if (window.matchMedia(e.mediaQuery).matches)
                        return e.name
                }
            }
        }
        e.exports = r
    }
    , {
        1: 1
    }],
    8: [function(t, e, i) {
        "use strict";
        const n = t(9)
          , s = document.getElementById("gf");
        s && (e.exports = new n(s))
    }
    , {
        9: 9
    }],
    9: [function(t, e, i) {
        "use strict";
        const n = t(3)
          , s = t(6);
        e.exports = class extends n {
            constructor(t) {
                super(t, {
                    className: "ac-gf",
                    miniSelector: ".gf-footer"
                });
                new s(t).htmlClass(),
                this._initializeBuyStrip()
            }
            _initializeBuyStrip() {
                if (this._buystrip = this.el.querySelector(this._selectors.wrapper + "-buystrip"),
                !this._buystrip)
                    return;
                this._buystrip.querySelectorAll(this._selectors.wrapper + "-buystrip-info-content").forEach(t => {
                    this._makeBlockLink(t)
                }
                ),
                this._initializeChatLink()
            }
            _makeBlockLink(t) {
                const e = t.querySelector("a");
                if (!e)
                    return;
                const i = document.createElement("a");
                i.className = "gf-block",
                i.href = e.href,
                "analyticsTitle"in e.dataset && (i.dataset.analyticsTitle = e.dataset.analyticsTitle),
                "analyticsExitLink"in e.dataset && (i.dataset.analyticsExitLink = e.dataset.analyticsExitLink);
                const n = document.createElement("span");
                for (n.className = e.className + " gf-block-link",
                n.innerHTML = e.innerHTML,
                e.parentNode.classList.add("with-cta"),
                e.parentNode.replaceChild(n, e),
                t.insertBefore(i, t.firstChild); t.childNodes.length > 1; ) {
                    let e = t.childNodes[1];
                    if (e.href)
                        break;
                    i.appendChild(e)
                }
            }
            _initializeChatLink() {
                if (this._chatLink = this._buystrip.querySelector(this._selectors.wrapper + "-buystrip-info-cta-chat"),
                this._chatLink) {
                    const t = this._chatLink.parentNode;
                    t.href && (this._chatLink = t),
                    this._onChatLinkClick = this._onChatLinkClick.bind(this),
                    this._chatLink.addEventListener("click", this._onChatLinkClick)
                }
            }
            _onChatLinkClick(t) {
                t.preventDefault(),
                window.open(this._chatLink.href, "chat", "width=375,height=773")
            }
        }
    }
    , {
        3: 3,
        6: 6
    }]
}, {}, [8]);
