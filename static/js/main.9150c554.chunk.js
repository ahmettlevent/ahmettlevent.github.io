(this["webpackJsonpreact-ahmettlevent"] =
  this["webpackJsonpreact-ahmettlevent"] || []).push([
  [0],
  {
    27: function (e, t, a) {
      e.exports = a.p + "static/media/pp.c53b810d.jpg";
    },
    30: function (e, t, a) {
      e.exports = a(48);
    },
    39: function (e, t, a) {},
    40: function (e, t, a) {},
    41: function (e, t, a) {},
    42: function (e, t, a) {},
    44: function (e, t, a) {},
    45: function (e, t, a) {},
    46: function (e, t, a) {},
    48: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(15),
        l = a.n(c),
        i = a(29),
        o = a(18);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var s = a(8),
        u = a(14),
        m = { gitRepos: [], gitRepoLanguages: [] };
      var p = Object(s.c)({
          reposReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : m.gitRepos,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GET_REPOS_SUCCESS":
                return Object(u.a)(t.payload);
              default:
                return e;
            }
          },
          repoLangsReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : m.gitRepoLanguages,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GET_LANGUAGE_SUCCESS":
                return [].concat(Object(u.a)(e), Object(u.a)(t.payload));
              default:
                return e;
            }
          },
        }),
        h = a(26);
      a(39);
      var f = a(4),
        b = a(5),
        v = a(7),
        d = a(6),
        E = (a(40), a(41), a(42), a(27)),
        g = a.n(E),
        j = (function (e) {
          Object(v.a)(a, e);
          var t = Object(d.a)(a);
          function a() {
            return Object(f.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(b.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = { backgroundImage: "url(".concat(g.a, ")") };
                  return r.a.createElement(
                    "div",
                    { id: "profile", className: "ProfileCart" },
                    r.a.createElement("div", {
                      className: "navImage",
                      style: e,
                    }),
                    r.a.createElement(
                      "h1",
                      { className: "navName" },
                      "Ahmet Utku Levent"
                    ),
                    r.a.createElement(
                      "ul",
                      { className: "navList" },
                      r.a.createElement(
                        "li",
                        { className: "navList-item" },
                        r.a.createElement("a", { href: "/" }, "Github")
                      ),
                      r.a.createElement(
                        "li",
                        { className: "navList-item" },
                        r.a.createElement("a", { href: "#about" }, "About")
                      ),
                      r.a.createElement(
                        "li",
                        { className: "navList-item" },
                        r.a.createElement("a", { href: "/" }, "LinkedIn")
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        O = a(9),
        k = a.n(O),
        y = a(13),
        N = (a(44), a(28));
      function R(e) {
        return (function () {
          var t = Object(y.a)(
            k.a.mark(function t(a) {
              var n, r, c;
              return k.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = "https://api.github.com/users/".concat(
                          e,
                          "/repos"
                        )),
                        (t.next = 3),
                        fetch(n)
                      );
                    case 3:
                      return (r = t.sent), (t.next = 6), r.json();
                    case 6:
                      return (
                        (c = t.sent),
                        t.abrupt(
                          "return",
                          a({ type: "GET_REPOS_SUCCESS", payload: c })
                        )
                      );
                    case 8:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function S(e) {
        return (function () {
          var t = Object(y.a)(
            k.a.mark(function t(a) {
              var n, r, c, l;
              return k.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (n = []), (r = Object(N.a)(e));
                      try {
                        for (
                          l = function () {
                            var e = c.value;
                            fetch(e.languages_url)
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (t) {
                                return n.push({ id: e.id, langs: t });
                              });
                          },
                            r.s();
                          !(c = r.n()).done;

                        )
                          l();
                      } catch (i) {
                        r.e(i);
                      } finally {
                        r.f();
                      }
                      return t.abrupt(
                        "return",
                        a({ type: "GET_LANGUAGE_SUCCESS", payload: n })
                      );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      }
      var C = (function (e) {
        Object(v.a)(a, e);
        var t = Object(d.a)(a);
        function a() {
          return Object(f.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(b.a)(a, [
            {
              key: "componentDidMount",
              value: function () {
                this.getProps();
              },
            },
            {
              key: "getProps",
              value: (function () {
                var e = Object(y.a)(
                  k.a.mark(function e() {
                    return k.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.props.actions.getRepos("ahmettlevent")
                              );
                            case 2:
                              this.props.gitRepos.length > 0 &&
                                this.props.actions.getLangs(
                                  this.props.gitRepos
                                );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "render",
              value: function () {
                return r.a.createElement(
                  "div",
                  { id: "github", className: "GitHub-Container" },
                  r.a.createElement(
                    "span",
                    { className: "Github-nm" },
                    "Github Repos"
                  ),
                  r.a.createElement(
                    "div",
                    { className: "GithubRepos-Container" },
                    r.a.createElement(
                      "ul",
                      { className: "GithubReposList" },
                      this.props.gitRepos.map(function (e) {
                        return r.a.createElement(
                          "li",
                          { key: e.id, className: "GithubRepoListItem" },
                          r.a.createElement(
                            "div",
                            { className: "GithubRepo" },
                            r.a.createElement(
                              "div",
                              { className: "ct-des-name" },
                              r.a.createElement(
                                "div",
                                { className: "repoName" },
                                r.a.createElement(
                                  "a",
                                  { href: e.html_url },
                                  e.name,
                                  "\xa0 \xa0",
                                  r.a.createElement("i", {
                                    className: "fas fa-external-link-alt",
                                  })
                                )
                              ),
                              r.a.createElement(
                                "div",
                                { className: "repoDescription" },
                                r.a.createElement(
                                  "p",
                                  null,
                                  null != e.description
                                    ? e.description
                                    : "ahmettlevent" === e.name
                                    ? "Profil Reposu"
                                    : "Bu repoda A\xe7\u0131klama Bulunmamaktad\u0131r"
                                )
                              )
                            )
                          )
                        );
                      })
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      var L = Object(o.b)(
          function (e) {
            return {
              gitRepos: e.reposReducer,
              gitRepoLanguages: e.repoLangsReducer,
            };
          },
          function (e) {
            return {
              actions: {
                getRepos: Object(s.b)(R, e),
                getLangs: Object(s.b)(S, e),
              },
            };
          }
        )(C),
        w =
          (a(45),
          (function (e) {
            Object(v.a)(a, e);
            var t = Object(d.a)(a);
            function a() {
              return Object(f.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(b.a)(a, [
                {
                  key: "render",
                  value: function () {
                    return r.a.createElement(
                      "div",
                      { id: "about", className: "AboutCard-Container" },
                      r.a.createElement("div", {
                        className: "bg-clevelandImage",
                      }),
                      r.a.createElement(
                        "span",
                        { className: "AboutCard-nm" },
                        "About Me"
                      ),
                      r.a.createElement(
                        "div",
                        { className: "AboutMe-Container" },
                        r.a.createElement(
                          "h1",
                          { className: "AboutMe-P" },
                          "Ad\u0131m : Ahmet Utku Levent (19) :P",
                          r.a.createElement("br", null),
                          " ",
                          r.a.createElement("br", null),
                          r.a.createElement("br", null),
                          "Bu k\u0131s\u0131mda Artistik Yaz\u0131l\u0131mla Al\xe2kal\u0131 bi s\xf6z olucak \u015fimdilik bo\u015f :(",
                          r.a.createElement("br", null),
                          r.a.createElement("br", null),
                          "\u0130lgilendi\u011fim Framework, K\xfct\xfcphane ve Diller ;",
                          r.a.createElement("br", null),
                          r.a.createElement("br", null),
                          "Python (Flask - Tkiner -",
                          " ",
                          r.a.createElement(
                            "span",
                            { className: "soonDiv" },
                            "Django ",
                            r.a.createElement(
                              "span",
                              { className: "soonTag" },
                              "soon"
                            )
                          ),
                          " ",
                          "- Selenium)",
                          r.a.createElement("br", null),
                          "HTML5 + CSS3 ",
                          r.a.createElement("br", null),
                          "JavaScript ES7,ES6 ",
                          "->",
                          " (ExpressJs - ReactJs)",
                          r.a.createElement("br", null),
                          "MVC - OOP - REST ",
                          r.a.createElement("br", null),
                          "Unity",
                          r.a.createElement("br", null),
                          r.a.createElement("br", null),
                          r.a.createElement("br", null),
                          "(Al\xe2kal\u0131 Projeler",
                          " ",
                          r.a.createElement(
                            "a",
                            {
                              rel: "noopener noreferrer",
                              target: "_blank",
                              className: "githubLink",
                              href: "https://github.com/ahmettlevent",
                            },
                            "Github"
                          ),
                          " ",
                          "Hesab\u0131mda Mevcut)",
                          r.a.createElement(
                            "span",
                            { className: "schoolInfo" },
                            r.a.createElement(
                              "span",
                              null,
                              "\xdcniversite : \u0130stinye \xdcniversitesi ",
                              r.a.createElement("br", null),
                              "B\xf6l\xfcm : Yaz\u0131l\u0131m M\xfchendisli\u011fi - 2.S\u0131n\u0131f"
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        A =
          (a(46),
          (function (e) {
            Object(v.a)(a, e);
            var t = Object(d.a)(a);
            function a(e) {
              var n;
              return (
                Object(f.a)(this, a),
                ((n = t.call(this, e)).state = { scrollPose: 0 }),
                n
              );
            }
            return (
              Object(b.a)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    setInterval(function () {
                      return e.setState({ scrollPose: window.pageYOffset });
                    }, 1200);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    clearInterval(this.interval);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "a",
                        {
                          className: "goTo goToFirst",
                          href:
                            this.state.scrollPose >= 700
                              ? "#about"
                              : "#profile",
                        },
                        r.a.createElement("i", {
                          className: "fas fa-chevron-up",
                        })
                      ),
                      r.a.createElement(
                        "a",
                        {
                          className: "goTo goToLast",
                          href:
                            this.state.scrollPose <= 600 ? "#about" : "#github",
                        },
                        r.a.createElement("i", {
                          className: "fas fa-chevron-down",
                        })
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        G = (function (e) {
          Object(v.a)(a, e);
          var t = Object(d.a)(a);
          function a() {
            return Object(f.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(b.a)(a, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    { className: "landingContainer" },
                    r.a.createElement(j, null),
                    r.a.createElement(w, null),
                    r.a.createElement(L, null),
                    r.a.createElement(A, null)
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        P = (function (e) {
          Object(v.a)(a, e);
          var t = Object(d.a)(a);
          function a(e) {
            var n;
            return (
              Object(f.a)(this, a),
              ((n = t.call(this, e)).state = { isLoading: !0 }),
              n
            );
          }
          return (
            Object(b.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.timerHandle = setTimeout(function () {
                    return e.setState({ isLoading: !1 });
                  }, 3e3);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.timerHandle &&
                    (clearTimeout(this.timerHandle), (this.timerHandle = 0));
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement("div", null, r.a.createElement(G, null))
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        T = Object(s.d)(p, Object(s.a)(h.a));
      l.a.render(
        r.a.createElement(
          i.a,
          null,
          r.a.createElement(o.a, { store: T }, r.a.createElement(P, null))
        ),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[30, 1, 2]],
]);
//# sourceMappingURL=main.9150c554.chunk.js.map
