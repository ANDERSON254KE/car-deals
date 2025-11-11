var ey = Object.defineProperty;
var ty = (e, t, r) => t in e ? ey(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var aa = (e, t, r) => ty(e, typeof t != "symbol" ? t + "" : t, r);
function ry(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(n, i);
          a && Object.defineProperty(e, i, a.get ? a : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Wt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ja = { exports: {} }, G = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lc;
function ny() {
  if (lc) return G;
  lc = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), d = Symbol.iterator;
  function h(O) {
    return O === null || typeof O != "object" ? null : (O = d && O[d] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var p = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, v = Object.assign, y = {};
  function b(O, T, F) {
    this.props = O, this.context = T, this.refs = y, this.updater = F || p;
  }
  b.prototype.isReactComponent = {}, b.prototype.setState = function(O, T) {
    if (typeof O != "object" && typeof O != "function" && O != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, O, T, "setState");
  }, b.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function w() {
  }
  w.prototype = b.prototype;
  function x(O, T, F) {
    this.props = O, this.context = T, this.refs = y, this.updater = F || p;
  }
  var A = x.prototype = new w();
  A.constructor = x, v(A, b.prototype), A.isPureReactComponent = !0;
  var S = Array.isArray;
  function _() {
  }
  var P = { H: null, A: null, T: null, S: null }, N = Object.prototype.hasOwnProperty;
  function j(O, T, F) {
    var U = F.ref;
    return {
      $$typeof: e,
      type: O,
      key: T,
      ref: U !== void 0 ? U : null,
      props: F
    };
  }
  function B(O, T) {
    return j(O.type, T, O.props);
  }
  function R(O) {
    return typeof O == "object" && O !== null && O.$$typeof === e;
  }
  function k(O) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(F) {
      return T[F];
    });
  }
  var K = /\/+/g;
  function W(O, T) {
    return typeof O == "object" && O !== null && O.key != null ? k("" + O.key) : T.toString(36);
  }
  function te(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (typeof O.status == "string" ? O.then(_, _) : (O.status = "pending", O.then(
          function(T) {
            O.status === "pending" && (O.status = "fulfilled", O.value = T);
          },
          function(T) {
            O.status === "pending" && (O.status = "rejected", O.reason = T);
          }
        )), O.status) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function re(O, T, F, U, V) {
    var ie = typeof O;
    (ie === "undefined" || ie === "boolean") && (O = null);
    var ce = !1;
    if (O === null) ce = !0;
    else
      switch (ie) {
        case "bigint":
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case e:
            case t:
              ce = !0;
              break;
            case l:
              return ce = O._init, re(
                ce(O._payload),
                T,
                F,
                U,
                V
              );
          }
      }
    if (ce)
      return V = V(O), ce = U === "" ? "." + W(O, 0) : U, S(V) ? (F = "", ce != null && (F = ce.replace(K, "$&/") + "/"), re(V, T, F, "", function(Y) {
        return Y;
      })) : V != null && (R(V) && (V = B(
        V,
        F + (V.key == null || O && O.key === V.key ? "" : ("" + V.key).replace(
          K,
          "$&/"
        ) + "/") + ce
      )), T.push(V)), 1;
    ce = 0;
    var Ve = U === "" ? "." : U + ":";
    if (S(O))
      for (var I = 0; I < O.length; I++)
        U = O[I], ie = Ve + W(U, I), ce += re(
          U,
          T,
          F,
          ie,
          V
        );
    else if (I = h(O), typeof I == "function")
      for (O = I.call(O), I = 0; !(U = O.next()).done; )
        U = U.value, ie = Ve + W(U, I++), ce += re(
          U,
          T,
          F,
          ie,
          V
        );
    else if (ie === "object") {
      if (typeof O.then == "function")
        return re(
          te(O),
          T,
          F,
          U,
          V
        );
      throw T = String(O), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ce;
  }
  function X(O, T, F) {
    if (O == null) return O;
    var U = [], V = 0;
    return re(O, U, "", "", function(ie) {
      return T.call(F, ie, V++);
    }), U;
  }
  function ge(O) {
    if (O._status === -1) {
      var T = O._result;
      T = T(), T.then(
        function(F) {
          (O._status === 0 || O._status === -1) && (O._status = 1, O._result = F);
        },
        function(F) {
          (O._status === 0 || O._status === -1) && (O._status = 2, O._result = F);
        }
      ), O._status === -1 && (O._status = 0, O._result = T);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var ue = typeof reportError == "function" ? reportError : function(O) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof O == "object" && O !== null && typeof O.message == "string" ? String(O.message) : String(O),
        error: O
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", O);
      return;
    }
    console.error(O);
  }, We = {
    map: X,
    forEach: function(O, T, F) {
      X(
        O,
        function() {
          T.apply(this, arguments);
        },
        F
      );
    },
    count: function(O) {
      var T = 0;
      return X(O, function() {
        T++;
      }), T;
    },
    toArray: function(O) {
      return X(O, function(T) {
        return T;
      }) || [];
    },
    only: function(O) {
      if (!R(O))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return O;
    }
  };
  return G.Activity = f, G.Children = We, G.Component = b, G.Fragment = r, G.Profiler = i, G.PureComponent = x, G.StrictMode = n, G.Suspense = s, G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, G.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(O) {
      return P.H.useMemoCache(O);
    }
  }, G.cache = function(O) {
    return function() {
      return O.apply(null, arguments);
    };
  }, G.cacheSignal = function() {
    return null;
  }, G.cloneElement = function(O, T, F) {
    if (O == null)
      throw Error(
        "The argument must be a React element, but you passed " + O + "."
      );
    var U = v({}, O.props), V = O.key;
    if (T != null)
      for (ie in T.key !== void 0 && (V = "" + T.key), T)
        !N.call(T, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && T.ref === void 0 || (U[ie] = T[ie]);
    var ie = arguments.length - 2;
    if (ie === 1) U.children = F;
    else if (1 < ie) {
      for (var ce = Array(ie), Ve = 0; Ve < ie; Ve++)
        ce[Ve] = arguments[Ve + 2];
      U.children = ce;
    }
    return j(O.type, V, U);
  }, G.createContext = function(O) {
    return O = {
      $$typeof: o,
      _currentValue: O,
      _currentValue2: O,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, O.Provider = O, O.Consumer = {
      $$typeof: a,
      _context: O
    }, O;
  }, G.createElement = function(O, T, F) {
    var U, V = {}, ie = null;
    if (T != null)
      for (U in T.key !== void 0 && (ie = "" + T.key), T)
        N.call(T, U) && U !== "key" && U !== "__self" && U !== "__source" && (V[U] = T[U]);
    var ce = arguments.length - 2;
    if (ce === 1) V.children = F;
    else if (1 < ce) {
      for (var Ve = Array(ce), I = 0; I < ce; I++)
        Ve[I] = arguments[I + 2];
      V.children = Ve;
    }
    if (O && O.defaultProps)
      for (U in ce = O.defaultProps, ce)
        V[U] === void 0 && (V[U] = ce[U]);
    return j(O, ie, V);
  }, G.createRef = function() {
    return { current: null };
  }, G.forwardRef = function(O) {
    return { $$typeof: u, render: O };
  }, G.isValidElement = R, G.lazy = function(O) {
    return {
      $$typeof: l,
      _payload: { _status: -1, _result: O },
      _init: ge
    };
  }, G.memo = function(O, T) {
    return {
      $$typeof: c,
      type: O,
      compare: T === void 0 ? null : T
    };
  }, G.startTransition = function(O) {
    var T = P.T, F = {};
    P.T = F;
    try {
      var U = O(), V = P.S;
      V !== null && V(F, U), typeof U == "object" && U !== null && typeof U.then == "function" && U.then(_, ue);
    } catch (ie) {
      ue(ie);
    } finally {
      T !== null && F.types !== null && (T.types = F.types), P.T = T;
    }
  }, G.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, G.use = function(O) {
    return P.H.use(O);
  }, G.useActionState = function(O, T, F) {
    return P.H.useActionState(O, T, F);
  }, G.useCallback = function(O, T) {
    return P.H.useCallback(O, T);
  }, G.useContext = function(O) {
    return P.H.useContext(O);
  }, G.useDebugValue = function() {
  }, G.useDeferredValue = function(O, T) {
    return P.H.useDeferredValue(O, T);
  }, G.useEffect = function(O, T) {
    return P.H.useEffect(O, T);
  }, G.useEffectEvent = function(O) {
    return P.H.useEffectEvent(O);
  }, G.useId = function() {
    return P.H.useId();
  }, G.useImperativeHandle = function(O, T, F) {
    return P.H.useImperativeHandle(O, T, F);
  }, G.useInsertionEffect = function(O, T) {
    return P.H.useInsertionEffect(O, T);
  }, G.useLayoutEffect = function(O, T) {
    return P.H.useLayoutEffect(O, T);
  }, G.useMemo = function(O, T) {
    return P.H.useMemo(O, T);
  }, G.useOptimistic = function(O, T) {
    return P.H.useOptimistic(O, T);
  }, G.useReducer = function(O, T, F) {
    return P.H.useReducer(O, T, F);
  }, G.useRef = function(O) {
    return P.H.useRef(O);
  }, G.useState = function(O) {
    return P.H.useState(O);
  }, G.useSyncExternalStore = function(O, T, F) {
    return P.H.useSyncExternalStore(
      O,
      T,
      F
    );
  }, G.useTransition = function() {
    return P.H.useTransition();
  }, G.version = "19.2.0", G;
}
var Hr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Hr.exports;
var fc;
function iy() {
  return fc || (fc = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      function r(m, E) {
        Object.defineProperty(a.prototype, m, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              E[0],
              E[1]
            );
          }
        });
      }
      function n(m) {
        return m === null || typeof m != "object" ? null : (m = M && m[M] || m["@@iterator"], typeof m == "function" ? m : null);
      }
      function i(m, E) {
        m = (m = m.constructor) && (m.displayName || m.name) || "ReactClass";
        var D = m + "." + E;
        ke[D] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          E,
          m
        ), ke[D] = !0);
      }
      function a(m, E, D) {
        this.props = m, this.context = E, this.refs = Me, this.updater = D || se;
      }
      function o() {
      }
      function u(m, E, D) {
        this.props = m, this.context = E, this.refs = Me, this.updater = D || se;
      }
      function s() {
      }
      function c(m) {
        return "" + m;
      }
      function l(m) {
        try {
          c(m);
          var E = !1;
        } catch {
          E = !0;
        }
        if (E) {
          E = console;
          var D = E.error, $ = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return D.call(
            E,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            $
          ), c(m);
        }
      }
      function f(m) {
        if (m == null) return null;
        if (typeof m == "function")
          return m.$$typeof === Gv ? null : m.displayName || m.name || null;
        if (typeof m == "string") return m;
        switch (m) {
          case O:
            return "Fragment";
          case F:
            return "Profiler";
          case T:
            return "StrictMode";
          case ce:
            return "Suspense";
          case Ve:
            return "SuspenseList";
          case ne:
            return "Activity";
        }
        if (typeof m == "object")
          switch (typeof m.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), m.$$typeof) {
            case We:
              return "Portal";
            case V:
              return m.displayName || "Context";
            case U:
              return (m._context.displayName || "Context") + ".Consumer";
            case ie:
              var E = m.render;
              return m = m.displayName, m || (m = E.displayName || E.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
            case I:
              return E = m.displayName || null, E !== null ? E : f(m.type) || "Memo";
            case Y:
              E = m._payload, m = m._init;
              try {
                return f(m(E));
              } catch {
              }
          }
        return null;
      }
      function d(m) {
        if (m === O) return "<>";
        if (typeof m == "object" && m !== null && m.$$typeof === Y)
          return "<...>";
        try {
          var E = f(m);
          return E ? "<" + E + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function h() {
        var m = Q.A;
        return m === null ? null : m.getOwner();
      }
      function p() {
        return Error("react-stack-top-frame");
      }
      function v(m) {
        if (Sn.call(m, "key")) {
          var E = Object.getOwnPropertyDescriptor(m, "key").get;
          if (E && E.isReactWarning) return !1;
        }
        return m.key !== void 0;
      }
      function y(m, E) {
        function D() {
          rc || (rc = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            E
          ));
        }
        D.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: D,
          configurable: !0
        });
      }
      function b() {
        var m = f(this.type);
        return ic[m] || (ic[m] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), m = this.props.ref, m !== void 0 ? m : null;
      }
      function w(m, E, D, $, z, J) {
        var Z = D.ref;
        return m = {
          $$typeof: ue,
          type: m,
          key: E,
          props: D,
          _owner: $
        }, (Z !== void 0 ? Z : null) !== null ? Object.defineProperty(m, "ref", {
          enumerable: !1,
          get: b
        }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(m, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(m, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: z
        }), Object.defineProperty(m, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: J
        }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
      }
      function x(m, E) {
        return E = w(
          m.type,
          E,
          m.props,
          m._owner,
          m._debugStack,
          m._debugTask
        ), m._store && (E._store.validated = m._store.validated), E;
      }
      function A(m) {
        S(m) ? m._store && (m._store.validated = 1) : typeof m == "object" && m !== null && m.$$typeof === Y && (m._payload.status === "fulfilled" ? S(m._payload.value) && m._payload.value._store && (m._payload.value._store.validated = 1) : m._store && (m._store.validated = 1));
      }
      function S(m) {
        return typeof m == "object" && m !== null && m.$$typeof === ue;
      }
      function _(m) {
        var E = { "=": "=0", ":": "=2" };
        return "$" + m.replace(/[=:]/g, function(D) {
          return E[D];
        });
      }
      function P(m, E) {
        return typeof m == "object" && m !== null && m.key != null ? (l(m.key), _("" + m.key)) : E.toString(36);
      }
      function N(m) {
        switch (m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
          default:
            switch (typeof m.status == "string" ? m.then(s, s) : (m.status = "pending", m.then(
              function(E) {
                m.status === "pending" && (m.status = "fulfilled", m.value = E);
              },
              function(E) {
                m.status === "pending" && (m.status = "rejected", m.reason = E);
              }
            )), m.status) {
              case "fulfilled":
                return m.value;
              case "rejected":
                throw m.reason;
            }
        }
        throw m;
      }
      function j(m, E, D, $, z) {
        var J = typeof m;
        (J === "undefined" || J === "boolean") && (m = null);
        var Z = !1;
        if (m === null) Z = !0;
        else
          switch (J) {
            case "bigint":
            case "string":
            case "number":
              Z = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case ue:
                case We:
                  Z = !0;
                  break;
                case Y:
                  return Z = m._init, j(
                    Z(m._payload),
                    E,
                    D,
                    $,
                    z
                  );
              }
          }
        if (Z) {
          Z = m, z = z(Z);
          var fe = $ === "" ? "." + P(Z, 0) : $;
          return $r(z) ? (D = "", fe != null && (D = fe.replace(oc, "$&/") + "/"), j(z, E, D, "", function($t) {
            return $t;
          })) : z != null && (S(z) && (z.key != null && (Z && Z.key === z.key || l(z.key)), D = x(
            z,
            D + (z.key == null || Z && Z.key === z.key ? "" : ("" + z.key).replace(
              oc,
              "$&/"
            ) + "/") + fe
          ), $ !== "" && Z != null && S(Z) && Z.key == null && Z._store && !Z._store.validated && (D._store.validated = 2), z = D), E.push(z)), 1;
        }
        if (Z = 0, fe = $ === "" ? "." : $ + ":", $r(m))
          for (var ee = 0; ee < m.length; ee++)
            $ = m[ee], J = fe + P($, ee), Z += j(
              $,
              E,
              D,
              J,
              z
            );
        else if (ee = n(m), typeof ee == "function")
          for (ee === m.entries && (ac || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), ac = !0), m = ee.call(m), ee = 0; !($ = m.next()).done; )
            $ = $.value, J = fe + P($, ee++), Z += j(
              $,
              E,
              D,
              J,
              z
            );
        else if (J === "object") {
          if (typeof m.then == "function")
            return j(
              N(m),
              E,
              D,
              $,
              z
            );
          throw E = String(m), Error(
            "Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return Z;
      }
      function B(m, E, D) {
        if (m == null) return m;
        var $ = [], z = 0;
        return j(m, $, "", "", function(J) {
          return E.call(D, J, z++);
        }), $;
      }
      function R(m) {
        if (m._status === -1) {
          var E = m._ioInfo;
          E != null && (E.start = E.end = performance.now()), E = m._result;
          var D = E();
          if (D.then(
            function(z) {
              if (m._status === 0 || m._status === -1) {
                m._status = 1, m._result = z;
                var J = m._ioInfo;
                J != null && (J.end = performance.now()), D.status === void 0 && (D.status = "fulfilled", D.value = z);
              }
            },
            function(z) {
              if (m._status === 0 || m._status === -1) {
                m._status = 2, m._result = z;
                var J = m._ioInfo;
                J != null && (J.end = performance.now()), D.status === void 0 && (D.status = "rejected", D.reason = z);
              }
            }
          ), E = m._ioInfo, E != null) {
            E.value = D;
            var $ = D.displayName;
            typeof $ == "string" && (E.name = $);
          }
          m._status === -1 && (m._status = 0, m._result = D);
        }
        if (m._status === 1)
          return E = m._result, E === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            E
          ), "default" in E || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            E
          ), E.default;
        throw m._result;
      }
      function k() {
        var m = Q.H;
        return m === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), m;
      }
      function K() {
        Q.asyncTransitions--;
      }
      function W(m) {
        if (An === null)
          try {
            var E = ("require" + Math.random()).slice(0, 7);
            An = (e && e[E]).call(
              e,
              "timers"
            ).setImmediate;
          } catch {
            An = function($) {
              cc === !1 && (cc = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var z = new MessageChannel();
              z.port1.onmessage = $, z.port2.postMessage(void 0);
            };
          }
        return An(m);
      }
      function te(m) {
        return 1 < m.length && typeof AggregateError == "function" ? new AggregateError(m) : m[0];
      }
      function re(m, E) {
        E !== Pn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Pn = E;
      }
      function X(m, E, D) {
        var $ = Q.actQueue;
        if ($ !== null)
          if ($.length !== 0)
            try {
              ge($), W(function() {
                return X(m, E, D);
              });
              return;
            } catch (z) {
              Q.thrownErrors.push(z);
            }
          else Q.actQueue = null;
        0 < Q.thrownErrors.length ? ($ = te(Q.thrownErrors), Q.thrownErrors.length = 0, D($)) : E(m);
      }
      function ge(m) {
        if (!ia) {
          ia = !0;
          var E = 0;
          try {
            for (; E < m.length; E++) {
              var D = m[E];
              do {
                Q.didUsePromise = !1;
                var $ = D(!1);
                if ($ !== null) {
                  if (Q.didUsePromise) {
                    m[E] = D, m.splice(0, E);
                    return;
                  }
                  D = $;
                } else break;
              } while (!0);
            }
            m.length = 0;
          } catch (z) {
            m.splice(0, E + 1), Q.thrownErrors.push(z);
          } finally {
            ia = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var ue = Symbol.for("react.transitional.element"), We = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), V = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), Ve = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), M = Symbol.iterator, ke = {}, se = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(m) {
          i(m, "forceUpdate");
        },
        enqueueReplaceState: function(m) {
          i(m, "replaceState");
        },
        enqueueSetState: function(m) {
          i(m, "setState");
        }
      }, $e = Object.assign, Me = {};
      Object.freeze(Me), a.prototype.isReactComponent = {}, a.prototype.setState = function(m, E) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, m, E, "setState");
      }, a.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      var we = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Lr in we)
        we.hasOwnProperty(Lr) && r(Lr, we[Lr]);
      o.prototype = a.prototype, we = u.prototype = new o(), we.constructor = u, $e(we, a.prototype), we.isPureReactComponent = !0;
      var $r = Array.isArray, Gv = Symbol.for("react.client.reference"), Q = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Sn = Object.prototype.hasOwnProperty, tc = console.createTask ? console.createTask : function() {
        return null;
      };
      we = {
        react_stack_bottom_frame: function(m) {
          return m();
        }
      };
      var rc, nc, ic = {}, Xv = we.react_stack_bottom_frame.bind(
        we,
        p
      )(), Zv = tc(d(p)), ac = !1, oc = /\/+/g, uc = typeof reportError == "function" ? reportError : function(m) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var E = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
            error: m
          });
          if (!window.dispatchEvent(E)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", m);
          return;
        }
        console.error(m);
      }, cc = !1, An = null, Pn = 0, Tn = !1, ia = !1, sc = typeof queueMicrotask == "function" ? function(m) {
        queueMicrotask(function() {
          return queueMicrotask(m);
        });
      } : W;
      we = Object.freeze({
        __proto__: null,
        c: function(m) {
          return k().useMemoCache(m);
        }
      });
      var Lr = {
        map: B,
        forEach: function(m, E, D) {
          B(
            m,
            function() {
              E.apply(this, arguments);
            },
            D
          );
        },
        count: function(m) {
          var E = 0;
          return B(m, function() {
            E++;
          }), E;
        },
        toArray: function(m) {
          return B(m, function(E) {
            return E;
          }) || [];
        },
        only: function(m) {
          if (!S(m))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return m;
        }
      };
      t.Activity = ne, t.Children = Lr, t.Component = a, t.Fragment = O, t.Profiler = F, t.PureComponent = u, t.StrictMode = T, t.Suspense = ce, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, t.__COMPILER_RUNTIME = we, t.act = function(m) {
        var E = Q.actQueue, D = Pn;
        Pn++;
        var $ = Q.actQueue = E !== null ? E : [], z = !1;
        try {
          var J = m();
        } catch (ee) {
          Q.thrownErrors.push(ee);
        }
        if (0 < Q.thrownErrors.length)
          throw re(E, D), m = te(Q.thrownErrors), Q.thrownErrors.length = 0, m;
        if (J !== null && typeof J == "object" && typeof J.then == "function") {
          var Z = J;
          return sc(function() {
            z || Tn || (Tn = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(ee, $t) {
              z = !0, Z.then(
                function(mr) {
                  if (re(E, D), D === 0) {
                    try {
                      ge($), W(function() {
                        return X(
                          mr,
                          ee,
                          $t
                        );
                      });
                    } catch (Jv) {
                      Q.thrownErrors.push(Jv);
                    }
                    if (0 < Q.thrownErrors.length) {
                      var Qv = te(
                        Q.thrownErrors
                      );
                      Q.thrownErrors.length = 0, $t(Qv);
                    }
                  } else ee(mr);
                },
                function(mr) {
                  re(E, D), 0 < Q.thrownErrors.length && (mr = te(
                    Q.thrownErrors
                  ), Q.thrownErrors.length = 0), $t(mr);
                }
              );
            }
          };
        }
        var fe = J;
        if (re(E, D), D === 0 && (ge($), $.length !== 0 && sc(function() {
          z || Tn || (Tn = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), Q.actQueue = null), 0 < Q.thrownErrors.length)
          throw m = te(Q.thrownErrors), Q.thrownErrors.length = 0, m;
        return {
          then: function(ee, $t) {
            z = !0, D === 0 ? (Q.actQueue = $, W(function() {
              return X(
                fe,
                ee,
                $t
              );
            })) : ee(fe);
          }
        };
      }, t.cache = function(m) {
        return function() {
          return m.apply(null, arguments);
        };
      }, t.cacheSignal = function() {
        return null;
      }, t.captureOwnerStack = function() {
        var m = Q.getCurrentStack;
        return m === null ? null : m();
      }, t.cloneElement = function(m, E, D) {
        if (m == null)
          throw Error(
            "The argument must be a React element, but you passed " + m + "."
          );
        var $ = $e({}, m.props), z = m.key, J = m._owner;
        if (E != null) {
          var Z;
          e: {
            if (Sn.call(E, "ref") && (Z = Object.getOwnPropertyDescriptor(
              E,
              "ref"
            ).get) && Z.isReactWarning) {
              Z = !1;
              break e;
            }
            Z = E.ref !== void 0;
          }
          Z && (J = h()), v(E) && (l(E.key), z = "" + E.key);
          for (fe in E)
            !Sn.call(E, fe) || fe === "key" || fe === "__self" || fe === "__source" || fe === "ref" && E.ref === void 0 || ($[fe] = E[fe]);
        }
        var fe = arguments.length - 2;
        if (fe === 1) $.children = D;
        else if (1 < fe) {
          Z = Array(fe);
          for (var ee = 0; ee < fe; ee++)
            Z[ee] = arguments[ee + 2];
          $.children = Z;
        }
        for ($ = w(
          m.type,
          z,
          $,
          J,
          m._debugStack,
          m._debugTask
        ), z = 2; z < arguments.length; z++)
          A(arguments[z]);
        return $;
      }, t.createContext = function(m) {
        return m = {
          $$typeof: V,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, m.Provider = m, m.Consumer = {
          $$typeof: U,
          _context: m
        }, m._currentRenderer = null, m._currentRenderer2 = null, m;
      }, t.createElement = function(m, E, D) {
        for (var $ = 2; $ < arguments.length; $++)
          A(arguments[$]);
        $ = {};
        var z = null;
        if (E != null)
          for (ee in nc || !("__self" in E) || "key" in E || (nc = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), v(E) && (l(E.key), z = "" + E.key), E)
            Sn.call(E, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && ($[ee] = E[ee]);
        var J = arguments.length - 2;
        if (J === 1) $.children = D;
        else if (1 < J) {
          for (var Z = Array(J), fe = 0; fe < J; fe++)
            Z[fe] = arguments[fe + 2];
          Object.freeze && Object.freeze(Z), $.children = Z;
        }
        if (m && m.defaultProps)
          for (ee in J = m.defaultProps, J)
            $[ee] === void 0 && ($[ee] = J[ee]);
        z && y(
          $,
          typeof m == "function" ? m.displayName || m.name || "Unknown" : m
        );
        var ee = 1e4 > Q.recentlyCreatedOwnerStacks++;
        return w(
          m,
          z,
          $,
          h(),
          ee ? Error("react-stack-top-frame") : Xv,
          ee ? tc(d(m)) : Zv
        );
      }, t.createRef = function() {
        var m = { current: null };
        return Object.seal(m), m;
      }, t.forwardRef = function(m) {
        m != null && m.$$typeof === I ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof m != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          m === null ? "null" : typeof m
        ) : m.length !== 0 && m.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), m != null && m.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var E = { $$typeof: ie, render: m }, D;
        return Object.defineProperty(E, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return D;
          },
          set: function($) {
            D = $, m.name || m.displayName || (Object.defineProperty(m, "name", { value: $ }), m.displayName = $);
          }
        }), E;
      }, t.isValidElement = S, t.lazy = function(m) {
        m = { _status: -1, _result: m };
        var E = {
          $$typeof: Y,
          _payload: m,
          _init: R
        }, D = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return m._ioInfo = D, E._debugInfo = [{ awaited: D }], E;
      }, t.memo = function(m, E) {
        m == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          m === null ? "null" : typeof m
        ), E = {
          $$typeof: I,
          type: m,
          compare: E === void 0 ? null : E
        };
        var D;
        return Object.defineProperty(E, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return D;
          },
          set: function($) {
            D = $, m.name || m.displayName || (Object.defineProperty(m, "name", { value: $ }), m.displayName = $);
          }
        }), E;
      }, t.startTransition = function(m) {
        var E = Q.T, D = {};
        D._updatedFibers = /* @__PURE__ */ new Set(), Q.T = D;
        try {
          var $ = m(), z = Q.S;
          z !== null && z(D, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && (Q.asyncTransitions++, $.then(K, K), $.then(s, uc));
        } catch (J) {
          uc(J);
        } finally {
          E === null && D._updatedFibers && (m = D._updatedFibers.size, D._updatedFibers.clear(), 10 < m && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), E !== null && D.types !== null && (E.types !== null && E.types !== D.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), E.types = D.types), Q.T = E;
        }
      }, t.unstable_useCacheRefresh = function() {
        return k().useCacheRefresh();
      }, t.use = function(m) {
        return k().use(m);
      }, t.useActionState = function(m, E, D) {
        return k().useActionState(
          m,
          E,
          D
        );
      }, t.useCallback = function(m, E) {
        return k().useCallback(m, E);
      }, t.useContext = function(m) {
        var E = k();
        return m.$$typeof === U && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), E.useContext(m);
      }, t.useDebugValue = function(m, E) {
        return k().useDebugValue(m, E);
      }, t.useDeferredValue = function(m, E) {
        return k().useDeferredValue(m, E);
      }, t.useEffect = function(m, E) {
        return m == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), k().useEffect(m, E);
      }, t.useEffectEvent = function(m) {
        return k().useEffectEvent(m);
      }, t.useId = function() {
        return k().useId();
      }, t.useImperativeHandle = function(m, E, D) {
        return k().useImperativeHandle(m, E, D);
      }, t.useInsertionEffect = function(m, E) {
        return m == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), k().useInsertionEffect(m, E);
      }, t.useLayoutEffect = function(m, E) {
        return m == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), k().useLayoutEffect(m, E);
      }, t.useMemo = function(m, E) {
        return k().useMemo(m, E);
      }, t.useOptimistic = function(m, E) {
        return k().useOptimistic(m, E);
      }, t.useReducer = function(m, E, D) {
        return k().useReducer(m, E, D);
      }, t.useRef = function(m) {
        return k().useRef(m);
      }, t.useState = function(m) {
        return k().useState(m);
      }, t.useSyncExternalStore = function(m, E, D) {
        return k().useSyncExternalStore(
          m,
          E,
          D
        );
      }, t.useTransition = function() {
        return k().useTransition();
      }, t.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Hr, Hr.exports)), Hr.exports;
}
process.env.NODE_ENV === "production" ? ja.exports = ny() : ja.exports = iy();
var g = ja.exports;
const et = /* @__PURE__ */ Wt(g), ay = /* @__PURE__ */ ry({
  __proto__: null,
  default: et
}, [g]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), uy = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), dc = (e) => {
  const t = uy(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Hl = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), cy = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ly = g.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: a,
    iconNode: o,
    ...u
  }, s) => g.createElement(
    "svg",
    {
      ref: s,
      ...sy,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Hl("lucide", i),
      ...!a && !cy(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...o.map(([c, l]) => g.createElement(c, l)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = (e, t) => {
  const r = g.forwardRef(
    ({ className: n, ...i }, a) => g.createElement(ly, {
      ref: a,
      iconNode: t,
      className: Hl(
        `lucide-${oy(dc(e))}`,
        `lucide-${e}`,
        n
      ),
      ...i
    })
  );
  return r.displayName = dc(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
], hy = fy("trending-up", dy);
function ql(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = ql(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ye() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = ql(e)) && (n && (n += " "), n += t);
  return n;
}
var Pi = {}, Yl = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r === "__proto__";
  }
  e.isUnsafeProperty = t;
})(Yl);
var So = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    switch (typeof r) {
      case "number":
      case "symbol":
        return !1;
      case "string":
        return r.includes(".") || r.includes("[") || r.includes("]");
    }
  }
  e.isDeepKey = t;
})(So);
var Ao = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    var n;
    return typeof r == "string" || typeof r == "symbol" ? r : Object.is((n = r == null ? void 0 : r.valueOf) == null ? void 0 : n.call(r), -0) ? "-0" : String(r);
  }
  e.toKey = t;
})(Ao);
var Ti = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    const n = [], i = r.length;
    if (i === 0)
      return n;
    let a = 0, o = "", u = "", s = !1;
    for (r.charCodeAt(0) === 46 && (n.push(""), a++); a < i; ) {
      const c = r[a];
      u ? c === "\\" && a + 1 < i ? (a++, o += r[a]) : c === u ? u = "" : o += c : s ? c === '"' || c === "'" ? u = c : c === "]" ? (s = !1, n.push(o), o = "") : o += c : c === "[" ? (s = !0, o && (n.push(o), o = "")) : c === "." ? o && (n.push(o), o = "") : o += c, a++;
    }
    return o && n.push(o), n;
  }
  e.toPath = t;
})(Ti);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Yl, r = So, n = Ao, i = Ti;
  function a(u, s, c) {
    if (u == null)
      return c;
    switch (typeof s) {
      case "string": {
        if (t.isUnsafeProperty(s))
          return c;
        const l = u[s];
        return l === void 0 ? r.isDeepKey(s) ? a(u, i.toPath(s), c) : c : l;
      }
      case "number":
      case "symbol": {
        typeof s == "number" && (s = n.toKey(s));
        const l = u[s];
        return l === void 0 ? c : l;
      }
      default: {
        if (Array.isArray(s))
          return o(u, s, c);
        if (Object.is(s == null ? void 0 : s.valueOf(), -0) ? s = "-0" : s = String(s), t.isUnsafeProperty(s))
          return c;
        const l = u[s];
        return l === void 0 ? c : l;
      }
    }
  }
  function o(u, s, c) {
    if (s.length === 0)
      return c;
    let l = u;
    for (let f = 0; f < s.length; f++) {
      if (l == null || t.isUnsafeProperty(s[f]))
        return c;
      l = l[s[f]];
    }
    return l === void 0 ? c : l;
  }
  e.get = a;
})(Pi);
var py = Pi.get;
const Ci = /* @__PURE__ */ Wt(py);
var ot = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, ct = (e) => typeof e == "number" && e != +e, Jt = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1, H = (e) => (typeof e == "number" || e instanceof Number) && !ct(e), gt = (e) => H(e) || typeof e == "string", vy = 0, Zr = (e) => {
  var t = ++vy;
  return "".concat(e || "").concat(t);
}, Ft = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!H(t) && typeof t != "string")
    return n;
  var a;
  if (Jt(t)) {
    if (r == null)
      return n;
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return ct(a) && (a = n), i && r != null && a > r && (a = r), a;
}, Gl = (e) => {
  if (!Array.isArray(e))
    return !1;
  for (var t = e.length, r = {}, n = 0; n < t; n++)
    if (!r[e[n]])
      r[e[n]] = !0;
    else
      return !0;
  return !1;
};
function wt(e, t, r) {
  return H(e) && H(t) ? e + r * (t - e) : t;
}
function Xl(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : Ci(n, t)) === r);
}
var Pe = (e) => e === null || typeof e > "u", Po = (e) => Pe(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)), yy = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function To(e) {
  if (typeof e != "string")
    return !1;
  var t = yy;
  return t.includes(e);
}
var my = ["viewBox", "children"], hc = ["points", "pathLength"], oa = {
  svg: my,
  polygon: hc,
  polyline: hc
}, Co = (e, t) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ g.isValidElement(e) && (r = e.props), typeof r != "object" && typeof r != "function")
    return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    To(i) && (n[i] = (a) => r[i](r, a));
  }), n;
}, gy = (e, t, r) => (n) => (e(t, r, n), null), by = (e, t, r) => {
  if (e === null || typeof e != "object" && typeof e != "function")
    return null;
  var n = null;
  return Object.keys(e).forEach((i) => {
    var a = e[i];
    To(i) && typeof a == "function" && (n || (n = {}), n[i] = gy(a, t, r));
  }), n;
}, wy = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it, and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
];
function Zl(e) {
  if (typeof e != "string")
    return !1;
  var t = wy;
  return t.includes(e);
}
function hr(e) {
  var t = Object.entries(e).filter((r) => {
    var [n] = r;
    return Zl(n);
  });
  return Object.fromEntries(t);
}
var Ql = (e) => e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0, xy = (e, t, r, n) => {
  var i;
  if (typeof t == "symbol" || typeof t == "number")
    return !0;
  var a = (i = n && (oa == null ? void 0 : oa[n])) !== null && i !== void 0 ? i : [], o = t.startsWith("data-"), u = typeof e != "function" && (!!n && a.includes(t) || Zl(t)), s = !!r && To(t);
  return o || u || s;
}, Ie = (e, t, r) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var n = e;
  if (/* @__PURE__ */ g.isValidElement(e) && (n = e.props), typeof n != "object" && typeof n != "function")
    return null;
  var i = {};
  return Object.keys(n).forEach((a) => {
    var o;
    xy((o = n) === null || o === void 0 ? void 0 : o[a], a, t, r) && (i[a] = n[a]);
  }), i;
}, Oy = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Ia() {
  return Ia = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ia.apply(null, arguments);
}
function Ey(e, t) {
  if (e == null) return {};
  var r, n, i = _y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function _y(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Jl = /* @__PURE__ */ g.forwardRef((e, t) => {
  var {
    children: r,
    width: n,
    height: i,
    viewBox: a,
    className: o,
    style: u,
    title: s,
    desc: c
  } = e, l = Ey(e, Oy), f = a || {
    width: n,
    height: i,
    x: 0,
    y: 0
  }, d = ye("recharts-surface", o);
  return /* @__PURE__ */ g.createElement("svg", Ia({}, Ie(l, !0, "svg"), {
    className: d,
    width: n,
    height: i,
    style: u,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height),
    ref: t
  }), /* @__PURE__ */ g.createElement("title", null, s), /* @__PURE__ */ g.createElement("desc", null, c), r);
}), Sy = ["children", "className"];
function Ra() {
  return Ra = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ra.apply(null, arguments);
}
function Ay(e, t) {
  if (e == null) return {};
  var r, n, i = Py(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Py(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Tr = /* @__PURE__ */ g.forwardRef((e, t) => {
  var {
    children: r,
    className: n
  } = e, i = Ay(e, Sy), a = ye("recharts-layer", n);
  return /* @__PURE__ */ g.createElement("g", Ra({
    className: a
  }, Ie(i, !0), {
    ref: t
  }), r);
}), $a = { exports: {} }, Le = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pc;
function Ty() {
  if (pc) return Le;
  pc = 1;
  var e = g;
  function t(s) {
    var c = "https://react.dev/errors/" + s;
    if (1 < arguments.length) {
      c += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        c += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + s + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var n = {
    d: {
      f: r,
      r: function() {
        throw Error(t(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, i = Symbol.for("react.portal");
  function a(s, c, l) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: i,
      key: f == null ? null : "" + f,
      children: s,
      containerInfo: c,
      implementation: l
    };
  }
  var o = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function u(s, c) {
    if (s === "font") return "";
    if (typeof c == "string")
      return c === "use-credentials" ? c : "";
  }
  return Le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, Le.createPortal = function(s, c) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!c || c.nodeType !== 1 && c.nodeType !== 9 && c.nodeType !== 11)
      throw Error(t(299));
    return a(s, c, null, l);
  }, Le.flushSync = function(s) {
    var c = o.T, l = n.p;
    try {
      if (o.T = null, n.p = 2, s) return s();
    } finally {
      o.T = c, n.p = l, n.d.f();
    }
  }, Le.preconnect = function(s, c) {
    typeof s == "string" && (c ? (c = c.crossOrigin, c = typeof c == "string" ? c === "use-credentials" ? c : "" : void 0) : c = null, n.d.C(s, c));
  }, Le.prefetchDNS = function(s) {
    typeof s == "string" && n.d.D(s);
  }, Le.preinit = function(s, c) {
    if (typeof s == "string" && c && typeof c.as == "string") {
      var l = c.as, f = u(l, c.crossOrigin), d = typeof c.integrity == "string" ? c.integrity : void 0, h = typeof c.fetchPriority == "string" ? c.fetchPriority : void 0;
      l === "style" ? n.d.S(
        s,
        typeof c.precedence == "string" ? c.precedence : void 0,
        {
          crossOrigin: f,
          integrity: d,
          fetchPriority: h
        }
      ) : l === "script" && n.d.X(s, {
        crossOrigin: f,
        integrity: d,
        fetchPriority: h,
        nonce: typeof c.nonce == "string" ? c.nonce : void 0
      });
    }
  }, Le.preinitModule = function(s, c) {
    if (typeof s == "string")
      if (typeof c == "object" && c !== null) {
        if (c.as == null || c.as === "script") {
          var l = u(
            c.as,
            c.crossOrigin
          );
          n.d.M(s, {
            crossOrigin: l,
            integrity: typeof c.integrity == "string" ? c.integrity : void 0,
            nonce: typeof c.nonce == "string" ? c.nonce : void 0
          });
        }
      } else c == null && n.d.M(s);
  }, Le.preload = function(s, c) {
    if (typeof s == "string" && typeof c == "object" && c !== null && typeof c.as == "string") {
      var l = c.as, f = u(l, c.crossOrigin);
      n.d.L(s, l, {
        crossOrigin: f,
        integrity: typeof c.integrity == "string" ? c.integrity : void 0,
        nonce: typeof c.nonce == "string" ? c.nonce : void 0,
        type: typeof c.type == "string" ? c.type : void 0,
        fetchPriority: typeof c.fetchPriority == "string" ? c.fetchPriority : void 0,
        referrerPolicy: typeof c.referrerPolicy == "string" ? c.referrerPolicy : void 0,
        imageSrcSet: typeof c.imageSrcSet == "string" ? c.imageSrcSet : void 0,
        imageSizes: typeof c.imageSizes == "string" ? c.imageSizes : void 0,
        media: typeof c.media == "string" ? c.media : void 0
      });
    }
  }, Le.preloadModule = function(s, c) {
    if (typeof s == "string")
      if (c) {
        var l = u(c.as, c.crossOrigin);
        n.d.m(s, {
          as: typeof c.as == "string" && c.as !== "script" ? c.as : void 0,
          crossOrigin: l,
          integrity: typeof c.integrity == "string" ? c.integrity : void 0
        });
      } else n.d.m(s);
  }, Le.requestFormReset = function(s) {
    n.d.r(s);
  }, Le.unstable_batchedUpdates = function(s, c) {
    return s(c);
  }, Le.useFormState = function(s, c, l) {
    return o.H.useFormState(s, c, l);
  }, Le.useFormStatus = function() {
    return o.H.useHostTransitionStatus();
  }, Le.version = "19.2.0", Le;
}
var Be = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vc;
function Cy() {
  return vc || (vc = 1, process.env.NODE_ENV !== "production" && function() {
    function e() {
    }
    function t(f) {
      return "" + f;
    }
    function r(f, d, h) {
      var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        t(p);
        var v = !1;
      } catch {
        v = !0;
      }
      return v && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object"
      ), t(p)), {
        $$typeof: c,
        key: p == null ? null : "" + p,
        children: f,
        containerInfo: d,
        implementation: h
      };
    }
    function n(f, d) {
      if (f === "font") return "";
      if (typeof d == "string")
        return d === "use-credentials" ? d : "";
    }
    function i(f) {
      return f === null ? "`null`" : f === void 0 ? "`undefined`" : f === "" ? "an empty string" : 'something with type "' + typeof f + '"';
    }
    function a(f) {
      return f === null ? "`null`" : f === void 0 ? "`undefined`" : f === "" ? "an empty string" : typeof f == "string" ? JSON.stringify(f) : typeof f == "number" ? "`" + f + "`" : 'something with type "' + typeof f + '"';
    }
    function o() {
      var f = l.H;
      return f === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var u = g, s = {
      d: {
        f: e,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: e,
        C: e,
        L: e,
        m: e,
        X: e,
        S: e,
        M: e
      },
      p: 0,
      findDOMNode: null
    }, c = Symbol.for("react.portal"), l = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Be.createPortal = function(f, d) {
      var h = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return r(f, d, null, h);
    }, Be.flushSync = function(f) {
      var d = l.T, h = s.p;
      try {
        if (l.T = null, s.p = 2, f)
          return f();
      } finally {
        l.T = d, s.p = h, s.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Be.preconnect = function(f, d) {
      typeof f == "string" && f ? d != null && typeof d != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        a(d)
      ) : d != null && typeof d.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        i(d.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        i(f)
      ), typeof f == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, s.d.C(f, d));
    }, Be.prefetchDNS = function(f) {
      if (typeof f != "string" || !f)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          i(f)
        );
      else if (1 < arguments.length) {
        var d = arguments[1];
        typeof d == "object" && d.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          a(d)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          a(d)
        );
      }
      typeof f == "string" && s.d.D(f);
    }, Be.preinit = function(f, d) {
      if (typeof f == "string" && f ? d == null || typeof d != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        a(d)
      ) : d.as !== "style" && d.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        a(d.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        i(f)
      ), typeof f == "string" && d && typeof d.as == "string") {
        var h = d.as, p = n(h, d.crossOrigin), v = typeof d.integrity == "string" ? d.integrity : void 0, y = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
        h === "style" ? s.d.S(
          f,
          typeof d.precedence == "string" ? d.precedence : void 0,
          {
            crossOrigin: p,
            integrity: v,
            fetchPriority: y
          }
        ) : h === "script" && s.d.X(f, {
          crossOrigin: p,
          integrity: v,
          fetchPriority: y,
          nonce: typeof d.nonce == "string" ? d.nonce : void 0
        });
      }
    }, Be.preinitModule = function(f, d) {
      var h = "";
      if (typeof f == "string" && f || (h += " The `href` argument encountered was " + i(f) + "."), d !== void 0 && typeof d != "object" ? h += " The `options` argument encountered was " + i(d) + "." : d && "as" in d && d.as !== "script" && (h += " The `as` option encountered was " + a(d.as) + "."), h)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          h
        );
      else
        switch (h = d && typeof d.as == "string" ? d.as : "script", h) {
          case "script":
            break;
          default:
            h = a(h), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              h,
              f
            );
        }
      typeof f == "string" && (typeof d == "object" && d !== null ? (d.as == null || d.as === "script") && (h = n(
        d.as,
        d.crossOrigin
      ), s.d.M(f, {
        crossOrigin: h,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0
      })) : d == null && s.d.M(f));
    }, Be.preload = function(f, d) {
      var h = "";
      if (typeof f == "string" && f || (h += " The `href` argument encountered was " + i(f) + "."), d == null || typeof d != "object" ? h += " The `options` argument encountered was " + i(d) + "." : typeof d.as == "string" && d.as || (h += " The `as` option encountered was " + i(d.as) + "."), h && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        h
      ), typeof f == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
        h = d.as;
        var p = n(
          h,
          d.crossOrigin
        );
        s.d.L(f, h, {
          crossOrigin: p,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0,
          nonce: typeof d.nonce == "string" ? d.nonce : void 0,
          type: typeof d.type == "string" ? d.type : void 0,
          fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
          referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
          imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
          imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
          media: typeof d.media == "string" ? d.media : void 0
        });
      }
    }, Be.preloadModule = function(f, d) {
      var h = "";
      typeof f == "string" && f || (h += " The `href` argument encountered was " + i(f) + "."), d !== void 0 && typeof d != "object" ? h += " The `options` argument encountered was " + i(d) + "." : d && "as" in d && typeof d.as != "string" && (h += " The `as` option encountered was " + i(d.as) + "."), h && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        h
      ), typeof f == "string" && (d ? (h = n(
        d.as,
        d.crossOrigin
      ), s.d.m(f, {
        as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
        crossOrigin: h,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0
      })) : s.d.m(f));
    }, Be.requestFormReset = function(f) {
      s.d.r(f);
    }, Be.unstable_batchedUpdates = function(f, d) {
      return f(d);
    }, Be.useFormState = function(f, d, h) {
      return o().useFormState(f, d, h);
    }, Be.useFormStatus = function() {
      return o().useHostTransitionStatus();
    }, Be.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Be;
}
function ef() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ef);
    } catch (e) {
      console.error(e);
    }
  }
}
process.env.NODE_ENV === "production" ? (ef(), $a.exports = Ty()) : $a.exports = Cy();
var ky = $a.exports, My = /* @__PURE__ */ g.createContext(null);
function me(e) {
  return function() {
    return e;
  };
}
const La = Math.PI, Ba = 2 * La, Xt = 1e-6, Dy = Ba - Xt;
function tf(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Ny(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return tf;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class jy {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? tf : Ny(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, u = this._y1, s = n - t, c = i - r, l = o - t, f = u - r, d = l * l + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > Xt) if (!(Math.abs(f * s - c * l) > Xt) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - o, p = i - u, v = s * s + c * c, y = h * h + p * p, b = Math.sqrt(v), w = Math.sqrt(d), x = a * Math.tan((La - Math.acos((v + d - y) / (2 * b * w))) / 2), A = x / w, S = x / b;
      Math.abs(A - 1) > Xt && this._append`L${t + A * l},${r + A * f}`, this._append`A${a},${a},0,0,${+(f * h > l * p)},${this._x1 = t + S * s},${this._y1 = r + S * c}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), s = n * Math.sin(i), c = t + u, l = r + s, f = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > Xt || Math.abs(this._y1 - l) > Xt) && this._append`L${c},${l}`, n && (d < 0 && (d = d % Ba + Ba), d > Dy ? this._append`A${n},${n},0,1,${f},${t - u},${r - s}A${n},${n},0,1,${f},${this._x1 = c},${this._y1 = l}` : d > Xt && this._append`A${n},${n},0,${+(d >= La)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function rf(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new jy(t);
}
function ko(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function nf(e) {
  this._context = e;
}
nf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function ki(e) {
  return new nf(e);
}
function af(e) {
  return e[0];
}
function of(e) {
  return e[1];
}
function uf(e, t) {
  var r = me(!0), n = null, i = ki, a = null, o = rf(u);
  e = typeof e == "function" ? e : e === void 0 ? af : me(e), t = typeof t == "function" ? t : t === void 0 ? of : me(t);
  function u(s) {
    var c, l = (s = ko(s)).length, f, d = !1, h;
    for (n == null && (a = i(h = o())), c = 0; c <= l; ++c)
      !(c < l && r(f = s[c], c, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(f, c, s), +t(f, c, s));
    if (h) return a = null, h + "" || null;
  }
  return u.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : me(+s), u) : e;
  }, u.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : me(+s), u) : t;
  }, u.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : me(!!s), u) : r;
  }, u.curve = function(s) {
    return arguments.length ? (i = s, n != null && (a = i(n)), u) : i;
  }, u.context = function(s) {
    return arguments.length ? (s == null ? n = a = null : a = i(n = s), u) : n;
  }, u;
}
function Cn(e, t, r) {
  var n = null, i = me(!0), a = null, o = ki, u = null, s = rf(c);
  e = typeof e == "function" ? e : e === void 0 ? af : me(+e), t = typeof t == "function" ? t : me(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? of : me(+r);
  function c(f) {
    var d, h, p, v = (f = ko(f)).length, y, b = !1, w, x = new Array(v), A = new Array(v);
    for (a == null && (u = o(w = s())), d = 0; d <= v; ++d) {
      if (!(d < v && i(y = f[d], d, f)) === b)
        if (b = !b)
          h = d, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), p = d - 1; p >= h; --p)
            u.point(x[p], A[p]);
          u.lineEnd(), u.areaEnd();
        }
      b && (x[d] = +e(y, d, f), A[d] = +t(y, d, f), u.point(n ? +n(y, d, f) : x[d], r ? +r(y, d, f) : A[d]));
    }
    if (w) return u = null, w + "" || null;
  }
  function l() {
    return uf().defined(i).curve(o).context(a);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : me(+f), n = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : me(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : me(+f), c) : n;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : me(+f), r = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : me(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : me(+f), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return l().x(e).y(t);
  }, c.lineY1 = function() {
    return l().x(e).y(r);
  }, c.lineX1 = function() {
    return l().x(n).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : me(!!f), c) : i;
  }, c.curve = function(f) {
    return arguments.length ? (o = f, a != null && (u = o(a)), c) : o;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? a = u = null : u = o(a = f), c) : a;
  }, c;
}
class cf {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function Iy(e) {
  return new cf(e, !0);
}
function Ry(e) {
  return new cf(e, !1);
}
function Yn() {
}
function Gn(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function sf(e) {
  this._context = e;
}
sf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Gn(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        Gn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function $y(e) {
  return new sf(e);
}
function lf(e) {
  this._context = e;
}
lf.prototype = {
  areaStart: Yn,
  areaEnd: Yn,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Gn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Ly(e) {
  return new lf(e);
}
function ff(e) {
  this._context = e;
}
ff.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        Gn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function By(e) {
  return new ff(e);
}
function df(e) {
  this._context = e;
}
df.prototype = {
  areaStart: Yn,
  areaEnd: Yn,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function zy(e) {
  return new df(e);
}
function yc(e) {
  return e < 0 ? -1 : 1;
}
function mc(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (yc(a) + yc(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function gc(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function ua(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function Xn(e) {
  this._context = e;
}
Xn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        ua(this, this._t0, gc(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, ua(this, gc(this, r = mc(this, e, t)), r);
          break;
        default:
          ua(this, this._t0, r = mc(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function hf(e) {
  this._context = new pf(e);
}
(hf.prototype = Object.create(Xn.prototype)).point = function(e, t) {
  Xn.prototype.point.call(this, t, e);
};
function pf(e) {
  this._context = e;
}
pf.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function Uy(e) {
  return new Xn(e);
}
function Ky(e) {
  return new hf(e);
}
function vf(e) {
  this._context = e;
}
vf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = bc(e), i = bc(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function bc(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function Fy(e) {
  return new vf(e);
}
function Mi(e, t) {
  this._context = e, this._t = t;
}
Mi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function Wy(e) {
  return new Mi(e, 0.5);
}
function Vy(e) {
  return new Mi(e, 0);
}
function Hy(e) {
  return new Mi(e, 1);
}
function Or(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function za(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function qy(e, t) {
  return e[t];
}
function Yy(e) {
  const t = [];
  return t.key = e, t;
}
function Gy() {
  var e = me([]), t = za, r = Or, n = qy;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), Yy), u, s = o.length, c = -1, l;
    for (const f of a)
      for (u = 0, ++c; u < s; ++u)
        (o[u][c] = [0, +n(f, o[u].key, c, a)]).data = f;
    for (u = 0, l = ko(t(o)); u < s; ++u)
      o[l[u]].index = u;
    return r(o, l), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : me(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : me(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? za : typeof a == "function" ? a : me(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Or, i) : r;
  }, i;
}
function Xy(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Or(e, t);
  }
}
function Zy(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    Or(e, t);
  }
}
function Qy(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, s = 0, c = 0; u < o; ++u) {
        for (var l = e[t[u]], f = l[n][1] || 0, d = l[n - 1][1] || 0, h = (f - d) / 2, p = 0; p < u; ++p) {
          var v = e[t[p]], y = v[n][1] || 0, b = v[n - 1][1] || 0;
          h += y - b;
        }
        s += f, c += h * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, s && (r -= c / s);
    }
    i[n - 1][1] += i[n - 1][0] = r, Or(e, t);
  }
}
var yf = {}, mf = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r, n) {
    const i = /* @__PURE__ */ new Map();
    for (let a = 0; a < r.length; a++) {
      const o = r[a], u = n(o);
      i.has(u) || i.set(u, o);
    }
    return Array.from(i.values());
  }
  e.uniqBy = t;
})(mf);
var Mo = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r;
  }
  e.identity = t;
})(Mo);
var gf = {}, Di = {}, bf = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return Number.isSafeInteger(r) && r >= 0;
  }
  e.isLength = t;
})(bf);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = bf;
  function r(n) {
    return n != null && typeof n != "function" && t.isLength(n.length);
  }
  e.isArrayLike = r;
})(Di);
var wf = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return typeof r == "object" && r !== null;
  }
  e.isObjectLike = t;
})(wf);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Di, r = wf;
  function n(i) {
    return r.isObjectLike(i) && t.isArrayLike(i);
  }
  e.isArrayLikeObject = n;
})(gf);
var xf = {}, Of = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Pi;
  function r(n) {
    return function(i) {
      return t.get(i, n);
    };
  }
  e.property = r;
})(Of);
var Ef = {}, ca = {}, sa = {}, Do = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r !== null && (typeof r == "object" || typeof r == "function");
  }
  e.isObject = t;
})(Do);
var No = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r == null || typeof r != "object" && typeof r != "function";
  }
  e.isPrimitive = t;
})(No);
var jo = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r, n) {
    return r === n || Number.isNaN(r) && Number.isNaN(n);
  }
  e.eq = t;
})(jo);
var wc;
function Jy() {
  return wc || (wc = 1, function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = Io(), r = Do, n = No, i = jo;
    function a(f, d, h) {
      return typeof h != "function" ? t.isMatch(f, d) : o(f, d, function p(v, y, b, w, x, A) {
        const S = h(v, y, b, w, x, A);
        return S !== void 0 ? !!S : o(v, y, p, A);
      }, /* @__PURE__ */ new Map());
    }
    function o(f, d, h, p) {
      if (d === f)
        return !0;
      switch (typeof d) {
        case "object":
          return u(f, d, h, p);
        case "function":
          return Object.keys(d).length > 0 ? o(f, { ...d }, h, p) : i.eq(f, d);
        default:
          return r.isObject(f) ? typeof d == "string" ? d === "" : !0 : i.eq(f, d);
      }
    }
    function u(f, d, h, p) {
      if (d == null)
        return !0;
      if (Array.isArray(d))
        return c(f, d, h, p);
      if (d instanceof Map)
        return s(f, d, h, p);
      if (d instanceof Set)
        return l(f, d, h, p);
      const v = Object.keys(d);
      if (f == null)
        return v.length === 0;
      if (v.length === 0)
        return !0;
      if (p && p.has(d))
        return p.get(d) === f;
      p && p.set(d, f);
      try {
        for (let y = 0; y < v.length; y++) {
          const b = v[y];
          if (!n.isPrimitive(f) && !(b in f) || d[b] === void 0 && f[b] !== void 0 || d[b] === null && f[b] !== null || !h(f[b], d[b], b, f, d, p))
            return !1;
        }
        return !0;
      } finally {
        p && p.delete(d);
      }
    }
    function s(f, d, h, p) {
      if (d.size === 0)
        return !0;
      if (!(f instanceof Map))
        return !1;
      for (const [v, y] of d.entries()) {
        const b = f.get(v);
        if (h(b, y, v, f, d, p) === !1)
          return !1;
      }
      return !0;
    }
    function c(f, d, h, p) {
      if (d.length === 0)
        return !0;
      if (!Array.isArray(f))
        return !1;
      const v = /* @__PURE__ */ new Set();
      for (let y = 0; y < d.length; y++) {
        const b = d[y];
        let w = !1;
        for (let x = 0; x < f.length; x++) {
          if (v.has(x))
            continue;
          const A = f[x];
          let S = !1;
          if (h(A, b, y, f, d, p) && (S = !0), S) {
            v.add(x), w = !0;
            break;
          }
        }
        if (!w)
          return !1;
      }
      return !0;
    }
    function l(f, d, h, p) {
      return d.size === 0 ? !0 : f instanceof Set ? c([...f], [...d], h, p) : !1;
    }
    e.isMatchWith = a, e.isSetMatch = l;
  }(sa)), sa;
}
var xc;
function Io() {
  return xc || (xc = 1, function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = Jy();
    function r(n, i) {
      return t.isMatchWith(n, i, () => {
      });
    }
    e.isMatch = r;
  }(ca)), ca;
}
var _f = {}, Ro = {}, Sf = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
  }
  e.getSymbols = t;
})(Sf);
var $o = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
  }
  e.getTag = t;
})($o);
var Lo = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = "[object RegExp]", r = "[object String]", n = "[object Number]", i = "[object Boolean]", a = "[object Arguments]", o = "[object Symbol]", u = "[object Date]", s = "[object Map]", c = "[object Set]", l = "[object Array]", f = "[object Function]", d = "[object ArrayBuffer]", h = "[object Object]", p = "[object Error]", v = "[object DataView]", y = "[object Uint8Array]", b = "[object Uint8ClampedArray]", w = "[object Uint16Array]", x = "[object Uint32Array]", A = "[object BigUint64Array]", S = "[object Int8Array]", _ = "[object Int16Array]", P = "[object Int32Array]", N = "[object BigInt64Array]", j = "[object Float32Array]", B = "[object Float64Array]";
  e.argumentsTag = a, e.arrayBufferTag = d, e.arrayTag = l, e.bigInt64ArrayTag = N, e.bigUint64ArrayTag = A, e.booleanTag = i, e.dataViewTag = v, e.dateTag = u, e.errorTag = p, e.float32ArrayTag = j, e.float64ArrayTag = B, e.functionTag = f, e.int16ArrayTag = _, e.int32ArrayTag = P, e.int8ArrayTag = S, e.mapTag = s, e.numberTag = n, e.objectTag = h, e.regexpTag = t, e.setTag = c, e.stringTag = r, e.symbolTag = o, e.uint16ArrayTag = w, e.uint32ArrayTag = x, e.uint8ArrayTag = y, e.uint8ClampedArrayTag = b;
})(Lo);
var Af = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return ArrayBuffer.isView(r) && !(r instanceof DataView);
  }
  e.isTypedArray = t;
})(Af);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Sf, r = $o, n = Lo, i = No, a = Af;
  function o(l, f) {
    return u(l, void 0, l, /* @__PURE__ */ new Map(), f);
  }
  function u(l, f, d, h = /* @__PURE__ */ new Map(), p = void 0) {
    const v = p == null ? void 0 : p(l, f, d, h);
    if (v !== void 0)
      return v;
    if (i.isPrimitive(l))
      return l;
    if (h.has(l))
      return h.get(l);
    if (Array.isArray(l)) {
      const y = new Array(l.length);
      h.set(l, y);
      for (let b = 0; b < l.length; b++)
        y[b] = u(l[b], b, d, h, p);
      return Object.hasOwn(l, "index") && (y.index = l.index), Object.hasOwn(l, "input") && (y.input = l.input), y;
    }
    if (l instanceof Date)
      return new Date(l.getTime());
    if (l instanceof RegExp) {
      const y = new RegExp(l.source, l.flags);
      return y.lastIndex = l.lastIndex, y;
    }
    if (l instanceof Map) {
      const y = /* @__PURE__ */ new Map();
      h.set(l, y);
      for (const [b, w] of l)
        y.set(b, u(w, b, d, h, p));
      return y;
    }
    if (l instanceof Set) {
      const y = /* @__PURE__ */ new Set();
      h.set(l, y);
      for (const b of l)
        y.add(u(b, void 0, d, h, p));
      return y;
    }
    if (typeof Buffer < "u" && Buffer.isBuffer(l))
      return l.subarray();
    if (a.isTypedArray(l)) {
      const y = new (Object.getPrototypeOf(l)).constructor(l.length);
      h.set(l, y);
      for (let b = 0; b < l.length; b++)
        y[b] = u(l[b], b, d, h, p);
      return y;
    }
    if (l instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && l instanceof SharedArrayBuffer)
      return l.slice(0);
    if (l instanceof DataView) {
      const y = new DataView(l.buffer.slice(0), l.byteOffset, l.byteLength);
      return h.set(l, y), s(y, l, d, h, p), y;
    }
    if (typeof File < "u" && l instanceof File) {
      const y = new File([l], l.name, {
        type: l.type
      });
      return h.set(l, y), s(y, l, d, h, p), y;
    }
    if (l instanceof Blob) {
      const y = new Blob([l], { type: l.type });
      return h.set(l, y), s(y, l, d, h, p), y;
    }
    if (l instanceof Error) {
      const y = new l.constructor();
      return h.set(l, y), y.message = l.message, y.name = l.name, y.stack = l.stack, y.cause = l.cause, s(y, l, d, h, p), y;
    }
    if (typeof l == "object" && c(l)) {
      const y = Object.create(Object.getPrototypeOf(l));
      return h.set(l, y), s(y, l, d, h, p), y;
    }
    return l;
  }
  function s(l, f, d = l, h, p) {
    const v = [...Object.keys(f), ...t.getSymbols(f)];
    for (let y = 0; y < v.length; y++) {
      const b = v[y], w = Object.getOwnPropertyDescriptor(l, b);
      (w == null || w.writable) && (l[b] = u(f[b], b, d, h, p));
    }
  }
  function c(l) {
    switch (r.getTag(l)) {
      case n.argumentsTag:
      case n.arrayTag:
      case n.arrayBufferTag:
      case n.dataViewTag:
      case n.booleanTag:
      case n.dateTag:
      case n.float32ArrayTag:
      case n.float64ArrayTag:
      case n.int8ArrayTag:
      case n.int16ArrayTag:
      case n.int32ArrayTag:
      case n.mapTag:
      case n.numberTag:
      case n.objectTag:
      case n.regexpTag:
      case n.setTag:
      case n.stringTag:
      case n.symbolTag:
      case n.uint8ArrayTag:
      case n.uint8ClampedArrayTag:
      case n.uint16ArrayTag:
      case n.uint32ArrayTag:
        return !0;
      default:
        return !1;
    }
  }
  e.cloneDeepWith = o, e.cloneDeepWithImpl = u, e.copyProperties = s;
})(Ro);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Ro;
  function r(n) {
    return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
  }
  e.cloneDeep = r;
})(_f);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Io(), r = _f;
  function n(i) {
    return i = r.cloneDeep(i), (a) => t.isMatch(a, i);
  }
  e.matches = n;
})(Ef);
var Pf = {}, Tf = {}, Cf = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Ro, r = Lo;
  function n(i, a) {
    return t.cloneDeepWith(i, (o, u, s, c) => {
      const l = a == null ? void 0 : a(o, u, s, c);
      if (l !== void 0)
        return l;
      if (typeof i == "object")
        switch (Object.prototype.toString.call(i)) {
          case r.numberTag:
          case r.stringTag:
          case r.booleanTag: {
            const f = new i.constructor(i == null ? void 0 : i.valueOf());
            return t.copyProperties(f, i), f;
          }
          case r.argumentsTag: {
            const f = {};
            return t.copyProperties(f, i), f.length = i.length, f[Symbol.iterator] = i[Symbol.iterator], f;
          }
          default:
            return;
        }
    });
  }
  e.cloneDeepWith = n;
})(Cf);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Cf;
  function r(n) {
    return t.cloneDeepWith(n);
  }
  e.cloneDeep = r;
})(Tf);
var kf = {}, Bo = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = /^(?:0|[1-9]\d*)$/;
  function r(n, i = Number.MAX_SAFE_INTEGER) {
    switch (typeof n) {
      case "number":
        return Number.isInteger(n) && n >= 0 && n < i;
      case "symbol":
        return !1;
      case "string":
        return t.test(n);
    }
  }
  e.isIndex = r;
})(Bo);
var Mf = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = $o;
  function r(n) {
    return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
  }
  e.isArguments = r;
})(Mf);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = So, r = Bo, n = Mf, i = Ti;
  function a(o, u) {
    let s;
    if (Array.isArray(u) ? s = u : typeof u == "string" && t.isDeepKey(u) && (o == null ? void 0 : o[u]) == null ? s = i.toPath(u) : s = [u], s.length === 0)
      return !1;
    let c = o;
    for (let l = 0; l < s.length; l++) {
      const f = s[l];
      if ((c == null || !Object.hasOwn(c, f)) && !((Array.isArray(c) || n.isArguments(c)) && r.isIndex(f) && f < c.length))
        return !1;
      c = c[f];
    }
    return !0;
  }
  e.has = a;
})(kf);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Io(), r = Ao, n = Tf, i = Pi, a = kf;
  function o(u, s) {
    switch (typeof u) {
      case "object": {
        Object.is(u == null ? void 0 : u.valueOf(), -0) && (u = "-0");
        break;
      }
      case "number": {
        u = r.toKey(u);
        break;
      }
    }
    return s = n.cloneDeep(s), function(c) {
      const l = i.get(c, u);
      return l === void 0 ? a.has(c, u) : s === void 0 ? l === void 0 : t.isMatch(l, s);
    };
  }
  e.matchesProperty = o;
})(Pf);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Mo, r = Of, n = Ef, i = Pf;
  function a(o) {
    if (o == null)
      return t.identity;
    switch (typeof o) {
      case "function":
        return o;
      case "object":
        return Array.isArray(o) && o.length === 2 ? i.matchesProperty(o[0], o[1]) : n.matches(o);
      case "string":
      case "symbol":
      case "number":
        return r.property(o);
    }
  }
  e.iteratee = a;
})(xf);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = mf, r = Mo, n = gf, i = xf;
  function a(o, u = r.identity) {
    return n.isArrayLikeObject(o) ? t.uniqBy(Array.from(o), i.iteratee(u)) : [];
  }
  e.uniqBy = a;
})(yf);
var em = yf.uniqBy;
const Oc = /* @__PURE__ */ Wt(em);
function tm(e, t, r) {
  return t === !0 ? Oc(e, r) : typeof t == "function" ? Oc(e, t) : e;
}
var Ua = { exports: {} }, la = {}, kn = { exports: {} }, fa = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ec;
function rm() {
  if (Ec) return fa;
  Ec = 1;
  var e = g;
  function t(f, d) {
    return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, a = e.useLayoutEffect, o = e.useDebugValue;
  function u(f, d) {
    var h = d(), p = n({ inst: { value: h, getSnapshot: d } }), v = p[0].inst, y = p[1];
    return a(
      function() {
        v.value = h, v.getSnapshot = d, s(v) && y({ inst: v });
      },
      [f, h, d]
    ), i(
      function() {
        return s(v) && y({ inst: v }), f(function() {
          s(v) && y({ inst: v });
        });
      },
      [f]
    ), o(h), h;
  }
  function s(f) {
    var d = f.getSnapshot;
    f = f.value;
    try {
      var h = d();
      return !r(f, h);
    } catch {
      return !0;
    }
  }
  function c(f, d) {
    return d();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : u;
  return fa.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, fa;
}
var da = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _c;
function nm() {
  return _c || (_c = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h, p) {
      return h === p && (h !== 0 || 1 / h === 1 / p) || h !== h && p !== p;
    }
    function t(h, p) {
      l || i.startTransition === void 0 || (l = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var v = p();
      if (!f) {
        var y = p();
        a(v, y) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), f = !0);
      }
      y = o({
        inst: { value: v, getSnapshot: p }
      });
      var b = y[0].inst, w = y[1];
      return s(
        function() {
          b.value = v, b.getSnapshot = p, r(b) && w({ inst: b });
        },
        [h, v, p]
      ), u(
        function() {
          return r(b) && w({ inst: b }), h(function() {
            r(b) && w({ inst: b });
          });
        },
        [h]
      ), c(v), v;
    }
    function r(h) {
      var p = h.getSnapshot;
      h = h.value;
      try {
        var v = p();
        return !a(h, v);
      } catch {
        return !0;
      }
    }
    function n(h, p) {
      return p();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = g, a = typeof Object.is == "function" ? Object.is : e, o = i.useState, u = i.useEffect, s = i.useLayoutEffect, c = i.useDebugValue, l = !1, f = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    da.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), da;
}
var Sc;
function Df() {
  return Sc || (Sc = 1, process.env.NODE_ENV === "production" ? kn.exports = rm() : kn.exports = nm()), kn.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ac;
function im() {
  if (Ac) return la;
  Ac = 1;
  var e = g, t = Df();
  function r(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, a = e.useRef, o = e.useEffect, u = e.useMemo, s = e.useDebugValue;
  return la.useSyncExternalStoreWithSelector = function(c, l, f, d, h) {
    var p = a(null);
    if (p.current === null) {
      var v = { hasValue: !1, value: null };
      p.current = v;
    } else v = p.current;
    p = u(
      function() {
        function b(_) {
          if (!w) {
            if (w = !0, x = _, _ = d(_), h !== void 0 && v.hasValue) {
              var P = v.value;
              if (h(P, _))
                return A = P;
            }
            return A = _;
          }
          if (P = A, n(x, _)) return P;
          var N = d(_);
          return h !== void 0 && h(P, N) ? (x = _, P) : (x = _, A = N);
        }
        var w = !1, x, A, S = f === void 0 ? null : f;
        return [
          function() {
            return b(l());
          },
          S === null ? void 0 : function() {
            return b(S());
          }
        ];
      },
      [l, f, d, h]
    );
    var y = i(c, p[0], p[1]);
    return o(
      function() {
        v.hasValue = !0, v.value = y;
      },
      [y]
    ), s(y), y;
  }, la;
}
var ha = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pc;
function am() {
  return Pc || (Pc = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, l) {
      return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = g, r = Df(), n = typeof Object.is == "function" ? Object.is : e, i = r.useSyncExternalStore, a = t.useRef, o = t.useEffect, u = t.useMemo, s = t.useDebugValue;
    ha.useSyncExternalStoreWithSelector = function(c, l, f, d, h) {
      var p = a(null);
      if (p.current === null) {
        var v = { hasValue: !1, value: null };
        p.current = v;
      } else v = p.current;
      p = u(
        function() {
          function b(_) {
            if (!w) {
              if (w = !0, x = _, _ = d(_), h !== void 0 && v.hasValue) {
                var P = v.value;
                if (h(P, _))
                  return A = P;
              }
              return A = _;
            }
            if (P = A, n(x, _))
              return P;
            var N = d(_);
            return h !== void 0 && h(P, N) ? (x = _, P) : (x = _, A = N);
          }
          var w = !1, x, A, S = f === void 0 ? null : f;
          return [
            function() {
              return b(l());
            },
            S === null ? void 0 : function() {
              return b(S());
            }
          ];
        },
        [l, f, d, h]
      );
      var y = i(c, p[0], p[1]);
      return o(
        function() {
          v.hasValue = !0, v.value = y;
        },
        [y]
      ), s(y), y;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ha;
}
process.env.NODE_ENV === "production" ? Ua.exports = im() : Ua.exports = am();
var om = Ua.exports, zo = /* @__PURE__ */ g.createContext(null), um = (e) => e, rt = () => {
  var e = g.useContext(zo);
  return e ? e.store.dispatch : um;
}, Hn = () => {
}, cm = () => Hn, sm = (e, t) => e === t;
function q(e) {
  var t = g.useContext(zo);
  return om.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : cm, t ? t.store.getState : Hn, t ? t.store.getState : Hn, t ? e : Hn, sm);
}
var lm = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let n = !1;
    try {
      const i = {};
      e(i) === i && (n = !0);
    } catch {
    }
    if (n) {
      let i;
      try {
        throw new Error();
      } catch (a) {
        ({ stack: i } = a);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: i }
      );
    }
  }
}, fm = (e, t, r) => {
  const { memoize: n, memoizeOptions: i } = t, { inputSelectorResults: a, inputSelectorResultsCopy: o } = e, u = n(() => ({}), ...i);
  if (!(u.apply(null, a) === u.apply(null, o))) {
    let c;
    try {
      throw new Error();
    } catch (l) {
      ({ stack: c } = l);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: a,
        secondInputs: o,
        stack: c
      }
    );
  }
}, dm = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function hm(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function pm(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function vm(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Tc = (e) => Array.isArray(e) ? e : [e];
function ym(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return vm(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Cc(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var mm = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...dm,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: lm
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: fm
    }
  };
}, gm = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, bm = typeof WeakRef < "u" ? WeakRef : gm, wm = 0, kc = 1;
function Mn() {
  return {
    s: wm,
    v: void 0,
    o: null,
    p: null
  };
}
function Nf(e, t = {}) {
  let r = Mn();
  const { resultEqualityCheck: n } = t;
  let i, a = 0;
  function o() {
    var f;
    let u = r;
    const { length: s } = arguments;
    for (let d = 0, h = s; d < h; d++) {
      const p = arguments[d];
      if (typeof p == "function" || typeof p == "object" && p !== null) {
        let v = u.o;
        v === null && (u.o = v = /* @__PURE__ */ new WeakMap());
        const y = v.get(p);
        y === void 0 ? (u = Mn(), v.set(p, u)) : u = y;
      } else {
        let v = u.p;
        v === null && (u.p = v = /* @__PURE__ */ new Map());
        const y = v.get(p);
        y === void 0 ? (u = Mn(), v.set(p, u)) : u = y;
      }
    }
    const c = u;
    let l;
    if (u.s === kc)
      l = u.v;
    else if (l = e.apply(null, arguments), a++, n) {
      const d = ((f = i == null ? void 0 : i.deref) == null ? void 0 : f.call(i)) ?? i;
      d != null && n(d, l) && (l = d, a !== 0 && a--), i = typeof l == "object" && l !== null || typeof l == "function" ? new bm(l) : l;
    }
    return c.s = kc, c.v = l, l;
  }
  return o.clearCache = () => {
    r = Mn(), o.resetResultsCount();
  }, o.resultsCount = () => a, o.resetResultsCount = () => {
    a = 0;
  }, o;
}
function xm(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let a = 0, o = 0, u, s = {}, c = i.pop();
    typeof c == "object" && (s = c, c = i.pop()), hm(
      c,
      `createSelector expects an output function after the inputs, but received: [${typeof c}]`
    );
    const l = {
      ...r,
      ...s
    }, {
      memoize: f,
      memoizeOptions: d = [],
      argsMemoize: h = Nf,
      argsMemoizeOptions: p = [],
      devModeChecks: v = {}
    } = l, y = Tc(d), b = Tc(p), w = ym(i), x = f(function() {
      return a++, c.apply(
        null,
        arguments
      );
    }, ...y);
    let A = !0;
    const S = h(function() {
      o++;
      const P = Cc(
        w,
        arguments
      );
      if (u = x.apply(null, P), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: N, inputStabilityCheck: j } = mm(A, v);
        if (N.shouldRun && N.run(
          c,
          P,
          u
        ), j.shouldRun) {
          const B = Cc(
            w,
            arguments
          );
          j.run(
            { inputSelectorResults: P, inputSelectorResultsCopy: B },
            { memoize: f, memoizeOptions: y },
            arguments
          );
        }
        A && (A = !1);
      }
      return u;
    }, ...b);
    return Object.assign(S, {
      resultFunc: c,
      memoizedResultFunc: x,
      dependencies: w,
      dependencyRecomputations: () => o,
      resetDependencyRecomputations: () => {
        o = 0;
      },
      lastResult: () => u,
      recomputations: () => a,
      resetRecomputations: () => {
        a = 0;
      },
      memoize: f,
      argsMemoize: h
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var C = /* @__PURE__ */ xm(Nf), Om = Object.assign(
  (e, t = C) => {
    pm(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (a) => e[a]
    );
    return t(
      n,
      (...a) => a.reduce((o, u, s) => (o[r[s]] = u, o), {})
    );
  },
  { withTypes: () => Om }
), jf = {}, If = {}, Rf = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(n) {
    return typeof n == "symbol" ? 1 : n === null ? 2 : n === void 0 ? 3 : n !== n ? 4 : 0;
  }
  const r = (n, i, a) => {
    if (n !== i) {
      const o = t(n), u = t(i);
      if (o === u && o === 0) {
        if (n < i)
          return a === "desc" ? 1 : -1;
        if (n > i)
          return a === "desc" ? -1 : 1;
      }
      return a === "desc" ? u - o : o - u;
    }
    return 0;
  };
  e.compareValues = r;
})(Rf);
var $f = {}, Uo = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return typeof r == "symbol" || r instanceof Symbol;
  }
  e.isSymbol = t;
})(Uo);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Uo, r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function i(a, o) {
    return Array.isArray(a) ? !1 : typeof a == "number" || typeof a == "boolean" || a == null || t.isSymbol(a) ? !0 : typeof a == "string" && (n.test(a) || !r.test(a)) || o != null && Object.hasOwn(o, a);
  }
  e.isKey = i;
})($f);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Rf, r = $f, n = Ti;
  function i(a, o, u, s) {
    if (a == null)
      return [];
    u = s ? void 0 : u, Array.isArray(a) || (a = Object.values(a)), Array.isArray(o) || (o = o == null ? [null] : [o]), o.length === 0 && (o = [null]), Array.isArray(u) || (u = u == null ? [] : [u]), u = u.map((h) => String(h));
    const c = (h, p) => {
      let v = h;
      for (let y = 0; y < p.length && v != null; ++y)
        v = v[p[y]];
      return v;
    }, l = (h, p) => p == null || h == null ? p : typeof h == "object" && "key" in h ? Object.hasOwn(p, h.key) ? p[h.key] : c(p, h.path) : typeof h == "function" ? h(p) : Array.isArray(h) ? c(p, h) : typeof p == "object" ? p[h] : p, f = o.map((h) => (Array.isArray(h) && h.length === 1 && (h = h[0]), h == null || typeof h == "function" || Array.isArray(h) || r.isKey(h) ? h : { key: h, path: n.toPath(h) }));
    return a.map((h) => ({
      original: h,
      criteria: f.map((p) => l(p, h))
    })).slice().sort((h, p) => {
      for (let v = 0; v < f.length; v++) {
        const y = t.compareValues(h.criteria[v], p.criteria[v], u[v]);
        if (y !== 0)
          return y;
      }
      return 0;
    }).map((h) => h.original);
  }
  e.orderBy = i;
})(If);
var Lf = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r, n = 1) {
    const i = [], a = Math.floor(n), o = (u, s) => {
      for (let c = 0; c < u.length; c++) {
        const l = u[c];
        Array.isArray(l) && s < a ? o(l, s + 1) : i.push(l);
      }
    };
    return o(r, 0), i;
  }
  e.flatten = t;
})(Lf);
var Ko = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Bo, r = Di, n = Do, i = jo;
  function a(o, u, s) {
    return n.isObject(s) && (typeof u == "number" && r.isArrayLike(s) && t.isIndex(u) && u < s.length || typeof u == "string" && u in s) ? i.eq(s[u], o) : !1;
  }
  e.isIterateeCall = a;
})(Ko);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = If, r = Lf, n = Ko;
  function i(a, ...o) {
    const u = o.length;
    return u > 1 && n.isIterateeCall(a, o[0], o[1]) ? o = [] : u > 2 && n.isIterateeCall(o[0], o[1], o[2]) && (o = [o[0]]), t.orderBy(a, r.flatten(o), ["asc"]);
  }
  e.sortBy = i;
})(jf);
var Em = jf.sortBy;
const Ni = /* @__PURE__ */ Wt(Em);
var Bf = (e) => e.legend.settings, _m = (e) => e.legend.size, Sm = (e) => e.legend.payload;
C([Sm, Bf], (e, t) => {
  var {
    itemSorter: r
  } = t, n = e.flat(1);
  return r ? Ni(n, r) : n;
});
var Dn = 1;
function Am() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = g.useState({
    height: 0,
    left: 0,
    top: 0,
    width: 0
  }), n = g.useCallback(
    (i) => {
      if (i != null) {
        var a = i.getBoundingClientRect(), o = {
          height: a.height,
          left: a.left,
          top: a.top,
          width: a.width
        };
        (Math.abs(o.height - t.height) > Dn || Math.abs(o.left - t.left) > Dn || Math.abs(o.top - t.top) > Dn || Math.abs(o.width - t.width) > Dn) && r({
          height: o.height,
          left: o.left,
          top: o.top,
          width: o.width
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t.width, t.height, t.top, t.left, ...e]
  );
  return [t, n];
}
function De(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Pm = typeof Symbol == "function" && Symbol.observable || "@@observable", Mc = Pm, pa = () => Math.random().toString(36).substring(7).split("").join("."), Tm = {
  INIT: `@@redux/INIT${/* @__PURE__ */ pa()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ pa()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${pa()}`
}, nr = Tm;
function sn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Cm(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (Dm(e))
    return "date";
  if (Mm(e))
    return "error";
  const r = km(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function km(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Mm(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Dm(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Lt(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Cm(e)), t;
}
function zf(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? De(2) : `Expected the root reducer to be a function. Instead, received: '${Lt(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? De(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? De(1) : `Expected the enhancer to be a function. Instead, received: '${Lt(r)}'`);
    return r(zf)(e, t);
  }
  let n = e, i = t, a = /* @__PURE__ */ new Map(), o = a, u = 0, s = !1;
  function c() {
    o === a && (o = /* @__PURE__ */ new Map(), a.forEach((y, b) => {
      o.set(b, y);
    }));
  }
  function l() {
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? De(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function f(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? De(4) : `Expected the listener to be a function. Instead, received: '${Lt(y)}'`);
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? De(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let b = !0;
    c();
    const w = u++;
    return o.set(w, y), function() {
      if (b) {
        if (s)
          throw new Error(process.env.NODE_ENV === "production" ? De(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        b = !1, c(), o.delete(w), a = null;
      }
    };
  }
  function d(y) {
    if (!sn(y))
      throw new Error(process.env.NODE_ENV === "production" ? De(7) : `Actions must be plain objects. Instead, the actual type was: '${Lt(y)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof y.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? De(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof y.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? De(17) : `Action "type" property must be a string. Instead, the actual type was: '${Lt(y.type)}'. Value was: '${y.type}' (stringified)`);
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? De(9) : "Reducers may not dispatch actions.");
    try {
      s = !0, i = n(i, y);
    } finally {
      s = !1;
    }
    return (a = o).forEach((w) => {
      w();
    }), y;
  }
  function h(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? De(10) : `Expected the nextReducer to be a function. Instead, received: '${Lt(y)}`);
    n = y, d({
      type: nr.REPLACE
    });
  }
  function p() {
    const y = f;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(b) {
        if (typeof b != "object" || b === null)
          throw new Error(process.env.NODE_ENV === "production" ? De(11) : `Expected the observer to be an object. Instead, received: '${Lt(b)}'`);
        function w() {
          const A = b;
          A.next && A.next(l());
        }
        return w(), {
          unsubscribe: y(w)
        };
      },
      [Mc]() {
        return this;
      }
    };
  }
  return d({
    type: nr.INIT
  }), {
    dispatch: d,
    subscribe: f,
    getState: l,
    replaceReducer: h,
    [Mc]: p
  };
}
function Dc(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Nm(e, t, r, n) {
  const i = Object.keys(t), a = r && r.type === nr.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!sn(e))
    return `The ${a} has unexpected type of "${Lt(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const o = Object.keys(e).filter((u) => !t.hasOwnProperty(u) && !n[u]);
  if (o.forEach((u) => {
    n[u] = !0;
  }), !(r && r.type === nr.REPLACE) && o.length > 0)
    return `Unexpected ${o.length > 1 ? "keys" : "key"} "${o.join('", "')}" found in ${a}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function jm(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: nr.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? De(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: nr.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? De(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${nr.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Uf(e) {
  const t = Object.keys(e), r = {};
  for (let o = 0; o < t.length; o++) {
    const u = t[o];
    process.env.NODE_ENV !== "production" && typeof e[u] > "u" && Dc(`No reducer provided for key "${u}"`), typeof e[u] == "function" && (r[u] = e[u]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let a;
  try {
    jm(r);
  } catch (o) {
    a = o;
  }
  return function(u = {}, s) {
    if (a)
      throw a;
    if (process.env.NODE_ENV !== "production") {
      const f = Nm(u, r, s, i);
      f && Dc(f);
    }
    let c = !1;
    const l = {};
    for (let f = 0; f < n.length; f++) {
      const d = n[f], h = r[d], p = u[d], v = h(p, s);
      if (typeof v > "u") {
        const y = s && s.type;
        throw new Error(process.env.NODE_ENV === "production" ? De(14) : `When called with an action of type ${y ? `"${String(y)}"` : "(unknown type)"}, the slice reducer for key "${d}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      l[d] = v, c = c || v !== p;
    }
    return c = c || n.length !== Object.keys(u).length, c ? l : u;
  };
}
function Zn(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function Im(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let a = () => {
      throw new Error(process.env.NODE_ENV === "production" ? De(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const o = {
      getState: i.getState,
      dispatch: (s, ...c) => a(s, ...c)
    }, u = e.map((s) => s(o));
    return a = Zn(...u)(i.dispatch), {
      ...i,
      dispatch: a
    };
  };
}
function Fo(e) {
  return sn(e) && "type" in e && typeof e.type == "string";
}
var Kf = Symbol.for("immer-nothing"), Nc = Symbol.for("immer-draftable"), tt = Symbol.for("immer-state"), Rm = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function qe(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Rm[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Er = Object.getPrototypeOf;
function cr(e) {
  return !!e && !!e[tt];
}
function Pt(e) {
  var t;
  return e ? Ff(e) || Array.isArray(e) || !!e[Nc] || !!((t = e.constructor) != null && t[Nc]) || ln(e) || Ii(e) : !1;
}
var $m = Object.prototype.constructor.toString();
function Ff(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Er(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === $m;
}
function Qn(e, t) {
  ji(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function ji(e) {
  const t = e[tt];
  return t ? t.type_ : Array.isArray(e) ? 1 : ln(e) ? 2 : Ii(e) ? 3 : 0;
}
function Ka(e, t) {
  return ji(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Wf(e, t, r) {
  const n = ji(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Lm(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ln(e) {
  return e instanceof Map;
}
function Ii(e) {
  return e instanceof Set;
}
function Zt(e) {
  return e.copy_ || e.base_;
}
function Fa(e, t) {
  if (ln(e))
    return new Map(e);
  if (Ii(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = Ff(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[tt];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (n[o] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: u.enumerable,
        value: e[o]
      });
    }
    return Object.create(Er(e), n);
  } else {
    const n = Er(e);
    if (n !== null && r)
      return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function Wo(e, t = !1) {
  return Ri(e) || cr(e) || !Pt(e) || (ji(e) > 1 && Object.defineProperties(e, {
    set: { value: Nn },
    add: { value: Nn },
    clear: { value: Nn },
    delete: { value: Nn }
  }), Object.freeze(e), t && Object.values(e).forEach((r) => Wo(r, !0))), e;
}
function Nn() {
  qe(2);
}
function Ri(e) {
  return Object.isFrozen(e);
}
var Bm = {};
function sr(e) {
  const t = Bm[e];
  return t || qe(0, e), t;
}
var Qr;
function Vf() {
  return Qr;
}
function zm(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function jc(e, t) {
  t && (sr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Wa(e) {
  Va(e), e.drafts_.forEach(Um), e.drafts_ = null;
}
function Va(e) {
  e === Qr && (Qr = e.parent_);
}
function Ic(e) {
  return Qr = zm(Qr, e);
}
function Um(e) {
  const t = e[tt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Rc(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[tt].modified_ && (Wa(t), qe(4)), Pt(e) && (e = Jn(t, e), t.parent_ || ei(t, e)), t.patches_ && sr("Patches").generateReplacementPatches_(
    r[tt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Jn(t, r, []), Wa(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Kf ? e : void 0;
}
function Jn(e, t, r) {
  if (Ri(t))
    return t;
  const n = t[tt];
  if (!n)
    return Qn(
      t,
      (i, a) => $c(e, n, t, i, a, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return ei(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let a = i, o = !1;
    n.type_ === 3 && (a = new Set(i), i.clear(), o = !0), Qn(
      a,
      (u, s) => $c(e, n, i, u, s, r, o)
    ), ei(e, i, !1), r && e.patches_ && sr("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function $c(e, t, r, n, i, a, o) {
  if (process.env.NODE_ENV !== "production" && i === r && qe(5), cr(i)) {
    const u = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Ka(t.assigned_, n) ? a.concat(n) : void 0, s = Jn(e, i, u);
    if (Wf(r, n, s), cr(s))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else o && r.add(i);
  if (Pt(i) && !Ri(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Jn(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (ln(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && ei(e, i);
  }
}
function ei(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Wo(t, r);
}
function Km(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Vf(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, a = Vo;
  r && (i = [n], a = Jr);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, u;
}
var Vo = {
  get(e, t) {
    if (t === tt)
      return e;
    const r = Zt(e);
    if (!Ka(r, t))
      return Fm(e, r, t);
    const n = r[t];
    return e.finalized_ || !Pt(n) ? n : n === va(e.base_, t) ? (ya(e), e.copy_[t] = qa(n, e)) : n;
  },
  has(e, t) {
    return t in Zt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Zt(e));
  },
  set(e, t, r) {
    const n = Hf(Zt(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = va(Zt(e), t), a = i == null ? void 0 : i[tt];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (Lm(r, i) && (r !== void 0 || Ka(e.base_, t)))
        return !0;
      ya(e), Ha(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return va(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, ya(e), Ha(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Zt(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    qe(11);
  },
  getPrototypeOf(e) {
    return Er(e.base_);
  },
  setPrototypeOf() {
    qe(12);
  }
}, Jr = {};
Qn(Vo, (e, t) => {
  Jr[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Jr.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && qe(13), Jr.set.call(this, e, t, void 0);
};
Jr.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && qe(14), Vo.set.call(this, e[0], t, r, e[0]);
};
function va(e, t) {
  const r = e[tt];
  return (r ? Zt(r) : e)[t];
}
function Fm(e, t, r) {
  var i;
  const n = Hf(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function Hf(e, t) {
  if (!(t in e))
    return;
  let r = Er(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Er(r);
  }
}
function Ha(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ha(e.parent_));
}
function ya(e) {
  e.copy_ || (e.copy_ = Fa(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Wm = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const o = this;
        return function(s = a, ...c) {
          return o.produce(s, (l) => r.call(this, l, ...c));
        };
      }
      typeof r != "function" && qe(6), n !== void 0 && typeof n != "function" && qe(7);
      let i;
      if (Pt(t)) {
        const a = Ic(this), o = qa(t, void 0);
        let u = !0;
        try {
          i = r(o), u = !1;
        } finally {
          u ? Wa(a) : Va(a);
        }
        return jc(a, n), Rc(i, a);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === Kf && (i = void 0), this.autoFreeze_ && Wo(i, !0), n) {
          const a = [], o = [];
          sr("Patches").generateReplacementPatches_(t, i, a, o), n(a, o);
        }
        return i;
      } else
        qe(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (o, ...u) => this.produceWithPatches(o, (s) => t(s, ...u));
      let n, i;
      return [this.produce(t, r, (o, u) => {
        n = o, i = u;
      }), n, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Pt(e) || qe(8), cr(e) && (e = St(e));
    const t = Ic(this), r = qa(e, void 0);
    return r[tt].isManual_ = !0, Va(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[tt];
    (!r || !r.isManual_) && qe(9);
    const { scope_: n } = r;
    return jc(n, t), Rc(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = sr("Patches").applyPatches_;
    return cr(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function qa(e, t) {
  const r = ln(e) ? sr("MapSet").proxyMap_(e, t) : Ii(e) ? sr("MapSet").proxySet_(e, t) : Km(e, t);
  return (t ? t.scope_ : Vf()).drafts_.push(r), r;
}
function St(e) {
  return cr(e) || qe(10, e), qf(e);
}
function qf(e) {
  if (!Pt(e) || Ri(e))
    return e;
  const t = e[tt];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Fa(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Fa(e, !0);
  return Qn(r, (n, i) => {
    Wf(r, n, qf(i));
  }), t && (t.finalized_ = !1), r;
}
var Vm = new Wm(), Yf = Vm.produce;
function Gf(e) {
  return ({ dispatch: r, getState: n }) => (i) => (a) => typeof a == "function" ? a(r, n, e) : i(a);
}
var Hm = Gf(), qm = Gf, Ym = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Zn : Zn.apply(null, arguments);
}, Gm = (e) => e && typeof e.match == "function";
function st(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? oe(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Fo(n) && n.type === e, r;
}
function Xm(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Gm(e);
}
function Zm(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function Qm(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = Xm
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(Zm(n.type)), r(n));
}
function Xf(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const i = Date.now();
      try {
        return n();
      } finally {
        const a = Date.now();
        r += a - i;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Zf = class qr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, qr.prototype);
  }
  static get [Symbol.species]() {
    return qr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new qr(...t[0].concat(this)) : new qr(...t.concat(this));
  }
};
function Lc(e) {
  return Pt(e) ? Yf(e, () => {
  }) : e;
}
function jn(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function Jm(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function eg(e, t, r) {
  const n = Qf(e, t, r);
  return {
    detectMutations() {
      return Jf(e, t, n, r);
    }
  };
}
function Qf(e, t = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const a = {
    value: r
  };
  if (!e(r) && !i.has(r)) {
    i.add(r), a.children = {};
    for (const o in r) {
      const u = n ? n + "." + o : o;
      t.length && t.indexOf(u) !== -1 || (a.children[o] = Qf(e, t, r[o], u));
    }
  }
  return a;
}
function Jf(e, t = [], r, n, i = !1, a = "") {
  const o = r ? r.value : void 0, u = o === n;
  if (i && !u && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: a
    };
  if (e(o) || e(n))
    return {
      wasMutated: !1
    };
  const s = {};
  for (let l in r.children)
    s[l] = !0;
  for (let l in n)
    s[l] = !0;
  const c = t.length > 0;
  for (let l in s) {
    const f = a ? a + "." + l : l;
    if (c && t.some((p) => p instanceof RegExp ? p.test(f) : f === p))
      continue;
    const d = Jf(e, t, r.children[l], n[l], u, f);
    if (d.wasMutated)
      return d;
  }
  return {
    wasMutated: !1
  };
}
function tg(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(u, s, c, l) {
      return JSON.stringify(u, r(s, l), c);
    }, r = function(u, s) {
      let c = [], l = [];
      return s || (s = function(f, d) {
        return c[0] === d ? "[Circular ~]" : "[Circular ~." + l.slice(0, c.indexOf(d)).join(".") + "]";
      }), function(f, d) {
        if (c.length > 0) {
          var h = c.indexOf(this);
          ~h ? c.splice(h + 1) : c.push(this), ~h ? l.splice(h, 1 / 0, f) : l.push(f), ~c.indexOf(d) && (d = s.call(this, f, d));
        } else c.push(d);
        return u == null ? d : u.call(this, f, d);
      };
    }, {
      isImmutable: n = Jm,
      ignoredPaths: i,
      warnAfter: a = 32
    } = e;
    const o = eg.bind(null, n, i);
    return ({
      getState: u
    }) => {
      let s = u(), c = o(s), l;
      return (f) => (d) => {
        const h = Xf(a, "ImmutableStateInvariantMiddleware");
        h.measureTime(() => {
          if (s = u(), l = c.detectMutations(), c = o(s), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? oe(19) : `A state mutation was detected between dispatches, in the path '${l.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const p = f(d);
        return h.measureTime(() => {
          if (s = u(), l = c.detectMutations(), c = o(s), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? oe(20) : `A state mutation was detected inside a dispatch, in the path: ${l.path || ""}. Take a look at the reducer(s) handling the action ${t(d)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), h.warnIfExceeded(), p;
      };
    };
  }
}
function ed(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || sn(e);
}
function Ya(e, t = "", r = ed, n, i = [], a) {
  let o;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || a != null && a.has(e)) return !1;
  const u = n != null ? n(e) : Object.entries(e), s = i.length > 0;
  for (const [c, l] of u) {
    const f = t ? t + "." + c : c;
    if (!(s && i.some((h) => h instanceof RegExp ? h.test(f) : f === h))) {
      if (!r(l))
        return {
          keyPath: f,
          value: l
        };
      if (typeof l == "object" && (o = Ya(l, f, r, n, i, a), o))
        return o;
    }
  }
  return a && td(e) && a.add(e), !1;
}
function td(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !td(t))
      return !1;
  return !0;
}
function rg(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = ed,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: a = [],
      warnAfter: o = 32,
      ignoreState: u = !1,
      ignoreActions: s = !1,
      disableCache: c = !1
    } = e, l = !c && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (f) => (d) => (h) => {
      if (!Fo(h))
        return d(h);
      const p = d(h), v = Xf(o, "SerializableStateInvariantMiddleware");
      return !s && !(n.length && n.indexOf(h.type) !== -1) && v.measureTime(() => {
        const y = Ya(h, "", t, r, i, l);
        if (y) {
          const {
            keyPath: b,
            value: w
          } = y;
          console.error(`A non-serializable value was detected in an action, in the path: \`${b}\`. Value:`, w, `
Take a look at the logic that dispatched this action: `, h, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), u || (v.measureTime(() => {
        const y = f.getState(), b = Ya(y, "", t, r, a, l);
        if (b) {
          const {
            keyPath: w,
            value: x
          } = b;
          console.error(`A non-serializable value was detected in the state, in the path: \`${w}\`. Value:`, x, `
Take a look at the reducer(s) handling this action type: ${h.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), v.warnIfExceeded()), p;
    };
  }
}
function In(e) {
  return typeof e == "boolean";
}
var ng = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: a = !0
  } = t ?? {};
  let o = new Zf();
  if (r && (In(r) ? o.push(Hm) : o.push(qm(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let u = {};
      In(n) || (u = n), o.unshift(tg(u));
    }
    if (i) {
      let u = {};
      In(i) || (u = i), o.push(rg(u));
    }
    if (a) {
      let u = {};
      In(a) || (u = a), o.unshift(Qm(u));
    }
  }
  return o;
}, ig = "RTK_autoBatch", Bc = (e) => (t) => {
  setTimeout(t, e);
}, ag = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, a = !1, o = !1;
  const u = /* @__PURE__ */ new Set(), s = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Bc(10)
  ) : e.type === "callback" ? e.queueNotification : Bc(e.timeout), c = () => {
    o = !1, a && (a = !1, u.forEach((l) => l()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(l) {
      const f = () => i && l(), d = n.subscribe(f);
      return u.add(l), () => {
        d(), u.delete(l);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(l) {
      var f;
      try {
        return i = !((f = l == null ? void 0 : l.meta) != null && f[ig]), a = !i, a && (o || (o = !0, s(c))), n.dispatch(l);
      } finally {
        i = !0;
      }
    }
  });
}, og = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new Zf(e);
  return n && i.push(ag(typeof n == "object" ? n : void 0)), i;
};
function ug(e) {
  const t = ng(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    duplicateMiddlewareCheck: a = !0,
    preloadedState: o = void 0,
    enhancers: u = void 0
  } = e || {};
  let s;
  if (typeof r == "function")
    s = r;
  else if (sn(r))
    s = Uf(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? oe(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? oe(2) : "`middleware` field must be a callback");
  let c;
  if (typeof n == "function") {
    if (c = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(c))
      throw new Error(process.env.NODE_ENV === "production" ? oe(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (process.env.NODE_ENV !== "production" && c.some((v) => typeof v != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? oe(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && a) {
    let v = /* @__PURE__ */ new Set();
    c.forEach((y) => {
      if (v.has(y))
        throw new Error(process.env.NODE_ENV === "production" ? oe(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      v.add(y);
    });
  }
  let l = Zn;
  i && (l = Ym({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const f = Im(...c), d = og(f);
  if (process.env.NODE_ENV !== "production" && u && typeof u != "function")
    throw new Error(process.env.NODE_ENV === "production" ? oe(5) : "`enhancers` field must be a callback");
  let h = typeof u == "function" ? u(d) : d();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(h))
    throw new Error(process.env.NODE_ENV === "production" ? oe(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && h.some((v) => typeof v != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? oe(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && c.length && !h.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const p = l(...h);
  return zf(s, o, p);
}
function rd(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(a, o) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? oe(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? oe(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const u = typeof a == "string" ? a : a.type;
      if (!u)
        throw new Error(process.env.NODE_ENV === "production" ? oe(28) : "`builder.addCase` cannot be called with an empty action type");
      if (u in t)
        throw new Error(process.env.NODE_ENV === "production" ? oe(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${u}'`);
      return t[u] = o, i;
    },
    addAsyncThunk(a, o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? oe(43) : "`builder.addAsyncThunk` should only be called before calling `builder.addDefaultCase`");
      return o.pending && (t[a.pending.type] = o.pending), o.rejected && (t[a.rejected.type] = o.rejected), o.fulfilled && (t[a.fulfilled.type] = o.fulfilled), o.settled && r.push({
        matcher: a.settled,
        reducer: o.settled
      }), i;
    },
    addMatcher(a, o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? oe(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: a,
        reducer: o
      }), i;
    },
    addDefaultCase(a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? oe(31) : "`builder.addDefaultCase` can only be called once");
      return n = a, i;
    }
  };
  return e(i), [t, r, n];
}
function cg(e) {
  return typeof e == "function";
}
function sg(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? oe(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = rd(t), a;
  if (cg(e))
    a = () => Lc(e());
  else {
    const u = Lc(e);
    a = () => u;
  }
  function o(u = a(), s) {
    let c = [r[s.type], ...n.filter(({
      matcher: l
    }) => l(s)).map(({
      reducer: l
    }) => l)];
    return c.filter((l) => !!l).length === 0 && (c = [i]), c.reduce((l, f) => {
      if (f)
        if (cr(l)) {
          const h = f(l, s);
          return h === void 0 ? l : h;
        } else {
          if (Pt(l))
            return Yf(l, (d) => f(d, s));
          {
            const d = f(l, s);
            if (d === void 0) {
              if (l === null)
                return l;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return d;
          }
        }
      return l;
    }, u);
  }
  return o.getInitialState = a, o;
}
var lg = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", fg = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += lg[Math.random() * 64 | 0];
  return t;
}, dg = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function hg(e, t) {
  return `${e}/${t}`;
}
function pg({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[dg];
  return function(i) {
    const {
      name: a,
      reducerPath: o = a
    } = i;
    if (!a)
      throw new Error(process.env.NODE_ENV === "production" ? oe(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const u = (typeof i.reducers == "function" ? i.reducers(yg()) : i.reducers) || {}, s = Object.keys(u), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, l = {
      addCase(A, S) {
        const _ = typeof A == "string" ? A : A.type;
        if (!_)
          throw new Error(process.env.NODE_ENV === "production" ? oe(12) : "`context.addCase` cannot be called with an empty action type");
        if (_ in c.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? oe(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + _);
        return c.sliceCaseReducersByType[_] = S, l;
      },
      addMatcher(A, S) {
        return c.sliceMatchers.push({
          matcher: A,
          reducer: S
        }), l;
      },
      exposeAction(A, S) {
        return c.actionCreators[A] = S, l;
      },
      exposeCaseReducer(A, S) {
        return c.sliceCaseReducersByName[A] = S, l;
      }
    };
    s.forEach((A) => {
      const S = u[A], _ = {
        reducerName: A,
        type: hg(a, A),
        createNotation: typeof i.reducers == "function"
      };
      gg(S) ? wg(_, S, l, t) : mg(_, S, l);
    });
    function f() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? oe(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [A = {}, S = [], _ = void 0] = typeof i.extraReducers == "function" ? rd(i.extraReducers) : [i.extraReducers], P = {
        ...A,
        ...c.sliceCaseReducersByType
      };
      return sg(i.initialState, (N) => {
        for (let j in P)
          N.addCase(j, P[j]);
        for (let j of c.sliceMatchers)
          N.addMatcher(j.matcher, j.reducer);
        for (let j of S)
          N.addMatcher(j.matcher, j.reducer);
        _ && N.addDefaultCase(_);
      });
    }
    const d = (A) => A, h = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new WeakMap();
    let v;
    function y(A, S) {
      return v || (v = f()), v(A, S);
    }
    function b() {
      return v || (v = f()), v.getInitialState();
    }
    function w(A, S = !1) {
      function _(N) {
        let j = N[A];
        if (typeof j > "u") {
          if (S)
            j = jn(p, _, b);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? oe(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return j;
      }
      function P(N = d) {
        const j = jn(h, S, () => /* @__PURE__ */ new WeakMap());
        return jn(j, N, () => {
          const B = {};
          for (const [R, k] of Object.entries(i.selectors ?? {}))
            B[R] = vg(k, N, () => jn(p, N, b), S);
          return B;
        });
      }
      return {
        reducerPath: A,
        getSelectors: P,
        get selectors() {
          return P(_);
        },
        selectSlice: _
      };
    }
    const x = {
      name: a,
      reducer: y,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: b,
      ...w(o),
      injectInto(A, {
        reducerPath: S,
        ..._
      } = {}) {
        const P = S ?? o;
        return A.inject({
          reducerPath: P,
          reducer: y
        }, _), {
          ...x,
          ...w(P, !0)
        };
      }
    };
    return x;
  };
}
function vg(e, t, r, n) {
  function i(a, ...o) {
    let u = t(a);
    if (typeof u > "u") {
      if (n)
        u = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? oe(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(u, ...o);
  }
  return i.unwrapped = e, i;
}
var nt = /* @__PURE__ */ pg();
function yg() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function mg({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let a, o;
  if ("reducer" in n) {
    if (r && !bg(n))
      throw new Error(process.env.NODE_ENV === "production" ? oe(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    a = n.reducer, o = n.prepare;
  } else
    a = n;
  i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, o ? st(e, o) : st(e));
}
function gg(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function bg(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function wg({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? oe(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: a,
    fulfilled: o,
    pending: u,
    rejected: s,
    settled: c,
    options: l
  } = r, f = i(e, a, l);
  n.exposeAction(t, f), o && n.addCase(f.fulfilled, o), u && n.addCase(f.pending, u), s && n.addCase(f.rejected, s), c && n.addMatcher(f.settled, c), n.exposeCaseReducer(t, {
    fulfilled: o || Rn,
    pending: u || Rn,
    rejected: s || Rn,
    settled: c || Rn
  });
}
function Rn() {
}
var xg = "task", nd = "listener", id = "completed", Ho = "cancelled", Og = `task-${Ho}`, Eg = `task-${id}`, Ga = `${nd}-${Ho}`, _g = `${nd}-${id}`, $i = class {
  constructor(e) {
    aa(this, "name", "TaskAbortError");
    aa(this, "message");
    this.code = e, this.message = `${xg} ${Ho} (reason: ${e})`;
  }
}, qo = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(process.env.NODE_ENV === "production" ? oe(32) : `${t} is not a function`);
}, ti = () => {
}, ad = (e, t = ti) => (e.catch(t), e), od = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), ir = (e, t) => {
  const r = e.signal;
  r.aborted || ("reason" in r || Object.defineProperty(r, "reason", {
    enumerable: !0,
    value: t,
    configurable: !0,
    writable: !0
  }), e.abort(t));
}, ar = (e) => {
  if (e.aborted) {
    const {
      reason: t
    } = e;
    throw new $i(t);
  }
};
function ud(e, t) {
  let r = ti;
  return new Promise((n, i) => {
    const a = () => i(new $i(e.reason));
    if (e.aborted) {
      a();
      return;
    }
    r = od(e, a), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = ti;
  });
}
var Sg = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (r) {
    return {
      status: r instanceof $i ? "cancelled" : "rejected",
      error: r
    };
  } finally {
    t == null || t();
  }
}, ri = (e) => (t) => ad(ud(e, t).then((r) => (ar(e), r))), cd = (e) => {
  const t = ri(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: wr
} = Object, zc = {}, fn = "listenerMiddleware", Ag = (e, t) => {
  const r = (n) => od(e, () => ir(n, e.reason));
  return (n, i) => {
    qo(n, "taskExecutor");
    const a = new AbortController();
    r(a);
    const o = Sg(async () => {
      ar(e), ar(a.signal);
      const u = await n({
        pause: ri(a.signal),
        delay: cd(a.signal),
        signal: a.signal
      });
      return ar(a.signal), u;
    }, () => ir(a, Eg));
    return i != null && i.autoJoin && t.push(o.catch(ti)), {
      result: ri(e)(o),
      cancel() {
        ir(a, Og);
      }
    };
  };
}, Pg = (e, t) => {
  const r = async (n, i) => {
    ar(t);
    let a = () => {
    };
    const u = [new Promise((s, c) => {
      let l = e({
        predicate: n,
        effect: (f, d) => {
          d.unsubscribe(), s([f, d.getState(), d.getOriginalState()]);
        }
      });
      a = () => {
        l(), c();
      };
    })];
    i != null && u.push(new Promise((s) => setTimeout(s, i, null)));
    try {
      const s = await ud(t, Promise.race(u));
      return ar(t), s;
    } finally {
      a();
    }
  };
  return (n, i) => ad(r(n, i));
}, sd = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: i,
    effect: a
  } = e;
  if (t)
    i = st(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (n)
    i = n;
  else if (!i) throw new Error(process.env.NODE_ENV === "production" ? oe(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return qo(a, "options.listener"), {
    predicate: i,
    type: t,
    effect: a
  };
}, ld = /* @__PURE__ */ wr((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = sd(e);
  return {
    id: fg(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? oe(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => ld
}), Uc = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: i
  } = sd(t);
  return Array.from(e.values()).find((a) => (typeof r == "string" ? a.type === r : a.predicate === i) && a.effect === n);
}, Xa = (e) => {
  e.pending.forEach((t) => {
    ir(t, Ga);
  });
}, Tg = (e) => () => {
  e.forEach(Xa), e.clear();
}, Kc = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, fd = /* @__PURE__ */ wr(/* @__PURE__ */ st(`${fn}/add`), {
  withTypes: () => fd
}), Cg = /* @__PURE__ */ st(`${fn}/removeAll`), dd = /* @__PURE__ */ wr(/* @__PURE__ */ st(`${fn}/remove`), {
  withTypes: () => dd
}), kg = (...e) => {
  console.error(`${fn}/error`, ...e);
}, dn = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), {
    extra: r,
    onError: n = kg
  } = e;
  qo(n, "onError");
  const i = (l) => (l.unsubscribe = () => t.delete(l.id), t.set(l.id, l), (f) => {
    l.unsubscribe(), f != null && f.cancelActive && Xa(l);
  }), a = (l) => {
    const f = Uc(t, l) ?? ld(l);
    return i(f);
  };
  wr(a, {
    withTypes: () => a
  });
  const o = (l) => {
    const f = Uc(t, l);
    return f && (f.unsubscribe(), l.cancelActive && Xa(f)), !!f;
  };
  wr(o, {
    withTypes: () => o
  });
  const u = async (l, f, d, h) => {
    const p = new AbortController(), v = Pg(a, p.signal), y = [];
    try {
      l.pending.add(p), await Promise.resolve(l.effect(
        f,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        wr({}, d, {
          getOriginalState: h,
          condition: (b, w) => v(b, w).then(Boolean),
          take: v,
          delay: cd(p.signal),
          pause: ri(p.signal),
          extra: r,
          signal: p.signal,
          fork: Ag(p.signal, y),
          unsubscribe: l.unsubscribe,
          subscribe: () => {
            t.set(l.id, l);
          },
          cancelActiveListeners: () => {
            l.pending.forEach((b, w, x) => {
              b !== p && (ir(b, Ga), x.delete(b));
            });
          },
          cancel: () => {
            ir(p, Ga), l.pending.delete(p);
          },
          throwIfCancelled: () => {
            ar(p.signal);
          }
        })
      ));
    } catch (b) {
      b instanceof $i || Kc(n, b, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(y), ir(p, _g), l.pending.delete(p);
    }
  }, s = Tg(t);
  return {
    middleware: (l) => (f) => (d) => {
      if (!Fo(d))
        return f(d);
      if (fd.match(d))
        return a(d.payload);
      if (Cg.match(d)) {
        s();
        return;
      }
      if (dd.match(d))
        return o(d.payload);
      let h = l.getState();
      const p = () => {
        if (h === zc)
          throw new Error(process.env.NODE_ENV === "production" ? oe(23) : `${fn}: getOriginalState can only be called synchronously`);
        return h;
      };
      let v;
      try {
        if (v = f(d), t.size > 0) {
          const y = l.getState(), b = Array.from(t.values());
          for (const w of b) {
            let x = !1;
            try {
              x = w.predicate(d, y, h);
            } catch (A) {
              x = !1, Kc(n, A, {
                raisedBy: "predicate"
              });
            }
            x && u(w, d, l, p);
          }
        }
      } finally {
        h = zc;
      }
      return v;
    },
    startListening: a,
    stopListening: o,
    clearListeners: s
  };
};
function oe(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Mg = {
  layoutType: "horizontal",
  width: 0,
  height: 0,
  margin: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  },
  scale: 1
}, hd = nt({
  name: "chartLayout",
  initialState: Mg,
  reducers: {
    setLayout(e, t) {
      e.layoutType = t.payload;
    },
    setChartSize(e, t) {
      e.width = t.payload.width, e.height = t.payload.height;
    },
    setMargin(e, t) {
      var r, n, i, a;
      e.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e.margin.bottom = (i = t.payload.bottom) !== null && i !== void 0 ? i : 0, e.margin.left = (a = t.payload.left) !== null && a !== void 0 ? a : 0;
    },
    setScale(e, t) {
      e.scale = t.payload;
    }
  }
}), {
  setMargin: Dg,
  setLayout: Ng,
  setChartSize: jg,
  setScale: Ig
} = hd.actions, Rg = hd.reducer;
function Fc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fc(Object(r), !0).forEach(function(n) {
      $g(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $g(e, t, r) {
  return (t = Lg(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Lg(e) {
  var t = Bg(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Bg(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ni = Math.PI / 180, zg = (e) => e * 180 / Math.PI, je = (e, t, r, n) => ({
  x: e + Math.cos(-ni * n) * r,
  y: t + Math.sin(-ni * n) * r
}), Ug = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, Kg = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: i,
    y: a
  } = t;
  return Math.sqrt((r - i) ** 2 + (n - a) ** 2);
}, Fg = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    cx: i,
    cy: a
  } = t, o = Kg({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
  if (o <= 0)
    return {
      radius: o,
      angle: 0
    };
  var u = (r - i) / o, s = Math.acos(u);
  return n > a && (s = 2 * Math.PI - s), {
    radius: o,
    angle: zg(s),
    angleInRadian: s
  };
}, Wg = (e) => {
  var {
    startAngle: t,
    endAngle: r
  } = e, n = Math.floor(t / 360), i = Math.floor(r / 360), a = Math.min(n, i);
  return {
    startAngle: t - a * 360,
    endAngle: r - a * 360
  };
}, Vg = (e, t) => {
  var {
    startAngle: r,
    endAngle: n
  } = t, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return e + o * 360;
}, Hg = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    radius: i,
    angle: a
  } = Fg({
    x: r,
    y: n
  }, t), {
    innerRadius: o,
    outerRadius: u
  } = t;
  if (i < o || i > u || i === 0)
    return null;
  var {
    startAngle: s,
    endAngle: c
  } = Wg(t), l = a, f;
  if (s <= c) {
    for (; l > c; )
      l -= 360;
    for (; l < s; )
      l += 360;
    f = l >= s && l <= c;
  } else {
    for (; l > s; )
      l -= 360;
    for (; l < c; )
      l += 360;
    f = l >= c && l <= s;
  }
  return f ? Wc(Wc({}, t), {}, {
    radius: i,
    angle: Vg(l, t)
  }) : null;
};
function pd(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function Vc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vc(Object(r), !0).forEach(function(n) {
      qg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qg(e, t, r) {
  return (t = Yg(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Yg(e) {
  var t = Gg(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Gg(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fe(e, t, r) {
  return Pe(e) || Pe(t) ? r : gt(t) ? Ci(e, t, r) : typeof t == "function" ? t(e) : r;
}
var Xg = (e, t, r, n, i) => {
  var a, o = -1, u = (a = t == null ? void 0 : t.length) !== null && a !== void 0 ? a : 0;
  if (u <= 1 || e == null)
    return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6)
    for (var s = 0; s < u; s++) {
      var c = s > 0 ? r[s - 1].coordinate : r[u - 1].coordinate, l = r[s].coordinate, f = s >= u - 1 ? r[0].coordinate : r[s + 1].coordinate, d = void 0;
      if (ot(l - c) !== ot(f - l)) {
        var h = [];
        if (ot(f - l) === ot(i[1] - i[0])) {
          d = f;
          var p = l + i[1] - i[0];
          h[0] = Math.min(p, (p + c) / 2), h[1] = Math.max(p, (p + c) / 2);
        } else {
          d = c;
          var v = f + i[1] - i[0];
          h[0] = Math.min(l, (v + l) / 2), h[1] = Math.max(l, (v + l) / 2);
        }
        var y = [Math.min(l, (d + l) / 2), Math.max(l, (d + l) / 2)];
        if (e > y[0] && e <= y[1] || e >= h[0] && e <= h[1]) {
          ({
            index: o
          } = r[s]);
          break;
        }
      } else {
        var b = Math.min(c, f), w = Math.max(c, f);
        if (e > (b + l) / 2 && e <= (w + l) / 2) {
          ({
            index: o
          } = r[s]);
          break;
        }
      }
    }
  else if (t) {
    for (var x = 0; x < u; x++)
      if (x === 0 && e <= (t[x].coordinate + t[x + 1].coordinate) / 2 || x > 0 && x < u - 1 && e > (t[x].coordinate + t[x - 1].coordinate) / 2 && e <= (t[x].coordinate + t[x + 1].coordinate) / 2 || x === u - 1 && e > (t[x].coordinate + t[x - 1].coordinate) / 2) {
        ({
          index: o
        } = t[x]);
        break;
      }
  }
  return o;
}, Zg = (e, t, r) => {
  if (t && r) {
    var {
      width: n,
      height: i
    } = r, {
      align: a,
      verticalAlign: o,
      layout: u
    } = t;
    if ((u === "vertical" || u === "horizontal" && o === "middle") && a !== "center" && H(e[a]))
      return at(at({}, e), {}, {
        [a]: e[a] + (n || 0)
      });
    if ((u === "horizontal" || u === "vertical" && a === "center") && o !== "middle" && H(e[o]))
      return at(at({}, e), {}, {
        [o]: e[o] + (i || 0)
      });
  }
  return e;
}, Vt = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", vd = (e, t, r, n) => {
  if (n)
    return e.map((u) => u.coordinate);
  var i, a, o = e.map((u) => (u.coordinate === t && (i = !0), u.coordinate === r && (a = !0), u.coordinate));
  return i || o.push(t), a || o.push(r), o;
}, yd = (e, t, r) => {
  if (!e)
    return null;
  var {
    duplicateDomain: n,
    type: i,
    range: a,
    scale: o,
    realScaleType: u,
    isCategorical: s,
    categoricalDomain: c,
    tickCount: l,
    ticks: f,
    niceTicks: d,
    axisType: h
  } = e;
  if (!o)
    return null;
  var p = u === "scaleBand" && o.bandwidth ? o.bandwidth() / 2 : 2, v = i === "category" && o.bandwidth ? o.bandwidth() / p : 0;
  if (v = h === "angleAxis" && a && a.length >= 2 ? ot(a[0] - a[1]) * 2 * v : v, f || d) {
    var y = (f || d || []).map((b, w) => {
      var x = n ? n.indexOf(b) : b;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: o(x) + v,
        value: b,
        offset: v,
        index: w
      };
    });
    return y.filter((b) => !ct(b.coordinate));
  }
  return s && c ? c.map((b, w) => ({
    coordinate: o(b) + v,
    value: b,
    index: w,
    offset: v
  })) : o.ticks && l != null ? o.ticks(l).map((b, w) => ({
    coordinate: o(b) + v,
    value: b,
    offset: v,
    index: w
  })) : o.domain().map((b, w) => ({
    coordinate: o(b) + v,
    value: n ? n[b] : b,
    index: w,
    offset: v
  }));
}, Hc = 1e-4, Qg = (e) => {
  var t = e.domain();
  if (!(!t || t.length <= 2)) {
    var r = t.length, n = e.range(), i = Math.min(n[0], n[1]) - Hc, a = Math.max(n[0], n[1]) + Hc, o = e(t[0]), u = e(t[r - 1]);
    (o < i || o > a || u < i || u > a) && e.domain([t[0], t[r - 1]]);
  }
}, Jg = (e) => {
  var t = e.length;
  if (!(t <= 0))
    for (var r = 0, n = e[0].length; r < n; ++r)
      for (var i = 0, a = 0, o = 0; o < t; ++o) {
        var u = ct(e[o][r][1]) ? e[o][r][0] : e[o][r][1];
        u >= 0 ? (e[o][r][0] = i, e[o][r][1] = i + u, i = e[o][r][1]) : (e[o][r][0] = a, e[o][r][1] = a + u, a = e[o][r][1]);
      }
}, e0 = (e) => {
  var t = e.length;
  if (!(t <= 0))
    for (var r = 0, n = e[0].length; r < n; ++r)
      for (var i = 0, a = 0; a < t; ++a) {
        var o = ct(e[a][r][1]) ? e[a][r][0] : e[a][r][1];
        o >= 0 ? (e[a][r][0] = i, e[a][r][1] = i + o, i = e[a][r][1]) : (e[a][r][0] = 0, e[a][r][1] = 0);
      }
}, t0 = {
  sign: Jg,
  // @ts-expect-error definitelytyped types are incorrect
  expand: Xy,
  // @ts-expect-error definitelytyped types are incorrect
  none: Or,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: Zy,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: Qy,
  positive: e0
}, r0 = (e, t, r) => {
  var n = t0[r], i = Gy().keys(t).value((a, o) => +Fe(a, o, 0)).order(za).offset(n);
  return i(e);
};
function qc(e) {
  var {
    axis: t,
    ticks: r,
    bandSize: n,
    entry: i,
    index: a,
    dataKey: o
  } = e;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Pe(i[t.dataKey])) {
      var u = Xl(r, "value", i[t.dataKey]);
      if (u)
        return u.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var s = Fe(i, Pe(o) ? t.dataKey : o);
  return Pe(s) ? null : t.scale(s);
}
var n0 = (e) => {
  var t = e.flat(2).filter(H);
  return [Math.min(...t), Math.max(...t)];
}, i0 = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]], a0 = (e, t, r) => {
  if (e != null)
    return i0(Object.keys(e).reduce((n, i) => {
      var a = e[i], {
        stackedData: o
      } = a, u = o.reduce((s, c) => {
        var l = pd(c, t, r), f = n0(l);
        return [Math.min(s[0], f[0]), Math.max(s[1], f[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(u[0], n[0]), Math.max(u[1], n[1])];
    }, [1 / 0, -1 / 0]));
}, Yc = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Gc = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Za = (e, t, r) => {
  if (e && e.scale && e.scale.bandwidth) {
    var n = e.scale.bandwidth();
    if (!r || n > 0)
      return n;
  }
  if (e && t && t.length >= 2) {
    for (var i = Ni(t, (l) => l.coordinate), a = 1 / 0, o = 1, u = i.length; o < u; o++) {
      var s = i[o], c = i[o - 1];
      a = Math.min((s.coordinate || 0) - (c.coordinate || 0), a);
    }
    return a === 1 / 0 ? 0 : a;
  }
  return r ? void 0 : 0;
};
function Xc(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: r,
    payload: n,
    value: i,
    name: a
  } = e;
  return at(at({}, t), {}, {
    dataKey: r,
    payload: n,
    value: i,
    name: a
  });
}
function md(e, t) {
  if (e)
    return String(e);
  if (typeof t == "string")
    return t;
}
function o0(e, t, r, n, i) {
  if (r === "horizontal" || r === "vertical") {
    var a = e >= i.left && e <= i.left + i.width && t >= i.top && t <= i.top + i.height;
    return a ? {
      x: e,
      y: t
    } : null;
  }
  return n ? Hg({
    x: e,
    y: t
  }, n) : null;
}
var u0 = (e, t, r, n) => {
  var i = t.find((c) => c && c.index === r);
  if (i) {
    if (e === "horizontal")
      return {
        x: i.coordinate,
        y: n.y
      };
    if (e === "vertical")
      return {
        x: n.x,
        y: i.coordinate
      };
    if (e === "centric") {
      var a = i.coordinate, {
        radius: o
      } = n;
      return at(at(at({}, n), je(n.cx, n.cy, o, a)), {}, {
        angle: a,
        radius: o
      });
    }
    var u = i.coordinate, {
      angle: s
    } = n;
    return at(at(at({}, n), je(n.cx, n.cy, u, s)), {}, {
      angle: s,
      radius: u
    });
  }
  return {
    x: 0,
    y: 0
  };
}, c0 = (e, t) => t === "horizontal" ? e.x : t === "vertical" ? e.y : t === "centric" ? e.angle : e.radius, Mt = (e) => e.layout.width, Dt = (e) => e.layout.height, s0 = (e) => e.layout.scale, gd = (e) => e.layout.margin, Li = C((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), Bi = C((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), l0 = "data-recharts-item-index", f0 = "data-recharts-item-data-key", hn = 60;
function Zc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $n(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zc(Object(r), !0).forEach(function(n) {
      d0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function d0(e, t, r) {
  return (t = h0(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function h0(e) {
  var t = p0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function p0(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var v0 = (e) => e.brush.height;
function y0(e) {
  var t = Bi(e);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : hn;
      return r + i;
    }
    return r;
  }, 0);
}
function m0(e) {
  var t = Bi(e);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : hn;
      return r + i;
    }
    return r;
  }, 0);
}
function g0(e) {
  var t = Li(e);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function b0(e) {
  var t = Li(e);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var Re = C([Mt, Dt, gd, v0, y0, m0, g0, b0, Bf, _m], (e, t, r, n, i, a, o, u, s, c) => {
  var l = {
    left: (r.left || 0) + i,
    right: (r.right || 0) + a
  }, f = {
    top: (r.top || 0) + o,
    bottom: (r.bottom || 0) + u
  }, d = $n($n({}, f), l), h = d.bottom;
  d.bottom += n, d = Zg(d, s, c);
  var p = e - d.left - d.right, v = t - d.top - d.bottom;
  return $n($n({
    brushBottom: h
  }, d), {}, {
    // never return negative values for height and width
    width: Math.max(p, 0),
    height: Math.max(v, 0)
  });
}), w0 = C(Re, (e) => ({
  x: e.left,
  y: e.top,
  width: e.width,
  height: e.height
})), x0 = C(Mt, Dt, (e, t) => ({
  x: 0,
  y: 0,
  width: e,
  height: t
})), O0 = /* @__PURE__ */ g.createContext(null), pt = () => g.useContext(O0) != null, zi = (e) => e.brush, Ui = C([zi, Re, gd], (e, t, r) => ({
  height: e.height,
  x: H(e.x) ? e.x : t.left,
  y: H(e.y) ? e.y : t.top + t.height + t.brushBottom - ((r == null ? void 0 : r.bottom) || 0),
  width: H(e.width) ? e.width : t.width
})), Yo = () => {
  var e, t = pt(), r = q(w0), n = q(Ui), i = (e = q(zi)) === null || e === void 0 ? void 0 : e.padding;
  return !t || !n || !i ? r : {
    width: n.width - i.left - i.right,
    height: n.height - i.top - i.bottom,
    x: i.left,
    y: i.top
  };
}, E0 = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0
}, bd = () => {
  var e;
  return (e = q(Re)) !== null && e !== void 0 ? e : E0;
}, wd = () => q(Mt), xd = () => q(Dt), pe = (e) => e.layout.layoutType, Go = () => q(pe), _0 = {
  settings: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    itemSorter: "value"
  },
  size: {
    width: 0,
    height: 0
  },
  payload: []
}, Od = nt({
  name: "legend",
  initialState: _0,
  reducers: {
    setLegendSize(e, t) {
      e.size.width = t.payload.width, e.size.height = t.payload.height;
    },
    setLegendSettings(e, t) {
      e.settings.align = t.payload.align, e.settings.layout = t.payload.layout, e.settings.verticalAlign = t.payload.verticalAlign, e.settings.itemSorter = t.payload.itemSorter;
    },
    addLegendPayload(e, t) {
      e.payload.push(t.payload);
    },
    removeLegendPayload(e, t) {
      var r = St(e).payload.indexOf(t.payload);
      r > -1 && e.payload.splice(r, 1);
    }
  }
}), {
  setLegendSize: zT,
  setLegendSettings: UT,
  addLegendPayload: S0,
  removeLegendPayload: A0
} = Od.actions, P0 = Od.reducer;
function Qa() {
  return Qa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qa.apply(null, arguments);
}
function Qc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qc(Object(r), !0).forEach(function(n) {
      T0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function T0(e, t, r) {
  return (t = C0(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function C0(e) {
  var t = k0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function k0(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function M0(e) {
  return Array.isArray(e) && gt(e[0]) && gt(e[1]) ? e.join(" ~ ") : e;
}
var D0 = (e) => {
  var {
    separator: t = " : ",
    contentStyle: r = {},
    itemStyle: n = {},
    labelStyle: i = {},
    payload: a,
    formatter: o,
    itemSorter: u,
    wrapperClassName: s,
    labelClassName: c,
    label: l,
    labelFormatter: f,
    accessibilityLayer: d = !1
  } = e, h = () => {
    if (a && a.length) {
      var S = {
        padding: 0,
        margin: 0
      }, _ = (u ? Ni(a, u) : a).map((P, N) => {
        if (P.type === "none")
          return null;
        var j = P.formatter || o || M0, {
          value: B,
          name: R
        } = P, k = B, K = R;
        if (j) {
          var W = j(B, R, P, N, a);
          if (Array.isArray(W))
            [k, K] = W;
          else if (W != null)
            k = W;
          else
            return null;
        }
        var te = ma({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: P.color || "#000"
        }, n);
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ g.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(N),
            style: te
          }, gt(K) ? /* @__PURE__ */ g.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, K) : null, gt(K) ? /* @__PURE__ */ g.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, t) : null, /* @__PURE__ */ g.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, k), /* @__PURE__ */ g.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, P.unit || ""))
        );
      });
      return /* @__PURE__ */ g.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: S
      }, _);
    }
    return null;
  }, p = ma({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, r), v = ma({
    margin: 0
  }, i), y = !Pe(l), b = y ? l : "", w = ye("recharts-default-tooltip", s), x = ye("recharts-tooltip-label", c);
  y && f && a !== void 0 && a !== null && (b = f(l, a));
  var A = d ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ g.createElement("div", Qa({
    className: w,
    style: p
  }, A), /* @__PURE__ */ g.createElement("p", {
    className: x,
    style: v
  }, /* @__PURE__ */ g.isValidElement(b) ? b : "".concat(b)), h());
}, Br = "recharts-tooltip-wrapper", N0 = {
  visibility: "hidden"
};
function j0(e) {
  var {
    coordinate: t,
    translateX: r,
    translateY: n
  } = e;
  return ye(Br, {
    ["".concat(Br, "-right")]: H(r) && t && H(t.x) && r >= t.x,
    ["".concat(Br, "-left")]: H(r) && t && H(t.x) && r < t.x,
    ["".concat(Br, "-bottom")]: H(n) && t && H(t.y) && n >= t.y,
    ["".concat(Br, "-top")]: H(n) && t && H(t.y) && n < t.y
  });
}
function Jc(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    key: n,
    offsetTopLeft: i,
    position: a,
    reverseDirection: o,
    tooltipDimension: u,
    viewBox: s,
    viewBoxDimension: c
  } = e;
  if (a && H(a[n]))
    return a[n];
  var l = r[n] - u - (i > 0 ? i : 0), f = r[n] + i;
  if (t[n])
    return o[n] ? l : f;
  var d = s[n];
  if (d == null)
    return 0;
  if (o[n]) {
    var h = l, p = d;
    return h < p ? Math.max(f, d) : Math.max(l, d);
  }
  if (c == null)
    return 0;
  var v = f + u, y = d + c;
  return v > y ? Math.max(l, d) : Math.max(f, d);
}
function I0(e) {
  var {
    translateX: t,
    translateY: r,
    useTranslate3d: n
  } = e;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function R0(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipBox: o,
    useTranslate3d: u,
    viewBox: s
  } = e, c, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = Jc({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), f = Jc({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), c = I0({
    translateX: l,
    translateY: f,
    useTranslate3d: u
  })) : c = N0, {
    cssProperties: c,
    cssClasses: j0({
      translateX: l,
      translateY: f,
      coordinate: r
    })
  };
}
function es(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? es(Object(r), !0).forEach(function(n) {
      Ja(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : es(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ja(e, t, r) {
  return (t = $0(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $0(e) {
  var t = L0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function L0(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class B0 extends g.PureComponent {
  constructor() {
    super(...arguments), Ja(this, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    }), Ja(this, "handleKeyDown", (t) => {
      if (t.key === "Escape") {
        var r, n, i, a;
        this.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (r = (n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== null && r !== void 0 ? r : 0,
            y: (i = (a = this.props.coordinate) === null || a === void 0 ? void 0 : a.y) !== null && i !== void 0 ? i : 0
          }
        });
      }
    });
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  componentDidUpdate() {
    var t, r;
    this.state.dismissed && (((t = this.props.coordinate) === null || t === void 0 ? void 0 : t.x) !== this.state.dismissedAtCoordinate.x || ((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
  }
  render() {
    var {
      active: t,
      allowEscapeViewBox: r,
      animationDuration: n,
      animationEasing: i,
      children: a,
      coordinate: o,
      hasPayload: u,
      isAnimationActive: s,
      offset: c,
      position: l,
      reverseDirection: f,
      useTranslate3d: d,
      viewBox: h,
      wrapperStyle: p,
      lastBoundingBox: v,
      innerRef: y,
      hasPortalFromProps: b
    } = this.props, {
      cssClasses: w,
      cssProperties: x
    } = R0({
      allowEscapeViewBox: r,
      coordinate: o,
      offsetTopLeft: c,
      position: l,
      reverseDirection: f,
      tooltipBox: {
        height: v.height,
        width: v.width
      },
      useTranslate3d: d,
      viewBox: h
    }), A = b ? {} : Ln(Ln({
      transition: s && t ? "transform ".concat(n, "ms ").concat(i) : void 0
    }, x), {}, {
      pointerEvents: "none",
      visibility: !this.state.dismissed && t && u ? "visible" : "hidden",
      position: "absolute",
      top: 0,
      left: 0
    }), S = Ln(Ln({}, A), {}, {
      visibility: !this.state.dismissed && t && u ? "visible" : "hidden"
    }, p);
    return (
      // This element allow listening to the `Escape` key. See https://github.com/recharts/recharts/pull/2925
      /* @__PURE__ */ g.createElement("div", {
        // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
        xmlns: "http://www.w3.org/1999/xhtml",
        tabIndex: -1,
        className: w,
        style: S,
        ref: y
      }, a)
    );
  }
}
var z0 = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), Cr = {
  devToolsEnabled: !1,
  isSsr: z0()
}, Ed = () => q((e) => e.rootProps.accessibilityLayer);
function ht(e) {
  return Number.isFinite(e);
}
function ii(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
}
function eo() {
  return eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, eo.apply(null, arguments);
}
function ts(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ts(Object(r), !0).forEach(function(n) {
      U0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ts(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function U0(e, t, r) {
  return (t = K0(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function K0(e) {
  var t = F0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function F0(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ns = {
  curveBasisClosed: Ly,
  curveBasisOpen: By,
  curveBasis: $y,
  curveBumpX: Iy,
  curveBumpY: Ry,
  curveLinearClosed: zy,
  curveLinear: ki,
  curveMonotoneX: Uy,
  curveMonotoneY: Ky,
  curveNatural: Fy,
  curveStep: Wy,
  curveStepAfter: Hy,
  curveStepBefore: Vy
}, Bn = (e) => ht(e.x) && ht(e.y), zr = (e) => e.x, Ur = (e) => e.y, W0 = (e, t) => {
  if (typeof e == "function")
    return e;
  var r = "curve".concat(Po(e));
  return (r === "curveMonotone" || r === "curveBump") && t ? ns["".concat(r).concat(t === "vertical" ? "Y" : "X")] : ns[r] || ki;
}, V0 = (e) => {
  var {
    type: t = "linear",
    points: r = [],
    baseLine: n,
    layout: i,
    connectNulls: a = !1
  } = e, o = W0(t, i), u = a ? r.filter(Bn) : r, s;
  if (Array.isArray(n)) {
    var c = a ? n.filter((f) => Bn(f)) : n, l = u.map((f, d) => rs(rs({}, f), {}, {
      base: c[d]
    }));
    return i === "vertical" ? s = Cn().y(Ur).x1(zr).x0((f) => f.base.x) : s = Cn().x(zr).y1(Ur).y0((f) => f.base.y), s.defined(Bn).curve(o), s(l);
  }
  return i === "vertical" && H(n) ? s = Cn().y(Ur).x1(zr).x0(n) : H(n) ? s = Cn().x(zr).y1(Ur).y0(n) : s = uf().x(zr).y(Ur), s.defined(Bn).curve(o), s(u);
}, _d = (e) => {
  var {
    className: t,
    points: r,
    path: n,
    pathRef: i
  } = e;
  if ((!r || !r.length) && !n)
    return null;
  var a = r && r.length ? V0(e) : n;
  return /* @__PURE__ */ g.createElement("path", eo({}, hr(e), Co(e), {
    className: ye("recharts-curve", t),
    d: a === null ? void 0 : a,
    ref: i
  }));
}, H0 = ["x", "y", "top", "left", "width", "height", "className"];
function to() {
  return to = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, to.apply(null, arguments);
}
function is(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function q0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? is(Object(r), !0).forEach(function(n) {
      Y0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : is(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Y0(e, t, r) {
  return (t = G0(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function G0(e) {
  var t = X0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function X0(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Z0(e, t) {
  if (e == null) return {};
  var r, n, i = Q0(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Q0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var J0 = (e, t, r, n, i, a) => "M".concat(e, ",").concat(i, "v").concat(n, "M").concat(a, ",").concat(t, "h").concat(r), eb = (e) => {
  var {
    x: t = 0,
    y: r = 0,
    top: n = 0,
    left: i = 0,
    width: a = 0,
    height: o = 0,
    className: u
  } = e, s = Z0(e, H0), c = q0({
    x: t,
    y: r,
    top: n,
    left: i,
    width: a,
    height: o
  }, s);
  return !H(t) || !H(r) || !H(a) || !H(o) || !H(n) || !H(i) ? null : /* @__PURE__ */ g.createElement("path", to({}, Ie(c, !0), {
    className: ye("recharts-cross", u),
    d: J0(t, r, a, o, n, i)
  }));
};
function tb(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function as(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? as(Object(r), !0).forEach(function(n) {
      nb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : as(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nb(e, t, r) {
  return (t = ib(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ib(e) {
  var t = ab(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ab(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vt(e, t) {
  var r = rb({}, e), n = t, i = Object.keys(t), a = i.reduce((o, u) => (o[u] === void 0 && n[u] !== void 0 && (o[u] = n[u]), o), r);
  return a;
}
function ob() {
}
function os(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? os(Object(r), !0).forEach(function(n) {
      ub(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : os(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ub(e, t, r) {
  return (t = cb(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cb(e) {
  var t = sb(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sb(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lb = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), fb = (e, t, r) => e.map((n) => "".concat(lb(n), " ").concat(t, "ms ").concat(r)).join(","), db = (e, t) => [Object.keys(e), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), en = (e, t) => Object.keys(t).reduce((r, n) => us(us({}, r), {}, {
  [n]: e(n, t[n])
}), {});
function cs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cs(Object(r), !0).forEach(function(n) {
      hb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hb(e, t, r) {
  return (t = pb(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pb(e) {
  var t = vb(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vb(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ai = (e, t, r) => e + (t - e) * r, ro = (e) => {
  var {
    from: t,
    to: r
  } = e;
  return t !== r;
}, Sd = (e, t, r) => {
  var n = en((i, a) => {
    if (ro(a)) {
      var [o, u] = e(a.from, a.to, a.velocity);
      return Ne(Ne({}, a), {}, {
        from: o,
        velocity: u
      });
    }
    return a;
  }, t);
  return r < 1 ? en((i, a) => ro(a) ? Ne(Ne({}, a), {}, {
    velocity: ai(a.velocity, n[i].velocity, r),
    from: ai(a.from, n[i].from, r)
  }) : a, t) : Sd(e, n, r - 1);
};
function yb(e, t, r, n, i, a) {
  var o, u = n.reduce((d, h) => Ne(Ne({}, d), {}, {
    [h]: {
      from: e[h],
      velocity: 0,
      to: t[h]
    }
  }), {}), s = () => en((d, h) => h.from, u), c = () => !Object.values(u).filter(ro).length, l = null, f = (d) => {
    o || (o = d);
    var h = d - o, p = h / r.dt;
    u = Sd(r, u, p), i(Ne(Ne(Ne({}, e), t), s())), o = d, c() || (l = a.setTimeout(f));
  };
  return () => (l = a.setTimeout(f), () => {
    l();
  });
}
function mb(e, t, r, n, i, a, o) {
  var u = null, s = i.reduce((f, d) => Ne(Ne({}, f), {}, {
    [d]: [e[d], t[d]]
  }), {}), c, l = (f) => {
    c || (c = f);
    var d = (f - c) / n, h = en((v, y) => ai(...y, r(d)), s);
    if (a(Ne(Ne(Ne({}, e), t), h)), d < 1)
      u = o.setTimeout(l);
    else {
      var p = en((v, y) => ai(...y, r(1)), s);
      a(Ne(Ne(Ne({}, e), t), p));
    }
  };
  return () => (u = o.setTimeout(l), () => {
    u();
  });
}
const gb = (e, t, r, n, i, a) => {
  var o = db(e, t);
  return r.isStepper === !0 ? yb(e, t, r, o, i, a) : mb(e, t, r, n, o, i, a);
};
var oi = 1e-4, Ad = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1], Pd = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n), ss = (e, t) => (r) => {
  var n = Ad(e, t);
  return Pd(n, r);
}, bb = (e, t) => (r) => {
  var n = Ad(e, t), i = [...n.map((a, o) => a * o).slice(1), 0];
  return Pd(i, r);
}, ls = function() {
  for (var t, r, n, i, a = arguments.length, o = new Array(a), u = 0; u < a; u++)
    o[u] = arguments[u];
  if (o.length === 1)
    switch (o[0]) {
      case "linear":
        [t, n, r, i] = [0, 0, 1, 1];
        break;
      case "ease":
        [t, n, r, i] = [0.25, 0.1, 0.25, 1];
        break;
      case "ease-in":
        [t, n, r, i] = [0.42, 0, 1, 1];
        break;
      case "ease-out":
        [t, n, r, i] = [0.42, 0, 0.58, 1];
        break;
      case "ease-in-out":
        [t, n, r, i] = [0, 0, 0.58, 1];
        break;
      default: {
        var s = o[0].split("(");
        s[0] === "cubic-bezier" && s[1].split(")")[0].split(",").length === 4 && ([t, n, r, i] = s[1].split(")")[0].split(",").map((p) => parseFloat(p)));
      }
    }
  else o.length === 4 && ([t, n, r, i] = o);
  var c = ss(t, r), l = ss(n, i), f = bb(t, r), d = (p) => p > 1 ? 1 : p < 0 ? 0 : p, h = (p) => {
    for (var v = p > 1 ? 1 : p, y = v, b = 0; b < 8; ++b) {
      var w = c(y) - v, x = f(y);
      if (Math.abs(w - v) < oi || x < oi)
        return l(y);
      y = d(y - w / x);
    }
    return l(y);
  };
  return h.isStepper = !1, h;
}, wb = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    stiff: r = 100,
    damping: n = 8,
    dt: i = 17
  } = t, a = (o, u, s) => {
    var c = -(o - u) * r, l = s * n, f = s + (c - l) * i / 1e3, d = s * i / 1e3 + o;
    return Math.abs(d - u) < oi && Math.abs(f) < oi ? [u, 0] : [d, f];
  };
  return a.isStepper = !0, a.dt = i, a;
}, xb = (e) => {
  if (typeof e == "string")
    switch (e) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return ls(e);
      case "spring":
        return wb();
      default:
        if (e.split("(")[0] === "cubic-bezier")
          return ls(e);
    }
  return typeof e == "function" ? e : null;
};
function Ob(e) {
  var t, r = () => null, n = !1, i = null, a = (o) => {
    if (!n) {
      if (Array.isArray(o)) {
        if (!o.length)
          return;
        var u = o, [s, ...c] = u;
        if (typeof s == "number") {
          i = e.setTimeout(a.bind(null, c), s);
          return;
        }
        a(s), i = e.setTimeout(a.bind(null, c));
        return;
      }
      typeof o == "string" && (t = o, r(t)), typeof o == "object" && (t = o, r(t)), typeof o == "function" && o();
    }
  };
  return {
    stop: () => {
      n = !0;
    },
    start: (o) => {
      n = !1, i && (i(), i = null), a(o);
    },
    subscribe: (o) => (r = o, () => {
      r = () => null;
    }),
    getTimeoutController: () => e
  };
}
class Eb {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), i = null, a = (o) => {
      o - n >= r ? t(o) : typeof requestAnimationFrame == "function" && (i = requestAnimationFrame(a));
    };
    return i = requestAnimationFrame(a), () => {
      cancelAnimationFrame(i);
    };
  }
}
function _b() {
  return Ob(new Eb());
}
var Sb = /* @__PURE__ */ g.createContext(_b);
function Ab(e, t) {
  var r = g.useContext(Sb);
  return g.useMemo(() => t ?? r(e), [e, t, r]);
}
var Pb = {
  begin: 0,
  duration: 1e3,
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  onAnimationEnd: () => {
  },
  onAnimationStart: () => {
  }
}, fs = {
  t: 0
}, ga = {
  t: 1
};
function Td(e) {
  var t = vt(e, Pb), {
    isActive: r,
    canBegin: n,
    duration: i,
    easing: a,
    begin: o,
    onAnimationEnd: u,
    onAnimationStart: s,
    children: c
  } = t, l = Ab(t.animationId, t.animationManager), [f, d] = g.useState(r ? fs : ga), h = g.useRef(null);
  return g.useEffect(() => {
    r || d(ga);
  }, [r]), g.useEffect(() => {
    if (!r || !n)
      return ob;
    var p = gb(fs, ga, xb(a), i, d, l.getTimeoutController()), v = () => {
      h.current = p();
    };
    return l.start([s, o, v, i, u]), () => {
      l.stop(), h.current && h.current(), u();
    };
  }, [r, n, i, a, o, s, u, l]), c(f.t);
}
function Cd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = g.useRef(Zr(t)), n = g.useRef(e);
  return n.current !== e && (r.current = Zr(t), n.current = e), r.current;
}
function ds(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ds(Object(r), !0).forEach(function(n) {
      Tb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ds(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tb(e, t, r) {
  return (t = Cb(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Cb(e) {
  var t = kb(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function kb(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ui() {
  return ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ui.apply(null, arguments);
}
var ps = (e, t, r, n, i) => {
  var a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2), o = n >= 0 ? 1 : -1, u = r >= 0 ? 1 : -1, s = n >= 0 && r >= 0 || n < 0 && r < 0 ? 1 : 0, c;
  if (a > 0 && i instanceof Array) {
    for (var l = [0, 0, 0, 0], f = 0, d = 4; f < d; f++)
      l[f] = i[f] > a ? a : i[f];
    c = "M".concat(e, ",").concat(t + o * l[0]), l[0] > 0 && (c += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(s, ",").concat(e + u * l[0], ",").concat(t)), c += "L ".concat(e + r - u * l[1], ",").concat(t), l[1] > 0 && (c += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(s, `,
        `).concat(e + r, ",").concat(t + o * l[1])), c += "L ".concat(e + r, ",").concat(t + n - o * l[2]), l[2] > 0 && (c += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(s, `,
        `).concat(e + r - u * l[2], ",").concat(t + n)), c += "L ".concat(e + u * l[3], ",").concat(t + n), l[3] > 0 && (c += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(s, `,
        `).concat(e, ",").concat(t + n - o * l[3])), c += "Z";
  } else if (a > 0 && i === +i && i > 0) {
    var h = Math.min(a, i);
    c = "M ".concat(e, ",").concat(t + o * h, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(s, ",").concat(e + u * h, ",").concat(t, `
            L `).concat(e + r - u * h, ",").concat(t, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(s, ",").concat(e + r, ",").concat(t + o * h, `
            L `).concat(e + r, ",").concat(t + n - o * h, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(s, ",").concat(e + r - u * h, ",").concat(t + n, `
            L `).concat(e + u * h, ",").concat(t + n, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(s, ",").concat(e, ",").concat(t + n - o * h, " Z");
  } else
    c = "M ".concat(e, ",").concat(t, " h ").concat(r, " v ").concat(n, " h ").concat(-r, " Z");
  return c;
}, Mb = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, Db = (e) => {
  var t = vt(e, Mb), r = g.useRef(null), [n, i] = g.useState(-1);
  g.useEffect(() => {
    if (r.current && r.current.getTotalLength)
      try {
        var W = r.current.getTotalLength();
        W && i(W);
      } catch {
      }
  }, []);
  var {
    x: a,
    y: o,
    width: u,
    height: s,
    radius: c,
    className: l
  } = t, {
    animationEasing: f,
    animationDuration: d,
    animationBegin: h,
    isAnimationActive: p,
    isUpdateAnimationActive: v
  } = t, y = g.useRef(u), b = g.useRef(s), w = g.useRef(a), x = g.useRef(o), A = g.useMemo(() => ({
    x: a,
    y: o,
    width: u,
    height: s,
    radius: c
  }), [a, o, u, s, c]), S = Cd(A, "rectangle-");
  if (a !== +a || o !== +o || u !== +u || s !== +s || u === 0 || s === 0)
    return null;
  var _ = ye("recharts-rectangle", l);
  if (!v)
    return /* @__PURE__ */ g.createElement("path", ui({}, Ie(t, !0), {
      className: _,
      d: ps(a, o, u, s, c)
    }));
  var P = y.current, N = b.current, j = w.current, B = x.current, R = "0px ".concat(n === -1 ? 1 : n, "px"), k = "".concat(n, "px 0px"), K = fb(["strokeDasharray"], d, typeof f == "string" ? f : void 0);
  return /* @__PURE__ */ g.createElement(Td, {
    animationId: S,
    key: S,
    canBegin: n > 0,
    duration: d,
    easing: f,
    isActive: v,
    begin: h
  }, (W) => {
    var te = wt(P, u, W), re = wt(N, s, W), X = wt(j, a, W), ge = wt(B, o, W);
    r.current && (y.current = te, b.current = re, w.current = X, x.current = ge);
    var ue;
    return p ? W > 0 ? ue = {
      transition: K,
      strokeDasharray: k
    } : ue = {
      strokeDasharray: R
    } : ue = {
      strokeDasharray: k
    }, /* @__PURE__ */ g.createElement("path", ui({}, Ie(t, !0), {
      className: _,
      d: ps(X, ge, te, re, c),
      ref: r,
      style: hs(hs({}, ue), t.style)
    }));
  });
};
function kd(e) {
  var {
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  } = e, o = je(t, r, n, i), u = je(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function no() {
  return no = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, no.apply(null, arguments);
}
var Nb = (e, t) => {
  var r = ot(t - e), n = Math.min(Math.abs(t - e), 359.999);
  return r * n;
}, zn = (e) => {
  var {
    cx: t,
    cy: r,
    radius: n,
    angle: i,
    sign: a,
    isExternal: o,
    cornerRadius: u,
    cornerIsExternal: s
  } = e, c = u * (o ? 1 : -1) + n, l = Math.asin(u / c) / ni, f = s ? i : i + a * l, d = je(t, r, c, f), h = je(t, r, n, f), p = s ? i - a * l : i, v = je(t, r, c * Math.cos(l * ni), p);
  return {
    center: d,
    circleTangency: h,
    lineTangency: v,
    theta: l
  };
}, Md = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    startAngle: a,
    endAngle: o
  } = e, u = Nb(a, o), s = a + u, c = je(t, r, i, a), l = je(t, r, i, s), f = "M ".concat(c.x, ",").concat(c.y, `
    A `).concat(i, ",").concat(i, `,0,
    `).concat(+(Math.abs(u) > 180), ",").concat(+(a > s), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (n > 0) {
    var d = je(t, r, n, a), h = je(t, r, n, s);
    f += "L ".concat(h.x, ",").concat(h.y, `
            A `).concat(n, ",").concat(n, `,0,
            `).concat(+(Math.abs(u) > 180), ",").concat(+(a <= s), `,
            `).concat(d.x, ",").concat(d.y, " Z");
  } else
    f += "L ".concat(t, ",").concat(r, " Z");
  return f;
}, jb = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    cornerRadius: a,
    forceCornerRadius: o,
    cornerIsExternal: u,
    startAngle: s,
    endAngle: c
  } = e, l = ot(c - s), {
    circleTangency: f,
    lineTangency: d,
    theta: h
  } = zn({
    cx: t,
    cy: r,
    radius: i,
    angle: s,
    sign: l,
    cornerRadius: a,
    cornerIsExternal: u
  }), {
    circleTangency: p,
    lineTangency: v,
    theta: y
  } = zn({
    cx: t,
    cy: r,
    radius: i,
    angle: c,
    sign: -l,
    cornerRadius: a,
    cornerIsExternal: u
  }), b = u ? Math.abs(s - c) : Math.abs(s - c) - h - y;
  if (b < 0)
    return o ? "M ".concat(d.x, ",").concat(d.y, `
        a`).concat(a, ",").concat(a, ",0,0,1,").concat(a * 2, `,0
        a`).concat(a, ",").concat(a, ",0,0,1,").concat(-a * 2, `,0
      `) : Md({
      cx: t,
      cy: r,
      innerRadius: n,
      outerRadius: i,
      startAngle: s,
      endAngle: c
    });
  var w = "M ".concat(d.x, ",").concat(d.y, `
    A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(f.x, ",").concat(f.y, `
    A`).concat(i, ",").concat(i, ",0,").concat(+(b > 180), ",").concat(+(l < 0), ",").concat(p.x, ",").concat(p.y, `
    A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(v.x, ",").concat(v.y, `
  `);
  if (n > 0) {
    var {
      circleTangency: x,
      lineTangency: A,
      theta: S
    } = zn({
      cx: t,
      cy: r,
      radius: n,
      angle: s,
      sign: l,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: u
    }), {
      circleTangency: _,
      lineTangency: P,
      theta: N
    } = zn({
      cx: t,
      cy: r,
      radius: n,
      angle: c,
      sign: -l,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: u
    }), j = u ? Math.abs(s - c) : Math.abs(s - c) - S - N;
    if (j < 0 && a === 0)
      return "".concat(w, "L").concat(t, ",").concat(r, "Z");
    w += "L".concat(P.x, ",").concat(P.y, `
      A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(_.x, ",").concat(_.y, `
      A`).concat(n, ",").concat(n, ",0,").concat(+(j > 180), ",").concat(+(l > 0), ",").concat(x.x, ",").concat(x.y, `
      A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(A.x, ",").concat(A.y, "Z");
  } else
    w += "L".concat(t, ",").concat(r, "Z");
  return w;
}, Ib = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Rb = (e) => {
  var t = vt(e, Ib), {
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    cornerRadius: o,
    forceCornerRadius: u,
    cornerIsExternal: s,
    startAngle: c,
    endAngle: l,
    className: f
  } = t;
  if (a < i || c === l)
    return null;
  var d = ye("recharts-sector", f), h = a - i, p = Ft(o, h, 0, !0), v;
  return p > 0 && Math.abs(c - l) < 360 ? v = jb({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    cornerRadius: Math.min(p, h / 2),
    forceCornerRadius: u,
    cornerIsExternal: s,
    startAngle: c,
    endAngle: l
  }) : v = Md({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    startAngle: c,
    endAngle: l
  }), /* @__PURE__ */ g.createElement("path", no({}, Ie(t, !0), {
    className: d,
    d: v
  }));
};
function $b(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var {
        cx: u,
        cy: s,
        innerRadius: c,
        outerRadius: l,
        angle: f
      } = t, d = je(u, s, c, f), h = je(u, s, l, f);
      n = d.x, i = d.y, a = h.x, o = h.y;
    } else
      return kd(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: o
  }];
}
var Dd = {}, Nd = {}, jd = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Uo;
  function r(n) {
    return t.isSymbol(n) ? NaN : Number(n);
  }
  e.toNumber = r;
})(jd);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = jd;
  function r(n) {
    return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
  }
  e.toFinite = r;
})(Nd);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Ko, r = Nd;
  function n(i, a, o) {
    o && typeof o != "number" && t.isIterateeCall(i, a, o) && (a = o = void 0), i = r.toFinite(i), a === void 0 ? (a = i, i = 0) : a = r.toFinite(a), o = o === void 0 ? i < a ? 1 : -1 : r.toFinite(o);
    const u = Math.max(Math.ceil((a - i) / (o || 1)), 0), s = new Array(u);
    for (let c = 0; c < u; c++)
      s[c] = i, i += o;
    return s;
  }
  e.range = n;
})(Dd);
var Lb = Dd.range;
const Id = /* @__PURE__ */ Wt(Lb);
function Kt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Bb(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Xo(e) {
  let t, r, n;
  e.length !== 2 ? (t = Kt, r = (u, s) => Kt(e(u), s), n = (u, s) => e(u) - s) : (t = e === Kt || e === Bb ? e : zb, r = e, n = e);
  function i(u, s, c = 0, l = u.length) {
    if (c < l) {
      if (t(s, s) !== 0) return l;
      do {
        const f = c + l >>> 1;
        r(u[f], s) < 0 ? c = f + 1 : l = f;
      } while (c < l);
    }
    return c;
  }
  function a(u, s, c = 0, l = u.length) {
    if (c < l) {
      if (t(s, s) !== 0) return l;
      do {
        const f = c + l >>> 1;
        r(u[f], s) <= 0 ? c = f + 1 : l = f;
      } while (c < l);
    }
    return c;
  }
  function o(u, s, c = 0, l = u.length) {
    const f = i(u, s, c, l - 1);
    return f > c && n(u[f - 1], s) > -n(u[f], s) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function zb() {
  return 0;
}
function Rd(e) {
  return e === null ? NaN : +e;
}
function* Ub(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const Kb = Xo(Kt), pn = Kb.right;
Xo(Rd).center;
class vs extends Map {
  constructor(t, r = Vb) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(ys(this, t));
  }
  has(t) {
    return super.has(ys(this, t));
  }
  set(t, r) {
    return super.set(Fb(this, t), r);
  }
  delete(t) {
    return super.delete(Wb(this, t));
  }
}
function ys({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function Fb({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function Wb({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function Vb(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function Hb(e = Kt) {
  if (e === Kt) return $d;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function $d(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const qb = Math.sqrt(50), Yb = Math.sqrt(10), Gb = Math.sqrt(2);
function ci(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= qb ? 10 : a >= Yb ? 5 : a >= Gb ? 2 : 1;
  let u, s, c;
  return i < 0 ? (c = Math.pow(10, -i) / o, u = Math.round(e * c), s = Math.round(t * c), u / c < e && ++u, s / c > t && --s, c = -c) : (c = Math.pow(10, i) * o, u = Math.round(e / c), s = Math.round(t / c), u * c < e && ++u, s * c > t && --s), s < u && 0.5 <= r && r < 2 ? ci(e, t, r * 2) : [u, s, c];
}
function io(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? ci(t, e, r) : ci(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, s = new Array(u);
  if (n)
    if (o < 0) for (let c = 0; c < u; ++c) s[c] = (a - c) / -o;
    else for (let c = 0; c < u; ++c) s[c] = (a - c) * o;
  else if (o < 0) for (let c = 0; c < u; ++c) s[c] = (i + c) / -o;
  else for (let c = 0; c < u; ++c) s[c] = (i + c) * o;
  return s;
}
function ao(e, t, r) {
  return t = +t, e = +e, r = +r, ci(e, t, r)[2];
}
function oo(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? ao(t, e, r) : ao(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function ms(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function gs(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Ld(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? $d : Hb(i); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, c = t - r + 1, l = Math.log(s), f = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * f * (s - f) / s) * (c - s / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - c * f / s + d)), p = Math.min(n, Math.floor(t + (s - c) * f / s + d));
      Ld(e, t, h, p, i);
    }
    const a = e[t];
    let o = r, u = n;
    for (Kr(e, r, t), i(e[n], a) > 0 && Kr(e, r, n); o < u; ) {
      for (Kr(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? Kr(e, r, u) : (++u, Kr(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function Kr(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function Xb(e, t, r) {
  if (e = Float64Array.from(Ub(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return gs(e);
    if (t >= 1) return ms(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = ms(Ld(e, a).subarray(0, a + 1)), u = gs(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function Zb(e, t, r = Rd) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function Qb(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function ft(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Nt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const uo = Symbol("implicit");
function Zo() {
  var e = new vs(), t = [], r = [], n = uo;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== uo) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new vs();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Zo(t, r).unknown(n);
  }, ft.apply(i, arguments), i;
}
function Qo() {
  var e = Zo().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, u = !1, s = 0, c = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, h = i < n, p = h ? i : n, v = h ? n : i;
    a = (v - p) / Math.max(1, d - s + c * 2), u && (a = Math.floor(a)), p += (v - p - a * (d - s)) * l, o = a * (1 - s), u && (p = Math.round(p), o = Math.round(o));
    var y = Qb(d).map(function(b) {
      return p + a * b;
    });
    return r(h ? y.reverse() : y);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, f()) : [n, i];
  }, e.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, u = !0, f();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(d) {
    return arguments.length ? (u = !!d, f()) : u;
  }, e.padding = function(d) {
    return arguments.length ? (s = Math.min(1, c = +d), f()) : s;
  }, e.paddingInner = function(d) {
    return arguments.length ? (s = Math.min(1, d), f()) : s;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (c = +d, f()) : c;
  }, e.align = function(d) {
    return arguments.length ? (l = Math.max(0, Math.min(1, d)), f()) : l;
  }, e.copy = function() {
    return Qo(t(), [n, i]).round(u).paddingInner(s).paddingOuter(c).align(l);
  }, ft.apply(f(), arguments);
}
function Bd(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Bd(t());
  }, e;
}
function Jb() {
  return Bd(Qo.apply(null, arguments).paddingInner(1));
}
function Jo(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function zd(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function vn() {
}
var tn = 0.7, si = 1 / tn, xr = "\\s*([+-]?\\d+)\\s*", rn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", mt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ew = /^#([0-9a-f]{3,8})$/, tw = new RegExp(`^rgb\\(${xr},${xr},${xr}\\)$`), rw = new RegExp(`^rgb\\(${mt},${mt},${mt}\\)$`), nw = new RegExp(`^rgba\\(${xr},${xr},${xr},${rn}\\)$`), iw = new RegExp(`^rgba\\(${mt},${mt},${mt},${rn}\\)$`), aw = new RegExp(`^hsl\\(${rn},${mt},${mt}\\)$`), ow = new RegExp(`^hsla\\(${rn},${mt},${mt},${rn}\\)$`), bs = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Jo(vn, nn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ws,
  // Deprecated! Use color.formatHex.
  formatHex: ws,
  formatHex8: uw,
  formatHsl: cw,
  formatRgb: xs,
  toString: xs
});
function ws() {
  return this.rgb().formatHex();
}
function uw() {
  return this.rgb().formatHex8();
}
function cw() {
  return Ud(this).formatHsl();
}
function xs() {
  return this.rgb().formatRgb();
}
function nn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = ew.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Os(t) : r === 3 ? new Ye(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Un(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Un(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = tw.exec(e)) ? new Ye(t[1], t[2], t[3], 1) : (t = rw.exec(e)) ? new Ye(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = nw.exec(e)) ? Un(t[1], t[2], t[3], t[4]) : (t = iw.exec(e)) ? Un(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = aw.exec(e)) ? Ss(t[1], t[2] / 100, t[3] / 100, 1) : (t = ow.exec(e)) ? Ss(t[1], t[2] / 100, t[3] / 100, t[4]) : bs.hasOwnProperty(e) ? Os(bs[e]) : e === "transparent" ? new Ye(NaN, NaN, NaN, 0) : null;
}
function Os(e) {
  return new Ye(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Un(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Ye(e, t, r, n);
}
function sw(e) {
  return e instanceof vn || (e = nn(e)), e ? (e = e.rgb(), new Ye(e.r, e.g, e.b, e.opacity)) : new Ye();
}
function co(e, t, r, n) {
  return arguments.length === 1 ? sw(e) : new Ye(e, t, r, n ?? 1);
}
function Ye(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Jo(Ye, co, zd(vn, {
  brighter(e) {
    return e = e == null ? si : Math.pow(si, e), new Ye(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? tn : Math.pow(tn, e), new Ye(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ye(or(this.r), or(this.g), or(this.b), li(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Es,
  // Deprecated! Use color.formatHex.
  formatHex: Es,
  formatHex8: lw,
  formatRgb: _s,
  toString: _s
}));
function Es() {
  return `#${er(this.r)}${er(this.g)}${er(this.b)}`;
}
function lw() {
  return `#${er(this.r)}${er(this.g)}${er(this.b)}${er((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function _s() {
  const e = li(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${or(this.r)}, ${or(this.g)}, ${or(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function li(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function or(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function er(e) {
  return e = or(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ss(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new dt(e, t, r, n);
}
function Ud(e) {
  if (e instanceof dt) return new dt(e.h, e.s, e.l, e.opacity);
  if (e instanceof vn || (e = nn(e)), !e) return new dt();
  if (e instanceof dt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, s = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= s < 0.5 ? a + i : 2 - a - i, o *= 60) : u = s > 0 && s < 1 ? 0 : o, new dt(o, u, s, e.opacity);
}
function fw(e, t, r, n) {
  return arguments.length === 1 ? Ud(e) : new dt(e, t, r, n ?? 1);
}
function dt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Jo(dt, fw, zd(vn, {
  brighter(e) {
    return e = e == null ? si : Math.pow(si, e), new dt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? tn : Math.pow(tn, e), new dt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Ye(
      ba(e >= 240 ? e - 240 : e + 120, i, n),
      ba(e, i, n),
      ba(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new dt(As(this.h), Kn(this.s), Kn(this.l), li(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = li(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${As(this.h)}, ${Kn(this.s) * 100}%, ${Kn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function As(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Kn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ba(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const eu = (e) => () => e;
function dw(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function hw(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function pw(e) {
  return (e = +e) == 1 ? Kd : function(t, r) {
    return r - t ? hw(t, r, e) : eu(isNaN(t) ? r : t);
  };
}
function Kd(e, t) {
  var r = t - e;
  return r ? dw(e, r) : eu(isNaN(e) ? t : e);
}
const Ps = function e(t) {
  var r = pw(t);
  function n(i, a) {
    var o = r((i = co(i)).r, (a = co(a)).r), u = r(i.g, a.g), s = r(i.b, a.b), c = Kd(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = u(l), i.b = s(l), i.opacity = c(l), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function vw(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function yw(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function mw(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = kr(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function gw(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function fi(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function bw(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = kr(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var so = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, wa = new RegExp(so.source, "g");
function ww(e) {
  return function() {
    return e;
  };
}
function xw(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ow(e, t) {
  var r = so.lastIndex = wa.lastIndex = 0, n, i, a, o = -1, u = [], s = [];
  for (e = e + "", t = t + ""; (n = so.exec(e)) && (i = wa.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, s.push({ i: o, x: fi(n, i) })), r = wa.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? s[0] ? xw(s[0].x) : ww(t) : (t = s.length, function(c) {
    for (var l = 0, f; l < t; ++l) u[(f = s[l]).i] = f.x(c);
    return u.join("");
  });
}
function kr(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? eu(t) : (r === "number" ? fi : r === "string" ? (n = nn(t)) ? (t = n, Ps) : Ow : t instanceof nn ? Ps : t instanceof Date ? gw : yw(t) ? vw : Array.isArray(t) ? mw : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? bw : fi)(e, t);
}
function tu(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Ew(e, t) {
  t === void 0 && (t = e, e = kr);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function _w(e) {
  return function() {
    return e;
  };
}
function di(e) {
  return +e;
}
var Ts = [0, 1];
function Ke(e) {
  return e;
}
function lo(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : _w(isNaN(t) ? NaN : 0.5);
}
function Sw(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function Aw(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = lo(i, n), a = r(o, a)) : (n = lo(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function Pw(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = lo(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var s = pn(e, u, 1, n) - 1;
    return a[s](i[s](u));
  };
}
function yn(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ki() {
  var e = Ts, t = Ts, r = kr, n, i, a, o = Ke, u, s, c;
  function l() {
    var d = Math.min(e.length, t.length);
    return o !== Ke && (o = Sw(e[0], e[d - 1])), u = d > 2 ? Pw : Aw, s = c = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? a : (s || (s = u(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(i((c || (c = u(t, e.map(n), fi)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, di), l()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), l()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = tu, l();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : Ke, l()) : o !== Ke;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, l()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (a = d, f) : a;
  }, function(d, h) {
    return n = d, i = h, l();
  };
}
function ru() {
  return Ki()(Ke, Ke);
}
function Tw(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function hi(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function _r(e) {
  return e = hi(Math.abs(e)), e ? e[1] : NaN;
}
function Cw(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e[0], s = 0; i > 0 && u > 0 && (s + u + 1 > n && (u = Math.max(1, n - s)), a.push(r.substring(i -= u, i + u)), !((s += u + 1) > n)); )
      u = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function kw(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var Mw = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function an(e) {
  if (!(t = Mw.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new nu({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
an.prototype = nu.prototype;
function nu(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
nu.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Dw(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var Fd;
function Nw(e, t) {
  var r = hi(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (Fd = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + hi(e, Math.max(0, t + a - 1))[0];
}
function Cs(e, t) {
  var r = hi(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const ks = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Tw,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Cs(e * 100, t),
  r: Cs,
  s: Nw,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Ms(e) {
  return e;
}
var Ds = Array.prototype.map, Ns = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function jw(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Ms : Cw(Ds.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Ms : kw(Ds.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = an(f);
    var d = f.fill, h = f.align, p = f.sign, v = f.symbol, y = f.zero, b = f.width, w = f.comma, x = f.precision, A = f.trim, S = f.type;
    S === "n" ? (w = !0, S = "g") : ks[S] || (x === void 0 && (x = 12), A = !0, S = "g"), (y || d === "0" && h === "=") && (y = !0, d = "0", h = "=");
    var _ = v === "$" ? r : v === "#" && /[boxX]/.test(S) ? "0" + S.toLowerCase() : "", P = v === "$" ? n : /[%p]/.test(S) ? o : "", N = ks[S], j = /[defgprs%]/.test(S);
    x = x === void 0 ? 6 : /[gprs]/.test(S) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function B(R) {
      var k = _, K = P, W, te, re;
      if (S === "c")
        K = N(R) + K, R = "";
      else {
        R = +R;
        var X = R < 0 || 1 / R < 0;
        if (R = isNaN(R) ? s : N(Math.abs(R), x), A && (R = Dw(R)), X && +R == 0 && p !== "+" && (X = !1), k = (X ? p === "(" ? p : u : p === "-" || p === "(" ? "" : p) + k, K = (S === "s" ? Ns[8 + Fd / 3] : "") + K + (X && p === "(" ? ")" : ""), j) {
          for (W = -1, te = R.length; ++W < te; )
            if (re = R.charCodeAt(W), 48 > re || re > 57) {
              K = (re === 46 ? i + R.slice(W + 1) : R.slice(W)) + K, R = R.slice(0, W);
              break;
            }
        }
      }
      w && !y && (R = t(R, 1 / 0));
      var ge = k.length + R.length + K.length, ue = ge < b ? new Array(b - ge + 1).join(d) : "";
      switch (w && y && (R = t(ue + R, ue.length ? b - K.length : 1 / 0), ue = ""), h) {
        case "<":
          R = k + R + K + ue;
          break;
        case "=":
          R = k + ue + R + K;
          break;
        case "^":
          R = ue.slice(0, ge = ue.length >> 1) + k + R + K + ue.slice(ge);
          break;
        default:
          R = ue + k + R + K;
          break;
      }
      return a(R);
    }
    return B.toString = function() {
      return f + "";
    }, B;
  }
  function l(f, d) {
    var h = c((f = an(f), f.type = "f", f)), p = Math.max(-8, Math.min(8, Math.floor(_r(d) / 3))) * 3, v = Math.pow(10, -p), y = Ns[8 + p / 3];
    return function(b) {
      return h(v * b) + y;
    };
  }
  return {
    format: c,
    formatPrefix: l
  };
}
var Fn, iu, Wd;
Iw({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Iw(e) {
  return Fn = jw(e), iu = Fn.format, Wd = Fn.formatPrefix, Fn;
}
function Rw(e) {
  return Math.max(0, -_r(Math.abs(e)));
}
function $w(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(_r(t) / 3))) * 3 - _r(Math.abs(e)));
}
function Lw(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, _r(t) - _r(e)) + 1;
}
function Vd(e, t, r, n) {
  var i = oo(e, t, r), a;
  switch (n = an(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = $w(i, o)) && (n.precision = a), Wd(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = Lw(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = Rw(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return iu(n);
}
function Ht(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return io(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return Vd(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], s, c, l = 10;
    for (u < o && (c = o, o = u, u = c, c = i, i = a, a = c); l-- > 0; ) {
      if (c = ao(o, u, r), c === s)
        return n[i] = o, n[a] = u, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, u = Math.ceil(u / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, u = Math.floor(u * c) / c;
      else
        break;
      s = c;
    }
    return e;
  }, e;
}
function Hd() {
  var e = ru();
  return e.copy = function() {
    return yn(e, Hd());
  }, ft.apply(e, arguments), Ht(e);
}
function qd(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, di), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return qd(e).unknown(t);
  }, e = arguments.length ? Array.from(e, di) : [0, 1], Ht(r);
}
function Yd(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function js(e) {
  return Math.log(e);
}
function Is(e) {
  return Math.exp(e);
}
function Bw(e) {
  return -Math.log(-e);
}
function zw(e) {
  return -Math.exp(-e);
}
function Uw(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Kw(e) {
  return e === 10 ? Uw : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function Fw(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Rs(e) {
  return (t, r) => -e(-t, r);
}
function au(e) {
  const t = e(js, Is), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = Fw(n), a = Kw(n), r()[0] < 0 ? (i = Rs(i), a = Rs(a), e(Bw, zw)) : e(js, Is), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const s = r();
    let c = s[0], l = s[s.length - 1];
    const f = l < c;
    f && ([c, l] = [l, c]);
    let d = i(c), h = i(l), p, v;
    const y = u == null ? 10 : +u;
    let b = [];
    if (!(n % 1) && h - d < y) {
      if (d = Math.floor(d), h = Math.ceil(h), c > 0) {
        for (; d <= h; ++d)
          for (p = 1; p < n; ++p)
            if (v = d < 0 ? p / a(-d) : p * a(d), !(v < c)) {
              if (v > l) break;
              b.push(v);
            }
      } else for (; d <= h; ++d)
        for (p = n - 1; p >= 1; --p)
          if (v = d > 0 ? p / a(-d) : p * a(d), !(v < c)) {
            if (v > l) break;
            b.push(v);
          }
      b.length * 2 < y && (b = io(c, l, y));
    } else
      b = io(d, h, Math.min(h - d, y)).map(a);
    return f ? b.reverse() : b;
  }, t.tickFormat = (u, s) => {
    if (u == null && (u = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = an(s)).precision == null && (s.trim = !0), s = iu(s)), u === 1 / 0) return s;
    const c = Math.max(1, n * u / t.ticks().length);
    return (l) => {
      let f = l / a(Math.round(i(l)));
      return f * n < n - 0.5 && (f *= n), f <= c ? s(l) : "";
    };
  }, t.nice = () => r(Yd(r(), {
    floor: (u) => a(Math.floor(i(u))),
    ceil: (u) => a(Math.ceil(i(u)))
  })), t;
}
function Gd() {
  const e = au(Ki()).domain([1, 10]);
  return e.copy = () => yn(e, Gd()).base(e.base()), ft.apply(e, arguments), e;
}
function $s(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Ls(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function ou(e) {
  var t = 1, r = e($s(t), Ls(t));
  return r.constant = function(n) {
    return arguments.length ? e($s(t = +n), Ls(t)) : t;
  }, Ht(r);
}
function Xd() {
  var e = ou(Ki());
  return e.copy = function() {
    return yn(e, Xd()).constant(e.constant());
  }, ft.apply(e, arguments);
}
function Bs(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Ww(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Vw(e) {
  return e < 0 ? -e * e : e * e;
}
function uu(e) {
  var t = e(Ke, Ke), r = 1;
  function n() {
    return r === 1 ? e(Ke, Ke) : r === 0.5 ? e(Ww, Vw) : e(Bs(r), Bs(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Ht(t);
}
function cu() {
  var e = uu(Ki());
  return e.copy = function() {
    return yn(e, cu()).exponent(e.exponent());
  }, ft.apply(e, arguments), e;
}
function Hw() {
  return cu.apply(null, arguments).exponent(0.5);
}
function zs(e) {
  return Math.sign(e) * e * e;
}
function qw(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Zd() {
  var e = ru(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = qw(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(zs(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, di)).map(zs)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Zd(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, ft.apply(i, arguments), Ht(i);
}
function Qd() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = Zb(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[pn(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : e[0],
      u < r.length ? r[u] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let u of o) u != null && !isNaN(u = +u) && e.push(u);
    return e.sort(Kt), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Qd().domain(e).range(t).unknown(n);
  }, ft.apply(a, arguments);
}
function Jd() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(s) {
    return s != null && s <= s ? i[pn(n, s, 0, r)] : a;
  }
  function u() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(s) {
    return arguments.length ? ([e, t] = s, e = +e, t = +t, u()) : [e, t];
  }, o.range = function(s) {
    return arguments.length ? (r = (i = Array.from(s)).length - 1, u()) : i.slice();
  }, o.invertExtent = function(s) {
    var c = i.indexOf(s);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(s) {
    return arguments.length && (a = s), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Jd().domain([e, t]).range(i).unknown(a);
  }, ft.apply(Ht(o), arguments);
}
function eh() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[pn(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return eh().domain(e).range(t).unknown(r);
  }, ft.apply(i, arguments);
}
const xa = /* @__PURE__ */ new Date(), Oa = /* @__PURE__ */ new Date();
function _e(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const s = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return s;
    let c;
    do
      s.push(c = /* @__PURE__ */ new Date(+a)), t(a, u), e(a);
    while (c < a && a < o);
    return s;
  }, i.filter = (a) => _e((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0) for (; ++u <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --u >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (xa.setTime(+a), Oa.setTime(+o), e(xa), e(Oa), Math.floor(r(xa, Oa))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const pi = _e(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
pi.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? _e((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : pi);
pi.range;
const Et = 1e3, ut = Et * 60, _t = ut * 60, Tt = _t * 24, su = Tt * 7, Us = Tt * 30, Ea = Tt * 365, tr = _e((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Et);
}, (e, t) => (t - e) / Et, (e) => e.getUTCSeconds());
tr.range;
const lu = _e((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Et);
}, (e, t) => {
  e.setTime(+e + t * ut);
}, (e, t) => (t - e) / ut, (e) => e.getMinutes());
lu.range;
const fu = _e((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ut);
}, (e, t) => (t - e) / ut, (e) => e.getUTCMinutes());
fu.range;
const du = _e((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Et - e.getMinutes() * ut);
}, (e, t) => {
  e.setTime(+e + t * _t);
}, (e, t) => (t - e) / _t, (e) => e.getHours());
du.range;
const hu = _e((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * _t);
}, (e, t) => (t - e) / _t, (e) => e.getUTCHours());
hu.range;
const mn = _e(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ut) / Tt,
  (e) => e.getDate() - 1
);
mn.range;
const Fi = _e((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Tt, (e) => e.getUTCDate() - 1);
Fi.range;
const th = _e((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Tt, (e) => Math.floor(e / Tt));
th.range;
function pr(e) {
  return _e((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * ut) / su);
}
const Wi = pr(0), vi = pr(1), Yw = pr(2), Gw = pr(3), Sr = pr(4), Xw = pr(5), Zw = pr(6);
Wi.range;
vi.range;
Yw.range;
Gw.range;
Sr.range;
Xw.range;
Zw.range;
function vr(e) {
  return _e((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / su);
}
const Vi = vr(0), yi = vr(1), Qw = vr(2), Jw = vr(3), Ar = vr(4), ex = vr(5), tx = vr(6);
Vi.range;
yi.range;
Qw.range;
Jw.range;
Ar.range;
ex.range;
tx.range;
const pu = _e((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
pu.range;
const vu = _e((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
vu.range;
const Ct = _e((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ct.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : _e((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Ct.range;
const kt = _e((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
kt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : _e((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
kt.range;
function rh(e, t, r, n, i, a) {
  const o = [
    [tr, 1, Et],
    [tr, 5, 5 * Et],
    [tr, 15, 15 * Et],
    [tr, 30, 30 * Et],
    [a, 1, ut],
    [a, 5, 5 * ut],
    [a, 15, 15 * ut],
    [a, 30, 30 * ut],
    [i, 1, _t],
    [i, 3, 3 * _t],
    [i, 6, 6 * _t],
    [i, 12, 12 * _t],
    [n, 1, Tt],
    [n, 2, 2 * Tt],
    [r, 1, su],
    [t, 1, Us],
    [t, 3, 3 * Us],
    [e, 1, Ea]
  ];
  function u(c, l, f) {
    const d = l < c;
    d && ([c, l] = [l, c]);
    const h = f && typeof f.range == "function" ? f : s(c, l, f), p = h ? h.range(c, +l + 1) : [];
    return d ? p.reverse() : p;
  }
  function s(c, l, f) {
    const d = Math.abs(l - c) / f, h = Xo(([, , y]) => y).right(o, d);
    if (h === o.length) return e.every(oo(c / Ea, l / Ea, f));
    if (h === 0) return pi.every(Math.max(oo(c, l, f), 1));
    const [p, v] = o[d / o[h - 1][2] < o[h][2] / d ? h - 1 : h];
    return p.every(v);
  }
  return [u, s];
}
const [rx, nx] = rh(kt, vu, Vi, th, hu, fu), [ix, ax] = rh(Ct, pu, Wi, mn, du, lu);
function _a(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Sa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Fr(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function ox(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, u = e.months, s = e.shortMonths, c = Wr(i), l = Vr(i), f = Wr(a), d = Vr(a), h = Wr(o), p = Vr(o), v = Wr(u), y = Vr(u), b = Wr(s), w = Vr(s), x = {
    a: X,
    A: ge,
    b: ue,
    B: We,
    c: null,
    d: qs,
    e: qs,
    f: Cx,
    g: Bx,
    G: Ux,
    H: Ax,
    I: Px,
    j: Tx,
    L: nh,
    m: kx,
    M: Mx,
    p: O,
    q: T,
    Q: Xs,
    s: Zs,
    S: Dx,
    u: Nx,
    U: jx,
    V: Ix,
    w: Rx,
    W: $x,
    x: null,
    X: null,
    y: Lx,
    Y: zx,
    Z: Kx,
    "%": Gs
  }, A = {
    a: F,
    A: U,
    b: V,
    B: ie,
    c: null,
    d: Ys,
    e: Ys,
    f: Hx,
    g: rO,
    G: iO,
    H: Fx,
    I: Wx,
    j: Vx,
    L: ah,
    m: qx,
    M: Yx,
    p: ce,
    q: Ve,
    Q: Xs,
    s: Zs,
    S: Gx,
    u: Xx,
    U: Zx,
    V: Qx,
    w: Jx,
    W: eO,
    x: null,
    X: null,
    y: tO,
    Y: nO,
    Z: aO,
    "%": Gs
  }, S = {
    a: B,
    A: R,
    b: k,
    B: K,
    c: W,
    d: Vs,
    e: Vs,
    f: Ox,
    g: Ws,
    G: Fs,
    H: Hs,
    I: Hs,
    j: gx,
    L: xx,
    m: mx,
    M: bx,
    p: j,
    q: yx,
    Q: _x,
    s: Sx,
    S: wx,
    u: fx,
    U: dx,
    V: hx,
    w: lx,
    W: px,
    x: te,
    X: re,
    y: Ws,
    Y: Fs,
    Z: vx,
    "%": Ex
  };
  x.x = _(r, x), x.X = _(n, x), x.c = _(t, x), A.x = _(r, A), A.X = _(n, A), A.c = _(t, A);
  function _(I, Y) {
    return function(ne) {
      var M = [], ke = -1, se = 0, $e = I.length, Me, we, $r;
      for (ne instanceof Date || (ne = /* @__PURE__ */ new Date(+ne)); ++ke < $e; )
        I.charCodeAt(ke) === 37 && (M.push(I.slice(se, ke)), (we = Ks[Me = I.charAt(++ke)]) != null ? Me = I.charAt(++ke) : we = Me === "e" ? " " : "0", ($r = Y[Me]) && (Me = $r(ne, we)), M.push(Me), se = ke + 1);
      return M.push(I.slice(se, ke)), M.join("");
    };
  }
  function P(I, Y) {
    return function(ne) {
      var M = Fr(1900, void 0, 1), ke = N(M, I, ne += "", 0), se, $e;
      if (ke != ne.length) return null;
      if ("Q" in M) return new Date(M.Q);
      if ("s" in M) return new Date(M.s * 1e3 + ("L" in M ? M.L : 0));
      if (Y && !("Z" in M) && (M.Z = 0), "p" in M && (M.H = M.H % 12 + M.p * 12), M.m === void 0 && (M.m = "q" in M ? M.q : 0), "V" in M) {
        if (M.V < 1 || M.V > 53) return null;
        "w" in M || (M.w = 1), "Z" in M ? (se = Sa(Fr(M.y, 0, 1)), $e = se.getUTCDay(), se = $e > 4 || $e === 0 ? yi.ceil(se) : yi(se), se = Fi.offset(se, (M.V - 1) * 7), M.y = se.getUTCFullYear(), M.m = se.getUTCMonth(), M.d = se.getUTCDate() + (M.w + 6) % 7) : (se = _a(Fr(M.y, 0, 1)), $e = se.getDay(), se = $e > 4 || $e === 0 ? vi.ceil(se) : vi(se), se = mn.offset(se, (M.V - 1) * 7), M.y = se.getFullYear(), M.m = se.getMonth(), M.d = se.getDate() + (M.w + 6) % 7);
      } else ("W" in M || "U" in M) && ("w" in M || (M.w = "u" in M ? M.u % 7 : "W" in M ? 1 : 0), $e = "Z" in M ? Sa(Fr(M.y, 0, 1)).getUTCDay() : _a(Fr(M.y, 0, 1)).getDay(), M.m = 0, M.d = "W" in M ? (M.w + 6) % 7 + M.W * 7 - ($e + 5) % 7 : M.w + M.U * 7 - ($e + 6) % 7);
      return "Z" in M ? (M.H += M.Z / 100 | 0, M.M += M.Z % 100, Sa(M)) : _a(M);
    };
  }
  function N(I, Y, ne, M) {
    for (var ke = 0, se = Y.length, $e = ne.length, Me, we; ke < se; ) {
      if (M >= $e) return -1;
      if (Me = Y.charCodeAt(ke++), Me === 37) {
        if (Me = Y.charAt(ke++), we = S[Me in Ks ? Y.charAt(ke++) : Me], !we || (M = we(I, ne, M)) < 0) return -1;
      } else if (Me != ne.charCodeAt(M++))
        return -1;
    }
    return M;
  }
  function j(I, Y, ne) {
    var M = c.exec(Y.slice(ne));
    return M ? (I.p = l.get(M[0].toLowerCase()), ne + M[0].length) : -1;
  }
  function B(I, Y, ne) {
    var M = h.exec(Y.slice(ne));
    return M ? (I.w = p.get(M[0].toLowerCase()), ne + M[0].length) : -1;
  }
  function R(I, Y, ne) {
    var M = f.exec(Y.slice(ne));
    return M ? (I.w = d.get(M[0].toLowerCase()), ne + M[0].length) : -1;
  }
  function k(I, Y, ne) {
    var M = b.exec(Y.slice(ne));
    return M ? (I.m = w.get(M[0].toLowerCase()), ne + M[0].length) : -1;
  }
  function K(I, Y, ne) {
    var M = v.exec(Y.slice(ne));
    return M ? (I.m = y.get(M[0].toLowerCase()), ne + M[0].length) : -1;
  }
  function W(I, Y, ne) {
    return N(I, t, Y, ne);
  }
  function te(I, Y, ne) {
    return N(I, r, Y, ne);
  }
  function re(I, Y, ne) {
    return N(I, n, Y, ne);
  }
  function X(I) {
    return o[I.getDay()];
  }
  function ge(I) {
    return a[I.getDay()];
  }
  function ue(I) {
    return s[I.getMonth()];
  }
  function We(I) {
    return u[I.getMonth()];
  }
  function O(I) {
    return i[+(I.getHours() >= 12)];
  }
  function T(I) {
    return 1 + ~~(I.getMonth() / 3);
  }
  function F(I) {
    return o[I.getUTCDay()];
  }
  function U(I) {
    return a[I.getUTCDay()];
  }
  function V(I) {
    return s[I.getUTCMonth()];
  }
  function ie(I) {
    return u[I.getUTCMonth()];
  }
  function ce(I) {
    return i[+(I.getUTCHours() >= 12)];
  }
  function Ve(I) {
    return 1 + ~~(I.getUTCMonth() / 3);
  }
  return {
    format: function(I) {
      var Y = _(I += "", x);
      return Y.toString = function() {
        return I;
      }, Y;
    },
    parse: function(I) {
      var Y = P(I += "", !1);
      return Y.toString = function() {
        return I;
      }, Y;
    },
    utcFormat: function(I) {
      var Y = _(I += "", A);
      return Y.toString = function() {
        return I;
      }, Y;
    },
    utcParse: function(I) {
      var Y = P(I += "", !0);
      return Y.toString = function() {
        return I;
      }, Y;
    }
  };
}
var Ks = { "-": "", _: " ", 0: "0" }, Te = /^\s*\d+/, ux = /^%/, cx = /[\\^$*+?|[\]().{}]/g;
function ae(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function sx(e) {
  return e.replace(cx, "\\$&");
}
function Wr(e) {
  return new RegExp("^(?:" + e.map(sx).join("|") + ")", "i");
}
function Vr(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function lx(e, t, r) {
  var n = Te.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function fx(e, t, r) {
  var n = Te.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function dx(e, t, r) {
  var n = Te.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function hx(e, t, r) {
  var n = Te.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function px(e, t, r) {
  var n = Te.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Fs(e, t, r) {
  var n = Te.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Ws(e, t, r) {
  var n = Te.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function vx(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function yx(e, t, r) {
  var n = Te.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function mx(e, t, r) {
  var n = Te.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Vs(e, t, r) {
  var n = Te.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function gx(e, t, r) {
  var n = Te.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Hs(e, t, r) {
  var n = Te.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function bx(e, t, r) {
  var n = Te.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function wx(e, t, r) {
  var n = Te.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function xx(e, t, r) {
  var n = Te.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function Ox(e, t, r) {
  var n = Te.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function Ex(e, t, r) {
  var n = ux.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function _x(e, t, r) {
  var n = Te.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function Sx(e, t, r) {
  var n = Te.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function qs(e, t) {
  return ae(e.getDate(), t, 2);
}
function Ax(e, t) {
  return ae(e.getHours(), t, 2);
}
function Px(e, t) {
  return ae(e.getHours() % 12 || 12, t, 2);
}
function Tx(e, t) {
  return ae(1 + mn.count(Ct(e), e), t, 3);
}
function nh(e, t) {
  return ae(e.getMilliseconds(), t, 3);
}
function Cx(e, t) {
  return nh(e, t) + "000";
}
function kx(e, t) {
  return ae(e.getMonth() + 1, t, 2);
}
function Mx(e, t) {
  return ae(e.getMinutes(), t, 2);
}
function Dx(e, t) {
  return ae(e.getSeconds(), t, 2);
}
function Nx(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function jx(e, t) {
  return ae(Wi.count(Ct(e) - 1, e), t, 2);
}
function ih(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Sr(e) : Sr.ceil(e);
}
function Ix(e, t) {
  return e = ih(e), ae(Sr.count(Ct(e), e) + (Ct(e).getDay() === 4), t, 2);
}
function Rx(e) {
  return e.getDay();
}
function $x(e, t) {
  return ae(vi.count(Ct(e) - 1, e), t, 2);
}
function Lx(e, t) {
  return ae(e.getFullYear() % 100, t, 2);
}
function Bx(e, t) {
  return e = ih(e), ae(e.getFullYear() % 100, t, 2);
}
function zx(e, t) {
  return ae(e.getFullYear() % 1e4, t, 4);
}
function Ux(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Sr(e) : Sr.ceil(e), ae(e.getFullYear() % 1e4, t, 4);
}
function Kx(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ae(t / 60 | 0, "0", 2) + ae(t % 60, "0", 2);
}
function Ys(e, t) {
  return ae(e.getUTCDate(), t, 2);
}
function Fx(e, t) {
  return ae(e.getUTCHours(), t, 2);
}
function Wx(e, t) {
  return ae(e.getUTCHours() % 12 || 12, t, 2);
}
function Vx(e, t) {
  return ae(1 + Fi.count(kt(e), e), t, 3);
}
function ah(e, t) {
  return ae(e.getUTCMilliseconds(), t, 3);
}
function Hx(e, t) {
  return ah(e, t) + "000";
}
function qx(e, t) {
  return ae(e.getUTCMonth() + 1, t, 2);
}
function Yx(e, t) {
  return ae(e.getUTCMinutes(), t, 2);
}
function Gx(e, t) {
  return ae(e.getUTCSeconds(), t, 2);
}
function Xx(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Zx(e, t) {
  return ae(Vi.count(kt(e) - 1, e), t, 2);
}
function oh(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ar(e) : Ar.ceil(e);
}
function Qx(e, t) {
  return e = oh(e), ae(Ar.count(kt(e), e) + (kt(e).getUTCDay() === 4), t, 2);
}
function Jx(e) {
  return e.getUTCDay();
}
function eO(e, t) {
  return ae(yi.count(kt(e) - 1, e), t, 2);
}
function tO(e, t) {
  return ae(e.getUTCFullYear() % 100, t, 2);
}
function rO(e, t) {
  return e = oh(e), ae(e.getUTCFullYear() % 100, t, 2);
}
function nO(e, t) {
  return ae(e.getUTCFullYear() % 1e4, t, 4);
}
function iO(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ar(e) : Ar.ceil(e), ae(e.getUTCFullYear() % 1e4, t, 4);
}
function aO() {
  return "+0000";
}
function Gs() {
  return "%";
}
function Xs(e) {
  return +e;
}
function Zs(e) {
  return Math.floor(+e / 1e3);
}
var gr, uh, ch;
oO({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function oO(e) {
  return gr = ox(e), uh = gr.format, gr.parse, ch = gr.utcFormat, gr.utcParse, gr;
}
function uO(e) {
  return new Date(e);
}
function cO(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function yu(e, t, r, n, i, a, o, u, s, c) {
  var l = ru(), f = l.invert, d = l.domain, h = c(".%L"), p = c(":%S"), v = c("%I:%M"), y = c("%I %p"), b = c("%a %d"), w = c("%b %d"), x = c("%B"), A = c("%Y");
  function S(_) {
    return (s(_) < _ ? h : u(_) < _ ? p : o(_) < _ ? v : a(_) < _ ? y : n(_) < _ ? i(_) < _ ? b : w : r(_) < _ ? x : A)(_);
  }
  return l.invert = function(_) {
    return new Date(f(_));
  }, l.domain = function(_) {
    return arguments.length ? d(Array.from(_, cO)) : d().map(uO);
  }, l.ticks = function(_) {
    var P = d();
    return e(P[0], P[P.length - 1], _ ?? 10);
  }, l.tickFormat = function(_, P) {
    return P == null ? S : c(P);
  }, l.nice = function(_) {
    var P = d();
    return (!_ || typeof _.range != "function") && (_ = t(P[0], P[P.length - 1], _ ?? 10)), _ ? d(Yd(P, _)) : l;
  }, l.copy = function() {
    return yn(l, yu(e, t, r, n, i, a, o, u, s, c));
  }, l;
}
function sO() {
  return ft.apply(yu(ix, ax, Ct, pu, Wi, mn, du, lu, tr, uh).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function lO() {
  return ft.apply(yu(rx, nx, kt, vu, Vi, Fi, hu, fu, tr, ch).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Hi() {
  var e = 0, t = 1, r, n, i, a, o = Ke, u = !1, s;
  function c(f) {
    return f == null || isNaN(f = +f) ? s : o(i === 0 ? 0.5 : (f = (a(f) - r) * i, u ? Math.max(0, Math.min(1, f)) : f));
  }
  c.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(f) {
    return arguments.length ? (u = !!f, c) : u;
  }, c.interpolator = function(f) {
    return arguments.length ? (o = f, c) : o;
  };
  function l(f) {
    return function(d) {
      var h, p;
      return arguments.length ? ([h, p] = d, o = f(h, p), c) : [o(0), o(1)];
    };
  }
  return c.range = l(kr), c.rangeRound = l(tu), c.unknown = function(f) {
    return arguments.length ? (s = f, c) : s;
  }, function(f) {
    return a = f, r = f(e), n = f(t), i = r === n ? 0 : 1 / (n - r), c;
  };
}
function qt(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function sh() {
  var e = Ht(Hi()(Ke));
  return e.copy = function() {
    return qt(e, sh());
  }, Nt.apply(e, arguments);
}
function lh() {
  var e = au(Hi()).domain([1, 10]);
  return e.copy = function() {
    return qt(e, lh()).base(e.base());
  }, Nt.apply(e, arguments);
}
function fh() {
  var e = ou(Hi());
  return e.copy = function() {
    return qt(e, fh()).constant(e.constant());
  }, Nt.apply(e, arguments);
}
function mu() {
  var e = uu(Hi());
  return e.copy = function() {
    return qt(e, mu()).exponent(e.exponent());
  }, Nt.apply(e, arguments);
}
function fO() {
  return mu.apply(null, arguments).exponent(0.5);
}
function dh() {
  var e = [], t = Ke;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((pn(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Kt), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => Xb(e, a / n));
  }, r.copy = function() {
    return dh(t).domain(e);
  }, Nt.apply(r, arguments);
}
function qi() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, u, s, c = Ke, l, f = !1, d;
  function h(v) {
    return isNaN(v = +v) ? d : (v = 0.5 + ((v = +l(v)) - a) * (n * v < n * a ? u : s), c(f ? Math.max(0, Math.min(1, v)) : v));
  }
  h.domain = function(v) {
    return arguments.length ? ([e, t, r] = v, i = l(e = +e), a = l(t = +t), o = l(r = +r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h) : [e, t, r];
  }, h.clamp = function(v) {
    return arguments.length ? (f = !!v, h) : f;
  }, h.interpolator = function(v) {
    return arguments.length ? (c = v, h) : c;
  };
  function p(v) {
    return function(y) {
      var b, w, x;
      return arguments.length ? ([b, w, x] = y, c = Ew(v, [b, w, x]), h) : [c(0), c(0.5), c(1)];
    };
  }
  return h.range = p(kr), h.rangeRound = p(tu), h.unknown = function(v) {
    return arguments.length ? (d = v, h) : d;
  }, function(v) {
    return l = v, i = v(e), a = v(t), o = v(r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h;
  };
}
function hh() {
  var e = Ht(qi()(Ke));
  return e.copy = function() {
    return qt(e, hh());
  }, Nt.apply(e, arguments);
}
function ph() {
  var e = au(qi()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return qt(e, ph()).base(e.base());
  }, Nt.apply(e, arguments);
}
function vh() {
  var e = ou(qi());
  return e.copy = function() {
    return qt(e, vh()).constant(e.constant());
  }, Nt.apply(e, arguments);
}
function gu() {
  var e = uu(qi());
  return e.copy = function() {
    return qt(e, gu()).exponent(e.exponent());
  }, Nt.apply(e, arguments);
}
function dO() {
  return gu.apply(null, arguments).exponent(0.5);
}
const Yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Qo,
  scaleDiverging: hh,
  scaleDivergingLog: ph,
  scaleDivergingPow: gu,
  scaleDivergingSqrt: dO,
  scaleDivergingSymlog: vh,
  scaleIdentity: qd,
  scaleImplicit: uo,
  scaleLinear: Hd,
  scaleLog: Gd,
  scaleOrdinal: Zo,
  scalePoint: Jb,
  scalePow: cu,
  scaleQuantile: Qd,
  scaleQuantize: Jd,
  scaleRadial: Zd,
  scaleSequential: sh,
  scaleSequentialLog: lh,
  scaleSequentialPow: mu,
  scaleSequentialQuantile: dh,
  scaleSequentialSqrt: fO,
  scaleSequentialSymlog: fh,
  scaleSqrt: Hw,
  scaleSymlog: Xd,
  scaleThreshold: eh,
  scaleTime: sO,
  scaleUtc: lO,
  tickFormat: Vd
}, Symbol.toStringTag, { value: "Module" }));
var Yt = (e) => e.chartData, hO = C([Yt], (e) => {
  var t = e.chartData != null ? e.chartData.length - 1 : 0;
  return {
    chartData: e.chartData,
    computedData: e.computedData,
    dataEndIndex: t,
    dataStartIndex: 0
  };
}), bu = (e, t, r, n) => n ? hO(e) : Yt(e);
function Pr(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (ht(t) && ht(r))
      return !0;
  }
  return !1;
}
function Qs(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function pO(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [r, n] = e, i, a;
    if (ht(r))
      i = r;
    else if (typeof r == "function")
      return;
    if (ht(n))
      a = n;
    else if (typeof n == "function")
      return;
    var o = [i, a];
    if (Pr(o))
      return o;
  }
}
function vO(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if (Pr(n))
          return Qs(n, t, r);
      } catch {
      }
    if (Array.isArray(e) && e.length === 2) {
      var [i, a] = e, o, u;
      if (i === "auto")
        t != null && (o = Math.min(...t));
      else if (H(i))
        o = i;
      else if (typeof i == "function")
        try {
          t != null && (o = i(t == null ? void 0 : t[0]));
        } catch {
        }
      else if (typeof i == "string" && Yc.test(i)) {
        var s = Yc.exec(i);
        if (s == null || t == null)
          o = void 0;
        else {
          var c = +s[1];
          o = t[0] - c;
        }
      } else
        o = t == null ? void 0 : t[0];
      if (a === "auto")
        t != null && (u = Math.max(...t));
      else if (H(a))
        u = a;
      else if (typeof a == "function")
        try {
          t != null && (u = a(t == null ? void 0 : t[1]));
        } catch {
        }
      else if (typeof a == "string" && Gc.test(a)) {
        var l = Gc.exec(a);
        if (l == null || t == null)
          u = void 0;
        else {
          var f = +l[1];
          u = t[1] + f;
        }
      } else
        u = t == null ? void 0 : t[1];
      var d = [o, u];
      if (Pr(d))
        return t == null ? d : Qs(d, t, r);
    }
  }
}
var Mr = 1e9, yO = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, xu, ve = !0, lt = "[DecimalError] ", ur = lt + "Invalid argument: ", wu = lt + "Exponent out of range: ", Dr = Math.floor, Qt = Math.pow, mO = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Je, Ae = 1e7, he = 7, yh = 9007199254740991, mi = Dr(yh / he), L = {};
L.absoluteValue = L.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
L.comparedTo = L.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
L.decimalPlaces = L.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * he;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
L.dividedBy = L.div = function(e) {
  return At(this, new this.constructor(e));
};
L.dividedToIntegerBy = L.idiv = function(e) {
  var t = this, r = t.constructor;
  return de(At(t, new r(e), 0, 1), r.precision);
};
L.equals = L.eq = function(e) {
  return !this.cmp(e);
};
L.exponent = function() {
  return xe(this);
};
L.greaterThan = L.gt = function(e) {
  return this.cmp(e) > 0;
};
L.greaterThanOrEqualTo = L.gte = function(e) {
  return this.cmp(e) >= 0;
};
L.isInteger = L.isint = function() {
  return this.e > this.d.length - 2;
};
L.isNegative = L.isneg = function() {
  return this.s < 0;
};
L.isPositive = L.ispos = function() {
  return this.s > 0;
};
L.isZero = function() {
  return this.s === 0;
};
L.lessThan = L.lt = function(e) {
  return this.cmp(e) < 0;
};
L.lessThanOrEqualTo = L.lte = function(e) {
  return this.cmp(e) < 1;
};
L.logarithm = L.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Je)) throw Error(lt + "NaN");
  if (r.s < 1) throw Error(lt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Je) ? new n(0) : (ve = !1, t = At(on(r, a), on(e, a), a), ve = !0, de(t, i));
};
L.minus = L.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? bh(t, e) : mh(t, (e.s = -e.s, e));
};
L.modulo = L.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(lt + "NaN");
  return r.s ? (ve = !1, t = At(r, e, 0, 1).times(e), ve = !0, r.minus(t)) : de(new n(r), i);
};
L.naturalExponential = L.exp = function() {
  return gh(this);
};
L.naturalLogarithm = L.ln = function() {
  return on(this);
};
L.negated = L.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
L.plus = L.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? mh(t, e) : bh(t, (e.s = -e.s, e));
};
L.precision = L.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(ur + e);
  if (t = xe(i) + 1, n = i.d.length - 1, r = n * he + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
L.squareRoot = L.sqrt = function() {
  var e, t, r, n, i, a, o, u = this, s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(lt + "NaN");
  }
  for (e = xe(u), ve = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = yt(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = Dr((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new s(t)) : n = new s(i.toString()), r = s.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(At(u, a, o + 2)).times(0.5), yt(a.d).slice(0, o) === (t = yt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (de(a, r + 1, 0), a.times(a).eq(u)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return ve = !0, de(n, r);
};
L.times = L.mul = function(e) {
  var t, r, n, i, a, o, u, s, c, l = this, f = l.constructor, d = l.d, h = (e = new f(e)).d;
  if (!l.s || !e.s) return new f(0);
  for (e.s *= l.s, r = l.e + e.e, s = d.length, c = h.length, s < c && (a = d, d = h, h = a, o = s, s = c, c = o), a = [], o = s + c, n = o; n--; ) a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; )
      u = a[i] + h[n] * d[i - n - 1] + t, a[i--] = u % Ae | 0, t = u / Ae | 0;
    a[i] = (a[i] + t) % Ae | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, ve ? de(e, f.precision) : e;
};
L.toDecimalPlaces = L.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (bt(e, 0, Mr), t === void 0 ? t = n.rounding : bt(t, 0, 8), de(r, e + xe(r) + 1, t));
};
L.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = lr(n, !0) : (bt(e, 0, Mr), t === void 0 ? t = i.rounding : bt(t, 0, 8), n = de(new i(n), e + 1, t), r = lr(n, !0, e + 1)), r;
};
L.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? lr(i) : (bt(e, 0, Mr), t === void 0 ? t = a.rounding : bt(t, 0, 8), n = de(new a(i), e + xe(i) + 1, t), r = lr(n.abs(), !1, e + xe(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
L.toInteger = L.toint = function() {
  var e = this, t = e.constructor;
  return de(new t(e), xe(e) + 1, t.rounding);
};
L.toNumber = function() {
  return +this;
};
L.toPower = L.pow = function(e) {
  var t, r, n, i, a, o, u = this, s = u.constructor, c = 12, l = +(e = new s(e));
  if (!e.s) return new s(Je);
  if (u = new s(u), !u.s) {
    if (e.s < 1) throw Error(lt + "Infinity");
    return u;
  }
  if (u.eq(Je)) return u;
  if (n = s.precision, e.eq(Je)) return de(u, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = l < 0 ? -l : l) <= yh) {
      for (i = new s(Je), t = Math.ceil(n / he + 4), ve = !1; r % 2 && (i = i.times(u), el(i.d, t)), r = Dr(r / 2), r !== 0; )
        u = u.times(u), el(u.d, t);
      return ve = !0, e.s < 0 ? new s(Je).div(i) : de(i, n);
    }
  } else if (a < 0) throw Error(lt + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, ve = !1, i = e.times(on(u, n + c)), ve = !0, i = gh(i), i.s = a, i;
};
L.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = xe(i), n = lr(i, r <= a.toExpNeg || r >= a.toExpPos)) : (bt(e, 1, Mr), t === void 0 ? t = a.rounding : bt(t, 0, 8), i = de(new a(i), e, t), r = xe(i), n = lr(i, e <= r || r <= a.toExpNeg, e)), n;
};
L.toSignificantDigits = L.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (bt(e, 1, Mr), t === void 0 ? t = n.rounding : bt(t, 0, 8)), de(new n(r), e, t);
};
L.toString = L.valueOf = L.val = L.toJSON = L[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = xe(e), r = e.constructor;
  return lr(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function mh(e, t) {
  var r, n, i, a, o, u, s, c, l = e.constructor, f = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), ve ? de(t, f) : t;
  if (s = e.d, c = t.d, o = e.e, i = t.e, s = s.slice(), a = o - i, a) {
    for (a < 0 ? (n = s, a = -a, u = c.length) : (n = c, i = o, u = s.length), o = Math.ceil(f / he), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = s.length, a = c.length, u - a < 0 && (a = u, n = c, c = s, s = n), r = 0; a; )
    r = (s[--a] = s[a] + c[a] + r) / Ae | 0, s[a] %= Ae;
  for (r && (s.unshift(r), ++i), u = s.length; s[--u] == 0; ) s.pop();
  return t.d = s, t.e = i, ve ? de(t, f) : t;
}
function bt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(ur + e);
}
function yt(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = he - n.length, r && (a += Bt(r)), a += n;
    o = e[t], n = o + "", r = he - n.length, r && (a += Bt(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var At = /* @__PURE__ */ function() {
  function e(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      a = n[u] * i + o, n[u] = a % Ae | 0, o = a / Ae | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, s;
    if (a != o)
      s = a > o ? 1 : -1;
    else
      for (u = s = 0; u < a; u++)
        if (n[u] != i[u]) {
          s = n[u] > i[u] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Ae + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, s, c, l, f, d, h, p, v, y, b, w, x, A, S, _, P, N, j = n.constructor, B = n.s == i.s ? 1 : -1, R = n.d, k = i.d;
    if (!n.s) return new j(n);
    if (!i.s) throw Error(lt + "Division by zero");
    for (s = n.e - i.e, P = k.length, S = R.length, h = new j(B), p = h.d = [], c = 0; k[c] == (R[c] || 0); ) ++c;
    if (k[c] > (R[c] || 0) && --s, a == null ? w = a = j.precision : o ? w = a + (xe(n) - xe(i)) + 1 : w = a, w < 0) return new j(0);
    if (w = w / he + 2 | 0, c = 0, P == 1)
      for (l = 0, k = k[0], w++; (c < S || l) && w--; c++)
        x = l * Ae + (R[c] || 0), p[c] = x / k | 0, l = x % k | 0;
    else {
      for (l = Ae / (k[0] + 1) | 0, l > 1 && (k = e(k, l), R = e(R, l), P = k.length, S = R.length), A = P, v = R.slice(0, P), y = v.length; y < P; ) v[y++] = 0;
      N = k.slice(), N.unshift(0), _ = k[0], k[1] >= Ae / 2 && ++_;
      do
        l = 0, u = t(k, v, P, y), u < 0 ? (b = v[0], P != y && (b = b * Ae + (v[1] || 0)), l = b / _ | 0, l > 1 ? (l >= Ae && (l = Ae - 1), f = e(k, l), d = f.length, y = v.length, u = t(f, v, d, y), u == 1 && (l--, r(f, P < d ? N : k, d))) : (l == 0 && (u = l = 1), f = k.slice()), d = f.length, d < y && f.unshift(0), r(v, f, y), u == -1 && (y = v.length, u = t(k, v, P, y), u < 1 && (l++, r(v, P < y ? N : k, y))), y = v.length) : u === 0 && (l++, v = [0]), p[c++] = l, u && v[0] ? v[y++] = R[A] || 0 : (v = [R[A]], y = 1);
      while ((A++ < S || v[0] !== void 0) && w--);
    }
    return p[0] || p.shift(), h.e = s, de(h, o ? a + xe(h) + 1 : a);
  };
}();
function gh(e, t) {
  var r, n, i, a, o, u, s = 0, c = 0, l = e.constructor, f = l.precision;
  if (xe(e) > 16) throw Error(wu + xe(e));
  if (!e.s) return new l(Je);
  for (ve = !1, u = f, o = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(Qt(2, c)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new l(Je), l.precision = u; ; ) {
    if (i = de(i.times(e), u), r = r.times(++s), o = a.plus(At(i, r, u)), yt(o.d).slice(0, u) === yt(a.d).slice(0, u)) {
      for (; c--; ) a = de(a.times(a), u);
      return l.precision = f, t == null ? (ve = !0, de(a, f)) : a;
    }
    a = o;
  }
}
function xe(e) {
  for (var t = e.e * he, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Aa(e, t, r) {
  if (t > e.LN10.sd())
    throw ve = !0, r && (e.precision = r), Error(lt + "LN10 precision limit exceeded");
  return de(new e(e.LN10), t);
}
function Bt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function on(e, t) {
  var r, n, i, a, o, u, s, c, l, f = 1, d = 10, h = e, p = h.d, v = h.constructor, y = v.precision;
  if (h.s < 1) throw Error(lt + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(Je)) return new v(0);
  if (t == null ? (ve = !1, c = y) : c = t, h.eq(10))
    return t == null && (ve = !0), Aa(v, c);
  if (c += d, v.precision = c, r = yt(p), n = r.charAt(0), a = xe(h), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = yt(h.d), n = r.charAt(0), f++;
    a = xe(h), n > 1 ? (h = new v("0." + r), a++) : h = new v(n + "." + r.slice(1));
  } else
    return s = Aa(v, c + 2, y).times(a + ""), h = on(new v(n + "." + r.slice(1)), c - d).plus(s), v.precision = y, t == null ? (ve = !0, de(h, y)) : h;
  for (u = o = h = At(h.minus(Je), h.plus(Je), c), l = de(h.times(h), c), i = 3; ; ) {
    if (o = de(o.times(l), c), s = u.plus(At(o, new v(i), c)), yt(s.d).slice(0, c) === yt(u.d).slice(0, c))
      return u = u.times(2), a !== 0 && (u = u.plus(Aa(v, c + 2, y).times(a + ""))), u = At(u, new v(f), c), v.precision = y, t == null ? (ve = !0, de(u, y)) : u;
    u = s, i += 2;
  }
}
function Js(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = Dr(r / he), e.d = [], n = (r + 1) % he, r < 0 && (n += he), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= he; n < i; ) e.d.push(+t.slice(n, n += he));
      t = t.slice(n), n = he - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), ve && (e.e > mi || e.e < -mi)) throw Error(wu + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function de(e, t, r) {
  var n, i, a, o, u, s, c, l, f = e.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += he, i = t, c = f[l = 0];
  else {
    if (l = Math.ceil((n + 1) / he), a = f.length, l >= a) return e;
    for (c = a = f[l], o = 1; a >= 10; a /= 10) o++;
    n %= he, i = n - he + o;
  }
  if (r !== void 0 && (a = Qt(10, o - i - 1), u = c / a % 10 | 0, s = t < 0 || f[l + 1] !== void 0 || c % a, s = r < 4 ? (u || s) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || s || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? c / Qt(10, o - i) : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return s ? (a = xe(e), f.length = 1, t = t - a - 1, f[0] = Qt(10, (he - t % he) % he), e.e = Dr(-t / he) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = l, a = 1, l--) : (f.length = l + 1, a = Qt(10, he - n), f[l] = i > 0 ? (c / Qt(10, o - i) % Qt(10, i) | 0) * a : 0), s)
    for (; ; )
      if (l == 0) {
        (f[0] += a) == Ae && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[l] += a, f[l] != Ae) break;
        f[l--] = 0, a = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (ve && (e.e > mi || e.e < -mi))
    throw Error(wu + xe(e));
  return e;
}
function bh(e, t) {
  var r, n, i, a, o, u, s, c, l, f, d = e.constructor, h = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), ve ? de(t, h) : t;
  if (s = e.d, f = t.d, n = t.e, c = e.e, s = s.slice(), o = c - n, o) {
    for (l = o < 0, l ? (r = s, o = -o, u = f.length) : (r = f, n = c, u = s.length), i = Math.max(Math.ceil(h / he), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = s.length, u = f.length, l = i < u, l && (u = i), i = 0; i < u; i++)
      if (s[i] != f[i]) {
        l = s[i] < f[i];
        break;
      }
    o = 0;
  }
  for (l && (r = s, s = f, f = r, t.s = -t.s), u = s.length, i = f.length - u; i > 0; --i) s[u++] = 0;
  for (i = f.length; i > o; ) {
    if (s[--i] < f[i]) {
      for (a = i; a && s[--a] === 0; ) s[a] = Ae - 1;
      --s[a], s[i] += Ae;
    }
    s[i] -= f[i];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? (t.d = s, t.e = n, ve ? de(t, h) : t) : new d(0);
}
function lr(e, t, r) {
  var n, i = xe(e), a = yt(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Bt(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Bt(-i - 1) + a, r && (n = r - o) > 0 && (a += Bt(n))) : i >= o ? (a += Bt(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Bt(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Bt(n))), e.s < 0 ? "-" + a : a;
}
function el(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function wh(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(ur + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return Js(o, a.toString());
    } else if (typeof a != "string")
      throw Error(ur + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, mO.test(a)) Js(o, a);
    else throw Error(ur + a);
  }
  if (i.prototype = L, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = wh, i.config = i.set = gO, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function gO(e) {
  if (!e || typeof e != "object")
    throw Error(lt + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    Mr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (Dr(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(ur + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(ur + r + ": " + n);
  return this;
}
var xu = wh(yO);
Je = new xu(1);
const le = xu;
var bO = (e) => e, xh = {}, Oh = (e) => e === xh, tl = (e) => function t() {
  return arguments.length === 0 || arguments.length === 1 && Oh(arguments.length <= 0 ? void 0 : arguments[0]) ? t : e(...arguments);
}, Eh = (e, t) => e === 1 ? t : tl(function() {
  for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
    n[i] = arguments[i];
  var a = n.filter((o) => o !== xh).length;
  return a >= e ? t(...n) : Eh(e - a, tl(function() {
    for (var o = arguments.length, u = new Array(o), s = 0; s < o; s++)
      u[s] = arguments[s];
    var c = n.map((l) => Oh(l) ? u.shift() : l);
    return t(...c, ...u);
  }));
}), Yi = (e) => Eh(e.length, e), fo = (e, t) => {
  for (var r = [], n = e; n < t; ++n)
    r[n - e] = n;
  return r;
}, wO = Yi((e, t) => Array.isArray(t) ? t.map(e) : Object.keys(t).map((r) => t[r]).map(e)), xO = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return bO;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce((u, s) => s(u), a(...arguments));
  };
}, ho = (e) => Array.isArray(e) ? e.reverse() : e.split("").reverse().join(""), _h = (e) => {
  var t = null, r = null;
  return function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return t && i.every((o, u) => {
      var s;
      return o === ((s = t) === null || s === void 0 ? void 0 : s[u]);
    }) || (t = i, r = e(...i)), r;
  };
};
function Sh(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new le(e).abs().log(10).toNumber()) + 1, t;
}
function Ah(e, t, r) {
  for (var n = new le(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
Yi((e, t, r) => {
  var n = +e, i = +t;
  return n + r * (i - n);
});
Yi((e, t, r) => {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
});
Yi((e, t, r) => {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
var Ph = (e) => {
  var [t, r] = e, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, Th = (e, t, r) => {
  if (e.lte(0))
    return new le(0);
  var n = Sh(e.toNumber()), i = new le(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, u = new le(Math.ceil(a.div(o).toNumber())).add(r).mul(o), s = u.mul(i);
  return t ? new le(s.toNumber()) : new le(Math.ceil(s.toNumber()));
}, OO = (e, t, r) => {
  var n = new le(1), i = new le(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new le(10).pow(Sh(e) - 1), i = new le(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new le(Math.floor(e)));
  } else e === 0 ? i = new le(Math.floor((t - 1) / 2)) : r || (i = new le(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), u = xO(wO((s) => i.add(new le(s - o).mul(n)).toNumber()), fo);
  return u(0, t);
}, Ch = function(t, r, n, i) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((r - t) / (n - 1)))
    return {
      step: new le(0),
      tickMin: new le(0),
      tickMax: new le(0)
    };
  var o = Th(new le(r).sub(t).div(n - 1), i, a), u;
  t <= 0 && r >= 0 ? u = new le(0) : (u = new le(t).add(r).div(2), u = u.sub(new le(u).mod(o)));
  var s = Math.ceil(u.sub(t).div(o).toNumber()), c = Math.ceil(new le(r).sub(u).div(o).toNumber()), l = s + c + 1;
  return l > n ? Ch(t, r, n, i, a + 1) : (l < n && (c = r > 0 ? c + (n - l) : c, s = r > 0 ? s : s + (n - l)), {
    step: o,
    tickMin: u.sub(new le(s).mul(o)),
    tickMax: u.add(new le(c).mul(o))
  });
};
function EO(e) {
  var [t, r] = e, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = Math.max(n, 2), [o, u] = Ph([t, r]);
  if (o === -1 / 0 || u === 1 / 0) {
    var s = u === 1 / 0 ? [o, ...fo(0, n - 1).map(() => 1 / 0)] : [...fo(0, n - 1).map(() => -1 / 0), u];
    return t > r ? ho(s) : s;
  }
  if (o === u)
    return OO(o, n, i);
  var {
    step: c,
    tickMin: l,
    tickMax: f
  } = Ch(o, u, a, i, 0), d = Ah(l, f.add(new le(0.1).mul(c)), c);
  return t > r ? ho(d) : d;
}
function _O(e, t) {
  var [r, n] = e, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, [a, o] = Ph([r, n]);
  if (a === -1 / 0 || o === 1 / 0)
    return [r, n];
  if (a === o)
    return [a];
  var u = Math.max(t, 2), s = Th(new le(o).sub(a).div(u - 1), i, 0), c = [...Ah(new le(a), new le(o), s), o];
  return i === !1 && (c = c.map((l) => Math.round(l))), r > n ? ho(c) : c;
}
var SO = _h(EO), AO = _h(_O), PO = (e) => e.rootProps.barCategoryGap, Gi = (e) => e.rootProps.stackOffset, Ou = (e) => e.options.chartName, Eu = (e) => e.rootProps.syncId, kh = (e) => e.rootProps.syncMethod, _u = (e) => e.options.eventEmitter, xt = {
  allowDuplicatedCategory: !0,
  // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  angleAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  type: "category"
}, Ze = {
  allowDataOverflow: !1,
  allowDuplicatedCategory: !0,
  radiusAxisId: 0,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  type: "number"
}, Xi = (e, t) => {
  if (!(!e || !t))
    return e != null && e.reversed ? [t[1], t[0]] : t;
}, TO = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: !1,
  // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
  dataKey: void 0,
  domain: void 0,
  id: xt.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: xt.reversed,
  scale: xt.scale,
  tick: xt.tick,
  tickCount: void 0,
  ticks: void 0,
  type: xt.type,
  unit: void 0
}, CO = {
  allowDataOverflow: Ze.allowDataOverflow,
  allowDecimals: !1,
  allowDuplicatedCategory: Ze.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: Ze.radiusAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: Ze.scale,
  tick: Ze.tick,
  tickCount: Ze.tickCount,
  ticks: void 0,
  type: Ze.type,
  unit: void 0
}, kO = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: xt.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: xt.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: xt.scale,
  tick: xt.tick,
  tickCount: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0
}, MO = {
  allowDataOverflow: Ze.allowDataOverflow,
  allowDecimals: !1,
  allowDuplicatedCategory: Ze.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: Ze.radiusAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: Ze.scale,
  tick: Ze.tick,
  tickCount: Ze.tickCount,
  ticks: void 0,
  type: "category",
  unit: void 0
}, Su = (e, t) => e.polarAxis.angleAxis[t] != null ? e.polarAxis.angleAxis[t] : e.layout.layoutType === "radial" ? kO : TO, Au = (e, t) => e.polarAxis.radiusAxis[t] != null ? e.polarAxis.radiusAxis[t] : e.layout.layoutType === "radial" ? MO : CO, Zi = (e) => e.polarOptions, Pu = C([Mt, Dt, Re], Ug), Mh = C([Zi, Pu], (e, t) => {
  if (e != null)
    return Ft(e.innerRadius, t, 0);
}), Dh = C([Zi, Pu], (e, t) => {
  if (e != null)
    return Ft(e.outerRadius, t, t * 0.8);
}), DO = (e) => {
  if (e == null)
    return [0, 0];
  var {
    startAngle: t,
    endAngle: r
  } = e;
  return [t, r];
}, Nh = C([Zi], DO);
C([Su, Nh], Xi);
var jh = C([Pu, Mh, Dh], (e, t, r) => {
  if (!(e == null || t == null || r == null))
    return [t, r];
});
C([Au, jh], Xi);
var Ih = C([pe, Zi, Mh, Dh, Mt, Dt], (e, t, r, n, i, a) => {
  if (!(e !== "centric" && e !== "radial" || t == null || r == null || n == null)) {
    var {
      cx: o,
      cy: u,
      startAngle: s,
      endAngle: c
    } = t;
    return {
      cx: Ft(o, i, i / 2),
      cy: Ft(u, a, a / 2),
      innerRadius: r,
      outerRadius: n,
      startAngle: s,
      endAngle: c,
      clockWise: !1
      // this property look useful, why not use it?
    };
  }
}), Oe = (e, t) => t, Qi = (e, t, r) => r;
function Rh(e) {
  return e == null ? void 0 : e.id;
}
var Se = (e) => {
  var t = pe(e);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, Nr = (e) => e.tooltip.settings.axisId, Ce = (e) => {
  var t = Se(e), r = Nr(e);
  return gn(e, t, r);
}, $h = C([Ce], (e) => e == null ? void 0 : e.dataKey);
function Lh(e, t, r) {
  var {
    chartData: n = []
  } = t, {
    allowDuplicatedCategory: i,
    dataKey: a
  } = r, o = /* @__PURE__ */ new Map();
  return e.forEach((u) => {
    var s, c = (s = u.data) !== null && s !== void 0 ? s : n;
    if (!(c == null || c.length === 0)) {
      var l = Rh(u);
      c.forEach((f, d) => {
        var h = a == null || i ? d : String(Fe(f, a, null)), p = Fe(f, u.dataKey, 0), v;
        o.has(h) ? v = o.get(h) : v = {}, Object.assign(v, {
          [l]: p
        }), o.set(h, v);
      });
    }
  }), Array.from(o.values());
}
function Tu(e) {
  return e.stackId != null && e.dataKey != null;
}
function rl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rl(Object(r), !0).forEach(function(n) {
      NO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NO(e, t, r) {
  return (t = jO(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jO(e) {
  var t = IO(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function IO(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var po = [0, "auto"], Xe = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: void 0,
  height: 30,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "bottom",
  padding: {
    left: 0,
    right: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "category",
  unit: void 0
}, Bh = (e, t) => e.cartesianAxis.xAxis[t], jt = (e, t) => {
  var r = Bh(e, t);
  return r ?? Xe;
}, zh = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: po,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "left",
  padding: {
    top: 0,
    bottom: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0,
  width: hn
}, RO = (e, t) => e.cartesianAxis.yAxis[t], It = (e, t) => {
  var r = RO(e, t);
  return r ?? zh;
}, $O = {
  domain: [0, "auto"],
  includeHidden: !1,
  reversed: !1,
  allowDataOverflow: !1,
  allowDuplicatedCategory: !1,
  dataKey: void 0,
  id: 0,
  name: "",
  range: [64, 64],
  scale: "auto",
  type: "number",
  unit: ""
}, Cu = (e, t) => {
  var r = e.cartesianAxis.zAxis[t];
  return r ?? $O;
}, Ge = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return jt(e, r);
    case "yAxis":
      return It(e, r);
    case "zAxis":
      return Cu(e, r);
    case "angleAxis":
      return Su(e, r);
    case "radiusAxis":
      return Au(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, LO = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return jt(e, r);
    case "yAxis":
      return It(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, gn = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return jt(e, r);
    case "yAxis":
      return It(e, r);
    case "angleAxis":
      return Su(e, r);
    case "radiusAxis":
      return Au(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Uh = (e) => e.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function Kh(e, t) {
  return (r) => {
    switch (e) {
      case "xAxis":
        return "xAxisId" in r && r.xAxisId === t;
      case "yAxis":
        return "yAxisId" in r && r.yAxisId === t;
      case "zAxis":
        return "zAxisId" in r && r.zAxisId === t;
      case "angleAxis":
        return "angleAxisId" in r && r.angleAxisId === t;
      case "radiusAxis":
        return "radiusAxisId" in r && r.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var Fh = (e) => e.graphicalItems.cartesianItems, BO = C([Oe, Qi], Kh), Wh = (e, t, r) => e.filter(r).filter((n) => (t == null ? void 0 : t.includeHidden) === !0 ? !0 : !n.hide), bn = C([Fh, Ge, BO], Wh), Vh = C([bn], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(Tu)), Hh = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0), qh = C([bn], Hh), Yh = (e) => e.map((t) => t.data).filter(Boolean).flat(1), zO = C([bn], Yh), Gh = (e, t) => {
  var {
    chartData: r = [],
    dataStartIndex: n,
    dataEndIndex: i
  } = t;
  return e.length > 0 ? e : r.slice(n, i + 1);
}, ku = C([zO, bu], Gh), Xh = (e, t, r) => (t == null ? void 0 : t.dataKey) != null ? e.map((n) => ({
  value: Fe(n, t.dataKey)
})) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e.map((i) => ({
  value: Fe(i, n)
}))) : e.map((n) => ({
  value: n
})), Ji = C([ku, Ge, bn], Xh);
function Zh(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function yr(e) {
  return e.filter((t) => gt(t) || t instanceof Date).map(Number).filter((t) => ct(t) === !1);
}
function UO(e, t, r) {
  return !r || typeof t != "number" || ct(t) ? [] : r.length ? yr(r.flatMap((n) => {
    var i = Fe(e, n.dataKey), a, o;
    if (Array.isArray(i) ? [a, o] = i : a = o = i, !(!ht(a) || !ht(o)))
      return [t - a, t + o];
  })) : [];
}
var KO = C([Vh, bu, Ce], Lh), Qh = (e, t, r) => {
  var n = {}, i = t.reduce((a, o) => (o.stackId == null || (a[o.stackId] == null && (a[o.stackId] = []), a[o.stackId].push(o)), a), n);
  return Object.fromEntries(Object.entries(i).map((a) => {
    var [o, u] = a, s = u.map(Rh);
    return [o, {
      // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
      stackedData: r0(e, s, r),
      graphicalItems: u
    }];
  }));
}, FO = C([KO, Vh, Gi], Qh), Jh = (e, t, r) => {
  var {
    dataStartIndex: n,
    dataEndIndex: i
  } = t;
  if (r !== "zAxis") {
    var a = a0(e, n, i);
    if (!(a != null && a[0] === 0 && a[1] === 0))
      return a;
  }
}, WO = C([FO, Yt, Oe], Jh), ep = (e, t, r, n, i) => r.length > 0 ? e.flatMap((a) => r.flatMap((o) => {
  var u, s, c = (u = n[o.id]) === null || u === void 0 ? void 0 : u.filter((f) => Zh(i, f)), l = Fe(a, (s = t.dataKey) !== null && s !== void 0 ? s : o.dataKey);
  return {
    value: l,
    errorDomain: UO(a, l, c)
  };
})).filter(Boolean) : (t == null ? void 0 : t.dataKey) != null ? e.map((a) => ({
  value: Fe(a, t.dataKey),
  errorDomain: []
})) : e.map((a) => ({
  value: a,
  errorDomain: []
})), ea = (e) => e.errorBars, tp = (e, t, r) => e.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => Zh(r, n));
C([qh, ea, Oe], tp);
var VO = C([ku, Ge, qh, ea, Oe], ep);
function HO(e) {
  var {
    value: t
  } = e;
  if (gt(t) || t instanceof Date)
    return t;
}
var nl = (e) => {
  var t = e.flatMap((n) => [n.value, n.errorDomain]).flat(1), r = yr(t);
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, qO = (e, t, r) => {
  var n = e.map(HO).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && Gl(n)) ? Id(0, e.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, Mu = (e) => {
  var t;
  if (e == null || !("domain" in e))
    return po;
  if (e.domain != null)
    return e.domain;
  if (e.ticks != null) {
    if (e.type === "number") {
      var r = yr(e.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e.type === "category")
      return e.ticks.map(String);
  }
  return (t = e == null ? void 0 : e.domain) !== null && t !== void 0 ? t : po;
}, bi = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var a = i.flat(), o = Math.min(...a), u = Math.max(...a);
    return [o, u];
  }
}, rp = (e) => e.referenceElements.dots, jr = (e, t, r) => e.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), YO = C([rp, Oe, Qi], jr), np = (e) => e.referenceElements.areas, GO = C([np, Oe, Qi], jr), ip = (e) => e.referenceElements.lines, XO = C([ip, Oe, Qi], jr), ap = (e, t) => {
  var r = yr(e.map((n) => t === "xAxis" ? n.x : n.y));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, ZO = C(YO, Oe, ap), op = (e, t) => {
  var r = yr(e.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, QO = C([GO, Oe], op), up = (e, t) => {
  var r = yr(e.map((n) => t === "xAxis" ? n.x : n.y));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, JO = C(XO, Oe, up), eE = C(ZO, JO, QO, (e, t, r) => bi(e, r, t)), tE = C([Ge], Mu), cp = (e, t, r, n, i, a, o) => {
  var u = pO(t, e.allowDataOverflow);
  if (u != null)
    return u;
  var s = a === "vertical" && o === "xAxis" || a === "horizontal" && o === "yAxis", c = s ? bi(r, i, nl(n)) : bi(i, nl(n));
  return vO(t, c, e.allowDataOverflow);
}, rE = C([Ge, tE, WO, VO, eE, pe, Oe], cp), nE = [0, 1], sp = (e, t, r, n, i, a, o) => {
  if (!((e == null || r == null || r.length === 0) && o === void 0)) {
    var {
      dataKey: u,
      type: s
    } = e, c = Vt(t, a);
    return c && u == null ? Id(0, r.length) : s === "category" ? qO(n, e, c) : i === "expand" ? nE : o;
  }
}, Du = C([Ge, pe, ku, Ji, Gi, Oe, rE], sp), lp = (e, t, r, n, i) => {
  if (e != null) {
    var {
      scale: a,
      type: o
    } = e;
    if (a === "auto")
      return t === "radial" && i === "radiusAxis" ? "band" : t === "radial" && i === "angleAxis" ? "linear" : o === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !r) ? "point" : o === "category" ? "band" : "linear";
    if (typeof a == "string") {
      var u = "scale".concat(Po(a));
      return u in Yr ? u : "point";
    }
  }
}, wn = C([Ge, pe, Uh, Ou, Oe], lp);
function iE(e) {
  if (e != null) {
    if (e in Yr)
      return Yr[e]();
    var t = "scale".concat(Po(e));
    if (t in Yr)
      return Yr[t]();
  }
}
function Nu(e, t, r, n) {
  if (!(r == null || n == null)) {
    if (typeof e.scale == "function")
      return e.scale.copy().domain(r).range(n);
    var i = iE(t);
    if (i != null) {
      var a = i.domain(r).range(n);
      return Qg(a), a;
    }
  }
}
var fp = (e, t, r) => {
  var n = Mu(t);
  if (!(r !== "auto" && r !== "linear")) {
    if (t != null && t.tickCount && Array.isArray(n) && (n[0] === "auto" || n[1] === "auto") && Pr(e))
      return SO(e, t.tickCount, t.allowDecimals);
    if (t != null && t.tickCount && t.type === "number" && Pr(e))
      return AO(e, t.tickCount, t.allowDecimals);
  }
}, ju = C([Du, gn, wn], fp), dp = (e, t, r, n) => {
  if (
    /*
     * Angle axis for some reason uses nice ticks when rendering axis tick labels,
     * but doesn't use nice ticks for extending domain like all the other axes do.
     * Not really sure why? Is there a good reason,
     * or is it just because someone added support for nice ticks to the other axes and forgot this one?
     */
    n !== "angleAxis" && (e == null ? void 0 : e.type) === "number" && Pr(t) && Array.isArray(r) && r.length > 0
  ) {
    var i = t[0], a = r[0], o = t[1], u = r[r.length - 1];
    return [Math.min(i, a), Math.max(o, u)];
  }
  return t;
}, aE = C([Ge, Du, ju, Oe], dp), oE = C(Ji, Ge, (e, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(yr(e.map((u) => u.value))).sort((u, s) => u - s);
    if (n.length < 2)
      return 1 / 0;
    var i = n[n.length - 1] - n[0];
    if (i === 0)
      return 1 / 0;
    for (var a = 0; a < n.length - 1; a++) {
      var o = n[a + 1] - n[a];
      r = Math.min(r, o);
    }
    return r / i;
  }
}), hp = C(oE, pe, PO, Re, (e, t, r, n) => n, (e, t, r, n, i) => {
  if (!ht(e))
    return 0;
  var a = t === "vertical" ? n.height : n.width;
  if (i === "gap")
    return e * a / 2;
  if (i === "no-gap") {
    var o = Ft(r, e * a), u = e * a / 2;
    return u - o - (u - o) / a * o;
  }
  return 0;
}), uE = (e, t) => {
  var r = jt(e, t);
  return r == null || typeof r.padding != "string" ? 0 : hp(e, "xAxis", t, r.padding);
}, cE = (e, t) => {
  var r = It(e, t);
  return r == null || typeof r.padding != "string" ? 0 : hp(e, "yAxis", t, r.padding);
}, sE = C(jt, uE, (e, t) => {
  var r, n;
  if (e == null)
    return {
      left: 0,
      right: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    left: t,
    right: t
  } : {
    left: ((r = i.left) !== null && r !== void 0 ? r : 0) + t,
    right: ((n = i.right) !== null && n !== void 0 ? n : 0) + t
  };
}), lE = C(It, cE, (e, t) => {
  var r, n;
  if (e == null)
    return {
      top: 0,
      bottom: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    top: t,
    bottom: t
  } : {
    top: ((r = i.top) !== null && r !== void 0 ? r : 0) + t,
    bottom: ((n = i.bottom) !== null && n !== void 0 ? n : 0) + t
  };
}), fE = C([Re, sE, Ui, zi, (e, t, r) => r], (e, t, r, n, i) => {
  var {
    padding: a
  } = n;
  return i ? [a.left, r.width - a.right] : [e.left + t.left, e.left + e.width - t.right];
}), dE = C([Re, pe, lE, Ui, zi, (e, t, r) => r], (e, t, r, n, i, a) => {
  var {
    padding: o
  } = i;
  return a ? [n.height - o.bottom, o.top] : t === "horizontal" ? [e.top + e.height - r.bottom, e.top + r.top] : [e.top + r.top, e.top + e.height - r.bottom];
}), xn = (e, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return fE(e, r, n);
    case "yAxis":
      return dE(e, r, n);
    case "zAxis":
      return (i = Cu(e, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return Nh(e);
    case "radiusAxis":
      return jh(e, r);
    default:
      return;
  }
}, pp = C([Ge, xn], Xi), On = C([Ge, wn, aE, pp], Nu);
C([bn, ea, Oe], tp);
function vp(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var ta = (e, t) => t, ra = (e, t, r) => r, hE = C(Li, ta, ra, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(vp)), pE = C(Bi, ta, ra, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(vp)), yp = (e, t) => ({
  width: e.width,
  height: t.height
}), vE = (e, t) => {
  var r = typeof t.width == "number" ? t.width : hn;
  return {
    width: r,
    height: e.height
  };
}, yE = C(Re, jt, yp), mE = (e, t, r) => {
  switch (t) {
    case "top":
      return e.top;
    case "bottom":
      return r - e.bottom;
    default:
      return 0;
  }
}, gE = (e, t, r) => {
  switch (t) {
    case "left":
      return e.left;
    case "right":
      return r - e.right;
    default:
      return 0;
  }
}, bE = C(Dt, Re, hE, ta, ra, (e, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var s = yp(t, u);
    o == null && (o = mE(t, n, e));
    var c = n === "top" && !i || n === "bottom" && i;
    a[u.id] = o - Number(c) * s.height, o += (c ? -1 : 1) * s.height;
  }), a;
}), wE = C(Mt, Re, pE, ta, ra, (e, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var s = vE(t, u);
    o == null && (o = gE(t, n, e));
    var c = n === "left" && !i || n === "right" && i;
    a[u.id] = o - Number(c) * s.width, o += (c ? -1 : 1) * s.width;
  }), a;
}), xE = (e, t) => {
  var r = jt(e, t);
  if (r != null)
    return bE(e, r.orientation, r.mirror);
}, OE = C([Re, jt, xE, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r == null ? void 0 : r[n];
    return i == null ? {
      x: e.left,
      y: 0
    } : {
      x: e.left,
      y: i
    };
  }
}), EE = (e, t) => {
  var r = It(e, t);
  if (r != null)
    return wE(e, r.orientation, r.mirror);
};
C([Re, It, EE, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r == null ? void 0 : r[n];
    return i == null ? {
      x: 0,
      y: e.top
    } : {
      x: i,
      y: e.top
    };
  }
});
C(Re, It, (e, t) => {
  var r = typeof t.width == "number" ? t.width : hn;
  return {
    width: r,
    height: e.height
  };
});
var mp = (e, t, r, n) => {
  if (r != null) {
    var {
      allowDuplicatedCategory: i,
      type: a,
      dataKey: o
    } = r, u = Vt(e, n), s = t.map((c) => c.value);
    if (o && u && a === "category" && i && Gl(s))
      return s;
  }
}, Iu = C([pe, Ji, Ge, Oe], mp), gp = (e, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var {
      type: i,
      scale: a
    } = r, o = Vt(e, n);
    if (o && (i === "number" || a !== "auto"))
      return t.map((u) => u.value);
  }
}, Ru = C([pe, Ji, gn, Oe], gp), il = C([pe, LO, wn, On, Iu, Ru, xn, ju, Oe], (e, t, r, n, i, a, o, u, s) => {
  if (t == null)
    return null;
  var c = Vt(e, s);
  return {
    angle: t.angle,
    interval: t.interval,
    minTickGap: t.minTickGap,
    orientation: t.orientation,
    tick: t.tick,
    tickCount: t.tickCount,
    tickFormatter: t.tickFormatter,
    ticks: t.ticks,
    type: t.type,
    unit: t.unit,
    axisType: s,
    categoricalDomain: a,
    duplicateDomain: i,
    isCategorical: c,
    niceTicks: u,
    range: o,
    realScaleType: r,
    scale: n
  };
}), _E = (e, t, r, n, i, a, o, u, s) => {
  if (!(t == null || n == null)) {
    var c = Vt(e, s), {
      type: l,
      ticks: f,
      tickCount: d
    } = t, h = r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2, p = l === "category" && n.bandwidth ? n.bandwidth() / h : 0;
    p = s === "angleAxis" && a != null && a.length >= 2 ? ot(a[0] - a[1]) * 2 * p : p;
    var v = f || i;
    if (v) {
      var y = v.map((b, w) => {
        var x = o ? o.indexOf(b) : b;
        return {
          index: w,
          // If the scaleContent is not a number, the coordinate will be NaN.
          // That could be the case for example with a PointScale and a string as domain.
          coordinate: n(x) + p,
          value: b,
          offset: p
        };
      });
      return y.filter((b) => !ct(b.coordinate));
    }
    return c && u ? u.map((b, w) => ({
      coordinate: n(b) + p,
      value: b,
      index: w,
      offset: p
    })) : n.ticks ? n.ticks(d).map((b) => ({
      coordinate: n(b) + p,
      value: b,
      offset: p
    })) : n.domain().map((b, w) => ({
      coordinate: n(b) + p,
      value: o ? o[b] : b,
      index: w,
      offset: p
    }));
  }
}, SE = C([pe, gn, wn, On, ju, xn, Iu, Ru, Oe], _E), AE = (e, t, r, n, i, a, o) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var u = Vt(e, o), {
      tickCount: s
    } = t, c = 0;
    return c = o === "angleAxis" && (n == null ? void 0 : n.length) >= 2 ? ot(n[0] - n[1]) * 2 * c : c, u && a ? a.map((l, f) => ({
      coordinate: r(l) + c,
      value: l,
      index: f,
      offset: c
    })) : r.ticks ? r.ticks(s).map((l) => ({
      coordinate: r(l) + c,
      value: l,
      offset: c
    })) : r.domain().map((l, f) => ({
      coordinate: r(l) + c,
      value: i ? i[l] : l,
      index: f,
      offset: c
    }));
  }
}, bp = C([pe, gn, On, xn, Iu, Ru, Oe], AE), wp = C(Ge, On, (e, t) => {
  if (!(e == null || t == null))
    return gi(gi({}, e), {}, {
      scale: t
    });
}), PE = C([Ge, wn, Du, pp], Nu);
C((e, t, r) => Cu(e, r), PE, (e, t) => {
  if (!(e == null || t == null))
    return gi(gi({}, e), {}, {
      scale: t
    });
});
var TE = C([pe, Li, Bi], (e, t, r) => {
  switch (e) {
    case "horizontal":
      return t.some((n) => n.reversed) ? "right-to-left" : "left-to-right";
    case "vertical":
      return r.some((n) => n.reversed) ? "bottom-to-top" : "top-to-bottom";
    case "centric":
    case "radial":
      return "left-to-right";
    default:
      return;
  }
}), xp = (e) => e.options.defaultTooltipEventType, Op = (e) => e.options.validateTooltipEventTypes;
function Ep(e, t, r) {
  if (e == null)
    return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function $u(e, t) {
  var r = xp(e), n = Op(e);
  return Ep(t, r, n);
}
function CE(e) {
  return q((t) => $u(t, e));
}
var _p = (e, t) => {
  var r, n = Number(t);
  if (!(ct(n) || t == null))
    return n >= 0 ? e == null || (r = e[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, kE = (e) => e.tooltip.settings, Ut = {
  active: !1,
  index: null,
  dataKey: void 0,
  coordinate: void 0
}, ME = {
  itemInteraction: {
    click: Ut,
    hover: Ut
  },
  axisInteraction: {
    click: Ut,
    hover: Ut
  },
  keyboardInteraction: Ut,
  syncInteraction: {
    active: !1,
    index: null,
    dataKey: void 0,
    label: void 0,
    coordinate: void 0
  },
  tooltipItemPayloads: [],
  settings: {
    shared: void 0,
    trigger: "hover",
    axisId: 0,
    active: !1,
    defaultIndex: void 0
  }
}, Sp = nt({
  name: "tooltip",
  initialState: ME,
  reducers: {
    addTooltipEntrySettings(e, t) {
      e.tooltipItemPayloads.push(t.payload);
    },
    removeTooltipEntrySettings(e, t) {
      var r = St(e).tooltipItemPayloads.indexOf(t.payload);
      r > -1 && e.tooltipItemPayloads.splice(r, 1);
    },
    setTooltipSettingsState(e, t) {
      e.settings = t.payload;
    },
    setActiveMouseOverItemIndex(e, t) {
      e.syncInteraction.active = !1, e.keyboardInteraction.active = !1, e.itemInteraction.hover.active = !0, e.itemInteraction.hover.index = t.payload.activeIndex, e.itemInteraction.hover.dataKey = t.payload.activeDataKey, e.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    mouseLeaveChart(e) {
      e.itemInteraction.hover.active = !1, e.axisInteraction.hover.active = !1;
    },
    mouseLeaveItem(e) {
      e.itemInteraction.hover.active = !1;
    },
    setActiveClickItemIndex(e, t) {
      e.syncInteraction.active = !1, e.itemInteraction.click.active = !0, e.keyboardInteraction.active = !1, e.itemInteraction.click.index = t.payload.activeIndex, e.itemInteraction.click.dataKey = t.payload.activeDataKey, e.itemInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setMouseOverAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.axisInteraction.hover.active = !0, e.keyboardInteraction.active = !1, e.axisInteraction.hover.index = t.payload.activeIndex, e.axisInteraction.hover.dataKey = t.payload.activeDataKey, e.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    setMouseClickAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.keyboardInteraction.active = !1, e.axisInteraction.click.active = !0, e.axisInteraction.click.index = t.payload.activeIndex, e.axisInteraction.click.dataKey = t.payload.activeDataKey, e.axisInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setSyncInteraction(e, t) {
      e.syncInteraction = t.payload;
    },
    setKeyboardInteraction(e, t) {
      e.keyboardInteraction.active = t.payload.active, e.keyboardInteraction.index = t.payload.activeIndex, e.keyboardInteraction.coordinate = t.payload.activeCoordinate, e.keyboardInteraction.dataKey = t.payload.activeDataKey;
    }
  }
}), {
  addTooltipEntrySettings: DE,
  removeTooltipEntrySettings: NE,
  setTooltipSettingsState: jE,
  setActiveMouseOverItemIndex: IE,
  mouseLeaveItem: KT,
  mouseLeaveChart: Ap,
  setActiveClickItemIndex: FT,
  setMouseOverAxisIndex: Pp,
  setMouseClickAxisIndex: RE,
  setSyncInteraction: vo,
  setKeyboardInteraction: yo
} = Sp.actions, $E = Sp.reducer;
function al(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? al(Object(r), !0).forEach(function(n) {
      LE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : al(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LE(e, t, r) {
  return (t = BE(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BE(e) {
  var t = zE(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zE(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UE(e, t, r) {
  return t === "axis" ? r === "click" ? e.axisInteraction.click : e.axisInteraction.hover : r === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function KE(e) {
  return e.index != null;
}
var Tp = (e, t, r, n) => {
  if (t == null)
    return Ut;
  var i = UE(e, t, r);
  if (i == null)
    return Ut;
  if (i.active)
    return i;
  if (e.keyboardInteraction.active)
    return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var a = e.settings.active === !0;
  if (KE(i)) {
    if (a)
      return Wn(Wn({}, i), {}, {
        active: !0
      });
  } else if (n != null)
    return {
      active: !0,
      coordinate: void 0,
      dataKey: void 0,
      index: n
    };
  return Wn(Wn({}, Ut), {}, {
    coordinate: i.coordinate
  });
}, Lu = (e, t) => {
  var r = e == null ? void 0 : e.index;
  if (r == null)
    return null;
  var n = Number(r);
  if (!ht(n))
    return r;
  var i = 0, a = 1 / 0;
  return t.length > 0 && (a = t.length - 1), String(Math.max(i, Math.min(n, a)));
}, Cp = (e, t, r, n, i, a, o, u) => {
  if (!(a == null || u == null)) {
    var s = o[0], c = s == null ? void 0 : u(s.positions, a);
    if (c != null)
      return c;
    var l = i == null ? void 0 : i[Number(a)];
    if (l)
      switch (r) {
        case "horizontal":
          return {
            x: l.coordinate,
            y: (n.top + t) / 2
          };
        default:
          return {
            x: (n.left + e) / 2,
            y: l.coordinate
          };
      }
  }
}, kp = (e, t, r, n) => {
  if (t === "axis")
    return e.tooltipItemPayloads;
  if (e.tooltipItemPayloads.length === 0)
    return [];
  var i;
  return r === "hover" ? i = e.itemInteraction.hover.dataKey : i = e.itemInteraction.click.dataKey, i == null && n != null ? [e.tooltipItemPayloads[0]] : e.tooltipItemPayloads.filter((a) => {
    var o;
    return ((o = a.settings) === null || o === void 0 ? void 0 : o.dataKey) === i;
  });
}, En = (e) => e.options.tooltipPayloadSearcher, Ir = (e) => e.tooltip;
function ol(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ul(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ol(Object(r), !0).forEach(function(n) {
      FE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ol(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FE(e, t, r) {
  return (t = WE(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WE(e) {
  var t = VE(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VE(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function HE(e, t) {
  return e ?? t;
}
var Mp = (e, t, r, n, i, a, o) => {
  if (!(t == null || a == null)) {
    var {
      chartData: u,
      computedData: s,
      dataStartIndex: c,
      dataEndIndex: l
    } = r, f = [];
    return e.reduce((d, h) => {
      var p, {
        dataDefinedOnItem: v,
        settings: y
      } = h, b = HE(v, u), w = Array.isArray(b) ? pd(b, c, l) : b, x = (p = y == null ? void 0 : y.dataKey) !== null && p !== void 0 ? p : n, A = y == null ? void 0 : y.nameKey, S;
      if (n && Array.isArray(w) && /*
       * findEntryInArray won't work for Scatter because Scatter provides an array of arrays
       * as tooltip payloads and findEntryInArray is not prepared to handle that.
       * Sad but also ScatterChart only allows 'item' tooltipEventType
       * and also this is only a problem if there are multiple Scatters and each has its own data array
       * so let's fix that some other time.
       */
      !Array.isArray(w[0]) && /*
       * If the tooltipEventType is 'axis', we should search for the dataKey in the sliced data
       * because thanks to allowDuplicatedCategory=false, the order of elements in the array
       * no longer matches the order of elements in the original data
       * and so we need to search by the active dataKey + label rather than by index.
       *
       * The same happens if multiple graphical items are present in the chart
       * and each of them has its own data array. Those arrays get concatenated
       * and again the tooltip index no longer matches the original data.
       *
       * On the other hand the tooltipEventType 'item' should always search by index
       * because we get the index from interacting over the individual elements
       * which is always accurate, irrespective of the allowDuplicatedCategory setting.
       */
      o === "axis" ? S = Xl(w, n, i) : S = a(w, t, s, A), Array.isArray(S))
        S.forEach((P) => {
          var N = ul(ul({}, y), {}, {
            name: P.name,
            unit: P.unit,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            color: void 0,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            fill: void 0
          });
          d.push(Xc({
            tooltipEntrySettings: N,
            dataKey: P.dataKey,
            payload: P.payload,
            // @ts-expect-error getValueByDataKey does not validate the output type
            value: Fe(P.payload, P.dataKey),
            name: P.name
          }));
        });
      else {
        var _;
        d.push(Xc({
          tooltipEntrySettings: y,
          dataKey: x,
          payload: S,
          // @ts-expect-error getValueByDataKey does not validate the output type
          value: Fe(S, x),
          // @ts-expect-error getValueByDataKey does not validate the output type
          name: (_ = Fe(S, A)) !== null && _ !== void 0 ? _ : y == null ? void 0 : y.name
        }));
      }
      return d;
    }, f);
  }
}, Bu = C([Ce, pe, Uh, Ou, Se], lp), qE = C([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]), YE = C([Se, Nr], Kh), _n = C([qE, Ce, YE], Wh), GE = C([_n], (e) => e.filter(Tu)), XE = C([_n], Yh), Rr = C([XE, Yt], Gh), ZE = C([GE, Yt, Ce], Lh), zu = C([Rr, Ce, _n], Xh), QE = C([Ce], Mu), JE = C([_n], (e) => e.filter(Tu)), e1 = C([ZE, JE, Gi], Qh), t1 = C([e1, Yt, Se], Jh), r1 = C([_n], Hh), n1 = C([Rr, Ce, r1, ea, Se], ep), i1 = C([rp, Se, Nr], jr), a1 = C([i1, Se], ap), o1 = C([np, Se, Nr], jr), u1 = C([o1, Se], op), c1 = C([ip, Se, Nr], jr), s1 = C([c1, Se], up), l1 = C([a1, s1, u1], bi), f1 = C([Ce, QE, t1, n1, l1, pe, Se], cp), Dp = C([Ce, pe, Rr, zu, Gi, Se, f1], sp), d1 = C([Dp, Ce, Bu], fp), h1 = C([Ce, Dp, d1, Se], dp), Np = (e) => {
  var t = Se(e), r = Nr(e), n = !1;
  return xn(e, t, r, n);
}, jp = C([Ce, Np], Xi), Ip = C([Ce, Bu, h1, jp], Nu), p1 = C([pe, zu, Ce, Se], mp), v1 = C([pe, zu, Ce, Se], gp), y1 = (e, t, r, n, i, a, o, u) => {
  if (t) {
    var {
      type: s
    } = t, c = Vt(e, u);
    if (n) {
      var l = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, f = s === "category" && n.bandwidth ? n.bandwidth() / l : 0;
      return f = u === "angleAxis" && i != null && (i == null ? void 0 : i.length) >= 2 ? ot(i[0] - i[1]) * 2 * f : f, c && o ? o.map((d, h) => ({
        coordinate: n(d) + f,
        value: d,
        index: h,
        offset: f
      })) : n.domain().map((d, h) => ({
        coordinate: n(d) + f,
        value: a ? a[d] : d,
        index: h,
        offset: f
      }));
    }
  }
}, Rt = C([pe, Ce, Bu, Ip, Np, p1, v1, Se], y1), Uu = C([xp, Op, kE], (e, t, r) => Ep(r.shared, e, t)), Rp = (e) => e.tooltip.settings.trigger, Ku = (e) => e.tooltip.settings.defaultIndex, na = C([Ir, Uu, Rp, Ku], Tp), un = C([na, Rr], Lu), $p = C([Rt, un], _p), m1 = C([na], (e) => {
  if (e)
    return e.dataKey;
}), Lp = C([Ir, Uu, Rp, Ku], kp), g1 = C([Mt, Dt, pe, Re, Rt, Ku, Lp, En], Cp), b1 = C([na, g1], (e, t) => e != null && e.coordinate ? e.coordinate : t), w1 = C([na], (e) => e.active), x1 = C([Lp, un, Yt, $h, $p, En, Uu], Mp), O1 = C([x1], (e) => {
  if (e != null) {
    var t = e.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function cl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cl(Object(r), !0).forEach(function(n) {
      E1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function E1(e, t, r) {
  return (t = _1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _1(e) {
  var t = S1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function S1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var A1 = () => q(Ce), P1 = () => {
  var e = A1(), t = q(Rt), r = q(Ip);
  return Za(sl(sl({}, e), {}, {
    scale: r
  }), t);
}, T1 = () => q(Ou), Fu = (e, t) => t, Bp = (e, t, r) => r, Wu = (e, t, r, n) => n, C1 = C(Rt, (e) => Ni(e, (t) => t.coordinate)), Vu = C([Ir, Fu, Bp, Wu], Tp), zp = C([Vu, Rr], Lu), k1 = (e, t, r) => {
  if (t != null) {
    var n = Ir(e);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, Up = C([Ir, Fu, Bp, Wu], kp), wi = C([Mt, Dt, pe, Re, Rt, Wu, Up, En], Cp), M1 = C([Vu, wi], (e, t) => {
  var r;
  return (r = e.coordinate) !== null && r !== void 0 ? r : t;
}), Kp = C(Rt, zp, _p), D1 = C([Up, zp, Yt, $h, Kp, En, Fu], Mp), N1 = C([Vu], (e) => ({
  isActive: e.active,
  activeIndex: e.index
})), j1 = (e, t, r, n, i, a, o, u) => {
  if (!(!e || !t || !n || !i || !a)) {
    var s = o0(e.chartX, e.chartY, t, r, u);
    if (s) {
      var c = c0(s, t), l = Xg(c, o, a, n, i), f = u0(t, a, l, s);
      return {
        activeIndex: String(l),
        activeCoordinate: f
      };
    }
  }
};
function mo() {
  return mo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mo.apply(null, arguments);
}
function ll(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ll(Object(r), !0).forEach(function(n) {
      I1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ll(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function I1(e, t, r) {
  return (t = R1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R1(e) {
  var t = $1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function L1(e) {
  var {
    coordinate: t,
    payload: r,
    index: n,
    offset: i,
    tooltipAxisBandSize: a,
    layout: o,
    cursor: u,
    tooltipEventType: s,
    chartName: c
  } = e, l = t, f = r, d = n;
  if (!u || !l || c !== "ScatterChart" && s !== "axis")
    return null;
  var h, p;
  if (c === "ScatterChart")
    h = l, p = eb;
  else if (c === "BarChart")
    h = tb(o, l, i, a), p = Db;
  else if (o === "radial") {
    var {
      cx: v,
      cy: y,
      radius: b,
      startAngle: w,
      endAngle: x
    } = kd(l);
    h = {
      cx: v,
      cy: y,
      startAngle: w,
      endAngle: x,
      innerRadius: b,
      outerRadius: b
    }, p = Rb;
  } else
    h = {
      points: $b(o, l, i)
    }, p = _d;
  var A = typeof u == "object" && "className" in u ? u.className : void 0, S = Vn(Vn(Vn(Vn({
    stroke: "#ccc",
    pointerEvents: "none"
  }, i), h), Ie(u, !1)), {}, {
    payload: f,
    payloadIndex: d,
    className: ye("recharts-tooltip-cursor", A)
  });
  return /* @__PURE__ */ g.isValidElement(u) ? /* @__PURE__ */ g.cloneElement(u, S) : /* @__PURE__ */ g.createElement(p, S);
}
function B1(e) {
  var t = P1(), r = bd(), n = Go(), i = T1();
  return /* @__PURE__ */ g.createElement(L1, mo({}, e, {
    coordinate: e.coordinate,
    index: e.index,
    payload: e.payload,
    offset: r,
    layout: n,
    tooltipAxisBandSize: t,
    chartName: i
  }));
}
var Fp = /* @__PURE__ */ g.createContext(null), z1 = () => g.useContext(Fp), Wp = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function i(s, c, l) {
    this.fn = s, this.context = c, this.once = l || !1;
  }
  function a(s, c, l, f, d) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var h = new i(l, f || s, d), p = r ? r + c : c;
    return s._events[p] ? s._events[p].fn ? s._events[p] = [s._events[p], h] : s._events[p].push(h) : (s._events[p] = h, s._eventsCount++), s;
  }
  function o(s, c) {
    --s._eventsCount === 0 ? s._events = new n() : delete s._events[c];
  }
  function u() {
    this._events = new n(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var c = [], l, f;
    if (this._eventsCount === 0) return c;
    for (f in l = this._events)
      t.call(l, f) && c.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(l)) : c;
  }, u.prototype.listeners = function(c) {
    var l = r ? r + c : c, f = this._events[l];
    if (!f) return [];
    if (f.fn) return [f.fn];
    for (var d = 0, h = f.length, p = new Array(h); d < h; d++)
      p[d] = f[d].fn;
    return p;
  }, u.prototype.listenerCount = function(c) {
    var l = r ? r + c : c, f = this._events[l];
    return f ? f.fn ? 1 : f.length : 0;
  }, u.prototype.emit = function(c, l, f, d, h, p) {
    var v = r ? r + c : c;
    if (!this._events[v]) return !1;
    var y = this._events[v], b = arguments.length, w, x;
    if (y.fn) {
      switch (y.once && this.removeListener(c, y.fn, void 0, !0), b) {
        case 1:
          return y.fn.call(y.context), !0;
        case 2:
          return y.fn.call(y.context, l), !0;
        case 3:
          return y.fn.call(y.context, l, f), !0;
        case 4:
          return y.fn.call(y.context, l, f, d), !0;
        case 5:
          return y.fn.call(y.context, l, f, d, h), !0;
        case 6:
          return y.fn.call(y.context, l, f, d, h, p), !0;
      }
      for (x = 1, w = new Array(b - 1); x < b; x++)
        w[x - 1] = arguments[x];
      y.fn.apply(y.context, w);
    } else {
      var A = y.length, S;
      for (x = 0; x < A; x++)
        switch (y[x].once && this.removeListener(c, y[x].fn, void 0, !0), b) {
          case 1:
            y[x].fn.call(y[x].context);
            break;
          case 2:
            y[x].fn.call(y[x].context, l);
            break;
          case 3:
            y[x].fn.call(y[x].context, l, f);
            break;
          case 4:
            y[x].fn.call(y[x].context, l, f, d);
            break;
          default:
            if (!w) for (S = 1, w = new Array(b - 1); S < b; S++)
              w[S - 1] = arguments[S];
            y[x].fn.apply(y[x].context, w);
        }
    }
    return !0;
  }, u.prototype.on = function(c, l, f) {
    return a(this, c, l, f, !1);
  }, u.prototype.once = function(c, l, f) {
    return a(this, c, l, f, !0);
  }, u.prototype.removeListener = function(c, l, f, d) {
    var h = r ? r + c : c;
    if (!this._events[h]) return this;
    if (!l)
      return o(this, h), this;
    var p = this._events[h];
    if (p.fn)
      p.fn === l && (!d || p.once) && (!f || p.context === f) && o(this, h);
    else {
      for (var v = 0, y = [], b = p.length; v < b; v++)
        (p[v].fn !== l || d && !p[v].once || f && p[v].context !== f) && y.push(p[v]);
      y.length ? this._events[h] = y.length === 1 ? y[0] : y : o(this, h);
    }
    return this;
  }, u.prototype.removeAllListeners = function(c) {
    var l;
    return c ? (l = r ? r + c : c, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
})(Wp);
var U1 = Wp.exports;
const K1 = /* @__PURE__ */ Wt(U1);
var cn = new K1(), go = "recharts.syncEvent.tooltip", fl = "recharts.syncEvent.brush";
function F1(e, t) {
  if (t) {
    var r = Number.parseInt(t, 10);
    if (!ct(r))
      return e == null ? void 0 : e[r];
  }
}
var W1 = {
  chartName: "",
  tooltipPayloadSearcher: void 0,
  eventEmitter: void 0,
  defaultTooltipEventType: "axis"
}, Vp = nt({
  name: "options",
  initialState: W1,
  reducers: {
    createEventEmitter: (e) => {
      e.eventEmitter == null && (e.eventEmitter = Symbol("rechartsEventEmitter"));
    }
  }
}), V1 = Vp.reducer, {
  createEventEmitter: H1
} = Vp.actions;
function q1(e) {
  return e.tooltip.syncInteraction;
}
var Y1 = {
  chartData: void 0,
  computedData: void 0,
  dataStartIndex: 0,
  dataEndIndex: 0
}, Hp = nt({
  name: "chartData",
  initialState: Y1,
  reducers: {
    setChartData(e, t) {
      if (e.chartData = t.payload, t.payload == null) {
        e.dataStartIndex = 0, e.dataEndIndex = 0;
        return;
      }
      t.payload.length > 0 && e.dataEndIndex !== t.payload.length - 1 && (e.dataEndIndex = t.payload.length - 1);
    },
    setComputedData(e, t) {
      e.computedData = t.payload;
    },
    setDataStartEndIndexes(e, t) {
      var {
        startIndex: r,
        endIndex: n
      } = t.payload;
      r != null && (e.dataStartIndex = r), n != null && (e.dataEndIndex = n);
    }
  }
}), {
  setChartData: dl,
  setDataStartEndIndexes: G1,
  setComputedData: WT
} = Hp.actions, X1 = Hp.reducer, Z1 = ["x", "y"];
function hl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hl(Object(r), !0).forEach(function(n) {
      Q1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Q1(e, t, r) {
  return (t = J1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function J1(e) {
  var t = e_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function e_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function t_(e, t) {
  if (e == null) return {};
  var r, n, i = r_(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function r_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var qp = () => {
};
function n_() {
  var e = q(Eu), t = q(_u), r = rt(), n = q(kh), i = q(Rt), a = Go(), o = Yo(), u = q((s) => s.rootProps.className);
  g.useEffect(() => {
    if (e == null)
      return qp;
    var s = (c, l, f) => {
      if (t !== f && e === c) {
        if (n === "index") {
          var d;
          if (o && l !== null && l !== void 0 && (d = l.payload) !== null && d !== void 0 && d.coordinate) {
            var h = l.payload.coordinate, {
              x: p,
              y: v
            } = h, y = t_(h, Z1), b = Gt(Gt(Gt({}, y), typeof p == "number" && {
              x: Math.max(o.x, Math.min(p, o.x + o.width))
            }), typeof v == "number" && {
              y: Math.max(o.y, Math.min(v, o.y + o.height))
            }), w = Gt(Gt({}, l), {}, {
              payload: Gt(Gt({}, l.payload), {}, {
                coordinate: b
              })
            });
            r(w);
          } else
            r(l);
          return;
        }
        if (i != null) {
          var x;
          if (typeof n == "function") {
            var A = {
              activeTooltipIndex: l.payload.index == null ? void 0 : Number(l.payload.index),
              isTooltipActive: l.payload.active,
              activeIndex: l.payload.index == null ? void 0 : Number(l.payload.index),
              activeLabel: l.payload.label,
              activeDataKey: l.payload.dataKey,
              activeCoordinate: l.payload.coordinate
            }, S = n(i, A);
            x = i[S];
          } else n === "value" && (x = i.find((K) => String(K.value) === l.payload.label));
          var {
            coordinate: _
          } = l.payload;
          if (x == null || l.payload.active === !1 || _ == null || o == null) {
            r(vo({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0
            }));
            return;
          }
          var {
            x: P,
            y: N
          } = _, j = Math.min(P, o.x + o.width), B = Math.min(N, o.y + o.height), R = {
            x: a === "horizontal" ? x.coordinate : j,
            y: a === "horizontal" ? B : x.coordinate
          }, k = vo({
            active: l.payload.active,
            coordinate: R,
            dataKey: l.payload.dataKey,
            index: String(x.index),
            label: l.payload.label
          });
          r(k);
        }
      }
    };
    return cn.on(go, s), () => {
      cn.off(go, s);
    };
  }, [u, r, t, e, n, i, a, o]);
}
function i_() {
  var e = q(Eu), t = q(_u), r = rt();
  g.useEffect(() => {
    if (e == null)
      return qp;
    var n = (i, a, o) => {
      t !== o && e === i && r(G1(a));
    };
    return cn.on(fl, n), () => {
      cn.off(fl, n);
    };
  }, [r, t, e]);
}
function a_() {
  var e = rt();
  g.useEffect(() => {
    e(H1());
  }, [e]), n_(), i_();
}
function o_(e, t, r, n, i, a) {
  var o = q((d) => k1(d, e, t)), u = q(_u), s = q(Eu), c = q(kh), l = q(q1), f = l == null ? void 0 : l.active;
  g.useEffect(() => {
    if (!f && s != null && u != null) {
      var d = vo({
        active: a,
        coordinate: r,
        dataKey: o,
        index: i,
        label: typeof n == "number" ? String(n) : n
      });
      cn.emit(go, s, d, u);
    }
  }, [f, r, o, i, n, u, s, c, a]);
}
function pl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pl(Object(r), !0).forEach(function(n) {
      u_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u_(e, t, r) {
  return (t = c_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function c_(e) {
  var t = s_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function s_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function l_(e) {
  return e.dataKey;
}
function f_(e, t) {
  return /* @__PURE__ */ g.isValidElement(e) ? /* @__PURE__ */ g.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ g.createElement(e, t) : /* @__PURE__ */ g.createElement(D0, t);
}
var yl = [], d_ = {
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  axisId: 0,
  contentStyle: {},
  cursor: !0,
  filterNull: !0,
  isAnimationActive: !Cr.isSsr,
  itemSorter: "name",
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  wrapperStyle: {}
};
function h_(e) {
  var t = vt(e, d_), {
    active: r,
    allowEscapeViewBox: n,
    animationDuration: i,
    animationEasing: a,
    content: o,
    filterNull: u,
    isAnimationActive: s,
    offset: c,
    payloadUniqBy: l,
    position: f,
    reverseDirection: d,
    useTranslate3d: h,
    wrapperStyle: p,
    cursor: v,
    shared: y,
    trigger: b,
    defaultIndex: w,
    portal: x,
    axisId: A
  } = t, S = rt(), _ = typeof w == "number" ? String(w) : w;
  g.useEffect(() => {
    S(jE({
      shared: y,
      trigger: b,
      axisId: A,
      active: r,
      defaultIndex: _
    }));
  }, [S, y, b, A, r, _]);
  var P = Yo(), N = Ed(), j = CE(y), {
    activeIndex: B,
    isActive: R
  } = q((V) => N1(V, j, b, _)), k = q((V) => D1(V, j, b, _)), K = q((V) => Kp(V, j, b, _)), W = q((V) => M1(V, j, b, _)), te = k, re = z1(), X = r ?? R, [ge, ue] = Am([te, X]), We = j === "axis" ? K : void 0;
  o_(j, b, W, We, B, X);
  var O = x ?? re;
  if (O == null)
    return null;
  var T = te ?? yl;
  X || (T = yl), u && T.length && (T = tm(te.filter((V) => V.value != null && (V.hide !== !0 || t.includeHidden)), l, l_));
  var F = T.length > 0, U = /* @__PURE__ */ g.createElement(B0, {
    allowEscapeViewBox: n,
    animationDuration: i,
    animationEasing: a,
    isAnimationActive: s,
    active: X,
    coordinate: W,
    hasPayload: F,
    offset: c,
    position: f,
    reverseDirection: d,
    useTranslate3d: h,
    viewBox: P,
    wrapperStyle: p,
    lastBoundingBox: ge,
    innerRef: ue,
    hasPortalFromProps: !!x
  }, f_(o, vl(vl({}, t), {}, {
    // @ts-expect-error renderContent method expects the payload to be mutable, TODO make it immutable
    payload: T,
    label: We,
    active: X,
    coordinate: W,
    accessibilityLayer: N
  })));
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ ky.createPortal(U, O), X && /* @__PURE__ */ g.createElement(B1, {
    cursor: v,
    tooltipEventType: j,
    coordinate: W,
    payload: te,
    index: B
  }));
}
var Yp = {}, Gp = {}, Xp = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r, n, { signal: i, edges: a } = {}) {
    let o, u = null;
    const s = a != null && a.includes("leading"), c = a == null || a.includes("trailing"), l = () => {
      u !== null && (r.apply(o, u), o = void 0, u = null);
    }, f = () => {
      c && l(), v();
    };
    let d = null;
    const h = () => {
      d != null && clearTimeout(d), d = setTimeout(() => {
        d = null, f();
      }, n);
    }, p = () => {
      d !== null && (clearTimeout(d), d = null);
    }, v = () => {
      p(), o = void 0, u = null;
    }, y = () => {
      l();
    }, b = function(...w) {
      if (i != null && i.aborted)
        return;
      o = this, u = w;
      const x = d == null;
      h(), s && x && l();
    };
    return b.schedule = h, b.cancel = v, b.flush = y, i == null || i.addEventListener("abort", v, { once: !0 }), b;
  }
  e.debounce = t;
})(Xp);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Xp;
  function r(n, i = 0, a = {}) {
    typeof a != "object" && (a = {});
    const { leading: o = !1, trailing: u = !0, maxWait: s } = a, c = Array(2);
    o && (c[0] = "leading"), u && (c[1] = "trailing");
    let l, f = null;
    const d = t.debounce(function(...v) {
      l = n.apply(this, v), f = null;
    }, i, { edges: c }), h = function(...v) {
      return s != null && (f === null && (f = Date.now()), Date.now() - f >= s) ? (l = n.apply(this, v), f = Date.now(), d.cancel(), d.schedule(), l) : (d.apply(this, v), l);
    }, p = () => (d.flush(), l);
    return h.cancel = d.cancel, h.flush = p, h;
  }
  e.debounce = r;
})(Gp);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Gp;
  function r(n, i = 0, a = {}) {
    const { leading: o = !0, trailing: u = !0 } = a;
    return t.debounce(n, i, {
      leading: o,
      maxWait: i,
      trailing: u
    });
  }
  e.throttle = r;
})(Yp);
var p_ = Yp.throttle;
const v_ = /* @__PURE__ */ Wt(p_);
var y_ = process.env.NODE_ENV !== "production", Gr = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (y_ && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, () => i[o++]));
    }
};
function ml(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ml(Object(r), !0).forEach(function(n) {
      m_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ml(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function m_(e, t, r) {
  return (t = g_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function g_(e) {
  var t = b_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function b_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var w_ = /* @__PURE__ */ g.forwardRef((e, t) => {
  var {
    aspect: r,
    initialDimension: n = {
      width: -1,
      height: -1
    },
    width: i = "100%",
    height: a = "100%",
    /*
     * default min-width to 0 if not specified - 'auto' causes issues with flexbox
     * https://github.com/recharts/recharts/issues/172
     */
    minWidth: o = 0,
    minHeight: u,
    maxHeight: s,
    children: c,
    debounce: l = 0,
    id: f,
    className: d,
    onResize: h,
    style: p = {}
  } = e, v = g.useRef(null), y = g.useRef();
  y.current = h, g.useImperativeHandle(t, () => v.current);
  var [b, w] = g.useState({
    containerWidth: n.width,
    containerHeight: n.height
  }), x = g.useCallback((S, _) => {
    w((P) => {
      var N = Math.round(S), j = Math.round(_);
      return P.containerWidth === N && P.containerHeight === j ? P : {
        containerWidth: N,
        containerHeight: j
      };
    });
  }, []);
  g.useEffect(() => {
    var S = (j) => {
      var B, {
        width: R,
        height: k
      } = j[0].contentRect;
      x(R, k), (B = y.current) === null || B === void 0 || B.call(y, R, k);
    };
    l > 0 && (S = v_(S, l, {
      trailing: !0,
      leading: !1
    }));
    var _ = new ResizeObserver(S), {
      width: P,
      height: N
    } = v.current.getBoundingClientRect();
    return x(P, N), _.observe(v.current), () => {
      _.disconnect();
    };
  }, [x, l]);
  var A = g.useMemo(() => {
    var {
      containerWidth: S,
      containerHeight: _
    } = b;
    if (S < 0 || _ < 0)
      return null;
    Gr(Jt(i) || Jt(a), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, a), Gr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var P = Jt(i) ? S : i, N = Jt(a) ? _ : a;
    return r && r > 0 && (P ? N = P / r : N && (P = N * r), s && N > s && (N = s)), Gr(P > 0 || N > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, P, N, i, a, o, u, r), g.Children.map(c, (j) => /* @__PURE__ */ g.cloneElement(j, {
      width: P,
      height: N,
      // calculate the actual size and override it.
      style: Pa({
        width: P,
        height: N
      }, j.props.style)
    }));
  }, [r, c, a, s, u, o, b, i]);
  return /* @__PURE__ */ g.createElement("div", {
    id: f ? "".concat(f) : void 0,
    className: ye("recharts-responsive-container", d),
    style: Pa(Pa({}, p), {}, {
      width: i,
      height: a,
      minWidth: o,
      minHeight: u,
      maxHeight: s
    }),
    ref: v
  }, /* @__PURE__ */ g.createElement("div", {
    style: {
      width: 0,
      height: 0,
      overflow: "visible"
    }
  }, A));
});
function x_(e, t, r) {
  return (t = O_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function O_(e) {
  var t = E_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function E_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class __ {
  constructor(t) {
    x_(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
  }
  get(t) {
    var r = this.cache.get(t);
    return r !== void 0 && (this.cache.delete(t), this.cache.set(t, r)), r;
  }
  set(t, r) {
    if (this.cache.has(t))
      this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      this.cache.delete(n);
    }
    this.cache.set(t, r);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
}
function gl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function S_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gl(Object(r), !0).forEach(function(n) {
      A_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A_(e, t, r) {
  return (t = P_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function P_(e) {
  var t = T_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function T_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var C_ = {
  cacheSize: 2e3,
  enableCache: !0
}, Zp = S_({}, C_), bl = new __(Zp.cacheSize), k_ = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, wl = "recharts_measurement_span";
function M_(e, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", a = t.fontStyle || "", o = t.letterSpacing || "", u = t.textTransform || "";
  return "".concat(e, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(a, "|").concat(o, "|").concat(u);
}
var xl = (e, t) => {
  try {
    var r = document.getElementById(wl);
    r || (r = document.createElement("span"), r.setAttribute("id", wl), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, k_, t), r.textContent = "".concat(e);
    var n = r.getBoundingClientRect();
    return {
      width: n.width,
      height: n.height
    };
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, Xr = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Cr.isSsr)
    return {
      width: 0,
      height: 0
    };
  if (!Zp.enableCache)
    return xl(t, r);
  var n = M_(t, r), i = bl.get(n);
  if (i)
    return i;
  var a = xl(t, r);
  return bl.set(n, a), a;
}, Ol = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, El = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, D_ = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, N_ = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, Qp = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, j_ = Object.keys(Qp), br = "NaN";
function I_(e, t) {
  return e * Qp[t];
}
class He {
  static parse(t) {
    var r, [, n, i] = (r = N_.exec(t)) !== null && r !== void 0 ? r : [];
    return new He(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, ct(t) && (this.unit = ""), r !== "" && !D_.test(r) && (this.num = NaN, this.unit = ""), j_.includes(r) && (this.num = I_(t, r), this.unit = "px");
  }
  add(t) {
    return this.unit !== t.unit ? new He(NaN, "") : new He(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new He(NaN, "") : new He(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new He(NaN, "") : new He(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new He(NaN, "") : new He(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return ct(this.num);
  }
}
function Jp(e) {
  if (e.includes(br))
    return br;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, a] = (r = Ol.exec(t)) !== null && r !== void 0 ? r : [], o = He.parse(n ?? ""), u = He.parse(a ?? ""), s = i === "*" ? o.multiply(u) : o.divide(u);
    if (s.isNaN())
      return br;
    t = t.replace(Ol, s.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var c, [, l, f, d] = (c = El.exec(t)) !== null && c !== void 0 ? c : [], h = He.parse(l ?? ""), p = He.parse(d ?? ""), v = f === "+" ? h.add(p) : h.subtract(p);
    if (v.isNaN())
      return br;
    t = t.replace(El, v.toString());
  }
  return t;
}
var _l = /\(([^()]*)\)/;
function R_(e) {
  for (var t = e, r; (r = _l.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(_l, Jp(n));
  }
  return t;
}
function $_(e) {
  var t = e.replace(/\s+/g, "");
  return t = R_(t), t = Jp(t), t;
}
function L_(e) {
  try {
    return $_(e);
  } catch {
    return br;
  }
}
function Ta(e) {
  var t = L_(e.slice(5, -1));
  return t === br ? "" : t;
}
var B_ = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], z_ = ["dx", "dy", "angle", "className", "breakAll"];
function bo() {
  return bo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bo.apply(null, arguments);
}
function Sl(e, t) {
  if (e == null) return {};
  var r, n, i = U_(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function U_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var ev = /[ \f\n\r\t\v\u2028\u2029]+/, tv = (e) => {
  var {
    children: t,
    breakAll: r,
    style: n
  } = e;
  try {
    var i = [];
    Pe(t) || (r ? i = t.toString().split("") : i = t.toString().split(ev));
    var a = i.map((u) => ({
      word: u,
      width: Xr(u, n).width
    })), o = r ? 0 : Xr(" ", n).width;
    return {
      wordsWithComputedWidth: a,
      spaceWidth: o
    };
  } catch {
    return null;
  }
}, K_ = (e, t, r, n, i) => {
  var {
    maxLines: a,
    children: o,
    style: u,
    breakAll: s
  } = e, c = H(a), l = o, f = function() {
    var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return R.reduce((k, K) => {
      var {
        word: W,
        width: te
      } = K, re = k[k.length - 1];
      if (re && (n == null || i || re.width + te + r < Number(n)))
        re.words.push(W), re.width += te + r;
      else {
        var X = {
          words: [W],
          width: te
        };
        k.push(X);
      }
      return k;
    }, []);
  }, d = f(t), h = (B) => B.reduce((R, k) => R.width > k.width ? R : k);
  if (!c || i)
    return d;
  var p = d.length > a || h(d).width > Number(n);
  if (!p)
    return d;
  for (var v = "…", y = (B) => {
    var R = l.slice(0, B), k = tv({
      breakAll: s,
      style: u,
      children: R + v
    }).wordsWithComputedWidth, K = f(k), W = K.length > a || h(K).width > Number(n);
    return [W, K];
  }, b = 0, w = l.length - 1, x = 0, A; b <= w && x <= l.length - 1; ) {
    var S = Math.floor((b + w) / 2), _ = S - 1, [P, N] = y(_), [j] = y(S);
    if (!P && !j && (b = S + 1), P && j && (w = S - 1), !P && j) {
      A = N;
      break;
    }
    x++;
  }
  return A || d;
}, Al = (e) => {
  var t = Pe(e) ? [] : e.toString().split(ev);
  return [{
    words: t
  }];
}, F_ = (e) => {
  var {
    width: t,
    scaleToFit: r,
    children: n,
    style: i,
    breakAll: a,
    maxLines: o
  } = e;
  if ((t || r) && !Cr.isSsr) {
    var u, s, c = tv({
      breakAll: a,
      children: n,
      style: i
    });
    if (c) {
      var {
        wordsWithComputedWidth: l,
        spaceWidth: f
      } = c;
      u = l, s = f;
    } else
      return Al(n);
    return K_({
      breakAll: a,
      children: n,
      maxLines: o,
      style: i
    }, u, s, t, r);
  }
  return Al(n);
}, Pl = "#808080", Hu = /* @__PURE__ */ g.forwardRef((e, t) => {
  var {
    x: r = 0,
    y: n = 0,
    lineHeight: i = "1em",
    // Magic number from d3
    capHeight: a = "0.71em",
    scaleToFit: o = !1,
    textAnchor: u = "start",
    // Maintain compat with existing charts / default SVG behavior
    verticalAnchor: s = "end",
    fill: c = Pl
  } = e, l = Sl(e, B_), f = g.useMemo(() => F_({
    breakAll: l.breakAll,
    children: l.children,
    maxLines: l.maxLines,
    scaleToFit: o,
    style: l.style,
    width: l.width
  }), [l.breakAll, l.children, l.maxLines, o, l.style, l.width]), {
    dx: d,
    dy: h,
    angle: p,
    className: v,
    breakAll: y
  } = l, b = Sl(l, z_);
  if (!gt(r) || !gt(n) || f.length === 0)
    return null;
  var w = r + (H(d) ? d : 0), x = n + (H(h) ? h : 0), A;
  switch (s) {
    case "start":
      A = Ta("calc(".concat(a, ")"));
      break;
    case "middle":
      A = Ta("calc(".concat((f.length - 1) / 2, " * -").concat(i, " + (").concat(a, " / 2))"));
      break;
    default:
      A = Ta("calc(".concat(f.length - 1, " * -").concat(i, ")"));
      break;
  }
  var S = [];
  if (o) {
    var _ = f[0].width, {
      width: P
    } = l;
    S.push("scale(".concat(H(P) ? P / _ : 1, ")"));
  }
  return p && S.push("rotate(".concat(p, ", ").concat(w, ", ").concat(x, ")")), S.length && (b.transform = S.join(" ")), /* @__PURE__ */ g.createElement("text", bo({}, Ie(b, !0), {
    ref: t,
    x: w,
    y: x,
    className: ye("recharts-text", v),
    textAnchor: u,
    fill: c.includes("url") ? Pl : c
  }), f.map((N, j) => {
    var B = N.words.join(y ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ g.createElement("tspan", {
        x: w,
        dy: j === 0 ? A : i,
        key: "".concat(B, "-").concat(j)
      }, B)
    );
  }));
});
Hu.displayName = "Text";
var W_ = ["labelRef"];
function V_(e, t) {
  if (e == null) return {};
  var r, n, i = H_(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function H_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Tl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tl(Object(r), !0).forEach(function(n) {
      q_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function q_(e, t, r) {
  return (t = Y_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y_(e) {
  var t = G_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function G_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ot() {
  return Ot = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ot.apply(null, arguments);
}
var rv = /* @__PURE__ */ g.createContext(null), X_ = (e) => {
  var {
    x: t,
    y: r,
    width: n,
    height: i,
    children: a
  } = e, o = g.useMemo(() => ({
    x: t,
    y: r,
    width: n,
    height: i
  }), [t, r, n, i]);
  return /* @__PURE__ */ g.createElement(rv.Provider, {
    value: o
  }, a);
}, nv = () => {
  var e = g.useContext(rv), t = Yo();
  return e || t;
}, Z_ = /* @__PURE__ */ g.createContext(null), Q_ = () => {
  var e = g.useContext(Z_), t = q(Ih);
  return e || t;
}, J_ = (e) => {
  var {
    value: t,
    formatter: r
  } = e, n = Pe(e.children) ? t : e.children;
  return typeof r == "function" ? r(n) : n;
}, iv = (e) => e != null && typeof e == "function", eS = (e, t) => {
  var r = ot(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, tS = (e, t, r, n, i) => {
  var {
    offset: a,
    className: o
  } = e, {
    cx: u,
    cy: s,
    innerRadius: c,
    outerRadius: l,
    startAngle: f,
    endAngle: d,
    clockWise: h
  } = i, p = (c + l) / 2, v = eS(f, d), y = v >= 0 ? 1 : -1, b, w;
  switch (t) {
    case "insideStart":
      b = f + y * a, w = h;
      break;
    case "insideEnd":
      b = d - y * a, w = !h;
      break;
    case "end":
      b = d + y * a, w = h;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  w = v <= 0 ? w : !w;
  var x = je(u, s, p, b), A = je(u, s, p, b + (w ? 1 : -1) * 359), S = "M".concat(x.x, ",").concat(x.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(w ? 0 : 1, `,
    `).concat(A.x, ",").concat(A.y), _ = Pe(e.id) ? Zr("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ g.createElement("text", Ot({}, n, {
    dominantBaseline: "central",
    className: ye("recharts-radial-bar-label", o)
  }), /* @__PURE__ */ g.createElement("defs", null, /* @__PURE__ */ g.createElement("path", {
    id: _,
    d: S
  })), /* @__PURE__ */ g.createElement("textPath", {
    xlinkHref: "#".concat(_)
  }, r));
}, rS = (e, t, r) => {
  var {
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: u,
    endAngle: s
  } = e, c = (u + s) / 2;
  if (r === "outside") {
    var {
      x: l,
      y: f
    } = je(n, i, o + t, c);
    return {
      x: l,
      y: f,
      textAnchor: l >= n ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (r === "center")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (r === "centerTop")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (r === "centerBottom")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var d = (a + o) / 2, {
    x: h,
    y: p
  } = je(n, i, d, c);
  return {
    x: h,
    y: p,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, av = (e) => "cx" in e && H(e.cx), nS = (e, t) => {
  var {
    parentViewBox: r,
    offset: n,
    position: i
  } = e, a;
  r != null && !av(r) && (a = r);
  var {
    x: o,
    y: u,
    width: s,
    height: c
  } = t, l = c >= 0 ? 1 : -1, f = l * n, d = l > 0 ? "end" : "start", h = l > 0 ? "start" : "end", p = s >= 0 ? 1 : -1, v = p * n, y = p > 0 ? "end" : "start", b = p > 0 ? "start" : "end";
  if (i === "top") {
    var w = {
      x: o + s / 2,
      y: u - l * n,
      textAnchor: "middle",
      verticalAnchor: d
    };
    return be(be({}, w), a ? {
      height: Math.max(u - a.y, 0),
      width: s
    } : {});
  }
  if (i === "bottom") {
    var x = {
      x: o + s / 2,
      y: u + c + f,
      textAnchor: "middle",
      verticalAnchor: h
    };
    return be(be({}, x), a ? {
      height: Math.max(a.y + a.height - (u + c), 0),
      width: s
    } : {});
  }
  if (i === "left") {
    var A = {
      x: o - v,
      y: u + c / 2,
      textAnchor: y,
      verticalAnchor: "middle"
    };
    return be(be({}, A), a ? {
      width: Math.max(A.x - a.x, 0),
      height: c
    } : {});
  }
  if (i === "right") {
    var S = {
      x: o + s + v,
      y: u + c / 2,
      textAnchor: b,
      verticalAnchor: "middle"
    };
    return be(be({}, S), a ? {
      width: Math.max(a.x + a.width - S.x, 0),
      height: c
    } : {});
  }
  var _ = a ? {
    width: s,
    height: c
  } : {};
  return i === "insideLeft" ? be({
    x: o + v,
    y: u + c / 2,
    textAnchor: b,
    verticalAnchor: "middle"
  }, _) : i === "insideRight" ? be({
    x: o + s - v,
    y: u + c / 2,
    textAnchor: y,
    verticalAnchor: "middle"
  }, _) : i === "insideTop" ? be({
    x: o + s / 2,
    y: u + f,
    textAnchor: "middle",
    verticalAnchor: h
  }, _) : i === "insideBottom" ? be({
    x: o + s / 2,
    y: u + c - f,
    textAnchor: "middle",
    verticalAnchor: d
  }, _) : i === "insideTopLeft" ? be({
    x: o + v,
    y: u + f,
    textAnchor: b,
    verticalAnchor: h
  }, _) : i === "insideTopRight" ? be({
    x: o + s - v,
    y: u + f,
    textAnchor: y,
    verticalAnchor: h
  }, _) : i === "insideBottomLeft" ? be({
    x: o + v,
    y: u + c - f,
    textAnchor: b,
    verticalAnchor: d
  }, _) : i === "insideBottomRight" ? be({
    x: o + s - v,
    y: u + c - f,
    textAnchor: y,
    verticalAnchor: d
  }, _) : i && typeof i == "object" && (H(i.x) || Jt(i.x)) && (H(i.y) || Jt(i.y)) ? be({
    x: o + Ft(i.x, s),
    y: u + Ft(i.y, c),
    textAnchor: "end",
    verticalAnchor: "end"
  }, _) : be({
    x: o + s / 2,
    y: u + c / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, _);
}, iS = {
  offset: 5
};
function zt(e) {
  var t = vt(e, iS), {
    viewBox: r,
    position: n,
    value: i,
    children: a,
    content: o,
    className: u = "",
    textBreakAll: s,
    labelRef: c
  } = t, l = Q_(), f = nv(), d = n === "center" ? f : l ?? f, h = r || d;
  if (!h || Pe(i) && Pe(a) && !/* @__PURE__ */ g.isValidElement(o) && typeof o != "function")
    return null;
  var p = be(be({}, t), {}, {
    viewBox: h
  });
  if (/* @__PURE__ */ g.isValidElement(o)) {
    var {
      labelRef: v
    } = p, y = V_(p, W_);
    return /* @__PURE__ */ g.cloneElement(o, y);
  }
  var b;
  if (typeof o == "function") {
    if (b = /* @__PURE__ */ g.createElement(o, p), /* @__PURE__ */ g.isValidElement(b))
      return b;
  } else
    b = J_(t);
  var w = av(h), x = Ie(t, !0);
  if (w && (n === "insideStart" || n === "insideEnd" || n === "end"))
    return tS(t, n, b, x, h);
  var A = w ? rS(h, t.offset, t.position) : nS(t, h);
  return /* @__PURE__ */ g.createElement(Hu, Ot({
    ref: c,
    className: ye("recharts-label", u)
  }, x, A, {
    breakAll: s
  }), b);
}
zt.displayName = "Label";
var aS = (e, t, r) => {
  if (!e)
    return null;
  var n = {
    viewBox: t,
    labelRef: r
  };
  return e === !0 ? /* @__PURE__ */ g.createElement(zt, Ot({
    key: "label-implicit"
  }, n)) : gt(e) ? /* @__PURE__ */ g.createElement(zt, Ot({
    key: "label-implicit",
    value: e
  }, n)) : /* @__PURE__ */ g.isValidElement(e) ? e.type === zt ? /* @__PURE__ */ g.cloneElement(e, be({
    key: "label-implicit"
  }, n)) : /* @__PURE__ */ g.createElement(zt, Ot({
    key: "label-implicit",
    content: e
  }, n)) : iv(e) ? /* @__PURE__ */ g.createElement(zt, Ot({
    key: "label-implicit",
    content: e
  }, n)) : e && typeof e == "object" ? /* @__PURE__ */ g.createElement(zt, Ot({}, e, {
    key: "label-implicit"
  }, n)) : null;
};
function oS(e) {
  var {
    label: t
  } = e, r = nv();
  return aS(t, r) || null;
}
var ov = {}, uv = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r[r.length - 1];
  }
  e.last = t;
})(uv);
var cv = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return Array.isArray(r) ? r : Array.from(r);
  }
  e.toArray = t;
})(cv);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = uv, r = cv, n = Di;
  function i(a) {
    if (n.isArrayLike(a))
      return t.last(r.toArray(a));
  }
  e.last = i;
})(ov);
var uS = ov.last;
const cS = /* @__PURE__ */ Wt(uS);
var sS = ["valueAccessor"], lS = ["dataKey", "clockWise", "id", "textBreakAll"];
function xi() {
  return xi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xi.apply(null, arguments);
}
function Cl(e, t) {
  if (e == null) return {};
  var r, n, i = fS(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function fS(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var dS = (e) => Array.isArray(e.value) ? cS(e.value) : e.value, sv = /* @__PURE__ */ g.createContext(void 0), hS = sv.Provider, lv = /* @__PURE__ */ g.createContext(void 0);
lv.Provider;
function pS() {
  return g.useContext(sv);
}
function vS() {
  return g.useContext(lv);
}
function qn(e) {
  var {
    valueAccessor: t = dS
  } = e, r = Cl(e, sS), {
    dataKey: n,
    clockWise: i,
    id: a,
    textBreakAll: o
  } = r, u = Cl(r, lS), s = pS(), c = vS(), l = s || c;
  return !l || !l.length ? null : /* @__PURE__ */ g.createElement(Tr, {
    className: "recharts-label-list"
  }, l.map((f, d) => {
    var h, p = Pe(n) ? t(f, d) : Fe(f && f.payload, n), v = Pe(a) ? {} : {
      id: "".concat(a, "-").concat(d)
    };
    return /* @__PURE__ */ g.createElement(zt, xi({}, Ie(f, !0), u, v, {
      /*
       * Prefer to use the explicit fill from LabelList props.
       * Only in an absence of that, fall back to the fill of the entry.
       * The entry fill can be quite difficult to see especially in Bar, Pie, RadialBar in inside positions.
       * On the other hand it's quite convenient in Scatter, Line, or when the position is outside the Bar, Pie filled shapes.
       */
      fill: (h = r.fill) !== null && h !== void 0 ? h : f.fill,
      parentViewBox: f.parentViewBox,
      value: p,
      textBreakAll: o,
      viewBox: f.viewBox,
      key: "label-".concat(d),
      index: d
    }));
  }));
}
qn.displayName = "LabelList";
function yS(e) {
  var {
    label: t
  } = e;
  return t ? t === !0 ? /* @__PURE__ */ g.createElement(qn, {
    key: "labelList-implicit"
  }) : /* @__PURE__ */ g.isValidElement(t) || iv(t) ? /* @__PURE__ */ g.createElement(qn, {
    key: "labelList-implicit",
    content: t
  }) : typeof t == "object" ? /* @__PURE__ */ g.createElement(qn, xi({
    key: "labelList-implicit"
  }, t, {
    type: String(t.type)
  })) : null : null;
}
function wo() {
  return wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wo.apply(null, arguments);
}
var fv = (e) => {
  var {
    cx: t,
    cy: r,
    r: n,
    className: i
  } = e, a = ye("recharts-dot", i);
  return t === +t && r === +r && n === +n ? /* @__PURE__ */ g.createElement("circle", wo({}, hr(e), Co(e), {
    className: a,
    cx: t,
    cy: r,
    r: n
  })) : null;
}, mS = {
  radiusAxis: {},
  angleAxis: {}
}, dv = nt({
  name: "polarAxis",
  initialState: mS,
  reducers: {
    addRadiusAxis(e, t) {
      e.radiusAxis[t.payload.id] = t.payload;
    },
    removeRadiusAxis(e, t) {
      delete e.radiusAxis[t.payload.id];
    },
    addAngleAxis(e, t) {
      e.angleAxis[t.payload.id] = t.payload;
    },
    removeAngleAxis(e, t) {
      delete e.angleAxis[t.payload.id];
    }
  }
}), {
  addRadiusAxis: VT,
  removeRadiusAxis: HT,
  addAngleAxis: qT,
  removeAngleAxis: YT
} = dv.actions, gS = dv.reducer;
function bS(e) {
  var {
    fn: t,
    args: r
  } = e, n = rt(), i = pt();
  return g.useEffect(() => {
    if (!i) {
      var a = t(r);
      return n(DE(a)), () => {
        n(NE(a));
      };
    }
  }, [t, r, n, i]), null;
}
var wS = () => {
};
function xS(e) {
  var {
    legendPayload: t
  } = e, r = rt(), n = pt();
  return g.useEffect(() => n ? wS : (r(S0(t)), () => {
    r(A0(t));
  }), [r, n, t]), null;
}
var Ca, OS = () => {
  var [e] = g.useState(() => Zr("uid-"));
  return e;
}, ES = (Ca = ay.useId) !== null && Ca !== void 0 ? Ca : OS;
function _S(e, t) {
  var r = ES();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var SS = /* @__PURE__ */ g.createContext(void 0), AS = (e) => {
  var {
    id: t,
    type: r,
    children: n
  } = e, i = _S("recharts-".concat(r), t);
  return /* @__PURE__ */ g.createElement(SS.Provider, {
    value: i
  }, n(i));
}, PS = {
  cartesianItems: [],
  polarItems: []
}, hv = nt({
  name: "graphicalItems",
  initialState: PS,
  reducers: {
    addCartesianGraphicalItem(e, t) {
      e.cartesianItems.push(t.payload);
    },
    replaceCartesianGraphicalItem(e, t) {
      var {
        prev: r,
        next: n
      } = t.payload, i = St(e).cartesianItems.indexOf(r);
      i > -1 && (e.cartesianItems[i] = n);
    },
    removeCartesianGraphicalItem(e, t) {
      var r = St(e).cartesianItems.indexOf(t.payload);
      r > -1 && e.cartesianItems.splice(r, 1);
    },
    addPolarGraphicalItem(e, t) {
      e.polarItems.push(t.payload);
    },
    removePolarGraphicalItem(e, t) {
      var r = St(e).polarItems.indexOf(t.payload);
      r > -1 && e.polarItems.splice(r, 1);
    }
  }
}), {
  addCartesianGraphicalItem: TS,
  replaceCartesianGraphicalItem: CS,
  removeCartesianGraphicalItem: kS,
  addPolarGraphicalItem: GT,
  removePolarGraphicalItem: XT
} = hv.actions, MS = hv.reducer;
function DS(e) {
  var t = rt(), r = g.useRef(null);
  return g.useEffect(() => {
    r.current === null ? t(TS(e)) : r.current !== e && t(CS({
      prev: r.current,
      next: e
    })), r.current = e;
  }, [t, e]), g.useEffect(() => () => {
    r.current && (t(kS(r.current)), r.current = null);
  }, [t]), null;
}
function kl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ml(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kl(Object(r), !0).forEach(function(n) {
      NS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NS(e, t, r) {
  return (t = jS(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jS(e) {
  var t = IS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function IS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var RS = {
  xAxis: {},
  yAxis: {},
  zAxis: {}
}, pv = nt({
  name: "cartesianAxis",
  initialState: RS,
  reducers: {
    addXAxis(e, t) {
      e.xAxis[t.payload.id] = t.payload;
    },
    removeXAxis(e, t) {
      delete e.xAxis[t.payload.id];
    },
    addYAxis(e, t) {
      e.yAxis[t.payload.id] = t.payload;
    },
    removeYAxis(e, t) {
      delete e.yAxis[t.payload.id];
    },
    addZAxis(e, t) {
      e.zAxis[t.payload.id] = t.payload;
    },
    removeZAxis(e, t) {
      delete e.zAxis[t.payload.id];
    },
    updateYAxisWidth(e, t) {
      var {
        id: r,
        width: n
      } = t.payload;
      e.yAxis[r] && (e.yAxis[r] = Ml(Ml({}, e.yAxis[r]), {}, {
        width: n
      }));
    }
  }
}), {
  addXAxis: $S,
  removeXAxis: LS,
  addYAxis: ZT,
  removeYAxis: QT,
  addZAxis: JT,
  removeZAxis: eC,
  updateYAxisWidth: tC
} = pv.actions, BS = pv.reducer, zS = C([Re], (e) => {
  if (e)
    return {
      top: e.top,
      bottom: e.bottom,
      left: e.left,
      right: e.right
    };
}), US = C([zS, Mt, Dt], (e, t, r) => {
  if (!(!e || t == null || r == null))
    return {
      x: e.left,
      y: e.top,
      width: Math.max(0, t - e.left - e.right),
      height: Math.max(0, r - e.top - e.bottom)
    };
}), qu = () => q(US), KS = () => q(O1);
function Dl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dl(Object(r), !0).forEach(function(n) {
      FS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FS(e, t, r) {
  return (t = WS(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WS(e) {
  var t = VS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var HS = (e) => {
  var {
    point: t,
    childIndex: r,
    mainColor: n,
    activeDot: i,
    dataKey: a
  } = e;
  if (i === !1 || t.x == null || t.y == null)
    return null;
  var o = Nl(Nl({
    index: r,
    dataKey: a,
    cx: t.x,
    cy: t.y,
    r: 4,
    fill: n ?? "none",
    strokeWidth: 2,
    stroke: "#fff",
    payload: t.payload,
    value: t.value
  }, Ie(i, !1)), Co(i)), u;
  return /* @__PURE__ */ g.isValidElement(i) ? u = /* @__PURE__ */ g.cloneElement(i, o) : typeof i == "function" ? u = i(o) : u = /* @__PURE__ */ g.createElement(fv, o), /* @__PURE__ */ g.createElement(Tr, {
    className: "recharts-active-dot"
  }, u);
};
function qS(e) {
  var {
    points: t,
    mainColor: r,
    activeDot: n,
    itemDataKey: i
  } = e, a = q(un), o = KS();
  if (t == null || o == null)
    return null;
  var u = t.find((s) => o.includes(s.payload));
  return Pe(u) ? null : HS({
    point: u,
    childIndex: Number(a),
    mainColor: r,
    dataKey: i,
    activeDot: n
  });
}
var YS = {}, vv = nt({
  name: "errorBars",
  initialState: YS,
  reducers: {
    addErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] || (e[r] = []), e[r].push(n);
    },
    replaceErrorBar: (e, t) => {
      var {
        itemId: r,
        prev: n,
        next: i
      } = t.payload;
      e[r] && (e[r] = e[r].map((a) => a.dataKey === n.dataKey && a.direction === n.direction ? i : a));
    },
    removeErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] && (e[r] = e[r].filter((i) => i.dataKey !== n.dataKey || i.direction !== n.direction));
    }
  }
}), {
  addErrorBar: rC,
  replaceErrorBar: nC,
  removeErrorBar: iC
} = vv.actions, GS = vv.reducer, XS = ["children"];
function ZS(e, t) {
  if (e == null) return {};
  var r, n, i = QS(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function QS(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var JS = {
  data: [],
  xAxisId: "xAxis-0",
  yAxisId: "yAxis-0",
  dataPointFormatter: () => ({
    x: 0,
    y: 0,
    value: 0
  }),
  errorBarOffset: 0
}, eA = /* @__PURE__ */ g.createContext(JS);
function tA(e) {
  var {
    children: t
  } = e, r = ZS(e, XS);
  return /* @__PURE__ */ g.createElement(eA.Provider, {
    value: r
  }, t);
}
function yv(e, t) {
  var r, n, i = q((c) => jt(c, e)), a = q((c) => It(c, t)), o = (r = i == null ? void 0 : i.allowDataOverflow) !== null && r !== void 0 ? r : Xe.allowDataOverflow, u = (n = a == null ? void 0 : a.allowDataOverflow) !== null && n !== void 0 ? n : zh.allowDataOverflow, s = o || u;
  return {
    needClip: s,
    needClipX: o,
    needClipY: u
  };
}
function rA(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    clipPathId: n
  } = e, i = qu(), {
    needClipX: a,
    needClipY: o,
    needClip: u
  } = yv(t, r);
  if (!u)
    return null;
  var {
    x: s,
    y: c,
    width: l,
    height: f
  } = i;
  return /* @__PURE__ */ g.createElement("clipPath", {
    id: "clipPath-".concat(n)
  }, /* @__PURE__ */ g.createElement("rect", {
    x: a ? s : s - l / 2,
    y: o ? c : c - f / 2,
    width: a ? l : l * 2,
    height: o ? f : f * 2
  }));
}
var nA = (e) => {
  var {
    chartData: t
  } = e, r = rt(), n = pt();
  return g.useEffect(() => n ? () => {
  } : (r(dl(t)), () => {
    r(dl(void 0));
  }), [t, r, n]), null;
}, jl = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}, mv = nt({
  name: "brush",
  initialState: jl,
  reducers: {
    setBrushSettings(e, t) {
      return t.payload == null ? jl : t.payload;
    }
  }
}), {
  setBrushSettings: aC
} = mv.actions, iA = mv.reducer;
function aA(e, t, r) {
  return (t = oA(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oA(e) {
  var t = uA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function uA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class Yu {
  static create(t) {
    return new Yu(t);
  }
  constructor(t) {
    this.scale = t;
  }
  get domain() {
    return this.scale.domain;
  }
  get range() {
    return this.scale.range;
  }
  get rangeMin() {
    return this.range()[0];
  }
  get rangeMax() {
    return this.range()[1];
  }
  get bandwidth() {
    return this.scale.bandwidth;
  }
  apply(t) {
    var {
      bandAware: r,
      position: n
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t !== void 0) {
      if (n)
        switch (n) {
          case "start":
            return this.scale(t);
          case "middle": {
            var i = this.bandwidth ? this.bandwidth() / 2 : 0;
            return this.scale(t) + i;
          }
          case "end": {
            var a = this.bandwidth ? this.bandwidth() : 0;
            return this.scale(t) + a;
          }
          default:
            return this.scale(t);
        }
      if (r) {
        var o = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(t) + o;
      }
      return this.scale(t);
    }
  }
  isInRange(t) {
    var r = this.range(), n = r[0], i = r[r.length - 1];
    return n <= i ? t >= n && t <= i : t >= i && t <= n;
  }
}
aA(Yu, "EPS", 1e-4);
function cA(e) {
  return (e % 180 + 180) % 180;
}
var sA = function(t) {
  var {
    width: r,
    height: n
  } = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = cA(i), o = a * Math.PI / 180, u = Math.atan(n / r), s = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(s);
}, lA = {
  dots: [],
  areas: [],
  lines: []
}, gv = nt({
  name: "referenceElements",
  initialState: lA,
  reducers: {
    addDot: (e, t) => {
      e.dots.push(t.payload);
    },
    removeDot: (e, t) => {
      var r = St(e).dots.findIndex((n) => n === t.payload);
      r !== -1 && e.dots.splice(r, 1);
    },
    addArea: (e, t) => {
      e.areas.push(t.payload);
    },
    removeArea: (e, t) => {
      var r = St(e).areas.findIndex((n) => n === t.payload);
      r !== -1 && e.areas.splice(r, 1);
    },
    addLine: (e, t) => {
      e.lines.push(t.payload);
    },
    removeLine: (e, t) => {
      var r = St(e).lines.findIndex((n) => n === t.payload);
      r !== -1 && e.lines.splice(r, 1);
    }
  }
}), {
  addDot: oC,
  removeDot: uC,
  addArea: cC,
  removeArea: sC,
  addLine: lC,
  removeLine: fC
} = gv.actions, fA = gv.reducer, dA = /* @__PURE__ */ g.createContext(void 0), hA = (e) => {
  var {
    children: t
  } = e, [r] = g.useState("".concat(Zr("recharts"), "-clip")), n = qu();
  if (n == null)
    return null;
  var {
    x: i,
    y: a,
    width: o,
    height: u
  } = n;
  return /* @__PURE__ */ g.createElement(dA.Provider, {
    value: r
  }, /* @__PURE__ */ g.createElement("defs", null, /* @__PURE__ */ g.createElement("clipPath", {
    id: r
  }, /* @__PURE__ */ g.createElement("rect", {
    x: i,
    y: a,
    height: u,
    width: o
  }))), t);
};
function Oi(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function bv(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function pA(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return sA(n, r);
}
function vA(e, t, r) {
  var n = r === "width", {
    x: i,
    y: a,
    width: o,
    height: u
  } = e;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + u
  } : {
    start: n ? i + o : a + u,
    end: n ? i : a
  };
}
function Ei(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function yA(e, t) {
  return bv(e, t + 1);
}
function mA(e, t, r, n, i) {
  for (var a = (n || []).slice(), {
    start: o,
    end: u
  } = t, s = 0, c = 1, l = o, f = function() {
    var p = n == null ? void 0 : n[s];
    if (p === void 0)
      return {
        v: bv(n, c)
      };
    var v = s, y, b = () => (y === void 0 && (y = r(p, v)), y), w = p.coordinate, x = s === 0 || Ei(e, w, b, l, u);
    x || (s = 0, l = o, c += 1), x && (l = w + e * (b() / 2 + i), s += c);
  }, d; c <= a.length; )
    if (d = f(), d) return d.v;
  return [];
}
function Il(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Il(Object(r), !0).forEach(function(n) {
      gA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Il(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gA(e, t, r) {
  return (t = bA(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bA(e) {
  var t = wA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function wA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xA(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, {
    start: u
  } = t, {
    end: s
  } = t, c = function(d) {
    var h = a[d], p, v = () => (p === void 0 && (p = r(h, d)), p);
    if (d === o - 1) {
      var y = e * (h.coordinate + e * v() / 2 - s);
      a[d] = h = ze(ze({}, h), {}, {
        tickCoord: y > 0 ? h.coordinate - y * e : h.coordinate
      });
    } else
      a[d] = h = ze(ze({}, h), {}, {
        tickCoord: h.coordinate
      });
    var b = Ei(e, h.tickCoord, v, u, s);
    b && (s = h.tickCoord - e * (v() / 2 + i), a[d] = ze(ze({}, h), {}, {
      isShow: !0
    }));
  }, l = o - 1; l >= 0; l--)
    c(l);
  return a;
}
function OA(e, t, r, n, i, a) {
  var o = (n || []).slice(), u = o.length, {
    start: s,
    end: c
  } = t;
  if (a) {
    var l = n[u - 1], f = r(l, u - 1), d = e * (l.coordinate + e * f / 2 - c);
    o[u - 1] = l = ze(ze({}, l), {}, {
      tickCoord: d > 0 ? l.coordinate - d * e : l.coordinate
    });
    var h = Ei(e, l.tickCoord, () => f, s, c);
    h && (c = l.tickCoord - e * (f / 2 + i), o[u - 1] = ze(ze({}, l), {}, {
      isShow: !0
    }));
  }
  for (var p = a ? u - 1 : u, v = function(w) {
    var x = o[w], A, S = () => (A === void 0 && (A = r(x, w)), A);
    if (w === 0) {
      var _ = e * (x.coordinate - e * S() / 2 - s);
      o[w] = x = ze(ze({}, x), {}, {
        tickCoord: _ < 0 ? x.coordinate - _ * e : x.coordinate
      });
    } else
      o[w] = x = ze(ze({}, x), {}, {
        tickCoord: x.coordinate
      });
    var P = Ei(e, x.tickCoord, S, s, c);
    P && (s = x.tickCoord + e * (S() / 2 + i), o[w] = ze(ze({}, x), {}, {
      isShow: !0
    }));
  }, y = 0; y < p; y++)
    v(y);
  return o;
}
function Gu(e, t, r) {
  var {
    tick: n,
    ticks: i,
    viewBox: a,
    minTickGap: o,
    orientation: u,
    interval: s,
    tickFormatter: c,
    unit: l,
    angle: f
  } = e;
  if (!i || !i.length || !n)
    return [];
  if (H(s) || Cr.isSsr) {
    var d;
    return (d = yA(i, H(s) ? s : 0)) !== null && d !== void 0 ? d : [];
  }
  var h = [], p = u === "top" || u === "bottom" ? "width" : "height", v = l && p === "width" ? Xr(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, y = (x, A) => {
    var S = typeof c == "function" ? c(x.value, A) : x.value;
    return p === "width" ? pA(Xr(S, {
      fontSize: t,
      letterSpacing: r
    }), v, f) : Xr(S, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, b = i.length >= 2 ? ot(i[1].coordinate - i[0].coordinate) : 1, w = vA(a, b, p);
  return s === "equidistantPreserveStart" ? mA(b, w, y, i, o) : (s === "preserveStart" || s === "preserveStartEnd" ? h = OA(b, w, y, i, o, s === "preserveStartEnd") : h = xA(b, w, y, i, o), h.filter((x) => x.isShow));
}
var EA = (e) => {
  var {
    ticks: t,
    label: r,
    labelGapWithTick: n = 5,
    // Default gap between label and tick
    tickSize: i = 0,
    tickMargin: a = 0
  } = e, o = 0;
  if (t) {
    t.forEach((l) => {
      if (l) {
        var f = l.getBoundingClientRect();
        f.width > o && (o = f.width);
      }
    });
    var u = r ? r.getBoundingClientRect().width : 0, s = i + a, c = o + s + u + (r ? n : 0);
    return Math.round(c);
  }
  return 0;
}, _A = ["axisLine", "width", "height", "className", "hide", "ticks"], SA = ["viewBox"], AA = ["viewBox"];
function xo(e, t) {
  if (e == null) return {};
  var r, n, i = PA(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function PA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function fr() {
  return fr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fr.apply(null, arguments);
}
function Rl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rl(Object(r), !0).forEach(function(n) {
      TA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TA(e, t, r) {
  return (t = CA(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CA(e) {
  var t = kA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function kA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Xu = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
};
function MA(e) {
  var {
    x: t,
    y: r,
    width: n,
    height: i,
    orientation: a,
    mirror: o,
    axisLine: u,
    otherSvgProps: s
  } = e;
  if (!u)
    return null;
  var c = Ee(Ee(Ee({}, s), Ie(u, !1)), {}, {
    fill: "none"
  });
  if (a === "top" || a === "bottom") {
    var l = +(a === "top" && !o || a === "bottom" && o);
    c = Ee(Ee({}, c), {}, {
      x1: t,
      y1: r + l * i,
      x2: t + n,
      y2: r + l * i
    });
  } else {
    var f = +(a === "left" && !o || a === "right" && o);
    c = Ee(Ee({}, c), {}, {
      x1: t + f * n,
      y1: r,
      x2: t + f * n,
      y2: r + i
    });
  }
  return /* @__PURE__ */ g.createElement("line", fr({}, c, {
    className: ye("recharts-cartesian-axis-line", Ci(u, "className"))
  }));
}
function DA(e, t, r, n, i, a, o, u, s) {
  var c, l, f, d, h, p, v = u ? -1 : 1, y = e.tickSize || o, b = H(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (a) {
    case "top":
      c = l = e.coordinate, d = r + +!u * i, f = d - v * y, p = f - v * s, h = b;
      break;
    case "left":
      f = d = e.coordinate, l = t + +!u * n, c = l - v * y, h = c - v * s, p = b;
      break;
    case "right":
      f = d = e.coordinate, l = t + +u * n, c = l + v * y, h = c + v * s, p = b;
      break;
    default:
      c = l = e.coordinate, d = r + +u * i, f = d + v * y, p = f + v * s, h = b;
      break;
  }
  return {
    line: {
      x1: c,
      y1: f,
      x2: l,
      y2: d
    },
    tick: {
      x: h,
      y: p
    }
  };
}
function NA(e, t) {
  switch (e) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function jA(e, t) {
  switch (e) {
    case "left":
    case "right":
      return "middle";
    case "top":
      return t ? "start" : "end";
    default:
      return t ? "end" : "start";
  }
}
function IA(e) {
  var {
    option: t,
    tickProps: r,
    value: n
  } = e, i, a = ye(r.className, "recharts-cartesian-axis-tick-value");
  if (/* @__PURE__ */ g.isValidElement(t))
    i = /* @__PURE__ */ g.cloneElement(t, Ee(Ee({}, r), {}, {
      className: a
    }));
  else if (typeof t == "function")
    i = t(Ee(Ee({}, r), {}, {
      className: a
    }));
  else {
    var o = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (o = ye(o, t == null ? void 0 : t.className)), i = /* @__PURE__ */ g.createElement(Hu, fr({}, r, {
      className: o
    }), n);
  }
  return i;
}
function RA(e) {
  var {
    ticks: t = [],
    tick: r,
    tickLine: n,
    stroke: i,
    tickFormatter: a,
    unit: o,
    padding: u,
    tickTextProps: s,
    orientation: c,
    mirror: l,
    x: f,
    y: d,
    width: h,
    height: p,
    tickSize: v,
    tickMargin: y,
    fontSize: b,
    letterSpacing: w,
    getTicksConfig: x,
    events: A
  } = e, S = Gu(Ee(Ee({}, x), {}, {
    ticks: t
  }), b, w), _ = NA(c, l), P = jA(c, l), N = hr(x), j = Ie(r, !1), B = Ee(Ee({}, N), {}, {
    fill: "none"
  }, Ie(n, !1)), R = S.map((k, K) => {
    var {
      line: W,
      tick: te
    } = DA(k, f, d, h, p, c, v, l, y), re = Ee(Ee(Ee(Ee({
      // @ts-expect-error textAnchor from axisProps is typed as `string` but Text wants type `TextAnchor`
      textAnchor: _,
      verticalAnchor: P
    }, N), {}, {
      stroke: "none",
      fill: i
    }, j), te), {}, {
      index: K,
      payload: k,
      visibleTicksCount: S.length,
      tickFormatter: a,
      padding: u
    }, s);
    return /* @__PURE__ */ g.createElement(Tr, fr({
      className: "recharts-cartesian-axis-tick",
      key: "tick-".concat(k.value, "-").concat(k.coordinate, "-").concat(k.tickCoord)
    }, by(A, k, K)), n && // @ts-expect-error recharts scale is not compatible with SVG scale
    /* @__PURE__ */ g.createElement("line", fr({}, B, W, {
      className: ye("recharts-cartesian-axis-tick-line", Ci(n, "className"))
    })), r && /* @__PURE__ */ g.createElement(IA, {
      option: r,
      tickProps: re,
      value: "".concat(typeof a == "function" ? a(k.value, K) : k.value).concat(o || "")
    }));
  });
  return R.length > 0 ? /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-axis-ticks"
  }, R) : null;
}
var $A = /* @__PURE__ */ g.forwardRef((e, t) => {
  var {
    axisLine: r,
    width: n,
    height: i,
    className: a,
    hide: o,
    ticks: u
  } = e, s = xo(e, _A), [c, l] = g.useState(""), [f, d] = g.useState(""), h = g.useRef([]);
  g.useImperativeHandle(t, () => ({
    getCalculatedWidth: () => {
      var v;
      return EA({
        ticks: h.current,
        label: (v = e.labelRef) === null || v === void 0 ? void 0 : v.current,
        labelGapWithTick: 5,
        tickSize: e.tickSize,
        tickMargin: e.tickMargin
      });
    }
  }));
  var p = g.useCallback((v) => {
    if (v) {
      var y = v.getElementsByClassName("recharts-cartesian-axis-tick-value");
      h.current = Array.from(y);
      var b = y[0];
      if (b) {
        var w = window.getComputedStyle(b), x = w.fontSize, A = w.letterSpacing;
        (x !== c || A !== f) && (l(x), d(A));
      }
    }
  }, [c, f]);
  return o || n != null && n <= 0 || i != null && i <= 0 ? null : /* @__PURE__ */ g.createElement(Tr, {
    className: ye("recharts-cartesian-axis", a),
    ref: p
  }, /* @__PURE__ */ g.createElement(MA, {
    x: e.x,
    y: e.y,
    width: n,
    height: i,
    orientation: e.orientation,
    mirror: e.mirror,
    axisLine: r,
    otherSvgProps: hr(e)
  }), /* @__PURE__ */ g.createElement(RA, {
    ticks: u,
    tick: e.tick,
    tickLine: e.tickLine,
    stroke: e.stroke,
    tickFormatter: e.tickFormatter,
    unit: e.unit,
    padding: e.padding,
    tickTextProps: e.tickTextProps,
    orientation: e.orientation,
    mirror: e.mirror,
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    tickSize: e.tickSize,
    tickMargin: e.tickMargin,
    fontSize: c,
    letterSpacing: f,
    getTicksConfig: e,
    events: s
  }), /* @__PURE__ */ g.createElement(X_, {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }, /* @__PURE__ */ g.createElement(oS, {
    label: e.label
  }), e.children));
}), LA = /* @__PURE__ */ g.memo($A, (e, t) => {
  var {
    viewBox: r
  } = e, n = xo(e, SA), {
    viewBox: i
  } = t, a = xo(t, AA);
  return Oi(r, i) && Oi(n, a);
}), wv = /* @__PURE__ */ g.forwardRef((e, t) => {
  var r = vt(e, Xu);
  return /* @__PURE__ */ g.createElement(LA, fr({}, r, {
    ref: t
  }));
});
wv.displayName = "CartesianAxis";
var BA = ["x1", "y1", "x2", "y2", "key"], zA = ["offset"], UA = ["xAxisId", "yAxisId"], KA = ["xAxisId", "yAxisId"];
function $l(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $l(Object(r), !0).forEach(function(n) {
      FA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $l(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FA(e, t, r) {
  return (t = WA(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WA(e) {
  var t = VA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rr() {
  return rr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rr.apply(null, arguments);
}
function _i(e, t) {
  if (e == null) return {};
  var r, n, i = HA(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function HA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var qA = (e) => {
  var {
    fill: t
  } = e;
  if (!t || t === "none")
    return null;
  var {
    fillOpacity: r,
    x: n,
    y: i,
    width: a,
    height: o,
    ry: u
  } = e;
  return /* @__PURE__ */ g.createElement("rect", {
    x: n,
    y: i,
    ry: u,
    width: a,
    height: o,
    stroke: "none",
    fill: t,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg"
  });
};
function xv(e, t) {
  var r;
  if (/* @__PURE__ */ g.isValidElement(e))
    r = /* @__PURE__ */ g.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    var {
      x1: n,
      y1: i,
      x2: a,
      y2: o,
      key: u
    } = t, s = _i(t, BA), c = hr(s), {
      offset: l
    } = c, f = _i(c, zA);
    r = /* @__PURE__ */ g.createElement("line", rr({}, f, {
      x1: n,
      y1: i,
      x2: a,
      y2: o,
      fill: "none",
      key: u
    }));
  }
  return r;
}
function YA(e) {
  var {
    x: t,
    width: r,
    horizontal: n = !0,
    horizontalPoints: i
  } = e;
  if (!n || !i || !i.length)
    return null;
  var {
    xAxisId: a,
    yAxisId: o
  } = e, u = _i(e, UA), s = i.map((c, l) => {
    var f = Ue(Ue({}, u), {}, {
      x1: t,
      y1: c,
      x2: t + r,
      y2: c,
      key: "line-".concat(l),
      index: l
    });
    return xv(n, f);
  });
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, s);
}
function GA(e) {
  var {
    y: t,
    height: r,
    vertical: n = !0,
    verticalPoints: i
  } = e;
  if (!n || !i || !i.length)
    return null;
  var {
    xAxisId: a,
    yAxisId: o
  } = e, u = _i(e, KA), s = i.map((c, l) => {
    var f = Ue(Ue({}, u), {}, {
      x1: c,
      y1: t,
      x2: c,
      y2: t + r,
      key: "line-".concat(l),
      index: l
    });
    return xv(n, f);
  });
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, s);
}
function XA(e) {
  var {
    horizontalFill: t,
    fillOpacity: r,
    x: n,
    y: i,
    width: a,
    height: o,
    horizontalPoints: u,
    horizontal: s = !0
  } = e;
  if (!s || !t || !t.length)
    return null;
  var c = u.map((f) => Math.round(f + i - i)).sort((f, d) => f - d);
  i !== c[0] && c.unshift(0);
  var l = c.map((f, d) => {
    var h = !c[d + 1], p = h ? i + o - f : c[d + 1] - f;
    if (p <= 0)
      return null;
    var v = d % t.length;
    return /* @__PURE__ */ g.createElement("rect", {
      key: "react-".concat(d),
      y: f,
      x: n,
      height: p,
      width: a,
      stroke: "none",
      fill: t[v],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, l);
}
function ZA(e) {
  var {
    vertical: t = !0,
    verticalFill: r,
    fillOpacity: n,
    x: i,
    y: a,
    width: o,
    height: u,
    verticalPoints: s
  } = e;
  if (!t || !r || !r.length)
    return null;
  var c = s.map((f) => Math.round(f + i - i)).sort((f, d) => f - d);
  i !== c[0] && c.unshift(0);
  var l = c.map((f, d) => {
    var h = !c[d + 1], p = h ? i + o - f : c[d + 1] - f;
    if (p <= 0)
      return null;
    var v = d % r.length;
    return /* @__PURE__ */ g.createElement("rect", {
      key: "react-".concat(d),
      x: f,
      y: a,
      width: p,
      height: u,
      stroke: "none",
      fill: r[v],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, l);
}
var QA = (e, t) => {
  var {
    xAxis: r,
    width: n,
    height: i,
    offset: a
  } = e;
  return vd(Gu(Ue(Ue(Ue({}, Xu), r), {}, {
    ticks: yd(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), a.left, a.left + a.width, t);
}, JA = (e, t) => {
  var {
    yAxis: r,
    width: n,
    height: i,
    offset: a
  } = e;
  return vd(Gu(Ue(Ue(Ue({}, Xu), r), {}, {
    ticks: yd(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), a.top, a.top + a.height, t);
}, eP = {
  horizontal: !0,
  vertical: !0,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: [],
  xAxisId: 0,
  yAxisId: 0
};
function Ov(e) {
  var t = wd(), r = xd(), n = bd(), i = Ue(Ue({}, vt(e, eP)), {}, {
    x: H(e.x) ? e.x : n.left,
    y: H(e.y) ? e.y : n.top,
    width: H(e.width) ? e.width : n.width,
    height: H(e.height) ? e.height : n.height
  }), {
    xAxisId: a,
    yAxisId: o,
    x: u,
    y: s,
    width: c,
    height: l,
    syncWithTicks: f,
    horizontalValues: d,
    verticalValues: h
  } = i, p = pt(), v = q((j) => il(j, "xAxis", a, p)), y = q((j) => il(j, "yAxis", o, p));
  if (!H(c) || c <= 0 || !H(l) || l <= 0 || !H(u) || u !== +u || !H(s) || s !== +s)
    return null;
  var b = i.verticalCoordinatesGenerator || QA, w = i.horizontalCoordinatesGenerator || JA, {
    horizontalPoints: x,
    verticalPoints: A
  } = i;
  if ((!x || !x.length) && typeof w == "function") {
    var S = d && d.length, _ = w({
      yAxis: y ? Ue(Ue({}, y), {}, {
        ticks: S ? d : y.ticks
      }) : void 0,
      width: t,
      height: r,
      offset: n
    }, S ? !0 : f);
    Gr(Array.isArray(_), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof _, "]")), Array.isArray(_) && (x = _);
  }
  if ((!A || !A.length) && typeof b == "function") {
    var P = h && h.length, N = b({
      xAxis: v ? Ue(Ue({}, v), {}, {
        ticks: P ? h : v.ticks
      }) : void 0,
      width: t,
      height: r,
      offset: n
    }, P ? !0 : f);
    Gr(Array.isArray(N), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof N, "]")), Array.isArray(N) && (A = N);
  }
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ g.createElement(qA, {
    fill: i.fill,
    fillOpacity: i.fillOpacity,
    x: i.x,
    y: i.y,
    width: i.width,
    height: i.height,
    ry: i.ry
  }), /* @__PURE__ */ g.createElement(XA, rr({}, i, {
    horizontalPoints: x
  })), /* @__PURE__ */ g.createElement(ZA, rr({}, i, {
    verticalPoints: A
  })), /* @__PURE__ */ g.createElement(YA, rr({}, i, {
    offset: n,
    horizontalPoints: x,
    xAxis: v,
    yAxis: y
  })), /* @__PURE__ */ g.createElement(GA, rr({}, i, {
    offset: n,
    verticalPoints: A,
    xAxis: v,
    yAxis: y
  })));
}
Ov.displayName = "CartesianGrid";
var Ev = (e, t, r, n) => wp(e, "xAxis", t, n), _v = (e, t, r, n) => bp(e, "xAxis", t, n), Sv = (e, t, r, n) => wp(e, "yAxis", r, n), Av = (e, t, r, n) => bp(e, "yAxis", r, n), tP = C([pe, Ev, Sv, _v, Av], (e, t, r, n, i) => Vt(e, "xAxis") ? Za(t, n, !1) : Za(r, i, !1)), rP = (e, t, r, n, i) => i;
function nP(e) {
  return e.type === "line";
}
var iP = C([Fh, rP], (e, t) => e.filter(nP).find((r) => r.id === t)), aP = C([pe, Ev, Sv, _v, Av, iP, tP, bu], (e, t, r, n, i, a, o, u) => {
  var {
    chartData: s,
    dataStartIndex: c,
    dataEndIndex: l
  } = u;
  if (!(a == null || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || o == null)) {
    var {
      dataKey: f,
      data: d
    } = a, h;
    if (d != null && d.length > 0 ? h = d : h = s == null ? void 0 : s.slice(c, l + 1), h != null)
      return PP({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: i,
        dataKey: f,
        bandSize: o,
        displayedData: h
      });
  }
}), oP = ["id"], uP = ["type", "layout", "connectNulls", "needClip"], cP = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function Ll(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ll(Object(r), !0).forEach(function(n) {
      sP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ll(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sP(e, t, r) {
  return (t = lP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lP(e) {
  var t = fP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zu(e, t) {
  if (e == null) return {};
  var r, n, i = dP(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function dP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function dr() {
  return dr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, dr.apply(null, arguments);
}
var hP = (e) => {
  var {
    dataKey: t,
    name: r,
    stroke: n,
    legendType: i,
    hide: a
  } = e;
  return [{
    inactive: a,
    dataKey: t,
    type: i,
    color: n,
    value: md(r, t),
    payload: e
  }];
};
function pP(e) {
  var {
    dataKey: t,
    data: r,
    stroke: n,
    strokeWidth: i,
    fill: a,
    name: o,
    hide: u,
    unit: s
  } = e;
  return {
    dataDefinedOnItem: r,
    positions: void 0,
    settings: {
      stroke: n,
      strokeWidth: i,
      fill: a,
      dataKey: t,
      nameKey: void 0,
      name: md(o, t),
      hide: u,
      type: e.tooltipType,
      color: e.stroke,
      unit: s
    }
  };
}
var Pv = (e, t) => "".concat(t, "px ").concat(e - t, "px");
function vP(e, t) {
  for (var r = e.length % 2 !== 0 ? [...e, 0] : e, n = [], i = 0; i < t; ++i)
    n = [...n, ...r];
  return n;
}
var yP = (e, t, r) => {
  var n = r.reduce((f, d) => f + d);
  if (!n)
    return Pv(t, e);
  for (var i = Math.floor(e / n), a = e % n, o = t - e, u = [], s = 0, c = 0; s < r.length; c += r[s], ++s)
    if (c + r[s] > a) {
      u = [...r.slice(0, s), a - c];
      break;
    }
  var l = u.length % 2 === 0 ? [0, o] : [o];
  return [...vP(r, i), ...u, ...l].map((f) => "".concat(f, "px")).join(", ");
};
function mP(e, t) {
  var r;
  if (/* @__PURE__ */ g.isValidElement(e))
    r = /* @__PURE__ */ g.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    var n = ye("recharts-line-dot", typeof e != "boolean" ? e.className : "");
    r = /* @__PURE__ */ g.createElement(fv, dr({}, t, {
      className: n
    }));
  }
  return r;
}
function gP(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function bP(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    dot: i,
    dataKey: a,
    needClip: o
  } = n;
  if (!gP(r, i))
    return null;
  var {
    id: u
  } = n, s = Zu(n, oP), c = Ql(i), l = hr(s), f = Ie(i, !0), d = r.map((p, v) => {
    var y = Qe(Qe(Qe({
      key: "dot-".concat(v),
      r: 3
    }, l), f), {}, {
      index: v,
      cx: p.x,
      cy: p.y,
      dataKey: a,
      value: p.value,
      payload: p.payload,
      points: r
    });
    return mP(i, y);
  }), h = {
    clipPath: o ? "url(#clipPath-".concat(c ? "" : "dots-").concat(t, ")") : void 0
  };
  return /* @__PURE__ */ g.createElement(Tr, dr({
    className: "recharts-line-dots",
    key: "dots"
  }, h), d);
}
function wP(e) {
  var {
    showLabels: t,
    children: r,
    points: n
  } = e, i = g.useMemo(() => n == null ? void 0 : n.map((a) => {
    var o = {
      x: a.x,
      y: a.y,
      width: 0,
      height: 0
    };
    return Qe(Qe({}, o), {}, {
      value: a.value,
      payload: a.payload,
      viewBox: o,
      /*
       * Line is not passing parentViewBox to the LabelList so the labels can escape - looks like a bug, should we pass parentViewBox?
       * Or should this just be the root chart viewBox?
       */
      parentViewBox: void 0,
      fill: void 0
    });
  }), [n]);
  return /* @__PURE__ */ g.createElement(hS, {
    value: t ? i : null
  }, r);
}
function Bl(e) {
  var {
    clipPathId: t,
    pathRef: r,
    points: n,
    strokeDasharray: i,
    props: a
  } = e, {
    type: o,
    layout: u,
    connectNulls: s,
    needClip: c
  } = a, l = Zu(a, uP), f = Qe(Qe({}, Ie(l, !0)), {}, {
    fill: "none",
    className: "recharts-line-curve",
    clipPath: c ? "url(#clipPath-".concat(t, ")") : void 0,
    points: n,
    type: o,
    layout: u,
    connectNulls: s,
    strokeDasharray: i ?? a.strokeDasharray
  });
  return /* @__PURE__ */ g.createElement(g.Fragment, null, (n == null ? void 0 : n.length) > 1 && /* @__PURE__ */ g.createElement(_d, dr({}, f, {
    pathRef: r
  })), /* @__PURE__ */ g.createElement(bP, {
    points: n,
    clipPathId: t,
    props: a
  }));
}
function xP(e) {
  try {
    return e && e.getTotalLength && e.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function OP(e) {
  var {
    clipPathId: t,
    props: r,
    pathRef: n,
    previousPointsRef: i,
    longestAnimatedLengthRef: a
  } = e, {
    points: o,
    strokeDasharray: u,
    isAnimationActive: s,
    animationBegin: c,
    animationDuration: l,
    animationEasing: f,
    animateNewValues: d,
    width: h,
    height: p,
    onAnimationEnd: v,
    onAnimationStart: y
  } = r, b = i.current, w = Cd(r, "recharts-line-"), [x, A] = g.useState(!1), S = !x, _ = g.useCallback(() => {
    typeof v == "function" && v(), A(!1);
  }, [v]), P = g.useCallback(() => {
    typeof y == "function" && y(), A(!0);
  }, [y]), N = xP(n.current), j = a.current;
  return /* @__PURE__ */ g.createElement(wP, {
    points: o,
    showLabels: S
  }, r.children, /* @__PURE__ */ g.createElement(Td, {
    animationId: w,
    begin: c,
    duration: l,
    isActive: s,
    easing: f,
    onAnimationEnd: _,
    onAnimationStart: P,
    key: w
  }, (B) => {
    var R = wt(j, N + j, B), k = Math.min(R, N), K;
    if (s)
      if (u) {
        var W = "".concat(u).split(/[,\s]+/gim).map((X) => parseFloat(X));
        K = yP(k, N, W);
      } else
        K = Pv(N, k);
    else
      K = u == null ? void 0 : String(u);
    if (b) {
      var te = b.length / o.length, re = B === 1 ? o : o.map((X, ge) => {
        var ue = Math.floor(ge * te);
        if (b[ue]) {
          var We = b[ue];
          return Qe(Qe({}, X), {}, {
            x: wt(We.x, X.x, B),
            y: wt(We.y, X.y, B)
          });
        }
        return d ? Qe(Qe({}, X), {}, {
          x: wt(h * 2, X.x, B),
          y: wt(p / 2, X.y, B)
        }) : Qe(Qe({}, X), {}, {
          x: X.x,
          y: X.y
        });
      });
      return i.current = re, /* @__PURE__ */ g.createElement(Bl, {
        props: r,
        points: re,
        clipPathId: t,
        pathRef: n,
        strokeDasharray: K
      });
    }
    return B > 0 && N > 0 && (i.current = o, a.current = k), /* @__PURE__ */ g.createElement(Bl, {
      props: r,
      points: o,
      clipPathId: t,
      pathRef: n,
      strokeDasharray: K
    });
  }), /* @__PURE__ */ g.createElement(yS, {
    label: r.label
  }));
}
function EP(e) {
  var {
    clipPathId: t,
    props: r
  } = e, n = g.useRef(null), i = g.useRef(0), a = g.useRef(null);
  return /* @__PURE__ */ g.createElement(OP, {
    props: r,
    clipPathId: t,
    previousPointsRef: n,
    longestAnimatedLengthRef: i,
    pathRef: a
  });
}
var _P = (e, t) => ({
  x: e.x,
  y: e.y,
  value: e.value,
  // @ts-expect-error getValueByDataKey does not validate the output type
  errorVal: Fe(e.payload, t)
});
class SP extends g.Component {
  render() {
    var t, {
      hide: r,
      dot: n,
      points: i,
      className: a,
      xAxisId: o,
      yAxisId: u,
      top: s,
      left: c,
      width: l,
      height: f,
      id: d,
      needClip: h
    } = this.props;
    if (r)
      return null;
    var p = ye("recharts-line", a), v = d, {
      r: y = 3,
      strokeWidth: b = 2
    } = (t = Ie(n, !1)) !== null && t !== void 0 ? t : {
      r: 3,
      strokeWidth: 2
    }, w = Ql(n), x = y * 2 + b;
    return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Tr, {
      className: p
    }, h && /* @__PURE__ */ g.createElement("defs", null, /* @__PURE__ */ g.createElement(rA, {
      clipPathId: v,
      xAxisId: o,
      yAxisId: u
    }), !w && /* @__PURE__ */ g.createElement("clipPath", {
      id: "clipPath-dots-".concat(v)
    }, /* @__PURE__ */ g.createElement("rect", {
      x: c - x / 2,
      y: s - x / 2,
      width: l + x,
      height: f + x
    }))), /* @__PURE__ */ g.createElement(tA, {
      xAxisId: o,
      yAxisId: u,
      data: i,
      dataPointFormatter: _P,
      errorBarOffset: 0
    }, /* @__PURE__ */ g.createElement(EP, {
      props: this.props,
      clipPathId: v
    }))), /* @__PURE__ */ g.createElement(qS, {
      activeDot: this.props.activeDot,
      points: i,
      mainColor: this.props.stroke,
      itemDataKey: this.props.dataKey
    }));
  }
}
var Tv = {
  activeDot: !0,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !0,
  fill: "#fff",
  hide: !1,
  isAnimationActive: !Cr.isSsr,
  label: !1,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  xAxisId: 0,
  yAxisId: 0
};
function AP(e) {
  var t = vt(e, Tv), {
    activeDot: r,
    animateNewValues: n,
    animationBegin: i,
    animationDuration: a,
    animationEasing: o,
    connectNulls: u,
    dot: s,
    hide: c,
    isAnimationActive: l,
    label: f,
    legendType: d,
    xAxisId: h,
    yAxisId: p,
    id: v
  } = t, y = Zu(t, cP), {
    needClip: b
  } = yv(h, p), w = qu(), x = Go(), A = pt(), S = q((B) => aP(B, h, p, A, v));
  if (x !== "horizontal" && x !== "vertical" || S == null || w == null)
    return null;
  var {
    height: _,
    width: P,
    x: N,
    y: j
  } = w;
  return /* @__PURE__ */ g.createElement(SP, dr({}, y, {
    id: v,
    connectNulls: u,
    dot: s,
    activeDot: r,
    animateNewValues: n,
    animationBegin: i,
    animationDuration: a,
    animationEasing: o,
    isAnimationActive: l,
    hide: c,
    label: f,
    legendType: d,
    xAxisId: h,
    yAxisId: p,
    points: S,
    layout: x,
    height: _,
    width: P,
    left: N,
    top: j,
    needClip: b
  }));
}
function PP(e) {
  var {
    layout: t,
    xAxis: r,
    yAxis: n,
    xAxisTicks: i,
    yAxisTicks: a,
    dataKey: o,
    bandSize: u,
    displayedData: s
  } = e;
  return s.map((c, l) => {
    var f = Fe(c, o);
    if (t === "horizontal") {
      var d = qc({
        axis: r,
        ticks: i,
        bandSize: u,
        entry: c,
        index: l
      }), h = Pe(f) ? null : n.scale(f);
      return {
        x: d,
        y: h,
        value: f,
        payload: c
      };
    }
    var p = Pe(f) ? null : r.scale(f), v = qc({
      axis: n,
      ticks: a,
      bandSize: u,
      entry: c,
      index: l
    });
    return p == null || v == null ? null : {
      x: p,
      y: v,
      value: f,
      payload: c
    };
  }).filter(Boolean);
}
function TP(e) {
  var t = vt(e, Tv), r = pt();
  return /* @__PURE__ */ g.createElement(AS, {
    id: t.id,
    type: "line"
  }, (n) => /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(xS, {
    legendPayload: hP(t)
  }), /* @__PURE__ */ g.createElement(bS, {
    fn: pP,
    args: t
  }), /* @__PURE__ */ g.createElement(DS, {
    type: "line",
    id: n,
    data: t.data,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    hide: t.hide,
    isPanorama: r
  }), /* @__PURE__ */ g.createElement(AP, dr({}, t, {
    id: n
  }))));
}
var Cv = /* @__PURE__ */ g.memo(TP);
Cv.displayName = "Line";
var CP = ["dangerouslySetInnerHTML", "ticks"], kP = ["id"], MP = ["domain"], DP = ["domain"];
function Oo() {
  return Oo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Oo.apply(null, arguments);
}
function Si(e, t) {
  if (e == null) return {};
  var r, n, i = NP(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function NP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function jP(e) {
  var t = rt();
  return g.useEffect(() => (t($S(e)), () => {
    t(LS(e));
  }), [e, t]), null;
}
var IP = (e) => {
  var {
    xAxisId: t,
    className: r
  } = e, n = q(x0), i = pt(), a = "xAxis", o = q((y) => On(y, a, t, i)), u = q((y) => SE(y, a, t, i)), s = q((y) => yE(y, t)), c = q((y) => OE(y, t)), l = q((y) => Bh(y, t));
  if (s == null || c == null || l == null)
    return null;
  var {
    dangerouslySetInnerHTML: f,
    ticks: d
  } = e, h = Si(e, CP), {
    id: p
  } = l, v = Si(l, kP);
  return /* @__PURE__ */ g.createElement(wv, Oo({}, h, v, {
    scale: o,
    x: c.x,
    y: c.y,
    width: s.width,
    height: s.height,
    className: ye("recharts-".concat(a, " ").concat(a), r),
    viewBox: n,
    ticks: u
  }));
}, RP = {
  allowDataOverflow: Xe.allowDataOverflow,
  allowDecimals: Xe.allowDecimals,
  allowDuplicatedCategory: Xe.allowDuplicatedCategory,
  height: Xe.height,
  hide: !1,
  mirror: Xe.mirror,
  orientation: Xe.orientation,
  padding: Xe.padding,
  reversed: Xe.reversed,
  scale: Xe.scale,
  tickCount: Xe.tickCount,
  type: Xe.type,
  xAxisId: 0
}, $P = (e) => {
  var t, r, n, i, a, o = vt(e, RP);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(jP, {
    interval: (t = o.interval) !== null && t !== void 0 ? t : "preserveEnd",
    id: o.xAxisId,
    scale: o.scale,
    type: o.type,
    padding: o.padding,
    allowDataOverflow: o.allowDataOverflow,
    domain: o.domain,
    dataKey: o.dataKey,
    allowDuplicatedCategory: o.allowDuplicatedCategory,
    allowDecimals: o.allowDecimals,
    tickCount: o.tickCount,
    includeHidden: (r = o.includeHidden) !== null && r !== void 0 ? r : !1,
    reversed: o.reversed,
    ticks: o.ticks,
    height: o.height,
    orientation: o.orientation,
    mirror: o.mirror,
    hide: o.hide,
    unit: o.unit,
    name: o.name,
    angle: (n = o.angle) !== null && n !== void 0 ? n : 0,
    minTickGap: (i = o.minTickGap) !== null && i !== void 0 ? i : 5,
    tick: (a = o.tick) !== null && a !== void 0 ? a : !0,
    tickFormatter: o.tickFormatter
  }), /* @__PURE__ */ g.createElement(IP, o));
}, LP = (e, t) => {
  var {
    domain: r
  } = e, n = Si(e, MP), {
    domain: i
  } = t, a = Si(t, DP);
  return Oi(n, a) ? Array.isArray(r) && r.length === 2 && Array.isArray(i) && i.length === 2 ? r[0] === i[0] && r[1] === i[1] : Oi({
    domain: r
  }, {
    domain: i
  }) : !1;
}, kv = /* @__PURE__ */ g.memo($P, LP);
kv.displayName = "XAxis";
var ka = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zl;
function BP() {
  if (zl) return ka;
  zl = 1;
  var e = g;
  function t(s, c) {
    return s === c && (s !== 0 || 1 / s === 1 / c) || s !== s && c !== c;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, a = e.useEffect, o = e.useMemo, u = e.useDebugValue;
  return ka.useSyncExternalStoreWithSelector = function(s, c, l, f, d) {
    var h = i(null);
    if (h.current === null) {
      var p = { hasValue: !1, value: null };
      h.current = p;
    } else p = h.current;
    h = o(
      function() {
        function y(S) {
          if (!b) {
            if (b = !0, w = S, S = f(S), d !== void 0 && p.hasValue) {
              var _ = p.value;
              if (d(_, S))
                return x = _;
            }
            return x = S;
          }
          if (_ = x, r(w, S)) return _;
          var P = f(S);
          return d !== void 0 && d(_, P) ? (w = S, _) : (w = S, x = P);
        }
        var b = !1, w, x, A = l === void 0 ? null : l;
        return [
          function() {
            return y(c());
          },
          A === null ? void 0 : function() {
            return y(A());
          }
        ];
      },
      [c, l, f, d]
    );
    var v = n(s, h[0], h[1]);
    return a(
      function() {
        p.hasValue = !0, p.value = v;
      },
      [v]
    ), u(v), v;
  }, ka;
}
var Ma = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ul;
function zP() {
  return Ul || (Ul = 1, process.env.NODE_ENV !== "production" && function() {
    function e(s, c) {
      return s === c && (s !== 0 || 1 / s === 1 / c) || s !== s && c !== c;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = g, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, i = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
    Ma.useSyncExternalStoreWithSelector = function(s, c, l, f, d) {
      var h = i(null);
      if (h.current === null) {
        var p = { hasValue: !1, value: null };
        h.current = p;
      } else p = h.current;
      h = o(
        function() {
          function y(S) {
            if (!b) {
              if (b = !0, w = S, S = f(S), d !== void 0 && p.hasValue) {
                var _ = p.value;
                if (d(_, S))
                  return x = _;
              }
              return x = S;
            }
            if (_ = x, r(w, S))
              return _;
            var P = f(S);
            return d !== void 0 && d(_, P) ? (w = S, _) : (w = S, x = P);
          }
          var b = !1, w, x, A = l === void 0 ? null : l;
          return [
            function() {
              return y(c());
            },
            A === null ? void 0 : function() {
              return y(A());
            }
          ];
        },
        [c, l, f, d]
      );
      var v = n(s, h[0], h[1]);
      return a(
        function() {
          p.hasValue = !0, p.value = v;
        },
        [v]
      ), u(v), v;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ma;
}
process.env.NODE_ENV === "production" ? BP() : zP();
function UP(e) {
  e();
}
function KP() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      UP(() => {
        let r = e;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; )
        r.push(n), n = n.next;
      return r;
    },
    subscribe(r) {
      let n = !0;
      const i = t = {
        callback: r,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !n || e === null || (n = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var Kl = {
  notify() {
  },
  get: () => []
};
function FP(e, t) {
  let r, n = Kl, i = 0, a = !1;
  function o(v) {
    l();
    const y = n.subscribe(v);
    let b = !1;
    return () => {
      b || (b = !0, y(), f());
    };
  }
  function u() {
    n.notify();
  }
  function s() {
    p.onStateChange && p.onStateChange();
  }
  function c() {
    return a;
  }
  function l() {
    i++, r || (r = e.subscribe(s), n = KP());
  }
  function f() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = Kl);
  }
  function d() {
    a || (a = !0, l());
  }
  function h() {
    a && (a = !1, f());
  }
  const p = {
    addNestedSub: o,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: c,
    trySubscribe: d,
    tryUnsubscribe: h,
    getListeners: () => n
  };
  return p;
}
var WP = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", VP = /* @__PURE__ */ WP(), HP = () => typeof navigator < "u" && navigator.product === "ReactNative", qP = /* @__PURE__ */ HP(), YP = () => VP || qP ? g.useLayoutEffect : g.useEffect, GP = /* @__PURE__ */ YP(), Da = /* @__PURE__ */ Symbol.for("react-redux-context"), Na = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function XP() {
  if (!g.createContext) return {};
  const e = Na[Da] ?? (Na[Da] = /* @__PURE__ */ new Map());
  let t = e.get(g.createContext);
  return t || (t = g.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(g.createContext, t)), t;
}
var ZP = /* @__PURE__ */ XP();
function QP(e) {
  const { children: t, context: r, serverState: n, store: i } = e, a = g.useMemo(() => {
    const s = FP(i), c = {
      store: i,
      subscription: s,
      getServerState: n ? () => n : void 0
    };
    if (process.env.NODE_ENV === "production")
      return c;
    {
      const { identityFunctionCheck: l = "once", stabilityCheck: f = "once" } = e;
      return /* @__PURE__ */ Object.assign(c, {
        stabilityCheck: f,
        identityFunctionCheck: l
      });
    }
  }, [i, n]), o = g.useMemo(() => i.getState(), [i]);
  GP(() => {
    const { subscription: s } = a;
    return s.onStateChange = s.notifyNestedSubs, s.trySubscribe(), o !== i.getState() && s.notifyNestedSubs(), () => {
      s.tryUnsubscribe(), s.onStateChange = void 0;
    };
  }, [a, o]);
  const u = r || ZP;
  return /* @__PURE__ */ g.createElement(u.Provider, { value: a }, t);
}
var JP = QP, eT = (e, t) => t, Qu = C([eT, pe, Ih, Se, jp, Rt, C1, Re], j1), Ju = (e) => {
  var t = e.currentTarget.getBoundingClientRect(), r = t.width / e.currentTarget.offsetWidth, n = t.height / e.currentTarget.offsetHeight;
  return {
    /*
     * Here it's important to use:
     * - event.clientX and event.clientY to get the mouse position relative to the viewport, including scroll.
     * - pageX and pageY are not used because they are relative to the whole document, and ignore scroll.
     * - rect.left and rect.top are used to get the position of the chart relative to the viewport.
     * - offsetX and offsetY are not used because they are relative to the offset parent
     *  which may or may not be the same as the clientX and clientY, depending on the position of the chart in the DOM
     *  and surrounding element styles. CSS position: relative, absolute, fixed, will change the offset parent.
     * - scaleX and scaleY are necessary for when the chart element is scaled using CSS `transform: scale(N)`.
     */
    chartX: Math.round((e.clientX - t.left) / r),
    chartY: Math.round((e.clientY - t.top) / n)
  };
}, Mv = st("mouseClick"), Dv = dn();
Dv.startListening({
  actionCreator: Mv,
  effect: (e, t) => {
    var r = e.payload, n = Qu(t.getState(), Ju(r));
    (n == null ? void 0 : n.activeIndex) != null && t.dispatch(RE({
      activeIndex: n.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: n.activeCoordinate
    }));
  }
});
var Eo = st("mouseMove"), Nv = dn();
Nv.startListening({
  actionCreator: Eo,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), i = $u(n, n.tooltip.settings.shared), a = Qu(n, Ju(r));
    i === "axis" && ((a == null ? void 0 : a.activeIndex) != null ? t.dispatch(Pp({
      activeIndex: a.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: a.activeCoordinate
    })) : t.dispatch(Ap()));
  }
});
var Fl = {
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  barSize: void 0,
  className: void 0,
  maxBarSize: void 0,
  stackOffset: "none",
  syncId: void 0,
  syncMethod: "index"
}, jv = nt({
  name: "rootProps",
  initialState: Fl,
  reducers: {
    updateOptions: (e, t) => {
      var r;
      e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : Fl.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className;
    }
  }
}), tT = jv.reducer, {
  updateOptions: rT
} = jv.actions, Iv = nt({
  name: "polarOptions",
  initialState: null,
  reducers: {
    updatePolarOptions: (e, t) => t.payload
  }
}), {
  updatePolarOptions: dC
} = Iv.actions, nT = Iv.reducer, Rv = st("keyDown"), $v = st("focus"), ec = dn();
ec.startListening({
  actionCreator: Rv,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip, a = e.payload;
      if (!(a !== "ArrowRight" && a !== "ArrowLeft" && a !== "Enter")) {
        var o = Number(Lu(i, Rr(r))), u = Rt(r);
        if (a === "Enter") {
          var s = wi(r, "axis", "hover", String(i.index));
          t.dispatch(yo({
            active: !i.active,
            activeIndex: i.index,
            activeDataKey: i.dataKey,
            activeCoordinate: s
          }));
          return;
        }
        var c = TE(r), l = c === "left-to-right" ? 1 : -1, f = a === "ArrowRight" ? 1 : -1, d = o + f * l;
        if (!(u == null || d >= u.length || d < 0)) {
          var h = wi(r, "axis", "hover", String(d));
          t.dispatch(yo({
            active: !0,
            activeIndex: d.toString(),
            activeDataKey: void 0,
            activeCoordinate: h
          }));
        }
      }
    }
  }
});
ec.startListening({
  actionCreator: $v,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      if (!i.active && i.index == null) {
        var a = "0", o = wi(r, "axis", "hover", String(a));
        t.dispatch(yo({
          activeDataKey: void 0,
          active: !0,
          activeIndex: a,
          activeCoordinate: o
        }));
      }
    }
  }
});
var it = st("externalEvent"), Lv = dn();
Lv.startListening({
  actionCreator: it,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var r = t.getState(), n = {
        activeCoordinate: b1(r),
        activeDataKey: m1(r),
        activeIndex: un(r),
        activeLabel: $p(r),
        activeTooltipIndex: un(r),
        isTooltipActive: w1(r)
      };
      e.payload.handler(n, e.payload.reactEvent);
    }
  }
});
var iT = C([Ir], (e) => e.tooltipItemPayloads), aT = C([iT, En, (e, t, r) => t, (e, t, r) => r], (e, t, r, n) => {
  var i = e.find((u) => u.settings.dataKey === n);
  if (i != null) {
    var {
      positions: a
    } = i;
    if (a != null) {
      var o = t(a, r);
      return o;
    }
  }
}), Bv = st("touchMove"), zv = dn();
zv.startListening({
  actionCreator: Bv,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), i = $u(n, n.tooltip.settings.shared);
    if (i === "axis") {
      var a = Qu(n, Ju({
        clientX: r.touches[0].clientX,
        clientY: r.touches[0].clientY,
        currentTarget: r.currentTarget
      }));
      (a == null ? void 0 : a.activeIndex) != null && t.dispatch(Pp({
        activeIndex: a.activeIndex,
        activeDataKey: void 0,
        activeCoordinate: a.activeCoordinate
      }));
    } else if (i === "item") {
      var o, u = r.touches[0], s = document.elementFromPoint(u.clientX, u.clientY);
      if (!s || !s.getAttribute)
        return;
      var c = s.getAttribute(l0), l = (o = s.getAttribute(f0)) !== null && o !== void 0 ? o : void 0, f = aT(t.getState(), c, l);
      t.dispatch(IE({
        activeDataKey: l,
        activeIndex: c,
        activeCoordinate: f
      }));
    }
  }
});
var oT = Uf({
  brush: iA,
  cartesianAxis: BS,
  chartData: X1,
  errorBars: GS,
  graphicalItems: MS,
  layout: Rg,
  legend: P0,
  options: V1,
  polarAxis: gS,
  polarOptions: nT,
  referenceElements: fA,
  rootProps: tT,
  tooltip: $E
}), uT = function(t) {
  return ug({
    reducer: oT,
    // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
    preloadedState: t,
    // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
    middleware: (r) => r({
      serializableCheck: !1
    }).concat([Dv.middleware, Nv.middleware, ec.middleware, Lv.middleware, zv.middleware]),
    devTools: Cr.devToolsEnabled
  });
};
function cT(e) {
  var {
    preloadedState: t,
    children: r,
    reduxStoreName: n
  } = e, i = pt(), a = g.useRef(null);
  if (i)
    return r;
  a.current == null && (a.current = uT(t));
  var o = zo;
  return /* @__PURE__ */ g.createElement(JP, {
    context: o,
    store: a.current
  }, r);
}
function sT(e) {
  var {
    layout: t,
    width: r,
    height: n,
    margin: i
  } = e, a = rt(), o = pt();
  return g.useEffect(() => {
    o || (a(Ng(t)), a(jg({
      width: r,
      height: n
    })), a(Dg(i)));
  }, [a, o, t, r, n, i]), null;
}
function lT(e) {
  var t = rt();
  return g.useEffect(() => {
    t(rT(e));
  }, [t, e]), null;
}
var fT = ["children"];
function dT(e, t) {
  if (e == null) return {};
  var r, n, i = hT(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function hT(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Ai() {
  return Ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ai.apply(null, arguments);
}
var pT = {
  width: "100%",
  height: "100%"
}, vT = /* @__PURE__ */ g.forwardRef((e, t) => {
  var r = wd(), n = xd(), i = Ed();
  if (!ii(r) || !ii(n))
    return null;
  var {
    children: a,
    otherAttributes: o,
    title: u,
    desc: s
  } = e, c, l;
  return typeof o.tabIndex == "number" ? c = o.tabIndex : c = i ? 0 : void 0, typeof o.role == "string" ? l = o.role : l = i ? "application" : void 0, /* @__PURE__ */ g.createElement(Jl, Ai({}, o, {
    title: u,
    desc: s,
    role: l,
    tabIndex: c,
    width: r,
    height: n,
    style: pT,
    ref: t
  }), a);
}), yT = (e) => {
  var {
    children: t
  } = e, r = q(Ui);
  if (!r)
    return null;
  var {
    width: n,
    height: i,
    y: a,
    x: o
  } = r;
  return /* @__PURE__ */ g.createElement(Jl, {
    width: n,
    height: i,
    x: o,
    y: a
  }, t);
}, Wl = /* @__PURE__ */ g.forwardRef((e, t) => {
  var {
    children: r
  } = e, n = dT(e, fT), i = pt();
  return i ? /* @__PURE__ */ g.createElement(yT, null, r) : /* @__PURE__ */ g.createElement(vT, Ai({
    ref: t
  }, n), r);
});
function mT() {
  var e = rt(), [t, r] = g.useState(null), n = q(s0);
  return g.useEffect(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), a = i.width / t.offsetWidth;
      ht(a) && a !== n && e(Ig(a));
    }
  }, [t, e, n]), r;
}
function Vl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vl(Object(r), !0).forEach(function(n) {
      bT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bT(e, t, r) {
  return (t = wT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wT(e) {
  var t = xT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var OT = /* @__PURE__ */ g.forwardRef((e, t) => {
  var {
    children: r,
    className: n,
    height: i,
    onClick: a,
    onContextMenu: o,
    onDoubleClick: u,
    onMouseDown: s,
    onMouseEnter: c,
    onMouseLeave: l,
    onMouseMove: f,
    onMouseUp: d,
    onTouchEnd: h,
    onTouchMove: p,
    onTouchStart: v,
    style: y,
    width: b
  } = e, w = rt(), [x, A] = g.useState(null), [S, _] = g.useState(null);
  a_();
  var P = mT(), N = g.useCallback((T) => {
    P(T), typeof t == "function" && t(T), A(T), _(T);
  }, [P, t, A, _]), j = g.useCallback((T) => {
    w(Mv(T)), w(it({
      handler: a,
      reactEvent: T
    }));
  }, [w, a]), B = g.useCallback((T) => {
    w(Eo(T)), w(it({
      handler: c,
      reactEvent: T
    }));
  }, [w, c]), R = g.useCallback((T) => {
    w(Ap()), w(it({
      handler: l,
      reactEvent: T
    }));
  }, [w, l]), k = g.useCallback((T) => {
    w(Eo(T)), w(it({
      handler: f,
      reactEvent: T
    }));
  }, [w, f]), K = g.useCallback(() => {
    w($v());
  }, [w]), W = g.useCallback((T) => {
    w(Rv(T.key));
  }, [w]), te = g.useCallback((T) => {
    w(it({
      handler: o,
      reactEvent: T
    }));
  }, [w, o]), re = g.useCallback((T) => {
    w(it({
      handler: u,
      reactEvent: T
    }));
  }, [w, u]), X = g.useCallback((T) => {
    w(it({
      handler: s,
      reactEvent: T
    }));
  }, [w, s]), ge = g.useCallback((T) => {
    w(it({
      handler: d,
      reactEvent: T
    }));
  }, [w, d]), ue = g.useCallback((T) => {
    w(it({
      handler: v,
      reactEvent: T
    }));
  }, [w, v]), We = g.useCallback((T) => {
    w(Bv(T)), w(it({
      handler: p,
      reactEvent: T
    }));
  }, [w, p]), O = g.useCallback((T) => {
    w(it({
      handler: h,
      reactEvent: T
    }));
  }, [w, h]);
  return /* @__PURE__ */ g.createElement(Fp.Provider, {
    value: x
  }, /* @__PURE__ */ g.createElement(My.Provider, {
    value: S
  }, /* @__PURE__ */ g.createElement("div", {
    className: ye("recharts-wrapper", n),
    style: gT({
      position: "relative",
      cursor: "default",
      width: b,
      height: i
    }, y),
    onClick: j,
    onContextMenu: te,
    onDoubleClick: re,
    onFocus: K,
    onKeyDown: W,
    onMouseDown: X,
    onMouseEnter: B,
    onMouseLeave: R,
    onMouseMove: k,
    onMouseUp: ge,
    onTouchEnd: O,
    onTouchMove: We,
    onTouchStart: ue,
    ref: N
  }, r)));
}), ET = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function _T(e, t) {
  if (e == null) return {};
  var r, n, i = ST(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function ST(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var AT = /* @__PURE__ */ g.forwardRef((e, t) => {
  var {
    children: r,
    className: n,
    width: i,
    height: a,
    style: o,
    compact: u,
    title: s,
    desc: c
  } = e, l = _T(e, ET), f = hr(l);
  return u ? /* @__PURE__ */ g.createElement(Wl, {
    otherAttributes: f,
    title: s,
    desc: c
  }, r) : /* @__PURE__ */ g.createElement(OT, {
    className: n,
    style: o,
    width: i,
    height: a,
    onClick: e.onClick,
    onMouseLeave: e.onMouseLeave,
    onMouseEnter: e.onMouseEnter,
    onMouseMove: e.onMouseMove,
    onMouseDown: e.onMouseDown,
    onMouseUp: e.onMouseUp,
    onContextMenu: e.onContextMenu,
    onDoubleClick: e.onDoubleClick,
    onTouchStart: e.onTouchStart,
    onTouchMove: e.onTouchMove,
    onTouchEnd: e.onTouchEnd
  }, /* @__PURE__ */ g.createElement(Wl, {
    otherAttributes: f,
    title: s,
    desc: c,
    ref: t
  }, /* @__PURE__ */ g.createElement(hA, null, r)));
}), PT = ["width", "height"];
function _o() {
  return _o = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _o.apply(null, arguments);
}
function TT(e, t) {
  if (e == null) return {};
  var r, n, i = CT(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function CT(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var kT = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, MT = {
  accessibilityLayer: !0,
  layout: "horizontal",
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: kT,
  reverseStackOrder: !1,
  syncMethod: "index"
}, DT = /* @__PURE__ */ g.forwardRef(function(t, r) {
  var n, i = vt(t.categoricalChartProps, MT), {
    width: a,
    height: o
  } = i, u = TT(i, PT);
  if (!ii(a) || !ii(o))
    return null;
  var {
    chartName: s,
    defaultTooltipEventType: c,
    validateTooltipEventTypes: l,
    tooltipPayloadSearcher: f,
    categoricalChartProps: d
  } = t, h = {
    chartName: s,
    defaultTooltipEventType: c,
    validateTooltipEventTypes: l,
    tooltipPayloadSearcher: f,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ g.createElement(cT, {
    preloadedState: {
      options: h
    },
    reduxStoreName: (n = d.id) !== null && n !== void 0 ? n : s
  }, /* @__PURE__ */ g.createElement(nA, {
    chartData: d.data
  }), /* @__PURE__ */ g.createElement(sT, {
    width: a,
    height: o,
    layout: i.layout,
    margin: i.margin
  }), /* @__PURE__ */ g.createElement(lT, {
    accessibilityLayer: i.accessibilityLayer,
    barCategoryGap: i.barCategoryGap,
    maxBarSize: i.maxBarSize,
    stackOffset: i.stackOffset,
    barGap: i.barGap,
    barSize: i.barSize,
    syncId: i.syncId,
    syncMethod: i.syncMethod,
    className: i.className
  }), /* @__PURE__ */ g.createElement(AT, _o({}, u, {
    width: a,
    height: o,
    ref: r
  })));
}), NT = ["axis"], jT = /* @__PURE__ */ g.forwardRef((e, t) => /* @__PURE__ */ g.createElement(DT, {
  chartName: "LineChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: NT,
  tooltipPayloadSearcher: F1,
  categoricalChartProps: e,
  ref: t
}));
const Uv = et.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ et.createElement(
  "div",
  {
    ref: r,
    className: `rounded-lg border bg-card text-card-foreground shadow-sm ${e}`,
    ...t
  }
));
Uv.displayName = "Card";
const Kv = et.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ et.createElement("div", { ref: r, className: `flex flex-col space-y-1.5 p-6 ${e}`, ...t }));
Kv.displayName = "CardHeader";
const Fv = et.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ et.createElement(
  "h3",
  {
    ref: r,
    className: `text-2xl font-semibold leading-none tracking-tight ${e}`,
    ...t
  }
));
Fv.displayName = "CardTitle";
const Wv = et.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ et.createElement("p", { ref: r, className: `text-sm text-muted-foreground ${e}`, ...t }));
Wv.displayName = "CardDescription";
const Vv = et.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ et.createElement("div", { ref: r, className: `p-6 pt-0 ${e}`, ...t }));
Vv.displayName = "CardContent";
const Hv = et.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ et.createElement("div", { ref: r, className: `flex items-center p-6 pt-0 ${e}`, ...t }));
Hv.displayName = "CardFooter";
const IT = g.createContext({
  config: {}
}), qv = g.forwardRef(
  ({ id: e, className: t, children: r, config: n, ...i }, a) => {
    var u;
    const o = g.useId();
    return `${e || o.replace(/:/g, "")}`, /* @__PURE__ */ g.createElement(IT.Provider, { value: { config: n } }, /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: a,
        className: `flex aspect-auto h-80 w-full flex-col ${t}`,
        ...i
      },
      /* @__PURE__ */ g.createElement(w_, { width: "100%", height: "100%" }, g.cloneElement(r, {
        ...r.props,
        margin: {
          top: 5,
          right: 10,
          bottom: 5,
          left: 10,
          ...(u = r.props) == null ? void 0 : u.margin
        }
      }))
    ));
  }
);
qv.displayName = "ChartContainer";
const RT = h_, Yv = g.forwardRef(
  ({ active: e, payload: t, label: r, labelFormatter: n, formatter: i, color: a, nameKey: o, labelKey: u }, s) => !e || !t || t.length === 0 ? null : /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: s,
      className: "rounded-lg border border-border/50 bg-background px-2 py-1.5 text-sm shadow-md"
    },
    r && /* @__PURE__ */ g.createElement("div", { className: "text-muted-foreground" }, n ? n(r) : r),
    /* @__PURE__ */ g.createElement("div", { className: "grid grid-cols-2 gap-2" }, t.map((c, l) => /* @__PURE__ */ g.createElement(
      "div",
      {
        key: `${c.name}-${l}`,
        className: "flex w-24 flex-col"
      },
      /* @__PURE__ */ g.createElement(
        "span",
        {
          className: "text-xs",
          style: {
            color: c.color || "hsl(var(--foreground))"
          }
        },
        i ? i(c.value) : c.value
      )
    )))
  )
);
Yv.displayName = "ChartTooltipContent";
const $T = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 }
], LT = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)"
  }
};
function hC() {
  return /* @__PURE__ */ React.createElement(Uv, null, /* @__PURE__ */ React.createElement(Kv, null, /* @__PURE__ */ React.createElement(Fv, null, "Line Chart - Linear"), /* @__PURE__ */ React.createElement(Wv, null, "January - June 2024")), /* @__PURE__ */ React.createElement(Vv, null, /* @__PURE__ */ React.createElement(qv, { config: LT }, /* @__PURE__ */ React.createElement(
    jT,
    {
      accessibilityLayer: !0,
      data: $T,
      margin: {
        left: 12,
        right: 12
      }
    },
    /* @__PURE__ */ React.createElement(Ov, { vertical: !1 }),
    /* @__PURE__ */ React.createElement(
      kv,
      {
        dataKey: "month",
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: (e) => e.slice(0, 3)
      }
    ),
    /* @__PURE__ */ React.createElement(
      RT,
      {
        cursor: !1,
        content: /* @__PURE__ */ React.createElement(Yv, { hideLabel: !0 })
      }
    ),
    /* @__PURE__ */ React.createElement(
      Cv,
      {
        dataKey: "desktop",
        type: "linear",
        stroke: "var(--color-desktop)",
        strokeWidth: 2,
        dot: !1
      }
    )
  ))), /* @__PURE__ */ React.createElement(Hv, { className: "flex-col items-start gap-2 text-sm" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 leading-none font-medium" }, "Trending up by 5.2% this month ", /* @__PURE__ */ React.createElement(hy, { className: "h-4 w-4" })), /* @__PURE__ */ React.createElement("div", { className: "text-muted-foreground leading-none" }, "Showing total visitors for the last 6 months")));
}
export {
  hC as ChartLineLinear
};
