

// function res() {
// "use strict";
//
// function e(e, t) {
//     var r = Object.keys(e);
//     if (Object.getOwnPropertySymbols) {
//         var n = Object.getOwnPropertySymbols(e);
//         t && (n = n.filter((function(t) {
//             return Object.getOwnPropertyDescriptor(e, t).enumerable
//         }
//         ))),
//         r.push.apply(r, n)
//     }
//     return r
// }
// function t(t) {
//     for (var r = 1; r < arguments.length; r++) {
//         var n = null != arguments[r] ? arguments[r] : {};
//         r % 2 ? e(Object(n), !0).forEach((function(e) {
//             c(t, e, n[e])
//         }
//         )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach((function(e) {
//             Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
//         }
//         ))
//     }
//     return t
// }
// function r() {
//     r = function() {
//         return e
//     }
//     ;
//     var e = {}
//       , t = Object.prototype
//       , n = t.hasOwnProperty
//       , o = Object.defineProperty || function(e, t, r) {
//         e[t] = r.value
//     }
//       , i = "function" == typeof Symbol ? Symbol : {}
//       , a = i.iterator || "@@iterator"
//       , u = i.asyncIterator || "@@asyncIterator"
//       , s = i.toStringTag || "@@toStringTag";
//     function c(e, t, r) {
//         return Object.defineProperty(e, t, {
//             value: r,
//             enumerable: !0,
//             configurable: !0,
//             writable: !0
//         }),
//         e[t]
//     }
//     try {
//         c({}, "")
//     } catch (e) {
//         c = function(e, t, r) {
//             return e[t] = r
//         }
//     }
//     function l(e, t, r, n) {
//         var i = t && t.prototype instanceof p ? t : p
//           , a = Object.create(i.prototype)
//           , u = new T(n || []);
//         return o(a, "_invoke", {
//             value: _(e, r, u)
//         }),
//         a
//     }
//     function f(e, t, r) {
//         try {
//             return {
//                 type: "normal",
//                 arg: e.call(t, r)
//             }
//         } catch (e) {
//             return {
//                 type: "throw",
//                 arg: e
//             }
//         }
//     }
//     e.wrap = l;
//     var d = {};
//     function p() {}
//     function h() {}
//     function y() {}
//     var v = {};
//     c(v, a, (function() {
//         return this
//     }
//     ));
//     var b = Object.getPrototypeOf
//       , m = b && b(b(S([])));
//     m && m !== t && n.call(m, a) && (v = m);
//     var w = y.prototype = p.prototype = Object.create(v);
//     function g(e) {
//         ["next", "throw", "return"].forEach((function(t) {
//             c(e, t, (function(e) {
//                 return this._invoke(t, e)
//             }
//             ))
//         }
//         ))
//     }
//     function x(e, t) {
//         function r(o, i, a, u) {
//             var s = f(e[o], e, i);
//             if ("throw" !== s.type) {
//                 var c = s.arg
//                   , l = c.value;
//                 return l && "object" == typeof l && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
//                     r("next", e, a, u)
//                 }
//                 ), (function(e) {
//                     r("throw", e, a, u)
//                 }
//                 )) : t.resolve(l).then((function(e) {
//                     c.value = e,
//                     a(c)
//                 }
//                 ), (function(e) {
//                     return r("throw", e, a, u)
//                 }
//                 ))
//             }
//             u(s.arg)
//         }
//         var i;
//         o(this, "_invoke", {
//             value: function(e, n) {
//                 function o() {
//                     return new t((function(t, o) {
//                         r(e, n, t, o)
//                     }
//                     ))
//                 }
//                 return i = i ? i.then(o, o) : o()
//             }
//         })
//     }
//     function _(e, t, r) {
//         var n = "suspendedStart";
//         return function(o, i) {
//             if ("executing" === n)
//                 throw new Error("Generator is already running");
//             if ("completed" === n) {
//                 if ("throw" === o)
//                     throw i;
//                 return {
//                     value: void 0,
//                     done: !0
//                 }
//             }
//             for (r.method = o,
//             r.arg = i; ; ) {
//                 var a = r.delegate;
//                 if (a) {
//                     var u = k(a, r);
//                     if (u) {
//                         if (u === d)
//                             continue;
//                         return u
//                     }
//                 }
//                 if ("next" === r.method)
//                     r.sent = r._sent = r.arg;
//                 else if ("throw" === r.method) {
//                     if ("suspendedStart" === n)
//                         throw n = "completed",
//                         r.arg;
//                     r.dispatchException(r.arg)
//                 } else
//                     "return" === r.method && r.abrupt("return", r.arg);
//                 n = "executing";
//                 var s = f(e, t, r);
//                 if ("normal" === s.type) {
//                     if (n = r.done ? "completed" : "suspendedYield",
//                     s.arg === d)
//                         continue;
//                     return {
//                         value: s.arg,
//                         done: r.done
//                     }
//                 }
//                 "throw" === s.type && (n = "completed",
//                 r.method = "throw",
//                 r.arg = s.arg)
//             }
//         }
//     }
//     function k(e, t) {
//         var r = t.method
//           , n = e.iterator[r];
//         if (void 0 === n)
//             return t.delegate = null,
//             "throw" === r && e.iterator.return && (t.method = "return",
//             t.arg = void 0,
//             k(e, t),
//             "throw" === t.method) || "return" !== r && (t.method = "throw",
//             t.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
//             d;
//         var o = f(n, e.iterator, t.arg);
//         if ("throw" === o.type)
//             return t.method = "throw",
//             t.arg = o.arg,
//             t.delegate = null,
//             d;
//         var i = o.arg;
//         return i ? i.done ? (t[e.resultName] = i.value,
//         t.next = e.nextLoc,
//         "return" !== t.method && (t.method = "next",
//         t.arg = void 0),
//         t.delegate = null,
//         d) : i : (t.method = "throw",
//         t.arg = new TypeError("iterator result is not an object"),
//         t.delegate = null,
//         d)
//     }
//     function E(e) {
//         var t = {
//             tryLoc: e[0]
//         };
//         1 in e && (t.catchLoc = e[1]),
//         2 in e && (t.finallyLoc = e[2],
//         t.afterLoc = e[3]),
//         this.tryEntries.push(t)
//     }
//     function O(e) {
//         var t = e.completion || {};
//         t.type = "normal",
//         delete t.arg,
//         e.completion = t
//     }
//     function T(e) {
//         this.tryEntries = [{
//             tryLoc: "root"
//         }],
//         e.forEach(E, this),
//         this.reset(!0)
//     }
//     function S(e) {
//         if (e || "" === e) {
//             var t = e[a];
//             if (t)
//                 return t.call(e);
//             if ("function" == typeof e.next)
//                 return e;
//             if (!isNaN(e.length)) {
//                 var r = -1
//                   , o = function t() {
//                     for (; ++r < e.length; )
//                         if (n.call(e, r))
//                             return t.value = e[r],
//                             t.done = !1,
//                             t;
//                     return t.value = void 0,
//                     t.done = !0,
//                     t
//                 };
//                 return o.next = o
//             }
//         }
//         throw new TypeError(typeof e + " is not iterable")
//     }
//     return h.prototype = y,
//     o(w, "constructor", {
//         value: y,
//         configurable: !0
//     }),
//     o(y, "constructor", {
//         value: h,
//         configurable: !0
//     }),
//     h.displayName = c(y, s, "GeneratorFunction"),
//     e.isGeneratorFunction = function(e) {
//         var t = "function" == typeof e && e.constructor;
//         return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
//     }
//     ,
//     e.mark = function(e) {
//         return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
//         c(e, s, "GeneratorFunction")),
//         e.prototype = Object.create(w),
//         e
//     }
//     ,
//     e.awrap = function(e) {
//         return {
//             __await: e
//         }
//     }
//     ,
//     g(x.prototype),
//     c(x.prototype, u, (function() {
//         return this
//     }
//     )),
//     e.AsyncIterator = x,
//     e.async = function(t, r, n, o, i) {
//         void 0 === i && (i = Promise);
//         var a = new x(l(t, r, n, o),i);
//         return e.isGeneratorFunction(r) ? a : a.next().then((function(e) {
//             return e.done ? e.value : a.next()
//         }
//         ))
//     }
//     ,
//     g(w),
//     c(w, s, "Generator"),
//     c(w, a, (function() {
//         return this
//     }
//     )),
//     c(w, "toString", (function() {
//         return "[object Generator]"
//     }
//     )),
//     e.keys = function(e) {
//         var t = Object(e)
//           , r = [];
//         for (var n in t)
//             r.push(n);
//         return r.reverse(),
//         function e() {
//             for (; r.length; ) {
//                 var n = r.pop();
//                 if (n in t)
//                     return e.value = n,
//                     e.done = !1,
//                     e
//             }
//             return e.done = !0,
//             e
//         }
//     }
//     ,
//     e.values = S,
//     T.prototype = {
//         constructor: T,
//         reset: function(e) {
//             if (this.prev = 0,
//             this.next = 0,
//             this.sent = this._sent = void 0,
//             this.done = !1,
//             this.delegate = null,
//             this.method = "next",
//             this.arg = void 0,
//             this.tryEntries.forEach(O),
//             !e)
//                 for (var t in this)
//                     "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
//         },
//         stop: function() {
//             this.done = !0;
//             var e = this.tryEntries[0].completion;
//             if ("throw" === e.type)
//                 throw e.arg;
//             return this.rval
//         },
//         dispatchException: function(e) {
//             if (this.done)
//                 throw e;
//             var t = this;
//             function r(r, n) {
//                 return a.type = "throw",
//                 a.arg = e,
//                 t.next = r,
//                 n && (t.method = "next",
//                 t.arg = void 0),
//                 !!n
//             }
//             for (var o = this.tryEntries.length - 1; o >= 0; --o) {
//                 var i = this.tryEntries[o]
//                   , a = i.completion;
//                 if ("root" === i.tryLoc)
//                     return r("end");
//                 if (i.tryLoc <= this.prev) {
//                     var u = n.call(i, "catchLoc")
//                       , s = n.call(i, "finallyLoc");
//                     if (u && s) {
//                         if (this.prev < i.catchLoc)
//                             return r(i.catchLoc, !0);
//                         if (this.prev < i.finallyLoc)
//                             return r(i.finallyLoc)
//                     } else if (u) {
//                         if (this.prev < i.catchLoc)
//                             return r(i.catchLoc, !0)
//                     } else {
//                         if (!s)
//                             throw new Error("try statement without catch or finally");
//                         if (this.prev < i.finallyLoc)
//                             return r(i.finallyLoc)
//                     }
//                 }
//             }
//         },
//         abrupt: function(e, t) {
//             for (var r = this.tryEntries.length - 1; r >= 0; --r) {
//                 var o = this.tryEntries[r];
//                 if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
//                     var i = o;
//                     break
//                 }
//             }
//             i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
//             var a = i ? i.completion : {};
//             return a.type = e,
//             a.arg = t,
//             i ? (this.method = "next",
//             this.next = i.finallyLoc,
//             d) : this.complete(a)
//         },
//         complete: function(e, t) {
//             if ("throw" === e.type)
//                 throw e.arg;
//             return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
//             this.method = "return",
//             this.next = "end") : "normal" === e.type && t && (this.next = t),
//             d
//         },
//         finish: function(e) {
//             for (var t = this.tryEntries.length - 1; t >= 0; --t) {
//                 var r = this.tryEntries[t];
//                 if (r.finallyLoc === e)
//                     return this.complete(r.completion, r.afterLoc),
//                     O(r),
//                     d
//             }
//         },
//         catch: function(e) {
//             for (var t = this.tryEntries.length - 1; t >= 0; --t) {
//                 var r = this.tryEntries[t];
//                 if (r.tryLoc === e) {
//                     var n = r.completion;
//                     if ("throw" === n.type) {
//                         var o = n.arg;
//                         O(r)
//                     }
//                     return o
//                 }
//             }
//             throw new Error("illegal catch attempt")
//         },
//         delegateYield: function(e, t, r) {
//             return this.delegate = {
//                 iterator: S(e),
//                 resultName: t,
//                 nextLoc: r
//             },
//             "next" === this.method && (this.arg = void 0),
//             d
//         }
//     },
//     e
// }
// function n(e) {
//     return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
//         return typeof e
//     }
//     : function(e) {
//         return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//     }
//     ,
//     n(e)
// }
// function o(e, t, r, n, o, i, a) {
//     try {
//         var u = e[i](a)
//           , s = u.value
//     } catch (e) {
//         return void r(e)
//     }
//     u.done ? t(s) : Promise.resolve(s).then(n, o)
// }
// function i(e) {
//     return function() {
//         var t = this
//           , r = arguments;
//         return new Promise((function(n, i) {
//             var a = e.apply(t, r);
//             function u(e) {
//                 o(a, n, i, u, s, "next", e)
//             }
//             function s(e) {
//                 o(a, n, i, u, s, "throw", e)
//             }
//             u(void 0)
//         }
//         ))
//     }
// }
// function a(e, t) {
//     if (!(e instanceof t))
//         throw new TypeError("Cannot call a class as a function")
// }
// function u(e, t) {
//     for (var r = 0; r < t.length; r++) {
//         var n = t[r];
//         n.enumerable = n.enumerable || !1,
//         n.configurable = !0,
//         "value"in n && (n.writable = !0),
//         Object.defineProperty(e, x(n.key), n)
//     }
// }
// function s(e, t, r) {
//     return t && u(e.prototype, t),
//     r && u(e, r),
//     Object.defineProperty(e, "prototype", {
//         writable: !1
//     }),
//     e
// }
// function c(e, t, r) {
//     return (t = x(t))in e ? Object.defineProperty(e, t, {
//         value: r,
//         enumerable: !0,
//         configurable: !0,
//         writable: !0
//     }) : e[t] = r,
//     e
// }
// function l(e, t) {
//     if ("function" != typeof t && null !== t)
//         throw new TypeError("Super expression must either be null or a function");
//     e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//             value: e,
//             writable: !0,
//             configurable: !0
//         }
//     }),
//     Object.defineProperty(e, "prototype", {
//         writable: !1
//     }),
//     t && d(e, t)
// }
// function f(e) {
//     return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
//         return e.__proto__ || Object.getPrototypeOf(e)
//     }
//     ,
//     f(e)
// }
// function d(e, t) {
//     return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
//         return e.__proto__ = t,
//         e
//     }
//     ,
//     d(e, t)
// }
// function p(e) {
//     if (void 0 === e)
//         throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//     return e
// }
// function h(e, t) {
//     if (t && ("object" == typeof t || "function" == typeof t))
//         return t;
//     if (void 0 !== t)
//         throw new TypeError("Derived constructors may only return object or undefined");
//     return p(e)
// }
// function y(e) {
//     var t = function() {
//         if ("undefined" == typeof Reflect || !Reflect.construct)
//             return !1;
//         if (Reflect.construct.sham)
//             return !1;
//         if ("function" == typeof Proxy)
//             return !0;
//         try {
//             return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
//             ))),
//             !0
//         } catch (e) {
//             return !1
//         }
//     }();
//     return function() {
//         var r, n = f(e);
//         if (t) {
//             var o = f(this).constructor;
//             r = Reflect.construct(n, arguments, o)
//         } else
//             r = n.apply(this, arguments);
//         return h(this, r)
//     }
// }
// function v(e, t) {
//     return function(e) {
//         if (Array.isArray(e))
//             return e
//     }(e) || function(e, t) {
//         var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
//         if (null != r) {
//             var n, o, i, a, u = [], s = !0, c = !1;
//             try {
//                 if (i = (r = r.call(e)).next,
//                 0 === t) {
//                     if (Object(r) !== r)
//                         return;
//                     s = !1
//                 } else
//                     for (; !(s = (n = i.call(r)).done) && (u.push(n.value),
//                     u.length !== t); s = !0)
//                         ;
//             } catch (e) {
//                 c = !0,
//                 o = e
//             } finally {
//                 try {
//                     if (!s && null != r.return && (a = r.return(),
//                     Object(a) !== a))
//                         return
//                 } finally {
//                     if (c)
//                         throw o
//                 }
//             }
//             return u
//         }
//     }(e, t) || m(e, t) || function() {
//         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//     }()
// }
// function b(e) {
//     return function(e) {
//         if (Array.isArray(e))
//             return w(e)
//     }(e) || function(e) {
//         if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
//             return Array.from(e)
//     }(e) || m(e) || function() {
//         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//     }()
// }
// function m(e, t) {
//     if (e) {
//         if ("string" == typeof e)
//             return w(e, t);
//         var r = Object.prototype.toString.call(e).slice(8, -1);
//         return "Object" === r && e.constructor && (r = e.constructor.name),
//         "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? w(e, t) : void 0
//     }
// }
// function w(e, t) {
//     (null == t || t > e.length) && (t = e.length);
//     for (var r = 0, n = new Array(t); r < t; r++)
//         n[r] = e[r];
//     return n
// }
// function g(e, t) {
//     var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
//     if (!r) {
//         if (Array.isArray(e) || (r = m(e)) || t && e && "number" == typeof e.length) {
//             r && (e = r);
//             var n = 0
//               , o = function() {};
//             return {
//                 s: o,
//                 n: function() {
//                     return n >= e.length ? {
//                         done: !0
//                     } : {
//                         done: !1,
//                         value: e[n++]
//                     }
//                 },
//                 e: function(e) {
//                     throw e
//                 },
//                 f: o
//             }
//         }
//         throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//     }
//     var i, a = !0, u = !1;
//     return {
//         s: function() {
//             r = r.call(e)
//         },
//         n: function() {
//             var e = r.next();
//             return a = e.done,
//             e
//         },
//         e: function(e) {
//             u = !0,
//             i = e
//         },
//         f: function() {
//             try {
//                 a || null == r.return || r.return()
//             } finally {
//                 if (u)
//                     throw i
//             }
//         }
//     }
// }
// function x(e) {
//     var t = function(e, t) {
//         if ("object" != typeof e || null === e)
//             return e;
//         var r = e[Symbol.toPrimitive];
//         if (void 0 !== r) {
//             var n = r.call(e, t || "default");
//             if ("object" != typeof n)
//                 return n;
//             throw new TypeError("@@toPrimitive must return a primitive value.")
//         }
//         return ("string" === t ? String : Number)(e)
//     }(e, "string");
//     return "symbol" == typeof t ? t : String(t)
// }
// var _ = function() {
//     function e(t) {
//         var n, o, u = this;
//         a(this, e),
//         c(this, "whitelist", []),
//         c(this, "blacklist", []),
//         c(this, "handler", (function() {
//             return Promise.resolve("Please set a handler for middleware")
//         }
//         )),
//         "function" == typeof t ? n = t : (this.whitelist = (null == t ? void 0 : t.whitelist) || [],
//         this.blacklist = (null == t ? void 0 : t.blacklist) || [],
//         n = null == t ? void 0 : t.handler,
//         null != t && t.payload && (o = t.payload)),
//         this.handler = function() {
//             var t = i(r().mark((function t(i, a, s) {
//                 var c;
//                 return r().wrap((function(t) {
//                     for (; ; )
//                         switch (t.prev = t.next) {
//                         case 0:
//                             if (!0 === (null == s ? void 0 : s.disabled)) {
//                                 t.next = 16;
//                                 break
//                             }
//                             if (c = i.config.url,
//                             !u.whitelist.length) {
//                                 t.next = 9;
//                                 break
//                             }
//                             if (u.match(c, u.whitelist)) {
//                                 t.next = 7;
//                                 break
//                             }
//                             return t.next = 6,
//                             a();
//                         case 6:
//                         case 13:
//                         case 18:
//                         case 21:
//                             return t.abrupt("return", t.sent);
//                         case 7:
//                             t.next = 14;
//                             break;
//                         case 9:
//                             if (!u.blacklist.length) {
//                                 t.next = 14;
//                                 break
//                             }
//                             if (!u.match(c, u.blacklist)) {
//                                 t.next = 14;
//                                 break
//                             }
//                             return t.next = 13,
//                             a();
//                         case 14:
//                             t.next = 19;
//                             break;
//                         case 16:
//                             return t.next = 18,
//                             a();
//                         case 19:
//                             return t.next = 21,
//                             (n || u.handler).bind(u)(i, a, e.mergeConfig(s, o));
//                         case 22:
//                         case "end":
//                             return t.stop()
//                         }
//                 }
//                 ), t)
//             }
//             )));
//             return function(e, r, n) {
//                 return t.apply(this, arguments)
//             }
//         }()
//     }
//     return s(e, [{
//         key: "match",
//         value: function(e, t) {
//             for (var r = !1, n = 0; n < t.length; n++)
//                 if (e.indexOf(t[n]) > -1) {
//                     r = !0;
//                     break
//                 }
//             return r
//         }
//     }]),
//     e
// }();
// c(_, "handler", void 0),
// c(_, "mergeConfig", (function(e, r) {
//     return t(t({}, e || {}), {}, {
//         payload: t(t({}, (null == e ? void 0 : e.payload) || {}), r || {})
//     })
// }
// ));
// var k = function() {
//     var e = i(r().mark((function e(n, o, i) {
//         var a, u, s, c, l, f, d;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     if ("undefined" == typeof window) {
//                         e.next = 4;
//                         break
//                     }
//                     return e.next = 3,
//                     o();
//                 case 3:
//                 case 8:
//                     return e.abrupt("return", e.sent);
//                 case 4:
//                     if (a = (null == i ? void 0 : i.payload) || {},
//                     u = a.url,
//                     s = a.headers,
//                     c = a.com2co,
//                     l = a.sign,
//                     f = a.internal,
//                     n.request) {
//                         e.next = 9;
//                         break
//                     }
//                     return e.next = 8,
//                     o();
//                 case 9:
//                     return s && (delete (d = t({}, s)).host,
//                     delete d["accept-encoding"],
//                     n.request.headers = t(t({
//                         Accept: "application/json, text/plain, */*"
//                     }, d), n.request.headers)),
//                     f && l ? (n.request.url = n.request.url.replace(".com/x/", ".co/x/internal/"),
//                     n.request.params = l(t({}, n.request.params || {}))) : u ? n.request.url = u : !1 !== c && (n.request.url = n.request.url.replace(".com", ".co")),
//                     e.next = 13,
//                     o();
//                 case 13:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function(t, r, n) {
//         return e.apply(this, arguments)
//     }
// }()
//   , E = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r(e) {
//         var n;
//         return a(this, r),
//         c(p(n = t.call(this, {
//             handler: k,
//             payload: {
//                 sign: e
//             }
//         })), "name", "SERVER_SIDE"),
//         n
//     }
//     return s(r)
// }(_);
// function O(e) {
//     return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
// }
// c(E, "handler", k);
// var T, S, A = {
//     exports: {}
// }, C = {
//     exports: {}
// };
// T = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
// S = {
//     rotl: function(e, t) {
//         return e << t | e >>> 32 - t
//     },
//     rotr: function(e, t) {
//         return e << 32 - t | e >>> t
//     },
//     endian: function(e) {
//         if (e.constructor == Number)
//             return 16711935 & S.rotl(e, 8) | 4278255360 & S.rotl(e, 24);
//         for (var t = 0; t < e.length; t++)
//             e[t] = S.endian(e[t]);
//         return e
//     },
//     randomBytes: function(e) {
//         for (var t = []; e > 0; e--)
//             t.push(Math.floor(256 * Math.random()));
//         return t
//     },
//     bytesToWords: function(e) {
//         for (var t = [], r = 0, n = 0; r < e.length; r++,
//         n += 8)
//             t[n >>> 5] |= e[r] << 24 - n % 32;
//         return t
//     },
//     wordsToBytes: function(e) {
//         for (var t = [], r = 0; r < 32 * e.length; r += 8)
//             t.push(e[r >>> 5] >>> 24 - r % 32 & 255);
//         return t
//     },
//     bytesToHex: function(e) {
//         for (var t = [], r = 0; r < e.length; r++)
//             t.push((e[r] >>> 4).toString(16)),
//             t.push((15 & e[r]).toString(16));
//         return t.join("")
//     },
//     hexToBytes: function(e) {
//         for (var t = [], r = 0; r < e.length; r += 2)
//             t.push(parseInt(e.substr(r, 2), 16));
//         return t
//     },
//     bytesToBase64: function(e) {
//         for (var t = [], r = 0; r < e.length; r += 3)
//             for (var n = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++)
//                 8 * r + 6 * o <= 8 * e.length ? t.push(T.charAt(n >>> 6 * (3 - o) & 63)) : t.push("=");
//         return t.join("")
//     },
//     base64ToBytes: function(e) {
//         e = e.replace(/[^A-Z0-9+\/]/gi, "");
//         for (var t = [], r = 0, n = 0; r < e.length; n = ++r % 4)
//             0 != n && t.push((T.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * n + 8) - 1) << 2 * n | T.indexOf(e.charAt(r)) >>> 6 - 2 * n);
//         return t
//     }
// },
// C.exports = S;
// var j = C.exports
//   , R = {
//     utf8: {
//         stringToBytes: function(e) {
//             return R.bin.stringToBytes(unescape(encodeURIComponent(e)))
//         },
//         bytesToString: function(e) {
//             return decodeURIComponent(escape(R.bin.bytesToString(e)))
//         }
//     },
//     bin: {
//         stringToBytes: function(e) {
//             for (var t = [], r = 0; r < e.length; r++)
//                 t.push(255 & e.charCodeAt(r));
//             return t
//         },
//         bytesToString: function(e) {
//             for (var t = [], r = 0; r < e.length; r++)
//                 t.push(String.fromCharCode(e[r]));
//             return t.join("")
//         }
//     }
// }
//   , P = R
//   , I = function(e) {
//     return null != e && (q(e) || function(e) {
//         return "function" == typeof e.readFloatLE && "function" == typeof e.slice && q(e.slice(0, 0))
//     }(e) || !!e._isBuffer)
// };
// function q(e) {
//     return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
// }
// !function() {
//     var e = j
//       , t = P.utf8
//       , r = I
//       , n = P.bin
//       , o = function o(i, a) {
//         i.constructor == String ? i = a && "binary" === a.encoding ? n.stringToBytes(i) : t.stringToBytes(i) : r(i) ? i = Array.prototype.slice.call(i, 0) : Array.isArray(i) || i.constructor === Uint8Array || (i = i.toString());
//         for (var u = e.bytesToWords(i), s = 8 * i.length, c = 1732584193, l = -271733879, f = -1732584194, d = 271733878, p = 0; p < u.length; p++)
//             u[p] = 16711935 & (u[p] << 8 | u[p] >>> 24) | 4278255360 & (u[p] << 24 | u[p] >>> 8);
//         u[s >>> 5] |= 128 << s % 32,
//         u[14 + (s + 64 >>> 9 << 4)] = s;
//         var h = o._ff
//           , y = o._gg
//           , v = o._hh
//           , b = o._ii;
//         for (p = 0; p < u.length; p += 16) {
//             var m = c
//               , w = l
//               , g = f
//               , x = d;
//             c = h(c, l, f, d, u[p + 0], 7, -680876936),
//             d = h(d, c, l, f, u[p + 1], 12, -389564586),
//             f = h(f, d, c, l, u[p + 2], 17, 606105819),
//             l = h(l, f, d, c, u[p + 3], 22, -1044525330),
//             c = h(c, l, f, d, u[p + 4], 7, -176418897),
//             d = h(d, c, l, f, u[p + 5], 12, 1200080426),
//             f = h(f, d, c, l, u[p + 6], 17, -1473231341),
//             l = h(l, f, d, c, u[p + 7], 22, -45705983),
//             c = h(c, l, f, d, u[p + 8], 7, 1770035416),
//             d = h(d, c, l, f, u[p + 9], 12, -1958414417),
//             f = h(f, d, c, l, u[p + 10], 17, -42063),
//             l = h(l, f, d, c, u[p + 11], 22, -1990404162),
//             c = h(c, l, f, d, u[p + 12], 7, 1804603682),
//             d = h(d, c, l, f, u[p + 13], 12, -40341101),
//             f = h(f, d, c, l, u[p + 14], 17, -1502002290),
//             c = y(c, l = h(l, f, d, c, u[p + 15], 22, 1236535329), f, d, u[p + 1], 5, -165796510),
//             d = y(d, c, l, f, u[p + 6], 9, -1069501632),
//             f = y(f, d, c, l, u[p + 11], 14, 643717713),
//             l = y(l, f, d, c, u[p + 0], 20, -373897302),
//             c = y(c, l, f, d, u[p + 5], 5, -701558691),
//             d = y(d, c, l, f, u[p + 10], 9, 38016083),
//             f = y(f, d, c, l, u[p + 15], 14, -660478335),
//             l = y(l, f, d, c, u[p + 4], 20, -405537848),
//             c = y(c, l, f, d, u[p + 9], 5, 568446438),
//             d = y(d, c, l, f, u[p + 14], 9, -1019803690),
//             f = y(f, d, c, l, u[p + 3], 14, -187363961),
//             l = y(l, f, d, c, u[p + 8], 20, 1163531501),
//             c = y(c, l, f, d, u[p + 13], 5, -1444681467),
//             d = y(d, c, l, f, u[p + 2], 9, -51403784),
//             f = y(f, d, c, l, u[p + 7], 14, 1735328473),
//             c = v(c, l = y(l, f, d, c, u[p + 12], 20, -1926607734), f, d, u[p + 5], 4, -378558),
//             d = v(d, c, l, f, u[p + 8], 11, -2022574463),
//             f = v(f, d, c, l, u[p + 11], 16, 1839030562),
//             l = v(l, f, d, c, u[p + 14], 23, -35309556),
//             c = v(c, l, f, d, u[p + 1], 4, -1530992060),
//             d = v(d, c, l, f, u[p + 4], 11, 1272893353),
//             f = v(f, d, c, l, u[p + 7], 16, -155497632),
//             l = v(l, f, d, c, u[p + 10], 23, -1094730640),
//             c = v(c, l, f, d, u[p + 13], 4, 681279174),
//             d = v(d, c, l, f, u[p + 0], 11, -358537222),
//             f = v(f, d, c, l, u[p + 3], 16, -722521979),
//             l = v(l, f, d, c, u[p + 6], 23, 76029189),
//             c = v(c, l, f, d, u[p + 9], 4, -640364487),
//             d = v(d, c, l, f, u[p + 12], 11, -421815835),
//             f = v(f, d, c, l, u[p + 15], 16, 530742520),
//             c = b(c, l = v(l, f, d, c, u[p + 2], 23, -995338651), f, d, u[p + 0], 6, -198630844),
//             d = b(d, c, l, f, u[p + 7], 10, 1126891415),
//             f = b(f, d, c, l, u[p + 14], 15, -1416354905),
//             l = b(l, f, d, c, u[p + 5], 21, -57434055),
//             c = b(c, l, f, d, u[p + 12], 6, 1700485571),
//             d = b(d, c, l, f, u[p + 3], 10, -1894986606),
//             f = b(f, d, c, l, u[p + 10], 15, -1051523),
//             l = b(l, f, d, c, u[p + 1], 21, -2054922799),
//             c = b(c, l, f, d, u[p + 8], 6, 1873313359),
//             d = b(d, c, l, f, u[p + 15], 10, -30611744),
//             f = b(f, d, c, l, u[p + 6], 15, -1560198380),
//             l = b(l, f, d, c, u[p + 13], 21, 1309151649),
//             c = b(c, l, f, d, u[p + 4], 6, -145523070),
//             d = b(d, c, l, f, u[p + 11], 10, -1120210379),
//             f = b(f, d, c, l, u[p + 2], 15, 718787259),
//             l = b(l, f, d, c, u[p + 9], 21, -343485551),
//             c = c + m >>> 0,
//             l = l + w >>> 0,
//             f = f + g >>> 0,
//             d = d + x >>> 0
//         }
//         return e.endian([c, l, f, d])
//     };
//     o._ff = function(e, t, r, n, o, i, a) {
//         var u = e + (t & r | ~t & n) + (o >>> 0) + a;
//         return (u << i | u >>> 32 - i) + t
//     }
//     ,
//     o._gg = function(e, t, r, n, o, i, a) {
//         var u = e + (t & n | r & ~n) + (o >>> 0) + a;
//         return (u << i | u >>> 32 - i) + t
//     }
//     ,
//     o._hh = function(e, t, r, n, o, i, a) {
//         var u = e + (t ^ r ^ n) + (o >>> 0) + a;
//         return (u << i | u >>> 32 - i) + t
//     }
//     ,
//     o._ii = function(e, t, r, n, o, i, a) {
//         var u = e + (r ^ (t | ~n)) + (o >>> 0) + a;
//         return (u << i | u >>> 32 - i) + t
//     }
//     ,
//     o._blocksize = 16,
//     o._digestsize = 16,
//     A.exports = function(t, r) {
//         if (null == t)
//             throw new Error("Illegal argument " + t);
//         var i = e.wordsToBytes(o(t, r));
//         return r && r.asBytes ? i : r && r.asString ? n.bytesToString(i) : e.bytesToHex(i)
//     }
// }();
// var L = O(A.exports)
//   , B = function(e) {
//     for (var t = "", r = 0; r < e.length; r++)
//         t += String.fromCharCode(e.charCodeAt(r) - 1);
//     return t
// }
//   , U = "wbi_img_urls";
// function D(e, t) {
//     t || (t = {});
//     var r, n, o = function(e) {
//         var t;
//         if (e.useAssignKey)
//             return {
//                 imgKey: e.wbiImgKey,
//                 subKey: e.wbiSubKey
//             };
//         var r = (null === (t = function(e) {
//             try {
//                 return localStorage.getItem(e)
//             } catch (e) {
//                 return null
//             }
//         }(U)) || void 0 === t ? void 0 : t.split("-")) || []
//           , n = r[0]
//           , o = r[1]
//           , i = n ? N(n) : e.wbiImgKey
//           , a = o ? N(o) : e.wbiSubKey;
//         return {
//             imgKey: i,
//             subKey: a
//         }
//     }(t), i = o.imgKey, a = o.subKey;
//     if (i && a) {
//         for (var u = (r = i + a,
//         n = [],
//         [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52].forEach((function(e) {
//             r.charAt(e) && n.push(r.charAt(e))
//         }
//         )),
//         n.join("").slice(0, 32)), s = Math.round(Date.now() / 1e3), c = Object.assign({}, e, {
//             wts: s
//         }), l = Object.keys(c).sort(), f = [], d = /[!'()*]/g, p = 0; p < l.length; p++) {
//             var h = l[p]
//               , y = c[h];
//             y && "string" == typeof y && (y = y.replace(d, "")),
//             null != y && f.push("".concat(encodeURIComponent(h), "=").concat(encodeURIComponent(y)))
//         }
//         var v = f.join("&");
//         return {
//             w_rid: L(v + u),
//             wts: s.toString()
//         }
//     }
//     return null
// }
// function N(e) {
//     return e.substring(e.lastIndexOf("/") + 1, e.length).split(".")[0]
// }
// var F = "d569546b86c252:db:9bc7e99c5d71e5"
//   , K = "557251g796:g54:f:ee94g8fg969e2de"
//   , H = function() {
//     var e = i(r().mark((function e(t, n, o) {
//         var i, a, u;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     if ("undefined" != typeof window) {
//                         e.next = 4;
//                         break
//                     }
//                     return e.next = 3,
//                     n();
//                 case 3:
//                 case 7:
//                 case 13:
//                     return e.abrupt("return", e.sent);
//                 case 4:
//                     if (t.request) {
//                         e.next = 8;
//                         break
//                     }
//                     return e.next = 7,
//                     n();
//                 case 8:
//                     if (a = t.request.params || {},
//                     u = D(a, (null == o || null === (i = o.payload) || void 0 === i ? void 0 : i.encWbiKeys) || {
//                         wbiImgKey: B(F),
//                         wbiSubKey: B(K)
//                     })) {
//                         e.next = 14;
//                         break
//                     }
//                     return e.next = 13,
//                     n();
//                 case 14:
//                     return t.request.params = Object.assign({}, t.request.params, u),
//                     e.next = 17,
//                     n();
//                 case 17:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function(t, r, n) {
//         return e.apply(this, arguments)
//     }
// }()
//   , M = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r() {
//         var e;
//         a(this, r);
//         for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
//             o[i] = arguments[i];
//         return c(p(e = t.call.apply(t, [this].concat(o))), "handler", H),
//         c(p(e), "name", "WBI_ENCODE"),
//         e
//     }
//     return s(r)
// }(_);
// c(M, "handler", H);
// var G = function(e) {
//     return "BUILT_IN_".concat(e)
// }
//   , Y = function(e, t) {
//     var r, n = new Error(t || "Request Error: ".concat((null === (r = e.response) || void 0 === r ? void 0 : r.status) || "unknow status"));
//     return n.config = e.request,
//     e.response && (n.response = e.response,
//     e.response.ok || (n.code = e.response.status)),
//     n
// }
//   , W = function(e) {
//     return !(!e.name || !e.handler)
// }
//   , J = "undefined" == typeof window
//   , X = function(e) {
//     return "[object Object]" === Object.prototype.toString.call(e)
// }
//   , z = function(e) {
//     return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
// }
//   , V = function(e, t) {
//     var r = [];
//     Object.keys(t).forEach((function(e) {
//         var o = t[e];
//         null != o && (!function(e) {
//             return "[object Array]" === toString.call(e)
//         }(o) ? o = [o] : e += "[]",
//         o.forEach((function(t) {
//             !function(e) {
//                 return "[object Date]" === toString.call(e)
//             }(t) ? function(e) {
//                 return null !== e && "object" === n(e)
//             }(t) && (t = JSON.stringify(t)) : t = t.toString(),
//             r.push(z(e) + "=" + z(t))
//         }
//         )))
//     }
//     ));
//     var o = r.join("&");
//     if (o) {
//         var i = e.indexOf("#");
//         -1 !== i && (e = e.slice(0, i)),
//         e += (-1 === e.indexOf("?") ? "?" : "&") + o
//     }
//     return e
// }
//   , $ = function(e) {
//     var t = v(e.split("?"), 2)
//       , r = t[0]
//       , n = t[1];
//     if (n) {
//         var o = n.split("&");
//         if (o.length) {
//             var i, a = {}, u = g(o);
//             try {
//                 for (u.s(); !(i = u.n()).done; ) {
//                     var s = v(i.value.split("="), 2)
//                       , c = s[0]
//                       , l = s[1];
//                     c && void 0 !== l && (a[c] = "string" == typeof l ? decodeURIComponent(l) : l)
//                 }
//             } catch (e) {
//                 u.e(e)
//             } finally {
//                 u.f()
//             }
//             return {
//                 url: r,
//                 params: a
//             }
//         }
//     }
//     return {
//         url: e
//     }
// }
//   , Z = function(e) {
//     for (var t = "", r = 0; r < e.length; r++)
//         t += String.fromCharCode(e.charCodeAt(r) - 1);
//     return t
// }
//   , Q = "Content-Type"
//   , ee = function(e) {
//     return (null == e ? void 0 : e[Q]) || (null == e ? void 0 : e["content-type"])
// }
//   , te = function(e, t) {
//     t && (e[Q] = t)
// }
//   , re = function() {
//     var e = i(r().mark((function e(o, i) {
//         var a, u, s, c, l, f, d, p, h, y, b, m, w, x, _, k, E, O;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     if (o.request) {
//                         e.next = 2;
//                         break
//                     }
//                     return e.abrupt("return", i());
//                 case 2:
//                     if (a = o.config,
//                     u = a.baseURL,
//                     s = a.headers,
//                     c = a.params,
//                     l = a.data,
//                     f = a.credentials,
//                     d = void 0 === f ? "include" : f,
//                     p = o.config.url,
//                     h = o.request.method,
//                     y = $(p),
//                     b = y.url,
//                     (m = y.params) ? (p = o.request.url = b,
//                     o.request.params = t(t({}, m), c || {})) : (o.request.url = p,
//                     o.request.params = t({}, c || {})),
//                     u && !1 === /^(https?:)?\/\//.test(p) && (o.request.url = "".concat(u).concat(p)),
//                     o.request.headers = t({}, s || {}),
//                     ("POST" === h || "PUT" === h) && l)
//                         if ("object" === n(l))
//                             if ("undefined" != typeof FormData && l instanceof FormData) {
//                                 w = new FormData,
//                                 x = g(l.entries());
//                                 try {
//                                     for (x.s(); !(_ = x.n()).done; )
//                                         k = v(_.value, 2),
//                                         E = k[0],
//                                         O = k[1],
//                                         w.append(E, O)
//                                 } catch (e) {
//                                     x.e(e)
//                                 } finally {
//                                     x.f()
//                                 }
//                                 o.request.data = w
//                             } else
//                                 Object.keys(l) && (o.request.data = JSON.parse(JSON.stringify(l)));
//                         else
//                             o.request.data = l;
//                     return o.request.credentials = d,
//                     e.next = 13,
//                     i();
//                 case 13:
//                     return e.abrupt("return", e.sent);
//                 case 14:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function(t, r) {
//         return e.apply(this, arguments)
//     }
// }()
//   , ne = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r() {
//         var e;
//         a(this, r);
//         for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
//             o[i] = arguments[i];
//         return c(p(e = t.call.apply(t, [this].concat(o))), "handler", re),
//         c(p(e), "name", G("INIT_CTX")),
//         e
//     }
//     return s(r)
// }(_);
// c(ne, "handler", re);
// var oe = "__butils_cache"
//   , ie = "__butils_styles"
//   , ae = "__butils_scripts"
//   , ue = /^(https?:)?(\/\/)?(((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1-6})?([-0-9a-zA-Z+&@#/%=~_|?!:,.;]*)?$/;
// function se(e, t) {
//     var r = "number" == typeof e;
//     return t ? r : r && !Number.isNaN(e) && Number.isFinite(e)
// }
// function ce(e, t) {
//     t || (t = {});
//     for (var r = !1 === t.decode, n = t.template || document.cookie, o = {}, i = (r ? n : decodeURIComponent(n)).split(";"), a = !0 === e, u = 0; u < i.length; u++) {
//         for (var s = i[u]; " " === s.charAt(0); )
//             s = s.substring(1);
//         var c = s.split("=")
//           , l = c[0]
//           , f = c[1];
//         if (o[l] = f,
//         e === l)
//             return o[e]
//     }
//     return a ? o : ""
// }
// function le(e, t, r) {
//     return new Promise((function(n) {
//         t = !1 !== t;
//         var o = r ? ie : ae
//           , i = function(e) {
//             var t = window[oe] || {};
//             return t.hasOwnProperty(e) ? t[e] : null
//         }(o) || [];
//         if (!t && i.indexOf(e) > -1)
//             return n(!0);
//         var a = document.querySelector("#".concat(e));
//         return a && a.parentNode.removeChild(a),
//         (i = i.filter((function(t) {
//             return t !== e
//         }
//         ))).push(e),
//         function(e, t) {
//             var r = window[oe] || {};
//             window[oe] = r,
//             r[e] = t
//         }(o, i),
//         n(!1)
//     }
//     ))
// }
// function fe(e, t) {
//     return new Promise((function(r, n) {
//         if (o = e,
//         !ue.test(o))
//             return n(new Error("src不是一个正确的url地址！"));
//         var o, i = "bs_url_".concat(function(e) {
//             var t = 0
//               , r = -1;
//             if (0 === e.length)
//                 return t;
//             for (; ++r < e.length; )
//                 t = (t << 5) - t + e.charCodeAt(r),
//                 t |= 0;
//             return 10 * Math.abs(t) + e.length % 10
//         }(e));
//         le(i, t, !1).then((function(t) {
//             if (t)
//                 return r();
//             var n = document.createElement("script");
//             n.id = i,
//             n.type = "text/JavaScript",
//             n.src = e,
//             n.onload = function() {
//                 return r()
//             }
//             ,
//             n.onreadystatechange = function() {
//                 this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || r()
//             }
//             ,
//             document.querySelector("head").appendChild(n)
//         }
//         ))
//     }
//     )).then()
// }
// var de = function() {
//     var e = i(r().mark((function e(t, n) {
//         var o, i;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     if (o = t.config.timeout,
//                     se(t.config.timeout) || (o = J ? 350 : 1e4),
//                     t.abortController || !o || "undefined" == typeof AbortController) {
//                         e.next = 11;
//                         break
//                     }
//                     return i = new AbortController,
//                     t.abortController = i,
//                     t.timeoutId = setTimeout((function() {
//                         i.abort()
//                     }
//                     ), o),
//                     e.next = 8,
//                     n();
//                 case 8:
//                     clearTimeout(t.timeoutId),
//                     e.next = 13;
//                     break;
//                 case 11:
//                     return e.next = 13,
//                     n();
//                 case 13:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function(t, r) {
//         return e.apply(this, arguments)
//     }
// }()
//   , pe = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r() {
//         var e;
//         return a(this, r),
//         c(p(e = t.call(this, de)), "name", G("TIMEOUT")),
//         e
//     }
//     return s(r)
// }(_);
// c(pe, "handler", de);
// var he = function(e) {
//     return e.JSON = "application/json",
//     e.Form = "application/x-www-form-urlencoded",
//     e.FormData = "multipart/form-data",
//     e
// }(he || {})
//   , ye = function(e, t) {
//     return !!t && t.indexOf(e) > -1
// }
//   , ve = function(e, t, r) {
//     if (e.request)
//         if (e.request.data = JSON.stringify(t),
//         e.request.headers)
//             r || te(e.request.headers, "application/json");
//         else {
//             var n = {};
//             te(n, "application/json"),
//             e.request.headers = n
//         }
// }
//   , be = function() {
//     var e = i(r().mark((function e(t, n, o) {
//         var i, a, u, s, c, l, f, d;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     if (t.request) {
//                         e.next = 2;
//                         break
//                     }
//                     return e.abrupt("return", n());
//                 case 2:
//                     if (i = t.request,
//                     a = i.method,
//                     u = i.params,
//                     s = i.headers,
//                     t.request.url = V(t.request.url, u || {}),
//                     "POST" !== a && "PUT" !== a) {
//                         e.next = 17;
//                         break
//                     }
//                     if ("[object Object]" !== Object.prototype.toString.call(t.request.data)) {
//                         e.next = 17;
//                         break
//                     }
//                     if (l = ee(s),
//                     f = t.request.data,
//                     null == o || null === (c = o.payload) || void 0 === c || !c.stringify) {
//                         e.next = 14;
//                         break
//                     }
//                     return ve(t, f, l),
//                     e.next = 13,
//                     n();
//                 case 13:
//                     return e.abrupt("return", e.sent);
//                 case 14:
//                     ye("application/x-www-form-urlencoded", l) && (t.request.data = V("", f).slice(1)),
//                     ye("application/json", l || "application/json") && ve(t, f, l),
//                     ye("multipart/form-data", l) && (d = Object.keys(f)).length && (t.request.data = d.reduce((function(e, t) {
//                         return e.append(t, f[t]),
//                         e
//                     }
//                     ), new FormData));
//                 case 17:
//                     return e.next = 19,
//                     n();
//                 case 19:
//                     return e.abrupt("return", e.sent);
//                 case 20:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function(t, r, n) {
//         return e.apply(this, arguments)
//     }
// }()
//   , me = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r() {
//         var e;
//         return a(this, r),
//         c(p(e = t.call(this, be)), "name", G("BODY")),
//         e
//     }
//     return s(r)
// }(_);
// c(me, "handler", be);
// var we = function() {
//     var e = i(r().mark((function e(t, n, o) {
//         var i, a, u, s, l, f, d, p, h, y, v;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     if (t.request) {
//                         e.next = 2;
//                         break
//                     }
//                     return e.abrupt("return", n());
//                 case 2:
//                     return i = t.request,
//                     a = i.method,
//                     u = i.data,
//                     s = i.headers,
//                     l = (null == o ? void 0 : o.payload) || {},
//                     f = "",
//                     d = !1,
//                     p = function() {
//                         if (!f && !d)
//                             try {
//                                 f = ce("bili_jct", J ? {
//                                     template: (null == s ? void 0 : s.cookie) || (null == s ? void 0 : s.Cookie) || "_",
//                                     decode: !1
//                                 } : {
//                                     decode: !1
//                                 }),
//                                 d = !0
//                             } catch (e) {
//                                 J || console.warn(e)
//                             }
//                     }
//                     ,
//                     h = l.key || "csrf",
//                     y = function(e) {
//                         var r;
//                         if (p(),
//                         f && t.request)
//                             if ("params" !== e) {
//                                 if (u)
//                                     switch (!0) {
//                                     case r = u, "undefined" != typeof FormData && r instanceof FormData:
//                                         u.append(h, f);
//                                         break;
//                                     case X(u):
//                                         u[h] = f
//                                     }
//                             } else
//                                 t.request.params ? t.request.params[h] = f : t.request.params = c({}, h, f)
//                     }
//                     ,
//                     "GET" === a ? !0 === l.params && y("params") : "POST" !== a && "PUT" !== a || (v = ee(s) || "",
//                     void 0 === l.data && void 0 === l.params ? v ? ye(he.JSON, v) ? y("params") : y("data") : void 0 === u || X(u) ? y("params") : y("data") : (l.params && y("params"),
//                     l.data && (void 0 === u && (ye(he.FormData, v) ? t.request.data = new FormData : t.request.data = {}),
//                     y("data")))),
//                     e.next = 12,
//                     n();
//                 case 12:
//                     return e.abrupt("return", e.sent);
//                 case 13:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function(t, r, n) {
//         return e.apply(this, arguments)
//     }
// }()
//   , ge = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r() {
//         var e;
//         return a(this, r),
//         c(p(e = t.call(this, we)), "name", G("CSRF")),
//         e
//     }
//     return s(r)
// }(_);
// c(ge, "handler", we);
// var xe = function() {
//     var e = i(r().mark((function e(t, n) {
//         var o, i, a, u, s, c, l;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     if (!J) {
//                         e.next = 2;
//                         break
//                     }
//                     throw new Error("When you are in a Node environment, please use server-side fetch middleware.");
//                 case 2:
//                     if (window.fetch) {
//                         e.next = 4;
//                         break
//                     }
//                     throw new Error("When you are in a non-modern browser, please manually polyfill fetch.");
//                 case 4:
//                     if (t.request) {
//                         e.next = 8;
//                         break
//                     }
//                     return e.next = 7,
//                     n();
//                 case 7:
//                 case 11:
//                 case 19:
//                     return e.abrupt("return", e.sent);
//                 case 8:
//                     if (!t.response) {
//                         e.next = 12;
//                         break
//                     }
//                     return e.next = 11,
//                     n();
//                 case 12:
//                     return i = t.request,
//                     a = i.url,
//                     u = i.method,
//                     s = i.headers,
//                     c = i.credentials,
//                     l = t.request.data,
//                     e.next = 16,
//                     window.fetch(a, {
//                         method: u,
//                         body: l,
//                         headers: s,
//                         credentials: c,
//                         signal: null === (o = t.abortController) || void 0 === o ? void 0 : o.signal
//                     });
//                 case 16:
//                     return t.response = e.sent,
//                     e.next = 19,
//                     n();
//                 case 20:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function(t, r) {
//         return e.apply(this, arguments)
//     }
// }()
//   , _e = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r() {
//         var e;
//         a(this, r);
//         for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
//             o[i] = arguments[i];
//         return c(p(e = t.call.apply(t, [this].concat(o))), "handler", xe),
//         c(p(e), "name", G("FETCH")),
//         e
//     }
//     return s(r)
// }(_);
// c(_e, "handler", xe);
// var ke = function() {
//     var e = i(r().mark((function e(t, n, o) {
//         var i, a, u;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     return e.next = 2,
//                     n();
//                 case 2:
//                     if (null === (i = t.response) || void 0 === i || !i.ok) {
//                         e.next = 14;
//                         break
//                     }
//                     if (void 0 !== t.response.data) {
//                         e.next = 14;
//                         break
//                     }
//                     return e.prev = 4,
//                     u = (null == o || null === (a = o.payload) || void 0 === a ? void 0 : a.type) || "json",
//                     e.next = 8,
//                     t.response[u]();
//                 case 8:
//                     t.response.data = e.sent,
//                     e.next = 14;
//                     break;
//                 case 11:
//                     e.prev = 11,
//                     e.t0 = e.catch(4),
//                     console.warn(e.t0);
//                 case 14:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e, null, [[4, 11]])
//     }
//     )));
//     return function(t, r, n) {
//         return e.apply(this, arguments)
//     }
// }()
//   , Ee = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r() {
//         var e;
//         return a(this, r),
//         c(p(e = t.call(this, ke)), "name", G("RES_DATA")),
//         e
//     }
//     return s(r)
// }(_);
// c(Ee, "handler", ke);
// var Oe = function() {
//     var e = i(r().mark((function e(t, n) {
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     return e.next = 2,
//                     n();
//                 case 2:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function(t, r) {
//         return e.apply(this, arguments)
//     }
// }()
//   , Te = function(e) {
//     l(n, e);
//     var t = y(n);
//     function n(e, o) {
//         var u;
//         return a(this, n),
//         c(p(u = t.call(this)), "name", G("SPRAY")),
//         u.handler = function() {
//             var t = i(r().mark((function t(n, i) {
//                 return r().wrap((function(t) {
//                     for (; ; )
//                         switch (t.prev = t.next) {
//                         case 0:
//                             return t.next = 2,
//                             e(n, i, {
//                                 payload: o
//                             });
//                         case 2:
//                             return t.abrupt("return", t.sent);
//                         case 3:
//                         case "end":
//                             return t.stop()
//                         }
//                 }
//                 ), t)
//             }
//             )));
//             return function(e, r) {
//                 return t.apply(this, arguments)
//             }
//         }(),
//         u
//     }
//     return s(n)
// }(_);
// c(Te, "handler", Oe);
// var Se = function() {
//     var e = i(r().mark((function e(t, n, o) {
//         var a, u, s, c, l, f, d, p, h;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     return u = null === (a = t.request) || void 0 === a ? void 0 : a.function,
//                     s = (null == o ? void 0 : o.payload) || {
//                         times: 0
//                     },
//                     c = s.times,
//                     l = s.condition,
//                     f = s.onRetry,
//                     d = function() {
//                         return !c || t.retry === c
//                     }
//                     ,
//                     p = function() {
//                         var e = i(r().mark((function e(n) {
//                             var i, a;
//                             return r().wrap((function(e) {
//                                 for (; ; )
//                                     switch (e.prev = e.next) {
//                                     case 0:
//                                         if (u) {
//                                             e.next = 2;
//                                             break
//                                         }
//                                         throw Y(t, "Missing request function");
//                                     case 2:
//                                         if (!d() || null != o && null !== (i = o.payload) && void 0 !== i && i.runtimeShortCircuit) {
//                                             e.next = 4;
//                                             break
//                                         }
//                                         throw Y(t);
//                                     case 4:
//                                         if (t.retry = t.retry ? t.retry + 1 : 1,
//                                         e.prev = 5,
//                                         !f) {
//                                             e.next = 11;
//                                             break
//                                         }
//                                         return e.next = 9,
//                                         f(t.config, n);
//                                     case 9:
//                                         (a = e.sent) && (t.config = a);
//                                     case 11:
//                                         return t.response && delete t.response,
//                                         e.next = 14,
//                                         u(t);
//                                     case 14:
//                                         e.next = 19;
//                                         break;
//                                     case 16:
//                                         throw e.prev = 16,
//                                         e.t0 = e.catch(5),
//                                         Y(t, e.t0.message);
//                                     case 19:
//                                     case "end":
//                                         return e.stop()
//                                     }
//                             }
//                             ), e, null, [[5, 16]])
//                         }
//                         )));
//                         return function(t) {
//                             return e.apply(this, arguments)
//                         }
//                     }(),
//                     e.prev = 4,
//                     e.next = 7,
//                     n();
//                 case 7:
//                     e.next = 16;
//                     break;
//                 case 9:
//                     if (e.prev = 9,
//                     e.t0 = e.catch(4),
//                     !d()) {
//                         e.next = 13;
//                         break
//                     }
//                     throw Y(t, null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message);
//                 case 13:
//                     return e.next = 15,
//                     p();
//                 case 15:
//                 case 23:
//                     return e.abrupt("return");
//                 case 16:
//                     if (!l) {
//                         e.next = 24;
//                         break
//                     }
//                     return e.next = 19,
//                     l(t.response);
//                 case 19:
//                     if (!(h = e.sent)) {
//                         e.next = 24;
//                         break
//                     }
//                     return e.next = 23,
//                     p(h);
//                 case 24:
//                     if (t.response && t.response.ok) {
//                         e.next = 27;
//                         break
//                     }
//                     return e.next = 27,
//                     p();
//                 case 27:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e, null, [[4, 9]])
//     }
//     )));
//     return function(t, r, n) {
//         return e.apply(this, arguments)
//     }
// }()
//   , Ae = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r() {
//         var e;
//         a(this, r);
//         for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
//             o[i] = arguments[i];
//         return c(p(e = t.call.apply(t, [this].concat(o))), "name", G("RETRY")),
//         c(p(e), "handler", Se),
//         e
//     }
//     return s(r)
// }(_);
// c(Ae, "handler", Se);
// var Ce = !1
//   , je = "bili_ticket"
//   , Re = "bili_ticket_expires"
//   , Pe = "wbi_img_urls"
//   , Ie = function() {
//     var e = i(r().mark((function e(t) {
//         var n, o, a, u, s, c, l, f, d;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     if (o = ce(je, {
//                         decode: !1
//                     }),
//                     a = "",
//                     u = "",
//                     null !== (n = window) && void 0 !== n && n.UNIFY_HTTP_WBI_CONFIG ? (c = (null === (s = window.UNIFY_HTTP_WBI_CONFIG) || void 0 === s ? void 0 : s.split("-")) || [],
//                     l = v(c, 2),
//                     a = l[0],
//                     u = l[1]) : (f = (localStorage.getItem(Pe) || "").split("-"),
//                     d = v(f, 2),
//                     a = d[0],
//                     u = d[1]),
//                     !qe() && o && a && u) {
//                         e.next = 9;
//                         break
//                     }
//                     if (!Ce) {
//                         e.next = 8;
//                         break
//                     }
//                     return e.abrupt("return");
//                 case 8:
//                     t.useAsyncRequest(function() {
//                         var e = i(r().mark((function e(t) {
//                             var n, o, i, a;
//                             return r().wrap((function(e) {
//                                 for (; ; )
//                                     switch (e.prev = e.next) {
//                                     case 0:
//                                         return e.prev = 0,
//                                         Ce = !0,
//                                         e.next = 4,
//                                         Ue();
//                                     case 4:
//                                         return i = e.sent,
//                                         e.next = 7,
//                                         t({
//                                             url: i,
//                                             method: "POST",
//                                             credentials: "include"
//                                         });
//                                     case 7:
//                                         0 === (null == (a = e.sent) ? void 0 : a.code) && null !== (n = a.data) && void 0 !== n && n.ticket && null !== (o = a.data) && void 0 !== o && o.nav && Be(a.data);
//                                     case 9:
//                                         return e.prev = 9,
//                                         Ce = !1,
//                                         e.finish(9);
//                                     case 12:
//                                     case "end":
//                                         return e.stop()
//                                     }
//                             }
//                             ), e, null, [[0, , 9, 12]])
//                         }
//                         )));
//                         return function(t) {
//                             return e.apply(this, arguments)
//                         }
//                     }());
//                 case 9:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function(t) {
//         return e.apply(this, arguments)
//     }
// }()
//   , qe = function() {
//     var e = ce(Re, {
//         decode: !1
//     })
//       , t = (new Date).getTime();
//     return 1e3 * e - t <= 18e5 || 1e3 * e < t
// }
//   , Le = function(e, t, r) {
//     var n;
//     null !== (n = window) && void 0 !== n && null !== (n = n.biliBridgePc) && void 0 !== n && n.callNative ? window.biliBridgePc.callNative("auth/setCookies", [{
//         name: e,
//         value: t,
//         expirationDate: Math.ceil(Date.now() / 1e3) + r,
//         isExpiredRemove: !0
//     }]) : function(e, t, r) {
//         var n = ""
//           , o = 0;
//         if (!1 !== (r = r || {}).encode && (t = encodeURIComponent(t)),
//         se(r.exMinuts) && (o += 6e4 * r.exMinuts),
//         se(r.exDays) && (o += 864e5 * r.exDays),
//         o) {
//             var i = new Date;
//             i.setTime(i.getTime() + o),
//             n = ";expires=".concat(i.toUTCString())
//         }
//         var a = function(e) {
//             return "string" == typeof e
//         }(r.domain) ? ";domain=".concat(r.domain) : "";
//         document.cookie = "".concat(e, "=").concat(t).concat(n, ";path=/").concat(a)
//     }(e, t, {
//         domain: ".bilibili.com",
//         exMinuts: r / 60
//     })
// }
//   , Be = function(e) {
//     var t = e.ticket
//       , r = e.nav
//       , n = e.ttl
//       , o = e.created_at;
//     Le(je, t, n),
//     Le(Re, String(o + n), n),
//     window.UNIFY_HTTP_WBI_CONFIG = "".concat(r.img, "-").concat(r.sub),
//     localStorage.setItem(Pe, "".concat(r.img, "-").concat(r.sub))
// }
//   , Ue = function() {
//     var e = i(r().mark((function e() {
//         var t, n, o, i, a;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     return t = Math.floor((new Date).getTime() / 1e3),
//                     n = "YhxToH[2q",
//                     e.next = 4,
//                     fe("//s1.hdslb.com/bfs/static/jinkela/long/unify-http-request/forticket.min.js");
//                 case 4:
//                     if (window.CryptoJS) {
//                         e.next = 6;
//                         break
//                     }
//                     throw new Error("CryptoJS is not found");
//                 case 6:
//                     if (window.CryptoJS.HmacSHA256) {
//                         e.next = 8;
//                         break
//                     }
//                     throw new Error("CryptoJS.HmacSHA256 is not found");
//                 case 8:
//                     if (window.CryptoJS.enc) {
//                         e.next = 10;
//                         break
//                     }
//                     throw new Error("CryptoJS.enc is not found");
//                 case 10:
//                     return o = window.CryptoJS.HmacSHA256("ts".concat(t), Z(n)),
//                     i = window.CryptoJS.enc.Hex.stringify(o),
//                     e.next = 14,
//                     V("//api.bilibili.com/bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket", {
//                         key_id: "ec02",
//                         hexsign: i,
//                         "context[ts]": t,
//                         csrf: ce("bili_jct", {
//                             decode: !1
//                         })
//                     });
//                 case 14:
//                     return a = e.sent,
//                     e.abrupt("return", a);
//                 case 16:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function() {
//         return e.apply(this, arguments)
//     }
// }()
//   , De = function() {
//     var e = i(r().mark((function e(n, o) {
//         var i, a, u, s;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     if ("undefined" != typeof window) {
//                         e.next = 4;
//                         break
//                     }
//                     return e.next = 3,
//                     o();
//                 case 3:
//                     return e.abrupt("return", e.sent);
//                 case 4:
//                     n.request && (i = n.request,
//                     a = i.method,
//                     null != (u = i.params) && u.web_location || "GET" !== a || (n.request.params = t(t({}, n.request.params || {}), {}, {
//                         web_location: (null === (s = document.getElementsByTagName("meta").spm_prefix) || void 0 === s ? void 0 : s.content) || "0.0"
//                     })));
//                     try {
//                         Ie(n)
//                     } catch (e) {
//                         console.log("[updateTicketAndWbi]", e)
//                     }
//                     return e.next = 8,
//                     o();
//                 case 8:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function(t, r) {
//         return e.apply(this, arguments)
//     }
// }()
//   , Ne = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r() {
//         var e;
//         return a(this, r),
//         c(p(e = t.call(this, De)), "name", G("TICKET_WBI")),
//         e
//     }
//     return s(r)
// }(_);
// c(Ne, "handler", De);
// var Fe = function(e, t) {
//     return Object.keys(t).sort().reduce((function(e, r) {
//         return e += "_".concat(r, ":").concat(t[r])
//     }
//     ), "api:".concat(e))
// }
//   , Ke = function() {
//     var e = i(r().mark((function e(t, n, o) {
//         var i, a, u, s, c, l;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     if (t.request && "GET" === t.request.method) {
//                         e.next = 4;
//                         break
//                     }
//                     return e.next = 3,
//                     n();
//                 case 3:
//                     return e.abrupt("return", e.sent);
//                 case 4:
//                     if (null != o && o.payload) {
//                         e.next = 8;
//                         break
//                     }
//                     return e.next = 7,
//                     n();
//                 case 7:
//                     return e.abrupt("return", e.sent);
//                 case 8:
//                     if (i = o.payload,
//                     a = i.store,
//                     u = i.extra,
//                     (s = o.payload.key) && a) {
//                         e.next = 14;
//                         break
//                     }
//                     return e.next = 13,
//                     n();
//                 case 13:
//                     return e.abrupt("return", e.sent);
//                 case 14:
//                     if ("string" != typeof s && (s = Fe(t.request.url, s)),
//                     !(c = a.get(s, u))) {
//                         e.next = 22;
//                         break
//                     }
//                     return t.response = new Response(JSON.stringify(c),{
//                         status: 200,
//                         statusText: "Cache:".concat(s)
//                     }),
//                     e.next = 20,
//                     n();
//                 case 20:
//                     e.next = 25;
//                     break;
//                 case 22:
//                     return e.next = 24,
//                     n();
//                 case 24:
//                     null !== (l = t.response) && void 0 !== l && l.data && a.set(s, t.response.data, u);
//                 case 25:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function(t, r, n) {
//         return e.apply(this, arguments)
//     }
// }()
//   , He = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r(e) {
//         var n;
//         return a(this, r),
//         c(p(n = t.call(this, {
//             handler: Ke,
//             payload: {
//                 store: e
//             }
//         })), "name", G("CACHE")),
//         n
//     }
//     return s(r)
// }(_);
// c(He, "handler", Ke);
// var Me = s((function e(t) {
//     a(this, e),
//     this.httpSvc = t
// }
// ))
//   , Ge = function(e) {
//     l(n, e);
//     var r = y(n);
//     function n() {
//         return a(this, n),
//         r.apply(this, arguments)
//     }
//     return s(n, [{
//         key: "provide",
//         value: function() {
//             var e = this
//               , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
//               , r = {
//                 inject: function(n, o) {
//                     return e.inject(t, n, o),
//                     r
//                 },
//                 disable: function(n) {
//                     return e.disable(t, n),
//                     r
//                 },
//                 get: function() {
//                     return t
//                 }
//             };
//             return r
//         }
//     }, {
//         key: "inject",
//         value: function(e, t, r) {
//             e[t] = r
//         }
//     }, {
//         key: "disable",
//         value: function(e, r) {
//             e[r] = t(t({}, e[r] || {}), {}, {
//                 disabled: !0
//             })
//         }
//     }, {
//         key: "get",
//         value: function(e, t) {
//             return e[t] || {}
//         }
//     }]),
//     n
// }(Me)
//   , Ye = {
//     INIT_CTX: G("INIT_CTX"),
//     TIMEOUT: G("TIMEOUT"),
//     BODY: G("BODY"),
//     CSRF: G("CSRF"),
//     FETCH: G("FETCH"),
//     RETRY: G("RETRY"),
//     SPRAY: G("SPRAY"),
//     RES_DATA: G("RES_DATA"),
//     RES_EXTRACT: G("RES_EXTRACT"),
//     TICKET_WBI: G("TICKET_WBI"),
//     LOG: G("LOG"),
//     CACHE: G("CACHE")
// }
//   , We = "$ORDER_"
//   , Je = function() {
//     function e(t) {
//         a(this, e),
//         c(this, "middlewares", []),
//         c(this, "middlewareConfigCtxProvider", void 0),
//         this.control = t,
//         this.middlewareConfigCtxProvider = this.control.httpSvc.configCtrl.provide()
//     }
//     return s(e, [{
//         key: "with",
//         value: function(e, t) {
//             return e ? ("string" == typeof e ? (this.middlewares.push({
//                 name: "".concat(We).concat(e),
//                 handler: Te.handler
//             }),
//             t && this.inject(e, t)) : "function" == typeof e ? this.middlewares.push(new Te(e,t)) : W(e) && (this.middlewares.push(e),
//             t && this.inject(e.name, t)),
//             this) : this
//         }
//     }, {
//         key: "inject",
//         value: function(e, t) {
//             return this.middlewareConfigCtxProvider.inject(e, {
//                 payload: t
//             }),
//             this
//         }
//     }, {
//         key: "disable",
//         value: function(e) {
//             return this.middlewareConfigCtxProvider.disable(e),
//             this
//         }
//     }, {
//         key: "request",
//         value: function(e) {
//             var t = this.control.compose(this.middlewares);
//             return this.control.httpSvc.requestCtrl.request(e, this.middlewareConfigCtxProvider.get(), t)
//         }
//     }]),
//     e
// }()
//   , Xe = function(e) {
//     l(n, e);
//     var t = y(n);
//     function n() {
//         var e;
//         a(this, n);
//         for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
//             o[i] = arguments[i];
//         return c(p(e = t.call.apply(t, [this].concat(o))), "middlewares", []),
//         e
//     }
//     return s(n, [{
//         key: "alreadyExistsIdx",
//         value: function(e) {
//             return this.middlewares.findIndex((function(t) {
//                 return t.name === e
//             }
//             ))
//         }
//     }, {
//         key: "register",
//         value: function(e) {
//             var t = this;
//             if (Array.isArray(e)) {
//                 var r = !1;
//                 e.forEach((function(e) {
//                     if (W(e)) {
//                         r = !0;
//                         var n = t.alreadyExistsIdx(e.name);
//                         n > -1 ? t.middlewares[n] = e : t.middlewares.push(e)
//                     }
//                 }
//                 )),
//                 r && this.httpSvc.requestCtrl.reset()
//             }
//         }
//     }, {
//         key: "setup",
//         value: function() {
//             return new Je(this)
//         }
//     }, {
//         key: "disable",
//         value: function(e) {
//             return this.setup().disable(e)
//         }
//     }, {
//         key: "with",
//         value: function(e, t) {
//             return this.setup().with(e, t)
//         }
//     }, {
//         key: "compose",
//         value: function(e) {
//             var t, n = this, o = b(this.middlewares), a = [], u = (c(t = {}, Ye.RETRY, null),
//             c(t, Ye.BODY, null),
//             c(t, Ye.RES_DATA, null),
//             t), s = Object.keys(u), l = {};
//             (e || []).forEach((function(e) {
//                 if (W(e)) {
//                     var t = e.name;
//                     if (s.includes(t))
//                         u[t] || (u[t] = e);
//                     else if (t.startsWith(We)) {
//                         if (t = t.substring(7),
//                         !l[t] && !(t in u)) {
//                             var r = o.findIndex((function(e) {
//                                 return e.name === t
//                             }
//                             ));
//                             if (r > -1) {
//                                 var n = o[r];
//                                 o.splice(r, 1),
//                                 l[t] = n,
//                                 a.push(n)
//                             }
//                         }
//                     } else
//                         Ye.SPRAY === t ? a.push(e) : l[t] || (l[t] = e,
//                         a.push(e))
//                 }
//             }
//             ));
//             var f = [];
//             o.forEach((function(e) {
//                 s.includes(e.name) ? u[e.name] || (u[e.name] = e) : l[e.name] || f.push(e)
//             }
//             )),
//             f.push.apply(f, a);
//             var d = [u[Ye.RETRY] || new Ae, new ne].concat(f, [u[Ye.RES_DATA] || new Ee, u[Ye.BODY] || new me, new pe, this.httpSvc.fetch]);
//             return function() {
//                 var e = i(r().mark((function e(t) {
//                     var o, a, u, s, c, l, f;
//                     return r().wrap((function(e) {
//                         for (; ; )
//                             switch (e.prev = e.next) {
//                             case 0:
//                                 return f = function() {
//                                     return (f = i(r().mark((function e(n) {
//                                         var o;
//                                         return r().wrap((function(e) {
//                                             for (; ; )
//                                                 switch (e.prev = e.next) {
//                                                 case 0:
//                                                     if (n !== d.length) {
//                                                         e.next = 2;
//                                                         break
//                                                     }
//                                                     return e.abrupt("return");
//                                                 case 2:
//                                                     if (!(n <= a)) {
//                                                         e.next = 4;
//                                                         break
//                                                     }
//                                                     throw Y(t, "The next() called multiple times");
//                                                 case 4:
//                                                     if (o = d[a = n]) {
//                                                         e.next = 8;
//                                                         break
//                                                     }
//                                                     throw Y(t, "Middleware is not exist");
//                                                 case 8:
//                                                     return e.next = 10,
//                                                     o.handler(t, l.bind(null, n + 1), u.get(t.middleware, o.name));
//                                                 case 10:
//                                                 case "end":
//                                                     return e.stop()
//                                                 }
//                                         }
//                                         ), e)
//                                     }
//                                     )))).apply(this, arguments)
//                                 }
//                                 ,
//                                 l = function(e) {
//                                     return f.apply(this, arguments)
//                                 }
//                                 ,
//                                 a = -1,
//                                 u = n.httpSvc.configCtrl,
//                                 s = u.get(t.middleware, "DEBUG").payload,
//                                 e.next = 7,
//                                 l(0);
//                             case 7:
//                                 if (!s) {
//                                     e.next = 9;
//                                     break
//                                 }
//                                 return e.abrupt("return", t);
//                             case 9:
//                                 if (u.get(t.middleware, Ye.RES_EXTRACT).disabled || null === (o = t.response) || void 0 === o || !o.ok) {
//                                     e.next = 12;
//                                     break
//                                 }
//                                 return e.abrupt("return", (null === (c = t.response) || void 0 === c ? void 0 : c.data) || null);
//                             case 12:
//                                 return e.abrupt("return", t.response);
//                             case 13:
//                             case "end":
//                                 return e.stop()
//                             }
//                     }
//                     ), e)
//                 }
//                 )));
//                 return function(t) {
//                     return e.apply(this, arguments)
//                 }
//             }()
//         }
//     }]),
//     n
// }(Me)
//   , ze = function(e) {
//     l(u, e);
//     var n, o = y(u);
//     function u() {
//         var e;
//         a(this, u);
//         for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
//             r[n] = arguments[n];
//         return c(p(e = o.call.apply(o, [this].concat(r))), "fn", null),
//         e
//     }
//     return s(u, [{
//         key: "request",
//         value: (n = i(r().mark((function e(t) {
//             var n, o, i = arguments;
//             return r().wrap((function(e) {
//                 for (; ; )
//                     switch (e.prev = e.next) {
//                     case 0:
//                         return n = i.length > 1 && void 0 !== i[1] ? i[1] : {},
//                         (o = i.length > 2 ? i[2] : void 0) || (this.fn || this.generateRequestFunction(),
//                         o = this.fn),
//                         e.next = 5,
//                         o(this.createContext(t, n, o));
//                     case 5:
//                         return e.abrupt("return", e.sent);
//                     case 6:
//                     case "end":
//                         return e.stop()
//                     }
//             }
//             ), e, this)
//         }
//         ))),
//         function(e) {
//             return n.apply(this, arguments)
//         }
//         )
//     }, {
//         key: "generateRequestFunction",
//         value: function() {
//             this.fn = this.httpSvc.assembleCtrl.compose()
//         }
//     }, {
//         key: "reset",
//         value: function() {
//             this.fn = null
//         }
//     }, {
//         key: "useAsyncRequest",
//         get: function() {
//             var e = this;
//             return function(t, r) {
//                 var n = e.httpSvc.create(r);
//                 t(n.request.bind(n))
//             }
//         }
//     }, {
//         key: "createContext",
//         value: function(e) {
//             var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
//               , n = arguments.length > 2 ? arguments[2] : void 0
//               , o = e.url
//               , i = e.method;
//             return {
//                 config: t({
//                     baseURL: this.httpSvc.baseURL
//                 }, e),
//                 useAsyncRequest: this.useAsyncRequest,
//                 middleware: r,
//                 request: {
//                     url: o,
//                     method: (i || "get").toUpperCase(),
//                     function: n
//                 }
//             }
//         }
//     }]),
//     u
// }(Me)
//   , Ve = function() {
//     function e(t) {
//         if (a(this, e),
//         c(this, "fetch", void 0),
//         c(this, "assembleCtrl", new Xe(this)),
//         c(this, "configCtrl", new Ge(this)),
//         c(this, "requestCtrl", new ze(this)),
//         c(this, "baseURL", "//api.domain.com"),
//         t)
//             if (Array.isArray(t))
//                 this.fetch = new _e,
//                 this.register(t);
//             else {
//                 var r = t.middlewares
//                   , n = t.fetch
//                   , o = t.baseURL;
//                 this.fetch = n || new _e,
//                 this.register(r || []),
//                 o && (this.baseURL = o)
//             }
//         else
//             this.fetch = new _e,
//             this.register([])
//     }
//     return s(e, [{
//         key: "register",
//         value: function(e) {
//             this.assembleCtrl.register(e)
//         }
//     }, {
//         key: "request",
//         value: function(e) {
//             return this.requestCtrl.request(e)
//         }
//     }, {
//         key: "disable",
//         value: function(e) {
//             return this.assembleCtrl.disable(e)
//         }
//     }, {
//         key: "with",
//         value: function(e, t) {
//             return this.assembleCtrl.with(e, t)
//         }
//     }, {
//         key: "setFetch",
//         value: function(e) {
//             this.fetch = e,
//             this.requestCtrl.reset()
//         }
//     }, {
//         key: "create",
//         value: function(r) {
//             return new e(t({
//                 fetch: this.fetch
//             }, r || {}))
//         }
//     }]),
//     e
// }()
//   , $e = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r(e) {
//         var n;
//         a(this, r);
//         var o = "//api.bilibili.com"
//           , i = [new Ne, new ge];
//         if (e) {
//             var u = []
//               , s = Array.isArray(e);
//             (s ? e : e.middlewares || []).forEach((function(e) {
//                 var t = i.findIndex((function(t) {
//                     return e.name === t.name
//                 }
//                 ));
//                 t > -1 && i.splice(t, 1),
//                 u.push(e)
//             }
//             )),
//             n = t.call(this, {
//                 fetch: s ? void 0 : e.fetch,
//                 baseURL: !s && e.baseURL || o,
//                 middlewares: [].concat(i, u)
//             })
//         } else
//             n = t.call(this, {
//                 baseURL: o,
//                 middlewares: [].concat(i)
//             });
//         return h(n)
//     }
//     return s(r)
// }(Ve);
// function Ze(e) {
//     return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
// }
// var Qe = {
//     exports: {}
// }
//   , et = {
//     exports: {}
// };
// !function() {
//     var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
//       , t = {
//         rotl: function(e, t) {
//             return e << t | e >>> 32 - t
//         },
//         rotr: function(e, t) {
//             return e << 32 - t | e >>> t
//         },
//         endian: function(e) {
//             if (e.constructor == Number)
//                 return 16711935 & t.rotl(e, 8) | 4278255360 & t.rotl(e, 24);
//             for (var r = 0; r < e.length; r++)
//                 e[r] = t.endian(e[r]);
//             return e
//         },
//         randomBytes: function(e) {
//             for (var t = []; e > 0; e--)
//                 t.push(Math.floor(256 * Math.random()));
//             return t
//         },
//         bytesToWords: function(e) {
//             for (var t = [], r = 0, n = 0; r < e.length; r++,
//             n += 8)
//                 t[n >>> 5] |= e[r] << 24 - n % 32;
//             return t
//         },
//         wordsToBytes: function(e) {
//             for (var t = [], r = 0; r < 32 * e.length; r += 8)
//                 t.push(e[r >>> 5] >>> 24 - r % 32 & 255);
//             return t
//         },
//         bytesToHex: function(e) {
//             for (var t = [], r = 0; r < e.length; r++)
//                 t.push((e[r] >>> 4).toString(16)),
//                 t.push((15 & e[r]).toString(16));
//             return t.join("")
//         },
//         hexToBytes: function(e) {
//             for (var t = [], r = 0; r < e.length; r += 2)
//                 t.push(parseInt(e.substr(r, 2), 16));
//             return t
//         },
//         bytesToBase64: function(t) {
//             for (var r = [], n = 0; n < t.length; n += 3)
//                 for (var o = t[n] << 16 | t[n + 1] << 8 | t[n + 2], i = 0; i < 4; i++)
//                     8 * n + 6 * i <= 8 * t.length ? r.push(e.charAt(o >>> 6 * (3 - i) & 63)) : r.push("=");
//             return r.join("")
//         },
//         base64ToBytes: function(t) {
//             t = t.replace(/[^A-Z0-9+\/]/gi, "");
//             for (var r = [], n = 0, o = 0; n < t.length; o = ++n % 4)
//                 0 != o && r.push((e.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | e.indexOf(t.charAt(n)) >>> 6 - 2 * o);
//             return r
//         }
//     };
//     et.exports = t
// }();
// var tt = et.exports
//   , rt = {
//     utf8: {
//         stringToBytes: function(e) {
//             return rt.bin.stringToBytes(unescape(encodeURIComponent(e)))
//         },
//         bytesToString: function(e) {
//             return decodeURIComponent(escape(rt.bin.bytesToString(e)))
//         }
//     },
//     bin: {
//         stringToBytes: function(e) {
//             for (var t = [], r = 0; r < e.length; r++)
//                 t.push(255 & e.charCodeAt(r));
//             return t
//         },
//         bytesToString: function(e) {
//             for (var t = [], r = 0; r < e.length; r++)
//                 t.push(String.fromCharCode(e[r]));
//             return t.join("")
//         }
//     }
// }
//   , nt = rt
//   , ot = function(e) {
//     return null != e && (it(e) || function(e) {
//         return "function" == typeof e.readFloatLE && "function" == typeof e.slice && it(e.slice(0, 0))
//     }(e) || !!e._isBuffer)
// };
// function it(e) {
//     return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
// }
// !function() {
//     var e = tt
//       , t = nt.utf8
//       , r = ot
//       , n = nt.bin
//       , o = function o(i, a) {
//         i.constructor == String ? i = a && "binary" === a.encoding ? n.stringToBytes(i) : t.stringToBytes(i) : r(i) ? i = Array.prototype.slice.call(i, 0) : Array.isArray(i) || i.constructor === Uint8Array || (i = i.toString());
//         for (var u = e.bytesToWords(i), s = 8 * i.length, c = 1732584193, l = -271733879, f = -1732584194, d = 271733878, p = 0; p < u.length; p++)
//             u[p] = 16711935 & (u[p] << 8 | u[p] >>> 24) | 4278255360 & (u[p] << 24 | u[p] >>> 8);
//         u[s >>> 5] |= 128 << s % 32,
//         u[14 + (s + 64 >>> 9 << 4)] = s;
//         var h = o._ff
//           , y = o._gg
//           , v = o._hh
//           , b = o._ii;
//         for (p = 0; p < u.length; p += 16) {
//             var m = c
//               , w = l
//               , g = f
//               , x = d;
//             c = h(c, l, f, d, u[p + 0], 7, -680876936),
//             d = h(d, c, l, f, u[p + 1], 12, -389564586),
//             f = h(f, d, c, l, u[p + 2], 17, 606105819),
//             l = h(l, f, d, c, u[p + 3], 22, -1044525330),
//             c = h(c, l, f, d, u[p + 4], 7, -176418897),
//             d = h(d, c, l, f, u[p + 5], 12, 1200080426),
//             f = h(f, d, c, l, u[p + 6], 17, -1473231341),
//             l = h(l, f, d, c, u[p + 7], 22, -45705983),
//             c = h(c, l, f, d, u[p + 8], 7, 1770035416),
//             d = h(d, c, l, f, u[p + 9], 12, -1958414417),
//             f = h(f, d, c, l, u[p + 10], 17, -42063),
//             l = h(l, f, d, c, u[p + 11], 22, -1990404162),
//             c = h(c, l, f, d, u[p + 12], 7, 1804603682),
//             d = h(d, c, l, f, u[p + 13], 12, -40341101),
//             f = h(f, d, c, l, u[p + 14], 17, -1502002290),
//             c = y(c, l = h(l, f, d, c, u[p + 15], 22, 1236535329), f, d, u[p + 1], 5, -165796510),
//             d = y(d, c, l, f, u[p + 6], 9, -1069501632),
//             f = y(f, d, c, l, u[p + 11], 14, 643717713),
//             l = y(l, f, d, c, u[p + 0], 20, -373897302),
//             c = y(c, l, f, d, u[p + 5], 5, -701558691),
//             d = y(d, c, l, f, u[p + 10], 9, 38016083),
//             f = y(f, d, c, l, u[p + 15], 14, -660478335),
//             l = y(l, f, d, c, u[p + 4], 20, -405537848),
//             c = y(c, l, f, d, u[p + 9], 5, 568446438),
//             d = y(d, c, l, f, u[p + 14], 9, -1019803690),
//             f = y(f, d, c, l, u[p + 3], 14, -187363961),
//             l = y(l, f, d, c, u[p + 8], 20, 1163531501),
//             c = y(c, l, f, d, u[p + 13], 5, -1444681467),
//             d = y(d, c, l, f, u[p + 2], 9, -51403784),
//             f = y(f, d, c, l, u[p + 7], 14, 1735328473),
//             c = v(c, l = y(l, f, d, c, u[p + 12], 20, -1926607734), f, d, u[p + 5], 4, -378558),
//             d = v(d, c, l, f, u[p + 8], 11, -2022574463),
//             f = v(f, d, c, l, u[p + 11], 16, 1839030562),
//             l = v(l, f, d, c, u[p + 14], 23, -35309556),
//             c = v(c, l, f, d, u[p + 1], 4, -1530992060),
//             d = v(d, c, l, f, u[p + 4], 11, 1272893353),
//             f = v(f, d, c, l, u[p + 7], 16, -155497632),
//             l = v(l, f, d, c, u[p + 10], 23, -1094730640),
//             c = v(c, l, f, d, u[p + 13], 4, 681279174),
//             d = v(d, c, l, f, u[p + 0], 11, -358537222),
//             f = v(f, d, c, l, u[p + 3], 16, -722521979),
//             l = v(l, f, d, c, u[p + 6], 23, 76029189),
//             c = v(c, l, f, d, u[p + 9], 4, -640364487),
//             d = v(d, c, l, f, u[p + 12], 11, -421815835),
//             f = v(f, d, c, l, u[p + 15], 16, 530742520),
//             c = b(c, l = v(l, f, d, c, u[p + 2], 23, -995338651), f, d, u[p + 0], 6, -198630844),
//             d = b(d, c, l, f, u[p + 7], 10, 1126891415),
//             f = b(f, d, c, l, u[p + 14], 15, -1416354905),
//             l = b(l, f, d, c, u[p + 5], 21, -57434055),
//             c = b(c, l, f, d, u[p + 12], 6, 1700485571),
//             d = b(d, c, l, f, u[p + 3], 10, -1894986606),
//             f = b(f, d, c, l, u[p + 10], 15, -1051523),
//             l = b(l, f, d, c, u[p + 1], 21, -2054922799),
//             c = b(c, l, f, d, u[p + 8], 6, 1873313359),
//             d = b(d, c, l, f, u[p + 15], 10, -30611744),
//             f = b(f, d, c, l, u[p + 6], 15, -1560198380),
//             l = b(l, f, d, c, u[p + 13], 21, 1309151649),
//             c = b(c, l, f, d, u[p + 4], 6, -145523070),
//             d = b(d, c, l, f, u[p + 11], 10, -1120210379),
//             f = b(f, d, c, l, u[p + 2], 15, 718787259),
//             l = b(l, f, d, c, u[p + 9], 21, -343485551),
//             c = c + m >>> 0,
//             l = l + w >>> 0,
//             f = f + g >>> 0,
//             d = d + x >>> 0
//         }
//         return e.endian([c, l, f, d])
//     };
//     o._ff = function(e, t, r, n, o, i, a) {
//         var u = e + (t & r | ~t & n) + (o >>> 0) + a;
//         return (u << i | u >>> 32 - i) + t
//     }
//     ,
//     o._gg = function(e, t, r, n, o, i, a) {
//         var u = e + (t & n | r & ~n) + (o >>> 0) + a;
//         return (u << i | u >>> 32 - i) + t
//     }
//     ,
//     o._hh = function(e, t, r, n, o, i, a) {
//         var u = e + (t ^ r ^ n) + (o >>> 0) + a;
//         return (u << i | u >>> 32 - i) + t
//     }
//     ,
//     o._ii = function(e, t, r, n, o, i, a) {
//         var u = e + (r ^ (t | ~n)) + (o >>> 0) + a;
//         return (u << i | u >>> 32 - i) + t
//     }
//     ,
//     o._blocksize = 16,
//     o._digestsize = 16,
//     Qe.exports = function(t, r) {
//         if (null == t)
//             throw new Error("Illegal argument " + t);
//         var i = e.wordsToBytes(o(t, r));
//         return r && r.asBytes ? i : r && r.asString ? n.bytesToString(i) : e.bytesToHex(i)
//     }
// }();
//
//
// var at = Ze(Qe.exports)
//   , ut = function() {
//     function e(t) {
//         var n, o, u = this;
//         a(this, e),
//         c(this, "whitelist", []),
//         c(this, "blacklist", []),
//         c(this, "handler", (function() {
//             return Promise.resolve("Please set a handler for middleware")
//         }
//         )),
//         "function" == typeof t ? n = t : (this.whitelist = (null == t ? void 0 : t.whitelist) || [],
//         this.blacklist = (null == t ? void 0 : t.blacklist) || [],
//         n = null == t ? void 0 : t.handler,
//         null != t && t.payload && (o = t.payload)),
//         this.handler = function() {
//             var t = i(r().mark((function t(i, a, s) {
//                 var c;
//                 return r().wrap((function(t) {
//                     for (; ; )
//                         switch (t.prev = t.next) {
//                         case 0:
//                             if (!0 === (null == s ? void 0 : s.disabled)) {
//                                 t.next = 16;
//                                 break
//                             }
//                             if (c = i.config.url,
//                             !u.whitelist.length) {
//                                 t.next = 9;
//                                 break
//                             }
//                             if (u.match(c, u.whitelist)) {
//                                 t.next = 7;
//                                 break
//                             }
//                             return t.next = 6,
//                             a();
//                         case 6:
//                         case 13:
//                         case 18:
//                         case 21:
//                             return t.abrupt("return", t.sent);
//                         case 7:
//                             t.next = 14;
//                             break;
//                         case 9:
//                             if (!u.blacklist.length) {
//                                 t.next = 14;
//                                 break
//                             }
//                             if (!u.match(c, u.blacklist)) {
//                                 t.next = 14;
//                                 break
//                             }
//                             return t.next = 13,
//                             a();
//                         case 14:
//                             t.next = 19;
//                             break;
//                         case 16:
//                             return t.next = 18,
//                             a();
//                         case 19:
//                             return t.next = 21,
//                             (n || u.handler).bind(u)(i, a, e.mergeConfig(s, o));
//                         case 22:
//                         case "end":
//                             return t.stop()
//                         }
//                 }
//                 ), t)
//             }
//             )));
//             return function(e, r, n) {
//                 return t.apply(this, arguments)
//             }
//         }()
//     }
//     return s(e, [{
//         key: "match",
//         value: function(e, t) {
//             for (var r = !1, n = 0; n < t.length; n++)
//                 if (e.indexOf(t[n]) > -1) {
//                     r = !0;
//                     break
//                 }
//             return r
//         }
//     }]),
//     e
// }();
//     // var module = {};
//
//
//
// c(ut, "handler", void 0),
// c(ut, "mergeConfig", (function(e, r) {
//     return t(t({}, e || {}), {}, {
//         payload: t(t({}, (null == e ? void 0 : e.payload) || {}), r || {})
//     })
// }
// ));
// var st = function(e) {
//     for (var t = "", r = 0; r < e.length; r++)
//         t += String.fromCharCode(e.charCodeAt(r) - 1);
//     return t
// }
//   , ct = "wbi_img_urls";
// function lt(e) {
//     var t, r, n = function(e) {
//         var t;
//         if (e.useAssignKey)
//             return {
//                 imgKey: e.wbiImgKey,
//                 subKey: e.wbiSubKey
//             };
//         var r = (null === (t = function(e) {
//             try {
//                 return localStorage.getItem(e)
//             } catch (e) {
//                 return null
//             }
//         }(ct)) || void 0 === t ? void 0 : t.split("-")) || []
//           , n = r[0]
//           , o = r[1]
//           , i = n ? ft(n) : e.wbiImgKey
//           , a = o ? ft(o) : e.wbiSubKey;
//         return {
//             imgKey: i,
//             subKey: a
//         }
//     }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
//         wbiImgKey: "",
//         wbiSubKey: ""
//     }), o = n.imgKey, i = n.subKey;
//     if (o && i) {
//         for (var a = (t = o + i,
//         r = [],
//         [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52].forEach((function(e) {
//             t.charAt(e) && r.push(t.charAt(e))
//         }
//         )),
//         r.join("").slice(0, 32)), u = Math.round(Date.now() / 1e3), s = Object.assign({}, e, {
//             wts: u
//         }), c = Object.keys(s).sort(), l = [], f = /[!'()*]/g, d = 0; d < c.length; d++) {
//             var p = c[d]
//               , h = s[p];
//             h && "string" == typeof h && (h = h.replace(f, "")),
//             null != h && l.push("".concat(encodeURIComponent(p), "=").concat(encodeURIComponent(h)))
//         }
//         var y = l.join("&");
//         return {
//             w_rid: at(y + a),
//             wts: u.toString()
//         }
//     }
//     return null
// }
// function ft(e) {
//     return e.substring(e.lastIndexOf("/") + 1, e.length).split(".")[0]
// }
// var dt = "d569546b86c252:db:9bc7e99c5d71e5"
//   , pt = "557251g796:g54:f:ee94g8fg969e2de"
//   , ht = function(e, t) {
//     try {
//         return Object.fromEntries(Object.entries(e).map((function(e) {
//             var r = v(e, 2)
//               , n = r[0]
//               , o = r[1];
//             return ["".concat(t).concat(n), o]
//         }
//         )))
//     } catch (e) {
//         return console.error(e),
//         {}
//     }
// }
//   , yt = function(e, t) {
//     if (!t || 0 === t.length)
//         return e;
//     var r = {};
//     return t.forEach((function(t) {
//         for (var n = t.split("."), o = e, i = 0; i < n.length && void 0 !== o[n[i]]; i++)
//             i === n.length - 1 ? r[t] = o[n[i]] : o = o[n[i]]
//     }
//     )),
//     r
// }
//   , vt = function(e, t) {
//     if (!t || !Array.isArray(t) || 0 === (null == t ? void 0 : t.length))
//         return {};
//     try {
//         if ("string" == typeof e)
//             try {
//                 var r = JSON.parse(e);
//                 return "object" === n(r) && null !== r ? yt(r, t) : {}
//             } catch (e) {
//                 return console.error(e),
//                 {}
//             }
//         if (e instanceof FormData) {
//             var o = {};
//             return e.forEach((function(e, t) {
//                 e instanceof Blob || (o[t] = e)
//             }
//             )),
//             yt(o, t)
//         }
//         if (e instanceof URLSearchParams) {
//             var i = {};
//             return e.forEach((function(e, t) {
//                 i[t] = e
//             }
//             )),
//             yt(i, t)
//         }
//         if (e instanceof Blob || e instanceof ArrayBuffer || e instanceof ReadableStream)
//             return console.error("can not handle binary data or Streams with wbi, please handle it in your own middleware"),
//             {};
//         if ("object" === n(e) && null !== e)
//             return yt(e, t)
//     } catch (e) {
//         return console.error(e),
//         {}
//     }
//     return {}
// }
//   , bt = function() {
//     var e = i(r().mark((function e(t, n, o) {
//         var i, a, u, s, c, l, f;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     if ("undefined" != typeof window) {
//                         e.next = 4;
//                         break
//                     }
//                     return e.next = 3,
//                     n();
//                 case 3:
//                 case 7:
//                 case 14:
//                     return e.abrupt("return", e.sent);
//                 case 4:
//                     if (t.request) {
//                         e.next = 8;
//                         break
//                     }
//                     return e.next = 7,
//                     n();
//                 case 8:
//                     if (c = t.request.params || {},
//                     l = t.request.data ? ht(vt(t.request.data, null == o || null === (i = o.payload) || void 0 === i ? void 0 : i.bodyPayload), null !== (a = null == o || null === (u = o.payload) || void 0 === u ? void 0 : u.bodyPrefix) && void 0 !== a ? a : "w_") : {},
//                     f = lt(Object.assign({}, c, l), (null == o || null === (s = o.payload) || void 0 === s ? void 0 : s.encWbiKeys) || {
//                         wbiImgKey: st(dt),
//                         wbiSubKey: st(pt)
//                     })) {
//                         e.next = 15;
//                         break
//                     }
//                     return e.next = 14,
//                     n();
//                 case 15:
//                     return t.request.params = Object.assign({}, t.request.params, l, f),
//                     e.next = 18,
//                     n();
//                 case 18:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function(t, r, n) {
//         return e.apply(this, arguments)
//     }
// }()
//   , mt = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r() {
//         var e;
//         a(this, r);
//         for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
//             o[i] = arguments[i];
//         return c(p(e = t.call.apply(t, [this].concat(o))), "handler", bt),
//         c(p(e), "name", "WBI_ENCODE"),
//         e
//     }
//     return s(r)
// }(ut);
// c(mt, "handler", bt);
// var wt = function(e) {
//     "undefined" != typeof window && window.__BILI_X_ENGINE_SCRIPT_CACHE__ && void 0 !== window.__BILI_X_ENGINE_SCRIPT_CACHE__[e] && delete window.__BILI_X_ENGINE_SCRIPT_CACHE__[e]
// }
//   , gt = function(e, t) {
//     if ("undefined" == typeof window)
//         return Promise.reject(new Error("window is not defined"));
//     var r, n = e = e.replace(/^https?:\/\//, "//"), o = (r = n,
//     "undefined" == typeof window ? null : window.__BILI_X_ENGINE_SCRIPT_CACHE__ && window.__BILI_X_ENGINE_SCRIPT_CACHE__[r] || null);
//     if (null != o && o.promise)
//         return o.promise;
//     var i = new Promise((function(r, n) {
//         var o = document.createElement("script");
//         o.src = e,
//         null != t && t.behavior && o.setAttribute(t.behavior, ""),
//         o.onload = function() {
//             var o = window;
//             if (t.lib)
//                 return o[t.lib] ? r(o[t.lib]) : n(new Error('Failed to access library "' + t.lib + '" from ' + e));
//             r(null)
//         }
//         ,
//         o.onerror = function() {
//             n(new Error("Failed to load " + e)),
//             document.head.removeChild(o)
//         }
//         ,
//         document.head.appendChild(o)
//     }
//     ));
//     return function(e, t) {
//         "undefined" != typeof window && (window.__BILI_X_ENGINE_SCRIPT_CACHE__ || (window.__BILI_X_ENGINE_SCRIPT_CACHE__ = {}),
//         window.__BILI_X_ENGINE_SCRIPT_CACHE__[e] = t)
//     }(n, {
//         promise: i,
//         lib: null == t ? void 0 : t.lib
//     }),
//     i.then((function() {
//         !1 === (null == t ? void 0 : t.cache) && wt(n)
//     }
//     )).catch((function() {
//         !1 === (null == t ? void 0 : t.cache) && wt(n)
//     }
//     )),
//     i
// }
//   , xt = function(e) {
//     return Promise.resolve(function() {
//         try {
//             return window.KvSDK ? Promise.resolve(window.KvSDK) : Promise.resolve(gt("//s1.hdslb.com/bfs/seed/jinkela/kv-sdk/index.js", {
//                 lib: "KvSDK"
//             }))
//         } catch (e) {
//             return Promise.reject(e)
//         }
//     }()).then((function(t) {
//         return new t(e)
//     }
//     ))
// }
//   , _t = function(e) {
//     try {
//         return window.__biliUserFp__ ? Promise.resolve(window.__biliUserFp__) : (window.__USER_FP_CONFIG__ = e,
//         Promise.resolve(gt("//s1.hdslb.com/bfs/seed/jinkela/short/user-fingerprint/bili-user-fingerprint.min.js", {
//             lib: "__biliUserFp__"
//         })))
//     } catch (e) {
//         return Promise.reject(e)
//     }
// }
//   , kt = function() {
//     var e = i(r().mark((function e(t) {
//         var n, o;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     if (!window.__riskUserLogConfig__) {
//                         e.next = 2;
//                         break
//                     }
//                     return e.abrupt("return", window.__riskUserLogConfig__);
//                 case 2:
//                     return e.prev = 2,
//                     e.next = 5,
//                     xt({
//                         appKey: "333.1339",
//                         apiURL: "//api.bilibili.com",
//                         strict: 1,
//                         nscode: 9
//                     });
//                 case 5:
//                     return n = e.sent,
//                     e.next = 8,
//                     n.getGroup(t);
//                 case 8:
//                     return o = e.sent,
//                     window.__riskUserLogConfig__ = o,
//                     e.abrupt("return", o);
//                 case 13:
//                     return e.prev = 13,
//                     e.t0 = e.catch(2),
//                     console.error("fetchConfig error:", e.t0),
//                     e.abrupt("return", {
//                         payload_log: "0"
//                     });
//                 case 17:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e, null, [[2, 13]])
//     }
//     )));
//     return function(t) {
//         return e.apply(this, arguments)
//     }
// }()
//   , Et = function() {
//     var e = i(r().mark((function e() {
//         var t;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     return e.next = 2,
//                     kt("user_log");
//                 case 2:
//                     return t = e.sent,
//                     e.abrupt("return", "1" === (null == t ? void 0 : t.payload_log));
//                 case 4:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function() {
//         return e.apply(this, arguments)
//     }
// }()
//   , Ot = function() {
//     var e = i(r().mark((function e(n, o, i) {
//         var a, u, s, c, l, f, d, p, h, y, b;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     if (e.prev = 0,
//                     "undefined" != typeof window) {
//                         e.next = 5;
//                         break
//                     }
//                     return e.next = 4,
//                     o();
//                 case 4:
//                 case 12:
//                 case 19:
//                     return e.abrupt("return", e.sent);
//                 case 5:
//                     return e.next = 7,
//                     Et();
//                 case 7:
//                     if (e.sent) {
//                         e.next = 13;
//                         break
//                     }
//                     return n.request && (n.request.params = t(t({}, n.request.params), {}, {
//                         dm_img_switch: "0"
//                     })),
//                     e.next = 12,
//                     o();
//                 case 13:
//                     return e.next = 15,
//                     _t(null !== (a = window.__USER_FP_CONFIG__) && void 0 !== a ? a : {});
//                 case 15:
//                     if (window.__biliUserFp__) {
//                         e.next = 20;
//                         break
//                     }
//                     return console.error("__biliUserFp__ is not found"),
//                     e.next = 19,
//                     o();
//                 case 20:
//                     return u = (null == i ? void 0 : i.payload) || {},
//                     s = u.query,
//                     c = void 0 === s ? {} : s,
//                     l = u.target,
//                     f = window.__biliUserFp__.queryUserLog(t(t({}, c), {}, {
//                         target: l
//                     })),
//                     d = v(f, 4),
//                     p = d[0],
//                     h = d[1],
//                     y = d[2],
//                     b = d[3],
//                     n.request && (n.request.params = t(t({}, n.request.params), {}, {
//                         dm_img_list: p,
//                         dm_img_str: h,
//                         dm_cover_img_str: y,
//                         dm_img_inter: b
//                     })),
//                     e.next = 25,
//                     o();
//                 case 25:
//                     e.next = 32;
//                     break;
//                 case 27:
//                     return e.prev = 27,
//                     e.t0 = e.catch(0),
//                     console.error("http-svc-risk-user-log:", e.t0),
//                     e.next = 32,
//                     o();
//                 case 32:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e, null, [[0, 27]])
//     }
//     )));
//     return function(t, r, n) {
//         return e.apply(this, arguments)
//     }
// }()
//   , Tt = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r(e) {
//         var n;
//         return a(this, r),
//         c(p(n = t.call(this, {
//             handler: Ot,
//             payload: e
//         })), "name", "RISK_USER_LOG"),
//         n
//     }
//     return s(r)
// }(_);
// c(Tt, "handler", Ot);
// var St = "UNIOS_RESET"
//   , At = "UNIOS_WBI_ENCODE"
//   , Ct = "UNIOS_RISK_USER_LOG"
//   , jt = function(e) {
//     l(n, e);
//     var t = y(n);
//     function n() {
//         var e;
//         return a(this, n),
//         e = t.call(this, function() {
//             var e = i(r().mark((function e(t, n, o) {
//                 var i;
//                 return r().wrap((function(e) {
//                     for (; ; )
//                         switch (e.prev = e.next) {
//                         case 0:
//                             if (null == (i = null == o ? void 0 : o.payload) || !i.active) {
//                                 e.next = 5;
//                                 break
//                             }
//                             return e.next = 4,
//                             mt.handler(t, n, o);
//                         case 4:
//                             return e.abrupt("return", e.sent);
//                         case 5:
//                             return e.next = 7,
//                             n();
//                         case 7:
//                         case "end":
//                             return e.stop()
//                         }
//                 }
//                 ), e)
//             }
//             )));
//             return function(t, r, n) {
//                 return e.apply(this, arguments)
//             }
//         }()),
//         c(p(e), "name", At),
//         e
//     }
//     return s(n)
// }(_)
//   , Rt = function(e) {
//     l(n, e);
//     var t = y(n);
//     function n() {
//         var e;
//         return a(this, n),
//         e = t.call(this, function() {
//             var e = i(r().mark((function e(t, n, o) {
//                 var i;
//                 return r().wrap((function(e) {
//                     for (; ; )
//                         switch (e.prev = e.next) {
//                         case 0:
//                             if (null == (i = null == o ? void 0 : o.payload) || !i.active) {
//                                 e.next = 5;
//                                 break
//                             }
//                             return e.next = 4,
//                             Tt.handler(t, n, o);
//                         case 4:
//                             return e.abrupt("return", e.sent);
//                         case 5:
//                             return e.next = 7,
//                             n();
//                         case 7:
//                         case "end":
//                             return e.stop()
//                         }
//                 }
//                 ), e)
//             }
//             )));
//             return function(t, r, n) {
//                 return e.apply(this, arguments)
//             }
//         }()),
//         c(p(e), "name", Ct),
//         e
//     }
//     return s(n)
// }(_)
//   , Pt = function(e) {
//     l(n, e);
//     var t = y(n);
//     function n(e) {
//         var o;
//         return a(this, n),
//         o = t.call(this, {
//             handler: function(e, t, n) {
//                 return i(r().mark((function o() {
//                     var i, a, u;
//                     return r().wrap((function(r) {
//                         for (; ; )
//                             switch (r.prev = r.next) {
//                             case 0:
//                                 return i = (null == n ? void 0 : n.payload) || {},
//                                 a = i.timeout,
//                                 u = i.signal,
//                                 e.config.timeout = a,
//                                 u && (e.abortController = {
//                                     abort: function() {},
//                                     signal: u
//                                 }),
//                                 r.next = 5,
//                                 t();
//                             case 5:
//                             case "end":
//                                 return r.stop()
//                             }
//                     }
//                     ), o)
//                 }
//                 )))()
//             },
//             payload: {
//                 timeout: e.timeout || 8e3
//             }
//         }),
//         c(p(o), "name", St),
//         o
//     }
//     return s(n)
// }(_);
// function It(e, t) {
//     this.service = new e({
//         fetch: null == t ? void 0 : t.fetch,
//         baseURL: null == t ? void 0 : t.baseURL,
//         middlewares: [new Pt({
//             timeout: null == t ? void 0 : t.timeout
//         }), new Rt, new jt].concat(b((null == t ? void 0 : t.middlewares) || []))
//     })
// }
// function qt(e, t) {
//     var r;
//     if (null != e)
//         if ("object" !== n(e) && (e = [e]),
//         r = e,
//         "[object Array]" === toString.call(r))
//             for (var o = 0, i = e.length; o < i; o++)
//                 t.call(null, e[o], o, e);
//         else
//             for (var a in e)
//                 Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
// }
// function Lt(e, t, r) {
//     return qt(t, (function(t, n) {
//         e[n] = r && "function" == typeof t ? Bt(t, r) : t
//     }
//     )),
//     e
// }
// function Bt(e, t) {
//     return function() {
//         for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
//             r[n] = arguments[n];
//         return e.apply(t, r)
//     }
// }
// It.prototype.request = function(e) {
//     var t = this.service;
//     if (e.chainProxy)
//         try {
//             t = e.chainProxy(this.service)
//         } catch (e) {
//             console.warn("chainProxy error:", null == e ? void 0 : e.message)
//         }
//     var r = e.baseURL
//       , n = e.url
//       , o = e.method
//       , i = e.params
//       , a = e.data
//       , u = e.headers
//       , s = e.timeout
//       , c = e.signal
//       , l = e.withCredentials
//       , f = e.responseType;
//     return c && (t = t.disable(Ye.TIMEOUT)),
//     t.with(St, {
//         timeout: s,
//         signal: c
//     }).with(Ye.RES_DATA, {
//         type: f || "json"
//     }).request({
//         url: n,
//         baseURL: r || this.service.baseURL,
//         params: i,
//         data: a,
//         method: o,
//         headers: u,
//         credentials: !1 === l ? "omit" : "include"
//     })
// }
// ,
// It.prototype.get = function(e, r) {
//     return this.request(t(t({}, r || {}), {}, {
//         url: e
//     }))
// }
// ,
// It.prototype.post = function(e, r, n) {
//     return this.request(t(t({}, n || {}), {}, {
//         url: e,
//         data: r || (null == n ? void 0 : n.data)
//     }))
// }
// ;
// var Ut = "undefined" == typeof window
//   , Dt = function(e) {
//     return new Promise((function(t, r) {
//         var n = document.createElement("script");
//         n.src = e,
//         n.onload = function() {
//             t()
//         }
//         ,
//         n.onerror = function() {
//             r(new Error("Failed to load script: ".concat(e)))
//         }
//         ,
//         document.body.appendChild(n)
//     }
//     ))
// }
//   , Nt = "RISK_CAPTCHA"
//   , Ft = function() {
//     var e = i(r().mark((function e() {
//         var t;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     if (!(t = window.CaptchaLoader)) {
//                         e.next = 3;
//                         break
//                     }
//                     return e.abrupt("return", t);
//                 case 3:
//                     return e.next = 5,
//                     Dt("//s1.hdslb.com/bfs/seed/jinkela/risk-captcha-sdk/CaptchaLoader.js");
//                 case 5:
//                     return e.abrupt("return", t = window.CaptchaLoader);
//                 case 6:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function() {
//         return e.apply(this, arguments)
//     }
// }()
//   , Kt = function(e, t) {
//     var r;
//     return (null === (r = e.middleware[t]) || void 0 === r ? void 0 : r.payload) || {}
// }
//   , Ht = function() {
//     var e = i(r().mark((function e(t) {
//         var n, o, i;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     return e.prev = 0,
//                     e.next = 3,
//                     Ft();
//                 case 3:
//                     return n = e.sent,
//                     e.next = 6,
//                     n.load();
//                 case 6:
//                     return o = e.sent,
//                     e.next = 9,
//                     o(t);
//                 case 9:
//                     if (!(i = e.sent)) {
//                         e.next = 12;
//                         break
//                     }
//                     return e.abrupt("return", i);
//                 case 12:
//                     return e.abrupt("return", Promise.reject(new Error("verify captcha error: no token")));
//                 case 15:
//                     return e.prev = 15,
//                     e.t0 = e.catch(0),
//                     e.abrupt("return", Promise.reject(e.t0));
//                 case 18:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e, null, [[0, 15]])
//     }
//     )));
//     return function(t) {
//         return e.apply(this, arguments)
//     }
// }()
//   , Mt = function(e, n) {
//     return function() {
//         var o = i(r().mark((function o(i) {
//             var a, u, s, c, l, f, d, p, h, y;
//             return r().wrap((function(r) {
//                 for (; ; )
//                     switch (r.prev = r.next) {
//                     case 0:
//                         if (!Ut) {
//                             r.next = 2;
//                             break
//                         }
//                         return r.abrupt("return", !1);
//                     case 2:
//                         if (r.prev = 2,
//                         a = {},
//                         u = i.data || {},
//                         -352 !== (s = u.code)) {
//                             r.next = 14;
//                             break
//                         }
//                         if (c = {},
//                         (l = i.headers.get("x-bili-gaia-vvoucher")) ? c.v_voucher = l : Object.assign(c, (null === (f = i.data) || void 0 === f ? void 0 : f.data) || {}),
//                         0 !== Object.keys(c).length) {
//                             r.next = 11;
//                             break
//                         }
//                         return r.abrupt("return", !1);
//                     case 11:
//                         a.riskParams = c,
//                         r.next = 26;
//                         break;
//                     case 14:
//                         if (-401 !== s) {
//                             r.next = 20;
//                             break
//                         }
//                         if (null !== (d = i.data) && void 0 !== d && null !== (d = d.data) && void 0 !== d && d.ga_data) {
//                             r.next = 17;
//                             break
//                         }
//                         return r.abrupt("return", !1);
//                     case 17:
//                         a = null === (p = i.data) || void 0 === p || null === (p = p.data) || void 0 === p ? void 0 : p.ga_data,
//                         r.next = 26;
//                         break;
//                     case 20:
//                         if (e) {
//                             r.next = 22;
//                             break
//                         }
//                         return r.abrupt("return", !1);
//                     case 22:
//                         if (h = e(i.data)) {
//                             r.next = 25;
//                             break
//                         }
//                         return r.abrupt("return", !1);
//                     case 25:
//                         a = h;
//                     case 26:
//                         return r.next = 28,
//                         Ht(t(t({}, a), {}, {
//                             fromSpmid: n
//                         }));
//                     case 28:
//                         return y = r.sent,
//                         r.abrupt("return", {
//                             event: Nt,
//                             data: y
//                         });
//                     case 32:
//                         r.prev = 32,
//                         r.t0 = r.catch(2),
//                         console.warn(r.t0);
//                     case 35:
//                         return r.abrupt("return", !1);
//                     case 36:
//                     case "end":
//                         return r.stop()
//                     }
//             }
//             ), o, null, [[2, 32]])
//         }
//         )));
//         return function(e) {
//             return o.apply(this, arguments)
//         }
//     }()
// }
//   , Gt = function() {
//     var e = i(r().mark((function e(o, a, u) {
//         var s, l, f, d, p, h, y, v, b;
//         return r().wrap((function(e) {
//             for (; ; )
//                 switch (e.prev = e.next) {
//                 case 0:
//                     return s = (null == u ? void 0 : u.payload) || {},
//                     l = s.getToken,
//                     f = s.getCaptchaOptionsFromData,
//                     d = s.fromSpmid,
//                     p = s.inApp,
//                     h = s.times,
//                     y = s.condition,
//                     v = s.onRetry,
//                     b = {
//                         times: h || 0,
//                         condition: function(e) {
//                             return i(r().mark((function t() {
//                                 var n;
//                                 return r().wrap((function(t) {
//                                     for (; ; )
//                                         switch (t.prev = t.next) {
//                                         case 0:
//                                             if (t.prev = 0,
//                                             o.retry) {
//                                                 t.next = 8;
//                                                 break
//                                             }
//                                             return t.next = 4,
//                                             Mt(f, d)(e);
//                                         case 4:
//                                             if (!(n = t.sent)) {
//                                                 t.next = 8;
//                                                 break
//                                             }
//                                             return b.times || (b.runtimeShortCircuit = !0),
//                                             t.abrupt("return", n);
//                                         case 8:
//                                             if (!y) {
//                                                 t.next = 12;
//                                                 break
//                                             }
//                                             return t.next = 11,
//                                             y(e);
//                                         case 11:
//                                             return t.abrupt("return", t.sent);
//                                         case 12:
//                                             return t.abrupt("return", !1);
//                                         case 15:
//                                             return t.prev = 15,
//                                             t.t0 = t.catch(0),
//                                             t.abrupt("return", !1);
//                                         case 18:
//                                         case "end":
//                                             return t.stop()
//                                         }
//                                 }
//                                 ), t, null, [[0, 15]])
//                             }
//                             )))()
//                         },
//                         onRetry: function(e, a) {
//                             return i(r().mark((function i() {
//                                 var u, s, f;
//                                 return r().wrap((function(r) {
//                                     for (; ; )
//                                         switch (r.prev = r.next) {
//                                         case 0:
//                                             if ("object" !== n(a) || (null == a ? void 0 : a.event) !== Nt) {
//                                                 r.next = 9;
//                                                 break
//                                             }
//                                             return delete b.runtimeShortCircuit,
//                                             u = a.data,
//                                             r.next = 5,
//                                             null == l ? void 0 : l(u);
//                                         case 5:
//                                             return o && o.response && o.response.data && (-401 === (s = o.response.data.code) && (e.params = t(t({}, e.params || {}), {}, {
//                                                 token: u,
//                                                 gaia_vtoken: u
//                                             })),
//                                             -352 === s && (e.params = t(t({}, e.params || {}), {}, {
//                                                 gaia_vtoken: u
//                                             }),
//                                             (p || null !== (f = Kt(o, "APP_RUNTIME")) && void 0 !== f && f.version) && (e.headers = t(t({}, e.headers || {}), {}, c({}, "x-bili-gaia-vtoken", u))))),
//                                             r.abrupt("return", e);
//                                         case 9:
//                                             if (!v) {
//                                                 r.next = 13;
//                                                 break
//                                             }
//                                             return r.next = 12,
//                                             v(e, a);
//                                         case 12:
//                                             return r.abrupt("return", r.sent);
//                                         case 13:
//                                             return r.abrupt("return", e);
//                                         case 14:
//                                         case "end":
//                                             return r.stop()
//                                         }
//                                 }
//                                 ), i)
//                             }
//                             )))()
//                         }
//                     },
//                     e.next = 4,
//                     Ae.handler(o, a, {
//                         payload: b
//                     });
//                 case 4:
//                 case "end":
//                     return e.stop()
//                 }
//         }
//         ), e)
//     }
//     )));
//     return function(t, r, n) {
//         return e.apply(this, arguments)
//     }
// }()
//   , Yt = function(e) {
//     l(r, e);
//     var t = y(r);
//     function r(e) {
//         var n;
//         return a(this, r),
//         c(p(n = t.call(this, {
//             handler: Gt,
//             payload: e
//         })), "name", Ye.RETRY),
//         n
//     }
//     return s(r)
// }(_);
// c(Yt, "handler", Gt);
// var Wt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
// function Jt(e) {
//     return function(e, t) {
//         var r = new It(e,t)
//           , n = Bt(It.prototype.request, r);
//         return Lt(n, It.prototype, r),
//         Lt(n, r),
//         n
//     }($e, t(t({}, e || {}), {}, {
//         middlewares: [new Yt]
//     }))
// }
// !function(e) {
//     !function(t) {
//         var r = "undefined" != typeof globalThis && globalThis || void 0 !== e && e || void 0 !== r && r
//           , o = "URLSearchParams"in r
//           , i = "Symbol"in r && "iterator"in Symbol
//           , a = "FileReader"in r && "Blob"in r && function() {
//             try {
//                 return new Blob,
//                 !0
//             } catch (e) {
//                 return !1
//             }
//         }()
//           , u = "FormData"in r
//           , s = "ArrayBuffer"in r;
//         if (s)
//             var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
//               , l = ArrayBuffer.isView || function(e) {
//                 return e && c.indexOf(Object.prototype.toString.call(e)) > -1
//             }
//             ;
//         function f(e) {
//             if ("string" != typeof e && (e = String(e)),
//             /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
//                 throw new TypeError('Invalid character in header field name: "' + e + '"');
//             return e.toLowerCase()
//         }
//         function d(e) {
//             return "string" != typeof e && (e = String(e)),
//             e
//         }
//         function p(e) {
//             var t = {
//                 next: function() {
//                     var t = e.shift();
//                     return {
//                         done: void 0 === t,
//                         value: t
//                     }
//                 }
//             };
//             return i && (t[Symbol.iterator] = function() {
//                 return t
//             }
//             ),
//             t
//         }
//         function h(e) {
//             this.map = {},
//             e instanceof h ? e.forEach((function(e, t) {
//                 this.append(t, e)
//             }
//             ), this) : Array.isArray(e) ? e.forEach((function(e) {
//                 this.append(e[0], e[1])
//             }
//             ), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
//                 this.append(t, e[t])
//             }
//             ), this)
//         }
//         function y(e) {
//             if (e.bodyUsed)
//                 return Promise.reject(new TypeError("Already read"));
//             e.bodyUsed = !0
//         }
//         function v(e) {
//             return new Promise((function(t, r) {
//                 e.onload = function() {
//                     t(e.result)
//                 }
//                 ,
//                 e.onerror = function() {
//                     r(e.error)
//                 }
//             }
//             ))
//         }
//         function b(e) {
//             var t = new FileReader
//               , r = v(t);
//             return t.readAsArrayBuffer(e),
//             r
//         }
//         function m(e) {
//             if (e.slice)
//                 return e.slice(0);
//             var t = new Uint8Array(e.byteLength);
//             return t.set(new Uint8Array(e)),
//             t.buffer
//         }
//         function w() {
//             return this.bodyUsed = !1,
//             this._initBody = function(e) {
//                 var t;
//                 this.bodyUsed = this.bodyUsed,
//                 this._bodyInit = e,
//                 e ? "string" == typeof e ? this._bodyText = e : a && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : u && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : o && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : s && a && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = m(e.buffer),
//                 this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(e) || l(e)) ? this._bodyArrayBuffer = m(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "",
//                 this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
//             }
//             ,
//             a && (this.blob = function() {
//                 var e = y(this);
//                 if (e)
//                     return e;
//                 if (this._bodyBlob)
//                     return Promise.resolve(this._bodyBlob);
//                 if (this._bodyArrayBuffer)
//                     return Promise.resolve(new Blob([this._bodyArrayBuffer]));
//                 if (this._bodyFormData)
//                     throw new Error("could not read FormData body as blob");
//                 return Promise.resolve(new Blob([this._bodyText]))
//             }
//             ,
//             this.arrayBuffer = function() {
//                 if (this._bodyArrayBuffer) {
//                     var e = y(this);
//                     return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
//                 }
//                 return this.blob().then(b)
//             }
//             ),
//             this.text = function() {
//                 var e, t, r, n = y(this);
//                 if (n)
//                     return n;
//                 if (this._bodyBlob)
//                     return e = this._bodyBlob,
//                     t = new FileReader,
//                     r = v(t),
//                     t.readAsText(e),
//                     r;
//                 if (this._bodyArrayBuffer)
//                     return Promise.resolve(function(e) {
//                         for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++)
//                             r[n] = String.fromCharCode(t[n]);
//                         return r.join("")
//                     }(this._bodyArrayBuffer));
//                 if (this._bodyFormData)
//                     throw new Error("could not read FormData body as text");
//                 return Promise.resolve(this._bodyText)
//             }
//             ,
//             u && (this.formData = function() {
//                 return this.text().then(_)
//             }
//             ),
//             this.json = function() {
//                 return this.text().then(JSON.parse)
//             }
//             ,
//             this
//         }
//         h.prototype.append = function(e, t) {
//             e = f(e),
//             t = d(t);
//             var r = this.map[e];
//             this.map[e] = r ? r + ", " + t : t
//         }
//         ,
//         h.prototype.delete = function(e) {
//             delete this.map[f(e)]
//         }
//         ,
//         h.prototype.get = function(e) {
//             return e = f(e),
//             this.has(e) ? this.map[e] : null
//         }
//         ,
//         h.prototype.has = function(e) {
//             return this.map.hasOwnProperty(f(e))
//         }
//         ,
//         h.prototype.set = function(e, t) {
//             this.map[f(e)] = d(t)
//         }
//         ,
//         h.prototype.forEach = function(e, t) {
//             for (var r in this.map)
//                 this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
//         }
//         ,
//         h.prototype.keys = function() {
//             var e = [];
//             return this.forEach((function(t, r) {
//                 e.push(r)
//             }
//             )),
//             p(e)
//         }
//         ,
//         h.prototype.values = function() {
//             var e = [];
//             return this.forEach((function(t) {
//                 e.push(t)
//             }
//             )),
//             p(e)
//         }
//         ,
//         h.prototype.entries = function() {
//             var e = [];
//             return this.forEach((function(t, r) {
//                 e.push([r, t])
//             }
//             )),
//             p(e)
//         }
//         ,
//         i && (h.prototype[Symbol.iterator] = h.prototype.entries);
//         var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
//         function x(e, t) {
//             if (!(this instanceof x))
//                 throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
//             var r, n, o = (t = t || {}).body;
//             if (e instanceof x) {
//                 if (e.bodyUsed)
//                     throw new TypeError("Already read");
//                 this.url = e.url,
//                 this.credentials = e.credentials,
//                 t.headers || (this.headers = new h(e.headers)),
//                 this.method = e.method,
//                 this.mode = e.mode,
//                 this.signal = e.signal,
//                 o || null == e._bodyInit || (o = e._bodyInit,
//                 e.bodyUsed = !0)
//             } else
//                 this.url = String(e);
//             if (this.credentials = t.credentials || this.credentials || "same-origin",
//             !t.headers && this.headers || (this.headers = new h(t.headers)),
//             this.method = (r = t.method || this.method || "GET",
//             n = r.toUpperCase(),
//             g.indexOf(n) > -1 ? n : r),
//             this.mode = t.mode || this.mode || null,
//             this.signal = t.signal || this.signal,
//             this.referrer = null,
//             ("GET" === this.method || "HEAD" === this.method) && o)
//                 throw new TypeError("Body not allowed for GET or HEAD requests");
//             if (this._initBody(o),
//             !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
//                 var i = /([?&])_=[^&]*/;
//                 if (i.test(this.url))
//                     this.url = this.url.replace(i, "$1_=" + (new Date).getTime());
//                 else {
//                     this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
//                 }
//             }
//         }
//         function _(e) {
//             var t = new FormData;
//             return e.trim().split("&").forEach((function(e) {
//                 if (e) {
//                     var r = e.split("=")
//                       , n = r.shift().replace(/\+/g, " ")
//                       , o = r.join("=").replace(/\+/g, " ");
//                     t.append(decodeURIComponent(n), decodeURIComponent(o))
//                 }
//             }
//             )),
//             t
//         }
//         function k(e, t) {
//             if (!(this instanceof k))
//                 throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
//             t || (t = {}),
//             this.type = "default",
//             this.status = void 0 === t.status ? 200 : t.status,
//             this.ok = this.status >= 200 && this.status < 300,
//             this.statusText = void 0 === t.statusText ? "" : "" + t.statusText,
//             this.headers = new h(t.headers),
//             this.url = t.url || "",
//             this._initBody(e)
//         }
//         x.prototype.clone = function() {
//             return new x(this,{
//                 body: this._bodyInit
//             })
//         }
//         ,
//         w.call(x.prototype),
//         w.call(k.prototype),
//         k.prototype.clone = function() {
//             return new k(this._bodyInit,{
//                 status: this.status,
//                 statusText: this.statusText,
//                 headers: new h(this.headers),
//                 url: this.url
//             })
//         }
//         ,
//         k.error = function() {
//             var e = new k(null,{
//                 status: 0,
//                 statusText: ""
//             });
//             return e.type = "error",
//             e
//         }
//         ;
//         var E = [301, 302, 303, 307, 308];
//         k.redirect = function(e, t) {
//             if (-1 === E.indexOf(t))
//                 throw new RangeError("Invalid status code");
//             return new k(null,{
//                 status: t,
//                 headers: {
//                     location: e
//                 }
//             })
//         }
//         ,
//         t.DOMException = r.DOMException;
//         try {
//             new t.DOMException
//         } catch (e) {
//             t.DOMException = function(e, t) {
//                 this.message = e,
//                 this.name = t;
//                 var r = Error(e);
//                 this.stack = r.stack
//             }
//             ,
//             t.DOMException.prototype = Object.create(Error.prototype),
//             t.DOMException.prototype.constructor = t.DOMException
//         }
//         function O(e, o) {
//             return new Promise((function(i, u) {
//                 var c = new x(e,o);
//                 if (c.signal && c.signal.aborted)
//                     return u(new t.DOMException("Aborted","AbortError"));
//                 var l = new XMLHttpRequest;
//                 function f() {
//                     l.abort()
//                 }
//                 l.onload = function() {
//                     var e, t, r = {
//                         status: l.status,
//                         statusText: l.statusText,
//                         headers: (e = l.getAllResponseHeaders() || "",
//                         t = new h,
//                         e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(e) {
//                             return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
//                         }
//                         )).forEach((function(e) {
//                             var r = e.split(":")
//                               , n = r.shift().trim();
//                             if (n) {
//                                 var o = r.join(":").trim();
//                                 t.append(n, o)
//                             }
//                         }
//                         )),
//                         t)
//                     };
//                     r.url = "responseURL"in l ? l.responseURL : r.headers.get("X-Request-URL");
//                     var n = "response"in l ? l.response : l.responseText;
//                     setTimeout((function() {
//                         i(new k(n,r))
//                     }
//                     ), 0)
//                 }
//                 ,
//                 l.onerror = function() {
//                     setTimeout((function() {
//                         u(new TypeError("Network request failed"))
//                     }
//                     ), 0)
//                 }
//                 ,
//                 l.ontimeout = function() {
//                     setTimeout((function() {
//                         u(new TypeError("Network request failed"))
//                     }
//                     ), 0)
//                 }
//                 ,
//                 l.onabort = function() {
//                     setTimeout((function() {
//                         u(new t.DOMException("Aborted","AbortError"))
//                     }
//                     ), 0)
//                 }
//                 ,
//                 l.open(c.method, function(e) {
//                     try {
//                         return "" === e && r.location.href ? r.location.href : e
//                     } catch (t) {
//                         return e
//                     }
//                 }(c.url), !0),
//                 "include" === c.credentials ? l.withCredentials = !0 : "omit" === c.credentials && (l.withCredentials = !1),
//                 "responseType"in l && (a ? l.responseType = "blob" : s && c.headers.get("Content-Type") && -1 !== c.headers.get("Content-Type").indexOf("application/octet-stream") && (l.responseType = "arraybuffer")),
//                 !o || "object" !== n(o.headers) || o.headers instanceof h ? c.headers.forEach((function(e, t) {
//                     l.setRequestHeader(t, e)
//                 }
//                 )) : Object.getOwnPropertyNames(o.headers).forEach((function(e) {
//                     l.setRequestHeader(e, d(o.headers[e]))
//                 }
//                 )),
//                 c.signal && (c.signal.addEventListener("abort", f),
//                 l.onreadystatechange = function() {
//                     4 === l.readyState && c.signal.removeEventListener("abort", f)
//                 }
//                 ),
//                 l.send(void 0 === c._bodyInit ? null : c._bodyInit)
//             }
//             ))
//         }
//         O.polyfill = !0,
//         r.fetch || (r.fetch = O,
//         r.Headers = h,
//         r.Request = x,
//         r.Response = k),
//         t.Headers = h,
//         t.Request = x,
//         t.Response = k,
//         t.fetch = O
//     }({})
// }("undefined" != typeof self ? self : Wt),
// function() {
//     function e(e, t) {
//         if (!(e instanceof t))
//             throw new TypeError("Cannot call a class as a function")
//     }
//     function t(e, t) {
//         for (var r = 0; r < t.length; r++) {
//             var n = t[r];
//             n.enumerable = n.enumerable || !1,
//             n.configurable = !0,
//             "value"in n && (n.writable = !0),
//             Object.defineProperty(e, n.key, n)
//         }
//     }
//     function r(e, r, n) {
//         return r && t(e.prototype, r),
//         n && t(e, n),
//         Object.defineProperty(e, "prototype", {
//             writable: !1
//         }),
//         e
//     }
//     function o(e, t) {
//         if ("function" != typeof t && null !== t)
//             throw new TypeError("Super expression must either be null or a function");
//         e.prototype = Object.create(t && t.prototype, {
//             constructor: {
//                 value: e,
//                 writable: !0,
//                 configurable: !0
//             }
//         }),
//         Object.defineProperty(e, "prototype", {
//             writable: !1
//         }),
//         t && a(e, t)
//     }
//     function i(e) {
//         return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
//             return e.__proto__ || Object.getPrototypeOf(e)
//         }
//         ,
//         i(e)
//     }
//     function a(e, t) {
//         return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
//             return e.__proto__ = t,
//             e
//         }
//         ,
//         a(e, t)
//     }
//     function u() {
//         if ("undefined" == typeof Reflect || !Reflect.construct)
//             return !1;
//         if (Reflect.construct.sham)
//             return !1;
//         if ("function" == typeof Proxy)
//             return !0;
//         try {
//             return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
//             ))),
//             !0
//         } catch (e) {
//             return !1
//         }
//     }
//     function s(e) {
//         if (void 0 === e)
//             throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return e
//     }
//     function c(e, t) {
//         if (t && ("object" === n(t) || "function" == typeof t))
//             return t;
//         if (void 0 !== t)
//             throw new TypeError("Derived constructors may only return object or undefined");
//         return s(e)
//     }
//     function l(e) {
//         var t = u();
//         return function() {
//             var r, n = i(e);
//             if (t) {
//                 var o = i(this).constructor;
//                 r = Reflect.construct(n, arguments, o)
//             } else
//                 r = n.apply(this, arguments);
//             return c(this, r)
//         }
//     }
//     function f(e, t) {
//         for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = i(e)); )
//             ;
//         return e
//     }
//     function d() {
//         return d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
//             var n = f(e, t);
//             if (n) {
//                 var o = Object.getOwnPropertyDescriptor(n, t);
//                 return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value
//             }
//         }
//         ,
//         d.apply(this, arguments)
//     }
//     var p = function() {
//         function t() {
//             e(this, t),
//             Object.defineProperty(this, "listeners", {
//                 value: {},
//                 writable: !0,
//                 configurable: !0
//             })
//         }
//         return r(t, [{
//             key: "addEventListener",
//             value: function(e, t, r) {
//                 e in this.listeners || (this.listeners[e] = []),
//                 this.listeners[e].push({
//                     callback: t,
//                     options: r
//                 })
//             }
//         }, {
//             key: "removeEventListener",
//             value: function(e, t) {
//                 if (e in this.listeners)
//                     for (var r = this.listeners[e], n = 0, o = r.length; n < o; n++)
//                         if (r[n].callback === t)
//                             return void r.splice(n, 1)
//             }
//         }, {
//             key: "dispatchEvent",
//             value: function(e) {
//                 var t = this;
//                 if (e.type in this.listeners) {
//                     for (var r, n = this.listeners[e.type].slice(), o = function() {
//                         r = n[i];
//                         try {
//                             r.callback.call(t, e)
//                         } catch (e) {
//                             Promise.resolve().then((function() {
//                                 throw e
//                             }
//                             ))
//                         }
//                         r.options && r.options.once && t.removeEventListener(e.type, r.callback)
//                     }, i = 0, a = n.length; i < a; i++)
//                         o();
//                     return !e.defaultPrevented
//                 }
//             }
//         }]),
//         t
//     }()
//       , h = function(t) {
//         o(a, t);
//         var n = l(a);
//         function a() {
//             var t;
//             return e(this, a),
//             (t = n.call(this)).listeners || p.call(s(t)),
//             Object.defineProperty(s(t), "aborted", {
//                 value: !1,
//                 writable: !0,
//                 configurable: !0
//             }),
//             Object.defineProperty(s(t), "onabort", {
//                 value: null,
//                 writable: !0,
//                 configurable: !0
//             }),
//             Object.defineProperty(s(t), "reason", {
//                 value: void 0,
//                 writable: !0,
//                 configurable: !0
//             }),
//             t
//         }
//         return r(a, [{
//             key: "toString",
//             value: function() {
//                 return "[object AbortSignal]"
//             }
//         }, {
//             key: "dispatchEvent",
//             value: function(e) {
//                 "abort" === e.type && (this.aborted = !0,
//                 "function" == typeof this.onabort && this.onabort.call(this, e)),
//                 d(i(a.prototype), "dispatchEvent", this).call(this, e)
//             }
//         }]),
//         a
//     }(p)
//       , y = function() {
//         function t() {
//             e(this, t),
//             Object.defineProperty(this, "signal", {
//                 value: new h,
//                 writable: !0,
//                 configurable: !0
//             })
//         }
//         return r(t, [{
//             key: "abort",
//             value: function(e) {
//                 var t;
//                 try {
//                     t = new Event("abort")
//                 } catch (e) {
//                     "undefined" != typeof document ? document.createEvent ? (t = document.createEvent("Event")).initEvent("abort", !1, !1) : (t = document.createEventObject()).type = "abort" : t = {
//                         type: "abort",
//                         bubbles: !1,
//                         cancelable: !1
//                     }
//                 }
//                 var r = e;
//                 if (void 0 === r)
//                     if ("undefined" == typeof document)
//                         (r = new Error("This operation was aborted")).name = "AbortError";
//                     else
//                         try {
//                             r = new DOMException("signal is aborted without reason")
//                         } catch (e) {
//                             (r = new Error("This operation was aborted")).name = "AbortError"
//                         }
//                 this.signal.reason = r,
//                 this.signal.dispatchEvent(t)
//             }
//         }, {
//             key: "toString",
//             value: function() {
//                 return "[object AbortController]"
//             }
//         }]),
//         t
//     }();
//     function v(e) {
//         return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),
//         !0) : "function" == typeof e.Request && !e.Request.prototype.hasOwnProperty("signal") || !e.AbortController
//     }
//     function b(e) {
//         "function" == typeof e && (e = {
//             fetch: e
//         });
//         var t = e
//           , r = t.fetch
//           , n = t.Request
//           , o = void 0 === n ? r.Request : n
//           , i = t.AbortController
//           , a = t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
//           , u = void 0 !== a && a;
//         if (!v({
//             fetch: r,
//             Request: o,
//             AbortController: i,
//             __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: u
//         }))
//             return {
//                 fetch: r,
//                 Request: s
//             };
//         var s = o;
//         (s && !s.prototype.hasOwnProperty("signal") || u) && ((s = function(e, t) {
//             var r;
//             t && t.signal && (r = t.signal,
//             delete t.signal);
//             var n = new o(e,t);
//             return r && Object.defineProperty(n, "signal", {
//                 writable: !1,
//                 enumerable: !1,
//                 configurable: !0,
//                 value: r
//             }),
//             n
//         }
//         ).prototype = o.prototype);
//         var c = r;
//         return {
//             fetch: function(e, t) {
//                 var r = s && s.prototype.isPrototypeOf(e) ? e.signal : t ? t.signal : void 0;
//                 if (r) {
//                     var n;
//                     try {
//                         n = new DOMException("Aborted","AbortError")
//                     } catch (e) {
//                         (n = new Error("Aborted")).name = "AbortError"
//                     }
//                     if (r.aborted)
//                         return Promise.reject(n);
//                     var o = new Promise((function(e, t) {
//                         r.addEventListener("abort", (function() {
//                             return t(n)
//                         }
//                         ), {
//                             once: !0
//                         })
//                     }
//                     ));
//                     return t && t.signal && delete t.signal,
//                     Promise.race([o, c(e, t)])
//                 }
//                 return c(e, t)
//             },
//             Request: s
//         }
//     }
//     "undefined" != typeof Symbol && Symbol.toStringTag && (y.prototype[Symbol.toStringTag] = "AbortController",
//     h.prototype[Symbol.toStringTag] = "AbortSignal"),
//     function(e) {
//         if (v(e))
//             if (e.fetch) {
//                 var t = b(e)
//                   , r = t.fetch
//                   , n = t.Request;
//                 e.fetch = r,
//                 e.Request = n,
//                 Object.defineProperty(e, "AbortController", {
//                     writable: !0,
//                     enumerable: !1,
//                     configurable: !0,
//                     value: y
//                 }),
//                 Object.defineProperty(e, "AbortSignal", {
//                     writable: !0,
//                     enumerable: !1,
//                     configurable: !0,
//                     value: h
//                 })
//             } else
//                 console.warn("fetch() is not available, cannot install abortcontroller-polyfill")
//     }("undefined" != typeof self ? self : Wt)
// }();
// var Xt = Jt();
// return Xt.create = Jt,
// Xt
// }
//
// !function(e, t) {
// "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Unios = t()
// }(this, res());
function res1() {
"use strict";
function add(){
    console.log('hello');
}
function e(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        r.push.apply(r, n)
    }
    return r
}
function t(t) {
    for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2 ? e(Object(n), !0).forEach((function(e) {
            c(t, e, n[e])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }
        ))
    }
    return t
}
function r() {
    r = function() {
        return e
    }
    ;
    var e = {}
      , t = Object.prototype
      , n = t.hasOwnProperty
      , o = Object.defineProperty || function(e, t, r) {
        e[t] = r.value
    }
      , i = "function" == typeof Symbol ? Symbol : {}
      , a = i.iterator || "@@iterator"
      , u = i.asyncIterator || "@@asyncIterator"
      , s = i.toStringTag || "@@toStringTag";
    function c(e, t, r) {
        return Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }),
        e[t]
    }
    try {
        c({}, "")
    } catch (e) {
        c = function(e, t, r) {
            return e[t] = r
        }
    }
    function l(e, t, r, n) {
        var i = t && t.prototype instanceof p ? t : p
          , a = Object.create(i.prototype)
          , u = new T(n || []);
        return o(a, "_invoke", {
            value: _(e, r, u)
        }),
        a
    }
    function f(e, t, r) {
        try {
            return {
                type: "normal",
                arg: e.call(t, r)
            }
        } catch (e) {
            return {
                type: "throw",
                arg: e
            }
        }
    }
    e.wrap = l;
    var d = {};
    function p() {}
    function h() {}
    function y() {}
    var v = {};
    c(v, a, (function() {
        return this
    }
    ));
    var b = Object.getPrototypeOf
      , m = b && b(b(S([])));
    m && m !== t && n.call(m, a) && (v = m);
    var w = y.prototype = p.prototype = Object.create(v);
    function g(e) {
        ["next", "throw", "return"].forEach((function(t) {
            c(e, t, (function(e) {
                return this._invoke(t, e)
            }
            ))
        }
        ))
    }
    function x(e, t) {
        function r(o, i, a, u) {
            var s = f(e[o], e, i);
            if ("throw" !== s.type) {
                var c = s.arg
                  , l = c.value;
                return l && "object" == typeof l && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                    r("next", e, a, u)
                }
                ), (function(e) {
                    r("throw", e, a, u)
                }
                )) : t.resolve(l).then((function(e) {
                    c.value = e,
                    a(c)
                }
                ), (function(e) {
                    return r("throw", e, a, u)
                }
                ))
            }
            u(s.arg)
        }
        var i;
        o(this, "_invoke", {
            value: function(e, n) {
                function o() {
                    return new t((function(t, o) {
                        r(e, n, t, o)
                    }
                    ))
                }
                return i = i ? i.then(o, o) : o()
            }
        })
    }
    function _(e, t, r) {
        var n = "suspendedStart";
        return function(o, i) {
            if ("executing" === n)
                throw new Error("Generator is already running");
            if ("completed" === n) {
                if ("throw" === o)
                    throw i;
                return {
                    value: void 0,
                    done: !0
                }
            }
            for (r.method = o,
            r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                    var u = k(a, r);
                    if (u) {
                        if (u === d)
                            continue;
                        return u
                    }
                }
                if ("next" === r.method)
                    r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                        throw n = "completed",
                        r.arg;
                    r.dispatchException(r.arg)
                } else
                    "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var s = f(e, t, r);
                if ("normal" === s.type) {
                    if (n = r.done ? "completed" : "suspendedYield",
                    s.arg === d)
                        continue;
                    return {
                        value: s.arg,
                        done: r.done
                    }
                }
                "throw" === s.type && (n = "completed",
                r.method = "throw",
                r.arg = s.arg)
            }
        }
    }
    function k(e, t) {
        var r = t.method
          , n = e.iterator[r];
        if (void 0 === n)
            return t.delegate = null,
            "throw" === r && e.iterator.return && (t.method = "return",
            t.arg = void 0,
            k(e, t),
            "throw" === t.method) || "return" !== r && (t.method = "throw",
            t.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
            d;
        var o = f(n, e.iterator, t.arg);
        if ("throw" === o.type)
            return t.method = "throw",
            t.arg = o.arg,
            t.delegate = null,
            d;
        var i = o.arg;
        return i ? i.done ? (t[e.resultName] = i.value,
        t.next = e.nextLoc,
        "return" !== t.method && (t.method = "next",
        t.arg = void 0),
        t.delegate = null,
        d) : i : (t.method = "throw",
        t.arg = new TypeError("iterator result is not an object"),
        t.delegate = null,
        d)
    }
    function E(e) {
        var t = {
            tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]),
        2 in e && (t.finallyLoc = e[2],
        t.afterLoc = e[3]),
        this.tryEntries.push(t)
    }
    function O(e) {
        var t = e.completion || {};
        t.type = "normal",
        delete t.arg,
        e.completion = t
    }
    function T(e) {
        this.tryEntries = [{
            tryLoc: "root"
        }],
        e.forEach(E, this),
        this.reset(!0)
    }
    function S(e) {
        if (e || "" === e) {
            var t = e[a];
            if (t)
                return t.call(e);
            if ("function" == typeof e.next)
                return e;
            if (!isNaN(e.length)) {
                var r = -1
                  , o = function t() {
                    for (; ++r < e.length; )
                        if (n.call(e, r))
                            return t.value = e[r],
                            t.done = !1,
                            t;
                    return t.value = void 0,
                    t.done = !0,
                    t
                };
                return o.next = o
            }
        }
        throw new TypeError(typeof e + " is not iterable")
    }
    return h.prototype = y,
    o(w, "constructor", {
        value: y,
        configurable: !0
    }),
    o(y, "constructor", {
        value: h,
        configurable: !0
    }),
    h.displayName = c(y, s, "GeneratorFunction"),
    e.isGeneratorFunction = function(e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
    }
    ,
    e.mark = function(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
        c(e, s, "GeneratorFunction")),
        e.prototype = Object.create(w),
        e
    }
    ,
    e.awrap = function(e) {
        return {
            __await: e
        }
    }
    ,
    g(x.prototype),
    c(x.prototype, u, (function() {
        return this
    }
    )),
    e.AsyncIterator = x,
    e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new x(l(t, r, n, o),i);
        return e.isGeneratorFunction(r) ? a : a.next().then((function(e) {
            return e.done ? e.value : a.next()
        }
        ))
    }
    ,
    g(w),
    c(w, s, "Generator"),
    c(w, a, (function() {
        return this
    }
    )),
    c(w, "toString", (function() {
        return "[object Generator]"
    }
    )),
    e.keys = function(e) {
        var t = Object(e)
          , r = [];
        for (var n in t)
            r.push(n);
        return r.reverse(),
        function e() {
            for (; r.length; ) {
                var n = r.pop();
                if (n in t)
                    return e.value = n,
                    e.done = !1,
                    e
            }
            return e.done = !0,
            e
        }
    }
    ,
    e.values = S,
    T.prototype = {
        constructor: T,
        reset: function(e) {
            if (this.prev = 0,
            this.next = 0,
            this.sent = this._sent = void 0,
            this.done = !1,
            this.delegate = null,
            this.method = "next",
            this.arg = void 0,
            this.tryEntries.forEach(O),
            !e)
                for (var t in this)
                    "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
        },
        stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type)
                throw e.arg;
            return this.rval
        },
        dispatchException: function(e) {
            if (this.done)
                throw e;
            var t = this;
            function r(r, n) {
                return a.type = "throw",
                a.arg = e,
                t.next = r,
                n && (t.method = "next",
                t.arg = void 0),
                !!n
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o]
                  , a = i.completion;
                if ("root" === i.tryLoc)
                    return r("end");
                if (i.tryLoc <= this.prev) {
                    var u = n.call(i, "catchLoc")
                      , s = n.call(i, "finallyLoc");
                    if (u && s) {
                        if (this.prev < i.catchLoc)
                            return r(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc)
                            return r(i.finallyLoc)
                    } else if (u) {
                        if (this.prev < i.catchLoc)
                            return r(i.catchLoc, !0)
                    } else {
                        if (!s)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc)
                            return r(i.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break
                }
            }
            i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = e,
            a.arg = t,
            i ? (this.method = "next",
            this.next = i.finallyLoc,
            d) : this.complete(a)
        },
        complete: function(e, t) {
            if ("throw" === e.type)
                throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
            this.method = "return",
            this.next = "end") : "normal" === e.type && t && (this.next = t),
            d
        },
        finish: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc),
                    O(r),
                    d
            }
        },
        catch: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        O(r)
                    }
                    return o
                }
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(e, t, r) {
            return this.delegate = {
                iterator: S(e),
                resultName: t,
                nextLoc: r
            },
            "next" === this.method && (this.arg = void 0),
            d
        }
    },
    e
}
function n(e) {
    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ,
    n(e)
}
function o(e, t, r, n, o, i, a) {
    try {
        var u = e[i](a)
          , s = u.value
    } catch (e) {
        return void r(e)
    }
    u.done ? t(s) : Promise.resolve(s).then(n, o)
}
function i(e) {
    return function() {
        var t = this
          , r = arguments;
        return new Promise((function(n, i) {
            var a = e.apply(t, r);
            function u(e) {
                o(a, n, i, u, s, "next", e)
            }
            function s(e) {
                o(a, n, i, u, s, "throw", e)
            }
            u(void 0)
        }
        ))
    }
}
function a(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function u(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, x(n.key), n)
    }
}
function s(e, t, r) {
    return t && u(e.prototype, t),
    r && u(e, r),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function c(e, t, r) {
    return (t = x(t))in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function l(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && d(e, t)
}
function f(e) {
    return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }
    ,
    f(e)
}
function d(e, t) {
    return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t,
        e
    }
    ,
    d(e, t)
}
function p(e) {
    if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function h(e, t) {
    if (t && ("object" == typeof t || "function" == typeof t))
        return t;
    if (void 0 !== t)
        throw new TypeError("Derived constructors may only return object or undefined");
    return p(e)
}
function y(e) {
    var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (e) {
            return !1
        }
    }();
    return function() {
        var r, n = f(e);
        if (t) {
            var o = f(this).constructor;
            r = Reflect.construct(n, arguments, o)
        } else
            r = n.apply(this, arguments);
        return h(this, r)
    }
}
function v(e, t) {
    return function(e) {
        if (Array.isArray(e))
            return e
    }(e) || function(e, t) {
        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != r) {
            var n, o, i, a, u = [], s = !0, c = !1;
            try {
                if (i = (r = r.call(e)).next,
                0 === t) {
                    if (Object(r) !== r)
                        return;
                    s = !1
                } else
                    for (; !(s = (n = i.call(r)).done) && (u.push(n.value),
                    u.length !== t); s = !0)
                        ;
            } catch (e) {
                c = !0,
                o = e
            } finally {
                try {
                    if (!s && null != r.return && (a = r.return(),
                    Object(a) !== a))
                        return
                } finally {
                    if (c)
                        throw o
                }
            }
            return u
        }
    }(e, t) || m(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function b(e) {
    return function(e) {
        if (Array.isArray(e))
            return w(e)
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
            return Array.from(e)
    }(e) || m(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function m(e, t) {
    if (e) {
        if ("string" == typeof e)
            return w(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name),
        "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? w(e, t) : void 0
    }
}
function w(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function g(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
        if (Array.isArray(e) || (r = m(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0
              , o = function() {};
            return {
                s: o,
                n: function() {
                    return n >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[n++]
                    }
                },
                e: function(e) {
                    throw e
                },
                f: o
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, a = !0, u = !1;
    return {
        s: function() {
            r = r.call(e)
        },
        n: function() {
            var e = r.next();
            return a = e.done,
            e
        },
        e: function(e) {
            u = !0,
            i = e
        },
        f: function() {
            try {
                a || null == r.return || r.return()
            } finally {
                if (u)
                    throw i
            }
        }
    }
}
function x(e) {
    var t = function(e, t) {
        if ("object" != typeof e || null === e)
            return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n)
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }(e, "string");
    return "symbol" == typeof t ? t : String(t)
}
var _ = function() {
    function e(t) {
        var n, o, u = this;
        a(this, e),
        c(this, "whitelist", []),
        c(this, "blacklist", []),
        c(this, "handler", (function() {
            return Promise.resolve("Please set a handler for middleware")
        }
        )),
        "function" == typeof t ? n = t : (this.whitelist = (null == t ? void 0 : t.whitelist) || [],
        this.blacklist = (null == t ? void 0 : t.blacklist) || [],
        n = null == t ? void 0 : t.handler,
        null != t && t.payload && (o = t.payload)),
        this.handler = function() {
            var t = i(r().mark((function t(i, a, s) {
                var c;
                return r().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (!0 === (null == s ? void 0 : s.disabled)) {
                                t.next = 16;
                                break
                            }
                            if (c = i.config.url,
                            !u.whitelist.length) {
                                t.next = 9;
                                break
                            }
                            if (u.match(c, u.whitelist)) {
                                t.next = 7;
                                break
                            }
                            return t.next = 6,
                            a();
                        case 6:
                        case 13:
                        case 18:
                        case 21:
                            return t.abrupt("return", t.sent);
                        case 7:
                            t.next = 14;
                            break;
                        case 9:
                            if (!u.blacklist.length) {
                                t.next = 14;
                                break
                            }
                            if (!u.match(c, u.blacklist)) {
                                t.next = 14;
                                break
                            }
                            return t.next = 13,
                            a();
                        case 14:
                            t.next = 19;
                            break;
                        case 16:
                            return t.next = 18,
                            a();
                        case 19:
                            return t.next = 21,
                            (n || u.handler).bind(u)(i, a, e.mergeConfig(s, o));
                        case 22:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function(e, r, n) {
                return t.apply(this, arguments)
            }
        }()
    }
    return s(e, [{
        key: "match",
        value: function(e, t) {
            for (var r = !1, n = 0; n < t.length; n++)
                if (e.indexOf(t[n]) > -1) {
                    r = !0;
                    break
                }
            return r
        }
    }]),
    e
}();
c(_, "handler", void 0),
c(_, "mergeConfig", (function(e, r) {
    return t(t({}, e || {}), {}, {
        payload: t(t({}, (null == e ? void 0 : e.payload) || {}), r || {})
    })
}
));
var k = function() {
    var e = i(r().mark((function e(n, o, i) {
        var a, u, s, c, l, f, d;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if ("undefined" == typeof window) {
                        e.next = 4;
                        break
                    }
                    return e.next = 3,
                    o();
                case 3:
                case 8:
                    return e.abrupt("return", e.sent);
                case 4:
                    if (a = (null == i ? void 0 : i.payload) || {},
                    u = a.url,
                    s = a.headers,
                    c = a.com2co,
                    l = a.sign,
                    f = a.internal,
                    n.request) {
                        e.next = 9;
                        break
                    }
                    return e.next = 8,
                    o();
                case 9:
                    return s && (delete (d = t({}, s)).host,
                    delete d["accept-encoding"],
                    n.request.headers = t(t({
                        Accept: "application/json, text/plain, */*"
                    }, d), n.request.headers)),
                    f && l ? (n.request.url = n.request.url.replace(".com/x/", ".co/x/internal/"),
                    n.request.params = l(t({}, n.request.params || {}))) : u ? n.request.url = u : !1 !== c && (n.request.url = n.request.url.replace(".com", ".co")),
                    e.next = 13,
                    o();
                case 13:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function(t, r, n) {
        return e.apply(this, arguments)
    }
}()
  , E = function(e) {
    l(r, e);
    var t = y(r);
    function r(e) {
        var n;
        return a(this, r),
        c(p(n = t.call(this, {
            handler: k,
            payload: {
                sign: e
            }
        })), "name", "SERVER_SIDE"),
        n
    }
    return s(r)
}(_);
function O(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
c(E, "handler", k);
var T, S, A = {
    exports: {}
}, C = {
    exports: {}
};
T = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
S = {
    rotl: function(e, t) {
        return e << t | e >>> 32 - t
    },
    rotr: function(e, t) {
        return e << 32 - t | e >>> t
    },
    endian: function(e) {
        if (e.constructor == Number)
            return 16711935 & S.rotl(e, 8) | 4278255360 & S.rotl(e, 24);
        for (var t = 0; t < e.length; t++)
            e[t] = S.endian(e[t]);
        return e
    },
    randomBytes: function(e) {
        for (var t = []; e > 0; e--)
            t.push(Math.floor(256 * Math.random()));
        return t
    },
    bytesToWords: function(e) {
        for (var t = [], r = 0, n = 0; r < e.length; r++,
        n += 8)
            t[n >>> 5] |= e[r] << 24 - n % 32;
        return t
    },
    wordsToBytes: function(e) {
        for (var t = [], r = 0; r < 32 * e.length; r += 8)
            t.push(e[r >>> 5] >>> 24 - r % 32 & 255);
        return t
    },
    bytesToHex: function(e) {
        for (var t = [], r = 0; r < e.length; r++)
            t.push((e[r] >>> 4).toString(16)),
            t.push((15 & e[r]).toString(16));
        return t.join("")
    },
    hexToBytes: function(e) {
        for (var t = [], r = 0; r < e.length; r += 2)
            t.push(parseInt(e.substr(r, 2), 16));
        return t
    },
    bytesToBase64: function(e) {
        for (var t = [], r = 0; r < e.length; r += 3)
            for (var n = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++)
                8 * r + 6 * o <= 8 * e.length ? t.push(T.charAt(n >>> 6 * (3 - o) & 63)) : t.push("=");
        return t.join("")
    },
    base64ToBytes: function(e) {
        e = e.replace(/[^A-Z0-9+\/]/gi, "");
        for (var t = [], r = 0, n = 0; r < e.length; n = ++r % 4)
            0 != n && t.push((T.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * n + 8) - 1) << 2 * n | T.indexOf(e.charAt(r)) >>> 6 - 2 * n);
        return t
    }
},
C.exports = S;
var j = C.exports
  , R = {
    utf8: {
        stringToBytes: function(e) {
            return R.bin.stringToBytes(unescape(encodeURIComponent(e)))
        },
        bytesToString: function(e) {
            return decodeURIComponent(escape(R.bin.bytesToString(e)))
        }
    },
    bin: {
        stringToBytes: function(e) {
            for (var t = [], r = 0; r < e.length; r++)
                t.push(255 & e.charCodeAt(r));
            return t
        },
        bytesToString: function(e) {
            for (var t = [], r = 0; r < e.length; r++)
                t.push(String.fromCharCode(e[r]));
            return t.join("")
        }
    }
}
  , P = R
  , I = function(e) {
    return null != e && (q(e) || function(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && q(e.slice(0, 0))
    }(e) || !!e._isBuffer)
};
function q(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
}
!function() {
    var e = j
      , t = P.utf8
      , r = I
      , n = P.bin
      , o = function o(i, a) {
        i.constructor == String ? i = a && "binary" === a.encoding ? n.stringToBytes(i) : t.stringToBytes(i) : r(i) ? i = Array.prototype.slice.call(i, 0) : Array.isArray(i) || i.constructor === Uint8Array || (i = i.toString());
        for (var u = e.bytesToWords(i), s = 8 * i.length, c = 1732584193, l = -271733879, f = -1732584194, d = 271733878, p = 0; p < u.length; p++)
            u[p] = 16711935 & (u[p] << 8 | u[p] >>> 24) | 4278255360 & (u[p] << 24 | u[p] >>> 8);
        u[s >>> 5] |= 128 << s % 32,
        u[14 + (s + 64 >>> 9 << 4)] = s;
        var h = o._ff
          , y = o._gg
          , v = o._hh
          , b = o._ii;
        for (p = 0; p < u.length; p += 16) {
            var m = c
              , w = l
              , g = f
              , x = d;
            c = h(c, l, f, d, u[p + 0], 7, -680876936),
            d = h(d, c, l, f, u[p + 1], 12, -389564586),
            f = h(f, d, c, l, u[p + 2], 17, 606105819),
            l = h(l, f, d, c, u[p + 3], 22, -1044525330),
            c = h(c, l, f, d, u[p + 4], 7, -176418897),
            d = h(d, c, l, f, u[p + 5], 12, 1200080426),
            f = h(f, d, c, l, u[p + 6], 17, -1473231341),
            l = h(l, f, d, c, u[p + 7], 22, -45705983),
            c = h(c, l, f, d, u[p + 8], 7, 1770035416),
            d = h(d, c, l, f, u[p + 9], 12, -1958414417),
            f = h(f, d, c, l, u[p + 10], 17, -42063),
            l = h(l, f, d, c, u[p + 11], 22, -1990404162),
            c = h(c, l, f, d, u[p + 12], 7, 1804603682),
            d = h(d, c, l, f, u[p + 13], 12, -40341101),
            f = h(f, d, c, l, u[p + 14], 17, -1502002290),
            c = y(c, l = h(l, f, d, c, u[p + 15], 22, 1236535329), f, d, u[p + 1], 5, -165796510),
            d = y(d, c, l, f, u[p + 6], 9, -1069501632),
            f = y(f, d, c, l, u[p + 11], 14, 643717713),
            l = y(l, f, d, c, u[p + 0], 20, -373897302),
            c = y(c, l, f, d, u[p + 5], 5, -701558691),
            d = y(d, c, l, f, u[p + 10], 9, 38016083),
            f = y(f, d, c, l, u[p + 15], 14, -660478335),
            l = y(l, f, d, c, u[p + 4], 20, -405537848),
            c = y(c, l, f, d, u[p + 9], 5, 568446438),
            d = y(d, c, l, f, u[p + 14], 9, -1019803690),
            f = y(f, d, c, l, u[p + 3], 14, -187363961),
            l = y(l, f, d, c, u[p + 8], 20, 1163531501),
            c = y(c, l, f, d, u[p + 13], 5, -1444681467),
            d = y(d, c, l, f, u[p + 2], 9, -51403784),
            f = y(f, d, c, l, u[p + 7], 14, 1735328473),
            c = v(c, l = y(l, f, d, c, u[p + 12], 20, -1926607734), f, d, u[p + 5], 4, -378558),
            d = v(d, c, l, f, u[p + 8], 11, -2022574463),
            f = v(f, d, c, l, u[p + 11], 16, 1839030562),
            l = v(l, f, d, c, u[p + 14], 23, -35309556),
            c = v(c, l, f, d, u[p + 1], 4, -1530992060),
            d = v(d, c, l, f, u[p + 4], 11, 1272893353),
            f = v(f, d, c, l, u[p + 7], 16, -155497632),
            l = v(l, f, d, c, u[p + 10], 23, -1094730640),
            c = v(c, l, f, d, u[p + 13], 4, 681279174),
            d = v(d, c, l, f, u[p + 0], 11, -358537222),
            f = v(f, d, c, l, u[p + 3], 16, -722521979),
            l = v(l, f, d, c, u[p + 6], 23, 76029189),
            c = v(c, l, f, d, u[p + 9], 4, -640364487),
            d = v(d, c, l, f, u[p + 12], 11, -421815835),
            f = v(f, d, c, l, u[p + 15], 16, 530742520),
            c = b(c, l = v(l, f, d, c, u[p + 2], 23, -995338651), f, d, u[p + 0], 6, -198630844),
            d = b(d, c, l, f, u[p + 7], 10, 1126891415),
            f = b(f, d, c, l, u[p + 14], 15, -1416354905),
            l = b(l, f, d, c, u[p + 5], 21, -57434055),
            c = b(c, l, f, d, u[p + 12], 6, 1700485571),
            d = b(d, c, l, f, u[p + 3], 10, -1894986606),
            f = b(f, d, c, l, u[p + 10], 15, -1051523),
            l = b(l, f, d, c, u[p + 1], 21, -2054922799),
            c = b(c, l, f, d, u[p + 8], 6, 1873313359),
            d = b(d, c, l, f, u[p + 15], 10, -30611744),
            f = b(f, d, c, l, u[p + 6], 15, -1560198380),
            l = b(l, f, d, c, u[p + 13], 21, 1309151649),
            c = b(c, l, f, d, u[p + 4], 6, -145523070),
            d = b(d, c, l, f, u[p + 11], 10, -1120210379),
            f = b(f, d, c, l, u[p + 2], 15, 718787259),
            l = b(l, f, d, c, u[p + 9], 21, -343485551),
            c = c + m >>> 0,
            l = l + w >>> 0,
            f = f + g >>> 0,
            d = d + x >>> 0
        }
        return e.endian([c, l, f, d])
    };
    o._ff = function(e, t, r, n, o, i, a) {
        var u = e + (t & r | ~t & n) + (o >>> 0) + a;
        return (u << i | u >>> 32 - i) + t
    }
    ,
    o._gg = function(e, t, r, n, o, i, a) {
        var u = e + (t & n | r & ~n) + (o >>> 0) + a;
        return (u << i | u >>> 32 - i) + t
    }
    ,
    o._hh = function(e, t, r, n, o, i, a) {
        var u = e + (t ^ r ^ n) + (o >>> 0) + a;
        return (u << i | u >>> 32 - i) + t
    }
    ,
    o._ii = function(e, t, r, n, o, i, a) {
        var u = e + (r ^ (t | ~n)) + (o >>> 0) + a;
        return (u << i | u >>> 32 - i) + t
    }
    ,
    o._blocksize = 16,
    o._digestsize = 16,
    A.exports = function(t, r) {
        if (null == t)
            throw new Error("Illegal argument " + t);
        var i = e.wordsToBytes(o(t, r));
        return r && r.asBytes ? i : r && r.asString ? n.bytesToString(i) : e.bytesToHex(i)
    }
}();
var L = O(A.exports)
  , B = function(e) {
    for (var t = "", r = 0; r < e.length; r++)
        t += String.fromCharCode(e.charCodeAt(r) - 1);
    return t
}
  , U = "wbi_img_urls";
function D(e, t) {
    t || (t = {});
    var r, n, o = function(e) {
        var t;
        if (e.useAssignKey)
            return {
                imgKey: e.wbiImgKey,
                subKey: e.wbiSubKey
            };
        var r = (null === (t = function(e) {
            try {
                return localStorage.getItem(e)
            } catch (e) {
                return null
            }
        }(U)) || void 0 === t ? void 0 : t.split("-")) || []
          , n = r[0]
          , o = r[1]
          , i = n ? N(n) : e.wbiImgKey
          , a = o ? N(o) : e.wbiSubKey;
        return {
            imgKey: i,
            subKey: a
        }
    }(t), i = o.imgKey, a = o.subKey;
    if (i && a) {
        for (var u = (r = i + a,
        n = [],
        [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52].forEach((function(e) {
            r.charAt(e) && n.push(r.charAt(e))
        }
        )),
        n.join("").slice(0, 32)), s = Math.round(Date.now() / 1e3), c = Object.assign({}, e, {
            wts: s
        }), l = Object.keys(c).sort(), f = [], d = /[!'()*]/g, p = 0; p < l.length; p++) {
            var h = l[p]
              , y = c[h];
            y && "string" == typeof y && (y = y.replace(d, "")),
            null != y && f.push("".concat(encodeURIComponent(h), "=").concat(encodeURIComponent(y)))
        }
        var v = f.join("&");
        return {
            w_rid: L(v + u),
            wts: s.toString()
        }
    }
    return null
}
function N(e) {
    return e.substring(e.lastIndexOf("/") + 1, e.length).split(".")[0]
}
var F = "d569546b86c252:db:9bc7e99c5d71e5"
  , K = "557251g796:g54:f:ee94g8fg969e2de"
  , H = function() {
    var e = i(r().mark((function e(t, n, o) {
        var i, a, u;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if ("undefined" != typeof window) {
                        e.next = 4;
                        break
                    }
                    return e.next = 3,
                    n();
                case 3:
                case 7:
                case 13:
                    return e.abrupt("return", e.sent);
                case 4:
                    if (t.request) {
                        e.next = 8;
                        break
                    }
                    return e.next = 7,
                    n();
                case 8:
                    if (a = t.request.params || {},
                    u = D(a, (null == o || null === (i = o.payload) || void 0 === i ? void 0 : i.encWbiKeys) || {
                        wbiImgKey: B(F),
                        wbiSubKey: B(K)
                    })) {
                        e.next = 14;
                        break
                    }
                    return e.next = 13,
                    n();
                case 14:
                    return t.request.params = Object.assign({}, t.request.params, u),
                    e.next = 17,
                    n();
                case 17:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function(t, r, n) {
        return e.apply(this, arguments)
    }
}()
  , M = function(e) {
    l(r, e);
    var t = y(r);
    function r() {
        var e;
        a(this, r);
        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
        return c(p(e = t.call.apply(t, [this].concat(o))), "handler", H),
        c(p(e), "name", "WBI_ENCODE"),
        e
    }
    return s(r)
}(_);
c(M, "handler", H);
var G = function(e) {
    return "BUILT_IN_".concat(e)
}
  , Y = function(e, t) {
    var r, n = new Error(t || "Request Error: ".concat((null === (r = e.response) || void 0 === r ? void 0 : r.status) || "unknow status"));
    return n.config = e.request,
    e.response && (n.response = e.response,
    e.response.ok || (n.code = e.response.status)),
    n
}
  , W = function(e) {
    return !(!e.name || !e.handler)
}
  , J = "undefined" == typeof window
  , X = function(e) {
    return "[object Object]" === Object.prototype.toString.call(e)
}
  , z = function(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
  , V = function(e, t) {
    var r = [];
    Object.keys(t).forEach((function(e) {
        var o = t[e];
        null != o && (!function(e) {
            return "[object Array]" === toString.call(e)
        }(o) ? o = [o] : e += "[]",
        o.forEach((function(t) {
            !function(e) {
                return "[object Date]" === toString.call(e)
            }(t) ? function(e) {
                return null !== e && "object" === n(e)
            }(t) && (t = JSON.stringify(t)) : t = t.toString(),
            r.push(z(e) + "=" + z(t))
        }
        )))
    }
    ));
    var o = r.join("&");
    if (o) {
        var i = e.indexOf("#");
        -1 !== i && (e = e.slice(0, i)),
        e += (-1 === e.indexOf("?") ? "?" : "&") + o
    }
    return e
}
  , $ = function(e) {
    var t = v(e.split("?"), 2)
      , r = t[0]
      , n = t[1];
    if (n) {
        var o = n.split("&");
        if (o.length) {
            var i, a = {}, u = g(o);
            try {
                for (u.s(); !(i = u.n()).done; ) {
                    var s = v(i.value.split("="), 2)
                      , c = s[0]
                      , l = s[1];
                    c && void 0 !== l && (a[c] = "string" == typeof l ? decodeURIComponent(l) : l)
                }
            } catch (e) {
                u.e(e)
            } finally {
                u.f()
            }
            return {
                url: r,
                params: a
            }
        }
    }
    return {
        url: e
    }
}
  , Z = function(e) {
    for (var t = "", r = 0; r < e.length; r++)
        t += String.fromCharCode(e.charCodeAt(r) - 1);
    return t
}
  , Q = "Content-Type"
  , ee = function(e) {
    return (null == e ? void 0 : e[Q]) || (null == e ? void 0 : e["content-type"])
}
  , te = function(e, t) {
    t && (e[Q] = t)
}
  , re = function() {
    var e = i(r().mark((function e(o, i) {
        var a, u, s, c, l, f, d, p, h, y, b, m, w, x, _, k, E, O;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (o.request) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt("return", i());
                case 2:
                    if (a = o.config,
                    u = a.baseURL,
                    s = a.headers,
                    c = a.params,
                    l = a.data,
                    f = a.credentials,
                    d = void 0 === f ? "include" : f,
                    p = o.config.url,
                    h = o.request.method,
                    y = $(p),
                    b = y.url,
                    (m = y.params) ? (p = o.request.url = b,
                    o.request.params = t(t({}, m), c || {})) : (o.request.url = p,
                    o.request.params = t({}, c || {})),
                    u && !1 === /^(https?:)?\/\//.test(p) && (o.request.url = "".concat(u).concat(p)),
                    o.request.headers = t({}, s || {}),
                    ("POST" === h || "PUT" === h) && l)
                        if ("object" === n(l))
                            if ("undefined" != typeof FormData && l instanceof FormData) {
                                w = new FormData,
                                x = g(l.entries());
                                try {
                                    for (x.s(); !(_ = x.n()).done; )
                                        k = v(_.value, 2),
                                        E = k[0],
                                        O = k[1],
                                        w.append(E, O)
                                } catch (e) {
                                    x.e(e)
                                } finally {
                                    x.f()
                                }
                                o.request.data = w
                            } else
                                Object.keys(l) && (o.request.data = JSON.parse(JSON.stringify(l)));
                        else
                            o.request.data = l;
                    return o.request.credentials = d,
                    e.next = 13,
                    i();
                case 13:
                    return e.abrupt("return", e.sent);
                case 14:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function(t, r) {
        return e.apply(this, arguments)
    }
}()
  , ne = function(e) {
    l(r, e);
    var t = y(r);
    function r() {
        var e;
        a(this, r);
        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
        return c(p(e = t.call.apply(t, [this].concat(o))), "handler", re),
        c(p(e), "name", G("INIT_CTX")),
        e
    }
    return s(r)
}(_);
c(ne, "handler", re);
var oe = "__butils_cache"
  , ie = "__butils_styles"
  , ae = "__butils_scripts"
  , ue = /^(https?:)?(\/\/)?(((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1-6})?([-0-9a-zA-Z+&@#/%=~_|?!:,.;]*)?$/;
function se(e, t) {
    var r = "number" == typeof e;
    return t ? r : r && !Number.isNaN(e) && Number.isFinite(e)
}
function ce(e, t) {
    t || (t = {});
    for (var r = !1 === t.decode, n = t.template || document.cookie, o = {}, i = (r ? n : decodeURIComponent(n)).split(";"), a = !0 === e, u = 0; u < i.length; u++) {
        for (var s = i[u]; " " === s.charAt(0); )
            s = s.substring(1);
        var c = s.split("=")
          , l = c[0]
          , f = c[1];
        if (o[l] = f,
        e === l)
            return o[e]
    }
    return a ? o : ""
}
function le(e, t, r) {
    return new Promise((function(n) {
        t = !1 !== t;
        var o = r ? ie : ae
          , i = function(e) {
            var t = window[oe] || {};
            return t.hasOwnProperty(e) ? t[e] : null
        }(o) || [];
        if (!t && i.indexOf(e) > -1)
            return n(!0);
        var a = document.querySelector("#".concat(e));
        return a && a.parentNode.removeChild(a),
        (i = i.filter((function(t) {
            return t !== e
        }
        ))).push(e),
        function(e, t) {
            var r = window[oe] || {};
            window[oe] = r,
            r[e] = t
        }(o, i),
        n(!1)
    }
    ))
}
function fe(e, t) {
    return new Promise((function(r, n) {
        if (o = e,
        !ue.test(o))
            return n(new Error("src不是一个正确的url地址！"));
        var o, i = "bs_url_".concat(function(e) {
            var t = 0
              , r = -1;
            if (0 === e.length)
                return t;
            for (; ++r < e.length; )
                t = (t << 5) - t + e.charCodeAt(r),
                t |= 0;
            return 10 * Math.abs(t) + e.length % 10
        }(e));
        le(i, t, !1).then((function(t) {
            if (t)
                return r();
            var n = document.createElement("script");
            n.id = i,
            n.type = "text/JavaScript",
            n.src = e,
            n.onload = function() {
                return r()
            }
            ,
            n.onreadystatechange = function() {
                this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || r()
            }
            ,
            document.querySelector("head").appendChild(n)
        }
        ))
    }
    )).then()
}
var de = function() {
    var e = i(r().mark((function e(t, n) {
        var o, i;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (o = t.config.timeout,
                    se(t.config.timeout) || (o = J ? 350 : 1e4),
                    t.abortController || !o || "undefined" == typeof AbortController) {
                        e.next = 11;
                        break
                    }
                    return i = new AbortController,
                    t.abortController = i,
                    t.timeoutId = setTimeout((function() {
                        i.abort()
                    }
                    ), o),
                    e.next = 8,
                    n();
                case 8:
                    clearTimeout(t.timeoutId),
                    e.next = 13;
                    break;
                case 11:
                    return e.next = 13,
                    n();
                case 13:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function(t, r) {
        return e.apply(this, arguments)
    }
}()
  , pe = function(e) {
    l(r, e);
    var t = y(r);
    function r() {
        var e;
        return a(this, r),
        c(p(e = t.call(this, de)), "name", G("TIMEOUT")),
        e
    }
    return s(r)
}(_);
c(pe, "handler", de);
var he = function(e) {
    return e.JSON = "application/json",
    e.Form = "application/x-www-form-urlencoded",
    e.FormData = "multipart/form-data",
    e
}(he || {})
  , ye = function(e, t) {
    return !!t && t.indexOf(e) > -1
}
  , ve = function(e, t, r) {
    if (e.request)
        if (e.request.data = JSON.stringify(t),
        e.request.headers)
            r || te(e.request.headers, "application/json");
        else {
            var n = {};
            te(n, "application/json"),
            e.request.headers = n
        }
}
  , be = function() {
    var e = i(r().mark((function e(t, n, o) {
        var i, a, u, s, c, l, f, d;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (t.request) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt("return", n());
                case 2:
                    if (i = t.request,
                    a = i.method,
                    u = i.params,
                    s = i.headers,
                    t.request.url = V(t.request.url, u || {}),
                    "POST" !== a && "PUT" !== a) {
                        e.next = 17;
                        break
                    }
                    if ("[object Object]" !== Object.prototype.toString.call(t.request.data)) {
                        e.next = 17;
                        break
                    }
                    if (l = ee(s),
                    f = t.request.data,
                    null == o || null === (c = o.payload) || void 0 === c || !c.stringify) {
                        e.next = 14;
                        break
                    }
                    return ve(t, f, l),
                    e.next = 13,
                    n();
                case 13:
                    return e.abrupt("return", e.sent);
                case 14:
                    ye("application/x-www-form-urlencoded", l) && (t.request.data = V("", f).slice(1)),
                    ye("application/json", l || "application/json") && ve(t, f, l),
                    ye("multipart/form-data", l) && (d = Object.keys(f)).length && (t.request.data = d.reduce((function(e, t) {
                        return e.append(t, f[t]),
                        e
                    }
                    ), new FormData));
                case 17:
                    return e.next = 19,
                    n();
                case 19:
                    return e.abrupt("return", e.sent);
                case 20:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function(t, r, n) {
        return e.apply(this, arguments)
    }
}()
  , me = function(e) {
    l(r, e);
    var t = y(r);
    function r() {
        var e;
        return a(this, r),
        c(p(e = t.call(this, be)), "name", G("BODY")),
        e
    }
    return s(r)
}(_);
c(me, "handler", be);
var we = function() {
    var e = i(r().mark((function e(t, n, o) {
        var i, a, u, s, l, f, d, p, h, y, v;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (t.request) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt("return", n());
                case 2:
                    return i = t.request,
                    a = i.method,
                    u = i.data,
                    s = i.headers,
                    l = (null == o ? void 0 : o.payload) || {},
                    f = "",
                    d = !1,
                    p = function() {
                        if (!f && !d)
                            try {
                                f = ce("bili_jct", J ? {
                                    template: (null == s ? void 0 : s.cookie) || (null == s ? void 0 : s.Cookie) || "_",
                                    decode: !1
                                } : {
                                    decode: !1
                                }),
                                d = !0
                            } catch (e) {
                                J || console.warn(e)
                            }
                    }
                    ,
                    h = l.key || "csrf",
                    y = function(e) {
                        var r;
                        if (p(),
                        f && t.request)
                            if ("params" !== e) {
                                if (u)
                                    switch (!0) {
                                    case r = u, "undefined" != typeof FormData && r instanceof FormData:
                                        u.append(h, f);
                                        break;
                                    case X(u):
                                        u[h] = f
                                    }
                            } else
                                t.request.params ? t.request.params[h] = f : t.request.params = c({}, h, f)
                    }
                    ,
                    "GET" === a ? !0 === l.params && y("params") : "POST" !== a && "PUT" !== a || (v = ee(s) || "",
                    void 0 === l.data && void 0 === l.params ? v ? ye(he.JSON, v) ? y("params") : y("data") : void 0 === u || X(u) ? y("params") : y("data") : (l.params && y("params"),
                    l.data && (void 0 === u && (ye(he.FormData, v) ? t.request.data = new FormData : t.request.data = {}),
                    y("data")))),
                    e.next = 12,
                    n();
                case 12:
                    return e.abrupt("return", e.sent);
                case 13:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function(t, r, n) {
        return e.apply(this, arguments)
    }
}()
  , ge = function(e) {
    l(r, e);
    var t = y(r);
    function r() {
        var e;
        return a(this, r),
        c(p(e = t.call(this, we)), "name", G("CSRF")),
        e
    }
    return s(r)
}(_);
c(ge, "handler", we);
var xe = function() {
    var e = i(r().mark((function e(t, n) {
        var o, i, a, u, s, c, l;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (!J) {
                        e.next = 2;
                        break
                    }
                    throw new Error("When you are in a Node environment, please use server-side fetch middleware.");
                case 2:
                    if (window.fetch) {
                        e.next = 4;
                        break
                    }
                    throw new Error("When you are in a non-modern browser, please manually polyfill fetch.");
                case 4:
                    if (t.request) {
                        e.next = 8;
                        break
                    }
                    return e.next = 7,
                    n();
                case 7:
                case 11:
                case 19:
                    return e.abrupt("return", e.sent);
                case 8:
                    if (!t.response) {
                        e.next = 12;
                        break
                    }
                    return e.next = 11,
                    n();
                case 12:
                    return i = t.request,
                    a = i.url,
                    u = i.method,
                    s = i.headers,
                    c = i.credentials,
                    l = t.request.data,
                    e.next = 16,
                    window.fetch(a, {
                        method: u,
                        body: l,
                        headers: s,
                        credentials: c,
                        signal: null === (o = t.abortController) || void 0 === o ? void 0 : o.signal
                    });
                case 16:
                    return t.response = e.sent,
                    e.next = 19,
                    n();
                case 20:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function(t, r) {
        return e.apply(this, arguments)
    }
}()
  , _e = function(e) {
    l(r, e);
    var t = y(r);
    function r() {
        var e;
        a(this, r);
        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
        return c(p(e = t.call.apply(t, [this].concat(o))), "handler", xe),
        c(p(e), "name", G("FETCH")),
        e
    }
    return s(r)
}(_);
c(_e, "handler", xe);
var ke = function() {
    var e = i(r().mark((function e(t, n, o) {
        var i, a, u;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n();
                case 2:
                    if (null === (i = t.response) || void 0 === i || !i.ok) {
                        e.next = 14;
                        break
                    }
                    if (void 0 !== t.response.data) {
                        e.next = 14;
                        break
                    }
                    return e.prev = 4,
                    u = (null == o || null === (a = o.payload) || void 0 === a ? void 0 : a.type) || "json",
                    e.next = 8,
                    t.response[u]();
                case 8:
                    t.response.data = e.sent,
                    e.next = 14;
                    break;
                case 11:
                    e.prev = 11,
                    e.t0 = e.catch(4),
                    console.warn(e.t0);
                case 14:
                case "end":
                    return e.stop()
                }
        }
        ), e, null, [[4, 11]])
    }
    )));
    return function(t, r, n) {
        return e.apply(this, arguments)
    }
}()
  , Ee = function(e) {
    l(r, e);
    var t = y(r);
    function r() {
        var e;
        return a(this, r),
        c(p(e = t.call(this, ke)), "name", G("RES_DATA")),
        e
    }
    return s(r)
}(_);
c(Ee, "handler", ke);
var Oe = function() {
    var e = i(r().mark((function e(t, n) {
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n();
                case 2:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function(t, r) {
        return e.apply(this, arguments)
    }
}()
  , Te = function(e) {
    l(n, e);
    var t = y(n);
    function n(e, o) {
        var u;
        return a(this, n),
        c(p(u = t.call(this)), "name", G("SPRAY")),
        u.handler = function() {
            var t = i(r().mark((function t(n, i) {
                return r().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            e(n, i, {
                                payload: o
                            });
                        case 2:
                            return t.abrupt("return", t.sent);
                        case 3:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function(e, r) {
                return t.apply(this, arguments)
            }
        }(),
        u
    }
    return s(n)
}(_);
c(Te, "handler", Oe);
var Se = function() {
    var e = i(r().mark((function e(t, n, o) {
        var a, u, s, c, l, f, d, p, h;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return u = null === (a = t.request) || void 0 === a ? void 0 : a.function,
                    s = (null == o ? void 0 : o.payload) || {
                        times: 0
                    },
                    c = s.times,
                    l = s.condition,
                    f = s.onRetry,
                    d = function() {
                        return !c || t.retry === c
                    }
                    ,
                    p = function() {
                        var e = i(r().mark((function e(n) {
                            var i, a;
                            return r().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (u) {
                                            e.next = 2;
                                            break
                                        }
                                        throw Y(t, "Missing request function");
                                    case 2:
                                        if (!d() || null != o && null !== (i = o.payload) && void 0 !== i && i.runtimeShortCircuit) {
                                            e.next = 4;
                                            break
                                        }
                                        throw Y(t);
                                    case 4:
                                        if (t.retry = t.retry ? t.retry + 1 : 1,
                                        e.prev = 5,
                                        !f) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.next = 9,
                                        f(t.config, n);
                                    case 9:
                                        (a = e.sent) && (t.config = a);
                                    case 11:
                                        return t.response && delete t.response,
                                        e.next = 14,
                                        u(t);
                                    case 14:
                                        e.next = 19;
                                        break;
                                    case 16:
                                        throw e.prev = 16,
                                        e.t0 = e.catch(5),
                                        Y(t, e.t0.message);
                                    case 19:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[5, 16]])
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    e.prev = 4,
                    e.next = 7,
                    n();
                case 7:
                    e.next = 16;
                    break;
                case 9:
                    if (e.prev = 9,
                    e.t0 = e.catch(4),
                    !d()) {
                        e.next = 13;
                        break
                    }
                    throw Y(t, null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message);
                case 13:
                    return e.next = 15,
                    p();
                case 15:
                case 23:
                    return e.abrupt("return");
                case 16:
                    if (!l) {
                        e.next = 24;
                        break
                    }
                    return e.next = 19,
                    l(t.response);
                case 19:
                    if (!(h = e.sent)) {
                        e.next = 24;
                        break
                    }
                    return e.next = 23,
                    p(h);
                case 24:
                    if (t.response && t.response.ok) {
                        e.next = 27;
                        break
                    }
                    return e.next = 27,
                    p();
                case 27:
                case "end":
                    return e.stop()
                }
        }
        ), e, null, [[4, 9]])
    }
    )));
    return function(t, r, n) {
        return e.apply(this, arguments)
    }
}()
  , Ae = function(e) {
    l(r, e);
    var t = y(r);
    function r() {
        var e;
        a(this, r);
        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
        return c(p(e = t.call.apply(t, [this].concat(o))), "name", G("RETRY")),
        c(p(e), "handler", Se),
        e
    }
    return s(r)
}(_);
c(Ae, "handler", Se);
var Ce = !1
  , je = "bili_ticket"
  , Re = "bili_ticket_expires"
  , Pe = "wbi_img_urls"
  , Ie = function() {
    var e = i(r().mark((function e(t) {
        var n, o, a, u, s, c, l, f, d;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (o = ce(je, {
                        decode: !1
                    }),
                    a = "",
                    u = "",
                    null !== (n = window) && void 0 !== n && n.UNIFY_HTTP_WBI_CONFIG ? (c = (null === (s = window.UNIFY_HTTP_WBI_CONFIG) || void 0 === s ? void 0 : s.split("-")) || [],
                    l = v(c, 2),
                    a = l[0],
                    u = l[1]) : (f = (localStorage.getItem(Pe) || "").split("-"),
                    d = v(f, 2),
                    a = d[0],
                    u = d[1]),
                    !qe() && o && a && u) {
                        e.next = 9;
                        break
                    }
                    if (!Ce) {
                        e.next = 8;
                        break
                    }
                    return e.abrupt("return");
                case 8:
                    t.useAsyncRequest(function() {
                        var e = i(r().mark((function e(t) {
                            var n, o, i, a;
                            return r().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        Ce = !0,
                                        e.next = 4,
                                        Ue();
                                    case 4:
                                        return i = e.sent,
                                        e.next = 7,
                                        t({
                                            url: i,
                                            method: "POST",
                                            credentials: "include"
                                        });
                                    case 7:
                                        0 === (null == (a = e.sent) ? void 0 : a.code) && null !== (n = a.data) && void 0 !== n && n.ticket && null !== (o = a.data) && void 0 !== o && o.nav && Be(a.data);
                                    case 9:
                                        return e.prev = 9,
                                        Ce = !1,
                                        e.finish(9);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[0, , 9, 12]])
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }());
                case 9:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function(t) {
        return e.apply(this, arguments)
    }
}()
  , qe = function() {
    var e = ce(Re, {
        decode: !1
    })
      , t = (new Date).getTime();
    return 1e3 * e - t <= 18e5 || 1e3 * e < t
}
  , Le = function(e, t, r) {
    var n;
    null !== (n = window) && void 0 !== n && null !== (n = n.biliBridgePc) && void 0 !== n && n.callNative ? window.biliBridgePc.callNative("auth/setCookies", [{
        name: e,
        value: t,
        expirationDate: Math.ceil(Date.now() / 1e3) + r,
        isExpiredRemove: !0
    }]) : function(e, t, r) {
        var n = ""
          , o = 0;
        if (!1 !== (r = r || {}).encode && (t = encodeURIComponent(t)),
        se(r.exMinuts) && (o += 6e4 * r.exMinuts),
        se(r.exDays) && (o += 864e5 * r.exDays),
        o) {
            var i = new Date;
            i.setTime(i.getTime() + o),
            n = ";expires=".concat(i.toUTCString())
        }
        var a = function(e) {
            return "string" == typeof e
        }(r.domain) ? ";domain=".concat(r.domain) : "";
        document.cookie = "".concat(e, "=").concat(t).concat(n, ";path=/").concat(a)
    }(e, t, {
        domain: ".bilibili.com",
        exMinuts: r / 60
    })
}
  , Be = function(e) {
    var t = e.ticket
      , r = e.nav
      , n = e.ttl
      , o = e.created_at;
    Le(je, t, n),
    Le(Re, String(o + n), n),
    window.UNIFY_HTTP_WBI_CONFIG = "".concat(r.img, "-").concat(r.sub),
    localStorage.setItem(Pe, "".concat(r.img, "-").concat(r.sub))
}
  , Ue = function() {
    var e = i(r().mark((function e() {
        var t, n, o, i, a;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return t = Math.floor((new Date).getTime() / 1e3),
                    n = "YhxToH[2q",
                    e.next = 4,
                    fe("//s1.hdslb.com/bfs/static/jinkela/long/unify-http-request/forticket.min.js");
                case 4:
                    if (window.CryptoJS) {
                        e.next = 6;
                        break
                    }
                    throw new Error("CryptoJS is not found");
                case 6:
                    if (window.CryptoJS.HmacSHA256) {
                        e.next = 8;
                        break
                    }
                    throw new Error("CryptoJS.HmacSHA256 is not found");
                case 8:
                    if (window.CryptoJS.enc) {
                        e.next = 10;
                        break
                    }
                    throw new Error("CryptoJS.enc is not found");
                case 10:
                    return o = window.CryptoJS.HmacSHA256("ts".concat(t), Z(n)),
                    i = window.CryptoJS.enc.Hex.stringify(o),
                    e.next = 14,
                    V("//api.bilibili.com/bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket", {
                        key_id: "ec02",
                        hexsign: i,
                        "context[ts]": t,
                        csrf: ce("bili_jct", {
                            decode: !1
                        })
                    });
                case 14:
                    return a = e.sent,
                    e.abrupt("return", a);
                case 16:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function() {
        return e.apply(this, arguments)
    }
}()
  , De = function() {
    var e = i(r().mark((function e(n, o) {
        var i, a, u, s;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if ("undefined" != typeof window) {
                        e.next = 4;
                        break
                    }
                    return e.next = 3,
                    o();
                case 3:
                    return e.abrupt("return", e.sent);
                case 4:
                    n.request && (i = n.request,
                    a = i.method,
                    null != (u = i.params) && u.web_location || "GET" !== a || (n.request.params = t(t({}, n.request.params || {}), {}, {
                        web_location: (null === (s = document.getElementsByTagName("meta").spm_prefix) || void 0 === s ? void 0 : s.content) || "0.0"
                    })));
                    try {
                        Ie(n)
                    } catch (e) {
                        console.log("[updateTicketAndWbi]", e)
                    }
                    return e.next = 8,
                    o();
                case 8:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function(t, r) {
        return e.apply(this, arguments)
    }
}()
  , Ne = function(e) {
    l(r, e);
    var t = y(r);
    function r() {
        var e;
        return a(this, r),
        c(p(e = t.call(this, De)), "name", G("TICKET_WBI")),
        e
    }
    return s(r)
}(_);
c(Ne, "handler", De);
var Fe = function(e, t) {
    return Object.keys(t).sort().reduce((function(e, r) {
        return e += "_".concat(r, ":").concat(t[r])
    }
    ), "api:".concat(e))
}
  , Ke = function() {
    var e = i(r().mark((function e(t, n, o) {
        var i, a, u, s, c, l;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (t.request && "GET" === t.request.method) {
                        e.next = 4;
                        break
                    }
                    return e.next = 3,
                    n();
                case 3:
                    return e.abrupt("return", e.sent);
                case 4:
                    if (null != o && o.payload) {
                        e.next = 8;
                        break
                    }
                    return e.next = 7,
                    n();
                case 7:
                    return e.abrupt("return", e.sent);
                case 8:
                    if (i = o.payload,
                    a = i.store,
                    u = i.extra,
                    (s = o.payload.key) && a) {
                        e.next = 14;
                        break
                    }
                    return e.next = 13,
                    n();
                case 13:
                    return e.abrupt("return", e.sent);
                case 14:
                    if ("string" != typeof s && (s = Fe(t.request.url, s)),
                    !(c = a.get(s, u))) {
                        e.next = 22;
                        break
                    }
                    return t.response = new Response(JSON.stringify(c),{
                        status: 200,
                        statusText: "Cache:".concat(s)
                    }),
                    e.next = 20,
                    n();
                case 20:
                    e.next = 25;
                    break;
                case 22:
                    return e.next = 24,
                    n();
                case 24:
                    null !== (l = t.response) && void 0 !== l && l.data && a.set(s, t.response.data, u);
                case 25:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function(t, r, n) {
        return e.apply(this, arguments)
    }
}()
  , He = function(e) {
    l(r, e);
    var t = y(r);
    function r(e) {
        var n;
        return a(this, r),
        c(p(n = t.call(this, {
            handler: Ke,
            payload: {
                store: e
            }
        })), "name", G("CACHE")),
        n
    }
    return s(r)
}(_);
c(He, "handler", Ke);
var Me = s((function e(t) {
    a(this, e),
    this.httpSvc = t
}
))
  , Ge = function(e) {
    l(n, e);
    var r = y(n);
    function n() {
        return a(this, n),
        r.apply(this, arguments)
    }
    return s(n, [{
        key: "provide",
        value: function() {
            var e = this
              , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , r = {
                inject: function(n, o) {
                    return e.inject(t, n, o),
                    r
                },
                disable: function(n) {
                    return e.disable(t, n),
                    r
                },
                get: function() {
                    return t
                }
            };
            return r
        }
    }, {
        key: "inject",
        value: function(e, t, r) {
            e[t] = r
        }
    }, {
        key: "disable",
        value: function(e, r) {
            e[r] = t(t({}, e[r] || {}), {}, {
                disabled: !0
            })
        }
    }, {
        key: "get",
        value: function(e, t) {
            return e[t] || {}
        }
    }]),
    n
}(Me)
  , Ye = {
    INIT_CTX: G("INIT_CTX"),
    TIMEOUT: G("TIMEOUT"),
    BODY: G("BODY"),
    CSRF: G("CSRF"),
    FETCH: G("FETCH"),
    RETRY: G("RETRY"),
    SPRAY: G("SPRAY"),
    RES_DATA: G("RES_DATA"),
    RES_EXTRACT: G("RES_EXTRACT"),
    TICKET_WBI: G("TICKET_WBI"),
    LOG: G("LOG"),
    CACHE: G("CACHE")
}
  , We = "$ORDER_"
  , Je = function() {
    function e(t) {
        a(this, e),
        c(this, "middlewares", []),
        c(this, "middlewareConfigCtxProvider", void 0),
        this.control = t,
        this.middlewareConfigCtxProvider = this.control.httpSvc.configCtrl.provide()
    }
    return s(e, [{
        key: "with",
        value: function(e, t) {
            return e ? ("string" == typeof e ? (this.middlewares.push({
                name: "".concat(We).concat(e),
                handler: Te.handler
            }),
            t && this.inject(e, t)) : "function" == typeof e ? this.middlewares.push(new Te(e,t)) : W(e) && (this.middlewares.push(e),
            t && this.inject(e.name, t)),
            this) : this
        }
    }, {
        key: "inject",
        value: function(e, t) {
            return this.middlewareConfigCtxProvider.inject(e, {
                payload: t
            }),
            this
        }
    }, {
        key: "disable",
        value: function(e) {
            return this.middlewareConfigCtxProvider.disable(e),
            this
        }
    }, {
        key: "request",
        value: function(e) {
            var t = this.control.compose(this.middlewares);
            return this.control.httpSvc.requestCtrl.request(e, this.middlewareConfigCtxProvider.get(), t)
        }
    }]),
    e
}()
  , Xe = function(e) {
    l(n, e);
    var t = y(n);
    function n() {
        var e;
        a(this, n);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return c(p(e = t.call.apply(t, [this].concat(o))), "middlewares", []),
        e
    }
    return s(n, [{
        key: "alreadyExistsIdx",
        value: function(e) {
            return this.middlewares.findIndex((function(t) {
                return t.name === e
            }
            ))
        }
    }, {
        key: "register",
        value: function(e) {
            var t = this;
            if (Array.isArray(e)) {
                var r = !1;
                e.forEach((function(e) {
                    if (W(e)) {
                        r = !0;
                        var n = t.alreadyExistsIdx(e.name);
                        n > -1 ? t.middlewares[n] = e : t.middlewares.push(e)
                    }
                }
                )),
                r && this.httpSvc.requestCtrl.reset()
            }
        }
    }, {
        key: "setup",
        value: function() {
            return new Je(this)
        }
    }, {
        key: "disable",
        value: function(e) {
            return this.setup().disable(e)
        }
    }, {
        key: "with",
        value: function(e, t) {
            return this.setup().with(e, t)
        }
    }, {
        key: "compose",
        value: function(e) {
            var t, n = this, o = b(this.middlewares), a = [], u = (c(t = {}, Ye.RETRY, null),
            c(t, Ye.BODY, null),
            c(t, Ye.RES_DATA, null),
            t), s = Object.keys(u), l = {};
            (e || []).forEach((function(e) {
                if (W(e)) {
                    var t = e.name;
                    if (s.includes(t))
                        u[t] || (u[t] = e);
                    else if (t.startsWith(We)) {
                        if (t = t.substring(7),
                        !l[t] && !(t in u)) {
                            var r = o.findIndex((function(e) {
                                return e.name === t
                            }
                            ));
                            if (r > -1) {
                                var n = o[r];
                                o.splice(r, 1),
                                l[t] = n,
                                a.push(n)
                            }
                        }
                    } else
                        Ye.SPRAY === t ? a.push(e) : l[t] || (l[t] = e,
                        a.push(e))
                }
            }
            ));
            var f = [];
            o.forEach((function(e) {
                s.includes(e.name) ? u[e.name] || (u[e.name] = e) : l[e.name] || f.push(e)
            }
            )),
            f.push.apply(f, a);
            var d = [u[Ye.RETRY] || new Ae, new ne].concat(f, [u[Ye.RES_DATA] || new Ee, u[Ye.BODY] || new me, new pe, this.httpSvc.fetch]);
            return function() {
                var e = i(r().mark((function e(t) {
                    var o, a, u, s, c, l, f;
                    return r().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return f = function() {
                                    return (f = i(r().mark((function e(n) {
                                        var o;
                                        return r().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if (n !== d.length) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 2:
                                                    if (!(n <= a)) {
                                                        e.next = 4;
                                                        break
                                                    }
                                                    throw Y(t, "The next() called multiple times");
                                                case 4:
                                                    if (o = d[a = n]) {
                                                        e.next = 8;
                                                        break
                                                    }
                                                    throw Y(t, "Middleware is not exist");
                                                case 8:
                                                    return e.next = 10,
                                                    o.handler(t, l.bind(null, n + 1), u.get(t.middleware, o.name));
                                                case 10:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )))).apply(this, arguments)
                                }
                                ,
                                l = function(e) {
                                    return f.apply(this, arguments)
                                }
                                ,
                                a = -1,
                                u = n.httpSvc.configCtrl,
                                s = u.get(t.middleware, "DEBUG").payload,
                                e.next = 7,
                                l(0);
                            case 7:
                                if (!s) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", t);
                            case 9:
                                if (u.get(t.middleware, Ye.RES_EXTRACT).disabled || null === (o = t.response) || void 0 === o || !o.ok) {
                                    e.next = 12;
                                    break
                                }
                                return e.abrupt("return", (null === (c = t.response) || void 0 === c ? void 0 : c.data) || null);
                            case 12:
                                return e.abrupt("return", t.response);
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
    }]),
    n
}(Me)
  , ze = function(e) {
    l(u, e);
    var n, o = y(u);
    function u() {
        var e;
        a(this, u);
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
        return c(p(e = o.call.apply(o, [this].concat(r))), "fn", null),
        e
    }
    return s(u, [{
        key: "request",
        value: (n = i(r().mark((function e(t) {
            var n, o, i = arguments;
            return r().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return n = i.length > 1 && void 0 !== i[1] ? i[1] : {},
                        (o = i.length > 2 ? i[2] : void 0) || (this.fn || this.generateRequestFunction(),
                        o = this.fn),
                        e.next = 5,
                        o(this.createContext(t, n, o));
                    case 5:
                        return e.abrupt("return", e.sent);
                    case 6:
                    case "end":
                        return e.stop()
                    }
            }
            ), e, this)
        }
        ))),
        function(e) {
            return n.apply(this, arguments)
        }
        )
    }, {
        key: "generateRequestFunction",
        value: function() {
            this.fn = this.httpSvc.assembleCtrl.compose()
        }
    }, {
        key: "reset",
        value: function() {
            this.fn = null
        }
    }, {
        key: "useAsyncRequest",
        get: function() {
            var e = this;
            return function(t, r) {
                var n = e.httpSvc.create(r);
                t(n.request.bind(n))
            }
        }
    }, {
        key: "createContext",
        value: function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 ? arguments[2] : void 0
              , o = e.url
              , i = e.method;
            return {
                config: t({
                    baseURL: this.httpSvc.baseURL
                }, e),
                useAsyncRequest: this.useAsyncRequest,
                middleware: r,
                request: {
                    url: o,
                    method: (i || "get").toUpperCase(),
                    function: n
                }
            }
        }
    }]),
    u
}(Me)
  , Ve = function() {
    function e(t) {
        if (a(this, e),
        c(this, "fetch", void 0),
        c(this, "assembleCtrl", new Xe(this)),
        c(this, "configCtrl", new Ge(this)),
        c(this, "requestCtrl", new ze(this)),
        c(this, "baseURL", "//api.domain.com"),
        t)
            if (Array.isArray(t))
                this.fetch = new _e,
                this.register(t);
            else {
                var r = t.middlewares
                  , n = t.fetch
                  , o = t.baseURL;
                this.fetch = n || new _e,
                this.register(r || []),
                o && (this.baseURL = o)
            }
        else
            this.fetch = new _e,
            this.register([])
    }
    return s(e, [{
        key: "register",
        value: function(e) {
            this.assembleCtrl.register(e)
        }
    }, {
        key: "request",
        value: function(e) {
            return this.requestCtrl.request(e)
        }
    }, {
        key: "disable",
        value: function(e) {
            return this.assembleCtrl.disable(e)
        }
    }, {
        key: "with",
        value: function(e, t) {
            return this.assembleCtrl.with(e, t)
        }
    }, {
        key: "setFetch",
        value: function(e) {
            this.fetch = e,
            this.requestCtrl.reset()
        }
    }, {
        key: "create",
        value: function(r) {
            return new e(t({
                fetch: this.fetch
            }, r || {}))
        }
    }]),
    e
}()
  , $e = function(e) {
    l(r, e);
    var t = y(r);
    function r(e) {
        var n;
        a(this, r);
        var o = "//api.bilibili.com"
          , i = [new Ne, new ge];
        if (e) {
            var u = []
              , s = Array.isArray(e);
            (s ? e : e.middlewares || []).forEach((function(e) {
                var t = i.findIndex((function(t) {
                    return e.name === t.name
                }
                ));
                t > -1 && i.splice(t, 1),
                u.push(e)
            }
            )),
            n = t.call(this, {
                fetch: s ? void 0 : e.fetch,
                baseURL: !s && e.baseURL || o,
                middlewares: [].concat(i, u)
            })
        } else
            n = t.call(this, {
                baseURL: o,
                middlewares: [].concat(i)
            });
        return h(n)
    }
    return s(r)
}(Ve);
function Ze(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Qe = {
    exports: {}
}
  , et = {
    exports: {}
};
!function() {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , t = {
        rotl: function(e, t) {
            return e << t | e >>> 32 - t
        },
        rotr: function(e, t) {
            return e << 32 - t | e >>> t
        },
        endian: function(e) {
            if (e.constructor == Number)
                return 16711935 & t.rotl(e, 8) | 4278255360 & t.rotl(e, 24);
            for (var r = 0; r < e.length; r++)
                e[r] = t.endian(e[r]);
            return e
        },
        randomBytes: function(e) {
            for (var t = []; e > 0; e--)
                t.push(Math.floor(256 * Math.random()));
            return t
        },
        bytesToWords: function(e) {
            for (var t = [], r = 0, n = 0; r < e.length; r++,
            n += 8)
                t[n >>> 5] |= e[r] << 24 - n % 32;
            return t
        },
        wordsToBytes: function(e) {
            for (var t = [], r = 0; r < 32 * e.length; r += 8)
                t.push(e[r >>> 5] >>> 24 - r % 32 & 255);
            return t
        },
        bytesToHex: function(e) {
            for (var t = [], r = 0; r < e.length; r++)
                t.push((e[r] >>> 4).toString(16)),
                t.push((15 & e[r]).toString(16));
            return t.join("")
        },
        hexToBytes: function(e) {
            for (var t = [], r = 0; r < e.length; r += 2)
                t.push(parseInt(e.substr(r, 2), 16));
            return t
        },
        bytesToBase64: function(t) {
            for (var r = [], n = 0; n < t.length; n += 3)
                for (var o = t[n] << 16 | t[n + 1] << 8 | t[n + 2], i = 0; i < 4; i++)
                    8 * n + 6 * i <= 8 * t.length ? r.push(e.charAt(o >>> 6 * (3 - i) & 63)) : r.push("=");
            return r.join("")
        },
        base64ToBytes: function(t) {
            t = t.replace(/[^A-Z0-9+\/]/gi, "");
            for (var r = [], n = 0, o = 0; n < t.length; o = ++n % 4)
                0 != o && r.push((e.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | e.indexOf(t.charAt(n)) >>> 6 - 2 * o);
            return r
        }
    };
    et.exports = t
}();
var tt = et.exports
  , rt = {
    utf8: {
        stringToBytes: function(e) {
            return rt.bin.stringToBytes(unescape(encodeURIComponent(e)))
        },
        bytesToString: function(e) {
            return decodeURIComponent(escape(rt.bin.bytesToString(e)))
        }
    },
    bin: {
        stringToBytes: function(e) {
            for (var t = [], r = 0; r < e.length; r++)
                t.push(255 & e.charCodeAt(r));
            return t
        },
        bytesToString: function(e) {
            for (var t = [], r = 0; r < e.length; r++)
                t.push(String.fromCharCode(e[r]));
            return t.join("")
        }
    }
}
  , nt = rt
  , ot = function(e) {
    return null != e && (it(e) || function(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && it(e.slice(0, 0))
    }(e) || !!e._isBuffer)
};
function it(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
}
!function() {
    var e = tt
      , t = nt.utf8
      , r = ot
      , n = nt.bin
      , o = function o(i, a) {
        i.constructor == String ? i = a && "binary" === a.encoding ? n.stringToBytes(i) : t.stringToBytes(i) : r(i) ? i = Array.prototype.slice.call(i, 0) : Array.isArray(i) || i.constructor === Uint8Array || (i = i.toString());
        for (var u = e.bytesToWords(i), s = 8 * i.length, c = 1732584193, l = -271733879, f = -1732584194, d = 271733878, p = 0; p < u.length; p++)
            u[p] = 16711935 & (u[p] << 8 | u[p] >>> 24) | 4278255360 & (u[p] << 24 | u[p] >>> 8);
        u[s >>> 5] |= 128 << s % 32,
        u[14 + (s + 64 >>> 9 << 4)] = s;
        var h = o._ff
          , y = o._gg
          , v = o._hh
          , b = o._ii;
        for (p = 0; p < u.length; p += 16) {
            var m = c
              , w = l
              , g = f
              , x = d;
            c = h(c, l, f, d, u[p + 0], 7, -680876936),
            d = h(d, c, l, f, u[p + 1], 12, -389564586),
            f = h(f, d, c, l, u[p + 2], 17, 606105819),
            l = h(l, f, d, c, u[p + 3], 22, -1044525330),
            c = h(c, l, f, d, u[p + 4], 7, -176418897),
            d = h(d, c, l, f, u[p + 5], 12, 1200080426),
            f = h(f, d, c, l, u[p + 6], 17, -1473231341),
            l = h(l, f, d, c, u[p + 7], 22, -45705983),
            c = h(c, l, f, d, u[p + 8], 7, 1770035416),
            d = h(d, c, l, f, u[p + 9], 12, -1958414417),
            f = h(f, d, c, l, u[p + 10], 17, -42063),
            l = h(l, f, d, c, u[p + 11], 22, -1990404162),
            c = h(c, l, f, d, u[p + 12], 7, 1804603682),
            d = h(d, c, l, f, u[p + 13], 12, -40341101),
            f = h(f, d, c, l, u[p + 14], 17, -1502002290),
            c = y(c, l = h(l, f, d, c, u[p + 15], 22, 1236535329), f, d, u[p + 1], 5, -165796510),
            d = y(d, c, l, f, u[p + 6], 9, -1069501632),
            f = y(f, d, c, l, u[p + 11], 14, 643717713),
            l = y(l, f, d, c, u[p + 0], 20, -373897302),
            c = y(c, l, f, d, u[p + 5], 5, -701558691),
            d = y(d, c, l, f, u[p + 10], 9, 38016083),
            f = y(f, d, c, l, u[p + 15], 14, -660478335),
            l = y(l, f, d, c, u[p + 4], 20, -405537848),
            c = y(c, l, f, d, u[p + 9], 5, 568446438),
            d = y(d, c, l, f, u[p + 14], 9, -1019803690),
            f = y(f, d, c, l, u[p + 3], 14, -187363961),
            l = y(l, f, d, c, u[p + 8], 20, 1163531501),
            c = y(c, l, f, d, u[p + 13], 5, -1444681467),
            d = y(d, c, l, f, u[p + 2], 9, -51403784),
            f = y(f, d, c, l, u[p + 7], 14, 1735328473),
            c = v(c, l = y(l, f, d, c, u[p + 12], 20, -1926607734), f, d, u[p + 5], 4, -378558),
            d = v(d, c, l, f, u[p + 8], 11, -2022574463),
            f = v(f, d, c, l, u[p + 11], 16, 1839030562),
            l = v(l, f, d, c, u[p + 14], 23, -35309556),
            c = v(c, l, f, d, u[p + 1], 4, -1530992060),
            d = v(d, c, l, f, u[p + 4], 11, 1272893353),
            f = v(f, d, c, l, u[p + 7], 16, -155497632),
            l = v(l, f, d, c, u[p + 10], 23, -1094730640),
            c = v(c, l, f, d, u[p + 13], 4, 681279174),
            d = v(d, c, l, f, u[p + 0], 11, -358537222),
            f = v(f, d, c, l, u[p + 3], 16, -722521979),
            l = v(l, f, d, c, u[p + 6], 23, 76029189),
            c = v(c, l, f, d, u[p + 9], 4, -640364487),
            d = v(d, c, l, f, u[p + 12], 11, -421815835),
            f = v(f, d, c, l, u[p + 15], 16, 530742520),
            c = b(c, l = v(l, f, d, c, u[p + 2], 23, -995338651), f, d, u[p + 0], 6, -198630844),
            d = b(d, c, l, f, u[p + 7], 10, 1126891415),
            f = b(f, d, c, l, u[p + 14], 15, -1416354905),
            l = b(l, f, d, c, u[p + 5], 21, -57434055),
            c = b(c, l, f, d, u[p + 12], 6, 1700485571),
            d = b(d, c, l, f, u[p + 3], 10, -1894986606),
            f = b(f, d, c, l, u[p + 10], 15, -1051523),
            l = b(l, f, d, c, u[p + 1], 21, -2054922799),
            c = b(c, l, f, d, u[p + 8], 6, 1873313359),
            d = b(d, c, l, f, u[p + 15], 10, -30611744),
            f = b(f, d, c, l, u[p + 6], 15, -1560198380),
            l = b(l, f, d, c, u[p + 13], 21, 1309151649),
            c = b(c, l, f, d, u[p + 4], 6, -145523070),
            d = b(d, c, l, f, u[p + 11], 10, -1120210379),
            f = b(f, d, c, l, u[p + 2], 15, 718787259),
            l = b(l, f, d, c, u[p + 9], 21, -343485551),
            c = c + m >>> 0,
            l = l + w >>> 0,
            f = f + g >>> 0,
            d = d + x >>> 0
        }
        return e.endian([c, l, f, d])
    };
    o._ff = function(e, t, r, n, o, i, a) {
        var u = e + (t & r | ~t & n) + (o >>> 0) + a;
        return (u << i | u >>> 32 - i) + t
    }
    ,
    o._gg = function(e, t, r, n, o, i, a) {
        var u = e + (t & n | r & ~n) + (o >>> 0) + a;
        return (u << i | u >>> 32 - i) + t
    }
    ,
    o._hh = function(e, t, r, n, o, i, a) {
        var u = e + (t ^ r ^ n) + (o >>> 0) + a;
        return (u << i | u >>> 32 - i) + t
    }
    ,
    o._ii = function(e, t, r, n, o, i, a) {
        var u = e + (r ^ (t | ~n)) + (o >>> 0) + a;
        return (u << i | u >>> 32 - i) + t
    }
    ,
    o._blocksize = 16,
    o._digestsize = 16,
    Qe.exports = function(t, r) {
        if (null == t)
            throw new Error("Illegal argument " + t);
        var i = e.wordsToBytes(o(t, r));
        return r && r.asBytes ? i : r && r.asString ? n.bytesToString(i) : e.bytesToHex(i)
    }
}();


var at = Ze(Qe.exports)
  , ut = function() {
    function e(t) {
        var n, o, u = this;
        a(this, e),
        c(this, "whitelist", []),
        c(this, "blacklist", []),
        c(this, "handler", (function() {
            return Promise.resolve("Please set a handler for middleware")
        }
        )),
        "function" == typeof t ? n = t : (this.whitelist = (null == t ? void 0 : t.whitelist) || [],
        this.blacklist = (null == t ? void 0 : t.blacklist) || [],
        n = null == t ? void 0 : t.handler,
        null != t && t.payload && (o = t.payload)),
        this.handler = function() {
            var t = i(r().mark((function t(i, a, s) {
                var c;
                return r().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (!0 === (null == s ? void 0 : s.disabled)) {
                                t.next = 16;
                                break
                            }
                            if (c = i.config.url,
                            !u.whitelist.length) {
                                t.next = 9;
                                break
                            }
                            if (u.match(c, u.whitelist)) {
                                t.next = 7;
                                break
                            }
                            return t.next = 6,
                            a();
                        case 6:
                        case 13:
                        case 18:
                        case 21:
                            return t.abrupt("return", t.sent);
                        case 7:
                            t.next = 14;
                            break;
                        case 9:
                            if (!u.blacklist.length) {
                                t.next = 14;
                                break
                            }
                            if (!u.match(c, u.blacklist)) {
                                t.next = 14;
                                break
                            }
                            return t.next = 13,
                            a();
                        case 14:
                            t.next = 19;
                            break;
                        case 16:
                            return t.next = 18,
                            a();
                        case 19:
                            return t.next = 21,
                            (n || u.handler).bind(u)(i, a, e.mergeConfig(s, o));
                        case 22:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function(e, r, n) {
                return t.apply(this, arguments)
            }
        }()
    }
    return s(e, [{
        key: "match",
        value: function(e, t) {
            for (var r = !1, n = 0; n < t.length; n++)
                if (e.indexOf(t[n]) > -1) {
                    r = !0;
                    break
                }
            return r
        }
    }]),
    e
}();
    // var module = {};



c(ut, "handler", void 0),
c(ut, "mergeConfig", (function(e, r) {
    return t(t({}, e || {}), {}, {
        payload: t(t({}, (null == e ? void 0 : e.payload) || {}), r || {})
    })
}
));
var st = function(e) {
    for (var t = "", r = 0; r < e.length; r++)
        t += String.fromCharCode(e.charCodeAt(r) - 1);
    return t
}
  , ct = "wbi_img_urls";
function lt(e) {
    var t, r, n = function(e) {
        var t;
        if (e.useAssignKey)
            return {
                imgKey: e.wbiImgKey,
                subKey: e.wbiSubKey
            };
        var r = (null === (t = function(e) {
            try {
                return localStorage.getItem(e)
            } catch (e) {
                return null
            }
        }(ct)) || void 0 === t ? void 0 : t.split("-")) || []
          , n = r[0]
          , o = r[1]
          , i = n ? ft(n) : e.wbiImgKey
          , a = o ? ft(o) : e.wbiSubKey;
        return {
            imgKey: i,
            subKey: a
        }
    }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wbiImgKey: "",
        wbiSubKey: ""
    }), o = n.imgKey, i = n.subKey;
    if (o && i) {
        for (var a = (t = o + i,
        r = [],
        [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52].forEach((function(e) {
            t.charAt(e) && r.push(t.charAt(e))
        }
        )),
        r.join("").slice(0, 32)), u = Math.round(Date.now() / 1e3), s = Object.assign({}, e, {
            wts: u
        }), c = Object.keys(s).sort(), l = [], f = /[!'()*]/g, d = 0; d < c.length; d++) {
            var p = c[d]
              , h = s[p];
            h && "string" == typeof h && (h = h.replace(f, "")),
            null != h && l.push("".concat(encodeURIComponent(p), "=").concat(encodeURIComponent(h)))
        }
        var y = l.join("&");
        return {
            w_rid: at(y + a),
            wts: u.toString()
        }
    }
    return null
}
function ft(e) {
    return e.substring(e.lastIndexOf("/") + 1, e.length).split(".")[0]
}
var dt = "d569546b86c252:db:9bc7e99c5d71e5"
  , pt = "557251g796:g54:f:ee94g8fg969e2de"
  , ht = function(e, t) {
    try {
        return Object.fromEntries(Object.entries(e).map((function(e) {
            var r = v(e, 2)
              , n = r[0]
              , o = r[1];
            return ["".concat(t).concat(n), o]
        }
        )))
    } catch (e) {
        return console.error(e),
        {}
    }
}
  , yt = function(e, t) {
    if (!t || 0 === t.length)
        return e;
    var r = {};
    return t.forEach((function(t) {
        for (var n = t.split("."), o = e, i = 0; i < n.length && void 0 !== o[n[i]]; i++)
            i === n.length - 1 ? r[t] = o[n[i]] : o = o[n[i]]
    }
    )),
    r
}
  , vt = function(e, t) {
    if (!t || !Array.isArray(t) || 0 === (null == t ? void 0 : t.length))
        return {};
    try {
        if ("string" == typeof e)
            try {
                var r = JSON.parse(e);
                return "object" === n(r) && null !== r ? yt(r, t) : {}
            } catch (e) {
                return console.error(e),
                {}
            }
        if (e instanceof FormData) {
            var o = {};
            return e.forEach((function(e, t) {
                e instanceof Blob || (o[t] = e)
            }
            )),
            yt(o, t)
        }
        if (e instanceof URLSearchParams) {
            var i = {};
            return e.forEach((function(e, t) {
                i[t] = e
            }
            )),
            yt(i, t)
        }
        if (e instanceof Blob || e instanceof ArrayBuffer || e instanceof ReadableStream)
            return console.error("can not handle binary data or Streams with wbi, please handle it in your own middleware"),
            {};
        if ("object" === n(e) && null !== e)
            return yt(e, t)
    } catch (e) {
        return console.error(e),
        {}
    }
    return {}
}
  , bt = function() {
    var e = i(r().mark((function e(t, n, o) {
        var i, a, u, s, c, l, f;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if ("undefined" != typeof window) {
                        e.next = 4;
                        break
                    }
                    return e.next = 3,
                    n();
                case 3:
                case 7:
                case 14:
                    return e.abrupt("return", e.sent);
                case 4:
                    if (t.request) {
                        e.next = 8;
                        break
                    }
                    return e.next = 7,
                    n();
                case 8:
                    if (c = t.request.params || {},
                    l = t.request.data ? ht(vt(t.request.data, null == o || null === (i = o.payload) || void 0 === i ? void 0 : i.bodyPayload), null !== (a = null == o || null === (u = o.payload) || void 0 === u ? void 0 : u.bodyPrefix) && void 0 !== a ? a : "w_") : {},
                    f = lt(Object.assign({}, c, l), (null == o || null === (s = o.payload) || void 0 === s ? void 0 : s.encWbiKeys) || {
                        wbiImgKey: st(dt),
                        wbiSubKey: st(pt)
                    })) {
                        e.next = 15;
                        break
                    }
                    return e.next = 14,
                    n();
                case 15:
                    return t.request.params = Object.assign({}, t.request.params, l, f),
                    e.next = 18,
                    n();
                case 18:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function(t, r, n) {
        return e.apply(this, arguments)
    }
}()
  , mt = function(e) {
    l(r, e);
    var t = y(r);
    function r() {
        var e;
        a(this, r);
        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
        return c(p(e = t.call.apply(t, [this].concat(o))), "handler", bt),
        c(p(e), "name", "WBI_ENCODE"),
        e
    }
    return s(r)
}(ut);
c(mt, "handler", bt);
var wt = function(e) {
    "undefined" != typeof window && window.__BILI_X_ENGINE_SCRIPT_CACHE__ && void 0 !== window.__BILI_X_ENGINE_SCRIPT_CACHE__[e] && delete window.__BILI_X_ENGINE_SCRIPT_CACHE__[e]
}
  , gt = function(e, t) {
    if ("undefined" == typeof window)
        return Promise.reject(new Error("window is not defined"));
    var r, n = e = e.replace(/^https?:\/\//, "//"), o = (r = n,
    "undefined" == typeof window ? null : window.__BILI_X_ENGINE_SCRIPT_CACHE__ && window.__BILI_X_ENGINE_SCRIPT_CACHE__[r] || null);
    if (null != o && o.promise)
        return o.promise;
    var i = new Promise((function(r, n) {
        var o = document.createElement("script");
        o.src = e,
        null != t && t.behavior && o.setAttribute(t.behavior, ""),
        o.onload = function() {
            var o = window;
            if (t.lib)
                return o[t.lib] ? r(o[t.lib]) : n(new Error('Failed to access library "' + t.lib + '" from ' + e));
            r(null)
        }
        ,
        o.onerror = function() {
            n(new Error("Failed to load " + e)),
            document.head.removeChild(o)
        }
        ,
        document.head.appendChild(o)
    }
    ));
    return function(e, t) {
        "undefined" != typeof window && (window.__BILI_X_ENGINE_SCRIPT_CACHE__ || (window.__BILI_X_ENGINE_SCRIPT_CACHE__ = {}),
        window.__BILI_X_ENGINE_SCRIPT_CACHE__[e] = t)
    }(n, {
        promise: i,
        lib: null == t ? void 0 : t.lib
    }),
    i.then((function() {
        !1 === (null == t ? void 0 : t.cache) && wt(n)
    }
    )).catch((function() {
        !1 === (null == t ? void 0 : t.cache) && wt(n)
    }
    )),
    i
}
  , xt = function(e) {
    return Promise.resolve(function() {
        try {
            return window.KvSDK ? Promise.resolve(window.KvSDK) : Promise.resolve(gt("//s1.hdslb.com/bfs/seed/jinkela/kv-sdk/index.js", {
                lib: "KvSDK"
            }))
        } catch (e) {
            return Promise.reject(e)
        }
    }()).then((function(t) {
        return new t(e)
    }
    ))
}
  , _t = function(e) {
    try {
        return window.__biliUserFp__ ? Promise.resolve(window.__biliUserFp__) : (window.__USER_FP_CONFIG__ = e,
        Promise.resolve(gt("//s1.hdslb.com/bfs/seed/jinkela/short/user-fingerprint/bili-user-fingerprint.min.js", {
            lib: "__biliUserFp__"
        })))
    } catch (e) {
        return Promise.reject(e)
    }
}
  , kt = function() {
    var e = i(r().mark((function e(t) {
        var n, o;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (!window.__riskUserLogConfig__) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt("return", window.__riskUserLogConfig__);
                case 2:
                    return e.prev = 2,
                    e.next = 5,
                    xt({
                        appKey: "333.1339",
                        apiURL: "//api.bilibili.com",
                        strict: 1,
                        nscode: 9
                    });
                case 5:
                    return n = e.sent,
                    e.next = 8,
                    n.getGroup(t);
                case 8:
                    return o = e.sent,
                    window.__riskUserLogConfig__ = o,
                    e.abrupt("return", o);
                case 13:
                    return e.prev = 13,
                    e.t0 = e.catch(2),
                    console.error("fetchConfig error:", e.t0),
                    e.abrupt("return", {
                        payload_log: "0"
                    });
                case 17:
                case "end":
                    return e.stop()
                }
        }
        ), e, null, [[2, 13]])
    }
    )));
    return function(t) {
        return e.apply(this, arguments)
    }
}()
  , Et = function() {
    var e = i(r().mark((function e() {
        var t;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    kt("user_log");
                case 2:
                    return t = e.sent,
                    e.abrupt("return", "1" === (null == t ? void 0 : t.payload_log));
                case 4:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function() {
        return e.apply(this, arguments)
    }
}()
  , Ot = function() {
    var e = i(r().mark((function e(n, o, i) {
        var a, u, s, c, l, f, d, p, h, y, b;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (e.prev = 0,
                    "undefined" != typeof window) {
                        e.next = 5;
                        break
                    }
                    return e.next = 4,
                    o();
                case 4:
                case 12:
                case 19:
                    return e.abrupt("return", e.sent);
                case 5:
                    return e.next = 7,
                    Et();
                case 7:
                    if (e.sent) {
                        e.next = 13;
                        break
                    }
                    return n.request && (n.request.params = t(t({}, n.request.params), {}, {
                        dm_img_switch: "0"
                    })),
                    e.next = 12,
                    o();
                case 13:
                    return e.next = 15,
                    _t(null !== (a = window.__USER_FP_CONFIG__) && void 0 !== a ? a : {});
                case 15:
                    if (window.__biliUserFp__) {
                        e.next = 20;
                        break
                    }
                    return console.error("__biliUserFp__ is not found"),
                    e.next = 19,
                    o();
                case 20:
                    return u = (null == i ? void 0 : i.payload) || {},
                    s = u.query,
                    c = void 0 === s ? {} : s,
                    l = u.target,
                    f = window.__biliUserFp__.queryUserLog(t(t({}, c), {}, {
                        target: l
                    })),
                    d = v(f, 4),
                    p = d[0],
                    h = d[1],
                    y = d[2],
                    b = d[3],
                    n.request && (n.request.params = t(t({}, n.request.params), {}, {
                        dm_img_list: p,
                        dm_img_str: h,
                        dm_cover_img_str: y,
                        dm_img_inter: b
                    })),
                    e.next = 25,
                    o();
                case 25:
                    e.next = 32;
                    break;
                case 27:
                    return e.prev = 27,
                    e.t0 = e.catch(0),
                    console.error("http-svc-risk-user-log:", e.t0),
                    e.next = 32,
                    o();
                case 32:
                case "end":
                    return e.stop()
                }
        }
        ), e, null, [[0, 27]])
    }
    )));
    return function(t, r, n) {
        return e.apply(this, arguments)
    }
}()
  , Tt = function(e) {
    l(r, e);
    var t = y(r);
    function r(e) {
        var n;
        return a(this, r),
        c(p(n = t.call(this, {
            handler: Ot,
            payload: e
        })), "name", "RISK_USER_LOG"),
        n
    }
    return s(r)
}(_);
c(Tt, "handler", Ot);
var St = "UNIOS_RESET"
  , At = "UNIOS_WBI_ENCODE"
  , Ct = "UNIOS_RISK_USER_LOG"
  , jt = function(e) {
    l(n, e);
    var t = y(n);
    function n() {
        var e;
        return a(this, n),
        e = t.call(this, function() {
            var e = i(r().mark((function e(t, n, o) {
                var i;
                return r().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (null == (i = null == o ? void 0 : o.payload) || !i.active) {
                                e.next = 5;
                                break
                            }
                            return e.next = 4,
                            mt.handler(t, n, o);
                        case 4:
                            return e.abrupt("return", e.sent);
                        case 5:
                            return e.next = 7,
                            n();
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, r, n) {
                return e.apply(this, arguments)
            }
        }()),
        c(p(e), "name", At),
        e
    }
    return s(n)
}(_)
  , Rt = function(e) {
    l(n, e);
    var t = y(n);
    function n() {
        var e;
        return a(this, n),
        e = t.call(this, function() {
            var e = i(r().mark((function e(t, n, o) {
                var i;
                return r().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (null == (i = null == o ? void 0 : o.payload) || !i.active) {
                                e.next = 5;
                                break
                            }
                            return e.next = 4,
                            Tt.handler(t, n, o);
                        case 4:
                            return e.abrupt("return", e.sent);
                        case 5:
                            return e.next = 7,
                            n();
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, r, n) {
                return e.apply(this, arguments)
            }
        }()),
        c(p(e), "name", Ct),
        e
    }
    return s(n)
}(_)
  , Pt = function(e) {
    l(n, e);
    var t = y(n);
    function n(e) {
        var o;
        return a(this, n),
        o = t.call(this, {
            handler: function(e, t, n) {
                return i(r().mark((function o() {
                    var i, a, u;
                    return r().wrap((function(r) {
                        for (; ; )
                            switch (r.prev = r.next) {
                            case 0:
                                return i = (null == n ? void 0 : n.payload) || {},
                                a = i.timeout,
                                u = i.signal,
                                e.config.timeout = a,
                                u && (e.abortController = {
                                    abort: function() {},
                                    signal: u
                                }),
                                r.next = 5,
                                t();
                            case 5:
                            case "end":
                                return r.stop()
                            }
                    }
                    ), o)
                }
                )))()
            },
            payload: {
                timeout: e.timeout || 8e3
            }
        }),
        c(p(o), "name", St),
        o
    }
    return s(n)
}(_);
function It(e, t) {
    this.service = new e({
        fetch: null == t ? void 0 : t.fetch,
        baseURL: null == t ? void 0 : t.baseURL,
        middlewares: [new Pt({
            timeout: null == t ? void 0 : t.timeout
        }), new Rt, new jt].concat(b((null == t ? void 0 : t.middlewares) || []))
    })
}
function qt(e, t) {
    var r;
    if (null != e)
        if ("object" !== n(e) && (e = [e]),
        r = e,
        "[object Array]" === toString.call(r))
            for (var o = 0, i = e.length; o < i; o++)
                t.call(null, e[o], o, e);
        else
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
}
function Lt(e, t, r) {
    return qt(t, (function(t, n) {
        e[n] = r && "function" == typeof t ? Bt(t, r) : t
    }
    )),
    e
}
function Bt(e, t) {
    return function() {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
            r[n] = arguments[n];
        return e.apply(t, r)
    }
}
It.prototype.request = function(e) {
    var t = this.service;
    if (e.chainProxy)
        try {
            t = e.chainProxy(this.service)
        } catch (e) {
            console.warn("chainProxy error:", null == e ? void 0 : e.message)
        }
    var r = e.baseURL
      , n = e.url
      , o = e.method
      , i = e.params
      , a = e.data
      , u = e.headers
      , s = e.timeout
      , c = e.signal
      , l = e.withCredentials
      , f = e.responseType;
    return c && (t = t.disable(Ye.TIMEOUT)),
    t.with(St, {
        timeout: s,
        signal: c
    }).with(Ye.RES_DATA, {
        type: f || "json"
    }).request({
        url: n,
        baseURL: r || this.service.baseURL,
        params: i,
        data: a,
        method: o,
        headers: u,
        credentials: !1 === l ? "omit" : "include"
    })
}
,
It.prototype.get = function(e, r) {
    return this.request(t(t({}, r || {}), {}, {
        url: e
    }))
}
,
It.prototype.post = function(e, r, n) {
    return this.request(t(t({}, n || {}), {}, {
        url: e,
        data: r || (null == n ? void 0 : n.data)
    }))
}
;
var Ut = "undefined" == typeof window
  , Dt = function(e) {
    return new Promise((function(t, r) {
        var n = document.createElement("script");
        n.src = e,
        n.onload = function() {
            t()
        }
        ,
        n.onerror = function() {
            r(new Error("Failed to load script: ".concat(e)))
        }
        ,
        document.body.appendChild(n)
    }
    ))
}
  , Nt = "RISK_CAPTCHA"
  , Ft = function() {
    var e = i(r().mark((function e() {
        var t;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (!(t = window.CaptchaLoader)) {
                        e.next = 3;
                        break
                    }
                    return e.abrupt("return", t);
                case 3:
                    return e.next = 5,
                    Dt("//s1.hdslb.com/bfs/seed/jinkela/risk-captcha-sdk/CaptchaLoader.js");
                case 5:
                    return e.abrupt("return", t = window.CaptchaLoader);
                case 6:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function() {
        return e.apply(this, arguments)
    }
}()
  , Kt = function(e, t) {
    var r;
    return (null === (r = e.middleware[t]) || void 0 === r ? void 0 : r.payload) || {}
}
  , Ht = function() {
    var e = i(r().mark((function e(t) {
        var n, o, i;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return e.prev = 0,
                    e.next = 3,
                    Ft();
                case 3:
                    return n = e.sent,
                    e.next = 6,
                    n.load();
                case 6:
                    return o = e.sent,
                    e.next = 9,
                    o(t);
                case 9:
                    if (!(i = e.sent)) {
                        e.next = 12;
                        break
                    }
                    return e.abrupt("return", i);
                case 12:
                    return e.abrupt("return", Promise.reject(new Error("verify captcha error: no token")));
                case 15:
                    return e.prev = 15,
                    e.t0 = e.catch(0),
                    e.abrupt("return", Promise.reject(e.t0));
                case 18:
                case "end":
                    return e.stop()
                }
        }
        ), e, null, [[0, 15]])
    }
    )));
    return function(t) {
        return e.apply(this, arguments)
    }
}()
  , Mt = function(e, n) {
    return function() {
        var o = i(r().mark((function o(i) {
            var a, u, s, c, l, f, d, p, h, y;
            return r().wrap((function(r) {
                for (; ; )
                    switch (r.prev = r.next) {
                    case 0:
                        if (!Ut) {
                            r.next = 2;
                            break
                        }
                        return r.abrupt("return", !1);
                    case 2:
                        if (r.prev = 2,
                        a = {},
                        u = i.data || {},
                        -352 !== (s = u.code)) {
                            r.next = 14;
                            break
                        }
                        if (c = {},
                        (l = i.headers.get("x-bili-gaia-vvoucher")) ? c.v_voucher = l : Object.assign(c, (null === (f = i.data) || void 0 === f ? void 0 : f.data) || {}),
                        0 !== Object.keys(c).length) {
                            r.next = 11;
                            break
                        }
                        return r.abrupt("return", !1);
                    case 11:
                        a.riskParams = c,
                        r.next = 26;
                        break;
                    case 14:
                        if (-401 !== s) {
                            r.next = 20;
                            break
                        }
                        if (null !== (d = i.data) && void 0 !== d && null !== (d = d.data) && void 0 !== d && d.ga_data) {
                            r.next = 17;
                            break
                        }
                        return r.abrupt("return", !1);
                    case 17:
                        a = null === (p = i.data) || void 0 === p || null === (p = p.data) || void 0 === p ? void 0 : p.ga_data,
                        r.next = 26;
                        break;
                    case 20:
                        if (e) {
                            r.next = 22;
                            break
                        }
                        return r.abrupt("return", !1);
                    case 22:
                        if (h = e(i.data)) {
                            r.next = 25;
                            break
                        }
                        return r.abrupt("return", !1);
                    case 25:
                        a = h;
                    case 26:
                        return r.next = 28,
                        Ht(t(t({}, a), {}, {
                            fromSpmid: n
                        }));
                    case 28:
                        return y = r.sent,
                        r.abrupt("return", {
                            event: Nt,
                            data: y
                        });
                    case 32:
                        r.prev = 32,
                        r.t0 = r.catch(2),
                        console.warn(r.t0);
                    case 35:
                        return r.abrupt("return", !1);
                    case 36:
                    case "end":
                        return r.stop()
                    }
            }
            ), o, null, [[2, 32]])
        }
        )));
        return function(e) {
            return o.apply(this, arguments)
        }
    }()
}
  , Gt = function() {
    var e = i(r().mark((function e(o, a, u) {
        var s, l, f, d, p, h, y, v, b;
        return r().wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return s = (null == u ? void 0 : u.payload) || {},
                    l = s.getToken,
                    f = s.getCaptchaOptionsFromData,
                    d = s.fromSpmid,
                    p = s.inApp,
                    h = s.times,
                    y = s.condition,
                    v = s.onRetry,
                    b = {
                        times: h || 0,
                        condition: function(e) {
                            return i(r().mark((function t() {
                                var n;
                                return r().wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0,
                                            o.retry) {
                                                t.next = 8;
                                                break
                                            }
                                            return t.next = 4,
                                            Mt(f, d)(e);
                                        case 4:
                                            if (!(n = t.sent)) {
                                                t.next = 8;
                                                break
                                            }
                                            return b.times || (b.runtimeShortCircuit = !0),
                                            t.abrupt("return", n);
                                        case 8:
                                            if (!y) {
                                                t.next = 12;
                                                break
                                            }
                                            return t.next = 11,
                                            y(e);
                                        case 11:
                                            return t.abrupt("return", t.sent);
                                        case 12:
                                            return t.abrupt("return", !1);
                                        case 15:
                                            return t.prev = 15,
                                            t.t0 = t.catch(0),
                                            t.abrupt("return", !1);
                                        case 18:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t, null, [[0, 15]])
                            }
                            )))()
                        },
                        onRetry: function(e, a) {
                            return i(r().mark((function i() {
                                var u, s, f;
                                return r().wrap((function(r) {
                                    for (; ; )
                                        switch (r.prev = r.next) {
                                        case 0:
                                            if ("object" !== n(a) || (null == a ? void 0 : a.event) !== Nt) {
                                                r.next = 9;
                                                break
                                            }
                                            return delete b.runtimeShortCircuit,
                                            u = a.data,
                                            r.next = 5,
                                            null == l ? void 0 : l(u);
                                        case 5:
                                            return o && o.response && o.response.data && (-401 === (s = o.response.data.code) && (e.params = t(t({}, e.params || {}), {}, {
                                                token: u,
                                                gaia_vtoken: u
                                            })),
                                            -352 === s && (e.params = t(t({}, e.params || {}), {}, {
                                                gaia_vtoken: u
                                            }),
                                            (p || null !== (f = Kt(o, "APP_RUNTIME")) && void 0 !== f && f.version) && (e.headers = t(t({}, e.headers || {}), {}, c({}, "x-bili-gaia-vtoken", u))))),
                                            r.abrupt("return", e);
                                        case 9:
                                            if (!v) {
                                                r.next = 13;
                                                break
                                            }
                                            return r.next = 12,
                                            v(e, a);
                                        case 12:
                                            return r.abrupt("return", r.sent);
                                        case 13:
                                            return r.abrupt("return", e);
                                        case 14:
                                        case "end":
                                            return r.stop()
                                        }
                                }
                                ), i)
                            }
                            )))()
                        }
                    },
                    e.next = 4,
                    Ae.handler(o, a, {
                        payload: b
                    });
                case 4:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function(t, r, n) {
        return e.apply(this, arguments)
    }
}()
  , Yt = function(e) {
    l(r, e);
    var t = y(r);
    function r(e) {
        var n;
        return a(this, r),
        c(p(n = t.call(this, {
            handler: Gt,
            payload: e
        })), "name", Ye.RETRY),
        n
    }
    return s(r)
}(_);
c(Yt, "handler", Gt);
var Wt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function Jt(e) {
    return function(e, t) {
        var r = new It(e,t)
          , n = Bt(It.prototype.request, r);
        return Lt(n, It.prototype, r),
        Lt(n, r),
        n
    }($e, t(t({}, e || {}), {}, {
        middlewares: [new Yt]
    }))
}
!function(e) {
    !function(t) {
        var r = "undefined" != typeof globalThis && globalThis || void 0 !== e && e || void 0 !== r && r
          , o = "URLSearchParams"in r
          , i = "Symbol"in r && "iterator"in Symbol
          , a = "FileReader"in r && "Blob"in r && function() {
            try {
                return new Blob,
                !0
            } catch (e) {
                return !1
            }
        }()
          , u = "FormData"in r
          , s = "ArrayBuffer"in r;
        if (s)
            var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
              , l = ArrayBuffer.isView || function(e) {
                return e && c.indexOf(Object.prototype.toString.call(e)) > -1
            }
            ;
        function f(e) {
            if ("string" != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
                throw new TypeError('Invalid character in header field name: "' + e + '"');
            return e.toLowerCase()
        }
        function d(e) {
            return "string" != typeof e && (e = String(e)),
            e
        }
        function p(e) {
            var t = {
                next: function() {
                    var t = e.shift();
                    return {
                        done: void 0 === t,
                        value: t
                    }
                }
            };
            return i && (t[Symbol.iterator] = function() {
                return t
            }
            ),
            t
        }
        function h(e) {
            this.map = {},
            e instanceof h ? e.forEach((function(e, t) {
                this.append(t, e)
            }
            ), this) : Array.isArray(e) ? e.forEach((function(e) {
                this.append(e[0], e[1])
            }
            ), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
                this.append(t, e[t])
            }
            ), this)
        }
        function y(e) {
            if (e.bodyUsed)
                return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }
        function v(e) {
            return new Promise((function(t, r) {
                e.onload = function() {
                    t(e.result)
                }
                ,
                e.onerror = function() {
                    r(e.error)
                }
            }
            ))
        }
        function b(e) {
            var t = new FileReader
              , r = v(t);
            return t.readAsArrayBuffer(e),
            r
        }
        function m(e) {
            if (e.slice)
                return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)),
            t.buffer
        }
        function w() {
            return this.bodyUsed = !1,
            this._initBody = function(e) {
                var t;
                this.bodyUsed = this.bodyUsed,
                this._bodyInit = e,
                e ? "string" == typeof e ? this._bodyText = e : a && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : u && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : o && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : s && a && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = m(e.buffer),
                this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(e) || l(e)) ? this._bodyArrayBuffer = m(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "",
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }
            ,
            a && (this.blob = function() {
                var e = y(this);
                if (e)
                    return e;
                if (this._bodyBlob)
                    return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }
            ,
            this.arrayBuffer = function() {
                if (this._bodyArrayBuffer) {
                    var e = y(this);
                    return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                }
                return this.blob().then(b)
            }
            ),
            this.text = function() {
                var e, t, r, n = y(this);
                if (n)
                    return n;
                if (this._bodyBlob)
                    return e = this._bodyBlob,
                    t = new FileReader,
                    r = v(t),
                    t.readAsText(e),
                    r;
                if (this._bodyArrayBuffer)
                    return Promise.resolve(function(e) {
                        for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++)
                            r[n] = String.fromCharCode(t[n]);
                        return r.join("")
                    }(this._bodyArrayBuffer));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }
            ,
            u && (this.formData = function() {
                return this.text().then(_)
            }
            ),
            this.json = function() {
                return this.text().then(JSON.parse)
            }
            ,
            this
        }
        h.prototype.append = function(e, t) {
            e = f(e),
            t = d(t);
            var r = this.map[e];
            this.map[e] = r ? r + ", " + t : t
        }
        ,
        h.prototype.delete = function(e) {
            delete this.map[f(e)]
        }
        ,
        h.prototype.get = function(e) {
            return e = f(e),
            this.has(e) ? this.map[e] : null
        }
        ,
        h.prototype.has = function(e) {
            return this.map.hasOwnProperty(f(e))
        }
        ,
        h.prototype.set = function(e, t) {
            this.map[f(e)] = d(t)
        }
        ,
        h.prototype.forEach = function(e, t) {
            for (var r in this.map)
                this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
        }
        ,
        h.prototype.keys = function() {
            var e = [];
            return this.forEach((function(t, r) {
                e.push(r)
            }
            )),
            p(e)
        }
        ,
        h.prototype.values = function() {
            var e = [];
            return this.forEach((function(t) {
                e.push(t)
            }
            )),
            p(e)
        }
        ,
        h.prototype.entries = function() {
            var e = [];
            return this.forEach((function(t, r) {
                e.push([r, t])
            }
            )),
            p(e)
        }
        ,
        i && (h.prototype[Symbol.iterator] = h.prototype.entries);
        var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function x(e, t) {
            if (!(this instanceof x))
                throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var r, n, o = (t = t || {}).body;
            if (e instanceof x) {
                if (e.bodyUsed)
                    throw new TypeError("Already read");
                this.url = e.url,
                this.credentials = e.credentials,
                t.headers || (this.headers = new h(e.headers)),
                this.method = e.method,
                this.mode = e.mode,
                this.signal = e.signal,
                o || null == e._bodyInit || (o = e._bodyInit,
                e.bodyUsed = !0)
            } else
                this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "same-origin",
            !t.headers && this.headers || (this.headers = new h(t.headers)),
            this.method = (r = t.method || this.method || "GET",
            n = r.toUpperCase(),
            g.indexOf(n) > -1 ? n : r),
            this.mode = t.mode || this.mode || null,
            this.signal = t.signal || this.signal,
            this.referrer = null,
            ("GET" === this.method || "HEAD" === this.method) && o)
                throw new TypeError("Body not allowed for GET or HEAD requests");
            if (this._initBody(o),
            !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
                var i = /([?&])_=[^&]*/;
                if (i.test(this.url))
                    this.url = this.url.replace(i, "$1_=" + (new Date).getTime());
                else {
                    this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
                }
            }
        }
        function _(e) {
            var t = new FormData;
            return e.trim().split("&").forEach((function(e) {
                if (e) {
                    var r = e.split("=")
                      , n = r.shift().replace(/\+/g, " ")
                      , o = r.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(n), decodeURIComponent(o))
                }
            }
            )),
            t
        }
        function k(e, t) {
            if (!(this instanceof k))
                throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            t || (t = {}),
            this.type = "default",
            this.status = void 0 === t.status ? 200 : t.status,
            this.ok = this.status >= 200 && this.status < 300,
            this.statusText = void 0 === t.statusText ? "" : "" + t.statusText,
            this.headers = new h(t.headers),
            this.url = t.url || "",
            this._initBody(e)
        }
        x.prototype.clone = function() {
            return new x(this,{
                body: this._bodyInit
            })
        }
        ,
        w.call(x.prototype),
        w.call(k.prototype),
        k.prototype.clone = function() {
            return new k(this._bodyInit,{
                status: this.status,
                statusText: this.statusText,
                headers: new h(this.headers),
                url: this.url
            })
        }
        ,
        k.error = function() {
            var e = new k(null,{
                status: 0,
                statusText: ""
            });
            return e.type = "error",
            e
        }
        ;
        var E = [301, 302, 303, 307, 308];
        k.redirect = function(e, t) {
            if (-1 === E.indexOf(t))
                throw new RangeError("Invalid status code");
            return new k(null,{
                status: t,
                headers: {
                    location: e
                }
            })
        }
        ,
        t.DOMException = r.DOMException;
        try {
            new t.DOMException
        } catch (e) {
            t.DOMException = function(e, t) {
                this.message = e,
                this.name = t;
                var r = Error(e);
                this.stack = r.stack
            }
            ,
            t.DOMException.prototype = Object.create(Error.prototype),
            t.DOMException.prototype.constructor = t.DOMException
        }
        function O(e, o) {
            return new Promise((function(i, u) {
                var c = new x(e,o);
                if (c.signal && c.signal.aborted)
                    return u(new t.DOMException("Aborted","AbortError"));
                var l = new XMLHttpRequest;
                function f() {
                    l.abort()
                }
                l.onload = function() {
                    var e, t, r = {
                        status: l.status,
                        statusText: l.statusText,
                        headers: (e = l.getAllResponseHeaders() || "",
                        t = new h,
                        e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(e) {
                            return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                        }
                        )).forEach((function(e) {
                            var r = e.split(":")
                              , n = r.shift().trim();
                            if (n) {
                                var o = r.join(":").trim();
                                t.append(n, o)
                            }
                        }
                        )),
                        t)
                    };
                    r.url = "responseURL"in l ? l.responseURL : r.headers.get("X-Request-URL");
                    var n = "response"in l ? l.response : l.responseText;
                    setTimeout((function() {
                        i(new k(n,r))
                    }
                    ), 0)
                }
                ,
                l.onerror = function() {
                    setTimeout((function() {
                        u(new TypeError("Network request failed"))
                    }
                    ), 0)
                }
                ,
                l.ontimeout = function() {
                    setTimeout((function() {
                        u(new TypeError("Network request failed"))
                    }
                    ), 0)
                }
                ,
                l.onabort = function() {
                    setTimeout((function() {
                        u(new t.DOMException("Aborted","AbortError"))
                    }
                    ), 0)
                }
                ,
                l.open(c.method, function(e) {
                    try {
                        return "" === e && r.location.href ? r.location.href : e
                    } catch (t) {
                        return e
                    }
                }(c.url), !0),
                "include" === c.credentials ? l.withCredentials = !0 : "omit" === c.credentials && (l.withCredentials = !1),
                "responseType"in l && (a ? l.responseType = "blob" : s && c.headers.get("Content-Type") && -1 !== c.headers.get("Content-Type").indexOf("application/octet-stream") && (l.responseType = "arraybuffer")),
                !o || "object" !== n(o.headers) || o.headers instanceof h ? c.headers.forEach((function(e, t) {
                    l.setRequestHeader(t, e)
                }
                )) : Object.getOwnPropertyNames(o.headers).forEach((function(e) {
                    l.setRequestHeader(e, d(o.headers[e]))
                }
                )),
                c.signal && (c.signal.addEventListener("abort", f),
                l.onreadystatechange = function() {
                    4 === l.readyState && c.signal.removeEventListener("abort", f)
                }
                ),
                l.send(void 0 === c._bodyInit ? null : c._bodyInit)
            }
            ))
        }
        O.polyfill = !0,
        r.fetch || (r.fetch = O,
        r.Headers = h,
        r.Request = x,
        r.Response = k),
        t.Headers = h,
        t.Request = x,
        t.Response = k,
        t.fetch = O
    }({})
}("undefined" != typeof self ? self : Wt),
function() {
    function e(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function t(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function r(e, r, n) {
        return r && t(e.prototype, r),
        n && t(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        t && a(e, t)
    }
    function i(e) {
        return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        ,
        i(e)
    }
    function a(e, t) {
        return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        ,
        a(e, t)
    }
    function u() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (e) {
            return !1
        }
    }
    function s(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function c(e, t) {
        if (t && ("object" === n(t) || "function" == typeof t))
            return t;
        if (void 0 !== t)
            throw new TypeError("Derived constructors may only return object or undefined");
        return s(e)
    }
    function l(e) {
        var t = u();
        return function() {
            var r, n = i(e);
            if (t) {
                var o = i(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else
                r = n.apply(this, arguments);
            return c(this, r)
        }
    }
    function f(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = i(e)); )
            ;
        return e
    }
    function d() {
        return d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
            var n = f(e, t);
            if (n) {
                var o = Object.getOwnPropertyDescriptor(n, t);
                return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value
            }
        }
        ,
        d.apply(this, arguments)
    }
    var p = function() {
        function t() {
            e(this, t),
            Object.defineProperty(this, "listeners", {
                value: {},
                writable: !0,
                configurable: !0
            })
        }
        return r(t, [{
            key: "addEventListener",
            value: function(e, t, r) {
                e in this.listeners || (this.listeners[e] = []),
                this.listeners[e].push({
                    callback: t,
                    options: r
                })
            }
        }, {
            key: "removeEventListener",
            value: function(e, t) {
                if (e in this.listeners)
                    for (var r = this.listeners[e], n = 0, o = r.length; n < o; n++)
                        if (r[n].callback === t)
                            return void r.splice(n, 1)
            }
        }, {
            key: "dispatchEvent",
            value: function(e) {
                var t = this;
                if (e.type in this.listeners) {
                    for (var r, n = this.listeners[e.type].slice(), o = function() {
                        r = n[i];
                        try {
                            r.callback.call(t, e)
                        } catch (e) {
                            Promise.resolve().then((function() {
                                throw e
                            }
                            ))
                        }
                        r.options && r.options.once && t.removeEventListener(e.type, r.callback)
                    }, i = 0, a = n.length; i < a; i++)
                        o();
                    return !e.defaultPrevented
                }
            }
        }]),
        t
    }()
      , h = function(t) {
        o(a, t);
        var n = l(a);
        function a() {
            var t;
            return e(this, a),
            (t = n.call(this)).listeners || p.call(s(t)),
            Object.defineProperty(s(t), "aborted", {
                value: !1,
                writable: !0,
                configurable: !0
            }),
            Object.defineProperty(s(t), "onabort", {
                value: null,
                writable: !0,
                configurable: !0
            }),
            Object.defineProperty(s(t), "reason", {
                value: void 0,
                writable: !0,
                configurable: !0
            }),
            t
        }
        return r(a, [{
            key: "toString",
            value: function() {
                return "[object AbortSignal]"
            }
        }, {
            key: "dispatchEvent",
            value: function(e) {
                "abort" === e.type && (this.aborted = !0,
                "function" == typeof this.onabort && this.onabort.call(this, e)),
                d(i(a.prototype), "dispatchEvent", this).call(this, e)
            }
        }]),
        a
    }(p)
      , y = function() {
        function t() {
            e(this, t),
            Object.defineProperty(this, "signal", {
                value: new h,
                writable: !0,
                configurable: !0
            })
        }
        return r(t, [{
            key: "abort",
            value: function(e) {
                var t;
                try {
                    t = new Event("abort")
                } catch (e) {
                    "undefined" != typeof document ? document.createEvent ? (t = document.createEvent("Event")).initEvent("abort", !1, !1) : (t = document.createEventObject()).type = "abort" : t = {
                        type: "abort",
                        bubbles: !1,
                        cancelable: !1
                    }
                }
                var r = e;
                if (void 0 === r)
                    if ("undefined" == typeof document)
                        (r = new Error("This operation was aborted")).name = "AbortError";
                    else
                        try {
                            r = new DOMException("signal is aborted without reason")
                        } catch (e) {
                            (r = new Error("This operation was aborted")).name = "AbortError"
                        }
                this.signal.reason = r,
                this.signal.dispatchEvent(t)
            }
        }, {
            key: "toString",
            value: function() {
                return "[object AbortController]"
            }
        }]),
        t
    }();
    function v(e) {
        return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),
        !0) : "function" == typeof e.Request && !e.Request.prototype.hasOwnProperty("signal") || !e.AbortController
    }
    function b(e) {
        "function" == typeof e && (e = {
            fetch: e
        });
        var t = e
          , r = t.fetch
          , n = t.Request
          , o = void 0 === n ? r.Request : n
          , i = t.AbortController
          , a = t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
          , u = void 0 !== a && a;
        if (!v({
            fetch: r,
            Request: o,
            AbortController: i,
            __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: u
        }))
            return {
                fetch: r,
                Request: s
            };
        var s = o;
        (s && !s.prototype.hasOwnProperty("signal") || u) && ((s = function(e, t) {
            var r;
            t && t.signal && (r = t.signal,
            delete t.signal);
            var n = new o(e,t);
            return r && Object.defineProperty(n, "signal", {
                writable: !1,
                enumerable: !1,
                configurable: !0,
                value: r
            }),
            n
        }
        ).prototype = o.prototype);
        var c = r;
        return {
            fetch: function(e, t) {
                var r = s && s.prototype.isPrototypeOf(e) ? e.signal : t ? t.signal : void 0;
                if (r) {
                    var n;
                    try {
                        n = new DOMException("Aborted","AbortError")
                    } catch (e) {
                        (n = new Error("Aborted")).name = "AbortError"
                    }
                    if (r.aborted)
                        return Promise.reject(n);
                    var o = new Promise((function(e, t) {
                        r.addEventListener("abort", (function() {
                            return t(n)
                        }
                        ), {
                            once: !0
                        })
                    }
                    ));
                    return t && t.signal && delete t.signal,
                    Promise.race([o, c(e, t)])
                }
                return c(e, t)
            },
            Request: s
        }
    }
    "undefined" != typeof Symbol && Symbol.toStringTag && (y.prototype[Symbol.toStringTag] = "AbortController",
    h.prototype[Symbol.toStringTag] = "AbortSignal"),
    function(e) {
        if (v(e))
            if (e.fetch) {
                var t = b(e)
                  , r = t.fetch
                  , n = t.Request;
                e.fetch = r,
                e.Request = n,
                Object.defineProperty(e, "AbortController", {
                    writable: !0,
                    enumerable: !1,
                    configurable: !0,
                    value: y
                }),
                Object.defineProperty(e, "AbortSignal", {
                    writable: !0,
                    enumerable: !1,
                    configurable: !0,
                    value: h
                })
            } else
                console.warn("fetch() is not available, cannot install abortcontroller-polyfill")
    }("undefined" != typeof self ? self : Wt)
}();
var Xt = Jt();
return at
}
var add = res1();
module.exports = { add };