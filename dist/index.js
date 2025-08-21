import { Button as jn, Card as $n, Input as Fn, Label as zn, Helper as Vn, Badge as qn, Modal as Wn, Accordion as Hn, AccordionItem as Un, Table as Yn, TableHead as Kn, TableBody as Gn, TableHeadCell as Zn, TableBodyRow as Et, TableBodyCell as St } from "flowbite-svelte";
const Xn = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Xn);
const Fr = 1, zr = 2, $t = 4, Jn = 8, Qn = 16, ea = 1, ra = 4, ta = 8, na = 16, Ft = 1, aa = 2, q = Symbol(), ia = "http://www.w3.org/1999/xhtml", la = "http://www.w3.org/2000/svg", oa = "@attach", zt = !1;
var Vr = Array.isArray, sa = Array.prototype.indexOf, Vt = Array.from, lt = Object.defineProperty, rr = Object.getOwnPropertyDescriptor, ua = Object.getOwnPropertyDescriptors, fa = Object.prototype, ca = Array.prototype, qt = Object.getPrototypeOf;
function gr(e) {
  return typeof e == "function";
}
const Ke = () => {
};
function da(e) {
  for (var r = 0; r < e.length; r++)
    e[r]();
}
function va() {
  var e, r, t = new Promise((n, a) => {
    e = n, r = a;
  });
  return { promise: t, resolve: e, reject: r };
}
const te = 2, ct = 4, Wt = 8, or = 16, Be = 32, sr = 64, Ht = 128, fe = 256, Nr = 512, G = 1024, oe = 2048, je = 4096, ce = 8192, Ge = 16384, Ut = 32768, Cr = 65536, Tt = 1 << 17, ga = 1 << 18, dt = 1 << 19, ha = 1 << 20, ot = 1 << 21, vt = 1 << 22, qe = 1 << 23, We = Symbol("$state"), Yt = Symbol("legacy props"), pa = Symbol(""), gt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function ba() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function _a() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ma() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ya(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function xa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function wa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ka() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ca() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let Ea = !1;
function Kt(e) {
  return e === this.v;
}
function Sa(e, r) {
  return e != e ? r == r : e !== r || e !== null && typeof e == "object" || typeof e == "function";
}
function Gt(e) {
  return !Sa(e, this.v);
}
let Ta = !1, Te = null;
function Mr(e) {
  Te = e;
}
function ye(e, r = !1, t) {
  Te = {
    p: Te,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function xe(e) {
  var r = (
    /** @type {ComponentContext} */
    Te
  ), t = r.e;
  if (t !== null) {
    r.e = null;
    for (var n of t)
      Ua(n);
  }
  return Te = r.p, /** @type {T} */
  {};
}
function Zt() {
  return !0;
}
const Aa = /* @__PURE__ */ new WeakMap();
function Pa(e) {
  var r = I;
  if (r === null)
    return O.f |= qe, e;
  if ((r.f & Ut) === 0) {
    if ((r.f & Ht) === 0)
      throw !r.parent && e instanceof Error && Xt(e), e;
    r.b.error(e);
  } else
    ht(e, r);
}
function ht(e, r) {
  for (; r !== null; ) {
    if ((r.f & Ht) !== 0)
      try {
        r.b.error(e);
        return;
      } catch (t) {
        e = t;
      }
    r = r.parent;
  }
  throw e instanceof Error && Xt(e), e;
}
function Xt(e) {
  const r = Aa.get(e);
  r && (lt(e, "message", {
    value: r.message
  }), lt(e, "stack", {
    value: r.stack
  }));
}
let Dr = [];
function Ia() {
  var e = Dr;
  Dr = [], da(e);
}
function pt(e) {
  Dr.length === 0 && queueMicrotask(Ia), Dr.push(e);
}
function Ra() {
  for (var e = (
    /** @type {Effect} */
    I.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && ba(), e;
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  var r = te | oe, t = O !== null && (O.f & te) !== 0 ? (
    /** @type {Derived} */
    O
  ) : null;
  return I === null || t !== null && (t.f & fe) !== 0 ? r |= fe : I.f |= dt, {
    ctx: Te,
    deps: null,
    effects: null,
    equals: Kt,
    f: r,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      q
    ),
    wv: 0,
    parent: t ?? I,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Oa(e, r) {
  let t = (
    /** @type {Effect | null} */
    I
  );
  t === null && _a();
  var n = (
    /** @type {Boundary} */
    t.b
  ), a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = xr(
    /** @type {V} */
    q
  ), l = null, u = !O;
  return Ya(() => {
    try {
      var o = e();
    } catch (p) {
      o = Promise.reject(p);
    }
    var s = () => o;
    a = l?.then(s, s) ?? Promise.resolve(o), l = a;
    var f = (
      /** @type {Batch} */
      Y
    ), d = n.pending;
    u && (n.update_pending_count(1), d || f.increment());
    const h = (p, c = void 0) => {
      l = null, d || f.activate(), c ? c !== gt && (i.f |= qe, wr(i, c)) : ((i.f & qe) !== 0 && (i.f ^= qe), wr(i, p)), u && (n.update_pending_count(-1), d || f.decrement()), tn();
    };
    if (a.then(h, (p) => h(null, p || "unknown")), f)
      return () => {
        queueMicrotask(() => f.neuter());
      };
  }), new Promise((o) => {
    function s(f) {
      function d() {
        f === a ? o(i) : s(a);
      }
      f.then(d, d);
    }
    s(a);
  });
}
// @__NO_SIDE_EFFECTS__
function N(e) {
  const r = /* @__PURE__ */ qr(e);
  return vn(r), r;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  const r = /* @__PURE__ */ qr(e);
  return r.equals = Gt, r;
}
function Qt(e) {
  var r = e.effects;
  if (r !== null) {
    e.effects = null;
    for (var t = 0; t < r.length; t += 1)
      se(
        /** @type {Effect} */
        r[t]
      );
  }
}
function La(e) {
  for (var r = e.parent; r !== null; ) {
    if ((r.f & te) === 0)
      return (
        /** @type {Effect} */
        r
      );
    r = r.parent;
  }
  return null;
}
function bt(e) {
  var r, t = I;
  De(La(e));
  try {
    Qt(e), r = bn(e);
  } finally {
    De(t);
  }
  return r;
}
function en(e) {
  var r = bt(e);
  if (e.equals(r) || (e.v = r, e.wv = hn()), !cr)
    if (ir !== null)
      ir.set(e, e.v);
    else {
      var t = (Le || (e.f & fe) !== 0) && e.deps !== null ? je : G;
      Q(e, t);
    }
}
function rn(e, r, t) {
  const n = qr;
  if (r.length === 0) {
    t(e.map(n));
    return;
  }
  var a = Y, i = (
    /** @type {Effect} */
    I
  ), l = Na(), u = Ra();
  Promise.all(r.map((o) => /* @__PURE__ */ Oa(o))).then((o) => {
    a?.activate(), l();
    try {
      t([...e.map(n), ...o]);
    } catch (s) {
      (i.f & Ge) === 0 && ht(s, i);
    }
    a?.deactivate(), tn();
  }).catch((o) => {
    u.error(o);
  });
}
function Na() {
  var e = I, r = O, t = Te;
  return function() {
    De(e), me(r), Mr(t);
  };
}
function tn() {
  De(null), me(null), Mr(null);
}
const hr = /* @__PURE__ */ new Set();
let Y = null, ir = null, At = /* @__PURE__ */ new Set(), Br = [];
function nn() {
  const e = (
    /** @type {() => void} */
    Br.shift()
  );
  Br.length > 0 && queueMicrotask(nn), e();
}
let mr = [], _t = null, st = !1;
class yr {
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  #a = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #i = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #e = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #u = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #f = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #t = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #l = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #n = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #r = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #o = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #c = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #d = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(r) {
    mr = [];
    var t = null;
    if (hr.size > 1) {
      t = /* @__PURE__ */ new Map(), ir = /* @__PURE__ */ new Map();
      for (const [i, l] of this.current)
        t.set(i, { v: i.v, wv: i.wv }), i.v = l;
      for (const i of hr)
        if (i !== this)
          for (const [l, u] of i.#a)
            t.has(l) || (t.set(l, { v: l.v, wv: l.wv }), l.v = u);
    }
    for (const i of r)
      this.#g(i);
    if (this.#t.length === 0 && this.#e === 0) {
      this.#v();
      var n = this.#n, a = this.#r;
      this.#n = [], this.#r = [], this.#o = [], Y = null, Pt(n), Pt(a), Y === null ? Y = this : hr.delete(this), this.#u?.resolve();
    } else
      this.#s(this.#n), this.#s(this.#r), this.#s(this.#o);
    if (t) {
      for (const [i, { v: l, wv: u }] of t)
        i.wv <= u && (i.v = l);
      ir = null;
    }
    for (const i of this.#t)
      nr(i);
    for (const i of this.#l)
      nr(i);
    this.#t = [], this.#l = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #g(r) {
    r.f ^= G;
    for (var t = r.first; t !== null; ) {
      var n = t.f, a = (n & (Be | sr)) !== 0, i = a && (n & G) !== 0, l = i || (n & ce) !== 0 || this.skipped_effects.has(t);
      if (!l && t.fn !== null) {
        if (a)
          t.f ^= G;
        else if ((n & ct) !== 0)
          this.#r.push(t);
        else if ((n & G) === 0)
          if ((n & vt) !== 0) {
            var u = t.b?.pending ? this.#l : this.#t;
            u.push(t);
          } else Ur(t) && ((t.f & or) !== 0 && this.#o.push(t), nr(t));
        var o = t.first;
        if (o !== null) {
          t = o;
          continue;
        }
      }
      var s = t.parent;
      for (t = t.next; t === null && s !== null; )
        t = s.next, s = s.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #s(r) {
    for (const t of r)
      ((t.f & oe) !== 0 ? this.#c : this.#d).push(t), Q(t, G);
    r.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(r, t) {
    this.#a.has(r) || this.#a.set(r, t), this.current.set(r, r.v);
  }
  activate() {
    Y = this;
  }
  deactivate() {
    Y = null;
    for (const r of At)
      if (At.delete(r), r(), Y !== null)
        break;
  }
  neuter() {
    this.#f = !0;
  }
  flush() {
    mr.length > 0 ? Ma() : this.#v(), Y === this && (this.#e === 0 && hr.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #v() {
    if (!this.#f)
      for (const r of this.#i)
        r();
    this.#i.clear();
  }
  increment() {
    this.#e += 1;
  }
  decrement() {
    if (this.#e -= 1, this.#e === 0) {
      for (const r of this.#c)
        Q(r, oe), lr(r);
      for (const r of this.#d)
        Q(r, je), lr(r);
      this.#n = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(r) {
    this.#i.add(r);
  }
  settled() {
    return (this.#u ??= va()).promise;
  }
  static ensure() {
    if (Y === null) {
      const r = Y = new yr();
      hr.add(Y), yr.enqueue(() => {
        Y === r && r.flush();
      });
    }
    return Y;
  }
  /** @param {() => void} task */
  static enqueue(r) {
    Br.length === 0 && queueMicrotask(nn), Br.unshift(r);
  }
}
function Ma() {
  var e = tr;
  st = !0;
  try {
    var r = 0;
    for (Rt(!0); mr.length > 0; ) {
      var t = yr.ensure();
      if (r++ > 1e3) {
        var n, a;
        Da();
      }
      t.process(mr), Ne.clear();
    }
  } finally {
    st = !1, Rt(e), _t = null;
  }
}
function Da() {
  try {
    ma();
  } catch (e) {
    ht(e, _t);
  }
}
let ze = null;
function Pt(e) {
  var r = e.length;
  if (r !== 0) {
    for (var t = 0; t < r; ) {
      var n = e[t++];
      if ((n.f & (Ge | ce)) === 0 && Ur(n) && (ze = [], nr(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? fn(n) : n.fn = null), ze.length > 0)) {
        Ne.clear();
        for (const a of ze)
          nr(a);
        ze = [];
      }
    }
    ze = null;
  }
}
function lr(e) {
  for (var r = _t = e; r.parent !== null; ) {
    r = r.parent;
    var t = r.f;
    if (st && r === I && (t & or) !== 0)
      return;
    if ((t & (sr | Be)) !== 0) {
      if ((t & G) === 0) return;
      r.f ^= G;
    }
  }
  mr.push(r);
}
const Ne = /* @__PURE__ */ new Map();
function xr(e, r) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Kt,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function he(e, r) {
  const t = xr(e);
  return vn(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ba(e, r = !1, t = !0) {
  const n = xr(e);
  return r || (n.equals = Gt), n;
}
function ue(e, r, t = !1) {
  O !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!be || (O.f & Tt) !== 0) && Zt() && (O.f & (te | or | vt | Tt)) !== 0 && !Se?.includes(e) && ka();
  let n = t ? Oe(r) : r;
  return wr(e, n);
}
function wr(e, r) {
  if (!e.equals(r)) {
    var t = e.v;
    cr ? Ne.set(e, r) : Ne.set(e, t), e.v = r;
    var n = yr.ensure();
    n.capture(e, t), (e.f & te) !== 0 && ((e.f & oe) !== 0 && bt(
      /** @type {Derived} */
      e
    ), Q(e, (e.f & fe) === 0 ? G : je)), e.wv = hn(), an(e, oe), I !== null && (I.f & G) !== 0 && (I.f & (Be | sr)) === 0 && (ie === null ? Za([e]) : ie.push(e));
  }
  return r;
}
function rt(e) {
  ue(e, e.v + 1);
}
function an(e, r) {
  var t = e.reactions;
  if (t !== null)
    for (var n = t.length, a = 0; a < n; a++) {
      var i = t[a], l = i.f, u = (l & oe) === 0;
      u && Q(i, r), (l & te) !== 0 ? an(
        /** @type {Derived} */
        i,
        je
      ) : u && ((l & or) !== 0 && ze !== null && ze.push(
        /** @type {Effect} */
        i
      ), lr(
        /** @type {Effect} */
        i
      ));
    }
}
function Oe(e) {
  if (typeof e != "object" || e === null || We in e)
    return e;
  const r = qt(e);
  if (r !== fa && r !== ca)
    return e;
  var t = /* @__PURE__ */ new Map(), n = Vr(e), a = /* @__PURE__ */ he(0), i = He, l = (u) => {
    if (He === i)
      return u();
    var o = O, s = He;
    me(null), Lt(i);
    var f = u();
    return me(o), Lt(s), f;
  };
  return n && t.set("length", /* @__PURE__ */ he(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, o, s) {
        (!("value" in s) || s.configurable === !1 || s.enumerable === !1 || s.writable === !1) && xa();
        var f = t.get(o);
        return f === void 0 ? f = l(() => {
          var d = /* @__PURE__ */ he(s.value);
          return t.set(o, d), d;
        }) : ue(f, s.value, !0), !0;
      },
      deleteProperty(u, o) {
        var s = t.get(o);
        if (s === void 0) {
          if (o in u) {
            const f = l(() => /* @__PURE__ */ he(q));
            t.set(o, f), rt(a);
          }
        } else
          ue(s, q), rt(a);
        return !0;
      },
      get(u, o, s) {
        if (o === We)
          return e;
        var f = t.get(o), d = o in u;
        if (f === void 0 && (!d || rr(u, o)?.writable) && (f = l(() => {
          var p = Oe(d ? u[o] : q), c = /* @__PURE__ */ he(p);
          return c;
        }), t.set(o, f)), f !== void 0) {
          var h = v(f);
          return h === q ? void 0 : h;
        }
        return Reflect.get(u, o, s);
      },
      getOwnPropertyDescriptor(u, o) {
        var s = Reflect.getOwnPropertyDescriptor(u, o);
        if (s && "value" in s) {
          var f = t.get(o);
          f && (s.value = v(f));
        } else if (s === void 0) {
          var d = t.get(o), h = d?.v;
          if (d !== void 0 && h !== q)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return s;
      },
      has(u, o) {
        if (o === We)
          return !0;
        var s = t.get(o), f = s !== void 0 && s.v !== q || Reflect.has(u, o);
        if (s !== void 0 || I !== null && (!f || rr(u, o)?.writable)) {
          s === void 0 && (s = l(() => {
            var h = f ? Oe(u[o]) : q, p = /* @__PURE__ */ he(h);
            return p;
          }), t.set(o, s));
          var d = v(s);
          if (d === q)
            return !1;
        }
        return f;
      },
      set(u, o, s, f) {
        var d = t.get(o), h = o in u;
        if (n && o === "length")
          for (var p = s; p < /** @type {Source<number>} */
          d.v; p += 1) {
            var c = t.get(p + "");
            c !== void 0 ? ue(c, q) : p in u && (c = l(() => /* @__PURE__ */ he(q)), t.set(p + "", c));
          }
        if (d === void 0)
          (!h || rr(u, o)?.writable) && (d = l(() => /* @__PURE__ */ he(void 0)), ue(d, Oe(s)), t.set(o, d));
        else {
          h = d.v !== q;
          var b = l(() => Oe(s));
          ue(d, b);
        }
        var _ = Reflect.getOwnPropertyDescriptor(u, o);
        if (_?.set && _.set.call(f, s), !h) {
          if (n && typeof o == "string") {
            var k = (
              /** @type {Source<number>} */
              t.get("length")
            ), g = Number(o);
            Number.isInteger(g) && g >= k.v && ue(k, g + 1);
          }
          rt(a);
        }
        return !0;
      },
      ownKeys(u) {
        v(a);
        var o = Reflect.ownKeys(u).filter((d) => {
          var h = t.get(d);
          return h === void 0 || h.v !== q;
        });
        for (var [s, f] of t)
          f.v !== q && !(s in u) && o.push(s);
        return o;
      },
      setPrototypeOf() {
        wa();
      }
    }
  );
}
function It(e) {
  try {
    if (e !== null && typeof e == "object" && We in e)
      return e[We];
  } catch {
  }
  return e;
}
function ja(e, r) {
  return Object.is(It(e), It(r));
}
var $a, Fa, za;
function ur(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  return Fa.call(e);
}
// @__NO_SIDE_EFFECTS__
function Wr(e) {
  return za.call(e);
}
function j(e, r) {
  return /* @__PURE__ */ Ce(e);
}
function z(e, r) {
  {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ce(
        /** @type {Node} */
        e
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Wr(t) : t;
  }
}
function K(e, r = 1, t = !1) {
  let n = e;
  for (; r--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Wr(n);
  return n;
}
function Va(e) {
  e.textContent = "";
}
function ln() {
  return !1;
}
function qa(e, r) {
  if (r) {
    const t = document.body;
    e.autofocus = !0, pt(() => {
      document.activeElement === t && e.focus();
    });
  }
}
function mt(e) {
  var r = O, t = I;
  me(null), De(null);
  try {
    return e();
  } finally {
    me(r), De(t);
  }
}
function Wa(e, r) {
  var t = r.last;
  t === null ? r.last = r.first = e : (t.next = e, e.prev = t, r.last = e);
}
function Ze(e, r, t, n = !0) {
  var a = I;
  a !== null && (a.f & ce) !== 0 && (e |= ce);
  var i = {
    ctx: Te,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | oe,
    first: null,
    fn: r,
    last: null,
    next: null,
    parent: a,
    b: a && a.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (t)
    try {
      nr(i), i.f |= Ut;
    } catch (o) {
      throw se(i), o;
    }
  else r !== null && lr(i);
  var l = t && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & dt) === 0;
  if (!l && n && (a !== null && Wa(i, a), O !== null && (O.f & te) !== 0 && (e & sr) === 0)) {
    var u = (
      /** @type {Derived} */
      O
    );
    (u.effects ??= []).push(i);
  }
  return i;
}
function Ha(e) {
  const r = Ze(Wt, null, !1);
  return Q(r, G), r.teardown = e, r;
}
function Ua(e) {
  return Ze(ct | ha, e, !1);
}
function on(e) {
  return Ze(ct, e, !1);
}
function Ya(e) {
  return Ze(vt | dt, e, !0);
}
function $(e, r = [], t = []) {
  rn(r, t, (n) => {
    Ze(Wt, () => e(...n.map(v)), !0);
  });
}
function fr(e, r = 0) {
  var t = Ze(or | r, e, !0);
  return t;
}
function Me(e, r = !0) {
  return Ze(Be, e, !0, r);
}
function sn(e) {
  var r = e.teardown;
  if (r !== null) {
    const t = cr, n = O;
    Ot(!0), me(null);
    try {
      r.call(null);
    } finally {
      Ot(t), me(n);
    }
  }
}
function un(e, r = !1) {
  var t = e.first;
  for (e.first = e.last = null; t !== null; ) {
    const a = t.ac;
    a !== null && mt(() => {
      a.abort(gt);
    });
    var n = t.next;
    (t.f & sr) !== 0 ? t.parent = null : se(t, r), t = n;
  }
}
function Ka(e) {
  for (var r = e.first; r !== null; ) {
    var t = r.next;
    (r.f & Be) === 0 && se(r), r = t;
  }
}
function se(e, r = !0) {
  var t = !1;
  (r || (e.f & ga) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Ga(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), t = !0), un(e, r && !t), jr(e, 0), Q(e, Ge);
  var n = e.transitions;
  if (n !== null)
    for (const i of n)
      i.stop();
  sn(e);
  var a = e.parent;
  a !== null && a.first !== null && fn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Ga(e, r) {
  for (; e !== null; ) {
    var t = e === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Wr(e)
    );
    e.remove(), e = t;
  }
}
function fn(e) {
  var r = e.parent, t = e.prev, n = e.next;
  t !== null && (t.next = n), n !== null && (n.prev = t), r !== null && (r.first === e && (r.first = n), r.last === e && (r.last = t));
}
function yt(e, r) {
  var t = [];
  xt(e, t, !0), cn(t, () => {
    se(e), r && r();
  });
}
function cn(e, r) {
  var t = e.length;
  if (t > 0) {
    var n = () => --t || r();
    for (var a of e)
      a.out(n);
  } else
    r();
}
function xt(e, r, t) {
  if ((e.f & ce) === 0) {
    if (e.f ^= ce, e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && r.push(l);
    for (var n = e.first; n !== null; ) {
      var a = n.next, i = (n.f & Cr) !== 0 || (n.f & Be) !== 0;
      xt(n, r, i ? t : !1), n = a;
    }
  }
}
function Hr(e) {
  dn(e, !0);
}
function dn(e, r) {
  if ((e.f & ce) !== 0) {
    e.f ^= ce, (e.f & G) === 0 && (Q(e, oe), lr(e));
    for (var t = e.first; t !== null; ) {
      var n = t.next, a = (t.f & Cr) !== 0 || (t.f & Be) !== 0;
      dn(t, a ? r : !1), t = n;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || r) && i.in();
  }
}
let tr = !1;
function Rt(e) {
  tr = e;
}
let cr = !1;
function Ot(e) {
  cr = e;
}
let O = null, be = !1;
function me(e) {
  O = e;
}
let I = null;
function De(e) {
  I = e;
}
let Se = null;
function vn(e) {
  O !== null && (Se === null ? Se = [e] : Se.push(e));
}
let X = null, re = 0, ie = null;
function Za(e) {
  ie = e;
}
let gn = 1, kr = 0, He = kr;
function Lt(e) {
  He = e;
}
let Le = !1;
function hn() {
  return ++gn;
}
function Ur(e) {
  var r = e.f;
  if ((r & oe) !== 0)
    return !0;
  if ((r & je) !== 0) {
    var t = e.deps, n = (r & fe) !== 0;
    if (t !== null) {
      var a, i, l = (r & Nr) !== 0, u = n && I !== null && !Le, o = t.length;
      if ((l || u) && (I === null || (I.f & Ge) === 0)) {
        var s = (
          /** @type {Derived} */
          e
        ), f = s.parent;
        for (a = 0; a < o; a++)
          i = t[a], (l || !i?.reactions?.includes(s)) && (i.reactions ??= []).push(s);
        l && (s.f ^= Nr), u && f !== null && (f.f & fe) === 0 && (s.f ^= fe);
      }
      for (a = 0; a < o; a++)
        if (i = t[a], Ur(
          /** @type {Derived} */
          i
        ) && en(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!n || I !== null && !Le) && Q(e, G);
  }
  return !1;
}
function pn(e, r, t = !0) {
  var n = e.reactions;
  if (n !== null && !Se?.includes(e))
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      (i.f & te) !== 0 ? pn(
        /** @type {Derived} */
        i,
        r,
        !1
      ) : r === i && (t ? Q(i, oe) : (i.f & G) !== 0 && Q(i, je), lr(
        /** @type {Effect} */
        i
      ));
    }
}
function bn(e) {
  var r = X, t = re, n = ie, a = O, i = Le, l = Se, u = Te, o = be, s = He, f = e.f;
  X = /** @type {null | Value[]} */
  null, re = 0, ie = null, Le = (f & fe) !== 0 && (be || !tr || O === null), O = (f & (Be | sr)) === 0 ? e : null, Se = null, Mr(e.ctx), be = !1, He = ++kr, e.ac !== null && (mt(() => {
    e.ac.abort(gt);
  }), e.ac = null);
  try {
    e.f |= ot;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), p = e.deps;
    if (X !== null) {
      var c;
      if (jr(e, re), p !== null && re > 0)
        for (p.length = re + X.length, c = 0; c < X.length; c++)
          p[re + c] = X[c];
      else
        e.deps = p = X;
      if (!Le || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (f & te) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (c = re; c < p.length; c++)
          (p[c].reactions ??= []).push(e);
    } else p !== null && re < p.length && (jr(e, re), p.length = re);
    if (Zt() && ie !== null && !be && p !== null && (e.f & (te | je | oe)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      ie.length; c++)
        pn(
          ie[c],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (kr++, ie !== null && (n === null ? n = ie : n.push(.../** @type {Source[]} */
    ie))), (e.f & qe) !== 0 && (e.f ^= qe), h;
  } catch (b) {
    return Pa(b);
  } finally {
    e.f ^= ot, X = r, re = t, ie = n, O = a, Le = i, Se = l, Mr(u), be = o, He = s;
  }
}
function Xa(e, r) {
  let t = r.reactions;
  if (t !== null) {
    var n = sa.call(t, e);
    if (n !== -1) {
      var a = t.length - 1;
      a === 0 ? t = r.reactions = null : (t[n] = t[a], t.pop());
    }
  }
  t === null && (r.f & te) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (X === null || !X.includes(r)) && (Q(r, je), (r.f & (fe | Nr)) === 0 && (r.f ^= Nr), Qt(
    /** @type {Derived} **/
    r
  ), jr(
    /** @type {Derived} **/
    r,
    0
  ));
}
function jr(e, r) {
  var t = e.deps;
  if (t !== null)
    for (var n = r; n < t.length; n++)
      Xa(e, t[n]);
}
function nr(e) {
  var r = e.f;
  if ((r & Ge) === 0) {
    Q(e, G);
    var t = I, n = tr;
    I = e, tr = !0;
    try {
      (r & or) !== 0 ? Ka(e) : un(e), sn(e);
      var a = bn(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = gn;
      var i;
      zt && Ta && (e.f & oe) !== 0 && e.deps;
    } finally {
      tr = n, I = t;
    }
  }
}
function v(e) {
  var r = e.f, t = (r & te) !== 0;
  if (O !== null && !be) {
    var n = I !== null && (I.f & Ge) !== 0;
    if (!n && !Se?.includes(e)) {
      var a = O.deps;
      if ((O.f & ot) !== 0)
        e.rv < kr && (e.rv = kr, X === null && a !== null && a[re] === e ? re++ : X === null ? X = [e] : (!Le || !X.includes(e)) && X.push(e));
      else {
        (O.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [O] : i.includes(O) || i.push(O);
      }
    }
  } else if (t && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), u = l.parent;
    u !== null && (u.f & fe) === 0 && (l.f ^= fe);
  }
  if (cr) {
    if (Ne.has(e))
      return Ne.get(e);
    if (t) {
      l = /** @type {Derived} */
      e;
      var o = l.v;
      return ((l.f & G) === 0 && l.reactions !== null || _n(l)) && (o = bt(l)), Ne.set(l, o), o;
    }
  } else if (t) {
    if (l = /** @type {Derived} */
    e, ir?.has(l))
      return ir.get(l);
    Ur(l) && en(l);
  }
  if ((e.f & qe) !== 0)
    throw e.v;
  return e.v;
}
function _n(e) {
  if (e.v === q) return !0;
  if (e.deps === null) return !1;
  for (const r of e.deps)
    if (Ne.has(r) || (r.f & te) !== 0 && _n(
      /** @type {Derived} */
      r
    ))
      return !0;
  return !1;
}
function Ja(e) {
  var r = be;
  try {
    return be = !0, e();
  } finally {
    be = r;
  }
}
const Qa = -7169;
function Q(e, r) {
  e.f = e.f & Qa | r;
}
const ei = /* @__PURE__ */ new Set(), ri = /* @__PURE__ */ new Set();
function ti(e, r, t, n = {}) {
  function a(i) {
    if (n.capture || ni.call(r, i), !i.cancelBubble)
      return mt(() => t?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? pt(() => {
    r.addEventListener(e, a, n);
  }) : r.addEventListener(e, a, n), a;
}
function Er(e) {
  for (var r = 0; r < e.length; r++)
    ei.add(e[r]);
  for (var t of ri)
    t(e);
}
let Nt = null;
function ni(e) {
  var r = this, t = (
    /** @type {Node} */
    r.ownerDocument
  ), n = e.type, a = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  Nt = e;
  var l = 0, u = Nt === e && e.__root;
  if (u) {
    var o = a.indexOf(u);
    if (o !== -1 && (r === document || r === /** @type {any} */
    window)) {
      e.__root = r;
      return;
    }
    var s = a.indexOf(r);
    if (s === -1)
      return;
    o <= s && (l = o);
  }
  if (i = /** @type {Element} */
  a[l] || e.target, i !== r) {
    lt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || t;
      }
    });
    var f = O, d = I;
    me(null), De(null);
    try {
      for (var h, p = []; i !== null; ) {
        var c = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var b = i["__" + n];
          if (b != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Vr(b)) {
              var [_, ...k] = b;
              _.apply(i, [e, ...k]);
            } else
              b.call(i, e);
        } catch (g) {
          h ? p.push(g) : h = g;
        }
        if (e.cancelBubble || c === r || c === null)
          break;
        i = c;
      }
      if (h) {
        for (let g of p)
          queueMicrotask(() => {
            throw g;
          });
        throw h;
      }
    } finally {
      e.__root = r, delete e.currentTarget, me(f), De(d);
    }
  }
}
function mn(e) {
  var r = document.createElement("template");
  return r.innerHTML = e.replaceAll("<!>", "<!---->"), r.content;
}
function Ye(e, r) {
  var t = (
    /** @type {Effect} */
    I
  );
  t.nodes_start === null && (t.nodes_start = e, t.nodes_end = r);
}
// @__NO_SIDE_EFFECTS__
function F(e, r) {
  var t = (r & Ft) !== 0, n = (r & aa) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = mn(i ? e : "<!>" + e), t || (a = /** @type {Node} */
    /* @__PURE__ */ Ce(a)));
    var l = (
      /** @type {TemplateNode} */
      n || $a ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (t) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ce(l)
      ), o = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Ye(u, o);
    } else
      Ye(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function ai(e, r, t = "svg") {
  var n = !e.startsWith("<!>"), a = (r & Ft) !== 0, i = `<${t}>${n ? e : "<!>" + e}</${t}>`, l;
  return () => {
    if (!l) {
      var u = (
        /** @type {DocumentFragment} */
        mn(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Ce(u)
      );
      if (a)
        for (l = document.createDocumentFragment(); /* @__PURE__ */ Ce(o); )
          l.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Ce(o)
          );
      else
        l = /** @type {Element} */
        /* @__PURE__ */ Ce(o);
    }
    var s = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    if (a) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ce(s)
      ), d = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ye(f, d);
    } else
      Ye(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Yr(e, r) {
  return /* @__PURE__ */ ai(e, r, "svg");
}
function ut(e = "") {
  {
    var r = ur(e + "");
    return Ye(r, r), r;
  }
}
function J() {
  var e = document.createDocumentFragment(), r = document.createComment(""), t = ur();
  return e.append(r, t), Ye(r, t), e;
}
function E(e, r) {
  e !== null && e.before(
    /** @type {Node} */
    r
  );
}
function ii(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const li = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function oi(e) {
  return li.includes(e);
}
const si = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function ui(e) {
  return e = e.toLowerCase(), si[e] ?? e;
}
function _e(e, r) {
  var t = r == null ? "" : typeof r == "object" ? r + "" : r;
  t !== (e.__t ??= e.nodeValue) && (e.__t = t, e.nodeValue = t + "");
}
function le(e, r, ...t) {
  var n = e, a = Ke, i;
  fr(() => {
    a !== (a = r()) && (i && (se(i), i = null), i = Me(() => (
      /** @type {SnippetFn} */
      a(n, ...t)
    )));
  }, Cr);
}
function H(e, r, t = !1) {
  var n = e, a = null, i = null, l = q, u = t ? Cr : 0, o = !1;
  const s = (p, c = !0) => {
    o = !0, h(c, p);
  };
  var f = null;
  function d() {
    f !== null && (f.lastChild.remove(), n.before(f), f = null);
    var p = l ? a : i, c = l ? i : a;
    p && Hr(p), c && yt(c, () => {
      l ? i = null : a = null;
    });
  }
  const h = (p, c) => {
    if (l !== (l = p)) {
      var b = ln(), _ = n;
      if (b && (f = document.createDocumentFragment(), f.append(_ = ur())), l ? a ??= c && Me(() => c(_)) : i ??= c && Me(() => c(_)), b) {
        var k = (
          /** @type {Batch} */
          Y
        ), g = l ? a : i, m = l ? i : a;
        g && k.skipped_effects.delete(g), m && k.skipped_effects.add(m), k.add_callback(d);
      } else
        d();
    }
  };
  fr(() => {
    o = !1, r(s), o || h(null, null);
  }, u);
}
function Lr(e, r) {
  return r;
}
function fi(e, r, t) {
  for (var n = e.items, a = [], i = r.length, l = 0; l < i; l++)
    xt(r[l].e, a, !0);
  var u = i > 0 && a.length === 0 && t !== null;
  if (u) {
    var o = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    Va(o), o.append(
      /** @type {Element} */
      t
    ), n.clear(), pe(e, r[0].prev, r[i - 1].next);
  }
  cn(a, () => {
    for (var s = 0; s < i; s++) {
      var f = r[s];
      u || (n.delete(f.k), pe(e, f.prev, f.next)), se(f.e, !u);
    }
  });
}
function ar(e, r, t, n, a, i = null) {
  var l = e, u = { flags: r, items: /* @__PURE__ */ new Map(), first: null }, o = (r & $t) !== 0;
  if (o) {
    var s = (
      /** @type {Element} */
      e
    );
    l = s.appendChild(ur());
  }
  var f = null, d = !1, h = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ Jt(() => {
    var k = t();
    return Vr(k) ? k : k == null ? [] : Vt(k);
  }), c, b;
  function _() {
    ci(
      b,
      c,
      u,
      h,
      l,
      a,
      r,
      n,
      t
    ), i !== null && (c.length === 0 ? f ? Hr(f) : f = Me(() => i(l)) : f !== null && yt(f, () => {
      f = null;
    }));
  }
  fr(() => {
    b ??= /** @type {Effect} */
    I, c = /** @type {V[]} */
    v(p);
    var k = c.length;
    if (!(d && k === 0)) {
      d = k === 0;
      var g, m, w, S;
      if (ln()) {
        var y = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          Y
        );
        for (m = 0; m < k; m += 1) {
          w = c[m], S = n(w, m);
          var V = u.items.get(S) ?? h.get(S);
          V ? (r & (Fr | zr)) !== 0 && yn(V, w, m, r) : (g = xn(
            null,
            u,
            null,
            null,
            w,
            S,
            m,
            a,
            r,
            t,
            !0
          ), h.set(S, g)), y.add(S);
        }
        for (const [C, A] of u.items)
          y.has(C) || T.skipped_effects.add(A.e);
        T.add_callback(_);
      } else
        _();
      v(p);
    }
  });
}
function ci(e, r, t, n, a, i, l, u, o) {
  var s = (l & Jn) !== 0, f = (l & (Fr | zr)) !== 0, d = r.length, h = t.items, p = t.first, c = p, b, _ = null, k, g = [], m = [], w, S, y, T;
  if (s)
    for (T = 0; T < d; T += 1)
      w = r[T], S = u(w, T), y = h.get(S), y !== void 0 && (y.a?.measure(), (k ??= /* @__PURE__ */ new Set()).add(y));
  for (T = 0; T < d; T += 1) {
    if (w = r[T], S = u(w, T), y = h.get(S), y === void 0) {
      var V = n.get(S);
      if (V !== void 0) {
        n.delete(S), h.set(S, V);
        var C = _ ? _.next : c;
        pe(t, _, V), pe(t, V, C), tt(V, C, a), _ = V;
      } else {
        var A = c ? (
          /** @type {TemplateNode} */
          c.e.nodes_start
        ) : a;
        _ = xn(
          A,
          t,
          _,
          _ === null ? t.first : _.next,
          w,
          S,
          T,
          i,
          l,
          o
        );
      }
      h.set(S, _), g = [], m = [], c = _.next;
      continue;
    }
    if (f && yn(y, w, T, l), (y.e.f & ce) !== 0 && (Hr(y.e), s && (y.a?.unfix(), (k ??= /* @__PURE__ */ new Set()).delete(y))), y !== c) {
      if (b !== void 0 && b.has(y)) {
        if (g.length < m.length) {
          var B = m[0], L;
          _ = B.prev;
          var Z = g[0], de = g[g.length - 1];
          for (L = 0; L < g.length; L += 1)
            tt(g[L], B, a);
          for (L = 0; L < m.length; L += 1)
            b.delete(m[L]);
          pe(t, Z.prev, de.next), pe(t, _, Z), pe(t, de, B), c = B, _ = de, T -= 1, g = [], m = [];
        } else
          b.delete(y), tt(y, c, a), pe(t, y.prev, y.next), pe(t, y, _ === null ? t.first : _.next), pe(t, _, y), _ = y;
        continue;
      }
      for (g = [], m = []; c !== null && c.k !== S; )
        (c.e.f & ce) === 0 && (b ??= /* @__PURE__ */ new Set()).add(c), m.push(c), c = c.next;
      if (c === null)
        continue;
      y = c;
    }
    g.push(y), _ = y, c = y.next;
  }
  if (c !== null || b !== void 0) {
    for (var ee = b === void 0 ? [] : Vt(b); c !== null; )
      (c.e.f & ce) === 0 && ee.push(c), c = c.next;
    var W = ee.length;
    if (W > 0) {
      var $e = (l & $t) !== 0 && d === 0 ? a : null;
      if (s) {
        for (T = 0; T < W; T += 1)
          ee[T].a?.measure();
        for (T = 0; T < W; T += 1)
          ee[T].a?.fix();
      }
      fi(t, ee, $e);
    }
  }
  s && pt(() => {
    if (k !== void 0)
      for (y of k)
        y.a?.apply();
  }), e.first = t.first && t.first.e, e.last = _ && _.e;
  for (var ne of n.values())
    se(ne.e);
  n.clear();
}
function yn(e, r, t, n) {
  (n & Fr) !== 0 && wr(e.v, r), (n & zr) !== 0 ? wr(
    /** @type {Value<number>} */
    e.i,
    t
  ) : e.i = t;
}
function xn(e, r, t, n, a, i, l, u, o, s, f) {
  var d = (o & Fr) !== 0, h = (o & Qn) === 0, p = d ? h ? /* @__PURE__ */ Ba(a, !1, !1) : xr(a) : a, c = (o & zr) === 0 ? l : xr(l), b = {
    i: c,
    v: p,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: n
  };
  try {
    if (e === null) {
      var _ = document.createDocumentFragment();
      _.append(e = ur());
    }
    return b.e = Me(() => u(
      /** @type {Node} */
      e,
      p,
      c,
      s
    ), Ea), b.e.prev = t && t.e, b.e.next = n && n.e, t === null ? f || (r.first = b) : (t.next = b, t.e.next = b.e), n !== null && (n.prev = b, n.e.prev = b.e), b;
  } finally {
  }
}
function tt(e, r, t) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : t, a = r ? (
    /** @type {TemplateNode} */
    r.e.nodes_start
  ) : t, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== null && i !== n; ) {
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Wr(i)
    );
    a.before(i), i = l;
  }
}
function pe(e, r, t) {
  r === null ? e.first = t : (r.next = t, r.e.next = t && t.e), t !== null && (t.prev = r, t.e.prev = r && r.e);
}
function di(e, r, t, n, a, i) {
  var l, u, o = null, s = (
    /** @type {TemplateNode} */
    e
  ), f;
  fr(() => {
    const d = r() || null;
    var h = d === "svg" ? la : null;
    d !== l && (f && (d === null ? yt(f, () => {
      f = null, u = null;
    }) : d === u ? Hr(f) : se(f)), d && d !== u && (f = Me(() => {
      if (o = h ? document.createElementNS(h, d) : document.createElement(d), Ye(o, o), n) {
        var p = (
          /** @type {TemplateNode} */
          o.appendChild(ur())
        );
        n(o, p);
      }
      I.nodes_end = o, s.before(o);
    })), l = d, l && (u = l));
  }, Cr);
}
function vi(e, r) {
  var t = void 0, n;
  fr(() => {
    t !== (t = r()) && (n && (se(n), n = null), t && (n = Me(() => {
      on(() => (
        /** @type {(node: Element) => void} */
        t(e)
      ));
    })));
  });
}
function wn(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (r = 0; r < a; r++) e[r] && (t = wn(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function gi() {
  for (var e, r, t = 0, n = "", a = arguments.length; t < a; t++) (e = arguments[t]) && (r = wn(e)) && (n && (n += " "), n += r);
  return n;
}
function D(e) {
  return typeof e == "object" ? gi(e) : e ?? "";
}
const Mt = [...` 	
\r\f \v\uFEFF`];
function hi(e, r, t) {
  var n = e == null ? "" : "" + e;
  if (t) {
    for (var a in t)
      if (t[a])
        n = n ? n + " " + a : a;
      else if (n.length)
        for (var i = a.length, l = 0; (l = n.indexOf(a, l)) >= 0; ) {
          var u = l + i;
          (l === 0 || Mt.includes(n[l - 1])) && (u === n.length || Mt.includes(n[u])) ? n = (l === 0 ? "" : n.substring(0, l)) + n.substring(u + 1) : l = u;
        }
  }
  return n === "" ? null : n;
}
function Dt(e, r = !1) {
  var t = r ? " !important;" : ";", n = "";
  for (var a in e) {
    var i = e[a];
    i != null && i !== "" && (n += " " + a + ": " + i + t);
  }
  return n;
}
function nt(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function pi(e, r) {
  if (r) {
    var t = "", n, a;
    if (Array.isArray(r) ? (n = r[0], a = r[1]) : n = r, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, l = 0, u = !1, o = [];
      n && o.push(...Object.keys(n).map(nt)), a && o.push(...Object.keys(a).map(nt));
      var s = 0, f = -1;
      const b = e.length;
      for (var d = 0; d < b; d++) {
        var h = e[d];
        if (u ? h === "/" && e[d - 1] === "*" && (u = !1) : i ? i === h && (i = !1) : h === "/" && e[d + 1] === "*" ? u = !0 : h === '"' || h === "'" ? i = h : h === "(" ? l++ : h === ")" && l--, !u && i === !1 && l === 0) {
          if (h === ":" && f === -1)
            f = d;
          else if (h === ";" || d === b - 1) {
            if (f !== -1) {
              var p = nt(e.substring(s, f).trim());
              if (!o.includes(p)) {
                h !== ";" && d++;
                var c = e.substring(s, d).trim();
                t += " " + c + ";";
              }
            }
            s = d + 1, f = -1;
          }
        }
      }
    }
    return n && (t += Dt(n)), a && (t += Dt(a, !0)), t = t.trim(), t === "" ? null : t;
  }
  return e == null ? null : String(e);
}
function M(e, r, t, n, a, i) {
  var l = e.__className;
  if (l !== t || l === void 0) {
    var u = hi(t, n, i);
    u == null ? e.removeAttribute("class") : r ? e.className = u : e.setAttribute("class", u), e.__className = t;
  } else if (i && a !== i)
    for (var o in i) {
      var s = !!i[o];
      (a == null || s !== !!a[o]) && e.classList.toggle(o, s);
    }
  return i;
}
function at(e, r = {}, t, n) {
  for (var a in t) {
    var i = t[a];
    r[a] !== i && (t[a] == null ? e.style.removeProperty(a) : e.style.setProperty(a, i, n));
  }
}
function kn(e, r, t, n) {
  var a = e.__style;
  if (a !== r) {
    var i = pi(r, n);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = r;
  } else n && (Array.isArray(n) ? (at(e, t?.[0], n[0]), at(e, t?.[1], n[1], "important")) : at(e, t, n));
  return n;
}
function ft(e, r, t = !1) {
  if (e.multiple) {
    if (r == null)
      return;
    if (!Vr(r))
      return Ca();
    for (var n of e.options)
      n.selected = r.includes(Bt(n));
    return;
  }
  for (n of e.options) {
    var a = Bt(n);
    if (ja(a, r)) {
      n.selected = !0;
      return;
    }
  }
  (!t || r !== void 0) && (e.selectedIndex = -1);
}
function bi(e) {
  var r = new MutationObserver(() => {
    ft(e, e.__value);
  });
  r.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Ha(() => {
    r.disconnect();
  });
}
function Bt(e) {
  return "__value" in e ? e.__value : e.value;
}
const pr = Symbol("class"), br = Symbol("style"), Cn = Symbol("is custom element"), En = Symbol("is html");
function _i(e, r) {
  r ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ue(e, r, t, n) {
  var a = Sn(e);
  a[r] !== (a[r] = t) && (r === "loading" && (e[pa] = t), t == null ? e.removeAttribute(r) : typeof t != "string" && Tn(e).includes(r) ? e[r] = t : e.setAttribute(r, t));
}
function mi(e, r, t, n, a = !1) {
  var i = Sn(e), l = i[Cn], u = !i[En], o = r || {}, s = e.tagName === "OPTION";
  for (var f in r)
    f in t || (t[f] = null);
  t.class ? t.class = D(t.class) : t[pr] && (t.class = null), t[br] && (t.style ??= null);
  var d = Tn(e);
  for (const g in t) {
    let m = t[g];
    if (s && g === "value" && m == null) {
      e.value = e.__value = "", o[g] = m;
      continue;
    }
    if (g === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      M(e, h, m, n, r?.[pr], t[pr]), o[g] = m, o[pr] = t[pr];
      continue;
    }
    if (g === "style") {
      kn(e, m, r?.[br], t[br]), o[g] = m, o[br] = t[br];
      continue;
    }
    var p = o[g];
    if (!(m === p && !(m === void 0 && e.hasAttribute(g)))) {
      o[g] = m;
      var c = g[0] + g[1];
      if (c !== "$$")
        if (c === "on") {
          const w = {}, S = "$$" + g;
          let y = g.slice(2);
          var b = oi(y);
          if (ii(y) && (y = y.slice(0, -7), w.capture = !0), !b && p) {
            if (m != null) continue;
            e.removeEventListener(y, o[S], w), o[S] = null;
          }
          if (m != null)
            if (b)
              e[`__${y}`] = m, Er([y]);
            else {
              let T = function(V) {
                o[g].call(this, V);
              };
              o[S] = ti(y, e, T, w);
            }
          else b && (e[`__${y}`] = void 0);
        } else if (g === "style")
          Ue(e, g, m);
        else if (g === "autofocus")
          qa(
            /** @type {HTMLElement} */
            e,
            !!m
          );
        else if (!l && (g === "__value" || g === "value" && m != null))
          e.value = e.__value = m;
        else if (g === "selected" && s)
          _i(
            /** @type {HTMLOptionElement} */
            e,
            m
          );
        else {
          var _ = g;
          u || (_ = ui(_));
          var k = _ === "defaultValue" || _ === "defaultChecked";
          if (m == null && !l && !k)
            if (i[g] = null, _ === "value" || _ === "checked") {
              let w = (
                /** @type {HTMLInputElement} */
                e
              );
              const S = r === void 0;
              if (_ === "value") {
                let y = w.defaultValue;
                w.removeAttribute(_), w.defaultValue = y, w.value = w.__value = S ? y : null;
              } else {
                let y = w.defaultChecked;
                w.removeAttribute(_), w.defaultChecked = y, w.checked = S ? y : !1;
              }
            } else
              e.removeAttribute(g);
          else k || d.includes(_) && (l || typeof m != "string") ? (e[_] = m, _ in i && (i[_] = q)) : typeof m != "function" && Ue(e, _, m);
        }
    }
  }
  return o;
}
function wt(e, r, t = [], n = [], a, i = !1) {
  rn(t, n, (l) => {
    var u = void 0, o = {}, s = e.nodeName === "SELECT", f = !1;
    if (fr(() => {
      var h = r(...l.map(v)), p = mi(e, u, h, a, i);
      f && s && "value" in h && ft(
        /** @type {HTMLSelectElement} */
        e,
        h.value
      );
      for (let b of Object.getOwnPropertySymbols(o))
        h[b] || se(o[b]);
      for (let b of Object.getOwnPropertySymbols(h)) {
        var c = h[b];
        b.description === oa && (!u || c !== u[b]) && (o[b] && se(o[b]), o[b] = Me(() => vi(e, () => c))), p[b] = c;
      }
      u = p;
    }), s) {
      var d = (
        /** @type {HTMLSelectElement} */
        e
      );
      on(() => {
        ft(
          d,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), bi(d);
      });
    }
    f = !0;
  });
}
function Sn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Cn]: e.nodeName.includes("-"),
      [En]: e.namespaceURI === ia
    }
  );
}
var jt = /* @__PURE__ */ new Map();
function Tn(e) {
  var r = jt.get(e.nodeName);
  if (r) return r;
  jt.set(e.nodeName, r = []);
  for (var t, n = e, a = Element.prototype; a !== n; ) {
    t = ua(n);
    for (var i in t)
      t[i].set && r.push(i);
    n = qt(n);
  }
  return r;
}
let Or = !1;
function yi(e) {
  var r = Or;
  try {
    return Or = !1, [e(), Or];
  } finally {
    Or = r;
  }
}
const xi = {
  get(e, r) {
    if (!e.exclude.includes(r))
      return e.props[r];
  },
  set(e, r) {
    return !1;
  },
  getOwnPropertyDescriptor(e, r) {
    if (!e.exclude.includes(r) && r in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[r]
      };
  },
  has(e, r) {
    return e.exclude.includes(r) ? !1 : r in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
  }
};
// @__NO_SIDE_EFFECTS__
function Ae(e, r, t) {
  return new Proxy(
    { props: e, exclude: r },
    xi
  );
}
const wi = {
  get(e, r) {
    let t = e.props.length;
    for (; t--; ) {
      let n = e.props[t];
      if (gr(n) && (n = n()), typeof n == "object" && n !== null && r in n) return n[r];
    }
  },
  set(e, r, t) {
    let n = e.props.length;
    for (; n--; ) {
      let a = e.props[n];
      gr(a) && (a = a());
      const i = rr(a, r);
      if (i && i.set)
        return i.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, r) {
    let t = e.props.length;
    for (; t--; ) {
      let n = e.props[t];
      if (gr(n) && (n = n()), typeof n == "object" && n !== null && r in n) {
        const a = rr(n, r);
        return a && !a.configurable && (a.configurable = !0), a;
      }
    }
  },
  has(e, r) {
    if (r === We || r === Yt) return !1;
    for (let t of e.props)
      if (gr(t) && (t = t()), t != null && r in t) return !0;
    return !1;
  },
  ownKeys(e) {
    const r = [];
    for (let t of e.props)
      if (gr(t) && (t = t()), !!t) {
        for (const n in t)
          r.includes(n) || r.push(n);
        for (const n of Object.getOwnPropertySymbols(t))
          r.includes(n) || r.push(n);
      }
    return r;
  }
};
function dr(...e) {
  return new Proxy({ props: e }, wi);
}
function x(e, r, t, n) {
  var a = (t & ta) !== 0, i = (t & na) !== 0, l = (
    /** @type {V} */
    n
  ), u = !0, o = () => (u && (u = !1, l = i ? Ja(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), l), s;
  if (a) {
    var f = We in e || Yt in e;
    s = rr(e, r)?.set ?? (f && r in e ? (g) => e[r] = g : void 0);
  }
  var d, h = !1;
  a ? [d, h] = yi(() => (
    /** @type {V} */
    e[r]
  )) : d = /** @type {V} */
  e[r], d === void 0 && n !== void 0 && (d = o(), s && (ya(), s(d)));
  var p;
  if (p = () => {
    var g = (
      /** @type {V} */
      e[r]
    );
    return g === void 0 ? o() : (u = !0, g);
  }, (t & ra) === 0)
    return p;
  if (s) {
    var c = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(g, m) {
        return arguments.length > 0 ? ((!m || c || h) && s(m ? p() : g), g) : p();
      })
    );
  }
  var b = !1, _ = ((t & ea) !== 0 ? qr : Jt)(() => (b = !1, p()));
  a && v(_);
  var k = (
    /** @type {Effect} */
    I
  );
  return (
    /** @type {() => V} */
    (function(g, m) {
      if (arguments.length > 0) {
        const w = m ? v(_) : a ? Oe(g) : g;
        return ue(_, w), b = !0, l !== void 0 && (l = w), g;
      }
      return cr && b || (k.f & Ge) !== 0 ? _.v : v(_);
    })
  );
}
const Re = {
  // Base styling to add to Flowbite Button
  base: `
    font-semibold 
    tracking-wide 
    shadow-sm 
    transition-all 
    duration-300 
    transform 
    hover:scale-105 
    hover:shadow-md 
    active:scale-95 
    focus:ring-4 
    focus:ring-offset-2
    cursor-pointer
  `.replace(/\s+/g, " ").trim(),
  // Variant-specific overrides for colors
  variants: {
    primary: "!bg-primary-600 !text-white hover:!bg-primary-700 focus:!ring-primary-300 dark:!bg-primary-500 dark:hover:!bg-primary-600",
    secondary: "!bg-secondary-600 !text-white hover:!bg-secondary-700 focus:!ring-secondary-300 dark:!bg-secondary-500 dark:hover:!bg-secondary-600",
    accent: "!bg-accent-600 !text-white hover:!bg-accent-700 focus:!ring-accent-300 dark:!bg-accent-500 dark:hover:!bg-accent-600",
    success: "!bg-success-600 !text-white hover:!bg-success-700 focus:!ring-success-300 dark:!bg-success-500 dark:hover:!bg-success-600",
    warning: "!bg-warning-600 !text-white hover:!bg-warning-700 focus:!ring-warning-300 dark:!bg-warning-500 dark:hover:!bg-warning-600",
    error: "!bg-error-600 !text-white hover:!bg-error-700 focus:!ring-error-300 dark:!bg-error-500 dark:hover:!bg-error-600",
    outline: "!border-2 !border-primary-600 !text-primary-600 hover:!bg-primary-50 focus:!ring-primary-300 dark:!border-primary-400 dark:!text-primary-400 dark:hover:!bg-primary-900/20",
    ghost: "!bg-transparent !text-primary-600 hover:!bg-primary-50 focus:!ring-primary-300 dark:!text-primary-400 dark:hover:!bg-primary-900/20"
  },
  // Size overrides to fix Flowbite's sizing issues
  sizeOverrides: {
    xs: "!px-2 !py-1 !text-xs",
    sm: "!px-3 !py-1.5 !text-sm",
    md: "!px-4 !py-2 !text-base",
    lg: "!px-6 !py-3 !text-lg",
    xl: "!px-8 !py-4 !text-xl !min-h-[3.5rem]"
  },
  // Layout styles
  layout: {
    fullWidth: "!w-full"
  },
  // Loading spinner styles
  spinner: "mr-2 h-4 w-4 animate-spin",
  spinnerCircle: "opacity-25",
  spinnerPath: "opacity-75",
  // Disabled state styles
  disabled: "!opacity-50 !cursor-not-allowed !pointer-events-none"
};
function ki({
  variant: e = "primary",
  size: r = "md",
  fullWidth: t = !1,
  disabled: n = !1
}) {
  return [
    Re.base,
    Re.variants[e],
    Re.sizeOverrides[r],
    t ? Re.layout.fullWidth : "",
    n ? Re.disabled : ""
  ].filter(Boolean).join(" ");
}
var Ci = /* @__PURE__ */ Yr('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>'), Ei = /* @__PURE__ */ Yr("<!><!>", 1);
function kl(e, r) {
  ye(r, !0);
  let t = x(r, "variant", 3, "primary"), n = x(r, "size", 3, "md"), a = x(r, "loading", 3, !1), i = x(r, "disabled", 3, !1), l = x(r, "fullWidth", 3, !1), u = /* @__PURE__ */ Ae(r, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "size",
    "loading",
    "disabled",
    "fullWidth",
    "children"
  ]);
  const o = /* @__PURE__ */ N(() => ki({
    variant: t(),
    size: n(),
    fullWidth: l(),
    disabled: i()
  }));
  jn(e, dr(
    {
      get disabled() {
        return i();
      },
      get class() {
        return v(o);
      }
    },
    () => u,
    {
      children: (s, f) => {
        var d = Ei(), h = z(d);
        {
          var p = (b) => {
            var _ = Ci(), k = j(_), g = K(k);
            $(() => {
              M(_, 0, D(Re.spinner)), M(k, 0, D(Re.spinnerCircle)), M(g, 0, D(Re.spinnerPath));
            }), E(b, _);
          };
          H(h, (b) => {
            a() && b(p);
          });
        }
        var c = K(h);
        le(c, () => r.children ?? Ke), E(s, d);
      },
      $$slots: { default: !0 }
    }
  )), xe();
}
const _r = {
  // Base styling to add to Flowbite Card
  base: `
    transition-all 
    duration-300 
    border-0 
    shadow-sm 
    rounded-xl
  `.replace(/\s+/g, " ").trim(),
  // Variant-specific overrides for styles
  variants: {
    default: "!bg-white dark:!bg-gray-800 !border !border-gray-200 dark:!border-gray-700 hover:!shadow-md",
    elevated: "!bg-white dark:!bg-gray-800 !shadow-lg hover:!shadow-xl",
    outlined: "!bg-transparent !border-2 !border-primary-300 dark:!border-primary-600 hover:!border-primary-400 dark:hover:!border-primary-500",
    flat: "!bg-primary-50 dark:!bg-primary-900/20 !border-0 hover:!bg-primary-100 dark:hover:!bg-primary-900/40"
  },
  // Padding overrides
  padding: {
    none: "!p-0",
    sm: "!p-4",
    md: "!p-6",
    lg: "!p-8",
    xl: "!p-10"
  },
  // Interactive and hover effects
  interactive: "cursor-pointer hover:!scale-105",
  hoverEffects: "hover:!shadow-lg hover:!-translate-y-1"
};
function Si({
  variant: e = "default",
  padding: r = "md",
  interactive: t = !1,
  hover: n = !1
}) {
  return [
    _r.base,
    _r.variants[e],
    _r.padding[r],
    t ? _r.interactive : "",
    n ? _r.hoverEffects : ""
  ].filter(Boolean).join(" ");
}
function Cl(e, r) {
  ye(r, !0);
  let t = x(r, "variant", 3, "default"), n = x(r, "padding", 3, "md"), a = x(r, "hover", 3, !1), i = x(r, "interactive", 3, !1), l = /* @__PURE__ */ Ae(r, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "padding",
    "hover",
    "interactive",
    "children"
  ]);
  const u = /* @__PURE__ */ N(() => Si({
    variant: t(),
    padding: n(),
    interactive: i(),
    hover: a()
  }));
  $n(e, dr(
    {
      get class() {
        return v(u);
      }
    },
    () => l,
    {
      children: (o, s) => {
        var f = J(), d = z(f);
        le(d, () => r.children ?? Ke), E(o, f);
      },
      $$slots: { default: !0 }
    }
  )), xe();
}
const ke = {
  // Base styling to add to Flowbite Input
  base: `
    !transition-all 
    !duration-300 
    !border-2 
    !rounded-xl 
    !shadow-sm 
    focus:!shadow-md 
    focus:!ring-4 
    focus:!ring-offset-1
  `.replace(/\s+/g, " ").trim(),
  // Variant-specific overrides for colors
  variants: {
    default: "!border-gray-300 !bg-white !text-gray-900 focus:!border-primary-500 focus:!ring-primary-200 dark:!border-gray-600 dark:!bg-gray-700 dark:!text-white dark:focus:!border-primary-400 dark:focus:!ring-primary-900/20",
    success: "!border-green-300 !bg-white !text-gray-900 focus:!border-green-500 focus:!ring-green-200 dark:!border-green-600 dark:!bg-gray-700 dark:!text-white dark:focus:!border-green-400 dark:focus:!ring-green-900/20",
    error: "!border-red-300 !bg-white !text-gray-900 focus:!border-red-500 focus:!ring-red-200 dark:!border-red-600 dark:!bg-gray-700 dark:!text-white dark:focus:!border-red-400 dark:focus:!ring-red-900/20"
  },
  // Size overrides
  sizes: {
    xs: "!px-3 !py-2 !text-xs",
    sm: "!px-3 !py-2.5 !text-sm",
    md: "!px-4 !py-3 !text-base",
    lg: "!px-5 !py-3.5 !text-lg",
    xl: "!px-6 !py-4 !text-xl"
  },
  // Label styles
  label: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
  labelRequired: "text-error-600 dark:text-error-400",
  // Helper text styles
  helper: "mt-1 text-sm",
  helperSuccess: "text-success-600 dark:text-success-400",
  helperError: "text-error-600 dark:text-error-400",
  helperDefault: "text-gray-500 dark:text-gray-400",
  // Input group styles
  group: "flex",
  groupInput: "flex-1",
  groupAddon: "inline-flex items-center px-3 py-2 text-sm text-gray-500 bg-gray-50 border border-gray-300 border-l-0 rounded-r-lg",
  // Container styles
  container: "space-y-1"
};
function Ti({
  variant: e = "default",
  size: r = "md"
}) {
  return [ke.base, ke.variants[e], ke.sizes[r]].filter(Boolean).join(" ");
}
var Ai = /* @__PURE__ */ F("<div><!> <!> <!></div>");
function El(e, r) {
  ye(r, !0);
  let t = x(r, "variant", 3, "default"), n = x(r, "size", 3, "md"), a = x(r, "error", 3, !1), i = x(r, "success", 3, !1), l = x(r, "helperText", 3, ""), u = x(r, "label", 3, ""), o = /* @__PURE__ */ Ae(r, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "size",
    "error",
    "success",
    "helperText",
    "label"
  ]);
  const s = /* @__PURE__ */ N(() => a() ? "error" : i() ? "success" : t()), f = /* @__PURE__ */ N(() => Ti({ variant: v(s), size: n() })), d = /* @__PURE__ */ N(() => [
    ke.helper,
    a() ? ke.helperError : i() ? ke.helperSuccess : ke.helperDefault
  ].join(" "));
  var h = Ai(), p = j(h);
  {
    var c = (g) => {
      zn(g, {
        get for() {
          return r.id;
        },
        get class() {
          return ke.label;
        },
        children: (m, w) => {
          var S = ut();
          $(() => _e(S, u())), E(m, S);
        },
        $$slots: { default: !0 }
      });
    };
    H(p, (g) => {
      u() && g(c);
    });
  }
  var b = K(p, 2);
  Fn(b, dr(
    {
      get class() {
        return v(f);
      }
    },
    () => o
  ));
  var _ = K(b, 2);
  {
    var k = (g) => {
      Vn(g, {
        get class() {
          return v(d);
        },
        children: (m, w) => {
          var S = ut();
          $(() => _e(S, l())), E(m, S);
        },
        $$slots: { default: !0 }
      });
    };
    H(_, (g) => {
      l() && g(k);
    });
  }
  $(() => M(h, 1, D(ke.container))), E(e, h), xe();
}
const $r = {
  // Base styling that applies to all badges
  base: `
    font-semibold 
    tracking-wide 
    border-2 
    border-transparent
    shadow-md 
    px-3 
    py-1.5 
    text-sm 
    rounded-full 
    transition-all 
    duration-200 
    hover:shadow-lg 
    hover:-translate-y-0.5
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2
  `.replace(/\s+/g, " ").trim(),
  // Variant-specific colors to override Flowbite's defaults
  variants: {
    primary: "!bg-primary-50 !text-primary-700 hover:!bg-primary-100 focus:!ring-primary-300 dark:!bg-primary-900/20 dark:!text-primary-300 dark:hover:!bg-primary-800/30",
    secondary: "!bg-secondary-50 !text-secondary-700 hover:!bg-secondary-100 focus:!ring-secondary-300 dark:!bg-secondary-900/20 dark:!text-secondary-300 dark:hover:!bg-secondary-800/30",
    accent: "!bg-accent-50 !text-accent-700 hover:!bg-accent-100 focus:!ring-accent-300 dark:!bg-accent-900/20 dark:!text-accent-300 dark:hover:!bg-accent-800/30",
    success: "!bg-success-50 !text-success-700 hover:!bg-success-100 focus:!ring-success-300 dark:!bg-success-900/20 dark:!text-success-300 dark:hover:!bg-success-800/30",
    warning: "!bg-warning-50 !text-warning-700 hover:!bg-warning-100 focus:!ring-warning-300 dark:!bg-warning-900/20 dark:!text-warning-300 dark:hover:!bg-warning-800/30",
    error: "!bg-error-50 !text-error-700 hover:!bg-error-100 focus:!ring-error-300 dark:!bg-error-900/20 dark:!text-error-300 dark:hover:!bg-error-800/30",
    info: "!bg-primary-50 !text-primary-700 hover:!bg-primary-100 focus:!ring-primary-300 dark:!bg-primary-900/20 dark:!text-primary-300 dark:hover:!bg-primary-800/30"
  },
  // Remove button styling
  removeButton: `
    ml-2 
    -mr-1 
    h-4 
    w-4 
    rounded-full 
    inline-flex 
    items-center 
    justify-center 
    text-current 
    text-xs 
    font-bold 
    hover:bg-current 
    hover:bg-opacity-20 
    focus:outline-none 
    focus:ring-2 
    focus:ring-current 
    focus:ring-offset-1 
    transition-all 
    duration-150
    cursor-pointer
  `.replace(/\s+/g, " ").trim(),
  // Remove icon styling
  removeIcon: "h-3 w-3"
};
function Pi(e) {
  return `${$r.base} ${$r.variants[e]}`;
}
function Ii(e, r, t) {
  r() && t() && t()();
}
var Ri = /* @__PURE__ */ F('<button type="button" aria-label="Remove badge"><svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>'), Oi = /* @__PURE__ */ F("<!> <!>", 1);
function Sl(e, r) {
  ye(r, !0);
  let t = x(r, "variant", 3, "primary"), n = x(r, "removable", 3, !1), a = x(r, "onRemove", 3, void 0), i = /* @__PURE__ */ Ae(r, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "removable",
    "onRemove",
    "children"
  ]);
  const l = /* @__PURE__ */ N(() => Pi(t()));
  qn(e, dr(
    {
      get class() {
        return v(l);
      }
    },
    () => i,
    {
      children: (u, o) => {
        var s = Oi(), f = z(s);
        le(f, () => r.children ?? Ke);
        var d = K(f, 2);
        {
          var h = (p) => {
            var c = Ri();
            c.__click = [Ii, n, a];
            var b = j(c);
            $(() => {
              M(c, 1, D($r.removeButton)), M(b, 0, D($r.removeIcon));
            }), E(p, c);
          };
          H(d, (p) => {
            n() && p(h);
          });
        }
        E(u, s);
      },
      $$slots: { default: !0 }
    }
  )), xe();
}
Er(["click"]);
const it = {
  // Base form classes
  base: "space-y-6",
  // Layout styles
  layout: {
    vertical: "flex flex-col",
    horizontal: "flex flex-wrap items-center",
    inline: "flex items-center"
  },
  // Spacing styles
  spacing: {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8"
  },
  // Label styles
  label: "block text-sm font-medium text-gray-700 mb-1",
  labelRequired: "text-error-600",
  labelHorizontal: "block text-sm font-medium text-gray-700 w-32 flex-shrink-0",
  // Input wrapper styles
  inputWrapper: "flex-1",
  inputWrapperHorizontal: "flex-1",
  // Helper text styles
  helper: "mt-1 text-sm text-gray-500",
  helperError: "text-error-600",
  helperSuccess: "text-success-600",
  // Actions styles
  actions: "flex justify-end space-x-3 pt-4 border-t border-gray-200",
  actionsLeft: "flex justify-start space-x-3 pt-4 border-t border-gray-200",
  actionsCenter: "flex justify-center space-x-3 pt-4 border-t border-gray-200",
  actionsBetween: "flex justify-between items-center pt-4 border-t border-gray-200",
  // Section styles
  section: "border-b border-gray-200 pb-6 mb-6",
  sectionTitle: "text-lg font-semibold text-gray-900 mb-4",
  sectionDescription: "text-sm text-gray-600 mb-4"
};
function Li({
  layout: e = "vertical",
  spacing: r = "md"
}) {
  return [it.base, it.layout[e], it.spacing[r]].join(" ");
}
var Ni = /* @__PURE__ */ F("<form><!></form>");
function Tl(e, r) {
  ye(r, !0);
  let t = x(r, "layout", 3, "vertical"), n = x(r, "spacing", 3, "md"), a = /* @__PURE__ */ Ae(r, [
    "$$slots",
    "$$events",
    "$$legacy",
    "layout",
    "spacing",
    "onSubmit",
    "children"
  ]);
  const i = /* @__PURE__ */ N(() => Li({ layout: t(), spacing: n() }));
  function l(s) {
    s.preventDefault();
    const f = new FormData(s.target);
    r.onSubmit && r.onSubmit(f);
  }
  var u = Ni();
  wt(u, () => ({ class: v(i), onsubmit: l, ...a }));
  var o = j(u);
  le(o, () => r.children ?? Ke), E(e, u), xe();
}
const er = {
  container: "w-full",
  layout: {
    top: "flex flex-col",
    bottom: "flex flex-col",
    left: "flex",
    right: "flex"
  },
  tabList: {
    top: "flex items-center gap-2 border-b border-gray-200 dark:border-gray-700",
    bottom: "flex items-center gap-2 border-t border-gray-200 dark:border-gray-700 order-last",
    left: "flex flex-col gap-2 border-r border-gray-200 dark:border-gray-700",
    right: "flex flex-col gap-2 border-l border-gray-200 dark:border-gray-700 order-last"
  },
  panel: "p-4",
  buttonBase: "px-3 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400",
  buttonVariants: {
    // Active/inactive appearance adjusted per position for borders
    top: {
      active: "text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400",
      inactive: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border-b-2 border-transparent"
    },
    bottom: {
      active: "text-primary-600 dark:text-primary-400 border-t-2 border-primary-600 dark:border-primary-400",
      inactive: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border-t-2 border-transparent"
    },
    left: {
      active: "text-primary-600 dark:text-primary-400 border-r-2 border-primary-600 dark:border-primary-400",
      inactive: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border-r-2 border-transparent"
    },
    right: {
      active: "text-primary-600 dark:text-primary-400 border-l-2 border-primary-600 dark:border-primary-400",
      inactive: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border-l-2 border-transparent"
    }
  }
};
function Mi({ position: e }) {
  return {
    container: [er.container, er.layout[e]].join(" "),
    list: er.tabList[e],
    panel: er.panel
  };
}
function Di({
  position: e,
  active: r
}) {
  const t = er.buttonVariants[e], n = r ? "cursor-default" : "cursor-pointer";
  return [er.buttonBase, n, r ? t.active : t.inactive].join(" ");
}
var Bi = (e, r, t) => r(v(t).id), ji = /* @__PURE__ */ F('<button type="button" role="tab"> </button>'), $i = /* @__PURE__ */ F('<div><div role="tablist"></div> <div role="tabpanel"></div></div>');
function Al(e, r) {
  ye(r, !0);
  let t = x(r, "position", 3, "top"), n = x(r, "items", 19, () => []), a = x(r, "activeId", 7, void 0), i = /* @__PURE__ */ Ae(r, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "items",
    "activeId"
  ]);
  const l = /* @__PURE__ */ N(() => Mi({ position: t() })), u = /* @__PURE__ */ N(() => n().length > 0 ? n()[0].id : void 0), o = /* @__PURE__ */ N(() => a() || v(u));
  var s = $i();
  wt(s, () => ({ class: v(l).container, ...i }));
  var f = j(s);
  ar(f, 21, n, (h) => h.id, (h, p) => {
    var c = ji();
    c.__click = [Bi, a, p];
    var b = j(c);
    $(
      (_) => {
        Ue(c, "aria-selected", v(o) === v(p).id), M(c, 1, _), _e(b, v(p).label);
      },
      [
        () => D(Di({
          position: t(),
          active: v(o) === v(p).id
        }))
      ]
    ), E(h, c);
  });
  var d = K(f, 2);
  ar(d, 21, n, Lr, (h, p) => {
    var c = J(), b = z(c);
    {
      var _ = (k) => {
        var g = J(), m = z(g);
        le(m, () => v(p).content ?? Ke), E(k, g);
      };
      H(b, (k) => {
        v(o) === v(p).id && k(_);
      });
    }
    E(h, c);
  }), $(() => {
    M(f, 1, D(v(l).list)), Ue(f, "aria-orientation", t() === "left" || t() === "right" ? "vertical" : "horizontal"), M(d, 1, D(v(l).panel));
  }), E(e, s), xe();
}
Er(["click"]);
const Ve = {
  // Content styling to override Flowbite Modal
  content: `
    !rounded-xl 
    !shadow-2xl 
    !border-0 
    !backdrop-blur-sm 
    !transition-all 
    !duration-500 
    hover:!scale-105
  `.replace(/\s+/g, " ").trim(),
  // Header styling
  header: "flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",
  title: "text-xl font-semibold text-gray-900 dark:text-white",
  closeButton: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 hover:!scale-110",
  closeIcon: "h-5 w-5",
  // Body styling
  body: "p-6",
  // Footer styling
  footer: "flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700",
  // Size overrides for more distinctive sizing
  sizes: {
    sm: "!max-w-md !w-full",
    md: "!max-w-lg !w-full",
    lg: "!max-w-2xl !w-full",
    xl: "!max-w-4xl !w-full",
    full: "!max-w-full !w-full !mx-4"
  }
};
function Fi(e) {
  switch (e) {
    case "center":
      return "center";
    case "top":
      return "top-center";
    case "bottom":
      return "bottom-center";
    case "left":
      return "center-left";
    case "right":
      return "center-right";
    default:
      return "center";
  }
}
function zi({
  size: e = "md"
} = {}) {
  const r = Ve.sizes[e];
  return {
    content: `${Ve.content} ${r}`.trim()
  };
}
const ge = {
  // Base text styling
  base: "leading-relaxed",
  // Variant styles - semantic typography scale
  variants: {
    h1: "text-5xl font-bold tracking-tight",
    h2: "text-4xl font-bold tracking-tight",
    h3: "text-3xl font-bold tracking-tight",
    h4: "text-2xl font-semibold tracking-tight",
    h5: "text-xl font-semibold tracking-tight",
    h6: "text-lg font-semibold tracking-tight",
    body: "text-base font-normal",
    bodyLarge: "text-lg font-normal",
    bodySmall: "text-sm font-normal",
    caption: "text-xs font-medium tracking-wide",
    overline: "text-xs font-semibold tracking-wider uppercase",
    code: "text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-medium"
  },
  // Color variants
  colors: {
    primary: "text-gray-900 dark:text-white",
    secondary: "text-gray-600 dark:text-gray-400",
    muted: "text-gray-500 dark:text-gray-500",
    accent: "text-primary-600 dark:text-primary-400",
    success: "text-green-600 dark:text-green-400",
    warning: "text-orange-600 dark:text-orange-400",
    error: "text-red-600 dark:text-red-400",
    inherit: ""
  },
  // Text alignment
  align: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify"
  },
  // Font weights
  weights: {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold"
  },
  // Utility modifiers
  modifiers: {
    truncate: "truncate",
    italic: "italic",
    underline: "underline",
    lineThrough: "line-through",
    noWrap: "whitespace-nowrap"
  }
};
function Vi({
  variant: e = "body",
  color: r = "primary",
  align: t,
  weight: n,
  truncate: a = !1,
  italic: i = !1,
  underline: l = !1,
  lineThrough: u = !1,
  noWrap: o = !1
} = {}) {
  const s = [ge.base, ge.variants[e], ge.colors[r]];
  return t && s.push(ge.align[t]), n && s.push(ge.weights[n]), a && s.push(ge.modifiers.truncate), i && s.push(ge.modifiers.italic), l && s.push(ge.modifiers.underline), u && s.push(ge.modifiers.lineThrough), o && s.push(ge.modifiers.noWrap), s.filter(Boolean).join(" ");
}
const qi = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  bodyLarge: "p",
  bodySmall: "p",
  caption: "span",
  overline: "span",
  code: "code"
};
function Wi(e, r) {
  ye(r, !0);
  let t = x(r, "variant", 3, "body"), n = x(r, "color", 3, "primary"), a = x(r, "align", 3, void 0), i = x(r, "weight", 3, void 0), l = x(r, "as", 3, void 0), u = x(r, "truncate", 3, !1), o = x(r, "italic", 3, !1), s = x(r, "underline", 3, !1), f = x(r, "lineThrough", 3, !1), d = x(r, "noWrap", 3, !1), h = /* @__PURE__ */ Ae(r, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "color",
    "align",
    "weight",
    "as",
    "truncate",
    "italic",
    "underline",
    "lineThrough",
    "noWrap",
    "children"
  ]);
  const p = l() || qi[t()] || "p", c = /* @__PURE__ */ N(() => Vi({
    variant: t(),
    color: n(),
    align: a(),
    weight: i(),
    truncate: u(),
    italic: o(),
    underline: s(),
    lineThrough: f(),
    noWrap: d()
  }));
  var b = J(), _ = z(b);
  di(_, () => p, !1, (k, g) => {
    wt(k, () => ({ class: v(c), ...h }));
    var m = J(), w = z(m);
    le(w, () => r.children ?? Ke), E(g, m);
  }), E(e, b), xe();
}
function Hi(e, r, t, n) {
  r() && (t(
    !1
    // Trigger Flowbite's natural close mechanism
  ), n.onClose && n.onClose());
}
var Ui = /* @__PURE__ */ F('<div id="modal-title"><!></div>'), Yi = /* @__PURE__ */ F('<button type="button" aria-label="Close modal"><svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>'), Ki = /* @__PURE__ */ F("<div><!> <!></div>"), Gi = /* @__PURE__ */ F("<div><!></div>"), Zi = /* @__PURE__ */ F("<div><!></div>"), Xi = /* @__PURE__ */ F("<!> <!> <!>", 1);
function Pl(e, r) {
  ye(r, !0);
  let t = x(r, "open", 15, !1), n = x(r, "size", 3, "md"), a = x(r, "position", 3, "center"), i = x(r, "title", 3, ""), l = x(r, "closable", 3, !0);
  const u = /* @__PURE__ */ N(() => Fi(a())), o = /* @__PURE__ */ N(() => zi({ size: n() }));
  Wn(e, {
    get size() {
      return n();
    },
    dismissable: !1,
    get outsideclose() {
      return l();
    },
    get placement() {
      return v(u);
    },
    get class() {
      return v(o).content;
    },
    get "data-position"() {
      return a();
    },
    get open() {
      return t();
    },
    set open(s) {
      t(s);
    },
    children: (s, f) => {
      var d = Xi(), h = z(d);
      {
        var p = (g) => {
          var m = Ki(), w = j(m);
          {
            var S = (C) => {
              var A = J(), B = z(A);
              le(B, () => r.header), E(C, A);
            }, y = (C) => {
              var A = J(), B = z(A);
              {
                var L = (Z) => {
                  var de = Ui(), ee = j(de);
                  Wi(ee, {
                    variant: "h5",
                    as: "h2",
                    children: (W, $e) => {
                      var ne = ut();
                      $(() => _e(ne, i())), E(W, ne);
                    },
                    $$slots: { default: !0 }
                  }), E(Z, de);
                };
                H(
                  B,
                  (Z) => {
                    i() && Z(L);
                  },
                  !0
                );
              }
              E(C, A);
            };
            H(w, (C) => {
              r.header ? C(S) : C(y, !1);
            });
          }
          var T = K(w, 2);
          {
            var V = (C) => {
              var A = Yi();
              A.__click = [Hi, l, t, r];
              var B = j(A);
              $(() => {
                M(A, 1, D(Ve.closeButton)), M(B, 0, D(Ve.closeIcon));
              }), E(C, A);
            };
            H(T, (C) => {
              l() && C(V);
            });
          }
          $(() => M(m, 1, D(Ve.header))), E(g, m);
        };
        H(h, (g) => {
          (r.header || i()) && g(p);
        });
      }
      var c = K(h, 2);
      {
        var b = (g) => {
          var m = Gi(), w = j(m);
          le(w, () => r.body), $(() => M(m, 1, D(Ve.body))), E(g, m);
        };
        H(c, (g) => {
          r.body && g(b);
        });
      }
      var _ = K(c, 2);
      {
        var k = (g) => {
          var m = Zi(), w = j(m);
          le(w, () => r.footer), $(() => M(m, 1, D(Ve.footer))), E(g, m);
        };
        H(_, (g) => {
          r.footer && g(k);
        });
      }
      E(s, d);
    },
    $$slots: { default: !0 }
  }), xe();
}
Er(["click"]);
const Ee = {
  // Base accordion container styles
  base: `
    border border-gray-200 dark:border-gray-700
    rounded-lg
    overflow-hidden
    shadow-sm
    transition-all duration-200
  `.replace(/\s+/g, " ").trim(),
  // Flush variant (no borders/background)
  flush: `
    border-0
    shadow-none
    rounded-none
    bg-transparent
  `.replace(/\s+/g, " ").trim(),
  // Individual accordion item styles
  item: {
    // Base item container
    base: `
      border-b border-gray-200 dark:border-gray-700
      last:border-b-0
    `.replace(/\s+/g, " ").trim(),
    // Item header/trigger button
    header: `
      w-full
      px-5 py-4
      text-left
      font-medium text-gray-900 dark:text-white
      bg-gray-50 dark:bg-gray-800
      hover:bg-gray-100 dark:hover:bg-gray-700
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      transition-colors duration-200
      flex items-center justify-between
      group
    `.replace(/\s+/g, " ").trim(),
    // Item header when active/open
    headerActive: `
      bg-primary-50 dark:bg-primary-900/20
      text-primary-700 dark:text-primary-300
      border-b border-primary-200 dark:border-primary-700
    `.replace(/\s+/g, " ").trim(),
    // Item content container
    content: `
      px-5 py-4
      bg-white dark:bg-gray-900
      text-gray-700 dark:text-gray-300
      border-b border-gray-200 dark:border-gray-700
      last:border-b-0
    `.replace(/\s+/g, " ").trim()
  },
  // Content styles
  content: {
    arrow: `
      mr-3 
      h-3 
      w-3 
      text-gray-900 
      transition-transform 
      duration-200 
      dark:text-white
    `.replace(/\s+/g, " ").trim(),
    title: `
      flex-1 
      text-left
    `.replace(/\s+/g, " ").trim()
  },
  // Variant styles
  variants: {
    default: "",
    flush: `
      border-0
      shadow-none
      rounded-none
      bg-transparent
    `.replace(/\s+/g, " ").trim(),
    bordered: `
      border-2 !border-primary-200 dark:!border-primary-700
      shadow-md
    `.replace(/\s+/g, " ").trim()
  }
};
function Ji({
  variant: e = "default",
  flush: r = !1
} = {}) {
  const t = Ee.base, n = r ? Ee.flush : Ee.variants[e];
  return `${t} ${n}`.trim();
}
function Qi({
  isOpen: e = !1,
  arrowPosition: r = "right"
} = {}) {
  const t = `${Ee.item.header} ${e ? Ee.item.headerActive : ""} ${r === "left" ? "[&>svg:last-child]:hidden" : ""}`.trim();
  return {
    item: Ee.item.base,
    header: t,
    content: Ee.item.content
  };
}
var el = /* @__PURE__ */ Yr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>'), rl = /* @__PURE__ */ F("<!> <span> </span>", 1);
function Il(e, r) {
  ye(r, !0);
  let t = x(r, "items", 19, () => []), n = x(r, "variant", 3, "default"), a = x(r, "flush", 3, !1), i = x(r, "multiple", 3, !1), l = x(r, "arrowPosition", 3, "right"), u = /* @__PURE__ */ Ae(r, [
    "$$slots",
    "$$events",
    "$$legacy",
    "items",
    "variant",
    "flush",
    "multiple",
    "arrowPosition"
  ]);
  const o = /* @__PURE__ */ N(() => Ji({ variant: n(), flush: a() }));
  let s = Oe(t().reduce(
    (f, d) => (f[d.id] = d.open ?? !1, f),
    {}
  ));
  Hn(e, dr(
    {
      get multiple() {
        return i();
      },
      get flush() {
        return a();
      },
      get class() {
        return v(o);
      }
    },
    () => u,
    {
      children: (f, d) => {
        var h = J(), p = z(h);
        ar(p, 17, t, (c) => c.id, (c, b) => {
          const _ = /* @__PURE__ */ N(() => s[v(b).id]), k = /* @__PURE__ */ N(() => Qi({ isOpen: v(_), arrowPosition: l() }));
          {
            const g = (w) => {
              var S = rl(), y = z(S);
              {
                var T = (A) => {
                  var B = el();
                  $(() => M(B, 0, `${Ee.content.arrow ?? ""} ${v(_) ? "rotate-180" : ""}`)), E(A, B);
                };
                H(y, (A) => {
                  l() === "left" && A(T);
                });
              }
              var V = K(y, 2), C = j(V);
              $(() => {
                M(V, 1, D(Ee.content.title)), _e(C, v(b).title);
              }), E(w, S);
            };
            let m = /* @__PURE__ */ N(() => ({
              button: v(k).header,
              content: v(k).content
            }));
            Un(c, {
              get class() {
                return v(k).item;
              },
              get classes() {
                return v(m);
              },
              get open() {
                return s[v(b).id];
              },
              set open(w) {
                s[v(b).id] = w;
              },
              header: g,
              children: (w, S) => {
                var y = J(), T = z(y);
                le(T, () => v(b).content), E(w, y);
              },
              $$slots: { header: !0, default: !0 }
            });
          }
        }), E(f, h);
      },
      $$slots: { default: !0 }
    }
  )), xe();
}
const P = {
  // Base container styles
  container: `
    w-full 
    overflow-hidden 
    rounded-xl 
    shadow-sm 
    border 
    border-gray-200 
    dark:border-gray-700 
    bg-white 
    dark:bg-gray-800
  `.replace(/\s+/g, " ").trim(),
  // Table variants for different use cases
  variants: {
    default: "!bg-transparent !border-0 !shadow-none !rounded-none",
    elevated: "!bg-transparent !border-0 !shadow-none !rounded-none",
    outlined: "!bg-transparent !border-0 !shadow-none !rounded-none",
    flat: "!bg-transparent !border-0 !shadow-none !rounded-none"
  },
  // Header styles
  header: {
    base: `
      bg-gray-50 
      dark:bg-gray-700/50 
      border-b 
      border-gray-200 
      dark:border-gray-600
    `.replace(/\s+/g, " ").trim(),
    cell: `
      px-6 
      py-4 
      text-xs 
      font-semibold 
      text-gray-700 
      dark:text-gray-300 
      uppercase 
      tracking-wider
    `.replace(/\s+/g, " ").trim(),
    sortable: `
      cursor-pointer 
      hover:bg-gray-100 
      dark:hover:bg-gray-600 
      focus:outline-none 
      focus:ring-2 
      focus:ring-primary-500 
      focus:ring-inset
      bg-transparent
      border-0
      text-left
      w-full
      h-full
    `.replace(/\s+/g, " ").trim()
  },
  // Row styles
  body: {
    row: `
      border-b
      border-gray-100
      dark:border-gray-700
      last:border-b-0
    `.replace(/\s+/g, " ").trim(),
    rowHover: `
      hover:bg-gray-50 
      dark:hover:bg-gray-700/50
    `.replace(/\s+/g, " ").trim(),
    rowNested: `
      bg-gray-25 
      dark:bg-gray-800/30
    `.replace(/\s+/g, " ").trim(),
    cell: `
      px-6 
      py-4 
      text-sm 
      text-gray-900 
      dark:text-gray-100
    `.replace(/\s+/g, " ").trim(),
    cellExpandable: `
      cursor-pointer 
      hover:bg-gray-50 
      dark:hover:bg-gray-700/50
      focus:outline-none 
      focus:ring-2 
      focus:ring-primary-500 
      focus:ring-inset
    `.replace(/\s+/g, " ").trim()
  },
  // Icon styles
  icons: {
    sort: `
      ml-1.5 
      h-4 
      w-4 
      text-gray-400
    `.replace(/\s+/g, " ").trim(),
    sortActive: `
      text-primary-600 
      dark:text-primary-400
    `.replace(/\s+/g, " ").trim(),
    expand: `
      h-4 
      w-4 
      text-gray-400 
      dark:text-gray-500
      transition-transform 
      duration-200 
      ease-in-out
    `.replace(/\s+/g, " ").trim(),
    expandActive: `
      text-gray-600 
      dark:text-gray-300
    `.replace(/\s+/g, " ").trim()
  },
  // Content styles
  content: {
    headerLabel: `
      flex 
      items-center
    `.replace(/\s+/g, " ").trim(),
    firstColumn: `
      flex 
      h-full 
      w-full 
      items-center 
      gap-3 
      py-4
      bg-transparent
      border-0
      text-left
      cursor-pointer
    `.replace(/\s+/g, " ").trim(),
    iconSpacer: `
      h-4 
      w-4
    `.replace(/\s+/g, " ").trim(),
    rowIcon: `
      text-base 
      leading-none
      transition-all 
      duration-200 
      ease-in-out
    `.replace(/\s+/g, " ").trim(),
    rowName: `
      font-medium
    `.replace(/\s+/g, " ").trim(),
    otherColumn: `
      px-6 
      py-4
    `.replace(/\s+/g, " ").trim(),
    expandedContent: `
      border-t 
      border-gray-100 
      bg-gray-50 
      dark:border-gray-600 
      dark:bg-gray-700/30
      overflow-hidden
      transition-all
      duration-300
      ease-in-out
    `.replace(/\s+/g, " ").trim(),
    expandedText: `
      text-sm 
      leading-relaxed 
      text-gray-600 
      dark:text-gray-300
    `.replace(/\s+/g, " ").trim(),
    // Alignment utilities
    textCenter: "text-center",
    textRight: "text-right",
    textLeft: "text-left",
    // Cell padding override for first column
    firstColumnPadding: "!p-0",
    // Rotation utilities
    rotate180: "rotate-180",
    rotate90: "rotate-90"
  }
};
function tl({ variant: e = "default" } = {}) {
  return {
    container: P.container,
    table: P.variants[e]
  };
}
function nl({
  isActive: e = !1,
  sortDirection: r = "asc"
} = {}) {
  const t = P.icons.sort;
  if (!e)
    return t;
  const n = `${t} ${P.icons.sortActive}`;
  return r === "asc" ? `${n} ${P.content.rotate180}` : n;
}
function al({
  isExpanded: e = !1,
  hasExpandableContent: r = !1
} = {}) {
  const t = P.icons.expand;
  if (!r)
    return t;
  const n = `${t} ${P.icons.expandActive}`;
  return e ? `${n} ${P.content.rotate90}` : n;
}
function il({
  alignment: e = "left",
  isFirstColumn: r = !1
} = {}) {
  const t = (() => {
    switch (e) {
      case "center":
        return P.content.textCenter;
      case "right":
        return P.content.textRight;
      default:
        return P.content.textLeft;
    }
  })(), n = r ? P.content.firstColumnPadding : "";
  return `${t} ${P.body.cell} ${n}`.trim();
}
var ll = (e, r, t) => {
  v(r).sortable && t(v(r).key);
}, ol = (e, r, t) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), v(r).sortable && t(v(r).key));
}, sl = /* @__PURE__ */ F('<button type="button"><span> </span> <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>'), ul = /* @__PURE__ */ F("<div><span> </span></div>"), fl = (e, r, t, n) => {
  r(v(t)) && n(v(t).id);
}, cl = (e, r, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), r(v(t)) && n(v(t).id));
}, dl = /* @__PURE__ */ Yr('<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>'), vl = /* @__PURE__ */ F("<div></div>"), gl = /* @__PURE__ */ F('<button type="button"><!> <span> </span> <span> </span></button>'), hl = /* @__PURE__ */ F("<div> </div>"), pl = /* @__PURE__ */ F("<div><!></div>"), bl = /* @__PURE__ */ F("<!> <!>", 1), _l = /* @__PURE__ */ F("<!> <!> <!>", 1), ml = /* @__PURE__ */ F("<div><!></div>");
function Rl(e, r) {
  ye(r, !0);
  let t = x(r, "rows", 31, () => Oe([])), n = x(r, "variant", 3, "default"), a = x(r, "striped", 3, !0), i = x(r, "hoverable", 3, !0), l = x(r, "expandable", 3, !1), u = x(r, "sortable", 3, !1), o = /* @__PURE__ */ Ae(r, [
    "$$slots",
    "$$events",
    "$$legacy",
    "columns",
    "rows",
    "variant",
    "striped",
    "hoverable",
    "expandable",
    "sortable",
    "children"
  ]);
  const s = /* @__PURE__ */ N(() => tl({ variant: n() }));
  let f = /* @__PURE__ */ he(null), d = /* @__PURE__ */ he("asc");
  function h(C, A = 0) {
    let B = [];
    for (const L of C)
      B.push({ ...L, level: A }), L.expanded && L.children && L.children.length > 0 && B.push(...h(L.children, A + 1));
    return B;
  }
  const p = /* @__PURE__ */ N(() => h(t()));
  function c(C) {
    if (!u()) return;
    v(f) === C ? ue(d, v(d) === "asc" ? "desc" : "asc", !0) : (ue(f, C, !0), ue(d, "asc"));
    function A(B) {
      return [...B].sort((Z, de) => {
        const ee = Z.data[C], W = de.data[C];
        return ee === void 0 || W === void 0 ? 0 : v(d) === "asc" ? ee.localeCompare(W) : W.localeCompare(ee);
      }).map((Z) => ({
        ...Z,
        children: Z.children ? A(Z.children) : void 0
      }));
    }
    t(A(t()));
  }
  function b(C) {
    if (!l()) return;
    function A(B) {
      return B.map((L) => L.id === C ? { ...L, expanded: !L.expanded } : L.children ? { ...L, children: A(L.children) } : L);
    }
    t(A(t()));
  }
  function _(C) {
    return nl({
      isActive: u() && v(f) === C,
      sortDirection: v(d)
    });
  }
  function k(C, A) {
    return al({ isExpanded: C, hasExpandableContent: A });
  }
  function g(C = "left", A = !1) {
    return il({ alignment: C, isFirstColumn: A });
  }
  function m(C = "left") {
    switch (C) {
      case "center":
        return P.content.textCenter;
      case "right":
        return P.content.textRight;
      default:
        return P.content.textLeft;
    }
  }
  function w(C = 0) {
    return C * 1.125;
  }
  function S(C) {
    return C.type === "folder" ? C.expanded ? "📂" : "📁" : "📄";
  }
  function y(C) {
    return l() && (C.children?.length || C.expandedContent);
  }
  var T = ml(), V = j(T);
  Yn(V, dr(
    {
      get striped() {
        return a();
      },
      get hoverable() {
        return i();
      },
      get class() {
        return v(s).table;
      }
    },
    () => o,
    {
      children: (C, A) => {
        var B = _l(), L = z(B);
        Kn(L, {
          get class() {
            return P.header.base;
          },
          children: (W, $e) => {
            var ne = J(), Kr = z(ne);
            ar(Kr, 17, () => r.columns, Lr, (Gr, R) => {
              {
                let Sr = /* @__PURE__ */ N(() => v(R).width ? `width: ${v(R).width}` : ""), Tr = /* @__PURE__ */ N(() => P.header.cell), Zr = /* @__PURE__ */ N(() => m(v(R).align));
                Zn(Gr, {
                  get style() {
                    return v(Sr);
                  },
                  get class() {
                    return `${v(Tr) ?? ""} ${v(Zr) ?? ""}`;
                  },
                  children: (Xr, Xe) => {
                    var Je = J(), Ar = z(Je);
                    {
                      var vr = (ve) => {
                        var U = sl();
                        U.__click = [ll, R, c], U.__keydown = [ol, R, c];
                        var Pe = j(U), we = j(Pe), Ir = K(Pe, 2);
                        $(
                          (Jr) => {
                            M(U, 1, `${P.content.headerLabel ?? ""} ${P.header.sortable ?? ""}`), Ue(U, "aria-label", `Sort by ${v(R).label}`), _e(we, v(R).label), M(Ir, 0, Jr);
                          },
                          [() => D(_(v(R).key))]
                        ), E(ve, U);
                      }, Pr = (ve) => {
                        var U = ul(), Pe = j(U), we = j(Pe);
                        $(() => {
                          M(U, 1, D(P.content.headerLabel)), _e(we, v(R).label);
                        }), E(ve, U);
                      };
                      H(Ar, (ve) => {
                        v(R).sortable && u() ? ve(vr) : ve(Pr, !1);
                      });
                    }
                    E(Xr, Je);
                  },
                  $$slots: { default: !0 }
                });
              }
            }), E(W, ne);
          },
          $$slots: { default: !0 }
        });
        var Z = K(L, 2);
        Gn(Z, {
          children: (W, $e) => {
            var ne = J(), Kr = z(ne);
            ar(Kr, 17, () => v(p), Lr, (Gr, R) => {
              var Sr = bl(), Tr = z(Sr);
              {
                let Xe = /* @__PURE__ */ N(() => P.body.row), Je = /* @__PURE__ */ N(() => i() ? P.body.rowHover : ""), Ar = /* @__PURE__ */ N(() => v(R).level && v(R).level > 0 ? P.body.rowNested : "");
                Et(Tr, {
                  get class() {
                    return `${v(Xe) ?? ""} ${v(Je) ?? ""} ${v(Ar) ?? ""}`;
                  },
                  children: (vr, Pr) => {
                    var ve = J(), U = z(ve);
                    ar(U, 17, () => r.columns, Lr, (Pe, we, Ir) => {
                      {
                        let Jr = /* @__PURE__ */ N(() => v(we).width ? `width: ${v(we).width}` : ""), An = /* @__PURE__ */ N(() => g(v(we).align, Ir === 0));
                        St(Pe, {
                          get style() {
                            return v(Jr);
                          },
                          get class() {
                            return v(An);
                          },
                          children: (Pn, yl) => {
                            var kt = J(), In = z(kt);
                            {
                              var Rn = (Qe) => {
                                var ae = gl();
                                ae.__click = [fl, y, R, b], ae.__keydown = [cl, y, R, b];
                                var Rr = j(ae);
                                {
                                  var Ln = (Ie) => {
                                    var Fe = dl();
                                    $((et) => M(Fe, 0, et), [
                                      () => D(k(v(R).expanded || !1, y(v(R))))
                                    ]), E(Ie, Fe);
                                  }, Nn = (Ie) => {
                                    var Fe = vl();
                                    $(() => M(Fe, 1, D(P.content.iconSpacer))), E(Ie, Fe);
                                  };
                                  H(Rr, (Ie) => {
                                    y(v(R)) ? Ie(Ln) : Ie(Nn, !1);
                                  });
                                }
                                var Qr = K(Rr, 2), Mn = j(Qr), Ct = K(Qr, 2), Dn = j(Ct);
                                $(
                                  (Ie, Fe, et, Bn) => {
                                    M(ae, 1, `${P.content.firstColumn ?? ""} ${Ie ?? ""}`), kn(ae, `padding-left: ${Fe ?? ""}rem; padding-right: 1.5rem;`), Ue(ae, "aria-expanded", v(R).expanded || !1), Ue(ae, "aria-label", et), M(Qr, 1, D(P.content.rowIcon)), _e(Mn, Bn), M(Ct, 1, D(P.content.rowName)), _e(Dn, v(R).data[v(we).key] || "");
                                  },
                                  [
                                    () => y(v(R)) ? P.body.cellExpandable : "",
                                    () => 1.5 + w(v(R).level),
                                    () => y(v(R)) ? `Toggle ${v(R).data.name || "item"}` : void 0,
                                    () => S(v(R))
                                  ]
                                ), E(Qe, ae);
                              }, On = (Qe) => {
                                var ae = hl(), Rr = j(ae);
                                $(() => {
                                  M(ae, 1, D(P.content.otherColumn)), _e(Rr, v(R).data[v(we).key] || "");
                                }), E(Qe, ae);
                              };
                              H(In, (Qe) => {
                                Ir === 0 ? Qe(Rn) : Qe(On, !1);
                              });
                            }
                            E(Pn, kt);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                    }), E(vr, ve);
                  },
                  $$slots: { default: !0 }
                });
              }
              var Zr = K(Tr, 2);
              {
                var Xr = (Xe) => {
                  Et(Xe, {
                    children: (Je, Ar) => {
                      {
                        let vr = /* @__PURE__ */ N(() => 2.5 + w((v(R).level || 0) + 1));
                        St(Je, {
                          get colspan() {
                            return r.columns.length;
                          },
                          get class() {
                            return P.content.expandedContent;
                          },
                          get style() {
                            return `padding: 1rem 1.5rem; padding-left: ${v(vr) ?? ""}rem;`;
                          },
                          children: (Pr, ve) => {
                            var U = pl(), Pe = j(U);
                            le(Pe, () => v(R).expandedContent), $(() => M(U, 1, D(P.content.expandedText))), E(Pr, U);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                    },
                    $$slots: { default: !0 }
                  });
                };
                H(Zr, (Xe) => {
                  l() && v(R).expanded && v(R).expandedContent && Xe(Xr);
                });
              }
              E(Gr, Sr);
            }), E(W, ne);
          },
          $$slots: { default: !0 }
        });
        var de = K(Z, 2);
        {
          var ee = (W) => {
            var $e = J(), ne = z($e);
            le(ne, () => r.children), E(W, $e);
          };
          H(de, (W) => {
            r.children && W(ee);
          });
        }
        E(C, B);
      },
      $$slots: { default: !0 }
    }
  )), $(() => M(T, 1, D(v(s).container))), E(e, T), xe();
}
Er(["click", "keydown"]);
export {
  Il as Accordion,
  Sl as Badge,
  kl as Button,
  Cl as Card,
  Tl as Form,
  El as Input,
  Pl as Modal,
  Rl as Table,
  Al as Tabs,
  Wi as Text,
  Ee as accordionStyles,
  $r as badgeStyles,
  Ji as buildAccordionClasses,
  Qi as buildAccordionItemClasses,
  Pi as buildBadgeClasses,
  ki as buildButtonClasses,
  Si as buildCardClasses,
  il as buildCellClasses,
  al as buildExpandIconClasses,
  Li as buildFormClasses,
  Ti as buildInputClasses,
  zi as buildModalClasses,
  nl as buildSortIconClasses,
  Di as buildTabButtonClasses,
  tl as buildTableClasses,
  Mi as buildTabsClasses,
  Vi as buildTextClasses,
  Re as buttonStyles,
  _r as cardStyles,
  it as formStyles,
  Fi as getFlowbitePlacement,
  ke as inputStyles,
  Ve as modalStyles,
  P as tableStyles,
  er as tabsStyles,
  ge as textStyles,
  qi as variantToElement
};
