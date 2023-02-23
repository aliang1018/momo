(function(t) {
    function e(e) {
        for (var o, a, r = e[0], c = e[1], l = e[2], d = 0, f = []; d < r.length; d++)
            a = r[d],
            Object.prototype.hasOwnProperty.call(n, a) && n[a] && f.push(n[a][0]),
            n[a] = 0;
        for (o in c)
            Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
        u && u(e);
        while (f.length)
            f.shift()();
        return s.push.apply(s, l || []),
        i()
    }
    function i() {
        for (var t, e = 0; e < s.length; e++) {
            for (var i = s[e], o = !0, r = 1; r < i.length; r++) {
                var c = i[r];
                0 !== n[c] && (o = !1)
            }
            o && (s.splice(e--, 1),
            t = a(a.s = i[0]))
        }
        return t
    }
    var o = {}
      , n = {
        im: 0
    }
      , s = [];
    function a(e) {
        if (o[e])
            return o[e].exports;
        var i = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, a),
        i.l = !0,
        i.exports
    }
    a.m = t,
    a.c = o,
    a.d = function(t, e, i) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    a.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    a.t = function(t, e) {
        if (1 & e && (t = a(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (a.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                a.d(i, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return i
    }
    ,
    a.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return a.d(e, "a", e),
        e
    }
    ,
    a.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    a.p = "";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = r.push.bind(r);
    r.push = e,
    r = r.slice();
    for (var l = 0; l < r.length; l++)
        e(r[l]);
    var u = c;
    s.push([0, "chunk-vendors", "chunk-common"]),
    i()
}
)({
    0: function(t, e, i) {
        t.exports = i("400e")
    },
    "075a": function(t, e, i) {},
    "16b0": function(t, e, i) {},
    "2c39": function(t, e, i) {
        "use strict";
        i("075a")
    },
    3470: function(t, e, i) {
        "use strict";
        i("f6b9")
    },
    "3c41": function(t, e, i) {},
    "400e": function(t, e, i) {
        "use strict";
        i.r(e);
        i("e623"),
        i("e379"),
        i("5dc8"),
        i("37e1");
        var o = i("2b0e")
          , n = i("5533")
          , s = i.n(n)
          , a = (i("f5fa"),
        function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "main-wrap"
            }, [i("SideBar"), i("div", {
                staticClass: "right-part"
            }, [i("ControlBar"), i("ChatBox", {
                attrs: {
                    im: t.im
                }
            })], 1), t.imClosed ? i("div", {
                staticClass: "im-close-box"
            }, [i("div", {
                staticClass: "text",
                on: {
                    click: t.reload
                }
            }, [t._v("连接已断开点击重连")])]) : t._e(), t.imgDetail ? i("div", {
                staticClass: "img-detail",
                on: {
                    click: t.hideImgDetail
                }
            }, [i("img", {
                attrs: {
                    src: t.imgDetail,
                    alt: ""
                }
            })]) : t._e(), i("Profile")], 1)
        }
        )
          , r = []
          , c = i("d4ec")
          , l = i("bee2")
          , u = i("262e")
          , d = i("2caf")
          , f = (i("99af"),
        i("4795"),
        i("c0b6"),
        i("9ab4"))
          , p = i("1b40")
          , m = i("4bb5")
          , h = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "side-bar"
            }, [i("div", {
                staticClass: "nav-tab"
            }, t._l(t.modeList, (function(e, o) {
                return i("div", {
                    key: o,
                    staticClass: "item",
                    class: ["tab-" + e, {
                        cur: t.curMode === e
                    }],
                    on: {
                        click: function(i) {
                            return t.setMode(e)
                        }
                    }
                }, [t.newMessageCount && "message" === e ? i("div", {
                    staticClass: "new-count"
                }, [t._v(" " + t._s(t.newMessageCount > 99 ? "99+" : t.newMessageCount) + " ")]) : t._e()])
            }
            )), 0), i("div", {
                staticClass: "lists-wrapper"
            }, [i("Search"), t.curMode === t.modeList[0] ? [t.noReplyOn ? [i("div", {
                staticClass: "no-reply-back",
                on: {
                    click: function(e) {
                        t.noReplyOn = !1
                    }
                }
            }, [t._v("返回")]), i("div", {
                staticClass: "side-bar-scroll-list no-reply-list"
            }, t._l(t.noReplyList, (function(t, e) {
                return i("SideBarItem", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.replyed,
                        expression: "!item.replyed"
                    }],
                    key: t.momoid,
                    attrs: {
                        info: t,
                        index: e,
                        hasClose: !0,
                        hideAgeIcon: !0
                    }
                })
            }
            )), 1)] : i("div", {
                staticClass: "side-bar-scroll-list"
            }, [t.tempChat ? i("SideBarItem", {
                attrs: {
                    info: t.tempChat,
                    hasClose: !0,
                    hideAgeIcon: !0
                },
                on: {
                    close: function(e) {
                        t.tempChat = null
                    }
                }
            }) : t._e(), t.showNoReplyList ? i("div", {
                staticClass: "side-bar-item reply",
                on: {
                    click: t.showReply
                }
            }, [i("div", {
                staticClass: "avatar"
            }, [i("IconReply"), t.noReplyNewCount ? i("div", {
                staticClass: "new-count"
            }, [t._v(t._s(t.noReplyNewCount))]) : t._e()], 1), i("div", {
                staticClass: "content"
            }, [t._m(0), i("p", {
                staticClass: "desc"
            }, [t._v(t._s(t.noReplyList.length) + "个人和您打招呼")])])]) : t._e(), t._l(t.recentList, (function(e, o) {
                return i("SideBarItem", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.tempChat || (e.momoid || e.gid) !== (t.tempChat.momoid || t.tempChat.gid),
                        expression: "!tempChat || (item.momoid || item.gid) !== (tempChat.momoid || tempChat.gid)"
                    }],
                    key: e.momoid || e.gid,
                    attrs: {
                        info: e,
                        index: o,
                        hasClose: !0,
                        hideAgeIcon: !0
                    }
                })
            }
            ))], 2)] : t._e(), t.curMode === t.modeList[1] ? [i("div", {
                staticClass: "side-bar-list"
            }, [i("div", {
                staticClass: "th",
                class: {
                    cur: 1 === t.friendMode
                },
                on: {
                    click: function(e) {
                        return t.selectFriendMode(1)
                    }
                }
            }, [t._v("好友")]), 1 === t.friendMode ? i("div", {
                staticClass: "scroll-wrapper",
                on: {
                    scroll: function(e) {
                        return t.scroll("friend", e)
                    }
                }
            }, t._l(t.friendList, (function(t) {
                return i("SideBarItem", {
                    key: t.momoid || t.gid,
                    attrs: {
                        info: t
                    }
                })
            }
            )), 1) : t._e(), i("div", {
                staticClass: "th",
                class: {
                    cur: 2 === t.friendMode
                },
                on: {
                    click: function(e) {
                        return t.selectFriendMode(2)
                    }
                }
            }, [t._v("关注")]), 2 === t.friendMode ? i("div", {
                staticClass: "scroll-wrapper",
                on: {
                    scroll: function(e) {
                        return t.scroll("follow", e)
                    }
                }
            }, t._l(t.followingList, (function(t) {
                return i("SideBarItem", {
                    key: t.momoid,
                    attrs: {
                        info: t
                    }
                })
            }
            )), 1) : t._e(), i("div", {
                staticClass: "th",
                class: {
                    cur: 3 === t.friendMode
                },
                on: {
                    click: function(e) {
                        return t.selectFriendMode(3)
                    }
                }
            }, [t._v("粉丝")]), 3 === t.friendMode ? i("div", {
                staticClass: "scroll-wrapper",
                on: {
                    scroll: function(e) {
                        return t.scroll("fans", e)
                    }
                }
            }, t._l(t.fansList, (function(t) {
                return i("SideBarItem", {
                    key: t.momoid,
                    attrs: {
                        info: t
                    }
                })
            }
            )), 1) : t._e()])] : t._e(), t.curMode === t.modeList[2] ? [i("div", {
                staticClass: "side-bar-scroll-list",
                on: {
                    scroll: function(e) {
                        return t.scroll("group", e)
                    }
                }
            }, t._l(t.groupList, (function(t) {
                return i("SideBarItem", {
                    key: t.momoid,
                    attrs: {
                        info: t
                    }
                })
            }
            )), 1)] : t._e()], 2)])
        }
          , g = [function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("p", {
                staticClass: "name"
            }, [i("span", {
                staticClass: "name-str"
            }, [t._v("收到的招呼")])])
        }
        ]
          , v = (i("a623"),
        i("13d5"),
        i("0d03"),
        i("d3b7"),
        i("25f0"),
        function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "side-bar-item",
                class: {
                    cur: t.target === (t.profile.momoid || t.profile.gid)
                },
                on: {
                    click: t.select
                }
            }, [i("div", {
                staticClass: "avatar"
            }, [i("img", {
                attrs: {
                    src: t.profile.avatar,
                    alt: ""
                }
            }), t.newCount ? i("div", {
                staticClass: "new-count"
            }, [t._v(t._s(t.newCount))]) : t._e()]), i("div", {
                staticClass: "content"
            }, [i("p", {
                staticClass: "name"
            }, [i("span", {
                staticClass: "name-str"
            }, [t._v(t._s(t.profile.name))]), t.hideAgeIcon ? t._e() : i("SexAge", {
                attrs: {
                    info: t.profile
                }
            })], 1), i("p", {
                staticClass: "desc"
            }, [t._v(t._s(t.desc))])]), t.timeStr ? i("div", {
                staticClass: "time"
            }, [t._v(t._s(t.timeStr))]) : t._e(), t.hasClose ? i("IconClose", {
                staticClass: "close",
                nativeOn: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.close.apply(null, arguments)
                    }
                }
            }) : t._e(), t.profile.setting && 0 === t.profile.setting.push ? i("IconMute", {
                staticClass: "icon-mute",
                nativeOn: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.close.apply(null, arguments)
                    }
                }
            }) : t._e()], 1)
        }
        )
          , b = []
          , y = (i("a434"),
        i("2095"),
        i("8981"))
          , k = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "icon-close"
            }, [i("svg", {
                attrs: {
                    width: "10",
                    height: "10",
                    viewBox: "0 0 10 10",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [i("g", {
                attrs: {
                    fill: "none",
                    "fill-rule": "evenodd"
                }
            }, [i("circle", {
                attrs: {
                    fill: "#4F4957",
                    cx: "5",
                    cy: "5",
                    r: "5"
                }
            }), i("path", {
                attrs: {
                    d: "m5.396 5 1.402 1.397a.284.284 0 0 1 0 .402.286.286 0 0 1-.403 0L4.992 5.402 3.605 6.783a.286.286 0 0 1-.403 0 .284.284 0 0 1 0-.402L4.589 5 3.202 3.619a.284.284 0 0 1 0-.402.286.286 0 0 1 .403 0l1.387 1.381 1.403-1.397a.286.286 0 0 1 .403 0 .284.284 0 0 1 0 .402L5.396 5z",
                    fill: "#FFF",
                    "fill-rule": "nonzero",
                    opacity: "1"
                }
            })])])])
        }
          , O = []
          , j = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                return Object(c["a"])(this, i),
                e.apply(this, arguments)
            }
            return i
        }(p["g"]);
        j = Object(f["a"])([Object(p["a"])({
            components: {}
        })], j);
        var w = j
          , C = w
          , M = i("2877")
          , I = Object(M["a"])(C, k, O, !1, null, null, null)
          , _ = I.exports
          , x = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "icon-no-bell"
            }, [i("svg", {
                attrs: {
                    width: "10",
                    height: "10",
                    viewBox: "0 0 10 10",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [i("g", {
                attrs: {
                    fill: "none",
                    "fill-rule": "evenodd",
                    opacity: ".2"
                }
            }, [i("path", {
                attrs: {
                    d: "M9.06 3.478v.089l-.01 1.901.876 1.247a.52.52 0 0 1 .002.592l-.024.033-.027.03a.656.656 0 0 1-.428.206l-.049.002-3.01.001-.133.101.15.11.022.018.02.02c.46.46.4 1.232-.095 1.728-.497.496-1.27.556-1.73.096-.447-.447-.402-1.192.058-1.689l.039-.04.038-.033.253-.194-.148-.108-.481.003-.191.002.716-.749h.082a.37.37 0 0 1 .187.049l.033.021.423.31.41-.312a.377.377 0 0 1 .147-.068l.04-.006.04-.002 2.825-.002-.723-1.03a.368.368 0 0 1-.06-.138l-.005-.037-.002-.039.011-2.019c0-.095-.004-.188-.012-.28l.634-.667c.074.273.116.559.122.854zM5.636 8.153l-.407.31-.015.016c-.172.194-.201.441-.1.595l.019.026.02.023c.153.153.458.13.677-.09.21-.21.24-.495.111-.654l-.006-.007-.3-.22zM5.526.038a3.503 3.503 0 0 1 2.977 1.607l-.535.56A2.77 2.77 0 0 0 5.523.783 2.849 2.849 0 0 0 2.7 3.528l-.001.08-.011 2.013a.375.375 0 0 1-.05.184l-.02.032-.739 1.036 1.646-.017-.718.751-1.228.014a.662.662 0 0 1-.476-.194.517.517 0 0 1-.074-.634l.022-.033.893-1.254.01-1.894A3.603 3.603 0 0 1 5.35.043L5.438.04l.089-.001z",
                    fill: "#FFF",
                    "fill-rule": "nonzero"
                }
            }), i("path", {
                attrs: {
                    stroke: "#FFF",
                    "stroke-width": ".75",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M9.086.95 1.569 8.798"
                }
            })])])])
        }
          , T = []
          , L = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                return Object(c["a"])(this, i),
                e.apply(this, arguments)
            }
            return i
        }(p["g"]);
        L = Object(f["a"])([Object(p["a"])({
            components: {}
        })], L);
        var P = L
          , S = P
          , E = Object(M["a"])(S, x, T, !1, null, null, null)
          , B = E.exports
          , D = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                return Object(c["a"])(this, i),
                e.apply(this, arguments)
            }
            return Object(l["a"])(i, [{
                key: "profile",
                get: function() {
                    return this.info.momoid ? this.profileMap[this.info.momoid] : this.info.gid ? this.groupMap[this.info.gid] : void 0
                }
            }, {
                key: "desc",
                get: function() {
                    var t = this.messageMap[this.info.momoid || this.info.gid];
                    if (t && t.length) {
                        var e = t.length;
                        return t[e - 1].text
                    }
                    return ""
                }
            }, {
                key: "select",
                value: function() {
                    this.$store.dispatch("setCurTarget", this.info)
                }
            }, {
                key: "newCount",
                get: function() {
                    var t = this.newMessageMap[this.info.momoid || this.info.gid] || 0;
                    return t >= 100 ? "99+" : t
                }
            }, {
                key: "timeStr",
                get: function() {
                    var t;
                    return null !== (t = this.profile) && void 0 !== t && t.chatTime ? new Date(1e3 * this.profile.chatTime).Format("hh:mm") : ""
                }
            }, {
                key: "close",
                value: function() {
                    void 0 !== this.index && this.$store.state.recentList.splice(this.index, 1),
                    this.$emit("close")
                }
            }]),
            i
        }(p["g"]);
        Object(f["a"])([Object(p["d"])()], D.prototype, "info", void 0),
        Object(f["a"])([Object(m["d"])("profileMap")], D.prototype, "profileMap", void 0),
        Object(f["a"])([Object(m["d"])("groupMap")], D.prototype, "groupMap", void 0),
        Object(f["a"])([Object(p["d"])()], D.prototype, "index", void 0),
        Object(f["a"])([Object(p["d"])()], D.prototype, "hasClose", void 0),
        Object(f["a"])([Object(p["d"])()], D.prototype, "hideAgeIcon", void 0),
        Object(f["a"])([Object(m["b"])("target")], D.prototype, "target", void 0),
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.newMessageMap
        }
        ))], D.prototype, "newMessageMap", void 0),
        Object(f["a"])([Object(m["d"])("messageMap")], D.prototype, "messageMap", void 0),
        D = Object(f["a"])([Object(p["a"])({
            components: {
                SexAge: y["a"],
                IconClose: _,
                IconMute: B
            }
        })], D);
        var R = D
          , F = R
          , N = (i("c674"),
        Object(M["a"])(F, v, b, !1, null, null, null))
          , $ = N.exports
          , A = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "icon-close"
            }, [i("svg", {
                attrs: {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [i("g", {
                attrs: {
                    fill: "none",
                    "fill-rule": "evenodd"
                }
            }, [i("circle", {
                attrs: {
                    fill: "#1FD79F",
                    cx: "16",
                    cy: "16",
                    r: "16"
                }
            }), i("path", {
                attrs: {
                    d: "m14.524 9.372 5.346 5.168c.064-.898.197-1.757.335-2.228.367-1.251 1.313-2.01 2.197-1.854.532.093 1.063.681.868 1.507-.285 1.209-.818 2.818-.97 3.429-.255 1.026-.355 1.911-.3 2.656h-.003c.088 1.35-.414 2.786-1.522 3.913-1.956 1.99-4.942 2.18-6.668.424a3.996 3.996 0 0 1-.559-.716l-.067-.082c-.181-.217-.55-.663-1.106-1.336-.583-.708-1.783-2.017-3.598-3.928a1.178 1.178 0 0 1-.062-1.553l.053-.064a1.038 1.038 0 0 1 1.518-.103l3.022 2.845.002-.005-3.797-3.59a1.174 1.174 0 0 1-.052-1.654 1.147 1.147 0 0 1 1.634-.044l3.502 3.372.004-.004-3.881-3.73a1.477 1.477 0 0 1-.381-.561 1.067 1.067 0 0 1-.037-.6c.045-.202.148-.406.309-.604a1.078 1.078 0 0 1 1.604-.08l4.311 4.355.006-.002-3.352-3.42a1.067 1.067 0 0 1 .04-1.531 1.17 1.17 0 0 1 1.604.02z",
                    stroke: "#B3FFE8",
                    "stroke-width": "1.164",
                    "stroke-linejoin": "round"
                }
            })])])])
        }
          , H = []
          , U = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                return Object(c["a"])(this, i),
                e.apply(this, arguments)
            }
            return i
        }(p["g"]);
        U = Object(f["a"])([Object(p["a"])({
            components: {}
        })], U);
        var W = U
          , z = W
          , J = Object(M["a"])(z, A, H, !1, null, null, null)
          , K = J.exports
          , G = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "search-box"
            }, [i("div", {
                staticClass: "input-box"
            }, [i("div", {
                staticClass: "icon-search"
            }), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.searchInput,
                    expression: "searchInput"
                }],
                attrs: {
                    placeholder: "搜索好友及群组",
                    maxlength: "15"
                },
                domProps: {
                    value: t.searchInput
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.searchInput = e.target.value)
                    }
                }
            })]), t.resultList && t.resultList.length ? i("div", {
                staticClass: "result-list search-result"
            }, t._l(t.resultList, (function(e) {
                return i("SearchItem", {
                    key: e.momoid,
                    attrs: {
                        info: e
                    },
                    on: {
                        hide: t.hide
                    }
                })
            }
            )), 1) : t._e()])
        }
          , X = []
          , V = (i("4160"),
        i("159b"),
        i("b64b"),
        i("b0c0"),
        i("caad"),
        i("2532"),
        function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "search-item",
                class: {
                    cur: t.target === (t.info.momoid || t.info.gid)
                },
                on: {
                    click: t.select
                }
            }, [i("div", {
                staticClass: "avatar"
            }, [i("img", {
                attrs: {
                    src: t.info.avatar,
                    alt: ""
                }
            })]), i("div", {
                staticClass: "content"
            }, [i("p", {
                staticClass: "name"
            }, [t._v(t._s(t.info.name))]), i("p", {
                staticClass: "desc"
            }, [t._v(t._s(t.info.momoid))])]), t.newCount ? i("div", {
                staticClass: "new-count"
            }, [t._v(t._s(t.newCount))]) : t._e()])
        }
        )
          , q = []
          , Q = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                return Object(c["a"])(this, i),
                e.apply(this, arguments)
            }
            return Object(l["a"])(i, [{
                key: "desc",
                get: function() {
                    return this.info.momoid
                }
            }, {
                key: "select",
                value: function() {
                    this.$store.dispatch("setCurTarget", this.info),
                    this.$emit("hide")
                }
            }, {
                key: "newCount",
                get: function() {
                    return this.newMessageMap[this.info.momoid] || 0
                }
            }]),
            i
        }(p["g"]);
        Object(f["a"])([Object(p["d"])()], Q.prototype, "info", void 0),
        Object(f["a"])([Object(m["b"])("target")], Q.prototype, "target", void 0),
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.newMessageMap
        }
        ))], Q.prototype, "newMessageMap", void 0),
        Q = Object(f["a"])([Object(p["a"])({
            components: {}
        })], Q);
        var Y = Q
          , Z = Y
          , tt = (i("4138"),
        Object(M["a"])(Z, V, q, !1, null, null, null))
          , et = tt.exports
          , it = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                var t;
                return Object(c["a"])(this, i),
                t = e.apply(this, arguments),
                t.searchInput = "",
                t.resultList = [],
                t
            }
            return Object(l["a"])(i, [{
                key: "onSearch",
                value: function(t) {
                    var e = this;
                    if (!t || t.length < 2)
                        this.resultList = [];
                    else if (/^[\d]+$/.test(t) && t.length < 5)
                        this.resultList = [];
                    else {
                        var i = [];
                        Object.keys(this.profileMap).forEach((function(o) {
                            var n = e.profileMap[o]
                              , s = n.name
                              , a = void 0 === s ? "" : s
                              , r = n.namePinyinInitial
                              , c = void 0 === r ? "" : r
                              , l = n.namePinyinAll
                              , u = void 0 === l ? "" : l
                              , d = n.gid
                              , f = void 0 === d ? "" : d
                              , p = n.remarkName
                              , m = void 0 === p ? "" : p
                              , h = n.remarkNamePinyinInitial
                              , g = void 0 === h ? "" : h
                              , v = n.remarkNamePinyinAll
                              , b = void 0 === v ? "" : v
                              , y = n.momoid
                              , k = void 0 === y ? "" : y;
                            (null !== a && void 0 !== a && a.toLowerCase().includes(t) || null !== c && void 0 !== c && c.toLowerCase().includes(t) || null !== u && void 0 !== u && u.toLowerCase().includes(t) || null !== f && void 0 !== f && f.toLowerCase().includes(t) || null !== m && void 0 !== m && m.toLowerCase().includes(t) || null !== g && void 0 !== g && g.toLowerCase().includes(t) || null !== b && void 0 !== b && b.toLowerCase().includes(t) || null !== k && void 0 !== k && k.toLowerCase().includes(t)) && i.push(e.profileMap[o])
                        }
                        )),
                        this.resultList = i
                    }
                }
            }, {
                key: "hide",
                value: function() {
                    this.resultList = []
                }
            }]),
            i
        }(p["g"]);
        Object(f["a"])([Object(m["d"])("profileMap")], it.prototype, "profileMap", void 0),
        Object(f["a"])([Object(p["h"])("searchInput")], it.prototype, "onSearch", null),
        it = Object(f["a"])([Object(p["a"])({
            components: {
                SearchItem: et
            }
        })], it);
        var ot = it
          , nt = ot
          , st = (i("e589"),
        Object(M["a"])(nt, G, X, !1, null, null, null))
          , at = st.exports
          , rt = i("0613")
          , ct = i("772f")
          , lt = {
            Throttle: ct["a"]
        }
          , ut = lt.Throttle
          , dt = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                var t;
                return Object(c["a"])(this, i),
                t = e.apply(this, arguments),
                t.modeList = ["message", "friend", "group"],
                t.friendMode = 1,
                t.tempChat = null,
                t.noReplyOn = !1,
                t
            }
            return Object(l["a"])(i, [{
                key: "onNewMessageCountChange",
                value: function() {
                    try {
                        window.obsBridge && window.obsBridge.UpdateMsgCount(this.newMessageCount)
                    } catch (t) {
                        console.error(t)
                    }
                }
            }, {
                key: "scroll",
                value: function(t, e) {
                    null !== e && void 0 !== e && e.target && e.target.scrollHeight - e.target.scrollTop - e.target.offsetHeight < 150 && this.fetchList(t)
                }
            }, {
                key: "showNoReplyList",
                get: function() {
                    return this.noReplyList.length && this.noReplyList.every((function(t) {
                        return !t.replyed
                    }
                    ))
                }
            }, {
                key: "noReplyNewCount",
                get: function() {
                    var t = this;
                    return this.noReplyList.reduce((function(e, i) {
                        return e + t.newMessageMap[i.momoid || i.gid] || 0
                    }
                    ), 0)
                }
            }, {
                key: "selectFriendMode",
                value: function(t) {
                    this.friendMode !== t ? this.friendMode = t : this.friendMode = 0
                }
            }, {
                key: "showReply",
                value: function() {
                    this.noReplyOn = !0
                }
            }, {
                key: "mounted",
                value: function() {
                    var t = this;
                    rt["a"].removeAllListeners("startChatTo"),
                    rt["a"].addListener("startChatTo", (function(e, i) {
                        t.target.toString() !== e.toString() && t.feedProfileMapById(e).then((function(e) {
                            t.setMode("message"),
                            t.tempChat = e,
                            t.$store.dispatch("setCurTarget", e)
                        }
                        ))
                    }
                    ))
                }
            }]),
            i
        }(p["g"]);
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.curMode
        }
        ))], dt.prototype, "curMode", void 0),
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.recentList
        }
        ))], dt.prototype, "recentList", void 0),
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.noReplyList
        }
        ))], dt.prototype, "noReplyList", void 0),
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.followingList
        }
        ))], dt.prototype, "followingList", void 0),
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.fansList
        }
        ))], dt.prototype, "fansList", void 0),
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.friendList
        }
        ))], dt.prototype, "friendList", void 0),
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.groupList
        }
        ))], dt.prototype, "groupList", void 0),
        Object(f["a"])([Object(m["b"])("newMessageCount")], dt.prototype, "newMessageCount", void 0),
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.newMessageMap
        }
        ))], dt.prototype, "newMessageMap", void 0),
        Object(f["a"])([Object(m["a"])("fetchList")], dt.prototype, "fetchList", void 0),
        Object(f["a"])([Object(p["h"])("newMessageCount")], dt.prototype, "onNewMessageCountChange", null),
        Object(f["a"])([ut(300)], dt.prototype, "scroll", null),
        Object(f["a"])([Object(m["d"])("sessionid")], dt.prototype, "sessionid", void 0),
        Object(f["a"])([Object(m["a"])("feedProfileMapById")], dt.prototype, "feedProfileMapById", void 0),
        Object(f["a"])([Object(m["b"])("target")], dt.prototype, "target", void 0),
        Object(f["a"])([Object(m["c"])("setMode")], dt.prototype, "setMode", void 0),
        dt = Object(f["a"])([Object(p["a"])({
            components: {
                SideBarItem: $,
                Search: at,
                IconReply: K
            }
        })], dt);
        var ft = dt
          , pt = ft
          , mt = (i("a736"),
        Object(M["a"])(pt, h, g, !1, null, null, null))
          , ht = mt.exports
          , gt = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "control-bar"
            }, [i("div", {
                staticClass: "name",
                on: {
                    click: t.avatarClick
                }
            }, [i("span", [t._v(t._s(t.targetInfo && t.targetInfo.name || "聊天名称"))]), t.targetInfo && t.targetInfo.gid ? i("MuteSwitch") : t._e()], 1)])
        }
          , vt = []
          , bt = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "mute-switch",
                class: {
                    off: t.targetInfo.setting && 1 === t.targetInfo.setting.push
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.setPush.apply(null, arguments)
                    }
                }
            }, [i("div", {
                staticClass: "text"
            }, [t._v("免打扰")]), i("svg", {
                attrs: {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [i("g", {
                attrs: {
                    stroke: "#FFF",
                    fill: "none",
                    "fill-rule": "evenodd"
                }
            }, [i("circle", {
                attrs: {
                    "stroke-opacity": ".15",
                    fill: "#484253",
                    cx: "8",
                    cy: "8",
                    r: "7.5"
                }
            }), i("path", {
                attrs: {
                    opacity: ".6",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "m5.667 8.216 1.541 1.55 3.187-3.1"
                }
            })])])])
        }
          , yt = []
          , kt = i("6022")
          , Ot = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                return Object(c["a"])(this, i),
                e.apply(this, arguments)
            }
            return Object(l["a"])(i, [{
                key: "setPush",
                value: function() {
                    var t, e = this;
                    if (null !== (t = this.targetInfo) && void 0 !== t && t.setting) {
                        var i = 0 === this.targetInfo.setting.push ? 1 : 0;
                        Object(kt["k"])({
                            sessionid: this.$store.state.sessionid,
                            gid: this.targetInfo.gid,
                            push: i
                        }).then((function(t) {
                            var o;
                            null !== (o = t.data) && void 0 !== o && o.data && (e.targetInfo.setting.push = i)
                        }
                        ))
                    }
                }
            }]),
            i
        }(p["g"]);
        Object(f["a"])([Object(m["b"])("targetInfo")], Ot.prototype, "targetInfo", void 0),
        Ot = Object(f["a"])([Object(p["a"])({
            components: {}
        })], Ot);
        var jt = Ot
          , wt = jt
          , Ct = (i("3470"),
        Object(M["a"])(wt, bt, yt, !1, null, null, null))
          , Mt = Ct.exports
          , It = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                return Object(c["a"])(this, i),
                e.apply(this, arguments)
            }
            return Object(l["a"])(i, [{
                key: "avatarClick",
                value: function() {
                    if (this.targetInfo)
                        if ("1" === rt["b"].get("type")) {
                            var t, e;
                            rt["a"].emit("show_profile", (null === (t = this.targetInfo) || void 0 === t ? void 0 : t.momoid) || "", (null === (e = this.targetInfo) || void 0 === e ? void 0 : e.gid) || "")
                        } else {
                            var i, o, n;
                            if (null === (i = window.obsBridge) || void 0 === i || !i.OpenProfile)
                                return;
                            window.obsBridge.OpenProfile("https://live-api.immomo.com/fep/momo/fe-live-projects/live-web-im/profile.html?momoid=".concat((null === (o = this.targetInfo) || void 0 === o ? void 0 : o.momoid) || "", "&gid=").concat((null === (n = this.targetInfo) || void 0 === n ? void 0 : n.gid) || ""))
                        }
                }
            }]),
            i
        }(p["g"]);
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.momoid
        }
        ))], It.prototype, "momoid", void 0),
        Object(f["a"])([Object(m["b"])("targetInfo")], It.prototype, "targetInfo", void 0),
        It = Object(f["a"])([Object(p["a"])({
            components: {
                MuteSwitch: Mt
            }
        })], It);
        var _t = It
          , xt = _t
          , Tt = (i("a570"),
        Object(M["a"])(xt, gt, vt, !1, null, null, null))
          , Lt = Tt.exports
          , Pt = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "chat-box"
            }, [i("div", {
                ref: "messageBox",
                staticClass: "message-box"
            }, t._l(t.messageList, (function(t, e) {
                return i("MessageItem", {
                    key: e,
                    attrs: {
                        info: t
                    }
                })
            }
            )), 1), i("div", {
                staticClass: "input-box"
            }, [i("div", {
                staticClass: "function-bar"
            }, [i("EmojiSelect", {
                on: {
                    insertText: t.insertText
                }
            }), i("FileUpload", {
                ref: "file",
                on: {
                    sendTalkMessage: t.sendTalkMessage
                }
            })], 1), i("textarea", {
                ref: "textarea",
                attrs: {
                    name: "",
                    id: "",
                    cols: "30",
                    maxlength: "200"
                },
                on: {
                    keypress: t.textareaKeyDown
                }
            })])])
        }
          , St = []
          , Et = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "message-item",
                class: {
                    right: t.isRight
                }
            }, [i("div", {
                staticClass: "avatar",
                on: {
                    click: t.avatarClick
                }
            }, [t.avatar ? i("img", {
                attrs: {
                    src: t.avatar,
                    alt: ""
                }
            }) : t._e()]), t.bubbleOn ? i("div", {
                staticClass: "bubble"
            }, [2 === t.info.type ? i("img", {
                attrs: {
                    src: t.textDecorater(t.info)
                },
                on: {
                    click: t.textClick,
                    error: t.onError
                }
            }) : i("p", {
                staticClass: "text",
                domProps: {
                    innerHTML: t._s(t.textDecorater(t.info))
                }
            }), i("BubbleArrow")], 1) : t._e()])
        }
          , Bt = []
          , Dt = (i("ac1f"),
        i("5319"),
        i("466d"),
        i("c975"),
        i("4d63"),
        i("277d"),
        i("7d7e"))
          , Rt = i("50a2")
          , Ft = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                var t;
                return Object(c["a"])(this, i),
                t = e.apply(this, arguments),
                t.imgDetail = "",
                t.bubbleOn = !1,
                t.bubbleTimer = null,
                t.reloadTimes = 0,
                t
            }
            return Object(l["a"])(i, [{
                key: "onError",
                value: function() {
                    var t = this;
                    this.reloadTimes >= 3 || (this.bubbleOn = !1,
                    clearTimeout(this.bubbleTimer),
                    this.bubbleTimer = setTimeout((function() {
                        t.bubbleOn = !0,
                        t.reloadTimes += 1
                    }
                    ), 1e3))
                }
            }, {
                key: "textClick",
                value: function() {
                    if (2 === this.info.type) {
                        var t = this.info;
                        if (!t.img)
                            return;
                        var e = t.img.replace(/.*=/, "")
                          , i = e.match(/(.{2})(.{2})/)
                          , o = this.targetInfo.gid ? "g" : "";
                        t.img.indexOf("chatimage") > -1 ? o += "chatimage/" : t.img.indexOf("webchat") > -1 ? o += "webchat/" : t.img.indexOf("webim") > -1 && (o += "webim/"),
                        this.$store.commit("setImgDetail", "https://img.momocdn.com//".concat(o).concat(i[1], "/").concat(i[2], "/").concat(e, "_L.jpg"))
                    }
                }
            }, {
                key: "isRight",
                get: function() {
                    return this.info.fr === this.momoid
                }
            }, {
                key: "avatar",
                get: function() {
                    return this.info.fr === this.momoid ? this.profile.avatar : this.targetInfo && this.info.fr === (this.targetInfo.momoid || this.targetInfo.gid) ? this.targetInfo.avatar : this.profileMap[this.info.fr] ? this.profileMap[this.info.fr].avatar : void this.feedProfileMapById(this.info.fr)
                }
            }, {
                key: "fr",
                get: function() {
                    return this.info.fr === this.momoid ? this.profile : this.targetInfo && this.info.fr === (this.targetInfo.momoid || this.targetInfo.gid) ? this.targetInfo : {
                        momoid: this.info.fr
                    }
                }
            }, {
                key: "avatarClick",
                value: function() {
                    var t, e, i, o, n, s, a, r;
                    (null !== (t = this.fr) && void 0 !== t && t.momoid || null !== (e = this.fr) && void 0 !== e && e.gid) && (console.log((null === (i = this.fr) || void 0 === i ? void 0 : i.momoid) || (null === (o = this.fr) || void 0 === o ? void 0 : o.gid)),
                    "1" === rt["b"].get("type") ? rt["a"].emit("show_profile", null === (n = this.fr) || void 0 === n ? void 0 : n.momoid, null === (s = this.fr) || void 0 === s ? void 0 : s.gid) : window.obsBridge.OpenProfile("https://live-api.immomo.com/fep/momo/fe-live-projects/live-web-im/profile.html?momoid=".concat((null === (a = this.fr) || void 0 === a ? void 0 : a.momoid) || "", "&gid=").concat((null === (r = this.fr) || void 0 === r ? void 0 : r.gid) || "")))
                }
            }, {
                key: "textDecorater",
                value: function(t) {
                    var e = t.text
                      , i = t.type;
                    if (1 === i) {
                        var o = ""
                          , n = e.replace(/</g, "&lt;").replace(/\n|\r/g, "<br/>").replace(/\s(?!class|href|target)/g, "&nbsp;").replace(/\[\/(.)+?\]/g, (function(t) {
                            var e = t
                              , i = t.replace(/\[\/|\]/g, "");
                            return Rt["b"][i] ? (o = "https://s.momocdn.com/w/u/others/custom/20180927/".concat(Rt["b"][i], "@2x.png"),
                            '<img class="emoji" src="'.concat(o, '">')) : e
                        }
                        )).replace(/\[(.)+?\]/g, (function(t) {
                            var e = t;
                            return t = t.replace(/\[|\]/g, ""),
                            Rt["a"][t] ? (o = "https://s.momocdn.com/w/u/others/custom/20180927/".concat(Rt["a"][t], "@2x.png"),
                            '<img class="emoji" src="'.concat(o, '">')) : e
                        }
                        ));
                        return n
                    }
                    if (2 === i) {
                        if (!t.img)
                            return "";
                        var s = t.img.replace(/.*=/, "")
                          , a = s.match(/(.{2})(.{2})/)
                          , r = this.targetInfo.gid ? "g" : "";
                        return t.img.indexOf("chatimage") > -1 ? r += "chatimage/" : t.img.indexOf("webchat") > -1 ? r += "webchat/" : t.img.indexOf("webim") > -1 && (r += "webim/"),
                        "https://img.momocdn.com//".concat(r).concat(a[1], "/").concat(a[2], "/").concat(s, "_S.jpg")
                    }
                    return e
                }
            }, {
                key: "formatChatText",
                value: function(t) {
                    return Object.keys(Rt["c"]).forEach((function(e, i) {
                        var o = RegExp("\\[/".concat(i, "\\]"), "g")
                          , n = t.match(o);
                        if (Array.isArray(n) && n.length) {
                            var s = "<img class='xiaoshuidi-icon' src='https://s.momocdn.com/w/u/others/custom/20180927/".concat(e, "' />");
                            t = t.replace(o, s)
                        }
                        return t
                    }
                    )),
                    t
                }
            }, {
                key: "mounted",
                value: function() {
                    var t = this;
                    clearTimeout(this.bubbleTimer),
                    this.bubbleTimer = setTimeout((function() {
                        t.bubbleOn = !0
                    }
                    ), 2 === this.info.type ? 100 : 0)
                }
            }]),
            i
        }(p["g"]);
        Object(f["a"])([Object(p["d"])()], Ft.prototype, "info", void 0),
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.momoid
        }
        ))], Ft.prototype, "momoid", void 0),
        Object(f["a"])([Object(m["b"])("targetInfo")], Ft.prototype, "targetInfo", void 0),
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.profile
        }
        ))], Ft.prototype, "profile", void 0),
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.profileMap
        }
        ))], Ft.prototype, "profileMap", void 0),
        Object(f["a"])([Object(m["a"])("feedProfileMapById")], Ft.prototype, "feedProfileMapById", void 0),
        Ft = Object(f["a"])([Object(p["a"])({
            components: {
                BubbleArrow: Dt["a"]
            }
        })], Ft);
        var Nt = Ft
          , $t = Nt
          , At = (i("eef0"),
        Object(M["a"])($t, Et, Bt, !1, null, null, null))
          , Ht = At.exports
          , Ut = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "emoji-select",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleBubbleOn.apply(null, arguments)
                    }
                }
            }, [i("Emoji"), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.bubbleOn,
                    expression: "bubbleOn"
                }],
                staticClass: "emoji-bubble"
            }, [i("div", {
                staticClass: "emoji-list"
            }, t._l(t.xiaoshuidi, (function(e, o) {
                return i("div", {
                    key: o,
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            return t.selectEmoji(o)
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: t.getXiaoshuidiSrc(e),
                        alt: o,
                        title: o
                    }
                })])
            }
            )), 0), i("BubbleArrow")], 1)], 1)
        }
          , Wt = []
          , zt = i("4174")
          , Jt = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                var t;
                return Object(c["a"])(this, i),
                t = e.apply(this, arguments),
                t.xiaoshuidi = Rt["c"],
                t.bubbleOn = !1,
                t
            }
            return Object(l["a"])(i, [{
                key: "toggleBubbleOn",
                value: function() {
                    this.bubbleOn = !this.bubbleOn
                }
            }, {
                key: "selectEmoji",
                value: function(t) {
                    this.$emit("insertText", "[/".concat(t, "]"))
                }
            }, {
                key: "getXiaoshuidiSrc",
                value: function(t) {
                    return "https://s.momocdn.com/w/u/others/custom/20180927/".concat(t)
                }
            }, {
                key: "mounted",
                value: function() {
                    var t = this;
                    rt["a"].addListener("domClick", (function() {
                        t.bubbleOn = !1
                    }
                    ))
                }
            }]),
            i
        }(p["g"]);
        Jt = Object(f["a"])([Object(p["a"])({
            components: {
                BubbleArrow: Dt["a"],
                Emoji: zt["a"]
            }
        })], Jt);
        var Kt = Jt
          , Gt = Kt
          , Xt = (i("b36c"),
        Object(M["a"])(Gt, Ut, Wt, !1, null, null, null))
          , Vt = Xt.exports
          , qt = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "file-upload",
                attrs: {
                    tabindex: "0"
                },
                on: {
                    keydown: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.sendImg.apply(null, arguments)
                    }
                }
            }, [i("ImgUpload", {
                nativeOn: {
                    click: function(e) {
                        return t.selectFile.apply(null, arguments)
                    }
                }
            }), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.imgSrc,
                    expression: "imgSrc"
                }],
                staticClass: "bubble"
            }, [t.imgSrc ? i("img", {
                attrs: {
                    src: "https://img.momocdn.com/" + t.imgSrc
                }
            }) : t._e(), i("BubbleArrow"), i("IconClose", {
                staticClass: "close",
                nativeOn: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.close.apply(null, arguments)
                    }
                }
            })], 1), i("input", {
                ref: "fileInput",
                staticStyle: {
                    opacity: "0"
                },
                attrs: {
                    type: "file",
                    id: "input",
                    accept: "image/*"
                },
                on: {
                    change: function(e) {
                        return t.tirggerFile(e)
                    }
                }
            })], 1)
        }
          , Qt = []
          , Yt = i("b85c")
          , Zt = i("1da1")
          , te = (i("96cf"),
        function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "icon-img-upload"
            }, [i("svg", {
                attrs: {
                    width: "24",
                    height: "24",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [i("g", {
                attrs: {
                    fill: "none",
                    "fill-rule": "evenodd",
                    opacity: "1"
                }
            }, [i("path", {
                attrs: {
                    d: "M3.5 3h17A1.5 1.5 0 0 1 22 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 19.5v-15A1.5 1.5 0 0 1 3.5 3z",
                    stroke: "#FFF",
                    "stroke-width": "1.2",
                    "stroke-linecap": "round"
                }
            }), i("path", {
                attrs: {
                    d: "m6.176 16.253 1.583-4.68a1.5 1.5 0 0 1 2.794-.125l1.723 3.91a1.5 1.5 0 0 0 1.372.895h4.388",
                    stroke: "#FFF",
                    "stroke-width": "1.2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), i("ellipse", {
                attrs: {
                    fill: "#FFF",
                    transform: "rotate(45 15.1 9.5)",
                    cx: "15.1",
                    cy: "9.5",
                    rx: "1.1",
                    ry: "1.5"
                }
            })])])])
        }
        )
          , ee = []
          , ie = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                return Object(c["a"])(this, i),
                e.apply(this, arguments)
            }
            return i
        }(p["g"]);
        ie = Object(f["a"])([Object(p["a"])({
            components: {}
        })], ie);
        var oe = ie
          , ne = oe
          , se = Object(M["a"])(ne, te, ee, !1, null, null, null)
          , ae = se.exports
          , re = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                var t;
                return Object(c["a"])(this, i),
                t = e.apply(this, arguments),
                t.bubbleOn = !1,
                t.imgSrc = "",
                t.fileName = "",
                t
            }
            return Object(l["a"])(i, [{
                key: "selectFile",
                value: function() {
                    this.imgSrc || this.$refs.fileInput.click()
                }
            }, {
                key: "close",
                value: function() {
                    this.imgSrc = "",
                    this.$refs.fileInput.value = ""
                }
            }, {
                key: "tirggerFile",
                value: function() {
                    var t = Object(Zt["a"])(regeneratorRuntime.mark((function t(e) {
                        var i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return i = e.target.files,
                                    t.next = 3,
                                    this.uploadFileAndInsertContent(i);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "uploadFileAndInsertContent",
                value: function() {
                    var t = Object(Zt["a"])(regeneratorRuntime.mark((function t(e) {
                        var i, o, n, s, a, r, c, l = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    i = ["image/gif", "image/jpeg", "image/png", "image/webp"],
                                    o = new FormData,
                                    n = Object(Yt["a"])(e),
                                    t.prev = 3,
                                    n.s();
                                case 5:
                                    if ((s = n.n()).done) {
                                        t.next = 18;
                                        break
                                    }
                                    if (a = s.value,
                                    i.includes(a.type)) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 9:
                                    if (!(a.size > 1024e4)) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 11:
                                    o.append("file", a),
                                    o.append("sessionid", this.sessionid),
                                    o.append("ifGroup", this.targetInfo.gid ? "true" : "false"),
                                    o.append("remoteId", this.target),
                                    o.append("type", rt["b"].get("type") || "0");
                                case 16:
                                    t.next = 5;
                                    break;
                                case 18:
                                    t.next = 23;
                                    break;
                                case 20:
                                    t.prev = 20,
                                    t.t0 = t["catch"](3),
                                    n.e(t.t0);
                                case 23:
                                    return t.prev = 23,
                                    n.f(),
                                    t.finish(23);
                                case 26:
                                    return t.prev = 26,
                                    t.next = 29,
                                    Object(kt["l"])(o, this.$store.state.momoid);
                                case 29:
                                    r = t.sent,
                                    c = r.data,
                                    setTimeout((function() {
                                        l.imgSrc = c.data
                                    }
                                    ), 500),
                                    t.next = 37;
                                    break;
                                case 34:
                                    t.prev = 34,
                                    t.t1 = t["catch"](26),
                                    console.log(t.t1);
                                case 37:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[3, 20, 23, 26], [26, 34]])
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "formatImgSrc",
                value: function(t) {
                    var e = t.match(/\/(\w*)\/.*\/([\w-]+)_/);
                    if (e)
                        return "http://www.immomo.com/".concat(e[1], "?mode=GUID&filesize=0&file=").concat(e[2])
                }
            }, {
                key: "sendImg",
                value: function() {
                    this.imgSrc && (this.$emit("sendTalkMessage", {
                        text: this.formatImgSrc(this.imgSrc),
                        textType: 2
                    }),
                    this.imgSrc = "",
                    this.$refs.fileInput.value = "")
                }
            }, {
                key: "mounted",
                value: function() {}
            }]),
            i
        }(p["g"]);
        Object(f["a"])([Object(m["d"])("sessionid")], re.prototype, "sessionid", void 0),
        Object(f["a"])([Object(m["b"])("target")], re.prototype, "target", void 0),
        Object(f["a"])([Object(m["b"])("targetInfo")], re.prototype, "targetInfo", void 0),
        re = Object(f["a"])([Object(p["a"])({
            components: {
                BubbleArrow: Dt["a"],
                ImgUpload: ae,
                IconClose: _
            }
        })], re);
        var ce = re
          , le = ce
          , ue = (i("871d"),
        Object(M["a"])(le, qt, Qt, !1, null, null, null))
          , de = ue.exports;
        function fe(t) {
            return Math.floor(Math.random() * (1 + t))
        }
        function pe(t) {
            for (var e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", i = "", o = 0; o < t; o += 1) {
                var n = fe(e.length - 1);
                i += e.charAt(n)
            }
            return i
        }
        var me = i("1164")
          , he = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                return Object(c["a"])(this, i),
                e.apply(this, arguments)
            }
            return Object(l["a"])(i, [{
                key: "onMessageListChange",
                value: function(t, e) {
                    var i = this;
                    t && t.length && (e && e.length && e.length + 1 === t.length ? setTimeout((function() {
                        var t = i.$refs.messageBox.scrollHeight;
                        i.$refs.messageBox.scrollTo({
                            left: 0,
                            top: t,
                            behavior: "smooth"
                        })
                    }
                    ), 0) : setTimeout((function() {
                        var t = i.$refs.messageBox.scrollHeight;
                        i.$refs.messageBox.scrollTo({
                            left: 0,
                            top: t
                        })
                    }
                    ), 0))
                }
            }, {
                key: "messageList",
                get: function() {
                    return this.messageMap[this.target] || []
                }
            }, {
                key: "insertText",
                value: function(t) {
                    var e = this.$refs.textarea;
                    if (document.selection) {
                        e.focus();
                        var i = document.selection.createRange();
                        i.text = label,
                        i.select()
                    } else if (e.selectionStart || 0 === e.selectionStart) {
                        var o = e.selectionStart
                          , n = e.selectionEnd
                          , s = e.scrollTop;
                        e.value = e.value.substring(0, o) + t + e.value.substring(n, e.value.length),
                        s > 0 && (e.scrollTop = s),
                        e.selectionStart = o + t.length,
                        e.selectionEnd = o + t.length,
                        e.focus()
                    } else
                        e.value += t,
                        e.focus()
                }
            }, {
                key: "textareaKeyDown",
                value: function(t) {
                    var e = this.$refs.textarea;
                    if (13 === t.keyCode) {
                        if (this.$refs.file.imgSrc)
                            return void this.$refs.file.sendImg();
                        if (t.ctrlKey || t.shiftKey)
                            return e.value += "\n",
                            !1;
                        if (e.value.length > 200)
                            return void me["a"].show("输入文字过长");
                        this.sendTalkMessage({
                            text: e.value,
                            textType: 1
                        }),
                        setTimeout((function() {
                            e.value = ""
                        }
                        ), 0)
                    }
                }
            }, {
                key: "sendTalkMessage",
                value: function(t) {
                    var e = t.text
                      , i = t.textType
                      , o = t.img;
                    this.im.socket.send("Talk", {
                        massId: "".concat((new Date).getTime()).concat(pe(4)),
                        from: this.momoid,
                        to: this.target,
                        text: e,
                        textType: i || 1,
                        toType: this.targetInfo.gid ? 2 : 1,
                        ip: "127.0.0.1",
                        img: o
                    })
                }
            }]),
            i
        }(p["g"]);
        Object(f["a"])([Object(p["d"])()], he.prototype, "im", void 0),
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.messageMap
        }
        ))], he.prototype, "messageMap", void 0),
        Object(f["a"])([Object(m["b"])("target")], he.prototype, "target", void 0),
        Object(f["a"])([Object(p["h"])("messageList")], he.prototype, "onMessageListChange", null),
        Object(f["a"])([Object(m["b"])("targetInfo")], he.prototype, "targetInfo", void 0),
        Object(f["a"])([Object(m["d"])((function(t) {
            return t.momoid
        }
        ))], he.prototype, "momoid", void 0),
        he = Object(f["a"])([Object(p["a"])({
            components: {
                MessageItem: Ht,
                EmojiSelect: Vt,
                FileUpload: de
            }
        })], he);
        var ge = he
          , ve = ge
          , be = (i("2c39"),
        Object(M["a"])(ve, Pt, St, !1, null, null, null))
          , ye = be.exports
          , ke = i("6347")
          , Oe = i("b32d")
          , je = i("6ce5")
          , we = 0
          , Ce = function() {
            return we += 1,
            we
        }
          , Me = document.createElement("div");
        Me.id = "imEnvInfo",
        Me.onclick = function() {
            Me.remove()
        }
        ;
        var Ie = document.createElement("style")
          , _e = "#imEnvInfo{position: fixed;z-index: 999;background: rgba(0,0,0,0.4);left: 0;top: 0;color: #ffffff;font-size: 20px;line-height: 28px;padding:2px 4px}"
          , xe = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i(t) {
                var o, n = t.momoid, s = t.roomid, a = t.token, r = (t.barType,
                t.url), l = t.isPostMsg, u = void 0 !== l && l, d = t.postDuration, f = void 0 === d ? 5e3 : d, p = t.postTopNum, m = void 0 === p ? 5e3 : p, h = t.isDev, g = void 0 !== h && h, v = t.isParseReturn, b = void 0 === v || v, y = t.isHvu, k = void 0 !== y && y, O = t.timeDiff, j = void 0 === O ? 0 : O;
                return Object(c["a"])(this, i),
                o = e.call(this),
                o.envStyleInjected = !1,
                o.url = r,
                o.checkAuthTimes = 0,
                o.reconnectTimes = 0,
                o.reconnectTimer = null,
                o.pingTimer = null,
                o.socket = null,
                o.isOnline = !1,
                o.authData = {
                    momoid: n,
                    roomid: s,
                    webimToken: a,
                    ua: navigator.userAgent
                },
                o.isPostMsg = u,
                o.postDuration = f,
                o.postTopNum = m,
                o.goPostArr = [],
                o.postMsgTimer = null,
                o.postUrl = "//live-log.immomo.com/v3/log/web/wsReport",
                o.isDev = g,
                o.isParseReturn = b,
                o.isHvu = k,
                o.timeDiff = j,
                "undefined" === typeof WebSocket ? (o.emit("unSupportWebsockt"),
                o.consoleError("websocket: unSupportWebsockt")) : o.init(),
                o
            }
            return Object(l["a"])(i, [{
                key: "init",
                value: function() {
                    var t = this;
                    window.onunload = function() {
                        t.close(),
                        t.log("window unload")
                    }
                    ,
                    this.connect()
                }
            }, {
                key: "succeedAuthInit",
                value: function(t) {
                    var e = t.data;
                    this.isOnline = !0,
                    this.reconnectTimes = 0,
                    this.startPingTimer(),
                    this.emit("authSuccess"),
                    this.isPostMsg && this.startPostMsgTimer(),
                    !this.envStyleInjected && "prod" !== e.env && e.env && (document.body.appendChild(Me),
                    document.body.appendChild(Ie),
                    Ie.innerHTML = _e,
                    this.envStyleInjected = !0),
                    Me.innerHTML = "IM ENV: ".concat(e.env)
                }
            }, {
                key: "close",
                value: function() {
                    this.isOnline = !1,
                    this.stopPostMsgTimer(),
                    this.stopPingTimer(),
                    this.socket && this.socket.close()
                }
            }, {
                key: "connect",
                value: function() {
                    this.socket = new WebSocket(this.url),
                    console.log("connect"),
                    this.bindEvent()
                }
            }, {
                key: "bindEvent",
                value: function() {
                    var t = this;
                    this.socket && (this.socket.onopen = function(e) {
                        t.log("Socket: open"),
                        t.auth(),
                        t.emit("open", e)
                    }
                    ,
                    this.socket.onmessage = function(e) {
                        t.log("Socket: message");
                        var i = (new Date).getTime();
                        try {
                            var o = JSON.parse(e.data)
                              , n = o.serverTime || 0;
                            switch (o.action) {
                            case "SauthRet":
                                t.succeedAuthInit(o);
                                break;
                            case "Pong":
                                t.log("Pong");
                                break;
                            default:
                                if (t.log("message ".concat(o.msgId)),
                                !t.isParseReturn)
                                    return t.emit("message", o);
                                t.goPostArr.push({
                                    msgId: o.msgId,
                                    clientTime: i,
                                    serverTime: i - t.timeDiff,
                                    realServerTime: n
                                }),
                                t.emit("message", o);
                                break
                            }
                        } catch (s) {
                            t.log("Error: ".concat(s))
                        }
                    }
                    ,
                    this.socket.onclose = function(e) {
                        if (t.log("Socket: close"),
                        t.close(),
                        t.emit("close", e),
                        t.reconnectTimes >= 0)
                            return t.consoleError("websocket: reconnectFail with url: ".concat(t.url)),
                            t.emit("reconnectFail");
                        t.reconnectTimes += 1,
                        t.reconnectTimer = setTimeout((function() {
                            t.connect()
                        }
                        ), 3e3)
                    }
                    ,
                    this.socket.onerror = function(e) {
                        t.log("Socket: error", e),
                        t.close(),
                        t.emit("error", e)
                    }
                    )
                }
            }, {
                key: "auth",
                value: function() {
                    var t = this;
                    this.send("Sauth", this.authData),
                    this.checkAuthTimes = 0,
                    setTimeout((function() {
                        return t.checkAuth()
                    }
                    ), 1e3)
                }
            }, {
                key: "checkAuth",
                value: function() {
                    var t = this;
                    this.isOnline || (this.checkAuthTimes > 3 ? (this.emit("authFail"),
                    this.log("authFail"),
                    this.close()) : (this.checkAuthTimes += 1,
                    setTimeout((function() {
                        return t.checkAuth()
                    }
                    ), 3e3)))
                }
            }, {
                key: "send",
                value: function(t, e) {
                    if (this.socket)
                        if (this.socket.readyState === WebSocket.OPEN) {
                            var i = {
                                msgId: Ce(),
                                clientTime: (new Date).getTime(),
                                action: t,
                                data: e
                            }
                              , o = JSON.stringify(i);
                            this.socket.send(o),
                            this.log("Sent: ".concat(o))
                        } else
                            this.log("Not connected")
                }
            }, {
                key: "startPostMsgTimer",
                value: function(t, e) {
                    var i = this;
                    t && (this.postDuration = t),
                    e && (this.postTopNum = e),
                    this.stopPostMsgTimer(),
                    this.isPostMsg = !0,
                    this.postMsgTimer = setInterval((function() {
                        var t = i.goPostArr.splice(0, i.postTopNum);
                        t.length > 0 && i.postMsg(t)
                    }
                    ), this.postDuration)
                }
            }, {
                key: "stopPostMsgTimer",
                value: function() {
                    this.isPostMsg = !1,
                    clearInterval(this.postMsgTimer)
                }
            }, {
                key: "startPingTimer",
                value: function() {
                    var t = this;
                    this.stopPingTimer(),
                    this.pingTimer = setInterval((function() {
                        t.socket && t.isOnline && t.socket.send(JSON.stringify({
                            msgId: Ce(),
                            clientTime: (new Date).getTime(),
                            action: "Ping",
                            data: {}
                        }))
                    }
                    ), 3e4)
                }
            }, {
                key: "stopPingTimer",
                value: function() {
                    clearInterval(this.pingTimer)
                }
            }, {
                key: "postMsg",
                value: function(t) {
                    var e = this;
                    return Object(je["a"])(this.postUrl, {
                        msg: JSON.stringify(t),
                        barType: this.authData.barType,
                        momoid: this.authData.momoid,
                        url: window.location.href
                    }).then((function() {
                        var i = "";
                        t.forEach((function(t) {
                            i += "".concat(t.msgId, "  ")
                        }
                        )),
                        e.log("IM postMsg success num:".concat(t.length, " info: ").concat(i))
                    }
                    ))["catch"]((function(t) {
                        console.error("IM postMsg error".concat(t))
                    }
                    ))
                }
            }, {
                key: "log",
                value: function(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
                        i[o - 1] = arguments[o];
                    if (this.isDev)
                        try {
                            console.log.apply(null, arguments)
                        } catch (n) {
                            console.error("not support apply, reason:".concat(n))
                        }
                }
            }, {
                key: "consoleError",
                value: function(t) {
                    this.isHvu && console.error(new Error(t))
                }
            }]),
            i
        }(ke["EventEmitter"])
          , Te = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i(t) {
                var o, n = t.momoid, s = t.roomid, a = t.token, r = t.barType, l = t.url, u = t.downgrade, d = void 0 === u ? 0 : u, f = t.delay, p = void 0 === f ? 1e3 : f, m = t.interval, h = void 0 === m ? 5e3 : m, g = t.onClose, v = t.isPostMsg, b = t.postDuration, y = t.postTopNum, k = t.isDev, O = void 0 !== k && k, j = t.isParseReturn, w = void 0 === j || j, C = t.isHvu, M = void 0 !== C && C, I = t.socketUrlBackupList, _ = t.nowTime, x = void 0 === _ ? 0 : _, T = t.throttleTime, L = void 0 === T ? 200 : T;
                return Object(c["a"])(this, i),
                o = e.call(this),
                o.socketOptions = {
                    momoid: n,
                    roomid: s,
                    token: a,
                    barType: r,
                    url: l,
                    isPostMsg: v,
                    postDuration: b,
                    postTopNum: y,
                    isDev: O,
                    isParseReturn: w,
                    isHvu: M,
                    timeDiff: (new Date).getTime() - x
                },
                o.isDowngrade = d,
                o.delay = p,
                o.interval = h,
                o.onClose = g,
                o.socket = null,
                o.pollingTimer = void 0,
                o.delayTimer = void 0,
                o.isDev = O,
                o.isParseReturn = w,
                o.socketUrlBackupList = I,
                o.backupTime = 0,
                o.isHvu = M,
                o.throttleTime = L,
                o.init(),
                o
            }
            return Object(l["a"])(i, [{
                key: "init",
                value: function() {
                    return this.isDowngrade ? this.startPolling() : this.initSocket()
                }
            }, {
                key: "emitIM",
                value: function(t) {
                    return this.emit("message", t, "ws")
                }
            }, {
                key: "throttleIM",
                value: function(t) {
                    var e = this
                      , i = null
                      , o = {};
                    return function(t) {
                        try {
                            if (e.isParseReturn && o[t.action] && o[t.action].serverTime && o[t.action].serverTime >= t.data.content.serverTime)
                                return;
                            i ? o[t.action] = e.isParseReturn ? t.data : t : (clearTimeout(i),
                            o[t.action] = e.isParseReturn ? t.data : t,
                            i = setTimeout((function() {
                                e.emitIM(o),
                                o = {},
                                i = null
                            }
                            ), e.throttleTime))
                        } catch (n) {
                            e.consoleError(n)
                        }
                    }
                }
            }, {
                key: "initSocket",
                value: function() {
                    var t = this;
                    this.socket = new xe(this.socketOptions),
                    this.socket.addListener("message", this.throttleIM(this.emitIM)),
                    this.socket.addListener("close", (function() {
                        t.onClose(),
                        console.log("close")
                    }
                    )),
                    this.socket.addListener("unSupportWebsockt", (function() {
                        t.delay = 0,
                        t.startPolling()
                    }
                    )),
                    this.socket.addListener("authSuccess", (function() {
                        t.stopPolling()
                    }
                    )),
                    this.socket.addListener("authFail", (function() {
                        t.delay = 0,
                        t.startPolling()
                    }
                    )),
                    this.socket.addListener("reconnectFail", (function() {
                        if (!t.socketUrlBackupList || t.socketUrlBackupList.length <= 0 || t.backupTime > t.socketUrlBackupList.length - 1)
                            return t.delay = 0,
                            t.startPolling(),
                            t.consoleError("websocket: backup url connect all fail"),
                            void t.logReport("websocket: backup url connect all fail");
                        t.logReport("websocket: reconnectFail with url:".concat(t.socketOptions.url)),
                        t.socketOptions.url = t.socketUrlBackupList[t.backupTime],
                        t.backupTime += 1,
                        t.initSocket()
                    }
                    ))
                }
            }, {
                key: "startPolling",
                value: function() {}
            }, {
                key: "stopPolling",
                value: function() {
                    this.delayTimer = clearTimeout(this.delayTimer),
                    this.pollingTimer = clearInterval(this.pollingTimer)
                }
            }, {
                key: "polling",
                value: function() {}
            }, {
                key: "downgrade",
                value: function() {
                    this.socket && this.socket.isOnline && (this.socket.close(),
                    this.delay = 0,
                    this.startPolling())
                }
            }, {
                key: "stopIMPost",
                value: function() {
                    this.socketOptions.isPostMsg = !1,
                    this.socket && this.socket.stopPostMsgTimer()
                }
            }, {
                key: "reStartIMPost",
                value: function(t, e) {
                    this.socketOptions.postDuration = t,
                    this.socketOptions.postTopNum = e,
                    this.socketOptions.isPostMsg = !0,
                    this.socket && this.socket.startPostMsgTimer(t, e)
                }
            }, {
                key: "destory",
                value: function() {
                    this.stopIMPost(),
                    this.stopPolling(),
                    this.socket && this.socket.close()
                }
            }, {
                key: "tracker",
                value: function(t) {
                    return Object(Oe["a"])("/m/activity/track", t, [0, 200], !1)["catch"]((function(t) {
                        console.error(t)
                    }
                    ))
                }
            }, {
                key: "consoleError",
                value: function(t) {
                    this.isHvu && console.error(new Error(t))
                }
            }, {
                key: "logReport",
                value: function(t) {
                    this.isHvu && window.LMP && window.LMP.postCustomData && "function" === typeof window.LMP.postCustomData && window.LMP.postCustomData({
                        type: "imLog",
                        log: t
                    })
                }
            }]),
            i
        }(ke["EventEmitter"])
          , Le = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return t.info ? i("div", {
                staticClass: "profile-box",
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.info = null
                    }
                }
            }, [i("div", {
                staticClass: "profile-main-wrap",
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    }
                }
            }, [i("img", {
                staticClass: "avatar",
                attrs: {
                    src: t.info.avatar,
                    alt: ""
                }
            }), i("p", {
                staticClass: "name"
            }, [t._v(t._s(t.info.name))]), t.momoid ? i("div", {
                staticClass: "desc"
            }, [i("SexAge", {
                attrs: {
                    info: t.info
                }
            }), i("p", {
                staticClass: "constellation"
            }, [t._v(t._s(t.info.constellation))])], 1) : i("div", {
                staticClass: "desc"
            }, [t._v(t._s(t.info.memberCount) + "/" + t._s(t.info.memberMaxCount))]), i("div", {
                staticClass: "nav"
            }, t._l(t.navList, (function(e) {
                return i("div", {
                    key: e.key,
                    staticClass: "item",
                    class: {
                        cur: t.curNav === e.key
                    },
                    on: {
                        click: function(i) {
                            return t.navClick(e.key)
                        }
                    }
                }, [t._v(" " + t._s(e.name) + " ")])
            }
            )), 0), "profile" === t.curNav ? i("div", {
                staticClass: "info-table-wrap scroll-wrap"
            }, [i("div", {
                staticClass: "info-table scroll-box"
            }, [t.momoid ? [i("p", {
                staticClass: "line"
            }, [i("span", {
                staticClass: "th"
            }, [t._v("陌陌号")]), i("span", {
                staticClass: "td"
            }, [t._v(t._s(t.info.momoid))])]), i("p", {
                staticClass: "line"
            }, [i("span", {
                staticClass: "th"
            }, [t._v("个人签名")]), i("span", {
                staticClass: "td"
            }, [t._v(t._s(t.info.sign || "无"))])]), i("p", {
                staticClass: "line"
            }, [i("span", {
                staticClass: "th"
            }, [t._v("注册日期")]), i("span", {
                staticClass: "td"
            }, [t._v(t._s(t.info.regTime || ""))])]), i("p", {
                staticClass: "line"
            }, [i("span", {
                staticClass: "th"
            }, [t._v("关系")]), i("span", {
                staticClass: "td"
            }, [t._v(t._s(t.relationStr))])])] : t._e(), t.gid ? [i("p", {
                staticClass: "line"
            }, [i("span", {
                staticClass: "th"
            }, [t._v("群组号")]), i("span", {
                staticClass: "td"
            }, [t._v(t._s(t.info.gid))])]), i("p", {
                staticClass: "line"
            }, [i("span", {
                staticClass: "th"
            }, [t._v("群主")]), i("span", {
                staticClass: "td"
            }, [t._v(t._s(t.info.owner))])]), i("p", {
                staticClass: "line"
            }, [i("span", {
                staticClass: "th"
            }, [t._v("群介绍")]), i("span", {
                staticClass: "td"
            }, [t._v(t._s(t.info.sign || "无"))])]), i("p", {
                staticClass: "line"
            }, [i("span", {
                staticClass: "th"
            }, [t._v("创建日期")]), i("span", {
                staticClass: "td"
            }, [t._v(t._s(t.info.createTime))])])] : t._e()], 2)]) : t._e(), "members" === t.curNav ? i("div", {
                staticClass: "members-wrap",
                on: {
                    scroll: t.scroll
                }
            }, [i("div", {
                staticClass: "photos"
            }, t._l(t.members, (function(e, o) {
                return i("img", {
                    key: o,
                    attrs: {
                        src: e.avatar,
                        alt: ""
                    },
                    on: {
                        click: function(i) {
                            return t.avatarClick(e.momoid)
                        }
                    }
                })
            }
            )), 0)]) : t._e(), "photos" === t.curNav ? i("div", {
                staticClass: "photos-wrap"
            }, [i("div", {
                staticClass: "photos"
            }, t._l(t.info.photos, (function(e, o) {
                return i("img", {
                    key: o,
                    attrs: {
                        src: e,
                        alt: ""
                    },
                    on: {
                        click: function(i) {
                            return t.showPhoto(e)
                        }
                    }
                })
            }
            )), 0)]) : t._e(), t.ifSelf ? t._e() : i("div", {
                staticClass: "btn",
                on: {
                    click: t.openChat
                }
            }, [t._v("对话")]), i("div", {
                staticClass: "close",
                on: {
                    click: function(e) {
                        t.info = null
                    }
                }
            })]), t.curPhoto ? i("div", {
                staticClass: "show-photo-box",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.hidePhoto.apply(null, arguments)
                    }
                }
            }, [i("img", {
                attrs: {
                    src: t.curPhoto,
                    alt: ""
                }
            })]) : t._e()]) : t._e()
        }
          , Pe = []
          , Se = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                var t;
                return Object(c["a"])(this, i),
                t = e.apply(this, arguments),
                t.info = null,
                t.curNav = "profile",
                t.momoid = "",
                t.gid = "",
                t.ifSelf = !1,
                t.curPhoto = "",
                t.members = [],
                t.token = "",
                t.offset = 0,
                t.hasNext = !0,
                t.fetchMemberLock = !1,
                t
            }
            return Object(l["a"])(i, [{
                key: "navList",
                get: function() {
                    return this.gid ? [{
                        name: "群组资料",
                        key: "profile"
                    }, {
                        name: "群组成员",
                        key: "members"
                    }, {
                        name: "相册",
                        key: "photos"
                    }] : [{
                        name: "用户资料",
                        key: "profile"
                    }, {
                        name: "相册",
                        key: "photos"
                    }]
                }
            }, {
                key: "relationStr",
                get: function() {
                    return this.info && this.info.relation ? {
                        both: "好友",
                        fans: "粉丝",
                        follow: "关注",
                        none: "陌生人"
                    }[this.info.relation] : ""
                }
            }, {
                key: "navClick",
                value: function(t) {
                    this.curNav = t
                }
            }, {
                key: "hidePhoto",
                value: function() {
                    this.curPhoto = ""
                }
            }, {
                key: "scroll",
                value: function(t) {
                    this.fetchMemberLock || this.hasNext && null !== t && void 0 !== t && t.target && t.target.scrollHeight - t.target.scrollTop - t.target.offsetHeight < 50 && this.getMembers()
                }
            }, {
                key: "showPhoto",
                value: function(t) {
                    this.curPhoto = t
                }
            }, {
                key: "openChat",
                value: function() {
                    rt["a"].emit("startChatTo", this.momoid, this.gid),
                    this.info = null
                }
            }, {
                key: "avatarClick",
                value: function(t) {
                    rt["a"].emit("show_profile", t, "")
                }
            }, {
                key: "getMembers",
                value: function() {
                    var t = this;
                    this.fetchMemberLock || this.hasNext && (this.fetchMemberLock = !0,
                    Object(kt["g"])({
                        sessionid: this.token,
                        gid: this.gid,
                        offset: this.offset
                    }).then((function(e) {
                        t.fetchMemberLock = !1,
                        e.data.data.list && 0 === e.data.data.list.length ? t.hasNext = !1 : (t.members = t.members.concat(e.data.data.list),
                        t.offset += e.data.data.list.length)
                    }
                    ))["catch"]((function(e) {
                        t.fetchMemberLock = !1,
                        console.error(e)
                    }
                    )))
                }
            }, {
                key: "mounted",
                value: function() {
                    var t = this;
                    rt["a"].addListener("show_profile", (function(e, i) {
                        t.momoid = e,
                        t.gid = i,
                        t.info = null,
                        t.curNav = "profile",
                        t.members = [],
                        i ? (Object(kt["e"])({
                            sessionid: t.token,
                            gid: i
                        }).then((function(e) {
                            t.info = e.data.data.profile
                        }
                        )),
                        t.getMembers()) : Object(kt["h"])({
                            sessionid: t.token,
                            momoid: e
                        }).then((function(e) {
                            t.info = e.data.data.profile,
                            t.ifSelf = e.data.data.ifSelf
                        }
                        ))
                    }
                    ))
                }
            }]),
            i
        }(p["g"]);
        Se = Object(f["a"])([Object(p["a"])({
            components: {
                SexAge: y["a"]
            }
        })], Se);
        var Ee = Se
          , Be = Ee
          , De = (i("b3d7"),
        Object(M["a"])(Be, Le, Pe, !1, null, null, null))
          , Re = De.exports;
        window.startChatTo = function(t, e) {
            rt["a"].emit("startChatTo", t, e)
        }
        ,
        window.hideIMWindow = function(t) {
            rt["a"].emit("hideIMWindow", t)
        }
        ;
        var Fe = function(t) {
            Object(u["a"])(i, t);
            var e = Object(d["a"])(i);
            function i() {
                var t;
                return Object(c["a"])(this, i),
                t = e.apply(this, arguments),
                t.im = null,
                t.imClosed = !1,
                t.imKicked = !1,
                t.tempChat = null,
                t
            }
            return Object(l["a"])(i, [{
                key: "hideImgDetail",
                value: function() {
                    this.$store.commit("setImgDetail", "")
                }
            }, {
                key: "mounted",
                value: function() {
                    var t = this;
                    "1" === rt["b"].get("type") ? Object(kt["j"])().then((function(e) {
                        if (t.$store.commit("setMomoid", e.data.data.momoid),
                        e.data && 488 === e.data.ec) {
                            var i = window.location.href;
                            window.location.href = "".concat(e.data.data.loginUrl, "&redirect_url=").concat(i)
                        } else
                            0 === e.data.ec ? t.initData() : me["a"].show(e.data.em)
                    }
                    )) : this.getBridgeInfo().then(this.initData),
                    setTimeout((function() {
                        document.addEventListener("click", t.domClick),
                        rt["a"].addListener("hideIMWindow", (function(e) {
                            t.$store.commit("setIfWindowHide", e)
                        }
                        ))
                    }
                    ), 1e3)
                }
            }, {
                key: "initData",
                value: function() {
                    var t = this;
                    this.getRecentList(0),
                    this.getFriends(),
                    this.getProfile(),
                    this.getImConfig().then((function(e) {
                        t.initIM(e.data.data)
                    }
                    ))
                }
            }, {
                key: "reload",
                value: function() {
                    window.location.reload()
                }
            }, {
                key: "domClick",
                value: function() {
                    rt["a"].emit("domClick")
                }
            }, {
                key: "initIM",
                value: function(t) {
                    var e = this
                      , i = t.momoid
                      , o = (t.pingInterval,
                    t.socketUrl)
                      , n = t.token;
                    this.im instanceof Te || (this.im = new Te({
                        momoid: i,
                        token: n,
                        url: o,
                        barType: "",
                        roomid: "",
                        onClose: function() {
                            e.imClosed = !0
                        }
                    }),
                    this.im.addListener("message", this.handleMessage.bind(this)))
                }
            }, {
                key: "fetchGameInfo",
                value: function() {}
            }, {
                key: "handleMessage",
                value: function(t, e) {
                    "ws" === e && t.Talk && t.Talk.list && this.reciveMessage(t.Talk.list),
                    "ws" === e && t.Kick && (this.imKicked = !0)
                }
            }]),
            i
        }(p["g"]);
        Object(f["a"])([Object(m["a"])("getBridgeInfo")], Fe.prototype, "getBridgeInfo", void 0),
        Object(f["a"])([Object(m["a"])("reciveMessage")], Fe.prototype, "reciveMessage", void 0),
        Object(f["a"])([Object(m["a"])("getRecentList")], Fe.prototype, "getRecentList", void 0),
        Object(f["a"])([Object(m["a"])("getImConfig")], Fe.prototype, "getImConfig", void 0),
        Object(f["a"])([Object(m["a"])("getFriends")], Fe.prototype, "getFriends", void 0),
        Object(f["a"])([Object(m["a"])("getProfile")], Fe.prototype, "getProfile", void 0),
        Object(f["a"])([Object(m["d"])("sessionid")], Fe.prototype, "sessionid", void 0),
        Object(f["a"])([Object(m["d"])("imgDetail")], Fe.prototype, "imgDetail", void 0),
        Fe = Object(f["a"])([Object(p["a"])({
            components: {
                SideBar: ht,
                ControlBar: Lt,
                ChatBox: ye,
                Profile: Re
            }
        })], Fe);
        var Ne = Fe
          , $e = Ne
          , Ae = (i("644e"),
        Object(M["a"])($e, a, r, !1, null, null, null))
          , He = Ae.exports
          , Ue = i("2909")
          , We = (i("d81d"),
        i("45fc"),
        i("2f62"))
          , ze = i("53ca");
        i("6062"),
        i("3ca3"),
        i("ddb0"),
        i("07ac");
        function Je(t, e) {
            if (!t)
                return t;
            if (void 0 === e)
                return Object(Ue["a"])(new Set(t));
            var i = {
                string: function(t) {
                    return t[e]
                },
                function: function(t) {
                    return e(t)
                }
            }
              , o = i[Object(ze["a"])(e)]
              , n = t.reduce((function(t, e) {
                return t[o(e)] = e,
                t
            }
            ), {});
            return Object.values(n)
        }
        var Ke = i("9ad4");
        function Ge(t) {
            var e = t.text
              , i = t.type;
            switch (i) {
            case 1:
                return;
            case 2:
                t.img = e,
                t.text = "图片消息";
                break;
            case 3:
                t.text = "发送一条语音消息,请在手机查看";
                break;
            case 5:
                t.text = "发送一条表情消息,请在手机查看";
                break;
            case 8:
                t.text = "发送一条礼物消息,请在手机查看";
                break;
            case 12:
                t.text = "发送一条红包消息,请在手机查看";
                break;
            case 15:
                t.text = "发送一条礼物消息,请在手机查看";
                break;
            case 19:
                t.text = "发送一条通话消息,请在手机查看";
                break;
            default:
                t.text = "发送一条消息,请在手机查看";
                break
            }
        }
        var Xe = rt["b"].get("sessionid");
        o["default"].use(We["a"]);
        var Ve = !1;
        function qe(t, e) {
            return e.map((function(e) {
                return e.momoid ? (o["default"].set(t.profileMap, e.momoid, e),
                {
                    momoid: e.momoid
                }) : e.gid ? (o["default"].set(t.groupMap, e.gid, e),
                {
                    gid: e.gid
                }) : {}
            }
            ))
        }
        var Qe = !1
          , Ye = new We["a"].Store({
            state: {
                momoid: "",
                roomid: "",
                sessionid: "",
                curMode: "message",
                imgDetail: "",
                newMessageMap: {},
                noReplyList: [],
                targetId: null,
                messageMap: {},
                recentList: [],
                groupList: [],
                profile: null,
                profileMap: {},
                groupMap: {},
                followingList: [],
                fansList: [],
                friendList: [],
                ifWindowHide: !0,
                offset: {},
                hasNext: {
                    following: !0,
                    fans: !0,
                    group: !1,
                    friend: !0
                }
            },
            getters: {
                target: function(t) {
                    return t.targetId ? t.targetId.momoid || t.targetId.gid : -1
                },
                targetInfo: function(t, e) {
                    if (t.targetId)
                        return t.targetId.momoid ? t.profileMap[t.targetId.momoid] : t.targetId.gid ? t.groupMap[t.targetId.gid] : void 0
                },
                newMessageCount: function(t) {
                    return Object.keys(t.newMessageMap).map((function(e) {
                        return t.recentList.some((function(t) {
                            return e === (t.gid || t.momoid)
                        }
                        )) && t.newMessageMap[e] || 0
                    }
                    )).reduce((function(t, e) {
                        return t + e
                    }
                    ), 0)
                }
            },
            mutations: {
                setMode: function(t, e) {
                    t.curMode = e
                },
                setRecentList: function(t, e) {
                    t.recentList = e
                },
                setIfWindowHide: function(t, e) {
                    t.ifWindowHide = e,
                    t.targetId && t.newMessageMap[t.targetId.momoid || t.targetId.gid || ""] && (t.newMessageMap[t.targetId.momoid || t.targetId.gid || ""] = 0)
                },
                setImgDetail: function(t, e) {
                    t.imgDetail = e
                },
                setMomoid: function(t, e) {
                    t.momoid = e
                }
            },
            actions: {
                getBridgeInfo: function(t) {
                    var e = t.state;
                    return Object(Ke["a"])().then((function(t) {
                        var i = t.momoid
                          , o = t.roomid
                          , n = t.token;
                        e.momoid = i || "663733616",
                        e.roomid = o,
                        e.sessionid = n || Xe
                    }
                    ))
                },
                setCurTarget: function(t, e) {
                    var i = t.state;
                    t.dispatch;
                    i.targetId = e,
                    i.ifWindowHide = !1,
                    i.newMessageMap[e.momoid || e.gid] && (i.newMessageMap[e.momoid || e.gid] = 0)
                },
                reciveMessage: function(t, e) {
                    var i = t.state
                      , n = t.dispatch
                      , s = {};
                    n("getRecentList"),
                    e.forEach((function(t) {
                        var e = JSON.parse(t);
                        "web_im_readed" !== e.action && e.params.data.forEach((function(t) {
                            var e, o = t.fields, n = "";
                            null !== (e = o.data) && void 0 !== e && e.repeatId || (Ge(o),
                            n = o.to === i.momoid ? o.fr : o.to,
                            s[n] = Object(Ue["a"])(i.messageMap[n] || []),
                            s[n].push(o),
                            o.noreply ? i.noReplyList.some((function(t) {
                                return t.momoid === o.fr
                            }
                            )) || Object(kt["h"])({
                                sessionid: i.sessionid,
                                momoid: n
                            }).then((function(t) {
                                i.profileMap[n] = t.data.data.profile,
                                i.noReplyList.unshift(t.data.data.profile)
                            }
                            )) : i.noReplyList.some((function(t, e) {
                                return t.momoid === n && (t.replyed = !0,
                                !0)
                            }
                            )))
                        }
                        ))
                    }
                    )),
                    Object.keys(s).forEach((function(t) {
                        var e, n, a, r = Je(s[t], "id"), c = ((null === r || void 0 === r ? void 0 : r.length) || 0) - ((null === (e = i.messageMap[t]) || void 0 === e ? void 0 : e.length) || 0), l = (i.newMessageMap[t] || 0) + (c > 0 ? c : 0);
                        i.ifWindowHide || (null === (n = i.targetId) || void 0 === n ? void 0 : n.momoid) !== t && (null === (a = i.targetId) || void 0 === a ? void 0 : a.gid) !== t || (l = 0),
                        o["default"].set(i.newMessageMap, t, l),
                        o["default"].set(i.messageMap, t, r)
                    }
                    ))
                },
                getImConfig: function(t) {
                    var e = t.state;
                    return Object(kt["f"])({
                        sessionid: e.sessionid
                    }).then((function(t) {
                        return e.momoid = t.data.data.momoid,
                        t
                    }
                    ))
                },
                getProfile: function(t, e) {
                    var i = t.state;
                    e = e || i.momoid,
                    Object(kt["h"])({
                        sessionid: i.sessionid,
                        momoid: e
                    }).then((function(t) {
                        return i.profile = t.data.data.profile,
                        t.data.data.profile
                    }
                    ))
                },
                feedProfileMapById: function(t, e) {
                    var i = t.state;
                    if (e)
                        return Object(kt["h"])({
                            sessionid: i.sessionid,
                            momoid: e
                        }).then((function(t) {
                            return o["default"].set(i.profileMap, e, t.data.data.profile),
                            t.data.data.profile
                        }
                        ))
                },
                fillProfileMapByList: function(t, e) {
                    var i = t.state;
                    return e.map((function(t) {
                        return t.momoid ? (o["default"].set(i.profileMap, t.momoid, t),
                        {
                            momoid: t.momoid
                        }) : t.gid ? (o["default"].set(i.groupMap, t.gid, t),
                        {
                            gid: t.gid
                        }) : {}
                    }
                    ))
                },
                getRecentList: function(t) {
                    var e = t.state
                      , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                    Ve || (Ve = !0,
                    setTimeout((function() {
                        Object(kt["i"])({
                            sessionid: e.sessionid
                        }).then((function(t) {
                            Ve = !1,
                            e.recentList = qe(e, t.data.data.list),
                            e.targetId || (e.targetId = e.recentList[0])
                        }
                        ))["catch"]((function(t) {
                            Ve = !1,
                            console.error(t)
                        }
                        ))
                    }
                    ), i))
                },
                getFriends: function(t) {
                    var e = t.state;
                    t.dispatch;
                    Object(kt["b"])({
                        sessionid: e.sessionid
                    }).then((function(t) {
                        e.followingList = qe(e, t.data.data.list),
                        e.offset.following = t.data.data.offset || t.data.data.list.length
                    }
                    )),
                    Object(kt["a"])({
                        sessionid: e.sessionid
                    }).then((function(t) {
                        e.fansList = qe(e, t.data.data.list),
                        e.offset.fans = t.data.data.offset || t.data.data.list.length
                    }
                    )),
                    Object(kt["c"])({
                        sessionid: e.sessionid
                    }).then((function(t) {
                        e.friendList = qe(e, t.data.data.list),
                        e.offset.friend = t.data.data.offset || t.data.data.list.length
                    }
                    )),
                    Object(kt["d"])({
                        sessionid: e.sessionid
                    }).then((function(t) {
                        e.groupList = qe(e, t.data.data.list),
                        e.offset.group = t.data.data.offset || t.data.data.list.length
                    }
                    ))
                },
                fetchList: function(t, e) {
                    var i = t.state;
                    if (!Qe && i.hasNext[e]) {
                        var o = {
                            friend: kt["c"],
                            following: kt["b"],
                            fans: kt["a"],
                            group: kt["d"]
                        }[e]
                          , n = i.offset[e];
                        o && (Qe = !0,
                        o({
                            sessionid: i.sessionid,
                            offset: n
                        }).then((function(t) {
                            Qe = !1,
                            i["".concat(e, "List")] = i["".concat(e, "List")].concat(qe(i, t.data.data.list)),
                            i.offset[e] = t.data.data.offset || (i.offset[e] || 0) + t.data.data.list.length,
                            void 0 !== t.data.data.hasNext ? i.hasNext[e] = t.data.data.hasNext : i.hasNext[e] = t.data.data.list && t.data.data.list.length
                        }
                        ))["catch"]((function(t) {
                            Qe = !1
                        }
                        )))
                    }
                },
                getGroupList: function(t) {
                    var e = t.state;
                    Object(kt["d"])({
                        sessionid: e.sessionid
                    }).then((function(t) {
                        e.groupList = qe(e, t.data.data.list)
                    }
                    ))
                }
            }
        });
        o["default"].use(s.a),
        new He({
            store: Ye
        }).$mount("#root")
    },
    4138: function(t, e, i) {
        "use strict";
        i("9bac")
    },
    4365: function(t, e, i) {},
    "644e": function(t, e, i) {
        "use strict";
        i("f1f5")
    },
    "871d": function(t, e, i) {
        "use strict";
        i("9a81")
    },
    "8c8d": function(t, e, i) {},
    9251: function(t, e, i) {},
    "958c": function(t, e, i) {},
    "9a81": function(t, e, i) {},
    "9bac": function(t, e, i) {},
    a0a6: function(t, e, i) {},
    a570: function(t, e, i) {
        "use strict";
        i("9251")
    },
    a736: function(t, e, i) {
        "use strict";
        i("a0a6")
    },
    b36c: function(t, e, i) {
        "use strict";
        i("958c")
    },
    b3d7: function(t, e, i) {
        "use strict";
        i("16b0")
    },
    c674: function(t, e, i) {
        "use strict";
        i("8c8d")
    },
    e589: function(t, e, i) {
        "use strict";
        i("4365")
    },
    eef0: function(t, e, i) {
        "use strict";
        i("3c41")
    },
    f1f5: function(t, e, i) {},
    f6b9: function(t, e, i) {}
});
