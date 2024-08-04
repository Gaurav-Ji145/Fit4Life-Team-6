/* 
 CanvasJS Chart - v3.10.1 GA - https://canvasjs.com/ 
 Copyright 2024 fenopix

 --------------------- License Information --------------------
 CanvasJS Chart is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
 https://canvasjs.com/license/


 ---------------------Free for Non-Commercial Use--------------------
 
 For non-commercial purposes you can use the software for free under Creative Commons Attribution-NonCommercial 3.0 License.
 A credit Link is added to the chart which should be preserved. Refer to the following link for further details on the same.
 https://creativecommons.org/licenses/by-nc/3.0/deed.en_US
 */

/*tslint:disable*/
/*eslint-disable*/
/*jshint ignore:start*/
(function () {
  function pa(d, m) {
    d.prototype = eb(m.prototype);
    d.prototype.constructor = d;
    d.base = m.prototype;
  }
  function eb(d) {
    function m() {}
    m.prototype = d;
    return new m();
  }
  function Ya(d, m, T) {
    "millisecond" === T
      ? d.setMilliseconds(d.getMilliseconds() + 1 * m)
      : "second" === T
      ? d.setSeconds(d.getSeconds() + 1 * m)
      : "minute" === T
      ? d.setMinutes(d.getMinutes() + 1 * m)
      : "hour" === T
      ? d.setHours(d.getHours() + 1 * m)
      : "day" === T
      ? d.setDate(d.getDate() + 1 * m)
      : "week" === T
      ? d.setDate(d.getDate() + 7 * m)
      : "month" === T
      ? d.setMonth(d.getMonth() + 1 * m)
      : "year" === T && d.setFullYear(d.getFullYear() + 1 * m);
    return d;
  }
  function da(d, m) {
    var T = !1;
    0 > d && ((T = !0), (d *= -1));
    d = "" + d;
    for (m = m ? m : 1; d.length < m; ) d = "0" + d;
    return T ? "-" + d : d;
  }
  function Ga(d) {
    if (!d) return d;
    d = d.replace(/^\s\s*/, "");
    for (var m = /\s/, T = d.length; m.test(d.charAt(--T)); );
    return d.slice(0, T + 1);
  }
  function za(d) {
    d.roundRect = function (d, T, n, v, ra, A, t, B) {
      t && (this.fillStyle = t);
      B && (this.strokeStyle = B);
      "undefined" === typeof ra && (ra = 5);
      this.lineWidth = A;
      this.beginPath();
      this.moveTo(d + ra, T);
      this.lineTo(d + n - ra, T);
      this.quadraticCurveTo(d + n, T, d + n, T + ra);
      this.lineTo(d + n, T + v - ra);
      this.quadraticCurveTo(d + n, T + v, d + n - ra, T + v);
      this.lineTo(d + ra, T + v);
      this.quadraticCurveTo(d, T + v, d, T + v - ra);
      this.lineTo(d, T + ra);
      this.quadraticCurveTo(d, T, d + ra, T);
      this.closePath();
      t && this.fill();
      B && 0 < A && this.stroke();
    };
  }
  function Sa(d, m) {
    return d - m;
  }
  function U(d) {
    var m = ((d & 16711680) >> 16).toString(16),
      n = ((d & 65280) >> 8).toString(16);
    d = ((d & 255) >> 0).toString(16);
    m = 2 > m.length ? "0" + m : m;
    n = 2 > n.length ? "0" + n : n;
    d = 2 > d.length ? "0" + d : d;
    return "#" + m + n + d;
  }
  function fb(d, m) {
    var n = this.length >>> 0,
      v = Number(m) || 0,
      v = 0 > v ? Math.ceil(v) : Math.floor(v);
    for (0 > v && (v += n); v < n; v++)
      if (v in this && this[v] === d) return v;
    return -1;
  }
  function n(d) {
    return null === d || "undefined" === typeof d;
  }
  function Da(d) {
    d.indexOf || (d.indexOf = fb);
    return d;
  }
  function gb(d) {
    if (va.fSDec)
      d[ia("`eeDwdouMhrudods")](ia("e`u`@ohl`uhnoHuds`uhnoDoe"), function () {
        va._fTWm && va._fTWm(d);
      });
  }
  function Za(d, m, n) {
    n = n || "normal";
    var v = d + "_" + m + "_" + n,
      $ = $a[v];
    if (isNaN($)) {
      try {
        if (!xa) {
          var ra = document.body;
          xa = document.createElement("span");
          xa.innerHTML = "";
          var A = document.createTextNode("Mpgyi");
          xa.appendChild(A);
          ra.appendChild(xa);
        }
        xa.style.display = "";
        Q(xa, {
          position: "absolute",
          left: "0px",
          top: "-20000px",
          padding: "0px",
          margin: "0px",
          border: "none",
          whiteSpace: "pre",
          lineHeight: "normal",
          fontFamily: d,
          fontSize: m + "px",
          fontWeight: n,
        });
        $ = Math.round(xa.offsetHeight);
        xa.style.display = "none";
      } catch (t) {
        $ = Math.ceil(1.1 * m);
      }
      $ = Math.max($, m);
      $a[v] = $;
    }
    return $;
  }
  function G(d, m) {
    var n = [];
    if (
      (n = {
        solid: [],
        shortDash: [3, 1],
        shortDot: [1, 1],
        shortDashDot: [3, 1, 1, 1],
        shortDashDotDot: [3, 1, 1, 1, 1, 1],
        dot: [1, 2],
        dash: [4, 2],
        dashDot: [4, 2, 1, 2],
        longDash: [8, 2],
        longDashDot: [8, 2, 1, 2],
        longDashDotDot: [8, 2, 1, 2, 1, 2],
      }[d || "solid"])
    )
      for (var v = 0; v < n.length; v++) n[v] *= m;
    else n = [];
    return n;
  }
  function H(d, m, T, v, $) {
    v = v || [];
    $ = n($) ? (hb ? { passive: !1, capture: !1 } : !1) : $;
    v.push([d, m, T, $]);
    return d.addEventListener
      ? (d.addEventListener(m, T, $), T)
      : d.attachEvent
      ? ((v = function (m) {
          m = m || window.event;
          m.preventDefault =
            m.preventDefault ||
            function () {
              m.returnValue = !1;
            };
          m.stopPropagation =
            m.stopPropagation ||
            function () {
              m.cancelBubble = !0;
            };
          T.call(d, m);
        }),
        d.attachEvent("on" + m, v),
        v)
      : !1;
  }
  function ib(d) {
    if (d._menuButton)
      d.exportEnabled
        ? (Q(d._menuButton, {
            backgroundColor: d.toolbar.itemBackgroundColor,
            color: d.toolbar.fontColor,
          }),
          La(d._menuButton),
          ta(d, d._menuButton, "menu"),
          0 >= navigator.userAgent.search("MSIE") &&
            d._menuButton.childNodes[0] &&
            Q(d._menuButton.childNodes[0], {
              WebkitFilter: "invert(0%)",
              filter: "invert(0%)",
            }))
        : wa(d._menuButton);
    else if (d.exportEnabled && v) {
      var m = !1;
      d._menuButton = document.createElement("button");
      ta(d, d._menuButton, "menu");
      d._toolBar.appendChild(d._menuButton);
      H(
        d._menuButton,
        "touchstart",
        function (d) {
          m = !0;
        },
        d.allDOMEventHandlers
      );
      H(
        d._menuButton,
        "click",
        function () {
          "none" !== d._dropdownMenu.style.display ||
            (d._dropDownCloseTime &&
              500 >= new Date().getTime() - d._dropDownCloseTime.getTime()) ||
            ((d._dropdownMenu.style.display = "block"),
            d._menuButton.blur(),
            d._dropdownMenu.focus());
        },
        d.allDOMEventHandlers,
        !0
      );
      H(
        d._menuButton,
        "mousemove",
        function () {
          m ||
            (Q(d._menuButton, {
              backgroundColor: d.toolbar.itemBackgroundColorOnHover,
              color: d.toolbar.fontColorOnHover,
            }),
            0 >= navigator.userAgent.search("MSIE") &&
              Q(d._menuButton.childNodes[0], {
                WebkitFilter: "invert(100%)",
                filter: "invert(100%)",
              }));
        },
        d.allDOMEventHandlers,
        !0
      );
      H(
        d._menuButton,
        "mouseout",
        function () {
          m ||
            (Q(d._menuButton, {
              backgroundColor: d.toolbar.itemBackgroundColor,
              color: d.toolbar.fontColor,
            }),
            0 >= navigator.userAgent.search("MSIE") &&
              Q(d._menuButton.childNodes[0], {
                WebkitFilter: "invert(0%)",
                filter: "invert(0%)",
              }));
        },
        d.allDOMEventHandlers,
        !0
      );
    }
    if (d.exportEnabled && d._dropdownMenu) {
      var n = d.theme && -1 !== d.theme.indexOf("dark") ? "black" : "#888888";
      Q(d._dropdownMenu, {
        backgroundColor: d.toolbar.itemBackgroundColor,
        color: d.toolbar.fontColor,
        boxShadow: "2px 2px 10px " + n,
      });
      for (
        var n = d._dropdownMenu.childNodes,
          P = [
            d._cultureInfo.printText,
            d._cultureInfo.saveJPGText,
            d._cultureInfo.savePNGText,
          ],
          $ = 0;
        $ < P.length;
        $++
      )
        Q(n[$], {
          backgroundColor: d.toolbar.itemBackgroundColor,
          color: d.toolbar.fontColor,
        }),
          (n[$].innerHTML = P[$]);
    } else
      !d._dropdownMenu &&
        d.exportEnabled &&
        v &&
        ((m = !1),
        (d._dropdownMenu = document.createElement("div")),
        d._dropdownMenu.setAttribute("tabindex", -1),
        (n = d.theme && -1 !== d.theme.indexOf("dark") ? "black" : "#888888"),
        Q(d._dropdownMenu, {
          position: "absolute",
          zIndex: 1,
          userSelect: "none",
          MozUserSeelct: "none",
          WebkitUserSelect: "none",
          msUserSelect: "none",
          cursor: "pointer",
          right: "0px",
          top: "25px",
          minWidth: "120px",
          outline: 0,
          fontSize: "14px",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "5px 0px 5px 0px",
          textAlign: "left",
          lineHeight: "10px",
          backgroundColor: d.toolbar.itemBackgroundColor,
          boxShadow: "2px 2px 10px " + n,
        }),
        (d._dropdownMenu.style.display = "none"),
        d._toolBar.appendChild(d._dropdownMenu),
        H(
          d._dropdownMenu,
          "blur",
          function () {
            wa(d._dropdownMenu);
            d._dropDownCloseTime = new Date();
          },
          d.allDOMEventHandlers,
          !0
        ),
        (n = document.createElement("div")),
        Q(n, { padding: "12px 8px 12px 8px" }),
        (n.innerHTML = d._cultureInfo.printText),
        (n.style.backgroundColor = d.toolbar.itemBackgroundColor),
        (n.style.color = d.toolbar.fontColor),
        d._dropdownMenu.appendChild(n),
        H(
          n,
          "touchstart",
          function (d) {
            m = !0;
          },
          d.allDOMEventHandlers
        ),
        H(
          n,
          "mousemove",
          function () {
            m ||
              ((this.style.backgroundColor =
                d.toolbar.itemBackgroundColorOnHover),
              (this.style.color = d.toolbar.fontColorOnHover));
          },
          d.allDOMEventHandlers,
          !0
        ),
        H(
          n,
          "mouseout",
          function () {
            m ||
              ((this.style.backgroundColor = d.toolbar.itemBackgroundColor),
              (this.style.color = d.toolbar.fontColor));
          },
          d.allDOMEventHandlers,
          !0
        ),
        H(
          n,
          "click",
          function () {
            d.print();
            wa(d._dropdownMenu);
          },
          d.allDOMEventHandlers,
          !0
        ),
        (n = document.createElement("div")),
        Q(n, { padding: "12px 8px 12px 8px" }),
        (n.innerHTML = d._cultureInfo.saveJPGText),
        (n.style.backgroundColor = d.toolbar.itemBackgroundColor),
        (n.style.color = d.toolbar.fontColor),
        d._dropdownMenu.appendChild(n),
        H(
          n,
          "touchstart",
          function (d) {
            m = !0;
          },
          d.allDOMEventHandlers
        ),
        H(
          n,
          "mousemove",
          function () {
            m ||
              ((this.style.backgroundColor =
                d.toolbar.itemBackgroundColorOnHover),
              (this.style.color = d.toolbar.fontColorOnHover));
          },
          d.allDOMEventHandlers,
          !0
        ),
        H(
          n,
          "mouseout",
          function () {
            m ||
              ((this.style.backgroundColor = d.toolbar.itemBackgroundColor),
              (this.style.color = d.toolbar.fontColor));
          },
          d.allDOMEventHandlers,
          !0
        ),
        H(
          n,
          "click",
          function () {
            d.exportChart({ format: "jpeg", fileName: d.exportFileName });
            wa(d._dropdownMenu);
          },
          d.allDOMEventHandlers,
          !0
        ),
        (n = document.createElement("div")),
        Q(n, { padding: "12px 8px 12px 8px" }),
        (n.innerHTML = d._cultureInfo.savePNGText),
        (n.style.backgroundColor = d.toolbar.itemBackgroundColor),
        (n.style.color = d.toolbar.fontColor),
        d._dropdownMenu.appendChild(n),
        H(
          n,
          "touchstart",
          function (d) {
            m = !0;
          },
          d.allDOMEventHandlers
        ),
        H(
          n,
          "mousemove",
          function () {
            m ||
              ((this.style.backgroundColor =
                d.toolbar.itemBackgroundColorOnHover),
              (this.style.color = d.toolbar.fontColorOnHover));
          },
          d.allDOMEventHandlers,
          !0
        ),
        H(
          n,
          "mouseout",
          function () {
            m ||
              ((this.style.backgroundColor = d.toolbar.itemBackgroundColor),
              (this.style.color = d.toolbar.fontColor));
          },
          d.allDOMEventHandlers,
          !0
        ),
        H(
          n,
          "click",
          function () {
            d.exportChart({ format: "png", fileName: d.exportFileName });
            wa(d._dropdownMenu);
          },
          d.allDOMEventHandlers,
          !0
        ));
  }
  function ab(d, m, n) {
    d *= la;
    m *= la;
    d = n.getImageData(d, m, 2, 2).data;
    m = !0;
    for (n = 0; 4 > n; n++)
      if ((d[n] !== d[n + 4]) | (d[n] !== d[n + 8]) | (d[n] !== d[n + 12])) {
        m = !1;
        break;
      }
    return m ? (d[0] << 16) | (d[1] << 8) | d[2] : 0;
  }
  function ma(d, m, n) {
    return d in m ? m[d] : n[d];
  }
  function Ma(d, m, T, P) {
    v && bb
      ? ((P =
          !n(P) && P
            ? d.getContext("2d", { willReadFrequently: !0 })
            : d.getContext("2d")),
        (Na =
          P.webkitBackingStorePixelRatio ||
          P.mozBackingStorePixelRatio ||
          P.msBackingStorePixelRatio ||
          P.oBackingStorePixelRatio ||
          P.backingStorePixelRatio ||
          1),
        (la = Ta / Na),
        (d.width = m * la),
        (d.height = T * la),
        Ta !== Na &&
          ((d.style.width = m + "px"),
          (d.style.height = T + "px"),
          P.scale(la, la)))
      : ((d.width = m), (d.height = T));
  }
  function jb(d) {
    if (!kb) {
      var m = !1,
        n = !1;
      "undefined" === typeof qa.Chart.creditHref
        ? ((d.creditHref = ia("iuuqr;..b`ow`rkr/bnl.")),
          (d.creditText = ia("B`ow`rKR/bnl")))
        : ((m = d.updateOption("creditText")),
          (n = d.updateOption("creditHref")));
      if (d.creditHref && d.creditText) {
        d._creditLink ||
          ((d._creditLink = document.createElement("a")),
          d._creditLink.setAttribute("class", "canvasjs-chart-credit"),
          d._creditLink.setAttribute("title", "JavaScript Charts"),
          Q(d._creditLink, {
            outline: "none",
            margin: "0px",
            position: "absolute",
            right: "2px",
            top: d.height - 14 + "px",
            color: "dimgrey",
            textDecoration: "none",
            fontSize: "11px",
            fontFamily:
              "Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif",
          }),
          d._creditLink.setAttribute("tabIndex", -1),
          d._creditLink.setAttribute("target", "_blank"));
        if (0 === d.renderCount || m || n)
          d._creditLink.setAttribute("href", d.creditHref),
            (d._creditLink.innerHTML = d.creditText);
        d._creditLink && d.creditHref && d.creditText
          ? (d._creditLink.parentElement ||
              d._canvasJSContainer.appendChild(d._creditLink),
            (d._creditLink.style.top = d.height - 14 + "px"))
          : d._creditLink.parentElement &&
            d._canvasJSContainer.removeChild(d._creditLink);
      }
    }
  }
  function ua(d, m, n) {
    Ha && ((this.canvasCount |= 0), window.console.log(++this.canvasCount));
    var P = document.createElement("canvas");
    P.setAttribute("class", "canvasjs-chart-canvas");
    Ma(P, d, m, n);
    v ||
      "undefined" === typeof G_vmlCanvasManager ||
      G_vmlCanvasManager.initElement(P);
    return P;
  }
  function Q(d, m) {
    for (var n in m) d.style[n] = m[n];
  }
  function ta(d, m, n) {
    m.getAttribute("state") ||
      ((m.style.backgroundColor = d.toolbar.itemBackgroundColor),
      (m.style.color = d.toolbar.fontColor),
      (m.style.border = "none"),
      Q(m, {
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
      }));
    m.getAttribute("state") !== n &&
      (m.setAttribute("state", n),
      m.setAttribute("type", "button"),
      Q(m, {
        padding: "5px 12px",
        cursor: "pointer",
        float: "left",
        width: "40px",
        height: "25px",
        outline: "0px",
        verticalAlign: "baseline",
        lineHeight: "0",
      }),
      (m.innerHTML =
        "<img src='" +
        lb[n].image +
        "' alt='" +
        d._cultureInfo[n + "Text"] +
        "' />"),
      Q(m.childNodes[0], { height: "95%", pointerEvents: "none" }));
    m.setAttribute("title", d._cultureInfo[n + "Text"]);
  }
  function La() {
    for (var d = null, m = 0; m < arguments.length; m++)
      (d = arguments[m]), d.style && (d.style.display = "inline");
  }
  function wa() {
    for (var d = null, m = 0; m < arguments.length; m++)
      (d = arguments[m]) && d.style && (d.style.display = "none");
  }
  function Ua(d, m, n, v, $) {
    if (null === d || "undefined" === typeof d)
      return "undefined" === typeof n ? m : n;
    d =
      parseFloat(d.toString()) * (0 <= d.toString().indexOf("%") ? m / 100 : 1);
    "undefined" !== typeof v &&
      ((d = Math.min(v, d)), "undefined" !== typeof $ && (d = Math.max($, d)));
    return !isNaN(d) && d <= m && 0 <= d ? d : "undefined" === typeof n ? m : n;
  }
  function Y(d, m, v, P, $) {
    this._defaultsKey = d;
    this._themeOptionsKey = m;
    this._index = P;
    this.parent = $;
    this._eventListeners = [];
    d = {};
    this.theme && n(this.parent) && n(m) && n(P)
      ? (d = n(this.predefinedThemes[this.theme])
          ? this.predefinedThemes.light1
          : this.predefinedThemes[this.theme])
      : this.parent &&
        this.parent.themeOptions &&
        this.parent.themeOptions[m] &&
        (null === P
          ? (d = this.parent.themeOptions[m])
          : 0 < this.parent.themeOptions[m].length &&
            ((P = Math.min(this.parent.themeOptions[m].length - 1, P)),
            (d = this.parent.themeOptions[m][P])));
    this.themeOptions = d;
    this.options = v ? v : { _isPlaceholder: !0 };
    this.setOptions(this.options, d);
  }
  function Ea(d, m, n, v, $) {
    "undefined" === typeof $ && ($ = 0);
    this._padding = $;
    this._x1 = d;
    this._y1 = m;
    this._x2 = n;
    this._y2 = v;
    this._rightOccupied =
      this._leftOccupied =
      this._bottomOccupied =
      this._topOccupied =
        this._padding;
  }
  function ja(d, m) {
    ja.base.constructor.call(this, "TextBlock", null, m, null, null);
    this.ctx = d;
    this._isDirty = !0;
    this._wrappedText = null;
    this._initialize();
  }
  function Va(d, m) {
    Va.base.constructor.call(this, "Toolbar", "toolbar", m, null, d);
    this.chart = d;
    this.canvas = d.canvas;
    this.ctx = this.chart.ctx;
    this.optionsName = "toolbar";
  }
  function Aa(d, m) {
    Aa.base.constructor.call(this, "Title", "title", m, null, d);
    this.chart = d;
    this.canvas = d.canvas;
    this.ctx = this.chart.ctx;
    this.optionsName = "title";
    if (n(this.options.margin) && d.options.subtitles)
      for (var v = d.options.subtitles, P = 0; P < v.length; P++)
        if (
          ((n(v[P].horizontalAlign) && "center" === this.horizontalAlign) ||
            v[P].horizontalAlign === this.horizontalAlign) &&
          ((n(v[P].verticalAlign) && "top" === this.verticalAlign) ||
            v[P].verticalAlign === this.verticalAlign) &&
          !v[P].dockInsidePlotArea === !this.dockInsidePlotArea
        ) {
          this.margin = 0;
          break;
        }
    "undefined" === typeof this.options.fontSize &&
      (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
    this.height = this.width = null;
    this.bounds = { x1: null, y1: null, x2: null, y2: null };
  }
  function Ia(d, m, n) {
    Ia.base.constructor.call(this, "Subtitle", "subtitles", m, n, d);
    this.chart = d;
    this.canvas = d.canvas;
    this.ctx = this.chart.ctx;
    this.optionsName = "subtitles";
    this.isOptionsInArray = !0;
    "undefined" === typeof this.options.fontSize &&
      (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
    this.height = this.width = null;
    this.bounds = { x1: null, y1: null, x2: null, y2: null };
  }
  function Wa() {
    this.pool = [];
  }
  function Ja(d) {
    var m;
    d && Ka[d] && (m = Ka[d]);
    Ja.base.constructor.call(this, "CultureInfo", null, m, null, null);
  }
  var Ha = !1,
    va = {},
    v = !!document.createElement("canvas").getContext,
    qa = {
      Chart: {
        width: 500,
        height: 400,
        zoomEnabled: !1,
        zoomType: "x",
        backgroundColor: "white",
        theme: "light1",
        animationEnabled: !1,
        animationDuration: 1200,
        dataPointWidth: null,
        dataPointMinWidth: null,
        dataPointMaxWidth: null,
        colorSet: "colorSet1",
        culture: "en",
        creditHref: "",
        creditText: "CanvasJS",
        interactivityEnabled: !0,
        exportEnabled: !1,
        exportFileName: "Chart",
        rangeChanging: null,
        rangeChanged: null,
        publicProperties: {
          title: "readWrite",
          subtitles: "readWrite",
          toolbar: "readWrite",
          toolTip: "readWrite",
          legend: "readWrite",
          axisX: "readWrite",
          axisY: "readWrite",
          axisX2: "readWrite",
          axisY2: "readWrite",
          data: "readWrite",
          options: "readWrite",
          bounds: "readOnly",
          container: "readOnly",
          selectedColorSet: "readOnly",
        },
      },
      Title: {
        padding: 0,
        text: null,
        verticalAlign: "top",
        horizontalAlign: "center",
        fontSize: 20,
        fontFamily: "Calibri",
        fontWeight: "normal",
        fontColor: "black",
        fontStyle: "normal",
        borderThickness: 0,
        borderColor: "black",
        cornerRadius: 0,
        backgroundColor: v ? "transparent" : null,
        margin: 5,
        wrap: !0,
        maxWidth: null,
        textAlign: "center",
        dockInsidePlotArea: !1,
        publicProperties: {
          options: "readWrite",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      Subtitle: {
        padding: 0,
        text: null,
        verticalAlign: "top",
        horizontalAlign: "center",
        fontSize: 14,
        fontFamily: "Calibri",
        fontWeight: "normal",
        fontColor: "black",
        fontStyle: "normal",
        borderThickness: 0,
        borderColor: "black",
        cornerRadius: 0,
        backgroundColor: null,
        margin: 2,
        wrap: !0,
        maxWidth: null,
        textAlign: "center",
        dockInsidePlotArea: !1,
        publicProperties: {
          options: "readWrite",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      Toolbar: {
        itemBackgroundColor: "white",
        itemBackgroundColorOnHover: "#2196f3",
        buttonBorderColor: "#2196f3",
        buttonBorderThickness: 1,
        fontColor: "black",
        fontColorOnHover: "white",
        publicProperties: { options: "readWrite", chart: "readOnly" },
      },
      Legend: {
        name: null,
        verticalAlign: "center",
        horizontalAlign: "right",
        fontSize: 14,
        fontFamily: "calibri",
        fontWeight: "normal",
        fontColor: "black",
        fontStyle: "normal",
        cursor: null,
        itemmouseover: null,
        itemmouseout: null,
        itemmousemove: null,
        itemclick: null,
        dockInsidePlotArea: !1,
        reversed: !1,
        backgroundColor: v ? "transparent" : null,
        borderColor: v ? "transparent" : null,
        borderThickness: 0,
        cornerRadius: 0,
        maxWidth: null,
        maxHeight: null,
        markerMargin: null,
        itemMaxWidth: null,
        itemWidth: null,
        itemWrap: !0,
        itemTextFormatter: null,
        publicProperties: {
          options: "readWrite",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      ToolTip: {
        enabled: !0,
        shared: !1,
        animationEnabled: !0,
        content: null,
        contentFormatter: null,
        reversed: !1,
        backgroundColor: v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
        borderColor: null,
        borderThickness: 2,
        cornerRadius: 5,
        fontSize: 14,
        fontColor: "black",
        fontFamily: "Calibri, Arial, Georgia, serif;",
        fontWeight: "normal",
        fontStyle: "italic",
        updated: null,
        hidden: null,
        publicProperties: { options: "readWrite", chart: "readOnly" },
      },
      Axis: {
        minimum: null,
        maximum: null,
        viewportMinimum: null,
        viewportMaximum: null,
        interval: null,
        intervalType: null,
        reversed: !1,
        logarithmic: !1,
        logarithmBase: 10,
        title: null,
        titleFontColor: "black",
        titleFontSize: 20,
        titleFontFamily: "arial",
        titleFontWeight: "normal",
        titleFontStyle: "normal",
        titleWrap: !0,
        titleMaxWidth: null,
        titleBackgroundColor: v ? "transparent" : null,
        titleBorderColor: v ? "transparent" : null,
        titleBorderThickness: 0,
        titleCornerRadius: 0,
        titleTextAlign: "left",
        labelAngle: 0,
        labelFontFamily: "arial",
        labelFontColor: "black",
        labelFontSize: 12,
        labelFontWeight: "normal",
        labelFontStyle: "normal",
        labelAutoFit: !0,
        labelWrap: !0,
        labelMaxWidth: null,
        labelFormatter: null,
        labelBackgroundColor: v ? "transparent" : null,
        labelBorderColor: v ? "transparent" : null,
        labelBorderThickness: 0,
        labelCornerRadius: 0,
        labelPlacement: "outside",
        labelTextAlign: "left",
        prefix: "",
        suffix: "",
        includeZero: !1,
        tickLength: 5,
        tickColor: "black",
        tickThickness: 1,
        tickPlacement: "outside",
        lineColor: "black",
        lineThickness: 1,
        lineDashType: "solid",
        gridColor: "#A0A0A0",
        gridThickness: 0,
        gridDashType: "solid",
        interlacedColor: v ? "transparent" : null,
        valueFormatString: null,
        margin: 2,
        publicProperties: {
          options: "readWrite",
          stripLines: "readWrite",
          scaleBreaks: "readWrite",
          crosshair: "readWrite",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      StripLine: {
        value: null,
        startValue: null,
        endValue: null,
        color: "orange",
        opacity: null,
        thickness: 2,
        lineDashType: "solid",
        label: "",
        labelPlacement: "inside",
        labelAlign: "far",
        labelWrap: !0,
        labelMaxWidth: null,
        labelBackgroundColor: null,
        labelBorderColor: v ? "transparent" : null,
        labelBorderThickness: 0,
        labelCornerRadius: 0,
        labelFontFamily: "arial",
        labelFontColor: "orange",
        labelFontSize: 12,
        labelFontWeight: "normal",
        labelFontStyle: "normal",
        labelFormatter: null,
        labelTextAlign: "left",
        showOnTop: !1,
        publicProperties: {
          options: "readWrite",
          axis: "readOnly",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      ScaleBreaks: {
        autoCalculate: !1,
        collapsibleThreshold: "25%",
        maxNumberOfAutoBreaks: 2,
        spacing: 8,
        type: "straight",
        color: "#FFFFFF",
        fillOpacity: 0.9,
        lineThickness: 2,
        lineColor: "#E16E6E",
        lineDashType: "solid",
        publicProperties: {
          options: "readWrite",
          customBreaks: "readWrite",
          axis: "readOnly",
          autoBreaks: "readOnly",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      Break: {
        startValue: null,
        endValue: null,
        spacing: 8,
        type: "straight",
        color: "#FFFFFF",
        fillOpacity: 0.9,
        lineThickness: 2,
        lineColor: "#E16E6E",
        lineDashType: "solid",
        publicProperties: {
          options: "readWrite",
          scaleBreaks: "readOnly",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      Crosshair: {
        enabled: !1,
        snapToDataPoint: !1,
        color: "grey",
        opacity: null,
        thickness: 2,
        lineDashType: "solid",
        label: "",
        labelWrap: !0,
        labelMaxWidth: null,
        labelTextAlign: "left",
        labelBackgroundColor: v ? "grey" : null,
        labelBorderColor: v ? "grey" : null,
        labelBorderThickness: 0,
        labelCornerRadius: 0,
        labelFontFamily: v
          ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif"
          : "calibri",
        labelFontSize: 12,
        labelFontColor: "#fff",
        labelFontWeight: "normal",
        labelFontStyle: "normal",
        labelFormatter: null,
        valueFormatString: null,
        updated: null,
        hidden: null,
        publicProperties: {
          options: "readWrite",
          axis: "readOnly",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      DataSeries: {
        name: null,
        dataPoints: null,
        label: "",
        bevelEnabled: !1,
        highlightEnabled: !0,
        cursor: "default",
        indexLabel: "",
        indexLabelPlacement: "auto",
        indexLabelOrientation: "horizontal",
        indexLabelTextAlign: "left",
        indexLabelFontColor: "black",
        indexLabelFontSize: 12,
        indexLabelFontStyle: "normal",
        indexLabelFontFamily: "Arial",
        indexLabelFontWeight: "normal",
        indexLabelBackgroundColor: null,
        indexLabelBorderColor: null,
        indexLabelBorderThickness: 0,
        indexLabelLineColor: "gray",
        indexLabelLineThickness: 1,
        indexLabelLineDashType: "solid",
        indexLabelMaxWidth: null,
        indexLabelWrap: !0,
        indexLabelFormatter: null,
        lineThickness: 2,
        lineDashType: "solid",
        connectNullData: !1,
        nullDataLineDashType: "dash",
        color: null,
        lineColor: null,
        risingColor: "white",
        fallingColor: "red",
        fillOpacity: null,
        startAngle: 0,
        radius: null,
        innerRadius: null,
        explodeOnClick: !0,
        neckHeight: null,
        neckWidth: null,
        reversed: !1,
        valueRepresents: null,
        linkedDataSeriesIndex: null,
        whiskerThickness: 2,
        whiskerDashType: "solid",
        whiskerColor: null,
        whiskerLength: null,
        stemThickness: 2,
        stemColor: null,
        stemDashType: "solid",
        upperBoxColor: "white",
        lowerBoxColor: "white",
        type: "column",
        xValueType: "number",
        axisXType: "primary",
        axisYType: "primary",
        axisXIndex: 0,
        axisYIndex: 0,
        xValueFormatString: null,
        yValueFormatString: null,
        zValueFormatString: null,
        percentFormatString: null,
        showInLegend: !1,
        legendMarkerType: null,
        legendMarkerColor: null,
        legendText: null,
        legendMarkerBorderColor: v ? "transparent" : null,
        legendMarkerBorderThickness: 0,
        markerType: "circle",
        markerColor: null,
        markerSize: null,
        markerBorderColor: v ? "transparent" : null,
        markerBorderThickness: 0,
        mouseover: null,
        mouseout: null,
        mousemove: null,
        click: null,
        toolTipContent: null,
        visible: !0,
        publicProperties: {
          options: "readWrite",
          axisX: "readWrite",
          axisY: "readWrite",
          chart: "readOnly",
        },
      },
      TextBlock: {
        x: 0,
        y: 0,
        width: null,
        height: null,
        maxWidth: null,
        maxHeight: null,
        padding: 0,
        angle: 0,
        text: "",
        horizontalAlign: "center",
        textAlign: "left",
        fontSize: 12,
        fontFamily: "calibri",
        fontWeight: "normal",
        fontColor: "black",
        fontStyle: "normal",
        borderThickness: 0,
        borderColor: "black",
        cornerRadius: 0,
        backgroundColor: null,
        textBaseline: "top",
      },
      CultureInfo: {
        decimalSeparator: ".",
        digitGroupSeparator: ",",
        zoomText: "Zoom",
        panText: "Pan",
        resetText: "Reset",
        menuText: "More Options",
        saveJPGText: "Save as JPEG",
        savePNGText: "Save as PNG",
        printText: "Print",
        days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
          " "
        ),
        shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        months:
          "January February March April May June July August September October November December".split(
            " "
          ),
        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(
          " "
        ),
      },
    },
    Ka = { en: {} },
    t = v ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
    Fa = v ? "Impact, Charcoal, sans-serif" : "Arial",
    Ba = {
      colorSet1:
        "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(
          " "
        ),
      colorSet2:
        "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(
          " "
        ),
      colorSet3:
        "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(
          " "
        ),
    },
    S,
    ca,
    V,
    ha,
    W;
  ca = "#333333";
  V = "#000000";
  S = "#666666";
  W = ha = "#000000";
  var ea = 20,
    B = 14,
    Xa = {
      colorSet: "colorSet1",
      backgroundColor: "#FFFFFF",
      title: {
        fontFamily: Fa,
        fontSize: 32,
        fontColor: ca,
        fontWeight: "normal",
        verticalAlign: "top",
        margin: 5,
      },
      subtitles: [
        {
          fontFamily: Fa,
          fontSize: B,
          fontColor: ca,
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5,
        },
      ],
      data: [
        {
          indexLabelFontFamily: t,
          indexLabelFontSize: B,
          indexLabelFontColor: ca,
          indexLabelFontWeight: "normal",
          indexLabelLineThickness: 1,
        },
      ],
      axisX: [
        {
          titleFontFamily: t,
          titleFontSize: ea,
          titleFontColor: ca,
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: B,
          labelFontColor: V,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: S,
          tickThickness: 1,
          tickColor: S,
          gridThickness: 0,
          gridColor: S,
          stripLines: [
            {
              labelFontFamily: t,
              labelFontSize: B,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: W,
            color: ha,
            thickness: 1,
            lineDashType: "dash",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      axisX2: [
        {
          titleFontFamily: t,
          titleFontSize: ea,
          titleFontColor: ca,
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: B,
          labelFontColor: V,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: S,
          tickThickness: 1,
          tickColor: S,
          gridThickness: 0,
          gridColor: S,
          stripLines: [
            {
              labelFontFamily: t,
              labelFontSize: B,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: W,
            color: ha,
            thickness: 1,
            lineDashType: "dash",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      axisY: [
        {
          titleFontFamily: t,
          titleFontSize: ea,
          titleFontColor: ca,
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: B,
          labelFontColor: V,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: S,
          tickThickness: 1,
          tickColor: S,
          gridThickness: 1,
          gridColor: S,
          stripLines: [
            {
              labelFontFamily: t,
              labelFontSize: B,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: W,
            color: ha,
            thickness: 1,
            lineDashType: "dash",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      axisY2: [
        {
          titleFontFamily: t,
          titleFontSize: ea,
          titleFontColor: ca,
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: B,
          labelFontColor: V,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: S,
          tickThickness: 1,
          tickColor: S,
          gridThickness: 1,
          gridColor: S,
          stripLines: [
            {
              labelFontFamily: t,
              labelFontSize: B,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: W,
            color: ha,
            thickness: 1,
            lineDashType: "dash",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      legend: {
        fontFamily: t,
        fontSize: 14,
        fontColor: ca,
        fontWeight: "bold",
        verticalAlign: "bottom",
        horizontalAlign: "center",
      },
      toolTip: {
        fontFamily: t,
        fontSize: 14,
        fontStyle: "normal",
        cornerRadius: 0,
        borderThickness: 1,
      },
      toolbar: {
        itemBackgroundColor: "white",
        itemBackgroundColorOnHover: "#2196f3",
        buttonBorderColor: "#2196f3",
        buttonBorderThickness: 1,
        fontColor: "black",
        fontColorOnHover: "white",
      },
    };
  V = ca = "#F5F5F5";
  S = "#FFFFFF";
  ha = "#40BAF1";
  W = "#F5F5F5";
  var ea = 20,
    B = 14,
    cb = {
      colorSet: "colorSet2",
      title: {
        fontFamily: t,
        fontSize: 33,
        fontColor: "#3A3A3A",
        fontWeight: "bold",
        verticalAlign: "top",
        margin: 5,
      },
      subtitles: [
        {
          fontFamily: t,
          fontSize: B,
          fontColor: "#3A3A3A",
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5,
        },
      ],
      data: [
        {
          indexLabelFontFamily: t,
          indexLabelFontSize: B,
          indexLabelFontColor: "#666666",
          indexLabelFontWeight: "normal",
          indexLabelLineThickness: 1,
        },
      ],
      axisX: [
        {
          titleFontFamily: t,
          titleFontSize: ea,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: B,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: "#BBBBBB",
          tickThickness: 1,
          tickColor: "#BBBBBB",
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [
            {
              labelFontFamily: t,
              labelFontSize: B,
              labelFontColor: "#FFA500",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FFA500",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      axisX2: [
        {
          titleFontFamily: t,
          titleFontSize: ea,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: B,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: "#BBBBBB",
          tickColor: "#BBBBBB",
          tickThickness: 1,
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [
            {
              labelFontFamily: t,
              labelFontSize: B,
              labelFontColor: "#FFA500",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FFA500",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      axisY: [
        {
          titleFontFamily: t,
          titleFontSize: ea,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: B,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 0,
          lineColor: "#BBBBBB",
          tickColor: "#BBBBBB",
          tickThickness: 1,
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [
            {
              labelFontFamily: t,
              labelFontSize: B,
              labelFontColor: "#FFA500",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FFA500",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      axisY2: [
        {
          titleFontFamily: t,
          titleFontSize: ea,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: B,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 0,
          lineColor: "#BBBBBB",
          tickColor: "#BBBBBB",
          tickThickness: 1,
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [
            {
              labelFontFamily: t,
              labelFontSize: B,
              labelFontColor: "#FFA500",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FFA500",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      legend: {
        fontFamily: t,
        fontSize: 14,
        fontColor: "#3A3A3A",
        fontWeight: "bold",
        verticalAlign: "bottom",
        horizontalAlign: "center",
      },
      toolTip: {
        fontFamily: t,
        fontSize: 14,
        fontStyle: "normal",
        cornerRadius: 0,
        borderThickness: 1,
      },
      toolbar: {
        itemBackgroundColor: "white",
        itemBackgroundColorOnHover: "#2196f3",
        buttonBorderColor: "#2196f3",
        buttonBorderThickness: 1,
        fontColor: "black",
        fontColorOnHover: "white",
      },
    };
  V = ca = "#F5F5F5";
  S = "#FFFFFF";
  ha = "#40BAF1";
  W = "#F5F5F5";
  ea = 20;
  B = 14;
  Fa = {
    colorSet: "colorSet1",
    backgroundColor: "#2A2A2A",
    title: {
      fontFamily: Fa,
      fontSize: 32,
      fontColor: ca,
      fontWeight: "normal",
      verticalAlign: "top",
      margin: 5,
    },
    subtitles: [
      {
        fontFamily: Fa,
        fontSize: B,
        fontColor: ca,
        fontWeight: "normal",
        verticalAlign: "top",
        margin: 5,
      },
    ],
    toolbar: {
      itemBackgroundColor: "#666666",
      itemBackgroundColorOnHover: "#FF7372",
      buttonBorderColor: "#FF7372",
      buttonBorderThickness: 1,
      fontColor: "#F5F5F5",
      fontColorOnHover: "#F5F5F5",
    },
    data: [
      {
        indexLabelFontFamily: t,
        indexLabelFontSize: B,
        indexLabelFontColor: V,
        indexLabelFontWeight: "normal",
        indexLabelLineThickness: 1,
      },
    ],
    axisX: [
      {
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: V,
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: V,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: S,
        tickThickness: 1,
        tickColor: S,
        gridThickness: 0,
        gridColor: S,
        stripLines: [
          {
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1,
          },
        ],
        crosshair: {
          labelFontFamily: t,
          labelFontSize: B,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: W,
          color: ha,
          thickness: 1,
          lineDashType: "dash",
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111",
        },
      },
    ],
    axisX2: [
      {
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: V,
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: V,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: S,
        tickThickness: 1,
        tickColor: S,
        gridThickness: 0,
        gridColor: S,
        stripLines: [
          {
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1,
          },
        ],
        crosshair: {
          labelFontFamily: t,
          labelFontSize: B,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: W,
          color: ha,
          thickness: 1,
          lineDashType: "dash",
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111",
        },
      },
    ],
    axisY: [
      {
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: V,
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: V,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: S,
        tickThickness: 1,
        tickColor: S,
        gridThickness: 1,
        gridColor: S,
        stripLines: [
          {
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1,
          },
        ],
        crosshair: {
          labelFontFamily: t,
          labelFontSize: B,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: W,
          color: ha,
          thickness: 1,
          lineDashType: "dash",
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111",
        },
      },
    ],
    axisY2: [
      {
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: V,
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: V,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: S,
        tickThickness: 1,
        tickColor: S,
        gridThickness: 1,
        gridColor: S,
        stripLines: [
          {
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1,
          },
        ],
        crosshair: {
          labelFontFamily: t,
          labelFontSize: B,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: W,
          color: ha,
          thickness: 1,
          lineDashType: "dash",
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111",
        },
      },
    ],
    legend: {
      fontFamily: t,
      fontSize: 14,
      fontColor: ca,
      fontWeight: "bold",
      verticalAlign: "bottom",
      horizontalAlign: "center",
    },
    toolTip: {
      fontFamily: t,
      fontSize: 14,
      fontStyle: "normal",
      cornerRadius: 0,
      borderThickness: 1,
      fontColor: V,
      backgroundColor: "rgba(0, 0, 0, .7)",
    },
  };
  S = "#FFFFFF";
  V = ca = "#FAFAFA";
  ha = "#40BAF1";
  W = "#F5F5F5";
  var ea = 20,
    B = 14,
    Oa = {
      light1: Xa,
      light2: cb,
      dark1: Fa,
      dark2: {
        colorSet: "colorSet2",
        backgroundColor: "#32373A",
        title: {
          fontFamily: t,
          fontSize: 32,
          fontColor: ca,
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5,
        },
        subtitles: [
          {
            fontFamily: t,
            fontSize: B,
            fontColor: ca,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5,
          },
        ],
        toolbar: {
          itemBackgroundColor: "#666666",
          itemBackgroundColorOnHover: "#FF7372",
          buttonBorderColor: "#FF7372",
          buttonBorderThickness: 1,
          fontColor: "#F5F5F5",
          fontColorOnHover: "#F5F5F5",
        },
        data: [
          {
            indexLabelFontFamily: t,
            indexLabelFontSize: B,
            indexLabelFontColor: V,
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1,
          },
        ],
        axisX: [
          {
            titleFontFamily: t,
            titleFontSize: ea,
            titleFontColor: V,
            titleFontWeight: "normal",
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: V,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: S,
            tickThickness: 1,
            tickColor: S,
            gridThickness: 0,
            gridColor: S,
            stripLines: [
              {
                labelFontFamily: t,
                labelFontSize: B,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1,
              },
            ],
            crosshair: {
              labelFontFamily: t,
              labelFontSize: B,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: W,
              color: ha,
              thickness: 1,
              lineDashType: "dash",
            },
            scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111",
            },
          },
        ],
        axisX2: [
          {
            titleFontFamily: t,
            titleFontSize: ea,
            titleFontColor: V,
            titleFontWeight: "normal",
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: V,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: S,
            tickThickness: 1,
            tickColor: S,
            gridThickness: 0,
            gridColor: S,
            stripLines: [
              {
                labelFontFamily: t,
                labelFontSize: B,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1,
              },
            ],
            crosshair: {
              labelFontFamily: t,
              labelFontSize: B,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: W,
              color: ha,
              thickness: 1,
              lineDashType: "dash",
            },
            scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111",
            },
          },
        ],
        axisY: [
          {
            titleFontFamily: t,
            titleFontSize: ea,
            titleFontColor: V,
            titleFontWeight: "normal",
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: V,
            labelFontWeight: "normal",
            lineThickness: 0,
            lineColor: S,
            tickThickness: 1,
            tickColor: S,
            gridThickness: 1,
            gridColor: S,
            stripLines: [
              {
                labelFontFamily: t,
                labelFontSize: B,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1,
              },
            ],
            crosshair: {
              labelFontFamily: t,
              labelFontSize: B,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: W,
              color: ha,
              thickness: 1,
              lineDashType: "dash",
            },
            scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111",
            },
          },
        ],
        axisY2: [
          {
            titleFontFamily: t,
            titleFontSize: ea,
            titleFontColor: V,
            titleFontWeight: "normal",
            labelFontFamily: t,
            labelFontSize: B,
            labelFontColor: V,
            labelFontWeight: "normal",
            lineThickness: 0,
            lineColor: S,
            tickThickness: 1,
            tickColor: S,
            gridThickness: 1,
            gridColor: S,
            stripLines: [
              {
                labelFontFamily: t,
                labelFontSize: B,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1,
              },
            ],
            crosshair: {
              labelFontFamily: t,
              labelFontSize: B,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: W,
              color: ha,
              thickness: 1,
              lineDashType: "dash",
            },
            scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111",
            },
          },
        ],
        legend: {
          fontFamily: t,
          fontSize: 14,
          fontColor: ca,
          fontWeight: "bold",
          verticalAlign: "bottom",
          horizontalAlign: "center",
        },
        toolTip: {
          fontFamily: t,
          fontSize: 14,
          fontStyle: "normal",
          cornerRadius: 0,
          borderThickness: 1,
          fontColor: V,
          backgroundColor: "rgba(0, 0, 0, .7)",
        },
      },
      theme1: Xa,
      theme2: cb,
      theme3: Xa,
    },
    M = {
      numberDuration: 1,
      yearDuration: 314496e5,
      monthDuration: 2592e6,
      weekDuration: 6048e5,
      dayDuration: 864e5,
      hourDuration: 36e5,
      minuteDuration: 6e4,
      secondDuration: 1e3,
      millisecondDuration: 1,
      dayOfWeekFromInt:
        "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    };
  (function () {
    va.fSDec = function (d) {
      for (var m = "", n = 0; n < d.length; n++)
        m += String.fromCharCode(
          Math.ceil(d.length / 57 / 5) ^ d.charCodeAt(n)
        );
      return m;
    };
    delete qa[va.fSDec("Bi`su")][va.fSDec("bsdehuIsdg")];
    va.pro = { sCH: qa[va.fSDec("Bi`su")][va.fSDec("bsdehuIsdg")] };
  })();
  var hb = (function () {
      var d = !1;
      try {
        var m =
          Object.defineProperty &&
          Object.defineProperty({}, "passive", {
            get: function () {
              d = !0;
              return !1;
            },
          });
        window.addEventListener &&
          (window.addEventListener("test", null, m),
          window.removeEventListener("test", null, m));
      } catch (n) {
        d = !1;
      }
      return d;
    })(),
    $a = {},
    xa = null,
    mb = function () {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.backgroundColor &&
        ((this.ctx.fillStyle = this.backgroundColor),
        this.ctx.fillRect(0, 0, this.width, this.height));
    },
    ya = function (d) {
      d.width = 1;
      d.height = 1;
      d.getContext("2d") && d.getContext("2d").clearRect(0, 0, 1, 1);
    },
    nb = function (d, m, n) {
      m = Math.min(this.width, this.height);
      return Math.max(
        "theme4" === this.theme ? 0 : 300 <= m ? 12 : 11,
        Math.round(m * (d / 400))
      );
    },
    Ca = (function () {
      var d =
          /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
        m = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
          " "
        ),
        n = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        v =
          "January February March April May June July August September October November December".split(
            " "
          ),
        $ = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        t =
          /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        A = /[^-+\dA-Z]/g;
      return function (B, G, N) {
        var S = N ? N.days : m,
          U = N ? N.months : v,
          H = N ? N.shortDays : n,
          M = N ? N.shortMonths : $;
        N = "";
        var Q = !1;
        B = B && B.getTime ? B : B ? new Date(B) : new Date();
        if (isNaN(B)) throw SyntaxError("invalid date");
        "UTC:" === G.slice(0, 4) && ((G = G.slice(4)), (Q = !0));
        N = Q ? "getUTC" : "get";
        var Y = B[N + "Date"](),
          L = B[N + "Day"](),
          X = B[N + "Month"](),
          a = B[N + "FullYear"](),
          g = B[N + "Hours"](),
          c = B[N + "Minutes"](),
          b = B[N + "Seconds"](),
          e = B[N + "Milliseconds"](),
          h = Q ? 0 : B.getTimezoneOffset();
        return (N = G.replace(d, function (q) {
          switch (q) {
            case "D":
              return Y;
            case "DD":
              return da(Y, 2);
            case "DDD":
              return H[L];
            case "DDDD":
              return S[L];
            case "M":
              return X + 1;
            case "MM":
              return da(X + 1, 2);
            case "MMM":
              return M[X];
            case "MMMM":
              return U[X];
            case "Y":
              return parseInt(String(a).slice(-2));
            case "YY":
              return da(String(a).slice(-2), 2);
            case "YYY":
              return da(String(a).slice(-3), 3);
            case "YYYY":
              return da(a, 4);
            case "h":
              return g % 12 || 12;
            case "hh":
              return da(g % 12 || 12, 2);
            case "H":
              return g;
            case "HH":
              return da(g, 2);
            case "m":
              return c;
            case "mm":
              return da(c, 2);
            case "s":
              return b;
            case "ss":
              return da(b, 2);
            case "f":
              return da(String(e), 3).slice(0, 1);
            case "ff":
              return da(String(e), 3).slice(0, 2);
            case "fff":
              return da(String(e), 3).slice(0, 3);
            case "t":
              return 12 > g ? "a" : "p";
            case "tt":
              return 12 > g ? "am" : "pm";
            case "T":
              return 12 > g ? "A" : "P";
            case "TT":
              return 12 > g ? "AM" : "PM";
            case "K":
              return Q
                ? "UTC"
                : (String(B).match(t) || [""]).pop().replace(A, "");
            case "z":
              return (0 < h ? "-" : "+") + Math.floor(Math.abs(h) / 60);
            case "zz":
              return (0 < h ? "-" : "+") + da(Math.floor(Math.abs(h) / 60), 2);
            case "zzz":
              return (
                (0 < h ? "-" : "+") +
                da(Math.floor(Math.abs(h) / 60), 2) +
                da(Math.abs(h) % 60, 2)
              );
            default:
              return q.slice(1, q.length - 1);
          }
        }));
      };
    })(),
    ob = function (d) {
      var m = 0 > d;
      if (1 > Math.abs(d)) {
        var n = parseInt(d.toString().split("e-")[1]);
        n &&
          ((d = (m ? -1 * d : d) * Math.pow(10, n - 1)),
          (d = "0." + Array(n).join("0") + d.toString().substring(2)),
          (d = m ? "-" + d : d));
      } else
        (n = parseInt(d.toString().split("+")[1])),
          20 < n &&
            ((n -= 20),
            (d /= Math.pow(10, n)),
            (d = d.toString() + Array(n + 1).join("0")));
      return String(d);
    },
    fa = function (d, m, n) {
      if (null === d) return "";
      if (!isFinite(d)) return d;
      d = Number(d);
      var v = 0 > d ? !0 : !1;
      v && (d *= -1);
      var $ = n ? n.decimalSeparator : ".",
        t = n ? n.digitGroupSeparator : ",",
        A = "";
      m = String(m);
      var A = 1,
        B = (n = ""),
        G = -1,
        N = [],
        S = [],
        U = 0,
        Q = 0,
        H = 0,
        M = !1,
        Y = 0,
        B = m.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
      m = null;
      for (var L = 0; B && L < B.length; L++)
        if (((m = B[L]), "." === m && 0 > G)) G = L;
        else {
          if ("%" === m) A *= 100;
          else if ("\u2030" === m) {
            A *= 1e3;
            continue;
          } else if ("," === m[0] && "." === m[m.length - 1]) {
            A /= Math.pow(1e3, m.length - 1);
            G = L + m.length - 1;
            continue;
          } else
            ("E" !== m[0] && "e" !== m[0]) ||
              "0" !== m[m.length - 1] ||
              (M = !0);
          0 > G
            ? (N.push(m), "#" === m || "0" === m ? U++ : "," === m && H++)
            : (S.push(m), ("#" !== m && "0" !== m) || Q++);
        }
      M &&
        ((m = Math.floor(d)),
        (B = -Math.floor(Math.log(d) / Math.LN10 + 1)),
        (Y = 0 === d ? 0 : 0 === m ? -(U + B) : ob(m).length - U),
        (A /= Math.pow(10, Y)));
      0 > G && (G = L);
      A = (d * A).toFixed(Q);
      m = A.split(".");
      A = (m[0] + "").split("");
      d = (m[1] + "").split("");
      A && "0" === A[0] && A.shift();
      for (M = B = L = Q = G = 0; 0 < N.length; )
        if (((m = N.pop()), "#" === m || "0" === m))
          if ((G++, G === U)) {
            var X = A,
              A = [];
            if ("0" === m)
              for (m = U - Q - (X ? X.length : 0); 0 < m; ) X.unshift("0"), m--;
            for (; 0 < X.length; )
              (n = X.pop() + n),
                M++,
                0 === M % B && L === H && 0 < X.length && (n = t + n);
          } else
            0 < A.length
              ? ((n = A.pop() + n), Q++, M++)
              : "0" === m && ((n = "0" + n), Q++, M++),
              0 === M % B && L === H && 0 < A.length && (n = t + n);
        else
          ("E" !== m[0] && "e" !== m[0]) ||
          "0" !== m[m.length - 1] ||
          !/[eE][+-]*[0]+/.test(m)
            ? "," === m
              ? (L++, (B = M), (M = 0), 0 < A.length && (n = t + n))
              : (n =
                  1 < m.length &&
                  (('"' === m[0] && '"' === m[m.length - 1]) ||
                    ("'" === m[0] && "'" === m[m.length - 1]))
                    ? m.slice(1, m.length - 1) + n
                    : m + n)
            : ((m =
                0 > Y
                  ? m.replace("+", "").replace("-", "")
                  : m.replace("-", "")),
              (n += m.replace(/[0]+/, function (a) {
                return da(Y, a.length);
              })));
      t = "";
      for (N = !1; 0 < S.length; )
        (m = S.shift()),
          "#" === m || "0" === m
            ? 0 < d.length && 0 !== Number(d.join(""))
              ? ((t += d.shift()), (N = !0))
              : "0" === m && ((t += "0"), (N = !0))
            : 1 < m.length &&
              (('"' === m[0] && '"' === m[m.length - 1]) ||
                ("'" === m[0] && "'" === m[m.length - 1]))
            ? (t += m.slice(1, m.length - 1))
            : ("E" !== m[0] && "e" !== m[0]) ||
              "0" !== m[m.length - 1] ||
              !/[eE][+-]*[0]+/.test(m)
            ? (t += m)
            : ((m =
                0 > Y
                  ? m.replace("+", "").replace("-", "")
                  : m.replace("-", "")),
              (t += m.replace(/[0]+/, function (a) {
                return da(Y, a.length);
              })));
      n += (N ? $ : "") + t;
      return v ? "-" + n : n;
    },
    Pa = function (d) {
      var n = 0,
        v = 0;
      d = d || window.event;
      d.offsetX || 0 === d.offsetX
        ? ((n = d.offsetX), (v = d.offsetY))
        : d.layerX || 0 == d.layerX
        ? ((n = d.layerX), (v = d.layerY))
        : ((n = d.pageX - d.target.offsetLeft),
          (v = d.pageY - d.target.offsetTop));
      return { x: n, y: v };
    },
    bb = !0,
    Ta = window.devicePixelRatio || 1,
    Na = 1,
    la = bb ? Ta / Na : 1,
    ba = function (d, n, v, P, t, B, A, G, M, N, U, S, Q) {
      "undefined" === typeof Q && (Q = 1);
      A = A || 0;
      G = G || "black";
      var H = 15 < P - n && 15 < t - v ? 8 : 0.35 * Math.min(P - n, t - v);
      d.beginPath();
      d.moveTo(n, v);
      d.save();
      d.fillStyle = B;
      d.globalAlpha = Q;
      d.fillRect(n, v, P - n, t - v);
      d.globalAlpha = 1;
      0 < A &&
        ((Q = 0 === A % 2 ? 0 : 0.5),
        d.beginPath(),
        (d.lineWidth = A),
        (d.strokeStyle = G),
        d.moveTo(n, v),
        d.rect(n - Q, v - Q, P - n + 2 * Q, t - v + 2 * Q),
        d.stroke());
      d.restore();
      !0 === M &&
        (d.save(),
        d.beginPath(),
        d.moveTo(n, v),
        d.lineTo(n + H, v + H),
        d.lineTo(P - H, v + H),
        d.lineTo(P, v),
        d.closePath(),
        (A = d.createLinearGradient((P + n) / 2, v + H, (P + n) / 2, v)),
        A.addColorStop(0, B),
        A.addColorStop(1, "rgba(255, 255, 255, .4)"),
        (d.fillStyle = A),
        d.fill(),
        d.restore());
      !0 === N &&
        (d.save(),
        d.beginPath(),
        d.moveTo(n, t),
        d.lineTo(n + H, t - H),
        d.lineTo(P - H, t - H),
        d.lineTo(P, t),
        d.closePath(),
        (A = d.createLinearGradient((P + n) / 2, t - H, (P + n) / 2, t)),
        A.addColorStop(0, B),
        A.addColorStop(1, "rgba(255, 255, 255, .4)"),
        (d.fillStyle = A),
        d.fill(),
        d.restore());
      !0 === U &&
        (d.save(),
        d.beginPath(),
        d.moveTo(n, v),
        d.lineTo(n + H, v + H),
        d.lineTo(n + H, t - H),
        d.lineTo(n, t),
        d.closePath(),
        (A = d.createLinearGradient(n + H, (t + v) / 2, n, (t + v) / 2)),
        A.addColorStop(0, B),
        A.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
        (d.fillStyle = A),
        d.fill(),
        d.restore());
      !0 === S &&
        (d.save(),
        d.beginPath(),
        d.moveTo(P, v),
        d.lineTo(P - H, v + H),
        d.lineTo(P - H, t - H),
        d.lineTo(P, t),
        (A = d.createLinearGradient(P - H, (t + v) / 2, P, (t + v) / 2)),
        A.addColorStop(0, B),
        A.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
        (d.fillStyle = A),
        A.addColorStop(0, B),
        A.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
        (d.fillStyle = A),
        d.fill(),
        d.closePath(),
        d.restore());
    },
    ia = function (d) {
      for (var n = "", v = 0; v < d.length; v++)
        n += String.fromCharCode(
          Math.ceil(d.length / 57 / 5) ^ d.charCodeAt(v)
        );
      return n;
    },
    kb =
      window &&
      window[ia("mnb`uhno")] &&
      window[ia("mnb`uhno")].href &&
      window[ia("mnb`uhno")].href.indexOf &&
      (-1 !== window[ia("mnb`uhno")].href.indexOf(ia("b`ow`rkr/bnl")) ||
        -1 !== window[ia("mnb`uhno")].href.indexOf(ia("gdonqhy/bnl")) ||
        -1 !== window[ia("mnb`uhno")].href.indexOf(ia("gheemd"))) &&
      -1 === window[ia("mnb`uhno")].href.indexOf(ia("gheemd")),
    lb = {
      reset: {
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==",
      },
      pan: {
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC",
      },
      zoom: {
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII=",
      },
      menu: {
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC",
      },
    };
  Y.prototype.setOptions = function (d, n) {
    if (qa[this._defaultsKey]) {
      var v = qa[this._defaultsKey],
        t;
      for (t in v)
        "publicProperties" !== t &&
          v.hasOwnProperty(t) &&
          (this[t] = d && t in d ? d[t] : n && t in n ? n[t] : v[t]);
    } else Ha && window.console && console.log("defaults not set");
  };
  Y.prototype.get = function (d) {
    var n = qa[this._defaultsKey];
    if ("options" === d)
      return this.options && this.options._isPlaceholder ? null : this.options;
    if (
      n.hasOwnProperty(d) ||
      (n.publicProperties && n.publicProperties.hasOwnProperty(d))
    )
      return this[d];
    window.console &&
      window.console.log(
        'Property "' + d + "\" doesn't exist. Please check for typo."
      );
  };
  Y.prototype.set = function (d, n, v) {
    v = "undefined" === typeof v ? !0 : v;
    var t = qa[this._defaultsKey];
    if ("options" === d) this.createUserOptions(n);
    else if (
      t.hasOwnProperty(d) ||
      (t.publicProperties &&
        t.publicProperties.hasOwnProperty(d) &&
        "readWrite" === t.publicProperties[d])
    )
      this.options._isPlaceholder && this.createUserOptions(),
        (this.options[d] = n);
    else {
      window.console &&
        (t.publicProperties &&
        t.publicProperties.hasOwnProperty(d) &&
        "readOnly" === t.publicProperties[d]
          ? window.console.log('Property "' + d + '" is read-only.')
          : window.console.log(
              'Property "' + d + "\" doesn't exist. Please check for typo."
            ));
      return;
    }
    v && (this.stockChart || this.chart || this).render();
  };
  Y.prototype.addTo = function (d, n, v, t) {
    t = "undefined" === typeof t ? !0 : t;
    var B = qa[this._defaultsKey];
    B.hasOwnProperty(d) ||
    (B.publicProperties &&
      B.publicProperties.hasOwnProperty(d) &&
      "readWrite" === B.publicProperties[d])
      ? (this.options._isPlaceholder && this.createUserOptions(),
        "undefined" === typeof this.options[d] && (this.options[d] = []),
        (d = this.options[d]),
        (v = "undefined" === typeof v || null === v ? d.length : v),
        d.splice(v, 0, n),
        t && (this.stockChart || this.chart || this).render())
      : window.console &&
        (B.publicProperties &&
        B.publicProperties.hasOwnProperty(d) &&
        "readOnly" === B.publicProperties[d]
          ? window.console.log('Property "' + d + '" is read-only.')
          : window.console.log(
              'Property "' + d + "\" doesn't exist. Please check for typo."
            ));
  };
  Y.prototype.createUserOptions = function (d) {
    if ("undefined" !== typeof d || this.options._isPlaceholder)
      if (
        (this.parent &&
          this.parent.options._isPlaceholder &&
          this.parent.createUserOptions(),
        this.isOptionsInArray)
      ) {
        this.parent.options[this.optionsName] ||
          (this.parent.options[this.optionsName] = []);
        var n = this.parent.options[this.optionsName],
          v = n.length;
        this.options._isPlaceholder || (Da(n), (v = n.indexOf(this.options)));
        this.options = "undefined" === typeof d ? {} : d;
        n[v] = this.options;
      } else
        (this.options = "undefined" === typeof d ? {} : d),
          this.parent &&
            ((d = this.parent.options),
            this.optionsName
              ? (n = this.optionsName)
              : (n = this._defaultsKey) && 0 !== n.length
              ? ((v = n.charAt(0).toLowerCase()),
                1 < n.length && (v = v.concat(n.slice(1))),
                (n = v))
              : (n = void 0),
            (d[n] = this.options));
  };
  Y.prototype.remove = function (d) {
    d = "undefined" === typeof d ? !0 : d;
    if (this.isOptionsInArray) {
      var n = this.parent.options[this.optionsName];
      Da(n);
      var v = n.indexOf(this.options);
      0 <= v && n.splice(v, 1);
    } else delete this.parent.options[this.optionsName];
    d && (this.stockChart || this.chart || this).render();
  };
  Y.prototype.updateOption = function (d) {
    !qa[this._defaultsKey] &&
      Ha &&
      window.console &&
      console.log("defaults not set");
    var m = qa[this._defaultsKey],
      v = {},
      t = this[d],
      B = this._themeOptionsKey,
      G = this._index;
    this.theme && n(this.parent) && n(B) && n(G)
      ? (v = n(this.predefinedThemes[this.theme])
          ? this.predefinedThemes.light1
          : this.predefinedThemes[this.theme])
      : this.parent &&
        this.parent.themeOptions &&
        (this.options.theme && Oa[this.options.theme]
          ? (v = Oa[this.options.theme])
          : this.parent.themeOptions[B] &&
            (null === G
              ? (v = this.parent.themeOptions[B])
              : 0 < this.parent.themeOptions[B].length &&
                ((v = Math.min(this.parent.themeOptions[B].length - 1, G)),
                (v = this.parent.themeOptions[B][v]))));
    this.themeOptions = v;
    d in m &&
      (t = d in this.options ? this.options[d] : v && d in v ? v[d] : m[d]);
    if (t === this[d]) return !1;
    this[d] = t;
    return !0;
  };
  Y.prototype.trackChanges = function (d) {
    if (!this.sessionVariables) throw "Session Variable Store not set";
    this.sessionVariables[d] = this.options[d];
  };
  Y.prototype.isBeingTracked = function (d) {
    this.options._oldOptions || (this.options._oldOptions = {});
    return this.options._oldOptions[d] ? !0 : !1;
  };
  Y.prototype.hasOptionChanged = function (d) {
    if (!this.sessionVariables) throw "Session Variable Store not set";
    return this.sessionVariables[d] !== this.options[d];
  };
  Y.prototype.addEventListener = function (d, n, v) {
    d &&
      n &&
      ((this._eventListeners[d] = this._eventListeners[d] || []),
      this._eventListeners[d].push({ context: v || this, eventHandler: n }));
  };
  Y.prototype.removeEventListener = function (d, n) {
    if (d && n && this._eventListeners[d])
      for (var v = this._eventListeners[d], t = 0; t < v.length; t++)
        if (v[t].eventHandler === n) {
          v[t].splice(t, 1);
          break;
        }
  };
  Y.prototype.removeAllEventListeners = function () {
    this._eventListeners = [];
  };
  Y.prototype.dispatchEvent = function (d, n, v) {
    if (d && this._eventListeners[d]) {
      n = n || {};
      for (var t = this._eventListeners[d], B = 0; B < t.length; B++)
        t[B].eventHandler.call(t[B].context, n);
    }
    "function" === typeof this[d] && this[d].call(v || this.chart, n);
  };
  Ea.prototype.registerSpace = function (d, n) {
    "top" === d
      ? (this._topOccupied += n.height)
      : "bottom" === d
      ? (this._bottomOccupied += n.height)
      : "left" === d
      ? (this._leftOccupied += n.width)
      : "right" === d && (this._rightOccupied += n.width);
  };
  Ea.prototype.unRegisterSpace = function (d, n) {
    "top" === d
      ? (this._topOccupied -= n.height)
      : "bottom" === d
      ? (this._bottomOccupied -= n.height)
      : "left" === d
      ? (this._leftOccupied -= n.width)
      : "right" === d && (this._rightOccupied -= n.width);
  };
  Ea.prototype.getFreeSpace = function () {
    return {
      x1: this._x1 + this._leftOccupied,
      y1: this._y1 + this._topOccupied,
      x2: this._x2 - this._rightOccupied,
      y2: this._y2 - this._bottomOccupied,
      width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
      height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied,
    };
  };
  Ea.prototype.reset = function () {
    this._rightOccupied =
      this._leftOccupied =
      this._bottomOccupied =
      this._topOccupied =
        this._padding;
  };
  pa(ja, Y);
  ja.prototype._initialize = function () {
    n(this.padding) || "object" !== typeof this.padding
      ? (this.topPadding =
          this.rightPadding =
          this.bottomPadding =
          this.leftPadding =
            Number(this.padding) | 0)
      : ((this.topPadding = n(this.padding.top)
          ? 0
          : Number(this.padding.top) | 0),
        (this.rightPadding = n(this.padding.right)
          ? 0
          : Number(this.padding.right) | 0),
        (this.bottomPadding = n(this.padding.bottom)
          ? 0
          : Number(this.padding.bottom) | 0),
        (this.leftPadding = n(this.padding.left)
          ? 0
          : Number(this.padding.left) | 0));
  };
  ja.prototype.render = function (d) {
    if (0 !== this.fontSize) {
      d && this.ctx.save();
      var n = this.ctx.font;
      this.ctx.textBaseline = this.textBaseline;
      var v = 0;
      this._isDirty && this.measureText(this.ctx);
      this.ctx.translate(this.x, this.y + v);
      "middle" === this.textBaseline && (v = -this._lineHeight / 2);
      this.ctx.font = this._getFontString();
      this.ctx.rotate((Math.PI / 180) * this.angle);
      var t = 0,
        B = this.topPadding,
        G = null;
      this.ctx.roundRect || za(this.ctx);
      ((0 < this.borderThickness && this.borderColor) ||
        this.backgroundColor) &&
        this.ctx.roundRect(
          0,
          v,
          this.width,
          this.height,
          this.cornerRadius,
          this.borderThickness,
          this.backgroundColor,
          this.borderColor
        );
      this.ctx.fillStyle = this.fontColor;
      for (v = 0; v < this._wrappedText.lines.length; v++)
        (G = this._wrappedText.lines[v]),
          "right" === this.textAlign
            ? (t = this.width - G.width - this.rightPadding)
            : "left" === this.textAlign
            ? (t = this.leftPadding)
            : "center" === this.textAlign &&
              (t =
                (this.width - (this.leftPadding + this.rightPadding)) / 2 -
                G.width / 2 +
                this.leftPadding),
          this.ctx.fillText(G.text, t, B),
          (B += G.height);
      this.ctx.font = n;
      d && this.ctx.restore();
    }
  };
  ja.prototype.setText = function (d) {
    this.text = d;
    this._isDirty = !0;
    this._wrappedText = null;
  };
  ja.prototype.measureText = function () {
    this._lineHeight = Za(this.fontFamily, this.fontSize, this.fontWeight);
    if (null === this.maxWidth)
      throw "Please set maxWidth and height for TextBlock";
    this._wrapText(this.ctx);
    this._isDirty = !1;
    return { width: this.width, height: this.height };
  };
  ja.prototype._getLineWithWidth = function (d, n, v) {
    d = String(d);
    if (!d) return { text: "", width: 0 };
    var t = (v = 0),
      B = d.length - 1,
      G = Infinity;
    for (this.ctx.font = this._getFontString(); t <= B; ) {
      var G = Math.floor((t + B) / 2),
        A = d.substr(0, G + 1);
      v = this.ctx.measureText(A).width;
      if (v < n) t = G + 1;
      else if (v > n) B = G - 1;
      else break;
    }
    v > n &&
      1 < A.length &&
      ((A = A.substr(0, A.length - 1)), (v = this.ctx.measureText(A).width));
    n = !0;
    if (A.length === d.length || " " === d[A.length]) n = !1;
    n &&
      ((d = A.split(" ")),
      1 < d.length && d.pop(),
      (A = d.join(" ")),
      (v = this.ctx.measureText(A).width));
    return { text: A, width: v };
  };
  ja.prototype._wrapText = function () {
    var d = new String(Ga(String(this.text))),
      n = [],
      v = this.ctx.font,
      t = 0,
      B = 0;
    this.ctx.font = this._getFontString();
    if (0 === this.frontSize) B = t = 0;
    else
      for (; 0 < d.length; ) {
        var G = this.maxHeight - (this.topPadding + this.bottomPadding),
          A = this._getLineWithWidth(
            d,
            this.maxWidth - (this.leftPadding + this.rightPadding),
            !1
          );
        A.height = this._lineHeight;
        n.push(A);
        var H = B,
          B = Math.max(B, A.width),
          t = t + A.height,
          d = Ga(d.slice(A.text.length, d.length));
        G && t > G && ((A = n.pop()), (t -= A.height), (B = H));
      }
    this._wrappedText = { lines: n, width: B, height: t };
    this.width = B + (this.leftPadding + this.rightPadding);
    this.height = t + (this.topPadding + this.bottomPadding);
    this.ctx.font = v;
  };
  ja.prototype._getFontString = function () {
    var d;
    d = "" + (this.fontStyle ? this.fontStyle + " " : "");
    d += this.fontWeight ? this.fontWeight + " " : "";
    d += this.fontSize ? this.fontSize + "px " : "";
    var n = this.fontFamily ? this.fontFamily + "" : "";
    !v &&
      n &&
      ((n = n.split(",")[0]),
      "'" !== n[0] && '"' !== n[0] && (n = "'" + n + "'"));
    return (d += n);
  };
  pa(Va, Y);
  pa(Aa, Y);
  Aa.prototype.setLayout = function () {
    if (this.text) {
      var d = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
        v = d.layoutManager.getFreeSpace(),
        t = v.x1,
        B = v.y1,
        G = 0,
        H = 0,
        A =
          this.chart._menuButton &&
          this.chart.exportEnabled &&
          "top" === this.verticalAlign
            ? 40
            : 0,
        Q,
        M;
      this.textAlign = n(this.options.textAlign)
        ? this.horizontalAlign
        : this.textAlign;
      "top" === this.verticalAlign || "bottom" === this.verticalAlign
        ? (null === this.maxWidth &&
            (this.maxWidth =
              v.width - 4 - A * ("center" === this.horizontalAlign ? 2 : 1)),
          (H = 0.5 * v.height - this.margin - 2),
          (G = 0))
        : "center" === this.verticalAlign &&
          ("left" === this.horizontalAlign || "right" === this.horizontalAlign
            ? (null === this.maxWidth && (this.maxWidth = v.height - 4),
              (H = 0.5 * v.width - this.margin - 2))
            : "center" === this.horizontalAlign &&
              (null === this.maxWidth && (this.maxWidth = v.width - 4),
              (H = 0.5 * v.height - 4)));
      var N;
      n(this.padding) || "number" !== typeof this.padding
        ? n(this.padding) ||
          "object" !== typeof this.padding ||
          ((N = this.padding.top
            ? this.padding.top
            : this.padding.bottom
            ? this.padding.bottom
            : 0),
          (N += this.padding.bottom
            ? this.padding.bottom
            : this.padding.top
            ? this.padding.top
            : 0))
        : (N = 2 * this.padding);
      this.wrap || (H = Math.min(H, 1.5 * this.fontSize + N));
      H = new ja(this.ctx, {
        fontSize: this.fontSize,
        fontFamily: this.fontFamily,
        fontColor: this.fontColor,
        fontStyle: this.fontStyle,
        fontWeight: this.fontWeight,
        textAlign: this.textAlign,
        verticalAlign: this.verticalAlign,
        borderColor: this.borderColor,
        borderThickness: this.borderThickness,
        backgroundColor: this.backgroundColor,
        maxWidth: this.maxWidth,
        maxHeight: H,
        cornerRadius: this.cornerRadius,
        text: this.text,
        padding: this.padding,
        textBaseline: "middle",
      });
      N = H.measureText();
      "top" === this.verticalAlign || "bottom" === this.verticalAlign
        ? ("top" === this.verticalAlign
            ? ((B = v.y1 + 2 + this.fontSize / 2 + 4), (M = "top"))
            : "bottom" === this.verticalAlign &&
              ((B = v.y2 - 2 - N.height + this.fontSize / 2 + 4),
              (M = "bottom")),
          "left" === this.horizontalAlign
            ? (t = v.x1 + 2)
            : "center" === this.horizontalAlign
            ? (t = v.x1 + v.width / 2 - N.width / 2)
            : "right" === this.horizontalAlign && (t = v.x2 - 2 - N.width - A),
          (Q = this.horizontalAlign),
          (this.width = N.width),
          (this.height = N.height))
        : "center" === this.verticalAlign &&
          ("left" === this.horizontalAlign
            ? ((t = v.x1 + 2 + (this.fontSize / 2 + 4)),
              (B = v.y2 - 2 - (this.maxWidth / 2 - N.width / 2)),
              (G = -90),
              (M = "left"),
              (this.width = N.height),
              (this.height = N.width))
            : "right" === this.horizontalAlign
            ? ((t = v.x2 - 2 - (this.fontSize / 2 + 4)),
              (B = v.y1 + 2 + (this.maxWidth / 2 - N.width / 2)),
              (G = 90),
              (M = "right"),
              (this.width = N.height),
              (this.height = N.width))
            : "center" === this.horizontalAlign &&
              ((B =
                d.y1 + (d.height / 2 - N.height / 2) + this.fontSize / 2 + 4),
              (t = d.x1 + (d.width / 2 - N.width / 2)),
              (M = "center"),
              (this.width = N.width),
              (this.height = N.height)),
          (Q = "center"));
      H.x = t;
      H.y = B;
      H.angle = G;
      H.horizontalAlign = Q;
      this._textBlock = H;
      d.layoutManager.registerSpace(M, {
        width:
          this.width + ("left" === M || "right" === M ? this.margin + 2 : 0),
        height:
          this.height + ("top" === M || "bottom" === M ? this.margin + 2 : 0),
      });
      this.bounds = { x1: t, y1: B, x2: t + this.width, y2: B + this.height };
      this.ctx.textBaseline = "top";
    }
  };
  Aa.prototype.render = function () {
    this._textBlock && this._textBlock.render(!0);
  };
  pa(Ia, Y);
  Ia.prototype.setLayout = Aa.prototype.setLayout;
  Ia.prototype.render = Aa.prototype.render;
  Wa.prototype.get = function (d, n) {
    var v = null;
    0 < this.pool.length
      ? ((v = this.pool.pop()), Ma(v, d, n))
      : (v = ua(d, n));
    return v;
  };
  Wa.prototype.release = function (d) {
    this.pool.push(d);
  };
  pa(Ja, Y);
  var Qa = {
    addTheme: function (d, n) {
      Oa[d] = n;
    },
    addColorSet: function (d, n) {
      Ba[d] = n;
    },
    addCultureInfo: function (d, n) {
      Ka[d] = n;
    },
    formatNumber: function (d, n, v) {
      v = v || "en";
      if (Ka[v]) return fa(d, n || "#,##0.##", new Ja(v));
      throw "Unknown Culture Name";
    },
    formatDate: function (d, n, v) {
      v = v || "en";
      if (Ka[v]) return Ca(d, n || "DD MMM YYYY", new Ja(v));
      throw "Unknown Culture Name";
    },
  };
  "undefined" !== typeof module && "undefined" !== typeof module.exports
    ? (module.exports = Qa)
    : "function" === typeof define && define.amd
    ? define([], function () {
        return Qa;
      })
    : (window.CanvasJS &&
        window.console &&
        window.console.log(
          "CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."
        ),
      (window.CanvasJS = window.CanvasJS ? window.CanvasJS : Qa));
  t = Qa.Chart = (function () {
    function d(a, g) {
      return a.x - g.x;
    }
    function m(a, g, c) {
      g = g || {};
      n(c)
        ? ((this.predefinedThemes = Oa),
          (this.optionsName = this.parent = this.index = null))
        : ((this.parent = c.parent),
          (this.index = c.index),
          (this.predefinedThemes = c.predefinedThemes),
          (this.optionsName = c.optionsName),
          (this.stockChart = c.stockChart),
          (this.panel = a),
          (this.isOptionsInArray = c.isOptionsInArray));
      this.theme =
        n(g.theme) || n(this.predefinedThemes[g.theme]) ? "light1" : g.theme;
      m.base.constructor.call(
        this,
        "Chart",
        this.optionsName,
        g,
        this.index,
        this.parent
      );
      var b = this;
      this._containerId = a;
      this._objectsInitialized = !1;
      this.overlaidCanvasCtx = this.ctx = null;
      this._indexLabels = [];
      this._panTimerId = 0;
      this._lastTouchEventType = "";
      this._lastTouchData = null;
      this.isAnimating = !1;
      this.renderCount = 0;
      this.disableToolTip = this.animatedRender = !1;
      this.canvasPool = new Wa();
      this.allDOMEventHandlers = [];
      this.panEnabled = !1;
      this._defaultCursor = "default";
      this.plotArea = {
        canvas: null,
        ctx: null,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        width: 0,
        height: 0,
      };
      this._dataInRenderedOrder = [];
      (this.container =
        "string" === typeof this._containerId
          ? document.getElementById(this._containerId)
          : this._containerId)
        ? ((this.container.innerHTML = ""),
          (g = a = 0),
          (a = this.options.width
            ? this.width
            : 0 < this.container.clientWidth
            ? this.container.clientWidth
            : this.width),
          (g =
            c && c.height
              ? c.height
              : this.options.height
              ? this.height
              : 0 < this.container.clientHeight
              ? this.container.clientHeight
              : this.height),
          (this.width = a),
          (this.height = g),
          (this.x1 = this.y1 = 0),
          (this.x2 = this.width),
          (this.y2 = this.height),
          (this.selectedColorSet =
            "undefined" !== typeof Ba[this.colorSet]
              ? Ba[this.colorSet]
              : Ba.colorSet1),
          (this._canvasJSContainer = document.createElement("div")),
          this._canvasJSContainer.setAttribute(
            "class",
            "canvasjs-chart-container"
          ),
          (this._canvasJSContainer.style.position = "relative"),
          (this._canvasJSContainer.style.textAlign = "left"),
          (this._canvasJSContainer.style.cursor = "auto"),
          (this._canvasJSContainer.style.direction = "ltr"),
          v || (this._canvasJSContainer.style.height = "0px"),
          this.container.appendChild(this._canvasJSContainer),
          (this.canvas = ua(a, g)),
          (this._preRenderCanvas = ua(a, g)),
          (this.canvas.style.position = "absolute"),
          (this.canvas.style.WebkitUserSelect = "none"),
          (this.canvas.style.MozUserSelect = "none"),
          (this.canvas.style.msUserSelect = "none"),
          (this.canvas.style.userSelect = "none"),
          this.canvas.getContext &&
            (this._canvasJSContainer.appendChild(this.canvas),
            (this.ctx = this.canvas.getContext("2d")),
            (this.ctx.textBaseline = "top"),
            za(this.ctx),
            (this._preRenderCtx = this._preRenderCanvas.getContext("2d")),
            (this._preRenderCtx.textBaseline = "top"),
            za(this._preRenderCtx),
            v
              ? (this.plotArea.ctx = this.ctx)
              : ((this.plotArea.canvas = ua(a, g)),
                (this.plotArea.canvas.style.position = "absolute"),
                this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"),
                this._canvasJSContainer.appendChild(this.plotArea.canvas),
                (this.plotArea.ctx = this.plotArea.canvas.getContext("2d"))),
            (this.overlaidCanvas = ua(a, g)),
            (this.overlaidCanvas.style.position = "absolute"),
            (this.overlaidCanvas.style.webkitTapHighlightColor = "transparent"),
            (this.overlaidCanvas.style.WebkitUserSelect = "none"),
            (this.overlaidCanvas.style.MozUserSelect = "none"),
            (this.overlaidCanvas.style.msUserSelect = "none"),
            (this.overlaidCanvas.style.userSelect = "none"),
            this.overlaidCanvas.getContext &&
              (this._canvasJSContainer.appendChild(this.overlaidCanvas),
              (this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d")),
              (this.overlaidCanvasCtx.textBaseline = "top"),
              za(this.overlaidCanvasCtx)),
            (this._eventManager = new ha(this)),
            (this.windowResizeHandler = H(
              window,
              "resize",
              function () {
                b._updateSize() && b.render();
              },
              this.allDOMEventHandlers
            )),
            (this._toolBar = document.createElement("div")),
            this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"),
            Q(this._toolBar, {
              position: "absolute",
              right: "1px",
              top: "1px",
            }),
            this._canvasJSContainer.appendChild(this._toolBar),
            (this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }),
            H(
              this.overlaidCanvas,
              "click",
              function (a) {
                b._mouseEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            H(
              this.overlaidCanvas,
              "mousemove",
              function (a) {
                b._mouseEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            H(
              this.overlaidCanvas,
              "mouseup",
              function (a) {
                b._mouseEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            H(
              this.overlaidCanvas,
              "mousedown",
              function (a) {
                b._mouseEventHandler(a);
                wa(b._dropdownMenu);
              },
              this.allDOMEventHandlers
            ),
            H(
              this.overlaidCanvas,
              "mouseout",
              function (a) {
                b._mouseEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            H(
              this.overlaidCanvas,
              window.navigator.msPointerEnabled
                ? "MSPointerDown"
                : "touchstart",
              function (a) {
                b._touchEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            H(
              this.overlaidCanvas,
              window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove",
              function (a) {
                b._touchEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            H(
              this.overlaidCanvas,
              window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend",
              function (a) {
                b._touchEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            H(
              this.overlaidCanvas,
              window.navigator.msPointerEnabled
                ? "MSPointerCancel"
                : "touchcancel",
              function (a) {
                b._touchEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            (this.toolTip = new na(this, this.options.toolTip)),
            (this.data = null),
            (this.axisX = []),
            (this.axisX2 = []),
            (this.axisY = []),
            (this.axisY2 = []),
            (this.sessionVariables = {
              axisX: [],
              axisX2: [],
              axisY: [],
              axisY2: [],
            })))
        : window.console &&
          window.console.log(
            'CanvasJS Error: Chart Container with id "' +
              this._containerId +
              '" was not found'
          );
    }
    function t(a, g) {
      for (var c = [], b, e = 0; e < a.length; e++)
        if (0 == e) c.push(a[0]);
        else {
          var h, q, y;
          y = e - 1;
          h = 0 === y ? 0 : y - 1;
          q = y === a.length - 1 ? y : y + 1;
          b =
            (Math.abs(
              (a[q].x - a[h].x) /
                (0 === a[q].x - a[y].x ? 0.01 : a[q].x - a[y].x)
            ) *
              (g - 1)) /
              2 +
            1;
          var I = (a[q].x - a[h].x) / b;
          b = (a[q].y - a[h].y) / b;
          c[c.length] =
            (a[y].x > a[h].x && 0 < I) || (a[y].x < a[h].x && 0 > I)
              ? { x: a[y].x + I / 3, y: a[y].y + b / 3 }
              : { x: a[y].x, y: a[y].y + (1 === c.length ? 0 : b / 9) };
          y = e;
          h = 0 === y ? 0 : y - 1;
          q = y === a.length - 1 ? y : y + 1;
          b =
            (Math.abs(
              (a[q].x - a[h].x) /
                (0 === a[y].x - a[h].x ? 0.01 : a[y].x - a[h].x)
            ) *
              (g - 1)) /
              2 +
            1;
          I = (a[q].x - a[h].x) / b;
          b = (a[q].y - a[h].y) / b;
          c[c.length] =
            (a[y].x > a[h].x && 0 < I) || (a[y].x < a[h].x && 0 > I)
              ? { x: a[y].x - I / 3, y: a[y].y - b / 3 }
              : { x: a[y].x, y: a[y].y - b / 9 };
          c[c.length] = a[e];
        }
      return c;
    }
    function B(a, g, c, b, e, h, q, y, I, k) {
      var l = 0;
      k ? ((q.color = h), (y.color = h)) : (k = 1);
      l = I ? Math.abs(e - c) : Math.abs(b - g);
      l =
        0 < q.trimLength
          ? Math.abs((l * q.trimLength) / 100)
          : Math.abs(l - q.length);
      I ? ((c += l / 2), (e -= l / 2)) : ((g += l / 2), (b -= l / 2));
      var l = 1 === Math.round(q.thickness) % 2 ? 0.5 : 0,
        p = 1 === Math.round(y.thickness) % 2 ? 0.5 : 0;
      a.save();
      a.globalAlpha = k;
      a.strokeStyle = y.color || h;
      a.lineWidth = y.thickness || 2;
      a.setLineDash && a.setLineDash(G(y.dashType, y.thickness));
      a.beginPath();
      I && 0 < y.thickness
        ? (a.moveTo(b - q.thickness / 2, Math.round((c + e) / 2) - p),
          a.lineTo(g + q.thickness / 2, Math.round((c + e) / 2) - p))
        : 0 < y.thickness &&
          (a.moveTo(Math.round((g + b) / 2) - p, c + q.thickness / 2),
          a.lineTo(Math.round((g + b) / 2) - p, e - q.thickness / 2));
      a.stroke();
      a.strokeStyle = q.color || h;
      a.lineWidth = q.thickness || 2;
      a.setLineDash && a.setLineDash(G(q.dashType, q.thickness));
      a.beginPath();
      I && 0 < q.thickness
        ? (a.moveTo(b - l, c),
          a.lineTo(b - l, e),
          a.moveTo(g + l, c),
          a.lineTo(g + l, e))
        : 0 < q.thickness &&
          (a.moveTo(g, c + l),
          a.lineTo(b, c + l),
          a.moveTo(g, e - l),
          a.lineTo(b, e - l));
      a.stroke();
      a.restore();
    }
    function S(a, g) {
      S.base.constructor.call(this, "Legend", "legend", g, null, a);
      this.chart = a;
      this.canvas = a.canvas;
      this.ctx = this.chart.ctx;
      this.ghostCtx = this.chart._eventManager.ghostCtx;
      this.items = [];
      this.optionsName = "legend";
      this.height = this.width = 0;
      this.orientation = null;
      this.dataSeries = [];
      this.bounds = { x1: null, y1: null, x2: null, y2: null };
      "undefined" === typeof this.options.fontSize &&
        (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
      this.lineHeight = Za(this.fontFamily, this.fontSize, this.fontWeight);
      this.horizontalSpacing = this.fontSize;
    }
    function V(a, g, c, b) {
      V.base.constructor.call(this, "DataSeries", "data", g, c, a);
      this.chart = a;
      this.canvas = a.canvas;
      this._ctx = a.canvas.ctx;
      this.index = c;
      this.noDataPointsInPlotArea = 0;
      this.id = b;
      this.chart._eventManager.objectMap[b] = {
        id: b,
        objectType: "dataSeries",
        dataSeriesIndex: c,
      };
      a = g.dataPoints ? g.dataPoints.length : 0;
      this.dataPointEOs = [];
      for (g = 0; g < a; g++) this.dataPointEOs[g] = {};
      this.dataPointIds = [];
      this.plotUnit = [];
      this.axisY = this.axisX = null;
      this.optionsName = "data";
      this.isOptionsInArray = !0;
      null === this.fillOpacity &&
        (this.type.match(/area/i)
          ? (this.fillOpacity = 0.7)
          : (this.fillOpacity = 1));
      this.axisPlacement = this.getDefaultAxisPlacement();
      "undefined" === typeof this.options.indexLabelFontSize &&
        (this.indexLabelFontSize = this.chart.getAutoFontSize(
          this.indexLabelFontSize
        ));
    }
    function A(a, g, c, b, e, h) {
      A.base.constructor.call(this, "Axis", g, c, b, a);
      this.chart = a;
      this.canvas = a.canvas;
      this.ctx = a.ctx;
      this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
      this.labels = [];
      this.dataSeries = [];
      this._stripLineLabels = this._ticks = this._labels = null;
      this.dataInfo = {
        min: Infinity,
        max: -Infinity,
        viewPortMin: Infinity,
        viewPortMax: -Infinity,
        minDiff: Infinity,
      };
      this.isOptionsInArray = !0;
      "axisX" === e
        ? ("left" === h || "bottom" === h
            ? ((this.optionsName = "axisX"),
              n(this.chart.sessionVariables.axisX[b]) &&
                (this.chart.sessionVariables.axisX[b] = {}),
              (this.sessionVariables = this.chart.sessionVariables.axisX[b]))
            : ((this.optionsName = "axisX2"),
              n(this.chart.sessionVariables.axisX2[b]) &&
                (this.chart.sessionVariables.axisX2[b] = {}),
              (this.sessionVariables = this.chart.sessionVariables.axisX2[b])),
          this.options.interval || (this.intervalType = null))
        : "left" === h || "bottom" === h
        ? ((this.optionsName = "axisY"),
          n(this.chart.sessionVariables.axisY[b]) &&
            (this.chart.sessionVariables.axisY[b] = {}),
          (this.sessionVariables = this.chart.sessionVariables.axisY[b]))
        : ((this.optionsName = "axisY2"),
          n(this.chart.sessionVariables.axisY2[b]) &&
            (this.chart.sessionVariables.axisY2[b] = {}),
          (this.sessionVariables = this.chart.sessionVariables.axisY2[b]));
      "undefined" === typeof this.options.titleFontSize &&
        (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
      "undefined" === typeof this.options.labelFontSize &&
        (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
      this.type = e;
      "axisX" !== e ||
        (c && "undefined" !== typeof c.gridThickness) ||
        (this.gridThickness = 0);
      this._position = h;
      this.lineCoordinates = {
        x1: null,
        y1: null,
        x2: null,
        y2: null,
        width: null,
      };
      this.labelAngle = ((this.labelAngle % 360) + 360) % 360;
      90 < this.labelAngle && 270 > this.labelAngle
        ? (this.labelAngle -= 180)
        : 270 <= this.labelAngle &&
          360 >= this.labelAngle &&
          (this.labelAngle -= 360);
      this.options.scaleBreaks &&
        (this.scaleBreaks = new ea(
          this.chart,
          this.options.scaleBreaks,
          ++this.chart._eventManager.lastObjectId,
          this
        ));
      this.stripLines = [];
      if (this.options.stripLines && 0 < this.options.stripLines.length)
        for (a = 0; a < this.options.stripLines.length; a++)
          this.stripLines.push(
            new N(
              this.chart,
              this.options.stripLines[a],
              a,
              ++this.chart._eventManager.lastObjectId,
              this
            )
          );
      this.options.crosshair &&
        (this.crosshair = new da(this.chart, this.options.crosshair, this));
      this._titleTextBlock = null;
      this.hasOptionChanged("viewportMinimum") &&
        null === this.viewportMinimum &&
        ((this.options.viewportMinimum = void 0),
        (this.sessionVariables.viewportMinimum = null));
      this.hasOptionChanged("viewportMinimum") ||
      isNaN(this.sessionVariables.newViewportMinimum) ||
      null === this.sessionVariables.newViewportMinimum
        ? (this.sessionVariables.newViewportMinimum = null)
        : (this.viewportMinimum = this.sessionVariables.newViewportMinimum);
      this.hasOptionChanged("viewportMaximum") &&
        null === this.viewportMaximum &&
        ((this.options.viewportMaximum = void 0),
        (this.sessionVariables.viewportMaximum = null));
      this.hasOptionChanged("viewportMaximum") ||
      isNaN(this.sessionVariables.newViewportMaximum) ||
      null === this.sessionVariables.newViewportMaximum
        ? (this.sessionVariables.newViewportMaximum = null)
        : (this.viewportMaximum = this.sessionVariables.newViewportMaximum);
      null !== this.minimum &&
        null !== this.viewportMinimum &&
        (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
      null !== this.maximum &&
        null !== this.viewportMaximum &&
        (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
      this.trackChanges("viewportMinimum");
      this.trackChanges("viewportMaximum");
    }
    function ea(a, g, c, b) {
      ea.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", g, null, b);
      this.id = c;
      this.chart = a;
      this.ctx = this.chart.ctx;
      this.axis = b;
      this.optionsName = "scaleBreaks";
      this.isOptionsInArray = !1;
      this._appliedBreaks = [];
      this.customBreaks = [];
      this.autoBreaks = [];
      "string" === typeof this.spacing
        ? ((this.spacing = parseFloat(this.spacing)),
          (this.spacing = isNaN(this.spacing)
            ? 8
            : (10 < this.spacing ? 10 : this.spacing) + "%"))
        : "number" !== typeof this.spacing && (this.spacing = 8);
      this.autoCalculate &&
        (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
      if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
        for (a = 0; a < this.options.customBreaks.length; a++)
          this.customBreaks.push(
            new ca(
              this.chart,
              "customBreaks",
              this.options.customBreaks[a],
              a,
              ++this.chart._eventManager.lastObjectId,
              this
            )
          ),
            "number" === typeof this.customBreaks[a].startValue &&
              "number" === typeof this.customBreaks[a].endValue &&
              this.customBreaks[a].endValue !==
                this.customBreaks[a].startValue &&
              this._appliedBreaks.push(this.customBreaks[a]);
        this._appliedBreaks.sort(function (a, b) {
          return a.startValue - b.startValue;
        });
        for (a = 0; a < this._appliedBreaks.length - 1; a++)
          this._appliedBreaks[a].endValue >=
            this._appliedBreaks[a + 1].startValue &&
            ((this._appliedBreaks[a].endValue = Math.max(
              this._appliedBreaks[a].endValue,
              this._appliedBreaks[a + 1].endValue
            )),
            window.console &&
              window.console.log(
                "CanvasJS Error: Breaks " +
                  a +
                  " and " +
                  (a + 1) +
                  " are overlapping."
              ),
            this._appliedBreaks.splice(a, 2),
            a--);
      }
    }
    function ca(a, g, c, b, e, h) {
      ca.base.constructor.call(this, "Break", g, c, b, h);
      this.id = e;
      this.chart = a;
      this.ctx = this.chart.ctx;
      this.scaleBreaks = h;
      this.optionsName = g;
      this.isOptionsInArray = !0;
      this.type = c.type ? this.type : h.type;
      this.fillOpacity = n(c.fillOpacity) ? h.fillOpacity : this.fillOpacity;
      this.lineThickness = n(c.lineThickness)
        ? h.lineThickness
        : this.lineThickness;
      this.color = c.color ? this.color : h.color;
      this.lineColor = c.lineColor ? this.lineColor : h.lineColor;
      this.lineDashType = c.lineDashType ? this.lineDashType : h.lineDashType;
      !n(this.startValue) &&
        this.startValue.getTime &&
        (this.startValue = this.startValue.getTime());
      !n(this.endValue) &&
        this.endValue.getTime &&
        (this.endValue = this.endValue.getTime());
      "number" === typeof this.startValue &&
        "number" === typeof this.endValue &&
        this.endValue < this.startValue &&
        ((a = this.startValue),
        (this.startValue = this.endValue),
        (this.endValue = a));
      this.spacing = "undefined" === typeof c.spacing ? h.spacing : c.spacing;
      "string" === typeof this.options.spacing
        ? ((this.spacing = parseFloat(this.spacing)),
          (this.spacing = isNaN(this.spacing)
            ? 0
            : (10 < this.spacing ? 10 : this.spacing) + "%"))
        : "number" !== typeof this.options.spacing &&
          (this.spacing = h.spacing);
      this.size = h.parent.logarithmic ? 1 : 0;
    }
    function N(a, g, c, b, e) {
      N.base.constructor.call(this, "StripLine", "stripLines", g, c, e);
      this.id = b;
      this.chart = a;
      this.ctx = this.chart.ctx;
      this.label = this.label;
      this.axis = e;
      this.optionsName = "stripLines";
      this.isOptionsInArray = !0;
      this._thicknessType = "pixel";
      null !== this.startValue &&
        null !== this.endValue &&
        ((this.value = e.logarithmic
          ? Math.sqrt(
              (this.startValue.getTime
                ? this.startValue.getTime()
                : this.startValue) *
                (this.endValue.getTime
                  ? this.endValue.getTime()
                  : this.endValue)
            )
          : ((this.startValue.getTime
              ? this.startValue.getTime()
              : this.startValue) +
              (this.endValue.getTime
                ? this.endValue.getTime()
                : this.endValue)) /
            2),
        (this._thicknessType = null));
    }
    function da(a, g, c) {
      da.base.constructor.call(this, "Crosshair", "crosshair", g, null, c);
      this.chart = a;
      this.ctx = this.chart.ctx;
      this.axis = c;
      this.optionsName = "crosshair";
      this._thicknessType = "pixel";
    }
    function na(a, g) {
      na.base.constructor.call(this, "ToolTip", "toolTip", g, null, a);
      this.chart = a;
      this.canvas = a.canvas;
      this.ctx = this.chart.ctx;
      this.currentDataPointIndex = this.currentSeriesIndex = -1;
      this._prevY = this._prevX = NaN;
      this.containerTransitionDuration = 0.1;
      this.mozContainerTransition = this.getContainerTransition(
        this.containerTransitionDuration
      );
      this.optionsName = "toolTip";
      this._initialize();
    }
    function ha(a) {
      this.chart = a;
      this.lastObjectId = 0;
      this.objectMap = [];
      this.rectangularRegionEventSubscriptions = [];
      this.previousDataPointEventObject = null;
      this.ghostCanvas = ua(this.chart.width, this.chart.height, !0);
      this.ghostCtx = this.ghostCanvas.getContext("2d");
      this.mouseoveredObjectMaps = [];
    }
    function W(a) {
      this.chart = a;
      this.ctx = this.chart.plotArea.ctx;
      this.animations = [];
      this.animationRequestId = null;
    }
    pa(m, Y);
    m.prototype.destroy = function () {
      var a = this.allDOMEventHandlers;
      this._animator && this._animator.cancelAllAnimations();
      this._panTimerId && clearTimeout(this._panTimerId);
      for (var g = 0; g < a.length; g++) {
        var c = a[g][0],
          b = a[g][1],
          e = a[g][2],
          h = a[g][3],
          h = h || !1;
        c.removeEventListener
          ? c.removeEventListener(b, e, h)
          : c.detachEvent && c.detachEvent("on" + b, e);
      }
      this.allDOMEventHandlers = [];
      for (
        this.removeAllEventListeners();
        this._canvasJSContainer && this._canvasJSContainer.hasChildNodes();

      )
        this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
      for (; this.container && this.container.hasChildNodes(); )
        this.container.removeChild(this.container.lastChild);
      for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes(); )
        this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
      this.container = this._canvasJSContainer = null;
      this.toolTip.container = null;
      this.canvas && ya(this.canvas);
      this.overlaidCanvas && ya(this.overlaidCanvas);
      this._preRenderCanvas && ya(this._preRenderCanvas);
      this._breaksCanvas && ya(this._breaksCanvas);
      this._eventManager &&
        this._eventManager.ghostCanvas &&
        ya(this._eventManager.ghostCanvas);
      this._toolBar =
        this._dropdownMenu =
        this._menuButton =
        this._resetButton =
        this._zoomButton =
          null;
    };
    m.prototype._updateOptions = function () {
      var a = this;
      this.updateOption("width");
      this.updateOption("height");
      this.updateOption("dataPointWidth");
      this.updateOption("dataPointMinWidth");
      this.updateOption("dataPointMaxWidth");
      this.updateOption("interactivityEnabled");
      this.updateOption("theme");
      this.stockChart &&
        this.stockChart.options &&
        "undefined" !== typeof this.stockChart.options.theme &&
        n(this.options.theme) &&
        (this.theme = this.stockChart.theme);
      this.updateOption("colorSet") &&
        (this.selectedColorSet =
          "undefined" !== typeof Ba[this.colorSet]
            ? Ba[this.colorSet]
            : Ba.colorSet1);
      this.updateOption("backgroundColor");
      this.stockChart &&
        this.stockChart.options &&
        "undefined" !== typeof this.stockChart.options.backgroundColor &&
        n(this.options.backgroundColor) &&
        (this.backgroundColor = this.stockChart.backgroundColor);
      this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
      this.updateOption("culture");
      this.stockChart &&
        n(this.options.culture) &&
        (this.culture = this.stockChart.culture);
      this._cultureInfo = new Ja(this.culture);
      this.updateOption("animationEnabled");
      this.animationEnabled = this.animationEnabled && v;
      this.updateOption("animationDuration");
      this.updateOption("rangeChanging");
      this.updateOption("rangeChanged");
      this.updateOption("exportEnabled");
      this.updateOption("exportFileName");
      this.updateOption("zoomType");
      this.toolbar = new Va(this, this.options.toolbar);
      if (
        this.stockChart &&
        this.stockChart.options &&
        this.stockChart.options.toolbar &&
        !this.options.toolbar
      )
        for (var g in this.stockChart.options.toolbar)
          this.toolbar[g] = this.stockChart.options.toolbar[g];
      if (this.options.zoomEnabled || this.panEnabled) {
        if (this._zoomButton)
          Q(this._zoomButton, {
            borderRight:
              this.toolbar.buttonBorderThickness +
              "px solid " +
              this.toolbar.buttonBorderColor,
            backgroundColor: a.toolbar.itemBackgroundColor,
            color: a.toolbar.fontColor,
          }),
            0 >= navigator.userAgent.search("MSIE") &&
              this._zoomButton.childNodes[0] &&
              Q(this._zoomButton.childNodes[0], {
                WebkitFilter: "invert(0%)",
                filter: "invert(0%)",
              });
        else {
          var c = !1;
          wa((this._zoomButton = document.createElement("button")));
          ta(this, this._zoomButton, "pan");
          this._toolBar.appendChild(this._zoomButton);
          this._zoomButton.style.borderRight =
            this.toolbar.buttonBorderThickness +
            "px solid " +
            this.toolbar.buttonBorderColor;
          H(
            this._zoomButton,
            "touchstart",
            function (a) {
              c = !0;
            },
            this.allDOMEventHandlers
          );
          H(
            this._zoomButton,
            "click",
            function () {
              a.zoomEnabled
                ? ((a.zoomEnabled = !1),
                  (a.panEnabled = !0),
                  ta(a, a._zoomButton, "zoom"))
                : ((a.zoomEnabled = !0),
                  (a.panEnabled = !1),
                  ta(a, a._zoomButton, "pan"));
              a.render();
            },
            this.allDOMEventHandlers
          );
          H(
            this._zoomButton,
            "mousemove",
            function () {
              c
                ? (c = !1)
                : (Q(a._zoomButton, {
                    backgroundColor: a.toolbar.itemBackgroundColorOnHover,
                    color: a.toolbar.fontColorOnHover,
                    transition: "0.4s",
                    WebkitTransition: "0.4s",
                  }),
                  0 >= navigator.userAgent.search("MSIE") &&
                    Q(a._zoomButton.childNodes[0], {
                      WebkitFilter: "invert(100%)",
                      filter: "invert(100%)",
                    }));
            },
            this.allDOMEventHandlers
          );
          H(
            this._zoomButton,
            "mouseout",
            function () {
              c ||
                (Q(a._zoomButton, {
                  backgroundColor: a.toolbar.itemBackgroundColor,
                  color: a.toolbar.fontColor,
                  transition: "0.4s",
                  WebkitTransition: "0.4s",
                }),
                0 >= navigator.userAgent.search("MSIE") &&
                  Q(a._zoomButton.childNodes[0], {
                    WebkitFilter: "invert(0%)",
                    filter: "invert(0%)",
                  }));
            },
            this.allDOMEventHandlers
          );
        }
        this._resetButton
          ? (Q(this._resetButton, {
              borderRight:
                this.toolbar.buttonBorderThickness +
                "px solid " +
                this.toolbar.buttonBorderColor,
              backgroundColor: a.toolbar.itemBackgroundColor,
              color: a.toolbar.fontColor,
            }),
            0 >= navigator.userAgent.search("MSIE") &&
              this._resetButton.childNodes[0] &&
              Q(this._resetButton.childNodes[0], {
                WebkitFilter: "invert(0%)",
                filter: "invert(0%)",
              }),
            (this._resetButton.title = this._cultureInfo.resetText))
          : ((c = !1),
            wa((this._resetButton = document.createElement("button"))),
            ta(this, this._resetButton, "reset"),
            (this._resetButton.style.borderRight =
              (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) +
              "px solid " +
              this.toolbar.buttonBorderColor),
            this._toolBar.appendChild(this._resetButton),
            H(
              this._resetButton,
              "touchstart",
              function (a) {
                c = !0;
              },
              this.allDOMEventHandlers
            ),
            H(
              this._resetButton,
              "click",
              function () {
                a.toolTip.hide();
                a.toolTip &&
                  a.toolTip.enabled &&
                  a.toolTip.dispatchEvent(
                    "hidden",
                    { chart: a, toolTip: a.toolTip },
                    a.toolTip
                  );
                a.zoomEnabled || a.panEnabled
                  ? ((a.zoomEnabled = !0),
                    (a.panEnabled = !1),
                    ta(a, a._zoomButton, "pan"),
                    (a._defaultCursor = "default"),
                    (a.overlaidCanvas.style.cursor = a._defaultCursor))
                  : ((a.zoomEnabled = !1), (a.panEnabled = !1));
                if (a.sessionVariables.axisX)
                  for (var b = 0; b < a.sessionVariables.axisX.length; b++)
                    (a.sessionVariables.axisX[b].newViewportMinimum = null),
                      (a.sessionVariables.axisX[b].newViewportMaximum = null);
                if (a.sessionVariables.axisX2)
                  for (b = 0; b < a.sessionVariables.axisX2.length; b++)
                    (a.sessionVariables.axisX2[b].newViewportMinimum = null),
                      (a.sessionVariables.axisX2[b].newViewportMaximum = null);
                if (a.sessionVariables.axisY)
                  for (b = 0; b < a.sessionVariables.axisY.length; b++)
                    (a.sessionVariables.axisY[b].newViewportMinimum = null),
                      (a.sessionVariables.axisY[b].newViewportMaximum = null);
                if (a.sessionVariables.axisY2)
                  for (b = 0; b < a.sessionVariables.axisY2.length; b++)
                    (a.sessionVariables.axisY2[b].newViewportMinimum = null),
                      (a.sessionVariables.axisY2[b].newViewportMaximum = null);
                a.resetOverlayedCanvas();
                0 >= navigator.userAgent.search("MSIE") &&
                  Q(a._resetButton.childNodes[0], {
                    WebkitFilter: "invert(0%)",
                    filter: "invert(0%)",
                  });
                wa(a._zoomButton, a._resetButton);
                a.stockChart &&
                  (a.stockChart._rangeEventParameter = {
                    stockChart: a.stockChart,
                    source: "chart",
                    index: a.stockChart.charts.indexOf(a),
                    minimum: null,
                    maximum: null,
                  });
                a._dispatchRangeEvent("rangeChanging", "reset");
                a.stockChart &&
                  ((a.stockChart._rangeEventParameter.type = "rangeChanging"),
                  a.stockChart.dispatchEvent(
                    "rangeChanging",
                    a.stockChart._rangeEventParameter,
                    a.stockChart
                  ));
                a.render();
                a.syncCharts &&
                  a.stockChart &&
                  ((a.stockChart.rangeUpdatedBy =
                    !a.stockChart.navigator.slider ||
                    (n(a.stockChart.navigator.slider.options.minimum) &&
                      n(a.stockChart.navigator.slider.options.maximum))
                      ? !a.stockChart.rangeSelector.enabled ||
                        !a.stockChart.rangeSelector.inputFields.enabled ||
                        (n(
                          a.stockChart.rangeSelector.inputFields.options
                            .startValue
                        ) &&
                          n(
                            a.stockChart.rangeSelector.inputFields.options
                              .endValue
                          ))
                        ? null
                        : "inputFields"
                      : "navigator"),
                  n(a.stockChart._selectedRangeButtonIndex) ||
                    (a.stockChart.rangeUpdatedBy = "rangeButton"),
                  a.syncCharts(null, null),
                  "rangeButton" === a.stockChart.rangeUpdatedBy &&
                    a.stockChart.rangeSelector.selectedRangeButtonIndex <
                      a.stockChart.rangeSelector.buttons.length &&
                    ((b =
                      a.stockChart.rangeSelector.buttons[
                        a.stockChart.rangeSelector.selectedRangeButtonIndex
                      ]),
                    b.enabled &&
                      ((b.state = "on"),
                      (b.textBlock.fontWeight = "bold"),
                      (b.textBlock.fontColor =
                        a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover),
                      (b.textBlock.backgroundColor =
                        a.stockChart.rangeSelector.buttonStyle.backgroundColorOnSelect),
                      b.render())));
                a._dispatchRangeEvent("rangeChanged", "reset");
                a.stockChart &&
                  ((a.stockChart._rangeEventParameter.type = "rangeChanged"),
                  a.stockChart.dispatchEvent(
                    "rangeChanged",
                    a.stockChart._rangeEventParameter,
                    a.stockChart
                  ));
              },
              this.allDOMEventHandlers
            ),
            H(
              this._resetButton,
              "mousemove",
              function () {
                c ||
                  (Q(a._resetButton, {
                    backgroundColor: a.toolbar.itemBackgroundColorOnHover,
                    color: a.toolbar.fontColorOnHover,
                    transition: "0.4s",
                    WebkitTransition: "0.4s",
                  }),
                  0 >= navigator.userAgent.search("MSIE") &&
                    Q(a._resetButton.childNodes[0], {
                      WebkitFilter: "invert(100%)",
                      filter: "invert(100%)",
                    }));
              },
              this.allDOMEventHandlers
            ),
            H(
              this._resetButton,
              "mouseout",
              function () {
                c ||
                  (Q(a._resetButton, {
                    backgroundColor: a.toolbar.itemBackgroundColor,
                    color: a.toolbar.fontColor,
                    transition: "0.4s",
                    WebkitTransition: "0.4s",
                  }),
                  0 >= navigator.userAgent.search("MSIE") &&
                    Q(a._resetButton.childNodes[0], {
                      WebkitFilter: "invert(0%)",
                      filter: "invert(0%)",
                    }));
              },
              this.allDOMEventHandlers
            ),
            (this.overlaidCanvas.style.cursor = a._defaultCursor));
        this.zoomEnabled ||
          this.panEnabled ||
          (this._zoomButton
            ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText
                ? ((this.panEnabled = !0), (this.zoomEnabled = !1))
                : ((this.zoomEnabled = !0), (this.panEnabled = !1)),
              La(a._zoomButton, a._resetButton))
            : ((this.zoomEnabled = !0), (this.panEnabled = !1)));
      } else this.panEnabled = this.zoomEnabled = !1;
      ib(this);
      "none" !== this._toolBar.style.display &&
        this._zoomButton &&
        (this.panEnabled
          ? ta(a, a._zoomButton, "zoom")
          : ta(a, a._zoomButton, "pan"),
        a._resetButton.getAttribute("state") !== a._cultureInfo.resetText &&
          ta(a, a._resetButton, "reset"));
      this.options.toolTip &&
        this.toolTip.options !== this.options.toolTip &&
        (this.toolTip.options = this.options.toolTip);
      for (g in this.toolTip.options)
        this.toolTip.options.hasOwnProperty(g) && this.toolTip.updateOption(g);
    };
    m.prototype._updateSize = function () {
      var a;
      a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
      var g = 0,
        c = 0;
      this.options.width
        ? (g = this.width)
        : (this.width = g =
            0 < this.container.clientWidth
              ? this.container.clientWidth
              : this.width);
      n(this.stockChart) || n(this.index)
        ? this.options.height
          ? (c = this.height)
          : (this.height = c =
              0 < this.container.clientHeight
                ? this.container.clientHeight
                : this.height)
        : (c = this.height = this.stockChart._chartsHeight[this.index]);
      if (this.canvas.width !== g * la || this.canvas.height !== c * la) {
        for (var b = 0; b < a.length; b++) Ma(a[b], g, c);
        this.bounds = {
          x1: 0,
          y1: 0,
          x2: this.width,
          y2: this.height,
          width: this.width,
          height: this.height,
        };
        a = !0;
      } else a = !1;
      return a;
    };
    m.prototype._initialize = function () {
      this.isNavigator =
        n(this.parent) ||
        n(this.parent._defaultsKey) ||
        "Navigator" !== this.parent._defaultsKey
          ? !1
          : !0;
      this._animator
        ? this._animator.cancelAllAnimations()
        : (this._animator = new W(this));
      this.removeAllEventListeners();
      this.disableToolTip = !1;
      this._axes = [];
      this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
      this._updateOptions();
      this.animatedRender =
        v && this.animationEnabled && 0 === this.renderCount;
      this._updateSize();
      this.clearCanvas();
      this.ctx.beginPath();
      this.axisX = [];
      this.axisX2 = [];
      this.axisY = [];
      this.axisY2 = [];
      this._indexLabels = [];
      this._dataInRenderedOrder = [];
      this._events = [];
      this._eventManager && this._eventManager.reset();
      this.plotInfo = { axisPlacement: null, plotTypes: [] };
      this.layoutManager = new Ea(
        0,
        0,
        this.width,
        this.height,
        this.isNavigator ? 0 : 2
      );
      this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
      this.data = [];
      this.title = null;
      this.subtitles = [];
      var a = 0,
        g = null;
      if (this.options.data) {
        for (var c = 0; c < this.options.data.length; c++)
          if (
            (a++,
            !this.options.data[c].type ||
              0 <= m._supportedChartTypes.indexOf(this.options.data[c].type))
          ) {
            var b = new V(
              this,
              this.options.data[c],
              a - 1,
              ++this._eventManager.lastObjectId
            );
            if (!n(b) && b.dataPoints)
              for (var e = 0; e < b.dataPoints.length; e++)
                if (b.dataPoints[e].x && b.dataPoints[e].x.getTime) {
                  b.xValueType = "dateTime";
                  break;
                }
            "error" === b.type &&
              ((b.linkedDataSeriesIndex = n(
                this.options.data[c].linkedDataSeriesIndex
              )
                ? c - 1
                : this.options.data[c].linkedDataSeriesIndex),
              0 > b.linkedDataSeriesIndex ||
                b.linkedDataSeriesIndex >= this.options.data.length ||
                "number" !== typeof b.linkedDataSeriesIndex ||
                "error" === this.options.data[b.linkedDataSeriesIndex].type) &&
              (b.linkedDataSeriesIndex = null);
            null === b.name && (b.name = "DataSeries " + a);
            null === b.color
              ? 1 < this.options.data.length
                ? ((b._colorSet = [
                    this.selectedColorSet[
                      b.index % this.selectedColorSet.length
                    ],
                  ]),
                  (b.color =
                    this.selectedColorSet[
                      b.index % this.selectedColorSet.length
                    ]))
                : (b._colorSet =
                    "line" === b.type ||
                    "stepLine" === b.type ||
                    "spline" === b.type ||
                    "area" === b.type ||
                    "stepArea" === b.type ||
                    "splineArea" === b.type ||
                    "stackedArea" === b.type ||
                    "stackedArea100" === b.type ||
                    "rangeArea" === b.type ||
                    "rangeSplineArea" === b.type ||
                    "candlestick" === b.type ||
                    "ohlc" === b.type ||
                    "waterfall" === b.type ||
                    "boxAndWhisker" === b.type
                      ? [this.selectedColorSet[0]]
                      : this.selectedColorSet)
              : (b._colorSet = [b.color]);
            null === b.markerSize &&
              ((("line" === b.type ||
                "stepLine" === b.type ||
                "spline" === b.type ||
                0 <= b.type.toLowerCase().indexOf("area")) &&
                b.dataPoints &&
                b.dataPoints.length < this.width / 16) ||
                "scatter" === b.type) &&
              (b.markerSize = 8);
            ("bubble" !== b.type && "scatter" !== b.type) ||
              !b.dataPoints ||
              (b.dataPoints.some
                ? b.dataPoints.some(function (a) {
                    return a.x;
                  }) && b.dataPoints.sort(d)
                : b.dataPoints.sort(d));
            this.data.push(b);
            var e = b.axisPlacement,
              g = g || e,
              h;
            "normal" === e
              ? "xySwapped" === this.plotInfo.axisPlacement
                ? (h = 'You cannot combine "' + b.type + '" with bar chart')
                : "none" === this.plotInfo.axisPlacement
                ? (h = 'You cannot combine "' + b.type + '" with pie chart')
                : null === this.plotInfo.axisPlacement &&
                  (this.plotInfo.axisPlacement = "normal")
              : "xySwapped" === e
              ? "normal" === this.plotInfo.axisPlacement
                ? (h =
                    'You cannot combine "' +
                    b.type +
                    '" with line, area, column or pie chart')
                : "none" === this.plotInfo.axisPlacement
                ? (h = 'You cannot combine "' + b.type + '" with pie chart')
                : null === this.plotInfo.axisPlacement &&
                  (this.plotInfo.axisPlacement = "xySwapped")
              : "none" === e
              ? "normal" === this.plotInfo.axisPlacement
                ? (h =
                    'You cannot combine "' +
                    b.type +
                    '" with line, area, column or bar chart')
                : "xySwapped" === this.plotInfo.axisPlacement
                ? (h = 'You cannot combine "' + b.type + '" with bar chart')
                : null === this.plotInfo.axisPlacement &&
                  (this.plotInfo.axisPlacement = "none")
              : null === e &&
                "none" === this.plotInfo.axisPlacement &&
                (h = 'You cannot combine "' + b.type + '" with pie chart');
            if (h && window.console) {
              window.console.log(h);
              return;
            }
          }
        for (c = 0; c < this.data.length; c++) {
          if ("none" == g && "error" === this.data[c].type && window.console) {
            window.console.log(
              'You cannot combine "' + b.type + '" with error chart'
            );
            return;
          }
          "error" === this.data[c].type &&
            ((this.data[c].axisPlacement = this.plotInfo.axisPlacement =
              g || "normal"),
            (this.data[c]._linkedSeries =
              null === this.data[c].linkedDataSeriesIndex
                ? null
                : this.data[this.data[c].linkedDataSeriesIndex]));
        }
      }
      this._objectsInitialized = !0;
      this._plotAreaElements = [];
    };
    m._supportedChartTypes = Da(
      "line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(
        " "
      )
    );
    m.prototype.setLayout = function () {
      for (var a = this._plotAreaElements, g = 0; g < this.data.length; g++)
        if (
          "normal" === this.plotInfo.axisPlacement ||
          "xySwapped" === this.plotInfo.axisPlacement
        ) {
          if (!this.data[g].axisYType || "primary" === this.data[g].axisYType)
            if (this.options.axisY && 0 < this.options.axisY.length) {
              if (!this.axisY.length)
                for (var c = 0; c < this.options.axisY.length; c++)
                  "normal" === this.plotInfo.axisPlacement
                    ? this._axes.push(
                        (this.axisY[c] = new A(
                          this,
                          "axisY",
                          this.options.axisY[c],
                          c,
                          "axisY",
                          "left"
                        ))
                      )
                    : "xySwapped" === this.plotInfo.axisPlacement &&
                      this._axes.push(
                        (this.axisY[c] = new A(
                          this,
                          "axisY",
                          this.options.axisY[c],
                          c,
                          "axisY",
                          "bottom"
                        ))
                      );
              this.data[g].axisY =
                this.axisY[
                  0 <= this.data[g].axisYIndex &&
                  this.data[g].axisYIndex < this.axisY.length
                    ? this.data[g].axisYIndex
                    : 0
                ];
              this.axisY[
                0 <= this.data[g].axisYIndex &&
                this.data[g].axisYIndex < this.axisY.length
                  ? this.data[g].axisYIndex
                  : 0
              ].dataSeries.push(this.data[g]);
            } else
              this.axisY.length ||
                ("normal" === this.plotInfo.axisPlacement
                  ? this._axes.push(
                      (this.axisY[0] = new A(
                        this,
                        "axisY",
                        this.options.axisY,
                        0,
                        "axisY",
                        "left"
                      ))
                    )
                  : "xySwapped" === this.plotInfo.axisPlacement &&
                    this._axes.push(
                      (this.axisY[0] = new A(
                        this,
                        "axisY",
                        this.options.axisY,
                        0,
                        "axisY",
                        "bottom"
                      ))
                    )),
                (this.data[g].axisY = this.axisY[0]),
                this.axisY[0].dataSeries.push(this.data[g]);
          if ("secondary" === this.data[g].axisYType)
            if (this.options.axisY2 && 0 < this.options.axisY2.length) {
              if (!this.axisY2.length)
                for (c = 0; c < this.options.axisY2.length; c++)
                  "normal" === this.plotInfo.axisPlacement
                    ? this._axes.push(
                        (this.axisY2[c] = new A(
                          this,
                          "axisY2",
                          this.options.axisY2[c],
                          c,
                          "axisY",
                          "right"
                        ))
                      )
                    : "xySwapped" === this.plotInfo.axisPlacement &&
                      this._axes.push(
                        (this.axisY2[c] = new A(
                          this,
                          "axisY2",
                          this.options.axisY2[c],
                          c,
                          "axisY",
                          "top"
                        ))
                      );
              this.data[g].axisY =
                this.axisY2[
                  0 <= this.data[g].axisYIndex &&
                  this.data[g].axisYIndex < this.axisY2.length
                    ? this.data[g].axisYIndex
                    : 0
                ];
              this.axisY2[
                0 <= this.data[g].axisYIndex &&
                this.data[g].axisYIndex < this.axisY2.length
                  ? this.data[g].axisYIndex
                  : 0
              ].dataSeries.push(this.data[g]);
            } else
              this.axisY2.length ||
                ("normal" === this.plotInfo.axisPlacement
                  ? this._axes.push(
                      (this.axisY2[0] = new A(
                        this,
                        "axisY2",
                        this.options.axisY2,
                        0,
                        "axisY",
                        "right"
                      ))
                    )
                  : "xySwapped" === this.plotInfo.axisPlacement &&
                    this._axes.push(
                      (this.axisY2[0] = new A(
                        this,
                        "axisY2",
                        this.options.axisY2,
                        0,
                        "axisY",
                        "top"
                      ))
                    )),
                (this.data[g].axisY = this.axisY2[0]),
                this.axisY2[0].dataSeries.push(this.data[g]);
          if (!this.data[g].axisXType || "primary" === this.data[g].axisXType)
            if (this.options.axisX && 0 < this.options.axisX.length) {
              if (!this.axisX.length)
                for (c = 0; c < this.options.axisX.length; c++)
                  "normal" === this.plotInfo.axisPlacement
                    ? this._axes.push(
                        (this.axisX[c] = new A(
                          this,
                          "axisX",
                          this.options.axisX[c],
                          c,
                          "axisX",
                          "bottom"
                        ))
                      )
                    : "xySwapped" === this.plotInfo.axisPlacement &&
                      this._axes.push(
                        (this.axisX[c] = new A(
                          this,
                          "axisX",
                          this.options.axisX[c],
                          c,
                          "axisX",
                          "left"
                        ))
                      );
              this.data[g].axisX =
                this.axisX[
                  0 <= this.data[g].axisXIndex &&
                  this.data[g].axisXIndex < this.axisX.length
                    ? this.data[g].axisXIndex
                    : 0
                ];
              this.axisX[
                0 <= this.data[g].axisXIndex &&
                this.data[g].axisXIndex < this.axisX.length
                  ? this.data[g].axisXIndex
                  : 0
              ].dataSeries.push(this.data[g]);
            } else
              this.axisX.length ||
                ("normal" === this.plotInfo.axisPlacement
                  ? this._axes.push(
                      (this.axisX[0] = new A(
                        this,
                        "axisX",
                        this.options.axisX,
                        0,
                        "axisX",
                        "bottom"
                      ))
                    )
                  : "xySwapped" === this.plotInfo.axisPlacement &&
                    this._axes.push(
                      (this.axisX[0] = new A(
                        this,
                        "axisX",
                        this.options.axisX,
                        0,
                        "axisX",
                        "left"
                      ))
                    )),
                (this.data[g].axisX = this.axisX[0]),
                this.axisX[0].dataSeries.push(this.data[g]);
          if ("secondary" === this.data[g].axisXType)
            if (this.options.axisX2 && 0 < this.options.axisX2.length) {
              if (!this.axisX2.length)
                for (c = 0; c < this.options.axisX2.length; c++)
                  "normal" === this.plotInfo.axisPlacement
                    ? this._axes.push(
                        (this.axisX2[c] = new A(
                          this,
                          "axisX2",
                          this.options.axisX2[c],
                          c,
                          "axisX",
                          "top"
                        ))
                      )
                    : "xySwapped" === this.plotInfo.axisPlacement &&
                      this._axes.push(
                        (this.axisX2[c] = new A(
                          this,
                          "axisX2",
                          this.options.axisX2[c],
                          c,
                          "axisX",
                          "right"
                        ))
                      );
              this.data[g].axisX =
                this.axisX2[
                  0 <= this.data[g].axisXIndex &&
                  this.data[g].axisXIndex < this.axisX2.length
                    ? this.data[g].axisXIndex
                    : 0
                ];
              this.axisX2[
                0 <= this.data[g].axisXIndex &&
                this.data[g].axisXIndex < this.axisX2.length
                  ? this.data[g].axisXIndex
                  : 0
              ].dataSeries.push(this.data[g]);
            } else
              this.axisX2.length ||
                ("normal" === this.plotInfo.axisPlacement
                  ? this._axes.push(
                      (this.axisX2[0] = new A(
                        this,
                        "axisX2",
                        this.options.axisX2,
                        0,
                        "axisX",
                        "top"
                      ))
                    )
                  : "xySwapped" === this.plotInfo.axisPlacement &&
                    this._axes.push(
                      (this.axisX2[0] = new A(
                        this,
                        "axisX2",
                        this.options.axisX2,
                        0,
                        "axisX",
                        "right"
                      ))
                    )),
                (this.data[g].axisX = this.axisX2[0]),
                this.axisX2[0].dataSeries.push(this.data[g]);
        }
      if (this.axisY) {
        for (c = 1; c < this.axisY.length; c++)
          "undefined" === typeof this.axisY[c].options.gridThickness &&
            (this.axisY[c].gridThickness = 0);
        for (c = 0; c < this.axisY.length - 1; c++)
          "undefined" === typeof this.axisY[c].options.margin &&
            (this.axisY[c].margin = 10);
      }
      if (this.axisY2) {
        for (c = 1; c < this.axisY2.length; c++)
          "undefined" === typeof this.axisY2[c].options.gridThickness &&
            (this.axisY2[c].gridThickness = 0);
        for (c = 0; c < this.axisY2.length - 1; c++)
          "undefined" === typeof this.axisY2[c].options.margin &&
            (this.axisY2[c].margin = 10);
      }
      this.axisY &&
        0 < this.axisY.length &&
        this.axisY2 &&
        0 < this.axisY2.length &&
        (0 < this.axisY[0].gridThickness &&
        "undefined" === typeof this.axisY2[0].options.gridThickness
          ? (this.axisY2[0].gridThickness = 0)
          : 0 < this.axisY2[0].gridThickness &&
            "undefined" === typeof this.axisY[0].options.gridThickness &&
            (this.axisY[0].gridThickness = 0));
      if (this.axisX)
        for (c = 0; c < this.axisX.length; c++)
          "undefined" === typeof this.axisX[c].options.gridThickness &&
            (this.axisX[c].gridThickness = 0);
      if (this.axisX2)
        for (c = 0; c < this.axisX2.length; c++)
          "undefined" === typeof this.axisX2[c].options.gridThickness &&
            (this.axisX2[c].gridThickness = 0);
      this.axisX &&
        0 < this.axisX.length &&
        this.axisX2 &&
        0 < this.axisX2.length &&
        (0 < this.axisX[0].gridThickness &&
        "undefined" === typeof this.axisX2[0].options.gridThickness
          ? (this.axisX2[0].gridThickness = 0)
          : 0 < this.axisX2[0].gridThickness &&
            "undefined" === typeof this.axisX[0].options.gridThickness &&
            (this.axisX[0].gridThickness = 0));
      c = !1;
      if (
        0 < this._axes.length &&
        this.options.zoomEnabled &&
        (this.zoomEnabled || this.panEnabled)
      )
        for (g = 0; g < this._axes.length; g++)
          if (
            !n(this._axes[g].viewportMinimum) ||
            !n(this._axes[g].viewportMaximum)
          ) {
            c = !0;
            break;
          }
      c
        ? (La(this._zoomButton, this._resetButton),
          (this._toolBar.style.border =
            this.toolbar.buttonBorderThickness +
            "px solid " +
            this.toolbar.buttonBorderColor),
          (this._zoomButton.style.borderRight =
            this.toolbar.buttonBorderThickness +
            "px solid " +
            this.toolbar.buttonBorderColor),
          (this._resetButton.style.borderRight =
            (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) +
            "px solid " +
            this.toolbar.buttonBorderColor))
        : (wa(this._zoomButton, this._resetButton),
          (this._toolBar.style.border =
            this.toolbar.buttonBorderThickness + "px solid transparent"),
          this.options.zoomEnabled &&
            ((this.zoomEnabled = !0), (this.panEnabled = !1)));
      gb(this);
      this._processData();
      this.options.title &&
        ((this.title = new Aa(this, this.options.title)),
        this.title.dockInsidePlotArea
          ? a.push(this.title)
          : this.title.setLayout());
      if (this.options.subtitles)
        for (g = 0; g < this.options.subtitles.length; g++)
          (c = new Ia(this, this.options.subtitles[g], g)),
            this.subtitles.push(c),
            c.dockInsidePlotArea ? a.push(c) : c.setLayout();
      this.legend = new S(this, this.options.legend);
      for (g = 0; g < this.data.length; g++)
        (this.data[g].showInLegend ||
          "pie" === this.data[g].type ||
          "doughnut" === this.data[g].type ||
          "funnel" === this.data[g].type ||
          "pyramid" === this.data[g].type) &&
          this.legend.dataSeries.push(this.data[g]);
      this.legend.dockInsidePlotArea
        ? a.push(this.legend)
        : this.legend.setLayout();
      for (g = 0; g < this._axes.length; g++)
        if (
          this._axes[g].scaleBreaks &&
          this._axes[g].scaleBreaks._appliedBreaks.length
        ) {
          v
            ? ((this._breaksCanvas = ua(this.width, this.height, !0)),
              (this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")))
            : ((this._breaksCanvas = this.canvas),
              (this._breaksCanvasCtx = this.ctx));
          break;
        }
      this._preRenderCanvas = ua(this.width, this.height);
      this._preRenderCtx = this._preRenderCanvas.getContext("2d");
      ("normal" !== this.plotInfo.axisPlacement &&
        "xySwapped" !== this.plotInfo.axisPlacement) ||
        A.setLayout(
          this.axisX,
          this.axisX2,
          this.axisY,
          this.axisY2,
          this.plotInfo.axisPlacement,
          this.layoutManager.getFreeSpace()
        );
    };
    m.prototype.renderElements = function () {
      if (this.height) {
        var a = this._plotAreaElements;
        this.title && !this.title.dockInsidePlotArea && this.title.render();
        for (var g = 0; g < this.subtitles.length; g++)
          this.subtitles[g].dockInsidePlotArea || this.subtitles[g].render();
        this.legend.dockInsidePlotArea || this.legend.render();
        if (
          "normal" === this.plotInfo.axisPlacement ||
          "xySwapped" === this.plotInfo.axisPlacement
        )
          A.render(
            this.axisX,
            this.axisX2,
            this.axisY,
            this.axisY2,
            this.plotInfo.axisPlacement
          );
        else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
        else return;
        for (g = 0; g < a.length; g++) a[g].setLayout(), a[g].render();
        var c = [];
        if (this.animatedRender) {
          var b = ua(this.width, this.height);
          b.getContext("2d").drawImage(
            this.canvas,
            0,
            0,
            this.width,
            this.height
          );
        }
        jb(this);
        var a = this.ctx.miterLimit,
          e;
        this.ctx.miterLimit = 3;
        v &&
          this._breaksCanvas &&
          (this._preRenderCtx.drawImage(
            this.canvas,
            0,
            0,
            this.width,
            this.height
          ),
          this._preRenderCtx.drawImage(
            this._breaksCanvas,
            0,
            0,
            this.width,
            this.height
          ),
          (this._breaksCanvasCtx.globalCompositeOperation = "source-atop"),
          this._breaksCanvasCtx.drawImage(
            this._preRenderCanvas,
            0,
            0,
            this.width,
            this.height
          ),
          this._preRenderCtx.clearRect(0, 0, this.width, this.height));
        for (g = 0; g < this.plotInfo.plotTypes.length; g++)
          for (
            var h = this.plotInfo.plotTypes[g], q = 0;
            q < h.plotUnits.length;
            q++
          ) {
            var y = h.plotUnits[q],
              I = null;
            y.targetCanvas && ya(y.targetCanvas);
            y.targetCanvas = null;
            this.animatedRender &&
              ((y.targetCanvas = ua(this.width, this.height)),
              (y.targetCanvasCtx = y.targetCanvas.getContext("2d")),
              (e = y.targetCanvasCtx.miterLimit),
              (y.targetCanvasCtx.miterLimit = 3));
            "line" === y.type
              ? (I = this.renderLine(y))
              : "stepLine" === y.type
              ? (I = this.renderStepLine(y))
              : "spline" === y.type
              ? (I = this.renderSpline(y))
              : "column" === y.type
              ? (I = this.renderColumn(y))
              : "bar" === y.type
              ? (I = this.renderBar(y))
              : "area" === y.type
              ? (I = this.renderArea(y))
              : "stepArea" === y.type
              ? (I = this.renderStepArea(y))
              : "splineArea" === y.type
              ? (I = this.renderSplineArea(y))
              : "stackedColumn" === y.type
              ? (I = this.renderStackedColumn(y))
              : "stackedColumn100" === y.type
              ? (I = this.renderStackedColumn100(y))
              : "stackedBar" === y.type
              ? (I = this.renderStackedBar(y))
              : "stackedBar100" === y.type
              ? (I = this.renderStackedBar100(y))
              : "stackedArea" === y.type
              ? (I = this.renderStackedArea(y))
              : "stackedArea100" === y.type
              ? (I = this.renderStackedArea100(y))
              : "bubble" === y.type
              ? (I = I = this.renderBubble(y))
              : "scatter" === y.type
              ? (I = this.renderScatter(y))
              : "pie" === y.type
              ? this.renderPie(y)
              : "doughnut" === y.type
              ? this.renderPie(y)
              : "funnel" === y.type
              ? (I = this.renderFunnel(y))
              : "pyramid" === y.type
              ? (I = this.renderFunnel(y))
              : "candlestick" === y.type
              ? (I = this.renderCandlestick(y))
              : "ohlc" === y.type
              ? (I = this.renderCandlestick(y))
              : "rangeColumn" === y.type
              ? (I = this.renderRangeColumn(y))
              : "error" === y.type
              ? (I = this.renderError(y))
              : "rangeBar" === y.type
              ? (I = this.renderRangeBar(y))
              : "rangeArea" === y.type
              ? (I = this.renderRangeArea(y))
              : "rangeSplineArea" === y.type
              ? (I = this.renderRangeSplineArea(y))
              : "waterfall" === y.type
              ? (I = this.renderWaterfall(y))
              : "boxAndWhisker" === y.type && (I = this.renderBoxAndWhisker(y));
            for (var k = 0; k < y.dataSeriesIndexes.length; k++)
              this._dataInRenderedOrder.push(this.data[y.dataSeriesIndexes[k]]);
            this.animatedRender &&
              ((y.targetCanvasCtx.miterLimit = e), I && c.push(I));
          }
        this.ctx.miterLimit = a;
        this.animatedRender &&
          this._breaksCanvasCtx &&
          c.push({
            source: this._breaksCanvasCtx,
            dest: this.plotArea.ctx,
            animationCallback: L.fadeInAnimation,
            easingFunction: L.easing.easeInQuad,
            animationBase: 0,
            startTimePercent: 0.7,
          });
        this.animatedRender &&
          0 < this._indexLabels.length &&
          ((e = ua(this.width, this.height).getContext("2d")),
          za(e),
          c.push(this.renderIndexLabels(e)));
        var l = this;
        if (0 < c.length)
          (l.disableToolTip = !0),
            l._animator.animate(
              200,
              l.animationDuration,
              function (a) {
                l.ctx.clearRect(0, 0, l.width, l.height);
                l.ctx.drawImage(
                  b,
                  0,
                  0,
                  Math.floor(l.width * la),
                  Math.floor(l.height * la),
                  0,
                  0,
                  l.width,
                  l.height
                );
                for (var e = 0; e < c.length; e++)
                  (I = c[e]),
                    1 > a && "undefined" !== typeof I.startTimePercent
                      ? a >= I.startTimePercent &&
                        I.animationCallback(
                          I.easingFunction(
                            a - I.startTimePercent,
                            0,
                            1,
                            1 - I.startTimePercent
                          ),
                          I
                        )
                      : I.animationCallback(I.easingFunction(a, 0, 1, 1), I);
                l.dispatchEvent("dataAnimationIterationEnd", { chart: l });
              },
              function () {
                c = [];
                for (var a = 0; a < l.plotInfo.plotTypes.length; a++)
                  for (
                    var e = l.plotInfo.plotTypes[a], f = 0;
                    f < e.plotUnits.length;
                    f++
                  ) {
                    var g = e.plotUnits[f];
                    g.targetCanvas && ya(g.targetCanvas);
                    g.targetCanvas = null;
                  }
                b = null;
                l.disableToolTip = !1;
                l.dispatchEvent("dataAnimationEnd", { chart: l });
              }
            );
        else {
          if (l._breaksCanvas)
            if (v)
              l.plotArea.ctx.drawImage(
                l._breaksCanvas,
                0,
                0,
                this.width,
                this.height
              );
            else for (k = 0; k < l._axes.length; k++) l._axes[k].createMask();
          0 < l._indexLabels.length && l.renderIndexLabels();
          l.dispatchEvent("dataAnimationIterationEnd", { chart: l });
          l.dispatchEvent("dataAnimationEnd", { chart: l });
        }
        this.attachPlotAreaEventHandlers();
        this.zoomEnabled ||
          this.panEnabled ||
          !this._zoomButton ||
          "none" === this._zoomButton.style.display ||
          wa(this._zoomButton, this._resetButton);
        n(this.toolTip._xValue) ||
          n(this.toolTip._dataSeriesIndex) ||
          this.toolTip.showAtX(
            this.toolTip._xValue,
            this.toolTip._dataSeriesIndex
          );
        this.toolTip._updateToolTip();
        this.renderCount++;
        Ha &&
          ((l = this),
          setTimeout(function () {
            var a = document.getElementById("ghostCanvasCopy");
            a &&
              (Ma(a, l.width, l.height),
              a.getContext("2d").drawImage(l._eventManager.ghostCanvas, 0, 0));
          }, 2e3));
        this._breaksCanvas &&
          (delete this._breaksCanvas, delete this._breaksCanvasCtx);
        for (k = 0; k < this._axes.length; k++)
          this._axes[k].maskCanvas &&
            (delete this._axes[k].maskCanvas, delete this._axes[k].maskCtx);
      }
    };
    m.prototype.render = function (a) {
      a && (this.options = a);
      this._initialize();
      this.setLayout();
      this.renderElements();
      this._preRenderCanvas && ya(this._preRenderCanvas);
    };
    m.prototype.attachPlotAreaEventHandlers = function () {
      this.attachEvent({
        context: this,
        chart: this,
        mousedown: this._plotAreaMouseDown,
        mouseup: this._plotAreaMouseUp,
        mousemove: this._plotAreaMouseMove,
        cursor: this.panEnabled ? "move" : "default",
        capture: !0,
        bounds: this.plotArea,
      });
    };
    m.prototype.categoriseDataSeries = function () {
      for (var a = "", g = 0; g < this.data.length; g++)
        if (
          ((a = this.data[g]),
          a.dataPoints &&
            0 !== a.dataPoints.length &&
            a.visible &&
            0 <= m._supportedChartTypes.indexOf(a.type))
        ) {
          for (
            var c = null, b = !1, e = null, h = !1, q = 0;
            q < this.plotInfo.plotTypes.length;
            q++
          )
            if (this.plotInfo.plotTypes[q].type === a.type) {
              b = !0;
              c = this.plotInfo.plotTypes[q];
              break;
            }
          b ||
            ((c = { type: a.type, totalDataSeries: 0, plotUnits: [] }),
            this.plotInfo.plotTypes.push(c));
          for (q = 0; q < c.plotUnits.length; q++)
            if (
              c.plotUnits[q].axisYType === a.axisYType &&
              c.plotUnits[q].axisXType === a.axisXType &&
              c.plotUnits[q].axisYIndex === a.axisYIndex &&
              c.plotUnits[q].axisXIndex === a.axisXIndex
            ) {
              h = !0;
              e = c.plotUnits[q];
              break;
            }
          h ||
            ((e = {
              type: a.type,
              previousDataSeriesCount: 0,
              index: c.plotUnits.length,
              plotType: c,
              axisXType: a.axisXType,
              axisYType: a.axisYType,
              axisYIndex: a.axisYIndex,
              axisXIndex: a.axisXIndex,
              axisY:
                "primary" === a.axisYType
                  ? this.axisY[
                      0 <= a.axisYIndex && a.axisYIndex < this.axisY.length
                        ? a.axisYIndex
                        : 0
                    ]
                  : this.axisY2[
                      0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length
                        ? a.axisYIndex
                        : 0
                    ],
              axisX:
                "primary" === a.axisXType
                  ? this.axisX[
                      0 <= a.axisXIndex && a.axisXIndex < this.axisX.length
                        ? a.axisXIndex
                        : 0
                    ]
                  : this.axisX2[
                      0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length
                        ? a.axisXIndex
                        : 0
                    ],
              dataSeriesIndexes: [],
              yTotals: [],
              yAbsTotals: [],
            }),
            c.plotUnits.push(e));
          c.totalDataSeries++;
          e.dataSeriesIndexes.push(g);
          a.plotUnit = e;
        }
      for (g = 0; g < this.plotInfo.plotTypes.length; g++)
        for (
          c = this.plotInfo.plotTypes[g], q = a = 0;
          q < c.plotUnits.length;
          q++
        )
          (c.plotUnits[q].previousDataSeriesCount = a),
            (a += c.plotUnits[q].dataSeriesIndexes.length);
    };
    m.prototype.assignIdToDataPoints = function () {
      for (var a = 0; a < this.data.length; a++) {
        var g = this.data[a];
        if (g.dataPoints)
          for (var c = g.dataPoints.length, b = 0; b < c; b++)
            g.dataPointIds[b] = ++this._eventManager.lastObjectId;
      }
    };
    m.prototype._processData = function () {
      this.assignIdToDataPoints();
      this.categoriseDataSeries();
      for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
        for (
          var g = this.plotInfo.plotTypes[a], c = 0;
          c < g.plotUnits.length;
          c++
        ) {
          var b = g.plotUnits[c];
          "line" === b.type ||
          "stepLine" === b.type ||
          "spline" === b.type ||
          "column" === b.type ||
          "area" === b.type ||
          "stepArea" === b.type ||
          "splineArea" === b.type ||
          "bar" === b.type ||
          "bubble" === b.type ||
          "scatter" === b.type
            ? this._processMultiseriesPlotUnit(b)
            : "stackedColumn" === b.type ||
              "stackedBar" === b.type ||
              "stackedArea" === b.type
            ? this._processStackedPlotUnit(b)
            : "stackedColumn100" === b.type ||
              "stackedBar100" === b.type ||
              "stackedArea100" === b.type
            ? this._processStacked100PlotUnit(b)
            : "candlestick" === b.type ||
              "ohlc" === b.type ||
              "rangeColumn" === b.type ||
              "rangeBar" === b.type ||
              "rangeArea" === b.type ||
              "rangeSplineArea" === b.type ||
              "error" === b.type ||
              "boxAndWhisker" === b.type
            ? this._processMultiYPlotUnit(b)
            : "waterfall" === b.type && this._processSpecificPlotUnit(b);
        }
      this.calculateAutoBreaks();
    };
    m.prototype._processMultiseriesPlotUnit = function (a) {
      if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
        for (
          var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = !1, q = 0;
          q < a.dataSeriesIndexes.length;
          q++
        ) {
          var y = this.data[a.dataSeriesIndexes[q]],
            I = 0,
            k = !1,
            l = !1,
            p;
          if ("normal" === y.axisPlacement || "xySwapped" === y.axisPlacement)
            var r = a.axisX.sessionVariables.newViewportMinimum
                ? a.axisX.sessionVariables.newViewportMinimum
                : a.axisX.options && a.axisX.options.viewportMinimum
                ? a.axisX.options.viewportMinimum
                : a.axisX.options && a.axisX.options.minimum
                ? a.axisX.options.minimum
                : a.axisX.logarithmic
                ? 0
                : -Infinity,
              f = a.axisX.sessionVariables.newViewportMaximum
                ? a.axisX.sessionVariables.newViewportMaximum
                : a.axisX.options && a.axisX.options.viewportMaximum
                ? a.axisX.options.viewportMaximum
                : a.axisX.options && a.axisX.options.maximum
                ? a.axisX.options.maximum
                : Infinity;
          if (
            (y.dataPoints[I].x && y.dataPoints[I].x.getTime) ||
            "dateTime" === y.xValueType
          )
            h = !0;
          for (I = 0; I < y.dataPoints.length; I++) {
            "undefined" === typeof y.dataPoints[I].x &&
              (y.dataPoints[I].x = I + (a.axisX.logarithmic ? 1 : 0));
            y.dataPoints[I].x.getTime
              ? ((h = !0), (b = y.dataPoints[I].x.getTime()))
              : (b = y.dataPoints[I].x);
            e = y.dataPoints[I].y;
            b < c.min && (c.min = b);
            b > c.max && (c.max = b);
            e < g.min && "number" === typeof e && (g.min = e);
            e > g.max && "number" === typeof e && (g.max = e);
            if (0 < I) {
              if (a.axisX.logarithmic) {
                var d = b / y.dataPoints[I - 1].x;
                1 > d && (d = 1 / d);
                c.minDiff > d && 1 !== d && (c.minDiff = d);
              } else
                (d = b - y.dataPoints[I - 1].x),
                  0 > d && (d *= -1),
                  c.minDiff > d && 0 !== d && (c.minDiff = d);
              null !== e &&
                null !== y.dataPoints[I - 1].y &&
                (a.axisY.logarithmic
                  ? ((d = e / y.dataPoints[I - 1].y),
                    1 > d && (d = 1 / d),
                    g.minDiff > d && 1 !== d && (g.minDiff = d))
                  : ((d = e - y.dataPoints[I - 1].y),
                    0 > d && (d *= -1),
                    g.minDiff > d && 0 !== d && (g.minDiff = d)));
            }
            if (b < r && !k) null !== e && (p = b);
            else {
              if (!k && ((k = !0), 0 < I)) {
                I -= 2;
                continue;
              }
              if (b > f && !l) l = !0;
              else if (b > f && l) continue;
              y.dataPoints[I].label &&
                (a.axisX.labels[b] = y.dataPoints[I].label);
              b < c.viewPortMin && (c.viewPortMin = b);
              b > c.viewPortMax && (c.viewPortMax = b);
              null === e
                ? c.viewPortMin === b && p < b && (c.viewPortMin = p)
                : (e < g.viewPortMin &&
                    "number" === typeof e &&
                    (g.viewPortMin = e),
                  e > g.viewPortMax &&
                    "number" === typeof e &&
                    (g.viewPortMax = e));
            }
          }
          y.axisX.valueType = y.xValueType = h ? "dateTime" : "number";
        }
    };
    m.prototype._processStackedPlotUnit = function (a) {
      if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
        for (
          var g = a.axisY.dataInfo,
            c = a.axisX.dataInfo,
            b,
            e,
            h = !1,
            q = [],
            y = [],
            I = Infinity,
            k = -Infinity,
            l = {},
            p = 0;
          p < a.dataSeriesIndexes.length;
          p++
        ) {
          var r = this.data[a.dataSeriesIndexes[p]],
            f = 0,
            d = !1,
            w = !1,
            x;
          if ("normal" === r.axisPlacement || "xySwapped" === r.axisPlacement)
            var s = a.axisX.sessionVariables.newViewportMinimum
                ? a.axisX.sessionVariables.newViewportMinimum
                : a.axisX.options && a.axisX.options.viewportMinimum
                ? a.axisX.options.viewportMinimum
                : a.axisX.options && a.axisX.options.minimum
                ? a.axisX.options.minimum
                : -Infinity,
              z = a.axisX.sessionVariables.newViewportMaximum
                ? a.axisX.sessionVariables.newViewportMaximum
                : a.axisX.options && a.axisX.options.viewportMaximum
                ? a.axisX.options.viewportMaximum
                : a.axisX.options && a.axisX.options.maximum
                ? a.axisX.options.maximum
                : Infinity;
          if (
            (r.dataPoints[f].x && r.dataPoints[f].x.getTime) ||
            "dateTime" === r.xValueType
          )
            h = !0;
          for (f = 0; f < r.dataPoints.length; f++) {
            "undefined" === typeof r.dataPoints[f].x &&
              (r.dataPoints[f].x = f + (a.axisX.logarithmic ? 1 : 0));
            r.dataPoints[f].x.getTime
              ? ((h = !0), (b = r.dataPoints[f].x.getTime()))
              : (b = r.dataPoints[f].x);
            e = n(r.dataPoints[f].y) ? 0 : r.dataPoints[f].y;
            b < c.min && (c.min = b);
            b > c.max && (c.max = b);
            if (0 < f) {
              if (a.axisX.logarithmic) {
                var u = b / r.dataPoints[f - 1].x;
                1 > u && (u = 1 / u);
                c.minDiff > u && 1 !== u && (c.minDiff = u);
              } else
                (u = b - r.dataPoints[f - 1].x),
                  0 > u && (u *= -1),
                  c.minDiff > u && 0 !== u && (c.minDiff = u);
              null !== e &&
                null !== r.dataPoints[f - 1].y &&
                (a.axisY.logarithmic
                  ? 0 < e &&
                    ((u = e / r.dataPoints[f - 1].y),
                    1 > u && (u = 1 / u),
                    g.minDiff > u && 1 !== u && (g.minDiff = u))
                  : ((u = e - r.dataPoints[f - 1].y),
                    0 > u && (u *= -1),
                    g.minDiff > u && 0 !== u && (g.minDiff = u)));
            }
            if (b < s && !d) null !== r.dataPoints[f].y && (x = b);
            else {
              if (!d && ((d = !0), 0 < f)) {
                f -= 2;
                continue;
              }
              if (b > z && !w) w = !0;
              else if (b > z && w) continue;
              r.dataPoints[f].label &&
                (a.axisX.labels[b] = r.dataPoints[f].label);
              b < c.viewPortMin && (c.viewPortMin = b);
              b > c.viewPortMax && (c.viewPortMax = b);
              null === r.dataPoints[f].y
                ? c.viewPortMin === b && x < b && (c.viewPortMin = x)
                : ((l[b] = (l[b] || 0) + r.dataPoints[f].y),
                  (r.dataPointEOs[f].cumulativeY = l[b]),
                  (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e),
                  (a.yAbsTotals[b] =
                    (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e)),
                  0 <= e
                    ? q[b]
                      ? (q[b] += e)
                      : ((q[b] = e), (I = Math.min(e, I)))
                    : y[b]
                    ? (y[b] += e)
                    : ((y[b] = e), (k = Math.max(e, k))));
            }
          }
          a.axisY.scaleBreaks &&
            a.axisY.scaleBreaks.autoCalculate &&
            1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks &&
            (g.dataPointYPositiveSums
              ? (g.dataPointYPositiveSums.push.apply(
                  g.dataPointYPositiveSums,
                  q
                ),
                g.dataPointYNegativeSums.push.apply(
                  g.dataPointYPositiveSums,
                  y
                ))
              : ((g.dataPointYPositiveSums = q),
                (g.dataPointYNegativeSums = y)));
          r.axisX.valueType = r.xValueType = h ? "dateTime" : "number";
        }
        for (f in q)
          q.hasOwnProperty(f) &&
            !isNaN(f) &&
            ((a = q[f]),
            a < g.min && (g.min = Math.min(a, I)),
            a > g.max && (g.max = a),
            f < c.viewPortMin ||
              f > c.viewPortMax ||
              (a < g.viewPortMin && (g.viewPortMin = Math.min(a, I)),
              a > g.viewPortMax && (g.viewPortMax = a)));
        for (f in y)
          y.hasOwnProperty(f) &&
            !isNaN(f) &&
            ((a = y[f]),
            a < g.min && (g.min = a),
            a > g.max && (g.max = Math.max(a, k)),
            f < c.viewPortMin ||
              f > c.viewPortMax ||
              (a < g.viewPortMin && (g.viewPortMin = a),
              a > g.viewPortMax && (g.viewPortMax = Math.max(a, k))));
      }
    };
    m.prototype._processStacked100PlotUnit = function (a) {
      if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
        for (
          var g = a.axisY.dataInfo,
            c = a.axisX.dataInfo,
            b,
            e,
            h = !1,
            q = !1,
            y = !1,
            I = {},
            k = [],
            l = 0;
          l < a.dataSeriesIndexes.length;
          l++
        ) {
          var p = this.data[a.dataSeriesIndexes[l]],
            r = 0,
            f = !1,
            d = !1,
            w;
          if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement)
            var x = a.axisX.sessionVariables.newViewportMinimum
                ? a.axisX.sessionVariables.newViewportMinimum
                : a.axisX.options && a.axisX.options.viewportMinimum
                ? a.axisX.options.viewportMinimum
                : a.axisX.options && a.axisX.options.minimum
                ? a.axisX.options.minimum
                : -Infinity,
              s = a.axisX.sessionVariables.newViewportMaximum
                ? a.axisX.sessionVariables.newViewportMaximum
                : a.axisX.options && a.axisX.options.viewportMaximum
                ? a.axisX.options.viewportMaximum
                : a.axisX.options && a.axisX.options.maximum
                ? a.axisX.options.maximum
                : Infinity;
          if (
            (p.dataPoints[r].x && p.dataPoints[r].x.getTime) ||
            "dateTime" === p.xValueType
          )
            h = !0;
          for (r = 0; r < p.dataPoints.length; r++) {
            "undefined" === typeof p.dataPoints[r].x &&
              (p.dataPoints[r].x = r + (a.axisX.logarithmic ? 1 : 0));
            p.dataPoints[r].x.getTime
              ? ((h = !0), (b = p.dataPoints[r].x.getTime()))
              : (b = p.dataPoints[r].x);
            e = n(p.dataPoints[r].y) ? null : p.dataPoints[r].y;
            b < c.min && (c.min = b);
            b > c.max && (c.max = b);
            if (0 < r) {
              if (a.axisX.logarithmic) {
                var z = b / p.dataPoints[r - 1].x;
                1 > z && (z = 1 / z);
                c.minDiff > z && 1 !== z && (c.minDiff = z);
              } else
                (z = b - p.dataPoints[r - 1].x),
                  0 > z && (z *= -1),
                  c.minDiff > z && 0 !== z && (c.minDiff = z);
              n(e) ||
                null === p.dataPoints[r - 1].y ||
                (a.axisY.logarithmic
                  ? 0 < e &&
                    ((z = e / p.dataPoints[r - 1].y),
                    1 > z && (z = 1 / z),
                    g.minDiff > z && 1 !== z && (g.minDiff = z))
                  : ((z = e - p.dataPoints[r - 1].y),
                    0 > z && (z *= -1),
                    g.minDiff > z && 0 !== z && (g.minDiff = z)));
            }
            if (b < x && !f) null !== e && (w = b);
            else {
              if (!f && ((f = !0), 0 < r)) {
                r -= 2;
                continue;
              }
              if (b > s && !d) d = !0;
              else if (b > s && d) continue;
              p.dataPoints[r].label &&
                (a.axisX.labels[b] = p.dataPoints[r].label);
              b < c.viewPortMin && (c.viewPortMin = b);
              b > c.viewPortMax && (c.viewPortMax = b);
              null === e
                ? c.viewPortMin === b && w < b && (c.viewPortMin = w)
                : ((I[b] = (I[b] || 0) + p.dataPoints[r].y),
                  (p.dataPointEOs[r].cumulativeY = I[b]),
                  (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e),
                  (a.yAbsTotals[b] =
                    (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e)),
                  0 <= e ? (q = !0) : 0 > e && (y = !0),
                  (k[b] = k[b] ? k[b] + Math.abs(e) : Math.abs(e)));
            }
          }
          p.axisX.valueType = p.xValueType = h ? "dateTime" : "number";
        }
        a.axisY.logarithmic
          ? ((g.max = n(g.viewPortMax)
              ? 99 * Math.pow(a.axisY.logarithmBase, -0.05)
              : Math.max(
                  g.viewPortMax,
                  99 * Math.pow(a.axisY.logarithmBase, -0.05)
                )),
            (g.min = n(g.viewPortMin) ? 1 : Math.min(g.viewPortMin, 1)))
          : q && !y
          ? ((g.max = n(g.viewPortMax) ? 99 : Math.max(g.viewPortMax, 99)),
            (g.min = n(g.viewPortMin) ? 1 : Math.min(g.viewPortMin, 1)))
          : q && y
          ? ((g.max = n(g.viewPortMax) ? 99 : Math.max(g.viewPortMax, 99)),
            (g.min = n(g.viewPortMin) ? -99 : Math.min(g.viewPortMin, -99)))
          : !q &&
            y &&
            ((g.max = n(g.viewPortMax) ? -1 : Math.max(g.viewPortMax, -1)),
            (g.min = n(g.viewPortMin) ? -99 : Math.min(g.viewPortMin, -99)));
        g.viewPortMin = g.min;
        g.viewPortMax = g.max;
        a.dataPointYSums = k;
      }
    };
    m.prototype._processMultiYPlotUnit = function (a) {
      if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
        for (
          var g = a.axisY.dataInfo,
            c = a.axisX.dataInfo,
            b,
            e,
            h,
            q,
            y = !1,
            I = 0;
          I < a.dataSeriesIndexes.length;
          I++
        ) {
          var k = this.data[a.dataSeriesIndexes[I]],
            l = 0,
            p = !1,
            r = !1,
            f,
            d,
            n;
          if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement)
            var x = a.axisX.sessionVariables.newViewportMinimum
                ? a.axisX.sessionVariables.newViewportMinimum
                : a.axisX.options && a.axisX.options.viewportMinimum
                ? a.axisX.options.viewportMinimum
                : a.axisX.options && a.axisX.options.minimum
                ? a.axisX.options.minimum
                : a.axisX.logarithmic
                ? 0
                : -Infinity,
              s = a.axisX.sessionVariables.newViewportMaximum
                ? a.axisX.sessionVariables.newViewportMaximum
                : a.axisX.options && a.axisX.options.viewportMaximum
                ? a.axisX.options.viewportMaximum
                : a.axisX.options && a.axisX.options.maximum
                ? a.axisX.options.maximum
                : Infinity;
          if (
            (k.dataPoints[l].x && k.dataPoints[l].x.getTime) ||
            "dateTime" === k.xValueType
          )
            y = !0;
          for (l = 0; l < k.dataPoints.length; l++) {
            "undefined" === typeof k.dataPoints[l].x &&
              (k.dataPoints[l].x = l + (a.axisX.logarithmic ? 1 : 0));
            k.dataPoints[l].x.getTime
              ? ((y = !0), (b = k.dataPoints[l].x.getTime()))
              : (b = k.dataPoints[l].x);
            if ((e = k.dataPoints[l].y) && e.length) {
              h = Math.min.apply(null, e);
              q = Math.max.apply(null, e);
              d = !0;
              for (var z = 0; z < e.length; z++) null === e.k && (d = !1);
              d && (p || (n = f), (f = b));
            }
            b < c.min && (c.min = b);
            b > c.max && (c.max = b);
            h < g.min && (g.min = h);
            q > g.max && (g.max = q);
            0 < l &&
              (a.axisX.logarithmic
                ? ((d = b / k.dataPoints[l - 1].x),
                  1 > d && (d = 1 / d),
                  c.minDiff > d && 1 !== d && (c.minDiff = d))
                : ((d = b - k.dataPoints[l - 1].x),
                  0 > d && (d *= -1),
                  c.minDiff > d && 0 !== d && (c.minDiff = d)),
              e &&
                null !== e[0] &&
                k.dataPoints[l - 1].y &&
                null !== k.dataPoints[l - 1].y[0] &&
                (a.axisY.logarithmic
                  ? ((d = e[0] / k.dataPoints[l - 1].y[0]),
                    1 > d && (d = 1 / d),
                    g.minDiff > d && 1 !== d && (g.minDiff = d))
                  : ((d = e[0] - k.dataPoints[l - 1].y[0]),
                    0 > d && (d *= -1),
                    g.minDiff > d && 0 !== d && (g.minDiff = d))));
            if (!(b < x) || p) {
              if (!p && ((p = !0), 0 < l)) {
                l -= 2;
                f = n;
                continue;
              }
              if (b > s && !r) r = !0;
              else if (b > s && r) continue;
              k.dataPoints[l].label &&
                (a.axisX.labels[b] = k.dataPoints[l].label);
              b < c.viewPortMin && (c.viewPortMin = b);
              b > c.viewPortMax && (c.viewPortMax = b);
              if (c.viewPortMin === b && e)
                for (z = 0; z < e.length; z++)
                  if (null === e[z] && f < b) {
                    c.viewPortMin = f;
                    break;
                  }
              null === e
                ? c.viewPortMin === b && f < b && (c.viewPortMin = f)
                : (h < g.viewPortMin && (g.viewPortMin = h),
                  q > g.viewPortMax && (g.viewPortMax = q));
            }
          }
          k.axisX.valueType = k.xValueType = y ? "dateTime" : "number";
        }
    };
    m.prototype._processSpecificPlotUnit = function (a) {
      if (
        "waterfall" === a.type &&
        a.dataSeriesIndexes &&
        !(1 > a.dataSeriesIndexes.length)
      )
        for (
          var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = !1, q = 0;
          q < a.dataSeriesIndexes.length;
          q++
        ) {
          var y = this.data[a.dataSeriesIndexes[q]],
            d = 0,
            k = !1,
            l = !1,
            p = (b = 0);
          if ("normal" === y.axisPlacement || "xySwapped" === y.axisPlacement)
            var r = a.axisX.sessionVariables.newViewportMinimum
                ? a.axisX.sessionVariables.newViewportMinimum
                : a.axisX.options && a.axisX.options.viewportMinimum
                ? a.axisX.options.viewportMinimum
                : a.axisX.options && a.axisX.options.minimum
                ? a.axisX.options.minimum
                : a.axisX.logarithmic
                ? 0
                : -Infinity,
              f = a.axisX.sessionVariables.newViewportMaximum
                ? a.axisX.sessionVariables.newViewportMaximum
                : a.axisX.options && a.axisX.options.viewportMaximum
                ? a.axisX.options.viewportMaximum
                : a.axisX.options && a.axisX.options.maximum
                ? a.axisX.options.maximum
                : Infinity;
          if (
            (y.dataPoints[d].x && y.dataPoints[d].x.getTime) ||
            "dateTime" === y.xValueType
          )
            h = !0;
          for (d = 0; d < y.dataPoints.length; d++)
            "undefined" !== typeof y.dataPoints[d].isCumulativeSum &&
            !0 === y.dataPoints[d].isCumulativeSum
              ? ((y.dataPointEOs[d].cumulativeSumYStartValue = 0),
                (y.dataPointEOs[d].cumulativeSum =
                  0 === d ? 0 : y.dataPointEOs[d - 1].cumulativeSum),
                (y.dataPoints[d].y =
                  0 === d ? 0 : y.dataPointEOs[d - 1].cumulativeSum))
              : "undefined" !== typeof y.dataPoints[d].isIntermediateSum &&
                !0 === y.dataPoints[d].isIntermediateSum
              ? ((y.dataPointEOs[d].cumulativeSumYStartValue = p),
                (y.dataPointEOs[d].cumulativeSum =
                  0 === d ? 0 : y.dataPointEOs[d - 1].cumulativeSum),
                (y.dataPoints[d].y = 0 === d ? 0 : b),
                (p = 0 === d ? 0 : y.dataPointEOs[d - 1].cumulativeSum),
                (b = 0))
              : ((e =
                  "number" !== typeof y.dataPoints[d].y
                    ? 0
                    : y.dataPoints[d].y),
                (y.dataPointEOs[d].cumulativeSumYStartValue =
                  0 === d ? 0 : y.dataPointEOs[d - 1].cumulativeSum),
                (y.dataPointEOs[d].cumulativeSum =
                  0 === d ? e : y.dataPointEOs[d - 1].cumulativeSum + e),
                (b += e));
          for (d = 0; d < y.dataPoints.length; d++)
            if (
              ("undefined" === typeof y.dataPoints[d].x &&
                (y.dataPoints[d].x = d + (a.axisX.logarithmic ? 1 : 0)),
              y.dataPoints[d].x.getTime
                ? ((h = !0), (b = y.dataPoints[d].x.getTime()))
                : (b = y.dataPoints[d].x),
              (e = y.dataPoints[d].y),
              b < c.min && (c.min = b),
              b > c.max && (c.max = b),
              y.dataPointEOs[d].cumulativeSum < g.min &&
                (g.min = y.dataPointEOs[d].cumulativeSum),
              y.dataPointEOs[d].cumulativeSum > g.max &&
                (g.max = y.dataPointEOs[d].cumulativeSum),
              0 < d &&
                (a.axisX.logarithmic
                  ? ((p = b / y.dataPoints[d - 1].x),
                    1 > p && (p = 1 / p),
                    c.minDiff > p && 1 !== p && (c.minDiff = p))
                  : ((p = b - y.dataPoints[d - 1].x),
                    0 > p && (p *= -1),
                    c.minDiff > p && 0 !== p && (c.minDiff = p)),
                null !== e &&
                  null !== y.dataPoints[d - 1].y &&
                  (a.axisY.logarithmic
                    ? ((e =
                        y.dataPointEOs[d].cumulativeSum /
                        y.dataPointEOs[d - 1].cumulativeSum),
                      1 > e && (e = 1 / e),
                      g.minDiff > e && 1 !== e && (g.minDiff = e))
                    : ((e =
                        y.dataPointEOs[d].cumulativeSum -
                        y.dataPointEOs[d - 1].cumulativeSum),
                      0 > e && (e *= -1),
                      g.minDiff > e && 0 !== e && (g.minDiff = e)))),
              !(b < r) || k)
            ) {
              if (!k && ((k = !0), 0 < d)) {
                d -= 2;
                continue;
              }
              if (b > f && !l) l = !0;
              else if (b > f && l) continue;
              y.dataPoints[d].label &&
                (a.axisX.labels[b] = y.dataPoints[d].label);
              b < c.viewPortMin && (c.viewPortMin = b);
              b > c.viewPortMax && (c.viewPortMax = b);
              0 < d &&
                (y.dataPointEOs[d - 1].cumulativeSum < g.viewPortMin &&
                  (g.viewPortMin = y.dataPointEOs[d - 1].cumulativeSum),
                y.dataPointEOs[d - 1].cumulativeSum > g.viewPortMax &&
                  (g.viewPortMax = y.dataPointEOs[d - 1].cumulativeSum));
              y.dataPointEOs[d].cumulativeSum < g.viewPortMin &&
                (g.viewPortMin = y.dataPointEOs[d].cumulativeSum);
              y.dataPointEOs[d].cumulativeSum > g.viewPortMax &&
                (g.viewPortMax = y.dataPointEOs[d].cumulativeSum);
            }
          y.axisX.valueType = y.xValueType = h ? "dateTime" : "number";
        }
    };
    m.prototype.calculateAutoBreaks = function () {
      function a(a, b, c, e) {
        if (e)
          return (
            (c = Math.pow(Math.min((c * a) / b, b / a), 0.2)),
            1 >= c && (c = Math.pow(1 > a ? 1 / a : Math.min(b / a, a), 0.25)),
            { startValue: a * c, endValue: b / c }
          );
        c = 0.2 * Math.min(c - b + a, b - a);
        0 >= c && (c = 0.25 * Math.min(b - a, Math.abs(a)));
        return { startValue: a + c, endValue: b - c };
      }
      function g(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
          var b =
              a.axisX.scaleBreaks &&
              a.axisX.scaleBreaks.autoCalculate &&
              1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks,
            c =
              a.axisY.scaleBreaks &&
              a.axisY.scaleBreaks.autoCalculate &&
              1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks;
          if (b || c)
            for (
              var f = a.axisY.dataInfo,
                g = a.axisX.dataInfo,
                h,
                q = g.min,
                k = g.max,
                l = f.min,
                p = f.max,
                g = g._dataRanges,
                f = f._dataRanges,
                r,
                y = 0,
                d = 0;
              d < a.dataSeriesIndexes.length;
              d++
            ) {
              var I = e.data[a.dataSeriesIndexes[d]];
              if (!(4 > I.dataPoints.length))
                for (y = 0; y < I.dataPoints.length; y++)
                  if (
                    (b &&
                      ((r =
                        ((k + 1 - q) *
                          Math.max(
                            parseFloat(
                              a.axisX.scaleBreaks.collapsibleThreshold
                            ) || 10,
                            10
                          )) /
                        100),
                      (h = I.dataPoints[y].x.getTime
                        ? I.dataPoints[y].x.getTime()
                        : I.dataPoints[y].x),
                      (r = Math.floor((h - q) / r)),
                      h < g[r].min && (g[r].min = h),
                      h > g[r].max && (g[r].max = h)),
                    c)
                  ) {
                    var v =
                      ((p + 1 - l) *
                        Math.max(
                          parseFloat(
                            a.axisY.scaleBreaks.collapsibleThreshold
                          ) || 10,
                          10
                        )) /
                      100;
                    if (
                      (h =
                        "waterfall" === a.type
                          ? I.dataPointEOs[y].cumulativeSum
                          : I.dataPoints[y].y) &&
                      h.length
                    )
                      for (var m = 0; m < h.length; m++)
                        (r = Math.floor((h[m] - l) / v)),
                          h[m] < f[r].min && (f[r].min = h[m]),
                          h[m] > f[r].max && (f[r].max = h[m]);
                    else
                      n(h) ||
                        ((r = Math.floor((h - l) / v)),
                        h < f[r].min && (f[r].min = h),
                        h > f[r].max && (f[r].max = h));
                  }
            }
        }
      }
      function c(a) {
        if (
          a.dataSeriesIndexes &&
          !(1 > a.dataSeriesIndexes.length) &&
          a.axisX.scaleBreaks &&
          a.axisX.scaleBreaks.autoCalculate &&
          1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks
        )
          for (
            var b = a.axisX.dataInfo,
              c = b.min,
              f = b.max,
              g = b._dataRanges,
              h,
              q = 0,
              k = 0;
            k < a.dataSeriesIndexes.length;
            k++
          ) {
            var l = e.data[a.dataSeriesIndexes[k]];
            if (!(4 > l.dataPoints.length))
              for (q = 0; q < l.dataPoints.length; q++)
                (h =
                  ((f + 1 - c) *
                    Math.max(
                      parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) ||
                        10,
                      10
                    )) /
                  100),
                  (b = l.dataPoints[q].x.getTime
                    ? l.dataPoints[q].x.getTime()
                    : l.dataPoints[q].x),
                  (h = Math.floor((b - c) / h)),
                  b < g[h].min && (g[h].min = b),
                  b > g[h].max && (g[h].max = b);
          }
      }
      for (var b, e = this, h = !1, q = 0; q < this._axes.length; q++)
        if (
          this._axes[q].scaleBreaks &&
          this._axes[q].scaleBreaks.autoCalculate &&
          1 <= this._axes[q].scaleBreaks.maxNumberOfAutoBreaks
        ) {
          h = !0;
          this._axes[q].dataInfo._dataRanges = [];
          for (
            var y = 0;
            y <
            100 /
              Math.max(
                parseFloat(this._axes[q].scaleBreaks.collapsibleThreshold) ||
                  10,
                10
              );
            y++
          )
            this._axes[q].dataInfo._dataRanges.push({
              min: Infinity,
              max: -Infinity,
            });
        }
      if (h) {
        for (q = 0; q < this.plotInfo.plotTypes.length; q++)
          for (
            h = this.plotInfo.plotTypes[q], y = 0;
            y < h.plotUnits.length;
            y++
          )
            (b = h.plotUnits[y]),
              "line" === b.type ||
              "stepLine" === b.type ||
              "spline" === b.type ||
              "column" === b.type ||
              "area" === b.type ||
              "stepArea" === b.type ||
              "splineArea" === b.type ||
              "bar" === b.type ||
              "bubble" === b.type ||
              "scatter" === b.type ||
              "candlestick" === b.type ||
              "ohlc" === b.type ||
              "rangeColumn" === b.type ||
              "rangeBar" === b.type ||
              "rangeArea" === b.type ||
              "rangeSplineArea" === b.type ||
              "waterfall" === b.type ||
              "error" === b.type ||
              "boxAndWhisker" === b.type
                ? g(b)
                : 0 <= b.type.indexOf("stacked") && c(b);
        for (q = 0; q < this._axes.length; q++)
          if (this._axes[q].dataInfo._dataRanges) {
            var d = this._axes[q].dataInfo.min;
            b =
              ((this._axes[q].dataInfo.max + 1 - d) *
                Math.max(
                  parseFloat(this._axes[q].scaleBreaks.collapsibleThreshold) ||
                    10,
                  10
                )) /
              100;
            var k = this._axes[q].dataInfo._dataRanges,
              l,
              p,
              h = [];
            if (this._axes[q].dataInfo.dataPointYPositiveSums) {
              var r = this._axes[q].dataInfo.dataPointYPositiveSums;
              l = k;
              for (y in r)
                if (r.hasOwnProperty(y) && !isNaN(y) && ((p = r[y]), !n(p))) {
                  var f = Math.floor((p - d) / b);
                  p < l[f].min && (l[f].min = p);
                  p > l[f].max && (l[f].max = p);
                }
              delete this._axes[q].dataInfo.dataPointYPositiveSums;
            }
            if (this._axes[q].dataInfo.dataPointYNegativeSums) {
              r = this._axes[q].dataInfo.dataPointYNegativeSums;
              l = k;
              for (y in r)
                r.hasOwnProperty(y) &&
                  !isNaN(y) &&
                  ((p = -1 * r[y]),
                  n(p) ||
                    ((f = Math.floor((p - d) / b)),
                    p < l[f].min && (l[f].min = p),
                    p > l[f].max && (l[f].max = p)));
              delete this._axes[q].dataInfo.dataPointYNegativeSums;
            }
            for (y = 0; y < k.length - 1; y++)
              if (((l = k[y].max), isFinite(l)))
                for (; y < k.length - 1; )
                  if (((d = k[y + 1].min), isFinite(d))) {
                    p = d - l;
                    p > b && h.push({ diff: p, start: l, end: d });
                    break;
                  } else y++;
            if (this._axes[q].scaleBreaks.customBreaks)
              for (
                y = 0;
                y < this._axes[q].scaleBreaks.customBreaks.length;
                y++
              )
                for (b = 0; b < h.length; b++)
                  if (
                    (this._axes[q].scaleBreaks.customBreaks[y].startValue <=
                      h[b].start &&
                      h[b].start <=
                        this._axes[q].scaleBreaks.customBreaks[y].endValue) ||
                    (this._axes[q].scaleBreaks.customBreaks[y].startValue <=
                      h[b].start &&
                      h[b].start <=
                        this._axes[q].scaleBreaks.customBreaks[y].endValue) ||
                    (h[b].start <=
                      this._axes[q].scaleBreaks.customBreaks[y].startValue &&
                      this._axes[q].scaleBreaks.customBreaks[y].startValue <=
                        h[b].end) ||
                    (h[b].start <=
                      this._axes[q].scaleBreaks.customBreaks[y].endValue &&
                      this._axes[q].scaleBreaks.customBreaks[y].endValue <=
                        h[b].end)
                  )
                    h.splice(b, 1), b--;
            h.sort(function (a, b) {
              return b.diff - a.diff;
            });
            for (
              y = 0;
              y <
              Math.min(
                h.length,
                this._axes[q].scaleBreaks.maxNumberOfAutoBreaks
              );
              y++
            )
              (b = a(
                h[y].start,
                h[y].end,
                this._axes[q].logarithmic
                  ? this._axes[q].dataInfo.max / this._axes[q].dataInfo.min
                  : this._axes[q].dataInfo.max - this._axes[q].dataInfo.min,
                this._axes[q].logarithmic
              )),
                this._axes[q].scaleBreaks.autoBreaks.push(
                  new ca(
                    this,
                    "autoBreaks",
                    b,
                    y,
                    ++this._eventManager.lastObjectId,
                    this._axes[q].scaleBreaks
                  )
                ),
                this._axes[q].scaleBreaks._appliedBreaks.push(
                  this._axes[q].scaleBreaks.autoBreaks[
                    this._axes[q].scaleBreaks.autoBreaks.length - 1
                  ]
                );
            this._axes[q].scaleBreaks._appliedBreaks.sort(function (a, b) {
              return a.startValue - b.startValue;
            });
          }
      }
    };
    m.prototype.renderCrosshairs = function (a) {
      for (var g = 0; g < this.axisX.length; g++)
        this.axisX[g] != a &&
          this.axisX[g].crosshair &&
          this.axisX[g].crosshair.enabled &&
          !this.axisX[g].crosshair._hidden &&
          this.axisX[g].showCrosshair(this.axisX[g].crosshair._updatedValue);
      for (g = 0; g < this.axisX2.length; g++)
        this.axisX2[g] != a &&
          this.axisX2[g].crosshair &&
          this.axisX2[g].crosshair.enabled &&
          !this.axisX2[g].crosshair._hidden &&
          this.axisX2[g].showCrosshair(this.axisX2[g].crosshair._updatedValue);
      for (g = 0; g < this.axisY.length; g++)
        this.axisY[g] != a &&
          this.axisY[g].crosshair &&
          this.axisY[g].crosshair.enabled &&
          !this.axisY[g].crosshair._hidden &&
          this.axisY[g].showCrosshair(this.axisY[g].crosshair._updatedValue);
      for (g = 0; g < this.axisY2.length; g++)
        this.axisY2[g] != a &&
          this.axisY2[g].crosshair &&
          this.axisY2[g].crosshair.enabled &&
          !this.axisY2[g].crosshair._hidden &&
          this.axisY2[g].showCrosshair(this.axisY2[g].crosshair._updatedValue);
    };
    m.prototype.getDataPointAtXY = function (a, g, c) {
      c = c || !1;
      for (var b = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
        var h = null;
        (h = this._dataInRenderedOrder[e].getDataPointAtXY(a, g, c)) &&
          b.push(h);
      }
      a = null;
      g = !1;
      for (c = 0; c < b.length; c++)
        if (
          "line" === b[c].dataSeries.type ||
          "stepLine" === b[c].dataSeries.type ||
          "area" === b[c].dataSeries.type ||
          "stepArea" === b[c].dataSeries.type
        )
          if (
            ((e = ma("markerSize", b[c].dataPoint, b[c].dataSeries) || 8),
            b[c].distance <= e / 2)
          ) {
            g = !0;
            break;
          }
      for (c = 0; c < b.length; c++)
        (g &&
          "line" !== b[c].dataSeries.type &&
          "stepLine" !== b[c].dataSeries.type &&
          "area" !== b[c].dataSeries.type &&
          "stepArea" !== b[c].dataSeries.type) ||
          (a ? b[c].distance <= a.distance && (a = b[c]) : (a = b[c]));
      return a;
    };
    m.prototype.getObjectAtXY = function (a, g, c) {
      var b = null;
      if ((c = this.getDataPointAtXY(a, g, c || !1)))
        b = c.dataSeries.dataPointIds[c.dataPointIndex];
      else if (v) b = ab(a, g, this._eventManager.ghostCtx);
      else
        for (c = 0; c < this.legend.items.length; c++) {
          var e = this.legend.items[c];
          a >= e.x1 && a <= e.x2 && g >= e.y1 && g <= e.y2 && (b = e.id);
        }
      return b;
    };
    m.prototype.getAutoFontSize = nb;
    m.prototype.resetOverlayedCanvas = function () {
      this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
    };
    m.prototype.clearCanvas = mb;
    m.prototype.attachEvent = function (a) {
      this._events.push(a);
    };
    m.prototype._touchEventHandler = function (a) {
      if (a.changedTouches && this.interactivityEnabled) {
        var g = [],
          c = a.changedTouches,
          b = c ? c[0] : a,
          e = null;
        switch (a.type) {
          case "touchstart":
          case "MSPointerDown":
            g = ["mousemove", "mousedown"];
            this._lastTouchData = Pa(b);
            this._lastTouchData.time = new Date();
            break;
          case "touchmove":
          case "MSPointerMove":
            g = ["mousemove"];
            break;
          case "touchend":
          case "MSPointerUp":
            var h =
                this._lastTouchData && this._lastTouchData.time
                  ? new Date() - this._lastTouchData.time
                  : 0,
              g =
                "touchstart" === this._lastTouchEventType ||
                "MSPointerDown" === this._lastTouchEventType ||
                300 > h
                  ? ["mouseup", "click"]
                  : ["mouseup"];
            break;
          default:
            return;
        }
        if (!(c && 1 < c.length)) {
          e = Pa(b);
          e.time = new Date();
          try {
            var q = e.y - this._lastTouchData.y,
              h = e.time - this._lastTouchData.time;
            if (
              (1 < Math.abs(q) && this._lastTouchData.scroll) ||
              (5 < Math.abs(q) && 250 > h)
            )
              this._lastTouchData.scroll = !0;
          } catch (y) {}
          this._lastTouchEventType = a.type;
          if (this._lastTouchData.scroll && this.zoomEnabled)
            this.isDrag && this.resetOverlayedCanvas(), (this.isDrag = !1);
          else
            for (c = 0; c < g.length; c++)
              if (
                ((e = g[c]),
                (q = document.createEvent("MouseEvent")),
                q.initMouseEvent(
                  e,
                  !0,
                  !0,
                  window,
                  1,
                  b.screenX,
                  b.screenY,
                  b.clientX,
                  b.clientY,
                  !1,
                  !1,
                  !1,
                  !1,
                  0,
                  null
                ),
                b.target.dispatchEvent(q),
                (!n(this._lastTouchData.scroll) &&
                  !this._lastTouchData.scroll) ||
                  (!this._lastTouchData.scroll && 250 < h) ||
                  "click" === e)
              )
                a.preventManipulation && a.preventManipulation(),
                  a.preventDefault && a.cancelable && a.preventDefault();
        }
      }
    };
    m.prototype._dispatchRangeEvent = function (a, g) {
      var c = { chart: this };
      c.type = a;
      c.trigger = g;
      var b = [];
      this.axisX && 0 < this.axisX.length && b.push("axisX");
      this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
      this.axisY && 0 < this.axisY.length && b.push("axisY");
      this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
      for (var e = 0; e < b.length; e++)
        if ((n(c[b[e]]) && (c[b[e]] = []), "axisY" === b[e]))
          for (var h = 0; h < this.axisY.length; h++)
            c[b[e]].push({
              viewportMinimum:
                this[b[e]][h].sessionVariables.newViewportMinimum,
              viewportMaximum:
                this[b[e]][h].sessionVariables.newViewportMaximum,
            });
        else if ("axisY2" === b[e])
          for (h = 0; h < this.axisY2.length; h++)
            c[b[e]].push({
              viewportMinimum:
                this[b[e]][h].sessionVariables.newViewportMinimum,
              viewportMaximum:
                this[b[e]][h].sessionVariables.newViewportMaximum,
            });
        else if ("axisX" === b[e])
          for (h = 0; h < this.axisX.length; h++)
            c[b[e]].push({
              viewportMinimum:
                this[b[e]][h].sessionVariables.newViewportMinimum,
              viewportMaximum:
                this[b[e]][h].sessionVariables.newViewportMaximum,
            });
        else if ("axisX2" === b[e])
          for (h = 0; h < this.axisX2.length; h++)
            c[b[e]].push({
              viewportMinimum:
                this[b[e]][h].sessionVariables.newViewportMinimum,
              viewportMaximum:
                this[b[e]][h].sessionVariables.newViewportMaximum,
            });
      this.dispatchEvent(a, c, this);
    };
    m.prototype._mouseEventHandler = function (a) {
      function g() {
        m.capturedEventParam &&
          ((e = m.capturedEventParam),
          (q = e.bounds),
          "mouseup" === b &&
            ((m.capturedEventParam = null),
            e.chart.overlaidCanvas.releaseCapture
              ? e.chart.overlaidCanvas.releaseCapture()
              : document.documentElement.removeEventListener(
                  "mouseup",
                  e.chart._mouseEventHandler,
                  !1
                )),
          e.hasOwnProperty(b) &&
            ("mouseup" !== b || e.chart.overlaidCanvas.releaseCapture
              ? (a.target !== e.chart.overlaidCanvas && v) ||
                e[b].call(e.context, c.x, c.y)
              : a.target !== e.chart.overlaidCanvas && (e.chart.isDrag = !1)));
      }
      "undefined" === typeof a.target &&
        a.srcElement &&
        (a.target = a.srcElement);
      var c = Pa(a),
        b = a.type,
        e,
        h;
      a.which ? (h = 3 == a.which) : a.button && (h = 2 == a.button);
      if (this._ignoreNextEvent) g(), (this._ignoreNextEvent = !1);
      else if ((g(), this.interactivityEnabled)) {
        a.preventManipulation && a.preventManipulation();
        a.preventDefault && a.preventDefault();
        var q;
        Ha &&
          window.console &&
          (window.console.log(b + " --\x3e x: " + c.x + "; y:" + c.y),
          h && window.console.log(a.which),
          "mouseup" === b && window.console.log("mouseup"));
        if (!h) {
          if (!m.capturedEventParam && this._events) {
            for (h = 0; h < this._events.length; h++)
              if (this._events[h].hasOwnProperty(b))
                if (
                  ((e = this._events[h]),
                  (q = e.bounds),
                  c.x >= q.x1 && c.x <= q.x2 && c.y >= q.y1 && c.y <= q.y2)
                ) {
                  e[b].call(e.context, c.x, c.y);
                  "mousedown" === b && !0 === e.capture
                    ? ((m.capturedEventParam = e),
                      this.overlaidCanvas.setCapture
                        ? this.overlaidCanvas.setCapture()
                        : document.documentElement.addEventListener(
                            "mouseup",
                            this._mouseEventHandler,
                            !1
                          ))
                    : "mouseup" === b &&
                      (e.chart.overlaidCanvas.releaseCapture
                        ? e.chart.overlaidCanvas.releaseCapture()
                        : document.documentElement.removeEventListener(
                            "mouseup",
                            this._mouseEventHandler,
                            !1
                          ));
                  break;
                } else e = null;
            a.target.style.cursor =
              e && e.cursor ? e.cursor : this._defaultCursor;
          }
          h = this.plotArea;
          if (c.x < h.x1 || c.x > h.x2 || c.y < h.y1 || c.y > h.y2) {
            this.toolTip && this.toolTip.enabled
              ? (this.toolTip.hide(),
                this.toolTip.dispatchEvent(
                  "hidden",
                  { chart: this, toolTip: this.toolTip },
                  this.toolTip
                ))
              : this.resetOverlayedCanvas();
            for (h = 0; h < this.axisX.length; h++)
              this.axisX[h].crosshair &&
                this.axisX[h].crosshair.enabled &&
                (this.axisX[h].crosshair.hide(),
                this.axisX[h].crosshair.dispatchEvent(
                  "hidden",
                  { chart: this, axis: this.axisX[h].options },
                  this.axisX[h].crosshair
                ));
            for (h = 0; h < this.axisX2.length; h++)
              this.axisX2[h].crosshair &&
                this.axisX2[h].crosshair.enabled &&
                (this.axisX2[h].crosshair.hide(),
                this.axisX2[h].crosshair.dispatchEvent(
                  "hidden",
                  { chart: this, axis: this.axisX2[h].options },
                  this.axisX2[h].crosshair
                ));
            for (h = 0; h < this.axisY.length; h++)
              this.axisY[h].crosshair &&
                this.axisY[h].crosshair.enabled &&
                (this.axisY[h].crosshair.hide(),
                this.axisY[h].crosshair.dispatchEvent(
                  "hidden",
                  { chart: this, axis: this.axisY[h].options },
                  this.axisY[h].crosshair
                ));
            for (h = 0; h < this.axisY2.length; h++)
              this.axisY2[h].crosshair &&
                this.axisY2[h].crosshair.enabled &&
                (this.axisY2[h].crosshair.hide(),
                this.axisY2[h].crosshair.dispatchEvent(
                  "hidden",
                  { chart: this, axis: this.axisY2[h].options },
                  this.axisY2[h].crosshair
                ));
          }
          (this.isDrag && this.zoomEnabled) ||
            !this._eventManager ||
            this._eventManager.mouseEventHandler(a);
        }
      }
    };
    m.prototype._plotAreaMouseDown = function (a, g) {
      this.isDrag = !0;
      this.dragStartPoint = { x: a, y: g };
    };
    m.prototype._plotAreaMouseUp = function (a, g) {
      if (
        ("normal" === this.plotInfo.axisPlacement ||
          "xySwapped" === this.plotInfo.axisPlacement) &&
        this.isDrag
      ) {
        var c = g - this.dragStartPoint.y,
          b = a - this.dragStartPoint.x,
          e = 0 <= this.zoomType.indexOf("x"),
          h = 0 <= this.zoomType.indexOf("y"),
          q = !1;
        this.resetOverlayedCanvas();
        if ("xySwapped" === this.plotInfo.axisPlacement)
          var y = h,
            h = e,
            e = y;
        if (this.panEnabled || this.zoomEnabled) {
          if (this.panEnabled)
            for (e = h = 0; e < this._axes.length; e++)
              (c = this._axes[e]),
                c.logarithmic
                  ? c.viewportMinimum < c.minimum
                    ? ((h = c.minimum / c.viewportMinimum),
                      (c.sessionVariables.newViewportMinimum =
                        c.viewportMinimum * h),
                      (c.sessionVariables.newViewportMaximum =
                        c.viewportMaximum * h),
                      (q = !0))
                    : c.viewportMaximum > c.maximum &&
                      ((h = c.viewportMaximum / c.maximum),
                      (c.sessionVariables.newViewportMinimum =
                        c.viewportMinimum / h),
                      (c.sessionVariables.newViewportMaximum =
                        c.viewportMaximum / h),
                      (q = !0))
                  : c.viewportMinimum < c.minimum
                  ? ((h = c.minimum - c.viewportMinimum),
                    (c.sessionVariables.newViewportMinimum =
                      c.viewportMinimum + h),
                    (c.sessionVariables.newViewportMaximum =
                      c.viewportMaximum + h),
                    (q = !0))
                  : c.viewportMaximum > c.maximum &&
                    ((h = c.viewportMaximum - c.maximum),
                    (c.sessionVariables.newViewportMinimum =
                      c.viewportMinimum - h),
                    (c.sessionVariables.newViewportMaximum =
                      c.viewportMaximum - h),
                    (q = !0));
          else if (
            (!e || 2 < Math.abs(b)) &&
            (!h || 2 < Math.abs(c)) &&
            this.zoomEnabled
          ) {
            if (!this.dragStartPoint) return;
            c = e ? this.dragStartPoint.x : this.plotArea.x1;
            b = h ? this.dragStartPoint.y : this.plotArea.y1;
            e = e ? a : this.plotArea.x2;
            h = h ? g : this.plotArea.y2;
            2 < Math.abs(c - e) &&
              2 < Math.abs(b - h) &&
              this._zoomPanToSelectedRegion(c, b, e, h) &&
              (q = !0);
          }
          q &&
            ((this._ignoreNextEvent = !0),
            this._dispatchRangeEvent("rangeChanging", "zoom"),
            this.stockChart &&
              this.stockChart.navigator &&
              this.stockChart.navigator.enabled &&
              (this.stockChart._rangeEventParameter ||
                (this.stockChart._rangeEventParameter = {
                  stockChart: this.stockChart,
                  source: "chart",
                  index: this.stockChart.charts.indexOf(this),
                  minimum: this.stockChart.sessionVariables._axisXMin,
                  maximum: this.stockChart.sessionVariables._axisXMax,
                }),
              (this.stockChart._rangeEventParameter.type = "rangeChanging"),
              this.stockChart.dispatchEvent(
                "rangeChanging",
                this.stockChart._rangeEventParameter,
                this.stockChart
              )),
            this.render(),
            this._dispatchRangeEvent("rangeChanged", "zoom"),
            this.stockChart &&
              ((this.stockChart.rangeUpdatedBy = "chart"),
              this.stockChart.navigator &&
                this.stockChart.navigator.enabled &&
                ((this.stockChart._rangeEventParameter.type = "rangeChanged"),
                this.stockChart.dispatchEvent(
                  "rangeChanged",
                  this.stockChart._rangeEventParameter,
                  this.stockChart
                ))),
            q &&
              this.zoomEnabled &&
              "none" === this._zoomButton.style.display &&
              (La(this._zoomButton, this._resetButton),
              ta(this, this._zoomButton, "pan"),
              ta(this, this._resetButton, "reset")));
        }
      }
      this.isDrag = !1;
      if ("none" !== this.plotInfo.axisPlacement) {
        this.resetOverlayedCanvas();
        if (this.axisX && 0 < this.axisX.length)
          for (q = 0; q < this.axisX.length; q++)
            this.axisX[q].crosshair &&
              this.axisX[q].crosshair.enabled &&
              this.axisX[q].renderCrosshair(a, g);
        if (this.axisX2 && 0 < this.axisX2.length)
          for (q = 0; q < this.axisX2.length; q++)
            this.axisX2[q].crosshair &&
              this.axisX2[q].crosshair.enabled &&
              this.axisX2[q].renderCrosshair(a, g);
        if (this.axisY && 0 < this.axisY.length)
          for (q = 0; q < this.axisY.length; q++)
            this.axisY[q].crosshair &&
              this.axisY[q].crosshair.enabled &&
              this.axisY[q].renderCrosshair(a, g);
        if (this.axisY2 && 0 < this.axisY2.length)
          for (q = 0; q < this.axisY2.length; q++)
            this.axisY2[q].crosshair &&
              this.axisY2[q].crosshair.enabled &&
              this.axisY2[q].renderCrosshair(a, g);
        if (this.axisX && 0 < this.axisX.length)
          for (q = 0; q < this.axisX.length; q++)
            this.axisX[q].crosshair &&
              this.axisX[q].crosshair.enabled &&
              this.axisX[q].crosshair.renderLabel();
        if (this.axisX2 && 0 < this.axisX2.length)
          for (q = 0; q < this.axisX2.length; q++)
            this.axisX2[q].crosshair &&
              this.axisX2[q].crosshair.enabled &&
              this.axisX2[q].crosshair.renderLabel();
        if (this.axisY && 0 < this.axisY.length)
          for (q = 0; q < this.axisY.length; q++)
            this.axisY[q].crosshair &&
              this.axisY[q].crosshair.enabled &&
              this.axisY[q].crosshair.renderLabel();
        if (this.axisY2 && 0 < this.axisY2.length)
          for (q = 0; q < this.axisY2.length; q++)
            this.axisY2[q].crosshair &&
              this.axisY2[q].crosshair.enabled &&
              this.axisY2[q].crosshair.renderLabel();
      }
    };
    m.prototype._plotAreaMouseMove = function (a, g) {
      if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
        var c = 0,
          b = 0,
          e = (c = null),
          e = 0 <= this.zoomType.indexOf("x"),
          h = 0 <= this.zoomType.indexOf("y"),
          q = this;
        "xySwapped" === this.plotInfo.axisPlacement &&
          ((c = h), (h = e), (e = c));
        c = this.dragStartPoint.x - a;
        b = this.dragStartPoint.y - g;
        if (
          2 < Math.abs(c) &&
          8 > Math.abs(c) &&
          (this.panEnabled || this.zoomEnabled)
        ) {
          this.toolTip.hide();
          this.toolTip &&
            this.toolTip.enabled &&
            this.toolTip.dispatchEvent(
              "hidden",
              { chart: this, toolTip: this.toolTip },
              this.toolTip
            );
          for (var y = 0; y < this.axisX.length; y++)
            this.axisX[y].crosshair &&
              this.axisX[y].crosshair.enabled &&
              (this.axisX[y].crosshair.hide(),
              this.axisX[y].crosshair.dispatchEvent(
                "hidden",
                { chart: this, axis: this.axisX[y].options },
                this.axisX[y].crosshair
              ));
          for (y = 0; y < this.axisX2.length; y++)
            this.axisX2[y].crosshair &&
              this.axisX2[y].crosshair.enabled &&
              (this.axisX2[y].crosshair.hide(),
              this.axisX2[y].crosshair.dispatchEvent(
                "hidden",
                { chart: this, axis: this.axisX2[y].options },
                this.axisX2[y].crosshair
              ));
          for (y = 0; y < this.axisY.length; y++)
            this.axisY[y].crosshair &&
              this.axisY[y].crosshair.enabled &&
              (this.axisY[y].crosshair.hide(),
              this.axisY[y].crosshair.dispatchEvent(
                "hidden",
                { chart: this, axis: this.axisY[y].options },
                this.axisY[y].crosshair
              ));
          for (y = 0; y < this.axisY2.length; y++)
            this.axisY2[y].crosshair &&
              this.axisY2[y].crosshair.enabled &&
              (this.axisY2[y].crosshair.hide(),
              this.axisY2[y].crosshair.dispatchEvent(
                "hidden",
                { chart: this, axis: this.axisY2[y].options },
                this.axisY2[y].crosshair
              ));
        } else
          this.panEnabled ||
            this.zoomEnabled ||
            this.toolTip.mouseMoveHandler(a, g);
        if (
          (!e || 2 < Math.abs(c) || !h || 2 < Math.abs(b)) &&
          (this.panEnabled || this.zoomEnabled)
        )
          if (this.panEnabled)
            (e = {
              x1: e ? this.plotArea.x1 + c : this.plotArea.x1,
              y1: h ? this.plotArea.y1 + b : this.plotArea.y1,
              x2: e ? this.plotArea.x2 + c : this.plotArea.x2,
              y2: h ? this.plotArea.y2 + b : this.plotArea.y2,
            }),
              clearTimeout(q._panTimerId),
              (q._panTimerId = setTimeout(
                (function (b, c, e, f) {
                  return function () {
                    q._zoomPanToSelectedRegion(b, c, e, f, !0) &&
                      (q._dispatchRangeEvent("rangeChanging", "pan"),
                      q.stockChart &&
                        q.stockChart.navigator &&
                        q.stockChart.navigator.enabled &&
                        ((q.stockChart._rangeEventParameter.type =
                          "rangeChanging"),
                        q.stockChart.dispatchEvent(
                          "rangeChanging",
                          q.stockChart._rangeEventParameter,
                          q.stockChart
                        )),
                      q.render(),
                      q._dispatchRangeEvent("rangeChanged", "pan"),
                      q.stockChart &&
                        q.stockChart.navigator &&
                        q.stockChart.navigator.enabled &&
                        ((q.stockChart._rangeEventParameter.type =
                          "rangeChanged"),
                        q.stockChart.dispatchEvent(
                          "rangeChanged",
                          q.stockChart._rangeEventParameter,
                          q.stockChart
                        )),
                      (q.dragStartPoint.x = a),
                      (q.dragStartPoint.y = g));
                  };
                })(e.x1, e.y1, e.x2, e.y2),
                0
              ));
          else if (this.zoomEnabled) {
            this.resetOverlayedCanvas();
            c = this.overlaidCanvasCtx.globalAlpha;
            this.overlaidCanvasCtx.fillStyle = "#A89896";
            var b = e ? this.dragStartPoint.x : this.plotArea.x1,
              y = h ? this.dragStartPoint.y : this.plotArea.y1,
              d = e
                ? a - this.dragStartPoint.x
                : this.plotArea.x2 - this.plotArea.x1,
              k = h
                ? g - this.dragStartPoint.y
                : this.plotArea.y2 - this.plotArea.y1;
            this.validateRegion(
              b,
              y,
              e ? a : this.plotArea.x2 - this.plotArea.x1,
              h ? g : this.plotArea.y2 - this.plotArea.y1,
              "xy" !== this.zoomType
            ).isValid &&
              (this.resetOverlayedCanvas(),
              (this.overlaidCanvasCtx.fillStyle = "#99B2B5"));
            this.overlaidCanvasCtx.globalAlpha = 0.7;
            this.overlaidCanvasCtx.fillRect(b, y, d, k);
            this.overlaidCanvasCtx.globalAlpha = c;
          }
      } else if (
        (this.toolTip.mouseMoveHandler(a, g),
        "none" !== this.plotInfo.axisPlacement)
      ) {
        if (this.axisX && 0 < this.axisX.length)
          for (e = 0; e < this.axisX.length; e++)
            this.axisX[e].crosshair &&
              this.axisX[e].crosshair.enabled &&
              this.axisX[e].renderCrosshair(a, g);
        if (this.axisX2 && 0 < this.axisX2.length)
          for (e = 0; e < this.axisX2.length; e++)
            this.axisX2[e].crosshair &&
              this.axisX2[e].crosshair.enabled &&
              this.axisX2[e].renderCrosshair(a, g);
        if (this.axisY && 0 < this.axisY.length)
          for (e = 0; e < this.axisY.length; e++)
            this.axisY[e].crosshair &&
              this.axisY[e].crosshair.enabled &&
              this.axisY[e].renderCrosshair(a, g);
        if (this.axisY2 && 0 < this.axisY2.length)
          for (e = 0; e < this.axisY2.length; e++)
            this.axisY2[e].crosshair &&
              this.axisY2[e].crosshair.enabled &&
              this.axisY2[e].renderCrosshair(a, g);
        if (this.axisX && 0 < this.axisX.length)
          for (e = 0; e < this.axisX.length; e++)
            this.axisX[e].crosshair &&
              this.axisX[e].crosshair.enabled &&
              this.axisX[e].crosshair.renderLabel();
        if (this.axisX2 && 0 < this.axisX2.length)
          for (e = 0; e < this.axisX2.length; e++)
            this.axisX2[e].crosshair &&
              this.axisX2[e].crosshair.enabled &&
              this.axisX2[e].crosshair.renderLabel();
        if (this.axisY && 0 < this.axisY.length)
          for (e = 0; e < this.axisY.length; e++)
            this.axisY[e].crosshair &&
              this.axisY[e].crosshair.enabled &&
              this.axisY[e].crosshair.renderLabel();
        if (this.axisY2 && 0 < this.axisY2.length)
          for (e = 0; e < this.axisY2.length; e++)
            this.axisY2[e].crosshair &&
              this.axisY2[e].crosshair.enabled &&
              this.axisY2[e].crosshair.renderLabel();
      }
    };
    m.prototype._zoomPanToSelectedRegion = function (a, g, c, b, e) {
      a = this.validateRegion(a, g, c, b, e);
      g = a.axesWithValidRange;
      c = a.axesRanges;
      if (a.isValid)
        for (b = 0; b < g.length; b++)
          (e = c[b]),
            g[b].setViewPortRange(e.val1, e.val2),
            this.syncCharts &&
              "y" != this.zoomType &&
              this.syncCharts(e.val1, e.val2),
            this.stockChart &&
              (this.stockChart._rangeEventParameter = {
                stockChart: this.stockChart,
                source: "chart",
                index: this.stockChart.charts.indexOf(this),
                minimum: e.val1,
                maximum: e.val2,
              });
      return a.isValid;
    };
    m.prototype.validateRegion = function (a, g, c, b, e) {
      e = e || !1;
      for (
        var h = 0 <= this.zoomType.indexOf("x"),
          q = 0 <= this.zoomType.indexOf("y"),
          y = !1,
          d = [],
          k = [],
          l = [],
          p = 0;
        p < this._axes.length;
        p++
      )
        (("axisX" === this._axes[p].type && h) ||
          ("axisY" === this._axes[p].type && q)) &&
          k.push(this._axes[p]);
      for (q = 0; q < k.length; q++) {
        var p = k[q],
          h = !1,
          r = p.convertPixelToValue({ x: a, y: g }),
          f = p.convertPixelToValue({ x: c, y: b });
        if (r > f)
          var n = f,
            f = r,
            r = n;
        if (p.scaleBreaks)
          for (n = 0; !h && n < p.scaleBreaks._appliedBreaks.length; n++)
            h =
              p.scaleBreaks._appliedBreaks[n].startValue <= r &&
              p.scaleBreaks._appliedBreaks[n].endValue >= f;
        if (isFinite(p.dataInfo.minDiff))
          if (
            ((n = p.getApparentDifference(r, f, null, !0)),
            !(
              h ||
              (!(
                this.panEnabled &&
                p.scaleBreaks &&
                p.scaleBreaks._appliedBreaks.length
              ) &&
                ((p.logarithmic && n < Math.pow(p.dataInfo.minDiff, 3)) ||
                  (!p.logarithmic && n < 3 * Math.abs(p.dataInfo.minDiff)))) ||
              r < p.minimum ||
              f > p.maximum
            ))
          )
            d.push(p), l.push({ val1: r, val2: f }), (y = !0);
          else if (!e) {
            y = !1;
            break;
          }
      }
      return { isValid: y, axesWithValidRange: d, axesRanges: l };
    };
    m.prototype.preparePlotArea = function () {
      var a = this.plotArea;
      !v && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
      if (
        (this.axisX[0] || this.axisX2[0]) &&
        (this.axisY[0] || this.axisY2[0])
      ) {
        var g = this.axisX[0]
          ? this.axisX[0].lineCoordinates
          : this.axisX2[0].lineCoordinates;
        if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
          var c = this.axisY[0];
          a.x1 = g.x1 < g.x2 ? g.x1 : c.lineCoordinates.x1;
          a.y1 = g.y1 < c.lineCoordinates.y1 ? g.y1 : c.lineCoordinates.y1;
          a.x2 = g.x2 > c.lineCoordinates.x2 ? g.x2 : c.lineCoordinates.x2;
          a.y2 = g.y1 > c.lineCoordinates.y2 ? g.y1 : c.lineCoordinates.y2;
          a.width = a.x2 - a.x1;
          a.height = a.y2 - a.y1;
        }
        this.axisY2 &&
          0 < this.axisY2.length &&
          this.axisY2[0] &&
          ((c = this.axisY2[0]),
          (a.x1 = g.x1 < g.x2 ? g.x1 : c.lineCoordinates.x1),
          (a.y1 = g.y1 < c.lineCoordinates.y1 ? g.y1 : c.lineCoordinates.y1),
          (a.x2 = g.x2 > c.lineCoordinates.x2 ? g.x2 : c.lineCoordinates.x2),
          (a.y2 = g.y2 > c.lineCoordinates.y2 ? g.y2 : c.lineCoordinates.y2),
          (a.width = a.x2 - a.x1),
          (a.height = a.y2 - a.y1));
      } else
        (g = this.layoutManager.getFreeSpace()),
          (a.x1 = g.x1),
          (a.x2 = g.x2),
          (a.y1 = g.y1),
          (a.y2 = g.y2),
          (a.width = g.width),
          (a.height = g.height);
      v ||
        ((a.canvas.width = a.width),
        (a.canvas.height = a.height),
        (a.canvas.style.left = a.x1 + "px"),
        (a.canvas.style.top = a.y1 + "px"),
        (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
      a.layoutManager = new Ea(a.x1, a.y1, a.x2, a.y2, 2);
    };
    m.prototype.renderIndexLabels = function (a) {
      var g = a || this.plotArea.ctx,
        c = this.plotArea,
        b = 0,
        e = 0,
        h = 0,
        q = (e = h = 0),
        y = 0,
        d = (b = 0),
        k = 0;
      for (a = 0; a < this._indexLabels.length; a++) {
        var l = this._indexLabels[a],
          p = l.chartType.toLowerCase(),
          r,
          f,
          y = ma("indexLabelFontColor", l.dataPoint, l.dataSeries),
          Ra = ma("indexLabelFontSize", l.dataPoint, l.dataSeries),
          d = ma("indexLabelFontFamily", l.dataPoint, l.dataSeries),
          k = ma("indexLabelFontStyle", l.dataPoint, l.dataSeries);
        r = ma("indexLabelFontWeight", l.dataPoint, l.dataSeries);
        var w = ma("indexLabelBackgroundColor", l.dataPoint, l.dataSeries);
        f = ma("indexLabelBorderColor", l.dataPoint, l.dataSeries);
        var h = ma("indexLabelBorderThickness", l.dataPoint, l.dataSeries),
          e = ma("indexLabelMaxWidth", l.dataPoint, l.dataSeries),
          q = ma("indexLabelWrap", l.dataPoint, l.dataSeries),
          x = ma("indexLabelLineDashType", l.dataPoint, l.dataSeries),
          s = ma("indexLabelLineColor", l.dataPoint, l.dataSeries),
          z = n(l.dataPoint.indexLabelLineThickness)
            ? n(l.dataSeries.options.indexLabelLineThickness)
              ? 0
              : l.dataSeries.options.indexLabelLineThickness
            : l.dataPoint.indexLabelLineThickness,
          b =
            0 < z
              ? Math.min(
                  10,
                  ("normal" === this.plotInfo.axisPlacement
                    ? this.plotArea.height
                    : this.plotArea.width) << 0
                )
              : 0,
          u = { percent: null, total: null },
          m = null;
        if (
          0 <= l.dataSeries.type.indexOf("stacked") ||
          "pie" === l.dataSeries.type ||
          "doughnut" === l.dataSeries.type
        )
          u = this.getPercentAndTotal(l.dataSeries, l.dataPoint);
        if (l.dataSeries.indexLabelFormatter || l.dataPoint.indexLabelFormatter)
          m = {
            chart: this,
            dataSeries: l.dataSeries,
            dataPoint: l.dataPoint,
            index: l.indexKeyword,
            total: u.total,
            percent: u.percent,
          };
        var C = l.dataPoint.indexLabelFormatter
          ? l.dataPoint.indexLabelFormatter(m)
          : l.dataPoint.indexLabel
          ? this.replaceKeywordsWithValue(
              l.dataPoint.indexLabel,
              l.dataPoint,
              l.dataSeries,
              null,
              l.indexKeyword
            )
          : l.dataSeries.indexLabelFormatter
          ? l.dataSeries.indexLabelFormatter(m)
          : l.dataSeries.indexLabel
          ? this.replaceKeywordsWithValue(
              l.dataSeries.indexLabel,
              l.dataPoint,
              l.dataSeries,
              null,
              l.indexKeyword
            )
          : null;
        if (null !== C && "" !== C) {
          var u = ma("indexLabelPlacement", l.dataPoint, l.dataSeries),
            m = ma("indexLabelOrientation", l.dataPoint, l.dataSeries),
            D = ma("indexLabelTextAlign", l.dataPoint, l.dataSeries),
            t = l.direction,
            B = l.dataSeries.axisX,
            J = l.dataSeries.axisY,
            K = !1,
            w = new ja(g, {
              x: 0,
              y: 0,
              maxWidth: e ? e : 0.5 * this.width,
              maxHeight: q ? 5 * Ra : 1.5 * Ra,
              angle: "horizontal" === m ? 0 : -90,
              text: C,
              padding: 0,
              backgroundColor: w,
              borderColor: f,
              borderThickness: h,
              textAlign: D,
              fontSize: Ra,
              fontFamily: d,
              fontWeight: r,
              fontColor: y,
              fontStyle: k,
              textBaseline: "middle",
            });
          w.measureText();
          l.dataSeries.indexLabelMaxWidth = w.maxWidth;
          if ("stackedarea100" === p) {
            if (
              l.point.x < c.x1 ||
              l.point.x > c.x2 ||
              l.point.y < c.y1 - 1 ||
              l.point.y > c.y2 + 1
            )
              continue;
          } else if ("rangearea" === p || "rangesplinearea" === p) {
            if (
              l.dataPoint.x < B.viewportMinimum ||
              l.dataPoint.x > B.viewportMaximum ||
              Math.max.apply(null, l.dataPoint.y) < J.viewportMinimum ||
              Math.min.apply(null, l.dataPoint.y) > J.viewportMaximum
            )
              continue;
          } else if (
            0 <= p.indexOf("line") ||
            0 <= p.indexOf("area") ||
            0 <= p.indexOf("bubble") ||
            0 <= p.indexOf("scatter")
          ) {
            if (
              l.dataPoint.x < B.viewportMinimum ||
              l.dataPoint.x > B.viewportMaximum ||
              l.dataPoint.y < J.viewportMinimum ||
              l.dataPoint.y > J.viewportMaximum
            )
              continue;
          } else if (
            0 <= p.indexOf("column") ||
            "waterfall" === p ||
            ("error" === p && !l.axisSwapped)
          ) {
            if (
              l.dataPoint.x < B.viewportMinimum ||
              l.dataPoint.x > B.viewportMaximum ||
              l.bounds.y1 > c.y2 ||
              l.bounds.y2 < c.y1
            )
              continue;
          } else if (0 <= p.indexOf("bar") || "error" === p) {
            if (
              l.dataPoint.x < B.viewportMinimum ||
              l.dataPoint.x > B.viewportMaximum ||
              l.bounds.x1 > c.x2 ||
              l.bounds.x2 < c.x1
            )
              continue;
          } else if ("candlestick" === p || "ohlc" === p) {
            if (
              l.dataPoint.x < B.viewportMinimum ||
              l.dataPoint.x > B.viewportMaximum ||
              Math.max.apply(null, l.dataPoint.y) < J.viewportMinimum ||
              Math.min.apply(null, l.dataPoint.y) > J.viewportMaximum
            )
              continue;
          } else if (
            l.dataPoint.x < B.viewportMinimum ||
            l.dataPoint.x > B.viewportMaximum
          )
            continue;
          q = y = 2;
          "horizontal" === m
            ? ((d = w.width), (k = w.height))
            : ((k = w.width), (d = w.height));
          if ("normal" === this.plotInfo.axisPlacement) {
            if (0 <= p.indexOf("line") || 0 <= p.indexOf("area"))
              (u = "auto"), (y = 4);
            else if (0 <= p.indexOf("stacked")) "auto" === u && (u = "inside");
            else if ("bubble" === p || "scatter" === p) u = "inside";
            r =
              l.point.x - d / 2 + ("horizontal" === m ? 0 : w._lineHeight / 2);
            if ("inside" !== u)
              (e = c.y1),
                (h = c.y2),
                0 < t
                  ? ((f = l.point.y + w._lineHeight / 2 - k - y - b),
                    f < e &&
                      ((f =
                        "auto" === u
                          ? Math.max(l.point.y, e) + w._lineHeight / 2 + y + b
                          : e + w._lineHeight / 2 + y + b),
                      (K =
                        f + ("horizontal" === m ? k - w._lineHeight / 2 : 0) >
                        l.point.y),
                      !K ||
                        0 <= p.indexOf("line") ||
                        0 <= p.indexOf("area") ||
                        (f -= b)))
                  : ((f = l.point.y + w._lineHeight / 2 + y + b),
                    f > h - k + w._lineHeight / 2 - y &&
                      ((f =
                        "auto" === u
                          ? Math.min(l.point.y, h) +
                            w._lineHeight / 2 -
                            k -
                            y -
                            b
                          : h + w._lineHeight / 2 - k - y - b),
                      (K =
                        f - ("horizontal" === m ? w._lineHeight / 2 : k) <
                        l.point.y),
                      !K ||
                        0 <= p.indexOf("line") ||
                        0 <= p.indexOf("area") ||
                        (f += b)));
            else {
              Math.max(l.bounds.y1, c.y1);
              h = Math.min(l.bounds.y2, c.y2) - k + w._lineHeight / 2;
              b =
                0 <= p.indexOf("range") || "error" === p
                  ? 0 < t
                    ? Math.max(l.bounds.y1, c.y1) + w._lineHeight / 2 + y
                    : Math.min(l.bounds.y2, c.y2) + w._lineHeight / 2 - k - y
                  : (Math.max(l.bounds.y1, c.y1) +
                      Math.min(l.bounds.y2, c.y2)) /
                      2 -
                    k / 2 +
                    w._lineHeight / 2;
              if (0 < t) {
                if (((f = b), "bubble" === p || "scatter" === p))
                  (f = l.point.y - k / 2 + w._lineHeight / 2),
                    k > l.bounds.y2 - l.bounds.y1 && (f -= k / 2 + y),
                    0 > f - w._lineHeight / 2 &&
                      (f +=
                        Math.abs(f - w._lineHeight / 2) <=
                        (l.bounds.y2 - l.bounds.y1) / 2 + y
                          ? Math.abs(f - w._lineHeight / 2)
                          : (l.bounds.y2 - l.bounds.y1) / 2 + y);
              } else
                (f = Math.min(l.point.y, b)),
                  f > h - k - y &&
                    ("bubble" === p || "scatter" === p) &&
                    (f = Math.min(l.point.y + y, c.y2 - k - y));
              f = Math.min(f, h);
            }
          } else
            0 <= p.indexOf("line") ||
            0 <= p.indexOf("area") ||
            0 <= p.indexOf("scatter")
              ? ((u = "auto"), (q = 4))
              : 0 <= p.indexOf("stacked")
              ? "auto" === u && (u = "inside")
              : "bubble" === p && (u = "inside"),
              (f = l.point.y + w._lineHeight / 2 - k / 2),
              "inside" !== u
                ? ((h = c.x1),
                  (e = c.x2),
                  0 > t
                    ? ((r =
                        l.point.x -
                        d +
                        ("horizontal" === m ? 0 : w._lineHeight / 2) -
                        q -
                        b),
                      ("horizontal" === m ? r : r - w._lineHeight / 2) < h &&
                        ((r =
                          "auto" === u
                            ? Math.max(l.point.x, h) +
                              ("horizontal" === m ? 0 : w._lineHeight / 2) +
                              y +
                              b
                            : h +
                              ("horizontal" === m ? 0 : w._lineHeight / 2) +
                              q),
                        (K =
                          r + d - ("horizontal" === m ? 0 : w._lineHeight / 2) >
                          l.point.x) && (r -= b)))
                    : ((r =
                        l.point.x +
                        ("horizontal" === m ? 0 : w._lineHeight / 2) +
                        q +
                        b),
                      ("horizontal" === m ? r : r - w._lineHeight / 2) >
                        e - d - q - b &&
                        ((r =
                          "auto" === u
                            ? Math.min(l.point.x, e) -
                              ("horizontal" === m ? d : d - w._lineHeight / 2) -
                              q -
                              b
                            : e -
                              d -
                              q +
                              ("horizontal" === m ? 0 : w._lineHeight / 2)),
                        (K =
                          r - ("horizontal" === m ? 0 : w._lineHeight / 2) <
                          l.point.x) && (r += b))))
                : ((h = Math.max(l.bounds.x1, c.x1)),
                  Math.min(l.bounds.x2, c.x2),
                  (b =
                    0 <= p.indexOf("range") || "error" === p
                      ? 0 > t
                        ? Math.max(l.bounds.x1, c.x1)
                        : Math.min(l.bounds.x2, c.x2) -
                          d -
                          q +
                          ("horizontal" === m ? 0 : w._lineHeight / 2)
                      : (Math.max(l.bounds.x1, c.x1) +
                          Math.min(l.bounds.x2, c.x2)) /
                          2 -
                        d / 2 +
                        ("horizontal" === m ? 0 : w._lineHeight / 2)),
                  (r = 0 > t ? b : Math.min(l.point.x, b)),
                  (r = Math.max(
                    r,
                    h + ("horizontal" === m ? 0 : w._lineHeight / 2 + y)
                  )));
          "vertical" === m &&
            ((f += k - w._lineHeight / 2),
            0 <=
              "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error"
                .split(" ")
                .indexOf(p) &&
              (K =
                0 < t
                  ? f + ("horizontal" === m ? k - w._lineHeight / 2 : 0) >
                    l.point.y
                  : f - ("horizontal" === m ? w._lineHeight / 2 : k) <
                    l.point.y),
            "bubble" === p || "scatter" === p) &&
            (r += w._lineHeight / 2 - Ra / 2);
          w.x = r;
          w.y = f;
          w.render(!0);
          z &&
            "inside" !== u &&
            ((0 > p.indexOf("bar") &&
              ("error" !== p || !l.axisSwapped) &&
              l.point.x > c.x1 &&
              l.point.x < c.x2) ||
              !K) &&
            ((-1 ===
              "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error"
                .split(" ")
                .indexOf(p) &&
              ("error" !== p || l.axisSwapped) &&
              l.point.y > c.y1 &&
              l.point.y < c.y2) ||
              !K) &&
            ((g.lineWidth = z),
            (g.strokeStyle = s ? s : "gray"),
            g.setLineDash && g.setLineDash(G(x, z)),
            g.beginPath(),
            g.moveTo(l.point.x, l.point.y),
            0 <= p.indexOf("bar") || ("error" === p && l.axisSwapped)
              ? g.lineTo(
                  r +
                    (0 < l.direction ? 0 : d) +
                    ("vertical" === m ? -w._lineHeight / 2 : 0),
                  f + ("vertical" === m ? -k / 2 : k / 2 - w._lineHeight / 2)
                )
              : 0 <= p.indexOf("column") || ("error" === p && !l.axisSwapped)
              ? g.lineTo(
                  r + d / 2 - ("horizontal" === m ? 0 : w._lineHeight / 2),
                  f +
                    ("vertical" === m
                      ? f - k < l.point.y
                        ? 0
                        : -k
                      : (f - w._lineHeight / 2 < l.point.y ? k : 0) -
                        w._lineHeight / 2)
                )
              : 0 <= p.indexOf("waterfall")
              ? g.lineTo(
                  r + d / 2 - ("horizontal" === m ? 0 : w._lineHeight / 2),
                  "vertical" === m
                    ? 0 < t && f < l.point.y
                      ? f
                      : 0 > t && f - k > l.point.y
                      ? f - k
                      : l.point.y
                    : 0 < t && f + k - w._lineHeight / 2 < l.point.y
                    ? f + k - w._lineHeight / 2
                    : 0 > t && f - w._lineHeight / 2 > l.point.y
                    ? f - w._lineHeight / 2
                    : l.point.y
                )
              : g.lineTo(
                  r + d / 2 - ("horizontal" === m ? 0 : w._lineHeight / 2),
                  f +
                    ("vertical" === m
                      ? f - k < l.point.y
                        ? 0
                        : -k
                      : (f + k - w._lineHeight / 2 < l.point.y ? k : 0) -
                        w._lineHeight / 2)
                ),
            g.stroke());
        }
      }
      g = {
        source: g,
        dest: this.plotArea.ctx,
        animationCallback: L.fadeInAnimation,
        easingFunction: L.easing.easeInQuad,
        animationBase: 0,
        startTimePercent: 0.7,
      };
      for (a = 0; a < this._indexLabels.length; a++)
        (l = this._indexLabels[a]),
          (w = ma("indexLabelBackgroundColor", l.dataPoint, l.dataSeries)),
          (l.dataSeries.indexLabelBackgroundColor = n(w)
            ? v
              ? "transparent"
              : null
            : w);
      return g;
    };
    m.prototype.renderLine = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = this._eventManager.ghostCtx;
        c.save();
        var e = this.plotArea;
        c.beginPath();
        c.rect(e.x1, e.y1, e.width, e.height);
        c.clip();
        for (var h = [], q, y = 0; y < a.dataSeriesIndexes.length; y++) {
          var d = a.dataSeriesIndexes[y],
            k = this.data[d];
          c.lineWidth = k.lineThickness;
          var l = k.dataPoints,
            p = "solid";
          if (c.setLineDash) {
            var r = G(k.nullDataLineDashType, k.lineThickness),
              p = k.lineDashType,
              f = G(p, k.lineThickness);
            c.setLineDash(f);
          }
          var n = k.id;
          this._eventManager.objectMap[n] = {
            objectType: "dataSeries",
            dataSeriesIndex: d,
          };
          n = U(n);
          b.strokeStyle = n;
          b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
          var n = k._colorSet,
            w =
              (n =
              k.lineColor =
                k.options.lineColor ? k.options.lineColor : n[0]);
          c.strokeStyle = n;
          var x = !0,
            s = 0,
            z,
            u;
          c.beginPath();
          if (0 < l.length) {
            for (var m = !1, s = 0; s < l.length; s++)
              if (
                ((z = l[s].x.getTime ? l[s].x.getTime() : l[s].x),
                !(
                  z < a.axisX.dataInfo.viewPortMin ||
                  (z > a.axisX.dataInfo.viewPortMax &&
                    (!k.connectNullData || !m))
                ))
              )
                if ("number" !== typeof l[s].y)
                  0 < s &&
                    !(k.connectNullData || m || x) &&
                    (c.stroke(), v && b.stroke()),
                    (m = !0);
                else {
                  z = a.axisX.convertValueToPixel(z);
                  u = a.axisY.convertValueToPixel(l[s].y);
                  var C = k.dataPointIds[s];
                  this._eventManager.objectMap[C] = {
                    id: C,
                    objectType: "dataPoint",
                    dataSeriesIndex: d,
                    dataPointIndex: s,
                    x1: z,
                    y1: u,
                  };
                  x || m
                    ? (!x && k.connectNullData
                        ? (c.setLineDash &&
                            (k.options.nullDataLineDashType ||
                              (p === k.lineDashType &&
                                k.lineDashType !== k.nullDataLineDashType)) &&
                            (c.stroke(),
                            c.beginPath(),
                            c.moveTo(q.x, q.y),
                            (p = k.nullDataLineDashType),
                            c.setLineDash(r)),
                          c.lineTo(z, u),
                          v && b.lineTo(z, u))
                        : (c.beginPath(),
                          c.moveTo(z, u),
                          v && (b.beginPath(), b.moveTo(z, u))),
                      (m = x = !1))
                    : (c.lineTo(z, u),
                      v && b.lineTo(z, u),
                      0 == s % 500 &&
                        (c.stroke(),
                        c.beginPath(),
                        c.moveTo(z, u),
                        v && (b.stroke(), b.beginPath(), b.moveTo(z, u))));
                  q = { x: z, y: u };
                  s < l.length - 1 &&
                    (w !== (l[s].lineColor || n) ||
                      p !== (l[s].lineDashType || k.lineDashType)) &&
                    (c.stroke(),
                    c.beginPath(),
                    c.moveTo(z, u),
                    (w = l[s].lineColor || n),
                    (c.strokeStyle = w),
                    c.setLineDash &&
                      (l[s].lineDashType
                        ? ((p = l[s].lineDashType),
                          c.setLineDash(G(p, k.lineThickness)))
                        : ((p = k.lineDashType), c.setLineDash(f))));
                  if (
                    0 !== l[s].markerSize &&
                    (0 < l[s].markerSize || 0 < k.markerSize)
                  ) {
                    var D = k.getMarkerProperties(s, z, u, c);
                    h.push(D);
                    C = U(C);
                    v &&
                      h.push({
                        x: z,
                        y: u,
                        ctx: b,
                        type: D.type,
                        size: D.size,
                        color: C,
                        borderColor: C,
                        borderThickness: D.borderThickness,
                      });
                  }
                  (l[s].indexLabel ||
                    k.indexLabel ||
                    l[s].indexLabelFormatter ||
                    k.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "line",
                      dataPoint: l[s],
                      dataSeries: k,
                      point: { x: z, y: u },
                      direction: 0 > l[s].y === a.axisY.reversed ? 1 : -1,
                      color: n,
                    });
                }
            c.stroke();
            v && b.stroke();
          }
        }
        X.drawMarkers(h);
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(e.x1, e.y1, e.width, e.height),
          b.beginPath());
        c.restore();
        c.beginPath();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.xClipAnimation,
          easingFunction: L.easing.linear,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderStepLine = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = this._eventManager.ghostCtx;
        c.save();
        var e = this.plotArea;
        c.beginPath();
        c.rect(e.x1, e.y1, e.width, e.height);
        c.clip();
        for (var h = [], q, y = 0; y < a.dataSeriesIndexes.length; y++) {
          var d = a.dataSeriesIndexes[y],
            k = this.data[d];
          c.lineWidth = k.lineThickness;
          var l = k.dataPoints,
            p = "solid";
          if (c.setLineDash) {
            var r = G(k.nullDataLineDashType, k.lineThickness),
              p = k.lineDashType,
              f = G(p, k.lineThickness);
            c.setLineDash(f);
          }
          var n = k.id;
          this._eventManager.objectMap[n] = {
            objectType: "dataSeries",
            dataSeriesIndex: d,
          };
          n = U(n);
          b.strokeStyle = n;
          b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
          var n = k._colorSet,
            w =
              (n =
              k.lineColor =
                k.options.lineColor ? k.options.lineColor : n[0]);
          c.strokeStyle = n;
          var x = !0,
            s = 0,
            z,
            u;
          c.beginPath();
          if (0 < l.length) {
            for (var m = !1, s = 0; s < l.length; s++)
              if (
                ((z = l[s].getTime ? l[s].x.getTime() : l[s].x),
                !(
                  z < a.axisX.dataInfo.viewPortMin ||
                  (z > a.axisX.dataInfo.viewPortMax &&
                    (!k.connectNullData || !m))
                ))
              )
                if ("number" !== typeof l[s].y)
                  0 < s &&
                    !(k.connectNullData || m || x) &&
                    (c.stroke(), v && b.stroke()),
                    (m = !0);
                else {
                  var C = u;
                  z = a.axisX.convertValueToPixel(z);
                  u = a.axisY.convertValueToPixel(l[s].y);
                  var D = k.dataPointIds[s];
                  this._eventManager.objectMap[D] = {
                    id: D,
                    objectType: "dataPoint",
                    dataSeriesIndex: d,
                    dataPointIndex: s,
                    x1: z,
                    y1: u,
                  };
                  x || m
                    ? (!x && k.connectNullData
                        ? (c.setLineDash &&
                            (k.options.nullDataLineDashType ||
                              (p === k.lineDashType &&
                                k.lineDashType !== k.nullDataLineDashType)) &&
                            (c.stroke(),
                            c.beginPath(),
                            c.moveTo(q.x, q.y),
                            (p = k.nullDataLineDashType),
                            c.setLineDash(r)),
                          c.lineTo(z, C),
                          c.lineTo(z, u),
                          v && (b.lineTo(z, C), b.lineTo(z, u)))
                        : (c.beginPath(),
                          c.moveTo(z, u),
                          v && (b.beginPath(), b.moveTo(z, u))),
                      (m = x = !1))
                    : (c.lineTo(z, C),
                      v && b.lineTo(z, C),
                      c.lineTo(z, u),
                      v && b.lineTo(z, u),
                      0 == s % 500 &&
                        (c.stroke(),
                        c.beginPath(),
                        c.moveTo(z, u),
                        v && (b.stroke(), b.beginPath(), b.moveTo(z, u))));
                  q = { x: z, y: u };
                  s < l.length - 1 &&
                    (w !== (l[s].lineColor || n) ||
                      p !== (l[s].lineDashType || k.lineDashType)) &&
                    (c.stroke(),
                    c.beginPath(),
                    c.moveTo(z, u),
                    (w = l[s].lineColor || n),
                    (c.strokeStyle = w),
                    c.setLineDash &&
                      (l[s].lineDashType
                        ? ((p = l[s].lineDashType),
                          c.setLineDash(G(p, k.lineThickness)))
                        : ((p = k.lineDashType), c.setLineDash(f))));
                  0 !== l[s].markerSize &&
                    (0 < l[s].markerSize || 0 < k.markerSize) &&
                    ((C = k.getMarkerProperties(s, z, u, c)),
                    h.push(C),
                    (D = U(D)),
                    v &&
                      h.push({
                        x: z,
                        y: u,
                        ctx: b,
                        type: C.type,
                        size: C.size,
                        color: D,
                        borderColor: D,
                        borderThickness: C.borderThickness,
                      }));
                  (l[s].indexLabel ||
                    k.indexLabel ||
                    l[s].indexLabelFormatter ||
                    k.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "stepLine",
                      dataPoint: l[s],
                      dataSeries: k,
                      point: { x: z, y: u },
                      direction: 0 > l[s].y === a.axisY.reversed ? 1 : -1,
                      color: n,
                    });
                }
            c.stroke();
            v && b.stroke();
          }
        }
        X.drawMarkers(h);
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(e.x1, e.y1, e.width, e.height),
          b.beginPath());
        c.restore();
        c.beginPath();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.xClipAnimation,
          easingFunction: L.easing.linear,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderSpline = function (a) {
      function g(a) {
        a = t(a, 2);
        if (0 < a.length) {
          b.beginPath();
          v && e.beginPath();
          b.moveTo(a[0].x, a[0].y);
          a[0].newStrokeStyle && (b.strokeStyle = a[0].newStrokeStyle);
          a[0].newLineDashArray && b.setLineDash(a[0].newLineDashArray);
          v && e.moveTo(a[0].x, a[0].y);
          for (var c = 0; c < a.length - 3; c += 3)
            if (
              (b.bezierCurveTo(
                a[c + 1].x,
                a[c + 1].y,
                a[c + 2].x,
                a[c + 2].y,
                a[c + 3].x,
                a[c + 3].y
              ),
              v &&
                e.bezierCurveTo(
                  a[c + 1].x,
                  a[c + 1].y,
                  a[c + 2].x,
                  a[c + 2].y,
                  a[c + 3].x,
                  a[c + 3].y
                ),
              (0 < c && 0 === c % 3e3) ||
                a[c + 3].newStrokeStyle ||
                a[c + 3].newLineDashArray)
            )
              b.stroke(),
                b.beginPath(),
                b.moveTo(a[c + 3].x, a[c + 3].y),
                a[c + 3].newStrokeStyle &&
                  (b.strokeStyle = a[c + 3].newStrokeStyle),
                a[c + 3].newLineDashArray &&
                  b.setLineDash(a[c + 3].newLineDashArray),
                v &&
                  (e.stroke(), e.beginPath(), e.moveTo(a[c + 3].x, a[c + 3].y));
          b.stroke();
          v && e.stroke();
        }
      }
      var c = a.targetCanvasCtx || this.plotArea.ctx,
        b = v ? this._preRenderCtx : c;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var e = this._eventManager.ghostCtx;
        b.save();
        var h = this.plotArea;
        b.beginPath();
        b.rect(h.x1, h.y1, h.width, h.height);
        b.clip();
        for (var q = [], y = 0; y < a.dataSeriesIndexes.length; y++) {
          var d = a.dataSeriesIndexes[y],
            k = this.data[d];
          b.lineWidth = k.lineThickness;
          var l = k.dataPoints,
            p = "solid";
          if (b.setLineDash) {
            var r = G(k.nullDataLineDashType, k.lineThickness),
              p = k.lineDashType,
              f = G(p, k.lineThickness);
            b.setLineDash(f);
          }
          var n = k.id;
          this._eventManager.objectMap[n] = {
            objectType: "dataSeries",
            dataSeriesIndex: d,
          };
          n = U(n);
          e.strokeStyle = n;
          e.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
          var n = k._colorSet,
            w =
              (n =
              k.lineColor =
                k.options.lineColor ? k.options.lineColor : n[0]);
          b.strokeStyle = n;
          var x = 0,
            s,
            z,
            u = [];
          b.beginPath();
          if (0 < l.length)
            for (z = !1, x = 0; x < l.length; x++)
              if (
                ((s = l[x].getTime ? l[x].x.getTime() : l[x].x),
                !(
                  s < a.axisX.dataInfo.viewPortMin ||
                  (s > a.axisX.dataInfo.viewPortMax &&
                    (!k.connectNullData || !z))
                ))
              )
                if ("number" !== typeof l[x].y)
                  0 < x &&
                    !z &&
                    (k.connectNullData
                      ? b.setLineDash &&
                        0 < u.length &&
                        (k.options.nullDataLineDashType ||
                          !l[x - 1].lineDashType) &&
                        ((u[u.length - 1].newLineDashArray = r),
                        (p = k.nullDataLineDashType))
                      : (g(u), (u = []))),
                    (z = !0);
                else {
                  s = a.axisX.convertValueToPixel(s);
                  z = a.axisY.convertValueToPixel(l[x].y);
                  var m = k.dataPointIds[x];
                  this._eventManager.objectMap[m] = {
                    id: m,
                    objectType: "dataPoint",
                    dataSeriesIndex: d,
                    dataPointIndex: x,
                    x1: s,
                    y1: z,
                  };
                  u[u.length] = { x: s, y: z };
                  x < l.length - 1 &&
                    (w !== (l[x].lineColor || n) ||
                      p !== (l[x].lineDashType || k.lineDashType)) &&
                    ((w = l[x].lineColor || n),
                    (u[u.length - 1].newStrokeStyle = w),
                    b.setLineDash &&
                      (l[x].lineDashType
                        ? ((p = l[x].lineDashType),
                          (u[u.length - 1].newLineDashArray = G(
                            p,
                            k.lineThickness
                          )))
                        : ((p = k.lineDashType),
                          (u[u.length - 1].newLineDashArray = f))));
                  if (
                    0 !== l[x].markerSize &&
                    (0 < l[x].markerSize || 0 < k.markerSize)
                  ) {
                    var C = k.getMarkerProperties(x, s, z, b);
                    q.push(C);
                    m = U(m);
                    v &&
                      q.push({
                        x: s,
                        y: z,
                        ctx: e,
                        type: C.type,
                        size: C.size,
                        color: m,
                        borderColor: m,
                        borderThickness: C.borderThickness,
                      });
                  }
                  (l[x].indexLabel ||
                    k.indexLabel ||
                    l[x].indexLabelFormatter ||
                    k.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "spline",
                      dataPoint: l[x],
                      dataSeries: k,
                      point: { x: s, y: z },
                      direction: 0 > l[x].y === a.axisY.reversed ? 1 : -1,
                      color: n,
                    });
                  z = !1;
                }
          g(u);
        }
        X.drawMarkers(q);
        v &&
          (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (b.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          b.clearRect(h.x1, h.y1, h.width, h.height),
          e.beginPath());
        b.restore();
        b.beginPath();
        return {
          source: c,
          dest: this.plotArea.ctx,
          animationCallback: L.xClipAnimation,
          easingFunction: L.easing.linear,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderColumn = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          e = this.plotArea,
          h = 0,
          q,
          y,
          d,
          k = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          h = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          l = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : Math.min(
                0.15 * this.width,
                0.9 * (this.plotArea.width / a.plotType.totalDataSeries)
              ) << 0,
          p = a.axisX.dataInfo.minDiff;
        isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
        p = this.dataPointWidth = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((e.width *
                (a.axisX.logarithmic
                  ? Math.log(p) / Math.log(a.axisX.range)
                  : Math.abs(p) / Math.abs(a.axisX.range))) /
                a.plotType.totalDataSeries)) <<
            0;
        this.dataPointMaxWidth &&
          h > l &&
          (h = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            l
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          l < h &&
          (l = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            h
          ));
        p < h && (p = h);
        p > l && (p = l);
        c.save();
        v && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(e.x1, e.y1, e.width, e.height);
        c.clip();
        v &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.clip());
        for (l = 0; l < a.dataSeriesIndexes.length; l++) {
          var r = a.dataSeriesIndexes[l],
            f = this.data[r],
            n = f.dataPoints;
          if (0 < n.length)
            for (
              var w = 5 < p && f.bevelEnabled ? !0 : !1, h = 0;
              h < n.length;
              h++
            )
              if (
                (n[h].getTime ? (d = n[h].x.getTime()) : (d = n[h].x),
                !(
                  d < a.axisX.dataInfo.viewPortMin ||
                  d > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof n[h].y)
              ) {
                q = a.axisX.convertValueToPixel(d);
                y = a.axisY.convertValueToPixel(n[h].y);
                q = a.axisX.reversed
                  ? (q +
                      (a.plotType.totalDataSeries * p) / 2 -
                      (a.previousDataSeriesCount + l) * p) <<
                    0
                  : (q -
                      (a.plotType.totalDataSeries * p) / 2 +
                      (a.previousDataSeriesCount + l) * p) <<
                    0;
                var x = a.axisX.reversed ? (q - p) << 0 : (q + p) << 0,
                  s;
                0 <= n[h].y ? (s = k) : ((s = y), (y = k));
                y > s && ((b = y), (y = s), (s = b));
                b = n[h].color
                  ? n[h].color
                  : f._colorSet[h % f._colorSet.length];
                ba(
                  c,
                  a.axisX.reversed ? x : q,
                  y,
                  a.axisX.reversed ? q : x,
                  s,
                  b,
                  0,
                  null,
                  w && (a.axisY.reversed ? 0 > n[h].y : 0 <= n[h].y),
                  (a.axisY.reversed ? 0 <= n[h].y : 0 > n[h].y) && w,
                  !1,
                  !1,
                  f.fillOpacity
                );
                b = f.dataPointIds[h];
                this._eventManager.objectMap[b] = {
                  id: b,
                  objectType: "dataPoint",
                  dataSeriesIndex: r,
                  dataPointIndex: h,
                  x1: q,
                  y1: y,
                  x2: x,
                  y2: s,
                };
                b = U(b);
                v &&
                  ba(
                    this._eventManager.ghostCtx,
                    a.axisX.reversed ? x : q,
                    y,
                    a.axisX.reversed ? q : x,
                    s,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                (n[h].indexLabel ||
                  f.indexLabel ||
                  n[h].indexLabelFormatter ||
                  f.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "column",
                    dataPoint: n[h],
                    dataSeries: f,
                    point: {
                      x: q + (x - q) / 2,
                      y: 0 > n[h].y === a.axisY.reversed ? y : s,
                    },
                    direction: 0 > n[h].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: q,
                      y1: Math.min(y, s),
                      x2: x,
                      y2: Math.max(y, s),
                    },
                    color: b,
                  });
              }
        }
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.yScaleAnimation,
          easingFunction: L.easing.easeOutQuart,
          animationBase:
            k < a.axisY.bounds.y1
              ? a.axisY.bounds.y1
              : k > a.axisY.bounds.y2
              ? a.axisY.bounds.y2
              : k,
        };
      }
    };
    m.prototype.renderStackedColumn = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          e = this.plotArea,
          h = [],
          q = [],
          y = [],
          d = [],
          k = 0,
          l,
          p,
          r = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          k = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          f = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : (0.15 * this.width) << 0,
          n = a.axisX.dataInfo.minDiff;
        isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
        n = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((e.width *
                (a.axisX.logarithmic
                  ? Math.log(n) / Math.log(a.axisX.range)
                  : Math.abs(n) / Math.abs(a.axisX.range))) /
                a.plotType.plotUnits.length)) <<
            0;
        this.dataPointMaxWidth &&
          k > f &&
          (k = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            f
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          f < k &&
          (f = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            k
          ));
        n < k && (n = k);
        n > f && (n = f);
        c.save();
        v && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(e.x1, e.y1, e.width, e.height);
        c.clip();
        v &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.clip());
        for (f = 0; f < a.dataSeriesIndexes.length; f++) {
          var w = a.dataSeriesIndexes[f],
            x = this.data[w],
            s = x.dataPoints;
          if (0 < s.length) {
            var z = 5 < n && x.bevelEnabled ? !0 : !1;
            c.strokeStyle = "#4572A7 ";
            for (k = 0; k < s.length; k++)
              if (
                ((b = s[k].x.getTime ? s[k].x.getTime() : s[k].x),
                !(
                  b < a.axisX.dataInfo.viewPortMin ||
                  b > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof s[k].y)
              ) {
                l = a.axisX.convertValueToPixel(b);
                l =
                  (l - (a.plotType.plotUnits.length * n) / 2 + a.index * n) <<
                  0;
                var u = (l + n) << 0,
                  m;
                if (
                  a.axisY.logarithmic ||
                  (a.axisY.scaleBreaks &&
                    0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                    0 < s[k].y)
                )
                  (y[b] = s[k].y + (y[b] ? y[b] : 0)),
                    0 < y[b] &&
                      ((p = a.axisY.convertValueToPixel(y[b])),
                      (m = "undefined" !== typeof h[b] ? h[b] : r),
                      (h[b] = p));
                else if (
                  a.axisY.scaleBreaks &&
                  0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                  0 >= s[k].y
                )
                  (d[b] = s[k].y + (d[b] ? d[b] : 0)),
                    (m = a.axisY.convertValueToPixel(d[b])),
                    (p = "undefined" !== typeof q[b] ? q[b] : r),
                    (q[b] = m);
                else if (
                  ((p = a.axisY.convertValueToPixel(s[k].y)), 0 <= s[k].y)
                ) {
                  var C = "undefined" !== typeof h[b] ? h[b] : 0;
                  p -= C;
                  m = r - C;
                  h[b] = C + (m - p);
                } else
                  (C = q[b] ? q[b] : 0),
                    (m = p + C),
                    (p = r + C),
                    (q[b] = C + (m - p));
                b = s[k].color
                  ? s[k].color
                  : x._colorSet[k % x._colorSet.length];
                ba(
                  c,
                  l,
                  a.axisY.reversed ? m : p,
                  u,
                  a.axisY.reversed ? p : m,
                  b,
                  0,
                  null,
                  z && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y),
                  (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && z,
                  !1,
                  !1,
                  x.fillOpacity
                );
                b = x.dataPointIds[k];
                this._eventManager.objectMap[b] = {
                  id: b,
                  objectType: "dataPoint",
                  dataSeriesIndex: w,
                  dataPointIndex: k,
                  x1: l,
                  y1: p,
                  x2: u,
                  y2: m,
                };
                b = U(b);
                v &&
                  ba(
                    this._eventManager.ghostCtx,
                    l,
                    p,
                    u,
                    m,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                (s[k].indexLabel ||
                  x.indexLabel ||
                  s[k].indexLabelFormatter ||
                  x.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "stackedColumn",
                    dataPoint: s[k],
                    dataSeries: x,
                    point: { x: l + (u - l) / 2, y: 0 <= s[k].y ? p : m },
                    direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: l,
                      y1: Math.min(p, m),
                      x2: u,
                      y2: Math.max(p, m),
                    },
                    color: b,
                  });
              }
          }
        }
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.yScaleAnimation,
          easingFunction: L.easing.easeOutQuart,
          animationBase:
            r < a.axisY.bounds.y1
              ? a.axisY.bounds.y1
              : r > a.axisY.bounds.y2
              ? a.axisY.bounds.y2
              : r,
        };
      }
    };
    m.prototype.renderStackedColumn100 = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          e = this.plotArea,
          h = [],
          q = [],
          y = [],
          d = [],
          k = 0,
          l,
          p,
          r = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          k = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          f = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : (0.15 * this.width) << 0,
          n = a.axisX.dataInfo.minDiff;
        isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
        n = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((e.width *
                (a.axisX.logarithmic
                  ? Math.log(n) / Math.log(a.axisX.range)
                  : Math.abs(n) / Math.abs(a.axisX.range))) /
                a.plotType.plotUnits.length)) <<
            0;
        this.dataPointMaxWidth &&
          k > f &&
          (k = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            f
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          f < k &&
          (f = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            k
          ));
        n < k && (n = k);
        n > f && (n = f);
        c.save();
        v && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(e.x1, e.y1, e.width, e.height);
        c.clip();
        v &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.clip());
        for (f = 0; f < a.dataSeriesIndexes.length; f++) {
          var w = a.dataSeriesIndexes[f],
            x = this.data[w],
            s = x.dataPoints;
          if (0 < s.length)
            for (
              var z = 5 < n && x.bevelEnabled ? !0 : !1, k = 0;
              k < s.length;
              k++
            )
              if (
                ((b = s[k].x.getTime ? s[k].x.getTime() : s[k].x),
                !(
                  b < a.axisX.dataInfo.viewPortMin ||
                  b > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof s[k].y)
              ) {
                l = a.axisX.convertValueToPixel(b);
                p =
                  0 !== a.dataPointYSums[b]
                    ? 100 * (s[k].y / a.dataPointYSums[b])
                    : 0;
                l =
                  (l - (a.plotType.plotUnits.length * n) / 2 + a.index * n) <<
                  0;
                var u = (l + n) << 0,
                  m;
                if (
                  a.axisY.logarithmic ||
                  (a.axisY.scaleBreaks &&
                    0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                    0 < s[k].y)
                ) {
                  y[b] = p + ("undefined" !== typeof y[b] ? y[b] : 0);
                  if (0 >= y[b]) continue;
                  p = a.axisY.convertValueToPixel(y[b]);
                  m = h[b] ? h[b] : r;
                  h[b] = p;
                } else if (
                  a.axisY.scaleBreaks &&
                  0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                  0 >= s[k].y
                )
                  (d[b] = p + ("undefined" !== typeof d[b] ? d[b] : 0)),
                    (m = a.axisY.convertValueToPixel(d[b])),
                    (p = q[b] ? q[b] : r),
                    (q[b] = m);
                else if (((p = a.axisY.convertValueToPixel(p)), 0 <= s[k].y)) {
                  var C = "undefined" !== typeof h[b] ? h[b] : 0;
                  p -= C;
                  m = r - C;
                  a.dataSeriesIndexes.length - 1 === f &&
                    1 >= Math.abs(e.y1 - p) &&
                    (p = e.y1);
                  h[b] = C + (m - p);
                } else
                  (C = "undefined" !== typeof q[b] ? q[b] : 0),
                    (m = p + C),
                    (p = r + C),
                    a.dataSeriesIndexes.length - 1 === f &&
                      1 >= Math.abs(e.y2 - m) &&
                      (m = e.y2),
                    (q[b] = C + (m - p));
                b = s[k].color
                  ? s[k].color
                  : x._colorSet[k % x._colorSet.length];
                ba(
                  c,
                  l,
                  a.axisY.reversed ? m : p,
                  u,
                  a.axisY.reversed ? p : m,
                  b,
                  0,
                  null,
                  z && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y),
                  (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && z,
                  !1,
                  !1,
                  x.fillOpacity
                );
                b = x.dataPointIds[k];
                this._eventManager.objectMap[b] = {
                  id: b,
                  objectType: "dataPoint",
                  dataSeriesIndex: w,
                  dataPointIndex: k,
                  x1: l,
                  y1: p,
                  x2: u,
                  y2: m,
                };
                b = U(b);
                v &&
                  ba(
                    this._eventManager.ghostCtx,
                    l,
                    p,
                    u,
                    m,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                (s[k].indexLabel ||
                  x.indexLabel ||
                  s[k].indexLabelFormatter ||
                  x.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "stackedColumn100",
                    dataPoint: s[k],
                    dataSeries: x,
                    point: { x: l + (u - l) / 2, y: 0 <= s[k].y ? p : m },
                    direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: l,
                      y1: Math.min(p, m),
                      x2: u,
                      y2: Math.max(p, m),
                    },
                    color: b,
                  });
              }
        }
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.yScaleAnimation,
          easingFunction: L.easing.easeOutQuart,
          animationBase:
            r < a.axisY.bounds.y1
              ? a.axisY.bounds.y1
              : r > a.axisY.bounds.y2
              ? a.axisY.bounds.y2
              : r,
        };
      }
    };
    m.prototype.renderBar = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          e = this.plotArea,
          h = 0,
          q,
          d,
          n,
          k = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          h = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          l = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : Math.min(
                0.15 * this.height,
                0.9 * (this.plotArea.height / a.plotType.totalDataSeries)
              ) << 0,
          p = a.axisX.dataInfo.minDiff;
        isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
        p = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((e.height *
                (a.axisX.logarithmic
                  ? Math.log(p) / Math.log(a.axisX.range)
                  : Math.abs(p) / Math.abs(a.axisX.range))) /
                a.plotType.totalDataSeries)) <<
            0;
        this.dataPointMaxWidth &&
          h > l &&
          (h = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            l
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          l < h &&
          (l = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            h
          ));
        p < h && (p = h);
        p > l && (p = l);
        c.save();
        v && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(e.x1, e.y1, e.width, e.height);
        c.clip();
        v &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.clip());
        for (l = 0; l < a.dataSeriesIndexes.length; l++) {
          var r = a.dataSeriesIndexes[l],
            f = this.data[r],
            m = f.dataPoints;
          if (0 < m.length) {
            var w = 5 < p && f.bevelEnabled ? !0 : !1;
            c.strokeStyle = "#4572A7 ";
            for (h = 0; h < m.length; h++)
              if (
                (m[h].getTime ? (n = m[h].x.getTime()) : (n = m[h].x),
                !(
                  n < a.axisX.dataInfo.viewPortMin ||
                  n > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof m[h].y)
              ) {
                d = a.axisX.convertValueToPixel(n);
                q = a.axisY.convertValueToPixel(m[h].y);
                d = a.axisX.reversed
                  ? (d +
                      (a.plotType.totalDataSeries * p) / 2 -
                      (a.previousDataSeriesCount + l) * p) <<
                    0
                  : (d -
                      (a.plotType.totalDataSeries * p) / 2 +
                      (a.previousDataSeriesCount + l) * p) <<
                    0;
                var x = a.axisX.reversed ? (d - p) << 0 : (d + p) << 0,
                  s;
                0 <= m[h].y ? (s = k) : ((s = q), (q = k));
                b = m[h].color
                  ? m[h].color
                  : f._colorSet[h % f._colorSet.length];
                ba(
                  c,
                  a.axisY.reversed ? q : s,
                  a.axisX.reversed ? x : d,
                  a.axisY.reversed ? s : q,
                  a.axisX.reversed ? d : x,
                  b,
                  0,
                  null,
                  w,
                  !1,
                  !1,
                  !1,
                  f.fillOpacity
                );
                b = f.dataPointIds[h];
                this._eventManager.objectMap[b] = {
                  id: b,
                  objectType: "dataPoint",
                  dataSeriesIndex: r,
                  dataPointIndex: h,
                  x1: s,
                  y1: d,
                  x2: q,
                  y2: x,
                };
                b = U(b);
                v &&
                  ba(
                    this._eventManager.ghostCtx,
                    s,
                    a.axisX.reversed ? x : d,
                    q,
                    a.axisX.reversed ? d : x,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                (m[h].indexLabel ||
                  f.indexLabel ||
                  m[h].indexLabelFormatter ||
                  f.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "bar",
                    dataPoint: m[h],
                    dataSeries: f,
                    point: { x: 0 <= m[h].y ? q : s, y: d + (x - d) / 2 },
                    direction: 0 > m[h].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: Math.min(s, q),
                      y1: d,
                      x2: Math.max(s, q),
                      y2: x,
                    },
                    color: b,
                  });
              }
          }
        }
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.xScaleAnimation,
          easingFunction: L.easing.easeOutQuart,
          animationBase:
            k < a.axisY.bounds.x1
              ? a.axisY.bounds.x1
              : k > a.axisY.bounds.x2
              ? a.axisY.bounds.x2
              : k,
        };
      }
    };
    m.prototype.renderStackedBar = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          e = this.plotArea,
          h = [],
          q = [],
          d = [],
          n = [],
          k = 0,
          l,
          p,
          r = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          k = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          f = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : (0.15 * this.height) << 0,
          m = a.axisX.dataInfo.minDiff;
        isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
        m = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((e.height *
                (a.axisX.logarithmic
                  ? Math.log(m) / Math.log(a.axisX.range)
                  : Math.abs(m) / Math.abs(a.axisX.range))) /
                a.plotType.plotUnits.length)) <<
            0;
        this.dataPointMaxWidth &&
          k > f &&
          (k = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            f
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          f < k &&
          (f = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            k
          ));
        m < k && (m = k);
        m > f && (m = f);
        c.save();
        v && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(e.x1, e.y1, e.width, e.height);
        c.clip();
        v &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.clip());
        for (f = 0; f < a.dataSeriesIndexes.length; f++) {
          var w = a.dataSeriesIndexes[f],
            x = this.data[w],
            s = x.dataPoints;
          if (0 < s.length) {
            var z = 5 < m && x.bevelEnabled ? !0 : !1;
            c.strokeStyle = "#4572A7 ";
            for (k = 0; k < s.length; k++)
              if (
                ((b = s[k].x.getTime ? s[k].x.getTime() : s[k].x),
                !(
                  b < a.axisX.dataInfo.viewPortMin ||
                  b > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof s[k].y)
              ) {
                p = a.axisX.convertValueToPixel(b);
                p =
                  (p - (a.plotType.plotUnits.length * m) / 2 + a.index * m) <<
                  0;
                var u = (p + m) << 0,
                  t;
                if (
                  a.axisY.logarithmic ||
                  (a.axisY.scaleBreaks &&
                    0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                    0 < s[k].y)
                )
                  (d[b] = s[k].y + (d[b] ? d[b] : 0)),
                    0 < d[b] &&
                      ((t = h[b] ? h[b] : r),
                      (h[b] = l = a.axisY.convertValueToPixel(d[b])));
                else if (
                  a.axisY.scaleBreaks &&
                  0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                  0 >= s[k].y
                )
                  (n[b] = s[k].y + (n[b] ? n[b] : 0)),
                    (l = q[b] ? q[b] : r),
                    (q[b] = t = a.axisY.convertValueToPixel(n[b]));
                else if (
                  ((l = a.axisY.convertValueToPixel(s[k].y)), 0 <= s[k].y)
                ) {
                  var C = h[b] ? h[b] : 0;
                  t = r + C;
                  l += C;
                  h[b] = C + (l - t);
                } else
                  (C = q[b] ? q[b] : 0),
                    (t = l - C),
                    (l = r - C),
                    (q[b] = C + (l - t));
                b = s[k].color
                  ? s[k].color
                  : x._colorSet[k % x._colorSet.length];
                ba(
                  c,
                  a.axisY.reversed ? l : t,
                  p,
                  a.axisY.reversed ? t : l,
                  u,
                  b,
                  0,
                  null,
                  z,
                  !1,
                  !1,
                  !1,
                  x.fillOpacity
                );
                b = x.dataPointIds[k];
                this._eventManager.objectMap[b] = {
                  id: b,
                  objectType: "dataPoint",
                  dataSeriesIndex: w,
                  dataPointIndex: k,
                  x1: t,
                  y1: p,
                  x2: l,
                  y2: u,
                };
                b = U(b);
                v &&
                  ba(
                    this._eventManager.ghostCtx,
                    t,
                    p,
                    l,
                    u,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                (s[k].indexLabel ||
                  x.indexLabel ||
                  s[k].indexLabelFormatter ||
                  x.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "stackedBar",
                    dataPoint: s[k],
                    dataSeries: x,
                    point: { x: 0 <= s[k].y ? l : t, y: p + (u - p) / 2 },
                    direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: Math.min(t, l),
                      y1: p,
                      x2: Math.max(t, l),
                      y2: u,
                    },
                    color: b,
                  });
              }
          }
        }
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.xScaleAnimation,
          easingFunction: L.easing.easeOutQuart,
          animationBase:
            r < a.axisY.bounds.x1
              ? a.axisY.bounds.x1
              : r > a.axisY.bounds.x2
              ? a.axisY.bounds.x2
              : r,
        };
      }
    };
    m.prototype.renderStackedBar100 = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          e = this.plotArea,
          h = [],
          q = [],
          d = [],
          n = [],
          k = 0,
          l,
          p,
          r = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          k = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          f = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : (0.15 * this.height) << 0,
          m = a.axisX.dataInfo.minDiff;
        isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
        m = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((e.height *
                (a.axisX.logarithmic
                  ? Math.log(m) / Math.log(a.axisX.range)
                  : Math.abs(m) / Math.abs(a.axisX.range))) /
                a.plotType.plotUnits.length)) <<
            0;
        this.dataPointMaxWidth &&
          k > f &&
          (k = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            f
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          f < k &&
          (f = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            k
          ));
        m < k && (m = k);
        m > f && (m = f);
        c.save();
        v && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(e.x1, e.y1, e.width, e.height);
        c.clip();
        v &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.clip());
        for (f = 0; f < a.dataSeriesIndexes.length; f++) {
          var w = a.dataSeriesIndexes[f],
            x = this.data[w],
            s = x.dataPoints;
          if (0 < s.length) {
            var z = 5 < m && x.bevelEnabled ? !0 : !1;
            c.strokeStyle = "#4572A7 ";
            for (k = 0; k < s.length; k++)
              if (
                ((b = s[k].x.getTime ? s[k].x.getTime() : s[k].x),
                !(
                  b < a.axisX.dataInfo.viewPortMin ||
                  b > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof s[k].y)
              ) {
                p = a.axisX.convertValueToPixel(b);
                var u;
                u =
                  0 !== a.dataPointYSums[b]
                    ? 100 * (s[k].y / a.dataPointYSums[b])
                    : 0;
                p =
                  (p - (a.plotType.plotUnits.length * m) / 2 + a.index * m) <<
                  0;
                var t = (p + m) << 0;
                if (
                  a.axisY.logarithmic ||
                  (a.axisY.scaleBreaks &&
                    0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                    0 < s[k].y)
                ) {
                  d[b] = u + (d[b] ? d[b] : 0);
                  if (0 >= d[b]) continue;
                  u = h[b] ? h[b] : r;
                  h[b] = l = a.axisY.convertValueToPixel(d[b]);
                } else if (
                  a.axisY.scaleBreaks &&
                  0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                  0 >= s[k].y
                )
                  (n[b] = u + (n[b] ? n[b] : 0)),
                    (l = q[b] ? q[b] : r),
                    (q[b] = u = a.axisY.convertValueToPixel(n[b]));
                else if (((l = a.axisY.convertValueToPixel(u)), 0 <= s[k].y)) {
                  var C = h[b] ? h[b] : 0;
                  u = r + C;
                  l += C;
                  a.dataSeriesIndexes.length - 1 === f &&
                    1 >= Math.abs(e.x2 - l) &&
                    (l = e.x2);
                  h[b] = C + (l - u);
                } else
                  (C = q[b] ? q[b] : 0),
                    (u = l - C),
                    (l = r - C),
                    a.dataSeriesIndexes.length - 1 === f &&
                      1 >= Math.abs(e.x1 - u) &&
                      (u = e.x1),
                    (q[b] = C + (l - u));
                b = s[k].color
                  ? s[k].color
                  : x._colorSet[k % x._colorSet.length];
                ba(
                  c,
                  a.axisY.reversed ? l : u,
                  p,
                  a.axisY.reversed ? u : l,
                  t,
                  b,
                  0,
                  null,
                  z,
                  !1,
                  !1,
                  !1,
                  x.fillOpacity
                );
                b = x.dataPointIds[k];
                this._eventManager.objectMap[b] = {
                  id: b,
                  objectType: "dataPoint",
                  dataSeriesIndex: w,
                  dataPointIndex: k,
                  x1: u,
                  y1: p,
                  x2: l,
                  y2: t,
                };
                b = U(b);
                v &&
                  ba(
                    this._eventManager.ghostCtx,
                    u,
                    p,
                    l,
                    t,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                (s[k].indexLabel ||
                  x.indexLabel ||
                  s[k].indexLabelFormatter ||
                  x.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "stackedBar100",
                    dataPoint: s[k],
                    dataSeries: x,
                    point: { x: 0 <= s[k].y ? l : u, y: p + (t - p) / 2 },
                    direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: Math.min(u, l),
                      y1: p,
                      x2: Math.max(u, l),
                      y2: t,
                    },
                    color: b,
                  });
              }
          }
        }
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.xScaleAnimation,
          easingFunction: L.easing.easeOutQuart,
          animationBase:
            r < a.axisY.bounds.x1
              ? a.axisY.bounds.x1
              : r > a.axisY.bounds.x2
              ? a.axisY.bounds.x2
              : r,
        };
      }
    };
    m.prototype.renderArea = function (a) {
      var g, c;
      function b() {
        C &&
          (0 < f.lineThickness && h.stroke(),
          a.axisY.logarithmic ||
          (0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum)
            ? (t = u)
            : 0 > a.axisY.viewportMaximum
            ? (t = d.y1)
            : 0 < a.axisY.viewportMinimum && (t = u),
          h.lineTo(x, t),
          h.lineTo(C.x, t),
          h.closePath(),
          (h.globalAlpha = f.fillOpacity),
          h.fill(),
          (h.globalAlpha = 1),
          v && (q.lineTo(x, t), q.lineTo(C.x, t), q.closePath(), q.fill()),
          h.beginPath(),
          h.moveTo(x, s),
          q.beginPath(),
          q.moveTo(x, s),
          (C = { x: x, y: s }));
      }
      var e = a.targetCanvasCtx || this.plotArea.ctx,
        h = v ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var q = this._eventManager.ghostCtx,
          d = a.axisY.lineCoordinates,
          n = [],
          k = this.plotArea,
          l;
        h.save();
        v && q.save();
        h.beginPath();
        h.rect(k.x1, k.y1, k.width, k.height);
        h.clip();
        v && (q.beginPath(), q.rect(k.x1, k.y1, k.width, k.height), q.clip());
        for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
          var r = a.dataSeriesIndexes[p],
            f = this.data[r],
            m = f.dataPoints,
            n = f.id;
          this._eventManager.objectMap[n] = {
            objectType: "dataSeries",
            dataSeriesIndex: r,
          };
          n = U(n);
          q.fillStyle = n;
          n = [];
          g = !0;
          var w = 0,
            x,
            s,
            z,
            u = a.axisY.convertValueToPixel(
              a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
            ),
            t,
            C = null;
          if (0 < m.length) {
            var D = f._colorSet[w % f._colorSet.length],
              B = (f.lineColor = f.options.lineColor || D),
              A = B;
            h.fillStyle = D;
            h.strokeStyle = B;
            h.lineWidth = f.lineThickness;
            c = "solid";
            if (h.setLineDash) {
              var J = G(f.nullDataLineDashType, f.lineThickness);
              c = f.lineDashType;
              var K = G(c, f.lineThickness);
              h.setLineDash(K);
            }
            for (var aa = !0; w < m.length; w++)
              if (
                ((z = m[w].x.getTime ? m[w].x.getTime() : m[w].x),
                !(
                  z < a.axisX.dataInfo.viewPortMin ||
                  (z > a.axisX.dataInfo.viewPortMax &&
                    (!f.connectNullData || !aa))
                ))
              )
                if ("number" !== typeof m[w].y)
                  f.connectNullData || aa || g || b(), (aa = !0);
                else {
                  x = a.axisX.convertValueToPixel(z);
                  s = a.axisY.convertValueToPixel(m[w].y);
                  g || aa
                    ? (!g && f.connectNullData
                        ? (h.setLineDash &&
                            (f.options.nullDataLineDashType ||
                              (c === f.lineDashType &&
                                f.lineDashType !== f.nullDataLineDashType)) &&
                            ((g = x),
                            (c = s),
                            (x = l.x),
                            (s = l.y),
                            b(),
                            h.moveTo(l.x, l.y),
                            (x = g),
                            (s = c),
                            (C = l),
                            (c = f.nullDataLineDashType),
                            h.setLineDash(J)),
                          h.lineTo(x, s),
                          v && q.lineTo(x, s))
                        : (h.beginPath(),
                          h.moveTo(x, s),
                          v && (q.beginPath(), q.moveTo(x, s)),
                          (C = { x: x, y: s })),
                      (aa = g = !1))
                    : (h.lineTo(x, s),
                      v && q.lineTo(x, s),
                      0 == w % 250 && b());
                  l = { x: x, y: s };
                  w < m.length - 1 &&
                    (A !== (m[w].lineColor || B) ||
                      c !== (m[w].lineDashType || f.lineDashType)) &&
                    (b(),
                    (A = m[w].lineColor || B),
                    (h.strokeStyle = A),
                    h.setLineDash &&
                      (m[w].lineDashType
                        ? ((c = m[w].lineDashType),
                          h.setLineDash(G(c, f.lineThickness)))
                        : ((c = f.lineDashType), h.setLineDash(K))));
                  var Z = f.dataPointIds[w];
                  this._eventManager.objectMap[Z] = {
                    id: Z,
                    objectType: "dataPoint",
                    dataSeriesIndex: r,
                    dataPointIndex: w,
                    x1: x,
                    y1: s,
                  };
                  0 !== m[w].markerSize &&
                    (0 < m[w].markerSize || 0 < f.markerSize) &&
                    ((z = f.getMarkerProperties(w, x, s, h)),
                    n.push(z),
                    (Z = U(Z)),
                    v &&
                      n.push({
                        x: x,
                        y: s,
                        ctx: q,
                        type: z.type,
                        size: z.size,
                        color: Z,
                        borderColor: Z,
                        borderThickness: z.borderThickness,
                      }));
                  (m[w].indexLabel ||
                    f.indexLabel ||
                    m[w].indexLabelFormatter ||
                    f.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "area",
                      dataPoint: m[w],
                      dataSeries: f,
                      point: { x: x, y: s },
                      direction: 0 > m[w].y === a.axisY.reversed ? 1 : -1,
                      color: D,
                    });
                }
            b();
            X.drawMarkers(n);
          }
        }
        v &&
          (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (h.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          h.clearRect(k.x1, k.y1, k.width, k.height),
          this._eventManager.ghostCtx.restore());
        h.restore();
        return {
          source: e,
          dest: this.plotArea.ctx,
          animationCallback: L.xClipAnimation,
          easingFunction: L.easing.linear,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderSplineArea = function (a) {
      function g() {
        var c = t(z, 2);
        if (0 < c.length) {
          if (0 < l.lineThickness) {
            b.beginPath();
            b.moveTo(c[0].x, c[0].y);
            c[0].newStrokeStyle && (b.strokeStyle = c[0].newStrokeStyle);
            c[0].newLineDashArray && b.setLineDash(c[0].newLineDashArray);
            for (var f = 0; f < c.length - 3; f += 3)
              if (
                (b.bezierCurveTo(
                  c[f + 1].x,
                  c[f + 1].y,
                  c[f + 2].x,
                  c[f + 2].y,
                  c[f + 3].x,
                  c[f + 3].y
                ),
                v &&
                  e.bezierCurveTo(
                    c[f + 1].x,
                    c[f + 1].y,
                    c[f + 2].x,
                    c[f + 2].y,
                    c[f + 3].x,
                    c[f + 3].y
                  ),
                c[f + 3].newStrokeStyle || c[f + 3].newLineDashArray)
              )
                b.stroke(),
                  b.beginPath(),
                  b.moveTo(c[f + 3].x, c[f + 3].y),
                  c[f + 3].newStrokeStyle &&
                    (b.strokeStyle = c[f + 3].newStrokeStyle),
                  c[f + 3].newLineDashArray &&
                    b.setLineDash(c[f + 3].newLineDashArray);
            b.stroke();
          }
          b.beginPath();
          b.moveTo(c[0].x, c[0].y);
          v && (e.beginPath(), e.moveTo(c[0].x, c[0].y));
          for (f = 0; f < c.length - 3; f += 3)
            b.bezierCurveTo(
              c[f + 1].x,
              c[f + 1].y,
              c[f + 2].x,
              c[f + 2].y,
              c[f + 3].x,
              c[f + 3].y
            ),
              v &&
                e.bezierCurveTo(
                  c[f + 1].x,
                  c[f + 1].y,
                  c[f + 2].x,
                  c[f + 2].y,
                  c[f + 3].x,
                  c[f + 3].y
                );
          a.axisY.logarithmic ||
          (0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum)
            ? (x = w)
            : 0 > a.axisY.viewportMaximum
            ? (x = h.y1)
            : 0 < a.axisY.viewportMinimum && (x = w);
          s = { x: c[0].x, y: c[0].y };
          b.lineTo(c[c.length - 1].x, x);
          b.lineTo(s.x, x);
          b.closePath();
          b.globalAlpha = l.fillOpacity;
          b.fill();
          b.globalAlpha = 1;
          v &&
            (e.lineTo(c[c.length - 1].x, x),
            e.lineTo(s.x, x),
            e.closePath(),
            e.fill());
        }
      }
      var c = a.targetCanvasCtx || this.plotArea.ctx,
        b = v ? this._preRenderCtx : c;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var e = this._eventManager.ghostCtx,
          h = a.axisY.lineCoordinates,
          q = [],
          d = this.plotArea;
        b.save();
        v && e.save();
        b.beginPath();
        b.rect(d.x1, d.y1, d.width, d.height);
        b.clip();
        v && (e.beginPath(), e.rect(d.x1, d.y1, d.width, d.height), e.clip());
        for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
          var k = a.dataSeriesIndexes[n],
            l = this.data[k],
            p = l.dataPoints,
            q = l.id;
          this._eventManager.objectMap[q] = {
            objectType: "dataSeries",
            dataSeriesIndex: k,
          };
          q = U(q);
          e.fillStyle = q;
          var q = [],
            r = 0,
            f,
            m,
            w = a.axisY.convertValueToPixel(
              a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
            ),
            x,
            s = null,
            z = [];
          if (0 < p.length) {
            var u = l._colorSet[r % l._colorSet.length],
              B = (l.lineColor = l.options.lineColor || u),
              C = B;
            b.fillStyle = u;
            b.strokeStyle = B;
            b.lineWidth = l.lineThickness;
            var D = "solid";
            if (b.setLineDash) {
              var A = G(l.nullDataLineDashType, l.lineThickness),
                D = l.lineDashType,
                db = G(D, l.lineThickness);
              b.setLineDash(db);
            }
            for (m = !1; r < p.length; r++)
              if (
                ((f = p[r].x.getTime ? p[r].x.getTime() : p[r].x),
                !(
                  f < a.axisX.dataInfo.viewPortMin ||
                  (f > a.axisX.dataInfo.viewPortMax &&
                    (!l.connectNullData || !m))
                ))
              )
                if ("number" !== typeof p[r].y)
                  0 < r &&
                    !m &&
                    (l.connectNullData
                      ? b.setLineDash &&
                        0 < z.length &&
                        (l.options.nullDataLineDashType ||
                          !p[r - 1].lineDashType) &&
                        ((z[z.length - 1].newLineDashArray = A),
                        (D = l.nullDataLineDashType))
                      : (g(), (z = []))),
                    (m = !0);
                else {
                  f = a.axisX.convertValueToPixel(f);
                  m = a.axisY.convertValueToPixel(p[r].y);
                  var J = l.dataPointIds[r];
                  this._eventManager.objectMap[J] = {
                    id: J,
                    objectType: "dataPoint",
                    dataSeriesIndex: k,
                    dataPointIndex: r,
                    x1: f,
                    y1: m,
                  };
                  z[z.length] = { x: f, y: m };
                  r < p.length - 1 &&
                    (C !== (p[r].lineColor || B) ||
                      D !== (p[r].lineDashType || l.lineDashType)) &&
                    ((C = p[r].lineColor || B),
                    (z[z.length - 1].newStrokeStyle = C),
                    b.setLineDash &&
                      (p[r].lineDashType
                        ? ((D = p[r].lineDashType),
                          (z[z.length - 1].newLineDashArray = G(
                            D,
                            l.lineThickness
                          )))
                        : ((D = l.lineDashType),
                          (z[z.length - 1].newLineDashArray = db))));
                  if (
                    0 !== p[r].markerSize &&
                    (0 < p[r].markerSize || 0 < l.markerSize)
                  ) {
                    var K = l.getMarkerProperties(r, f, m, b);
                    q.push(K);
                    J = U(J);
                    v &&
                      q.push({
                        x: f,
                        y: m,
                        ctx: e,
                        type: K.type,
                        size: K.size,
                        color: J,
                        borderColor: J,
                        borderThickness: K.borderThickness,
                      });
                  }
                  (p[r].indexLabel ||
                    l.indexLabel ||
                    p[r].indexLabelFormatter ||
                    l.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "splineArea",
                      dataPoint: p[r],
                      dataSeries: l,
                      point: { x: f, y: m },
                      direction: 0 > p[r].y === a.axisY.reversed ? 1 : -1,
                      color: u,
                    });
                  m = !1;
                }
            g();
            X.drawMarkers(q);
          }
        }
        v &&
          (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (b.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          b.clearRect(d.x1, d.y1, d.width, d.height),
          this._eventManager.ghostCtx.restore());
        b.restore();
        return {
          source: c,
          dest: this.plotArea.ctx,
          animationCallback: L.xClipAnimation,
          easingFunction: L.easing.linear,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderStepArea = function (a) {
      var g, c;
      function b() {
        C &&
          (0 < f.lineThickness && h.stroke(),
          a.axisY.logarithmic ||
          (0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum)
            ? (t = u)
            : 0 > a.axisY.viewportMaximum
            ? (t = d.y1)
            : 0 < a.axisY.viewportMinimum && (t = u),
          h.lineTo(x, t),
          h.lineTo(C.x, t),
          h.closePath(),
          (h.globalAlpha = f.fillOpacity),
          h.fill(),
          (h.globalAlpha = 1),
          v && (q.lineTo(x, t), q.lineTo(C.x, t), q.closePath(), q.fill()),
          h.beginPath(),
          h.moveTo(x, s),
          q.beginPath(),
          q.moveTo(x, s),
          (C = { x: x, y: s }));
      }
      var e = a.targetCanvasCtx || this.plotArea.ctx,
        h = v ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var q = this._eventManager.ghostCtx,
          d = a.axisY.lineCoordinates,
          n = [],
          k = this.plotArea,
          l;
        h.save();
        v && q.save();
        h.beginPath();
        h.rect(k.x1, k.y1, k.width, k.height);
        h.clip();
        v && (q.beginPath(), q.rect(k.x1, k.y1, k.width, k.height), q.clip());
        for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
          var r = a.dataSeriesIndexes[p],
            f = this.data[r],
            m = f.dataPoints,
            n = f.id;
          this._eventManager.objectMap[n] = {
            objectType: "dataSeries",
            dataSeriesIndex: r,
          };
          n = U(n);
          q.fillStyle = n;
          n = [];
          g = !0;
          var w = 0,
            x,
            s,
            z,
            u = a.axisY.convertValueToPixel(
              a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
            ),
            t,
            C = null;
          c = !1;
          if (0 < m.length) {
            var D = f._colorSet[w % f._colorSet.length],
              B = (f.lineColor = f.options.lineColor || D),
              A = B;
            h.fillStyle = D;
            h.strokeStyle = B;
            h.lineWidth = f.lineThickness;
            var J = "solid";
            if (h.setLineDash) {
              var K = G(f.nullDataLineDashType, f.lineThickness),
                J = f.lineDashType,
                aa = G(J, f.lineThickness);
              h.setLineDash(aa);
            }
            for (; w < m.length; w++)
              if (
                ((z = m[w].x.getTime ? m[w].x.getTime() : m[w].x),
                !(
                  z < a.axisX.dataInfo.viewPortMin ||
                  (z > a.axisX.dataInfo.viewPortMax &&
                    (!f.connectNullData || !c))
                ))
              ) {
                var Z = s;
                "number" !== typeof m[w].y
                  ? (f.connectNullData || c || g || b(), (c = !0))
                  : ((x = a.axisX.convertValueToPixel(z)),
                    (s = a.axisY.convertValueToPixel(m[w].y)),
                    g || c
                      ? (!g && f.connectNullData
                          ? (h.setLineDash &&
                              (f.options.nullDataLineDashType ||
                                (J === f.lineDashType &&
                                  f.lineDashType !== f.nullDataLineDashType)) &&
                              ((g = x),
                              (c = s),
                              (x = l.x),
                              (s = l.y),
                              b(),
                              h.moveTo(l.x, l.y),
                              (x = g),
                              (s = c),
                              (C = l),
                              (J = f.nullDataLineDashType),
                              h.setLineDash(K)),
                            h.lineTo(x, Z),
                            h.lineTo(x, s),
                            v && (q.lineTo(x, Z), q.lineTo(x, s)))
                          : (h.beginPath(),
                            h.moveTo(x, s),
                            v && (q.beginPath(), q.moveTo(x, s)),
                            (C = { x: x, y: s })),
                        (c = g = !1))
                      : (h.lineTo(x, Z),
                        v && q.lineTo(x, Z),
                        h.lineTo(x, s),
                        v && q.lineTo(x, s),
                        0 == w % 250 && b()),
                    (l = { x: x, y: s }),
                    w < m.length - 1 &&
                      (A !== (m[w].lineColor || B) ||
                        J !== (m[w].lineDashType || f.lineDashType)) &&
                      (b(),
                      (A = m[w].lineColor || B),
                      (h.strokeStyle = A),
                      h.setLineDash &&
                        (m[w].lineDashType
                          ? ((J = m[w].lineDashType),
                            h.setLineDash(G(J, f.lineThickness)))
                          : ((J = f.lineDashType), h.setLineDash(aa)))),
                    (z = f.dataPointIds[w]),
                    (this._eventManager.objectMap[z] = {
                      id: z,
                      objectType: "dataPoint",
                      dataSeriesIndex: r,
                      dataPointIndex: w,
                      x1: x,
                      y1: s,
                    }),
                    0 !== m[w].markerSize &&
                      (0 < m[w].markerSize || 0 < f.markerSize) &&
                      ((Z = f.getMarkerProperties(w, x, s, h)),
                      n.push(Z),
                      (z = U(z)),
                      v &&
                        n.push({
                          x: x,
                          y: s,
                          ctx: q,
                          type: Z.type,
                          size: Z.size,
                          color: z,
                          borderColor: z,
                          borderThickness: Z.borderThickness,
                        })),
                    (m[w].indexLabel ||
                      f.indexLabel ||
                      m[w].indexLabelFormatter ||
                      f.indexLabelFormatter) &&
                      this._indexLabels.push({
                        chartType: "stepArea",
                        dataPoint: m[w],
                        dataSeries: f,
                        point: { x: x, y: s },
                        direction: 0 > m[w].y === a.axisY.reversed ? 1 : -1,
                        color: D,
                      }));
              }
            b();
            X.drawMarkers(n);
          }
        }
        v &&
          (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (h.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          h.clearRect(k.x1, k.y1, k.width, k.height),
          this._eventManager.ghostCtx.restore());
        h.restore();
        return {
          source: e,
          dest: this.plotArea.ctx,
          animationCallback: L.xClipAnimation,
          easingFunction: L.easing.linear,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderStackedArea = function (a) {
      function g() {
        if (!(1 > k.length)) {
          for (0 < D.lineThickness && b.stroke(); 0 < k.length; ) {
            var a = k.pop();
            b.lineTo(a.x, a.y);
            v && x.lineTo(a.x, a.y);
          }
          b.closePath();
          b.globalAlpha = D.fillOpacity;
          b.fill();
          b.globalAlpha = 1;
          b.beginPath();
          v && (x.closePath(), x.fill(), x.beginPath());
          k = [];
        }
      }
      var c = a.targetCanvasCtx || this.plotArea.ctx,
        b = v ? this._preRenderCtx : c;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var e = null,
          h = null,
          q = [],
          d = this.plotArea,
          n = [],
          k = [],
          l = [],
          p = [],
          r = 0,
          f,
          m,
          w = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          x = this._eventManager.ghostCtx,
          s,
          z,
          u;
        v && x.beginPath();
        b.save();
        v && x.save();
        b.beginPath();
        b.rect(d.x1, d.y1, d.width, d.height);
        b.clip();
        v && (x.beginPath(), x.rect(d.x1, d.y1, d.width, d.height), x.clip());
        for (var e = [], t = 0; t < a.dataSeriesIndexes.length; t++) {
          var C = a.dataSeriesIndexes[t],
            D = this.data[C],
            B = D.dataPoints;
          D.dataPointIndexes = [];
          for (r = 0; r < B.length; r++)
            (C = B[r].x.getTime ? B[r].x.getTime() : B[r].x),
              (D.dataPointIndexes[C] = r),
              e[C] || (l.push(C), (e[C] = !0));
          l.sort(Sa);
        }
        for (t = 0; t < a.dataSeriesIndexes.length; t++) {
          C = a.dataSeriesIndexes[t];
          D = this.data[C];
          B = D.dataPoints;
          z = !0;
          k = [];
          r = D.id;
          this._eventManager.objectMap[r] = {
            objectType: "dataSeries",
            dataSeriesIndex: C,
          };
          r = U(r);
          x.fillStyle = r;
          if (0 < l.length) {
            var e = D._colorSet[0],
              A = (D.lineColor = D.options.lineColor || e),
              J = A;
            b.fillStyle = e;
            b.strokeStyle = A;
            b.lineWidth = D.lineThickness;
            u = "solid";
            if (b.setLineDash) {
              var K = G(D.nullDataLineDashType, D.lineThickness);
              u = D.lineDashType;
              var aa = G(u, D.lineThickness);
              b.setLineDash(aa);
            }
            for (var Z = !0, r = 0; r < l.length; r++) {
              var h = l[r],
                ga = null,
                ga =
                  0 <= D.dataPointIndexes[h]
                    ? B[D.dataPointIndexes[h]]
                    : { x: h, y: null };
              if (
                !(
                  h < a.axisX.dataInfo.viewPortMin ||
                  (h > a.axisX.dataInfo.viewPortMax &&
                    (!D.connectNullData || !Z))
                )
              )
                if ("number" !== typeof ga.y)
                  D.connectNullData || Z || z || g(), (Z = !0);
                else {
                  f = a.axisX.convertValueToPixel(h);
                  var oa = n[h] ? n[h] : 0;
                  if (
                    a.axisY.logarithmic ||
                    (a.axisY.scaleBreaks &&
                      0 < a.axisY.scaleBreaks._appliedBreaks.length)
                  ) {
                    p[h] = ga.y + (p[h] ? p[h] : 0);
                    if (0 >= p[h] && a.axisY.logarithmic) continue;
                    m = a.axisY.convertValueToPixel(p[h]);
                  } else (m = a.axisY.convertValueToPixel(ga.y)), (m -= oa);
                  k.push({ x: f, y: w - oa });
                  n[h] = w - m;
                  z || Z
                    ? (!z && D.connectNullData
                        ? (b.setLineDash &&
                            (D.options.nullDataLineDashType ||
                              (u === D.lineDashType &&
                                D.lineDashType !== D.nullDataLineDashType)) &&
                            ((z = k.pop()),
                            (u = k[k.length - 1]),
                            g(),
                            b.moveTo(s.x, s.y),
                            k.push(u),
                            k.push(z),
                            (u = D.nullDataLineDashType),
                            b.setLineDash(K)),
                          b.lineTo(f, m),
                          v && x.lineTo(f, m))
                        : (b.beginPath(),
                          b.moveTo(f, m),
                          v && (x.beginPath(), x.moveTo(f, m))),
                      (Z = z = !1))
                    : (b.lineTo(f, m),
                      v && x.lineTo(f, m),
                      0 == r % 250 &&
                        (g(),
                        b.moveTo(f, m),
                        v && x.moveTo(f, m),
                        k.push({ x: f, y: w - oa })));
                  s = { x: f, y: m };
                  r < B.length - 1 &&
                    (J !== (B[r].lineColor || A) ||
                      u !== (B[r].lineDashType || D.lineDashType)) &&
                    (g(),
                    b.beginPath(),
                    b.moveTo(f, m),
                    k.push({ x: f, y: w - oa }),
                    (J = B[r].lineColor || A),
                    (b.strokeStyle = J),
                    b.setLineDash &&
                      (B[r].lineDashType
                        ? ((u = B[r].lineDashType),
                          b.setLineDash(G(u, D.lineThickness)))
                        : ((u = D.lineDashType), b.setLineDash(aa))));
                  if (0 <= D.dataPointIndexes[h]) {
                    var ka = D.dataPointIds[D.dataPointIndexes[h]];
                    this._eventManager.objectMap[ka] = {
                      id: ka,
                      objectType: "dataPoint",
                      dataSeriesIndex: C,
                      dataPointIndex: D.dataPointIndexes[h],
                      x1: f,
                      y1: m,
                    };
                  }
                  0 <= D.dataPointIndexes[h] &&
                    0 !== ga.markerSize &&
                    (0 < ga.markerSize || 0 < D.markerSize) &&
                    ((oa = D.getMarkerProperties(
                      D.dataPointIndexes[h],
                      f,
                      m,
                      b
                    )),
                    q.push(oa),
                    (h = U(ka)),
                    v &&
                      q.push({
                        x: f,
                        y: m,
                        ctx: x,
                        type: oa.type,
                        size: oa.size,
                        color: h,
                        borderColor: h,
                        borderThickness: oa.borderThickness,
                      }));
                  (ga.indexLabel ||
                    D.indexLabel ||
                    ga.indexLabelFormatter ||
                    D.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "stackedArea",
                      dataPoint: ga,
                      dataSeries: D,
                      point: { x: f, y: m },
                      direction: 0 > ga.y === a.axisY.reversed ? 1 : -1,
                      color: e,
                    });
                }
            }
            g();
            b.moveTo(f, m);
            v && x.moveTo(f, m);
          }
          delete D.dataPointIndexes;
        }
        X.drawMarkers(q);
        v &&
          (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (b.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          b.clearRect(d.x1, d.y1, d.width, d.height),
          x.restore());
        b.restore();
        return {
          source: c,
          dest: this.plotArea.ctx,
          animationCallback: L.xClipAnimation,
          easingFunction: L.easing.linear,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderStackedArea100 = function (a) {
      function g() {
        for (0 < D.lineThickness && b.stroke(); 0 < k.length; ) {
          var a = k.pop();
          b.lineTo(a.x, a.y);
          v && u.lineTo(a.x, a.y);
        }
        b.closePath();
        b.globalAlpha = D.fillOpacity;
        b.fill();
        b.globalAlpha = 1;
        b.beginPath();
        v && (u.closePath(), u.fill(), u.beginPath());
        k = [];
      }
      var c = a.targetCanvasCtx || this.plotArea.ctx,
        b = v ? this._preRenderCtx : c;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var e = null,
          h = null,
          q = this.plotArea,
          d = [],
          n = [],
          k = [],
          l = [],
          p = [],
          r = 0,
          f,
          m,
          w,
          x,
          s,
          z = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          u = this._eventManager.ghostCtx;
        b.save();
        v && u.save();
        b.beginPath();
        b.rect(q.x1, q.y1, q.width, q.height);
        b.clip();
        v && (u.beginPath(), u.rect(q.x1, q.y1, q.width, q.height), u.clip());
        for (var e = [], t = 0; t < a.dataSeriesIndexes.length; t++) {
          var C = a.dataSeriesIndexes[t],
            D = this.data[C],
            B = D.dataPoints;
          D.dataPointIndexes = [];
          for (r = 0; r < B.length; r++)
            (C = B[r].x.getTime ? B[r].x.getTime() : B[r].x),
              (D.dataPointIndexes[C] = r),
              e[C] || (l.push(C), (e[C] = !0));
          l.sort(Sa);
        }
        for (t = 0; t < a.dataSeriesIndexes.length; t++) {
          C = a.dataSeriesIndexes[t];
          D = this.data[C];
          B = D.dataPoints;
          x = !0;
          e = D.id;
          this._eventManager.objectMap[e] = {
            objectType: "dataSeries",
            dataSeriesIndex: C,
          };
          e = U(e);
          u.fillStyle = e;
          k = [];
          if (0 < l.length) {
            var e = D._colorSet[r % D._colorSet.length],
              A = (D.lineColor = D.options.lineColor || e),
              J = A;
            b.fillStyle = e;
            b.strokeStyle = A;
            b.lineWidth = D.lineThickness;
            s = "solid";
            if (b.setLineDash) {
              var K = G(D.nullDataLineDashType, D.lineThickness);
              s = D.lineDashType;
              var aa = G(s, D.lineThickness);
              b.setLineDash(aa);
            }
            for (var Z = !0, r = 0; r < l.length; r++) {
              var h = l[r],
                ga = null,
                ga =
                  0 <= D.dataPointIndexes[h]
                    ? B[D.dataPointIndexes[h]]
                    : { x: h, y: null };
              if (
                !(
                  h < a.axisX.dataInfo.viewPortMin ||
                  (h > a.axisX.dataInfo.viewPortMax &&
                    (!D.connectNullData || !Z))
                )
              )
                if ("number" !== typeof ga.y)
                  D.connectNullData || Z || x || g(), (Z = !0);
                else {
                  var oa;
                  oa =
                    0 !== a.dataPointYSums[h]
                      ? 100 * (ga.y / a.dataPointYSums[h])
                      : 0;
                  f = a.axisX.convertValueToPixel(h);
                  var ka = n[h] ? n[h] : 0;
                  if (
                    a.axisY.logarithmic ||
                    (a.axisY.scaleBreaks &&
                      0 < a.axisY.scaleBreaks._appliedBreaks.length)
                  ) {
                    p[h] = oa + (p[h] ? p[h] : 0);
                    if (0 >= p[h] && a.axisY.logarithmic) continue;
                    m = a.axisY.convertValueToPixel(p[h]);
                  } else (m = a.axisY.convertValueToPixel(oa)), (m -= ka);
                  k.push({ x: f, y: z - ka });
                  n[h] = z - m;
                  x || Z
                    ? (!x && D.connectNullData
                        ? (b.setLineDash &&
                            (D.options.nullDataLineDashType ||
                              (s === D.lineDashType &&
                                D.lineDashType !== D.nullDataLineDashType)) &&
                            ((x = k.pop()),
                            (s = k[k.length - 1]),
                            g(),
                            b.moveTo(w.x, w.y),
                            k.push(s),
                            k.push(x),
                            (s = D.nullDataLineDashType),
                            b.setLineDash(K)),
                          b.lineTo(f, m),
                          v && u.lineTo(f, m))
                        : (b.beginPath(),
                          b.moveTo(f, m),
                          v && (u.beginPath(), u.moveTo(f, m))),
                      (Z = x = !1))
                    : (b.lineTo(f, m),
                      v && u.lineTo(f, m),
                      0 == r % 250 &&
                        (g(),
                        b.moveTo(f, m),
                        v && u.moveTo(f, m),
                        k.push({ x: f, y: z - ka })));
                  w = { x: f, y: m };
                  r < B.length - 1 &&
                    (J !== (B[r].lineColor || A) ||
                      s !== (B[r].lineDashType || D.lineDashType)) &&
                    (g(),
                    b.beginPath(),
                    b.moveTo(f, m),
                    k.push({ x: f, y: z - ka }),
                    (J = B[r].lineColor || A),
                    (b.strokeStyle = J),
                    b.setLineDash &&
                      (B[r].lineDashType
                        ? ((s = B[r].lineDashType),
                          b.setLineDash(G(s, D.lineThickness)))
                        : ((s = D.lineDashType), b.setLineDash(aa))));
                  if (0 <= D.dataPointIndexes[h]) {
                    var E = D.dataPointIds[D.dataPointIndexes[h]];
                    this._eventManager.objectMap[E] = {
                      id: E,
                      objectType: "dataPoint",
                      dataSeriesIndex: C,
                      dataPointIndex: D.dataPointIndexes[h],
                      x1: f,
                      y1: m,
                    };
                  }
                  0 <= D.dataPointIndexes[h] &&
                    0 !== ga.markerSize &&
                    (0 < ga.markerSize || 0 < D.markerSize) &&
                    ((ka = D.getMarkerProperties(
                      D.dataPointIndexes[h],
                      f,
                      m,
                      b
                    )),
                    d.push(ka),
                    (h = U(E)),
                    v &&
                      d.push({
                        x: f,
                        y: m,
                        ctx: u,
                        type: ka.type,
                        size: ka.size,
                        color: h,
                        borderColor: h,
                        borderThickness: ka.borderThickness,
                      }));
                  (ga.indexLabel ||
                    D.indexLabel ||
                    ga.indexLabelFormatter ||
                    D.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "stackedArea100",
                      dataPoint: ga,
                      dataSeries: D,
                      point: { x: f, y: m },
                      direction: 0 > ga.y === a.axisY.reversed ? 1 : -1,
                      color: e,
                    });
                }
            }
            g();
            b.moveTo(f, m);
            v && u.moveTo(f, m);
          }
          delete D.dataPointIndexes;
        }
        X.drawMarkers(d);
        v &&
          (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (b.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          b.clearRect(q.x1, q.y1, q.width, q.height),
          u.restore());
        b.restore();
        return {
          source: c,
          dest: this.plotArea.ctx,
          animationCallback: L.xClipAnimation,
          easingFunction: L.easing.linear,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderBubble = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = this.plotArea,
          e = 0,
          h,
          q;
        c.save();
        v && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(b.x1, b.y1, b.width, b.height);
        c.clip();
        v &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height),
          this._eventManager.ghostCtx.clip());
        for (
          var d = -Infinity, n = Infinity, k = 0;
          k < a.dataSeriesIndexes.length;
          k++
        )
          for (
            var l = a.dataSeriesIndexes[k],
              p = this.data[l],
              r = p.dataPoints,
              f = 0,
              e = 0;
            e < r.length;
            e++
          )
            (h = r[e].getTime ? (h = r[e].x.getTime()) : (h = r[e].x)),
              h < a.axisX.dataInfo.viewPortMin ||
                h > a.axisX.dataInfo.viewPortMax ||
                "undefined" === typeof r[e].z ||
                ((f = r[e].z), f > d && (d = f), f < n && (n = f));
        for (
          var m = 25 * Math.PI,
            w = Math.max(
              Math.pow((0.25 * Math.min(b.height, b.width)) / 2, 2) * Math.PI,
              m
            ),
            k = 0;
          k < a.dataSeriesIndexes.length;
          k++
        )
          if (
            ((l = a.dataSeriesIndexes[k]),
            (p = this.data[l]),
            (r = p.dataPoints),
            0 < r.length)
          )
            for (c.strokeStyle = "#4572A7 ", e = 0; e < r.length; e++)
              if (
                ((h = r[e].getTime ? (h = r[e].x.getTime()) : (h = r[e].x)),
                !(
                  h < a.axisX.dataInfo.viewPortMin ||
                  h > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof r[e].y)
              ) {
                h = a.axisX.convertValueToPixel(h);
                q = a.axisY.convertValueToPixel(r[e].y);
                var f = r[e].z,
                  x =
                    2 *
                    Math.max(
                      Math.sqrt(
                        (d === n ? w / 2 : m + ((w - m) / (d - n)) * (f - n)) /
                          Math.PI
                      ) << 0,
                      1
                    ),
                  f = p.getMarkerProperties(e, c);
                f.size = x;
                c.globalAlpha = p.fillOpacity;
                X.drawMarker(
                  h,
                  q,
                  c,
                  f.type,
                  f.size,
                  f.color,
                  f.borderColor,
                  f.borderThickness
                );
                c.globalAlpha = 1;
                var s = p.dataPointIds[e];
                this._eventManager.objectMap[s] = {
                  id: s,
                  objectType: "dataPoint",
                  dataSeriesIndex: l,
                  dataPointIndex: e,
                  x1: h,
                  y1: q,
                  size: x,
                };
                x = U(s);
                v &&
                  X.drawMarker(
                    h,
                    q,
                    this._eventManager.ghostCtx,
                    f.type,
                    f.size,
                    x,
                    x,
                    f.borderThickness
                  );
                (r[e].indexLabel ||
                  p.indexLabel ||
                  r[e].indexLabelFormatter ||
                  p.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "bubble",
                    dataPoint: r[e],
                    dataSeries: p,
                    point: { x: h, y: q },
                    direction: 1,
                    bounds: {
                      x1: h - f.size / 2,
                      y1: q - f.size / 2,
                      x2: h + f.size / 2,
                      y2: q + f.size / 2,
                    },
                    color: null,
                  });
              }
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(b.x1, b.y1, b.width, b.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.fadeInAnimation,
          easingFunction: L.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderScatter = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = this.plotArea,
          e = 0,
          h,
          q;
        c.save();
        v && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(b.x1, b.y1, b.width, b.height);
        c.clip();
        v &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height),
          this._eventManager.ghostCtx.clip());
        for (var d = 0; d < a.dataSeriesIndexes.length; d++) {
          var n = a.dataSeriesIndexes[d],
            k = this.data[n],
            l = k.dataPoints;
          if (0 < l.length) {
            c.strokeStyle = "#4572A7 ";
            Math.pow((0.3 * Math.min(b.height, b.width)) / 2, 2);
            for (var p = 0, r = 0, e = 0; e < l.length; e++)
              if (
                ((h = l[e].getTime ? (h = l[e].x.getTime()) : (h = l[e].x)),
                !(
                  h < a.axisX.dataInfo.viewPortMin ||
                  h > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof l[e].y)
              ) {
                h = a.axisX.convertValueToPixel(h);
                q = a.axisY.convertValueToPixel(l[e].y);
                var f = k.getMarkerProperties(e, h, q, c);
                c.globalAlpha = k.fillOpacity;
                X.drawMarker(
                  f.x,
                  f.y,
                  f.ctx,
                  f.type,
                  f.size,
                  f.color,
                  f.borderColor,
                  f.borderThickness
                );
                c.globalAlpha = 1;
                (Math.sqrt((p - h) * (p - h) + (r - q) * (r - q)) <
                  Math.min(f.size, 5) &&
                  l.length >
                    Math.min(this.plotArea.width, this.plotArea.height)) ||
                  ((p = k.dataPointIds[e]),
                  (this._eventManager.objectMap[p] = {
                    id: p,
                    objectType: "dataPoint",
                    dataSeriesIndex: n,
                    dataPointIndex: e,
                    x1: h,
                    y1: q,
                  }),
                  (p = U(p)),
                  v &&
                    X.drawMarker(
                      f.x,
                      f.y,
                      this._eventManager.ghostCtx,
                      f.type,
                      f.size,
                      p,
                      p,
                      f.borderThickness
                    ),
                  (l[e].indexLabel ||
                    k.indexLabel ||
                    l[e].indexLabelFormatter ||
                    k.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "scatter",
                      dataPoint: l[e],
                      dataSeries: k,
                      point: { x: h, y: q },
                      direction: 1,
                      bounds: {
                        x1: h - f.size / 2,
                        y1: q - f.size / 2,
                        x2: h + f.size / 2,
                        y2: q + f.size / 2,
                      },
                      color: null,
                    }),
                  (p = h),
                  (r = q));
              }
          }
        }
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(b.x1, b.y1, b.width, b.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.fadeInAnimation,
          easingFunction: L.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderCandlestick = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g,
        b = this._eventManager.ghostCtx;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var e = null,
          h = null,
          q = this.plotArea,
          d = 0,
          m,
          k,
          l,
          p,
          r,
          f,
          e = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          h = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 0.015 * this.width,
          t = a.axisX.dataInfo.minDiff;
        isFinite(t) || (t = 0.3 * Math.abs(a.axisX.range));
        t = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.7 *
              q.width *
              (a.axisX.logarithmic
                ? Math.log(t) / Math.log(a.axisX.range)
                : Math.abs(t) / Math.abs(a.axisX.range))) <<
            0;
        this.dataPointMaxWidth &&
          e > h &&
          (e = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            h
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          h < e &&
          (h = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            e
          ));
        t < e && (t = e);
        t > h && (t = h);
        c.save();
        v && b.save();
        c.beginPath();
        c.rect(q.x1, q.y1, q.width, q.height);
        c.clip();
        v && (b.beginPath(), b.rect(q.x1, q.y1, q.width, q.height), b.clip());
        for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
          var x = a.dataSeriesIndexes[w],
            s = this.data[x],
            z = s.dataPoints;
          if (0 < z.length)
            for (
              var u = 5 < t && s.bevelEnabled ? !0 : !1, d = 0;
              d < z.length;
              d++
            )
              if (
                (z[d].getTime ? (f = z[d].x.getTime()) : (f = z[d].x),
                !(
                  f < a.axisX.dataInfo.viewPortMin ||
                  f > a.axisX.dataInfo.viewPortMax
                ) &&
                  !n(z[d].y) &&
                  z[d].y.length &&
                  "number" === typeof z[d].y[0] &&
                  "number" === typeof z[d].y[1] &&
                  "number" === typeof z[d].y[2] &&
                  "number" === typeof z[d].y[3])
              ) {
                m = a.axisX.convertValueToPixel(f);
                k = a.axisY.convertValueToPixel(z[d].y[0]);
                l = a.axisY.convertValueToPixel(z[d].y[1]);
                p = a.axisY.convertValueToPixel(z[d].y[2]);
                r = a.axisY.convertValueToPixel(z[d].y[3]);
                var B = (m - t / 2) << 0,
                  C = (B + t) << 0,
                  h = s.options.fallingColor ? s.fallingColor : s._colorSet[0],
                  e = z[d].color ? z[d].color : s._colorSet[0],
                  D = Math.round(Math.max(1, 0.15 * t)),
                  A = 0 === D % 2 ? 0 : 0.5,
                  G = s.dataPointIds[d];
                this._eventManager.objectMap[G] = {
                  id: G,
                  objectType: "dataPoint",
                  dataSeriesIndex: x,
                  dataPointIndex: d,
                  x1: B,
                  y1: k,
                  x2: C,
                  y2: l,
                  x3: m,
                  y3: p,
                  x4: m,
                  y4: r,
                  borderThickness: D,
                  color: e,
                };
                c.strokeStyle = e;
                c.beginPath();
                c.lineWidth = D;
                b.lineWidth = Math.max(D, 4);
                "candlestick" === s.type
                  ? (c.moveTo(m - A, l),
                    c.lineTo(m - A, Math.min(k, r)),
                    c.stroke(),
                    c.moveTo(m - A, Math.max(k, r)),
                    c.lineTo(m - A, p),
                    c.stroke(),
                    ba(
                      c,
                      B,
                      Math.min(k, r),
                      C,
                      Math.max(k, r),
                      z[d].y[0] <= z[d].y[3] ? s.risingColor : h,
                      D,
                      e,
                      u,
                      u,
                      !1,
                      !1,
                      s.fillOpacity
                    ),
                    v &&
                      ((e = U(G)),
                      (b.strokeStyle = e),
                      b.moveTo(m - A, l),
                      b.lineTo(m - A, Math.min(k, r)),
                      b.stroke(),
                      b.moveTo(m - A, Math.max(k, r)),
                      b.lineTo(m - A, p),
                      b.stroke(),
                      ba(
                        b,
                        B,
                        Math.min(k, r),
                        C,
                        Math.max(k, r),
                        e,
                        0,
                        null,
                        !1,
                        !1,
                        !1,
                        !1
                      )))
                  : "ohlc" === s.type &&
                    (c.moveTo(m - A, l),
                    c.lineTo(m - A, p),
                    c.stroke(),
                    c.beginPath(),
                    c.moveTo(m, k),
                    c.lineTo(B, k),
                    c.stroke(),
                    c.beginPath(),
                    c.moveTo(m, r),
                    c.lineTo(C, r),
                    c.stroke(),
                    v &&
                      ((e = U(G)),
                      (b.strokeStyle = e),
                      b.moveTo(m - A, l),
                      b.lineTo(m - A, p),
                      b.stroke(),
                      b.beginPath(),
                      b.moveTo(m, k),
                      b.lineTo(B, k),
                      b.stroke(),
                      b.beginPath(),
                      b.moveTo(m, r),
                      b.lineTo(C, r),
                      b.stroke()));
                (z[d].indexLabel ||
                  s.indexLabel ||
                  z[d].indexLabelFormatter ||
                  s.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: s.type,
                    dataPoint: z[d],
                    dataSeries: s,
                    point: { x: B + (C - B) / 2, y: a.axisY.reversed ? p : l },
                    direction: 1,
                    bounds: {
                      x1: B,
                      y1: Math.min(l, p),
                      x2: C,
                      y2: Math.max(l, p),
                    },
                    color: e,
                  });
              }
        }
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(q.x1, q.y1, q.width, q.height),
          b.restore());
        c.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.fadeInAnimation,
          easingFunction: L.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderBoxAndWhisker = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g,
        b = this._eventManager.ghostCtx;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var e = null,
          h = this.plotArea,
          q = 0,
          d,
          m,
          k,
          l,
          p,
          r,
          f,
          e = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          q = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 0.015 * this.width,
          t = a.axisX.dataInfo.minDiff;
        isFinite(t) || (t = 0.3 * Math.abs(a.axisX.range));
        t = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.7 *
              h.width *
              (a.axisX.logarithmic
                ? Math.log(t) / Math.log(a.axisX.range)
                : Math.abs(t) / Math.abs(a.axisX.range))) <<
            0;
        this.dataPointMaxWidth &&
          e > q &&
          (e = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            q
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          q < e &&
          (q = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            e
          ));
        t < e && (t = e);
        t > q && (t = q);
        c.save();
        v && b.save();
        c.beginPath();
        c.rect(h.x1, h.y1, h.width, h.height);
        c.clip();
        v && (b.beginPath(), b.rect(h.x1, h.y1, h.width, h.height), b.clip());
        for (
          var w = !1, w = !!a.axisY.reversed, x = 0;
          x < a.dataSeriesIndexes.length;
          x++
        ) {
          var s = a.dataSeriesIndexes[x],
            z = this.data[s],
            u = z.dataPoints;
          if (0 < u.length)
            for (
              var B = 5 < t && z.bevelEnabled ? !0 : !1, q = 0;
              q < u.length;
              q++
            )
              if (
                (u[q].getTime ? (f = u[q].x.getTime()) : (f = u[q].x),
                !(
                  f < a.axisX.dataInfo.viewPortMin ||
                  f > a.axisX.dataInfo.viewPortMax
                ) &&
                  !n(u[q].y) &&
                  u[q].y.length &&
                  "number" === typeof u[q].y[0] &&
                  "number" === typeof u[q].y[1] &&
                  "number" === typeof u[q].y[2] &&
                  "number" === typeof u[q].y[3] &&
                  "number" === typeof u[q].y[4] &&
                  5 === u[q].y.length)
              ) {
                d = a.axisX.convertValueToPixel(f);
                m = a.axisY.convertValueToPixel(u[q].y[0]);
                k = a.axisY.convertValueToPixel(u[q].y[1]);
                l = a.axisY.convertValueToPixel(u[q].y[2]);
                p = a.axisY.convertValueToPixel(u[q].y[3]);
                r = a.axisY.convertValueToPixel(u[q].y[4]);
                var C = (d - t / 2) << 0,
                  D = (d + t / 2) << 0,
                  e = u[q].color ? u[q].color : z._colorSet[0],
                  A = Math.round(Math.max(1, 0.15 * t)),
                  H = 0 === A % 2 ? 0 : 0.5,
                  J = u[q].whiskerColor
                    ? u[q].whiskerColor
                    : u[q].color
                    ? z.whiskerColor
                      ? z.whiskerColor
                      : u[q].color
                    : z.whiskerColor
                    ? z.whiskerColor
                    : e,
                  K =
                    "number" === typeof u[q].whiskerThickness
                      ? u[q].whiskerThickness
                      : "number" === typeof z.options.whiskerThickness
                      ? z.whiskerThickness
                      : A,
                  aa = u[q].whiskerDashType
                    ? u[q].whiskerDashType
                    : z.whiskerDashType,
                  Z = n(u[q].whiskerLength)
                    ? n(z.options.whiskerLength)
                      ? t
                      : z.whiskerLength
                    : u[q].whiskerLength,
                  Z =
                    "number" === typeof Z
                      ? 0 >= Z
                        ? 0
                        : Z >= t
                        ? t
                        : Z
                      : "string" === typeof Z
                      ? (parseInt(Z) * t) / 100 > t
                        ? t
                        : (parseInt(Z) * t) / 100
                      : t,
                  ga = 1 === Math.round(K) % 2 ? 0.5 : 0,
                  oa = u[q].stemColor
                    ? u[q].stemColor
                    : u[q].color
                    ? z.stemColor
                      ? z.stemColor
                      : u[q].color
                    : z.stemColor
                    ? z.stemColor
                    : e,
                  ka =
                    "number" === typeof u[q].stemThickness
                      ? u[q].stemThickness
                      : "number" === typeof z.options.stemThickness
                      ? z.stemThickness
                      : A,
                  E = 1 === Math.round(ka) % 2 ? 0.5 : 0,
                  M = u[q].stemDashType ? u[q].stemDashType : z.stemDashType,
                  Q = u[q].lineColor
                    ? u[q].lineColor
                    : u[q].color
                    ? z.lineColor
                      ? z.lineColor
                      : u[q].color
                    : z.lineColor
                    ? z.lineColor
                    : e,
                  N =
                    "number" === typeof u[q].lineThickness
                      ? u[q].lineThickness
                      : "number" === typeof z.options.lineThickness
                      ? z.lineThickness
                      : A,
                  S = u[q].lineDashType ? u[q].lineDashType : z.lineDashType,
                  O = 1 === Math.round(N) % 2 ? 0.5 : 0,
                  P = z.upperBoxColor,
                  pb = z.lowerBoxColor,
                  sa = n(z.options.fillOpacity) ? 1 : z.fillOpacity,
                  R = z.dataPointIds[q];
                this._eventManager.objectMap[R] = {
                  id: R,
                  objectType: "dataPoint",
                  dataSeriesIndex: s,
                  dataPointIndex: q,
                  x1: C,
                  y1: m,
                  x2: D,
                  y2: k,
                  x3: d,
                  y3: l,
                  x4: d,
                  y4: p,
                  y5: r,
                  borderThickness: A,
                  color: e,
                  stemThickness: ka,
                  stemColor: oa,
                  whiskerThickness: K,
                  whiskerLength: Z,
                  whiskerColor: J,
                  lineThickness: N,
                  lineColor: Q,
                };
                c.save();
                0 < ka &&
                  (c.beginPath(),
                  (c.strokeStyle = oa),
                  (c.lineWidth = ka),
                  c.setLineDash && c.setLineDash(G(M, ka)),
                  c.moveTo(d - E, k),
                  c.lineTo(d - E, m),
                  c.stroke(),
                  c.moveTo(d - E, p),
                  c.lineTo(d - E, l),
                  c.stroke());
                c.restore();
                b.lineWidth = Math.max(A, 4);
                c.beginPath();
                ba(
                  c,
                  C,
                  Math.min(r, k),
                  D,
                  Math.max(k, r),
                  pb,
                  0,
                  e,
                  w ? B : !1,
                  w ? !1 : B,
                  !1,
                  !1,
                  sa
                );
                c.beginPath();
                ba(
                  c,
                  C,
                  Math.min(l, r),
                  D,
                  Math.max(r, l),
                  P,
                  0,
                  e,
                  w ? !1 : B,
                  w ? B : !1,
                  !1,
                  !1,
                  sa
                );
                c.beginPath();
                c.lineWidth = A;
                c.strokeStyle = e;
                c.rect(
                  C - H,
                  Math.min(k, l) - H,
                  D - C + 2 * H,
                  Math.max(k, l) - Math.min(k, l) + 2 * H
                );
                c.stroke();
                c.save();
                0 < N &&
                  (c.beginPath(),
                  (c.globalAlpha = 1),
                  c.setLineDash && c.setLineDash(G(S, N)),
                  (c.strokeStyle = Q),
                  (c.lineWidth = N),
                  c.moveTo(C, r - O),
                  c.lineTo(D, r - O),
                  c.stroke());
                c.restore();
                c.save();
                0 < K &&
                  (c.beginPath(),
                  c.setLineDash && c.setLineDash(G(aa, K)),
                  (c.strokeStyle = J),
                  (c.lineWidth = K),
                  c.moveTo((d - Z / 2) << 0, p - ga),
                  c.lineTo((d + Z / 2) << 0, p - ga),
                  c.stroke(),
                  c.moveTo((d - Z / 2) << 0, m + ga),
                  c.lineTo((d + Z / 2) << 0, m + ga),
                  c.stroke());
                c.restore();
                v &&
                  ((e = U(R)),
                  (b.strokeStyle = e),
                  (b.lineWidth = ka),
                  0 < ka &&
                    (b.moveTo(d - H - E, k),
                    b.lineTo(d - H - E, Math.max(m, p)),
                    b.stroke(),
                    b.moveTo(d - H - E, Math.min(m, p)),
                    b.lineTo(d - H - E, l),
                    b.stroke()),
                  ba(
                    b,
                    C,
                    Math.max(k, l),
                    D,
                    Math.min(k, l),
                    e,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  ),
                  0 < K &&
                    (b.beginPath(),
                    (b.lineWidth = K),
                    b.moveTo(d + Z / 2, p - ga),
                    b.lineTo(d - Z / 2, p - ga),
                    b.stroke(),
                    b.moveTo(d + Z / 2, m + ga),
                    b.lineTo(d - Z / 2, m + ga),
                    b.stroke()));
                (u[q].indexLabel ||
                  z.indexLabel ||
                  u[q].indexLabelFormatter ||
                  z.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: z.type,
                    dataPoint: u[q],
                    dataSeries: z,
                    point: { x: C + (D - C) / 2, y: a.axisY.reversed ? m : p },
                    direction: 1,
                    bounds: {
                      x1: C,
                      y1: Math.min(m, p),
                      x2: D,
                      y2: Math.max(m, p),
                    },
                    color: e,
                  });
              }
        }
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(h.x1, h.y1, h.width, h.height),
          b.restore());
        c.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.fadeInAnimation,
          easingFunction: L.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderRangeColumn = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          e = this.plotArea,
          h = 0,
          q,
          d,
          m,
          h = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1;
        q = this.options.dataPointMaxWidth
          ? this.dataPointMaxWidth
          : this.options.dataPointWidth
          ? this.dataPointWidth
          : 0.03 * this.width;
        var k = a.axisX.dataInfo.minDiff;
        isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
        k = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((e.width *
                (a.axisX.logarithmic
                  ? Math.log(k) / Math.log(a.axisX.range)
                  : Math.abs(k) / Math.abs(a.axisX.range))) /
                a.plotType.totalDataSeries)) <<
            0;
        this.dataPointMaxWidth &&
          h > q &&
          (h = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            q
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          q < h &&
          (q = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            h
          ));
        k < h && (k = h);
        k > q && (k = q);
        c.save();
        v && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(e.x1, e.y1, e.width, e.height);
        c.clip();
        v &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.clip());
        for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
          var p = a.dataSeriesIndexes[l],
            r = this.data[p],
            f = r.dataPoints;
          if (0 < f.length)
            for (
              var t = 5 < k && r.bevelEnabled ? !0 : !1, h = 0;
              h < f.length;
              h++
            )
              if (
                (f[h].getTime ? (m = f[h].x.getTime()) : (m = f[h].x),
                !(
                  m < a.axisX.dataInfo.viewPortMin ||
                  m > a.axisX.dataInfo.viewPortMax
                ) &&
                  !n(f[h].y) &&
                  f[h].y.length &&
                  "number" === typeof f[h].y[0] &&
                  "number" === typeof f[h].y[1])
              ) {
                b = a.axisX.convertValueToPixel(m);
                q = a.axisY.convertValueToPixel(f[h].y[0]);
                d = a.axisY.convertValueToPixel(f[h].y[1]);
                var w = a.axisX.reversed
                    ? (b +
                        (a.plotType.totalDataSeries * k) / 2 -
                        (a.previousDataSeriesCount + l) * k) <<
                      0
                    : (b -
                        (a.plotType.totalDataSeries * k) / 2 +
                        (a.previousDataSeriesCount + l) * k) <<
                      0,
                  x = a.axisX.reversed ? (w - k) << 0 : (w + k) << 0,
                  b = f[h].color
                    ? f[h].color
                    : r._colorSet[h % r._colorSet.length];
                if (q > d) {
                  var s = q;
                  q = d;
                  d = s;
                }
                s = r.dataPointIds[h];
                this._eventManager.objectMap[s] = {
                  id: s,
                  objectType: "dataPoint",
                  dataSeriesIndex: p,
                  dataPointIndex: h,
                  x1: w,
                  y1: q,
                  x2: x,
                  y2: d,
                };
                ba(
                  c,
                  a.axisX.reversed ? x : w,
                  q,
                  a.axisX.reversed ? w : x,
                  d,
                  b,
                  0,
                  b,
                  t,
                  t,
                  !1,
                  !1,
                  r.fillOpacity
                );
                b = U(s);
                v &&
                  ba(
                    this._eventManager.ghostCtx,
                    a.axisX.reversed ? x : w,
                    q,
                    a.axisX.reversed ? w : x,
                    d,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                if (
                  f[h].indexLabel ||
                  r.indexLabel ||
                  f[h].indexLabelFormatter ||
                  r.indexLabelFormatter
                )
                  this._indexLabels.push({
                    chartType: "rangeColumn",
                    dataPoint: f[h],
                    dataSeries: r,
                    indexKeyword: 0,
                    point: {
                      x: w + (x - w) / 2,
                      y: f[h].y[1] >= f[h].y[0] ? d : q,
                    },
                    direction: f[h].y[1] >= f[h].y[0] ? -1 : 1,
                    bounds: {
                      x1: w,
                      y1: Math.min(q, d),
                      x2: x,
                      y2: Math.max(q, d),
                    },
                    color: b,
                  }),
                    this._indexLabels.push({
                      chartType: "rangeColumn",
                      dataPoint: f[h],
                      dataSeries: r,
                      indexKeyword: 1,
                      point: {
                        x: w + (x - w) / 2,
                        y: f[h].y[1] >= f[h].y[0] ? q : d,
                      },
                      direction: f[h].y[1] >= f[h].y[0] ? 1 : -1,
                      bounds: {
                        x1: w,
                        y1: Math.min(q, d),
                        x2: x,
                        y2: Math.max(q, d),
                      },
                      color: b,
                    });
              }
        }
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.fadeInAnimation,
          easingFunction: L.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderError = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g,
        b = a.axisY._position
          ? "left" === a.axisY._position || "right" === a.axisY._position
            ? !1
            : !0
          : !1;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var e = null,
          h = !1,
          q = this.plotArea,
          d = 0,
          m,
          k,
          l,
          p,
          r,
          f,
          t,
          w = a.axisX.dataInfo.minDiff;
        isFinite(w) || (w = 0.3 * Math.abs(a.axisX.range));
        c.save();
        v && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(q.x1, q.y1, q.width, q.height);
        c.clip();
        v &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(q.x1, q.y1, q.width, q.height),
          this._eventManager.ghostCtx.clip());
        for (var x = 0, s = 0; s < this.data.length; s++)
          !this.data[s].type.match(/(bar|column)/gi) ||
            !this.data[s].visible ||
            (this.data[s].type.match(/(stacked)/gi) && x) ||
            x++;
        for (var z = 0; z < a.dataSeriesIndexes.length; z++) {
          var u = a.dataSeriesIndexes[z],
            A = this.data[u],
            C = A.dataPoints,
            D = n(A._linkedSeries)
              ? !1
              : A._linkedSeries.type.match(/(bar|column)/gi) &&
                A._linkedSeries.visible
              ? !0
              : !1,
            G = 0;
          if (D)
            for (e = A._linkedSeries.id, s = 0; s < e; s++)
              !this.data[s].type.match(/(bar|column)/gi) ||
                !this.data[s].visible ||
                (this.data[s].type.match(/(stacked)/gi) && G) ||
                (this.data[s].type.match(/(range)/gi) && (h = !0), G++);
          e = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1;
          d = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : b
            ? Math.min(
                0.15 * this.height,
                0.9 * (this.plotArea.height / (D ? x : 1))
              ) << 0
            : 0.3 * this.width;
          h &&
            (d = this.options.dataPointMaxWidth
              ? this.dataPointMaxWidth
              : this.options.dataPointWidth
              ? this.dataPointWidth
              : b
              ? Math.min(
                  0.15 * this.height,
                  0.9 * (this.plotArea.height / (D ? x : 1))
                ) << 0
              : 0.03 * this.width);
          s = this.options.dataPointWidth
            ? this.dataPointWidth
            : (0.9 *
                (((b ? q.height : q.width) *
                  (a.axisX.logarithmic
                    ? Math.log(w) / Math.log(a.axisX.range)
                    : Math.abs(w) / Math.abs(a.axisX.range))) /
                  (D ? x : 1))) <<
              0;
          this.dataPointMaxWidth &&
            e > d &&
            (e = Math.min(
              this.options.dataPointWidth ? this.dataPointWidth : Infinity,
              d
            ));
          !this.dataPointMaxWidth &&
            this.dataPointMinWidth &&
            d < e &&
            (d = Math.max(
              this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
              e
            ));
          s < e && (s = e);
          s > d && (s = d);
          if (0 < C.length)
            for (var H = A._colorSet, d = 0; d < C.length; d++) {
              var e = (A.lineColor = A.options.color ? A.options.color : H[0]),
                J = {
                  color: C[d].whiskerColor
                    ? C[d].whiskerColor
                    : C[d].color
                    ? A.whiskerColor
                      ? A.whiskerColor
                      : C[d].color
                    : A.whiskerColor
                    ? A.whiskerColor
                    : e,
                  thickness: n(C[d].whiskerThickness)
                    ? A.whiskerThickness
                    : C[d].whiskerThickness,
                  dashType: C[d].whiskerDashType
                    ? C[d].whiskerDashType
                    : A.whiskerDashType,
                  length: n(C[d].whiskerLength)
                    ? n(A.options.whiskerLength)
                      ? s
                      : A.options.whiskerLength
                    : C[d].whiskerLength,
                  trimLength: n(C[d].whiskerLength)
                    ? n(A.options.whiskerLength)
                      ? 50
                      : 0
                    : 0,
                };
              J.length =
                "number" === typeof J.length
                  ? 0 >= J.length
                    ? 0
                    : J.length >= s
                    ? s
                    : J.length
                  : "string" === typeof J.length
                  ? (parseInt(J.length) * s) / 100 > s
                    ? s
                    : (parseInt(J.length) * s) / 100 > s
                  : s;
              J.thickness =
                "number" === typeof J.thickness
                  ? 0 > J.thickness
                    ? 0
                    : Math.round(J.thickness)
                  : 2;
              var K = {
                color: C[d].stemColor
                  ? C[d].stemColor
                  : C[d].color
                  ? A.stemColor
                    ? A.stemColor
                    : C[d].color
                  : A.stemColor
                  ? A.stemColor
                  : e,
                thickness: C[d].stemThickness
                  ? C[d].stemThickness
                  : A.stemThickness,
                dashType: C[d].stemDashType
                  ? C[d].stemDashType
                  : A.stemDashType,
              };
              K.thickness =
                "number" === typeof K.thickness
                  ? 0 > K.thickness
                    ? 0
                    : Math.round(K.thickness)
                  : 2;
              C[d].getTime ? (t = C[d].x.getTime()) : (t = C[d].x);
              if (
                !(
                  t < a.axisX.dataInfo.viewPortMin ||
                  t > a.axisX.dataInfo.viewPortMax
                ) &&
                !n(C[d].y) &&
                C[d].y.length &&
                "number" === typeof C[d].y[0] &&
                "number" === typeof C[d].y[1]
              ) {
                var aa = a.axisX.convertValueToPixel(t);
                b ? (k = aa) : (m = aa);
                aa = a.axisY.convertValueToPixel(C[d].y[0]);
                b ? (l = aa) : (r = aa);
                aa = a.axisY.convertValueToPixel(C[d].y[1]);
                b ? (p = aa) : (f = aa);
                b
                  ? ((r = a.axisX.reversed
                      ? (k + ((D ? x : 1) * s) / 2 - (D ? G - 1 : 0) * s) << 0
                      : (k - ((D ? x : 1) * s) / 2 + (D ? G - 1 : 0) * s) << 0),
                    (f = a.axisX.reversed ? (r - s) << 0 : (r + s) << 0))
                  : ((l = a.axisX.reversed
                      ? (m + ((D ? x : 1) * s) / 2 - (D ? G - 1 : 0) * s) << 0
                      : (m - ((D ? x : 1) * s) / 2 + (D ? G - 1 : 0) * s) << 0),
                    (p = a.axisX.reversed ? (l - s) << 0 : (l + s) << 0));
                !b && r > f && ((aa = r), (r = f), (f = aa));
                b && l > p && ((aa = l), (l = p), (p = aa));
                aa = A.dataPointIds[d];
                this._eventManager.objectMap[aa] = {
                  id: aa,
                  objectType: "dataPoint",
                  dataSeriesIndex: u,
                  dataPointIndex: d,
                  x1: Math.min(l, p),
                  y1: Math.min(r, f),
                  x2: Math.max(p, l),
                  y2: Math.max(f, r),
                  isXYSwapped: b,
                  stemProperties: K,
                  whiskerProperties: J,
                };
                B(
                  c,
                  Math.min(l, p),
                  Math.min(r, f),
                  Math.max(p, l),
                  Math.max(f, r),
                  e,
                  J,
                  K,
                  b
                );
                v && B(this._eventManager.ghostCtx, l, r, p, f, e, J, K, b);
                if (
                  C[d].indexLabel ||
                  A.indexLabel ||
                  C[d].indexLabelFormatter ||
                  A.indexLabelFormatter
                )
                  this._indexLabels.push({
                    chartType: "error",
                    dataPoint: C[d],
                    dataSeries: A,
                    indexKeyword: 0,
                    point: {
                      x: b ? (C[d].y[1] >= C[d].y[0] ? l : p) : l + (p - l) / 2,
                      y: b ? r + (f - r) / 2 : C[d].y[1] >= C[d].y[0] ? f : r,
                    },
                    direction: C[d].y[1] >= C[d].y[0] ? -1 : 1,
                    bounds: {
                      x1: b ? Math.min(l, p) : l,
                      y1: b ? r : Math.min(r, f),
                      x2: b ? Math.max(l, p) : p,
                      y2: b ? f : Math.max(r, f),
                    },
                    color: e,
                    axisSwapped: b,
                  }),
                    this._indexLabels.push({
                      chartType: "error",
                      dataPoint: C[d],
                      dataSeries: A,
                      indexKeyword: 1,
                      point: {
                        x: b
                          ? C[d].y[1] >= C[d].y[0]
                            ? p
                            : l
                          : l + (p - l) / 2,
                        y: b ? r + (f - r) / 2 : C[d].y[1] >= C[d].y[0] ? r : f,
                      },
                      direction: C[d].y[1] >= C[d].y[0] ? 1 : -1,
                      bounds: {
                        x1: b ? Math.min(l, p) : l,
                        y1: b ? r : Math.min(r, f),
                        x2: b ? Math.max(l, p) : p,
                        y2: b ? f : Math.max(r, f),
                      },
                      color: e,
                      axisSwapped: b,
                    });
              }
            }
        }
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(q.x1, q.y1, q.width, q.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.fadeInAnimation,
          easingFunction: L.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderRangeBar = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          e = this.plotArea,
          h = 0,
          q,
          d,
          m,
          k,
          h = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1;
        q = this.options.dataPointMaxWidth
          ? this.dataPointMaxWidth
          : this.options.dataPointWidth
          ? this.dataPointWidth
          : Math.min(
              0.15 * this.height,
              0.9 * (this.plotArea.height / a.plotType.totalDataSeries)
            ) << 0;
        var l = a.axisX.dataInfo.minDiff;
        isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
        l = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((e.height *
                (a.axisX.logarithmic
                  ? Math.log(l) / Math.log(a.axisX.range)
                  : Math.abs(l) / Math.abs(a.axisX.range))) /
                a.plotType.totalDataSeries)) <<
            0;
        this.dataPointMaxWidth &&
          h > q &&
          (h = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            q
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          q < h &&
          (q = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            h
          ));
        l < h && (l = h);
        l > q && (l = q);
        c.save();
        v && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(e.x1, e.y1, e.width, e.height);
        c.clip();
        v &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.clip());
        for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
          var r = a.dataSeriesIndexes[p],
            f = this.data[r],
            t = f.dataPoints;
          if (0 < t.length) {
            var w = 5 < l && f.bevelEnabled ? !0 : !1;
            c.strokeStyle = "#4572A7 ";
            for (h = 0; h < t.length; h++)
              if (
                (t[h].getTime ? (k = t[h].x.getTime()) : (k = t[h].x),
                !(
                  k < a.axisX.dataInfo.viewPortMin ||
                  k > a.axisX.dataInfo.viewPortMax
                ) &&
                  !n(t[h].y) &&
                  t[h].y.length &&
                  "number" === typeof t[h].y[0] &&
                  "number" === typeof t[h].y[1])
              ) {
                q = a.axisY.convertValueToPixel(t[h].y[0]);
                d = a.axisY.convertValueToPixel(t[h].y[1]);
                m = a.axisX.convertValueToPixel(k);
                m = a.axisX.reversed
                  ? (m +
                      (a.plotType.totalDataSeries * l) / 2 -
                      (a.previousDataSeriesCount + p) * l) <<
                    0
                  : (m -
                      (a.plotType.totalDataSeries * l) / 2 +
                      (a.previousDataSeriesCount + p) * l) <<
                    0;
                var x = a.axisX.reversed ? (m - l) << 0 : (m + l) << 0;
                q > d && ((b = q), (q = d), (d = b));
                b = t[h].color
                  ? t[h].color
                  : f._colorSet[h % f._colorSet.length];
                ba(
                  c,
                  q,
                  a.axisX.reversed ? x : m,
                  d,
                  a.axisX.reversed ? m : x,
                  b,
                  0,
                  null,
                  w,
                  !1,
                  !1,
                  !1,
                  f.fillOpacity
                );
                b = f.dataPointIds[h];
                this._eventManager.objectMap[b] = {
                  id: b,
                  objectType: "dataPoint",
                  dataSeriesIndex: r,
                  dataPointIndex: h,
                  x1: q,
                  y1: m,
                  x2: d,
                  y2: x,
                };
                b = U(b);
                v &&
                  ba(
                    this._eventManager.ghostCtx,
                    q,
                    a.axisX.reversed ? x : m,
                    d,
                    a.axisX.reversed ? m : x,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                if (
                  t[h].indexLabel ||
                  f.indexLabel ||
                  t[h].indexLabelFormatter ||
                  f.indexLabelFormatter
                )
                  this._indexLabels.push({
                    chartType: "rangeBar",
                    dataPoint: t[h],
                    dataSeries: f,
                    indexKeyword: 0,
                    point: {
                      x: t[h].y[1] >= t[h].y[0] ? q : d,
                      y: m + (x - m) / 2,
                    },
                    direction: t[h].y[1] >= t[h].y[0] ? -1 : 1,
                    bounds: {
                      x1: Math.min(q, d),
                      y1: m,
                      x2: Math.max(q, d),
                      y2: x,
                    },
                    color: b,
                  }),
                    this._indexLabels.push({
                      chartType: "rangeBar",
                      dataPoint: t[h],
                      dataSeries: f,
                      indexKeyword: 1,
                      point: {
                        x: t[h].y[1] >= t[h].y[0] ? d : q,
                        y: m + (x - m) / 2,
                      },
                      direction: t[h].y[1] >= t[h].y[0] ? 1 : -1,
                      bounds: {
                        x1: Math.min(q, d),
                        y1: m,
                        x2: Math.max(q, d),
                        y2: x,
                      },
                      color: b,
                    });
              }
          }
        }
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(e.x1, e.y1, e.width, e.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.fadeInAnimation,
          easingFunction: L.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderRangeArea = function (a) {
      function g() {
        if (z) {
          for (var a = null, c = n.length - 1; 0 <= c; c--)
            (a = n[c]), b.lineTo(a.x, a.y2), e.lineTo(a.x, a.y2);
          b.closePath();
          b.globalAlpha = l.fillOpacity;
          b.fill();
          b.globalAlpha = 1;
          e.fill();
          if (0 < l.lineThickness) {
            b.beginPath();
            b.moveTo(a.x, a.y2);
            for (c = 0; c < n.length; c++) (a = n[c]), b.lineTo(a.x, a.y2);
            b.moveTo(n[0].x, n[0].y1);
            for (c = 0; c < n.length; c++) (a = n[c]), b.lineTo(a.x, a.y1);
            b.stroke();
          }
          b.beginPath();
          b.moveTo(m, w);
          e.beginPath();
          e.moveTo(m, w);
          z = { x: m, y: w };
          n = [];
          n.push({ x: m, y1: w, y2: x });
        }
      }
      var c = a.targetCanvasCtx || this.plotArea.ctx,
        b = v ? this._preRenderCtx : c;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var e = this._eventManager.ghostCtx,
          h = [],
          q = this.plotArea;
        b.save();
        v && e.save();
        b.beginPath();
        b.rect(q.x1, q.y1, q.width, q.height);
        b.clip();
        v && (e.beginPath(), e.rect(q.x1, q.y1, q.width, q.height), e.clip());
        for (var d = 0; d < a.dataSeriesIndexes.length; d++) {
          var n = [],
            k = a.dataSeriesIndexes[d],
            l = this.data[k],
            p = l.dataPoints,
            h = l.id;
          this._eventManager.objectMap[h] = {
            objectType: "dataSeries",
            dataSeriesIndex: k,
          };
          h = U(h);
          e.fillStyle = h;
          var h = [],
            r = !0,
            f = 0,
            m,
            w,
            x,
            s,
            z = null;
          if (0 < p.length) {
            var u = l._colorSet[f % l._colorSet.length],
              t = (l.lineColor = l.options.lineColor || u),
              C = t;
            b.fillStyle = u;
            b.strokeStyle = t;
            b.lineWidth = l.lineThickness;
            var D = "solid";
            if (b.setLineDash) {
              var B = G(l.nullDataLineDashType, l.lineThickness),
                D = l.lineDashType,
                A = G(D, l.lineThickness);
              b.setLineDash(A);
            }
            for (var J = !0; f < p.length; f++)
              if (
                ((s = p[f].x.getTime ? p[f].x.getTime() : p[f].x),
                !(
                  s < a.axisX.dataInfo.viewPortMin ||
                  (s > a.axisX.dataInfo.viewPortMax &&
                    (!l.connectNullData || !J))
                ))
              )
                if (
                  null !== p[f].y &&
                  p[f].y.length &&
                  "number" === typeof p[f].y[0] &&
                  "number" === typeof p[f].y[1]
                ) {
                  m = a.axisX.convertValueToPixel(s);
                  w = a.axisY.convertValueToPixel(p[f].y[0]);
                  x = a.axisY.convertValueToPixel(p[f].y[1]);
                  r || J
                    ? (l.connectNullData && !r
                        ? (b.setLineDash &&
                            (l.options.nullDataLineDashType ||
                              (D === l.lineDashType &&
                                l.lineDashType !== l.nullDataLineDashType)) &&
                            ((n[n.length - 1].newLineDashArray = A),
                            (D = l.nullDataLineDashType),
                            b.setLineDash(B)),
                          b.lineTo(m, w),
                          v && e.lineTo(m, w),
                          n.push({ x: m, y1: w, y2: x }))
                        : (b.beginPath(),
                          b.moveTo(m, w),
                          (z = { x: m, y: w }),
                          (n = []),
                          n.push({ x: m, y1: w, y2: x }),
                          v && (e.beginPath(), e.moveTo(m, w))),
                      (J = r = !1))
                    : (b.lineTo(m, w),
                      n.push({ x: m, y1: w, y2: x }),
                      v && e.lineTo(m, w),
                      0 == f % 250 && g());
                  s = l.dataPointIds[f];
                  this._eventManager.objectMap[s] = {
                    id: s,
                    objectType: "dataPoint",
                    dataSeriesIndex: k,
                    dataPointIndex: f,
                    x1: m,
                    y1: w,
                    y2: x,
                  };
                  f < p.length - 1 &&
                    (C !== (p[f].lineColor || t) ||
                      D !== (p[f].lineDashType || l.lineDashType)) &&
                    (g(),
                    (C = p[f].lineColor || t),
                    (n[n.length - 1].newStrokeStyle = C),
                    (b.strokeStyle = C),
                    b.setLineDash &&
                      (p[f].lineDashType
                        ? ((D = p[f].lineDashType),
                          (n[n.length - 1].newLineDashArray = G(
                            D,
                            l.lineThickness
                          )),
                          b.setLineDash(n[n.length - 1].newLineDashArray))
                        : ((D = l.lineDashType),
                          (n[n.length - 1].newLineDashArray = A),
                          b.setLineDash(A))));
                  if (
                    0 !== p[f].markerSize &&
                    (0 < p[f].markerSize || 0 < l.markerSize)
                  ) {
                    var K = l.getMarkerProperties(f, m, x, b);
                    h.push(K);
                    var aa = U(s);
                    v &&
                      h.push({
                        x: m,
                        y: x,
                        ctx: e,
                        type: K.type,
                        size: K.size,
                        color: aa,
                        borderColor: aa,
                        borderThickness: K.borderThickness,
                      });
                    K = l.getMarkerProperties(f, m, w, b);
                    h.push(K);
                    aa = U(s);
                    v &&
                      h.push({
                        x: m,
                        y: w,
                        ctx: e,
                        type: K.type,
                        size: K.size,
                        color: aa,
                        borderColor: aa,
                        borderThickness: K.borderThickness,
                      });
                  }
                  if (
                    p[f].indexLabel ||
                    l.indexLabel ||
                    p[f].indexLabelFormatter ||
                    l.indexLabelFormatter
                  )
                    this._indexLabels.push({
                      chartType: "rangeArea",
                      dataPoint: p[f],
                      dataSeries: l,
                      indexKeyword: 0,
                      point: { x: m, y: w },
                      direction:
                        p[f].y[0] > p[f].y[1] === a.axisY.reversed ? -1 : 1,
                      color: u,
                    }),
                      this._indexLabels.push({
                        chartType: "rangeArea",
                        dataPoint: p[f],
                        dataSeries: l,
                        indexKeyword: 1,
                        point: { x: m, y: x },
                        direction:
                          p[f].y[0] > p[f].y[1] === a.axisY.reversed ? 1 : -1,
                        color: u,
                      });
                } else J || r || g(), (J = !0);
            g();
            X.drawMarkers(h);
          }
        }
        v &&
          (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (b.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          b.clearRect(q.x1, q.y1, q.width, q.height),
          this._eventManager.ghostCtx.restore());
        b.restore();
        return {
          source: c,
          dest: this.plotArea.ctx,
          animationCallback: L.xClipAnimation,
          easingFunction: L.easing.linear,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderRangeSplineArea = function (a) {
      function g(a, c) {
        var f = t(w, 2);
        if (0 < f.length) {
          if (0 < k.lineThickness) {
            b.strokeStyle = c;
            b.setLineDash && b.setLineDash(a);
            b.beginPath();
            b.moveTo(f[0].x, f[0].y);
            for (var g = 0; g < f.length - 3; g += 3) {
              if (f[g].newStrokeStyle || f[g].newLineDashArray)
                b.stroke(),
                  b.beginPath(),
                  b.moveTo(f[g].x, f[g].y),
                  f[g].newStrokeStyle && (b.strokeStyle = f[g].newStrokeStyle),
                  f[g].newLineDashArray && b.setLineDash(f[g].newLineDashArray);
              b.bezierCurveTo(
                f[g + 1].x,
                f[g + 1].y,
                f[g + 2].x,
                f[g + 2].y,
                f[g + 3].x,
                f[g + 3].y
              );
            }
          }
          b.beginPath();
          b.moveTo(f[0].x, f[0].y);
          v && (e.beginPath(), e.moveTo(f[0].x, f[0].y));
          for (g = 0; g < f.length - 3; g += 3)
            b.bezierCurveTo(
              f[g + 1].x,
              f[g + 1].y,
              f[g + 2].x,
              f[g + 2].y,
              f[g + 3].x,
              f[g + 3].y
            ),
              v &&
                e.bezierCurveTo(
                  f[g + 1].x,
                  f[g + 1].y,
                  f[g + 2].x,
                  f[g + 2].y,
                  f[g + 3].x,
                  f[g + 3].y
                );
          f = t(x, 2);
          b.lineTo(x[x.length - 1].x, x[x.length - 1].y);
          for (g = f.length - 1; 2 < g; g -= 3)
            b.bezierCurveTo(
              f[g - 1].x,
              f[g - 1].y,
              f[g - 2].x,
              f[g - 2].y,
              f[g - 3].x,
              f[g - 3].y
            ),
              v &&
                e.bezierCurveTo(
                  f[g - 1].x,
                  f[g - 1].y,
                  f[g - 2].x,
                  f[g - 2].y,
                  f[g - 3].x,
                  f[g - 3].y
                );
          b.closePath();
          b.globalAlpha = k.fillOpacity;
          b.fill();
          v && (e.closePath(), e.fill());
          b.globalAlpha = 1;
          if (0 < k.lineThickness) {
            b.strokeStyle = c;
            b.setLineDash && b.setLineDash(a);
            b.beginPath();
            b.moveTo(f[0].x, f[0].y);
            for (var h = (g = 0); g < f.length - 3; g += 3, h++) {
              if (w[h].newStrokeStyle || w[h].newLineDashArray)
                b.stroke(),
                  b.beginPath(),
                  b.moveTo(f[g].x, f[g].y),
                  w[h].newStrokeStyle && (b.strokeStyle = w[h].newStrokeStyle),
                  w[h].newLineDashArray && b.setLineDash(w[h].newLineDashArray);
              b.bezierCurveTo(
                f[g + 1].x,
                f[g + 1].y,
                f[g + 2].x,
                f[g + 2].y,
                f[g + 3].x,
                f[g + 3].y
              );
            }
            f = t(w, 2);
            b.moveTo(f[0].x, f[0].y);
            for (h = g = 0; g < f.length - 3; g += 3, h++) {
              if (w[h].newStrokeStyle || w[h].newLineDashArray)
                b.stroke(),
                  b.beginPath(),
                  b.moveTo(f[g].x, f[g].y),
                  w[h].newStrokeStyle && (b.strokeStyle = w[h].newStrokeStyle),
                  w[h].newLineDashArray && b.setLineDash(w[h].newLineDashArray);
              b.bezierCurveTo(
                f[g + 1].x,
                f[g + 1].y,
                f[g + 2].x,
                f[g + 2].y,
                f[g + 3].x,
                f[g + 3].y
              );
            }
            b.stroke();
          }
          b.beginPath();
        }
      }
      var c = a.targetCanvasCtx || this.plotArea.ctx,
        b = v ? this._preRenderCtx : c;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var e = this._eventManager.ghostCtx,
          h = [],
          q = this.plotArea;
        b.save();
        v && e.save();
        b.beginPath();
        b.rect(q.x1, q.y1, q.width, q.height);
        b.clip();
        v && (e.beginPath(), e.rect(q.x1, q.y1, q.width, q.height), e.clip());
        for (var d = 0; d < a.dataSeriesIndexes.length; d++) {
          var n = a.dataSeriesIndexes[d],
            k = this.data[n],
            l = k.dataPoints,
            h = k.id;
          this._eventManager.objectMap[h] = {
            objectType: "dataSeries",
            dataSeriesIndex: n,
          };
          h = U(h);
          e.fillStyle = h;
          var h = [],
            p = 0,
            r,
            f,
            m,
            w = [],
            x = [];
          if (0 < l.length) {
            var s = k._colorSet[p % k._colorSet.length],
              z = (k.lineColor = k.options.lineColor || s),
              u = z;
            b.fillStyle = s;
            b.lineWidth = k.lineThickness;
            var B = "solid",
              C;
            if (b.setLineDash) {
              var D = G(k.nullDataLineDashType, k.lineThickness),
                B = k.lineDashType;
              C = G(B, k.lineThickness);
            }
            for (f = !1; p < l.length; p++)
              if (
                ((r = l[p].x.getTime ? l[p].x.getTime() : l[p].x),
                !(
                  r < a.axisX.dataInfo.viewPortMin ||
                  (r > a.axisX.dataInfo.viewPortMax &&
                    (!k.connectNullData || !f))
                ))
              )
                if (
                  null !== l[p].y &&
                  l[p].y.length &&
                  "number" === typeof l[p].y[0] &&
                  "number" === typeof l[p].y[1]
                ) {
                  r = a.axisX.convertValueToPixel(r);
                  f = a.axisY.convertValueToPixel(l[p].y[0]);
                  m = a.axisY.convertValueToPixel(l[p].y[1]);
                  var A = k.dataPointIds[p];
                  this._eventManager.objectMap[A] = {
                    id: A,
                    objectType: "dataPoint",
                    dataSeriesIndex: n,
                    dataPointIndex: p,
                    x1: r,
                    y1: f,
                    y2: m,
                  };
                  w[w.length] = { x: r, y: f };
                  x[x.length] = { x: r, y: m };
                  p < l.length - 1 &&
                    (u !== (l[p].lineColor || z) ||
                      B !== (l[p].lineDashType || k.lineDashType)) &&
                    ((u = l[p].lineColor || z),
                    (w[w.length - 1].newStrokeStyle = u),
                    b.setLineDash &&
                      (l[p].lineDashType
                        ? ((B = l[p].lineDashType),
                          (w[w.length - 1].newLineDashArray = G(
                            B,
                            k.lineThickness
                          )))
                        : ((B = k.lineDashType),
                          (w[w.length - 1].newLineDashArray = C))));
                  if (
                    0 !== l[p].markerSize &&
                    (0 < l[p].markerSize || 0 < k.markerSize)
                  ) {
                    var H = k.getMarkerProperties(p, r, f, b);
                    h.push(H);
                    var J = U(A);
                    v &&
                      h.push({
                        x: r,
                        y: f,
                        ctx: e,
                        type: H.type,
                        size: H.size,
                        color: J,
                        borderColor: J,
                        borderThickness: H.borderThickness,
                      });
                    H = k.getMarkerProperties(p, r, m, b);
                    h.push(H);
                    J = U(A);
                    v &&
                      h.push({
                        x: r,
                        y: m,
                        ctx: e,
                        type: H.type,
                        size: H.size,
                        color: J,
                        borderColor: J,
                        borderThickness: H.borderThickness,
                      });
                  }
                  if (
                    l[p].indexLabel ||
                    k.indexLabel ||
                    l[p].indexLabelFormatter ||
                    k.indexLabelFormatter
                  )
                    this._indexLabels.push({
                      chartType: "rangeSplineArea",
                      dataPoint: l[p],
                      dataSeries: k,
                      indexKeyword: 0,
                      point: { x: r, y: f },
                      direction: l[p].y[0] <= l[p].y[1] ? -1 : 1,
                      color: s,
                    }),
                      this._indexLabels.push({
                        chartType: "rangeSplineArea",
                        dataPoint: l[p],
                        dataSeries: k,
                        indexKeyword: 1,
                        point: { x: r, y: m },
                        direction: l[p].y[0] <= l[p].y[1] ? 1 : -1,
                        color: s,
                      });
                  f = !1;
                } else
                  0 < p &&
                    !f &&
                    (k.connectNullData
                      ? b.setLineDash &&
                        0 < w.length &&
                        (k.options.nullDataLineDashType ||
                          !l[p - 1].lineDashType) &&
                        ((w[w.length - 1].newLineDashArray = D),
                        (B = k.nullDataLineDashType))
                      : (g(C, z), (w = []), (x = []))),
                    (f = !0);
            g(C, z);
            X.drawMarkers(h);
          }
        }
        v &&
          (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (b.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          b.clearRect(q.x1, q.y1, q.width, q.height),
          this._eventManager.ghostCtx.restore());
        b.restore();
        return {
          source: c,
          dest: this.plotArea.ctx,
          animationCallback: L.xClipAnimation,
          easingFunction: L.easing.linear,
          animationBase: 0,
        };
      }
    };
    m.prototype.renderWaterfall = function (a) {
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        c = v ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = this._eventManager.ghostCtx,
          e = null,
          h = this.plotArea,
          q = 0,
          d,
          n,
          k,
          l,
          p = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          q = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1;
        n = this.options.dataPointMaxWidth
          ? this.dataPointMaxWidth
          : this.options.dataPointWidth
          ? this.dataPointWidth
          : Math.min(
              0.15 * this.width,
              0.9 * (this.plotArea.width / a.plotType.totalDataSeries)
            ) << 0;
        var r = a.axisX.dataInfo.minDiff;
        isFinite(r) || (r = 0.3 * Math.abs(a.axisX.range));
        r = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.6 *
              ((h.width *
                (a.axisX.logarithmic
                  ? Math.log(r) / Math.log(a.axisX.range)
                  : Math.abs(r) / Math.abs(a.axisX.range))) /
                a.plotType.totalDataSeries)) <<
            0;
        this.dataPointMaxWidth &&
          q > n &&
          (q = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            n
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          n < q &&
          (n = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            q
          ));
        r < q && (r = q);
        r > n && (r = n);
        c.save();
        v && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(h.x1, h.y1, h.width, h.height);
        c.clip();
        v &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height),
          this._eventManager.ghostCtx.clip());
        for (var f = 0; f < a.dataSeriesIndexes.length; f++) {
          var m = a.dataSeriesIndexes[f],
            w = this.data[m],
            x = w.dataPoints,
            e = w._colorSet[0];
          w.risingColor = w.options.risingColor ? w.options.risingColor : e;
          w.fallingColor = w.options.fallingColor
            ? w.options.fallingColor
            : "#e40a0a";
          var s =
              "number" === typeof w.options.lineThickness
                ? Math.round(w.lineThickness)
                : 1,
            z = 1 === Math.round(s) % 2 ? -0.5 : 0;
          if (0 < x.length)
            for (
              var u = 5 < r && w.bevelEnabled ? !0 : !1,
                t = !1,
                C = null,
                D = null,
                q = 0;
              q < x.length;
              q++
            )
              if (
                (x[q].getTime ? (l = x[q].x.getTime()) : (l = x[q].x),
                "number" !== typeof x[q].y)
              ) {
                if (0 < q && !t && w.connectNullData)
                  var B =
                    w.options.nullDataLineDashType || !x[q - 1].lineDashType
                      ? w.nullDataLineDashType
                      : x[q - 1].lineDashType;
                t = !0;
              } else {
                d = a.axisX.convertValueToPixel(l);
                n =
                  0 === w.dataPointEOs[q].cumulativeSum
                    ? p
                    : a.axisY.convertValueToPixel(
                        w.dataPointEOs[q].cumulativeSum
                      );
                k =
                  0 === w.dataPointEOs[q].cumulativeSumYStartValue
                    ? p
                    : a.axisY.convertValueToPixel(
                        w.dataPointEOs[q].cumulativeSumYStartValue
                      );
                d = a.axisX.reversed
                  ? (d +
                      (a.plotType.totalDataSeries * r) / 2 -
                      (a.previousDataSeriesCount + f) * r) <<
                    0
                  : (d -
                      (a.plotType.totalDataSeries * r) / 2 +
                      (a.previousDataSeriesCount + f) * r) <<
                    0;
                var A = a.axisX.reversed ? (d - r) << 0 : (d + r) << 0;
                n > k && ((e = n), (n = k), (k = e));
                a.axisY.reversed && ((e = n), (n = k), (k = e));
                e = w.dataPointIds[q];
                this._eventManager.objectMap[e] = {
                  id: e,
                  objectType: "dataPoint",
                  dataSeriesIndex: m,
                  dataPointIndex: q,
                  x1: d,
                  y1: n,
                  x2: A,
                  y2: k,
                };
                var J = x[q].color
                  ? x[q].color
                  : 0 < x[q].y
                  ? w.risingColor
                  : w.fallingColor;
                ba(
                  c,
                  a.axisX.reversed ? A : d,
                  a.axisY.reversed ? k : n,
                  a.axisX.reversed ? d : A,
                  a.axisY.reversed ? n : k,
                  J,
                  0,
                  J,
                  u,
                  u,
                  !1,
                  !1,
                  w.fillOpacity
                );
                e = U(e);
                v &&
                  ba(
                    this._eventManager.ghostCtx,
                    a.axisX.reversed ? A : d,
                    n,
                    a.axisX.reversed ? d : A,
                    k,
                    e,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                var K,
                  J = d;
                K =
                  ("undefined" !== typeof x[q].isIntermediateSum &&
                    !0 === x[q].isIntermediateSum) ||
                  ("undefined" !== typeof x[q].isCumulativeSum &&
                    !0 === x[q].isCumulativeSum)
                    ? 0 < x[q].y
                      ? n
                      : k
                    : 0 < x[q].y
                    ? k
                    : n;
                0 < q &&
                  C &&
                  (!t || w.connectNullData) &&
                  (t && c.setLineDash && c.setLineDash(G(B, s)),
                  c.beginPath(),
                  c.moveTo(C, D - z),
                  c.lineTo(J, K - z),
                  0 < s && c.stroke(),
                  v &&
                    (b.beginPath(),
                    b.moveTo(C, D - z),
                    b.lineTo(J, K - z),
                    0 < s && b.stroke()));
                t = !1;
                C = A;
                D = 0 < x[q].y ? n : k;
                J = x[q].lineDashType
                  ? x[q].lineDashType
                  : w.options.lineDashType
                  ? w.options.lineDashType
                  : "shortDash";
                c.strokeStyle = x[q].lineColor
                  ? x[q].lineColor
                  : w.options.lineColor
                  ? w.options.lineColor
                  : "#9e9e9e";
                c.lineWidth = s;
                c.setLineDash && ((J = G(J, s)), c.setLineDash(J));
                (x[q].indexLabel ||
                  w.indexLabel ||
                  x[q].indexLabelFormatter ||
                  w.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "waterfall",
                    dataPoint: x[q],
                    dataSeries: w,
                    point: { x: d + (A - d) / 2, y: 0 <= x[q].y ? n : k },
                    direction: 0 > x[q].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: d,
                      y1: Math.min(n, k),
                      x2: A,
                      y2: Math.max(n, k),
                    },
                    color: e,
                  });
              }
        }
        v &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(h.x1, h.y1, h.width, h.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: L.fadeInAnimation,
          easingFunction: L.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    var ia = function (a, g, c, b, e, h, q, d, n) {
      if (!(0 > c)) {
        "undefined" === typeof d && (d = 1);
        if (!v) {
          var k = Number((q % (2 * Math.PI)).toFixed(8));
          Number((h % (2 * Math.PI)).toFixed(8)) === k && (q -= 1e-4);
        }
        a.save();
        a.globalAlpha = d;
        "pie" === e
          ? (a.beginPath(),
            a.moveTo(g.x, g.y),
            a.arc(g.x, g.y, c, h, q, !1),
            (a.fillStyle = b),
            (a.strokeStyle = "white"),
            (a.lineWidth = 2),
            a.closePath(),
            a.fill())
          : "doughnut" === e &&
            (a.beginPath(),
            a.arc(g.x, g.y, c, h, q, !1),
            0 <= n && a.arc(g.x, g.y, n * c, q, h, !0),
            a.closePath(),
            (a.fillStyle = b),
            (a.strokeStyle = "white"),
            (a.lineWidth = 2),
            a.fill());
        a.globalAlpha = 1;
        a.restore();
      }
    };
    m.prototype.renderPie = function (a) {
      function g() {
        if (k && l) {
          var a = 0,
            b = 0,
            c = 0,
            e = 0;
          n(k.options.indexLabelMaxWidth) &&
            (k.indexLabelMaxWidth = 0.33 * r.width);
          for (var g = 0; g < l.length; g++) {
            var h = l[g],
              q = k.dataPointIds[g];
            f[g].id = q;
            f[g].objectType = "dataPoint";
            f[g].dataPointIndex = g;
            f[g].dataSeriesIndex = 0;
            var d = f[g],
              p = { percent: null, total: null },
              y = null,
              p = m.getPercentAndTotal(k, h);
            if (k.indexLabelFormatter || h.indexLabelFormatter)
              y = {
                chart: m.options,
                dataSeries: k,
                dataPoint: h,
                total: p.total,
                percent: p.percent,
              };
            p = h.indexLabelFormatter
              ? h.indexLabelFormatter(y)
              : h.indexLabel
              ? m.replaceKeywordsWithValue(h.indexLabel, h, k, g)
              : k.indexLabelFormatter
              ? k.indexLabelFormatter(y)
              : k.indexLabel
              ? m.replaceKeywordsWithValue(k.indexLabel, h, k, g)
              : h.label
              ? h.label
              : "";
            m._eventManager.objectMap[q] = d;
            d.center = { x: u.x, y: u.y };
            d.y = h.y;
            d.radius = A;
            d.percentInnerRadius = H;
            d.indexLabelText = p;
            d.indexLabelPlacement = k.indexLabelPlacement;
            d.indexLabelLineColor = h.indexLabelLineColor
              ? h.indexLabelLineColor
              : k.options.indexLabelLineColor
              ? k.options.indexLabelLineColor
              : h.color
              ? h.color
              : k._colorSet[g % k._colorSet.length];
            d.indexLabelLineThickness = n(h.indexLabelLineThickness)
              ? k.indexLabelLineThickness
              : h.indexLabelLineThickness;
            d.indexLabelLineDashType = h.indexLabelLineDashType
              ? h.indexLabelLineDashType
              : k.indexLabelLineDashType;
            d.indexLabelFontColor = h.indexLabelFontColor
              ? h.indexLabelFontColor
              : k.indexLabelFontColor;
            d.indexLabelFontStyle = h.indexLabelFontStyle
              ? h.indexLabelFontStyle
              : k.indexLabelFontStyle;
            d.indexLabelFontWeight = h.indexLabelFontWeight
              ? h.indexLabelFontWeight
              : k.indexLabelFontWeight;
            d.indexLabelFontSize = n(h.indexLabelFontSize)
              ? k.indexLabelFontSize
              : h.indexLabelFontSize;
            d.indexLabelFontFamily = h.indexLabelFontFamily
              ? h.indexLabelFontFamily
              : k.indexLabelFontFamily;
            d.indexLabelBackgroundColor = h.indexLabelBackgroundColor
              ? h.indexLabelBackgroundColor
              : k.options.indexLabelBackgroundColor
              ? k.options.indexLabelBackgroundColor
              : k.indexLabelBackgroundColor;
            d.indexLabelBorderColor = h.indexLabelBorderColor
              ? h.indexLabelBorderColor
              : k.options.indexLabelBorderColor
              ? k.options.indexLabelBorderColor
              : k.indexLabelBorderColor;
            d.indexLabelBorderThickness = h.indexLabelBorderThickness
              ? h.indexLabelBorderThickness
              : k.options.indexLabelBorderThickness
              ? k.options.indexLabelBorderThickness
              : k.indexLabelBorderThickness;
            d.indexLabelMaxWidth = h.indexLabelMaxWidth
              ? h.indexLabelMaxWidth
              : k.indexLabelMaxWidth;
            d.indexLabelWrap =
              "undefined" !== typeof h.indexLabelWrap
                ? h.indexLabelWrap
                : k.indexLabelWrap;
            d.indexLabelTextAlign = h.indexLabelTextAlign
              ? h.indexLabelTextAlign
              : k.indexLabelTextAlign
              ? k.indexLabelTextAlign
              : "left";
            d.startAngle =
              0 === g
                ? k.startAngle
                  ? (k.startAngle / 180) * Math.PI
                  : 0
                : f[g - 1].endAngle;
            d.startAngle = (d.startAngle + 2 * Math.PI) % (2 * Math.PI);
            d.endAngle = d.startAngle + ((2 * Math.PI) / t) * Math.abs(h.y);
            h = (d.endAngle + d.startAngle) / 2;
            h = (h + 2 * Math.PI) % (2 * Math.PI);
            d.midAngle = h;
            if (d.midAngle > Math.PI / 2 - s && d.midAngle < Math.PI / 2 + s) {
              if (0 === a || f[c].midAngle > d.midAngle) c = g;
              a++;
            } else if (
              d.midAngle > (3 * Math.PI) / 2 - s &&
              d.midAngle < (3 * Math.PI) / 2 + s
            ) {
              if (0 === b || f[e].midAngle > d.midAngle) e = g;
              b++;
            }
            d.hemisphere =
              h > Math.PI / 2 && h <= (3 * Math.PI) / 2 ? "left" : "right";
            d.indexLabelTextBlock = new ja(m.plotArea.ctx, {
              fontSize: d.indexLabelFontSize,
              fontFamily: d.indexLabelFontFamily,
              fontColor: d.indexLabelFontColor,
              fontStyle: d.indexLabelFontStyle,
              fontWeight: d.indexLabelFontWeight,
              textAlign: d.indexLabelTextAlign,
              backgroundColor: d.indexLabelBackgroundColor,
              borderColor: d.indexLabelBorderColor,
              borderThickness: d.indexLabelBorderThickness,
              maxWidth: d.indexLabelMaxWidth,
              maxHeight: d.indexLabelWrap
                ? 5 * d.indexLabelFontSize
                : 1.5 * d.indexLabelFontSize,
              text: d.indexLabelText,
              padding: 0,
              textBaseline: "middle",
            });
            d.indexLabelTextBlock.measureText();
          }
          q = h = 0;
          p = !1;
          for (g = 0; g < l.length; g++)
            (d = f[(c + g) % l.length]),
              1 < a &&
                d.midAngle > Math.PI / 2 - s &&
                d.midAngle < Math.PI / 2 + s &&
                (h <= a / 2 && !p
                  ? ((d.hemisphere = "right"), h++)
                  : ((d.hemisphere = "left"), (p = !0)));
          p = !1;
          for (g = 0; g < l.length; g++)
            (d = f[(e + g) % l.length]),
              1 < b &&
                d.midAngle > (3 * Math.PI) / 2 - s &&
                d.midAngle < (3 * Math.PI) / 2 + s &&
                (q <= b / 2 && !p
                  ? ((d.hemisphere = "left"), q++)
                  : ((d.hemisphere = "right"), (p = !0)));
        }
      }
      function c(a, b) {
        var c = m.plotArea.ctx;
        c.clearRect(r.x1, r.y1, r.width, r.height);
        c.fillStyle = m.backgroundColor;
        c.fillRect(r.x1, r.y1, r.width, r.height);
        for (c = 0; c < l.length; c++) {
          var g = f[c].startAngle,
            e = f[c].endAngle;
          if (e > g) {
            var h = 0.07 * A * Math.cos(f[c].midAngle),
              d = 0.07 * A * Math.sin(f[c].midAngle),
              q = !1;
            if (l[c].exploded) {
              if (
                1e-9 < Math.abs(f[c].center.x - (u.x + h)) ||
                1e-9 < Math.abs(f[c].center.y - (u.y + d))
              )
                (f[c].center.x = u.x + h * a),
                  (f[c].center.y = u.y + d * a),
                  (q = !0);
            } else if (
              0 < Math.abs(f[c].center.x - u.x) ||
              0 < Math.abs(f[c].center.y - u.y)
            )
              (f[c].center.x = u.x + h * (1 - a)),
                (f[c].center.y = u.y + d * (1 - a)),
                (q = !0);
            q &&
              b &&
              ((h = {}),
              (h.dataSeries = k),
              (h.dataPoint = k.dataPoints[c]),
              (h.index = c),
              m.toolTip.highlightObjects([h]));
            ia(
              m.plotArea.ctx,
              f[c].center,
              f[c].radius,
              l[c].color ? l[c].color : k._colorSet[c % k._colorSet.length],
              k.type,
              g,
              e,
              k.fillOpacity,
              f[c].percentInnerRadius
            );
          }
        }
        c = m.plotArea.ctx;
        c.save();
        c.fillStyle = "black";
        c.strokeStyle = "grey";
        c.textBaseline = "middle";
        c.lineJoin = "round";
        for (g = g = 0; g < l.length; g++)
          (e = f[g]),
            e.indexLabelText &&
              ((e.indexLabelTextBlock.y -=
                e.indexLabelTextBlock.height / 2 -
                e.indexLabelTextBlock.fontSize / 2),
              (h = 0),
              (h =
                "left" === e.hemisphere
                  ? "inside" !== k.indexLabelPlacement
                    ? -(e.indexLabelTextBlock.width + p)
                    : -e.indexLabelTextBlock.width / 2
                  : "inside" !== k.indexLabelPlacement
                  ? p
                  : -e.indexLabelTextBlock.width / 2),
              (e.indexLabelTextBlock.x += h),
              e.indexLabelTextBlock.render(!0),
              (e.indexLabelTextBlock.x -= h),
              (e.indexLabelTextBlock.y +=
                e.indexLabelTextBlock.height / 2 -
                e.indexLabelTextBlock.fontSize / 2),
              "inside" !== e.indexLabelPlacement &&
                0 < e.indexLabelLineThickness &&
                ((h = e.center.x + A * Math.cos(e.midAngle)),
                (d = e.center.y + A * Math.sin(e.midAngle)),
                (c.strokeStyle = e.indexLabelLineColor),
                (c.lineWidth = e.indexLabelLineThickness),
                c.setLineDash &&
                  c.setLineDash(
                    G(e.indexLabelLineDashType, e.indexLabelLineThickness)
                  ),
                c.beginPath(),
                c.moveTo(h, d),
                c.lineTo(e.indexLabelTextBlock.x, e.indexLabelTextBlock.y),
                c.lineTo(
                  e.indexLabelTextBlock.x + ("left" === e.hemisphere ? -p : p),
                  e.indexLabelTextBlock.y
                ),
                c.stroke()),
              (c.lineJoin = "miter"));
        c.save();
      }
      function b(a, b) {
        var c = 0,
          c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
          f = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
          e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
          g = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
        return (c =
          b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? e - f : c - g);
      }
      function e(a) {
        for (var c = null, e = 1; e < l.length; e++)
          if (
            ((c = (a + e + f.length) % f.length),
            f[c].hemisphere !== f[a].hemisphere)
          ) {
            c = null;
            break;
          } else if (
            f[c].indexLabelText &&
            c !== a &&
            (0 > b(f[c], f[a]) ||
              ("right" === f[a].hemisphere
                ? f[c].indexLabelTextBlock.y >= f[a].indexLabelTextBlock.y
                : f[c].indexLabelTextBlock.y <= f[a].indexLabelTextBlock.y))
          )
            break;
          else c = null;
        return c;
      }
      function h(a, c, g) {
        g = (g || 0) + 1;
        if (1e3 < g) return 0;
        c = c || 0;
        var d = 0,
          q = u.y - 1 * w,
          k = u.y + 1 * w;
        if (0 <= a && a < l.length) {
          var p = f[a];
          if (
            (0 > c && p.indexLabelTextBlock.y < q) ||
            (0 < c && p.indexLabelTextBlock.y > k)
          )
            return 0;
          var r = 0,
            n = 0,
            n = (r = r = 0);
          0 > c
            ? p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 > q &&
              p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 + c <
                q &&
              (c = -(
                q -
                (p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 + c)
              ))
            : p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2 < q &&
              p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2 + c >
                k &&
              (c =
                p.indexLabelTextBlock.y +
                p.indexLabelTextBlock.height / 2 +
                c -
                k);
          c = p.indexLabelTextBlock.y + c;
          q = 0;
          q =
            "right" === p.hemisphere
              ? u.x + Math.sqrt(Math.pow(w, 2) - Math.pow(c - u.y, 2))
              : u.x - Math.sqrt(Math.pow(w, 2) - Math.pow(c - u.y, 2));
          n = u.x + A * Math.cos(p.midAngle);
          r = u.y + A * Math.sin(p.midAngle);
          r = Math.sqrt(Math.pow(q - n, 2) + Math.pow(c - r, 2));
          n = Math.acos(A / w);
          r = Math.acos((w * w + A * A - r * r) / (2 * A * w));
          c = r < n ? c - p.indexLabelTextBlock.y : 0;
          q = null;
          for (k = 1; k < l.length; k++)
            if (
              ((q = (a - k + f.length) % f.length),
              f[q].hemisphere !== f[a].hemisphere)
            ) {
              q = null;
              break;
            } else if (
              f[q].indexLabelText &&
              f[q].hemisphere === f[a].hemisphere &&
              q !== a &&
              (0 > b(f[q], f[a]) ||
                ("right" === f[a].hemisphere
                  ? f[q].indexLabelTextBlock.y <= f[a].indexLabelTextBlock.y
                  : f[q].indexLabelTextBlock.y >= f[a].indexLabelTextBlock.y))
            )
              break;
            else q = null;
          n = q;
          r = e(a);
          k = q = 0;
          0 > c
            ? ((k = "right" === p.hemisphere ? n : r),
              (d = c),
              null !== k &&
                ((n = -c),
                (c =
                  p.indexLabelTextBlock.y -
                  p.indexLabelTextBlock.height / 2 -
                  (f[k].indexLabelTextBlock.y +
                    f[k].indexLabelTextBlock.height / 2)),
                c - n < v &&
                  ((q = -n),
                  (k = h(k, q, g + 1)),
                  +k.toFixed(z) > +q.toFixed(z) &&
                    (d = c > v ? -(c - v) : -(n - (k - q))))))
            : 0 < c &&
              ((k = "right" === p.hemisphere ? r : n),
              (d = c),
              null !== k &&
                ((n = c),
                (c =
                  f[k].indexLabelTextBlock.y -
                  f[k].indexLabelTextBlock.height / 2 -
                  (p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2)),
                c - n < v &&
                  ((q = n),
                  (k = h(k, q, g + 1)),
                  +k.toFixed(z) < +q.toFixed(z) &&
                    (d = c > v ? c - v : n - (q - k)))));
          d &&
            ((g = p.indexLabelTextBlock.y + d),
            (c = 0),
            (c =
              "right" === p.hemisphere
                ? u.x + Math.sqrt(Math.pow(w, 2) - Math.pow(g - u.y, 2))
                : u.x - Math.sqrt(Math.pow(w, 2) - Math.pow(g - u.y, 2))),
            p.midAngle > Math.PI / 2 - s && p.midAngle < Math.PI / 2 + s
              ? ((q = (a - 1 + f.length) % f.length),
                (q = f[q]),
                (a = f[(a + 1 + f.length) % f.length]),
                "left" === p.hemisphere &&
                "right" === q.hemisphere &&
                c > q.indexLabelTextBlock.x
                  ? (c = q.indexLabelTextBlock.x - 15)
                  : "right" === p.hemisphere &&
                    "left" === a.hemisphere &&
                    c < a.indexLabelTextBlock.x &&
                    (c = a.indexLabelTextBlock.x + 15))
              : p.midAngle > (3 * Math.PI) / 2 - s &&
                p.midAngle < (3 * Math.PI) / 2 + s &&
                ((q = (a - 1 + f.length) % f.length),
                (q = f[q]),
                (a = f[(a + 1 + f.length) % f.length]),
                "right" === p.hemisphere &&
                "left" === q.hemisphere &&
                c < q.indexLabelTextBlock.x
                  ? (c = q.indexLabelTextBlock.x + 15)
                  : "left" === p.hemisphere &&
                    "right" === a.hemisphere &&
                    c > a.indexLabelTextBlock.x &&
                    (c = a.indexLabelTextBlock.x - 15)),
            (p.indexLabelTextBlock.y = g),
            (p.indexLabelTextBlock.x = c),
            (p.indexLabelAngle = Math.atan2(
              p.indexLabelTextBlock.y - u.y,
              p.indexLabelTextBlock.x - u.x
            )));
        }
        return d;
      }
      function q() {
        var a = m.plotArea.ctx;
        a.fillStyle = "grey";
        a.strokeStyle = "grey";
        a.font = "16px Arial";
        a.textBaseline = "middle";
        for (
          var c = (a = 0), g = 0, d = !0, c = 0;
          10 > c && (1 > c || 0 < g);
          c++
        ) {
          if (
            k.radius ||
            (!k.radius &&
              "undefined" !== typeof k.innerRadius &&
              null !== k.innerRadius &&
              A - g <= B)
          )
            d = !1;
          d && (A -= g);
          g = 0;
          if ("inside" !== k.indexLabelPlacement) {
            w = A * x;
            for (a = 0; a < l.length; a++) {
              var q = f[a];
              q.indexLabelTextBlock.x = u.x + w * Math.cos(q.midAngle);
              q.indexLabelTextBlock.y = u.y + w * Math.sin(q.midAngle);
              q.indexLabelAngle = q.midAngle;
              q.radius = A;
              q.percentInnerRadius = H;
            }
            for (var n, s, a = 0; a < l.length; a++) {
              var q = f[a],
                y = e(a);
              if (null !== y) {
                n = f[a];
                s = f[y];
                var t = 0,
                  t = b(n, s) - v;
                if (0 > t) {
                  for (var C = (s = 0), G = 0; G < l.length; G++)
                    G !== a &&
                      f[G].hemisphere === q.hemisphere &&
                      (f[G].indexLabelTextBlock.y < q.indexLabelTextBlock.y
                        ? s++
                        : C++);
                  s = (t / (s + C || 1)) * C;
                  var C = -1 * (t - s),
                    L = (G = 0);
                  "right" === q.hemisphere
                    ? ((G = h(a, s)),
                      (C = -1 * (t - G)),
                      (L = h(y, C)),
                      +L.toFixed(z) < +C.toFixed(z) &&
                        +G.toFixed(z) <= +s.toFixed(z) &&
                        h(a, -(C - L)))
                    : ((G = h(y, s)),
                      (C = -1 * (t - G)),
                      (L = h(a, C)),
                      +L.toFixed(z) < +C.toFixed(z) &&
                        +G.toFixed(z) <= +s.toFixed(z) &&
                        h(y, -(C - L)));
                }
              }
            }
          } else
            for (a = 0; a < l.length; a++)
              (q = f[a]),
                (w = "pie" === k.type ? 0.7 * A : 0.85 * A),
                (y = u.x + w * Math.cos(q.midAngle)),
                (s = u.y + w * Math.sin(q.midAngle)),
                (q.indexLabelTextBlock.x = y),
                (q.indexLabelTextBlock.y = s);
          for (a = 0; a < l.length; a++)
            if (
              ((q = f[a]),
              (y = q.indexLabelTextBlock.measureText()),
              0 !== y.height && 0 !== y.width)
            )
              (y = y = 0),
                "right" === q.hemisphere
                  ? ((y =
                      r.x2 -
                      (q.indexLabelTextBlock.x +
                        q.indexLabelTextBlock.width +
                        p)),
                    (y *= -1))
                  : (y =
                      r.x1 -
                      (q.indexLabelTextBlock.x -
                        q.indexLabelTextBlock.width -
                        p)),
                0 < y &&
                  (!d &&
                    q.indexLabelText &&
                    ((s =
                      "right" === q.hemisphere
                        ? r.x2 - q.indexLabelTextBlock.x
                        : q.indexLabelTextBlock.x - r.x1),
                    0.3 * q.indexLabelTextBlock.maxWidth > s
                      ? (q.indexLabelText = "")
                      : (q.indexLabelTextBlock.maxWidth = 0.85 * s),
                    0.3 * q.indexLabelTextBlock.maxWidth < s &&
                      (q.indexLabelTextBlock.x -=
                        "right" === q.hemisphere ? 2 : -2)),
                  Math.abs(
                    q.indexLabelTextBlock.y -
                      q.indexLabelTextBlock.height / 2 -
                      u.y
                  ) < A ||
                    Math.abs(
                      q.indexLabelTextBlock.y +
                        q.indexLabelTextBlock.height / 2 -
                        u.y
                    ) < A) &&
                  ((y /= Math.abs(Math.cos(q.indexLabelAngle))),
                  9 < y && (y *= 0.3),
                  y > g && (g = y)),
                (y = y = 0),
                0 < q.indexLabelAngle && q.indexLabelAngle < Math.PI
                  ? ((y =
                      r.y2 -
                      (q.indexLabelTextBlock.y +
                        q.indexLabelTextBlock.height / 2 +
                        5)),
                    (y *= -1))
                  : (y =
                      r.y1 -
                      (q.indexLabelTextBlock.y -
                        q.indexLabelTextBlock.height / 2 -
                        5)),
                0 < y &&
                  (!d &&
                    q.indexLabelText &&
                    ((s =
                      0 < q.indexLabelAngle && q.indexLabelAngle < Math.PI
                        ? -1
                        : 1),
                    0 === h(a, y * s) && h(a, 2 * s)),
                  Math.abs(q.indexLabelTextBlock.x - u.x) < A &&
                    ((y /= Math.abs(Math.sin(q.indexLabelAngle))),
                    9 < y && (y *= 0.3),
                    y > g && (g = y)));
          var O = function (a, b, c) {
            for (
              var g = [], e = 0;
              g.push(f[b]), b !== c;
              b = (b + 1 + l.length) % l.length
            );
            g.sort(function (a, b) {
              return a.y - b.y;
            });
            for (b = 0; b < g.length; b++)
              if (((c = g[b]), e < 0.7 * a))
                (e += c.indexLabelTextBlock.height),
                  (c.indexLabelTextBlock.text = ""),
                  (c.indexLabelText = ""),
                  c.indexLabelTextBlock.measureText();
              else break;
          };
          (function () {
            for (var a = -1, c = -1, g = 0, h = !1, q = 0; q < l.length; q++)
              if (((h = !1), (n = f[q]), n.indexLabelText)) {
                var d = e(q);
                if (null !== d) {
                  var k = f[d];
                  t = 0;
                  t = b(n, k);
                  var r;
                  if ((r = 0 > t)) {
                    r = n.indexLabelTextBlock.x;
                    var m =
                        n.indexLabelTextBlock.y -
                        n.indexLabelTextBlock.height / 2,
                      s =
                        n.indexLabelTextBlock.y +
                        n.indexLabelTextBlock.height / 2,
                      y =
                        k.indexLabelTextBlock.y -
                        k.indexLabelTextBlock.height / 2,
                      u = k.indexLabelTextBlock.x + k.indexLabelTextBlock.width,
                      w =
                        k.indexLabelTextBlock.y +
                        k.indexLabelTextBlock.height / 2;
                    r =
                      n.indexLabelTextBlock.x + n.indexLabelTextBlock.width <
                        k.indexLabelTextBlock.x - p ||
                      r > u + p ||
                      m > w + p ||
                      s < y - p
                        ? !1
                        : !0;
                  }
                  r
                    ? (0 > a && (a = q),
                      d !== a && ((c = d), (g += -t)),
                      0 === q % Math.max(l.length / 10, 3) && (h = !0))
                    : (h = !0);
                  h &&
                    0 < g &&
                    0 <= a &&
                    0 <= c &&
                    (O(g, a, c), (c = a = -1), (g = 0));
                }
              }
            0 < g && O(g, a, c);
          })();
        }
      }
      function d() {
        m.plotArea.layoutManager.reset();
        m.title &&
          (m.title.dockInsidePlotArea ||
            ("center" === m.title.horizontalAlign &&
              "center" === m.title.verticalAlign)) &&
          m.title.render();
        if (m.subtitles)
          for (var a = 0; a < m.subtitles.length; a++) {
            var b = m.subtitles[a];
            (b.dockInsidePlotArea ||
              ("center" === b.horizontalAlign &&
                "center" === b.verticalAlign)) &&
              b.render();
          }
        m.legend &&
          (m.legend.dockInsidePlotArea ||
            ("center" === m.legend.horizontalAlign &&
              "center" === m.legend.verticalAlign)) &&
          (m.legend.setLayout(), m.legend.render());
      }
      var m = this;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var k = this.data[a.dataSeriesIndexes[0]],
          l = k.dataPoints,
          p = 10,
          r = this.plotArea,
          f = k.dataPointEOs,
          v = 2,
          w,
          x = 1.3,
          s = (20 / 180) * Math.PI,
          z = 6,
          u = { x: (r.x2 + r.x1) / 2, y: (r.y2 + r.y1) / 2 },
          t = 0;
        a = !1;
        for (var C = 0; C < l.length; C++)
          (t += Math.abs(l[C].y)),
            !a &&
              "undefined" !== typeof l[C].indexLabel &&
              null !== l[C].indexLabel &&
              0 < l[C].indexLabel.toString().length &&
              (a = !0),
            !a &&
              "undefined" !== typeof l[C].label &&
              null !== l[C].label &&
              0 < l[C].label.toString().length &&
              (a = !0);
        if (0 !== t) {
          a =
            a ||
            ("undefined" !== typeof k.indexLabel &&
              null !== k.indexLabel &&
              0 < k.indexLabel.toString().length);
          var A =
            "inside" !== k.indexLabelPlacement && a
              ? (0.75 * Math.min(r.width, r.height)) / 2
              : (0.92 * Math.min(r.width, r.height)) / 2;
          k.radius && (A = Ua(k.radius, A));
          var B =
            "undefined" !== typeof k.innerRadius && null !== k.innerRadius
              ? Ua(k.innerRadius, A)
              : 0.7 * A;
          k.radius = A;
          "doughnut" === k.type && (k.innerRadius = B);
          var H = Math.min(B / A, (A - 1) / A);
          this.pieDoughnutClickHandler = function (a) {
            m.isAnimating ||
              (!n(this.explodeOnClick) && !this.explodeOnClick) ||
              ((a = a.dataPoint),
              (a.exploded = a.exploded ? !1 : !0),
              1 < this.dataPoints.length &&
                m._animator.animate(0, 500, function (a) {
                  c(a, !0);
                  d();
                  m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
                  m.dispatchEvent("dataAnimationEnd", { chart: m });
                }));
          };
          g();
          q();
          q();
          q();
          q();
          this.disableToolTip = !0;
          this._animator.animate(
            0,
            this.animatedRender ? this.animationDuration : 0,
            function (a) {
              var b = m.plotArea.ctx;
              b.clearRect(r.x1, r.y1, r.width, r.height);
              b.fillStyle = m.backgroundColor;
              b.fillRect(r.x1, r.y1, r.width, r.height);
              for (
                var b = f[0].startAngle + 2 * Math.PI * a, c = 0;
                c < l.length;
                c++
              ) {
                var g = 0 === c ? f[c].startAngle : e,
                  e = g + (f[c].endAngle - f[c].startAngle),
                  h = !1;
                e > b && ((e = b), (h = !0));
                var q = l[c].color
                  ? l[c].color
                  : k._colorSet[c % k._colorSet.length];
                e > g &&
                  ia(
                    m.plotArea.ctx,
                    f[c].center,
                    f[c].radius,
                    q,
                    k.type,
                    g,
                    e,
                    k.fillOpacity,
                    f[c].percentInnerRadius
                  );
                if (h) break;
              }
              d();
              m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
              1 <= a && m.dispatchEvent("dataAnimationEnd", { chart: m });
            },
            function () {
              m.disableToolTip = !1;
              m._animator.animate(0, m.animatedRender ? 500 : 0, function (a) {
                c(a, !1);
                d();
                m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
              });
              m.dispatchEvent("dataAnimationEnd", { chart: m });
            }
          );
        }
      }
    };
    var qa = function (a, g, c, b) {
      "undefined" === typeof c && (c = 1);
      0 >= Math.round(g.y4 - g.y1) ||
        (a.save(),
        (a.globalAlpha = c),
        a.beginPath(),
        a.moveTo(Math.round(g.x1), Math.round(g.y1)),
        a.lineTo(Math.round(g.x2), Math.round(g.y2)),
        a.lineTo(Math.round(g.x3), Math.round(g.y3)),
        a.lineTo(Math.round(g.x4), Math.round(g.y4)),
        "undefined" !== g.x5 &&
          (a.lineTo(Math.round(g.x5), Math.round(g.y5)),
          a.lineTo(Math.round(g.x6), Math.round(g.y6))),
        a.closePath(),
        (a.fillStyle = b ? b : g.color),
        a.fill(),
        (a.globalAplha = 1),
        a.restore());
    };
    m.prototype.renderFunnel = function (a) {
      function g() {
        for (var a = 0, b = [], c = 0; c < z.length; c++) {
          if ("undefined" === typeof z[c].y) return -1;
          z[c].y = "number" === typeof z[c].y ? z[c].y : 0;
          a += Math.abs(z[c].y);
        }
        if (0 === a) return -1;
        for (c = b[0] = 0; c < z.length; c++)
          b.push((Math.abs(z[c].y) * H) / a);
        return b;
      }
      function c() {
        var a = V,
          b = Y,
          c = O,
          g = $,
          e,
          f;
        e = Z;
        f = Q - P;
        g = Math.abs(((f - e) * (b - a + (g - c))) / 2);
        c = $ - O;
        e = f - e;
        f = c * (f - Q);
        f = Math.abs(f);
        f = g + f;
        for (var g = [], h = 0, q = 0; q < z.length; q++) {
          if ("undefined" === typeof z[q].y) return -1;
          z[q].y = "number" === typeof z[q].y ? z[q].y : 0;
          h += Math.abs(z[q].y);
        }
        if (0 === h) return -1;
        for (
          var d = (g[0] = 0), k = 0, l, p, b = b - a, d = !1, q = 0;
          q < z.length;
          q++
        )
          (a = (Math.abs(z[q].y) * f) / h),
            d
              ? (l = 0 == Number(c.toFixed(3)) ? 0 : a / c)
              : ((p = ca * ca * b * b - 4 * Math.abs(ca) * a),
                0 > p
                  ? ((p = c),
                    (d = ((b + p) * (e - k)) / 2),
                    (a -= d),
                    (l = e - k),
                    (k += e - k),
                    (l += 0 == p ? 0 : a / p),
                    (k += a / p),
                    (d = !0))
                  : ((l = (Math.abs(ca) * b - Math.sqrt(p)) / 2),
                    (p = b - (2 * l) / Math.abs(ca)),
                    (k += l),
                    k > e &&
                      ((k -= l),
                      (p = c),
                      (d = ((b + p) * (e - k)) / 2),
                      (a -= d),
                      (l = e - k),
                      (k += e - k),
                      (l += a / p),
                      (k += a / p),
                      (d = !0)),
                    (b = p))),
            g.push(l);
        return g;
      }
      function b() {
        if (s && z) {
          for (
            var a,
              b,
              c,
              g,
              e,
              h,
              q,
              d,
              k,
              l,
              p,
              r,
              m,
              y,
              u,
              w,
              t,
              I = [],
              A = [],
              B = { percent: null, total: null },
              C = null,
              D = 0;
            D < z.length;
            D++
          )
            (t = R[D]),
              (t =
                "undefined" !== typeof t.x5
                  ? (t.y2 + t.y4) / 2
                  : (t.y2 + t.y3) / 2),
              (t = f(t).x2 + 1),
              (I[D] = N - t - U);
          t = 0.5 * U;
          for (var D = 0, E = z.length - 1; D < z.length || 0 <= E; D++, E--) {
            b = s.reversed ? z[E] : z[D];
            a = b.color
              ? b.color
              : s.reversed
              ? s._colorSet[(z.length - 1 - D) % s._colorSet.length]
              : s._colorSet[D % s._colorSet.length];
            c = b.indexLabelPlacement || s.indexLabelPlacement || "outside";
            w = b.indexLabelTextAlign || s.indexLabelTextAlign || "left";
            g =
              b.indexLabelBackgroundColor ||
              s.indexLabelBackgroundColor ||
              (v ? "transparent" : null);
            e =
              b.indexLabelBorderColor ||
              s.indexLabelBorderColor ||
              (v ? "transparent" : null);
            h = n(b.indexLabelBorderThickness)
              ? s.indexLabelBorderThickness
              : b.indexLabelBorderThickness;
            q = b.indexLabelFontColor || s.indexLabelFontColor || "#979797";
            d = n(b.indexLabelFontSize)
              ? s.indexLabelFontSize
              : b.indexLabelFontSize;
            k = b.indexLabelFontStyle || s.indexLabelFontStyle || "normal";
            l = b.indexLabelFontFamily || s.indexLabelFontFamily || "arial";
            p = b.indexLabelFontWeight || s.indexLabelFontWeight || "normal";
            a = b.indexLabelLineColor || s.options.indexLabelLineColor || a;
            r =
              "number" === typeof b.indexLabelLineThickness
                ? b.indexLabelLineThickness
                : "number" === typeof s.indexLabelLineThickness
                ? s.indexLabelLineThickness
                : 2;
            m = b.indexLabelLineDashType || s.indexLabelLineDashType || "solid";
            y =
              "undefined" !== typeof b.indexLabelWrap
                ? b.indexLabelWrap
                : "undefined" !== typeof s.indexLabelWrap
                ? s.indexLabelWrap
                : !0;
            u = s.dataPointIds[D];
            x._eventManager.objectMap[u] = {
              id: u,
              objectType: "dataPoint",
              dataPointIndex: D,
              dataSeriesIndex: 0,
              funnelSection: R[s.reversed ? z.length - 1 - D : D],
            };
            "inside" === s.indexLabelPlacement &&
              ((I[D] =
                D !== da
                  ? s.reversed
                    ? R[D].x2 - R[D].x1
                    : R[D].x3 - R[D].x4
                  : R[D].x3 - R[D].x6),
              20 > I[D] &&
                ((I[D] =
                  D !== da
                    ? s.reversed
                      ? R[D].x3 - R[D].x4
                      : R[D].x2 - R[D].x1
                    : R[D].x2 - R[D].x1),
                (I[D] /= 2)));
            u = b.indexLabelMaxWidth
              ? b.indexLabelMaxWidth
              : s.options.indexLabelMaxWidth
              ? s.indexLabelMaxWidth
              : I[D];
            if (u > I[D] || 0 > u) u = I[D];
            A[D] =
              "inside" === s.indexLabelPlacement
                ? y
                  ? Math.max(R[D].height, d)
                  : 1.5 * d
                : !1;
            B = x.getPercentAndTotal(s, b);
            if (s.indexLabelFormatter || b.indexLabelFormatter)
              C = {
                chart: x.options,
                dataSeries: s,
                dataPoint: b,
                total: B.total,
                percent: B.percent,
              };
            b = b.indexLabelFormatter
              ? b.indexLabelFormatter(C)
              : b.indexLabel
              ? x.replaceKeywordsWithValue(b.indexLabel, b, s, D)
              : s.indexLabelFormatter
              ? s.indexLabelFormatter(C)
              : s.indexLabel
              ? x.replaceKeywordsWithValue(s.indexLabel, b, s, D)
              : b.label
              ? b.label
              : "";
            0 >= r && (r = 0);
            1e3 > u && 1e3 - u < t && (u += 1e3 - u);
            n(s.options.indexLabelMaxWidth) &&
              (s.indexLabelMaxWidth = n(s.indexLabelMaxWidth)
                ? u
                : Math.max(u, s.indexLabelMaxWidth));
            S.roundRect || za(S);
            c = new ja(S, {
              fontSize: d,
              fontFamily: l,
              fontColor: q,
              fontStyle: k,
              fontWeight: p,
              horizontalAlign: c,
              textAlign: w,
              backgroundColor: g,
              borderColor: e,
              borderThickness: h,
              maxWidth: u,
              maxHeight: !1 === A[D] ? (y ? 4.28571429 * d : 1.5 * d) : A[D],
              text: b,
              padding: ea,
              textBaseline: "middle",
            });
            c.measureText();
            c.height = c.height === 2 * c.padding ? 0 : c.height;
            c.width = c.width === 2 * c.padding ? 0 : c.width;
            F.push({
              textBlock: c,
              id: s.reversed ? E : D,
              isDirty: !1,
              lineColor: a,
              lineThickness: r,
              lineDashType: m,
              height: c.height < c.maxHeight ? c.height : c.maxHeight,
              width: c.width < c.maxWidth ? c.width : c.maxWidth,
            });
          }
        }
      }
      function e() {
        var a,
          b,
          c,
          g,
          e,
          f = [];
        e = !1;
        c = 0;
        for (
          var h,
            q = N - Y - U / 2,
            q = s.options.indexLabelMaxWidth
              ? s.indexLabelMaxWidth > q
                ? q
                : s.indexLabelMaxWidth
              : q,
            d = F.length - 1;
          0 <= d;
          d--
        ) {
          h = z[F[d].id];
          c = F[d];
          g = c.textBlock;
          b = (a = r(d) < R.length ? F[r(d)] : null) ? a.textBlock : null;
          c = c.height;
          a && g.y + c + ea > b.y && (e = !0);
          c = h.indexLabelMaxWidth || q;
          if (c > q || 0 > c) c = q;
          f.push(c);
        }
        if (e)
          for (d = F.length - 1; 0 <= d; d--)
            (a = R[d]),
              (F[d].textBlock.maxWidth = f[f.length - (d + 1)]),
              F[d].textBlock.measureText(),
              (F[d].textBlock.height =
                F[d].textBlock.height === 2 * F[d].textBlock.padding
                  ? 0
                  : F[d].textBlock.height),
              (F[d].textBlock.width =
                F[d].textBlock.width === 2 * F[d].textBlock.padding
                  ? 0
                  : F[d].textBlock.width),
              (F[d].textBlock.x = N - q),
              (c =
                F[d].textBlock.height < F[d].textBlock.maxHeight
                  ? F[d].textBlock.height
                  : F[d].textBlock.maxHeight),
              (e =
                F[d].textBlock.width < F[d].textBlock.maxWidth
                  ? F[d].textBlock.width
                  : F[d].textBlock.maxWidth),
              (F[d].height = c),
              (F[d].width = e),
              (c =
                "undefined" !== typeof a.x5
                  ? (a.y2 + a.y4) / 2
                  : (a.y2 + a.y3) / 2),
              (F[d].textBlock.y = c - F[d].height / 2),
              s.reversed
                ? (F[d].textBlock.y + F[d].height > T + A &&
                    (F[d].textBlock.y = T + A - F[d].height),
                  F[d].textBlock.y < sa - A && (F[d].textBlock.y = sa - A))
                : (F[d].textBlock.y < T - A && (F[d].textBlock.y = T - A),
                  F[d].textBlock.y + F[d].height > sa + A &&
                    (F[d].textBlock.y = sa + A - F[d].height));
      }
      function h() {
        var a, b, c, g;
        if ("inside" !== s.indexLabelPlacement)
          for (var e = 0; e < R.length; e++)
            0 == F[e].textBlock.text.length
              ? (F[e].isDirty = !0)
              : ((a = R[e]),
                (c =
                  "undefined" !== typeof a.x5
                    ? (a.y2 + a.y4) / 2
                    : (a.y2 + a.y3) / 2),
                (b = s.reversed
                  ? "undefined" !== typeof a.x5
                    ? c > X
                      ? f(c).x2 + 1
                      : (a.x2 + a.x3) / 2 + 1
                    : (a.x2 + a.x3) / 2 + 1
                  : "undefined" !== typeof a.x5
                  ? c < X
                    ? f(c).x2 + 1
                    : (a.x4 + a.x3) / 2 + 1
                  : (a.x2 + a.x3) / 2 + 1),
                (F[e].textBlock.x = b + U),
                (F[e].textBlock.y = c - F[e].height / 2),
                s.reversed
                  ? (F[e].textBlock.y + F[e].height > T + A &&
                      (F[e].textBlock.y = T + A - F[e].height),
                    F[e].textBlock.y < sa - A && (F[e].textBlock.y = sa - A))
                  : (F[e].textBlock.y < T - A && (F[e].textBlock.y = T - A),
                    F[e].textBlock.y + F[e].height > sa + A &&
                      (F[e].textBlock.y = sa + A - F[e].height)));
        else
          for (e = 0; e < R.length; e++)
            0 == F[e].textBlock.text.length
              ? (F[e].isDirty = !0)
              : ((a = R[e]),
                (b = a.height),
                (c = F[e].height),
                (g = F[e].width),
                b >= c
                  ? ((b =
                      e != da
                        ? (a.x4 + a.x3) / 2 - g / 2
                        : (a.x5 + a.x4) / 2 - g / 2),
                    (c =
                      e != da
                        ? (a.y1 + a.y3) / 2 - c / 2
                        : (a.y1 + a.y4) / 2 - c / 2),
                    (F[e].textBlock.x = b),
                    (F[e].textBlock.y = c))
                  : (F[e].isDirty = !0));
      }
      function q() {
        function a(b, c) {
          var e;
          if (0 > b || b >= F.length) return 0;
          var g,
            f = F[b].textBlock;
          if (0 > c) {
            c *= -1;
            g = p(b);
            e = d(g, b);
            if (e >= c) return (f.y -= c), c;
            if (0 == b) return 0 < e && (f.y -= e), e;
            e += a(g, -(c - e));
            0 < e && (f.y -= e);
            return e;
          }
          g = r(b);
          e = d(b, g);
          if (e >= c) return (f.y += c), c;
          if (b == R.length - 1) return 0 < e && (f.y += e), e;
          e += a(g, c - e);
          0 < e && (f.y += e);
          return e;
        }
        function b() {
          var a,
            e,
            g,
            f,
            h = 0,
            d;
          f = (Q - Z + 2 * A) / l;
          d = l;
          for (var q, k = 1; k < d; k++) {
            g = k * f;
            for (var n = F.length - 1; 0 <= n; n--)
              !F[n].isDirty &&
                F[n].textBlock.y < g &&
                F[n].textBlock.y + F[n].height > g &&
                ((q = r(n)),
                !(q >= F.length - 1) &&
                  F[n].textBlock.y + F[n].height + ea > F[q].textBlock.y &&
                  (F[n].textBlock.y =
                    F[n].textBlock.y + F[n].height - g > g - F[n].textBlock.y
                      ? g + 1
                      : g - F[n].height - 1));
          }
          for (q = R.length - 1; 0 < q; q--)
            if (!F[q].isDirty) {
              g = p(q);
              if (0 > g && ((g = 0), F[g].isDirty)) break;
              if (F[q].textBlock.y < F[g].textBlock.y + F[g].height) {
                e = e || q;
                f = q;
                for (
                  d = 0;
                  F[f].textBlock.y < F[g].textBlock.y + F[g].height + ea;

                ) {
                  a = a || F[f].textBlock.y + F[f].height;
                  d += F[f].height;
                  d += ea;
                  f = g;
                  if (0 >= f) {
                    f = 0;
                    d += F[f].height;
                    break;
                  }
                  g = p(f);
                  if (0 > g) {
                    f = 0;
                    d += F[f].height;
                    break;
                  }
                }
                if (f != q) {
                  h = F[f].textBlock.y;
                  a -= h;
                  a = d - a;
                  h = c(a, e, f);
                  break;
                }
              }
            }
          return h;
        }
        function c(a, b, e) {
          var g = [],
            f = 0,
            h = 0;
          for (a = Math.abs(a); e <= b; e++) g.push(R[e]);
          g.sort(function (a, b) {
            return a.height - b.height;
          });
          for (e = 0; e < g.length; e++)
            if (((b = g[e]), f < a))
              h++,
                (f += F[b.id].height + ea),
                (F[b.id].textBlock.text = ""),
                (F[b.id].indexLabelText = ""),
                (F[b.id].isDirty = !0),
                F[b.id].textBlock.measureText();
            else break;
          return h;
        }
        for (var e, g, f, h, q, k, l = 1, n = 0; n < 2 * l; n++) {
          for (
            var m = F.length - 1;
            0 <= m &&
            !(0 <= p(m) && p(m),
            (f = F[m]),
            (h = f.textBlock),
            (k = (q = r(m) < R.length ? F[r(m)] : null) ? q.textBlock : null),
            (e = +f.height.toFixed(6)),
            (g = +h.y.toFixed(6)),
            !f.isDirty &&
              q &&
              g + e + ea > +k.y.toFixed(6) &&
              ((e = h.y + e + ea - k.y),
              (g = a(m, -e)),
              g < e && (0 < g && (e -= g), (g = a(r(m), e)), g != e)));
            m--
          );
          b();
        }
      }
      function d(a, b) {
        return (
          (b < R.length ? F[b].textBlock.y : s.reversed ? T + A : sa + A) -
          (0 > a
            ? s.reversed
              ? sa - A
              : T - A
            : F[a].textBlock.y + F[a].height + ea)
        );
      }
      function m(a, b, c) {
        var e,
          g,
          f,
          d = [],
          q = A,
          p = [];
        -1 !== b &&
          (0 <= W.indexOf(b)
            ? ((g = W.indexOf(b)), W.splice(g, 1))
            : (W.push(b),
              (W = W.sort(function (a, b) {
                return a - b;
              }))));
        if (0 === W.length) d = ia;
        else {
          g =
            (A *
              (1 != W.length || (0 != W[0] && W[0] != R.length - 1) ? 2 : 1)) /
            k();
          for (var r = 0; r < R.length; r++) {
            if (1 == W.length && 0 == W[0]) {
              if (0 === r) {
                d.push(ia[r]);
                e = q;
                continue;
              }
            } else 0 === r && (e = -1 * q);
            d.push(ia[r] + e);
            if (0 <= W.indexOf(r) || (r < R.length && 0 <= W.indexOf(r + 1)))
              e += g;
          }
        }
        f = (function () {
          for (var a = [], b = 0; b < R.length; b++) a.push(d[b] - R[b].y1);
          return a;
        })();
        var n = {
          startTime: new Date().getTime(),
          duration: c || 500,
          easingFunction: function (a, b, c, e) {
            return L.easing.easeOutQuart(a, b, c, e);
          },
          changeSection: function (a) {
            for (var b, c, e = 0; e < R.length; e++)
              (b = f[e]),
                (c = R[e]),
                (b *= a),
                "undefined" === typeof p[e] && (p[e] = 0),
                0 > p && (p *= -1),
                (c.y1 += b - p[e]),
                (c.y2 += b - p[e]),
                (c.y3 += b - p[e]),
                (c.y4 += b - p[e]),
                c.y5 && ((c.y5 += b - p[e]), (c.y6 += b - p[e])),
                (p[e] = b);
          },
        };
        a._animator.animate(
          0,
          c,
          function (c) {
            var e = a.plotArea.ctx || a.ctx;
            ha = !0;
            e.clearRect(u.x1, u.y1, u.x2 - u.x1, u.y2 - u.y1);
            e.fillStyle = a.backgroundColor;
            e.fillRect(u.x1, u.y1, u.width, u.height);
            n.changeSection(c, b);
            var g = {};
            g.dataSeries = s;
            g.dataPoint = s.reversed
              ? s.dataPoints[z.length - 1 - b]
              : s.dataPoints[b];
            g.index = s.reversed ? z.length - 1 - b : b;
            a.toolTip.highlightObjects([g]);
            for (g = 0; g < R.length; g++) qa(e, R[g], s.fillOpacity);
            w(e);
            J && ("inside" !== s.indexLabelPlacement ? l(e) : h(), t(e));
            1 <= c && (ha = !1);
          },
          null,
          L.easing.easeOutQuart
        );
      }
      function k() {
        for (var a = 0, b = 0; b < R.length - 1; b++)
          (0 <= W.indexOf(b) || 0 <= W.indexOf(b + 1)) && a++;
        return a;
      }
      function l(a) {
        for (var b, c, e, g, h = 0; h < R.length; h++)
          (g = 1 === F[h].lineThickness % 2 ? 0.5 : 0),
            (c = (((R[h].y2 + R[h].y4) / 2) << 0) + g),
            (b = f(c).x2 - 1),
            (e = F[h].textBlock.x),
            (g = ((F[h].textBlock.y + F[h].height / 2) << 0) + g),
            F[h].isDirty ||
              0 == F[h].lineThickness ||
              ((a.strokeStyle = F[h].lineColor),
              (a.lineWidth = F[h].lineThickness),
              a.setLineDash &&
                a.setLineDash(G(F[h].lineDashType, F[h].lineThickness)),
              a.beginPath(),
              a.moveTo(b, c),
              a.lineTo(e, g),
              a.stroke());
      }
      function p(a) {
        for (a -= 1; -1 <= a && -1 != a && F[a].isDirty; a--);
        return a;
      }
      function r(a) {
        for (a += 1; a <= R.length && a != R.length && F[a].isDirty; a++);
        return a;
      }
      function f(a) {
        for (var b, c = 0; c < z.length; c++)
          if (R[c].y1 < a && R[c].y4 > a) {
            b = R[c];
            break;
          }
        return b
          ? ((a = b.y6
              ? a > b.y6
                ? b.x3 + ((b.x4 - b.x3) / (b.y4 - b.y3)) * (a - b.y3)
                : b.x2 + ((b.x3 - b.x2) / (b.y3 - b.y2)) * (a - b.y2)
              : b.x2 + ((b.x3 - b.x2) / (b.y3 - b.y2)) * (a - b.y2)),
            { x1: a, x2: a })
          : -1;
      }
      function t(a) {
        for (var b = 0; b < R.length; b++)
          F[b].isDirty ||
            (a && (F[b].textBlock.ctx = a),
            (F[b].textBlock.y += F[b].textBlock._lineHeight / 2),
            F[b].textBlock.render(!0),
            (F[b].textBlock.y -= F[b].textBlock._lineHeight / 2));
      }
      function w(a) {
        x.plotArea.layoutManager.reset();
        a.roundRect || za(a);
        x.title &&
          (x.title.dockInsidePlotArea ||
            ("center" === x.title.horizontalAlign &&
              "center" === x.title.verticalAlign)) &&
          ((x.title.ctx = a), x.title.render());
        if (x.subtitles)
          for (var b = 0; b < x.subtitles.length; b++) {
            var c = x.subtitles[b];
            if (
              c.dockInsidePlotArea ||
              ("center" === c.horizontalAlign && "center" === c.verticalAlign)
            )
              (x.subtitles.ctx = a), c.render();
          }
        x.legend &&
          (x.legend.dockInsidePlotArea ||
            ("center" === x.legend.horizontalAlign &&
              "center" === x.legend.verticalAlign)) &&
          ((x.legend.ctx = a), x.legend.setLayout(), x.legend.render());
        va.fNg && va.fNg(x);
      }
      var x = this;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        for (
          var s = this.data[a.dataSeriesIndexes[0]],
            z = s.dataPoints,
            u = this.plotArea,
            A = 0.025 * u.width,
            C = 0.01 * u.width,
            B = 0,
            H = u.height - 2 * A,
            M = Math.min(u.width - 2 * C, 2.8 * u.height),
            J = !1,
            K = 0;
          K < z.length;
          K++
        )
          if (
            (!J &&
              "undefined" !== typeof z[K].indexLabel &&
              null !== z[K].indexLabel &&
              0 < z[K].indexLabel.toString().length &&
              (J = !0),
            !J &&
              "undefined" !== typeof z[K].label &&
              null !== z[K].label &&
              0 < z[K].label.toString().length &&
              (J = !0),
            (!J && "function" === typeof s.indexLabelFormatter) ||
              "function" === typeof z[K].indexLabelFormatter)
          )
            J = !0;
        J =
          J ||
          ("undefined" !== typeof s.indexLabel &&
            null !== s.indexLabel &&
            0 < s.indexLabel.toString().length);
        ("inside" !== s.indexLabelPlacement && J) ||
          (C = (u.width - 0.75 * M) / 2);
        var K = u.x1 + C,
          N = u.x2 - C,
          Z = u.y1 + A,
          Q = u.y2 - A,
          S = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
        if (0 != s.length && s.dataPoints && s.visible && 0 !== z.length) {
          var P, E;
          a = (75 * M) / 100;
          var U = (30 * (N - a)) / 100;
          "funnel" === s.type
            ? ((P = n(s.options.neckHeight) ? 0.35 * H : s.neckHeight),
              (E = n(s.options.neckWidth) ? 0.25 * a : s.neckWidth),
              "string" === typeof P && P.match(/%$/)
                ? ((P = parseInt(P)), (P = (P * H) / 100))
                : (P = parseInt(P)),
              "string" === typeof E && E.match(/%$/)
                ? ((E = parseInt(E)), (E = (E * a) / 100))
                : (E = parseInt(E)),
              P > H ? (P = H) : 0 >= P && (P = 0),
              E > a ? (E = a - 0.5) : 0 >= E && (E = 0))
            : "pyramid" === s.type &&
              ((E = P = 0), (s.reversed = s.reversed ? !1 : !0));
          var C = K + a / 2,
            V = K,
            Y = K + a,
            T = s.reversed ? Q : Z,
            O = C - E / 2,
            $ = C + E / 2,
            X = s.reversed ? Z + P : Q - P,
            sa = s.reversed ? Z : Q;
          E = s.valueRepresents = s.valueRepresents
            ? s.valueRepresents
            : "height";
          K = [];
          a = [];
          var R = [],
            C = [],
            ba = Z,
            da,
            ca = (X - T) / (O - V),
            fa = -ca,
            M = "area" === E ? c() : g();
          if (-1 !== M) {
            if (s.reversed)
              for (C.push(ba), E = M.length - 1; 0 < E; E--)
                (ba += M[E]), C.push(ba);
            else for (E = 0; E < M.length; E++) (ba += M[E]), C.push(ba);
            if (s.reversed)
              for (E = 0; E < M.length; E++)
                C[E] < X
                  ? (K.push(O), a.push($), (da = E))
                  : (K.push((C[E] - T + ca * V) / ca),
                    a.push((C[E] - T + fa * Y) / fa));
            else
              for (E = 0; E < M.length; E++)
                C[E] < X
                  ? (K.push((C[E] - T + ca * V) / ca),
                    a.push((C[E] - T + fa * Y) / fa),
                    (da = E))
                  : (K.push(O), a.push($));
            for (E = 0; E < M.length - 1; E++)
              (ba = s.reversed
                ? z[z.length - 1 - E].color
                  ? z[z.length - 1 - E].color
                  : s._colorSet[(z.length - 1 - E) % s._colorSet.length]
                : z[E].color
                ? z[E].color
                : s._colorSet[E % s._colorSet.length]),
                E === da
                  ? R.push({
                      x1: K[E],
                      y1: C[E],
                      x2: a[E],
                      y2: C[E],
                      x3: $,
                      y3: X,
                      x4: a[E + 1],
                      y4: C[E + 1],
                      x5: K[E + 1],
                      y5: C[E + 1],
                      x6: O,
                      y6: X,
                      id: E,
                      height: C[E + 1] - C[E],
                      color: ba,
                    })
                  : R.push({
                      x1: K[E],
                      y1: C[E],
                      x2: a[E],
                      y2: C[E],
                      x3: a[E + 1],
                      y3: C[E + 1],
                      x4: K[E + 1],
                      y4: C[E + 1],
                      id: E,
                      height: C[E + 1] - C[E],
                      color: ba,
                    });
            var ea = 2,
              F = [],
              ha = !1,
              W = [],
              ia = [],
              K = !1;
            a = a = 0;
            Da(W);
            for (E = 0; E < z.length; E++)
              z[E].exploded &&
                ((K = !0), s.reversed ? W.push(z.length - 1 - E) : W.push(E));
            S.clearRect(u.x1, u.y1, u.width, u.height);
            S.fillStyle = x.backgroundColor;
            S.fillRect(u.x1, u.y1, u.width, u.height);
            if (
              J &&
              s.visible &&
              (b(), h(), "inside" !== s.indexLabelPlacement)
            ) {
              e();
              q();
              for (E = 0; E < z.length; E++)
                F[E].isDirty ||
                  ((a = F[E].textBlock.x + F[E].width),
                  (a = (N - a) / 2),
                  0 == E && (B = a),
                  B > a && (B = a));
              for (E = 0; E < R.length; E++)
                (R[E].x1 += B),
                  (R[E].x2 += B),
                  (R[E].x3 += B),
                  (R[E].x4 += B),
                  R[E].x5 && ((R[E].x5 += B), (R[E].x6 += B)),
                  (F[E].textBlock.x += B);
            }
            for (E = 0; E < R.length; E++)
              (B = R[E]), qa(S, B, s.fillOpacity), ia.push(B.y1);
            w(S);
            J &&
              s.visible &&
              ("inside" === s.indexLabelPlacement || x.animationEnabled || l(S),
              x.animationEnabled || t());
            if (!J)
              for (E = 0; E < z.length; E++)
                (B = s.dataPointIds[E]),
                  (a = {
                    id: B,
                    objectType: "dataPoint",
                    dataPointIndex: E,
                    dataSeriesIndex: 0,
                    funnelSection: R[s.reversed ? z.length - 1 - E : E],
                  }),
                  (x._eventManager.objectMap[B] = a);
            !x.animationEnabled && K
              ? m(x, -1, 0)
              : x.animationEnabled && !x.animatedRender && m(x, -1, 0);
            this.funnelPyramidClickHandler = function (a) {
              var b = -1;
              if (
                !ha &&
                !x.isAnimating &&
                (n(a.dataSeries.explodeOnClick) ||
                  a.dataSeries.explodeOnClick) &&
                ((b = s.reversed
                  ? z.length - 1 - a.dataPointIndex
                  : a.dataPointIndex),
                0 <= b)
              ) {
                a = b;
                if ("funnel" === s.type || "pyramid" === s.type)
                  s.reversed
                    ? (z[z.length - 1 - a].exploded = z[z.length - 1 - a]
                        .exploded
                        ? !1
                        : !0)
                    : (z[a].exploded = z[a].exploded ? !1 : !0);
                m(x, b, 500);
              }
            };
            return {
              source: S,
              dest: this.plotArea.ctx,
              animationCallback: function (a, b) {
                L.fadeInAnimation(a, b);
                1 <= a && (m(x, -1, 500), w(x.plotArea.ctx || x.ctx));
              },
              easingFunction: L.easing.easeInQuad,
              animationBase: 0,
            };
          }
        }
      }
    };
    m.prototype.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (a) {
          window.setTimeout(a, 1e3 / 60);
        }
      );
    })();
    m.prototype.cancelRequestAnimFrame =
      window.cancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout;
    m.prototype.set = function (a, g, c) {
      c = "undefined" === typeof c ? !0 : c;
      "options" === a
        ? ((this.options = g), c && this.render())
        : m.base.set.call(this, a, g, c);
    };
    m.prototype.exportChart = function (a) {
      a = "undefined" === typeof a ? {} : a;
      var g = a.format ? a.format : "png",
        c = a.fileName ? a.fileName : this.exportFileName;
      if (a.toDataURL) return this.canvas.toDataURL("image/" + g);
      var b = this.canvas;
      if (b && g && c) {
        c = c + "." + g;
        a = "image/" + g;
        var b = b.toDataURL(a),
          e = !1,
          h = document.createElement("a");
        h.download = c;
        h.href = b;
        if ("undefined" !== typeof Blob && new Blob()) {
          for (
            var d = b.replace(/^data:[a-z\/]*;base64,/, ""),
              d = atob(d),
              n = new ArrayBuffer(d.length),
              n = new Uint8Array(n),
              m = 0;
            m < d.length;
            m++
          )
            n[m] = d.charCodeAt(m);
          g = new Blob([n.buffer], { type: "image/" + g });
          try {
            window.navigator.msSaveBlob(g, c), (e = !0);
          } catch (k) {
            (h.dataset.downloadurl = [a, h.download, h.href].join(":")),
              (h.href = window.URL.createObjectURL(g));
          }
        }
        if (!e)
          try {
            (event = document.createEvent("MouseEvents")),
              event.initMouseEvent(
                "click",
                !0,
                !1,
                window,
                0,
                0,
                0,
                0,
                0,
                !1,
                !1,
                !1,
                !1,
                0,
                null
              ),
              h.dispatchEvent
                ? h.dispatchEvent(event)
                : h.fireEvent && h.fireEvent("onclick");
          } catch (l) {
            (g = window.open()),
              g.document.write(
                "<img src='" +
                  b +
                  "'></img><div>Please right click on the image and save it to your device</div>"
              ),
              g.document.close();
          }
      }
    };
    m.prototype.print = function () {
      var a = this.exportChart({ toDataURL: !0 }),
        g = document.createElement("iframe");
      g.setAttribute("class", "canvasjs-chart-print-frame");
      Q(g, {
        position: "absolute",
        width: "100%",
        border: "0px",
        margin: "0px 0px 0px 0px",
        padding: "0px 0px 0px 0px",
      });
      g.style.height = this.height + "px";
      this._canvasJSContainer.appendChild(g);
      var c = this,
        b = g.contentWindow || g.contentDocument.document || g.contentDocument;
      b.document.open();
      b.document.write(
        '<!DOCTYPE HTML>\n<html><body><img src="' + a + '"/><body/></html>'
      );
      b.document.body &&
        b.document.body.style &&
        ((b.document.body.style.margin = "0px 0px 0px 0px"),
        (b.document.body.style.padding = "0px 0px 0px 0px"));
      b.document.close();
      setTimeout(function () {
        b.focus();
        b.print();
        setTimeout(function () {
          c._canvasJSContainer.removeChild(g);
        }, 1e3);
      }, 500);
    };
    m.prototype.getPercentAndTotal = function (a, g) {
      var c = null,
        b = null,
        e = (c = null);
      if (0 <= a.type.indexOf("stacked"))
        (b = 0),
          (c = g.x.getTime ? g.x.getTime() : g.x),
          c in a.plotUnit.yTotals &&
            ((b = a.plotUnit.yTotals[c]),
            (c = a.plotUnit.yAbsTotals[c]),
            (e = isNaN(g.y) ? 0 : 0 === c ? 0 : 100 * (g.y / c)));
      else if (
        "pie" === a.type ||
        "doughnut" === a.type ||
        "funnel" === a.type ||
        "pyramid" === a.type
      ) {
        for (c = b = 0; c < a.dataPoints.length; c++)
          isNaN(a.dataPoints[c].y) || (b += a.dataPoints[c].y);
        e = isNaN(g.y) ? 0 : 100 * (g.y / b);
      }
      return { percent: e, total: b };
    };
    m.prototype.replaceKeywordsWithValue = function (a, g, c, b, e) {
      var h = this;
      e = "undefined" === typeof e ? 0 : e;
      if (
        (0 <= c.type.indexOf("stacked") ||
          "pie" === c.type ||
          "doughnut" === c.type ||
          "funnel" === c.type ||
          "pyramid" === c.type) &&
        (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
      ) {
        var d = "#percent",
          n = "#total",
          m = this.getPercentAndTotal(c, g),
          n = isNaN(m.total) ? n : m.total,
          d = isNaN(m.percent) ? d : m.percent;
        do {
          m = "";
          if (c.percentFormatString) m = c.percentFormatString;
          else {
            var m = "#,##0.",
              k = Math.max(Math.ceil(Math.log(1 / Math.abs(d)) / Math.LN10), 2);
            if (isNaN(k) || !isFinite(k)) k = 2;
            for (var l = 0; l < k; l++) m += "#";
            c.percentFormatString = m;
          }
          a = a.replace("#percent", fa(d, m, h._cultureInfo));
          a = a.replace(
            "#total",
            fa(
              n,
              c.yValueFormatString ? c.yValueFormatString : "#,##0.########",
              h._cultureInfo
            )
          );
        } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"));
      }
      return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function (a) {
        if (
          ('"' === a[0] && '"' === a[a.length - 1]) ||
          ("'" === a[0] && "'" === a[a.length - 1])
        )
          return a.slice(1, a.length - 1);
        a = Ga(a.slice(1, a.length - 1));
        a = a.replace("#index", e);
        var d = null;
        try {
          var f = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
          f && 0 < f.length && ((d = Ga(f[2])), (a = Ga(f[1])));
        } catch (q) {}
        f = null;
        if ("color" === a)
          return "waterfall" === c.type
            ? g.color
              ? g.color
              : 0 < g.y
              ? c.risingColor
              : c.fallingColor
            : "error" === c.type
            ? c.color
              ? c.color
              : c._colorSet[d % c._colorSet.length]
            : g.color
            ? g.color
            : c.color
            ? c.color
            : c._colorSet[b % c._colorSet.length];
        if (g.hasOwnProperty(a)) f = g;
        else if (c.hasOwnProperty(a)) f = c;
        else return "";
        f = f[a];
        null !== d && (f = f[d]);
        return "x" === a
          ? ((c.axisX && "dateTime" === c.axisX.valueType) ||
              "dateTime" === c.xValueType ||
              (g.x && g.x.getTime)) &&
            !c.axisX.logarithmic
            ? Ca(
                f,
                g.xValueFormatString
                  ? g.xValueFormatString
                  : c.xValueFormatString
                  ? c.xValueFormatString
                  : (c.xValueFormatString =
                      h.axisX && h.axisX.autoValueFormatString
                        ? h.axisX.autoValueFormatString
                        : "DD MMM YY"),
                h._cultureInfo
              )
            : fa(
                f,
                g.xValueFormatString
                  ? g.xValueFormatString
                  : c.xValueFormatString
                  ? c.xValueFormatString
                  : (c.xValueFormatString = "#,##0.########"),
                h._cultureInfo
              )
          : "y" === a
          ? fa(
              f,
              g.yValueFormatString
                ? g.yValueFormatString
                : c.yValueFormatString
                ? c.yValueFormatString
                : (c.yValueFormatString = "#,##0.########"),
              h._cultureInfo
            )
          : "z" === a
          ? fa(
              f,
              g.zValueFormatString
                ? g.zValueFormatString
                : c.zValueFormatString
                ? c.zValueFormatString
                : (c.zValueFormatString = "#,##0.########"),
              h._cultureInfo
            )
          : f;
      });
    };
    pa(S, Y);
    S.prototype.setLayout = function () {
      var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
        g = a.layoutManager.getFreeSpace(),
        c = null,
        b = 0,
        e = 0,
        h = 0,
        d = 0,
        m = (this.markerMargin =
          this.chart.options.legend &&
          !n(this.chart.options.legend.markerMargin)
            ? this.chart.options.legend.markerMargin
            : 0.3 * this.fontSize);
      this.height = 0;
      var v = [],
        k = [];
      if ("top" === this.verticalAlign || "bottom" === this.verticalAlign)
        (this.orientation = "horizontal"),
          (c = this.verticalAlign),
          (h = this.maxWidth =
            null !== this.maxWidth ? this.maxWidth : g.width),
          (d = this.maxHeight =
            null !== this.maxHeight ? this.maxHeight : 0.5 * g.height);
      else if ("center" === this.verticalAlign) {
        this.orientation = "vertical";
        if (
          "left" === this.horizontalAlign ||
          "center" === this.horizontalAlign ||
          "right" === this.horizontalAlign
        )
          c = this.horizontalAlign;
        h = this.maxWidth =
          null !== this.maxWidth ? this.maxWidth : 0.5 * g.width;
        d = this.maxHeight =
          null !== this.maxHeight ? this.maxHeight : g.height;
      }
      this.errorMarkerColor = [];
      for (var l = 0; l < this.dataSeries.length; l++) {
        var p = this.dataSeries[l];
        if (p.dataPoints && p.dataPoints.length) {
          if (
            "pie" !== p.type &&
            "doughnut" !== p.type &&
            "funnel" !== p.type &&
            "pyramid" !== p.type
          ) {
            var r = (p.legendMarkerType = p.legendMarkerType
                ? p.legendMarkerType
                : ("line" !== p.type &&
                    "stepLine" !== p.type &&
                    "spline" !== p.type &&
                    "scatter" !== p.type &&
                    "bubble" !== p.type) ||
                  !p.markerType
                ? "error" === p.type && p._linkedSeries
                  ? p._linkedSeries.legendMarkerType
                    ? p._linkedSeries.legendMarkerType
                    : V.getDefaultLegendMarker(p._linkedSeries.type)
                  : V.getDefaultLegendMarker(p.type)
                : p.markerType),
              f = p.legendText
                ? p.legendText
                : this.itemTextFormatter
                ? this.itemTextFormatter({
                    chart: this.chart,
                    legend: this.options,
                    dataSeries: p,
                    dataPoint: null,
                  })
                : p.name,
              t = (p.legendMarkerColor = p.legendMarkerColor
                ? p.legendMarkerColor
                : p.markerColor
                ? p.markerColor
                : "error" === p.type
                ? n(p.whiskerColor)
                  ? p._colorSet[0]
                  : p.whiskerColor
                : p._colorSet[0]),
              w =
                p.markerSize ||
                ("line" !== p.type &&
                  "stepLine" !== p.type &&
                  "spline" !== p.type)
                  ? 0.75 * this.lineHeight
                  : 0,
              x = p.legendMarkerBorderColor
                ? p.legendMarkerBorderColor
                : p.markerBorderColor,
              s = p.legendMarkerBorderThickness
                ? p.legendMarkerBorderThickness
                : p.markerBorderThickness
                ? Math.max(1, Math.round(0.2 * w))
                : 0;
            "error" === p.type && this.errorMarkerColor.push(t);
            f = p.legendText = this.chart.replaceKeywordsWithValue(
              f,
              p.dataPoints[0],
              p,
              l
            );
            r = {
              markerType: r,
              markerColor: t,
              text: f,
              textBlock: null,
              chartType: p.type,
              markerSize: w,
              lineColor: p._colorSet[0],
              dataSeriesIndex: p.index,
              dataPointIndex: null,
              markerBorderColor: x,
              markerBorderThickness: s,
            };
            v.push(r);
          } else
            for (var z = 0; z < p.dataPoints.length; z++) {
              var u = p.dataPoints[z],
                r = u.legendMarkerType
                  ? u.legendMarkerType
                  : p.legendMarkerType
                  ? p.legendMarkerType
                  : V.getDefaultLegendMarker(p.type),
                f = u.legendText
                  ? u.legendText
                  : p.legendText
                  ? p.legendText
                  : this.itemTextFormatter
                  ? this.itemTextFormatter({
                      chart: this.chart,
                      legend: this.options,
                      dataSeries: p,
                      dataPoint: u,
                    })
                  : u.name
                  ? u.name
                  : "DataPoint: " + (z + 1),
                t = u.legendMarkerColor
                  ? u.legendMarkerColor
                  : p.legendMarkerColor
                  ? p.legendMarkerColor
                  : u.color
                  ? u.color
                  : p.color
                  ? p.color
                  : p._colorSet[z % p._colorSet.length],
                w = 0.75 * this.lineHeight,
                x = u.legendMarkerBorderColor
                  ? u.legendMarkerBorderColor
                  : p.legendMarkerBorderColor
                  ? p.legendMarkerBorderColor
                  : u.markerBorderColor
                  ? u.markerBorderColor
                  : p.markerBorderColor,
                s = u.legendMarkerBorderThickness
                  ? u.legendMarkerBorderThickness
                  : p.legendMarkerBorderThickness
                  ? p.legendMarkerBorderThickness
                  : u.markerBorderThickness || p.markerBorderThickness
                  ? Math.max(1, Math.round(0.2 * w))
                  : 0,
                f = this.chart.replaceKeywordsWithValue(f, u, p, z),
                r = {
                  markerType: r,
                  markerColor: t,
                  text: f,
                  textBlock: null,
                  chartType: p.type,
                  markerSize: w,
                  dataSeriesIndex: l,
                  dataPointIndex: z,
                  markerBorderColor: x,
                  markerBorderThickness: s,
                };
              (u.showInLegend || (p.showInLegend && !1 !== u.showInLegend)) &&
                v.push(r);
            }
          n(p.legendText) && (p.legendText = p.name);
        }
      }
      !0 === this.reversed && v.reverse();
      if (0 < v.length) {
        p = null;
        f = u = z = 0;
        u =
          null !== this.itemWidth
            ? null !== this.itemMaxWidth
              ? Math.min(this.itemWidth, this.itemMaxWidth, h)
              : (this.itemMaxWidth = Math.min(this.itemWidth, h))
            : null !== this.itemMaxWidth
            ? Math.min(this.itemMaxWidth, h)
            : (this.itemMaxWidth = h);
        w = 0 === w ? 0.75 * this.lineHeight : w;
        u = (this.itemMaxWidth ? this.itemMaxWidth : u) - (w + m);
        for (l = 0; l < v.length; l++) {
          r = v[l];
          t = u;
          if (
            "line" === r.chartType ||
            "spline" === r.chartType ||
            "stepLine" === r.chartType
          )
            t -= 2 * 0.1 * this.lineHeight;
          if (
            !(
              0 >= d ||
              "undefined" === typeof d ||
              0 >= t ||
              "undefined" === typeof t
            )
          )
            if ("horizontal" === this.orientation) {
              r.textBlock = new ja(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: t,
                maxHeight: this.itemWrap ? d : this.lineHeight,
                angle: 0,
                text: r.text,
                textAlign: "left",
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                textBaseline: "middle",
              });
              r.textBlock.measureText();
              null !== this.itemWidth &&
                (r.textBlock.width =
                  this.itemWidth -
                  (w +
                    m +
                    ("line" === r.chartType ||
                    "spline" === r.chartType ||
                    "stepLine" === r.chartType
                      ? 2 * 0.1 * this.lineHeight
                      : 0)));
              if (
                !p ||
                p.width +
                  Math.round(
                    r.textBlock.width +
                      w +
                      m +
                      (0 === p.width ? 0 : this.horizontalSpacing) +
                      ("line" === r.chartType ||
                      "spline" === r.chartType ||
                      "stepLine" === r.chartType
                        ? 2 * 0.1 * this.lineHeight
                        : 0)
                  ) >
                  h
              )
                (p = { items: [], width: 0 }),
                  k.push(p),
                  (this.height += f),
                  (f = 0);
              f = Math.max(
                f,
                r.textBlock.height ? r.textBlock.height : this.lineHeight
              );
              r.textBlock.x = p.width;
              r.textBlock.y = 0;
              p.width += Math.round(
                r.textBlock.width +
                  w +
                  m +
                  (0 === p.width ? 0 : this.horizontalSpacing) +
                  ("line" === r.chartType ||
                  "spline" === r.chartType ||
                  "stepLine" === r.chartType
                    ? 2 * 0.1 * this.lineHeight
                    : 0)
              );
              p.items.push(r);
              this.width = Math.max(p.width, this.width);
            } else
              (r.textBlock = new ja(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: u,
                maxHeight: !0 === this.itemWrap ? d : 1.5 * this.fontSize,
                angle: 0,
                text: r.text,
                textAlign: "left",
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                textBaseline: "middle",
              })),
                r.textBlock.measureText(),
                null !== this.itemWidth &&
                  (r.textBlock.width =
                    this.itemWidth -
                    (w +
                      m +
                      ("line" === r.chartType ||
                      "spline" === r.chartType ||
                      "stepLine" === r.chartType
                        ? 2 * 0.1 * this.lineHeight
                        : 0))),
                this.height < d - this.lineHeight
                  ? ((p = { items: [], width: 0 }), k.push(p))
                  : ((p = k[z]), (z = (z + 1) % k.length)),
                p &&
                  ((this.height += r.textBlock.height
                    ? r.textBlock.height
                    : this.lineHeight),
                  (r.textBlock.x = p.width),
                  (r.textBlock.y = 0),
                  (p.width += Math.round(
                    r.textBlock.width +
                      w +
                      m +
                      (0 === p.width ? 0 : this.horizontalSpacing) +
                      ("line" === r.chartType ||
                      "spline" === r.chartType ||
                      "stepLine" === r.chartType
                        ? 2 * 0.1 * this.lineHeight
                        : 0)
                  )),
                  p.items.push(r),
                  (this.width = Math.max(p.width, this.width)));
        }
        this.height =
          !1 === this.itemWrap ? k.length * this.lineHeight : this.height + f;
        this.height = Math.min(d, this.height);
        this.width = Math.min(h, this.width);
      }
      "top" === this.verticalAlign
        ? ((e =
            "left" === this.horizontalAlign
              ? g.x1
              : "right" === this.horizontalAlign
              ? g.x2 - this.width
              : g.x1 + g.width / 2 - this.width / 2),
          (b = g.y1))
        : "center" === this.verticalAlign
        ? ((e =
            "left" === this.horizontalAlign
              ? g.x1
              : "right" === this.horizontalAlign
              ? g.x2 - this.width
              : g.x1 + g.width / 2 - this.width / 2),
          (b = g.y1 + g.height / 2 - this.height / 2))
        : "bottom" === this.verticalAlign &&
          ((e =
            "left" === this.horizontalAlign
              ? g.x1
              : "right" === this.horizontalAlign
              ? g.x2 - this.width
              : g.x1 + g.width / 2 - this.width / 2),
          (b = g.y2 - this.height));
      this.items = v;
      for (l = 0; l < this.items.length; l++)
        (r = v[l]),
          (r.id = ++this.chart._eventManager.lastObjectId),
          (this.chart._eventManager.objectMap[r.id] = {
            id: r.id,
            objectType: "legendItem",
            legendItemIndex: l,
            dataSeriesIndex: r.dataSeriesIndex,
            dataPointIndex: r.dataPointIndex,
          });
      this.markerSize = w;
      this.rows = k;
      0 < v.length &&
        a.layoutManager.registerSpace(c, {
          width: this.width + 2 + 2,
          height: this.height + 5 + 5,
        });
      this.bounds = { x1: e, y1: b, x2: e + this.width, y2: b + this.height };
    };
    S.prototype.render = function () {
      var a = this.bounds.x1,
        g = this.bounds.y1,
        c = this.markerMargin,
        b = this.maxWidth,
        e = this.maxHeight,
        h = this.markerSize,
        d = this.rows;
      ((0 < this.borderThickness && this.borderColor) ||
        this.backgroundColor) &&
        this.ctx.roundRect(
          a,
          g,
          this.width,
          this.height,
          this.cornerRadius,
          this.borderThickness,
          this.backgroundColor,
          this.borderColor
        );
      for (var n = 0, m = 0; m < d.length; m++) {
        for (var k = d[m], l = 0, p = 0; p < k.items.length; p++) {
          var r = k.items[p],
            f =
              r.textBlock.x + a + (0 === p ? 0.2 * h : this.horizontalSpacing),
            v = g + n,
            w = f;
          this.chart.data[r.dataSeriesIndex].visible ||
            (this.ctx.globalAlpha = 0.5);
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.rect(a, g, b, Math.max(e - (e % this.lineHeight), 0));
          this.ctx.clip();
          if (
            "line" === r.chartType ||
            "stepLine" === r.chartType ||
            "spline" === r.chartType
          )
            (this.ctx.strokeStyle = r.lineColor),
              (this.ctx.lineWidth = Math.ceil(this.lineHeight / 8)),
              this.ctx.beginPath(),
              this.ctx.moveTo(
                f - 0.1 * this.lineHeight,
                v + this.lineHeight / 2
              ),
              this.ctx.lineTo(
                f + 0.85 * this.lineHeight,
                v + this.lineHeight / 2
              ),
              this.ctx.stroke(),
              (w -= 0.1 * this.lineHeight);
          if ("error" === r.chartType) {
            this.ctx.strokeStyle = this.errorMarkerColor[0];
            this.ctx.lineWidth = h / 8;
            this.ctx.beginPath();
            var x = f - 0.08 * this.lineHeight + 0.1 * this.lineHeight,
              s = v + 0.15 * this.lineHeight,
              z = 0.7 * this.lineHeight,
              u = z + 0.02 * this.lineHeight;
            this.ctx.moveTo(x, s);
            this.ctx.lineTo(x + z, s);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(x + z / 2, s);
            this.ctx.lineTo(x + z / 2, s + u);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(x, s + u);
            this.ctx.lineTo(x + z, s + u);
            this.ctx.stroke();
            this.errorMarkerColor.shift();
          }
          X.drawMarker(
            f + h / 2,
            v + this.lineHeight / 2,
            this.ctx,
            r.markerType,
            "error" === r.chartType ||
              "line" === r.chartType ||
              "spline" === r.chartType
              ? r.markerSize / 2
              : r.markerSize,
            r.markerColor,
            r.markerBorderColor,
            r.markerBorderThickness
          );
          r.textBlock.x = f + c + h;
          if (
            "line" === r.chartType ||
            "stepLine" === r.chartType ||
            "spline" === r.chartType
          )
            r.textBlock.x += 0.1 * this.lineHeight;
          r.textBlock.y = Math.round(v + this.lineHeight / 2);
          r.textBlock.render(!0);
          this.ctx.restore();
          l =
            0 < p
              ? Math.max(
                  l,
                  r.textBlock.height ? r.textBlock.height : this.lineHeight
                )
              : r.textBlock.height
              ? r.textBlock.height
              : this.lineHeight;
          this.chart.data[r.dataSeriesIndex].visible ||
            (this.ctx.globalAlpha = 1);
          f = U(r.id);
          this.ghostCtx.fillStyle = f;
          this.ghostCtx.beginPath();
          this.ghostCtx.fillRect(
            w,
            r.textBlock.y - this.lineHeight / 2,
            r.textBlock.x + r.textBlock.width - w,
            r.textBlock.height ? r.textBlock.height : this.lineHeight
          );
          r.x1 = this.chart._eventManager.objectMap[r.id].x1 = w;
          r.y1 = this.chart._eventManager.objectMap[r.id].y1 =
            r.textBlock.y - this.lineHeight / 2;
          r.x2 = this.chart._eventManager.objectMap[r.id].x2 =
            r.textBlock.x + r.textBlock.width;
          r.y2 = this.chart._eventManager.objectMap[r.id].y2 =
            r.textBlock.y +
            (r.textBlock.height ? r.textBlock.height : this.lineHeight) -
            this.lineHeight / 2;
        }
        n += l;
      }
    };
    pa(V, Y);
    V.prototype.getDefaultAxisPlacement = function () {
      var a = this.type;
      if (
        "column" === a ||
        "line" === a ||
        "stepLine" === a ||
        "spline" === a ||
        "area" === a ||
        "stepArea" === a ||
        "splineArea" === a ||
        "stackedColumn" === a ||
        "stackedLine" === a ||
        "bubble" === a ||
        "scatter" === a ||
        "stackedArea" === a ||
        "stackedColumn100" === a ||
        "stackedLine100" === a ||
        "stackedArea100" === a ||
        "candlestick" === a ||
        "ohlc" === a ||
        "rangeColumn" === a ||
        "rangeArea" === a ||
        "rangeSplineArea" === a ||
        "boxAndWhisker" === a ||
        "waterfall" === a
      )
        return "normal";
      if (
        "bar" === a ||
        "stackedBar" === a ||
        "stackedBar100" === a ||
        "rangeBar" === a
      )
        return "xySwapped";
      if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a)
        return "none";
      "error" !== a && window.console.log("Unknown Chart Type: " + a);
      return null;
    };
    V.getDefaultLegendMarker = function (a) {
      if (
        "column" === a ||
        "stackedColumn" === a ||
        "stackedLine" === a ||
        "bar" === a ||
        "stackedBar" === a ||
        "stackedBar100" === a ||
        "bubble" === a ||
        "scatter" === a ||
        "stackedColumn100" === a ||
        "stackedLine100" === a ||
        "stepArea" === a ||
        "candlestick" === a ||
        "ohlc" === a ||
        "rangeColumn" === a ||
        "rangeBar" === a ||
        "rangeArea" === a ||
        "rangeSplineArea" === a ||
        "boxAndWhisker" === a ||
        "waterfall" === a
      )
        return "square";
      if (
        "line" === a ||
        "stepLine" === a ||
        "spline" === a ||
        "pie" === a ||
        "doughnut" === a
      )
        return "circle";
      if (
        "area" === a ||
        "splineArea" === a ||
        "stackedArea" === a ||
        "stackedArea100" === a ||
        "funnel" === a ||
        "pyramid" === a
      )
        return "triangle";
      if ("error" === a) return "none";
      window.console.log("Unknown Chart Type: " + a);
      return null;
    };
    V.prototype.getDataPointAtX = function (a, g) {
      if (!this.dataPoints || 0 === this.dataPoints.length) return null;
      var c = { dataPoint: null, distance: Infinity, index: NaN },
        b = null,
        e = 0,
        h = 0,
        d = 1,
        n = Infinity,
        m = 0,
        k = 0,
        l = 0;
      "none" !== this.chart.plotInfo.axisPlacement &&
        (this.axisX.logarithmic
          ? ((l = Math.log(
              this.dataPoints[this.dataPoints.length - 1].x /
                this.dataPoints[0].x
            )),
            (l =
              1 < l
                ? Math.min(
                    Math.max(
                      (((this.dataPoints.length - 1) / l) *
                        Math.log(a / this.dataPoints[0].x)) >>
                        0,
                      0
                    ),
                    this.dataPoints.length
                  )
                : 0))
          : ((l =
              this.dataPoints[this.dataPoints.length - 1].x -
              this.dataPoints[0].x),
            (l =
              0 < l
                ? Math.min(
                    Math.max(
                      (((this.dataPoints.length - 1) / l) *
                        (a - this.dataPoints[0].x)) >>
                        0,
                      0
                    ),
                    this.dataPoints.length
                  )
                : 0)));
      for (;;) {
        h = 0 < d ? l + e : l - e;
        if (0 <= h && h < this.dataPoints.length) {
          var b = this.dataPoints[h],
            p = this.axisX.logarithmic
              ? b.x > a
                ? b.x / a
                : a / b.x
              : Math.abs(b.x - a);
          p < c.distance &&
            ((c.dataPoint = b), (c.distance = p), (c.index = h));
          b = p;
          b <= n ? (n = b) : 0 < d ? m++ : k++;
          if (1e3 < m && 1e3 < k) break;
        } else if (0 > l - e && l + e >= this.dataPoints.length) break;
        -1 === d ? (e++, (d = 1)) : (d = -1);
      }
      return g ||
        (c.dataPoint.x.getTime ? c.dataPoint.x.getTime() : c.dataPoint.x) !==
          (a.getTime ? a.getTime() : a)
        ? g && null !== c.dataPoint
          ? c
          : null
        : c;
    };
    V.prototype.getDataPointAtXY = function (a, g, c) {
      if (
        !this.dataPoints ||
        0 === this.dataPoints.length ||
        a < this.chart.plotArea.x1 ||
        a > this.chart.plotArea.x2 ||
        g < this.chart.plotArea.y1 ||
        g > this.chart.plotArea.y2
      )
        return null;
      c = c || !1;
      var b = [],
        e = 0,
        h = 0,
        d = 1,
        m = !1,
        v = Infinity,
        k = 0,
        l = 0,
        p = 0;
      if ("none" !== this.chart.plotInfo.axisPlacement)
        if (
          ((p = (
            this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]
          ).getXValueAt({ x: a, y: g })),
          this.axisX.logarithmic)
        )
          var r = Math.log(
              this.dataPoints[this.dataPoints.length - 1].x /
                this.dataPoints[0].x
            ),
            p =
              1 < r
                ? Math.min(
                    Math.max(
                      (((this.dataPoints.length - 1) / r) *
                        Math.log(p / this.dataPoints[0].x)) >>
                        0,
                      0
                    ),
                    this.dataPoints.length
                  )
                : 0;
        else
          (r =
            this.dataPoints[this.dataPoints.length - 1].x -
            this.dataPoints[0].x),
            (p =
              0 < r
                ? Math.min(
                    Math.max(
                      (((this.dataPoints.length - 1) / r) *
                        (p - this.dataPoints[0].x)) >>
                        0,
                      0
                    ),
                    this.dataPoints.length
                  )
                : 0);
      for (;;) {
        h = 0 < d ? p + e : p - e;
        if (0 <= h && h < this.dataPoints.length) {
          var r = this.chart._eventManager.objectMap[this.dataPointIds[h]],
            f = this.dataPoints[h],
            t = null;
          if (r) {
            switch (this.type) {
              case "column":
              case "stackedColumn":
              case "stackedColumn100":
              case "bar":
              case "stackedBar":
              case "stackedBar100":
              case "rangeColumn":
              case "rangeBar":
              case "waterfall":
              case "error":
                a >= r.x1 &&
                  a <= r.x2 &&
                  g >= r.y1 &&
                  g <= r.y2 &&
                  (b.push({
                    dataPoint: f,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: Math.min(
                      Math.abs(r.x1 - a),
                      Math.abs(r.x2 - a),
                      Math.abs(r.y1 - g),
                      Math.abs(r.y2 - g)
                    ),
                  }),
                  (m = !0));
                break;
              case "line":
              case "stepLine":
              case "spline":
              case "area":
              case "stepArea":
              case "stackedArea":
              case "stackedArea100":
              case "splineArea":
              case "scatter":
                var w = ma("markerSize", f, this) || 4,
                  x = c ? 20 : w,
                  t = Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y1 - g, 2));
                t <= x &&
                  b.push({
                    dataPoint: f,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: t,
                  });
                r = Math.abs(r.x1 - a);
                r <= v ? (v = r) : 0 < d ? k++ : l++;
                t <= w / 2 && (m = !0);
                break;
              case "rangeArea":
              case "rangeSplineArea":
                w = ma("markerSize", f, this) || 4;
                x = c ? 20 : w;
                t = Math.min(
                  Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y1 - g, 2)),
                  Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y2 - g, 2))
                );
                t <= x &&
                  b.push({
                    dataPoint: f,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: t,
                  });
                r = Math.abs(r.x1 - a);
                r <= v ? (v = r) : 0 < d ? k++ : l++;
                t <= w / 2 && (m = !0);
                break;
              case "bubble":
                w = r.size;
                t = Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y1 - g, 2));
                t <= w / 2 &&
                  (b.push({
                    dataPoint: f,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: t,
                  }),
                  (m = !0));
                break;
              case "pie":
              case "doughnut":
                w = r.center;
                x =
                  "doughnut" === this.type
                    ? r.percentInnerRadius * r.radius
                    : 0;
                t = Math.sqrt(Math.pow(w.x - a, 2) + Math.pow(w.y - g, 2));
                t < r.radius &&
                  t > x &&
                  ((t = Math.atan2(g - w.y, a - w.x)),
                  0 > t && (t += 2 * Math.PI),
                  (t = Number(
                    ((((180 * (t / Math.PI)) % 360) + 360) % 360).toFixed(12)
                  )),
                  (w = Number(
                    (
                      (((180 * (r.startAngle / Math.PI)) % 360) + 360) %
                      360
                    ).toFixed(12)
                  )),
                  (x = Number(
                    (
                      (((180 * (r.endAngle / Math.PI)) % 360) + 360) %
                      360
                    ).toFixed(12)
                  )),
                  0 === x && 1 < r.endAngle && (x = 360),
                  w >= x &&
                    0 !== f.y &&
                    !n(f.y) &&
                    ((x += 360), t < w && (t += 360)),
                  t > w &&
                    t < x &&
                    (b.push({
                      dataPoint: f,
                      dataPointIndex: h,
                      dataSeries: this,
                      distance: 0,
                    }),
                    (m = !0)));
                break;
              case "funnel":
              case "pyramid":
                t = r.funnelSection;
                g > t.y1 &&
                  g < t.y4 &&
                  (t.y6
                    ? g > t.y6
                      ? ((h =
                          t.x6 + ((t.x5 - t.x6) / (t.y5 - t.y6)) * (g - t.y6)),
                        (t =
                          t.x3 + ((t.x4 - t.x3) / (t.y4 - t.y3)) * (g - t.y3)))
                      : ((h =
                          t.x1 + ((t.x6 - t.x1) / (t.y6 - t.y1)) * (g - t.y1)),
                        (t =
                          t.x2 + ((t.x3 - t.x2) / (t.y3 - t.y2)) * (g - t.y2)))
                    : ((h =
                        t.x1 + ((t.x4 - t.x1) / (t.y4 - t.y1)) * (g - t.y1)),
                      (t =
                        t.x2 + ((t.x3 - t.x2) / (t.y3 - t.y2)) * (g - t.y2))),
                  a > h &&
                    a < t &&
                    (b.push({
                      dataPoint: f,
                      dataPointIndex: r.dataPointIndex,
                      dataSeries: this,
                      distance: 0,
                    }),
                    (m = !0)));
                break;
              case "boxAndWhisker":
                if (
                  (a >= r.x1 - r.borderThickness / 2 &&
                    a <= r.x2 + r.borderThickness / 2 &&
                    g >= r.y4 - r.borderThickness / 2 &&
                    g <= r.y1 + r.borderThickness / 2) ||
                  (Math.abs(r.x2 - a + r.x1 - a) < r.borderThickness &&
                    g >= r.y1 &&
                    g <= r.y4)
                )
                  b.push({
                    dataPoint: f,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: Math.min(
                      Math.abs(r.x1 - a),
                      Math.abs(r.x2 - a),
                      Math.abs(r.y2 - g),
                      Math.abs(r.y3 - g)
                    ),
                  }),
                    (m = !0);
                break;
              case "candlestick":
                if (
                  (a >= r.x1 - r.borderThickness / 2 &&
                    a <= r.x2 + r.borderThickness / 2 &&
                    g >= r.y2 - r.borderThickness / 2 &&
                    g <= r.y3 + r.borderThickness / 2) ||
                  (Math.abs(r.x2 - a + r.x1 - a) < r.borderThickness &&
                    g >= r.y1 &&
                    g <= r.y4)
                )
                  b.push({
                    dataPoint: f,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: Math.min(
                      Math.abs(r.x1 - a),
                      Math.abs(r.x2 - a),
                      Math.abs(r.y2 - g),
                      Math.abs(r.y3 - g)
                    ),
                  }),
                    (m = !0);
                break;
              case "ohlc":
                if (
                  (Math.abs(r.x2 - a + r.x1 - a) < r.borderThickness &&
                    g >= r.y2 &&
                    g <= r.y3) ||
                  (a >= r.x1 &&
                    a <= (r.x2 + r.x1) / 2 &&
                    g >= r.y1 - r.borderThickness / 2 &&
                    g <= r.y1 + r.borderThickness / 2) ||
                  (a >= (r.x1 + r.x2) / 2 &&
                    a <= r.x2 &&
                    g >= r.y4 - r.borderThickness / 2 &&
                    g <= r.y4 + r.borderThickness / 2)
                )
                  b.push({
                    dataPoint: f,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: Math.min(
                      Math.abs(r.x1 - a),
                      Math.abs(r.x2 - a),
                      Math.abs(r.y2 - g),
                      Math.abs(r.y3 - g)
                    ),
                  }),
                    (m = !0);
            }
            if (m || (1e3 < k && 1e3 < l)) break;
          }
        } else if (0 > p - e && p + e >= this.dataPoints.length) break;
        -1 === d ? (e++, (d = 1)) : (d = -1);
      }
      a = null;
      for (g = 0; g < b.length; g++)
        a ? b[g].distance <= a.distance && (a = b[g]) : (a = b[g]);
      return a;
    };
    V.prototype.getMarkerProperties = function (a, g, c, b) {
      var e = this.dataPoints,
        h = e[a].markerColor
          ? e[a].markerColor
          : this.markerColor
          ? this.markerColor
          : e[a].color
          ? e[a].color
          : this.color
          ? this.color
          : this._colorSet[a % this._colorSet.length],
        d = e[a].markerBorderColor
          ? e[a].markerBorderColor
          : this.markerBorderColor
          ? this.markerBorderColor
          : null,
        m = n(e[a].markerBorderThickness)
          ? this.markerBorderThickness
            ? this.markerBorderThickness
            : null
          : e[a].markerBorderThickness,
        t = e[a].markerType ? e[a].markerType : this.markerType;
      a = n(e[a].markerSize) ? this.markerSize : e[a].markerSize;
      return {
        x: g,
        y: c,
        ctx: b,
        type: t,
        size: a,
        color: h,
        borderColor: d,
        borderThickness: m,
      };
    };
    pa(A, Y);
    A.prototype.createExtraLabelsForLog = function (a) {
      a = (a || 0) + 1;
      if (!(5 < a)) {
        var g = this.logLabelValues[0] || this.intervalStartPosition;
        if (
          Math.log(this.range) / Math.log(g / this.viewportMinimum) <
          this.noTicks - 1
        ) {
          for (
            var c = A.getNiceNumber(
                (g - this.viewportMinimum) /
                  Math.min(
                    Math.max(2, this.noTicks - this.logLabelValues.length),
                    3
                  ),
                !0
              ),
              b = Math.ceil(this.viewportMinimum / c) * c;
            b < g;
            b += c
          )
            b < this.viewportMinimum || this.logLabelValues.push(b);
          this.logLabelValues.sort(Sa);
          this.createExtraLabelsForLog(a);
        }
      }
    };
    A.prototype.createLabels = function () {
      var a,
        g,
        c = 0,
        b = 0,
        e,
        h = 0,
        d = 0,
        b = 0,
        b = this.interval,
        m = 0,
        t,
        k = 0.6 * this.chart.height,
        l;
      a = !1;
      var p = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
        r = p.length
          ? n(this.scaleBreaks.firstBreakIndex)
            ? 0
            : this.scaleBreaks.firstBreakIndex
          : 0;
      if (
        "axisX" !== this.type ||
        "dateTime" !== this.valueType ||
        this.logarithmic
      ) {
        e = this.viewportMaximum;
        if (this.labels) {
          a = Math.ceil(b);
          for (
            var b = Math.ceil(this.intervalStartPosition), f = !1, c = b;
            c < this.viewportMaximum;
            c += a
          )
            if (this.labels[c]) f = !0;
            else {
              f = !1;
              break;
            }
          f && ((this.interval = a), (this.intervalStartPosition = b));
        }
        if (this.logarithmic && !this.equidistantInterval)
          for (
            this.logLabelValues ||
              ((this.logLabelValues = []), this.createExtraLabelsForLog()),
              b = 0,
              f = r;
            b < this.logLabelValues.length;
            b++
          )
            if (((c = this.logLabelValues[b]), c < this.viewportMinimum)) b++;
            else {
              for (; f < p.length && c > p[f].endValue; f++);
              a = f < p.length && c >= p[f].startValue && c <= p[f].endValue;
              l = c;
              a ||
                ((a = this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.options,
                      value: l,
                      label: this.labels[l] ? this.labels[l] : null,
                    })
                  : "axisX" === this.type && this.labels[l]
                  ? this.labels[l]
                  : fa(l, this.valueFormatString, this.chart._cultureInfo)),
                (a = new ja(this.ctx, {
                  x: 0,
                  y: 0,
                  maxWidth: h,
                  maxHeight: d,
                  angle: this.labelAngle,
                  text: this.prefix + a + this.suffix,
                  backgroundColor: this.labelBackgroundColor,
                  borderColor: this.labelBorderColor,
                  cornerRadius: this.labelCornerRadius,
                  textAlign: this.labelTextAlign,
                  fontSize: this.labelFontSize,
                  fontFamily: this.labelFontFamily,
                  fontWeight: this.labelFontWeight,
                  fontColor: this.labelFontColor,
                  fontStyle: this.labelFontStyle,
                  textBaseline: "middle",
                  borderThickness: this.labelBorderThickness,
                })),
                this._labels.push({
                  position: l,
                  textBlock: a,
                  effectiveHeight: null,
                }));
            }
        f = r;
        for (
          c = this.intervalStartPosition;
          c <= e;
          c = parseFloat(
            1e-12 > this.interval
              ? this.logarithmic && this.equidistantInterval
                ? c * Math.pow(this.logarithmBase, this.interval)
                : c + this.interval
              : (this.logarithmic && this.equidistantInterval
                  ? c * Math.pow(this.logarithmBase, this.interval)
                  : c + this.interval
                ).toFixed(12)
          )
        ) {
          for (; f < p.length && c > p[f].endValue; f++);
          a = f < p.length && c >= p[f].startValue && c <= p[f].endValue;
          l = c;
          a ||
            ((a = this.labelFormatter
              ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.options,
                  value: l,
                  label: this.labels[l] ? this.labels[l] : null,
                })
              : "axisX" === this.type && this.labels[l]
              ? this.labels[l]
              : fa(l, this.valueFormatString, this.chart._cultureInfo)),
            (a = new ja(this.ctx, {
              x: 0,
              y: 0,
              maxWidth: h,
              maxHeight: d,
              angle: this.labelAngle,
              text: this.prefix + a + this.suffix,
              textAlign: this.labelTextAlign,
              backgroundColor: this.labelBackgroundColor,
              borderColor: this.labelBorderColor,
              borderThickness: this.labelBorderThickness,
              cornerRadius: this.labelCornerRadius,
              fontSize: this.labelFontSize,
              fontFamily: this.labelFontFamily,
              fontWeight: this.labelFontWeight,
              fontColor: this.labelFontColor,
              fontStyle: this.labelFontStyle,
              textBaseline: "middle",
            })),
            this._labels.push({
              position: l,
              textBlock: a,
              effectiveHeight: null,
            }));
        }
      } else
        for (
          this.intervalStartPosition = this.getLabelStartPoint(
            new Date(this.viewportMinimum),
            this.intervalType,
            this.interval
          ),
            e = Ya(
              new Date(this.viewportMaximum),
              this.interval,
              this.intervalType
            ),
            f = r,
            c = this.intervalStartPosition;
          c < e;
          Ya(c, b, this.intervalType)
        ) {
          for (a = c.getTime(); f < p.length && a > p[f].endValue; f++);
          l = a;
          a = f < p.length && a >= p[f].startValue && a <= p[f].endValue;
          a ||
            ((a = this.labelFormatter
              ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.options,
                  value: new Date(l),
                  label: this.labels[l] ? this.labels[l] : null,
                })
              : "axisX" === this.type && this.labels[l]
              ? this.labels[l]
              : Ca(l, this.valueFormatString, this.chart._cultureInfo)),
            (a = new ja(this.ctx, {
              x: 0,
              y: 0,
              maxWidth: h,
              backgroundColor: this.labelBackgroundColor,
              borderColor: this.labelBorderColor,
              borderThickness: this.labelBorderThickness,
              cornerRadius: this.labelCornerRadius,
              maxHeight: d,
              angle: this.labelAngle,
              text: this.prefix + a + this.suffix,
              textAlign: this.labelTextAlign,
              fontSize: this.labelFontSize,
              fontFamily: this.labelFontFamily,
              fontWeight: this.labelFontWeight,
              fontColor: this.labelFontColor,
              fontStyle: this.labelFontStyle,
              textBaseline: "middle",
            })),
            this._labels.push({
              position: l,
              textBlock: a,
              effectiveHeight: null,
              breaksLabelType: void 0,
            }));
        }
      if ("bottom" === this._position || "top" === this._position)
        (m =
          this.logarithmic &&
          !this.equidistantInterval &&
          2 <= this._labels.length
            ? (this.lineCoordinates.width *
                Math.log(
                  Math.min(
                    this._labels[this._labels.length - 1].position /
                      this._labels[this._labels.length - 2].position,
                    this._labels[1].position / this._labels[0].position
                  )
                )) /
              Math.log(this.range)
            : (this.lineCoordinates.width /
                (this.logarithmic && this.equidistantInterval
                  ? Math.log(this.range) / Math.log(this.logarithmBase)
                  : Math.abs(this.range))) *
              M[this.intervalType + "Duration"] *
              this.interval),
          (h =
            "undefined" === typeof this.options.labelMaxWidth
              ? (0.5 * this.chart.width) >> 0
              : this.options.labelMaxWidth),
          this.chart.panEnabled ||
            (d =
              "undefined" === typeof this.options.labelWrap || this.labelWrap
                ? (0.8 * this.chart.height) >> 0
                : 1.5 * this.labelFontSize);
      else if ("left" === this._position || "right" === this._position)
        (m =
          this.logarithmic &&
          !this.equidistantInterval &&
          2 <= this._labels.length
            ? (this.lineCoordinates.height *
                Math.log(
                  Math.min(
                    this._labels[this._labels.length - 1].position /
                      this._labels[this._labels.length - 2].position,
                    this._labels[1].position / this._labels[0].position
                  )
                )) /
              Math.log(this.range)
            : (this.lineCoordinates.height /
                (this.logarithmic && this.equidistantInterval
                  ? Math.log(this.range) / Math.log(this.logarithmBase)
                  : Math.abs(this.range))) *
              M[this.intervalType + "Duration"] *
              this.interval),
          this.chart.panEnabled ||
            (h =
              "undefined" === typeof this.options.labelMaxWidth
                ? (0.3 * this.chart.width) >> 0
                : this.options.labelMaxWidth),
          (d =
            "undefined" === typeof this.options.labelWrap || this.labelWrap
              ? (0.3 * this.chart.height) >> 0
              : 1.5 * this.labelFontSize);
      for (b = 0; b < this._labels.length; b++) {
        a = this._labels[b].textBlock;
        a.maxWidth = h;
        a.maxHeight = d;
        var A = a.measureText();
        t = A.height;
      }
      e = [];
      r = p = 0;
      if (this.labelAutoFit || this.options.labelAutoFit)
        if (
          (n(this.labelAngle) ||
            ((this.labelAngle = ((this.labelAngle % 360) + 360) % 360),
            90 < this.labelAngle && 270 > this.labelAngle
              ? (this.labelAngle -= 180)
              : 270 <= this.labelAngle &&
                360 >= this.labelAngle &&
                (this.labelAngle -= 360)),
          "bottom" === this._position || "top" === this._position)
        )
          if (
            ((h = (0.9 * m) >> 0),
            (r = 0),
            !this.chart.panEnabled && 1 <= this._labels.length)
          ) {
            this.sessionVariables.labelFontSize = this.labelFontSize;
            this.sessionVariables.labelMaxWidth = h;
            this.sessionVariables.labelMaxHeight = d;
            this.sessionVariables.labelAngle = this.labelAngle;
            this.sessionVariables.labelWrap = this.labelWrap;
            for (c = 0; c < this._labels.length; c++)
              if (!this._labels[c].breaksLabelType) {
                a = this._labels[c].textBlock;
                for (var w, f = a.text.split(" "), b = 0; b < f.length; b++)
                  (l = f[b]),
                    (this.ctx.font =
                      a.fontStyle +
                      " " +
                      a.fontWeight +
                      " " +
                      a.fontSize +
                      "px " +
                      a.fontFamily),
                    (l = this.ctx.measureText(l)),
                    l.width > r && ((w = c), (r = l.width));
              }
            c = 0;
            for (
              c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0;
              c < this._labels.length;
              c++
            )
              if (!this._labels[c].breaksLabelType) {
                a = this._labels[c].textBlock;
                A = a.measureText();
                for (f = c + 1; f < this._labels.length; f++)
                  if (!this._labels[f].breaksLabelType) {
                    g = this._labels[f].textBlock;
                    g = g.measureText();
                    break;
                  }
                e.push(a.height);
                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                Math.sin((Math.PI / 180) * Math.abs(this.labelAngle));
                b =
                  h * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) +
                  (d - a.fontSize / 2) *
                    Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                if (
                  n(this.options.labelAngle) &&
                  isNaN(this.options.labelAngle) &&
                  0 !== this.options.labelAngle
                )
                  if (
                    ((this.sessionVariables.labelMaxHeight =
                      0 === this.labelAngle
                        ? d
                        : Math.min(
                            (b -
                              h *
                                Math.cos(
                                  (Math.PI / 180) * Math.abs(this.labelAngle)
                                )) /
                              Math.sin(
                                (Math.PI / 180) * Math.abs(this.labelAngle)
                              ),
                            b
                          )),
                    (l =
                      (k -
                        (t + a.fontSize / 2) *
                          Math.cos((Math.PI / 180) * Math.abs(-25))) /
                      Math.sin((Math.PI / 180) * Math.abs(-25))),
                    !n(this.options.labelWrap))
                  )
                    this.labelWrap
                      ? n(this.options.labelMaxWidth)
                        ? ((this.sessionVariables.labelMaxWidth = Math.min(
                            Math.max(h, r),
                            l
                          )),
                          (this.sessionVariables.labelWrap = this.labelWrap),
                          g &&
                            (A.width + g.width) >> 0 > 2 * h &&
                            (this.sessionVariables.labelAngle = -25))
                        : ((this.sessionVariables.labelWrap = this.labelWrap),
                          (this.sessionVariables.labelMaxWidth =
                            this.options.labelMaxWidth),
                          (this.sessionVariables.labelAngle =
                            this.sessionVariables.labelMaxWidth > h
                              ? -25
                              : this.sessionVariables.labelAngle))
                      : n(this.options.labelMaxWidth)
                      ? ((this.sessionVariables.labelWrap = this.labelWrap),
                        (this.sessionVariables.labelMaxHeight = d),
                        (this.sessionVariables.labelMaxWidth = h),
                        g &&
                          (A.width + g.width) >> 0 > 2 * h &&
                          ((this.sessionVariables.labelAngle = -25),
                          (this.sessionVariables.labelMaxWidth = l)))
                      : ((this.sessionVariables.labelAngle =
                          this.sessionVariables.labelMaxWidth > h
                            ? -25
                            : this.sessionVariables.labelAngle),
                        (this.sessionVariables.labelMaxWidth =
                          this.options.labelMaxWidth),
                        (this.sessionVariables.labelMaxHeight = d),
                        (this.sessionVariables.labelWrap = this.labelWrap));
                  else {
                    if (n(this.options.labelWrap))
                      if (!n(this.options.labelMaxWidth))
                        this.options.labelMaxWidth < h
                          ? ((this.sessionVariables.labelMaxWidth =
                              this.options.labelMaxWidth),
                            (this.sessionVariables.labelMaxHeight = b))
                          : ((this.sessionVariables.labelAngle = -25),
                            (this.sessionVariables.labelMaxWidth =
                              this.options.labelMaxWidth),
                            (this.sessionVariables.labelMaxHeight = d));
                      else if (!n(g))
                        if (
                          ((b = (A.width + g.width) >> 0),
                          (f = this.labelFontSize),
                          r < h)
                        )
                          b - 2 * h > p &&
                            ((p = b - 2 * h),
                            b >= 2 * h && b < 2.2 * h
                              ? ((this.sessionVariables.labelMaxWidth = h),
                                n(this.options.labelFontSize) &&
                                  12 < f &&
                                  ((f = Math.floor((12 / 13) * f)),
                                  a.measureText()),
                                (this.sessionVariables.labelFontSize = n(
                                  this.options.labelFontSize
                                )
                                  ? f
                                  : this.options.labelFontSize),
                                (this.sessionVariables.labelAngle =
                                  this.labelAngle))
                              : b >= 2.2 * h && b < 2.8 * h
                              ? ((this.sessionVariables.labelAngle = -25),
                                (this.sessionVariables.labelMaxWidth = l),
                                (this.sessionVariables.labelFontSize = f))
                              : b >= 2.8 * h && b < 3.2 * h
                              ? ((this.sessionVariables.labelMaxWidth =
                                  Math.max(h, r)),
                                (this.sessionVariables.labelWrap = !0),
                                n(this.options.labelFontSize) &&
                                  12 < this.labelFontSize &&
                                  ((this.labelFontSize = Math.floor(
                                    (12 / 13) * this.labelFontSize
                                  )),
                                  a.measureText()),
                                (this.sessionVariables.labelFontSize = n(
                                  this.options.labelFontSize
                                )
                                  ? f
                                  : this.options.labelFontSize),
                                (this.sessionVariables.labelAngle =
                                  this.labelAngle))
                              : b >= 3.2 * h && b < 3.6 * h
                              ? ((this.sessionVariables.labelAngle = -25),
                                (this.sessionVariables.labelWrap = !0),
                                (this.sessionVariables.labelMaxWidth = l),
                                (this.sessionVariables.labelFontSize =
                                  this.labelFontSize))
                              : b > 3.6 * h && b < 5 * h
                              ? (n(this.options.labelFontSize) &&
                                  12 < f &&
                                  ((f = Math.floor((12 / 13) * f)),
                                  a.measureText()),
                                (this.sessionVariables.labelFontSize = n(
                                  this.options.labelFontSize
                                )
                                  ? f
                                  : this.options.labelFontSize),
                                (this.sessionVariables.labelWrap = !0),
                                (this.sessionVariables.labelAngle = -25),
                                (this.sessionVariables.labelMaxWidth = l))
                              : b > 5 * h &&
                                ((this.sessionVariables.labelWrap = !0),
                                (this.sessionVariables.labelMaxWidth = h),
                                (this.sessionVariables.labelFontSize = f),
                                (this.sessionVariables.labelMaxHeight = d),
                                (this.sessionVariables.labelAngle =
                                  this.labelAngle)));
                        else if (
                          w === c &&
                          ((0 === w &&
                            r +
                              this._labels[w + 1].textBlock.measureText()
                                .width -
                              2 * h >
                              p) ||
                            (w === this._labels.length - 1 &&
                              r +
                                this._labels[w - 1].textBlock.measureText()
                                  .width -
                                2 * h >
                                p) ||
                            (0 < w &&
                              w < this._labels.length - 1 &&
                              r +
                                this._labels[w + 1].textBlock.measureText()
                                  .width -
                                2 * h >
                                p &&
                              r +
                                this._labels[w - 1].textBlock.measureText()
                                  .width -
                                2 * h >
                                p))
                        )
                          (p =
                            0 === w
                              ? r +
                                this._labels[w + 1].textBlock.measureText()
                                  .width -
                                2 * h
                              : r +
                                this._labels[w - 1].textBlock.measureText()
                                  .width -
                                2 * h),
                            (this.sessionVariables.labelFontSize = n(
                              this.options.labelFontSize
                            )
                              ? f
                              : this.options.labelFontSize),
                            (this.sessionVariables.labelWrap = !0),
                            (this.sessionVariables.labelAngle = -25),
                            (this.sessionVariables.labelMaxWidth = l);
                        else if (0 === p)
                          for (
                            this.sessionVariables.labelFontSize = n(
                              this.options.labelFontSize
                            )
                              ? f
                              : this.options.labelFontSize,
                              this.sessionVariables.labelWrap = !0,
                              b = 0;
                            b < this._labels.length;
                            b++
                          )
                            (a = this._labels[b].textBlock),
                              (a.maxWidth =
                                this.sessionVariables.labelMaxWidth =
                                  Math.min(Math.max(h, r), l)),
                              (A = a.measureText()),
                              b < this._labels.length - 1 &&
                                ((f = b + 1),
                                (g = this._labels[f].textBlock),
                                (g.maxWidth =
                                  this.sessionVariables.labelMaxWidth =
                                    Math.min(Math.max(h, r), l)),
                                (g = g.measureText()),
                                (A.width + g.width) >> 0 > 2 * h &&
                                  (this.sessionVariables.labelAngle = -25));
                  }
                else
                  ((this.sessionVariables.labelAngle = this.labelAngle),
                  (this.sessionVariables.labelMaxHeight =
                    0 === this.labelAngle
                      ? d
                      : Math.min(
                          (b -
                            h *
                              Math.cos(
                                (Math.PI / 180) * Math.abs(this.labelAngle)
                              )) /
                            Math.sin(
                              (Math.PI / 180) * Math.abs(this.labelAngle)
                            ),
                          b
                        )),
                  (l =
                    0 != this.labelAngle
                      ? (k -
                          (t + a.fontSize / 2) *
                            Math.cos(
                              (Math.PI / 180) * Math.abs(this.labelAngle)
                            )) /
                        Math.sin((Math.PI / 180) * Math.abs(this.labelAngle))
                      : h),
                  (this.sessionVariables.labelMaxHeight = this.labelWrap
                    ? (k -
                        l *
                          Math.sin(
                            (Math.PI / 180) * Math.abs(this.labelAngle)
                          )) /
                      Math.cos((Math.PI / 180) * Math.abs(this.labelAngle))
                    : 1.5 * this.labelFontSize),
                  n(this.options.labelWrap))
                    ? n(this.options.labelWrap) &&
                      (this.labelWrap && !n(this.options.labelMaxWidth)
                        ? ((this.sessionVariables.labelWrap = this.labelWrap),
                          (this.sessionVariables.labelMaxWidth = this.options
                            .labelMaxWidth
                            ? this.options.labelMaxWidth
                            : l),
                          (this.sessionVariables.labelMaxHeight = d))
                        : ((this.sessionVariables.labelAngle = this.labelAngle),
                          (this.sessionVariables.labelMaxWidth = l),
                          (this.sessionVariables.labelMaxHeight =
                            b < 0.9 * m ? 0.9 * m : b),
                          (this.sessionVariables.labelWrap = this.labelWrap)))
                    : (this.options.labelWrap
                        ? ((this.sessionVariables.labelWrap = this.labelWrap),
                          (this.sessionVariables.labelMaxWidth = this.options
                            .labelMaxWidth
                            ? this.options.labelMaxWidth
                            : l))
                        : (n(this.options.labelMaxWidth),
                          (this.sessionVariables.labelMaxWidth = this.options
                            .labelMaxWidth
                            ? this.options.labelMaxWidth
                            : l),
                          (this.sessionVariables.labelWrap = this.labelWrap)),
                      (this.sessionVariables.labelMaxHeight = d));
              }
            for (b = 0; b < this._labels.length; b++)
              (a = this._labels[b].textBlock),
                (a.maxWidth = this.labelMaxWidth =
                  this.sessionVariables.labelMaxWidth),
                (a.fontSize = this.sessionVariables.labelFontSize),
                (a.angle = this.labelAngle = this.sessionVariables.labelAngle),
                (a.wrap = this.labelWrap = this.sessionVariables.labelWrap),
                (a.maxHeight = this.sessionVariables.labelMaxHeight),
                a.measureText();
          } else
            for (c = 0; c < this._labels.length; c++)
              (a = this._labels[c].textBlock),
                (a.maxWidth = this.labelMaxWidth =
                  n(this.options.labelMaxWidth)
                    ? n(this.sessionVariables.labelMaxWidth)
                      ? (this.sessionVariables.labelMaxWidth = h)
                      : this.sessionVariables.labelMaxWidth
                    : this.options.labelMaxWidth),
                (a.fontSize = this.labelFontSize =
                  n(this.options.labelFontSize)
                    ? n(this.sessionVariables.labelFontSize)
                      ? (this.sessionVariables.labelFontSize =
                          this.labelFontSize)
                      : this.sessionVariables.labelFontSize
                    : this.options.labelFontSize),
                (a.angle = this.labelAngle =
                  n(this.options.labelAngle)
                    ? n(this.sessionVariables.labelAngle)
                      ? (this.sessionVariables.labelAngle = this.labelAngle)
                      : this.sessionVariables.labelAngle
                    : this.labelAngle),
                (a.wrap = this.labelWrap =
                  n(this.options.labelWrap)
                    ? n(this.sessionVariables.labelWrap)
                      ? (this.sessionVariables.labelWrap = this.labelWrap)
                      : this.sessionVariables.labelWrap
                    : this.options.labelWrap),
                (a.maxHeight = n(this.sessionVariables.labelMaxHeight)
                  ? (this.sessionVariables.labelMaxHeight = d)
                  : this.sessionVariables.labelMaxHeight),
                a.measureText();
        else if ("left" === this._position || "right" === this._position)
          if (
            ((h = n(this.options.labelMaxWidth)
              ? (0.3 * this.chart.width) >> 0
              : this.options.labelMaxWidth),
            (d =
              "undefined" === typeof this.options.labelWrap || this.labelWrap
                ? (0.3 * this.chart.height) >> 0
                : 1.5 * this.labelFontSize),
            !this.chart.panEnabled && 1 <= this._labels.length)
          ) {
            this.sessionVariables.labelFontSize = this.labelFontSize;
            this.sessionVariables.labelMaxWidth = h;
            this.sessionVariables.labelMaxHeight = d;
            this.sessionVariables.labelAngle = n(
              this.sessionVariables.labelAngle
            )
              ? 0
              : this.sessionVariables.labelAngle;
            this.sessionVariables.labelWrap = this.labelWrap;
            for (c = 0; c < this._labels.length; c++)
              if (!this._labels[c].breaksLabelType) {
                a = this._labels[c].textBlock;
                A = a.measureText();
                for (f = c + 1; f < this._labels.length; f++)
                  if (!this._labels[f].breaksLabelType) {
                    g = this._labels[f].textBlock;
                    g = g.measureText();
                    break;
                  }
                e.push(a.height);
                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                b =
                  h * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) +
                  (d - a.fontSize / 2) *
                    Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                Math.sin((Math.PI / 180) * Math.abs(this.labelAngle));
                n(this.options.labelAngle) &&
                isNaN(this.options.labelAngle) &&
                0 !== this.options.labelAngle
                  ? n(this.options.labelWrap)
                    ? n(this.options.labelWrap) &&
                      (n(this.options.labelMaxWidth)
                        ? n(g) ||
                          ((m = (A.height + g.height) >> 0),
                          m - 2 * d > r &&
                            ((r = m - 2 * d),
                            m >= 2 * d && m < 2.4 * d
                              ? (n(this.options.labelFontSize) &&
                                  12 < this.labelFontSize &&
                                  ((this.labelFontSize = Math.floor(
                                    (12 / 13) * this.labelFontSize
                                  )),
                                  a.measureText()),
                                (this.sessionVariables.labelMaxHeight = d),
                                (this.sessionVariables.labelFontSize = n(
                                  this.options.labelFontSize
                                )
                                  ? this.labelFontSize
                                  : this.options.labelFontSize))
                              : m >= 2.4 * d && m < 2.8 * d
                              ? ((this.sessionVariables.labelMaxHeight = b),
                                (this.sessionVariables.labelFontSize =
                                  this.labelFontSize),
                                (this.sessionVariables.labelWrap = !0))
                              : m >= 2.8 * d && m < 3.2 * d
                              ? ((this.sessionVariables.labelMaxHeight = d),
                                (this.sessionVariables.labelWrap = !0),
                                n(this.options.labelFontSize) &&
                                  12 < this.labelFontSize &&
                                  ((this.labelFontSize = Math.floor(
                                    (12 / 13) * this.labelFontSize
                                  )),
                                  a.measureText()),
                                (this.sessionVariables.labelFontSize = n(
                                  this.options.labelFontSize
                                )
                                  ? this.labelFontSize
                                  : this.options.labelFontSize),
                                (this.sessionVariables.labelAngle = n(
                                  this.sessionVariables.labelAngle
                                )
                                  ? 0
                                  : this.sessionVariables.labelAngle))
                              : m >= 3.2 * d && m < 3.6 * d
                              ? ((this.sessionVariables.labelMaxHeight = b),
                                (this.sessionVariables.labelWrap = !0),
                                (this.sessionVariables.labelFontSize =
                                  this.labelFontSize))
                              : m > 3.6 * d && m < 10 * d
                              ? (n(this.options.labelFontSize) &&
                                  12 < this.labelFontSize &&
                                  ((this.labelFontSize = Math.floor(
                                    (12 / 13) * this.labelFontSize
                                  )),
                                  a.measureText()),
                                (this.sessionVariables.labelFontSize = n(
                                  this.options.labelFontSize
                                )
                                  ? this.labelFontSize
                                  : this.options.labelFontSize),
                                (this.sessionVariables.labelMaxWidth = h),
                                (this.sessionVariables.labelMaxHeight = d),
                                (this.sessionVariables.labelAngle = n(
                                  this.sessionVariables.labelAngle
                                )
                                  ? 0
                                  : this.sessionVariables.labelAngle))
                              : m > 10 * d &&
                                m < 50 * d &&
                                (n(this.options.labelFontSize) &&
                                  12 < this.labelFontSize &&
                                  ((this.labelFontSize = Math.floor(
                                    (12 / 13) * this.labelFontSize
                                  )),
                                  a.measureText()),
                                (this.sessionVariables.labelFontSize = n(
                                  this.options.labelFontSize
                                )
                                  ? this.labelFontSize
                                  : this.options.labelFontSize),
                                (this.sessionVariables.labelMaxHeight = d),
                                (this.sessionVariables.labelMaxWidth = h),
                                (this.sessionVariables.labelAngle = n(
                                  this.sessionVariables.labelAngle
                                )
                                  ? 0
                                  : this.sessionVariables.labelAngle))))
                        : ((this.sessionVariables.labelMaxHeight = d),
                          (this.sessionVariables.labelMaxWidth = this.options
                            .labelMaxWidth
                            ? this.options.labelMaxWidth
                            : this.sessionVariables.labelMaxWidth)))
                    : ((this.sessionVariables.labelMaxWidth = this.labelWrap
                        ? this.options.labelMaxWidth
                          ? this.options.labelMaxWidth
                          : this.sessionVariables.labelMaxWidth
                        : this.labelMaxWidth
                        ? this.options.labelMaxWidth
                          ? this.options.labelMaxWidth
                          : this.sessionVariables.labelMaxWidth
                        : h),
                      (this.sessionVariables.labelMaxHeight = d))
                  : ((this.sessionVariables.labelAngle = this.labelAngle),
                    (this.sessionVariables.labelMaxWidth =
                      0 === this.labelAngle
                        ? h
                        : Math.min(
                            (b -
                              d *
                                Math.sin(
                                  (Math.PI / 180) * Math.abs(this.labelAngle)
                                )) /
                              Math.cos(
                                (Math.PI / 180) * Math.abs(this.labelAngle)
                              ),
                            d
                          )),
                    n(this.options.labelWrap))
                  ? n(this.options.labelWrap) &&
                    (this.labelWrap && !n(this.options.labelMaxWidth)
                      ? ((this.sessionVariables.labelMaxWidth = this.options
                          .labelMaxWidth
                          ? this.options.labelMaxWidth
                          : this.sessionVariables.labelMaxWidth),
                        (this.sessionVariables.labelWrap = this.labelWrap),
                        (this.sessionVariables.labelMaxHeight = b))
                      : ((this.sessionVariables.labelMaxWidth = this.options
                          .labelMaxWidth
                          ? this.options.labelMaxWidth
                          : h),
                        (this.sessionVariables.labelMaxHeight =
                          0 === this.labelAngle ? d : b),
                        n(this.options.labelMaxWidth) &&
                          (this.sessionVariables.labelAngle = this.labelAngle)))
                  : this.options.labelWrap
                  ? ((this.sessionVariables.labelMaxHeight =
                      0 === this.labelAngle ? d : b),
                    (this.sessionVariables.labelWrap = this.labelWrap),
                    (this.sessionVariables.labelMaxWidth = h))
                  : ((this.sessionVariables.labelMaxHeight = d),
                    n(this.options.labelMaxWidth),
                    (this.sessionVariables.labelMaxWidth = this.options
                      .labelMaxWidth
                      ? this.options.labelMaxWidth
                      : this.sessionVariables.labelMaxWidth),
                    (this.sessionVariables.labelWrap = this.labelWrap));
              }
            for (b = 0; b < this._labels.length; b++)
              (a = this._labels[b].textBlock),
                (a.maxWidth = this.labelMaxWidth =
                  this.sessionVariables.labelMaxWidth),
                (a.fontSize = this.labelFontSize =
                  this.sessionVariables.labelFontSize),
                (a.angle = this.labelAngle = this.sessionVariables.labelAngle),
                (a.wrap = this.labelWrap = this.sessionVariables.labelWrap),
                (a.maxHeight = this.sessionVariables.labelMaxHeight),
                a.measureText();
          } else
            for (
              n(this.chart.stockChart) ||
                this.chart.isNavigator ||
                (this.sessionVariables.labelMaxHeight = d),
                c = 0;
              c < this._labels.length;
              c++
            )
              (a = this._labels[c].textBlock),
                (a.maxWidth = this.labelMaxWidth =
                  n(this.options.labelMaxWidth)
                    ? n(this.sessionVariables.labelMaxWidth)
                      ? (this.sessionVariables.labelMaxWidth = h)
                      : this.sessionVariables.labelMaxWidth
                    : this.options.labelMaxWidth),
                (a.fontSize = this.labelFontSize =
                  n(this.options.labelFontSize)
                    ? n(this.sessionVariables.labelFontSize)
                      ? (this.sessionVariables.labelFontSize =
                          this.labelFontSize)
                      : this.sessionVariables.labelFontSize
                    : this.options.labelFontSize),
                (a.angle = this.labelAngle =
                  n(this.options.labelAngle)
                    ? n(this.sessionVariables.labelAngle)
                      ? (this.sessionVariables.labelAngle = this.labelAngle)
                      : this.sessionVariables.labelAngle
                    : this.labelAngle),
                (a.wrap = this.labelWrap =
                  n(this.options.labelWrap)
                    ? n(this.sessionVariables.labelWrap)
                      ? (this.sessionVariables.labelWrap = this.labelWrap)
                      : this.sessionVariables.labelWrap
                    : this.options.labelWrap),
                (a.maxHeight = n(this.sessionVariables.labelMaxHeight)
                  ? (this.sessionVariables.labelMaxHeight = d)
                  : this.sessionVariables.labelMaxHeight),
                a.measureText();
      for (c = 0; c < this.stripLines.length; c++) {
        var h = this.stripLines[c],
          x;
        if ("outside" === h.labelPlacement) {
          d = this.sessionVariables.labelMaxWidth;
          if ("bottom" === this._position || "top" === this._position)
            n(h.options.labelWrap) &&
            !n(this.sessionVariables.stripLineLabelMaxHeight)
              ? (x = this.sessionVariables.stripLineLabelMaxHeight)
              : (this.sessionVariables.stripLineLabelMaxHeight = x =
                  h.labelWrap
                    ? (0.8 * this.chart.height) >> 0
                    : 1.5 * this.labelFontSize);
          if ("left" === this._position || "right" === this._position)
            n(h.options.labelWrap) &&
            !n(this.sessionVariables.stripLineLabelMaxHeight)
              ? (x = this.sessionVariables.stripLineLabelMaxHeight)
              : (this.sessionVariables.stripLineLabelMaxHeight = x =
                  h.labelWrap
                    ? (0.8 * this.chart.width) >> 0
                    : 1.5 * this.labelFontSize);
          n(h.labelBackgroundColor) && (h.labelBackgroundColor = "#EEEEEE");
        } else
          (d =
            "bottom" === this._position || "top" === this._position
              ? (0.9 * this.chart.width) >> 0
              : (0.9 * this.chart.height) >> 0),
            (x =
              n(h.options.labelWrap) || h.labelWrap
                ? "bottom" === this._position || "top" === this._position
                  ? (0.8 * this.chart.width) >> 0
                  : (0.8 * this.chart.height) >> 0
                : 1.5 * this.labelFontSize),
            n(h.labelBackgroundColor) &&
              (n(h.startValue) && 0 !== h.startValue
                ? (h.labelBackgroundColor = v ? "transparent" : null)
                : (h.labelBackgroundColor = "#EEEEEE"));
        h.labelFontSize =
          "outside" === h.labelPlacement && n(h.options.labelFontSize)
            ? this.labelFontSize
            : h.labelFontSize;
        h.labelFontFamily =
          "outside" === h.labelPlacement && n(h.options.labelFontFamily)
            ? this.labelFontFamily
            : h.labelFontFamily;
        h.labelFontWeight =
          "outside" === h.labelPlacement && n(h.options.labelFontWeight)
            ? this.labelFontWeight
            : h.labelFontWeight;
        h.labelFontStyle =
          "outside" === h.labelPlacement && n(h.options.labelFontStyle)
            ? this.labelFontStyle
            : h.labelFontStyle;
        a = new ja(this.ctx, {
          x: 0,
          y: 0,
          backgroundColor: h.labelBackgroundColor,
          borderColor: h.labelBorderColor,
          borderThickness: h.labelBorderThickness,
          cornerRadius: h.labelCornerRadius,
          maxWidth: h.options.labelMaxWidth ? h.options.labelMaxWidth : d,
          maxHeight: x,
          angle: this.labelAngle,
          text: h.labelFormatter
            ? h.labelFormatter({ chart: this.chart, axis: this, stripLine: h })
            : h.label,
          textAlign: h.labelTextAlign,
          fontSize: h.labelFontSize,
          fontFamily: h.labelFontFamily,
          fontWeight: h.labelFontWeight,
          fontColor: h.labelFontColor || h.color,
          fontStyle: h.labelFontStyle,
          textBaseline: "middle",
        });
        this._stripLineLabels.push({
          position: h.value,
          textBlock: a,
          effectiveHeight: null,
          stripLine: h,
        });
      }
    };
    A.prototype.createLabelsAndCalculateWidth = function () {
      var a = 0,
        g = 0;
      this._labels = [];
      this._stripLineLabels = [];
      var c = this.chart.isNavigator ? 0 : 5;
      if ("left" === this._position || "right" === this._position) {
        this.createLabels();
        if (
          "inside" != this.labelPlacement ||
          ("inside" === this.labelPlacement && 0 < this._index)
        )
          for (g = 0; g < this._labels.length; g++) {
            var b = this._labels[g].textBlock,
              b = b.measureText(),
              e = 0,
              e =
                0 === this.labelAngle
                  ? b.width
                  : b.width *
                      Math.cos((Math.PI / 180) * Math.abs(this.labelAngle)) +
                    b.height *
                      Math.sin((Math.PI / 180) * Math.abs(this.labelAngle));
            a < e && (this.labelEffectiveWidth = a = e);
            this._labels[g].effectiveWidth = e;
          }
        for (g = 0; g < this._stripLineLabels.length; g++)
          "outside" === this._stripLineLabels[g].stripLine.labelPlacement &&
            this._stripLineLabels[g].stripLine.value >= this.viewportMinimum &&
            this._stripLineLabels[g].stripLine.value <= this.viewportMaximum &&
            ((b = this._stripLineLabels[g].textBlock),
            (b = b.measureText()),
            (e =
              0 === this.labelAngle
                ? b.width
                : b.width *
                    Math.cos((Math.PI / 180) * Math.abs(this.labelAngle)) +
                  b.height *
                    Math.sin((Math.PI / 180) * Math.abs(this.labelAngle))),
            "inside" === this.tickPlacement && (e += this.tickLength),
            "inside" === this.labelPlacement && (a += 0 < this._index ? e : 0),
            a < e && (a = e),
            (this.stripLineLabelEffectiveWidth = this._stripLineLabels[
              g
            ].effectiveWidth =
              e));
      }
      return (
        (this.title ? this._titleTextBlock.measureText().height + 2 : 0) +
        a +
        ("inside" === this.tickPlacement
          ? 0 < this._index
            ? this.tickLength
            : 0
          : this.tickLength) +
        c
      );
    };
    A.prototype.createLabelsAndCalculateHeight = function () {
      var a = 0;
      this._labels = [];
      this._stripLineLabels = [];
      var g,
        c = 0,
        b = this.chart.isNavigator ? 0 : 5;
      if ("bottom" === this._position || "top" === this._position) {
        this.createLabels();
        if (
          "inside" != this.labelPlacement ||
          ("inside" === this.labelPlacement && 0 < this._index)
        )
          for (c = 0; c < this._labels.length; c++) {
            g = this._labels[c].textBlock;
            g = g.measureText();
            var e = 0,
              e =
                0 === this.labelAngle
                  ? g.height
                  : g.width *
                      Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) +
                    g.height *
                      Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
            a < e && (this.labelEffectiveHeight = a = e);
            this._labels[c].effectiveHeight = e;
          }
        for (c = 0; c < this._stripLineLabels.length; c++)
          "outside" === this._stripLineLabels[c].stripLine.labelPlacement &&
            this._stripLineLabels[c].stripLine.value >= this.viewportMinimum &&
            this._stripLineLabels[c].stripLine.value <= this.viewportMaximum &&
            ((g = this._stripLineLabels[c].textBlock),
            (g = g.measureText()),
            (e =
              0 === this.labelAngle
                ? g.height
                : g.width *
                    Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) +
                  g.height *
                    Math.cos((Math.PI / 180) * Math.abs(this.labelAngle))),
            "inside" === this.tickPlacement && (e += this.tickLength),
            "inside" === this.labelPlacement && (a += 0 < this._index ? e : 0),
            a < e && (a = e),
            (this.stripLineLabelEffectiveHeight = this._stripLineLabels[
              c
            ].effectiveHeight =
              e));
      }
      return (
        (this.title ? this._titleTextBlock.measureText().height + 2 : 0) +
        a +
        ("inside" === this.tickPlacement
          ? 0 < this._index
            ? this.tickLength
            : 0
          : this.tickLength) +
        b
      );
    };
    A.setLayout = function (a, g, c, b, e, h) {
      var d,
        m,
        t,
        k,
        l = a[0] ? a[0].chart : g[0].chart,
        p = l.isNavigator ? 0 : 10,
        r = l._axes;
      if (a && 0 < a.length)
        for (var f = 0; f < a.length; f++)
          a[f] && a[f].calculateAxisParameters();
      if (g && 0 < g.length)
        for (f = 0; f < g.length; f++) g[f].calculateAxisParameters();
      if (c && 0 < c.length)
        for (f = 0; f < c.length; f++) c[f].calculateAxisParameters();
      if (b && 0 < b.length)
        for (f = 0; f < b.length; f++) b[f].calculateAxisParameters();
      for (f = 0; f < r.length; f++)
        if (r[f] && r[f].scaleBreaks && r[f].scaleBreaks._appliedBreaks.length)
          for (
            var v = r[f].scaleBreaks._appliedBreaks, w = 0;
            w < v.length && !(v[w].startValue > r[f].viewportMaximum);
            w++
          )
            v[w].endValue < r[f].viewportMinimum ||
              (n(r[f].scaleBreaks.firstBreakIndex) &&
                (r[f].scaleBreaks.firstBreakIndex = w),
              v[w].startValue >= r[f].viewPortMinimum &&
                (r[f].scaleBreaks.lastBreakIndex = w));
      for (
        var x = (w = 0),
          s = 0,
          z = 0,
          u = 0,
          A = 0,
          B = 0,
          D,
          G,
          H = (m = 0),
          J,
          K,
          L,
          v = (J = K = L = !1),
          f = 0;
        f < r.length;
        f++
      )
        r[f] &&
          r[f].title &&
          (r[f]._titleTextBlock = new ja(r[f].ctx, {
            text: r[f].title,
            fontSize: r[f].titleFontSize,
            fontFamily: r[f].titleFontFamily,
            fontWeight: r[f].titleFontWeight,
            fontColor: r[f].titleFontColor,
            fontStyle: r[f].titleFontStyle,
            borderColor: r[f].titleBorderColor,
            borderThickness: r[f].titleBorderThickness,
            backgroundColor: r[f].titleBackgroundColor,
            cornerRadius: r[f].titleCornerRadius,
            textBaseline: "middle",
            textAlign: r[f].titleTextAlign,
          }));
      for (f = 0; f < r.length; f++)
        if (r[f].title)
          switch (r[f]._position) {
            case "left":
              r[f]._titleTextBlock.maxWidth = r[f].titleMaxWidth || h.height;
              r[f]._titleTextBlock.maxHeight = r[f].titleWrap
                ? 0.8 * h.width
                : 1.5 * r[f].titleFontSize;
              r[f]._titleTextBlock.angle = -90;
              break;
            case "right":
              r[f]._titleTextBlock.maxWidth = r[f].titleMaxWidth || h.height;
              r[f]._titleTextBlock.maxHeight = r[f].titleWrap
                ? 0.8 * h.width
                : 1.5 * r[f].titleFontSize;
              r[f]._titleTextBlock.angle = 90;
              break;
            default:
              (r[f]._titleTextBlock.maxWidth = r[f].titleMaxWidth || h.width),
                (r[f]._titleTextBlock.maxHeight = r[f].titleWrap
                  ? 0.8 * h.height
                  : 1.5 * r[f].titleFontSize),
                (r[f]._titleTextBlock.angle = 0);
          }
      if ("normal" === e) {
        for (
          var z = [], u = [], A = [], B = [], M = [], P = [], N = [], Q = [];
          4 > w;

        ) {
          var E = 0,
            S = 0,
            U = 0,
            T = 0,
            V = (e = 0),
            O = 0,
            Y = 0,
            W = 0,
            X = 0,
            R = 0,
            $ = 0;
          if (c && 0 < c.length)
            for (A = [], f = R = 0; f < c.length; f++)
              A.push(
                Math.ceil(c[f] ? c[f].createLabelsAndCalculateWidth() : 0)
              ),
                (R += A[f]),
                (O += c[f] && !l.isNavigator ? c[f].margin : 0);
          else
            A.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
          N.push(A);
          if (b && 0 < b.length)
            for (B = [], f = $ = 0; f < b.length; f++)
              B.push(
                Math.ceil(b[f] ? b[f].createLabelsAndCalculateWidth() : 0)
              ),
                ($ += B[f]),
                (Y += b[f] ? b[f].margin : 0);
          else
            B.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
          Q.push(B);
          d = Math.round(h.x1 + R + O);
          t = Math.round(
            h.x2 - $ - Y > l.width - p ? l.width - p : h.x2 - $ - Y
          );
          if (a && 0 < a.length)
            for (z = [], f = W = 0; f < a.length; f++)
              a[f] && (a[f].lineCoordinates = {}),
                (a[f].lineCoordinates.width = Math.abs(t - d)),
                a[f].title &&
                  (a[f]._titleTextBlock.maxWidth =
                    0 < a[f].titleMaxWidth &&
                    a[f].titleMaxWidth < a[f].lineCoordinates.width
                      ? a[f].titleMaxWidth
                      : a[f].lineCoordinates.width),
                z.push(
                  Math.ceil(a[f] ? a[f].createLabelsAndCalculateHeight() : 0)
                ),
                (W += z[f]),
                (e += a[f] && !l.isNavigator ? a[f].margin : 0);
          else
            z.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
          M.push(z);
          if (g && 0 < g.length)
            for (u = [], f = X = 0; f < g.length; f++)
              g[f] && (g[f].lineCoordinates = {}),
                (g[f].lineCoordinates.width = Math.abs(t - d)),
                g[f].title &&
                  (g[f]._titleTextBlock.maxWidth =
                    0 < g[f].titleMaxWidth &&
                    g[f].titleMaxWidth < g[f].lineCoordinates.width
                      ? g[f].titleMaxWidth
                      : g[f].lineCoordinates.width),
                u.push(
                  Math.ceil(g[f] ? g[f].createLabelsAndCalculateHeight() : 0)
                ),
                (X += u[f]),
                (V += g[f] && !l.isNavigator ? g[f].margin : 0);
          else
            u.push(Math.ceil(g[0] ? g[0].createLabelsAndCalculateHeight() : 0));
          P.push(u);
          if (a && 0 < a.length)
            for (f = 0; f < a.length; f++)
              a[f] &&
                ((a[f].lineCoordinates.x1 = d),
                (t = Math.round(
                  h.x2 - $ - Y > l.width - p ? l.width - p : h.x2 - $ - Y
                )),
                a[f]._labels &&
                  1 < a[f]._labels.length &&
                  ((m = k = 0),
                  (k = a[f]._labels[1]),
                  (m =
                    "dateTime" === a[f].valueType
                      ? a[f]._labels[a[f]._labels.length - 2]
                      : a[f]._labels[a[f]._labels.length - 1]),
                  (x =
                    k.textBlock.width *
                      Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) +
                    (k.textBlock.height - m.textBlock.fontSize / 2) *
                      Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                  (s =
                    m.textBlock.width *
                      Math.cos((Math.PI / 180) * Math.abs(m.textBlock.angle)) +
                    (m.textBlock.height - m.textBlock.fontSize / 2) *
                      Math.sin((Math.PI / 180) * Math.abs(m.textBlock.angle)))),
                !a[f] ||
                  !a[f].labelAutoFit ||
                  n(D) ||
                  n(G) ||
                  l.isNavigator ||
                  l.stockChart ||
                  ((m = 0),
                  0 < a[f].labelAngle
                    ? G + s > t &&
                      (m += 0 < a[f].labelAngle ? G + s - t - $ : 0)
                    : 0 > a[f].labelAngle
                    ? D - x < d &&
                      D - x < a[f].viewportMinimum &&
                      (H =
                        d -
                        (O +
                          a[f].tickLength +
                          A +
                          D -
                          x +
                          a[f].labelFontSize / 2))
                    : 0 === a[f].labelAngle &&
                      (G + s > t && (m = G + s / 2 - t - $),
                      D - x < d &&
                        D - x < a[f].viewportMinimum &&
                        (H = d - O - a[f].tickLength - A - D + x / 2)),
                  a[f].viewportMaximum === a[f].maximum &&
                  a[f].viewportMinimum === a[f].minimum &&
                  0 < a[f].labelAngle &&
                  0 < m
                    ? (t -= m)
                    : a[f].viewportMaximum === a[f].maximum &&
                      a[f].viewportMinimum === a[f].minimum &&
                      0 > a[f].labelAngle &&
                      0 < H
                    ? (d += H)
                    : a[f].viewportMaximum === a[f].maximum &&
                      a[f].viewportMinimum === a[f].minimum &&
                      0 === a[f].labelAngle &&
                      (0 < H && (d += H), 0 < m && (t -= m))),
                l.panEnabled
                  ? (W =
                      n(l.sessionVariables.axisX.height) || l.stockChart
                        ? (l.sessionVariables.axisX.height = W)
                        : l.sessionVariables.axisX.height)
                  : (l.sessionVariables.axisX.height = W),
                (m = Math.round(h.y2 - W - e + E)),
                (k = Math.round(h.y2)),
                (a[f].lineCoordinates.x2 = t),
                (a[f].lineCoordinates.width = t - d),
                (a[f].lineCoordinates.y1 = m),
                (a[f].lineCoordinates.y2 = m),
                "inside" === a[f].labelPlacement &&
                  0 < f &&
                  ((a[f].lineCoordinates.y1 =
                    a[0].lineCoordinates.y2 +
                    E +
                    (a[f].labelEffectiveHeight || 0)),
                  (a[f].lineCoordinates.y2 =
                    a[f].lineCoordinates.y1 + a[f].lineThickness / 2)),
                "inside" === a[f].tickPlacement &&
                  0 < f &&
                  ((a[f].lineCoordinates.y1 += a[f].tickLength),
                  (a[f].lineCoordinates.y2 =
                    a[f].lineCoordinates.y1 + a[f].lineThickness / 2)),
                (a[f].bounds = {
                  x1: d,
                  y1: m,
                  x2: t,
                  y2: k - (W + e - z[f] - E),
                  width: t - d,
                }),
                (a[f].bounds.height = a[f].bounds.y2 - a[f].bounds.y1)),
                (E += z[f] + a[f].margin);
          if (g && 0 < g.length)
            for (f = 0; f < g.length; f++)
              (g[f].lineCoordinates.x1 = Math.round(h.x1 + R + O)),
                (g[f].lineCoordinates.x2 = Math.round(
                  h.x2 - $ - Y > l.width - p ? l.width - p : h.x2 - $ - Y
                )),
                (g[f].lineCoordinates.width = Math.abs(t - d)),
                g[f]._labels &&
                  1 < g[f]._labels.length &&
                  ((k = g[f]._labels[1]),
                  (m =
                    "dateTime" === g[f].valueType
                      ? g[f]._labels[g[f]._labels.length - 2]
                      : g[f]._labels[g[f]._labels.length - 1]),
                  (x =
                    k.textBlock.width *
                      Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) +
                    (k.textBlock.height - m.textBlock.fontSize / 2) *
                      Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                  (s =
                    m.textBlock.width *
                      Math.cos((Math.PI / 180) * Math.abs(m.textBlock.angle)) +
                    (m.textBlock.height - m.textBlock.fontSize / 2) *
                      Math.sin((Math.PI / 180) * Math.abs(m.textBlock.angle)))),
                l.panEnabled
                  ? (X =
                      n(l.sessionVariables.axisX2.height) || l.stockChart
                        ? (l.sessionVariables.axisX2.height = X)
                        : l.sessionVariables.axisX2.height)
                  : (l.sessionVariables.axisX2.height = X),
                (m = Math.round(h.y1)),
                (k = g[f].lineCoordinates.y1 = m + X + V - S),
                (g[f].lineCoordinates.y2 = m),
                "inside" === g[f].labelPlacement &&
                  0 < f &&
                  (g[f].lineCoordinates.y1 =
                    g[0].lineCoordinates.y1 -
                    S -
                    (g[f].labelEffectiveHeight || 0) -
                    5),
                "inside" === g[f].tickPlacement &&
                  0 < f &&
                  (g[f].lineCoordinates.y1 -= g[f].tickLength),
                (g[f].bounds = {
                  x1: d,
                  y1:
                    m +
                    (X +
                      V -
                      ("inside" === g[f].labelPlacement && 0 === f
                        ? u[f] - 5
                        : u[f]) -
                      S),
                  x2: t,
                  y2: k,
                  width: t - d,
                }),
                (g[f].bounds.height = g[f].bounds.y2 - g[f].bounds.y1),
                (S +=
                  ("inside" === g[f].labelPlacement && 0 === f
                    ? u[f] - 5
                    : u[f]) + g[f].margin);
          if (c && 0 < c.length)
            for (f = 0; f < c.length; f++)
              (O = l.isNavigator ? 0 : 10),
                c[f] &&
                  ((d = Math.round(
                    a[0] ? a[0].lineCoordinates.x1 : g[0].lineCoordinates.x1
                  )),
                  (O =
                    c[f]._labels && 0 < c[f]._labels.length
                      ? c[f]._labels[c[f]._labels.length - 1].textBlock.height /
                        2
                      : p),
                  (m = Math.round(
                    h.y1 + X + V < Math.max(O, p)
                      ? Math.max(O, p)
                      : h.y1 + X + V
                  )),
                  (t = Math.round(
                    a[0] ? a[0].lineCoordinates.x1 : g[0].lineCoordinates.x1
                  )),
                  (O =
                    0 < a.length
                      ? 0
                      : c[f]._labels && 0 < c[f]._labels.length
                      ? c[f]._labels[0].textBlock.height / 2
                      : p),
                  (k = Math.round(h.y2 - W - e - O)),
                  (c[f].lineCoordinates = {
                    x1: d - U,
                    y1: m,
                    x2: t - U,
                    y2: k,
                    height: Math.abs(k - m),
                  }),
                  "inside" === c[f].labelPlacement &&
                    0 < f &&
                    ((c[f].lineCoordinates.x1 =
                      c[0].lineCoordinates.x1 -
                      U -
                      (c[f].labelEffectiveWidth || 0) -
                      5),
                    (c[f].lineCoordinates.x2 =
                      c[f].lineCoordinates.x1 + c[f].lineThickness / 2)),
                  "inside" === c[f].tickPlacement &&
                    0 < f &&
                    ((c[f].lineCoordinates.x1 -= c[f].tickLength),
                    (c[f].lineCoordinates.x2 =
                      c[f].lineCoordinates.x1 + c[f].lineThickness / 2)),
                  (c[f].bounds = {
                    x1:
                      d -
                      (("inside" === c[f].labelPlacement && 0 === f
                        ? A[f] - 5
                        : A[f]) +
                        U),
                    y1: m,
                    x2: t - U,
                    y2: k,
                    height: k - m,
                  }),
                  (c[f].bounds.width = c[f].bounds.x2 - c[f].bounds.x1),
                  c[f].title &&
                    (c[f]._titleTextBlock.maxWidth =
                      0 < c[f].titleMaxWidth &&
                      c[f].titleMaxWidth < c[f].lineCoordinates.height
                        ? c[f].titleMaxWidth
                        : c[f].lineCoordinates.height),
                  (U +=
                    ("inside" === c[f].labelPlacement && 0 === f
                      ? A[f] - 5
                      : A[f]) + c[f].margin));
          if (b && 0 < b.length)
            for (f = 0; f < b.length; f++)
              b[f] &&
                ((d = Math.round(
                  a[0] ? a[0].lineCoordinates.x2 : g[0].lineCoordinates.x2
                )),
                (t = Math.round(d)),
                (O =
                  b[f]._labels && 0 < b[f]._labels.length
                    ? b[f]._labels[b[f]._labels.length - 1].textBlock.height / 2
                    : 0),
                (m = Math.round(
                  h.y1 + X + V < Math.max(O, p) ? Math.max(O, p) : h.y1 + X + V
                )),
                (O =
                  0 < a.length
                    ? 0
                    : b[f]._labels && 0 < b[f]._labels.length
                    ? b[f]._labels[0].textBlock.height / 2
                    : 0),
                (k = Math.round(h.y2 - (W + e + O))),
                (b[f].lineCoordinates = {
                  x1: d + T,
                  y1: m,
                  x2: d + T,
                  y2: k,
                  height: Math.abs(k - m),
                }),
                "inside" === b[f].labelPlacement &&
                  0 < f &&
                  ((b[f].lineCoordinates.x1 =
                    b[0].lineCoordinates.x2 +
                    T +
                    (b[f].labelEffectiveWidth || 0) +
                    5),
                  (b[f].lineCoordinates.x2 =
                    b[f].lineCoordinates.x1 + b[f].lineThickness / 2)),
                "inside" === b[f].tickPlacement &&
                  0 < f &&
                  ((b[f].lineCoordinates.x1 += b[f].tickLength),
                  (b[f].lineCoordinates.x2 =
                    b[f].lineCoordinates.x1 + b[f].lineThickness / 2)),
                (b[f].bounds = {
                  x1: d + T,
                  y1: m,
                  x2:
                    t +
                    (("inside" === b[f].labelPlacement && 0 === f
                      ? B[f] - 5
                      : B[f]) +
                      T),
                  y2: k,
                  height: k - m,
                }),
                (b[f].bounds.width = b[f].bounds.x2 - b[f].bounds.x1),
                b[f].title &&
                  (b[f]._titleTextBlock.maxWidth =
                    0 < b[f].titleMaxWidth &&
                    b[f].titleMaxWidth < b[f].lineCoordinates.height
                      ? b[f].titleMaxWidth
                      : b[f].lineCoordinates.height),
                (T +=
                  ("inside" === b[f].labelPlacement && 0 === f
                    ? B[f] - 5
                    : B[f]) + b[f].margin));
          if (a && 0 < a.length)
            for (f = 0; f < a.length; f++)
              a[f] &&
                (a[f].calculateValueToPixelConversionParameters(),
                a[f].calculateBreaksSizeInValues(),
                a[f]._labels &&
                  1 < a[f]._labels.length &&
                  ((D =
                    (a[f].logarithmic
                      ? Math.log(
                          a[f]._labels[1].position / a[f].viewportMinimum
                        ) / a[f].conversionParameters.lnLogarithmBase
                      : a[f]._labels[1].position - a[f].viewportMinimum) *
                      Math.abs(a[f].conversionParameters.pixelPerUnit) +
                    a[f].lineCoordinates.x1),
                  (d =
                    a[f]._labels[
                      a[f]._labels.length -
                        ("dateTime" === a[f].valueType ? 2 : 1)
                    ].position),
                  (d = a[f].getApparentDifference(a[f].viewportMinimum, d)),
                  (G = a[f].logarithmic
                    ? (1 < d
                        ? (Math.log(d) /
                            a[f].conversionParameters.lnLogarithmBase) *
                          Math.abs(a[f].conversionParameters.pixelPerUnit)
                        : 0) + a[f].lineCoordinates.x1
                    : (0 < d
                        ? d * Math.abs(a[f].conversionParameters.pixelPerUnit)
                        : 0) + a[f].lineCoordinates.x1)));
          if (g && 0 < g.length)
            for (f = 0; f < g.length; f++)
              g[f].calculateValueToPixelConversionParameters(),
                g[f].calculateBreaksSizeInValues(),
                g[f]._labels &&
                  1 < g[f]._labels.length &&
                  ((D =
                    (g[f].logarithmic
                      ? Math.log(
                          g[f]._labels[1].position / g[f].viewportMinimum
                        ) / g[f].conversionParameters.lnLogarithmBase
                      : g[f]._labels[1].position - g[f].viewportMinimum) *
                      Math.abs(g[f].conversionParameters.pixelPerUnit) +
                    g[f].lineCoordinates.x1),
                  (d =
                    g[f]._labels[
                      g[f]._labels.length -
                        ("dateTime" === g[f].valueType ? 2 : 1)
                    ].position),
                  (d = g[f].getApparentDifference(g[f].viewportMinimum, d)),
                  (G = g[f].logarithmic
                    ? (1 < d
                        ? (Math.log(d) /
                            g[f].conversionParameters.lnLogarithmBase) *
                          Math.abs(g[f].conversionParameters.pixelPerUnit)
                        : 0) + g[f].lineCoordinates.x1
                    : (0 < d
                        ? d * Math.abs(g[f].conversionParameters.pixelPerUnit)
                        : 0) + g[f].lineCoordinates.x1));
          for (f = 0; f < r.length; f++)
            "axisY" === r[f].type &&
              (r[f].calculateValueToPixelConversionParameters(),
              r[f].calculateBreaksSizeInValues());
          if (0 < w) {
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++)
                v = M[w - 1][f] === M[w][f] ? !0 : !1;
            else v = !0;
            if (g && 0 < g.length)
              for (f = 0; f < g.length; f++)
                J = P[w - 1][f] === P[w][f] ? !0 : !1;
            else J = !0;
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                K = N[w - 1][f] === N[w][f] ? !0 : !1;
            else K = !0;
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                L = Q[w - 1][f] === Q[w][f] ? !0 : !1;
            else L = !0;
          }
          if (v && J && K && L) break;
          w++;
        }
        if (a && 0 < a.length)
          for (f = 0; f < a.length; f++)
            a[f].calculateStripLinesThicknessInValues(),
              a[f].calculateBreaksInPixels();
        if (g && 0 < g.length)
          for (f = 0; f < g.length; f++)
            g[f].calculateStripLinesThicknessInValues(),
              g[f].calculateBreaksInPixels();
        if (c && 0 < c.length)
          for (f = 0; f < c.length; f++)
            c[f].calculateStripLinesThicknessInValues(),
              c[f].calculateBreaksInPixels();
        if (b && 0 < b.length)
          for (f = 0; f < b.length; f++)
            b[f].calculateStripLinesThicknessInValues(),
              b[f].calculateBreaksInPixels();
      } else {
        p = [];
        D = [];
        H = [];
        x = [];
        G = [];
        s = [];
        M = [];
        for (P = []; 4 > w; ) {
          W = T = U = Y = O = V = e = Q = N = E = X = 0;
          if (a && 0 < a.length)
            for (H = [], f = T = 0; f < a.length; f++)
              H.push(
                Math.ceil(a[f] ? a[f].createLabelsAndCalculateWidth() : 0)
              ),
                (T += H[f]),
                (e += a[f] && !l.isNavigator ? a[f].margin : 0);
          else
            H.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
          M.push(H);
          if (g && 0 < g.length)
            for (x = [], f = W = 0; f < g.length; f++)
              x.push(
                Math.ceil(g[f] ? g[f].createLabelsAndCalculateWidth() : 0)
              ),
                (W += x[f]),
                (V += g[f] ? g[f].margin : 0);
          else
            x.push(Math.ceil(g[0] ? g[0].createLabelsAndCalculateWidth() : 0));
          P.push(x);
          if (c && 0 < c.length)
            for (f = 0; f < c.length; f++)
              (c[f].lineCoordinates = {}),
                (d = Math.round(h.x1 + T + e)),
                (t = Math.round(
                  h.x2 - W - V > l.width - 10 ? l.width - 10 : h.x2 - W - V
                )),
                c[f].labelAutoFit &&
                  !n(z) &&
                  (0 < !a.length &&
                    (d =
                      0 > c[f].labelAngle
                        ? Math.max(d, z)
                        : 0 === c[f].labelAngle
                        ? Math.max(d, z / 2)
                        : d),
                  0 < !g.length &&
                    (t =
                      0 < c[f].labelAngle
                        ? t - u / 2
                        : 0 === c[f].labelAngle
                        ? t - u / 2
                        : t)),
                (c[f].lineCoordinates.x1 = d),
                (c[f].lineCoordinates.x2 = t),
                (c[f].lineCoordinates.width = Math.abs(t - d)),
                c[f].title &&
                  (c[f]._titleTextBlock.maxWidth =
                    0 < c[f].titleMaxWidth &&
                    c[f].titleMaxWidth < c[f].lineCoordinates.width
                      ? c[f].titleMaxWidth
                      : c[f].lineCoordinates.width);
          if (b && 0 < b.length)
            for (f = 0; f < b.length; f++)
              (b[f].lineCoordinates = {}),
                (d = Math.round(h.x1 + T + e)),
                (t = Math.round(
                  h.x2 - W - V > b[f].chart.width - 10
                    ? b[f].chart.width - 10
                    : h.x2 - W - V
                )),
                b[f] &&
                  b[f].labelAutoFit &&
                  !n(A) &&
                  (0 < !a.length &&
                    (d =
                      0 < b[f].labelAngle
                        ? Math.max(d, A)
                        : 0 === b[f].labelAngle
                        ? Math.max(d, A / 2)
                        : d),
                  0 < !g.length && (t -= B / 2)),
                (b[f].lineCoordinates.x1 = d),
                (b[f].lineCoordinates.x2 = t),
                (b[f].lineCoordinates.width = Math.abs(t - d)),
                b[f].title &&
                  (b[f]._titleTextBlock.maxWidth =
                    0 < b[f].titleMaxWidth &&
                    b[f].titleMaxWidth < b[f].lineCoordinates.width
                      ? b[f].titleMaxWidth
                      : b[f].lineCoordinates.width);
          if (c && 0 < c.length)
            for (p = [], f = U = 0; f < c.length; f++)
              p.push(
                Math.ceil(c[f] ? c[f].createLabelsAndCalculateHeight() : 0)
              ),
                (U += p[f] + c[f].margin),
                (O += c[f].margin);
          else
            p.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
          G.push(p);
          if (b && 0 < b.length)
            for (D = [], f = 0; f < b.length; f++)
              D.push(
                Math.ceil(b[f] ? b[f].createLabelsAndCalculateHeight() : 0)
              ),
                (Y += b[f].margin);
          else
            D.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
          s.push(D);
          if (c && 0 < c.length)
            for (f = 0; f < c.length; f++)
              0 < c[f]._labels.length &&
                ((k = c[f]._labels[0]),
                (m = c[f]._labels[c[f]._labels.length - 1]),
                (z =
                  k.textBlock.width *
                    Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) +
                  (k.textBlock.height - m.textBlock.fontSize / 2) *
                    Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                (u =
                  m.textBlock.width *
                    Math.cos((Math.PI / 180) * Math.abs(m.textBlock.angle)) +
                  (m.textBlock.height - m.textBlock.fontSize / 2) *
                    Math.sin((Math.PI / 180) * Math.abs(m.textBlock.angle))));
          if (b && 0 < b.length)
            for (f = 0; f < b.length; f++)
              b[f] &&
                0 < b[f]._labels.length &&
                ((k = b[f]._labels[0]),
                (m = b[f]._labels[b[f]._labels.length - 1]),
                (A =
                  k.textBlock.width *
                    Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) +
                  (k.textBlock.height - m.textBlock.fontSize / 2) *
                    Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                (B =
                  m.textBlock.width *
                    Math.cos((Math.PI / 180) * Math.abs(m.textBlock.angle)) +
                  (m.textBlock.height - m.textBlock.fontSize / 2) *
                    Math.sin((Math.PI / 180) * Math.abs(m.textBlock.angle))));
          if (l.panEnabled)
            for (f = 0; f < c.length; f++)
              p[f] = n(l.sessionVariables.axisY[f].height)
                ? (l.sessionVariables.axisY[f].height = p[f])
                : l.sessionVariables.axisY[f].height;
          else
            for (f = 0; f < c.length; f++)
              l.sessionVariables.axisY[f].height = p[f];
          if (c && 0 < c.length)
            for (f = c.length - 1; 0 <= f; f--)
              (m = Math.round(h.y2)),
                (k = Math.round(
                  h.y2 > c[f].chart.height ? c[f].chart.height : h.y2
                )),
                (c[f].lineCoordinates.y1 = m - (p[f] + c[f].margin + X)),
                (c[f].lineCoordinates.y2 = m - (p[f] + c[f].margin + X)),
                "inside" === c[f].labelPlacement &&
                  0 < f &&
                  ((c[f].lineCoordinates.y1 =
                    c[f].lineCoordinates.y1 +
                    p[f] -
                    (c[f]._titleTextBlock ? c[f]._titleTextBlock.height : 0) -
                    c[f].tickLength -
                    (c[f].stripLineLabelEffectiveHeight || 0) -
                    5),
                  (c[f].lineCoordinates.y2 =
                    c[f].lineCoordinates.y1 + c[f].lineThickness / 2)),
                "inside" === c[f].tickPlacement &&
                  0 < f &&
                  ((c[f].lineCoordinates.y1 += c[f].tickLength),
                  (c[f].lineCoordinates.y2 =
                    c[f].lineCoordinates.y1 + c[f].lineThickness / 2)),
                (c[f].bounds = {
                  x1: d,
                  y1: m - (p[f] + X + c[f].margin),
                  x2: t,
                  y2: k - (X + c[f].margin),
                  width: t - d,
                  height: p[f],
                }),
                c[f].title &&
                  (c[f]._titleTextBlock.maxWidth =
                    0 < c[f].titleMaxWidth &&
                    c[f].titleMaxWidth < c[f].lineCoordinates.width
                      ? c[f].titleMaxWidth
                      : c[f].lineCoordinates.width),
                (X += p[f] + c[f].margin);
          if (b && 0 < b.length)
            for (f = b.length - 1; 0 <= f; f--)
              b[f] &&
                ((m = Math.round(h.y1)),
                (k = Math.round(h.y1 + (D[f] + b[f].margin + E))),
                (b[f].lineCoordinates.y1 = k),
                (b[f].lineCoordinates.y2 = k),
                "inside" === b[f].labelPlacement &&
                  0 < f &&
                  ((b[f].lineCoordinates.y1 =
                    k -
                    D[f] +
                    (b[f]._titleTextBlock ? b[f]._titleTextBlock.height : 0) +
                    b[f].tickLength +
                    (b[f].stripLineLabelEffectiveHeight || 0)),
                  (b[f].lineCoordinates.y2 =
                    b[f].lineCoordinates.y1 - b[f].lineThickness / 2)),
                "inside" === b[f].tickPlacement &&
                  0 < f &&
                  ((b[f].lineCoordinates.y1 -= b[f].tickLength),
                  (b[f].lineCoordinates.y2 =
                    b[f].lineCoordinates.y1 - b[f].lineThickness / 2)),
                (b[f].bounds = {
                  x1: d,
                  y1: m + (b[f].margin + E),
                  x2: t,
                  y2: k,
                  width: t - d,
                }),
                (b[f].bounds.height = b[f].bounds.y2 - b[f].bounds.y1),
                b[f].title &&
                  (b[f]._titleTextBlock.maxWidth =
                    0 < b[f].titleMaxWidth &&
                    b[f].titleMaxWidth < b[f].lineCoordinates.width
                      ? b[f].titleMaxWidth
                      : b[f].lineCoordinates.width),
                (E += D[f] + b[f].margin));
          if (a && 0 < a.length)
            for (f = 0; f < a.length; f++) {
              O =
                a[f]._labels && 0 < a[f]._labels.length
                  ? a[f]._labels[0].textBlock.fontSize / 2
                  : 0;
              d = Math.round(h.x1 + e);
              m =
                b && 0 < b.length
                  ? Math.round(
                      b[0]
                        ? b[0].lineCoordinates.y2
                        : h.y1 < Math.max(O, 10)
                        ? Math.max(O, 10)
                        : h.y1
                    )
                  : h.y1 < Math.max(O, 10)
                  ? Math.max(O, 10)
                  : h.y1;
              t = Math.round(h.x1 + T + e);
              k =
                c && 0 < c.length
                  ? Math.round(
                      c[0]
                        ? c[0].lineCoordinates.y1
                        : h.y2 - U > l.height - Math.max(O, 10)
                        ? l.height - Math.max(O, 10)
                        : h.y2 - U
                    )
                  : h.y2 > l.height - Math.max(O, 10)
                  ? l.height - Math.max(O, 10)
                  : h.y2;
              if (c && 0 < c.length)
                for (O = 0; O < c.length; O++)
                  c[O] &&
                    c[O].labelAutoFit &&
                    ((t = c[O].lineCoordinates.x1),
                    (d =
                      0 > c[O].labelAngle || 0 === c[O].labelAngle
                        ? t - T
                        : d));
              if (b && 0 < b.length)
                for (O = 0; O < b.length; O++)
                  b[O] &&
                    b[O].labelAutoFit &&
                    ((t = b[O].lineCoordinates.x1), (d = t - T));
              a[f].lineCoordinates = {
                x1: t - N,
                y1: m,
                x2: t - N,
                y2: k,
                height: Math.abs(k - m),
              };
              "inside" === a[f].labelPlacement &&
                0 < f &&
                ((a[f].lineCoordinates.x1 =
                  a[f].lineCoordinates.x1 -
                  (H[f] -
                    (a[f]._titleTextBlock ? a[f]._titleTextBlock.height : 0)) +
                  a[f].tickLength +
                  (a[f].stripLineLabelEffectiveWidth || 0)),
                (a[f].lineCoordinates.x2 =
                  a[f].lineCoordinates.x1 + a[f].lineThickness / 2));
              "inside" === a[f].tickPlacement &&
                0 < f &&
                ((a[f].lineCoordinates.x1 -= a[f].tickLength),
                (a[f].lineCoordinates.x2 =
                  a[f].lineCoordinates.x1 + a[f].lineThickness / 2));
              a[f].bounds = {
                x1: t - (H[f] + N),
                y1: m,
                x2: t - N,
                y2: k,
                height: k - m,
              };
              a[f].bounds.width = a[f].bounds.x2 - a[f].bounds.x1;
              a[f].title &&
                (a[f]._titleTextBlock.maxWidth =
                  0 < a[f].titleMaxWidth &&
                  a[f].titleMaxWidth < a[f].lineCoordinates.height
                    ? a[f].titleMaxWidth
                    : a[f].lineCoordinates.height);
              a[f].calculateValueToPixelConversionParameters();
              a[f].calculateBreaksSizeInValues();
              N += H[f] + a[f].margin;
            }
          if (g && 0 < g.length)
            for (f = 0; f < g.length; f++) {
              O =
                g[f]._labels && 0 < g[f]._labels.length
                  ? g[f]._labels[0].textBlock.fontSize / 2
                  : 0;
              d = Math.round(h.x1 - e);
              m =
                b && 0 < b.length
                  ? Math.round(
                      b[0]
                        ? b[0].lineCoordinates.y2
                        : h.y1 < Math.max(O, 10)
                        ? Math.max(O, 10)
                        : h.y1
                    )
                  : h.y1 < Math.max(O, 10)
                  ? Math.max(O, 10)
                  : h.y1;
              t = Math.round(h.x2 - W - V);
              k =
                c && 0 < c.length
                  ? Math.round(
                      c[0]
                        ? c[0].lineCoordinates.y1
                        : h.y2 - U > l.height - Math.max(O, 10)
                        ? l.height - Math.max(O, 10)
                        : h.y2 - U
                    )
                  : h.y2 > l.height - Math.max(O, 10)
                  ? l.height - Math.max(O, 10)
                  : h.y2;
              if (c && 0 < c.length)
                for (O = 0; O < c.length; O++)
                  c[O] &&
                    c[O].labelAutoFit &&
                    ((t =
                      0 > c[O].labelAngle
                        ? Math.max(t, z)
                        : 0 === c[O].labelAngle
                        ? Math.max(t, z / 2)
                        : t),
                    (d =
                      0 > c[O].labelAngle || 0 === c[O].labelAngle
                        ? t - W
                        : d));
              if (b && 0 < b.length)
                for (O = 0; O < b.length; O++)
                  b[O] &&
                    b[O].labelAutoFit &&
                    ((t = b[O].lineCoordinates.x2), (d = t - W));
              g[f].lineCoordinates = {
                x1: t + Q,
                y1: m,
                x2: t + Q,
                y2: k,
                height: Math.abs(k - m),
              };
              "inside" === g[f].labelPlacement &&
                0 < f &&
                ((g[f].lineCoordinates.x1 =
                  g[f].lineCoordinates.x1 +
                  (x[f] -
                    (g[f]._titleTextBlock ? g[f]._titleTextBlock.height : 0) -
                    2) -
                  g[f].tickLength -
                  (g[f].stripLineLabelEffectiveWidth || 0)),
                (g[f].lineCoordinates.x2 =
                  g[f].lineCoordinates.x1 + g[f].lineThickness / 2));
              "inside" === g[f].tickPlacement &&
                0 < f &&
                ((g[f].lineCoordinates.x1 += g[f].tickLength),
                (g[f].lineCoordinates.x2 =
                  g[f].lineCoordinates.x1 + g[f].lineThickness / 2));
              g[f].bounds = {
                x1: g[f].lineCoordinates.x1,
                y1: m,
                x2: t + x[f] + Q,
                y2: k,
                width: t - d,
                height: k - m,
              };
              g[f].bounds.width = g[f].bounds.x2 - g[f].bounds.x1;
              g[f].title &&
                (g[f]._titleTextBlock.maxWidth =
                  0 < g[f].titleMaxWidth &&
                  g[f].titleMaxWidth < g[f].lineCoordinates.height
                    ? g[f].titleMaxWidth
                    : g[f].lineCoordinates.height);
              g[f].calculateValueToPixelConversionParameters();
              g[f].calculateBreaksSizeInValues();
              Q += x[f] + g[f].margin;
            }
          for (f = 0; f < r.length; f++)
            "axisY" === r[f].type &&
              (r[f].calculateValueToPixelConversionParameters(),
              r[f].calculateBreaksSizeInValues());
          if (0 < w) {
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++)
                v = M[w - 1][f] === M[w][f] ? !0 : !1;
            else v = !0;
            if (g && 0 < g.length)
              for (f = 0; f < g.length; f++)
                J = P[w - 1][f] === P[w][f] ? !0 : !1;
            else J = !0;
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                K = G[w - 1][f] === G[w][f] ? !0 : !1;
            else K = !0;
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                L = s[w - 1][f] === s[w][f] ? !0 : !1;
            else L = !0;
          }
          if (v && J && K && L) break;
          w++;
        }
        if (c && 0 < c.length)
          for (f = 0; f < c.length; f++)
            c[f].calculateStripLinesThicknessInValues(),
              c[f].calculateBreaksInPixels();
        if (b && 0 < b.length)
          for (f = 0; f < b.length; f++)
            b[f].calculateStripLinesThicknessInValues(),
              b[f].calculateBreaksInPixels();
        if (a && 0 < a.length)
          for (f = 0; f < a.length; f++)
            a[f].calculateStripLinesThicknessInValues(),
              a[f].calculateBreaksInPixels();
        if (g && 0 < g.length)
          for (f = 0; f < g.length; f++)
            g[f].calculateStripLinesThicknessInValues(),
              g[f].calculateBreaksInPixels();
      }
    };
    A.render = function (a, g, c, b, e) {
      var h = a[0] ? a[0].chart : g[0].chart;
      e = h.ctx;
      h.alignVerticalAxes && h.alignVerticalAxes();
      e.save();
      e.beginPath();
      a &&
        a.length &&
        e.rect(
          2,
          a[0].bounds.y1,
          a[0].chart.width - 4,
          a[a.length - 1].bounds.y2
        );
      g &&
        g.length &&
        e.rect(
          2,
          g[g.length - 1].bounds.y1,
          g[0].chart.width - 4,
          g[0].bounds.y2
        );
      e.clip();
      if (a && 0 < a.length)
        for (var d = 0; d < a.length; d++) a[d].renderLabelsTicksAndTitle();
      if (g && 0 < g.length)
        for (d = 0; d < g.length; d++) g[d].renderLabelsTicksAndTitle();
      e.restore();
      if (c && 0 < c.length)
        for (d = 0; d < c.length; d++) c[d].renderLabelsTicksAndTitle();
      if (b && 0 < b.length)
        for (d = 0; d < b.length; d++) b[d].renderLabelsTicksAndTitle();
      h.preparePlotArea();
      h = h.plotArea;
      e.save();
      e.beginPath();
      e.rect(h.x1, h.y1, Math.abs(h.x2 - h.x1), Math.abs(h.y2 - h.y1));
      e.clip();
      if (a && 0 < a.length)
        for (d = 0; d < a.length; d++)
          a[d].renderStripLinesOfThicknessType("value");
      if (g && 0 < g.length)
        for (d = 0; d < g.length; d++)
          g[d].renderStripLinesOfThicknessType("value");
      if (c && 0 < c.length)
        for (d = 0; d < c.length; d++)
          c[d].renderStripLinesOfThicknessType("value");
      if (b && 0 < b.length)
        for (d = 0; d < b.length; d++)
          b[d].renderStripLinesOfThicknessType("value");
      if (a && 0 < a.length)
        for (d = 0; d < a.length; d++) a[d].renderInterlacedColors();
      if (g && 0 < g.length)
        for (d = 0; d < g.length; d++) g[d].renderInterlacedColors();
      if (c && 0 < c.length)
        for (d = 0; d < c.length; d++) c[d].renderInterlacedColors();
      if (b && 0 < b.length)
        for (d = 0; d < b.length; d++) b[d].renderInterlacedColors();
      e.restore();
      if (a && 0 < a.length)
        for (d = 0; d < a.length; d++)
          a[d].renderGrid(),
            v && (a[d].createMask(), a[d].renderBreaksBackground());
      if (g && 0 < g.length)
        for (d = 0; d < g.length; d++)
          g[d].renderGrid(),
            v && (g[d].createMask(), g[d].renderBreaksBackground());
      if (c && 0 < c.length)
        for (d = 0; d < c.length; d++)
          c[d].renderGrid(),
            v && (c[d].createMask(), c[d].renderBreaksBackground());
      if (b && 0 < b.length)
        for (d = 0; d < b.length; d++)
          b[d].renderGrid(),
            v && (b[d].createMask(), b[d].renderBreaksBackground());
      if (a && 0 < a.length)
        for (d = 0; d < a.length; d++) a[d].renderAxisLine();
      if (g && 0 < g.length)
        for (d = 0; d < g.length; d++) g[d].renderAxisLine();
      if (c && 0 < c.length)
        for (d = 0; d < c.length; d++) c[d].renderAxisLine();
      if (b && 0 < b.length)
        for (d = 0; d < b.length; d++) b[d].renderAxisLine();
      if (a && 0 < a.length)
        for (d = 0; d < a.length; d++)
          a[d].renderStripLinesOfThicknessType("pixel");
      if (g && 0 < g.length)
        for (d = 0; d < g.length; d++)
          g[d].renderStripLinesOfThicknessType("pixel");
      if (c && 0 < c.length)
        for (d = 0; d < c.length; d++)
          c[d].renderStripLinesOfThicknessType("pixel");
      if (b && 0 < b.length)
        for (d = 0; d < b.length; d++)
          b[d].renderStripLinesOfThicknessType("pixel");
    };
    A.prototype.calculateStripLinesThicknessInValues = function () {
      for (var a = 0; a < this.stripLines.length; a++)
        if (
          null !== this.stripLines[a].startValue &&
          null !== this.stripLines[a].endValue
        ) {
          var g = Math.min(
              this.stripLines[a].startValue,
              this.stripLines[a].endValue
            ),
            c = Math.max(
              this.stripLines[a].startValue,
              this.stripLines[a].endValue
            ),
            b = this.getApparentDifference(g, c);
          this.stripLines[a].value = this.convertPixelToValue(
            Math.abs(
              this.convertValueToPixel(g) + this.convertValueToPixel(c)
            ) / 2
          );
          this.stripLines[a].thickness = b;
          this.stripLines[a]._thicknessType = "value";
        }
    };
    A.prototype.calculateBreaksSizeInValues = function () {
      for (
        var a =
            "left" === this._position || "right" === this._position
              ? this.lineCoordinates.height || this.chart.height
              : this.lineCoordinates.width || this.chart.width,
          g = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
          c =
            this.conversionParameters.pixelPerUnit ||
            a /
              (this.logarithmic
                ? this.conversionParameters.maximum /
                  this.conversionParameters.minimum
                : this.conversionParameters.maximum -
                  this.conversionParameters.minimum),
          b = this.scaleBreaks && !n(this.scaleBreaks.options.spacing),
          e,
          h = 0;
        h < g.length;
        h++
      )
        (e = b || !n(g[h].options.spacing)),
          (g[h].spacing =
            Ua(g[h].spacing, a, 8, e ? 0.1 * a : 8, e ? 0 : 3) << 0),
          (g[h].size = 0 > g[h].spacing ? 0 : Math.abs(g[h].spacing / c)),
          this.logarithmic &&
            (g[h].size = Math.pow(this.logarithmBase, g[h].size));
    };
    A.prototype.calculateBreaksInPixels = function () {
      if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
        var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
        a.length &&
          (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex =
            null);
        for (
          var g = 0;
          g < a.length &&
          !(a[g].startValue > this.conversionParameters.maximum);
          g++
        )
          a[g].endValue < this.conversionParameters.minimum ||
            (n(this.scaleBreaks.firstBreakIndex) &&
              (this.scaleBreaks.firstBreakIndex = g),
            a[g].startValue >= this.conversionParameters.minimum &&
              ((a[g].startPixel = this.convertValueToPixel(a[g].startValue)),
              (this.scaleBreaks.lastBreakIndex = g)),
            a[g].endValue <= this.conversionParameters.maximum &&
              (a[g].endPixel = this.convertValueToPixel(a[g].endValue)));
      }
    };
    A.prototype.renderLabelsTicksAndTitle = function () {
      var a = this,
        g = !1,
        c = 0,
        b = 0,
        e = 1,
        h = 0;
      0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
      if ("undefined" === typeof this.options.interval) {
        if ("bottom" === this._position || "top" === this._position)
          if (
            this.logarithmic &&
            !this.equidistantInterval &&
            this.labelAutoFit
          ) {
            for (
              var c = [],
                e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2,
                d,
                m = this.viewportMaximum,
                n = this.lineCoordinates.width / Math.log(this.range),
                k = this._labels.length - 1;
              0 <= k;
              k--
            ) {
              p = this._labels[k];
              if (p.position < this.viewportMinimum) break;
              p.position > this.viewportMaximum ||
                !(
                  k === this._labels.length - 1 ||
                  d < (Math.log(m / p.position) * n) / e
                ) ||
                (c.push(p),
                (m = p.position),
                (d =
                  p.textBlock.width *
                    Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) +
                  p.textBlock.height *
                    Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))));
            }
            this._labels = c;
          } else {
            for (k = 0; k < this._labels.length; k++)
              (p = this._labels[k]),
                p.position < this.viewportMinimum ||
                  ((d =
                    p.textBlock.width *
                      Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) +
                    p.textBlock.height *
                      Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))),
                  (c += d));
            c > this.lineCoordinates.width * e && this.labelAutoFit && (g = !0);
          }
        if ("left" === this._position || "right" === this._position)
          if (
            this.logarithmic &&
            !this.equidistantInterval &&
            this.labelAutoFit
          ) {
            for (
              var c = [],
                l,
                m = this.viewportMaximum,
                n = this.lineCoordinates.height / Math.log(this.range),
                k = this._labels.length - 1;
              0 <= k;
              k--
            ) {
              p = this._labels[k];
              if (p.position < this.viewportMinimum) break;
              p.position > this.viewportMaximum ||
                !(
                  k === this._labels.length - 1 ||
                  l < Math.log(m / p.position) * n
                ) ||
                (c.push(p),
                (m = p.position),
                (l =
                  p.textBlock.height *
                    Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) +
                  p.textBlock.width *
                    Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))));
            }
            this._labels = c;
          } else {
            for (k = 0; k < this._labels.length; k++)
              (p = this._labels[k]),
                p.position < this.viewportMinimum ||
                  ((l =
                    p.textBlock.height *
                      Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) +
                    p.textBlock.width *
                      Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))),
                  (b += l));
            b > this.lineCoordinates.height * e &&
              this.labelAutoFit &&
              (g = !0);
          }
      }
      this.logarithmic &&
        !this.equidistantInterval &&
        this.labelAutoFit &&
        this._labels.sort(function (a, b) {
          return a.position - b.position;
        });
      var k = 0,
        p,
        r;
      if ("bottom" === this._position) {
        for (k = 0; k < this._labels.length; k++)
          (p = this._labels[k]),
            p.position < this.viewportMinimum ||
              p.position > this.viewportMaximum ||
              ((r = this.getPixelCoordinatesOnAxis(p.position)),
              this.tickThickness &&
                "inside" != this.tickPlacement &&
                ((this.ctx.lineWidth = this.tickThickness),
                (this.ctx.strokeStyle = this.tickColor),
                (b =
                  1 === this.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0),
                this.ctx.beginPath(),
                this.ctx.moveTo(b, r.y << 0),
                this.ctx.lineTo(b, (r.y + this.tickLength) << 0),
                this.ctx.stroke()),
              (g && 0 !== h++ % 2 && this.labelAutoFit) ||
                (0 === p.textBlock.angle
                  ? ((r.x -= p.textBlock.width / 2),
                    (r.y =
                      "inside" === this.labelPlacement
                        ? r.y -
                          (("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) +
                            p.textBlock.height -
                            p.textBlock.fontSize / 2)
                        : r.y +
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) +
                          p.textBlock.fontSize / 2 +
                          5))
                  : 0 > this.labelAngle
                  ? ((r.x -=
                      "inside" === this.labelPlacement
                        ? 0
                        : p.textBlock.width *
                          Math.cos((Math.PI / 180) * this.labelAngle)),
                    (r.y =
                      "inside" === this.labelPlacement
                        ? r.y -
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) -
                          (p.textBlock.height - p.textBlock.fontSize / 2) *
                            Math.cos((Math.PI / 180) * this.labelAngle)
                        : r.y +
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) +
                          5 +
                          Math.abs(
                            p.textBlock.width *
                              Math.sin((Math.PI / 180) * this.labelAngle) -
                              (p.textBlock.fontSize / 2) *
                                Math.cos((Math.PI / 180) * this.labelAngle)
                          )))
                  : ((r.x -=
                      "inside" === this.labelPlacement
                        ? p.textBlock.width *
                          Math.cos((Math.PI / 180) * this.labelAngle)
                        : 0),
                    (r.y =
                      "inside" === this.labelPlacement
                        ? r.y -
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) -
                          p.textBlock.width *
                            Math.sin((Math.PI / 180) * this.labelAngle) -
                          (p.textBlock.height - p.textBlock.fontSize / 2) *
                            Math.cos((Math.PI / 180) * this.labelAngle)
                        : r.y +
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) +
                          5 +
                          Math.abs(
                            (p.textBlock.fontSize / 2) *
                              Math.cos((Math.PI / 180) * this.labelAngle)
                          ))),
                (p.textBlock.x = r.x),
                (p.textBlock.y = r.y)));
        "inside" === this.tickPlacement &&
          this.chart.addEventListener(
            "dataAnimationIterationEnd",
            function () {
              for (k = 0; k < a._labels.length; k++)
                if (
                  ((p = a._labels[k]),
                  !(
                    p.position < a.viewportMinimum ||
                    p.position > a.viewportMaximum
                  ) &&
                    ((r = a.getPixelCoordinatesOnAxis(p.position)),
                    a.tickThickness))
                ) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b =
                    1 === a.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b, r.y << 0);
                  a.ctx.lineTo(b, (r.y - a.tickLength) << 0);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            },
            this
          );
        this.title &&
          (this._titleTextBlock.measureText(),
          (this._titleTextBlock.x =
            this.lineCoordinates.x1 +
            this.lineCoordinates.width / 2 -
            this._titleTextBlock.width / 2),
          (this._titleTextBlock.y =
            this.bounds.y2 -
            this._titleTextBlock.height +
            this._titleTextBlock._lineHeight / 2 -
            1),
          (this.titleMaxWidth = this._titleTextBlock.maxWidth),
          this._titleTextBlock.render(!0));
      } else if ("top" === this._position) {
        for (k = 0; k < this._labels.length; k++)
          (p = this._labels[k]),
            p.position < this.viewportMinimum ||
              p.position > this.viewportMaximum ||
              ((r = this.getPixelCoordinatesOnAxis(p.position)),
              this.tickThickness &&
                "inside" != this.tickPlacement &&
                ((this.ctx.lineWidth = this.tickThickness),
                (this.ctx.strokeStyle = this.tickColor),
                (b =
                  1 === this.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0),
                this.ctx.beginPath(),
                this.ctx.moveTo(b, r.y << 0),
                this.ctx.lineTo(b, (r.y - this.tickLength) << 0),
                this.ctx.stroke()),
              (g && 0 !== h++ % 2 && this.labelAutoFit) ||
                (0 === p.textBlock.angle
                  ? ((r.x -= p.textBlock.width / 2),
                    (r.y =
                      "inside" === this.labelPlacement
                        ? r.y +
                          this.labelFontSize / 2 +
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) +
                          5
                        : r.y -
                          (("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) +
                            p.textBlock.height -
                            p.textBlock.fontSize / 2)))
                  : 0 > this.labelAngle
                  ? ((r.x -=
                      "inside" === this.labelPlacement
                        ? p.textBlock.width *
                          Math.cos((Math.PI / 180) * this.labelAngle)
                        : 0),
                    (r.y =
                      "inside" === this.labelPlacement
                        ? r.y +
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) +
                          5 -
                          p.textBlock.width *
                            Math.sin((Math.PI / 180) * this.labelAngle) +
                          (p.textBlock.fontSize / 2) *
                            Math.cos((Math.PI / 180) * this.labelAngle)
                        : r.y -
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) -
                          2 -
                          (p.textBlock.height - p.textBlock.fontSize / 2) *
                            Math.cos((Math.PI / 180) * this.labelAngle)))
                  : ((r.x -=
                      "inside" === this.labelPlacement
                        ? 0
                        : p.textBlock.width *
                          Math.cos((Math.PI / 180) * this.labelAngle)),
                    (r.y =
                      "inside" === this.labelPlacement
                        ? r.y +
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) +
                          5 +
                          (p.textBlock.fontSize / 2) *
                            Math.cos((Math.PI / 180) * this.labelAngle)
                        : r.y -
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) -
                          2 -
                          ((p.textBlock.height - p.textBlock.fontSize / 2) *
                            Math.cos((Math.PI / 180) * this.labelAngle) +
                            p.textBlock.width *
                              Math.sin((Math.PI / 180) * this.labelAngle)))),
                (p.textBlock.x = r.x),
                (p.textBlock.y = r.y)));
        "inside" === this.tickPlacement &&
          this.chart.addEventListener(
            "dataAnimationIterationEnd",
            function () {
              for (k = 0; k < a._labels.length; k++)
                if (
                  ((p = a._labels[k]),
                  !(
                    p.position < a.viewportMinimum ||
                    p.position > a.viewportMaximum
                  ) &&
                    ((r = a.getPixelCoordinatesOnAxis(p.position)),
                    a.tickThickness))
                ) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b =
                    1 === a.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b, r.y << 0);
                  a.ctx.lineTo(b, (r.y + a.tickLength) << 0);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            },
            this
          );
        this.title &&
          (this._titleTextBlock.measureText(),
          (this._titleTextBlock.x =
            this.lineCoordinates.x1 +
            this.lineCoordinates.width / 2 -
            this._titleTextBlock.width / 2),
          (this._titleTextBlock.y =
            this.bounds.y1 + this._titleTextBlock._lineHeight / 2 + 1),
          (this.titleMaxWidth = this._titleTextBlock.maxWidth),
          this._titleTextBlock.render(!0));
      } else if ("left" === this._position) {
        for (k = 0; k < this._labels.length; k++)
          (p = this._labels[k]),
            p.position < this.viewportMinimum ||
              p.position > this.viewportMaximum ||
              ((r = this.getPixelCoordinatesOnAxis(p.position)),
              this.tickThickness &&
                "inside" != this.tickPlacement &&
                ((this.ctx.lineWidth = this.tickThickness),
                (this.ctx.strokeStyle = this.tickColor),
                (b =
                  1 === this.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0),
                this.ctx.beginPath(),
                this.ctx.moveTo(r.x << 0, b),
                this.ctx.lineTo((r.x - this.tickLength) << 0, b),
                this.ctx.stroke()),
              (g && 0 !== h++ % 2 && this.labelAutoFit) ||
                (0 === this.labelAngle
                  ? ((p.textBlock.y = r.y),
                    (p.textBlock.x =
                      "inside" === this.labelPlacement
                        ? r.x +
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) +
                          5
                        : r.x -
                          p.textBlock.width *
                            Math.cos((Math.PI / 180) * this.labelAngle) -
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) -
                          5))
                  : 0 > this.labelAngle
                  ? ((p.textBlock.y =
                      "inside" === this.labelPlacement
                        ? r.y
                        : r.y -
                          p.textBlock.width *
                            Math.sin((Math.PI / 180) * this.labelAngle)),
                    (p.textBlock.x =
                      "inside" === this.labelPlacement
                        ? r.x -
                          (p.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) +
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) +
                          5
                        : r.x -
                          p.textBlock.width *
                            Math.cos((Math.PI / 180) * this.labelAngle) +
                          (p.textBlock.height - p.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) -
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) -
                          5))
                  : ((p.textBlock.y =
                      "inside" === this.labelPlacement
                        ? r.y
                        : r.y -
                          p.textBlock.width *
                            Math.sin((Math.PI / 180) * this.labelAngle)),
                    (p.textBlock.x =
                      "inside" === this.labelPlacement
                        ? r.x +
                          (p.textBlock.height - p.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) +
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) +
                          5
                        : r.x -
                          p.textBlock.width *
                            Math.cos((Math.PI / 180) * this.labelAngle) -
                          (p.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) -
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) -
                          5))));
        "inside" === this.tickPlacement &&
          this.chart.addEventListener(
            "dataAnimationIterationEnd",
            function () {
              for (k = 0; k < a._labels.length; k++)
                if (
                  ((p = a._labels[k]),
                  !(
                    p.position < a.viewportMinimum ||
                    p.position > a.viewportMaximum
                  ) &&
                    ((r = a.getPixelCoordinatesOnAxis(p.position)),
                    a.tickThickness))
                ) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b =
                    1 === a.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(r.x << 0, b);
                  a.ctx.lineTo((r.x + a.tickLength) << 0, b);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            },
            this
          );
        this.title &&
          (this._titleTextBlock.measureText(),
          (this._titleTextBlock.x =
            this.bounds.x1 + this._titleTextBlock._lineHeight / 2),
          (this._titleTextBlock.y =
            this.lineCoordinates.height / 2 +
            this._titleTextBlock.width / 2 +
            this.lineCoordinates.y1),
          (this.titleMaxWidth = this._titleTextBlock.maxWidth),
          this._titleTextBlock.render(!0));
      } else if ("right" === this._position) {
        for (k = 0; k < this._labels.length; k++)
          (p = this._labels[k]),
            p.position < this.viewportMinimum ||
              p.position > this.viewportMaximum ||
              ((r = this.getPixelCoordinatesOnAxis(p.position)),
              this.tickThickness &&
                "inside" != this.tickPlacement &&
                ((this.ctx.lineWidth = this.tickThickness),
                (this.ctx.strokeStyle = this.tickColor),
                (b =
                  1 === this.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0),
                this.ctx.beginPath(),
                this.ctx.moveTo(r.x << 0, b),
                this.ctx.lineTo((r.x + this.tickLength) << 0, b),
                this.ctx.stroke()),
              (g && 0 !== h++ % 2 && this.labelAutoFit) ||
                (0 === this.labelAngle
                  ? ((p.textBlock.y = r.y),
                    (p.textBlock.x =
                      "inside" === this.labelPlacement
                        ? r.x -
                          p.textBlock.width -
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) -
                          5
                        : r.x +
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) +
                          5))
                  : 0 > this.labelAngle
                  ? ((p.textBlock.y =
                      "inside" === this.labelPlacement
                        ? r.y -
                          p.textBlock.width *
                            Math.sin((Math.PI / 180) * this.labelAngle)
                        : r.y),
                    (p.textBlock.x =
                      "inside" === this.labelPlacement
                        ? r.x -
                          p.textBlock.width *
                            Math.cos((Math.PI / 180) * this.labelAngle) +
                          (p.textBlock.height - p.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) -
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) -
                          5
                        : r.x -
                          (p.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) +
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) +
                          5))
                  : ((p.textBlock.y =
                      "inside" === this.labelPlacement
                        ? r.y -
                          p.textBlock.width *
                            Math.sin((Math.PI / 180) * this.labelAngle)
                        : r.y),
                    (p.textBlock.x =
                      "inside" === this.labelPlacement
                        ? r.x -
                          p.textBlock.width *
                            Math.cos((Math.PI / 180) * this.labelAngle) -
                          (p.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) -
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) -
                          5
                        : r.x +
                          (p.textBlock.height - p.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) +
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) +
                          5))));
        "inside" === this.tickPlacement &&
          this.chart.addEventListener(
            "dataAnimationIterationEnd",
            function () {
              for (k = 0; k < a._labels.length; k++)
                if (
                  ((p = a._labels[k]),
                  !(
                    p.position < a.viewportMinimum ||
                    p.position > a.viewportMaximum
                  ) &&
                    ((r = a.getPixelCoordinatesOnAxis(p.position)),
                    a.tickThickness))
                ) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b =
                    1 === a.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(r.x << 0, b);
                  a.ctx.lineTo((r.x - a.tickLength) << 0, b);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            },
            this
          );
        this.title &&
          (this._titleTextBlock.measureText(),
          (this._titleTextBlock.x =
            this.bounds.x2 - this._titleTextBlock._lineHeight / 2),
          (this._titleTextBlock.y =
            this.lineCoordinates.height / 2 -
            this._titleTextBlock.width / 2 +
            this.lineCoordinates.y1),
          (this.titleMaxWidth = this._titleTextBlock.maxWidth),
          this._titleTextBlock.render(!0));
      }
      h = 0;
      if ("inside" === this.labelPlacement)
        this.chart.addEventListener(
          "dataAnimationIterationEnd",
          function () {
            for (k = 0; k < a._labels.length; k++)
              (p = a._labels[k]),
                p.position < a.viewportMinimum ||
                  p.position > a.viewportMaximum ||
                  (g && 0 !== h++ % 2 && a.labelAutoFit) ||
                  (a.ctx.save(),
                  a.ctx.beginPath(),
                  p.textBlock.render(!0),
                  a.ctx.restore());
          },
          this
        );
      else
        for (k = 0; k < this._labels.length; k++)
          (p = this._labels[k]),
            p.position < this.viewportMinimum ||
              p.position > this.viewportMaximum ||
              (g && 0 !== h++ % 2 && this.labelAutoFit) ||
              p.textBlock.render(!0);
    };
    A.prototype.renderInterlacedColors = function () {
      var a = this.chart.plotArea.ctx,
        g,
        c,
        b = this.chart.plotArea,
        e = 0;
      g = !0;
      if (
        ("bottom" === this._position || "top" === this._position) &&
        this.interlacedColor
      )
        for (
          a.fillStyle = this.interlacedColor, e = 0;
          e < this._labels.length;
          e++
        )
          g
            ? ((g = this.getPixelCoordinatesOnAxis(this._labels[e].position)),
              (c =
                e + 1 > this._labels.length - 1
                  ? this.getPixelCoordinatesOnAxis(this.viewportMaximum)
                  : this.getPixelCoordinatesOnAxis(
                      this._labels[e + 1].position
                    )),
              a.fillRect(
                Math.min(c.x, g.x),
                b.y1,
                Math.abs(c.x - g.x),
                Math.abs(b.y1 - b.y2)
              ),
              (g = !1))
            : (g = !0);
      else if (
        ("left" === this._position || "right" === this._position) &&
        this.interlacedColor
      )
        for (
          a.fillStyle = this.interlacedColor, e = 0;
          e < this._labels.length;
          e++
        )
          g
            ? ((c = this.getPixelCoordinatesOnAxis(this._labels[e].position)),
              (g =
                e + 1 > this._labels.length - 1
                  ? this.getPixelCoordinatesOnAxis(this.viewportMaximum)
                  : this.getPixelCoordinatesOnAxis(
                      this._labels[e + 1].position
                    )),
              a.fillRect(
                b.x1,
                Math.min(c.y, g.y),
                Math.abs(b.x1 - b.x2),
                Math.abs(g.y - c.y)
              ),
              (g = !1))
            : (g = !0);
      a.beginPath();
    };
    A.prototype.renderStripLinesOfThicknessType = function (a) {
      if (this.stripLines && 0 < this.stripLines.length && a) {
        var g = this,
          c,
          b,
          e = 0,
          h = 0,
          d = !1;
        b = !1;
        for (
          var m = [], t = [], k = !1, e = 0;
          e < this.stripLines.length;
          e++
        ) {
          var l = this.stripLines[e];
          l._thicknessType === a &&
            (("pixel" === a &&
              (l.value < this.viewportMinimum ||
                l.value > this.viewportMaximum ||
                n(l.value) ||
                isNaN(this.range))) ||
              ("value" === a &&
                ((l.startValue <= this.viewportMinimum &&
                  l.endValue <= this.viewportMinimum) ||
                  (l.startValue >= this.viewportMaximum &&
                    l.endValue >= this.viewportMaximum) ||
                  n(l.startValue) ||
                  n(l.endValue) ||
                  isNaN(this.range))) ||
              m.push(l));
        }
        for (e = 0; e < this._stripLineLabels.length; e++)
          if (
            ((l = this.stripLines[e]),
            (c = this._stripLineLabels[e]),
            !(
              c.position < this.viewportMinimum ||
              c.position > this.viewportMaximum ||
              isNaN(this.range)
            ))
          )
            if (
              ((b = this.getPixelCoordinatesOnAxis(c.position)),
              "outside" === c.stripLine.labelPlacement)
            ) {
              l &&
                ((this.ctx.strokeStyle = l.color),
                (this.ctx.lineWidth =
                  "pixel" === l._thicknessType
                    ? l.thickness
                    : this.tickThickness));
              if ("bottom" === this._position) {
                var p =
                  1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0;
                this.ctx.beginPath();
                this.ctx.moveTo(p, b.y << 0);
                this.ctx.lineTo(p, (b.y + this.tickLength) << 0);
                this.ctx.stroke();
                0 === this.labelAngle
                  ? ((b.x -= c.textBlock.width / 2),
                    (b.y += this.tickLength + c.textBlock.fontSize / 2 + 5))
                  : ((b.x -=
                      0 > this.labelAngle
                        ? c.textBlock.width *
                          Math.cos((Math.PI / 180) * this.labelAngle)
                        : 0),
                    (b.y +=
                      this.tickLength +
                      5 +
                      (0 > this.labelAngle
                        ? Math.abs(
                            c.textBlock.width *
                              Math.sin((Math.PI / 180) * this.labelAngle) -
                              (c.textBlock.fontSize / 2) *
                                Math.cos((Math.PI / 180) * this.labelAngle)
                          )
                        : Math.abs(
                            (c.textBlock.fontSize / 2) *
                              Math.cos((Math.PI / 180) * this.labelAngle)
                          ))));
              } else
                "top" === this._position
                  ? ((p =
                      1 === this.ctx.lineWidth % 2
                        ? (b.x << 0) + 0.5
                        : b.x << 0),
                    this.ctx.beginPath(),
                    this.ctx.moveTo(p, b.y << 0),
                    this.ctx.lineTo(p, (b.y - this.tickLength) << 0),
                    this.ctx.stroke(),
                    0 === this.labelAngle
                      ? ((b.x -= c.textBlock.width / 2),
                        (b.y -=
                          this.tickLength +
                          c.textBlock.height -
                          c.textBlock.fontSize / 2))
                      : ((b.x -=
                          0 < this.labelAngle
                            ? c.textBlock.width *
                              Math.cos((Math.PI / 180) * this.labelAngle)
                            : 0),
                        (b.y -=
                          this.tickLength +
                          2 +
                          (0 < this.labelAngle
                            ? (c.textBlock.height - c.textBlock.fontSize / 2) *
                                Math.cos((Math.PI / 180) * this.labelAngle) +
                              c.textBlock.width *
                                Math.sin((Math.PI / 180) * this.labelAngle)
                            : (c.textBlock.height - c.textBlock.fontSize / 2) *
                              Math.cos((Math.PI / 180) * this.labelAngle)))))
                  : "left" === this._position
                  ? ((p =
                      1 === this.ctx.lineWidth % 2
                        ? (b.y << 0) + 0.5
                        : b.y << 0),
                    this.ctx.beginPath(),
                    this.ctx.moveTo(b.x << 0, p),
                    this.ctx.lineTo((b.x - this.tickLength) << 0, p),
                    this.ctx.stroke(),
                    0 === this.labelAngle
                      ? (b.x =
                          b.x -
                          c.textBlock.width *
                            Math.cos((Math.PI / 180) * this.labelAngle) -
                          this.tickLength -
                          5)
                      : ((b.y -=
                          c.textBlock.width *
                          Math.sin((Math.PI / 180) * this.labelAngle)),
                        (b.x -=
                          this.tickLength +
                          5 +
                          (0 < this.labelAngle
                            ? c.textBlock.width *
                                Math.cos((Math.PI / 180) * this.labelAngle) +
                              (c.textBlock.fontSize / 2) *
                                Math.sin((Math.PI / 180) * this.labelAngle)
                            : c.textBlock.width *
                                Math.cos((Math.PI / 180) * this.labelAngle) -
                              (c.textBlock.height - c.textBlock.fontSize / 2) *
                                Math.sin((Math.PI / 180) * this.labelAngle)))))
                  : "right" === this._position &&
                    ((p =
                      1 === this.ctx.lineWidth % 2
                        ? (b.y << 0) + 0.5
                        : b.y << 0),
                    this.ctx.beginPath(),
                    this.ctx.moveTo(b.x << 0, p),
                    this.ctx.lineTo((b.x + this.tickLength) << 0, p),
                    this.ctx.stroke(),
                    (b.x =
                      0 === this.labelAngle
                        ? b.x + this.tickLength + 5
                        : this.tickLength +
                          5 +
                          (0 < this.labelAngle
                            ? b.x +
                              (c.textBlock.height - c.textBlock.fontSize / 2) *
                                Math.sin((Math.PI / 180) * this.labelAngle)
                            : b.x -
                              (c.textBlock.fontSize / 2) *
                                Math.sin((Math.PI / 180) * this.labelAngle))));
              c.textBlock.x = b.x;
              c.textBlock.y = b.y;
              t.push(c);
            } else
              l._thicknessType === a &&
                ((c.textBlock.angle = -90),
                "bottom" === this._position
                  ? ((c.textBlock.maxWidth = this.options.stripLines[e]
                      .labelMaxWidth
                      ? this.options.stripLines[e].labelMaxWidth
                      : this.chart.plotArea.height - 3),
                    c.textBlock.measureText(),
                    b.x - c.textBlock.height - l.thickness / 2 >
                    this.chart.plotArea.x1
                      ? n(l.startValue)
                        ? (b.x -=
                            c.textBlock.height -
                            c.textBlock.fontSize / 2 +
                            l.thickness / 2)
                        : (b.x -=
                            c.textBlock.height / 2 - c.textBlock.fontSize / 2)
                      : ((c.textBlock.angle = 90),
                        n(l.startValue)
                          ? (b.x +=
                              c.textBlock.height -
                              c.textBlock.fontSize / 2 +
                              l.thickness / 2)
                          : (b.x +=
                              c.textBlock.height / 2 -
                              c.textBlock.fontSize / 2)),
                    (b.y =
                      -90 === c.textBlock.angle
                        ? "near" === c.stripLine.labelAlign
                          ? this.chart.plotArea.y2 - 3
                          : "center" === c.stripLine.labelAlign
                          ? (this.chart.plotArea.y2 +
                              this.chart.plotArea.y1 +
                              c.textBlock.width) /
                            2
                          : this.chart.plotArea.y1 + c.textBlock.width + 3
                        : "near" === c.stripLine.labelAlign
                        ? this.chart.plotArea.y2 - c.textBlock.width - 3
                        : "center" === c.stripLine.labelAlign
                        ? (this.chart.plotArea.y2 +
                            this.chart.plotArea.y1 -
                            c.textBlock.width) /
                          2
                        : this.chart.plotArea.y1 + 3))
                  : "top" === this._position
                  ? ((c.textBlock.maxWidth = this.options.stripLines[e]
                      .labelMaxWidth
                      ? this.options.stripLines[e].labelMaxWidth
                      : this.chart.plotArea.height - 3),
                    c.textBlock.measureText(),
                    b.x - c.textBlock.height - l.thickness / 2 >
                    this.chart.plotArea.x1
                      ? n(l.startValue)
                        ? (b.x -=
                            c.textBlock.height -
                            c.textBlock.fontSize / 2 +
                            l.thickness / 2)
                        : (b.x -=
                            c.textBlock.height / 2 - c.textBlock.fontSize / 2)
                      : ((c.textBlock.angle = 90),
                        n(l.startValue)
                          ? (b.x +=
                              c.textBlock.height -
                              c.textBlock.fontSize / 2 +
                              l.thickness / 2)
                          : (b.x +=
                              c.textBlock.height / 2 -
                              c.textBlock.fontSize / 2)),
                    (b.y =
                      -90 === c.textBlock.angle
                        ? "near" === c.stripLine.labelAlign
                          ? this.chart.plotArea.y1 + c.textBlock.width + 3
                          : "center" === c.stripLine.labelAlign
                          ? (this.chart.plotArea.y2 +
                              this.chart.plotArea.y1 +
                              c.textBlock.width) /
                            2
                          : this.chart.plotArea.y2 - 3
                        : "near" === c.stripLine.labelAlign
                        ? this.chart.plotArea.y1 + 3
                        : "center" === c.stripLine.labelAlign
                        ? (this.chart.plotArea.y2 +
                            this.chart.plotArea.y1 -
                            c.textBlock.width) /
                          2
                        : this.chart.plotArea.y2 - c.textBlock.width - 3))
                  : "left" === this._position
                  ? ((c.textBlock.maxWidth = this.options.stripLines[e]
                      .labelMaxWidth
                      ? this.options.stripLines[e].labelMaxWidth
                      : this.chart.plotArea.width - 3),
                    (c.textBlock.angle = 0),
                    c.textBlock.measureText(),
                    b.y - c.textBlock.height - l.thickness / 2 >
                    this.chart.plotArea.y1
                      ? n(l.startValue)
                        ? (b.y -=
                            c.textBlock.height -
                            c.textBlock.fontSize / 2 +
                            l.thickness / 2)
                        : (b.y -=
                            c.textBlock.height / 2 - c.textBlock.fontSize / 2)
                      : n(l.startValue)
                      ? (b.y +=
                          c.textBlock.height -
                          c.textBlock.fontSize / 2 +
                          l.thickness / 2)
                      : (b.y +=
                          c.textBlock.height / 2 - c.textBlock.fontSize + 3),
                    (b.x =
                      "near" === c.stripLine.labelAlign
                        ? this.chart.plotArea.x1 + 3
                        : "center" === c.stripLine.labelAlign
                        ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) /
                            2 -
                          c.textBlock.width / 2
                        : this.chart.plotArea.x2 - c.textBlock.width - 3))
                  : "right" === this._position &&
                    ((c.textBlock.maxWidth = this.options.stripLines[e]
                      .labelMaxWidth
                      ? this.options.stripLines[e].labelMaxWidth
                      : this.chart.plotArea.width - 3),
                    (c.textBlock.angle = 0),
                    c.textBlock.measureText(),
                    b.y - c.textBlock.height - l.thickness / 2 >
                    this.chart.plotArea.y1
                      ? n(l.startValue)
                        ? (b.y -=
                            c.textBlock.height -
                            c.textBlock.fontSize / 2 +
                            l.thickness / 2)
                        : (b.y -=
                            c.textBlock.height / 2 - c.textBlock.fontSize / 2)
                      : n(l.startValue)
                      ? (b.y +=
                          c.textBlock.height -
                          c.textBlock.fontSize / 2 +
                          l.thickness / 2)
                      : (b.y -=
                          c.textBlock.height / 2 -
                          c.textBlock.fontSize / 2 +
                          3),
                    (b.x =
                      "near" === c.stripLine.labelAlign
                        ? this.chart.plotArea.x2 - c.textBlock.width - 3
                        : "center" === c.stripLine.labelAlign
                        ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) /
                            2 -
                          c.textBlock.width / 2
                        : this.chart.plotArea.x1 + 3)),
                (c.textBlock.x = b.x),
                (c.textBlock.y = b.y),
                t.push(c));
        if (!k) {
          b = !1;
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.rect(
            this.chart.plotArea.x1,
            this.chart.plotArea.y1,
            this.chart.plotArea.width,
            this.chart.plotArea.height
          );
          this.ctx.clip();
          for (e = 0; e < m.length; e++)
            (l = m[e]),
              l.showOnTop
                ? d ||
                  ((d = !0),
                  this.chart.addEventListener(
                    "dataAnimationIterationEnd",
                    function () {
                      this.ctx.save();
                      this.ctx.beginPath();
                      this.ctx.rect(
                        this.chart.plotArea.x1,
                        this.chart.plotArea.y1,
                        this.chart.plotArea.width,
                        this.chart.plotArea.height
                      );
                      this.ctx.clip();
                      for (h = 0; h < m.length; h++)
                        (l = m[h]), l.showOnTop && l.render();
                      this.ctx.restore();
                    },
                    l
                  ))
                : l.render();
          for (e = 0; e < t.length; e++)
            (c = t[e]),
              c.stripLine.showOnTop
                ? b ||
                  ((b = !0),
                  this.chart.addEventListener(
                    "dataAnimationIterationEnd",
                    function () {
                      for (h = 0; h < t.length; h++)
                        (c = t[h]),
                          "inside" === c.stripLine.labelPlacement &&
                            c.stripLine.showOnTop &&
                            (g.ctx.save(),
                            g.ctx.beginPath(),
                            g.ctx.rect(
                              g.chart.plotArea.x1,
                              g.chart.plotArea.y1,
                              g.chart.plotArea.width,
                              g.chart.plotArea.height
                            ),
                            g.ctx.clip(),
                            c.textBlock.render(!0),
                            g.ctx.restore());
                    },
                    c.textBlock
                  ))
                : "inside" === c.stripLine.labelPlacement &&
                  c.textBlock.render(!0);
          this.ctx.restore();
          k = !0;
        }
        if (k)
          for (b = !1, e = 0; e < t.length; e++)
            (c = t[e]),
              "outside" === c.stripLine.labelPlacement &&
                c.textBlock.render(!0);
      }
    };
    A.prototype.renderBreaksBackground = function () {
      this.chart._breaksCanvas &&
        this.scaleBreaks &&
        0 < this.scaleBreaks._appliedBreaks.length &&
        this.maskCanvas &&
        (this.chart._breaksCanvasCtx.save(),
        this.chart._breaksCanvasCtx.beginPath(),
        this.chart._breaksCanvasCtx.rect(
          this.chart.plotArea.x1,
          this.chart.plotArea.y1,
          this.chart.plotArea.width,
          this.chart.plotArea.height
        ),
        this.chart._breaksCanvasCtx.clip(),
        this.chart._breaksCanvasCtx.drawImage(
          this.maskCanvas,
          0,
          0,
          this.chart.width,
          this.chart.height
        ),
        this.chart._breaksCanvasCtx.restore());
    };
    A.prototype.createMask = function () {
      if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
        var a = this.scaleBreaks._appliedBreaks;
        v
          ? ((this.maskCanvas = ua(this.chart.width, this.chart.height)),
            (this.maskCtx = this.maskCanvas.getContext("2d")))
          : ((this.maskCanvas = this.chart.plotArea.canvas),
            (this.maskCtx = this.chart.plotArea.ctx));
        this.maskCtx.save();
        this.maskCtx.beginPath();
        this.maskCtx.rect(
          this.chart.plotArea.x1,
          this.chart.plotArea.y1,
          this.chart.plotArea.width,
          this.chart.plotArea.height
        );
        this.maskCtx.clip();
        for (var g = 0; g < a.length; g++)
          a[g].endValue < this.viewportMinimum ||
            a[g].startValue > this.viewportMaximum ||
            isNaN(this.range) ||
            a[g].render(this.maskCtx);
        this.maskCtx.restore();
      }
    };
    A.prototype.renderCrosshair = function (a, g) {
      isFinite(this.minimum) &&
        isFinite(this.maximum) &&
        this.crosshair.render(a, g);
    };
    A.prototype.showCrosshair = function (a) {
      n(a) ||
        a < this.viewportMinimum ||
        a > this.viewportMaximum ||
        ("top" === this._position || "bottom" === this._position
          ? this.crosshair.render(this.convertValueToPixel(a), null, a)
          : this.crosshair.render(null, this.convertValueToPixel(a), a));
    };
    A.prototype.renderGrid = function () {
      if (this.gridThickness && 0 < this.gridThickness) {
        var a = this.chart.ctx;
        a.save();
        var g,
          c = this.chart.plotArea;
        a.lineWidth = this.gridThickness;
        a.strokeStyle = this.gridColor;
        a.setLineDash &&
          a.setLineDash(G(this.gridDashType, this.gridThickness));
        if ("bottom" === this._position || "top" === this._position)
          for (b = 0; b < this._labels.length; b++)
            this._labels[b].position < this.viewportMinimum ||
              this._labels[b].position > this.viewportMaximum ||
              this._labels[b].breaksLabelType ||
              (a.beginPath(),
              (g = this.getPixelCoordinatesOnAxis(this._labels[b].position)),
              (g = 1 === a.lineWidth % 2 ? (g.x << 0) + 0.5 : g.x << 0),
              a.moveTo(g, c.y1 << 0),
              a.lineTo(g, c.y2 << 0),
              a.stroke());
        else if ("left" === this._position || "right" === this._position)
          for (var b = 0; b < this._labels.length; b++)
            this._labels[b].position < this.viewportMinimum ||
              this._labels[b].position > this.viewportMaximum ||
              this._labels[b].breaksLabelType ||
              (a.beginPath(),
              (g = this.getPixelCoordinatesOnAxis(this._labels[b].position)),
              (g = 1 === a.lineWidth % 2 ? (g.y << 0) + 0.5 : g.y << 0),
              a.moveTo(c.x1 << 0, g),
              a.lineTo(c.x2 << 0, g),
              a.stroke());
        a.restore();
      }
    };
    A.prototype.renderAxisLine = function () {
      var a = this.chart.ctx,
        g = v ? this.chart._preRenderCtx : a,
        c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)),
        b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)),
        e,
        h;
      g.save();
      if ("bottom" === this._position || "top" === this._position) {
        if (this.lineThickness) {
          this.reversed
            ? ((e = this.lineCoordinates.x2), (h = this.lineCoordinates.x1))
            : ((e = this.lineCoordinates.x1), (h = this.lineCoordinates.x2));
          g.lineWidth = this.lineThickness;
          g.strokeStyle = this.lineColor ? this.lineColor : "black";
          g.setLineDash &&
            g.setLineDash(G(this.lineDashType, this.lineThickness));
          var d =
            1 === this.lineThickness % 2
              ? (this.lineCoordinates.y1 << 0) + 0.5
              : this.lineCoordinates.y1 << 0;
          g.beginPath();
          if (this.scaleBreaks && !n(this.scaleBreaks.firstBreakIndex))
            if (n(this.scaleBreaks.lastBreakIndex))
              e =
                this.scaleBreaks._appliedBreaks[
                  this.scaleBreaks.firstBreakIndex
                ].endPixel + b;
            else
              for (
                var m = this.scaleBreaks.firstBreakIndex;
                m <= this.scaleBreaks.lastBreakIndex;
                m++
              )
                g.moveTo(e, d),
                  g.lineTo(
                    this.scaleBreaks._appliedBreaks[m].startPixel + c,
                    d
                  ),
                  (e = this.scaleBreaks._appliedBreaks[m].endPixel + b);
          e && (g.moveTo(e, d), g.lineTo(h, d));
          g.stroke();
        }
      } else if (
        ("left" === this._position || "right" === this._position) &&
        this.lineThickness
      ) {
        this.reversed
          ? ((e = this.lineCoordinates.y1), (h = this.lineCoordinates.y2))
          : ((e = this.lineCoordinates.y2), (h = this.lineCoordinates.y1));
        g.lineWidth = this.lineThickness;
        g.strokeStyle = this.lineColor;
        g.setLineDash &&
          g.setLineDash(G(this.lineDashType, this.lineThickness));
        d =
          1 === this.lineThickness % 2
            ? (this.lineCoordinates.x1 << 0) + 0.5
            : this.lineCoordinates.x1 << 0;
        g.beginPath();
        if (this.scaleBreaks && !n(this.scaleBreaks.firstBreakIndex))
          if (n(this.scaleBreaks.lastBreakIndex))
            e =
              this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex]
                .endPixel + c;
          else
            for (
              m = this.scaleBreaks.firstBreakIndex;
              m <= this.scaleBreaks.lastBreakIndex;
              m++
            )
              g.moveTo(d, e),
                g.lineTo(d, this.scaleBreaks._appliedBreaks[m].startPixel + b),
                (e = this.scaleBreaks._appliedBreaks[m].endPixel + c);
        e && (g.moveTo(d, e), g.lineTo(d, h));
        g.stroke();
      }
      v &&
        (a.drawImage(
          this.chart._preRenderCanvas,
          0,
          0,
          this.chart.width,
          this.chart.height
        ),
        this.chart._breaksCanvasCtx &&
          this.chart._breaksCanvasCtx.drawImage(
            this.chart._preRenderCanvas,
            0,
            0,
            this.chart.width,
            this.chart.height
          ),
        g.clearRect(0, 0, this.chart.width, this.chart.height));
      g.restore();
    };
    A.prototype.getPixelCoordinatesOnAxis = function (a) {
      var g = {};
      if ("bottom" === this._position || "top" === this._position)
        (g.x = this.convertValueToPixel(a)), (g.y = this.lineCoordinates.y1);
      if ("left" === this._position || "right" === this._position)
        (g.y = this.convertValueToPixel(a)), (g.x = this.lineCoordinates.x2);
      return g;
    };
    A.prototype.convertPixelToValue = function (a) {
      if ("undefined" === typeof a) return null;
      var g = 0,
        c = 0,
        b,
        g = !0,
        e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
        c =
          "number" === typeof a
            ? a
            : "left" === this._position || "right" === this._position
            ? a.y
            : a.x;
      if (this.logarithmic) {
        a = b = Math.pow(
          this.logarithmBase,
          (c - this.conversionParameters.reference) /
            this.conversionParameters.pixelPerUnit
        );
        if (
          (c <= this.conversionParameters.reference ===
            ("left" === this._position || "right" === this._position)) !==
          this.reversed
        )
          for (c = 0; c < e.length; c++) {
            if (!(e[c].endValue < this.conversionParameters.minimum))
              if (g)
                if (e[c].startValue < this.conversionParameters.minimum) {
                  if (
                    1 < e[c].size &&
                    this.conversionParameters.minimum *
                      Math.pow(
                        e[c].endValue / e[c].startValue,
                        Math.log(b) / Math.log(e[c].size)
                      ) <
                      e[c].endValue
                  ) {
                    a = Math.pow(
                      e[c].endValue / e[c].startValue,
                      Math.log(b) / Math.log(e[c].size)
                    );
                    break;
                  } else
                    (a *=
                      e[c].endValue /
                      this.conversionParameters.minimum /
                      Math.pow(
                        e[c].size,
                        Math.log(
                          e[c].endValue / this.conversionParameters.minimum
                        ) / Math.log(e[c].endValue / e[c].startValue)
                      )),
                      (b /= Math.pow(
                        e[c].size,
                        Math.log(
                          e[c].endValue / this.conversionParameters.minimum
                        ) / Math.log(e[c].endValue / e[c].startValue)
                      ));
                  g = !1;
                } else if (
                  b >
                  e[c].startValue / this.conversionParameters.minimum
                ) {
                  b /= e[c].startValue / this.conversionParameters.minimum;
                  if (b < e[c].size) {
                    a *=
                      Math.pow(
                        e[c].endValue / e[c].startValue,
                        1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)
                      ) / b;
                    break;
                  } else a *= e[c].endValue / e[c].startValue / e[c].size;
                  b /= e[c].size;
                  g = !1;
                } else break;
              else if (b > e[c].startValue / e[c - 1].endValue) {
                b /= e[c].startValue / e[c - 1].endValue;
                if (b < e[c].size) {
                  a *=
                    Math.pow(
                      e[c].endValue / e[c].startValue,
                      1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)
                    ) / b;
                  break;
                } else a *= e[c].endValue / e[c].startValue / e[c].size;
                b /= e[c].size;
              } else break;
          }
        else
          for (c = e.length - 1; 0 <= c; c--)
            if (!(e[c].startValue > this.conversionParameters.minimum))
              if (g)
                if (e[c].endValue > this.conversionParameters.minimum) {
                  if (
                    1 < e[c].size &&
                    this.conversionParameters.minimum *
                      Math.pow(
                        e[c].endValue / e[c].startValue,
                        Math.log(b) / Math.log(e[c].size)
                      ) >
                      e[c].startValue
                  ) {
                    a = Math.pow(
                      e[c].endValue / e[c].startValue,
                      Math.log(b) / Math.log(e[c].size)
                    );
                    break;
                  } else
                    (a *=
                      (e[c].startValue / this.conversionParameters.minimum) *
                      Math.pow(
                        e[c].size,
                        Math.log(
                          e[c].startValue / this.conversionParameters.minimum
                        ) / Math.log(e[c].endValue / e[c].startValue)
                      ) *
                      b),
                      (b *= Math.pow(
                        e[c].size,
                        Math.log(
                          this.conversionParameters.minimum / e[c].startValue
                        ) / Math.log(e[c].endValue / e[c].startValue)
                      ));
                  g = !1;
                } else if (
                  b <
                  e[c].endValue / this.conversionParameters.minimum
                ) {
                  b /= e[c].endValue / this.conversionParameters.minimum;
                  if (b > 1 / e[c].size) {
                    a *=
                      Math.pow(
                        e[c].endValue / e[c].startValue,
                        1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)
                      ) * b;
                    break;
                  } else a /= e[c].endValue / e[c].startValue / e[c].size;
                  b *= e[c].size;
                  g = !1;
                } else break;
              else if (b < e[c].endValue / e[c + 1].startValue) {
                b /= e[c].endValue / e[c + 1].startValue;
                if (b > 1 / e[c].size) {
                  a *=
                    Math.pow(
                      e[c].endValue / e[c].startValue,
                      1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)
                    ) * b;
                  break;
                } else a /= e[c].endValue / e[c].startValue / e[c].size;
                b *= e[c].size;
              } else break;
        g = a * this.viewportMinimum;
      } else {
        a = b =
          (c - this.conversionParameters.reference) /
          this.conversionParameters.pixelPerUnit;
        if (
          (c <= this.conversionParameters.reference ===
            ("left" === this._position || "right" === this._position)) !==
          this.reversed
        )
          for (c = 0; c < e.length; c++) {
            if (!(e[c].endValue < this.conversionParameters.minimum))
              if (g)
                if (e[c].startValue < this.conversionParameters.minimum) {
                  if (
                    e[c].size &&
                    this.conversionParameters.minimum +
                      (b * (e[c].endValue - e[c].startValue)) / e[c].size <
                      e[c].endValue
                  ) {
                    a =
                      0 >= e[c].size
                        ? 0
                        : (b * (e[c].endValue - e[c].startValue)) / e[c].size;
                    break;
                  } else
                    (a +=
                      e[c].endValue -
                      this.conversionParameters.minimum -
                      (e[c].size *
                        (e[c].endValue - this.conversionParameters.minimum)) /
                        (e[c].endValue - e[c].startValue)),
                      (b -=
                        (e[c].size *
                          (e[c].endValue - this.conversionParameters.minimum)) /
                        (e[c].endValue - e[c].startValue));
                  g = !1;
                } else if (
                  b >
                  e[c].startValue - this.conversionParameters.minimum
                ) {
                  b -= e[c].startValue - this.conversionParameters.minimum;
                  if (b < e[c].size) {
                    a +=
                      (e[c].endValue - e[c].startValue) *
                        (0 === e[c].size ? 1 : b / e[c].size) -
                      b;
                    break;
                  } else a += e[c].endValue - e[c].startValue - e[c].size;
                  b -= e[c].size;
                  g = !1;
                } else break;
              else if (b > e[c].startValue - e[c - 1].endValue) {
                b -= e[c].startValue - e[c - 1].endValue;
                if (b < e[c].size) {
                  a +=
                    (e[c].endValue - e[c].startValue) *
                      (0 === e[c].size ? 1 : b / e[c].size) -
                    b;
                  break;
                } else a += e[c].endValue - e[c].startValue - e[c].size;
                b -= e[c].size;
              } else break;
          }
        else
          for (c = e.length - 1; 0 <= c; c--)
            if (!(e[c].startValue > this.conversionParameters.minimum))
              if (g)
                if (e[c].endValue > this.conversionParameters.minimum)
                  if (
                    e[c].size &&
                    this.conversionParameters.minimum +
                      (b * (e[c].endValue - e[c].startValue)) / e[c].size >
                      e[c].startValue
                  ) {
                    a =
                      0 >= e[c].size
                        ? 0
                        : (b * (e[c].endValue - e[c].startValue)) / e[c].size;
                    break;
                  } else
                    (a +=
                      e[c].startValue -
                      this.conversionParameters.minimum +
                      (e[c].size *
                        (this.conversionParameters.minimum - e[c].startValue)) /
                        (e[c].endValue - e[c].startValue)),
                      (b +=
                        (e[c].size *
                          (this.conversionParameters.minimum -
                            e[c].startValue)) /
                        (e[c].endValue - e[c].startValue)),
                      (g = !1);
                else if (
                  b <
                  e[c].endValue - this.conversionParameters.minimum
                ) {
                  b -= e[c].endValue - this.conversionParameters.minimum;
                  if (b > -1 * e[c].size) {
                    a +=
                      (e[c].endValue - e[c].startValue) *
                        (0 === e[c].size ? 1 : b / e[c].size) +
                      b;
                    break;
                  } else a -= e[c].endValue - e[c].startValue - e[c].size;
                  b += e[c].size;
                  g = !1;
                } else break;
              else if (b < e[c].endValue - e[c + 1].startValue) {
                b -= e[c].endValue - e[c + 1].startValue;
                if (b > -1 * e[c].size) {
                  a +=
                    (e[c].endValue - e[c].startValue) *
                      (0 === e[c].size ? 1 : b / e[c].size) +
                    b;
                  break;
                } else a -= e[c].endValue - e[c].startValue - e[c].size;
                b += e[c].size;
              } else break;
        g = this.conversionParameters.minimum + a;
      }
      return g;
    };
    A.prototype.convertValueToPixel = function (a) {
      a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
      return this.logarithmic
        ? (this.conversionParameters.reference +
            (this.conversionParameters.pixelPerUnit *
              Math.log(a / this.conversionParameters.minimum)) /
              this.conversionParameters.lnLogarithmBase +
            0.5) <<
            0
        : "axisX" === this.type
        ? (this.conversionParameters.reference +
            this.conversionParameters.pixelPerUnit *
              (a - this.conversionParameters.minimum) +
            0.5) <<
          0
        : this.conversionParameters.reference +
          this.conversionParameters.pixelPerUnit *
            (a - this.conversionParameters.minimum) +
          0.5;
    };
    A.prototype.getApparentDifference = function (a, g, c, b) {
      var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
      if (this.logarithmic) {
        c = n(c) ? g / a : c;
        for (var h = 0; h < e.length && !(g < e[h].startValue); h++)
          a > e[h].endValue ||
            (a <= e[h].startValue && g >= e[h].endValue
              ? (c = (c / e[h].endValue) * e[h].startValue * e[h].size)
              : a >= e[h].startValue && g >= e[h].endValue
              ? (c =
                  (c / e[h].endValue) *
                  a *
                  Math.pow(
                    e[h].size,
                    Math.log(e[h].endValue / a) /
                      Math.log(e[h].endValue / e[h].startValue)
                  ))
              : a <= e[h].startValue && g <= e[h].endValue
              ? (c =
                  (c / g) *
                  e[h].startValue *
                  Math.pow(
                    e[h].size,
                    Math.log(g / e[h].startValue) /
                      Math.log(e[h].endValue / e[h].startValue)
                  ))
              : !b &&
                a > e[h].startValue &&
                g < e[h].endValue &&
                (c =
                  a *
                  Math.pow(
                    e[h].size,
                    Math.log(g / a) / Math.log(e[h].endValue / e[h].startValue)
                  )));
      } else
        for (
          c = n(c) ? Math.abs(g - a) : c, h = 0;
          h < e.length && !(g < e[h].startValue);
          h++
        )
          a > e[h].endValue ||
            (a <= e[h].startValue && g >= e[h].endValue
              ? (c = c - e[h].endValue + e[h].startValue + e[h].size)
              : a > e[h].startValue && g >= e[h].endValue
              ? (c =
                  c -
                  e[h].endValue +
                  a +
                  (e[h].size * (e[h].endValue - a)) /
                    (e[h].endValue - e[h].startValue))
              : a <= e[h].startValue && g < e[h].endValue
              ? (c =
                  c -
                  g +
                  e[h].startValue +
                  (e[h].size * (g - e[h].startValue)) /
                    (e[h].endValue - e[h].startValue))
              : !b &&
                a > e[h].startValue &&
                g < e[h].endValue &&
                (c =
                  a +
                  (e[h].size * (g - a)) / (e[h].endValue - e[h].startValue)));
      return c;
    };
    A.prototype.setViewPortRange = function (a, g) {
      this.sessionVariables.newViewportMinimum = this.viewportMinimum =
        Math.min(a, g);
      this.sessionVariables.newViewportMaximum = this.viewportMaximum =
        Math.max(a, g);
    };
    A.prototype.getXValueAt = function (a) {
      if (!a) return null;
      var g = null;
      "left" === this._position
        ? (g = this.convertPixelToValue(a.y))
        : "bottom" === this._position && (g = this.convertPixelToValue(a.x));
      return g;
    };
    A.prototype.calculateValueToPixelConversionParameters = function (a) {
      a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
      var g = { pixelPerUnit: null, minimum: null, reference: null },
        c = this.lineCoordinates.width,
        b = this.lineCoordinates.height,
        c = "bottom" === this._position || "top" === this._position ? c : b,
        b = Math.abs(this.range);
      if (this.logarithmic)
        for (
          var e = 0;
          e < a.length && !(this.viewportMaximum < a[e].startValue);
          e++
        )
          this.viewportMinimum > a[e].endValue ||
            (this.viewportMinimum >= a[e].startValue &&
            this.viewportMaximum <= a[e].endValue
              ? (c = 0)
              : this.viewportMinimum <= a[e].startValue &&
                this.viewportMaximum >= a[e].endValue
              ? ((b = (b / a[e].endValue) * a[e].startValue),
                (c =
                  0 < a[e].spacing.toString().indexOf("%")
                    ? c * (1 - parseFloat(a[e].spacing) / 100)
                    : c - Math.min(a[e].spacing, 0.1 * c)))
              : this.viewportMinimum > a[e].startValue &&
                this.viewportMaximum >= a[e].endValue
              ? ((b = (b / a[e].endValue) * this.viewportMinimum),
                (c =
                  0 < a[e].spacing.toString().indexOf("%")
                    ? c *
                      (1 -
                        ((parseFloat(a[e].spacing) / 100) *
                          Math.log(a[e].endValue / this.viewportMinimum)) /
                          Math.log(a[e].endValue / a[e].startValue))
                    : c -
                      (Math.min(a[e].spacing, 0.1 * c) *
                        Math.log(a[e].endValue / this.viewportMinimum)) /
                        Math.log(a[e].endValue / a[e].startValue)))
              : this.viewportMinimum <= a[e].startValue &&
                this.viewportMaximum < a[e].endValue &&
                ((b = (b / this.viewportMaximum) * a[e].startValue),
                (c =
                  0 < a[e].spacing.toString().indexOf("%")
                    ? c *
                      (1 -
                        ((parseFloat(a[e].spacing) / 100) *
                          Math.log(this.viewportMaximum / a[e].startValue)) /
                          Math.log(a[e].endValue / a[e].startValue))
                    : c -
                      (Math.min(a[e].spacing, 0.1 * c) *
                        Math.log(this.viewportMaximum / a[e].startValue)) /
                        Math.log(a[e].endValue / a[e].startValue))));
      else
        for (
          e = 0;
          e < a.length && !(this.viewportMaximum < a[e].startValue);
          e++
        )
          this.viewportMinimum > a[e].endValue ||
            (this.viewportMinimum >= a[e].startValue &&
            this.viewportMaximum <= a[e].endValue
              ? (c = 0)
              : this.viewportMinimum <= a[e].startValue &&
                this.viewportMaximum >= a[e].endValue
              ? ((b = b - a[e].endValue + a[e].startValue),
                (c =
                  0 < a[e].spacing.toString().indexOf("%")
                    ? c * (1 - parseFloat(a[e].spacing) / 100)
                    : c - Math.min(a[e].spacing, 0.1 * c)))
              : this.viewportMinimum > a[e].startValue &&
                this.viewportMaximum >= a[e].endValue
              ? ((b = b - a[e].endValue + this.viewportMinimum),
                (c =
                  0 < a[e].spacing.toString().indexOf("%")
                    ? c *
                      (1 -
                        ((parseFloat(a[e].spacing) / 100) *
                          (a[e].endValue - this.viewportMinimum)) /
                          (a[e].endValue - a[e].startValue))
                    : c -
                      (Math.min(a[e].spacing, 0.1 * c) *
                        (a[e].endValue - this.viewportMinimum)) /
                        (a[e].endValue - a[e].startValue)))
              : this.viewportMinimum <= a[e].startValue &&
                this.viewportMaximum < a[e].endValue &&
                ((b = b - this.viewportMaximum + a[e].startValue),
                (c =
                  0 < a[e].spacing.toString().indexOf("%")
                    ? c *
                      (1 -
                        ((parseFloat(a[e].spacing) / 100) *
                          (this.viewportMaximum - a[e].startValue)) /
                          (a[e].endValue - a[e].startValue))
                    : c -
                      (Math.min(a[e].spacing, 0.1 * c) *
                        (this.viewportMaximum - a[e].startValue)) /
                        (a[e].endValue - a[e].startValue))));
      g.minimum = this.viewportMinimum;
      g.maximum = this.viewportMaximum;
      g.range = b;
      if ("bottom" === this._position || "top" === this._position)
        this.logarithmic
          ? ((g.lnLogarithmBase = Math.log(this.logarithmBase)),
            (g.pixelPerUnit =
              ((this.reversed ? -1 : 1) * c * g.lnLogarithmBase) /
              Math.log(Math.abs(b))))
          : (g.pixelPerUnit = ((this.reversed ? -1 : 1) * c) / Math.abs(b)),
          (g.reference = this.reversed
            ? this.lineCoordinates.x2
            : this.lineCoordinates.x1);
      if ("left" === this._position || "right" === this._position)
        this.logarithmic
          ? ((g.lnLogarithmBase = Math.log(this.logarithmBase)),
            (g.pixelPerUnit =
              ((this.reversed ? 1 : -1) * c * g.lnLogarithmBase) /
              Math.log(Math.abs(b))))
          : (g.pixelPerUnit = ((this.reversed ? 1 : -1) * c) / Math.abs(b)),
          (g.reference = this.reversed
            ? this.lineCoordinates.y1
            : this.lineCoordinates.y2);
      this.conversionParameters = g;
    };
    A.prototype.calculateAxisParameters = function () {
      if (this.logarithmic) this.calculateLogarithmicAxisParameters();
      else {
        var a = this.chart.layoutManager.getFreeSpace(),
          g = !1,
          c = !1;
        "bottom" === this._position || "top" === this._position
          ? ((this.maxWidth = a.width), (this.maxHeight = a.height))
          : ((this.maxWidth = a.height), (this.maxHeight = a.width));
        var a =
            "axisX" === this.type
              ? "xySwapped" === this.chart.plotInfo.axisPlacement
                ? 62
                : 70
              : "xySwapped" === this.chart.plotInfo.axisPlacement
              ? 50
              : 40,
          b = 4;
        "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
        var a = Math.max(b, Math.floor(this.maxWidth / a)),
          e,
          h,
          d,
          b = 0;
        !n(this.options.viewportMinimum) &&
          !n(this.options.viewportMaximum) &&
          this.options.viewportMinimum >= this.options.viewportMaximum &&
          (this.viewportMinimum = this.viewportMaximum = null);
        if (
          n(this.options.viewportMinimum) &&
          !n(this.sessionVariables.newViewportMinimum) &&
          !isNaN(this.sessionVariables.newViewportMinimum)
        )
          this.viewportMinimum = this.sessionVariables.newViewportMinimum;
        else if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
          this.viewportMinimum = this.minimum;
        if (
          n(this.options.viewportMaximum) &&
          !n(this.sessionVariables.newViewportMaximum) &&
          !isNaN(this.sessionVariables.newViewportMaximum)
        )
          this.viewportMaximum = this.sessionVariables.newViewportMaximum;
        else if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
          this.viewportMaximum = this.maximum;
        if (this.scaleBreaks)
          for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++)
            if (
              ((!n(this.sessionVariables.newViewportMinimum) &&
                this.sessionVariables.newViewportMinimum >=
                  this.scaleBreaks._appliedBreaks[b].startValue) ||
                (!n(this.options.minimum) &&
                  this.options.minimum >=
                    this.scaleBreaks._appliedBreaks[b].startValue) ||
                (!n(this.options.viewportMinimum) &&
                  this.viewportMinimum >=
                    this.scaleBreaks._appliedBreaks[b].startValue)) &&
              ((!n(this.sessionVariables.newViewportMaximum) &&
                this.sessionVariables.newViewportMaximum <=
                  this.scaleBreaks._appliedBreaks[b].endValue) ||
                (!n(this.options.maximum) &&
                  this.options.maximum <=
                    this.scaleBreaks._appliedBreaks[b].endValue) ||
                (!n(this.options.viewportMaximum) &&
                  this.viewportMaximum <=
                    this.scaleBreaks._appliedBreaks[b].endValue))
            ) {
              this.scaleBreaks._appliedBreaks.splice(b, 1);
              break;
            }
        if ("axisX" === this.type) {
          if (this.dataSeries && 0 < this.dataSeries.length)
            for (e = 0; e < this.dataSeries.length; e++)
              "dateTime" === this.dataSeries[e].xValueType && (c = !0);
          e =
            null !== this.viewportMinimum
              ? this.viewportMinimum
              : this.dataInfo.viewPortMin;
          h =
            null !== this.viewportMaximum
              ? this.viewportMaximum
              : this.dataInfo.viewPortMax;
          0 === h - e &&
            ((b =
              "undefined" === typeof this.options.interval
                ? 0.4
                : this.options.interval),
            (h += b),
            (e -= b));
          Infinity !== this.dataInfo.minDiff
            ? (d = this.dataInfo.minDiff)
            : 1 < h - e
            ? (d = 0.5 * Math.abs(h - e))
            : ((d = 1), c && (g = !0));
        } else
          "axisY" === this.type &&
            ((e =
              null !== this.viewportMinimum
                ? this.viewportMinimum
                : this.dataInfo.viewPortMin),
            (h =
              null !== this.viewportMaximum
                ? this.viewportMaximum
                : this.dataInfo.viewPortMax),
            isFinite(e) || isFinite(h)
              ? isFinite(e)
                ? isFinite(h) || (h = e)
                : (e = h)
              : ((h =
                  "undefined" === typeof this.options.interval
                    ? -Infinity
                    : this.options.interval),
                (e =
                  "undefined" !== typeof this.options.interval ||
                  isFinite(this.dataInfo.minDiff)
                    ? 0
                    : Infinity)),
            0 === e && 0 === h
              ? ((h += 9), (e = 0))
              : 0 === h - e
              ? ((b = Math.min(Math.abs(0.01 * Math.abs(h)), 5)),
                (h += b),
                (e -= b))
              : e > h
              ? ((b = Math.min(
                  0.01 * Math.abs(this.getApparentDifference(h, e, null, !0)),
                  5
                )),
                0 <= h ? (e = h - b) : (h = isFinite(e) ? e + b : 0))
              : ((b = Math.min(
                  0.01 * Math.abs(this.getApparentDifference(e, h, null, !0)),
                  0.05
                )),
                0 !== h && (h += b),
                0 !== e && (e -= b)),
            (d =
              Infinity !== this.dataInfo.minDiff
                ? this.dataInfo.minDiff
                : 1 < h - e
                ? 0.5 * Math.abs(h - e)
                : 1),
            this.includeZero &&
              (null === this.viewportMinimum || isNaN(this.viewportMinimum)) &&
              0 < e &&
              (e = 0),
            this.includeZero &&
              (null === this.viewportMaximum || isNaN(this.viewportMaximum)) &&
              0 > h &&
              (h = 0));
        b = this.getApparentDifference(
          isNaN(this.viewportMinimum) || null === this.viewportMinimum
            ? e
            : this.viewportMinimum,
          isNaN(this.viewportMaximum) || null === this.viewportMaximum
            ? h
            : this.viewportMaximum,
          null,
          !0
        );
        if ("axisX" === this.type && c) {
          this.valueType = "dateTime";
          this.intervalType ||
            (b / 1 <= a
              ? ((this.interval = 1), (this.intervalType = "millisecond"))
              : b / 2 <= a
              ? ((this.interval = 2), (this.intervalType = "millisecond"))
              : b / 5 <= a
              ? ((this.interval = 5), (this.intervalType = "millisecond"))
              : b / 10 <= a
              ? ((this.interval = 10), (this.intervalType = "millisecond"))
              : b / 20 <= a
              ? ((this.interval = 20), (this.intervalType = "millisecond"))
              : b / 50 <= a
              ? ((this.interval = 50), (this.intervalType = "millisecond"))
              : b / 100 <= a
              ? ((this.interval = 100), (this.intervalType = "millisecond"))
              : b / 200 <= a
              ? ((this.interval = 200), (this.intervalType = "millisecond"))
              : b / 250 <= a
              ? ((this.interval = 250), (this.intervalType = "millisecond"))
              : b / 300 <= a
              ? ((this.interval = 300), (this.intervalType = "millisecond"))
              : b / 400 <= a
              ? ((this.interval = 400), (this.intervalType = "millisecond"))
              : b / 500 <= a
              ? ((this.interval = 500), (this.intervalType = "millisecond"))
              : b / (1 * M.secondDuration) <= a
              ? ((this.interval = 1), (this.intervalType = "second"))
              : b / (2 * M.secondDuration) <= a
              ? ((this.interval = 2), (this.intervalType = "second"))
              : b / (5 * M.secondDuration) <= a
              ? ((this.interval = 5), (this.intervalType = "second"))
              : b / (10 * M.secondDuration) <= a
              ? ((this.interval = 10), (this.intervalType = "second"))
              : b / (15 * M.secondDuration) <= a
              ? ((this.interval = 15), (this.intervalType = "second"))
              : b / (20 * M.secondDuration) <= a
              ? ((this.interval = 20), (this.intervalType = "second"))
              : b / (30 * M.secondDuration) <= a
              ? ((this.interval = 30), (this.intervalType = "second"))
              : b / (1 * M.minuteDuration) <= a
              ? ((this.interval = 1), (this.intervalType = "minute"))
              : b / (2 * M.minuteDuration) <= a
              ? ((this.interval = 2), (this.intervalType = "minute"))
              : b / (5 * M.minuteDuration) <= a
              ? ((this.interval = 5), (this.intervalType = "minute"))
              : b / (10 * M.minuteDuration) <= a
              ? ((this.interval = 10), (this.intervalType = "minute"))
              : b / (15 * M.minuteDuration) <= a
              ? ((this.interval = 15), (this.intervalType = "minute"))
              : b / (20 * M.minuteDuration) <= a
              ? ((this.interval = 20), (this.intervalType = "minute"))
              : b / (30 * M.minuteDuration) <= a
              ? ((this.interval = 30), (this.intervalType = "minute"))
              : b / (1 * M.hourDuration) <= a
              ? ((this.interval = 1), (this.intervalType = "hour"))
              : b / (2 * M.hourDuration) <= a
              ? ((this.interval = 2), (this.intervalType = "hour"))
              : b / (3 * M.hourDuration) <= a
              ? ((this.interval = 3), (this.intervalType = "hour"))
              : b / (6 * M.hourDuration) <= a
              ? ((this.interval = 6), (this.intervalType = "hour"))
              : b / (1 * M.dayDuration) <= a
              ? ((this.interval = 1), (this.intervalType = "day"))
              : b / (2 * M.dayDuration) <= a
              ? ((this.interval = 2), (this.intervalType = "day"))
              : b / (4 * M.dayDuration) <= a
              ? ((this.interval = 4), (this.intervalType = "day"))
              : b / (1 * M.weekDuration) <= a
              ? ((this.interval = 1), (this.intervalType = "week"))
              : b / (2 * M.weekDuration) <= a
              ? ((this.interval = 2), (this.intervalType = "week"))
              : b / (3 * M.weekDuration) <= a
              ? ((this.interval = 3), (this.intervalType = "week"))
              : b / (1 * M.monthDuration) <= a
              ? ((this.interval = 1), (this.intervalType = "month"))
              : b / (2 * M.monthDuration) <= a
              ? ((this.interval = 2), (this.intervalType = "month"))
              : b / (3 * M.monthDuration) <= a
              ? ((this.interval = 3), (this.intervalType = "month"))
              : b / (6 * M.monthDuration) <= a
              ? ((this.interval = 6), (this.intervalType = "month"))
              : ((this.interval =
                  b / (1 * M.yearDuration) <= a
                    ? 1
                    : b / (2 * M.yearDuration) <= a
                    ? 2
                    : b / (4 * M.yearDuration) <= a
                    ? 4
                    : Math.floor(
                        A.getNiceNumber(b / (a - 1), !0) / M.yearDuration
                      )),
                (this.intervalType = "year")));
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum = e - d / 2;
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum = h + d / 2;
          g
            ? (this.autoValueFormatString = "MMM DD YYYY HH:mm")
            : "year" === this.intervalType
            ? (this.autoValueFormatString = "YYYY")
            : "month" === this.intervalType
            ? (this.autoValueFormatString = "MMM YYYY")
            : "week" === this.intervalType
            ? (this.autoValueFormatString = "MMM DD YYYY")
            : "day" === this.intervalType
            ? (this.autoValueFormatString = "MMM DD YYYY")
            : "hour" === this.intervalType
            ? (this.autoValueFormatString = "hh:mm TT")
            : "minute" === this.intervalType
            ? (this.autoValueFormatString = "hh:mm TT")
            : "second" === this.intervalType
            ? (this.autoValueFormatString = "hh:mm:ss TT")
            : "millisecond" === this.intervalType &&
              (this.autoValueFormatString = "fff'ms'");
          this.valueFormatString ||
            (this.valueFormatString = this.autoValueFormatString);
        } else {
          this.intervalType = "number";
          b = A.getNiceNumber(b, !1);
          this.interval =
            this.options && 0 < this.options.interval
              ? this.options.interval
              : A.getNiceNumber(b / (a - 1), !0);
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum =
              "axisX" === this.type
                ? e - d / 2
                : Math.floor(e / this.interval) * this.interval;
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum =
              "axisX" === this.type
                ? h + d / 2
                : Math.ceil(h / this.interval) * this.interval;
          0 === this.viewportMaximum &&
            0 === this.viewportMinimum &&
            (0 === this.options.viewportMinimum
              ? (this.viewportMaximum += 10)
              : 0 === this.options.viewportMaximum &&
                (this.viewportMinimum -= 10),
            this.options &&
              "undefined" === typeof this.options.interval &&
              (this.interval = A.getNiceNumber(
                (this.viewportMaximum - this.viewportMinimum) / (a - 1),
                !0
              )));
        }
        if (null === this.minimum || null === this.maximum)
          if (
            ("axisX" === this.type
              ? ((e = null !== this.minimum ? this.minimum : this.dataInfo.min),
                (h = null !== this.maximum ? this.maximum : this.dataInfo.max),
                0 === h - e &&
                  ((b =
                    "undefined" === typeof this.options.interval
                      ? 0.4
                      : this.options.interval),
                  (h += b),
                  (e -= b)),
                (d =
                  Infinity !== this.dataInfo.minDiff
                    ? this.dataInfo.minDiff
                    : 1 < h - e
                    ? 0.5 * Math.abs(h - e)
                    : 1))
              : "axisY" === this.type &&
                ((e = null !== this.minimum ? this.minimum : this.dataInfo.min),
                (h = null !== this.maximum ? this.maximum : this.dataInfo.max),
                isFinite(e) || isFinite(h)
                  ? 0 === e && 0 === h
                    ? ((h += 9), (e = 0))
                    : 0 === h - e
                    ? ((b = Math.min(Math.abs(0.01 * Math.abs(h)), 5)),
                      (h += b),
                      (e -= b))
                    : e > h
                    ? ((b = Math.min(
                        0.01 *
                          Math.abs(this.getApparentDifference(h, e, null, !0)),
                        5
                      )),
                      0 <= h ? (e = h - b) : (h = isFinite(e) ? e + b : 0))
                    : ((b = Math.min(
                        0.01 *
                          Math.abs(this.getApparentDifference(e, h, null, !0)),
                        0.05
                      )),
                      0 !== h && (h += b),
                      0 !== e && (e -= b))
                  : ((h =
                      "undefined" === typeof this.options.interval
                        ? -Infinity
                        : this.options.interval),
                    (e =
                      "undefined" !== typeof this.options.interval ||
                      isFinite(this.dataInfo.minDiff)
                        ? 0
                        : Infinity)),
                (d =
                  Infinity !== this.dataInfo.minDiff
                    ? this.dataInfo.minDiff
                    : 1 < h - e
                    ? 0.5 * Math.abs(h - e)
                    : 1),
                this.includeZero &&
                  (null === this.minimum || isNaN(this.minimum)) &&
                  0 < e &&
                  (e = 0),
                this.includeZero &&
                  (null === this.maximum || isNaN(this.maximum)) &&
                  0 > h &&
                  (h = 0)),
            Math.abs(this.getApparentDifference(e, h, null, !0)),
            "axisX" === this.type && c)
          ) {
            this.valueType = "dateTime";
            if (null === this.minimum || isNaN(this.minimum))
              (this.minimum = e - d / 2),
                (this.minimum = Math.min(
                  this.minimum,
                  null === this.sessionVariables.viewportMinimum ||
                    isNaN(this.sessionVariables.viewportMinimum)
                    ? Infinity
                    : this.sessionVariables.viewportMinimum
                ));
            if (null === this.maximum || isNaN(this.maximum))
              (this.maximum = h + d / 2),
                (this.maximum = Math.max(
                  this.maximum,
                  null === this.sessionVariables.viewportMaximum ||
                    isNaN(this.sessionVariables.viewportMaximum)
                    ? -Infinity
                    : this.sessionVariables.viewportMaximum
                ));
          } else
            (this.intervalType = this.valueType = "number"),
              null === this.minimum &&
                ((this.minimum =
                  "axisX" === this.type
                    ? e - d / 2
                    : Math.floor(e / this.interval) * this.interval),
                (this.minimum = Math.min(
                  this.minimum,
                  null === this.sessionVariables.viewportMinimum ||
                    isNaN(this.sessionVariables.viewportMinimum)
                    ? Infinity
                    : this.sessionVariables.viewportMinimum
                ))),
              null === this.maximum &&
                ((this.maximum =
                  "axisX" === this.type
                    ? h + d / 2
                    : Math.ceil(h / this.interval) * this.interval),
                (this.maximum = Math.max(
                  this.maximum,
                  null === this.sessionVariables.viewportMaximum ||
                    isNaN(this.sessionVariables.viewportMaximum)
                    ? -Infinity
                    : this.sessionVariables.viewportMaximum
                ))),
              0 === this.maximum &&
                0 === this.minimum &&
                (0 === this.options.minimum
                  ? (this.maximum += 10)
                  : 0 === this.options.maximum && (this.minimum -= 10));
        n(this.sessionVariables.newViewportMinimum) &&
          (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
        n(this.sessionVariables.newViewportMaximum) &&
          (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
        this.range = this.viewportMaximum - this.viewportMinimum;
        this.intervalStartPosition =
          "axisX" === this.type && c
            ? this.getLabelStartPoint(
                new Date(this.viewportMinimum),
                this.intervalType,
                this.interval
              )
            : Math.floor(
                (this.viewportMinimum + 0.2 * this.interval) / this.interval
              ) * this.interval;
        this.valueFormatString ||
          (this.valueFormatString = A.generateValueFormatString(this.range, 2));
      }
    };
    A.prototype.calculateLogarithmicAxisParameters = function () {
      var a = this.chart.layoutManager.getFreeSpace(),
        g = Math.log(this.logarithmBase),
        c;
      "bottom" === this._position || "top" === this._position
        ? ((this.maxWidth = a.width), (this.maxHeight = a.height))
        : ((this.maxWidth = a.height), (this.maxHeight = a.width));
      var a =
          "axisX" === this.type
            ? 500 > this.maxWidth
              ? 7
              : Math.max(7, Math.floor(this.maxWidth / 100))
            : Math.max(Math.floor(this.maxWidth / 50), 3),
        b,
        e,
        d,
        q;
      q = 1;
      if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
        this.viewportMinimum = this.minimum;
      if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
        this.viewportMaximum = this.maximum;
      if (this.scaleBreaks)
        for (q = 0; q < this.scaleBreaks._appliedBreaks.length; q++)
          if (
            ((!n(this.sessionVariables.newViewportMinimum) &&
              this.sessionVariables.newViewportMinimum >=
                this.scaleBreaks._appliedBreaks[q].startValue) ||
              (!n(this.options.minimum) &&
                this.options.minimum >=
                  this.scaleBreaks._appliedBreaks[q].startValue) ||
              (!n(this.options.viewportMinimum) &&
                this.viewportMinimum >=
                  this.scaleBreaks._appliedBreaks[q].startValue)) &&
            ((!n(this.sessionVariables.newViewportMaximum) &&
              this.sessionVariables.newViewportMaximum <=
                this.scaleBreaks._appliedBreaks[q].endValue) ||
              (!n(this.options.maximum) &&
                this.options.maximum <=
                  this.scaleBreaks._appliedBreaks[q].endValue) ||
              (!n(this.options.viewportMaximum) &&
                this.viewportMaximum <=
                  this.scaleBreaks._appliedBreaks[q].endValue))
          ) {
            this.scaleBreaks._appliedBreaks.splice(q, 1);
            break;
          }
      "axisX" === this.type
        ? ((b =
            null !== this.viewportMinimum
              ? this.viewportMinimum
              : this.dataInfo.viewPortMin),
          (e =
            null !== this.viewportMaximum
              ? this.viewportMaximum
              : this.dataInfo.viewPortMax),
          1 === e / b &&
            ((q = Math.pow(
              this.logarithmBase,
              "undefined" === typeof this.options.interval
                ? 0.4
                : this.options.interval
            )),
            (e *= q),
            (b /= q)),
          (d =
            Infinity !== this.dataInfo.minDiff
              ? this.dataInfo.minDiff
              : e / b > this.logarithmBase
              ? (e / b) * Math.pow(this.logarithmBase, 0.5)
              : this.logarithmBase))
        : "axisY" === this.type &&
          ((b =
            null !== this.viewportMinimum
              ? this.viewportMinimum
              : this.dataInfo.viewPortMin),
          (e =
            null !== this.viewportMaximum
              ? this.viewportMaximum
              : this.dataInfo.viewPortMax),
          0 >= b && !isFinite(e)
            ? ((e =
                "undefined" === typeof this.options.interval
                  ? 0
                  : this.options.interval),
              (b = 1))
            : 0 >= b
            ? (b = e)
            : isFinite(e) || (e = b),
          1 === b && 1 === e
            ? ((e *= this.logarithmBase - 1 / this.logarithmBase), (b = 1))
            : 1 === e / b
            ? ((q = Math.min(
                e * Math.pow(this.logarithmBase, 0.01),
                Math.pow(this.logarithmBase, 5)
              )),
              (e *= q),
              (b /= q))
            : b > e
            ? ((q = Math.min(
                (b / e) * Math.pow(this.logarithmBase, 0.01),
                Math.pow(this.logarithmBase, 5)
              )),
              1 <= e ? (b = e / q) : (e = b * q))
            : ((q = Math.min(
                (e / b) * Math.pow(this.logarithmBase, 0.01),
                Math.pow(this.logarithmBase, 0.04)
              )),
              1 !== e && (e *= q),
              1 !== b && (b /= q)),
          (d =
            Infinity !== this.dataInfo.minDiff
              ? this.dataInfo.minDiff
              : e / b > this.logarithmBase
              ? (e / b) * Math.pow(this.logarithmBase, 0.5)
              : this.logarithmBase),
          this.includeZero &&
            (null === this.viewportMinimum || isNaN(this.viewportMinimum)) &&
            1 < b &&
            (b = 1),
          this.includeZero &&
            (null === this.viewportMaximum || isNaN(this.viewportMaximum)) &&
            1 > e &&
            (e = 1));
      q =
        (isNaN(this.viewportMaximum) || null === this.viewportMaximum
          ? e
          : this.viewportMaximum) /
        (isNaN(this.viewportMinimum) || null === this.viewportMinimum
          ? b
          : this.viewportMinimum);
      var m =
        (isNaN(this.viewportMaximum) || null === this.viewportMaximum
          ? e
          : this.viewportMaximum) -
        (isNaN(this.viewportMinimum) || null === this.viewportMinimum
          ? b
          : this.viewportMinimum);
      this.intervalType = "number";
      q = Math.pow(
        this.logarithmBase,
        A.getNiceNumber(Math.abs(Math.log(q) / g), !1)
      );
      this.options && 0 < this.options.interval
        ? (this.interval = this.options.interval)
        : ((this.interval = A.getNiceExponent(Math.log(q) / g / (a - 1), !0)),
          (c = A.getNiceNumber(m / (a - 1), !0)));
      if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
        this.viewportMinimum =
          "axisX" === this.type
            ? b / Math.sqrt(d)
            : Math.pow(
                this.logarithmBase,
                this.interval * Math.floor(Math.log(b) / g / this.interval)
              );
      if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
        this.viewportMaximum =
          "axisX" === this.type
            ? e * Math.sqrt(d)
            : Math.pow(
                this.logarithmBase,
                this.interval * Math.ceil(Math.log(e) / g / this.interval)
              );
      1 === this.viewportMaximum &&
        1 === this.viewportMinimum &&
        (1 === this.options.viewportMinimum
          ? (this.viewportMaximum *=
              this.logarithmBase - 1 / this.logarithmBase)
          : 1 === this.options.viewportMaximum &&
            (this.viewportMinimum /=
              this.logarithmBase - 1 / this.logarithmBase),
        this.options &&
          "undefined" === typeof this.options.interval &&
          ((this.interval = A.getNiceExponent(
            Math.ceil(Math.log(q) / g) / (a - 1)
          )),
          (c = A.getNiceNumber(
            (this.viewportMaximum - this.viewportMinimum) / (a - 1),
            !0
          ))));
      if (null === this.minimum || null === this.maximum)
        "axisX" === this.type
          ? ((b = null !== this.minimum ? this.minimum : this.dataInfo.min),
            (e = null !== this.maximum ? this.maximum : this.dataInfo.max),
            1 === e / b &&
              ((q = Math.pow(
                this.logarithmBase,
                "undefined" === typeof this.options.interval
                  ? 0.4
                  : this.options.interval
              )),
              (e *= q),
              (b /= q)),
            (d =
              Infinity !== this.dataInfo.minDiff
                ? this.dataInfo.minDiff
                : e / b > this.logarithmBase
                ? (e / b) * Math.pow(this.logarithmBase, 0.5)
                : this.logarithmBase))
          : "axisY" === this.type &&
            ((b = null !== this.minimum ? this.minimum : this.dataInfo.min),
            (e = null !== this.maximum ? this.maximum : this.dataInfo.max),
            isFinite(b) || isFinite(e)
              ? 1 === b && 1 === e
                ? ((e *= this.logarithmBase), (b /= this.logarithmBase))
                : 1 === e / b
                ? ((q = Math.pow(this.logarithmBase, this.interval)),
                  (e *= q),
                  (b /= q))
                : b > e
                ? ((q = Math.min(0.01 * (b / e), 5)),
                  1 <= e ? (b = e / q) : (e = b * q))
                : ((q = Math.min(
                    (e / b) * Math.pow(this.logarithmBase, 0.01),
                    Math.pow(this.logarithmBase, 0.04)
                  )),
                  1 !== e && (e *= q),
                  1 !== b && (b /= q))
              : ((e =
                  "undefined" === typeof this.options.interval
                    ? 0
                    : this.options.interval),
                (b = 1)),
            (d =
              Infinity !== this.dataInfo.minDiff
                ? this.dataInfo.minDiff
                : e / b > this.logarithmBase
                ? (e / b) * Math.pow(this.logarithmBase, 0.5)
                : this.logarithmBase),
            this.includeZero &&
              (null === this.minimum || isNaN(this.minimum)) &&
              1 < b &&
              (b = 1),
            this.includeZero &&
              (null === this.maximum || isNaN(this.maximum)) &&
              1 > e &&
              (e = 1)),
          (this.intervalType = "number"),
          null === this.minimum &&
            ((this.minimum =
              "axisX" === this.type
                ? b / Math.sqrt(d)
                : Math.pow(
                    this.logarithmBase,
                    this.interval * Math.floor(Math.log(b) / g / this.interval)
                  )),
            n(
              null === this.sessionVariables.viewportMinimum ||
                isNaN(this.sessionVariables.viewportMinimum)
                ? "undefined" ===
                  typeof this.sessionVariables.newViewportMinimum
                  ? Infinity
                  : this.sessionVariables.newViewportMinimum
                : this.sessionVariables.viewportMinimum
            ) ||
              (this.minimum = Math.min(
                this.minimum,
                null === this.sessionVariables.viewportMinimum ||
                  isNaN(this.sessionVariables.viewportMinimum)
                  ? "undefined" ===
                    typeof this.sessionVariables.newViewportMinimum
                    ? Infinity
                    : this.sessionVariables.newViewportMinimum
                  : this.sessionVariables.viewportMinimum
              ))),
          null === this.maximum &&
            ((this.maximum =
              "axisX" === this.type
                ? e * Math.sqrt(d)
                : Math.pow(
                    this.logarithmBase,
                    this.interval * Math.ceil(Math.log(e) / g / this.interval)
                  )),
            n(
              null === this.sessionVariables.viewportMaximum ||
                isNaN(this.sessionVariables.viewportMaximum)
                ? "undefined" ===
                  typeof this.sessionVariables.newViewportMaximum
                  ? 0
                  : this.sessionVariables.newViewportMaximum
                : this.sessionVariables.viewportMaximum
            ) ||
              (this.maximum = Math.max(
                this.maximum,
                null === this.sessionVariables.viewportMaximum ||
                  isNaN(this.sessionVariables.viewportMaximum)
                  ? "undefined" ===
                    typeof this.sessionVariables.newViewportMaximum
                    ? 0
                    : this.sessionVariables.newViewportMaximum
                  : this.sessionVariables.viewportMaximum
              ))),
          1 === this.maximum &&
            1 === this.minimum &&
            (1 === this.options.minimum
              ? (this.maximum *= this.logarithmBase - 1 / this.logarithmBase)
              : 1 === this.options.maximum &&
                (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
      this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
      this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
      this.viewportMinimum > this.viewportMaximum &&
        ((!this.options.viewportMinimum && !this.options.minimum) ||
        this.options.viewportMaximum ||
        this.options.maximum
          ? this.options.viewportMinimum ||
            this.options.minimum ||
            (!this.options.viewportMaximum && !this.options.maximum) ||
            (this.viewportMinimum = this.minimum =
              (this.options.viewportMaximum || this.options.maximum) /
              Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval)))
          : (this.viewportMaximum = this.maximum =
              this.options.viewportMinimum || this.options.minimum));
      b = Math.pow(
        this.logarithmBase,
        Math.floor(Math.log(this.viewportMinimum) / (g * this.interval) + 0.2) *
          this.interval
      );
      this.range = this.viewportMaximum / this.viewportMinimum;
      this.noTicks = a;
      if (
        !this.options.interval &&
        this.range <
          Math.pow(
            this.logarithmBase,
            8 > this.viewportMaximum || 3 > a ? 2 : 3
          )
      ) {
        for (
          g = Math.floor(this.viewportMinimum / c + 0.5) * c;
          g < this.viewportMinimum;

        )
          g += c;
        this.equidistantInterval = !1;
        this.intervalStartPosition = g;
        this.interval = c;
      } else
        this.options.interval ||
          ((c = Math.ceil(this.interval)),
          this.range > this.interval &&
            ((this.interval = c),
            (b = Math.pow(
              this.logarithmBase,
              Math.floor(
                Math.log(this.viewportMinimum) / (g * this.interval) + 0.2
              ) * this.interval
            )))),
          (this.equidistantInterval = !0),
          (this.intervalStartPosition = b);
      if (
        !this.valueFormatString &&
        ((this.valueFormatString = "#,##0.##"), 1 > this.viewportMinimum)
      ) {
        g =
          Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
        if (isNaN(g) || !isFinite(g)) g = 2;
        if (2 < g) for (q = 0; q < g - 2; q++) this.valueFormatString += "#";
      }
    };
    A.generateValueFormatString = function (a, g) {
      var c = "#,##0.",
        b = g;
      1 > a &&
        ((b += Math.floor(Math.abs(Math.log(a) / Math.LN10))),
        isNaN(b) || !isFinite(b)) &&
        (b = g);
      for (var e = 0; e < b; e++) c += "#";
      return c;
    };
    A.getNiceExponent = function (a, g) {
      var c = Math.floor(Math.log(a) / Math.LN10),
        b = a / Math.pow(10, c),
        b = 0 > c ? (1 >= b ? 1 : 5 >= b ? 5 : 10) : Math.max(Math.floor(b), 1);
      return -20 > c
        ? Number(b * Math.pow(10, c))
        : Number((b * Math.pow(10, c)).toFixed(20));
    };
    A.getNiceNumber = function (a, g) {
      var c = Math.floor(Math.log(a) / Math.LN10),
        b = a / Math.pow(10, c),
        b = g
          ? 1.5 > b
            ? 1
            : 3 > b
            ? 2
            : 7 > b
            ? 5
            : 10
          : 1 >= b
          ? 1
          : 2 >= b
          ? 2
          : 5 >= b
          ? 5
          : 10;
      return -20 > c
        ? Number(b * Math.pow(10, c))
        : Number((b * Math.pow(10, c)).toFixed(20));
    };
    A.prototype.getLabelStartPoint = function () {
      var a = M[this.intervalType + "Duration"] * this.interval,
        a = new Date(Math.floor(this.viewportMinimum / a) * a);
      if ("millisecond" !== this.intervalType)
        if ("second" === this.intervalType)
          0 < a.getMilliseconds() &&
            (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
        else if ("minute" === this.intervalType) {
          if (0 < a.getSeconds() || 0 < a.getMilliseconds())
            a.setMinutes(a.getMinutes() + 1),
              a.setSeconds(0),
              a.setMilliseconds(0);
        } else if ("hour" === this.intervalType) {
          if (
            0 < a.getMinutes() ||
            0 < a.getSeconds() ||
            0 < a.getMilliseconds()
          )
            a.setHours(a.getHours() + 1),
              a.setMinutes(0),
              a.setSeconds(0),
              a.setMilliseconds(0);
        } else if ("day" === this.intervalType) {
          if (
            0 < a.getHours() ||
            0 < a.getMinutes() ||
            0 < a.getSeconds() ||
            0 < a.getMilliseconds()
          )
            a.setDate(a.getDate() + 1),
              a.setHours(0),
              a.setMinutes(0),
              a.setSeconds(0),
              a.setMilliseconds(0);
        } else if ("week" === this.intervalType) {
          if (
            0 < a.getDay() ||
            0 < a.getHours() ||
            0 < a.getMinutes() ||
            0 < a.getSeconds() ||
            0 < a.getMilliseconds()
          )
            a.setDate(a.getDate() + (7 - a.getDay())),
              a.setHours(0),
              a.setMinutes(0),
              a.setSeconds(0),
              a.setMilliseconds(0);
        } else if ("month" === this.intervalType) {
          if (
            1 < a.getDate() ||
            0 < a.getHours() ||
            0 < a.getMinutes() ||
            0 < a.getSeconds() ||
            0 < a.getMilliseconds()
          )
            a.setMonth(a.getMonth() + 1),
              a.setDate(1),
              a.setHours(0),
              a.setMinutes(0),
              a.setSeconds(0),
              a.setMilliseconds(0);
        } else
          "year" === this.intervalType &&
            (0 < a.getMonth() ||
              1 < a.getDate() ||
              0 < a.getHours() ||
              0 < a.getMinutes() ||
              0 < a.getSeconds() ||
              0 < a.getMilliseconds()) &&
            (a.setFullYear(a.getFullYear() + 1),
            a.setMonth(0),
            a.setDate(1),
            a.setHours(0),
            a.setMinutes(0),
            a.setSeconds(0),
            a.setMilliseconds(0));
      return a;
    };
    pa(ea, Y);
    pa(ca, Y);
    ca.prototype.createUserOptions = function (a) {
      if ("undefined" !== typeof a || this.options._isPlaceholder) {
        var g = 0;
        this.parent.options._isPlaceholder && this.parent.createUserOptions();
        this.options._isPlaceholder ||
          (Da(this.parent[this.optionsName]),
          (g = this.parent.options[this.optionsName].indexOf(this.options)));
        this.options = "undefined" === typeof a ? {} : a;
        this.parent.options[this.optionsName][g] = this.options;
      }
    };
    ca.prototype.render = function (a) {
      if (
        0 !== this.spacing ||
        (0 !== this.options.lineThickness &&
          ("undefined" !== typeof this.options.lineThickness ||
            0 !== this.parent.lineThickness))
      ) {
        var g = this.ctx,
          c = this.ctx.globalAlpha;
        this.ctx = a || this.ctx;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.rect(
          this.chart.plotArea.x1,
          this.chart.plotArea.y1,
          this.chart.plotArea.width,
          this.chart.plotArea.height
        );
        this.ctx.clip();
        var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(
            this.startValue
          ),
          e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
        this.ctx.strokeStyle = this.lineColor;
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.globalAlpha = 1;
        U(this.id);
        var d, q, m, n, k, l;
        a = Math.max(this.spacing, 3);
        var p = Math.max(0, this.lineThickness);
        this.ctx.lineWidth = p;
        this.ctx.setLineDash && this.ctx.setLineDash(G(this.lineDashType, p));
        if (
          "bottom" === this.scaleBreaks.parent._position ||
          "top" === this.scaleBreaks.parent._position
        )
          if (
            ((b = 1 === p % 2 ? (b.x << 0) + 0.5 : b.x << 0),
            (q = 1 === p % 2 ? (e.x << 0) + 0.5 : e.x << 0),
            "top" === this.scaleBreaks.parent._position
              ? ((e = this.chart.plotArea.y1),
                (m = (this.chart.plotArea.y2 + p / 2 + 0.5) << 0))
              : ((e = this.chart.plotArea.y2),
                (m = (this.chart.plotArea.y1 - p / 2 + 0.5) << 0),
                (a *= -1)),
            (this.bounds = { x1: b - p / 2, y1: e, x2: q + p / 2, y2: m }),
            this.ctx.moveTo(b, e),
            "straight" === this.type ||
              ("top" === this.scaleBreaks.parent._position && 0 >= a) ||
              ("bottom" === this.scaleBreaks.parent._position && 0 <= a))
          )
            this.ctx.lineTo(b, m), this.ctx.lineTo(q, m), this.ctx.lineTo(q, e);
          else if ("wavy" === this.type) {
            n = b;
            k = e;
            d = 0.5;
            l = (m - k) / a / 3;
            for (var r = 0; r < l; r++)
              this.ctx.bezierCurveTo(
                n + d * a,
                k + a,
                n + d * a,
                k + 2 * a,
                n,
                k + 3 * a
              ),
                (k += 3 * a),
                (d *= -1);
            this.ctx.bezierCurveTo(
              n + d * a,
              k + a,
              n + d * a,
              k + 2 * a,
              n,
              k + 3 * a
            );
            n = q;
            d *= -1;
            this.ctx.lineTo(n, k);
            for (r = 0; r < l; r++)
              this.ctx.bezierCurveTo(
                n + d * a,
                k - a,
                n + d * a,
                k - 2 * a,
                n,
                k - 3 * a
              ),
                (k -= 3 * a),
                (d *= -1);
          } else {
            if ("zigzag" === this.type) {
              d = -1;
              k = e + a;
              n = b + a;
              l = (m - k) / a / 2;
              for (r = 0; r < l; r++)
                this.ctx.lineTo(n, k),
                  (n += 2 * d * a),
                  (k += 2 * a),
                  (d *= -1);
              this.ctx.lineTo(n, k);
              n += q - b;
              for (r = 0; r < l + 1; r++)
                this.ctx.lineTo(n, k),
                  (n += 2 * d * a),
                  (k -= 2 * a),
                  (d *= -1);
              this.ctx.lineTo(n + d * a, k + a);
            }
          }
        else if (
          "left" === this.scaleBreaks.parent._position ||
          "right" === this.scaleBreaks.parent._position
        )
          if (
            ((e = 1 === p % 2 ? (e.y << 0) + 0.5 : e.y << 0),
            (m = 1 === p % 2 ? (b.y << 0) + 0.5 : b.y << 0),
            "left" === this.scaleBreaks.parent._position
              ? ((b = this.chart.plotArea.x1),
                (q = (this.chart.plotArea.x2 + p / 2 + 0.5) << 0))
              : ((b = this.chart.plotArea.x2),
                (q = (this.chart.plotArea.x1 - p / 2 + 0.5) << 0),
                (a *= -1)),
            (this.bounds = { x1: b, y1: e - p / 2, x2: q, y2: m + p / 2 }),
            this.ctx.moveTo(b, e),
            "straight" === this.type ||
              ("left" === this.scaleBreaks.parent._position && 0 >= a) ||
              ("right" === this.scaleBreaks.parent._position && 0 <= a))
          )
            this.ctx.lineTo(q, e), this.ctx.lineTo(q, m), this.ctx.lineTo(b, m);
          else if ("wavy" === this.type) {
            n = b;
            k = e;
            d = 0.5;
            l = (q - n) / a / 3;
            for (r = 0; r < l; r++)
              this.ctx.bezierCurveTo(
                n + a,
                k + d * a,
                n + 2 * a,
                k + d * a,
                n + 3 * a,
                k
              ),
                (n += 3 * a),
                (d *= -1);
            this.ctx.bezierCurveTo(
              n + a,
              k + d * a,
              n + 2 * a,
              k + d * a,
              n + 3 * a,
              k
            );
            k = m;
            d *= -1;
            this.ctx.lineTo(n, k);
            for (r = 0; r < l; r++)
              this.ctx.bezierCurveTo(
                n - a,
                k + d * a,
                n - 2 * a,
                k + d * a,
                n - 3 * a,
                k
              ),
                (n -= 3 * a),
                (d *= -1);
          } else if ("zigzag" === this.type) {
            d = 1;
            k = e - a;
            n = b + a;
            l = (q - n) / a / 2;
            for (r = 0; r < l; r++)
              this.ctx.lineTo(n, k), (k += 2 * d * a), (n += 2 * a), (d *= -1);
            this.ctx.lineTo(n, k);
            k += m - e;
            for (r = 0; r < l + 1; r++)
              this.ctx.lineTo(n, k), (k += 2 * d * a), (n -= 2 * a), (d *= -1);
            this.ctx.lineTo(n + a, k + d * a);
          }
        0 < p && this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.globalAlpha = this.fillOpacity;
        this.ctx.globalCompositeOperation = "destination-over";
        this.ctx.fill();
        this.ctx.restore();
        this.ctx.globalAlpha = c;
        this.ctx = g;
      }
    };
    pa(N, Y);
    N.prototype.createUserOptions = function (a) {
      if ("undefined" !== typeof a || this.options._isPlaceholder) {
        var g = 0;
        this.parent.options._isPlaceholder && this.parent.createUserOptions();
        this.options._isPlaceholder ||
          (Da(this.parent.stripLines),
          (g = this.parent.options.stripLines.indexOf(this.options)));
        this.options = "undefined" === typeof a ? {} : a;
        this.parent.options.stripLines[g] = this.options;
      }
    };
    N.prototype.render = function () {
      this.ctx.save();
      var a = this.parent.getPixelCoordinatesOnAxis(this.value),
        g = Math.abs(
          "pixel" === this._thicknessType
            ? this.thickness
            : Math.abs(
                this.parent.convertValueToPixel(this.endValue) -
                  this.parent.convertValueToPixel(this.startValue)
              )
        );
      if (0 < g) {
        var c = null === this.opacity ? 1 : this.opacity;
        this.ctx.strokeStyle = this.color;
        this.ctx.beginPath();
        var b = this.ctx.globalAlpha;
        this.ctx.globalAlpha = c;
        U(this.id);
        var e, d, q, n;
        this.ctx.lineWidth = g;
        this.ctx.setLineDash && this.ctx.setLineDash(G(this.lineDashType, g));
        if (
          "bottom" === this.parent._position ||
          "top" === this.parent._position
        )
          (e = d = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0),
            (q = this.chart.plotArea.y1),
            (n = this.chart.plotArea.y2),
            (this.bounds = { x1: e - g / 2, y1: q, x2: d + g / 2, y2: n });
        else if (
          "left" === this.parent._position ||
          "right" === this.parent._position
        )
          (q = n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0),
            (e = this.chart.plotArea.x1),
            (d = this.chart.plotArea.x2),
            (this.bounds = { x1: e, y1: q - g / 2, x2: d, y2: n + g / 2 });
        this.ctx.moveTo(e, q);
        this.ctx.lineTo(d, n);
        this.ctx.stroke();
        this.ctx.globalAlpha = b;
      }
      this.ctx.restore();
    };
    pa(da, Y);
    da.prototype.showAt = function (a) {
      if (!this.enabled) return !1;
      var g = this.chart,
        c = !1;
      g.resetOverlayedCanvas();
      g.clearedOverlayedCanvas = this.parent.type;
      this.chart.renderCrosshairs(this.parent);
      if ("xySwapped" === g.plotInfo.axisPlacement)
        if ("bottom" === this.parent._position)
          for (var b = 0; b < g.axisY.length; b++)
            this.parent === g.axisY[b] &&
              (g.axisY[b]._crosshairValue =
                a >= g.axisY[b].viewportMinimum &&
                a <= g.axisY[b].viewportMaximum
                  ? a
                  : null);
        else if ("top" === this.parent._position)
          for (b = 0; b < g.axisY2.length; b++)
            this.parent === g.axisY2[b] &&
              (g.axisY2[b]._crosshairValue =
                a >= g.axisY2[b].viewportMinimum &&
                a <= g.axisY2[b].viewportMaximum
                  ? a
                  : null);
        else if ("left" === this.parent._position)
          for (b = 0; b < g.axisX.length; b++)
            this.parent === g.axisX[b] &&
              (g.axisX[b]._crosshairValue =
                a >= g.axisX[b].viewportMinimum &&
                a <= g.axisX[b].viewportMaximum
                  ? a
                  : null);
        else {
          if ("right" === this.parent._position)
            for (b = 0; b < g.axisX2.length; b++)
              this.parent === g.axisX2[b] &&
                (g.axisX2[b]._crosshairValue =
                  a >= g.axisX2[b].viewportMinimum &&
                  a <= g.axisX2[b].viewportMaximum
                    ? a
                    : null);
        }
      else if ("bottom" === this.parent._position)
        for (b = 0; b < g.axisX.length; b++)
          this.parent === g.axisX[b] &&
            (g.axisX[b]._crosshairValue =
              a >= g.axisX[b].viewportMinimum && a <= g.axisX[b].viewportMaximum
                ? a
                : null);
      else if ("top" === this.parent._position)
        for (b = 0; b < g.axisX2.length; b++)
          this.parent === g.axisX2[b] &&
            (g.axisX2[b]._crosshairValue =
              a >= g.axisX2[b].viewportMinimum &&
              a <= g.axisX2[b].viewportMaximum
                ? a
                : null);
      else if ("left" === this.parent._position)
        for (b = 0; b < g.axisY.length; b++)
          this.parent === g.axisY[b] &&
            (g.axisY[b]._crosshairValue =
              a >= g.axisY[b].viewportMinimum && a <= g.axisY[b].viewportMaximum
                ? a
                : null);
      else if ("right" === this.parent._position)
        for (b = 0; b < g.axisY2.length; b++)
          this.parent === g.axisY2[b] &&
            (g.axisY2[b]._crosshairValue =
              a >= g.axisY2[b].viewportMinimum &&
              a <= g.axisY2[b].viewportMaximum
                ? a
                : null);
      for (b = 0; b < g.axisX.length; b++)
        (a = g.axisX[b]._crosshairValue),
          g.axisX[b].crosshair &&
            g.axisX[b].crosshair.enabled &&
            !n(a) &&
            a >= g.axisX[b].viewportMinimum &&
            a <= g.axisX[b].viewportMaximum &&
            (g.axisX[b].showCrosshair(a),
            (g.axisX[b].crosshair._updatedValue = a),
            this === g.axisX[b].crosshair && (c = !0));
      for (b = 0; b < g.axisX2.length; b++)
        (a = g.axisX2[b]._crosshairValue),
          g.axisX2[b].crosshair &&
            g.axisX2[b].crosshair.enabled &&
            !n(a) &&
            a >= g.axisX2[b].viewportMinimum &&
            a <= g.axisX2[b].viewportMaximum &&
            (g.axisX2[b].showCrosshair(a),
            (g.axisX2[b].crosshair._updatedValue = a),
            this === g.axisX2[b].crosshair && (c = !0));
      for (b = 0; b < g.axisY.length; b++)
        (a = g.axisY[b]._crosshairValue),
          g.axisY[b].crosshair &&
            g.axisY[b].crosshair.enabled &&
            !n(a) &&
            a >= g.axisY[b].viewportMinimum &&
            a <= g.axisY[b].viewportMaximum &&
            (g.axisY[b].showCrosshair(a),
            (g.axisY[b].crosshair._updatedValue = a),
            this === g.axisY[b].crosshair && (c = !0));
      for (b = 0; b < g.axisY2.length; b++)
        (a = g.axisY2[b]._crosshairValue),
          g.axisY2[b].crosshair &&
            g.axisY2[b].crosshair.enabled &&
            !n(a) &&
            a >= g.axisY2[b].viewportMinimum &&
            a <= g.axisY2[b].viewportMaximum &&
            (g.axisY2[b].showCrosshair(a),
            (g.axisY2[b].crosshair._updatedValue = a),
            this === g.axisY2[b].crosshair && (c = !0));
      this.chart.toolTip &&
        this.chart.toolTip._entries &&
        this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
      return c;
    };
    da.prototype.hide = function () {
      this.chart.resetOverlayedCanvas();
      this.chart.renderCrosshairs(this.parent);
      this._hidden = !0;
    };
    da.prototype.render = function (a, g, c) {
      var b,
        e,
        d,
        q,
        m = null,
        t = null,
        k = null,
        l = "";
      this.valueFormatString ||
        ("dateTime" === this.parent.valueType
          ? (this.valueFormatString = this.parent.valueFormatString)
          : ((k = 0),
            (k =
              "xySwapped" === this.chart.plotInfo.axisPlacement
                ? 50 < this.parent.range
                  ? 0
                  : 500 < this.chart.width && 25 > this.parent.range
                  ? 2
                  : Math.floor(
                      Math.abs(Math.log(this.parent.range) / Math.LN10)
                    ) +
                    (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0)
                : 50 < this.parent.range
                ? 0
                : Math.floor(
                    Math.abs(Math.log(this.parent.range) / Math.LN10)
                  ) +
                  (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0)),
            (this.valueFormatString = A.generateValueFormatString(
              this.parent.range,
              k
            ))));
      var p = null === this.opacity ? 1 : this.opacity,
        r = Math.abs(
          "pixel" === this._thicknessType
            ? this.thickness
            : this.parent.conversionParameters.pixelPerUnit * this.thickness
        ),
        f = this.chart.overlaidCanvasCtx,
        v = f.globalAlpha;
      f.beginPath();
      f.strokeStyle = this.color;
      f.lineWidth = r;
      f.save();
      this.labelFontSize = Math.abs(
        n(this.options.labelFontSize)
          ? this.parent.labelFontSize
          : this.labelFontSize
      );
      this.labelMaxWidth = n(this.options.labelMaxWidth)
        ? 0.3 * this.chart.width
        : this.labelMaxWidth;
      this.labelMaxHeight =
        n(this.options.labelWrap) || this.labelWrap
          ? 0.3 * this.chart.height
          : 2 * this.labelFontSize;
      0 < r && f.setLineDash && f.setLineDash(G(this.lineDashType, r));
      k = new ja(f, {
        x: 0,
        y: 0,
        padding: { top: 2, right: 3, bottom: 2, left: 4 },
        backgroundColor: this.labelBackgroundColor,
        borderColor: this.labelBorderColor,
        borderThickness: this.labelBorderThickness,
        cornerRadius: this.labelCornerRadius,
        maxWidth: this.labelMaxWidth,
        maxHeight: this.labelMaxHeight,
        angle: this.labelAngle,
        text: l,
        textAlign: this.labelTextAlign,
        fontSize: this.labelFontSize,
        fontFamily: this.labelFontFamily,
        fontWeight: this.labelFontWeight,
        fontColor: this.labelFontColor,
        fontStyle: this.labelFontStyle,
        textBaseline: "middle",
      });
      if (this.snapToDataPoint) {
        var w = 0,
          l = [];
        if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
          var x = null;
          if (
            "bottom" === this.parent._position ||
            "top" === this.parent._position
          )
            w = this.parent.dataSeries[0].axisX.convertPixelToValue({ y: g });
          else if (
            "left" === this.parent._position ||
            "right" === this.parent._position
          )
            w = this.parent.convertPixelToValue({ y: g });
          for (var s = 0; s < this.parent.dataSeries.length; s++)
            (x = this.parent.dataSeries[s].getDataPointAtX(w, !0)) &&
              0 <= x.index &&
              ((x.dataSeries = this.parent.dataSeries[s]),
              null !== x.dataPoint.y && x.dataSeries.visible && l.push(x));
          x = null;
          if (0 === l.length) return;
          l.sort(function (a, b) {
            return a.distance - b.distance;
          });
          var z = (x = 0);
          yPercent = cumulativeY = 0;
          for (var w = Infinity, u, s = 0; s < l.length; s++) {
            if (
              "rangeBar" === l[s].dataSeries.type ||
              "error" === l[s].dataSeries.type
            ) {
              if (l[s].dataPoint.y)
                for (var B = 0; B < l[s].dataPoint.y.length; B++)
                  (z = Math.abs(
                    a - this.parent.convertValueToPixel(l[s].dataPoint.y[B])
                  )),
                    z <= w && ((w = z), (x = s));
            } else
              "stackedBar" === l[s].dataSeries.type
                ? ((cumulativeY =
                    l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY),
                  (z = Math.abs(
                    a - this.parent.convertValueToPixel(cumulativeY)
                  )),
                  z <= w && ((w = z), (x = s)))
                : "stackedBar100" === l[s].dataSeries.type
                ? ((z = l[0].dataPoint.x.getTime
                    ? l[0].dataPoint.x.getTime()
                    : l[0].dataPoint.x),
                  n(u) &&
                    (u = Math.abs(
                      a -
                        this.parent.convertValueToPixel(
                          100 *
                            (l[0].dataSeries.dataPointEOs[l[0].index]
                              .cumulativeY /
                              l[0].dataSeries.plotUnit.dataPointYSums[z])
                        )
                    )),
                  (cumulativeY =
                    l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY),
                  (z = l[s].dataPoint.x.getTime
                    ? l[s].dataPoint.x.getTime()
                    : l[s].dataPoint.x),
                  (yPercent =
                    100 *
                    (cumulativeY / l[s].dataSeries.plotUnit.dataPointYSums[z])),
                  (z = Math.abs(a - this.parent.convertValueToPixel(yPercent))),
                  z <= u && ((u = z), (x = s)))
                : ((z = Math.abs(
                    a - this.parent.convertValueToPixel(l[s].dataPoint.y)
                  )),
                  z <= w && ((w = z), (x = s)));
            n(u) || (w = Math.min(w, u));
          }
          u = l[x];
          s = 0;
          if (
            "bottom" === this.parent._position ||
            "top" === this.parent._position
          ) {
            if (
              "rangeBar" === u.dataSeries.type ||
              "error" === u.dataSeries.type
            ) {
              w = Math.abs(
                a - this.parent.convertValueToPixel(u.dataPoint.y[0])
              );
              for (l = 0; l < u.dataPoint.y.length; l++)
                (z = Math.abs(
                  a - this.parent.convertValueToPixel(u.dataPoint.y[l])
                )),
                  z < w && ((w = z), (s = l));
              m =
                1 === f.lineWidth % 2
                  ? (this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0) +
                    0.5
                  : this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0;
              this.value = u.dataPoint.y[s];
              k.text = this.labelFormatter
                ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: u.dataPoint.y[s],
                  })
                : n(this.options.label)
                ? fa(
                    n(c) ? u.dataPoint.y[s] : c,
                    this.valueFormatString,
                    this.chart._cultureInfo
                  )
                : this.label;
            } else
              "stackedBar" === u.dataSeries.type
                ? ((w = Math.abs(
                    a - this.parent.convertValueToPixel(l[0].dataPoint.y)
                  )),
                  (cumulativeY =
                    u.dataSeries.dataPointEOs[u.index].cumulativeY),
                  (m =
                    1 === f.lineWidth % 2
                      ? (this.parent.convertValueToPixel(cumulativeY) << 0) +
                        0.5
                      : this.parent.convertValueToPixel(cumulativeY) << 0),
                  (this.value = cumulativeY),
                  (k.text = this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: cumulativeY,
                      })
                    : n(this.options.label)
                    ? fa(
                        n(c) ? cumulativeY : c,
                        this.valueFormatString,
                        this.chart._cultureInfo
                      )
                    : this.label))
                : "stackedBar100" === u.dataSeries.type
                ? ((w = Math.abs(
                    a - this.parent.convertValueToPixel(l[0].dataPoint.y)
                  )),
                  (cumulativeY =
                    u.dataSeries.dataPointEOs[u.index].cumulativeY),
                  (z = u.dataPoint.x.getTime
                    ? u.dataPoint.x.getTime()
                    : u.dataPoint.x),
                  (yPercent =
                    100 *
                    (cumulativeY / u.dataSeries.plotUnit.dataPointYSums[z])),
                  (m =
                    1 === f.lineWidth % 2
                      ? (this.parent.convertValueToPixel(yPercent) << 0) + 0.5
                      : this.parent.convertValueToPixel(yPercent) << 0),
                  (this.value = yPercent),
                  (k.text = this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: yPercent,
                      })
                    : n(this.options.label)
                    ? fa(
                        n(c) ? yPercent : c,
                        this.valueFormatString,
                        this.chart._cultureInfo
                      )
                    : this.label))
                : ((m =
                    1 === f.lineWidth % 2
                      ? (this.parent.convertValueToPixel(u.dataPoint.y) << 0) +
                        0.5
                      : this.parent.convertValueToPixel(u.dataPoint.y) << 0),
                  (this.value = u.dataPoint.y),
                  (k.text = this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: u.dataPoint.y,
                      })
                    : n(this.options.label)
                    ? fa(
                        n(c) ? u.dataPoint.y : c,
                        this.valueFormatString,
                        this.chart._cultureInfo
                      )
                    : this.label));
            b = e = m;
            d = this.chart.plotArea.y1;
            q = this.chart.plotArea.y2;
            this.bounds = { x1: b - r / 2, y1: d, x2: e + r / 2, y2: q };
            k.x = b - k.measureText().width / 2;
            k.x + k.width > this.chart.bounds.x2
              ? (k.x = this.chart.bounds.x2 - k.width)
              : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
            k.y =
              this.parent.lineCoordinates.y2 +
              ("top" === this.parent._position
                ? -k.height + this.parent.tickLength
                : k.fontSize / 2) +
              2;
            k.y + k.height > this.chart.bounds.y2
              ? (k.y = this.chart.bounds.y2 - k.height)
              : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1);
          } else if (
            "left" === this.parent._position ||
            "right" === this.parent._position
          ) {
            d =
              q =
              t =
                1 === f.lineWidth % 2
                  ? (this.parent.convertValueToPixel(u.dataPoint.x) << 0) + 0.5
                  : this.parent.convertValueToPixel(u.dataPoint.x) << 0;
            b = this.chart.plotArea.x1;
            e = this.chart.plotArea.x2;
            this.bounds = { x1: b, y1: d - r / 2, x2: e, y2: q + r / 2 };
            s = !1;
            if (this.parent.labels)
              for (
                w = Math.ceil(this.parent.interval), l = 0;
                l < this.parent.viewportMaximum;
                l += w
              )
                if (this.parent.labels[l]) s = !0;
                else {
                  s = !1;
                  break;
                }
            if (s) {
              if ("axisX" === this.parent.type)
                for (
                  w = this.parent.convertPixelToValue({ y: g }),
                    x = null,
                    s = 0;
                  s < this.parent.dataSeries.length;
                  s++
                )
                  (x = this.parent.dataSeries[s].getDataPointAtX(w, !0)) &&
                    0 <= x.index &&
                    (k.text = this.labelFormatter
                      ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.parent.options,
                          crosshair: this.options,
                          value: u.dataPoint.x,
                        })
                      : n(this.options.label)
                      ? x.dataPoint.label
                      : this.label);
            } else
              k.text =
                "dateTime" !== this.parent.valueType || this.parent.logarithmic
                  ? this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: u.dataPoint.x,
                      })
                    : n(this.options.label)
                    ? fa(
                        u.dataPoint.x,
                        this.valueFormatString,
                        this.chart._cultureInfo
                      )
                    : this.label
                  : this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: u.dataPoint.x,
                    })
                  : n(this.options.label)
                  ? Ca(
                      u.dataPoint.x,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label;
            this.value = u.dataPoint.x;
            k.y = q + k.fontSize / 2 - k.measureText().height / 2 + 2;
            k.y - k.fontSize / 2 < this.chart.bounds.y1
              ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
              : k.y + k.measureText().height - k.fontSize / 2 >
                  this.chart.bounds.y2 &&
                (k.y =
                  this.chart.bounds.y2 -
                  k.measureText().height +
                  k.fontSize / 2);
            "left" === this.parent._position
              ? (k.x = this.parent.lineCoordinates.x2 - k.measureText().width)
              : "right" === this.parent._position &&
                (k.x = this.parent.lineCoordinates.x2);
          }
        } else if (
          "bottom" === this.parent._position ||
          "top" === this.parent._position
        ) {
          w = this.parent.convertPixelToValue({ x: a });
          for (s = 0; s < this.parent.dataSeries.length; s++)
            (x = this.parent.dataSeries[s].getDataPointAtX(w, !0)) &&
              0 <= x.index &&
              ((x.dataSeries = this.parent.dataSeries[s]),
              null !== x.dataPoint.y && x.dataSeries.visible && l.push(x));
          if (0 === l.length) return;
          l.sort(function (a, b) {
            return a.distance - b.distance;
          });
          u = l[0];
          b =
            e =
            m =
              1 === f.lineWidth % 2
                ? (this.parent.convertValueToPixel(u.dataPoint.x) << 0) + 0.5
                : this.parent.convertValueToPixel(u.dataPoint.x) << 0;
          d = this.chart.plotArea.y1;
          q = this.chart.plotArea.y2;
          this.bounds = { x1: b - r / 2, y1: d, x2: e + r / 2, y2: q };
          s = !1;
          if (this.parent.labels)
            for (
              w = Math.ceil(this.parent.interval), l = 0;
              l < this.parent.viewportMaximum;
              l += w
            )
              if (this.parent.labels[l]) s = !0;
              else {
                s = !1;
                break;
              }
          if (s) {
            if ("axisX" === this.parent.type)
              for (
                w = this.parent.convertPixelToValue({ x: a }), x = null, s = 0;
                s < this.parent.dataSeries.length;
                s++
              )
                (x = this.parent.dataSeries[s].getDataPointAtX(w, !0)) &&
                  0 <= x.index &&
                  (k.text = this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: u.dataPoint.x,
                      })
                    : n(this.options.label)
                    ? x.dataPoint.label
                    : this.label);
          } else
            k.text =
              "dateTime" !== this.parent.valueType || this.parent.logarithmic
                ? this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: u.dataPoint.x,
                    })
                  : n(this.options.label)
                  ? fa(
                      u.dataPoint.x,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label
                : this.labelFormatter
                ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: u.dataPoint.x,
                  })
                : n(this.options.label)
                ? Ca(
                    u.dataPoint.x,
                    this.valueFormatString,
                    this.chart._cultureInfo
                  )
                : this.label;
          this.value = u.dataPoint.x;
          k.x = b - k.measureText().width / 2;
          k.x + k.width > this.chart.bounds.x2 &&
            (k.x = this.chart.bounds.x2 - k.width);
          k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
          "bottom" === this.parent._position
            ? (k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2)
            : "top" === this.parent._position &&
              (k.y =
                this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
        } else if (
          "left" === this.parent._position ||
          "right" === this.parent._position
        ) {
          !n(this.parent.dataSeries) &&
            0 < this.parent.dataSeries.length &&
            (w = this.parent.dataSeries[0].axisX.convertPixelToValue({ x: a }));
          for (s = 0; s < this.parent.dataSeries.length; s++)
            (x = this.parent.dataSeries[s].getDataPointAtX(w, !0)) &&
              0 <= x.index &&
              ((x.dataSeries = this.parent.dataSeries[s]),
              null !== x.dataPoint.y && x.dataSeries.visible && l.push(x));
          if (0 === l.length) return;
          l.sort(function (a, b) {
            return a.distance - b.distance;
          });
          z = x = 0;
          w = Infinity;
          for (s = 0; s < l.length; s++) {
            if (
              "rangeColumn" === l[s].dataSeries.type ||
              "rangeArea" === l[s].dataSeries.type ||
              "error" === l[s].dataSeries.type ||
              "rangeSplineArea" === l[s].dataSeries.type ||
              "candlestick" === l[s].dataSeries.type ||
              "ohlc" === l[s].dataSeries.type ||
              "boxAndWhisker" === l[s].dataSeries.type
            ) {
              if (l[s].dataPoint.y)
                for (B = 0; B < l[s].dataPoint.y.length; B++)
                  (z = Math.abs(
                    g - this.parent.convertValueToPixel(l[s].dataPoint.y[B])
                  )),
                    z <= w && ((w = z), (x = s));
            } else
              "stackedColumn" === l[s].dataSeries.type
                ? ((b = l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY),
                  (z = Math.abs(g - this.parent.convertValueToPixel(b))),
                  z <= w && ((w = z), (x = s)))
                : "stackedArea" === l[s].dataSeries.type
                ? ((b = l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY),
                  (z = Math.abs(g - this.parent.convertValueToPixel(b))),
                  z <= w && ((w = z), (x = s)))
                : "stackedColumn100" === l[s].dataSeries.type ||
                  "stackedArea100" === l[s].dataSeries.type
                ? ((z = l[0].dataPoint.x.getTime
                    ? l[0].dataPoint.x.getTime()
                    : l[0].dataPoint.x),
                  n(u) &&
                    (u = Math.abs(
                      g -
                        this.parent.convertValueToPixel(
                          100 *
                            (l[0].dataSeries.dataPointEOs[l[0].index]
                              .cumulativeY /
                              l[0].dataSeries.plotUnit.dataPointYSums[z])
                        )
                    )),
                  "stackedColumn100" === l[s].dataSeries.type
                    ? ((t =
                        l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY),
                      (z = l[s].dataPoint.x.getTime
                        ? l[s].dataPoint.x.getTime()
                        : l[s].dataPoint.x),
                      (b =
                        100 * (t / l[s].dataSeries.plotUnit.dataPointYSums[z])),
                      (z = Math.abs(g - this.parent.convertValueToPixel(b))),
                      z <= u && ((u = z), (x = s)))
                    : "stackedArea100" === l[s].dataSeries.type &&
                      ((t =
                        l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY),
                      (z = l[s].dataPoint.x.getTime
                        ? l[s].dataPoint.x.getTime()
                        : l[s].dataPoint.x),
                      (b =
                        100 * (t / l[s].dataSeries.plotUnit.dataPointYSums[z])),
                      (z = Math.abs(g - this.parent.convertValueToPixel(b))),
                      z <= u && ((u = z), (x = s))))
                : "waterfall" === l[s].dataSeries.type
                ? ((z = Math.abs(
                    g -
                      this.parent.convertValueToPixel(
                        l[s].dataSeries.dataPointEOs[l[s].index].cumulativeSum
                      )
                  )),
                  z <= w && ((u = w = z), (x = s)))
                : ((z = Math.abs(
                    g - this.parent.convertValueToPixel(l[s].dataPoint.y)
                  )),
                  z <= w && ((w = z), (x = s)));
            n(u) || (w = Math.min(w, u));
          }
          u = l[x];
          s = 0;
          if (
            "rangeColumn" === u.dataSeries.type ||
            "rangeArea" === u.dataSeries.type ||
            "error" === u.dataSeries.type ||
            "rangeSplineArea" === u.dataSeries.type ||
            "candlestick" === u.dataSeries.type ||
            "ohlc" === u.dataSeries.type ||
            "boxAndWhisker" === u.dataSeries.type
          ) {
            w = Math.abs(g - this.parent.convertValueToPixel(u.dataPoint.y[0]));
            for (l = 0; l < u.dataPoint.y.length; l++)
              (z = Math.abs(
                g - this.parent.convertValueToPixel(u.dataPoint.y[l])
              )),
                z < w && ((w = z), (s = l));
            t =
              1 === f.lineWidth % 2
                ? (this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0) + 0.5
                : this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0;
            k.text = this.labelFormatter
              ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: u.dataPoint.y[s],
                })
              : n(this.options.label)
              ? fa(
                  n(c) ? u.dataPoint.y[s] : c,
                  this.valueFormatString,
                  this.chart._cultureInfo
                )
              : this.label;
            this.value = u.dataPoint.y[s];
          } else
            "stackedColumn" === u.dataSeries.type
              ? ((b = u.dataSeries.dataPointEOs[u.index].cumulativeY),
                (t =
                  1 === f.lineWidth % 2
                    ? (this.parent.convertValueToPixel(b) << 0) + 0.5
                    : this.parent.convertValueToPixel(b) << 0),
                (k.text = this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: b,
                    })
                  : n(this.options.label)
                  ? fa(
                      n(c) ? b : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label),
                (this.value = b))
              : "stackedArea" === u.dataSeries.type
              ? ((b = u.dataSeries.dataPointEOs[u.index].cumulativeY),
                (t =
                  1 === f.lineWidth % 2
                    ? (this.parent.convertValueToPixel(b) << 0) + 0.5
                    : this.parent.convertValueToPixel(b) << 0),
                (k.text = this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: b,
                    })
                  : n(this.options.label)
                  ? fa(
                      n(c) ? b : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label),
                (this.value = b))
              : "stackedColumn100" === u.dataSeries.type
              ? ((t = u.dataSeries.dataPointEOs[u.index].cumulativeY),
                (z = u.dataPoint.x.getTime
                  ? u.dataPoint.x.getTime()
                  : u.dataPoint.x),
                (b = 100 * (t / u.dataSeries.plotUnit.dataPointYSums[z])),
                (t =
                  1 === f.lineWidth % 2
                    ? (this.parent.convertValueToPixel(b) << 0) + 0.5
                    : this.parent.convertValueToPixel(b) << 0),
                (k.text = this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: b,
                    })
                  : n(this.options.label)
                  ? fa(
                      n(c) ? b : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label),
                (this.value = b))
              : "stackedArea100" === u.dataSeries.type
              ? ((t = u.dataSeries.dataPointEOs[u.index].cumulativeY),
                (z = u.dataPoint.x.getTime
                  ? u.dataPoint.x.getTime()
                  : u.dataPoint.x),
                (b = 100 * (t / u.dataSeries.plotUnit.dataPointYSums[z])),
                (t =
                  1 === f.lineWidth % 2
                    ? (this.parent.convertValueToPixel(b) << 0) + 0.5
                    : this.parent.convertValueToPixel(b) << 0),
                (k.text = this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: b,
                    })
                  : n(this.options.label)
                  ? fa(
                      n(c) ? b : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label),
                (this.value = b))
              : "waterfall" === u.dataSeries.type
              ? ((t =
                  1 === f.lineWidth % 2
                    ? (this.parent.convertValueToPixel(
                        u.dataSeries.dataPointEOs[u.index].cumulativeSum
                      ) <<
                        0) +
                      0.5
                    : this.parent.convertValueToPixel(
                        u.dataSeries.dataPointEOs[u.index].cumulativeSum
                      ) << 0),
                (k.text = this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: u.dataSeries.dataPointEOs[u.index].cumulativeSum,
                    })
                  : n(this.options.label)
                  ? fa(
                      n(c)
                        ? u.dataSeries.dataPointEOs[u.index].cumulativeSum
                        : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label),
                (this.value = u.dataSeries.dataPointEOs[u.index].cumulativeSum))
              : ((t =
                  1 === f.lineWidth % 2
                    ? (n(a)
                        ? g
                        : this.parent.convertValueToPixel(u.dataPoint.y) << 0) +
                      0.5
                    : n(a)
                    ? g
                    : this.parent.convertValueToPixel(u.dataPoint.y) << 0),
                (k.text = this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: n(c) ? u.dataPoint.y : c,
                    })
                  : n(this.options.label)
                  ? fa(
                      n(c) ? u.dataPoint.y : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label),
                (this.value = u.dataPoint.y));
          d = q = t;
          b = this.chart.plotArea.x1;
          e = this.chart.plotArea.x2;
          this.bounds = { x1: b, y1: d - r / 2, x2: e, y2: q + r / 2 };
          k.y = q + k.fontSize / 2 - k.measureText().height / 2 + 2;
          k.y - k.fontSize / 2 < this.chart.bounds.y1
            ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
            : k.y + k.measureText().height - k.fontSize / 2 >
                this.chart.bounds.y2 &&
              (k.y =
                this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
          "left" === this.parent._position
            ? (k.x = this.parent.lineCoordinates.x2 - k.measureText().width)
            : "right" === this.parent._position &&
              (k.x = this.parent.lineCoordinates.x2);
        }
        l = null;
        f.globalAlpha = p;
        if (
          "bottom" === this.parent._position ||
          "top" === this.parent._position
        )
          "top" === this.parent._position &&
            k.y - k.fontSize / 2 < this.chart.bounds.y1 &&
            (k.y = this.chart.bounds.y1 + k.fontSize / 2),
            "bottom" === this.parent._position &&
              this.parent.lineCoordinates.y2 -
                k.fontSize / 2 +
                k.measureText().height >
                this.chart.bounds.y2 &&
              (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2),
            this.value >=
              Math.min(
                this.parent.viewportMinimum,
                this.parent.viewportMaximum
              ) &&
              this.value <=
                Math.max(
                  this.parent.viewportMinimum,
                  this.parent.viewportMaximum
                ) &&
              0 < r &&
              (f.moveTo(b, d), f.lineTo(e, q), f.stroke(), (this._hidden = !1));
        if (
          "left" === this.parent._position ||
          "right" === this.parent._position
        )
          "left" === this.parent._position &&
            k.x < this.chart.bounds.x1 &&
            (k.x = this.chart.bounds.x1),
            "right" === this.parent._position &&
              k.x + k.measureText().width > this.chart.bounds.x2 &&
              (k.x = this.chart.bounds.x2 - k.measureText().width),
            this.value >=
              Math.min(
                this.parent.viewportMinimum,
                this.parent.viewportMaximum
              ) &&
              this.value <=
                Math.max(
                  this.parent.viewportMinimum,
                  this.parent.viewportMaximum
                ) &&
              0 < r &&
              (f.moveTo(b, d), f.lineTo(e, q), f.stroke(), (this._hidden = !1));
      } else {
        if (
          "bottom" === this.parent._position ||
          "top" === this.parent._position
        )
          (b = e = m = 1 === f.lineWidth % 2 ? (a << 0) + 0.5 : a << 0),
            (d = this.chart.plotArea.y1),
            (q = this.chart.plotArea.y2),
            (this.bounds = { x1: b - r / 2, y1: d, x2: e + r / 2, y2: q });
        else if (
          "left" === this.parent._position ||
          "right" === this.parent._position
        )
          (d = q = t = 1 === f.lineWidth % 2 ? (g << 0) + 0.5 : g << 0),
            (b = this.chart.plotArea.x1),
            (e = this.chart.plotArea.x2),
            (this.bounds = { x1: b, y1: d - r / 2, x2: e, y2: q + r / 2 });
        if ("xySwapped" === this.chart.plotInfo.axisPlacement)
          if (
            "left" === this.parent._position ||
            "right" === this.parent._position
          ) {
            s = !1;
            if (this.parent.labels)
              for (
                w = Math.ceil(this.parent.interval), l = 0;
                l < this.parent.viewportMaximum;
                l += w
              )
                if (this.parent.labels[l]) s = !0;
                else {
                  s = !1;
                  break;
                }
            if (s) {
              if ("axisX" === this.parent.type)
                for (
                  w = this.parent.convertPixelToValue({ y: g }),
                    x = null,
                    s = 0;
                  s < this.parent.dataSeries.length;
                  s++
                )
                  (x = this.parent.dataSeries[s].getDataPointAtX(w, !0)) &&
                    0 <= x.index &&
                    (k.text = this.labelFormatter
                      ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.parent.options,
                          crosshair: this.options,
                          value: n(c) ? this.parent.convertPixelToValue(a) : c,
                        })
                      : n(this.options.label)
                      ? x.dataPoint.label
                      : this.label);
            } else
              k.text =
                "dateTime" !== this.parent.valueType || this.parent.logarithmic
                  ? this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: n(c) ? this.parent.convertPixelToValue(g) : c,
                      })
                    : n(this.options.label)
                    ? fa(
                        n(c) ? this.parent.convertPixelToValue(g) : c,
                        this.valueFormatString,
                        this.chart._cultureInfo
                      )
                    : this.label
                  : this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: n(c) ? this.parent.convertPixelToValue(g) : c,
                    })
                  : n(this.options.label)
                  ? Ca(
                      n(c) ? this.parent.convertPixelToValue(g) : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label;
            k.y = g + k.fontSize / 2 - k.measureText().height / 2 + 2;
            k.y - k.fontSize / 2 < this.chart.bounds.y1
              ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
              : k.y + k.measureText().height - k.fontSize / 2 >
                  this.chart.bounds.y2 &&
                (k.y =
                  this.chart.bounds.y2 -
                  k.measureText().height +
                  k.fontSize / 2);
            "left" === this.parent._position
              ? (k.x = this.parent.lineCoordinates.x1 - k.measureText().width)
              : "right" === this.parent._position &&
                (k.x = this.parent.lineCoordinates.x2);
          } else {
            if (
              "bottom" === this.parent._position ||
              "top" === this.parent._position
            )
              (k.text = this.labelFormatter
                ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: n(c) ? this.parent.convertPixelToValue(a) : c,
                  })
                : n(this.options.label)
                ? fa(
                    n(c) ? this.parent.convertPixelToValue(a) : c,
                    this.valueFormatString,
                    this.chart._cultureInfo
                  )
                : this.label),
                (k.x = b - k.measureText().width / 2),
                k.x + k.width > this.chart.bounds.x2 &&
                  (k.x = this.chart.bounds.x2 - k.width),
                k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1),
                "bottom" === this.parent._position
                  ? (k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2)
                  : "top" === this.parent._position &&
                    (k.y =
                      this.parent.lineCoordinates.y1 -
                      k.height +
                      k.fontSize / 2 +
                      2);
          }
        else if (
          "bottom" === this.parent._position ||
          "top" === this.parent._position
        ) {
          s = !1;
          l = "";
          if (this.parent.labels)
            for (
              w = Math.ceil(this.parent.interval), l = 0;
              l < this.parent.viewportMaximum;
              l += w
            )
              if (this.parent.labels[l]) s = !0;
              else {
                s = !1;
                break;
              }
          if (s) {
            if ("axisX" === this.parent.type)
              for (
                w = this.parent.convertPixelToValue({ x: a }), x = null, s = 0;
                s < this.parent.dataSeries.length;
                s++
              )
                (x = this.parent.dataSeries[s].getDataPointAtX(w, !0)) &&
                  0 <= x.index &&
                  (k.text = this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: n(c) ? this.parent.convertPixelToValue(a) : c,
                      })
                    : n(this.options.label)
                    ? n(c)
                      ? x.dataPoint.label
                      : c
                    : this.label);
          } else
            k.text =
              "dateTime" !== this.parent.valueType || this.parent.logarithmic
                ? this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: n(c)
                        ? 0 < this.parent.dataSeries.length
                          ? this.parent.convertPixelToValue(a)
                          : ""
                        : c,
                    })
                  : n(this.options.label)
                  ? fa(
                      n(c) ? this.parent.convertPixelToValue(a) : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label
                : this.labelFormatter
                ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: n(c) ? this.parent.convertPixelToValue(a) : c,
                  })
                : n(this.options.label)
                ? Ca(
                    n(c) ? this.parent.convertPixelToValue(a) : c,
                    this.valueFormatString,
                    this.chart._cultureInfo
                  )
                : this.label;
          k.x = b - k.measureText().width / 2;
          k.x + k.width > this.chart.bounds.x2 &&
            (k.x = this.chart.bounds.x2 - k.width);
          k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
          "bottom" === this.parent._position
            ? (k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2)
            : "top" === this.parent._position &&
              (k.y =
                this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
        } else if (
          "left" === this.parent._position ||
          "right" === this.parent._position
        )
          (k.text = this.labelFormatter
            ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: n(c) ? this.parent.convertPixelToValue(g) : c,
              })
            : n(this.options.label)
            ? fa(
                n(c) ? this.parent.convertPixelToValue(g) : c,
                this.valueFormatString,
                this.chart._cultureInfo
              )
            : this.label),
            (k.y = g + k.fontSize / 2 - k.measureText().height / 2 + 2),
            k.y - k.fontSize / 2 < this.chart.bounds.y1
              ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
              : k.y + k.measureText().height - k.fontSize / 2 >
                  this.chart.bounds.y2 &&
                (k.y =
                  this.chart.bounds.y2 -
                  k.measureText().height +
                  k.fontSize / 2),
            "left" === this.parent._position
              ? (k.x = this.parent.lineCoordinates.x2 - k.measureText().width)
              : "right" === this.parent._position &&
                (k.x = this.parent.lineCoordinates.x2);
        "left" === this.parent._position && k.x < this.chart.bounds.x1
          ? (k.x = this.chart.bounds.x1)
          : "right" === this.parent._position &&
            k.x + k.measureText().width > this.chart.bounds.x2
          ? (k.x = this.chart.bounds.x2 - k.measureText().width)
          : "top" === this.parent._position &&
            k.y - k.fontSize / 2 < this.chart.bounds.y1
          ? (k.y = this.chart.bounds.y1 + k.fontSize / 2)
          : "bottom" === this.parent._position &&
            this.parent.lineCoordinates.y2 -
              k.fontSize / 2 +
              k.measureText().height >
              this.chart.bounds.y2 &&
            (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2);
        f.globalAlpha = p;
        0 < r &&
          (f.moveTo(b, d), f.lineTo(e, q), f.stroke(), (this._hidden = !1));
        this.value =
          "bottom" === this.parent._position || "top" === this.parent._position
            ? this.parent.convertPixelToValue(a)
            : this.parent.convertPixelToValue(g);
      }
      if ("bottom" === this.parent._position || "top" === this.parent._position)
        this._updatedValue = this.parent.convertPixelToValue(m);
      if ("left" === this.parent._position || "right" === this.parent._position)
        this._updatedValue = this.parent.convertPixelToValue(t);
      this._textBlock = k;
      this._label = c;
      n(c) || this.renderLabel();
      f.restore();
      f.globalAlpha = v;
    };
    da.prototype.renderLabel = function () {
      this.value >=
        Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) &&
        this.value <=
          Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) &&
        (n(this._textBlock) ||
          n(this._textBlock.text) ||
          !(
            "number" === typeof this._textBlock.text.valueOf() ||
            0 < this._textBlock.text.length
          ) ||
          this._hidden ||
          this._textBlock.render(!0),
        n(this._label) &&
          this.dispatchEvent(
            "updated",
            {
              chart: this.chart,
              crosshair: this.options,
              axis: this.parent,
              value: this.value,
            },
            this.parent
          ));
    };
    pa(na, Y);
    na.prototype._updateOptions = function () {
      this.updateOption("enabled");
      this.updateOption("shared");
      this.updateOption("animationEnabled");
      this.updateOption("content");
      this.updateOption("contentFormatter");
      this.updateOption("reversed");
      this.updateOption("backgroundColor");
      this.updateOption("borderColor");
      this.updateOption("borderThickness");
      this.updateOption("cornerRadius");
      this.updateOption("fontSize");
      this.updateOption("fontColor");
      this.updateOption("fontFamily");
      this.updateOption("fontWeight");
      this.updateOption("fontStyle");
    };
    na.prototype._initialize = function () {
      this.updateOption("updated");
      this.updateOption("hidden");
      if (this.enabled) {
        this.container = document.createElement("div");
        this.container.setAttribute("class", "canvasjs-chart-tooltip");
        this.container.style.position = "absolute";
        this.container.style.height = "auto";
        this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
        this.container.style.zIndex = "1000";
        this.container.style.pointerEvents = "none";
        this.container.style.display = "none";
        var a = document.createElement("div");
        a.style.width = "auto";
        a.style.height = "auto";
        a.style.minWidth = "50px";
        a.style.lineHeight = "normal";
        a.style.margin = "0px 0px 0px 0px";
        a.style.padding = "5px";
        a.style.fontFamily = "Calibri, Arial, Georgia, serif";
        a.style.fontWeight = "normal";
        a.style.fontStyle = v ? "italic" : "normal";
        a.style.fontSize = "14px";
        a.style.color = "#000000";
        a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
        a.style.textAlign = "left";
        a.style.border = "2px solid gray";
        a.style.background = v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
        a.style.textIndent = "0px";
        a.style.whiteSpace = "nowrap";
        a.style.borderRadius = "5px";
        a.style.MozUserSelect = "none";
        a.style.WebkitUserSelect = "none";
        a.style.msUserSelect = "none";
        a.style.userSelect = "none";
        v ||
          ((a.style.filter = "alpha(opacity = 90)"),
          (a.style.filter =
            "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')"));
        a.innerText = "Sample Tooltip";
        this.container.appendChild(a);
        this.contentDiv = this.container.firstChild;
        this.container.style.borderRadius = this.contentDiv.style.borderRadius;
        this.chart._canvasJSContainer.appendChild(this.container);
      }
    };
    na.prototype.mouseMoveHandler = function (a, g) {
      (this._lastUpdated && 4 > new Date().getTime() - this._lastUpdated) ||
        ((this._lastUpdated = new Date().getTime()),
        this.chart.resetOverlayedCanvas(),
        this._updateToolTip(a, g),
        this.enabled &&
          this._updatedEventParameters &&
          !isNaN(this._prevX) &&
          !isNaN(this._prevY) &&
          this.dispatchEvent("updated", this._updatedEventParameters, this));
    };
    na.prototype._updateToolTip = function (a, g, c) {
      c = "undefined" === typeof c ? !0 : c;
      this._updateOptions();
      this.container || this._initialize();
      this.enabled || this.hide();
      if (!this.chart.disableToolTip) {
        if ("undefined" === typeof a || "undefined" === typeof g) {
          if (isNaN(this._prevX) || isNaN(this._prevY)) return;
          a = this._prevX;
          g = this._prevY;
        } else (this._prevX = a), (this._prevY = g);
        var b = null,
          e = null,
          d = [],
          q = 0;
        if (
          this.shared &&
          this.enabled &&
          "none" !== this.chart.plotInfo.axisPlacement
        ) {
          var m = [];
          if (this.chart.axisX)
            for (var t = 0; t < this.chart.axisX.length; t++) {
              for (
                var q =
                    "xySwapped" === this.chart.plotInfo.axisPlacement
                      ? this.chart.axisX[t].convertPixelToValue({ y: g })
                      : this.chart.axisX[t].convertPixelToValue({ x: a }),
                  k = null,
                  b = 0;
                b < this.chart.axisX[t].dataSeries.length;
                b++
              )
                (k = this.chart.axisX[t].dataSeries[b].getDataPointAtX(q, c)) &&
                  0 <= k.index &&
                  ((k.dataSeries = this.chart.axisX[t].dataSeries[b]),
                  null !== k.dataPoint.y && k.dataSeries.visible && m.push(k));
              k = null;
            }
          if (this.chart.axisX2)
            for (t = 0; t < this.chart.axisX2.length; t++) {
              q =
                "xySwapped" === this.chart.plotInfo.axisPlacement
                  ? this.chart.axisX2[t].convertPixelToValue({ y: g })
                  : this.chart.axisX2[t].convertPixelToValue({ x: a });
              k = null;
              for (b = 0; b < this.chart.axisX2[t].dataSeries.length; b++)
                (k = this.chart.axisX2[t].dataSeries[b].getDataPointAtX(
                  q,
                  c
                )) &&
                  0 <= k.index &&
                  ((k.dataSeries = this.chart.axisX2[t].dataSeries[b]),
                  null !== k.dataPoint.y && k.dataSeries.visible && m.push(k));
              k = null;
            }
          if (0 === m.length) return;
          m.sort(function (a, b) {
            return a.dataSeries.axisX.logarithmic ||
              b.dataSeries.axisX.logarithmic
              ? a.distance - b.distance
              : a.distance / a.dataSeries.axisX.range -
                  b.distance / b.dataSeries.axisX.range;
          });
          c = m[0];
          for (b = 0; b < m.length; b++)
            m[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() &&
              d.push(m[b]);
          m = null;
        } else {
          if ((b = this.chart.getDataPointAtXY(a, g, c)))
            (this.currentDataPointIndex = b.dataPointIndex),
              (this.currentSeriesIndex = b.dataSeries.index);
          else if (v)
            if (
              ((b = ab(a, g, this.chart._eventManager.ghostCtx)),
              0 < b &&
                "undefined" !== typeof this.chart._eventManager.objectMap[b])
            ) {
              b = this.chart._eventManager.objectMap[b];
              if ("legendItem" === b.objectType) return;
              this.currentSeriesIndex = b.dataSeriesIndex;
              this.currentDataPointIndex =
                0 <= b.dataPointIndex ? b.dataPointIndex : -1;
            } else this.currentDataPointIndex = -1;
          else this.currentDataPointIndex = -1;
          if (0 <= this.currentSeriesIndex) {
            e = this.chart.data[this.currentSeriesIndex];
            k = {};
            if (0 <= this.currentDataPointIndex)
              (b = e.dataPoints[this.currentDataPointIndex]),
                (k.dataSeries = e),
                (k.dataPoint = b),
                (k.index = this.currentDataPointIndex),
                (k.distance = Math.abs(b.x - q)),
                "waterfall" === e.type &&
                  ((k.cumulativeSumYStartValue =
                    e.dataPointEOs[
                      this.currentDataPointIndex
                    ].cumulativeSumYStartValue),
                  (k.cumulativeSum =
                    e.dataPointEOs[this.currentDataPointIndex].cumulativeSum));
            else if (
              this.enabled &&
              e &&
              ("line" === e.type ||
                "stepLine" === e.type ||
                "spline" === e.type ||
                "area" === e.type ||
                "stepArea" === e.type ||
                "splineArea" === e.type ||
                "stackedArea" === e.type ||
                "stackedArea100" === e.type ||
                "rangeArea" === e.type ||
                "rangeSplineArea" === e.type ||
                "candlestick" === e.type ||
                "ohlc" === e.type ||
                "boxAndWhisker" === e.type)
            )
              (q = e.axisX.convertPixelToValue({ x: a })),
                (k = e.getDataPointAtX(q, c)),
                n(k) ||
                  ((k.dataSeries = e),
                  (this.currentDataPointIndex = k.index),
                  (b = k.dataPoint));
            else {
              "toolTip" === this.chart.clearedOverlayedCanvas &&
                (this.chart.resetOverlayedCanvas(),
                (this.chart.clearedOverlayedCanvas = null));
              return;
            }
            if (!n(k) && !n(k.dataPoint) && !n(k.dataPoint.y))
              if (k.dataSeries.axisY)
                if (0 < k.dataPoint.y.length) {
                  for (b = c = 0; b < k.dataPoint.y.length; b++)
                    k.dataPoint.y[b] < k.dataSeries.axisY.viewportMinimum
                      ? c--
                      : k.dataPoint.y[b] > k.dataSeries.axisY.viewportMaximum &&
                        c++;
                  c < k.dataPoint.y.length &&
                    c > -k.dataPoint.y.length &&
                    d.push(k);
                } else
                  "column" === e.type || "bar" === e.type
                    ? 0 > k.dataPoint.y
                      ? 0 > k.dataSeries.axisY.viewportMinimum &&
                        k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y &&
                        d.push(k)
                      : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y &&
                        0 <= k.dataSeries.axisY.viewportMaximum &&
                        d.push(k)
                    : "bubble" === e.type
                    ? ((c =
                        this.chart._eventManager.objectMap[
                          e.dataPointIds[k.index]
                        ].size / 2),
                      k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - c &&
                        k.dataPoint.y <=
                          k.dataSeries.axisY.viewportMaximum + c &&
                        d.push(k))
                    : "waterfall" === e.type
                    ? ((c = 0),
                      k.cumulativeSumYStartValue <
                      k.dataSeries.axisY.viewportMinimum
                        ? c--
                        : k.cumulativeSumYStartValue >
                            k.dataSeries.axisY.viewportMaximum && c++,
                      k.cumulativeSum < k.dataSeries.axisY.viewportMinimum
                        ? c--
                        : k.cumulativeSum >
                            k.dataSeries.axisY.viewportMaximum && c++,
                      2 > c && -2 < c && d.push(k))
                    : (0 <= k.dataSeries.type.indexOf("100") ||
                        "stackedColumn" === e.type ||
                        "stackedBar" === e.type ||
                        (k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum &&
                          k.dataPoint.y <=
                            k.dataSeries.axisY.viewportMaximum)) &&
                      d.push(k);
              else d.push(k);
          }
        }
        if (0 < d.length) {
          if ((this.highlightObjects(d), this.enabled)) {
            c = "";
            c = this.getToolTipInnerHTML({ entries: d });
            if (null !== c) {
              this.contentDiv.innerHTML = c;
              if (
                this.isToolTipDefinedInData &&
                n(this.options.content) &&
                n(this.options.contentFormatter)
              )
                for (
                  q = this.contentDiv.getElementsByTagName("span"), b = 0;
                  b < q.length;
                  b++
                )
                  q[b] && (q[b].style.color = q[b].getAttribute("data-color"));
              q = !1;
              "none" === this.container.style.display &&
                ((q = !0), (this.container.style.display = "block"));
              try {
                (this.contentDiv.style.background = this.backgroundColor
                  ? this.backgroundColor
                  : v
                  ? "rgba(255,255,255,.9)"
                  : "rgb(255,255,255)"),
                  (this.borderColor =
                    "waterfall" === d[0].dataSeries.type
                      ? (this.contentDiv.style.borderRightColor =
                          this.contentDiv.style.borderLeftColor =
                          this.contentDiv.style.borderColor =
                            this.options.borderColor
                              ? this.options.borderColor
                              : d[0].dataPoint.color
                              ? d[0].dataPoint.color
                              : 0 < d[0].dataPoint.y
                              ? d[0].dataSeries.risingColor
                              : d[0].dataSeries.fallingColor)
                      : "error" === d[0].dataSeries.type
                      ? (this.contentDiv.style.borderRightColor =
                          this.contentDiv.style.borderLeftColor =
                          this.contentDiv.style.borderColor =
                            this.options.borderColor
                              ? this.options.borderColor
                              : d[0].dataSeries.color
                              ? d[0].dataSeries.color
                              : d[0].dataSeries._colorSet[
                                  e.index % d[0].dataSeries._colorSet.length
                                ])
                      : (this.contentDiv.style.borderRightColor =
                          this.contentDiv.style.borderLeftColor =
                          this.contentDiv.style.borderColor =
                            this.options.borderColor
                              ? this.options.borderColor
                              : d[0].dataPoint.color
                              ? d[0].dataPoint.color
                              : d[0].dataSeries.color
                              ? d[0].dataSeries.color
                              : d[0].dataSeries._colorSet[
                                  d[0].index % d[0].dataSeries._colorSet.length
                                ])),
                  (this.contentDiv.style.borderWidth =
                    this.borderThickness || 0 === this.borderThickness
                      ? this.borderThickness + "px"
                      : "2px"),
                  (this.contentDiv.style.borderRadius =
                    this.cornerRadius || 0 === this.cornerRadius
                      ? this.cornerRadius + "px"
                      : "5px"),
                  (this.container.style.borderRadius =
                    this.contentDiv.style.borderRadius),
                  (this.contentDiv.style.fontSize =
                    this.fontSize || 0 === this.fontSize
                      ? this.fontSize + "px"
                      : "14px"),
                  (this.contentDiv.style.color = this.fontColor
                    ? this.fontColor
                    : "#000000"),
                  (this.contentDiv.style.fontFamily = this.fontFamily
                    ? this.fontFamily
                    : "Calibri, Arial, Georgia, serif;"),
                  (this.contentDiv.style.fontWeight = this.fontWeight
                    ? this.fontWeight
                    : "normal"),
                  (this.contentDiv.style.fontStyle = this.fontStyle
                    ? this.fontStyle
                    : v
                    ? "italic"
                    : "normal");
              } catch (l) {}
              "pie" === d[0].dataSeries.type ||
              "doughnut" === d[0].dataSeries.type ||
              "funnel" === d[0].dataSeries.type ||
              "pyramid" === d[0].dataSeries.type ||
              "bar" === d[0].dataSeries.type ||
              "rangeBar" === d[0].dataSeries.type ||
              "stackedBar" === d[0].dataSeries.type ||
              "stackedBar100" === d[0].dataSeries.type
                ? (a = a - 10 - this.container.clientWidth)
                : ((a =
                    (d[0].dataSeries.axisX.convertValueToPixel(
                      d[0].dataPoint.x
                    ) -
                      this.container.clientWidth) <<
                    0),
                  (a -= 10));
              0 > a && (a += this.container.clientWidth + 20);
              a + this.container.clientWidth >
                Math.max(this.chart.container.clientWidth, this.chart.width) &&
                (a = Math.max(
                  0,
                  Math.max(this.chart.container.clientWidth, this.chart.width) -
                    this.container.clientWidth
                ));
              g =
                1 !== d.length ||
                this.shared ||
                ("line" !== d[0].dataSeries.type &&
                  "stepLine" !== d[0].dataSeries.type &&
                  "spline" !== d[0].dataSeries.type &&
                  "area" !== d[0].dataSeries.type &&
                  "stepArea" !== d[0].dataSeries.type &&
                  "splineArea" !== d[0].dataSeries.type)
                  ? "bar" === d[0].dataSeries.type ||
                    "rangeBar" === d[0].dataSeries.type ||
                    "stackedBar" === d[0].dataSeries.type ||
                    "stackedBar100" === d[0].dataSeries.type
                    ? d[0].dataSeries.axisX.convertValueToPixel(
                        d[0].dataPoint.x
                      )
                    : g
                  : d[0].dataSeries.axisY.convertValueToPixel(d[0].dataPoint.y);
              g = -g + 10;
              0 < g + this.container.clientHeight + 5 &&
                (g -= g + this.container.clientHeight + 5 - 0);
              this.fixMozTransitionDelay(a, g);
              !this.animationEnabled || q
                ? this.disableAnimation()
                : (this.enableAnimation(),
                  (this.container.style.MozTransition =
                    this.mozContainerTransition));
              this.positionLeft = a;
              this.positionBottom = g;
              this.container.style.left = a + "px";
              this.container.style.bottom = g + "px";
            } else
              this.hide(!1),
                this.enabled &&
                  this.dispatchEvent(
                    "hidden",
                    { chart: this.chart, toolTip: this },
                    this
                  );
            g = [];
            for (b = 0; b < d.length; b++)
              g.push({
                xValue: d[b].dataPoint.x,
                dataPoint: d[b].dataPoint,
                dataSeries: d[b].dataSeries,
                dataPointIndex: d[b].index,
                dataSeriesIndex: d[b].dataSeries._index,
              });
            this._updatedEventParameters = {
              chart: this.chart,
              toolTip: this.options,
              content: c,
              entries: g,
            };
            this._entries = d;
          }
        } else
          this.hide(),
            this.enabled &&
              this.dispatchEvent(
                "hidden",
                { chart: this.chart, toolTip: this },
                this
              );
        this._dataSeriesIndex = this._xValue = null;
      }
    };
    na.prototype.highlightObjects = function (a) {
      var g = this.chart.overlaidCanvasCtx;
      n(this.chart.clearedOverlayedCanvas) ||
      "toolTip" === this.chart.clearedOverlayedCanvas
        ? (this.chart.resetOverlayedCanvas(),
          g.clearRect(0, 0, this.chart.width, this.chart.height),
          (this.chart.clearedOverlayedCanvas = "toolTip"))
        : (this.chart.clearedOverlayedCanvas = null);
      g.save();
      var c = this.chart.plotArea,
        b = 0;
      g.beginPath();
      g.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
      g.clip();
      for (c = 0; c < a.length; c++) {
        var e = a[c];
        if (
          (e =
            this.chart._eventManager.objectMap[
              e.dataSeries.dataPointIds[e.index]
            ]) &&
          e.objectType &&
          "dataPoint" === e.objectType
        ) {
          var b = this.chart.data[e.dataSeriesIndex],
            d = b.dataPoints[e.dataPointIndex],
            q = e.dataPointIndex;
          !1 === d.highlightEnabled ||
            (!0 !== b.highlightEnabled && !0 !== d.highlightEnabled) ||
            ("line" === b.type ||
            "stepLine" === b.type ||
            "spline" === b.type ||
            "scatter" === b.type ||
            "area" === b.type ||
            "stepArea" === b.type ||
            "splineArea" === b.type ||
            "stackedArea" === b.type ||
            "stackedArea100" === b.type ||
            "rangeArea" === b.type ||
            "rangeSplineArea" === b.type
              ? ((d = b.getMarkerProperties(
                  q,
                  e.x1,
                  e.y1,
                  this.chart.overlaidCanvasCtx
                )),
                (d.size = Math.max((1.5 * d.size) << 0, 10)),
                (d.borderColor = d.borderColor || "#FFFFFF"),
                (d.borderThickness =
                  d.borderThickness || Math.ceil(0.1 * d.size)),
                X.drawMarkers([d]),
                "undefined" !== typeof e.y2 &&
                  ((d = b.getMarkerProperties(
                    q,
                    e.x1,
                    e.y2,
                    this.chart.overlaidCanvasCtx
                  )),
                  (d.size = Math.max((1.5 * d.size) << 0, 10)),
                  (d.borderColor = d.borderColor || "#FFFFFF"),
                  (d.borderThickness =
                    d.borderThickness || Math.ceil(0.1 * d.size)),
                  X.drawMarkers([d])))
              : "bubble" === b.type
              ? ((d = b.getMarkerProperties(
                  q,
                  e.x1,
                  e.y1,
                  this.chart.overlaidCanvasCtx
                )),
                (d.size = e.size),
                (d.color = "white"),
                (d.borderColor = "white"),
                (g.globalAlpha = 0.3),
                X.drawMarkers([d]),
                (g.globalAlpha = 1))
              : "column" === b.type ||
                "stackedColumn" === b.type ||
                "stackedColumn100" === b.type ||
                "bar" === b.type ||
                "rangeBar" === b.type ||
                "stackedBar" === b.type ||
                "stackedBar100" === b.type ||
                "rangeColumn" === b.type ||
                "waterfall" === b.type
              ? ba(
                  g,
                  e.x1,
                  e.y1,
                  e.x2,
                  e.y2,
                  "white",
                  0,
                  null,
                  !1,
                  !1,
                  !1,
                  !1,
                  0.3
                )
              : "pie" === b.type || "doughnut" === b.type
              ? ia(
                  g,
                  e.center,
                  e.radius,
                  "white",
                  b.type,
                  e.startAngle,
                  e.endAngle,
                  0.3,
                  e.percentInnerRadius
                )
              : "funnel" === b.type || "pyramid" === b.type
              ? qa(g, e.funnelSection, 0.3, "white")
              : "candlestick" === b.type
              ? ((g.globalAlpha = 1),
                (g.strokeStyle = e.color),
                (g.lineWidth = 2 * e.borderThickness),
                (b = 0 === g.lineWidth % 2 ? 0 : 0.5),
                g.beginPath(),
                g.moveTo(e.x3 - b, Math.min(e.y2, e.y3)),
                g.lineTo(e.x3 - b, Math.min(e.y1, e.y4)),
                g.stroke(),
                g.beginPath(),
                g.moveTo(e.x3 - b, Math.max(e.y1, e.y4)),
                g.lineTo(e.x3 - b, Math.max(e.y2, e.y3)),
                g.stroke(),
                ba(
                  g,
                  e.x1,
                  Math.min(e.y1, e.y4),
                  e.x2,
                  Math.max(e.y1, e.y4),
                  "transparent",
                  2 * e.borderThickness,
                  e.color,
                  !1,
                  !1,
                  !1,
                  !1
                ),
                (g.globalAlpha = 1))
              : "ohlc" === b.type
              ? ((g.globalAlpha = 1),
                (g.strokeStyle = e.color),
                (g.lineWidth = 2 * e.borderThickness),
                (b = 0 === g.lineWidth % 2 ? 0 : 0.5),
                g.beginPath(),
                g.moveTo(e.x3 - b, e.y2),
                g.lineTo(e.x3 - b, e.y3),
                g.stroke(),
                g.beginPath(),
                g.moveTo(e.x3, e.y1),
                g.lineTo(e.x1, e.y1),
                g.stroke(),
                g.beginPath(),
                g.moveTo(e.x3, e.y4),
                g.lineTo(e.x2, e.y4),
                g.stroke(),
                (g.globalAlpha = 1))
              : "boxAndWhisker" === b.type
              ? (g.save(),
                (g.globalAlpha = 1),
                (g.strokeStyle = e.stemColor),
                (g.lineWidth = 2 * e.stemThickness),
                0 < e.stemThickness &&
                  (g.beginPath(),
                  g.moveTo(e.x3, e.y2 + e.borderThickness / 2),
                  g.lineTo(e.x3, e.y1 + e.whiskerThickness / 2),
                  g.stroke(),
                  g.beginPath(),
                  g.moveTo(e.x3, e.y4 - e.whiskerThickness / 2),
                  g.lineTo(e.x3, e.y3 - e.borderThickness / 2),
                  g.stroke()),
                g.beginPath(),
                ba(
                  g,
                  e.x1,
                  Math.max(e.y2, e.y3),
                  e.x2,
                  Math.min(e.y2, e.y3),
                  "transparent",
                  2 * e.borderThickness,
                  e.color,
                  !1,
                  !1,
                  !1,
                  !1
                ),
                (g.globalAlpha = 1),
                (g.strokeStyle = e.whiskerColor),
                (g.lineWidth = 2 * e.whiskerThickness),
                0 < e.whiskerThickness &&
                  (g.beginPath(),
                  g.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y4),
                  g.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4),
                  g.stroke(),
                  g.beginPath(),
                  g.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1),
                  g.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1),
                  g.stroke()),
                (g.globalAlpha = 1),
                (g.strokeStyle = e.lineColor),
                (g.lineWidth = 2 * e.lineThickness),
                0 < e.lineThickness &&
                  (g.beginPath(),
                  g.moveTo(e.x1, e.y5),
                  g.lineTo(e.x2, e.y5),
                  g.stroke()),
                g.restore(),
                (g.globalAlpha = 1))
              : "error" === b.type &&
                B(
                  g,
                  e.x1,
                  e.y1,
                  e.x2,
                  e.y2,
                  "white",
                  e.whiskerProperties,
                  e.stemProperties,
                  e.isXYSwapped,
                  0.3
                ));
        }
      }
      g.restore();
      g.globalAlpha = 1;
      g.beginPath();
    };
    na.prototype.getToolTipInnerHTML = function (a) {
      a = a.entries;
      var g = null,
        c = null,
        b = null,
        e = 0,
        d = "";
      this.isToolTipDefinedInData = !0;
      for (var q = 0; q < a.length; q++)
        if (a[q].dataSeries.toolTipContent || a[q].dataPoint.toolTipContent) {
          this.isToolTipDefinedInData = !1;
          break;
        }
      if (
        this.isToolTipDefinedInData &&
        ((this.content && "function" === typeof this.content) ||
          this.contentFormatter)
      )
        (a = { chart: this.chart, toolTip: this.options, entries: a }),
          (g = this.contentFormatter
            ? this.contentFormatter(a)
            : this.content(a));
      else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
        for (var m = null, n = "", q = 0; q < a.length; q++) {
          c = a[q].dataSeries;
          b = a[q].dataPoint;
          e = a[q].index;
          d = "";
          if (0 === q && this.isToolTipDefinedInData && !this.content) {
            this.chart.axisX && 0 < this.chart.axisX.length
              ? (n +=
                  "undefined" !== typeof this.chart.axisX[0].labels[b.x]
                    ? this.chart.axisX[0].labels[b.x]
                    : "{x}")
              : this.chart.axisX2 &&
                0 < this.chart.axisX2.length &&
                (n +=
                  "undefined" !== typeof this.chart.axisX2[0].labels[b.x]
                    ? this.chart.axisX2[0].labels[b.x]
                    : "{x}");
            n += "</br>";
            if (!c.visible) continue;
            n = this.chart.replaceKeywordsWithValue(n, b, c, e);
          }
          null === b.toolTipContent ||
            ("undefined" === typeof b.toolTipContent &&
              null === c.options.toolTipContent) ||
            ("line" === c.type ||
            "stepLine" === c.type ||
            "spline" === c.type ||
            "area" === c.type ||
            "stepArea" === c.type ||
            "splineArea" === c.type ||
            "column" === c.type ||
            "bar" === c.type ||
            "scatter" === c.type ||
            "stackedColumn" === c.type ||
            "stackedColumn100" === c.type ||
            "stackedBar" === c.type ||
            "stackedBar100" === c.type ||
            "stackedArea" === c.type ||
            "stackedArea100" === c.type ||
            "waterfall" === c.type
              ? (this.chart.axisX &&
                  1 < this.chart.axisX.length &&
                  (d +=
                    m != c.axisXIndex
                      ? c.axisX.title
                        ? c.axisX.title + "<br/>"
                        : "X:{axisXIndex}<br/>"
                      : ""),
                (d += b.toolTipContent
                  ? b.toolTipContent
                  : c.toolTipContent
                  ? c.toolTipContent
                  : this.content && "function" !== typeof this.content
                  ? this.content
                  : "<span data-color='\"" +
                    (this.options.fontColor ? "" : "'{color}'") +
                    "\"'>{name}:</span>&nbsp;&nbsp;{y}"),
                (m = c.axisXIndex))
              : "bubble" === c.type
              ? (this.chart.axisX &&
                  1 < this.chart.axisX.length &&
                  (d +=
                    m != c.axisXIndex
                      ? c.axisX.title
                        ? c.axisX.title + "<br/>"
                        : "X:{axisXIndex}<br/>"
                      : ""),
                (d += b.toolTipContent
                  ? b.toolTipContent
                  : c.toolTipContent
                  ? c.toolTipContent
                  : this.content && "function" !== typeof this.content
                  ? this.content
                  : "<span data-color='\"" +
                    (this.options.fontColor ? "" : "'{color}'") +
                    "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}"))
              : "rangeColumn" === c.type ||
                "rangeBar" === c.type ||
                "rangeArea" === c.type ||
                "rangeSplineArea" === c.type ||
                "error" === c.type
              ? (this.chart.axisX &&
                  1 < this.chart.axisX.length &&
                  (d +=
                    m != c.axisXIndex
                      ? c.axisX.title
                        ? c.axisX.title + "<br/>"
                        : "X:{axisXIndex}<br/>"
                      : ""),
                (d += b.toolTipContent
                  ? b.toolTipContent
                  : c.toolTipContent
                  ? c.toolTipContent
                  : this.content && "function" !== typeof this.content
                  ? this.content
                  : "<span data-color='\"" +
                    (this.options.fontColor ? "" : "'{color}'") +
                    "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}"))
              : "candlestick" === c.type || "ohlc" === c.type
              ? (this.chart.axisX &&
                  1 < this.chart.axisX.length &&
                  (d +=
                    m != c.axisXIndex
                      ? c.axisX.title
                        ? c.axisX.title + "<br/>"
                        : "X:{axisXIndex}<br/>"
                      : ""),
                (d += b.toolTipContent
                  ? b.toolTipContent
                  : c.toolTipContent
                  ? c.toolTipContent
                  : this.content && "function" !== typeof this.content
                  ? this.content
                  : "<span data-color='\"" +
                    (this.options.fontColor ? "" : "'{color}'") +
                    "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}"))
              : "boxAndWhisker" === c.type &&
                (this.chart.axisX &&
                  1 < this.chart.axisX.length &&
                  (d +=
                    m != c.axisXIndex
                      ? c.axisX.title
                        ? c.axisX.title + "<br/>"
                        : "X:{axisXIndex}<br/>"
                      : ""),
                (d += b.toolTipContent
                  ? b.toolTipContent
                  : c.toolTipContent
                  ? c.toolTipContent
                  : this.content && "function" !== typeof this.content
                  ? this.content
                  : "<span data-color='\"" +
                    (this.options.fontColor ? "" : "'{color}'") +
                    "\"'>{name}:</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}")),
            null === g && (g = ""),
            c.visible &&
              (!0 === this.reversed
                ? ((g = this.chart.replaceKeywordsWithValue(d, b, c, e) + g),
                  q < a.length - 1 && (g = "</br>" + g))
                : ((g += this.chart.replaceKeywordsWithValue(d, b, c, e)),
                  q < a.length - 1 && (g += "</br>"))));
        }
        null !== g && (g = n + g);
      } else {
        c = a[0].dataSeries;
        b = a[0].dataPoint;
        e = a[0].index;
        if (
          null === b.toolTipContent ||
          ("undefined" === typeof b.toolTipContent &&
            null === c.options.toolTipContent)
        )
          return null;
        "line" === c.type ||
        "stepLine" === c.type ||
        "spline" === c.type ||
        "area" === c.type ||
        "stepArea" === c.type ||
        "splineArea" === c.type ||
        "column" === c.type ||
        "bar" === c.type ||
        "scatter" === c.type ||
        "stackedColumn" === c.type ||
        "stackedColumn100" === c.type ||
        "stackedBar" === c.type ||
        "stackedBar100" === c.type ||
        "stackedArea" === c.type ||
        "stackedArea100" === c.type ||
        "waterfall" === c.type
          ? (d = b.toolTipContent
              ? b.toolTipContent
              : c.toolTipContent
              ? c.toolTipContent
              : this.content && "function" !== typeof this.content
              ? this.content
              : "<span data-color='\"" +
                (this.options.fontColor ? "" : "'{color}'") +
                "\"'>" +
                (b.label ? "{label}" : "{x}") +
                ":</span>&nbsp;&nbsp;{y}")
          : "bubble" === c.type
          ? (d = b.toolTipContent
              ? b.toolTipContent
              : c.toolTipContent
              ? c.toolTipContent
              : this.content && "function" !== typeof this.content
              ? this.content
              : "<span data-color='\"" +
                (this.options.fontColor ? "" : "'{color}'") +
                "\"'>" +
                (b.label ? "{label}" : "{x}") +
                ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}")
          : "pie" === c.type ||
            "doughnut" === c.type ||
            "funnel" === c.type ||
            "pyramid" === c.type
          ? (d = b.toolTipContent
              ? b.toolTipContent
              : c.toolTipContent
              ? c.toolTipContent
              : this.content && "function" !== typeof this.content
              ? this.content
              : "<span data-color='\"" +
                (this.options.fontColor ? "" : "'{color}'") +
                "\"'>" +
                (b.name
                  ? "{name}:</span>&nbsp;&nbsp;"
                  : b.label
                  ? "{label}:</span>&nbsp;&nbsp;"
                  : "</span>") +
                "{y}")
          : "rangeColumn" === c.type ||
            "rangeBar" === c.type ||
            "rangeArea" === c.type ||
            "rangeSplineArea" === c.type ||
            "error" === c.type
          ? (d = b.toolTipContent
              ? b.toolTipContent
              : c.toolTipContent
              ? c.toolTipContent
              : this.content && "function" !== typeof this.content
              ? this.content
              : "<span data-color='\"" +
                (this.options.fontColor ? "" : "'{color}'") +
                "\"'>" +
                (b.label ? "{label}" : "{x}") +
                " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}")
          : "candlestick" === c.type || "ohlc" === c.type
          ? (d = b.toolTipContent
              ? b.toolTipContent
              : c.toolTipContent
              ? c.toolTipContent
              : this.content && "function" !== typeof this.content
              ? this.content
              : "<span data-color='\"" +
                (this.options.fontColor ? "" : "'{color}'") +
                "\"'>" +
                (b.label ? "{label}" : "{x}") +
                "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}")
          : "boxAndWhisker" === c.type &&
            (d = b.toolTipContent
              ? b.toolTipContent
              : c.toolTipContent
              ? c.toolTipContent
              : this.content && "function" !== typeof this.content
              ? this.content
              : "<span data-color='\"" +
                (this.options.fontColor ? "" : "'{color}'") +
                "\"'>" +
                (b.label ? "{label}" : "{x}") +
                "</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
        null === g && (g = "");
        g += this.chart.replaceKeywordsWithValue(d, b, c, e);
      }
      return g;
    };
    na.prototype.enableAnimation = function () {
      if (!this.container.style.WebkitTransition) {
        var a = this.getContainerTransition(this.containerTransitionDuration);
        this.container.style.WebkitTransition = a;
        this.container.style.MsTransition = a;
        this.container.style.transition = a;
        this.container.style.MozTransition = this.mozContainerTransition;
      }
    };
    na.prototype.disableAnimation = function () {
      this.container.style.WebkitTransition &&
        ((this.container.style.WebkitTransition = ""),
        (this.container.style.MozTransition = ""),
        (this.container.style.MsTransition = ""),
        (this.container.style.transition = ""));
    };
    na.prototype.hide = function (a) {
      this.container &&
        ((this.container.style.display = "none"),
        (this.currentSeriesIndex = -1),
        (this._entries = this._dataSeriesIndex = this._xValue = null),
        (this._prevY = this._prevX = NaN),
        (this._updatedEventParameters = null),
        ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas());
    };
    na.prototype.show = function (a, d, c) {
      this._updateToolTip(a, d, "undefined" === typeof c ? !1 : c);
    };
    na.prototype.showAtIndex = function (a, d) {};
    na.prototype.showAtX = function (a, d) {
      if (!this.enabled) return !1;
      this.chart.clearedOverlayedCanvas = null;
      this._updateOptions();
      var c,
        b,
        e,
        h = [];
      e = !1;
      d = !n(d) && 0 <= d && d < this.chart.data.length ? d : 0;
      if (this.shared)
        for (var m = 0; m < this.chart.data.length; m++)
          (c = this.chart.data[m]),
            (b = c.getDataPointAtX(a, !1)) &&
              b.dataPoint &&
              !n(b.dataPoint.y) &&
              c.visible &&
              ((b.dataSeries = c),
              this.chart.data[d].axisX.convertValueToPixel(a) ===
                c.axisX.convertValueToPixel(b.dataPoint.x) && h.push(b));
      else
        (c = this.chart.data[d]),
          (b = c.getDataPointAtX(a, !1)) &&
            b.dataPoint &&
            !n(b.dataPoint.y) &&
            c.visible &&
            ((b.dataSeries = c), h.push(b));
      if (0 < h.length) {
        for (m = 0; m < h.length; m++)
          if (
            ((b = h[m]),
            (this.shared || 0 <= b.dataSeries.type.indexOf("100")) &&
              b.dataPoint.x >= b.dataSeries.axisX.viewportMinimum &&
              b.dataPoint.x <= b.dataSeries.axisX.viewportMaximum)
          ) {
            e = !1;
            break;
          } else if (
            b.dataPoint.x < b.dataSeries.axisX.viewportMinimum ||
            b.dataPoint.x > b.dataSeries.axisX.viewportMaximum ||
            b.dataPoint.y < b.dataSeries.axisY.viewportMinimum ||
            b.dataPoint.y > b.dataSeries.axisY.viewportMaximum
          )
            e = !0;
          else {
            e = !1;
            break;
          }
        if (e) return this.hide(), !1;
        this.highlightObjects(h);
        this._entries = h;
        m = "";
        m = this.getToolTipInnerHTML({ entries: h });
        if (null !== m) {
          this.contentDiv.innerHTML = m;
          if (
            this.isToolTipDefinedInData &&
            n(this.options.content) &&
            n(this.options.contentFormatter)
          )
            for (
              b = this.contentDiv.getElementsByTagName("span"), m = 0;
              m < b.length;
              m++
            )
              b[m] && (b[m].style.color = b[m].getAttribute("data-color"));
          m = !1;
          "none" === this.container.style.display &&
            ((m = !0), (this.container.style.display = "block"));
          try {
            (this.contentDiv.style.background = this.backgroundColor
              ? this.backgroundColor
              : v
              ? "rgba(255,255,255,.9)"
              : "rgb(255,255,255)"),
              (this.borderColor =
                "waterfall" === h[0].dataSeries.type
                  ? (this.contentDiv.style.borderRightColor =
                      this.contentDiv.style.borderLeftColor =
                      this.contentDiv.style.borderColor =
                        this.options.borderColor
                          ? this.options.borderColor
                          : h[0].dataPoint.color
                          ? h[0].dataPoint.color
                          : 0 < h[0].dataPoint.y
                          ? h[0].dataSeries.risingColor
                          : h[0].dataSeries.fallingColor)
                  : "error" === h[0].dataSeries.type
                  ? (this.contentDiv.style.borderRightColor =
                      this.contentDiv.style.borderLeftColor =
                      this.contentDiv.style.borderColor =
                        this.options.borderColor
                          ? this.options.borderColor
                          : h[0].dataSeries.color
                          ? h[0].dataSeries.color
                          : h[0].dataSeries._colorSet[
                              c.index % h[0].dataSeries._colorSet.length
                            ])
                  : (this.contentDiv.style.borderRightColor =
                      this.contentDiv.style.borderLeftColor =
                      this.contentDiv.style.borderColor =
                        this.options.borderColor
                          ? this.options.borderColor
                          : h[0].dataPoint.color
                          ? h[0].dataPoint.color
                          : h[0].dataSeries.color
                          ? h[0].dataSeries.color
                          : h[0].dataSeries._colorSet[
                              h[0].index % h[0].dataSeries._colorSet.length
                            ])),
              (this.contentDiv.style.borderWidth =
                this.borderThickness || 0 === this.borderThickness
                  ? this.borderThickness + "px"
                  : "2px"),
              (this.contentDiv.style.borderRadius =
                this.cornerRadius || 0 === this.cornerRadius
                  ? this.cornerRadius + "px"
                  : "5px"),
              (this.container.style.borderRadius =
                this.contentDiv.style.borderRadius),
              (this.contentDiv.style.fontSize =
                this.fontSize || 0 === this.fontSize
                  ? this.fontSize + "px"
                  : "14px"),
              (this.contentDiv.style.color = this.fontColor
                ? this.fontColor
                : "#000000"),
              (this.contentDiv.style.fontFamily = this.fontFamily
                ? this.fontFamily
                : "Calibri, Arial, Georgia, serif;"),
              (this.contentDiv.style.fontWeight = this.fontWeight
                ? this.fontWeight
                : "normal"),
              (this.contentDiv.style.fontStyle = this.fontStyle
                ? this.fontStyle
                : v
                ? "italic"
                : "normal");
          } catch (t) {}
          "pie" === h[0].dataSeries.type ||
          "doughnut" === h[0].dataSeries.type ||
          "funnel" === h[0].dataSeries.type ||
          "pyramid" === h[0].dataSeries.type
            ? (c = mouseX - 10 - this.container.clientWidth)
            : ((c =
                "bar" === h[0].dataSeries.type ||
                "rangeBar" === h[0].dataSeries.type ||
                "stackedBar" === h[0].dataSeries.type ||
                "stackedBar100" === h[0].dataSeries.type
                  ? (h[0].dataSeries.axisY.convertValueToPixel(
                      h[0].dataPoint.y
                    ) -
                      this.container.clientWidth) <<
                    0
                  : (h[0].dataSeries.axisX.convertValueToPixel(
                      h[0].dataPoint.x
                    ) -
                      this.container.clientWidth) <<
                    0),
              (c -= 10));
          0 > c && (c += this.container.clientWidth + 20);
          c + this.container.clientWidth >
            Math.max(this.chart.container.clientWidth, this.chart.width) &&
            (c = Math.max(
              0,
              Math.max(this.chart.container.clientWidth, this.chart.width) -
                this.container.clientWidth
            ));
          h =
            1 !== h.length ||
            this.shared ||
            ("line" !== h[0].dataSeries.type &&
              "stepLine" !== h[0].dataSeries.type &&
              "spline" !== h[0].dataSeries.type &&
              "area" !== h[0].dataSeries.type &&
              "stepArea" !== h[0].dataSeries.type &&
              "splineArea" !== h[0].dataSeries.type)
              ? "bar" === h[0].dataSeries.type ||
                "rangeBar" === h[0].dataSeries.type ||
                "stackedBar" === h[0].dataSeries.type ||
                "stackedBar100" === h[0].dataSeries.type
                ? h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x)
                : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y)
              : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y);
          h = -h + 10;
          0 < h + this.container.clientHeight + 5 &&
            (h -= h + this.container.clientHeight + 5 - 0);
          this.fixMozTransitionDelay(c, h);
          !this.animationEnabled || m
            ? this.disableAnimation()
            : (this.enableAnimation(),
              (this.container.style.MozTransition =
                this.mozContainerTransition));
          this.container.style.left = c + "px";
          this.container.style.bottom = h + "px";
        } else return this.hide(!1), !1;
      } else return this.hide(), !1;
      this._xValue = a;
      this._dataSeriesIndex = d;
      this._prevY = this._prevX = NaN;
      return !0;
    };
    na.prototype.fixMozTransitionDelay = function (a, d) {
      if (20 < this.chart._eventManager.lastObjectId)
        this.mozContainerTransition = this.getContainerTransition(0);
      else {
        var c = parseFloat(this.container.style.left),
          c = isNaN(c) ? 0 : c,
          b = parseFloat(this.container.style.bottom),
          b = isNaN(b) ? 0 : b;
        10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d, 2))
          ? (this.mozContainerTransition = this.getContainerTransition(0.1))
          : (this.mozContainerTransition = this.getContainerTransition(0));
      }
    };
    na.prototype.getContainerTransition = function (a) {
      return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s";
    };
    ha.prototype.reset = function () {
      this.lastObjectId = 0;
      this.objectMap = [];
      this.rectangularRegionEventSubscriptions = [];
      this.previousDataPointEventObject = null;
      this.eventObjects = [];
      v &&
        (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height),
        this.ghostCtx.beginPath());
    };
    ha.prototype.getNewObjectTrackingId = function () {
      return ++this.lastObjectId;
    };
    ha.prototype.mouseEventHandler = function (a) {
      if ("mousemove" === a.type || "click" === a.type) {
        var d = [],
          c = Pa(a),
          b = null;
        if (
          (b = this.chart.getObjectAtXY(c.x, c.y, !1)) &&
          "undefined" !== typeof this.objectMap[b]
        )
          if (((b = this.objectMap[b]), "dataPoint" === b.objectType)) {
            var e = this.chart.data[b.dataSeriesIndex],
              h = e.dataPoints[b.dataPointIndex],
              m = b.dataPointIndex;
            b.eventParameter = {
              x: c.x,
              y: c.y,
              dataPoint: h,
              dataSeries: e.options,
              dataPointIndex: m,
              dataSeriesIndex: e.index,
              chart: this.chart,
            };
            b.eventContext = {
              context: h,
              userContext: h,
              mouseover: "mouseover",
              mousemove: "mousemove",
              mouseout: "mouseout",
              click: "click",
            };
            d.push(b);
            b = this.objectMap[e.id];
            b.eventParameter = {
              x: c.x,
              y: c.y,
              dataPoint: h,
              dataSeries: e.options,
              dataPointIndex: m,
              dataSeriesIndex: e.index,
              chart: this.chart,
            };
            b.eventContext = {
              context: e,
              userContext: e.options,
              mouseover: "mouseover",
              mousemove: "mousemove",
              mouseout: "mouseout",
              click: "click",
            };
            d.push(this.objectMap[e.id]);
          } else
            "legendItem" === b.objectType &&
              ((e = this.chart.data[b.dataSeriesIndex]),
              (h =
                null !== b.dataPointIndex
                  ? e.dataPoints[b.dataPointIndex]
                  : null),
              (b.eventParameter = {
                x: c.x,
                y: c.y,
                dataSeries: e.options,
                dataPoint: h,
                dataPointIndex: b.dataPointIndex,
                dataSeriesIndex: b.dataSeriesIndex,
                chart: this.chart,
              }),
              (b.eventContext = {
                context: this.chart.legend,
                userContext: this.chart.legend.options,
                mouseover: "itemmouseover",
                mousemove: "itemmousemove",
                mouseout: "itemmouseout",
                click: "itemclick",
              }),
              d.push(b));
        e = [];
        for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
          h = !0;
          for (b = 0; b < d.length; b++)
            if (d[b].id === this.mouseoveredObjectMaps[c].id) {
              h = !1;
              break;
            }
          h
            ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a)
            : e.push(this.mouseoveredObjectMaps[c]);
        }
        this.mouseoveredObjectMaps = e;
        for (c = 0; c < d.length; c++) {
          e = !1;
          for (b = 0; b < this.mouseoveredObjectMaps.length; b++)
            if (d[c].id === this.mouseoveredObjectMaps[b].id) {
              e = !0;
              break;
            }
          e ||
            (this.fireEvent(d[c], "mouseover", a),
            this.mouseoveredObjectMaps.push(d[c]));
          "click" === a.type
            ? this.fireEvent(d[c], "click", a)
            : "mousemove" === a.type && this.fireEvent(d[c], "mousemove", a);
        }
      }
    };
    ha.prototype.fireEvent = function (a, d, c) {
      if (a && d) {
        var b = a.eventParameter,
          e = a.eventContext,
          h = a.eventContext.userContext;
        h && e && h[e[d]] && h[e[d]].call(h, b);
        "mouseout" !== d
          ? h.cursor &&
            h.cursor !== c.target.style.cursor &&
            (c.target.style.cursor = h.cursor)
          : ((c.target.style.cursor = this.chart.panEnabled
              ? "itemmouseout" !== e.mouseout || h.dockInsidePlotArea
                ? "move"
                : this.chart._defaultCursor
              : this.chart._defaultCursor),
            delete a.eventParameter,
            delete a.eventContext);
        "click" === d &&
          "dataPoint" === a.objectType &&
          this.chart.pieDoughnutClickHandler &&
          this.chart.pieDoughnutClickHandler.call(
            this.chart.data[a.dataSeriesIndex],
            b
          );
        "click" === d &&
          "dataPoint" === a.objectType &&
          this.chart.funnelPyramidClickHandler &&
          this.chart.funnelPyramidClickHandler.call(
            this.chart.data[a.dataSeriesIndex],
            b
          );
      }
    };
    W.prototype.animate = function (a, d, c, b, e) {
      var h = this;
      this.chart.isAnimating = !0;
      e = e || L.easing.linear;
      c &&
        this.animations.push({
          startTime: new Date().getTime() + (a ? a : 0),
          duration: d,
          animationCallback: c,
          onComplete: b,
        });
      for (a = []; 0 < this.animations.length; )
        if (
          ((d = this.animations.shift()),
          (c = new Date().getTime()),
          (b = 0),
          d.startTime <= c &&
            ((b = e(Math.min(c - d.startTime, d.duration), 0, 1, d.duration)),
            (b = Math.min(b, 1)),
            isNaN(b) || !isFinite(b)) &&
            (b = 1),
          1 > b && a.push(d),
          d.animationCallback(b),
          1 <= b && d.onComplete)
        )
          d.onComplete();
      this.animations = a;
      0 < this.animations.length
        ? (this.animationRequestId = this.chart.requestAnimFrame.call(
            window,
            function () {
              h.animate.call(h);
            }
          ))
        : (this.chart.isAnimating = !1);
    };
    W.prototype.cancelAllAnimations = function () {
      this.animations = [];
      this.animationRequestId &&
        this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
      this.animationRequestId = null;
      this.chart.isAnimating = !1;
    };
    var L = {
        yScaleAnimation: function (a, d) {
          if (0 !== a) {
            var c = d.dest,
              b = d.source.canvas,
              e = d.animationBase;
            c.drawImage(
              b,
              0,
              0,
              b.width,
              b.height,
              0,
              e - e * a,
              c.canvas.width / la,
              (a * c.canvas.height) / la
            );
          }
        },
        xScaleAnimation: function (a, d) {
          if (0 !== a) {
            var c = d.dest,
              b = d.source.canvas,
              e = d.animationBase;
            c.drawImage(
              b,
              0,
              0,
              b.width,
              b.height,
              e - e * a,
              0,
              (a * c.canvas.width) / la,
              c.canvas.height / la
            );
          }
        },
        xClipAnimation: function (a, d) {
          if (0 !== a) {
            var c = d.dest,
              b = d.source.canvas;
            c.save();
            0 < a &&
              c.drawImage(
                b,
                0,
                0,
                b.width * a,
                b.height,
                0,
                0,
                (b.width * a) / la,
                b.height / la
              );
            c.restore();
          }
        },
        fadeInAnimation: function (a, d) {
          if (0 !== a) {
            var c = d.dest,
              b = d.source.canvas;
            c.save();
            c.globalAlpha = a;
            c.drawImage(
              b,
              0,
              0,
              b.width,
              b.height,
              0,
              0,
              c.canvas.width / la,
              c.canvas.height / la
            );
            c.restore();
          }
        },
        easing: {
          linear: function (a, d, c, b) {
            return (c * a) / b + d;
          },
          easeOutQuad: function (a, d, c, b) {
            return -c * (a /= b) * (a - 2) + d;
          },
          easeOutQuart: function (a, d, c, b) {
            return -c * ((a = a / b - 1) * a * a * a - 1) + d;
          },
          easeInQuad: function (a, d, c, b) {
            return c * (a /= b) * a + d;
          },
          easeInQuart: function (a, d, c, b) {
            return c * (a /= b) * a * a * a + d;
          },
        },
      },
      X = {
        drawMarker: function (a, d, c, b, e, h, m, n) {
          if (c) {
            var t = 1;
            c.fillStyle = h ? h : "#000000";
            c.strokeStyle = m ? m : "#000000";
            c.lineWidth = n ? n : 0;
            c.setLineDash && c.setLineDash(G("solid", n));
            "circle" === b
              ? (c.moveTo(a, d),
                c.beginPath(),
                c.arc(a, d, e / 2, 0, 2 * Math.PI, !1),
                h && c.fill(),
                n &&
                  (m
                    ? c.stroke()
                    : ((t = c.globalAlpha),
                      (c.globalAlpha = 0.15),
                      (c.strokeStyle = "black"),
                      c.stroke(),
                      (c.globalAlpha = t))))
              : "square" === b
              ? (c.beginPath(),
                c.rect(a - e / 2, d - e / 2, e, e),
                h && c.fill(),
                n &&
                  (m
                    ? c.stroke()
                    : ((t = c.globalAlpha),
                      (c.globalAlpha = 0.15),
                      (c.strokeStyle = "black"),
                      c.stroke(),
                      (c.globalAlpha = t))))
              : "triangle" === b
              ? (c.beginPath(),
                c.moveTo(a - e / 2, d + e / 2),
                c.lineTo(a + e / 2, d + e / 2),
                c.lineTo(a, d - e / 2),
                c.closePath(),
                h && c.fill(),
                n &&
                  (m
                    ? c.stroke()
                    : ((t = c.globalAlpha),
                      (c.globalAlpha = 0.15),
                      (c.strokeStyle = "black"),
                      c.stroke(),
                      (c.globalAlpha = t))),
                c.beginPath())
              : "cross" === b &&
                ((c.strokeStyle = h),
                (c.lineWidth = e / 4),
                c.beginPath(),
                c.moveTo(a - e / 2, d - e / 2),
                c.lineTo(a + e / 2, d + e / 2),
                c.stroke(),
                c.moveTo(a + e / 2, d - e / 2),
                c.lineTo(a - e / 2, d + e / 2),
                c.stroke());
          }
        },
        drawMarkers: function (a) {
          for (var d = 0; d < a.length; d++) {
            var c = a[d];
            X.drawMarker(
              c.x,
              c.y,
              c.ctx,
              c.type,
              c.size,
              c.color,
              c.borderColor,
              c.borderThickness
            );
          }
        },
      };
    return m;
  })();
  t.version = "v3.10.1 GA";
  window.CanvasJS && t && !window.CanvasJS.Chart && (window.CanvasJS.Chart = t);
})();

/*
      excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.
    
      Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
      Licensed under the Apache License, Version 2.0
    */
document.createElement("canvas").getContext ||
  (function () {
    function V() {
      return this.context_ || (this.context_ = new C(this));
    }
    function W(a, b, c) {
      var g = M.call(arguments, 2);
      return function () {
        return a.apply(b, g.concat(M.call(arguments)));
      };
    }
    function N(a) {
      return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
    }
    function O(a) {
      a.namespaces.g_vml_ ||
        a.namespaces.add(
          "g_vml_",
          "urn:schemas-microsoft-com:vml",
          "#default#VML"
        );
      a.namespaces.g_o_ ||
        a.namespaces.add(
          "g_o_",
          "urn:schemas-microsoft-com:office:office",
          "#default#VML"
        );
      a.styleSheets.ex_canvas_ ||
        ((a = a.createStyleSheet()),
        (a.owningElement.id = "ex_canvas_"),
        (a.cssText =
          "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"));
    }
    function X(a) {
      var b = a.srcElement;
      switch (a.propertyName) {
        case "width":
          b.getContext().clearRect();
          b.style.width = b.attributes.width.nodeValue + "px";
          b.firstChild.style.width = b.clientWidth + "px";
          break;
        case "height":
          b.getContext().clearRect(),
            (b.style.height = b.attributes.height.nodeValue + "px"),
            (b.firstChild.style.height = b.clientHeight + "px");
      }
    }
    function Y(a) {
      a = a.srcElement;
      a.firstChild &&
        ((a.firstChild.style.width = a.clientWidth + "px"),
        (a.firstChild.style.height = a.clientHeight + "px"));
    }
    function D() {
      return [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ];
    }
    function t(a, b) {
      for (var c = D(), g = 0; 3 > g; g++)
        for (var e = 0; 3 > e; e++) {
          for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
          c[g][e] = f;
        }
      return c;
    }
    function P(a, b) {
      b.fillStyle = a.fillStyle;
      b.lineCap = a.lineCap;
      b.lineJoin = a.lineJoin;
      b.lineWidth = a.lineWidth;
      b.miterLimit = a.miterLimit;
      b.shadowBlur = a.shadowBlur;
      b.shadowColor = a.shadowColor;
      b.shadowOffsetX = a.shadowOffsetX;
      b.shadowOffsetY = a.shadowOffsetY;
      b.strokeStyle = a.strokeStyle;
      b.globalAlpha = a.globalAlpha;
      b.font = a.font;
      b.textAlign = a.textAlign;
      b.textBaseline = a.textBaseline;
      b.arcScaleX_ = a.arcScaleX_;
      b.arcScaleY_ = a.arcScaleY_;
      b.lineScale_ = a.lineScale_;
    }
    function Q(a) {
      var b = a.indexOf("(", 3),
        c = a.indexOf(")", b + 1),
        b = a.substring(b + 1, c).split(",");
      if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
      return b;
    }
    function E(a, b, c) {
      return Math.min(c, Math.max(b, a));
    }
    function F(a, b, c) {
      0 > c && c++;
      1 < c && c--;
      return 1 > 6 * c
        ? a + 6 * (b - a) * c
        : 1 > 2 * c
        ? b
        : 2 > 3 * c
        ? a + 6 * (b - a) * (2 / 3 - c)
        : a;
    }
    function G(a) {
      if (a in H) return H[a];
      var b,
        c = 1;
      a = String(a);
      if ("#" == a.charAt(0)) b = a;
      else if (/^rgb/.test(a)) {
        c = Q(a);
        b = "#";
        for (var g, e = 0; 3 > e; e++)
          (g =
            -1 != c[e].indexOf("%")
              ? Math.floor(255 * (parseFloat(c[e]) / 100))
              : +c[e]),
            (b += v[E(g, 0, 255)]);
        c = +c[3];
      } else if (/^hsl/.test(a)) {
        e = c = Q(a);
        b = (parseFloat(e[0]) / 360) % 360;
        0 > b && b++;
        g = E(parseFloat(e[1]) / 100, 0, 1);
        e = E(parseFloat(e[2]) / 100, 0, 1);
        if (0 == g) g = e = b = e;
        else {
          var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
            d = 2 * e - f;
          g = F(d, f, b + 1 / 3);
          e = F(d, f, b);
          b = F(d, f, b - 1 / 3);
        }
        b =
          "#" +
          v[Math.floor(255 * g)] +
          v[Math.floor(255 * e)] +
          v[Math.floor(255 * b)];
        c = c[3];
      } else b = Z[a] || a;
      return (H[a] = { color: b, alpha: c });
    }
    function C(a) {
      this.m_ = D();
      this.mStack_ = [];
      this.aStack_ = [];
      this.currentPath_ = [];
      this.fillStyle = this.strokeStyle = "#000";
      this.lineWidth = 1;
      this.lineJoin = "miter";
      this.lineCap = "butt";
      this.miterLimit = 1 * q;
      this.globalAlpha = 1;
      this.font = "10px sans-serif";
      this.textAlign = "left";
      this.textBaseline = "alphabetic";
      this.canvas = a;
      var b =
          "width:" +
          a.clientWidth +
          "px;height:" +
          a.clientHeight +
          "px;overflow:hidden;position:absolute",
        c = a.ownerDocument.createElement("div");
      c.style.cssText = b;
      a.appendChild(c);
      b = c.cloneNode(!1);
      b.style.backgroundColor = "red";
      b.style.filter = "alpha(opacity=0)";
      a.appendChild(b);
      this.element_ = c;
      this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1;
    }
    function R(a, b, c, g) {
      a.currentPath_.push({
        type: "bezierCurveTo",
        cp1x: b.x,
        cp1y: b.y,
        cp2x: c.x,
        cp2y: c.y,
        x: g.x,
        y: g.y,
      });
      a.currentX_ = g.x;
      a.currentY_ = g.y;
    }
    function S(a, b) {
      var c = G(a.strokeStyle),
        g = c.color,
        c = c.alpha * a.globalAlpha,
        e = a.lineScale_ * a.lineWidth;
      1 > e && (c *= e);
      b.push(
        "<g_vml_:stroke",
        ' opacity="',
        c,
        '"',
        ' joinstyle="',
        a.lineJoin,
        '"',
        ' miterlimit="',
        a.miterLimit,
        '"',
        ' endcap="',
        $[a.lineCap] || "square",
        '"',
        ' weight="',
        e,
        'px"',
        ' color="',
        g,
        '" />'
      );
    }
    function T(a, b, c, g) {
      var e = a.fillStyle,
        f = a.arcScaleX_,
        d = a.arcScaleY_,
        k = g.x - c.x,
        n = g.y - c.y;
      if (e instanceof w) {
        var h = 0,
          l = (g = 0),
          u = 0,
          m = 1;
        if ("gradient" == e.type_) {
          h = e.x1_ / f;
          c = e.y1_ / d;
          var p = s(a, e.x0_ / f, e.y0_ / d),
            h = s(a, h, c),
            h = (180 * Math.atan2(h.x - p.x, h.y - p.y)) / Math.PI;
          0 > h && (h += 360);
          1e-6 > h && (h = 0);
        } else
          (p = s(a, e.x0_, e.y0_)),
            (g = (p.x - c.x) / k),
            (l = (p.y - c.y) / n),
            (k /= f * q),
            (n /= d * q),
            (m = x.max(k, n)),
            (u = (2 * e.r0_) / m),
            (m = (2 * e.r1_) / m - u);
        f = e.colors_;
        f.sort(function (a, b) {
          return a.offset - b.offset;
        });
        d = f.length;
        p = f[0].color;
        c = f[d - 1].color;
        k = f[0].alpha * a.globalAlpha;
        a = f[d - 1].alpha * a.globalAlpha;
        for (var n = [], r = 0; r < d; r++) {
          var t = f[r];
          n.push(t.offset * m + u + " " + t.color);
        }
        b.push(
          '<g_vml_:fill type="',
          e.type_,
          '"',
          ' method="none" focus="100%"',
          ' color="',
          p,
          '"',
          ' color2="',
          c,
          '"',
          ' colors="',
          n.join(","),
          '"',
          ' opacity="',
          a,
          '"',
          ' g_o_:opacity2="',
          k,
          '"',
          ' angle="',
          h,
          '"',
          ' focusposition="',
          g,
          ",",
          l,
          '" />'
        );
      } else
        e instanceof I
          ? k &&
            n &&
            b.push(
              "<g_vml_:fill",
              ' position="',
              (-c.x / k) * f * f,
              ",",
              (-c.y / n) * d * d,
              '"',
              ' type="tile"',
              ' src="',
              e.src_,
              '" />'
            )
          : ((e = G(a.fillStyle)),
            b.push(
              '<g_vml_:fill color="',
              e.color,
              '" opacity="',
              e.alpha * a.globalAlpha,
              '" />'
            ));
    }
    function s(a, b, c) {
      a = a.m_;
      return {
        x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
        y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r,
      };
    }
    function z(a, b, c) {
      isFinite(b[0][0]) &&
        isFinite(b[0][1]) &&
        isFinite(b[1][0]) &&
        isFinite(b[1][1]) &&
        isFinite(b[2][0]) &&
        isFinite(b[2][1]) &&
        ((a.m_ = b),
        c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))));
    }
    function w(a) {
      this.type_ = a;
      this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
      this.colors_ = [];
    }
    function I(a, b) {
      if (!a || 1 != a.nodeType || "IMG" != a.tagName)
        throw new A("TYPE_MISMATCH_ERR");
      if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
      switch (b) {
        case "repeat":
        case null:
        case "":
          this.repetition_ = "repeat";
          break;
        case "repeat-x":
        case "repeat-y":
        case "no-repeat":
          this.repetition_ = b;
          break;
        default:
          throw new A("SYNTAX_ERR");
      }
      this.src_ = a.src;
      this.width_ = a.width;
      this.height_ = a.height;
    }
    function A(a) {
      this.code = this[a];
      this.message = a + ": DOM Exception " + this.code;
    }
    var x = Math,
      k = x.round,
      J = x.sin,
      K = x.cos,
      ba = x.abs,
      aa = x.sqrt,
      q = 10,
      r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
      init: function (a) {
        a = a || document;
        a.createElement("canvas");
        a.attachEvent("onreadystatechange", W(this.init_, this, a));
      },
      init_: function (a) {
        a = a.getElementsByTagName("canvas");
        for (var b = 0; b < a.length; b++) this.initElement(a[b]);
      },
      initElement: function (a) {
        if (!a.getContext) {
          a.getContext = V;
          O(a.ownerDocument);
          a.innerHTML = "";
          a.attachEvent("onpropertychange", X);
          a.attachEvent("onresize", Y);
          var b = a.attributes;
          b.width && b.width.specified
            ? (a.style.width = b.width.nodeValue + "px")
            : (a.width = a.clientWidth);
          b.height && b.height.specified
            ? (a.style.height = b.height.nodeValue + "px")
            : (a.height = a.clientHeight);
        }
        return a;
      },
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
      for (var B = 0; 16 > B; B++)
        v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32",
      },
      H = {},
      L = {},
      $ = { butt: "flat", round: "round" },
      d = C.prototype;
    d.clearRect = function () {
      this.textMeasureEl_ &&
        (this.textMeasureEl_.removeNode(!0), (this.textMeasureEl_ = null));
      this.element_.innerHTML = "";
    };
    d.beginPath = function () {
      this.currentPath_ = [];
    };
    d.moveTo = function (a, b) {
      var c = s(this, a, b);
      this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
      this.currentX_ = c.x;
      this.currentY_ = c.y;
    };
    d.lineTo = function (a, b) {
      var c = s(this, a, b);
      this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
      this.currentX_ = c.x;
      this.currentY_ = c.y;
    };
    d.bezierCurveTo = function (a, b, c, g, e, f) {
      e = s(this, e, f);
      a = s(this, a, b);
      c = s(this, c, g);
      R(this, a, c, e);
    };
    d.quadraticCurveTo = function (a, b, c, g) {
      a = s(this, a, b);
      c = s(this, c, g);
      g = {
        x: this.currentX_ + (2 / 3) * (a.x - this.currentX_),
        y: this.currentY_ + (2 / 3) * (a.y - this.currentY_),
      };
      R(
        this,
        g,
        {
          x: g.x + (c.x - this.currentX_) / 3,
          y: g.y + (c.y - this.currentY_) / 3,
        },
        c
      );
    };
    d.arc = function (a, b, c, g, e, f) {
      c *= q;
      var d = f ? "at" : "wa",
        k = a + K(g) * c - r,
        n = b + J(g) * c - r;
      g = a + K(e) * c - r;
      e = b + J(e) * c - r;
      k != g || f || (k += 0.125);
      a = s(this, a, b);
      k = s(this, k, n);
      g = s(this, g, e);
      this.currentPath_.push({
        type: d,
        x: a.x,
        y: a.y,
        radius: c,
        xStart: k.x,
        yStart: k.y,
        xEnd: g.x,
        yEnd: g.y,
      });
    };
    d.rect = function (a, b, c, g) {
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a + c, b + g);
      this.lineTo(a, b + g);
      this.closePath();
    };
    d.strokeRect = function (a, b, c, g) {
      var e = this.currentPath_;
      this.beginPath();
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a + c, b + g);
      this.lineTo(a, b + g);
      this.closePath();
      this.stroke();
      this.currentPath_ = e;
    };
    d.fillRect = function (a, b, c, g) {
      var e = this.currentPath_;
      this.beginPath();
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a + c, b + g);
      this.lineTo(a, b + g);
      this.closePath();
      this.fill();
      this.currentPath_ = e;
    };
    d.createLinearGradient = function (a, b, c, g) {
      var e = new w("gradient");
      e.x0_ = a;
      e.y0_ = b;
      e.x1_ = c;
      e.y1_ = g;
      return e;
    };
    d.createRadialGradient = function (a, b, c, g, e, f) {
      var d = new w("gradientradial");
      d.x0_ = a;
      d.y0_ = b;
      d.r0_ = c;
      d.x1_ = g;
      d.y1_ = e;
      d.r1_ = f;
      return d;
    };
    d.drawImage = function (a, b) {
      var c, g, e, d, r, y, n, h;
      e = a.runtimeStyle.width;
      d = a.runtimeStyle.height;
      a.runtimeStyle.width = "auto";
      a.runtimeStyle.height = "auto";
      var l = a.width,
        u = a.height;
      a.runtimeStyle.width = e;
      a.runtimeStyle.height = d;
      if (3 == arguments.length)
        (c = arguments[1]),
          (g = arguments[2]),
          (r = y = 0),
          (n = e = l),
          (h = d = u);
      else if (5 == arguments.length)
        (c = arguments[1]),
          (g = arguments[2]),
          (e = arguments[3]),
          (d = arguments[4]),
          (r = y = 0),
          (n = l),
          (h = u);
      else if (9 == arguments.length)
        (r = arguments[1]),
          (y = arguments[2]),
          (n = arguments[3]),
          (h = arguments[4]),
          (c = arguments[5]),
          (g = arguments[6]),
          (e = arguments[7]),
          (d = arguments[8]);
      else throw Error("Invalid number of arguments");
      var m = s(this, c, g),
        p = [];
      p.push(
        " <g_vml_:group",
        ' coordsize="',
        10 * q,
        ",",
        10 * q,
        '"',
        ' coordorigin="0,0"',
        ' style="width:',
        10,
        "px;height:",
        10,
        "px;position:absolute;"
      );
      if (
        1 != this.m_[0][0] ||
        this.m_[0][1] ||
        1 != this.m_[1][1] ||
        this.m_[1][0]
      ) {
        var t = [];
        t.push(
          "M11=",
          this.m_[0][0],
          ",",
          "M12=",
          this.m_[1][0],
          ",",
          "M21=",
          this.m_[0][1],
          ",",
          "M22=",
          this.m_[1][1],
          ",",
          "Dx=",
          k(m.x / q),
          ",",
          "Dy=",
          k(m.y / q),
          ""
        );
        var v = s(this, c + e, g),
          w = s(this, c, g + d);
        c = s(this, c + e, g + d);
        m.x = x.max(m.x, v.x, w.x, c.x);
        m.y = x.max(m.y, v.y, w.y, c.y);
        p.push(
          "padding:0 ",
          k(m.x / q),
          "px ",
          k(m.y / q),
          "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",
          t.join(""),
          ", sizingmethod='clip');"
        );
      } else p.push("top:", k(m.y / q), "px;left:", k(m.x / q), "px;");
      p.push(
        ' ">',
        '<g_vml_:image src="',
        a.src,
        '"',
        ' style="width:',
        q * e,
        "px;",
        " height:",
        q * d,
        'px"',
        ' cropleft="',
        r / l,
        '"',
        ' croptop="',
        y / u,
        '"',
        ' cropright="',
        (l - r - n) / l,
        '"',
        ' cropbottom="',
        (u - y - h) / u,
        '"',
        " />",
        "</g_vml_:group>"
      );
      this.element_.insertAdjacentHTML("BeforeEnd", p.join(""));
    };
    d.stroke = function (a) {
      var b = [];
      b.push(
        "<g_vml_:shape",
        ' filled="',
        !!a,
        '"',
        ' style="position:absolute;width:',
        10,
        "px;height:",
        10,
        'px;"',
        ' coordorigin="0,0"',
        ' coordsize="',
        10 * q,
        ",",
        10 * q,
        '"',
        ' stroked="',
        !a,
        '"',
        ' path="'
      );
      for (
        var c = { x: null, y: null }, d = { x: null, y: null }, e = 0;
        e < this.currentPath_.length;
        e++
      ) {
        var f = this.currentPath_[e];
        switch (f.type) {
          case "moveTo":
            b.push(" m ", k(f.x), ",", k(f.y));
            break;
          case "lineTo":
            b.push(" l ", k(f.x), ",", k(f.y));
            break;
          case "close":
            b.push(" x ");
            f = null;
            break;
          case "bezierCurveTo":
            b.push(
              " c ",
              k(f.cp1x),
              ",",
              k(f.cp1y),
              ",",
              k(f.cp2x),
              ",",
              k(f.cp2y),
              ",",
              k(f.x),
              ",",
              k(f.y)
            );
            break;
          case "at":
          case "wa":
            b.push(
              " ",
              f.type,
              " ",
              k(f.x - this.arcScaleX_ * f.radius),
              ",",
              k(f.y - this.arcScaleY_ * f.radius),
              " ",
              k(f.x + this.arcScaleX_ * f.radius),
              ",",
              k(f.y + this.arcScaleY_ * f.radius),
              " ",
              k(f.xStart),
              ",",
              k(f.yStart),
              " ",
              k(f.xEnd),
              ",",
              k(f.yEnd)
            );
        }
        if (f) {
          if (null == c.x || f.x < c.x) c.x = f.x;
          if (null == d.x || f.x > d.x) d.x = f.x;
          if (null == c.y || f.y < c.y) c.y = f.y;
          if (null == d.y || f.y > d.y) d.y = f.y;
        }
      }
      b.push(' ">');
      a ? T(this, b, c, d) : S(this, b);
      b.push("</g_vml_:shape>");
      this.element_.insertAdjacentHTML("beforeEnd", b.join(""));
    };
    d.fill = function () {
      this.stroke(!0);
    };
    d.closePath = function () {
      this.currentPath_.push({ type: "close" });
    };
    d.save = function () {
      var a = {};
      P(this, a);
      this.aStack_.push(a);
      this.mStack_.push(this.m_);
      this.m_ = t(D(), this.m_);
    };
    d.restore = function () {
      this.aStack_.length &&
        (P(this.aStack_.pop(), this), (this.m_ = this.mStack_.pop()));
    };
    d.translate = function (a, b) {
      z(
        this,
        t(
          [
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1],
          ],
          this.m_
        ),
        !1
      );
    };
    d.rotate = function (a) {
      var b = K(a);
      a = J(a);
      z(
        this,
        t(
          [
            [b, a, 0],
            [-a, b, 0],
            [0, 0, 1],
          ],
          this.m_
        ),
        !1
      );
    };
    d.scale = function (a, b) {
      this.arcScaleX_ *= a;
      this.arcScaleY_ *= b;
      z(
        this,
        t(
          [
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1],
          ],
          this.m_
        ),
        !0
      );
    };
    d.transform = function (a, b, c, d, e, f) {
      z(
        this,
        t(
          [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1],
          ],
          this.m_
        ),
        !0
      );
    };
    d.setTransform = function (a, b, c, d, e, f) {
      z(
        this,
        [
          [a, b, 0],
          [c, d, 0],
          [e, f, 1],
        ],
        !0
      );
    };
    d.drawText_ = function (a, b, c, d, e) {
      var f = this.m_;
      d = 0;
      var r = 1e3,
        t = 0,
        n = [],
        h;
      h = this.font;
      if (L[h]) h = L[h];
      else {
        var l = document.createElement("div").style;
        try {
          l.font = h;
        } catch (u) {}
        h = L[h] = {
          style: l.fontStyle || "normal",
          variant: l.fontVariant || "normal",
          weight: l.fontWeight || "normal",
          size: l.fontSize || 10,
          family: l.fontFamily || "sans-serif",
        };
      }
      var l = h,
        m = this.element_;
      h = {};
      for (var p in l) h[p] = l[p];
      p = parseFloat(m.currentStyle.fontSize);
      m = parseFloat(l.size);
      "number" == typeof l.size
        ? (h.size = l.size)
        : -1 != l.size.indexOf("px")
        ? (h.size = m)
        : -1 != l.size.indexOf("em")
        ? (h.size = p * m)
        : -1 != l.size.indexOf("%")
        ? (h.size = (p / 100) * m)
        : -1 != l.size.indexOf("pt")
        ? (h.size = m / 0.75)
        : (h.size = p);
      h.size *= 0.981;
      p =
        h.style +
        " " +
        h.variant +
        " " +
        h.weight +
        " " +
        h.size +
        "px " +
        h.family;
      m = this.element_.currentStyle;
      l = this.textAlign.toLowerCase();
      switch (l) {
        case "left":
        case "center":
        case "right":
          break;
        case "end":
          l = "ltr" == m.direction ? "right" : "left";
          break;
        case "start":
          l = "rtl" == m.direction ? "right" : "left";
          break;
        default:
          l = "left";
      }
      switch (this.textBaseline) {
        case "hanging":
        case "top":
          t = h.size / 1.75;
          break;
        case "middle":
          break;
        default:
        case null:
        case "alphabetic":
        case "ideographic":
        case "bottom":
          t = -h.size / 2.25;
      }
      switch (l) {
        case "right":
          d = 1e3;
          r = 0.05;
          break;
        case "center":
          d = r = 500;
      }
      b = s(this, b + 0, c + t);
      n.push(
        '<g_vml_:line from="',
        -d,
        ' 0" to="',
        r,
        ' 0.05" ',
        ' coordsize="100 100" coordorigin="0 0"',
        ' filled="',
        !e,
        '" stroked="',
        !!e,
        '" style="position:absolute;width:1px;height:1px;">'
      );
      e ? S(this, n) : T(this, n, { x: -d, y: 0 }, { x: r, y: h.size });
      e =
        f[0][0].toFixed(3) +
        "," +
        f[1][0].toFixed(3) +
        "," +
        f[0][1].toFixed(3) +
        "," +
        f[1][1].toFixed(3) +
        ",0,0";
      b = k(b.x / q) + "," + k(b.y / q);
      n.push(
        '<g_vml_:skew on="t" matrix="',
        e,
        '" ',
        ' offset="',
        b,
        '" origin="',
        d,
        ' 0" />',
        '<g_vml_:path textpathok="true" />',
        '<g_vml_:textpath on="true" string="',
        N(a),
        '" style="v-text-align:',
        l,
        ";font:",
        N(p),
        '" /></g_vml_:line>'
      );
      this.element_.insertAdjacentHTML("beforeEnd", n.join(""));
    };
    d.fillText = function (a, b, c, d) {
      this.drawText_(a, b, c, d, !1);
    };
    d.strokeText = function (a, b, c, d) {
      this.drawText_(a, b, c, d, !0);
    };
    d.measureText = function (a) {
      this.textMeasureEl_ ||
        (this.element_.insertAdjacentHTML(
          "beforeEnd",
          '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'
        ),
        (this.textMeasureEl_ = this.element_.lastChild));
      var b = this.element_.ownerDocument;
      this.textMeasureEl_.innerHTML = "";
      this.textMeasureEl_.style.font = this.font;
      this.textMeasureEl_.appendChild(b.createTextNode(a));
      return { width: this.textMeasureEl_.offsetWidth };
    };
    d.clip = function () {};
    d.arcTo = function () {};
    d.createPattern = function (a, b) {
      return new I(a, b);
    };
    w.prototype.addColorStop = function (a, b) {
      b = G(b);
      this.colors_.push({ offset: a, color: b.color, alpha: b.alpha });
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR = 13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A;
  })();
/*tslint:enable*/
/*eslint-enable*/
/*jshint ignore:end*/
