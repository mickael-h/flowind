import { getContext as sr, setContext as Nt } from "svelte";
const wn = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(wn);
const Dt = 1, Ft = 2, oo = 4, _n = 8, Cn = 16, zn = 1, Sn = 4, Tn = 8, En = 16, An = 1, In = 2, Vn = 4, no = 1, Pn = 2, Se = Symbol(), Mn = "http://www.w3.org/1999/xhtml", Bn = "http://www.w3.org/2000/svg", jn = "@attach", lo = !1;
var Gt = Array.isArray, Ln = Array.prototype.indexOf, so = Array.from, na = Object.defineProperty, Kr = Object.getOwnPropertyDescriptor, Rn = Object.getOwnPropertyDescriptors, On = Object.prototype, Nn = Array.prototype, io = Object.getPrototypeOf;
function qr(r) {
  return typeof r == "function";
}
const Te = () => {
};
function Dn(r) {
  for (var e = 0; e < r.length; e++)
    r[e]();
}
function Fn() {
  var r, e, t = new Promise((a, o) => {
    r = a, e = o;
  });
  return { promise: t, resolve: r, reject: e };
}
const Fe = 2, va = 4, ka = 8, Nr = 16, yr = 32, Qr = 64, go = 128, Ke = 256, Vt = 512, Pe = 1024, Xe = 2048, Ir = 4096, $e = 8192, Dr = 16384, Wt = 32768, $r = 65536, ja = 1 << 17, Gn = 1 << 18, xa = 1 << 19, Wn = 1 << 20, la = 1 << 21, wa = 1 << 22, Lr = 1 << 23, zr = Symbol("$state"), co = Symbol("legacy props"), Hn = Symbol(""), _a = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function qn() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Un() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Kn(r) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Yn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Xn(r) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Zn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Jn(r) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Qn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function $n() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function e0() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function r0() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let t0 = !1;
function uo(r) {
  return r === this.v;
}
function a0(r, e) {
  return r != r ? e == e : r !== e || r !== null && typeof r == "object" || typeof r == "function";
}
function bo(r) {
  return !a0(r, this.v);
}
let o0 = !1, ir = null;
function Pt(r) {
  ir = r;
}
function fe(r, e = !1, t) {
  ir = {
    p: ir,
    c: null,
    e: null,
    s: r,
    x: null,
    l: null
  };
}
function pe(r) {
  var e = (
    /** @type {ComponentContext} */
    ir
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var a of t)
      zo(a);
  }
  return ir = e.p, /** @type {T} */
  {};
}
function fo() {
  return !0;
}
const n0 = /* @__PURE__ */ new WeakMap();
function l0(r) {
  var e = le;
  if (e === null)
    return ie.f |= Lr, r;
  if ((e.f & Wt) === 0) {
    if ((e.f & go) === 0)
      throw !e.parent && r instanceof Error && po(r), r;
    e.b.error(r);
  } else
    Ca(r, e);
}
function Ca(r, e) {
  for (; e !== null; ) {
    if ((e.f & go) !== 0)
      try {
        e.b.error(r);
        return;
      } catch (t) {
        r = t;
      }
    e = e.parent;
  }
  throw r instanceof Error && po(r), r;
}
function po(r) {
  const e = n0.get(r);
  e && (na(r, "message", {
    value: e.message
  }), na(r, "stack", {
    value: e.stack
  }));
}
let Mt = [];
function s0() {
  var r = Mt;
  Mt = [], Dn(r);
}
function kt(r) {
  Mt.length === 0 && queueMicrotask(s0), Mt.push(r);
}
function i0() {
  for (var r = (
    /** @type {Effect} */
    le.b
  ); r !== null && !r.has_pending_snippet(); )
    r = r.parent;
  return r === null && qn(), r;
}
// @__NO_SIDE_EFFECTS__
function Ht(r) {
  var e = Fe | Xe, t = ie !== null && (ie.f & Fe) !== 0 ? (
    /** @type {Derived} */
    ie
  ) : null;
  return le === null || t !== null && (t.f & Ke) !== 0 ? e |= Ke : le.f |= xa, {
    ctx: ir,
    deps: null,
    effects: null,
    equals: uo,
    f: e,
    fn: r,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Se
    ),
    wv: 0,
    parent: t ?? le,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function d0(r, e) {
  let t = (
    /** @type {Effect | null} */
    le
  );
  t === null && Un();
  var a = (
    /** @type {Boundary} */
    t.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), n = pt(
    /** @type {V} */
    Se
  ), l = null, c = !ie;
  return z0(() => {
    try {
      var s = r();
    } catch (y) {
      s = Promise.reject(y);
    }
    var d = () => s;
    o = l?.then(d, d) ?? Promise.resolve(s), l = o;
    var g = (
      /** @type {Batch} */
      xe
    ), u = a.pending;
    c && (a.update_pending_count(1), u || g.increment());
    const f = (y, b = void 0) => {
      l = null, u || g.activate(), b ? b !== _a && (n.f |= Lr, mt(n, b)) : ((n.f & Lr) !== 0 && (n.f ^= Lr), mt(n, y)), c && (a.update_pending_count(-1), u || g.decrement()), ko();
    };
    if (o.then(f, (y) => f(null, y || "unknown")), g)
      return () => {
        queueMicrotask(() => g.neuter());
      };
  }), new Promise((s) => {
    function d(g) {
      function u() {
        g === o ? s(n) : d(o);
      }
      g.then(u, u);
    }
    d(o);
  });
}
// @__NO_SIDE_EFFECTS__
function A(r) {
  const e = /* @__PURE__ */ Ht(r);
  return Po(e), e;
}
// @__NO_SIDE_EFFECTS__
function mo(r) {
  const e = /* @__PURE__ */ Ht(r);
  return e.equals = bo, e;
}
function yo(r) {
  var e = r.effects;
  if (e !== null) {
    r.effects = null;
    for (var t = 0; t < e.length; t += 1)
      Ze(
        /** @type {Effect} */
        e[t]
      );
  }
}
function g0(r) {
  for (var e = r.parent; e !== null; ) {
    if ((e.f & Fe) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function za(r) {
  var e, t = le;
  Ar(g0(r));
  try {
    yo(r), e = Lo(r);
  } finally {
    Ar(t);
  }
  return e;
}
function ho(r) {
  var e = za(r);
  if (r.equals(e) || (r.v = e, r.wv = Bo()), !Fr)
    if (Zr !== null)
      Zr.set(r, r.v);
    else {
      var t = (Cr || (r.f & Ke) !== 0) && r.deps !== null ? Ir : Pe;
      Re(r, t);
    }
}
function vo(r, e, t) {
  const a = Ht;
  if (e.length === 0) {
    t(r.map(a));
    return;
  }
  var o = xe, n = (
    /** @type {Effect} */
    le
  ), l = c0(), c = i0();
  Promise.all(e.map((s) => /* @__PURE__ */ d0(s))).then((s) => {
    o?.activate(), l();
    try {
      t([...r.map(a), ...s]);
    } catch (d) {
      (n.f & Dr) === 0 && Ca(d, n);
    }
    o?.deactivate(), ko();
  }).catch((s) => {
    c.error(s);
  });
}
function c0() {
  var r = le, e = ie, t = ir;
  return function() {
    Ar(r), dr(e), Pt(t);
  };
}
function ko() {
  Ar(null), dr(null), Pt(null);
}
const st = /* @__PURE__ */ new Set();
let xe = null, It = null, Zr = null, La = /* @__PURE__ */ new Set(), Bt = [];
function xo() {
  const r = (
    /** @type {() => void} */
    Bt.shift()
  );
  Bt.length > 0 && queueMicrotask(xo), r();
}
let bt = [], Sa = null, sa = !1;
class ft {
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
  #o = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #n = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #e = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #d = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #g = !1;
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
  #a = [];
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
  #s = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #c = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #u = [];
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
  process(e) {
    bt = [], It = null;
    var t = null;
    if (st.size > 1) {
      t = /* @__PURE__ */ new Map(), Zr = /* @__PURE__ */ new Map();
      for (const [n, l] of this.current)
        t.set(n, { v: n.v, wv: n.wv }), n.v = l;
      for (const n of st)
        if (n !== this)
          for (const [l, c] of n.#o)
            t.has(l) || (t.set(l, { v: l.v, wv: l.wv }), l.v = c);
    }
    for (const n of e)
      this.#f(n);
    if (this.#t.length === 0 && this.#e === 0) {
      this.#b();
      var a = this.#a, o = this.#r;
      this.#a = [], this.#r = [], this.#s = [], It = xe, xe = null, Ra(a), Ra(o), xe === null ? xe = this : st.delete(this), this.#d?.resolve();
    } else
      this.#i(this.#a), this.#i(this.#r), this.#i(this.#s);
    if (t) {
      for (const [n, { v: l, wv: c }] of t)
        n.wv <= c && (n.v = l);
      Zr = null;
    }
    for (const n of this.#t)
      Xr(n);
    for (const n of this.#l)
      Xr(n);
    this.#t = [], this.#l = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #f(e) {
    e.f ^= Pe;
    for (var t = e.first; t !== null; ) {
      var a = t.f, o = (a & (yr | Qr)) !== 0, n = o && (a & Pe) !== 0, l = n || (a & $e) !== 0 || this.skipped_effects.has(t);
      if (!l && t.fn !== null) {
        if (o)
          t.f ^= Pe;
        else if ((a & va) !== 0)
          this.#r.push(t);
        else if ((a & Pe) === 0)
          if ((a & wa) !== 0) {
            var c = t.b?.pending ? this.#l : this.#t;
            c.push(t);
          } else Kt(t) && ((t.f & Nr) !== 0 && this.#s.push(t), Xr(t));
        var s = t.first;
        if (s !== null) {
          t = s;
          continue;
        }
      }
      var d = t.parent;
      for (t = t.next; t === null && d !== null; )
        t = d.next, d = d.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #i(e) {
    for (const t of e)
      ((t.f & Xe) !== 0 ? this.#c : this.#u).push(t), Re(t, Pe);
    e.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    this.#o.has(e) || this.#o.set(e, t), this.current.set(e, e.v);
  }
  activate() {
    xe = this;
  }
  deactivate() {
    xe = null, It = null;
    for (const e of La)
      if (La.delete(e), e(), xe !== null)
        break;
  }
  neuter() {
    this.#g = !0;
  }
  flush() {
    bt.length > 0 ? u0() : this.#b(), xe === this && (this.#e === 0 && st.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #b() {
    if (!this.#g)
      for (const e of this.#n)
        e();
    this.#n.clear();
  }
  increment() {
    this.#e += 1;
  }
  decrement() {
    if (this.#e -= 1, this.#e === 0) {
      for (const e of this.#c)
        Re(e, Xe), Jr(e);
      for (const e of this.#u)
        Re(e, Ir), Jr(e);
      this.#a = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#n.add(e);
  }
  settled() {
    return (this.#d ??= Fn()).promise;
  }
  static ensure() {
    if (xe === null) {
      const e = xe = new ft();
      st.add(xe), ft.enqueue(() => {
        xe === e && e.flush();
      });
    }
    return xe;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Bt.length === 0 && queueMicrotask(xo), Bt.unshift(e);
  }
}
function u0() {
  var r = Yr;
  sa = !0;
  try {
    var e = 0;
    for (Da(!0); bt.length > 0; ) {
      var t = ft.ensure();
      if (e++ > 1e3) {
        var a, o;
        b0();
      }
      t.process(bt), Sr.clear();
    }
  } finally {
    sa = !1, Da(r), Sa = null;
  }
}
function b0() {
  try {
    Zn();
  } catch (r) {
    Ca(r, Sa);
  }
}
let Br = null;
function Ra(r) {
  var e = r.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var a = r[t++];
      if ((a.f & (Dr | $e)) === 0 && Kt(a) && (Br = [], Xr(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null && a.ac === null ? Ao(a) : a.fn = null), Br.length > 0)) {
        Sr.clear();
        for (const o of Br)
          Xr(o);
        Br = [];
      }
    }
    Br = null;
  }
}
function Jr(r) {
  for (var e = Sa = r; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (sa && e === le && (t & Nr) !== 0)
      return;
    if ((t & (Qr | yr)) !== 0) {
      if ((t & Pe) === 0) return;
      e.f ^= Pe;
    }
  }
  bt.push(e);
}
const Sr = /* @__PURE__ */ new Map();
function pt(r, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: r,
    reactions: null,
    equals: uo,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function Ve(r, e) {
  const t = pt(r);
  return Po(t), t;
}
// @__NO_SIDE_EFFECTS__
function f0(r, e = !1, t = !0) {
  const a = pt(r);
  return e || (a.equals = bo), a;
}
function ge(r, e, t = !1) {
  ie !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!nr || (ie.f & ja) !== 0) && fo() && (ie.f & (Fe | Nr | wa | ja)) !== 0 && !mr?.includes(r) && e0();
  let a = t ? Qe(e) : e;
  return mt(r, a);
}
function mt(r, e) {
  if (!r.equals(e)) {
    var t = r.v;
    Fr ? Sr.set(r, e) : Sr.set(r, t), r.v = e;
    var a = ft.ensure();
    a.capture(r, t), (r.f & Fe) !== 0 && ((r.f & Xe) !== 0 && za(
      /** @type {Derived} */
      r
    ), Re(r, (r.f & Ke) === 0 ? Pe : Ir)), r.wv = Bo(), wo(r, Xe), le !== null && (le.f & Pe) !== 0 && (le.f & (yr | Qr)) === 0 && (Ue === null ? E0([r]) : Ue.push(r));
  }
  return e;
}
function Xt(r) {
  ge(r, r.v + 1);
}
function wo(r, e) {
  var t = r.reactions;
  if (t !== null)
    for (var a = t.length, o = 0; o < a; o++) {
      var n = t[o], l = n.f, c = (l & Xe) === 0;
      c && Re(n, e), (l & Fe) !== 0 ? wo(
        /** @type {Derived} */
        n,
        Ir
      ) : c && ((l & Nr) !== 0 && Br !== null && Br.push(
        /** @type {Effect} */
        n
      ), Jr(
        /** @type {Effect} */
        n
      ));
    }
}
function Qe(r) {
  if (typeof r != "object" || r === null || zr in r)
    return r;
  const e = io(r);
  if (e !== On && e !== Nn)
    return r;
  var t = /* @__PURE__ */ new Map(), a = Gt(r), o = /* @__PURE__ */ Ve(0), n = Rr, l = (c) => {
    if (Rr === n)
      return c();
    var s = ie, d = Rr;
    dr(null), Ga(n);
    var g = c();
    return dr(s), Ga(d), g;
  };
  return a && t.set("length", /* @__PURE__ */ Ve(
    /** @type {any[]} */
    r.length
  )), new Proxy(
    /** @type {any} */
    r,
    {
      defineProperty(c, s, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Qn();
        var g = t.get(s);
        return g === void 0 ? g = l(() => {
          var u = /* @__PURE__ */ Ve(d.value);
          return t.set(s, u), u;
        }) : ge(g, d.value, !0), !0;
      },
      deleteProperty(c, s) {
        var d = t.get(s);
        if (d === void 0) {
          if (s in c) {
            const g = l(() => /* @__PURE__ */ Ve(Se));
            t.set(s, g), Xt(o);
          }
        } else
          ge(d, Se), Xt(o);
        return !0;
      },
      get(c, s, d) {
        if (s === zr)
          return r;
        var g = t.get(s), u = s in c;
        if (g === void 0 && (!u || Kr(c, s)?.writable) && (g = l(() => {
          var y = Qe(u ? c[s] : Se), b = /* @__PURE__ */ Ve(y);
          return b;
        }), t.set(s, g)), g !== void 0) {
          var f = i(g);
          return f === Se ? void 0 : f;
        }
        return Reflect.get(c, s, d);
      },
      getOwnPropertyDescriptor(c, s) {
        var d = Reflect.getOwnPropertyDescriptor(c, s);
        if (d && "value" in d) {
          var g = t.get(s);
          g && (d.value = i(g));
        } else if (d === void 0) {
          var u = t.get(s), f = u?.v;
          if (u !== void 0 && f !== Se)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return d;
      },
      has(c, s) {
        if (s === zr)
          return !0;
        var d = t.get(s), g = d !== void 0 && d.v !== Se || Reflect.has(c, s);
        if (d !== void 0 || le !== null && (!g || Kr(c, s)?.writable)) {
          d === void 0 && (d = l(() => {
            var f = g ? Qe(c[s]) : Se, y = /* @__PURE__ */ Ve(f);
            return y;
          }), t.set(s, d));
          var u = i(d);
          if (u === Se)
            return !1;
        }
        return g;
      },
      set(c, s, d, g) {
        var u = t.get(s), f = s in c;
        if (a && s === "length")
          for (var y = d; y < /** @type {Source<number>} */
          u.v; y += 1) {
            var b = t.get(y + "");
            b !== void 0 ? ge(b, Se) : y in c && (b = l(() => /* @__PURE__ */ Ve(Se)), t.set(y + "", b));
          }
        if (u === void 0)
          (!f || Kr(c, s)?.writable) && (u = l(() => /* @__PURE__ */ Ve(void 0)), ge(u, Qe(d)), t.set(s, u));
        else {
          f = u.v !== Se;
          var p = l(() => Qe(d));
          ge(u, p);
        }
        var x = Reflect.getOwnPropertyDescriptor(c, s);
        if (x?.set && x.set.call(g, d), !f) {
          if (a && typeof s == "string") {
            var T = (
              /** @type {Source<number>} */
              t.get("length")
            ), m = Number(s);
            Number.isInteger(m) && m >= T.v && ge(T, m + 1);
          }
          Xt(o);
        }
        return !0;
      },
      ownKeys(c) {
        i(o);
        var s = Reflect.ownKeys(c).filter((u) => {
          var f = t.get(u);
          return f === void 0 || f.v !== Se;
        });
        for (var [d, g] of t)
          g.v !== Se && !(d in c) && s.push(d);
        return s;
      },
      setPrototypeOf() {
        $n();
      }
    }
  );
}
function Oa(r) {
  try {
    if (r !== null && typeof r == "object" && zr in r)
      return r[zr];
  } catch {
  }
  return r;
}
function p0(r, e) {
  return Object.is(Oa(r), Oa(e));
}
var m0, y0, h0;
function et(r = "") {
  return document.createTextNode(r);
}
// @__NO_SIDE_EFFECTS__
function br(r) {
  return y0.call(r);
}
// @__NO_SIDE_EFFECTS__
function qt(r) {
  return h0.call(r);
}
function q(r, e) {
  return /* @__PURE__ */ br(r);
}
function D(r, e) {
  {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ br(
        /** @type {Node} */
        r
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ qt(t) : t;
  }
}
function ne(r, e = 1, t = !1) {
  let a = r;
  for (; e--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ qt(a);
  return a;
}
function v0(r) {
  r.textContent = "";
}
function _o() {
  return !1;
}
function k0(r, e) {
  if (e) {
    const t = document.body;
    r.autofocus = !0, kt(() => {
      document.activeElement === t && r.focus();
    });
  }
}
let Na = !1;
function x0() {
  Na || (Na = !0, document.addEventListener(
    "reset",
    (r) => {
      Promise.resolve().then(() => {
        if (!r.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            r.target.elements
          )
            e.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function rt(r) {
  var e = ie, t = le;
  dr(null), Ar(null);
  try {
    return r();
  } finally {
    dr(e), Ar(t);
  }
}
function w0(r, e, t, a = t) {
  r.addEventListener(e, () => rt(t));
  const o = r.__on_r;
  o ? r.__on_r = () => {
    o(), a(!0);
  } : r.__on_r = () => a(!0), x0();
}
function _0(r) {
  le === null && ie === null && Xn(), ie !== null && (ie.f & Ke) !== 0 && le === null && Yn(), Fr && Kn();
}
function C0(r, e) {
  var t = e.last;
  t === null ? e.last = e.first = r : (t.next = r, r.prev = t, e.last = r);
}
function Vr(r, e, t, a = !0) {
  var o = le;
  o !== null && (o.f & $e) !== 0 && (r |= $e);
  var n = {
    ctx: ir,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: r | Xe,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: o,
    b: o && o.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (t)
    try {
      Xr(n), n.f |= Wt;
    } catch (s) {
      throw Ze(n), s;
    }
  else e !== null && Jr(n);
  var l = t && n.deps === null && n.first === null && n.nodes_start === null && n.teardown === null && (n.f & xa) === 0;
  if (!l && a && (o !== null && C0(n, o), ie !== null && (ie.f & Fe) !== 0 && (r & Qr) === 0)) {
    var c = (
      /** @type {Derived} */
      ie
    );
    (c.effects ??= []).push(n);
  }
  return n;
}
function Co(r) {
  const e = Vr(ka, null, !1);
  return Re(e, Pe), e.teardown = r, e;
}
function Ta(r) {
  _0();
  var e = (
    /** @type {Effect} */
    le.f
  ), t = !ie && (e & yr) !== 0 && (e & Wt) === 0;
  if (t) {
    var a = (
      /** @type {ComponentContext} */
      ir
    );
    (a.e ??= []).push(r);
  } else
    return zo(r);
}
function zo(r) {
  return Vr(va | Wn, r, !1);
}
function xt(r) {
  return Vr(va, r, !1);
}
function z0(r) {
  return Vr(wa | xa, r, !0);
}
function So(r, e = 0) {
  return Vr(ka | e, r, !0);
}
function ee(r, e = [], t = []) {
  vo(e, t, (a) => {
    Vr(ka, () => r(...a.map(i)), !0);
  });
}
function tt(r, e = 0) {
  var t = Vr(Nr | e, r, !0);
  return t;
}
function Er(r, e = !0) {
  return Vr(yr, r, !0, e);
}
function To(r) {
  var e = r.teardown;
  if (e !== null) {
    const t = Fr, a = ie;
    Fa(!0), dr(null);
    try {
      e.call(null);
    } finally {
      Fa(t), dr(a);
    }
  }
}
function Eo(r, e = !1) {
  var t = r.first;
  for (r.first = r.last = null; t !== null; ) {
    const o = t.ac;
    o !== null && rt(() => {
      o.abort(_a);
    });
    var a = t.next;
    (t.f & Qr) !== 0 ? t.parent = null : Ze(t, e), t = a;
  }
}
function S0(r) {
  for (var e = r.first; e !== null; ) {
    var t = e.next;
    (e.f & yr) === 0 && Ze(e), e = t;
  }
}
function Ze(r, e = !0) {
  var t = !1;
  (e || (r.f & Gn) !== 0) && r.nodes_start !== null && r.nodes_end !== null && (T0(
    r.nodes_start,
    /** @type {TemplateNode} */
    r.nodes_end
  ), t = !0), Eo(r, e && !t), jt(r, 0), Re(r, Dr);
  var a = r.transitions;
  if (a !== null)
    for (const n of a)
      n.stop();
  To(r);
  var o = r.parent;
  o !== null && o.first !== null && Ao(r), r.next = r.prev = r.teardown = r.ctx = r.deps = r.fn = r.nodes_start = r.nodes_end = r.ac = null;
}
function T0(r, e) {
  for (; r !== null; ) {
    var t = r === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ qt(r)
    );
    r.remove(), r = t;
  }
}
function Ao(r) {
  var e = r.parent, t = r.prev, a = r.next;
  t !== null && (t.next = a), a !== null && (a.prev = t), e !== null && (e.first === r && (e.first = a), e.last === r && (e.last = t));
}
function Ea(r, e) {
  var t = [];
  Aa(r, t, !0), Io(t, () => {
    Ze(r), e && e();
  });
}
function Io(r, e) {
  var t = r.length;
  if (t > 0) {
    var a = () => --t || e();
    for (var o of r)
      o.out(a);
  } else
    e();
}
function Aa(r, e, t) {
  if ((r.f & $e) === 0) {
    if (r.f ^= $e, r.transitions !== null)
      for (const l of r.transitions)
        (l.is_global || t) && e.push(l);
    for (var a = r.first; a !== null; ) {
      var o = a.next, n = (a.f & $r) !== 0 || (a.f & yr) !== 0;
      Aa(a, e, n ? t : !1), a = o;
    }
  }
}
function Ut(r) {
  Vo(r, !0);
}
function Vo(r, e) {
  if ((r.f & $e) !== 0) {
    r.f ^= $e, (r.f & Pe) === 0 && (Re(r, Xe), Jr(r));
    for (var t = r.first; t !== null; ) {
      var a = t.next, o = (t.f & $r) !== 0 || (t.f & yr) !== 0;
      Vo(t, o ? e : !1), t = a;
    }
    if (r.transitions !== null)
      for (const n of r.transitions)
        (n.is_global || e) && n.in();
  }
}
let Yr = !1;
function Da(r) {
  Yr = r;
}
let Fr = !1;
function Fa(r) {
  Fr = r;
}
let ie = null, nr = !1;
function dr(r) {
  ie = r;
}
let le = null;
function Ar(r) {
  le = r;
}
let mr = null;
function Po(r) {
  ie !== null && (mr === null ? mr = [r] : mr.push(r));
}
let je = null, De = 0, Ue = null;
function E0(r) {
  Ue = r;
}
let Mo = 1, yt = 0, Rr = yt;
function Ga(r) {
  Rr = r;
}
let Cr = !1;
function Bo() {
  return ++Mo;
}
function Kt(r) {
  var e = r.f;
  if ((e & Xe) !== 0)
    return !0;
  if ((e & Ir) !== 0) {
    var t = r.deps, a = (e & Ke) !== 0;
    if (t !== null) {
      var o, n, l = (e & Vt) !== 0, c = a && le !== null && !Cr, s = t.length;
      if ((l || c) && (le === null || (le.f & Dr) === 0)) {
        var d = (
          /** @type {Derived} */
          r
        ), g = d.parent;
        for (o = 0; o < s; o++)
          n = t[o], (l || !n?.reactions?.includes(d)) && (n.reactions ??= []).push(d);
        l && (d.f ^= Vt), c && g !== null && (g.f & Ke) === 0 && (d.f ^= Ke);
      }
      for (o = 0; o < s; o++)
        if (n = t[o], Kt(
          /** @type {Derived} */
          n
        ) && ho(
          /** @type {Derived} */
          n
        ), n.wv > r.wv)
          return !0;
    }
    (!a || le !== null && !Cr) && Re(r, Pe);
  }
  return !1;
}
function jo(r, e, t = !0) {
  var a = r.reactions;
  if (a !== null && !mr?.includes(r))
    for (var o = 0; o < a.length; o++) {
      var n = a[o];
      (n.f & Fe) !== 0 ? jo(
        /** @type {Derived} */
        n,
        e,
        !1
      ) : e === n && (t ? Re(n, Xe) : (n.f & Pe) !== 0 && Re(n, Ir), Jr(
        /** @type {Effect} */
        n
      ));
    }
}
function Lo(r) {
  var e = je, t = De, a = Ue, o = ie, n = Cr, l = mr, c = ir, s = nr, d = Rr, g = r.f;
  je = /** @type {null | Value[]} */
  null, De = 0, Ue = null, Cr = (g & Ke) !== 0 && (nr || !Yr || ie === null), ie = (g & (yr | Qr)) === 0 ? r : null, mr = null, Pt(r.ctx), nr = !1, Rr = ++yt, r.ac !== null && (rt(() => {
    r.ac.abort(_a);
  }), r.ac = null);
  try {
    r.f |= la;
    var u = (
      /** @type {Function} */
      r.fn
    ), f = u(), y = r.deps;
    if (je !== null) {
      var b;
      if (jt(r, De), y !== null && De > 0)
        for (y.length = De + je.length, b = 0; b < je.length; b++)
          y[De + b] = je[b];
      else
        r.deps = y = je;
      if (!Cr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (g & Fe) !== 0 && /** @type {import('#client').Derived} */
      r.reactions !== null)
        for (b = De; b < y.length; b++)
          (y[b].reactions ??= []).push(r);
    } else y !== null && De < y.length && (jt(r, De), y.length = De);
    if (fo() && Ue !== null && !nr && y !== null && (r.f & (Fe | Ir | Xe)) === 0)
      for (b = 0; b < /** @type {Source[]} */
      Ue.length; b++)
        jo(
          Ue[b],
          /** @type {Effect} */
          r
        );
    return o !== null && o !== r && (yt++, Ue !== null && (a === null ? a = Ue : a.push(.../** @type {Source[]} */
    Ue))), (r.f & Lr) !== 0 && (r.f ^= Lr), f;
  } catch (p) {
    return l0(p);
  } finally {
    r.f ^= la, je = e, De = t, Ue = a, ie = o, Cr = n, mr = l, Pt(c), nr = s, Rr = d;
  }
}
function A0(r, e) {
  let t = e.reactions;
  if (t !== null) {
    var a = Ln.call(t, r);
    if (a !== -1) {
      var o = t.length - 1;
      o === 0 ? t = e.reactions = null : (t[a] = t[o], t.pop());
    }
  }
  t === null && (e.f & Fe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (je === null || !je.includes(e)) && (Re(e, Ir), (e.f & (Ke | Vt)) === 0 && (e.f ^= Vt), yo(
    /** @type {Derived} **/
    e
  ), jt(
    /** @type {Derived} **/
    e,
    0
  ));
}
function jt(r, e) {
  var t = r.deps;
  if (t !== null)
    for (var a = e; a < t.length; a++)
      A0(r, t[a]);
}
function Xr(r) {
  var e = r.f;
  if ((e & Dr) === 0) {
    Re(r, Pe);
    var t = le, a = Yr;
    le = r, Yr = !0;
    try {
      (e & Nr) !== 0 ? S0(r) : Eo(r), To(r);
      var o = Lo(r);
      r.teardown = typeof o == "function" ? o : null, r.wv = Mo;
      var n;
      lo && o0 && (r.f & Xe) !== 0 && r.deps;
    } finally {
      Yr = a, le = t;
    }
  }
}
function i(r) {
  var e = r.f, t = (e & Fe) !== 0;
  if (ie !== null && !nr) {
    var a = le !== null && (le.f & Dr) !== 0;
    if (!a && !mr?.includes(r)) {
      var o = ie.deps;
      if ((ie.f & la) !== 0)
        r.rv < yt && (r.rv = yt, je === null && o !== null && o[De] === r ? De++ : je === null ? je = [r] : (!Cr || !je.includes(r)) && je.push(r));
      else {
        (ie.deps ??= []).push(r);
        var n = r.reactions;
        n === null ? r.reactions = [ie] : n.includes(ie) || n.push(ie);
      }
    }
  } else if (t && /** @type {Derived} */
  r.deps === null && /** @type {Derived} */
  r.effects === null) {
    var l = (
      /** @type {Derived} */
      r
    ), c = l.parent;
    c !== null && (c.f & Ke) === 0 && (l.f ^= Ke);
  }
  if (Fr) {
    if (Sr.has(r))
      return Sr.get(r);
    if (t) {
      l = /** @type {Derived} */
      r;
      var s = l.v;
      return ((l.f & Pe) === 0 && l.reactions !== null || Ro(l)) && (s = za(l)), Sr.set(l, s), s;
    }
  } else if (t) {
    if (l = /** @type {Derived} */
    r, Zr?.has(l))
      return Zr.get(l);
    Kt(l) && ho(l);
  }
  if ((r.f & Lr) !== 0)
    throw r.v;
  return r.v;
}
function Ro(r) {
  if (r.v === Se) return !0;
  if (r.deps === null) return !1;
  for (const e of r.deps)
    if (Sr.has(e) || (e.f & Fe) !== 0 && Ro(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function wt(r) {
  var e = nr;
  try {
    return nr = !0, r();
  } finally {
    nr = e;
  }
}
const I0 = -7169;
function Re(r, e) {
  r.f = r.f & I0 | e;
}
const V0 = /* @__PURE__ */ new Set(), P0 = /* @__PURE__ */ new Set();
function Oo(r, e, t, a = {}) {
  function o(n) {
    if (a.capture || B0.call(e, n), !n.cancelBubble)
      return rt(() => t?.call(this, n));
  }
  return r.startsWith("pointer") || r.startsWith("touch") || r === "wheel" ? kt(() => {
    e.addEventListener(r, o, a);
  }) : e.addEventListener(r, o, a), o;
}
function M0(r, e, t, a, o) {
  var n = { capture: a, passive: o }, l = Oo(r, e, t, n);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Co(() => {
    e.removeEventListener(r, l, n);
  });
}
function Ie(r) {
  for (var e = 0; e < r.length; e++)
    V0.add(r[e]);
  for (var t of P0)
    t(r);
}
let Wa = null;
function B0(r) {
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), a = r.type, o = r.composedPath?.() || [], n = (
    /** @type {null | Element} */
    o[0] || r.target
  );
  Wa = r;
  var l = 0, c = Wa === r && r.__root;
  if (c) {
    var s = o.indexOf(c);
    if (s !== -1 && (e === document || e === /** @type {any} */
    window)) {
      r.__root = e;
      return;
    }
    var d = o.indexOf(e);
    if (d === -1)
      return;
    s <= d && (l = s);
  }
  if (n = /** @type {Element} */
  o[l] || r.target, n !== e) {
    na(r, "currentTarget", {
      configurable: !0,
      get() {
        return n || t;
      }
    });
    var g = ie, u = le;
    dr(null), Ar(null);
    try {
      for (var f, y = []; n !== null; ) {
        var b = n.assignedSlot || n.parentNode || /** @type {any} */
        n.host || null;
        try {
          var p = n["__" + a];
          if (p != null && (!/** @type {any} */
          n.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          r.target === n))
            if (Gt(p)) {
              var [x, ...T] = p;
              x.apply(n, [r, ...T]);
            } else
              p.call(n, r);
        } catch (m) {
          f ? y.push(m) : f = m;
        }
        if (r.cancelBubble || b === e || b === null)
          break;
        n = b;
      }
      if (f) {
        for (let m of y)
          queueMicrotask(() => {
            throw m;
          });
        throw f;
      }
    } finally {
      r.__root = e, delete r.currentTarget, dr(g), Ar(u);
    }
  }
}
function No(r) {
  var e = document.createElement("template");
  return e.innerHTML = r.replaceAll("<!>", "<!---->"), e.content;
}
function Or(r, e) {
  var t = (
    /** @type {Effect} */
    le
  );
  t.nodes_start === null && (t.nodes_start = r, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function G(r, e) {
  var t = (e & no) !== 0, a = (e & Pn) !== 0, o, n = !r.startsWith("<!>");
  return () => {
    o === void 0 && (o = No(n ? r : "<!>" + r), t || (o = /** @type {Node} */
    /* @__PURE__ */ br(o)));
    var l = (
      /** @type {TemplateNode} */
      a || m0 ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (t) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ br(l)
      ), s = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Or(c, s);
    } else
      Or(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function j0(r, e, t = "svg") {
  var a = !r.startsWith("<!>"), o = (e & no) !== 0, n = `<${t}>${a ? r : "<!>" + r}</${t}>`, l;
  return () => {
    if (!l) {
      var c = (
        /** @type {DocumentFragment} */
        No(n)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ br(c)
      );
      if (o)
        for (l = document.createDocumentFragment(); /* @__PURE__ */ br(s); )
          l.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ br(s)
          );
      else
        l = /** @type {Element} */
        /* @__PURE__ */ br(s);
    }
    var d = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    if (o) {
      var g = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ br(d)
      ), u = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      Or(g, u);
    } else
      Or(d, d);
    return d;
  };
}
// @__NO_SIDE_EFFECTS__
function hr(r, e) {
  return /* @__PURE__ */ j0(r, e, "svg");
}
function ht(r = "") {
  {
    var e = et(r + "");
    return Or(e, e), e;
  }
}
function K() {
  var r = document.createDocumentFragment(), e = document.createComment(""), t = et();
  return r.append(e, t), Or(e, t), r;
}
function k(r, e) {
  r !== null && r.before(
    /** @type {Node} */
    e
  );
}
function L0(r) {
  return r.endsWith("capture") && r !== "gotpointercapture" && r !== "lostpointercapture";
}
const R0 = [
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
function O0(r) {
  return R0.includes(r);
}
const N0 = {
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
function D0(r) {
  return r = r.toLowerCase(), N0[r] ?? r;
}
let Do = !0;
function Ha(r) {
  Do = r;
}
function Me(r, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (r.__t ??= r.nodeValue) && (r.__t = t, r.nodeValue = t + "");
}
function J(r, e, ...t) {
  var a = r, o = Te, n;
  tt(() => {
    o !== (o = e()) && (n && (Ze(n), n = null), n = Er(() => (
      /** @type {SnippetFn} */
      o(a, ...t)
    )));
  }, $r);
}
function F(r, e, t = !1) {
  var a = r, o = null, n = null, l = Se, c = t ? $r : 0, s = !1;
  const d = (y, b = !0) => {
    s = !0, f(b, y);
  };
  var g = null;
  function u() {
    g !== null && (g.lastChild.remove(), a.before(g), g = null);
    var y = l ? o : n, b = l ? n : o;
    y && Ut(y), b && Ea(b, () => {
      l ? n = null : o = null;
    });
  }
  const f = (y, b) => {
    if (l !== (l = y)) {
      var p = _o(), x = a;
      if (p && (g = document.createDocumentFragment(), g.append(x = et())), l ? o ??= b && Er(() => b(x)) : n ??= b && Er(() => b(x)), p) {
        var T = (
          /** @type {Batch} */
          xe
        ), m = l ? o : n, w = l ? n : o;
        m && T.skipped_effects.delete(m), w && T.skipped_effects.add(w), T.add_callback(u);
      } else
        u();
    }
  };
  tt(() => {
    s = !1, e(d), s || f(null, null);
  }, c);
}
function Tr(r, e) {
  return e;
}
function F0(r, e, t) {
  for (var a = r.items, o = [], n = e.length, l = 0; l < n; l++)
    Aa(e[l].e, o, !0);
  var c = n > 0 && o.length === 0 && t !== null;
  if (c) {
    var s = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    v0(s), s.append(
      /** @type {Element} */
      t
    ), a.clear(), or(r, e[0].prev, e[n - 1].next);
  }
  Io(o, () => {
    for (var d = 0; d < n; d++) {
      var g = e[d];
      c || (a.delete(g.k), or(r, g.prev, g.next)), Ze(g.e, !c);
    }
  });
}
function lr(r, e, t, a, o, n = null) {
  var l = r, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, s = (e & oo) !== 0;
  if (s) {
    var d = (
      /** @type {Element} */
      r
    );
    l = d.appendChild(et());
  }
  var g = null, u = !1, f = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ mo(() => {
    var T = t();
    return Gt(T) ? T : T == null ? [] : so(T);
  }), b, p;
  function x() {
    G0(
      p,
      b,
      c,
      f,
      l,
      o,
      e,
      a,
      t
    ), n !== null && (b.length === 0 ? g ? Ut(g) : g = Er(() => n(l)) : g !== null && Ea(g, () => {
      g = null;
    }));
  }
  tt(() => {
    p ??= /** @type {Effect} */
    le, b = /** @type {V[]} */
    i(y);
    var T = b.length;
    if (!(u && T === 0)) {
      u = T === 0;
      var m, w, I, L;
      if (_o()) {
        var v = /* @__PURE__ */ new Set(), E = (
          /** @type {Batch} */
          xe
        );
        for (w = 0; w < T; w += 1) {
          I = b[w], L = a(I, w);
          var _ = c.items.get(L) ?? f.get(L);
          _ ? (e & (Dt | Ft)) !== 0 && Fo(_, I, w, e) : (m = Go(
            null,
            c,
            null,
            null,
            I,
            L,
            w,
            o,
            e,
            t,
            !0
          ), f.set(L, m)), v.add(L);
        }
        for (const [S, B] of c.items)
          v.has(S) || E.skipped_effects.add(B.e);
        E.add_callback(x);
      } else
        x();
      i(y);
    }
  });
}
function G0(r, e, t, a, o, n, l, c, s) {
  var d = (l & _n) !== 0, g = (l & (Dt | Ft)) !== 0, u = e.length, f = t.items, y = t.first, b = y, p, x = null, T, m = [], w = [], I, L, v, E;
  if (d)
    for (E = 0; E < u; E += 1)
      I = e[E], L = c(I, E), v = f.get(L), v !== void 0 && (v.a?.measure(), (T ??= /* @__PURE__ */ new Set()).add(v));
  for (E = 0; E < u; E += 1) {
    if (I = e[E], L = c(I, E), v = f.get(L), v === void 0) {
      var _ = a.get(L);
      if (_ !== void 0) {
        a.delete(L), f.set(L, _);
        var S = x ? x.next : b;
        or(t, x, _), or(t, _, S), Zt(_, S, o), x = _;
      } else {
        var B = b ? (
          /** @type {TemplateNode} */
          b.e.nodes_start
        ) : o;
        x = Go(
          B,
          t,
          x,
          x === null ? t.first : x.next,
          I,
          L,
          E,
          n,
          l,
          s
        );
      }
      f.set(L, x), m = [], w = [], b = x.next;
      continue;
    }
    if (g && Fo(v, I, E, l), (v.e.f & $e) !== 0 && (Ut(v.e), d && (v.a?.unfix(), (T ??= /* @__PURE__ */ new Set()).delete(v))), v !== b) {
      if (p !== void 0 && p.has(v)) {
        if (m.length < w.length) {
          var U = w[0], P;
          x = U.prev;
          var j = m[0], O = m[m.length - 1];
          for (P = 0; P < m.length; P += 1)
            Zt(m[P], U, o);
          for (P = 0; P < w.length; P += 1)
            p.delete(w[P]);
          or(t, j.prev, O.next), or(t, x, j), or(t, O, U), b = U, x = O, E -= 1, m = [], w = [];
        } else
          p.delete(v), Zt(v, b, o), or(t, v.prev, v.next), or(t, v, x === null ? t.first : x.next), or(t, x, v), x = v;
        continue;
      }
      for (m = [], w = []; b !== null && b.k !== L; )
        (b.e.f & $e) === 0 && (p ??= /* @__PURE__ */ new Set()).add(b), w.push(b), b = b.next;
      if (b === null)
        continue;
      v = b;
    }
    m.push(v), x = v, b = v.next;
  }
  if (b !== null || p !== void 0) {
    for (var z = p === void 0 ? [] : so(p); b !== null; )
      (b.e.f & $e) === 0 && z.push(b), b = b.next;
    var V = z.length;
    if (V > 0) {
      var N = (l & oo) !== 0 && u === 0 ? o : null;
      if (d) {
        for (E = 0; E < V; E += 1)
          z[E].a?.measure();
        for (E = 0; E < V; E += 1)
          z[E].a?.fix();
      }
      F0(t, z, N);
    }
  }
  d && kt(() => {
    if (T !== void 0)
      for (v of T)
        v.a?.apply();
  }), r.first = t.first && t.first.e, r.last = x && x.e;
  for (var C of a.values())
    Ze(C.e);
  a.clear();
}
function Fo(r, e, t, a) {
  (a & Dt) !== 0 && mt(r.v, e), (a & Ft) !== 0 ? mt(
    /** @type {Value<number>} */
    r.i,
    t
  ) : r.i = t;
}
function Go(r, e, t, a, o, n, l, c, s, d, g) {
  var u = (s & Dt) !== 0, f = (s & Cn) === 0, y = u ? f ? /* @__PURE__ */ f0(o, !1, !1) : pt(o) : o, b = (s & Ft) === 0 ? l : pt(l), p = {
    i: b,
    v: y,
    k: n,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: a
  };
  try {
    if (r === null) {
      var x = document.createDocumentFragment();
      x.append(r = et());
    }
    return p.e = Er(() => c(
      /** @type {Node} */
      r,
      y,
      b,
      d
    ), t0), p.e.prev = t && t.e, p.e.next = a && a.e, t === null ? g || (e.first = p) : (t.next = p, t.e.next = p.e), a !== null && (a.prev = p, a.e.prev = p.e), p;
  } finally {
  }
}
function Zt(r, e, t) {
  for (var a = r.next ? (
    /** @type {TemplateNode} */
    r.next.e.nodes_start
  ) : t, o = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : t, n = (
    /** @type {TemplateNode} */
    r.e.nodes_start
  ); n !== null && n !== a; ) {
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ qt(n)
    );
    o.before(n), n = l;
  }
}
function or(r, e, t) {
  e === null ? r.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e);
}
function Wo(r, e, t, a, o, n) {
  var l, c, s = null, d = (
    /** @type {TemplateNode} */
    r
  ), g;
  tt(() => {
    const u = e() || null;
    var f = u === "svg" ? Bn : null;
    u !== l && (g && (u === null ? Ea(g, () => {
      g = null, c = null;
    }) : u === c ? Ut(g) : (Ze(g), Ha(!1))), u && u !== c && (g = Er(() => {
      if (s = f ? document.createElementNS(f, u) : document.createElement(u), Or(s, s), a) {
        var y = (
          /** @type {TemplateNode} */
          s.appendChild(et())
        );
        a(s, y);
      }
      le.nodes_end = s, d.before(s);
    })), l = u, l && (c = l), Ha(!0));
  }, $r);
}
function W0(r, e, t) {
  xt(() => {
    var a = wt(() => e(r, t?.()) || {});
    if (a?.destroy)
      return () => (
        /** @type {Function} */
        a.destroy()
      );
  });
}
function Ho(r, e) {
  var t = void 0, a;
  tt(() => {
    t !== (t = e()) && (a && (Ze(a), a = null), t && (a = Er(() => {
      xt(() => (
        /** @type {(node: Element) => void} */
        t(r)
      ));
    })));
  });
}
function qo(r) {
  var e, t, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var o = r.length;
    for (e = 0; e < o; e++) r[e] && (t = qo(r[e])) && (a && (a += " "), a += t);
  } else for (t in r) r[t] && (a && (a += " "), a += t);
  return a;
}
function te() {
  for (var r, e, t = 0, a = "", o = arguments.length; t < o; t++) (r = arguments[t]) && (e = qo(r)) && (a && (a += " "), a += e);
  return a;
}
function $(r) {
  return typeof r == "object" ? te(r) : r ?? "";
}
const qa = [...` 	
\r\f \v\uFEFF`];
function H0(r, e, t) {
  var a = r == null ? "" : "" + r;
  if (t) {
    for (var o in t)
      if (t[o])
        a = a ? a + " " + o : o;
      else if (a.length)
        for (var n = o.length, l = 0; (l = a.indexOf(o, l)) >= 0; ) {
          var c = l + n;
          (l === 0 || qa.includes(a[l - 1])) && (c === a.length || qa.includes(a[c])) ? a = (l === 0 ? "" : a.substring(0, l)) + a.substring(c + 1) : l = c;
        }
  }
  return a === "" ? null : a;
}
function Ua(r, e = !1) {
  var t = e ? " !important;" : ";", a = "";
  for (var o in r) {
    var n = r[o];
    n != null && n !== "" && (a += " " + o + ": " + n + t);
  }
  return a;
}
function Jt(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function q0(r, e) {
  if (e) {
    var t = "", a, o;
    if (Array.isArray(e) ? (a = e[0], o = e[1]) : a = e, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var n = !1, l = 0, c = !1, s = [];
      a && s.push(...Object.keys(a).map(Jt)), o && s.push(...Object.keys(o).map(Jt));
      var d = 0, g = -1;
      const p = r.length;
      for (var u = 0; u < p; u++) {
        var f = r[u];
        if (c ? f === "/" && r[u - 1] === "*" && (c = !1) : n ? n === f && (n = !1) : f === "/" && r[u + 1] === "*" ? c = !0 : f === '"' || f === "'" ? n = f : f === "(" ? l++ : f === ")" && l--, !c && n === !1 && l === 0) {
          if (f === ":" && g === -1)
            g = u;
          else if (f === ";" || u === p - 1) {
            if (g !== -1) {
              var y = Jt(r.substring(d, g).trim());
              if (!s.includes(y)) {
                f !== ";" && u++;
                var b = r.substring(d, u).trim();
                t += " " + b + ";";
              }
            }
            d = u + 1, g = -1;
          }
        }
      }
    }
    return a && (t += Ua(a)), o && (t += Ua(o, !0)), t = t.trim(), t === "" ? null : t;
  }
  return r == null ? null : String(r);
}
function Z(r, e, t, a, o, n) {
  var l = r.__className;
  if (l !== t || l === void 0) {
    var c = H0(t, a, n);
    c == null ? r.removeAttribute("class") : e ? r.className = c : r.setAttribute("class", c), r.__className = t;
  } else if (n && o !== n)
    for (var s in n) {
      var d = !!n[s];
      (o == null || d !== !!o[s]) && r.classList.toggle(s, d);
    }
  return n;
}
function Qt(r, e = {}, t, a) {
  for (var o in t) {
    var n = t[o];
    e[o] !== n && (t[o] == null ? r.style.removeProperty(o) : r.style.setProperty(o, n, a));
  }
}
function Uo(r, e, t, a) {
  var o = r.__style;
  if (o !== e) {
    var n = q0(e, a);
    n == null ? r.removeAttribute("style") : r.style.cssText = n, r.__style = e;
  } else a && (Array.isArray(a) ? (Qt(r, t?.[0], a[0]), Qt(r, t?.[1], a[1], "important")) : Qt(r, t, a));
  return a;
}
function ia(r, e, t = !1) {
  if (r.multiple) {
    if (e == null)
      return;
    if (!Gt(e))
      return r0();
    for (var a of r.options)
      a.selected = e.includes(Ka(a));
    return;
  }
  for (a of r.options) {
    var o = Ka(a);
    if (p0(o, e)) {
      a.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (r.selectedIndex = -1);
}
function U0(r) {
  var e = new MutationObserver(() => {
    ia(r, r.__value);
  });
  e.observe(r, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Co(() => {
    e.disconnect();
  });
}
function Ka(r) {
  return "__value" in r ? r.__value : r.value;
}
const it = Symbol("class"), dt = Symbol("style"), Ko = Symbol("is custom element"), Yo = Symbol("is html");
function K0(r, e) {
  e ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected");
}
function Ye(r, e, t, a) {
  var o = Xo(r);
  o[e] !== (o[e] = t) && (e === "loading" && (r[Hn] = t), t == null ? r.removeAttribute(e) : typeof t != "string" && Zo(r).includes(e) ? r[e] = t : r.setAttribute(e, t));
}
function Y0(r, e, t, a, o = !1) {
  var n = Xo(r), l = n[Ko], c = !n[Yo], s = e || {}, d = r.tagName === "OPTION";
  for (var g in e)
    g in t || (t[g] = null);
  t.class ? t.class = $(t.class) : t[it] && (t.class = null), t[dt] && (t.style ??= null);
  var u = Zo(r);
  for (const m in t) {
    let w = t[m];
    if (d && m === "value" && w == null) {
      r.value = r.__value = "", s[m] = w;
      continue;
    }
    if (m === "class") {
      var f = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      Z(r, f, w, a, e?.[it], t[it]), s[m] = w, s[it] = t[it];
      continue;
    }
    if (m === "style") {
      Uo(r, w, e?.[dt], t[dt]), s[m] = w, s[dt] = t[dt];
      continue;
    }
    var y = s[m];
    if (!(w === y && !(w === void 0 && r.hasAttribute(m)))) {
      s[m] = w;
      var b = m[0] + m[1];
      if (b !== "$$")
        if (b === "on") {
          const I = {}, L = "$$" + m;
          let v = m.slice(2);
          var p = O0(v);
          if (L0(v) && (v = v.slice(0, -7), I.capture = !0), !p && y) {
            if (w != null) continue;
            r.removeEventListener(v, s[L], I), s[L] = null;
          }
          if (w != null)
            if (p)
              r[`__${v}`] = w, Ie([v]);
            else {
              let E = function(_) {
                s[m].call(this, _);
              };
              s[L] = Oo(v, r, E, I);
            }
          else p && (r[`__${v}`] = void 0);
        } else if (m === "style")
          Ye(r, m, w);
        else if (m === "autofocus")
          k0(
            /** @type {HTMLElement} */
            r,
            !!w
          );
        else if (!l && (m === "__value" || m === "value" && w != null))
          r.value = r.__value = w;
        else if (m === "selected" && d)
          K0(
            /** @type {HTMLOptionElement} */
            r,
            w
          );
        else {
          var x = m;
          c || (x = D0(x));
          var T = x === "defaultValue" || x === "defaultChecked";
          if (w == null && !l && !T)
            if (n[m] = null, x === "value" || x === "checked") {
              let I = (
                /** @type {HTMLInputElement} */
                r
              );
              const L = e === void 0;
              if (x === "value") {
                let v = I.defaultValue;
                I.removeAttribute(x), I.defaultValue = v, I.value = I.__value = L ? v : null;
              } else {
                let v = I.defaultChecked;
                I.removeAttribute(x), I.defaultChecked = v, I.checked = L ? v : !1;
              }
            } else
              r.removeAttribute(m);
          else T || u.includes(x) && (l || typeof w != "string") ? (r[x] = w, x in n && (n[x] = Se)) : typeof w != "function" && Ye(r, x, w);
        }
    }
  }
  return s;
}
function we(r, e, t = [], a = [], o, n = !1) {
  vo(t, a, (l) => {
    var c = void 0, s = {}, d = r.nodeName === "SELECT", g = !1;
    if (tt(() => {
      var f = e(...l.map(i)), y = Y0(r, c, f, o, n);
      g && d && "value" in f && ia(
        /** @type {HTMLSelectElement} */
        r,
        f.value
      );
      for (let p of Object.getOwnPropertySymbols(s))
        f[p] || Ze(s[p]);
      for (let p of Object.getOwnPropertySymbols(f)) {
        var b = f[p];
        p.description === jn && (!c || b !== c[p]) && (s[p] && Ze(s[p]), s[p] = Er(() => Ho(r, () => b))), y[p] = b;
      }
      c = y;
    }), d) {
      var u = (
        /** @type {HTMLSelectElement} */
        r
      );
      xt(() => {
        ia(
          u,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), U0(u);
      });
    }
    g = !0;
  });
}
function Xo(r) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    r.__attributes ??= {
      [Ko]: r.nodeName.includes("-"),
      [Yo]: r.namespaceURI === Mn
    }
  );
}
var Ya = /* @__PURE__ */ new Map();
function Zo(r) {
  var e = Ya.get(r.nodeName);
  if (e) return e;
  Ya.set(r.nodeName, e = []);
  for (var t, a = r, o = Element.prototype; o !== a; ) {
    t = Rn(a);
    for (var n in t)
      t[n].set && e.push(n);
    a = io(a);
  }
  return e;
}
const X0 = () => performance.now(), fr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (r) => requestAnimationFrame(r)
  ),
  now: () => X0(),
  tasks: /* @__PURE__ */ new Set()
};
function Jo() {
  const r = fr.now();
  fr.tasks.forEach((e) => {
    e.c(r) || (fr.tasks.delete(e), e.f());
  }), fr.tasks.size !== 0 && fr.tick(Jo);
}
function Z0(r) {
  let e;
  return fr.tasks.size === 0 && fr.tick(Jo), {
    promise: new Promise((t) => {
      fr.tasks.add(e = { c: r, f: t });
    }),
    abort() {
      fr.tasks.delete(e);
    }
  };
}
function _t(r, e) {
  rt(() => {
    r.dispatchEvent(new CustomEvent(e));
  });
}
function J0(r) {
  if (r === "float") return "cssFloat";
  if (r === "offset") return "cssOffset";
  if (r.startsWith("--")) return r;
  const e = r.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function Xa(r) {
  const e = {}, t = r.split(";");
  for (const a of t) {
    const [o, n] = a.split(":");
    if (!o || n === void 0) break;
    const l = J0(o.trim());
    e[l] = n.trim();
  }
  return e;
}
const Q0 = (r) => r;
function Ia(r, e, t, a) {
  var o = (r & An) !== 0, n = (r & In) !== 0, l = o && n, c = (r & Vn) !== 0, s = l ? "both" : o ? "in" : "out", d, g = e.inert, u = e.style.overflow, f, y;
  function b() {
    return rt(() => d ??= t()(e, a?.() ?? /** @type {P} */
    {}, {
      direction: s
    }));
  }
  var p = {
    is_global: c,
    in() {
      if (e.inert = g, !o) {
        y?.abort(), y?.reset?.();
        return;
      }
      n || f?.abort(), _t(e, "introstart"), f = da(e, b(), y, 1, () => {
        _t(e, "introend"), f?.abort(), f = d = void 0, e.style.overflow = u;
      });
    },
    out(w) {
      if (!n) {
        w?.(), d = void 0;
        return;
      }
      e.inert = !0, _t(e, "outrostart"), y = da(e, b(), f, 0, () => {
        _t(e, "outroend"), w?.();
      });
    },
    stop: () => {
      f?.abort(), y?.abort();
    }
  }, x = (
    /** @type {Effect} */
    le
  );
  if ((x.transitions ??= []).push(p), o && Do) {
    var T = c;
    if (!T) {
      for (var m = (
        /** @type {Effect | null} */
        x.parent
      ); m && (m.f & $r) !== 0; )
        for (; (m = m.parent) && (m.f & Nr) === 0; )
          ;
      T = !m || (m.f & Wt) !== 0;
    }
    T && xt(() => {
      wt(() => p.in());
    });
  }
}
function da(r, e, t, a, o) {
  var n = a === 1;
  if (qr(e)) {
    var l, c = !1;
    return kt(() => {
      if (!c) {
        var x = e({ direction: n ? "in" : "out" });
        l = da(r, x, t, a, o);
      }
    }), {
      abort: () => {
        c = !0, l?.abort();
      },
      deactivate: () => l.deactivate(),
      reset: () => l.reset(),
      t: () => l.t()
    };
  }
  if (t?.deactivate(), !e?.duration)
    return o(), {
      abort: Te,
      deactivate: Te,
      reset: Te,
      t: () => a
    };
  const { delay: s = 0, css: d, tick: g, easing: u = Q0 } = e;
  var f = [];
  if (n && t === void 0 && (g && g(0, 1), d)) {
    var y = Xa(d(0, 1));
    f.push(y, y);
  }
  var b = () => 1 - a, p = r.animate(f, { duration: s, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var x = t?.t() ?? 1 - a;
    t?.abort();
    var T = a - x, m = (
      /** @type {number} */
      e.duration * Math.abs(T)
    ), w = [];
    if (m > 0) {
      var I = !1;
      if (d)
        for (var L = Math.ceil(m / 16.666666666666668), v = 0; v <= L; v += 1) {
          var E = x + T * u(v / L), _ = Xa(d(E, 1 - E));
          w.push(_), I ||= _.overflow === "hidden";
        }
      I && (r.style.overflow = "hidden"), b = () => {
        var S = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return x + T * u(S / m);
      }, g && Z0(() => {
        if (p.playState !== "running") return !1;
        var S = b();
        return g(S, 1 - S), !0;
      });
    }
    p = r.animate(w, { duration: m, fill: "forwards" }), p.onfinish = () => {
      b = () => a, g?.(a, 1 - a), o();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = Te);
    },
    deactivate: () => {
      o = Te;
    },
    reset: () => {
      a === 0 && g?.(1, 0);
    },
    t: () => b()
  };
}
function $0(r, e, t = e) {
  var a = /* @__PURE__ */ new WeakSet();
  w0(r, "input", (o) => {
    var n = o ? r.defaultValue : r.value;
    if (n = $t(r) ? ea(n) : n, t(n), xe !== null && a.add(xe), n !== (n = e())) {
      var l = r.selectionStart, c = r.selectionEnd;
      r.value = n ?? "", c !== null && (r.selectionStart = l, r.selectionEnd = Math.min(c, r.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  wt(e) == null && r.value && (t($t(r) ? ea(r.value) : r.value), xe !== null && a.add(xe)), So(() => {
    var o = e();
    if (r === document.activeElement) {
      var n = (
        /** @type {Batch} */
        It ?? xe
      );
      if (a.has(n))
        return;
    }
    $t(r) && o === ea(r.value) || r.type === "date" && !o && !r.value || o !== r.value && (r.value = o ?? "");
  });
}
function $t(r) {
  var e = r.type;
  return e === "number" || e === "range";
}
function ea(r) {
  return r === "" ? null : +r;
}
function Za(r, e) {
  return r === e || r?.[zr] === e;
}
function Lt(r = {}, e, t, a) {
  return xt(() => {
    var o, n;
    return So(() => {
      o = n, n = [], wt(() => {
        r !== t(...n) && (e(r, ...n), o && Za(t(...o), r) && e(null, ...o));
      });
    }), () => {
      kt(() => {
        n && Za(t(...n), r) && e(null, ...n);
      });
    };
  }), r;
}
let Ct = !1;
function el(r) {
  var e = Ct;
  try {
    return Ct = !1, [r(), Ct];
  } finally {
    Ct = e;
  }
}
const rl = {
  get(r, e) {
    if (!r.exclude.includes(e))
      return r.props[e];
  },
  set(r, e) {
    return !1;
  },
  getOwnPropertyDescriptor(r, e) {
    if (!r.exclude.includes(e) && e in r.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: r.props[e]
      };
  },
  has(r, e) {
    return r.exclude.includes(e) ? !1 : e in r.props;
  },
  ownKeys(r) {
    return Reflect.ownKeys(r.props).filter((e) => !r.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function me(r, e, t) {
  return new Proxy(
    { props: r, exclude: e },
    rl
  );
}
const tl = {
  get(r, e) {
    let t = r.props.length;
    for (; t--; ) {
      let a = r.props[t];
      if (qr(a) && (a = a()), typeof a == "object" && a !== null && e in a) return a[e];
    }
  },
  set(r, e, t) {
    let a = r.props.length;
    for (; a--; ) {
      let o = r.props[a];
      qr(o) && (o = o());
      const n = Kr(o, e);
      if (n && n.set)
        return n.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(r, e) {
    let t = r.props.length;
    for (; t--; ) {
      let a = r.props[t];
      if (qr(a) && (a = a()), typeof a == "object" && a !== null && e in a) {
        const o = Kr(a, e);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(r, e) {
    if (e === zr || e === co) return !1;
    for (let t of r.props)
      if (qr(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(r) {
    const e = [];
    for (let t of r.props)
      if (qr(t) && (t = t()), !!t) {
        for (const a in t)
          e.includes(a) || e.push(a);
        for (const a of Object.getOwnPropertySymbols(t))
          e.includes(a) || e.push(a);
      }
    return e;
  }
};
function Gr(...r) {
  return new Proxy({ props: r }, tl);
}
function M(r, e, t, a) {
  var o = (t & Tn) !== 0, n = (t & En) !== 0, l = (
    /** @type {V} */
    a
  ), c = !0, s = () => (c && (c = !1, l = n ? wt(
    /** @type {() => V} */
    a
  ) : (
    /** @type {V} */
    a
  )), l), d;
  if (o) {
    var g = zr in r || co in r;
    d = Kr(r, e)?.set ?? (g && e in r ? (m) => r[e] = m : void 0);
  }
  var u, f = !1;
  o ? [u, f] = el(() => (
    /** @type {V} */
    r[e]
  )) : u = /** @type {V} */
  r[e], u === void 0 && a !== void 0 && (u = s(), d && (Jn(), d(u)));
  var y;
  if (y = () => {
    var m = (
      /** @type {V} */
      r[e]
    );
    return m === void 0 ? s() : (c = !0, m);
  }, (t & Sn) === 0)
    return y;
  if (d) {
    var b = r.$$legacy;
    return (
      /** @type {() => V} */
      (function(m, w) {
        return arguments.length > 0 ? ((!w || b || f) && d(w ? y() : m), m) : y();
      })
    );
  }
  var p = !1, x = ((t & zn) !== 0 ? Ht : mo)(() => (p = !1, y()));
  o && i(x);
  var T = (
    /** @type {Effect} */
    le
  );
  return (
    /** @type {() => V} */
    (function(m, w) {
      if (arguments.length > 0) {
        const I = w ? i(x) : o ? Qe(m) : m;
        return ge(x, I), p = !0, l !== void 0 && (l = I), m;
      }
      return Fr && p || (T.f & Dr) !== 0 ? x.v : i(x);
    })
  );
}
function Oe(r) {
  return sr("theme")?.[r];
}
const Qo = Symbol("singleton");
function $o() {
  const r = Qe({ value: void 0 });
  return Nt(Qo, r);
}
function al(r, e, t) {
  return e ? r.value = t : r.value === t && (r.value = void 0), r;
}
function ol(r) {
  const e = sr(Qo) ?? $o();
  return Ta(() => {
    e.value !== void 0 && r(e.value);
  }), (t, a) => al(e, t, a);
}
var nl = /* @__PURE__ */ G("<div><!></div>");
function ll(r, e) {
  fe(e, !0);
  let t = M(e, "multiple", 3, !1), a = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "flush",
    "activeClass",
    "inactiveClass",
    "multiple",
    "class",
    "transitionType"
  ]);
  const o = Oe("accordion"), n = Qe({
    flush: e.flush,
    activeClass: e.activeClass,
    inactiveClass: e.inactiveClass,
    transitionType: e.transitionType
  });
  Nt("ctx", n), t() || $o();
  const l = /* @__PURE__ */ A(() => ts({ flush: e.flush, class: te(o, e.class) }));
  var c = nl();
  we(c, () => ({ ...a, class: i(l) }));
  var s = q(c);
  J(s, () => e.children), k(r, c), pe();
}
const sl = (r) => r;
function il(r) {
  const e = r - 1;
  return e * e * e + 1;
}
function Va(r, { delay: e = 0, duration: t = 400, easing: a = sl } = {}) {
  const o = +getComputedStyle(r).opacity;
  return {
    delay: e,
    duration: t,
    easing: a,
    css: (n) => `opacity: ${n * o}`
  };
}
function dl(r, { delay: e = 0, duration: t = 400, easing: a = il, axis: o = "y" } = {}) {
  const n = getComputedStyle(r), l = +n.opacity, c = o === "y" ? "height" : "width", s = parseFloat(n[c]), d = o === "y" ? ["top", "bottom"] : ["left", "right"], g = d.map(
    (T) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${T[0].toUpperCase()}${T.slice(1)}`
    )
  ), u = parseFloat(n[`padding${g[0]}`]), f = parseFloat(n[`padding${g[1]}`]), y = parseFloat(n[`margin${g[0]}`]), b = parseFloat(n[`margin${g[1]}`]), p = parseFloat(
    n[`border${g[0]}Width`]
  ), x = parseFloat(
    n[`border${g[1]}Width`]
  );
  return {
    delay: e,
    duration: t,
    easing: a,
    css: (T) => `overflow: hidden;opacity: ${Math.min(T * 20, 1) * l};${c}: ${T * s}px;padding-${d[0]}: ${T * u}px;padding-${d[1]}: ${T * f}px;margin-${d[0]}: ${T * y}px;margin-${d[1]}: ${T * b}px;border-${d[0]}-width: ${T * p}px;border-${d[1]}-width: ${T * x}px;min-${c}: 0`
  };
}
const gl = (r, e) => {
  e(!e());
};
var cl = /* @__PURE__ */ hr('<svg class="h-3 w-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>'), ul = /* @__PURE__ */ hr('<svg class="h-3 w-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>'), bl = /* @__PURE__ */ G("<!> <!>", 1), fl = /* @__PURE__ */ G("<div><div><!></div></div>"), pl = /* @__PURE__ */ G("<div><div><!></div></div>"), ml = /* @__PURE__ */ G('<h2><button type="button"><!></button></h2> <!>', 1);
function yl(r, e) {
  fe(e, !0);
  let t = M(e, "open", 15, !1), a = M(e, "transitionType", 3, dl);
  e.headerClass, e.contentClass, e.activeClass, e.inactiveClass;
  let o = /* @__PURE__ */ A(() => e.classes ?? {
    button: e.headerClass,
    content: e.contentClass,
    active: e.activeClass,
    inactive: e.inactiveClass
  });
  const n = sr("ctx") ?? {}, l = n.transitionType ?? a(), c = a() === "none" ? !1 : l !== "none", s = Oe("accordionItem"), d = Symbol("accordion-item"), g = ol((B) => t(B === d));
  Ta(() => {
    g(t(), d);
  });
  const u = /* @__PURE__ */ A(() => as({ flush: n.flush, open: t() })), f = /* @__PURE__ */ A(() => i(u).base), y = /* @__PURE__ */ A(() => i(u).button), b = /* @__PURE__ */ A(() => i(u).content), p = /* @__PURE__ */ A(() => i(u).active), x = /* @__PURE__ */ A(() => i(u).inactive);
  let T = /* @__PURE__ */ A(() => te(t() && !n.flush && (i(o).active || n.activeClass || i(p)()), !t() && !n.flush && (i(o).inactive || n.inactiveClass || i(x)())));
  var m = ml(), w = D(m), I = q(w);
  I.__click = [gl, t];
  var L = q(I);
  {
    var v = (B) => {
      var U = bl(), P = D(U);
      J(P, () => e.header);
      var j = ne(P, 2);
      {
        var O = (V) => {
          var N = K(), C = D(N);
          {
            var X = (R) => {
              var oe = cl();
              k(R, oe);
            }, Y = (R) => {
              var oe = K(), Q = D(oe);
              J(Q, () => e.arrowup), k(R, oe);
            };
            F(C, (R) => {
              e.arrowup ? R(Y, !1) : R(X);
            });
          }
          k(V, N);
        }, z = (V) => {
          var N = K(), C = D(N);
          {
            var X = (R) => {
              var oe = ul();
              k(R, oe);
            }, Y = (R) => {
              var oe = K(), Q = D(oe);
              J(Q, () => e.arrowdown), k(R, oe);
            };
            F(
              C,
              (R) => {
                e.arrowdown ? R(Y, !1) : R(X);
              },
              !0
            );
          }
          k(V, N);
        };
        F(j, (V) => {
          t() ? V(O) : V(z, !1);
        });
      }
      k(B, U);
    };
    F(L, (B) => {
      e.header && B(v);
    });
  }
  var E = ne(w, 2);
  {
    var _ = (B) => {
      var U = K(), P = D(U);
      {
        var j = (O) => {
          var z = fl(), V = q(z), N = q(V);
          J(N, () => e.children), ee((C) => Z(V, 1, C), [
            () => $(i(b)({ class: te(s?.content, i(o).content) }))
          ]), Ia(3, z, a, () => e.transitionParams), k(O, z);
        };
        F(P, (O) => {
          t() && a() !== "none" && O(j);
        });
      }
      k(B, U);
    }, S = (B) => {
      var U = pl(), P = q(U), j = q(P);
      J(j, () => e.children), ee(
        (O) => {
          Z(U, 1, $(t() ? "block" : "hidden")), Z(P, 1, O);
        },
        [
          () => $(i(b)({ class: te(s?.content, i(o).content) }))
        ]
      ), k(B, U);
    };
    F(E, (B) => {
      c ? B(_) : B(S, !1);
    });
  }
  ee(
    (B, U) => {
      Z(w, 1, B), Z(I, 1, U), Ye(I, "aria-expanded", t());
    },
    [
      () => $(i(f)({ class: te(s?.base, e.class) })),
      () => $(i(y)({
        class: te(i(T), s?.button, i(o).button)
      }))
    ]
  ), k(r, m), pe();
}
Ie(["click"]);
var Ja = (r) => r === !1 ? "false" : r === !0 ? "true" : r === 0 ? "0" : r, Le = (r) => {
  if (!r || typeof r != "object") return !0;
  for (let e in r) return !1;
  return !0;
}, hl = (r, e) => {
  if (r === e) return !0;
  if (!r || !e) return !1;
  let t = Object.keys(r), a = Object.keys(e);
  if (t.length !== a.length) return !1;
  for (let o = 0; o < t.length; o++) {
    let n = t[o];
    if (!a.includes(n) || r[n] !== e[n]) return !1;
  }
  return !0;
};
function en(r, e) {
  for (let t = 0; t < r.length; t++) {
    let a = r[t];
    Array.isArray(a) ? en(a, e) : e.push(a);
  }
}
var rn = (...r) => {
  let e = [];
  en(r, e);
  let t = [];
  for (let a = 0; a < e.length; a++) e[a] && t.push(e[a]);
  return t;
}, tn = (r, e) => {
  let t = {};
  for (let a in r) {
    let o = r[a];
    if (a in e) {
      let n = e[a];
      Array.isArray(o) || Array.isArray(n) ? t[a] = rn(n, o) : typeof o == "object" && typeof n == "object" && o && n ? t[a] = tn(o, n) : t[a] = n + " " + o;
    } else t[a] = o;
  }
  for (let a in e) a in r || (t[a] = e[a]);
  return t;
}, vl = /\s+/g, Qa = (r) => !r || typeof r != "string" ? r : r.replace(vl, " ").trim();
const Pa = "-", kl = (r) => {
  const e = wl(r), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: a
  } = r;
  return {
    getClassGroupId: (l) => {
      const c = l.split(Pa);
      return c[0] === "" && c.length !== 1 && c.shift(), an(c, e) || xl(l);
    },
    getConflictingClassGroupIds: (l, c) => {
      const s = t[l] || [];
      return c && a[l] ? [...s, ...a[l]] : s;
    }
  };
}, an = (r, e) => {
  if (r.length === 0)
    return e.classGroupId;
  const t = r[0], a = e.nextPart.get(t), o = a ? an(r.slice(1), a) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const n = r.join(Pa);
  return e.validators.find(({
    validator: l
  }) => l(n))?.classGroupId;
}, $a = /^\[(.+)\]$/, xl = (r) => {
  if ($a.test(r)) {
    const e = $a.exec(r)[1], t = e?.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, wl = (r) => {
  const {
    theme: e,
    classGroups: t
  } = r, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in t)
    ga(t[o], a, o, e);
  return a;
}, ga = (r, e, t, a) => {
  r.forEach((o) => {
    if (typeof o == "string") {
      const n = o === "" ? e : eo(e, o);
      n.classGroupId = t;
      return;
    }
    if (typeof o == "function") {
      if (_l(o)) {
        ga(o(a), e, t, a);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: t
      });
      return;
    }
    Object.entries(o).forEach(([n, l]) => {
      ga(l, eo(e, n), t, a);
    });
  });
}, eo = (r, e) => {
  let t = r;
  return e.split(Pa).forEach((a) => {
    t.nextPart.has(a) || t.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(a);
  }), t;
}, _l = (r) => r.isThemeGetter, Cl = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const o = (n, l) => {
    t.set(n, l), e++, e > r && (e = 0, a = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(n) {
      let l = t.get(n);
      if (l !== void 0)
        return l;
      if ((l = a.get(n)) !== void 0)
        return o(n, l), l;
    },
    set(n, l) {
      t.has(n) ? t.set(n, l) : o(n, l);
    }
  };
}, ca = "!", ua = ":", zl = ua.length, Sl = (r) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = r;
  let a = (o) => {
    const n = [];
    let l = 0, c = 0, s = 0, d;
    for (let b = 0; b < o.length; b++) {
      let p = o[b];
      if (l === 0 && c === 0) {
        if (p === ua) {
          n.push(o.slice(s, b)), s = b + zl;
          continue;
        }
        if (p === "/") {
          d = b;
          continue;
        }
      }
      p === "[" ? l++ : p === "]" ? l-- : p === "(" ? c++ : p === ")" && c--;
    }
    const g = n.length === 0 ? o : o.substring(s), u = Tl(g), f = u !== g, y = d && d > s ? d - s : void 0;
    return {
      modifiers: n,
      hasImportantModifier: f,
      baseClassName: u,
      maybePostfixModifierPosition: y
    };
  };
  if (e) {
    const o = e + ua, n = a;
    a = (l) => l.startsWith(o) ? n(l.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: l,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const o = a;
    a = (n) => t({
      className: n,
      parseClassName: o
    });
  }
  return a;
}, Tl = (r) => r.endsWith(ca) ? r.substring(0, r.length - 1) : r.startsWith(ca) ? r.substring(1) : r, El = (r) => {
  const e = Object.fromEntries(r.orderSensitiveModifiers.map((a) => [a, !0]));
  return (a) => {
    if (a.length <= 1)
      return a;
    const o = [];
    let n = [];
    return a.forEach((l) => {
      l[0] === "[" || e[l] ? (o.push(...n.sort(), l), n = []) : n.push(l);
    }), o.push(...n.sort()), o;
  };
}, Al = (r) => ({
  cache: Cl(r.cacheSize),
  parseClassName: Sl(r),
  sortModifiers: El(r),
  ...kl(r)
}), Il = /\s+/, Vl = (r, e) => {
  const {
    parseClassName: t,
    getClassGroupId: a,
    getConflictingClassGroupIds: o,
    sortModifiers: n
  } = e, l = [], c = r.trim().split(Il);
  let s = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const g = c[d], {
      isExternal: u,
      modifiers: f,
      hasImportantModifier: y,
      baseClassName: b,
      maybePostfixModifierPosition: p
    } = t(g);
    if (u) {
      s = g + (s.length > 0 ? " " + s : s);
      continue;
    }
    let x = !!p, T = a(x ? b.substring(0, p) : b);
    if (!T) {
      if (!x) {
        s = g + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (T = a(b), !T) {
        s = g + (s.length > 0 ? " " + s : s);
        continue;
      }
      x = !1;
    }
    const m = n(f).join(":"), w = y ? m + ca : m, I = w + T;
    if (l.includes(I))
      continue;
    l.push(I);
    const L = o(T, x);
    for (let v = 0; v < L.length; ++v) {
      const E = L[v];
      l.push(w + E);
    }
    s = g + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Pl() {
  let r = 0, e, t, a = "";
  for (; r < arguments.length; )
    (e = arguments[r++]) && (t = on(e)) && (a && (a += " "), a += t);
  return a;
}
const on = (r) => {
  if (typeof r == "string")
    return r;
  let e, t = "";
  for (let a = 0; a < r.length; a++)
    r[a] && (e = on(r[a])) && (t && (t += " "), t += e);
  return t;
};
function ba(r, ...e) {
  let t, a, o, n = l;
  function l(s) {
    const d = e.reduce((g, u) => u(g), r());
    return t = Al(d), a = t.cache.get, o = t.cache.set, n = c, c(s);
  }
  function c(s) {
    const d = a(s);
    if (d)
      return d;
    const g = Vl(s, t);
    return o(s, g), g;
  }
  return function() {
    return n(Pl.apply(null, arguments));
  };
}
const ze = (r) => {
  const e = (t) => t[r] || [];
  return e.isThemeGetter = !0, e;
}, nn = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ln = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ml = /^\d+\/\d+$/, Bl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, jl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ll = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Rl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ol = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Hr = (r) => Ml.test(r), ae = (r) => !!r && !Number.isNaN(Number(r)), wr = (r) => !!r && Number.isInteger(Number(r)), ra = (r) => r.endsWith("%") && ae(r.slice(0, -1)), cr = (r) => Bl.test(r), Nl = () => !0, Dl = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  jl.test(r) && !Ll.test(r)
), sn = () => !1, Fl = (r) => Rl.test(r), Gl = (r) => Ol.test(r), Wl = (r) => !W(r) && !H(r), Hl = (r) => at(r, cn, sn), W = (r) => nn.test(r), Mr = (r) => at(r, un, Dl), ta = (r) => at(r, Xl, ae), ro = (r) => at(r, dn, sn), ql = (r) => at(r, gn, Gl), zt = (r) => at(r, bn, Fl), H = (r) => ln.test(r), gt = (r) => ot(r, un), Ul = (r) => ot(r, Zl), to = (r) => ot(r, dn), Kl = (r) => ot(r, cn), Yl = (r) => ot(r, gn), St = (r) => ot(r, bn, !0), at = (r, e, t) => {
  const a = nn.exec(r);
  return a ? a[1] ? e(a[1]) : t(a[2]) : !1;
}, ot = (r, e, t = !1) => {
  const a = ln.exec(r);
  return a ? a[1] ? e(a[1]) : t : !1;
}, dn = (r) => r === "position" || r === "percentage", gn = (r) => r === "image" || r === "url", cn = (r) => r === "length" || r === "size" || r === "bg-size", un = (r) => r === "length", Xl = (r) => r === "number", Zl = (r) => r === "family-name", bn = (r) => r === "shadow", fa = () => {
  const r = ze("color"), e = ze("font"), t = ze("text"), a = ze("font-weight"), o = ze("tracking"), n = ze("leading"), l = ze("breakpoint"), c = ze("container"), s = ze("spacing"), d = ze("radius"), g = ze("shadow"), u = ze("inset-shadow"), f = ze("text-shadow"), y = ze("drop-shadow"), b = ze("blur"), p = ze("perspective"), x = ze("aspect"), T = ze("ease"), m = ze("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], I = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], L = () => [...I(), H, W], v = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], _ = () => [H, W, s], S = () => [Hr, "full", "auto", ..._()], B = () => [wr, "none", "subgrid", H, W], U = () => ["auto", {
    span: ["full", wr, H, W]
  }, wr, H, W], P = () => [wr, "auto", H, W], j = () => ["auto", "min", "max", "fr", H, W], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], V = () => ["auto", ..._()], N = () => [Hr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ..._()], C = () => [r, H, W], X = () => [...I(), to, ro, {
    position: [H, W]
  }], Y = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", Kl, Hl, {
    size: [H, W]
  }], oe = () => [ra, gt, Mr], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    H,
    W
  ], se = () => ["", ae, gt, Mr], Be = () => ["solid", "dashed", "dotted", "double"], Ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ce = () => [ae, ra, to, ro], gr = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    H,
    W
  ], Ge = () => ["none", ae, H, W], We = () => ["none", ae, H, W], Ee = () => [ae, H, W], ye = () => [Hr, "full", ..._()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [cr],
      breakpoint: [cr],
      color: [Nl],
      container: [cr],
      "drop-shadow": [cr],
      ease: ["in", "out", "in-out"],
      font: [Wl],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [cr],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [cr],
      shadow: [cr],
      spacing: ["px", ae],
      text: [cr],
      "text-shadow": [cr],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Hr, W, H, x]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ae, W, H, c]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: L()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: v()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": v()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": v()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: S()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": S()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": S()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: S()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: S()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: S()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: S()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: S()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: S()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [wr, "auto", H, W]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Hr, "full", "auto", c, ..._()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ae, Hr, "auto", "initial", "none", W]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, H, W]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, H, W]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [wr, "first", "last", "none", H, W]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": B()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: U()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": P()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": P()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": B()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: U()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": P()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": P()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": j()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": j()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: _()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": _()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": _()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...O(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...O()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": O()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...z()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: _()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: _()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: _()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: _()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: _()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: _()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: _()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: _()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: _()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: V()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: V()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: V()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: V()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: V()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: V()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: V()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: V()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: V()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": _()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": _()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: N()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...N()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...N()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [l]
          },
          ...N()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...N()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...N()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...N()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, gt, Mr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [a, H, ta]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ra, W]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ul, W, e]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, H, W]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ae, "none", H, ta]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          n,
          ..._()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", H, W]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", H, W]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: C()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: C()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Be(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ae, "from-font", "auto", H, Mr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: C()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ae, "auto", H, W]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: _()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H, W]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", H, W]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: X()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Y()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: R()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, wr, H, W],
          radial: ["", H, W],
          conic: [wr, H, W]
        }, Yl, ql]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: C()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: oe()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: oe()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: oe()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: C()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: C()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: C()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Q()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Q()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Q()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Q()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Q()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Q()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Q()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Q()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Q()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Q()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Q()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Q()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Q()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Q()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Q()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: se()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": se()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": se()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": se()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": se()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": se()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": se()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": se()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": se()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": se()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": se()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Be(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Be(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: C()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": C()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": C()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": C()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": C()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": C()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": C()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": C()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": C()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: C()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Be(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, H, W]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, gt, Mr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: C()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          St,
          zt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: C()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, St, zt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": C()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: se()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: C()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ae, Mr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": C()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": se()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": C()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", f, St, zt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": C()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ae, H, W]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Ne(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ne()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ae]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ce()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ce()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": C()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": C()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ce()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ce()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": C()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": C()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ce()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ce()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": C()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": C()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ce()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ce()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": C()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": C()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ce()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ce()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": C()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": C()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ce()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ce()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": C()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": C()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ce()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ce()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": C()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": C()
      }],
      "mask-image-radial": [{
        "mask-radial": [H, W]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ce()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ce()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": C()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": C()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": I()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ae]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ce()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ce()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": C()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": C()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: X()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Y()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: R()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", H, W]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          H,
          W
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: gr()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ae, H, W]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, H, W]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          y,
          St,
          zt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": C()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ae, H, W]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, H, W]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, H, W]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, H, W]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, H, W]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          H,
          W
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": gr()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ae, H, W]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, H, W]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, H, W]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, H, W]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, H, W]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, H, W]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, H, W]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, H, W]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": _()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": _()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": _()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", H, W]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ae, "initial", H, W]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", T, H, W]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ae, H, W]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", m, H, W]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [p, H, W]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": L()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Ge()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Ge()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Ge()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Ge()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: We()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": We()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": We()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": We()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Ee()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Ee()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Ee()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [H, W, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: L()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ye()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ye()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ye()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ye()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: C()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: C()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H, W]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", H, W]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...C()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ae, gt, Mr, ta]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...C()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Jl = (r, {
  cacheSize: e,
  prefix: t,
  experimentalParseClassName: a,
  extend: o = {},
  override: n = {}
}) => (ut(r, "cacheSize", e), ut(r, "prefix", t), ut(r, "experimentalParseClassName", a), Tt(r.theme, n.theme), Tt(r.classGroups, n.classGroups), Tt(r.conflictingClassGroups, n.conflictingClassGroups), Tt(r.conflictingClassGroupModifiers, n.conflictingClassGroupModifiers), ut(r, "orderSensitiveModifiers", n.orderSensitiveModifiers), Et(r.theme, o.theme), Et(r.classGroups, o.classGroups), Et(r.conflictingClassGroups, o.conflictingClassGroups), Et(r.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), fn(r, o, "orderSensitiveModifiers"), r), ut = (r, e, t) => {
  t !== void 0 && (r[e] = t);
}, Tt = (r, e) => {
  if (e)
    for (const t in e)
      ut(r, t, e[t]);
}, Et = (r, e) => {
  if (e)
    for (const t in e)
      fn(r, e, t);
}, fn = (r, e, t) => {
  const a = e[t];
  a !== void 0 && (r[t] = r[t] ? r[t].concat(a) : a);
}, Ql = (r, ...e) => typeof r == "function" ? ba(fa, r, ...e) : ba(() => Jl(fa(), r), ...e), $l = /* @__PURE__ */ ba(fa);
var es = (r) => Le(r) ? $l : Ql({ ...r, extend: { theme: r.theme, classGroups: r.classGroups, conflictingClassGroupModifiers: r.conflictingClassGroupModifiers, conflictingClassGroups: r.conflictingClassGroups, ...r.extend } }), rs = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Rt = (...r) => {
  let e = [];
  pn(r, e);
  let t = "";
  for (let a = 0; a < e.length; a++) e[a] && (t && (t += " "), t += e[a]);
  return t || void 0;
};
function pn(r, e) {
  for (let t = 0; t < r.length; t++) {
    let a = r[t];
    Array.isArray(a) ? pn(a, e) : a && e.push(a);
  }
}
var aa = null, pa = {}, ma = !1, At = (...r) => (e) => {
  let t = Rt(r);
  return !t || !e.twMerge ? t : ((!aa || ma) && (ma = !1, aa = es(pa)), aa(t) || void 0);
}, ao = (r, e) => {
  for (let t in e) t in r ? r[t] = Rt(r[t], e[t]) : r[t] = e[t];
  return r;
}, h = (r, e) => {
  let { extend: t = null, slots: a = {}, variants: o = {}, compoundVariants: n = [], compoundSlots: l = [], defaultVariants: c = {} } = r, s = { ...rs, ...e }, d = t?.base ? Rt(t.base, r?.base) : r?.base, g = t?.variants && !Le(t.variants) ? tn(o, t.variants) : o, u = t?.defaultVariants && !Le(t.defaultVariants) ? { ...t.defaultVariants, ...c } : c;
  !Le(s.twMergeConfig) && !hl(s.twMergeConfig, pa) && (ma = !0, pa = s.twMergeConfig);
  let f = Le(t?.slots), y = Le(a) ? {} : { base: Rt(r?.base, f && t?.base), ...a }, b = f ? y : ao({ ...t?.slots }, Le(y) ? { base: r?.base } : y), p = Le(t?.compoundVariants) ? n : rn(t?.compoundVariants, n), x = (m) => {
    if (Le(g) && Le(a) && f) return At(d, m?.class, m?.className)(s);
    if (p && !Array.isArray(p)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof p}`);
    if (l && !Array.isArray(l)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
    let w = (P, j, O = [], z) => {
      let V = O;
      if (typeof j == "string") {
        let N = Qa(j).split(" ");
        for (let C = 0; C < N.length; C++) V.push(`${P}:${N[C]}`);
      } else if (Array.isArray(j)) for (let N = 0; N < j.length; N++) V.push(`${P}:${j[N]}`);
      else if (typeof j == "object" && typeof z == "string" && z in j) {
        let N = j[z];
        if (N && typeof N == "string") {
          let C = Qa(N).split(" "), X = [];
          for (let Y = 0; Y < C.length; Y++) X.push(`${P}:${C[Y]}`);
          V[z] = V[z] ? V[z].concat(X) : X;
        } else if (Array.isArray(N) && N.length > 0) {
          let C = [];
          for (let X = 0; X < N.length; X++) C.push(`${P}:${N[X]}`);
          V[z] = C;
        }
      }
      return V;
    }, I = (P, j = g, O = null, z = null) => {
      let V = j[P];
      if (!V || Le(V)) return null;
      let N = z?.[P] ?? m?.[P];
      if (N === null) return null;
      let C = Ja(N), X = Array.isArray(s.responsiveVariants) && s.responsiveVariants.length > 0 || s.responsiveVariants === !0, Y = u?.[P], R = [];
      if (typeof C == "object" && X) for (let [se, Be] of Object.entries(C)) {
        let Ne = V[Be];
        if (se === "initial") {
          Y = Be;
          continue;
        }
        Array.isArray(s.responsiveVariants) && !s.responsiveVariants.includes(se) || (R = w(se, Ne, R, O));
      }
      let oe = C != null && typeof C != "object" ? C : Ja(Y), Q = V[oe || "false"];
      return typeof R == "object" && typeof O == "string" && R[O] ? ao(R, Q) : R.length > 0 ? (R.push(Q), O === "base" ? R.join(" ") : R) : Q;
    }, L = () => {
      if (!g) return null;
      let P = Object.keys(g), j = [];
      for (let O = 0; O < P.length; O++) {
        let z = I(P[O], g);
        z && j.push(z);
      }
      return j;
    }, v = (P, j) => {
      if (!g || typeof g != "object") return null;
      let O = [];
      for (let z in g) {
        let V = I(z, g, P, j), N = P === "base" && typeof V == "string" ? V : V && V[P];
        N && O.push(N);
      }
      return O;
    }, E = {};
    for (let P in m) {
      let j = m[P];
      j !== void 0 && (E[P] = j);
    }
    let _ = (P, j) => {
      let O = typeof m?.[P] == "object" ? { [P]: m[P]?.initial } : {};
      return { ...u, ...E, ...O, ...j };
    }, S = (P = [], j) => {
      let O = [], z = P.length;
      for (let V = 0; V < z; V++) {
        let { class: N, className: C, ...X } = P[V], Y = !0, R = _(null, j);
        for (let oe in X) {
          let Q = X[oe], se = R[oe];
          if (Array.isArray(Q)) {
            if (!Q.includes(se)) {
              Y = !1;
              break;
            }
          } else {
            if ((Q == null || Q === !1) && (se == null || se === !1)) continue;
            if (se !== Q) {
              Y = !1;
              break;
            }
          }
        }
        Y && (N && O.push(N), C && O.push(C));
      }
      return O;
    }, B = (P) => {
      let j = S(p, P);
      if (!Array.isArray(j)) return j;
      let O = {}, z = At;
      for (let V = 0; V < j.length; V++) {
        let N = j[V];
        if (typeof N == "string") O.base = z(O.base, N)(s);
        else if (typeof N == "object") for (let C in N) O[C] = z(O[C], N[C])(s);
      }
      return O;
    }, U = (P) => {
      if (l.length < 1) return null;
      let j = {}, O = _(null, P);
      for (let z = 0; z < l.length; z++) {
        let { slots: V = [], class: N, className: C, ...X } = l[z];
        if (!Le(X)) {
          let Y = !0;
          for (let R in X) {
            let oe = O[R], Q = X[R];
            if (oe === void 0 || (Array.isArray(Q) ? !Q.includes(oe) : Q !== oe)) {
              Y = !1;
              break;
            }
          }
          if (!Y) continue;
        }
        for (let Y = 0; Y < V.length; Y++) {
          let R = V[Y];
          j[R] || (j[R] = []), j[R].push([N, C]);
        }
      }
      return j;
    };
    if (!Le(a) || !f) {
      let P = {};
      if (typeof b == "object" && !Le(b)) {
        let j = At;
        for (let O in b) P[O] = (z) => {
          let V = B(z), N = U(z);
          return j(b[O], v(O, z), V ? V[O] : void 0, N ? N[O] : void 0, z?.class, z?.className)(s);
        };
      }
      return P;
    }
    return At(d, L(), S(p), m?.class, m?.className)(s);
  }, T = () => {
    if (!(!g || typeof g != "object")) return Object.keys(g);
  };
  return x.variantKeys = T(), x.extend = t, x.base = d, x.slots = b, x.variants = g, x.defaultVariants = u, x.compoundSlots = l, x.compoundVariants = p, x;
};
const ts = h({
  base: "w-full",
  variants: {
    color: {
      primary: "text-primary-500 dark:text-primary-400",
      secondary: "text-secondary-500 dark:text-secondary-400"
    },
    flush: {
      true: "",
      false: "border border-gray-200 dark:border-gray-700 rounded-t-xl"
    }
  }
}), as = h({
  slots: {
    base: "group",
    button: "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700 border-b",
    content: "border-b border-gray-200 dark:border-gray-700",
    active: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800",
    inactive: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
  },
  variants: {
    flush: {
      true: {
        button: "py-5",
        content: "py-5"
      },
      false: {
        button: "p-5 border-s border-e group-first:border-t",
        content: "p-5 border-s border-e"
      }
    },
    open: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      flush: !0,
      open: !0,
      class: {
        button: "text-gray-900 dark:text-white"
      }
    },
    {
      flush: !0,
      open: !1,
      class: {
        button: "text-gray-500 dark:text-gray-400"
      }
    }
  ],
  defaultVariants: {
    flush: !1,
    open: !1
  }
}), mn = Symbol("dismissable");
function Ma(r) {
  return Nt(mn, {
    dismiss: r
  });
}
function os() {
  return sr(mn);
}
h({
  base: "p-4 gap-3 text-sm",
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "bg-primary-50 dark:bg-gray-800 text-primary-800 dark:text-primary-400",
      secondary: "bg-secondary-50 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-400",
      gray: "bg-gray-100 text-gray-500 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300",
      red: "bg-red-100 text-red-500 focus:ring-red-400 dark:bg-red-200 dark:text-red-600",
      orange: "bg-orange-100 text-orange-500 focus:ring-orange-400 dark:bg-orange-200 dark:text-orange-600",
      amber: "bg-amber-100 text-amber-500 focus:ring-amber-400 dark:bg-amber-200 dark:text-amber-600",
      yellow: "bg-yellow-100 text-yellow-500 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600",
      lime: "bg-lime-100 text-lime-500 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600",
      green: "bg-green-100 text-green-500 focus:ring-green-400 dark:bg-green-200 dark:text-green-600",
      emerald: "bg-emerald-100 text-emerald-500 focus:ring-emerald-400 dark:bg-emerald-200 dark:text-emerald-600",
      teal: "bg-teal-100 text-teal-500 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600",
      cyan: "bg-cyan-100 text-cyan-500 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600",
      sky: "bg-sky-100 text-sky-500 focus:ring-sky-400 dark:bg-sky-200 dark:text-sky-600",
      blue: "bg-blue-100 text-blue-500 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600",
      indigo: "bg-indigo-100 text-indigo-500 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600",
      violet: "bg-violet-100 text-violet-500 focus:ring-violet-400 dark:bg-violet-200 dark:text-violet-600",
      purple: "bg-purple-100 text-purple-500 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600",
      fuchsia: "bg-fuchsia-100 text-fuchsia-500 focus:ring-fuchsia-400 dark:bg-fuchsia-200 dark:text-fuchsia-600",
      pink: "bg-pink-100 text-pink-500 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600",
      rose: "bg-rose-100 text-rose-500 focus:ring-rose-400 dark:bg-rose-200 dark:text-rose-600"
    },
    rounded: {
      true: "rounded-lg"
    },
    border: {
      true: "border"
    },
    icon: {
      true: "flex items-center"
    },
    dismissable: {
      true: "flex items-center"
    }
  },
  compoundVariants: [
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      border: !0,
      color: "primary",
      class: "border-primary-500 dark:border-primary-200 divide-primary-500 dark:divide-primary-200"
    },
    {
      border: !0,
      color: "secondary",
      class: "border-secondary-500 dark:border-secondary-200 divide-secondary-500 dark:divide-secondary-200"
    },
    {
      border: !0,
      color: "gray",
      class: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800"
    },
    {
      border: !0,
      color: "red",
      class: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800"
    },
    {
      border: !0,
      color: "orange",
      class: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800"
    },
    {
      border: !0,
      color: "amber",
      class: "border-amber-300 dark:border-amber-800 divide-amber-300 dark:divide-amber-800"
    },
    {
      border: !0,
      color: "yellow",
      class: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800"
    },
    {
      border: !0,
      color: "lime",
      class: "border-lime-300 dark:border-lime-800 divide-lime-300 dark:divide-lime-800"
    },
    {
      border: !0,
      color: "green",
      class: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800"
    },
    {
      border: !0,
      color: "emerald",
      class: "border-emerald-300 dark:border-emerald-800 divide-emerald-300 dark:divide-emerald-800"
    },
    {
      border: !0,
      color: "teal",
      class: "border-teal-300 dark:border-teal-800 divide-teal-300 dark:divide-teal-800"
    },
    {
      border: !0,
      color: "cyan",
      class: "border-cyan-300 dark:border-cyan-800 divide-cyan-300 dark:divide-cyan-800"
    },
    {
      border: !0,
      color: "sky",
      class: "border-sky-300 dark:border-sky-800 divide-sky-300 dark:divide-sky-800"
    },
    {
      border: !0,
      color: "blue",
      class: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800"
    },
    {
      border: !0,
      color: "indigo",
      class: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800"
    },
    //  violet, purple, fuchsia, pink, rose
    {
      border: !0,
      color: "violet",
      class: "border-violet-300 dark:border-violet-800 divide-violet-300 dark:divide-violet-800"
    },
    {
      border: !0,
      color: "purple",
      class: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800"
    },
    {
      border: !0,
      color: "fuchsia",
      class: "border-fuchsia-300 dark:border-fuchsia-800 divide-fuchsia-300 dark:divide-fuchsia-800"
    },
    {
      border: !0,
      color: "pink",
      class: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800"
    },
    {
      border: !0,
      color: "rose",
      class: "border-rose-300 dark:border-rose-800 divide-rose-300 dark:divide-rose-800"
    }
  ],
  defaultVariants: {
    color: "primary",
    rounded: !0
  }
});
h({
  base: "relative flex items-center justify-center bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300",
  variants: {
    cornerStyle: {
      rounded: "rounded-sm",
      circular: "rounded-full"
    },
    border: {
      true: "p-1 ring-2 ring-gray-300 dark:ring-gray-500",
      false: ""
    },
    stacked: {
      true: "border-2 not-first:-ms-4 border-white dark:border-gray-800",
      false: ""
    },
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-20 h-20",
      xl: "w-36 h-36"
    }
  },
  defaultVariants: {
    cornerStyle: "circular",
    border: !1,
    stacked: !1,
    size: "md"
  }
});
var ns = /* @__PURE__ */ G("<a><!></a>"), ls = /* @__PURE__ */ G("<div><!> <!></div>");
function ss(r, e) {
  fe(e, !0);
  let t = M(e, "badgeStatus", 15, !0), a = M(e, "color", 3, "primary"), o = M(e, "large", 3, !1), n = M(e, "dismissable", 3, !1), l = M(e, "transition", 3, Va), c = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "icon",
    "badgeStatus",
    "color",
    "large",
    "dismissable",
    "class",
    "classes",
    "border",
    "href",
    "target",
    "rounded",
    "transition",
    "params",
    "aClass"
  ]);
  e.aClass;
  const s = /* @__PURE__ */ A(() => e.classes ?? { linkClass: e.aClass }), d = Oe("badge"), g = /* @__PURE__ */ A(() => is({
    color: a(),
    size: o() ? "large" : "small",
    rounded: e.rounded,
    border: e.border
  })), u = /* @__PURE__ */ A(() => i(g).base), f = /* @__PURE__ */ A(() => i(g).linkClass);
  let y = /* @__PURE__ */ Ve(void 0);
  Ma((m) => {
    i(y)?.dispatchEvent(new Event("close", { bubbles: !0, cancelable: !0 })) && t(!1);
  });
  var p = K(), x = D(p);
  {
    var T = (m) => {
      var w = ls();
      we(w, (S) => ({ ...c, class: S }), [
        () => i(u)({ class: te(d?.base, e.class) })
      ]);
      var I = q(w);
      {
        var L = (S) => {
          var B = ns(), U = q(B);
          J(U, () => e.children), ee(
            (P) => {
              Ye(B, "href", e.href), Ye(B, "target", e.target), Z(B, 1, P);
            },
            [
              () => $(i(f)({ class: te(d?.linkClass, i(s).linkClass) }))
            ]
          ), k(S, B);
        }, v = (S) => {
          var B = K(), U = D(B);
          J(U, () => e.children), k(S, B);
        };
        F(I, (S) => {
          e.href ? S(L) : S(v, !1);
        });
      }
      var E = ne(I, 2);
      {
        var _ = (S) => {
          var B = K(), U = D(B);
          {
            var P = (O) => {
              {
                let z = /* @__PURE__ */ A(() => o() ? "sm" : "xs");
                vt(O, {
                  class: "ms-1.5 -me-1.5",
                  get color() {
                    return a();
                  },
                  get size() {
                    return i(z);
                  },
                  ariaLabel: "Remove badge",
                  children: (V, N) => {
                    var C = K(), X = D(C);
                    J(X, () => e.icon), k(V, C);
                  },
                  $$slots: { default: !0 }
                });
              }
            }, j = (O) => {
              {
                let z = /* @__PURE__ */ A(() => o() ? "sm" : "xs");
                vt(O, {
                  class: "ms-1.5 -me-1.5",
                  get color() {
                    return a();
                  },
                  get size() {
                    return i(z);
                  },
                  ariaLabel: "Remove badge"
                });
              }
            };
            F(U, (O) => {
              e.icon ? O(P) : O(j, !1);
            });
          }
          k(S, B);
        };
        F(E, (S) => {
          n() && S(_);
        });
      }
      Lt(w, (S) => ge(y, S), () => i(y)), Ia(3, w, l, () => e.params), k(m, w);
    };
    F(x, (m) => {
      t() && m(T);
    });
  }
  k(r, p), pe();
}
const is = h({
  slots: {
    linkClass: "flex align-middle",
    base: "font-medium inline-flex items-center justify-center px-2.5 py-0.5"
  },
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: { base: "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300" },
      secondary: { base: "bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300" },
      gray: { base: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300" },
      red: { base: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
      orange: { base: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
      amber: { base: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300" },
      yellow: { base: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
      lime: { base: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300" },
      green: { base: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      emerald: { base: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300" },
      teal: { base: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300" },
      cyan: { base: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300" },
      sky: { base: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300" },
      blue: { base: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      indigo: { base: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300" },
      violet: { base: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300" },
      fuchsia: { base: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300" },
      purple: { base: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
      pink: { base: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300" },
      rose: { base: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300" }
    },
    size: {
      small: "text-xs",
      large: "text-sm"
    },
    border: {
      true: { base: "border" }
    },
    rounded: {
      true: { base: "rounded-full" },
      false: "rounded-sm"
    }
  },
  compoundVariants: [
    {
      border: !0,
      color: "primary",
      class: "dark:bg-transparent dark:text-primary-400 border-primary-400 dark:border-primary-400"
    },
    {
      border: !0,
      color: "secondary",
      class: "dark:bg-transparent dark:text-secondary-400 border-secondary-400 dark:border-secondary-400"
    },
    {
      border: !0,
      color: "gray",
      class: "dark:bg-transparent dark:text-gray-400 border-gray-400 dark:border-gray-400"
    },
    {
      border: !0,
      color: "red",
      class: "dark:bg-transparent dark:text-red-400 border-red-400 dark:border-red-400"
    },
    {
      border: !0,
      color: "orange",
      class: "dark:bg-transparent dark:text-orange-400 border-orange-400 dark:border-orange-400"
    },
    {
      border: !0,
      color: "amber",
      class: "dark:bg-transparent dark:text-amber-400 border-amber-400 dark:border-amber-400"
    },
    {
      border: !0,
      color: "yellow",
      class: "dark:bg-transparent dark:text-yellow-300 border-yellow-300 dark:border-yellow-300"
    },
    {
      border: !0,
      color: "lime",
      class: "dark:bg-transparent dark:text-lime-400 border-lime-400 dark:border-lime-400"
    },
    {
      border: !0,
      color: "green",
      class: "dark:bg-transparent dark:text-green-400 border-green-400 dark:border-green-400"
    },
    {
      border: !0,
      color: "emerald",
      class: "dark:bg-transparent dark:text-emerald-400 border-emerald-400 dark:border-emerald-400"
    },
    {
      border: !0,
      color: "teal",
      class: "dark:bg-transparent dark:text-teal-400 border-teal-400 dark:border-teal-400"
    },
    {
      border: !0,
      color: "cyan",
      class: "dark:bg-transparent dark:text-cyan-400 border-cyan-400 dark:border-cyan-400"
    },
    {
      border: !0,
      color: "sky",
      class: "dark:bg-transparent dark:text-sky-400 border-sky-400 dark:border-sky-400"
    },
    {
      border: !0,
      color: "blue",
      class: "dark:bg-transparent dark:text-blue-400 border-blue-400 dark:border-blue-400"
    },
    {
      border: !0,
      color: "indigo",
      class: "dark:bg-transparent dark:text-indigo-400 border-indigo-400 dark:border-indigo-400"
    },
    {
      border: !0,
      color: "violet",
      class: "dark:bg-transparent dark:text-violet-400 border-violet-400 dark:border-violet-400"
    },
    {
      border: !0,
      color: "purple",
      class: "dark:bg-transparent dark:text-purple-400 border-purple-400 dark:border-purple-400"
    },
    {
      border: !0,
      color: "fuchsia",
      class: "dark:bg-transparent dark:text-fuchsia-400 border-fuchsia-400 dark:border-fuchsia-400"
    },
    {
      border: !0,
      color: "pink",
      class: "dark:bg-transparent dark:text-pink-400 border-pink-400 dark:border-pink-400"
    },
    {
      border: !0,
      color: "rose",
      class: "dark:bg-transparent dark:text-rose-400 border-rose-400 dark:border-rose-400"
    },
    {
      href: !0,
      color: "primary",
      class: "hover:bg-primary-200"
    },
    {
      href: !0,
      color: "secondary",
      class: "hover:bg-secondary-200"
    },
    {
      href: !0,
      color: "gray",
      class: "hover:bg-gray-200"
    },
    {
      href: !0,
      color: "red",
      class: "hover:bg-red-200"
    },
    {
      href: !0,
      color: "orange",
      class: "hover:bg-orange-200"
    },
    {
      href: !0,
      color: "amber",
      class: "hover:bg-amber-200"
    },
    {
      href: !0,
      color: "yellow",
      class: "hover:bg-yellow-200"
    },
    {
      href: !0,
      color: "lime",
      class: "hover:bg-lime-200"
    },
    {
      href: !0,
      color: "green",
      class: "hover:bg-green-200"
    },
    {
      href: !0,
      color: "emerald",
      class: "hover:bg-emerald-200"
    },
    {
      href: !0,
      color: "teal",
      class: "hover:bg-teal-200"
    },
    {
      href: !0,
      color: "cyan",
      class: "hover:bg-cyan-200"
    },
    {
      href: !0,
      color: "sky",
      class: "hover:bg-sky-200"
    },
    {
      href: !0,
      color: "blue",
      class: "hover:bg-blue-200"
    },
    {
      href: !0,
      color: "indigo",
      class: "hover:bg-indigo-200"
    },
    {
      href: !0,
      color: "violet",
      class: "hover:bg-violet-200"
    },
    {
      href: !0,
      color: "purple",
      class: "hover:bg-purple-200"
    },
    {
      href: !0,
      color: "fuchsia",
      class: "hover:bg-fuchsia-200"
    },
    {
      href: !0,
      color: "pink",
      class: "hover:bg-pink-200"
    },
    {
      href: !0,
      color: "rose",
      class: "hover:bg-rose-200"
    }
  ],
  defaultVariants: {
    color: "primary",
    size: "small",
    rounded: !1
  }
});
h({
  slots: {
    base: "fixed z-50 flex justify-between p-4 mx-auto dark:bg-gray-700 dark:border-gray-600",
    insideDiv: "flex flex-col md:flex-row md:items-center gap-2 mx-auto",
    dismissable: "absolute end-2.5 top-2.5 md:static md:end-auto md:top-auto"
  },
  variants: {
    type: {
      top: {
        base: "top-0 start-0 w-full border-b border-gray-200 bg-gray-50"
      },
      bottom: {
        base: "bottom-0 start-0 w-full border-t border-gray-200 bg-gray-50"
      }
    },
    color: {
      // 'primary' secondary, | 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
      primary: { base: "bg-primary-50 dark:bg-primary-900" },
      secondary: { base: "bg-secondary-50 dark:bg-secondary-900" },
      gray: { base: "bg-gray-50 dark:bg-gray-700" },
      red: { base: "bg-red-50 dark:bg-red-900" },
      orange: { base: "bg-orange-50 dark:bg-orange-900" },
      amber: { base: "bg-amber-50 dark:bg-amber-900" },
      yellow: { base: "bg-yellow-50 dark:bg-yellow-900" },
      lime: { base: "bg-lime-50 dark:bg-lime-900" },
      green: { base: "bg-green-50 dark:bg-green-900" },
      emerald: { base: "bg-emerald-50 dark:bg-emerald-900" },
      teal: { base: "bg-teal-50 dark:bg-teal-900" },
      cyan: { base: "bg-cyan-50 dark:bg-cyan-900" },
      sky: { base: "bg-sky-50 dark:bg-sky-900" },
      blue: { base: "bg-blue-50 dark:bg-blue-900" },
      indigo: { base: "bg-indigo-50 dark:bg-indigo-900" },
      violet: { base: "bg-violet-50 dark:bg-violet-900" },
      purple: { base: "bg-purple-50 dark:bg-purple-900" },
      fuchsia: { base: "bg-fuchsia-50 dark:bg-fuchsia-900" },
      pink: { base: "bg-pink-50 dark:bg-pink-900" },
      rose: { base: "bg-rose-50 dark:bg-rose-900" }
    }
  },
  defaultVariants: {
    type: "top",
    multiline: !0
  }
});
h({
  slots: {
    base: "w-full z-30 border-gray-200 dark:bg-gray-700 dark:border-gray-600",
    inner: "grid h-full max-w-lg mx-auto"
  },
  variants: {
    position: {
      static: { base: "static" },
      fixed: { base: "fixed" },
      absolute: { base: "absolute" },
      relative: { base: "relative" },
      sticky: { base: "sticky" }
    },
    navType: {
      default: { base: "bottom-0 start-0 h-16 bg-white border-t" },
      border: { base: "bottom-0 start-0 h-16 bg-white border-t" },
      application: {
        base: "h-16 max-w-lg -translate-x-1/2 rtl:translate-x-1/2 bg-white border rounded-full bottom-4 start-1/2"
      },
      pagination: {
        base: "bottom-0 h-16 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2"
      },
      group: {
        base: "bottom-0 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2"
      },
      card: { base: "bottom-0 start-0 h-16 bg-white border-t" },
      meeting: {
        base: "bottom-0 start-0 grid h-16 grid-cols-1 px-8 bg-white border-t md:grid-cols-3",
        inner: "flex items-center justify-center mx-auto"
      },
      video: {
        base: "bottom-0 start-0 grid h-24 grid-cols-1 px-8 bg-white border-t md:grid-cols-3",
        inner: "flex items-center w-full"
      }
    }
  },
  defaultVariants: {
    position: "fixed",
    navType: "default"
  }
});
h({
  slots: {
    base: "inline-flex flex-col items-center justify-center",
    span: "text-sm"
  },
  variants: {
    navType: {
      default: {
        base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      },
      border: {
        base: "px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600",
        span: "text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      },
      application: {
        base: "",
        span: "sr-only"
      },
      pagination: {
        base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "sr-only"
      },
      group: {
        base: "p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "sr-only"
      },
      card: {
        base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      },
      meeting: {
        base: "",
        span: ""
      },
      video: {
        base: "",
        span: ""
      }
    },
    appBtnPosition: {
      left: {
        base: "px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
      },
      middle: { base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" },
      right: {
        base: "px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
      }
    }
  },
  defaultVariants: {
    navType: "default",
    appBtnPosition: "middle",
    active: !1
  }
});
h({
  slots: {
    base: "w-full",
    innerDiv: "grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600"
  }
});
h({
  base: "px-5 py-1.5 text-xs font-medium rounded-lg",
  variants: {
    active: {
      true: "text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900",
      false: "text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
    }
  }
});
h({
  slots: {
    base: "flex",
    list: "inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse"
  },
  variants: {
    solid: {
      true: {
        base: "px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      },
      false: ""
    }
  },
  defaultVariants: {
    solid: !1
  }
});
h({
  slots: {
    base: "inline-flex items-center",
    separator: "h-6 w-6 text-gray-400 rtl:-scale-x-100"
  },
  variants: {
    home: {
      true: "",
      false: ""
    },
    hasHref: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      home: !0,
      class: {
        base: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
        separator: "me-2 h-4 w-4"
      }
    },
    {
      home: !1,
      hasHref: !0,
      class: {
        base: "ms-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ms-2 dark:text-gray-400 dark:hover:text-white"
      }
    },
    {
      home: !1,
      hasHref: !1,
      class: {
        base: "ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
      }
    }
  ]
});
h({
  base: "inline-flex rounded-lg shadow-xs",
  variants: {
    size: {
      sm: "scale-90",
      md: "scale-100",
      lg: "scale-110"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var ds = /* @__PURE__ */ hr('<svg class="ml-2 h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), gs = /* @__PURE__ */ G("<button><!> <!></button>"), cs = /* @__PURE__ */ G("<a><!></a>");
function us(r, e) {
  fe(e, !0);
  const t = sr("group"), a = sr("disabled");
  let o = M(e, "outline", 3, !1), n = M(e, "size", 3, "md"), l = M(e, "shadow", 3, !1), c = M(e, "tag", 3, "button"), s = M(e, "loading", 3, !1), d = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "pill",
    "outline",
    "size",
    "color",
    "shadow",
    "tag",
    "disabled",
    "loading",
    "class"
  ]);
  const g = Oe("button");
  let u = /* @__PURE__ */ A(() => t ? "sm" : n()), f = /* @__PURE__ */ A(() => e.color ?? (t ? o() ? "dark" : "alternative" : "primary")), y = /* @__PURE__ */ A(() => !!a || !!e.disabled || s());
  const b = /* @__PURE__ */ A(() => bs({
    color: i(f),
    size: i(u),
    disabled: i(y),
    pill: e.pill,
    group: !!t
  })), p = /* @__PURE__ */ A(() => i(b).base), x = /* @__PURE__ */ A(() => i(b).outline), T = /* @__PURE__ */ A(() => i(b).shadow);
  let m = /* @__PURE__ */ A(() => i(p)({
    class: te(o() && i(x)(), l() && i(T)(), g?.base, e.class)
  }));
  var w = K(), I = D(w);
  {
    var L = (E) => {
      var _ = gs();
      we(_, () => ({
        type: "button",
        ...d,
        class: i(m),
        disabled: i(y)
      }));
      var S = q(_);
      J(S, () => e.children ?? Te);
      var B = ne(S, 2);
      {
        var U = (P) => {
          var j = ds();
          k(P, j);
        };
        F(B, (P) => {
          s() && P(U);
        });
      }
      k(E, _);
    }, v = (E) => {
      var _ = K(), S = D(_);
      {
        var B = (P) => {
          var j = cs();
          we(j, () => ({ ...d, class: i(m), role: "button" }));
          var O = q(j);
          J(O, () => e.children ?? Te), k(P, j);
        }, U = (P) => {
          var j = K(), O = D(j);
          Wo(O, c, !1, (z, V) => {
            we(z, () => ({ ...d, class: i(m) }));
            var N = K(), C = D(N);
            J(C, () => e.children ?? Te), k(V, N);
          }), k(P, j);
        };
        F(
          S,
          (P) => {
            e.href ? P(B) : P(U, !1);
          },
          !0
        );
      }
      k(E, _);
    };
    F(I, (E) => {
      e.href === void 0 ? E(L) : E(v, !1);
    });
  }
  k(r, w), pe();
}
const bs = h({
  slots: {
    base: "text-center font-medium inline-flex items-center justify-center",
    outline: "bg-transparent border hover:text-white dark:bg-transparent dark:hover-text-white",
    shadow: "shadow-lg"
  },
  variants: {
    color: {
      // "primary" | "dark" | "alternative" | "light" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose"
      primary: {
        base: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus-within:ring-primary-300 dark:focus-within:ring-primary-800",
        outline: "text-primary-700 border-primary-700 hover:bg-primary-800 dark:border-primary-500 dark:text-primary-500 dark:hover:bg-primary-600",
        shadow: "shadow-primary-500/50 dark:shadow-primary-800/80"
      },
      dark: {
        base: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 focus-within:ring-gray-300 dark:focus-within:ring-gray-700",
        outline: "text-gray-900 border-gray-800 hover:bg-gray-900 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600",
        shadow: "shadow-gray-500/50 gray:shadow-gray-800/80"
      },
      alternative: {
        base: "text-gray-900 bg-transparent border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white dark:hover:bg-gray-700 focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
        outline: "text-gray-700 border-gray-700 hover:bg-gray-800 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-500",
        shadow: "_shadow-gray-500/50 dark:shadow-gray-800/80"
      },
      light: {
        base: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
        outline: "text-gray-700 border-gray-700 hover:bg-gray-800 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-500",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80"
      },
      secondary: {
        base: "text-white bg-secondary-700 hover:bg-secondary-800 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus-within:ring-secondary-300 dark:focus-within:ring-secondary-800",
        outline: "text-secondary-700 border-secondary-700 hover:bg-secondary-800 dark:border-secondary-400 dark:text-secondary-400 dark:hover:bg-secondary-500",
        shadow: "shadow-secondary-500/50 dark:shadow-secondary-800/80"
      },
      gray: {
        base: "text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 focus-within:ring-gray-300 dark:focus-within:ring-gray-800",
        outline: "text-gray-700 border-gray-700 hover:bg-gray-800 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-500",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80"
      },
      red: {
        base: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 focus-within:ring-red-300 dark:focus-within:ring-red-900",
        outline: "text-red-700 border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600",
        shadow: "shadow-red-500/50 dark:shadow-red-800/80"
      },
      orange: {
        base: "text-white bg-orange-700 hover:bg-orange-800 dark:bg-orange-600 dark:hover:bg-orange-700 focus-within:ring-orange-300 dark:focus-within:ring-orange-900",
        outline: "text-orange-700 border-orange-700 hover:bg-orange-800 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-500",
        shadow: "shadow-orange-500/50 dark:shadow-orange-800/80"
      },
      amber: {
        base: "text-white bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 focus-within:ring-amber-300 dark:focus-within:ring-amber-900",
        outline: "text-amber-700 border-amber-700 hover:bg-amber-800 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-500",
        shadow: "shadow-amber-500/50 dark:shadow-amber-800/80"
      },
      yellow: {
        base: "text-white bg-yellow-400 hover:bg-yellow-500 focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",
        outline: "text-yellow-400 border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-400",
        shadow: "shadow-yellow-500/50 dark:shadow-yellow-800/80"
      },
      lime: {
        base: "text-white bg-lime-700 hover:bg-lime-800 dark:bg-lime-600 dark:hover:bg-lime-700 focus-within:ring-lime-300 dark:focus-within:ring-lime-800",
        outline: "text-lime-700 border-lime-700 hover:bg-lime-800 dark:border-lime-400 dark:text-lime-400 dark:hover:bg-lime-500",
        shadow: "shadow-lime-500/50 dark:shadow-lime-800/80"
      },
      green: {
        base: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 focus-within:ring-green-300 dark:focus-within:ring-green-800",
        outline: "text-green-700 border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600",
        shadow: "shadow-green-500/50 dark:shadow-green-800/80"
      },
      emerald: {
        base: "text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 focus-within:ring-emerald-300 dark:focus-within:ring-emerald-800",
        outline: "text-emerald-700 border-emerald-700 hover:bg-emerald-800 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-500",
        shadow: "shadow-emerald-500/50 dark:shadow-emerald-800/80"
      },
      teal: {
        base: "text-white bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 focus-within:ring-teal-300 dark:focus-within:ring-teal-800",
        outline: "text-teal-700 border-teal-700 hover:bg-teal-800 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-500",
        shadow: "shadow-teal-500/50 dark:shadow-teal-800/80"
      },
      cyan: {
        base: "text-white bg-cyan-700 hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus-within:ring-cyan-300 dark:focus-within:ring-cyan-800",
        outline: "text-cyan-700 border-cyan-700 hover:bg-cyan-800 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-500",
        shadow: "shadow-cyan-500/50 dark:shadow-cyan-800/80"
      },
      sky: {
        base: "text-white bg-sky-700 hover:bg-sky-800 dark:bg-sky-600 dark:hover:bg-sky-700 focus-within:ring-sky-300 dark:focus-within:ring-sky-800",
        outline: "text-sky-700 border-sky-700 hover:bg-sky-800 dark:border-sky-400 dark:text-sky-400 dark:hover:bg-sky-500",
        shadow: "shadow-sky-500/50 dark:shadow-sky-800/80"
      },
      blue: {
        base: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus-within:ring-blue-300 dark:focus-within:ring-blue-800",
        outline: "text-blue-700 border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500",
        shadow: "shadow-blue-500/50 dark:shadow-blue-800/80"
      },
      indigo: {
        base: "text-white bg-indigo-700 hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus-within:ring-indigo-300 dark:focus-within:ring-indigo-800",
        outline: "text-indigo-700 border-indigo-700 hover:bg-indigo-800 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-500",
        shadow: "shadow-indigo-500/50 dark:shadow-indigo-800/80"
      },
      violet: {
        base: "text-white bg-violet-700 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 focus-within:ring-violet-300 dark:focus-within:ring-violet-800",
        outline: "text-violet-700 border-violet-700 hover:bg-violet-800 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-500",
        shadow: "shadow-violet-500/50 dark:shadow-violet-800/80"
      },
      purple: {
        base: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
        outline: "text-purple-700 border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-500",
        shadow: "shadow-purple-500/50 dark:shadow-purple-800/80"
      },
      fuchsia: {
        base: "text-white bg-fuchsia-700 hover:bg-fuchsia-800 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700",
        outline: "text-fuchsia-700 border-fuchsia-700 hover:bg-fuchsia-800 dark:border-fuchsia-400 dark:text-fuchsia-400 dark:hover:bg-fuchsia-500",
        shadow: "shadow-fuchsia-500/50 dark:shadow-fuchsia-800/80"
      },
      pink: {
        base: "text-white bg-pink-700 hover:bg-pink-800 dark:bg-pink-600 dark:hover:bg-pink-700",
        outline: "text-pink-700 border-pink-700 hover:bg-pink-800 dark:border-pink-400 dark:text-pink-400 dark:hover:bg-pink-500",
        shadow: "shadow-pink-500/50 dark:shadow-pink-800/80"
      },
      rose: {
        base: "text-white bg-rose-700 hover:bg-rose-800 dark:bg-rose-600 dark:hover:bg-rose-700",
        outline: "text-rose-700 border-rose-700 hover:bg-rose-800 dark:border-rose-400 dark:text-rose-400 dark:hover:bg-rose-500",
        shadow: "shadow-rose-500/50 dark:shadow-rose-800/80"
      }
    },
    size: {
      xs: "px-3 py-2 text-xs",
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-5 py-3 text-base",
      xl: "px-6 py-3.5 text-base"
    },
    group: {
      true: "focus-within:ring-2 focus-within:z-10 [&:not(:first-child)]:rounded-s-none [&:not(:last-child)]:rounded-e-none [&:not(:last-child)]:border-e-0",
      false: "focus-within:ring-4 focus-within:outline-hidden"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: ""
    },
    pill: {
      true: "rounded-full",
      false: "rounded-lg"
    },
    checked: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [],
  defaultVariants: {
    pill: !1
  }
});
h({
  slots: {
    base: "inline-flex items-center justify-center transition-all duration-75 ease-in text-white bg-linear-to-r ",
    outlineWrapper: "inline-flex items-center justify-center w-full border-0!"
  },
  variants: {
    color: {
      blue: { base: "from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-blue-300 dark:focus:ring-blue-800" },
      green: { base: "from-green-400 via-green-500 to-green-600 hover:bg-linear-to-br focus:ring-green-300 dark:focus:ring-green-800" },
      cyan: { base: "text-white bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-linear-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800" },
      teal: { base: "text-white bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br focus:ring-teal-300 dark:focus:ring-teal-800" },
      lime: { base: "text-gray-900 bg-linear-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-linear-to-br focus:ring-lime-300 dark:focus:ring-lime-800" },
      red: { base: "text-white bg-linear-to-r from-red-400 via-red-500 to-red-600 hover:bg-linear-to-br focus:ring-red-300 dark:focus:ring-red-800" },
      pink: { base: "text-white bg-linear-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-linear-to-br focus:ring-pink-300 dark:focus:ring-pink-800" },
      purple: { base: "text-white bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-linear-to-br focus:ring-purple-300 dark:focus:ring-purple-800" },
      purpleToBlue: { base: "text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-blue-300 dark:focus:ring-blue-800" },
      cyanToBlue: { base: "text-white bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-linear-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800" },
      greenToBlue: { base: "text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:ring-green-200 dark:focus:ring-green-800" },
      purpleToPink: { base: "text-white bg-linear-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-purple-200 dark:focus:ring-purple-800" },
      pinkToOrange: { base: "text-white bg-linear-to-br from-pink-500 to-orange-400 hover:bg-linear-to-bl focus:ring-pink-200 dark:focus:ring-pink-800" },
      tealToLime: { base: "text-gray-900 bg-linear-to-r from-teal-200 to-lime-200 hover:bg-linear-to-l focus:ring-lime-200 dark:focus:ring-teal-700" },
      redToYellow: { base: "text-gray-900 bg-linear-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-linear-to-bl focus:ring-red-100 dark:focus:ring-red-400" }
    },
    outline: {
      true: {
        base: "p-0.5",
        outlineWrapper: "bg-white text-gray-900! dark:bg-gray-900 dark:text-white! hover:bg-transparent hover:text-inherit! group-hover:opacity-0! group-hover:text-inherit!"
      }
    },
    pill: {
      true: {
        base: "rounded-full",
        outlineWrapper: "rounded-full"
      },
      false: {
        base: "rounded-lg",
        outlineWrapper: "rounded-lg"
      }
    },
    size: {
      xs: "px-3 py-2 text-xs",
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-5 py-3 text-base",
      xl: "px-6 py-3.5 text-base"
    },
    shadow: {
      true: {
        base: "shadow-lg"
      }
    },
    group: {
      true: "rounded-none",
      false: ""
    },
    disabled: {
      true: { base: "opacity-50 cursor-not-allowed" }
    }
  },
  compoundVariants: [
    {
      shadow: !0,
      color: "blue",
      class: { base: "shadow-blue-500/50 dark:shadow-blue-800/80" }
    },
    {
      shadow: !0,
      color: "green",
      class: { base: "shadow-green-500/50 dark:shadow-green-800/80" }
    },
    {
      shadow: !0,
      color: "cyan",
      class: { base: "shadow-cyan-500/50 dark:shadow-cyan-800/80" }
    },
    {
      shadow: !0,
      color: "teal",
      class: { base: "shadow-teal-500/50 dark:shadow-teal-800/80" }
    },
    {
      shadow: !0,
      color: "lime",
      class: { base: "shadow-lime-500/50 dark:shadow-lime-800/80" }
    },
    {
      shadow: !0,
      color: "red",
      class: { base: "shadow-red-500/50 dark:shadow-red-800/80" }
    },
    {
      shadow: !0,
      color: "pink",
      class: { base: "shadow-pink-500/50 dark:shadow-pink-800/80" }
    },
    {
      shadow: !0,
      color: "purple",
      class: { base: "shadow-purple-500/50 dark:shadow-purple-800/80" }
    },
    {
      shadow: !0,
      color: "purpleToBlue",
      class: { base: "shadow-blue-500/50 dark:shadow-blue-800/80" }
    },
    {
      shadow: !0,
      color: "cyanToBlue",
      class: { base: "shadow-cyan-500/50 dark:shadow-cyan-800/80" }
    },
    {
      shadow: !0,
      color: "greenToBlue",
      class: { base: "shadow-green-500/50 dark:shadow-green-800/80" }
    },
    {
      shadow: !0,
      color: "purpleToPink",
      class: { base: "shadow-purple-500/50 dark:shadow-purple-800/80" }
    },
    {
      shadow: !0,
      color: "pinkToOrange",
      class: { base: "shadow-pink-500/50 dark:shadow-pink-800/80" }
    },
    {
      shadow: !0,
      color: "tealToLime",
      class: { base: "shadow-lime-500/50 dark:shadow-teal-800/80" }
    },
    {
      shadow: !0,
      color: "redToYellow",
      class: { base: "shadow-red-500/50 dark:shadow-red-800/80" }
    },
    {
      group: !0,
      pill: !0,
      class: "first:rounded-s-full last:rounded-e-full"
    },
    {
      group: !0,
      pill: !1,
      class: "first:rounded-s-lg last:rounded-e-lg"
    }
  ]
});
var fs = /* @__PURE__ */ G("<img/> <!>", 1), ps = /* @__PURE__ */ G("<div><!></div>"), ms = /* @__PURE__ */ G("<a><!></a>");
function ys(r, e) {
  fe(e, !0);
  const t = (m) => {
    var w = K(), I = D(w);
    {
      var L = (E) => {
        var _ = fs(), S = D(_), B = ne(S, 2);
        J(B, () => e.children), ee(
          (U) => {
            Z(S, 1, U), Ye(S, "src", e.img), Ye(S, "alt", e.img);
          },
          [
            () => $(i(y)({ class: te(g?.image, i(d).image) }))
          ]
        ), k(E, _);
      }, v = (E) => {
        var _ = K(), S = D(_);
        J(S, () => e.children), k(E, _);
      };
      F(I, (E) => {
        e.img ? E(L) : E(v, !1);
      });
    }
    k(m, w);
  };
  let a = M(e, "color", 3, "gray"), o = M(e, "horizontal", 3, !1), n = M(e, "shadow", 3, "md"), l = M(e, "reverse", 3, !1), c = M(e, "size", 3, "sm"), s = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "color",
    "horizontal",
    "shadow",
    "reverse",
    "img",
    "size",
    "class",
    "classes",
    "imgClass"
  ]);
  e.imgClass;
  const d = /* @__PURE__ */ A(() => e.classes ?? { image: e.imgClass }), g = Oe("card"), u = /* @__PURE__ */ A(() => hs({
    size: c(),
    color: a(),
    shadow: n(),
    horizontal: o(),
    reverse: l(),
    href: !!e.href
  })), f = /* @__PURE__ */ A(() => i(u).base), y = /* @__PURE__ */ A(() => i(u).image);
  var b = K(), p = D(b);
  {
    var x = (m) => {
      var w = ps();
      we(w, (L) => ({ ...s, class: L }), [
        () => i(f)({ class: te(g?.base, e.class) })
      ]);
      var I = q(w);
      t(I), k(m, w);
    }, T = (m) => {
      var w = ms();
      we(w, (L) => ({ ...s, class: L }), [
        () => i(f)({ class: te(g?.base, e.class) })
      ]);
      var I = q(w);
      t(I), k(m, w);
    };
    F(p, (m) => {
      e.href === void 0 ? m(x) : m(T, !1);
    });
  }
  k(r, b), pe();
}
const hs = h({
  slots: {
    base: "w-full flex max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700",
    image: "rounded-t-lg"
  },
  variants: {
    size: {
      xs: { base: "max-w-xs" },
      sm: { base: "max-w-sm" },
      md: { base: "max-w-lg" },
      lg: { base: "max-w-2xl" },
      xl: { base: "max-w-none" }
    },
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      gray: { base: "border-gray-200 dark:bg-gray-800 dark:border-gray-700" },
      primary: { base: "border-primary-200 bg-primary-400 dark:bg-primary-800 dark:border-primary-700" },
      secondary: { base: "border-secondary-200 bg-secondary-400 dark:bg-secondary-800 dark:border-secondary-700" },
      red: { base: "border-red-200 bg-red-400 dark:bg-red-800 dark:border-red-700" },
      orange: { base: "border-orange-200 bg-orange-400 dark:bg-orange-800 dark:border-orange-700" },
      amber: { base: "border-amber-200 bg-amber-400 dark:bg-amber-800 dark:border-amber-700" },
      yellow: { base: "border-yellow-200 bg-yellow-400 dark:bg-yellow-800 dark:border-yellow-700" },
      lime: { base: "border-lime-200 bg-lime-400 dark:bg-lime-800 dark:border-lime-700" },
      green: { base: "border-green-200 bg-green-400 dark:bg-green-800 dark:border-green-700" },
      emerald: { base: "border-emerald-200 bg-emerald-400 dark:bg-emerald-800 dark:border-emerald-700" },
      teal: { base: "border-teal-200 bg-teal-400 dark:bg-teal-800 dark:border-teal-700" },
      cyan: { base: "border-cyan-200 bg-cyan-400 dark:bg-cyan-800 dark:border-cyan-700" },
      sky: { base: "border-sky-200 bg-sky-400 dark:bg-sky-800 dark:border-sky-700" },
      blue: { base: "border-blue-200 bg-blue-400 dark:bg-blue-800 dark:border-blue-700" },
      indigo: { base: "border-indigo-200 bg-indigo-400 dark:bg-indigo-800 dark:border-indigo-700" },
      violet: { base: "border-violet-200 bg-violet-400 dark:bg-violet-800 dark:border-violet-700" },
      purple: { base: "border-purple-200 bg-purple-400 dark:bg-purple-800 dark:border-purple-700" },
      fuchsia: { base: "border-fuchsia-200 bg-fuchsia-400 dark:bg-fuchsia-800 dark:border-fuchsia-700" },
      pink: { base: "border-pink-200 bg-pink-400 dark:bg-pink-800 dark:border-pink-700" },
      rose: { base: "border-rose-200 bg-rose-400 dark:bg-rose-800 dark:border-rose-700" }
    },
    shadow: {
      sm: { base: "shadow-md" },
      normal: { base: "shadow-sm" },
      md: { base: "shadow-md" },
      lg: { base: "shadow-lg" },
      xl: { base: "shadow-xl" },
      "2xl": { base: "shadow-2xl" },
      inner: { base: "shadow-inner" }
    },
    horizontal: {
      true: {
        base: "md:flex-row",
        image: "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none"
      }
    },
    reverse: {
      true: { base: "flex-col-reverse", image: "rounded-b-lg rounded-tl-none" },
      false: { base: "flex-col", image: "rounded-t-lg" }
    },
    href: {
      true: "",
      false: ""
    },
    hasImage: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      horizontal: !0,
      reverse: !0,
      class: { base: "md:flex-row-reverse", image: "md:rounded-e-lg" }
    },
    {
      horizontal: !0,
      reverse: !1,
      class: { base: "md:flex-row", image: "md:rounded-s-lg" }
    },
    // gray, primary, secondary, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      href: !0,
      color: "gray",
      class: { base: "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" }
    },
    {
      href: !0,
      color: "primary",
      class: { base: "cursor-pointer hover:bg-primary-500 dark:hover:bg-primary-700" }
    },
    {
      href: !0,
      color: "secondary",
      class: { base: "cursor-pointer hover:bg-secondary-500 dark:hover:bg-secondary-700" }
    },
    {
      href: !0,
      color: "red",
      class: { base: "cursor-pointer hover:bg-red-500 dark:hover:bg-red-700" }
    },
    {
      href: !0,
      color: "orange",
      class: { base: "cursor-pointer hover:bg-orange-500 dark:hover:bg-orange-700" }
    },
    {
      href: !0,
      color: "amber",
      class: { base: "cursor-pointer hover:bg-amber-500 dark:hover:bg-amber-700" }
    },
    {
      href: !0,
      color: "yellow",
      class: { base: "cursor-pointer hover:bg-yellow-500 dark:hover:bg-yellow-700" }
    },
    {
      href: !0,
      color: "lime",
      class: { base: "cursor-pointer hover:bg-lime-500 dark:hover:bg-lime-700" }
    },
    {
      href: !0,
      color: "green",
      class: { base: "cursor-pointer hover:bg-green-500 dark:hover:bg-green-700" }
    },
    {
      href: !0,
      color: "emerald",
      class: { base: "cursor-pointer hover:bg-emerald-500 dark:hover:bg-emerald-700" }
    },
    {
      href: !0,
      color: "teal",
      class: { base: "cursor-pointer hover:bg-teal-500 dark:hover:bg-teal-700" }
    },
    {
      href: !0,
      color: "cyan",
      class: { base: "cursor-pointer hover:bg-cyan-500 dark:hover:bg-cyan-700" }
    },
    {
      href: !0,
      color: "sky",
      class: { base: "cursor-pointer hover:bg-sky-500 dark:hover:bg-sky-700" }
    },
    {
      href: !0,
      color: "blue",
      class: { base: "cursor-pointer hover:bg-blue-500 dark:hover:bg-blue-700" }
    },
    {
      href: !0,
      color: "indigo",
      class: { base: "cursor-pointer hover:bg-indigo-500 dark:hover:bg-indigo-700" }
    },
    {
      href: !0,
      color: "violet",
      class: { base: "cursor-pointer hover:bg-violet-500 dark:hover:bg-violet-700" }
    },
    {
      href: !0,
      color: "purple",
      class: { base: "cursor-pointer hover:bg-purple-500 dark:hover:bg-purple-700" }
    },
    {
      href: !0,
      color: "fuchsia",
      class: { base: "cursor-pointer hover:bg-fuchsia-500 dark:hover:bg-fuchsia-700" }
    },
    {
      href: !0,
      color: "pink",
      class: { base: "cursor-pointer hover:bg-pink-500 dark:hover:bg-pink-700" }
    },
    {
      href: !0,
      color: "rose",
      class: { base: "cursor-pointer hover:bg-rose-500 dark:hover:bg-rose-700" }
    }
  ],
  defaultVariants: {
    size: "sm",
    shadow: "normal",
    horizontal: !1,
    reverse: !1
  }
});
h({
  slots: {
    base: "grid overflow-hidden relative rounded-lg h-56 sm:h-64 xl:h-80 2xl:h-96",
    slide: ""
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {}
});
h({
  slots: {
    base: "absolute start-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:translate-x-1/2 rtl:space-x-reverse",
    indicator: "bg-gray-100 hover:bg-gray-300"
  },
  variants: {
    selected: {
      true: { indicator: "opacity-100" },
      false: { indicator: "opacity-60" }
    },
    position: {
      top: { base: "top-5" },
      bottom: { base: "bottom-5" }
    }
  }
});
h({
  slots: {
    base: "flex absolute top-0 z-30 justify-center items-center px-4 h-full group focus:outline-hidden text-white dark:text-gray-300",
    span: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-hidden sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
  },
  variants: {
    forward: {
      true: "end-0",
      false: "start-0"
    }
  }
});
h({
  base: "flex flex-row justify-center bg-gray-100 w-full"
});
h({
  base: "",
  variants: {
    selected: {
      true: "opacity-100",
      false: "opacity-60"
    }
  },
  defaultVariants: {
    selected: !1
  }
});
h({
  base: "absolute block w-full h-full",
  variants: {
    fit: {
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      none: "object-none",
      "scale-down": "object-scale-down"
    }
  },
  defaultVariants: {
    fit: "cover"
  }
});
Ie(["click"]);
Ie(["click"]);
h({
  base: "gap-2",
  variants: {
    embedded: {
      true: "px-1 py-1 focus-within:ring-0 bg-transparent hover:bg-transparent text-inherit",
      false: ""
    }
  },
  defaultVariants: {
    embedded: !1
  }
});
h({
  base: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-hidden rounded-lg text-sm p-2.5"
});
h({
  slots: {
    base: "inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4",
    input: "w-full rounded-md border px-4 py-2 text-sm focus:ring-2 focus:outline-none outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white disabled:cursor-not-allowed disabled:opacity-50",
    titleVariant: "mb-2 text-lg font-semibold text-gray-900 dark:text-white",
    polite: "text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200",
    button: "absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-hidden dark:text-gray-400",
    actionButtons: "mt-4 flex justify-between",
    columnHeader: "text-center text-sm font-medium text-gray-500 dark:text-gray-400",
    grid: "grid grid-cols-7 gap-1 w-64",
    nav: "mb-4 flex items-center justify-between",
    dayButton: "h-8 w-full block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center font-semibold text-sm day p-0",
    monthButton: "rounded-lg px-3 py-2 text-sm hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-700"
  },
  variants: {
    color: {
      primary: { input: "focus:ring-primary-500 dark:focus:ring-primary-400", dayButton: "bg-primary-100 dark:bg-primary-900" },
      blue: { input: "focus:ring-blue-500 dark:focus:ring-blue-400", dayButton: "bg-blue-100 dark:bg-blue-900" },
      red: { input: "focus:ring-red-500 dark:focus:ring-red-400", dayButton: "bg-red-100 dark:bg-red-900" },
      green: { input: "focus:ring-green-500 dark:focus:ring-green-400", dayButton: "bg-green-100 dark:bg-green-900" },
      yellow: { input: "focus:ring-yellow-500 dark:focus:ring-yellow-400", dayButton: "bg-yellow-100 dark:bg-yellow-900" },
      purple: { input: "focus:ring-purple-500 dark:focus:ring-purple-400", dayButton: "bg-purple-100 dark:bg-purple-900" },
      dark: { input: "focus:ring-gray-500 dark:focus:ring-gray-400", dayButton: "bg-gray-100 dark:bg-gray-900" },
      light: { input: "focus:ring-gray-500 dark:focus:ring-gray-400", dayButton: "bg-gray-100 dark:bg-gray-900" },
      alternative: { input: "focus:ring-alternative-500 dark:focus:ring-alternative-400", dayButton: "bg-alternative-100 dark:bg-alternative-900" },
      secondary: { input: "focus:ring-secondary-500 dark:focus:ring-secondary-400", dayButton: "bg-secondary-100 dark:bg-secondary-900" },
      gray: { input: "focus:ring-gray-500 dark:focus:ring-gray-400", dayButton: "bg-gray-100 dark:bg-gray-900" },
      orange: { input: "focus:ring-orange-500 dark:focus:ring-orange-400", dayButton: "bg-orange-100 dark:bg-orange-900" },
      amber: { input: "focus:ring-amber-500 dark:focus:ring-amber-400", dayButton: "bg-amber-100 dark:bg-amber-900" },
      lime: { input: "focus:ring-lime-500 dark:focus:ring-lime-400", dayButton: "bg-lime-100 dark:bg-lime-900" },
      emerald: { input: "focus:ring-emerald-500 dark:focus:ring-emerald-400", dayButton: "bg-emerald-100 dark:bg-emerald-900" },
      teal: { input: "focus:ring-teal-500 dark:focus:ring-teal-400", dayButton: "bg-teal-100 dark:bg-teal-900" },
      cyan: { input: "focus:ring-cyan-500 dark:focus:ring-cyan-400", dayButton: "bg-cyan-100 dark:bg-cyan-900" },
      sky: { input: "focus:ring-sky-500 dark:focus:ring-sky-400", dayButton: "bg-sky-100 dark:bg-sky-900" },
      indigo: { input: "focus:ring-indigo-500 dark:focus:ring-indigo-400", dayButton: "bg-indigo-100 dark:bg-indigo-900" },
      violet: { input: "focus:ring-violet-500 dark:focus:ring-violet-400", dayButton: "bg-violet-100 dark:bg-violet-900" },
      fuchsia: { input: "focus:ring-fuchsia-500 dark:focus:ring-fuchsia-400", dayButton: "bg-fuchsia-100 dark:bg-fuchsia-900" },
      pink: { input: "focus:ring-pink-500 dark:focus:ring-pink-400", dayButton: "bg-pink-100 dark:bg-pink-900" },
      rose: { input: "focus:ring-rose-500 dark:focus:ring-rose-400", dayButton: "bg-rose-100 dark:bg-rose-900" }
    },
    inline: {
      false: { base: "absolute z-10 mt-1" }
    },
    current: {
      true: { dayButton: "text-gray-400 dark:text-gray-500" }
    },
    today: {
      true: { dayButton: "font-bold" }
    },
    unavailable: {
      true: { dayButton: "opacity-50 cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700" }
    }
  },
  compoundVariants: []
});
Ie(["change", "keydown", "click"]);
h({
  slots: {
    base: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl",
    slot: "rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800",
    top: "w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute",
    leftTop: "h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg",
    leftMid: "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg",
    leftBot: "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg",
    right: "h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
  }
});
h({
  slots: {
    base: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]",
    slot: "rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800",
    top: "h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg",
    leftTop: "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg",
    leftBot: "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg",
    right: "h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
  }
});
h({
  slots: {
    base: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]",
    inner: "rounded-xl overflow-hidden h-[140px] md:h-[262px]",
    bot: "relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]",
    botUnder: "relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"
  }
});
h({
  slots: {
    base: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl",
    slot: "rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800",
    top: "w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute",
    leftTop: "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg",
    leftBot: "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg",
    right: "h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
  }
});
h({
  slots: {
    base: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]",
    inner: "rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800",
    bot: "relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]",
    botCen: "absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"
  }
});
h({
  slots: {
    base: "relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]",
    slot: "rounded-[2rem] overflow-hidden h-[193px] w-[188px]",
    rightTop: "h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg",
    rightBot: "h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg",
    top: "relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]",
    bot: "relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]"
  }
});
h({
  slots: {
    base: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]",
    slot: "rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800",
    leftTop: "h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg",
    leftMid: "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg",
    leftBot: "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg",
    right: "h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
  }
});
const vs = h({
  base: "focus:outline-hidden whitespace-normal",
  variants: {
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    color: {
      primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
      secondary: "text-secondary-500 focus:ring-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-800 dark:hover:text-secondary-300",
      gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
      red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
      orange: "text-orange-500 focus:ring-orange-400 hover:bg-orange-200 dark:hover:bg-orange-800 dark:hover:text-orange-300",
      amber: "text-amber-500 focus:ring-amber-400 hover:bg-amber-200 dark:hover:bg-amber-800 dark:hover:text-amber-300",
      yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
      lime: "text-lime-500 focus:ring-lime-400 hover:bg-lime-200 dark:hover:bg-lime-800 dark:hover:text-lime-300",
      green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
      emerald: "text-emerald-500 focus:ring-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-800 dark:hover:text-emerald-300",
      teal: "text-teal-500 focus:ring-teal-400 hover:bg-teal-200 dark:hover:bg-teal-800 dark:hover:text-teal-300",
      cyan: "text-cyan-500 focus:ring-cyan-400 hover:bg-cyan-200 dark:hover:bg-cyan-800 dark:hover:text-cyan-300",
      sky: "text-sky-500 focus:ring-sky-400 hover:bg-sky-200 dark:hover:bg-sky-800 dark:hover:text-sky-300",
      blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
      indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
      violet: "text-violet-500 focus:ring-violet-400 hover:bg-violet-200 dark:hover:bg-violet-800 dark:hover:text-violet-300",
      purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
      fuchsia: "text-fuchsia-500 focus:ring-fuchsia-400 hover:bg-fuchsia-200 dark:hover:bg-fuchsia-800 dark:hover:text-fuchsia-300",
      pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
      rose: "text-rose-500 focus:ring-rose-400 hover:bg-rose-200 dark:hover:bg-rose-800 dark:hover:text-rose-300",
      none: ""
    },
    size: {
      xs: "m-0.5 rounded-xs focus:ring-1 p-0.5",
      sm: "m-0.5 rounded-sm focus:ring-1 p-0.5",
      md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
      lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
    }
  },
  defaultVariants: {
    color: "gray",
    size: "md",
    href: null
  },
  slots: {
    svg: ""
  },
  compoundVariants: [
    {
      size: "xs",
      class: {
        svg: "w-3 h-3"
      }
    },
    {
      size: "sm",
      class: {
        svg: "w-3.5 h-3.5"
      }
    },
    {
      size: ["md", "lg"],
      class: {
        svg: "w-5 h-5"
      }
    },
    {
      size: ["xs", "sm", "md", "lg"],
      color: "none",
      class: "focus:ring-0 rounded-none m-0"
    }
  ]
});
function ks(r, e = {}) {
  if (e === null)
    return {
      update(g = {}) {
        e = g;
      },
      destroy() {
      }
    };
  const t = document.activeElement;
  let a = !1, o = !1;
  function n() {
    return Array.from(r.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
  }
  function l(g) {
    if (g.key === "Tab" && e !== null) {
      const u = document.activeElement, f = n(), y = f.at(0), b = f.at(-1);
      g.shiftKey && u === y && (b?.focus(), g.preventDefault()), !g.shiftKey && u === b && (y?.focus(), g.preventDefault());
    } else g.key === "Escape" && e !== null && e.onEscape && (g.preventDefault(), a = !0, e.onEscape());
  }
  function c(g) {
    !r.contains(g.relatedTarget) && g.relatedTarget !== t && (o = !0);
  }
  function s() {
    if (e !== null) {
      if (a = !!e.isClosing, !a && !o) {
        const g = n();
        g.length > 0 && g[0].focus();
      }
      r.addEventListener("keydown", l), r.addEventListener("focusout", c);
    }
  }
  function d() {
    e !== null && (r.removeEventListener("keydown", l), r.removeEventListener("focusout", c), !a && !o && t && setTimeout(() => {
      t.focus({ preventScroll: !0 });
    }, 0));
  }
  return s(), {
    update(g = {}) {
      r.removeEventListener("keydown", l), r.removeEventListener("focusout", c), g && g.isClosing !== void 0 && (a = g.isClosing), e = g, e !== null && (r.addEventListener("keydown", l), r.addEventListener("focusout", c));
    },
    destroy() {
      d();
    }
  };
}
function yn(r) {
  const e = Math.cos(r * Math.PI * 0.5);
  return Math.abs(e) < 1e-14 ? 1 : 1 - e;
}
var xs = /* @__PURE__ */ G('<span class="sr-only"> </span>'), ws = /* @__PURE__ */ hr('<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>'), _s = /* @__PURE__ */ G("<button><!> <!></button>"), Cs = /* @__PURE__ */ G('<span class="sr-only"> </span>'), zs = /* @__PURE__ */ hr('<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>'), Ss = /* @__PURE__ */ G("<a><!> <!></a>");
function vt(r, e) {
  fe(e, !0);
  let t = M(e, "color", 3, "gray"), a = M(e, "name", 3, "Close"), o = M(e, "size", 3, "md"), n = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "color",
    "onclick",
    "name",
    "ariaLabel",
    "size",
    "class",
    "svgClass"
  ]);
  const l = /* @__PURE__ */ A(() => vs({ color: t(), size: o() })), c = /* @__PURE__ */ A(() => i(l).base), s = /* @__PURE__ */ A(() => i(l).svg), d = os();
  function g(p) {
    e.onclick?.(p), !p.defaultPrevented && d?.dismiss?.(p);
  }
  var u = K(), f = D(u);
  {
    var y = (p) => {
      var x = _s();
      we(
        x,
        (v) => ({
          type: "button",
          ...n,
          class: v,
          onclick: g,
          "aria-label": e.ariaLabel ?? a()
        }),
        [() => i(c)({ class: te(e.class) })]
      );
      var T = q(x);
      {
        var m = (v) => {
          var E = xs(), _ = q(E);
          ee(() => Me(_, a())), k(v, E);
        };
        F(T, (v) => {
          a() && v(m);
        });
      }
      var w = ne(T, 2);
      {
        var I = (v) => {
          var E = K(), _ = D(E);
          J(_, () => e.children), k(v, E);
        }, L = (v) => {
          var E = ws();
          ee((_) => Z(E, 0, _), [() => $(i(s)({ class: e.svgClass }))]), k(v, E);
        };
        F(w, (v) => {
          e.children ? v(I) : v(L, !1);
        });
      }
      k(p, x);
    }, b = (p) => {
      var x = Ss();
      we(
        x,
        (v) => ({
          ...n,
          onclick: g,
          class: v,
          "aria-label": e.ariaLabel ?? a()
        }),
        [() => i(c)({ class: te(e.class) })]
      );
      var T = q(x);
      {
        var m = (v) => {
          var E = Cs(), _ = q(E);
          ee(() => Me(_, a())), k(v, E);
        };
        F(T, (v) => {
          a() && v(m);
        });
      }
      var w = ne(T, 2);
      {
        var I = (v) => {
          var E = K(), _ = D(E);
          J(_, () => e.children), k(v, E);
        }, L = (v) => {
          var E = zs();
          ee((_) => Z(E, 0, _), [() => $(i(s)())]), k(v, E);
        };
        F(w, (v) => {
          e.children ? v(I) : v(L, !1);
        });
      }
      k(p, x);
    };
    F(f, (p) => {
      e.href === void 0 ? p(y) : p(b, !1);
    });
  }
  k(r, u), pe();
}
var Ts = /* @__PURE__ */ G("<!> <!>", 1), Es = /* @__PURE__ */ G('<form method="dialog"><!></form>'), As = /* @__PURE__ */ G("<dialog><!></dialog>");
function Is(r, e) {
  fe(e, !0);
  const t = (z) => {
    var V = Ts(), N = D(V);
    J(N, () => e.children ?? Te);
    var C = ne(N, 2);
    {
      var X = (Y) => {
        {
          let R = /* @__PURE__ */ A(() => T({ class: te(e.classes?.close) }));
          vt(Y, {
            type: "submit",
            formnovalidate: !0,
            get class() {
              return i(R);
            }
          });
        }
      };
      F(C, (Y) => {
        g() && !d() && Y(X);
      });
    }
    k(z, V);
  };
  let a = M(e, "onaction", 3, () => !0), o = M(e, "form", 3, !1), n = M(e, "modal", 3, !0), l = M(e, "autoclose", 3, !1), c = M(e, "focustrap", 3, !1), s = M(e, "open", 15, !1), d = M(e, "permanent", 3, !1), g = M(e, "dismissable", 3, !0), u = M(e, "outsideclose", 3, !0), f = M(e, "transition", 3, Va), y = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "onaction",
    "oncancel",
    "onsubmit",
    "ontoggle",
    "form",
    "modal",
    "autoclose",
    "focustrap",
    "open",
    "permanent",
    "dismissable",
    "outsideclose",
    "class",
    "classes",
    "transition",
    "transitionParams"
  ]);
  const b = /* @__PURE__ */ A(() => e.transitionParams ?? { duration: 100, easing: yn });
  let { base: p, form: x, close: T } = Ba();
  const m = (z) => s(!1), w = (z) => {
    if (typeof z.requestClose == "function") return z.requestClose();
    z.dispatchEvent(new Event("cancel", { bubbles: !0, cancelable: !0 }));
  };
  function I(z) {
    z.target === z.currentTarget && (e.oncancel?.(z), !z.defaultPrevented && (z.preventDefault(), d() || m(z.currentTarget)));
  }
  function L(z) {
    const V = z.currentTarget, N = V.getBoundingClientRect(), C = z.clientX >= N.left && z.clientX <= N.right && z.clientY >= N.top && z.clientY <= N.bottom;
    if (u() && !C)
      return w(V);
    if (l() && z.target instanceof HTMLButtonElement && !d())
      return m();
  }
  function v(z) {
    if (e.onsubmit?.(z), z.defaultPrevented) return;
    z.preventDefault();
    const V = z.currentTarget;
    if ((z.submitter instanceof HTMLButtonElement || z.submitter instanceof HTMLInputElement) && (V.returnValue = z.submitter.value), !V.returnValue)
      return w(V);
    typeof a() == "function" && a()({ action: V.returnValue, data: new FormData(z.target) }) === !1 || m();
  }
  function E(z) {
    e.ontoggle?.(z), s(
      z.newState === "open"
      // for cases when toggle by other means
    );
  }
  function _(z) {
    return n() ? z.showModal() : z.show(), queueMicrotask(() => {
      const V = z.querySelector("[data-autofocus]") ?? z.querySelector('input, textarea, select, button:not([aria-label="Close"])');
      V ? V.focus() : z.focus();
    }), () => z.close();
  }
  const S = (z) => c() ? ks(z) : void 0;
  let B = /* @__PURE__ */ Ve(void 0);
  function U(z) {
    o() || i(B)?.dispatchEvent(new Event("cancel", { bubbles: !0, cancelable: !0 }));
  }
  Ma(U);
  var P = K(), j = D(P);
  {
    var O = (z) => {
      var V = As();
      we(
        V,
        (Y) => ({
          tabindex: "-1",
          onsubmit: v,
          oncancel: I,
          onclick: L,
          ontoggle: E,
          ...y,
          class: Y
        }),
        [() => p({ class: te(e.class) })]
      );
      var N = q(V);
      {
        var C = (Y) => {
          var R = Es(), oe = q(R);
          t(oe), ee((Q) => Z(R, 1, Q), [
            () => $(x({ class: te(e.classes?.form) }))
          ]), k(Y, R);
        }, X = (Y) => {
          t(Y);
        };
        F(N, (Y) => {
          o() ? Y(C) : Y(X, !1);
        });
      }
      Ho(V, () => _), Lt(V, (Y) => ge(B, Y), () => i(B)), W0(V, (Y) => S?.(Y)), Ia(7, V, f, () => i(b)), k(z, V);
    };
    F(j, (z) => {
      s() && z(O);
    });
  }
  k(r, P), pe();
}
const Ba = h({
  slots: {
    base: "backdrop:bg-gray-900/50 open:flex flex-col bg-white dark:bg-gray-800",
    form: "flex flex-col h-full w-full border-inherit dark:border-inherit divide-inherit dark:divide-inherit",
    close: "absolute top-2.5 end-2.5"
  },
  variants: {
    // position: {
    //     fixed: { base: "fixed" },
    //     absolute: { base: "absolute" }
    // },
  },
  defaultVariants: {
    // position: "fixed"
  }
});
h({
  base: "mt-2 divide-y divide-gray-300 dark:divide-gray-500 overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-700"
});
h({
  base: "my-1 h-px bg-gray-100 dark:bg-gray-500"
});
h({
  base: "px-4 py-3 text-sm text-gray-900 dark:text-white"
});
h({
  slots: {
    base: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
    active: "block px-4 py-2 text-primary-700 dark:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
    li: ""
  }
});
h({
  base: "py-2 text-sm text-gray-700 dark:text-gray-200"
});
h({
  extend: Ba,
  slots: {
    base: "p-4 max-h-none max-w-none"
  },
  variants: {
    placement: {
      left: { base: "me-auto h-full" },
      right: { base: "ms-auto h-full" },
      top: { base: "mb-auto !w-full" },
      bottom: { base: "mt-auto !w-full" }
    },
    width: {
      default: { base: "w-80" },
      full: { base: "w-full" },
      half: { base: "w-1/2" }
    },
    modal: {
      false: { base: "fixed inset-0" },
      true: { base: "" }
    }
  },
  defaultVariants: {
    placement: "left",
    width: "default"
  }
});
h({
  slots: {
    base: "flex items-center justify-between",
    button: "ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
    svg: "h-4 w-4"
  }
});
h({
  base: "bg-white dark:bg-gray-800",
  variants: {
    footerType: {
      default: "p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6",
      sitemap: "bg-white dark:bg-gray-900",
      socialmedia: "p-4 sm:p-6",
      logo: "p-4 rounded-lg shadow md:px-6 md:py-8",
      sticky: "fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"
    }
  }
});
h({
  slots: {
    base: "flex items-center",
    span: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white",
    img: "me-3 h-8"
  }
});
h({
  slots: {
    base: "block text-sm text-gray-500 sm:text-center dark:text-gray-400",
    link: "hover:underline",
    bySpan: "ms-1"
  }
});
h({
  base: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
});
h({
  base: "text-gray-600 dark:text-gray-400"
});
h({
  slots: {
    base: "me-4 last:me-0 md:me-6",
    link: "hover:underline"
  }
});
h({
  slots: {
    image: "h-auto max-w-full rounded-lg",
    div: "grid"
  }
});
h({
  base: "shrink-0",
  variants: {
    color: {
      // 'primary' secondary 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
      primary: "bg-primary-500",
      secondary: "bg-secondary-500",
      gray: "bg-gray-200",
      red: "bg-red-500",
      orange: "bg-orange-600",
      amber: "bg-amber-500",
      yellow: "bg-yellow-300",
      lime: "bg-lime-500",
      green: "bg-green-500",
      emerald: "bg-emerald-500",
      teal: "bg-teal-500",
      cyan: "bg-cyan-500",
      sky: "bg-sky-500",
      blue: "bg-blue-500",
      indigo: "bg-indigo-500",
      violet: "bg-violet-500",
      purple: "bg-purple-500",
      fuchsia: "bg-fuchsia-500",
      pink: "bg-pink-500",
      rose: "bg-rose-500"
    },
    size: {
      xs: "w-2 h-2",
      sm: "w-2.5 h-2.5",
      md: "w-3 h-3",
      lg: "w-3.5 h-3.5",
      xl: "w-6 h-6"
    },
    cornerStyle: {
      rounded: "rounded-sm",
      circular: "rounded-full"
    },
    border: {
      true: "border border-gray-300 dark:border-gray-300",
      false: {}
    },
    hasChildren: {
      true: "inline-flex items-center justify-center",
      false: {}
    },
    placement: {
      default: "",
      "top-left": "absolute top-0 start-0",
      "top-center": "absolute top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2",
      "top-right": "absolute top-0 end-0",
      "center-left": "absolute top-1/2 -translate-y-1/2 start-0",
      center: "absolute top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2",
      "center-right": "absolute top-1/2 -translate-y-1/2 end-0",
      "bottom-left": "absolute bottom-0 start-0",
      "bottom-center": "absolute bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2",
      "bottom-right": "absolute bottom-0 end-0"
    },
    offset: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      placement: "top-left",
      offset: !0,
      class: "-translate-x-1/3 rtl:translate-x-1/3 -translate-y-1/3"
    },
    {
      placement: "top-center",
      offset: !0,
      class: "-translate-y-1/3"
    },
    {
      placement: "top-right",
      offset: !0,
      class: "translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3"
    },
    {
      placement: "center-left",
      offset: !0,
      class: "-translate-x-1/3 rtl:translate-x-1/3"
    },
    {
      placement: "center-right",
      offset: !0,
      class: "translate-x-1/3 rtl:-translate-x-1/3"
    },
    {
      placement: "bottom-left",
      offset: !0,
      class: "-translate-x-1/3 rtl:translate-x-1/3 translate-y-1/3"
    },
    {
      placement: "bottom-center",
      offset: !0,
      class: "translate-y-1/3"
    },
    {
      placement: "bottom-right",
      offset: !0,
      class: "translate-x-1/3 rtl:-translate-x-1/3 translate-y-1/3"
    }
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
    cornerStyle: "circular",
    border: !1,
    offset: !0,
    hasChildren: !1
  }
});
h({
  base: "px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
});
h({
  base: "flex bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 divide-gray-200 dark:divide-gray-600",
  variants: {
    rounded: {
      true: "rounded-lg",
      false: ""
    },
    border: {
      true: "border border-gray-200 dark:border-gray-700",
      false: ""
    },
    horizontal: {
      true: "flex-row divide-x",
      false: "flex-col divide-y"
    }
  },
  compoundVariants: [
    {
      border: !0,
      class: "divide-gray-200 dark:divide-gray-700"
    }
  ],
  defaultVariants: {
    rounded: !0,
    border: !0,
    horizontal: !1
  }
});
h({
  base: "py-2 px-4 w-full text-sm font-medium list-none flex items-center text-left gap-2",
  variants: {
    state: {
      normal: "",
      current: "text-white bg-primary-700 dark:text-white dark:bg-gray-800",
      disabled: "text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400"
    },
    active: {
      true: "",
      false: ""
    },
    horizontal: {
      true: "first:rounded-s-lg last:rounded-e-lg",
      false: "first:rounded-t-lg last:rounded-b-lg"
    }
  },
  compoundVariants: [
    {
      active: !0,
      state: "disabled",
      class: "cursor-not-allowed"
    },
    {
      active: !0,
      state: "normal",
      class: "hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white focus:z-40 focus:outline-hidden focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white"
    }
    // {
    //   horizontal: true,
    //   class: "focus:first:rounded-s-lg focus:last:rounded-e-lg"
    // },
    // {
    //   horizontal: false,
    //   class: "focus:first:rounded-t-lg focus:last:rounded-b-lg"
    // }
  ]
});
h({
  slots: {
    base: "w-fit bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    div: "flex flex-col md:flex-row p-4 max-w-(--breakpoint-md) justify-center mx-auto mt-2",
    ul: "grid grid-flow-row gap-y-4 md:gap-x-0 auto-col-max auto-row-max grid-cols-2 md:grid-cols-3 text-sm font-medium",
    extra: "md:w-1/3 mt-4 md:mt-0"
  },
  variants: {
    full: {
      true: { base: "border-y w-full ml-0 rounded-none" }
    },
    hasExtra: {
      true: {}
    }
  },
  compoundVariants: [
    {
      full: !0,
      hasExtra: !0,
      class: { ul: "grid-cols-2 md:w-2/3" }
    }
  ]
});
var Vs = /* @__PURE__ */ G("<h3> </h3> <!>", 1), Ps = /* @__PURE__ */ G("<div><!></div>"), Ms = /* @__PURE__ */ G("<div><!></div>"), Bs = /* @__PURE__ */ G("<!> <div><!></div> <!>", 1);
function js(r, e) {
  fe(e, !0);
  let t = M(e, "open", 15, !1), a = M(e, "permanent", 3, !1), o = M(e, "dismissable", 3, !0), n = M(e, "size", 3, "md"), l = M(e, "transition", 3, Va), c = M(e, "fullscreen", 3, !1), s = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "header",
    "footer",
    "title",
    "open",
    "permanent",
    "dismissable",
    "closeBtnClass",
    "headerClass",
    "bodyClass",
    "footerClass",
    "size",
    "placement",
    "class",
    "classes",
    "transitionParams",
    "transition",
    "fullscreen"
  ]);
  e.headerClass, e.bodyClass, e.footerClass, e.closeBtnClass;
  const d = /* @__PURE__ */ A(() => e.classes ?? {
    header: e.headerClass,
    body: e.bodyClass,
    footer: e.footerClass,
    close: e.closeBtnClass
  }), g = Oe("modal"), u = { duration: 100, easing: yn }, f = /* @__PURE__ */ A(() => e.transitionParams ?? u), y = /* @__PURE__ */ A(() => Ls({ placement: e.placement, size: n() })), b = /* @__PURE__ */ A(() => i(y).base), p = /* @__PURE__ */ A(() => i(y).header), x = /* @__PURE__ */ A(() => i(y).footer), T = /* @__PURE__ */ A(() => i(y).body);
  {
    let m = /* @__PURE__ */ A(() => o() && !e.title && !a()), w = /* @__PURE__ */ A(() => i(b)({
      fullscreen: c(),
      class: te(g?.base, e.class)
    }));
    Is(r, Gr(
      {
        get transition() {
          return l();
        },
        get dismissable() {
          return i(m);
        },
        get transitionParams() {
          return i(f);
        },
        get classes() {
          return e.classes;
        }
      },
      () => s,
      {
        get class() {
          return i(w);
        },
        get open() {
          return t();
        },
        set open(I) {
          t(I);
        },
        children: (I, L) => {
          var v = Bs(), E = D(v);
          {
            var _ = (j) => {
              var O = Ps(), z = q(O);
              {
                var V = (C) => {
                  var X = Vs(), Y = D(X), R = q(Y), oe = ne(Y, 2);
                  {
                    var Q = (se) => {
                      {
                        let Be = /* @__PURE__ */ A(() => te(i(d).close));
                        vt(se, {
                          type: "submit",
                          formnovalidate: !0,
                          get class() {
                            return i(Be);
                          }
                        });
                      }
                    };
                    F(oe, (se) => {
                      o() && !a() && se(Q);
                    });
                  }
                  ee(() => Me(R, e.title)), k(C, X);
                }, N = (C) => {
                  var X = K(), Y = D(X);
                  {
                    var R = (oe) => {
                      var Q = K(), se = D(Q);
                      J(se, () => e.header), k(oe, Q);
                    };
                    F(
                      Y,
                      (oe) => {
                        e.header && oe(R);
                      },
                      !0
                    );
                  }
                  k(C, X);
                };
                F(z, (C) => {
                  e.title ? C(V) : C(N, !1);
                });
              }
              ee((C) => Z(O, 1, C), [
                () => $(i(p)({ class: te(g?.header, i(d).header) }))
              ]), k(j, O);
            };
            F(E, (j) => {
              (e.title || e.header) && j(_);
            });
          }
          var S = ne(E, 2), B = q(S);
          J(B, () => e.children ?? Te);
          var U = ne(S, 2);
          {
            var P = (j) => {
              var O = Ms(), z = q(O);
              J(z, () => e.footer), ee((V) => Z(O, 1, V), [
                () => $(i(x)({ class: te(g?.footer, i(d).footer) }))
              ]), k(j, O);
            };
            F(U, (j) => {
              e.footer && j(P);
            });
          }
          ee((j) => Z(S, 1, j), [
            () => $(i(T)({ class: te(g?.body, i(d).body) }))
          ]), k(I, v);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  pe();
}
const Ls = h({
  extend: Ba,
  slots: {
    base: "w-full rounded-lg divide-y text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700 bg-white dark:bg-gray-800 pointer-events-auto",
    form: "rounded-lg divide-y",
    header: "flex items-center p-4 md:p-5 justify-between rounded-t-lg shrink-0 text-xl font-semibold text-gray-900 dark:text-white",
    footer: "flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse rounded-b-lg shrink-0",
    body: "p-4 md:p-5 space-y-4 overflow-y-auto overscroll-contain"
  },
  variants: {
    fullscreen: {
      true: {
        base: "fixed inset-0 w-screen h-screen max-w-none max-h-none m-0 p-0 border-none rounded-none bg-white dark:bg-gray-900"
      }
    },
    placement: {
      "top-left": { base: "mb-auto mr-auto" },
      "top-center": { base: "mb-auto mx-auto" },
      "top-right": { base: "mb-auto ml-auto" },
      "center-left": { base: "my-auto mr-auto" },
      center: { base: "my-auto mx-auto" },
      "center-right": { base: "my-auto ml-auto" },
      "bottom-left": { base: "mt-auto mr-auto" },
      "bottom-center": { base: "mt-auto mx-auto" },
      "bottom-right": { base: "mt-auto ml-auto" }
    },
    size: {
      none: { base: "" },
      xs: { base: "max-w-md" },
      sm: { base: "max-w-lg" },
      md: { base: "max-w-2xl" },
      lg: { base: "max-w-4xl" },
      xl: { base: "max-w-7xl" }
    }
  },
  defaultVariants: {
    placement: "center",
    size: "md"
  }
});
h({
  base: "relative w-full px-2 py-2.5 sm:px-4"
});
h({
  base: "flex items-center"
});
h({
  base: "mx-auto flex flex-wrap items-center justify-between ",
  variants: {
    fluid: { true: "w-full", false: "container" }
  }
});
h({
  slots: {
    base: "",
    ul: "flex flex-col p-4 mt-0 rtl:space-x-reverse",
    active: "text-white bg-primary-700 dark:bg-primary-600",
    nonActive: "hover:text-primary-500 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  },
  variants: {
    breakpoint: {
      sm: {
        base: "w-full sm:block sm:w-auto",
        ul: "sm:flex-row sm:text-sm sm:font-medium",
        active: "sm:bg-transparent sm:text-primary-700 sm:dark:text-white sm:dark:bg-transparent",
        nonActive: "sm:hover:bg-transparent sm:border-0 sm:hover:text-primary-700 dark:sm:text-gray-400 sm:dark:hover:text-white sm:dark:hover:bg-transparent"
      },
      md: {
        base: "w-full md:block md:w-auto",
        ul: "md:flex-row md:text-sm md:font-medium",
        active: "md:bg-transparent md:text-primary-700 md:dark:text-white md:dark:bg-transparent",
        nonActive: "md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:md:text-gray-400 md:dark:hover:text-white md:dark:hover:bg-transparent"
      },
      lg: {
        base: "w-full lg:block lg:w-auto",
        ul: "lg:flex-row lg:text-sm lg:font-medium",
        active: "lg:bg-transparent lg:text-primary-700 lg:dark:text-white lg:dark:bg-transparent",
        nonActive: "lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:lg:text-gray-400 lg:dark:hover:text-white lg:dark:hover:bg-transparent"
      },
      xl: {
        base: "w-full xl:block xl:w-auto",
        ul: "xl:flex-row xl:text-sm xl:font-medium",
        active: "xl:bg-transparent xl:text-primary-700 xl:dark:text-white xl:dark:bg-transparent",
        nonActive: "xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 dark:xl:text-gray-400 xl:dark:hover:text-white xl:dark:hover:bg-transparent"
      }
    },
    hidden: {
      false: {
        base: "absolute top-full left-0 right-0 z-50 w-full",
        ul: "border rounded-lg bg-white shadow-lg dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-400 border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700"
      },
      true: {
        base: "hidden"
      }
    }
  },
  compoundVariants: [
    // Compound variants for breakpoint + hidden combinations
    {
      breakpoint: "sm",
      hidden: !1,
      class: {
        base: "sm:static sm:z-auto",
        ul: "sm:border-none sm:rounded-none sm:bg-inherit dark:sm:bg-inherit sm:shadow-none"
      }
    },
    {
      breakpoint: "md",
      hidden: !1,
      class: {
        base: "md:static md:z-auto",
        ul: "md:border-none md:rounded-none md:bg-inherit dark:md:bg-inherit md:shadow-none"
      }
    },
    {
      breakpoint: "lg",
      hidden: !1,
      class: {
        base: "lg:static lg:z-auto",
        ul: "lg:border-none lg:rounded-none lg:bg-inherit dark:lg:bg-inherit lg:shadow-none"
      }
    },
    {
      breakpoint: "xl",
      hidden: !1,
      class: {
        base: "xl:static xl:z-auto",
        ul: "xl:border-none xl:rounded-none xl:bg-inherit dark:xl:bg-inherit xl:shadow-none"
      }
    }
  ],
  defaultVariants: {
    breakpoint: "md"
  }
});
h({
  base: "block py-2 pe-4 ps-3 rounded-sm",
  variants: {
    breakpoint: {
      sm: "sm:p-2 sm:border-0",
      md: "md:p-2 md:border-0",
      lg: "lg:p-2 lg:border-0",
      xl: "xl:p-2 xl:border-0"
    },
    hidden: {
      false: "text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    }
  },
  compoundVariants: [
    {
      breakpoint: "sm",
      hidden: !1,
      class: "sm:hover:bg-transparent sm:hover:text-primary-700 sm:dark:hover:text-white sm:dark:hover:bg-transparent"
    },
    {
      breakpoint: "md",
      hidden: !1,
      class: "md:hover:bg-transparent md:hover:text-primary-700 md:dark:hover:text-white md:dark:hover:bg-transparent"
    },
    {
      breakpoint: "lg",
      hidden: !1,
      class: "lg:hover:bg-transparent lg:hover:text-primary-700 lg:dark:hover:text-white lg:dark:hover:bg-transparent"
    },
    {
      breakpoint: "xl",
      hidden: !1,
      class: "xl:hover:bg-transparent xl:hover:text-primary-700 xl:dark:hover:text-white xl:dark:hover:bg-transparent"
    }
  ],
  defaultVariants: {
    breakpoint: "md"
  }
});
h({
  slots: {
    base: "ms-3",
    menu: "h-6 w-6 shrink-0"
  },
  variants: {
    breakpoint: {
      sm: {
        base: "sm:hidden"
      },
      md: {
        base: "md:hidden"
      },
      lg: {
        base: "lg:hidden"
      },
      xl: {
        base: "xl:hidden"
      }
    }
  },
  defaultVariants: {
    breakpoint: "md"
  }
});
h({
  slots: {
    base: "flex justify-between items-center",
    content: "flex flex-wrap items-center"
  },
  variants: {
    embedded: {
      true: {},
      false: {
        base: "py-2 px-3 rounded-lg dark:border"
      }
    },
    color: {
      default: {
        base: "bg-gray-50 dark:bg-gray-800 dark:border-gray-600",
        content: "divide-gray-300 dark:divide-gray-800"
      },
      primary: {
        base: "bg-primary-50 dark:bg-gray-800 dark:border-primary-800",
        content: "divide-primary-300 dark:divide-primary-800"
      },
      secondary: {
        base: "bg-secondary-50 dark:bg-gray-800 dark:border-secondary-800",
        content: "divide-secondary-300 dark:divide-primary-800"
      },
      gray: {
        base: "bg-gray-50 dark:bg-gray-800 dark:border-gray-800",
        content: "divide-gray-300 dark:divide-gray-800"
      },
      red: {
        base: "bg-red-50 dark:bg-gray-800 dark:border-red-800",
        content: "divide-red-300 dark:divide-red-800"
      },
      yellow: {
        base: "bg-yellow-50 dark:bg-gray-800 dark:border-yellow-800",
        content: "divide-yellow-300 dark:divide-yellow-800"
      },
      green: {
        base: "bg-green-50 dark:bg-gray-800 dark:border-green-800",
        content: "divide-green-300 dark:divide-green-800"
      },
      indigo: {
        base: "bg-indigo-50 dark:bg-gray-800 dark:border-indigo-800",
        content: "divide-indigo-300 dark:divide-indigo-800"
      },
      purple: {
        base: "bg-purple-50 dark:bg-gray-800 dark:border-purple-800",
        content: "divide-purple-300 dark:divide-purple-800"
      },
      pink: {
        base: "bg-pink-50 dark:bg-gray-800 dark:border-pink-800",
        content: "divide-pink-300 dark:divide-pink-800"
      },
      blue: {
        base: "bg-blue-50 dark:bg-gray-800 dark:border-blue-800",
        content: "divide-blue-300 dark:divide-blue-800"
      },
      dark: {
        base: "bg-gray-50 dark:bg-gray-800 dark:border-gray-800",
        content: "divide-gray-300 dark:divide-gray-800"
      }
    },
    separators: {
      true: {
        content: "sm:divide-x rtl:divide-x-reverse"
      }
    }
  },
  compoundVariants: [
    {
      embedded: !0,
      color: "default",
      class: {
        base: "bg-transparent"
      }
    }
  ],
  defaultVariants: {
    color: "default"
  }
});
h({
  base: "flex items-center",
  variants: {
    spacing: {
      default: "space-x-1 rtl:space-x-reverse",
      tight: "space-x-0.5 rtl:space-x-reverse",
      loose: "space-x-2 rtl:space-x-reverse"
    },
    padding: {
      default: "sm:not(:last):pe-4 sm:not(:first):ps-4",
      none: ""
    },
    position: {
      middle: "",
      first: "sm:ps-0",
      last: "sm:pe-0"
    }
  },
  compoundVariants: [
    {
      position: ["first", "last"],
      class: "sm:px-0"
    }
  ],
  defaultVariants: {
    spacing: "default",
    padding: "default"
  }
});
h({
  base: "focus:outline-hidden whitespace-normal",
  variants: {
    color: {
      dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
      gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
      red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
      yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
      green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
      indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
      purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
      pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
      blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
      primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
      default: "focus:ring-gray-400 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-50"
    },
    size: {
      xs: "m-0.5 rounded-xs focus:ring-1 p-0.5",
      sm: "m-0.5 rounded-sm focus:ring-1 p-0.5",
      md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
      lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
    },
    background: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      color: "default",
      background: !0,
      class: "dark:hover:bg-gray-600"
    },
    {
      color: "default",
      background: !1,
      class: "dark:hover:bg-gray-700"
    }
  ],
  defaultVariants: {
    color: "default",
    size: "md"
  }
});
h({
  slots: {
    base: "inline-flex -space-x-px rtl:space-x-reverse items-center",
    tableDiv: "flex items-center text-sm mb-4",
    span: "font-semibold mx-1",
    prev: "rounded-none",
    next: "rounded-none"
  },
  variants: {
    size: {
      default: "",
      large: ""
    },
    layout: {
      table: { prev: "rounded-s bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-white  hover:text-gray-200", next: "text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" },
      navigation: { prev: "rounded-s-lg", next: "rounded-e-lg" },
      pagination: { prev: "rounded-s-lg", next: "rounded-e-lg" }
    }
  },
  defaultVariants: {
    table: !1,
    size: "default"
  }
});
h({
  base: "flex items-center font-medium",
  variants: {
    size: {
      default: "h-8 px-3 text-sm",
      large: "h-10 px-4 text-base"
    },
    active: {
      true: "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      false: "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    },
    group: {
      true: "",
      false: "rounded-lg"
    },
    table: {
      true: "rounded-sm",
      false: "border"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: ""
    }
  },
  compoundVariants: [
    {
      group: !1,
      table: !1,
      class: "rounded-lg"
    }
  ],
  defaultVariants: {
    size: "default",
    active: !1,
    group: !1,
    table: !1
  }
});
h({
  base: "flex items-center font-medium",
  variants: {
    size: {
      default: "h-8 px-3 text-sm",
      large: "h-10 px-4 text-base"
    },
    active: {
      true: "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      false: "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    },
    group: {
      true: "",
      false: "rounded-lg"
    },
    table: {
      true: "rounded-sm",
      false: "border"
    }
  },
  compoundVariants: [
    {
      group: !1,
      table: !1,
      class: "rounded-lg"
    }
  ],
  defaultVariants: {
    size: "default",
    active: !1,
    group: !1,
    table: !1
  }
});
h({
  base: "inline-flex -space-x-px rtl:space-x-reverse items-center",
  variants: {
    table: {
      true: "divide-x rtl:divide-x-reverse dark divide-gray-700 dark:divide-gray-700",
      false: ""
    },
    size: {
      default: "",
      large: ""
    }
  },
  defaultVariants: {
    table: !1,
    size: "default"
  }
});
h({
  slots: {
    base: "rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    content: "p-2",
    title: "py-2 px-3 rounded-t-md border-b ",
    h3: "font-semibold"
  },
  variants: {
    color: {
      default: {
        title: "bg-gray-100 border-gray-200 dark:border-gray-600 dark:bg-gray-700",
        h3: "text-gray-900 dark:text-white"
      },
      primary: {
        title: "bg-primary-700",
        h3: "text-white"
      },
      secondary: {
        title: "bg-secondary-700",
        h3: "text-white"
      },
      gray: {
        title: "bg-gray-700",
        h3: "text-white"
      },
      red: {
        title: "bg-red-700",
        h3: "text-white"
      },
      orange: {
        title: "bg-orange-700",
        h3: "text-white"
      },
      amber: {
        title: "bg-amber-700",
        h3: "text-white"
      },
      yellow: {
        title: "bg-yellow-500",
        h3: "text-gray-800"
      },
      lime: {
        title: "bg-lime-700",
        h3: "text-white"
      },
      green: {
        title: "bg-green-700",
        h3: "text-white"
      },
      emerald: {
        title: "bg-emerald-700",
        h3: "text-white"
      },
      teal: {
        title: "bg-teal-700",
        h3: "text-white"
      },
      cyan: {
        title: "bg-cyan-700",
        h3: "text-white"
      },
      sky: {
        title: "bg-sky-700",
        h3: "text-white"
      },
      blue: {
        title: "bg-blue-700",
        h3: "text-white"
      },
      indigo: {
        title: "bg-indigo-700",
        h3: "text-white"
      },
      violet: {
        title: "bg-violet-700",
        h3: "text-white"
      },
      purple: {
        title: "bg-purple-700",
        h3: "text-white"
      },
      fuchsia: {
        title: "bg-fuchsia-700",
        h3: "text-white"
      },
      pink: {
        title: "bg-pink-700",
        h3: "text-white"
      },
      rose: {
        title: "bg-rose-700",
        h3: "text-white"
      }
    }
  }
});
h({
  slots: {
    base: "w-full bg-gray-200 rounded-full dark:bg-gray-700",
    label: "text-primary-100 text-xs font-medium text-center leading-none rounded-full",
    inside: "rounded-full",
    outside: "mb-1 flex justify-between",
    span: "text-base font-medium dark:text-white",
    progressCls: "text-sm font-medium dark:text-white"
  },
  variants: {
    color: {
      primary: {
        label: "bg-primary-600",
        inside: "bg-primary-600"
      },
      secondary: {
        label: "bg-secondary-600",
        inside: "bg-secondary-600"
      },
      gray: {
        label: "bg-gray-600 dark:bg-gray-300",
        inside: "bg-gray-600 dark:bg-gray-300"
      },
      red: {
        label: "bg-red-600 dark:bg-red-500",
        inside: "bg-red-600 dark:bg-red-500"
      },
      orange: {
        label: "bg-orange-600 dark:bg-orange-500",
        inside: "bg-orange-600 dark:bg-orange-500"
      },
      amber: {
        label: "bg-amber-600 dark:bg-amber-500",
        inside: "bg-amber-600 dark:bg-amber-500"
      },
      yellow: {
        label: "bg-yellow-400",
        inside: "bg-yellow-400"
      },
      lime: {
        label: "bg-lime-600 dark:bg-lime-500",
        inside: "bg-lime-600 dark:bg-lime-500"
      },
      green: {
        label: "bg-green-600 dark:bg-green-500",
        inside: "bg-green-600 dark:bg-green-500"
      },
      emerald: {
        label: "bg-emerald-600 dark:bg-emerald-500",
        inside: "bg-emerald-600 dark:bg-emerald-500"
      },
      teal: {
        label: "bg-teal-600 dark:bg-teal-500",
        inside: "bg-teal-600 dark:bg-teal-500"
      },
      cyan: {
        label: "bg-cyan-600 dark:bg-cyan-500",
        inside: "bg-cyan-600 dark:bg-cyan-500"
      },
      sky: {
        label: "bg-sky-600 dark:bg-sky-500",
        inside: "bg-sky-600 dark:bg-sky-500"
      },
      blue: {
        label: "bg-blue-600",
        inside: "bg-blue-600"
      },
      indigo: {
        label: "bg-indigo-600 dark:bg-indigo-500",
        inside: "bg-indigo-600 dark:bg-indigo-500"
      },
      violet: {
        label: "bg-violet-600 dark:bg-violet-500",
        inside: "bg-violet-600 dark:bg-violet-500"
      },
      purple: {
        label: "bg-purple-600 dark:bg-purple-500",
        inside: "bg-purple-600 dark:bg-purple-500"
      },
      fuchsia: {
        label: "bg-fuchsia-600 dark:bg-fuchsia-500",
        inside: "bg-fuchsia-600 dark:bg-fuchsia-500"
      },
      pink: {
        label: "bg-pink-600 dark:bg-pink-500",
        inside: "bg-pink-600 dark:bg-pink-500"
      },
      rose: {
        label: "bg-rose-600 dark:bg-rose-500",
        inside: "bg-rose-600 dark:bg-rose-500"
      }
    },
    labelInside: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      labelInside: !0,
      class: {
        base: "text-primary-100 text-xs font-medium text-center leading-none rounded-full",
        label: "p-0.5"
      }
    },
    {
      labelInside: !1,
      class: { base: "rounded-full" }
    }
  ],
  defaultVariants: {
    color: "primary",
    labelInside: !1
  }
});
h({
  slots: {
    base: "relative inline-flex",
    label: "absolute inset-0 flex items-center justify-center text-sm font-medium",
    background: "opacity-25",
    foreground: "transition-all",
    outside: "flex flex-col items-center mb-2 text-center",
    span: "text-base font-medium",
    progressCls: "text-sm font-medium ml-1"
  },
  variants: {
    color: {
      primary: {
        background: "stroke-primary-600",
        foreground: "stroke-primary-600"
      },
      secondary: {
        background: "stroke-secondary-600",
        foreground: "stroke-secondary-600"
      },
      gray: {
        background: "stroke-gray-600 dark:stroke-gray-300",
        foreground: "stroke-gray-600 dark:stroke-gray-300"
      },
      red: {
        background: "stroke-red-600 dark:stroke-red-500",
        foreground: "stroke-red-600 dark:stroke-red-500"
      },
      orange: {
        background: "stroke-orange-600 dark:stroke-orange-500",
        foreground: "stroke-orange-600 dark:stroke-orange-500"
      },
      amber: {
        background: "stroke-amber-600 dark:stroke-amber-500",
        foreground: "stroke-amber-600 dark:stroke-amber-500"
      },
      yellow: {
        background: "stroke-yellow-400",
        foreground: "stroke-yellow-400"
      },
      lime: {
        background: "stroke-lime-600 dark:stroke-lime-500",
        foreground: "stroke-lime-600 dark:stroke-lime-500"
      },
      green: {
        background: "stroke-green-600 dark:stroke-green-500",
        foreground: "stroke-green-600 dark:stroke-green-500"
      },
      emerald: {
        background: "stroke-emerald-600 dark:stroke-emerald-500",
        foreground: "stroke-emerald-600 dark:stroke-emerald-500"
      },
      teal: {
        background: "stroke-teal-600 dark:stroke-teal-500",
        foreground: "stroke-teal-600 dark:stroke-teal-500"
      },
      cyan: {
        background: "stroke-cyan-600 dark:stroke-cyan-500",
        foreground: "stroke-cyan-600 dark:stroke-cyan-500"
      },
      sky: {
        background: "stroke-sky-600 dark:stroke-sky-500",
        foreground: "stroke-sky-600 dark:stroke-sky-500"
      },
      blue: {
        background: "stroke-blue-600",
        foreground: "stroke-blue-600"
      },
      indigo: {
        background: "stroke-indigo-600 dark:stroke-indigo-500",
        foreground: "stroke-indigo-600 dark:stroke-indigo-500"
      },
      violet: {
        background: "stroke-violet-600 dark:stroke-violet-500",
        foreground: "stroke-violet-600 dark:stroke-violet-500"
      },
      purple: {
        background: "stroke-purple-600 dark:stroke-purple-500",
        foreground: "stroke-purple-600 dark:stroke-purple-500"
      },
      fuchsia: {
        background: "stroke-fuchsia-600 dark:stroke-fuchsia-500",
        foreground: "stroke-fuchsia-600 dark:stroke-fuchsia-500"
      },
      pink: {
        background: "stroke-pink-600 dark:stroke-pink-500",
        foreground: "stroke-pink-600 dark:stroke-pink-500"
      },
      rose: {
        background: "stroke-rose-600 dark:stroke-rose-500",
        foreground: "stroke-rose-600 dark:stroke-rose-500"
      }
    },
    labelInside: {
      true: {}
    }
  }
});
h({
  // divClass = 'flex items-center mt-4', spanClass = 'text-sm font-medium text-gray-600 dark:text-gray-500', div2Class = 'mx-4 w-2/4 h-5 bg-gray-200 rounded-sm dark:bg-gray-700', div3Class = 'h-5 bg-yellow-400 rounded-sm', span2Class = 'text-sm font-medium text-gray-600 dark:text-gray-500',
  slots: {
    base: "flex items-center mt-4",
    span: "text-sm font-medium text-gray-600 dark:text-gray-500",
    div2: "mx-4 w-2/4 h-5 bg-gray-200 rounded-sm dark:bg-gray-700",
    div3: "h-5 bg-yellow-400 rounded-sm",
    span2: "text-sm font-medium text-gray-600 dark:text-gray-500"
  }
});
h({
  slots: {
    base: "flex items-center",
    p: "ms-2 text-sm font-bold text-gray-900 dark:text-white"
  }
});
h({
  slots: {
    article: "md:grid md:grid-cols-3 md:gap-8",
    div: "mb-6 flex items-center space-x-4 rtl:space-x-reverse",
    div2: "space-y-1 font-medium dark:text-white",
    div3: "flex items-center text-sm text-gray-500 dark:text-gray-400",
    img: "h-10 w-10 rounded-full",
    ul: "space-y-4 text-sm text-gray-500 dark:text-gray-400",
    li: "flex items-center"
  }
});
h({
  slots: {
    desc1: "bg-primary-100 w-8 text-primary-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-primary-200 dark:text-primary-800",
    desc2: "ms-2 font-medium text-gray-900 dark:text-white",
    desc3span: "text-sm w-24 font-medium text-gray-500 dark:text-gray-400",
    desc3p: "text-sm w-24 font-medium text-gray-500 dark:text-gray-400",
    link: "ms-auto w-32 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500",
    bar: "bg-primary-600 h-2.5 rounded-sm dark:bg-primary-500"
  }
});
Ie(["click"]);
h({
  slots: {
    base: "top-0 left-0 z-50 w-64 transition-transform bg-gray-50 dark:bg-gray-800",
    active: "flex items-center group-has-[ul]:ms-6 p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-sm dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
    nonactive: "flex items-center group-has-[ul]:ms-6 p-2 text-base font-normal text-gray-900 rounded-sm dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
    div: "overflow-y-auto px-3 py-4 bg-gray-50 dark:bg-gray-800",
    backdrop: "fixed top-0 start-0 z-40 w-full h-full"
  },
  variants: {
    position: {
      fixed: { base: "fixed" },
      absolute: { base: "absolute" },
      static: { base: "static" }
    },
    isOpen: {
      true: "block",
      false: "hidden"
    },
    breakpoint: {
      sm: { base: "sm:block" },
      md: { base: "md:block" },
      lg: { base: "lg:block" },
      xl: { base: "xl:block" },
      "2xl": { base: "2xl:block" }
    },
    alwaysOpen: {
      true: { base: "block" }
      // Always display the sidebar when alwaysOpen is true
    },
    backdrop: {
      true: { backdrop: "bg-gray-900 opacity-75" }
    }
  },
  compoundVariants: [
    // When alwaysOpen is true, override the breakpoint display classes
    {
      alwaysOpen: !0,
      class: {
        base: "!block"
      }
    }
  ]
});
h({
  slots: {
    base: "inline-flex items-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    svg: "h-6 w-6 m-2"
  },
  variants: {
    breakpoint: {
      sm: "sm:hidden",
      md: "md:hidden",
      lg: "lg:hidden",
      xl: "xl:hidden",
      "2xl": "2xl:hidden"
    }
  }
});
h({
  slots: {
    base: "flex items-center ps-2.5 mb-5",
    img: "h-6 me-3 sm:h-7",
    span: "self-center text-xl font-semibold whitespace-nowrap dark:text-white"
  }
});
h({
  slots: {
    base: "p-4 mt-6 bg-primary-50 rounded-lg dark:bg-primary-900",
    div: "flex items-center mb-3",
    span: "bg-primary-100 text-primary-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-primary-200 dark:text-primary-900"
  }
});
h({
  slots: {
    base: "group",
    btn: "flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-sm transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    span: "flex-1 ms-3 text-left whitespace-nowrap",
    svg: "h-3 w-3 text-gray-800 dark:text-white",
    ul: "py-2 space-y-0"
  }
});
h({
  slots: {
    base: "p-4 rounded-sm border border-gray-200 shadow-sm animate-pulse md:p-6 dark:border-gray-700",
    area: "mb-4 flex h-48 items-center justify-center rounded-sm bg-gray-300 dark:bg-gray-700",
    icon: "text-gray-200 dark:text-gray-600",
    line: "rounded-full bg-gray-200 dark:bg-gray-700",
    footer: "mt-4 flex items-center space-x-3 rtl:space-x-reverse"
  },
  variants: {
    size: {
      sm: { base: "max-w-sm" },
      md: { base: "max-w-md" },
      lg: { base: "max-w-lg" },
      xl: { base: "max-w-xl" },
      "2xl": { base: "max-w-2xl" }
    }
  }
});
h({
  slots: {
    base: "space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center",
    image: "flex w-full items-center justify-center rounded-sm bg-gray-300 sm:w-96 dark:bg-gray-700",
    svg: "text-gray-200",
    content: "w-full",
    line: "rounded-full bg-gray-200 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        image: "h-32",
        content: "space-y-2"
      },
      md: {
        image: "h-48",
        content: "space-y-3"
      },
      lg: {
        image: "h-64",
        content: "space-y-4"
      }
    },
    rounded: {
      none: {
        image: "rounded-none",
        line: "rounded-none"
      },
      sm: {
        image: "rounded-xs",
        line: "rounded-xs"
      },
      md: {
        image: "rounded-sm",
        line: "rounded-sm"
      },
      lg: {
        image: "rounded-lg",
        line: "rounded-lg"
      },
      full: {
        image: "rounded-full",
        line: "rounded-full"
      }
    }
  }
});
h({
  slots: {
    base: "p-4 space-y-4 max-w-md rounded-sm border border-gray-200 divide-y divide-gray-200 shadow-sm animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700",
    item: "flex items-center justify-between",
    content: "",
    title: "mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600",
    subTitle: "h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700",
    extra: "h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        base: "p-3 space-y-3 max-w-sm md:p-4",
        title: "mb-2 h-2 w-20",
        subTitle: "h-1.5 w-28",
        extra: "h-2 w-10"
      },
      md: {},
      // default size
      lg: {
        base: "p-5 space-y-5 max-w-lg md:p-7",
        title: "mb-3 h-3 w-28",
        subTitle: "h-2.5 w-36",
        extra: "h-3 w-14"
      }
    },
    rounded: {
      none: { base: "rounded-none" },
      sm: { base: "rounded-xs" },
      md: { base: "rounded-sm" },
      lg: { base: "rounded-lg" },
      full: { base: "rounded-full p-8 md:p-16" }
    }
  }
});
h({
  slots: {
    wrapper: "animate-pulse",
    line: "rounded-full bg-gray-200 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        wrapper: "max-w-sm"
      },
      md: {
        wrapper: "max-w-md"
      },
      lg: {
        wrapper: "max-w-lg"
      },
      xl: {
        wrapper: "max-w-xl"
      },
      "2xl": {
        wrapper: "max-w-2xl"
      }
    }
  }
});
h({
  slots: {
    base: "animate-pulse",
    lineA: "rounded-full bg-gray-200 dark:bg-gray-700",
    lineB: "rounded-full bg-gray-300 dark:bg-gray-700",
    svg: "me-2 h-10 w-10 text-gray-200 dark:text-gray-700",
    content: "mt-4 flex items-center justify-center"
  }
});
h({
  slots: {
    base: "space-y-2.5 animate-pulse",
    div: "flex items-center space-x-2 rtl:space-x-reverse",
    lineA: "rounded-full bg-gray-200 dark:bg-gray-700",
    lineB: "rounded-full bg-gray-300 dark:bg-gray-600"
  },
  variants: {
    size: {
      sm: { base: "max-w-sm" },
      md: { base: "max-w-md" },
      lg: { base: "max-w-lg" },
      xl: { base: "max-w-xl" },
      "2xl": { base: "max-w-2xl" }
    }
  }
});
h({
  base: "flex justify-center items-center h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700",
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl"
    }
  }
});
h({
  slots: {
    base: "p-4 max-w-sm rounded-sm border border-gray-200 shadow-sm animate-pulse md:p-6 dark:border-gray-700",
    wrapper: "mt-4 flex items-baseline space-x-6 rtl:space-x-reverse",
    hLine: "rounded-full bg-gray-200 dark:bg-gray-700",
    vLine: "w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"
  }
});
h({
  slots: {
    base: "group bg-transparent",
    popper: "flex items-center gap-2 bg-transparent text-inherit"
  },
  variants: {
    vertical: {
      true: { popper: "flex-col" }
    }
  },
  defaultVariants: {
    vertical: !1
  }
});
h({
  slots: {
    base: "w-[52px] h-[52px] shadow-xs p-0",
    span: "block mb-px text-xs font-medium"
  },
  variants: {
    textOutside: {
      true: {
        base: "relative",
        span: "absolute -start-12 top-1/2 mb-px text-sm font-medium -translate-y-1/2"
      }
    }
  },
  defaultVariants: {}
});
h({
  base: "inline-block animate-spin text-gray-300",
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "fill-primary-600",
      secondary: "fill-secondary-600",
      gray: "fill-gray-600 dark:fill-gray-300",
      red: "fill-red-600",
      orange: "fill-orange-500",
      amber: "fill-amber-500",
      yellow: "fill-yellow-400",
      lime: "fill-lime-500",
      green: "fill-green-500",
      emerald: "fill-emerald-500",
      teal: "fill-teal-500",
      cyan: "fill-cyan-500",
      sky: "fill-sky-500",
      blue: "fill-blue-600",
      indigo: "fill-indigo-600",
      violet: "fill-violet-600",
      purple: "fill-purple-600",
      fuchsia: "fill-fuchsia-600",
      pink: "fill-pink-600",
      rose: "fill-rose-600"
    },
    size: {
      4: "w-4 h-4",
      5: "w-5 h-5",
      6: "w-6 h-6",
      8: "w-8 h-8",
      10: "w-10 h-10",
      12: "w-12 h-12",
      16: "w-16 h-16"
    }
  },
  defaultVariants: {
    color: "primary",
    size: "8"
  }
});
h({
  slots: {
    base: "space-y-2 dark:text-white",
    label: "text-base font-semibold",
    container: "flex w-full justify-between gap-2",
    wrapper: "relative h-full w-full",
    step: "h-full w-full rounded-xs",
    glow: "absolute -inset-1 rounded-xs opacity-30 blur-sm dark:opacity-25",
    incomplete: "h-full w-full rounded-xs bg-gray-200 dark:bg-gray-700"
  },
  variants: {
    size: {
      xs: { container: "h-1.5" },
      sm: { container: "h-2" },
      md: { container: "h-2.5" },
      lg: { container: "h-3" },
      xl: { container: "h-4" }
    },
    color: {
      primary: {
        step: "data-[state=completed]:bg-primary-500 data-[state=completed]:dark:bg-primary-900 data-[state=current]:bg-primary-800 data-[state=current]:dark:bg-primary-400",
        glow: "bg-primary-800 dark:bg-primary-400"
      },
      secondary: {
        step: "data-[state=completed]:bg-secondary-500 data-[state=completed]:dark:bg-secondary-900 data-[state=current]:bg-secondary-800 data-[state=current]:dark:bg-secondary-400",
        glow: "bg-secondary-800 dark:bg-secondary-400"
      },
      gray: {
        step: "data-[state=completed]:bg-gray-400 data-[state=completed]:dark:bg-gray-500 data-[state=current]:bg-gray-700 data-[state=current]:dark:bg-gray-200",
        glow: "bg-gray-700 dark:bg-gray-200"
      },
      red: {
        step: "data-[state=completed]:bg-red-600 data-[state=completed]:dark:bg-red-900 data-[state=current]:bg-red-900 data-[state=current]:dark:bg-red-500",
        glow: "bg-red-900 dark:bg-red-500"
      },
      yellow: {
        step: "data-[state=completed]:bg-yellow-400 data-[state=completed]:dark:bg-yellow-600 data-[state=current]:bg-yellow-600 data-[state=current]:dark:bg-yellow-400",
        glow: "bg-yellow-600 dark:bg-yellow-400"
      },
      green: {
        step: "data-[state=completed]:bg-green-500 data-[state=completed]:dark:bg-green-900 data-[state=current]:bg-green-800 data-[state=current]:dark:bg-green-400",
        glow: "bg-green-800 dark:bg-green-400"
      },
      indigo: {
        step: "data-[state=completed]:bg-indigo-500 data-[state=completed]:dark:bg-indigo-900 data-[state=current]:bg-indigo-800 data-[state=current]:dark:bg-indigo-400",
        glow: "bg-indigo-800 dark:bg-indigo-400"
      },
      purple: {
        step: "data-[state=completed]:bg-purple-500 data-[state=completed]:dark:bg-purple-900 data-[state=current]:bg-purple-800 data-[state=current]:dark:bg-purple-400",
        glow: "bg-purple-800 dark:bg-purple-400"
      },
      pink: {
        step: "data-[state=completed]:bg-pink-500 data-[state=completed]:dark:bg-pink-900 data-[state=current]:bg-pink-800 data-[state=current]:dark:bg-pink-400",
        glow: "bg-pink-800 dark:bg-pink-400"
      },
      blue: {
        step: "data-[state=completed]:bg-blue-500 data-[state=completed]:dark:bg-blue-900 data-[state=current]:bg-blue-800 data-[state=current]:dark:bg-blue-400",
        glow: "bg-blue-800 dark:bg-blue-400"
      },
      custom: {
        step: "",
        glow: ""
      }
    },
    glow: {
      true: {},
      false: {}
    },
    hideLabel: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      glow: !1,
      class: {
        glow: "hidden"
      }
    },
    {
      hideLabel: !0,
      class: {
        label: "hidden"
      }
    }
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
    glow: !1,
    hideLabel: !1
  }
});
h({
  slots: {
    base: "flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base",
    item: "flex items-center",
    content: "flex items-center"
  },
  variants: {
    status: {
      completed: {
        item: "text-primary-600 dark:text-primary-500 md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700",
        content: "after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
      },
      current: {
        item: "md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700",
        content: "after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
      },
      pending: {
        item: "md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700",
        content: "after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
      }
    },
    isLast: {
      true: {
        item: "after:content-none after:hidden",
        content: "after:content-none"
      },
      false: {}
    }
  },
  defaultVariants: {
    status: "pending",
    isLast: !1
  }
});
h({
  slots: {
    base: "flex items-center w-full",
    item: "flex items-center w-full",
    circle: "flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0"
  },
  variants: {
    status: {
      completed: {
        item: "text-primary-600 dark:text-primary-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-primary-100 after:border-4 after:inline-block dark:after:border-primary-800",
        circle: "bg-primary-100 dark:bg-primary-800"
      },
      current: {
        item: "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700",
        circle: "bg-gray-100 dark:bg-gray-700"
      },
      pending: {
        item: "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700",
        circle: "bg-gray-100 dark:bg-gray-700"
      }
    },
    isLast: {
      true: {
        item: "after:content-none"
      },
      false: {}
    }
  },
  defaultVariants: {
    status: "pending",
    isLast: !1
  }
});
h({
  slots: {
    base: "items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse",
    item: "flex items-center space-x-2.5 rtl:space-x-reverse",
    indicator: "flex items-center justify-center w-8 h-8 rounded-full shrink-0"
  },
  variants: {
    status: {
      completed: {
        item: "text-primary-600 dark:text-primary-500",
        indicator: "border border-primary-600 dark:border-primary-500 bg-primary-600 dark:bg-primary-500 text-white"
      },
      current: {
        item: "text-gray-500 dark:text-gray-400",
        indicator: "border border-gray-500 dark:border-gray-400 text-gray-500 dark:text-gray-400"
      },
      pending: {
        item: "text-gray-500 dark:text-gray-400",
        indicator: "border border-gray-500 dark:border-gray-400 text-gray-500 dark:text-gray-400"
      }
    }
  },
  defaultVariants: {
    status: "pending"
  }
});
h({
  slots: {
    base: "space-y-4 w-72",
    card: "w-full p-4 border rounded-lg",
    content: "flex items-center justify-between"
  },
  variants: {
    status: {
      completed: {
        card: "text-green-700 border-green-300 bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
      },
      current: {
        card: "text-primary-700 bg-primary-100 border-primary-300 dark:bg-gray-800 dark:border-primary-800 dark:text-primary-400"
      },
      pending: {
        card: "text-gray-900 bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
      }
    }
  },
  defaultVariants: {
    status: "pending"
  }
});
h({
  slots: {
    base: "flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-xs dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse",
    item: "flex items-center",
    indicator: "flex items-center justify-center w-5 h-5 me-2 text-xs rounded-full shrink-0"
  },
  variants: {
    status: {
      completed: {
        item: "text-primary-600 dark:text-primary-500",
        indicator: "border border-primary-600 dark:border-primary-500 bg-primary-600 dark:bg-primary-500 text-white"
      },
      current: {
        item: "text-gray-500 dark:text-gray-400",
        indicator: "border border-gray-500 dark:border-gray-400 text-gray-500 dark:text-gray-400"
      },
      pending: {
        item: "text-gray-500 dark:text-gray-400",
        indicator: "border border-gray-500 dark:border-gray-400 text-gray-500 dark:text-gray-400"
      }
    },
    hasChevron: {
      true: {},
      false: {}
    }
  },
  defaultVariants: {
    status: "pending",
    hasChevron: !1
  }
});
h({
  slots: {
    base: "relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400",
    item: "ms-6",
    circle: "absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900"
  },
  variants: {
    status: {
      completed: {
        circle: "bg-green-200 dark:bg-green-900"
      },
      current: {
        circle: "bg-gray-100 dark:bg-gray-700"
      },
      pending: {
        circle: "bg-gray-100 dark:bg-gray-700"
      }
    },
    isLast: {
      true: {},
      false: {
        item: "mb-10"
      }
    }
  },
  defaultVariants: {
    status: "pending",
    isLast: !1
  }
});
Ie(["click"]);
h({
  slots: {
    base: "flex space-x-2 rtl:space-x-reverse",
    content: "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4",
    divider: "h-px bg-gray-200 dark:bg-gray-700",
    active: "p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500",
    inactive: "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
  },
  variants: {
    tabStyle: {
      full: {
        active: "p-4 w-full rounded-none group-first:rounded-s-lg group-last:rounded-e-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-hidden dark:bg-gray-700 dark:text-white",
        inactive: "p-4 w-full rounded-none group-first:rounded-s-lg group-last:rounded-e-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-hidden dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      },
      pill: {
        active: "py-3 px-4 text-white bg-primary-600 rounded-lg",
        inactive: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
      },
      underline: {
        base: "-mb-px",
        active: "p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500 bg-transparent",
        inactive: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400 bg-transparent"
      },
      none: {
        active: "",
        inactive: ""
      }
    },
    hasDivider: {
      true: {}
    }
  },
  compoundVariants: [
    {
      tabStyle: ["full", "pill"],
      hasDivider: !0,
      class: {
        divider: "hidden"
      }
    }
  ],
  defaultVariants: {
    tabStyle: "none",
    hasDivider: !0
  }
});
h({
  slots: {
    base: "group focus-within:z-10",
    button: "inline-block text-sm font-medium text-center disabled:cursor-not-allowed"
  },
  variants: {
    open: {
      true: {
        button: "active"
      }
    },
    disabled: {
      true: {
        button: "cursor-not-allowed"
      }
    }
  },
  compoundVariants: [
    {
      open: !0,
      class: {
        button: ""
        // We'll merge this with activeClasses from context
      }
    },
    {
      open: !1,
      class: {
        button: ""
        // We'll merge this with inactiveClasses from context
      }
    }
  ],
  defaultVariants: {
    open: !1,
    disabled: !1
  }
});
var Rs = /* @__PURE__ */ G("<!> <!>", 1), Os = /* @__PURE__ */ G("<div><table><!><!><!></table></div>");
function Ns(r, e) {
  fe(e, !0);
  let t = M(e, "border", 3, !0), a = M(e, "color", 3, "default"), o = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "footerSlot",
    "captionSlot",
    "items",
    "divClass",
    "striped",
    "hoverable",
    "border",
    "shadow",
    "color",
    "class",
    "classes"
  ]);
  e.divClass;
  const n = /* @__PURE__ */ A(() => e.classes ?? { div: e.divClass }), l = Oe("table"), c = /* @__PURE__ */ A(() => Ys({ color: a(), shadow: e.shadow })), s = /* @__PURE__ */ A(() => i(c).div), d = /* @__PURE__ */ A(() => i(c).table);
  Nt("tableCtx", {
    get striped() {
      return e.striped;
    },
    get hoverable() {
      return e.hoverable;
    },
    get border() {
      return t();
    },
    get color() {
      return a();
    }
  });
  let u = /* @__PURE__ */ A(() => e.items && e.items.length > 0 ? Object.keys(e.items[0]).map((v) => ({ text: v.charAt(0).toUpperCase() + v.slice(1) })) : []), f = /* @__PURE__ */ A(() => e.items && e.items.length > 0 ? e.items.map((v) => Object.values(v)) : []);
  var y = Os(), b = q(y);
  we(b, (v) => ({ ...o, class: v }), [
    () => i(d)({ class: te(l?.table, e.class) })
  ]);
  var p = q(b);
  {
    var x = (v) => {
      var E = K(), _ = D(E);
      J(_, () => e.captionSlot), k(v, E);
    };
    F(p, (v) => {
      e.captionSlot && v(x);
    });
  }
  var T = ne(p);
  {
    var m = (v) => {
      var E = Rs(), _ = D(E);
      kn(_, {
        get headItems() {
          return i(u);
        }
      });
      var S = ne(_, 2);
      hn(S, {
        get bodyItems() {
          return i(f);
        }
      }), k(v, E);
    }, w = (v) => {
      var E = K(), _ = D(E);
      {
        var S = (B) => {
          var U = K(), P = D(U);
          J(P, () => e.children), k(B, U);
        };
        F(
          _,
          (B) => {
            e.children && B(S);
          },
          !0
        );
      }
      k(v, E);
    };
    F(T, (v) => {
      e.items && e.items.length > 0 ? v(m) : v(w, !1);
    });
  }
  var I = ne(T);
  {
    var L = (v) => {
      var E = K(), _ = D(E);
      J(_, () => e.footerSlot), k(v, E);
    };
    F(I, (v) => {
      e.footerSlot && v(L);
    });
  }
  ee((v) => Z(y, 1, v), [
    () => $(i(s)({ class: te(l?.div, i(n).div) }))
  ]), k(r, y), pe();
}
var Ds = /* @__PURE__ */ G("<tbody><!></tbody>");
function hn(r, e) {
  fe(e, !0);
  let t = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "bodyItems",
    "class"
  ]);
  function a(s) {
    return Array.isArray(s) ? s : Object.values(s);
  }
  var o = Ds();
  we(o, (s) => ({ ...t, class: s }), [() => te(e.class)]);
  var n = q(o);
  {
    var l = (s) => {
      var d = K(), g = D(d);
      lr(g, 17, () => e.bodyItems, Tr, (u, f) => {
        ha(u, {
          children: (y, b) => {
            var p = K(), x = D(p);
            lr(x, 17, () => a(i(f)), Tr, (T, m) => {
              ya(T, {
                children: (w, I) => {
                  var L = ht();
                  ee(() => Me(L, i(m) ?? "")), k(w, L);
                },
                $$slots: { default: !0 }
              });
            }), k(y, p);
          },
          $$slots: { default: !0 }
        });
      }), k(s, d);
    }, c = (s) => {
      var d = K(), g = D(d);
      {
        var u = (f) => {
          var y = K(), b = D(y);
          J(b, () => e.children), k(f, y);
        };
        F(
          g,
          (f) => {
            e.children && f(u);
          },
          !0
        );
      }
      k(s, d);
    };
    F(n, (s) => {
      e.bodyItems ? s(l) : s(c, !1);
    });
  }
  k(r, o), pe();
}
var Fs = /* @__PURE__ */ G("<button><!></button>"), Gs = /* @__PURE__ */ G("<td><!></td>");
function ya(r, e) {
  fe(e, !0);
  let t = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class",
    "colspan",
    "onclick"
  ]);
  const a = Oe("tableBodyCell");
  var o = Gs();
  we(o, (s) => ({ ...t, class: s, colspan: e.colspan ?? 1 }), [() => Js({ class: te(a, e.class) })]);
  var n = q(o);
  {
    var l = (s) => {
      var d = Fs();
      d.__click = function(...f) {
        e.onclick?.apply(this, f);
      };
      var g = q(d);
      {
        var u = (f) => {
          var y = K(), b = D(y);
          J(b, () => e.children), k(f, y);
        };
        F(g, (f) => {
          e.children && f(u);
        });
      }
      k(s, d);
    }, c = (s) => {
      var d = K(), g = D(d);
      {
        var u = (f) => {
          var y = K(), b = D(y);
          J(b, () => e.children), k(f, y);
        };
        F(
          g,
          (f) => {
            e.children && f(u);
          },
          !0
        );
      }
      k(s, d);
    };
    F(n, (s) => {
      e.onclick ? s(l) : s(c, !1);
    });
  }
  k(r, o), pe();
}
Ie(["click"]);
var Ws = /* @__PURE__ */ G("<tr><!></tr>");
function ha(r, e) {
  fe(e, !0);
  let t = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class",
    "color",
    "striped",
    "hoverable",
    "border"
  ]);
  const a = Oe("tableBodyRow"), o = sr("tableCtx");
  let n = /* @__PURE__ */ A(() => e.color || o.color || "default"), l = /* @__PURE__ */ A(() => e.hoverable || o.hoverable || !1), c = /* @__PURE__ */ A(() => e.striped || o.striped || !1), s = /* @__PURE__ */ A(() => e.border || o.border || !1);
  const d = /* @__PURE__ */ A(() => Xs({
    color: i(n),
    hoverable: i(l),
    striped: i(c),
    border: i(s),
    class: te(a, e.class)
  }));
  var g = Ws();
  we(g, () => ({ ...t, class: i(d) }));
  var u = q(g);
  {
    var f = (y) => {
      var b = K(), p = D(b);
      J(p, () => e.children), k(y, b);
    };
    F(u, (y) => {
      e.children && y(f);
    });
  }
  k(r, g), pe();
}
var Hs = /* @__PURE__ */ G("<th><!></th>");
function vn(r, e) {
  fe(e, !0);
  let t = /* @__PURE__ */ me(e, ["$$slots", "$$events", "$$legacy", "children", "class"]);
  const a = Oe("tableHeadCell");
  var o = Hs();
  we(o, (c) => ({ ...t, class: c }), [() => Qs({ class: te(a, e.class) })]);
  var n = q(o);
  {
    var l = (c) => {
      var s = K(), d = D(s);
      J(d, () => e.children), k(c, s);
    };
    F(n, (c) => {
      e.children && c(l);
    });
  }
  k(r, o), pe();
}
var qs = /* @__PURE__ */ G("<!> <tr></tr>", 1), Us = /* @__PURE__ */ G("<tr><!></tr>"), Ks = /* @__PURE__ */ G("<thead><!></thead>");
function kn(r, e) {
  fe(e, !0);
  let t = M(e, "defaultRow", 3, !0), a = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "headerSlot",
    "color",
    "striped",
    "border",
    "class",
    "headItems",
    "defaultRow"
  ]);
  const o = Oe("tableHead"), n = sr("tableCtx");
  let l = /* @__PURE__ */ A(() => e.color ? e.color : n.color || "default"), c = /* @__PURE__ */ A(() => e.striped ? e.striped : n.striped || !1), s = /* @__PURE__ */ A(() => e.border ? e.border : n.border || !1);
  const d = /* @__PURE__ */ A(() => Zs({
    color: i(l),
    border: i(s),
    striped: i(c),
    class: te(o, e.class)
  }));
  function g(p) {
    return typeof p == "object" && "text" in p ? p.text : String(p);
  }
  var u = Ks();
  we(u, () => ({ ...a, class: i(d) }));
  var f = q(u);
  {
    var y = (p) => {
      var x = qs(), T = D(x);
      {
        var m = (I) => {
          var L = K(), v = D(L);
          J(v, () => e.headerSlot), k(I, L);
        };
        F(T, (I) => {
          e.headerSlot && I(m);
        });
      }
      var w = ne(T, 2);
      lr(w, 21, () => e.headItems, Tr, (I, L) => {
        vn(I, {
          children: (v, E) => {
            var _ = ht();
            ee((S) => Me(_, S), [() => g(i(L))]), k(v, _);
          },
          $$slots: { default: !0 }
        });
      }), k(p, x);
    }, b = (p) => {
      var x = K(), T = D(x);
      {
        var m = (w) => {
          var I = K(), L = D(I);
          {
            var v = (_) => {
              var S = Us(), B = q(S);
              J(B, () => e.children), k(_, S);
            }, E = (_) => {
              var S = K(), B = D(S);
              J(B, () => e.children), k(_, S);
            };
            F(L, (_) => {
              t() ? _(v) : _(E, !1);
            });
          }
          k(w, I);
        };
        F(
          T,
          (w) => {
            e.children && w(m);
          },
          !0
        );
      }
      k(p, x);
    };
    F(f, (p) => {
      e.headItems ? p(y) : p(b, !1);
    });
  }
  k(r, u), pe();
}
const Ys = h({
  slots: {
    div: "relative overflow-x-auto",
    table: "w-full text-left text-sm"
  },
  variants: {
    color: {
      // default, primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      default: { table: "text-gray-500 dark:text-gray-400" },
      primary: { table: "text-primary-100 dark:text-primary-100" },
      secondary: { table: "text-secondary-100 dark:text-secondary-100" },
      gray: { table: "text-gray-100 dark:text-gray-100" },
      red: { table: "text-red-100 dark:text-red-100" },
      orange: { table: "text-orange-100 dark:text-orange-100" },
      amber: { table: "text-amber-100 dark:text-amber-100" },
      yellow: { table: "text-yellow-100 dark:text-yellow-100" },
      lime: { table: "text-lime-100 dark:text-lime-100" },
      green: { table: "text-green-100 dark:text-green-100" },
      emerald: { table: "text-emerald-100 dark:text-emerald-100" },
      teal: { table: "text-teal-100 dark:text-teal-100" },
      cyan: { table: "text-cyan-100 dark:text-cyan-100" },
      sky: { table: "text-sky-100 dark:text-sky-100" },
      blue: { table: "text-blue-100 dark:text-blue-100" },
      indigo: { table: "text-indigo-100 dark:text-indigo-100" },
      violet: { table: "text-violet-100 dark:text-violet-100" },
      purple: { table: "text-purple-100 dark:text-purple-100" },
      fuchsia: { table: "text-fuchsia-100 dark:text-fuchsia-100" },
      pink: { table: "text-pink-100 dark:text-pink-100" },
      rose: { table: "text-rose-100 dark:text-rose-100" }
    },
    shadow: {
      true: { div: "shadow-md sm:rounded-lg" }
    }
  }
}), Xs = h({
  base: "",
  variants: {
    color: {
      default: "bg-white dark:bg-gray-800 dark:border-gray-700",
      primary: "bg-white bg-primary-500 border-primary-400",
      secondary: "bg-white bg-secondary-500 border-secondary-400",
      gray: "bg-gray-500 border-gray-400",
      red: "bg-red-500 border-red-400",
      orange: "bg-orange-500 border-orange-400",
      amber: "bg-amber-500 border-amber-400",
      yellow: "bg-yellow-500 border-yellow-400",
      lime: "bg-lime-500 border-lime-400",
      green: "bg-white bg-green-500 border-green-400",
      emerald: "bg-emerald-500 border-emerald-400",
      teal: "bg-teal-500 border-teal-400",
      cyan: "bg-cyan-500 border-cyan-400",
      sky: "bg-sky-500 border-sky-400",
      blue: "bg-white bg-blue-500 border-blue-400",
      indigo: "bg-indigo-500 border-indigo-400",
      violet: "bg-violet-500 border-violet-400",
      purple: "bg-purple-500 border-purple-400",
      fuchsia: "bg-fuchsia-500 border-fuchsia-400",
      pink: "bg-pink-500 border-pink-400",
      rose: "bg-rose-500 border-rose-400"
    },
    hoverable: {
      true: ""
    },
    striped: {
      true: ""
    },
    border: {
      true: "border-b last:border-b-0"
    }
  },
  compoundVariants: [
    {
      hoverable: !0,
      color: "default",
      class: "hover:bg-gray-50 dark:hover:bg-gray-600"
    },
    {
      hoverable: !0,
      color: "primary",
      class: "hover:bg-primary-400 dark:hover:bg-primary-400"
    },
    {
      hoverable: !0,
      color: "secondary",
      class: "hover:bg-secondary-400 dark:hover:bg-secondary-400"
    },
    {
      hoverable: !0,
      color: "gray",
      class: "hover:bg-gray-400 dark:hover:bg-gray-400"
    },
    {
      hoverable: !0,
      color: "red",
      class: "hover:bg-red-400 dark:hover:bg-red-400"
    },
    {
      hoverable: !0,
      color: "orange",
      class: "hover:bg-orange-400 dark:hover:bg-orange-400"
    },
    {
      hoverable: !0,
      color: "amber",
      class: "hover:bg-amber-400 dark:hover:bg-amber-400"
    },
    {
      hoverable: !0,
      color: "yellow",
      class: "hover:bg-yellow-400 dark:hover:bg-yellow-400"
    },
    {
      hoverable: !0,
      color: "lime",
      class: "hover:bg-lime-400 dark:hover:bg-lime-400"
    },
    {
      hoverable: !0,
      color: "green",
      class: "hover:bg-green-400 dark:hover:bg-green-400"
    },
    {
      hoverable: !0,
      color: "emerald",
      class: "hover:bg-emerald-400 dark:hover:bg-emerald-400"
    },
    {
      hoverable: !0,
      color: "teal",
      class: "hover:bg-teal-400 dark:hover:bg-teal-400"
    },
    {
      hoverable: !0,
      color: "cyan",
      class: "hover:bg-cyan-400 dark:hover:bg-cyan-400"
    },
    {
      hoverable: !0,
      color: "sky",
      class: "hover:bg-sky-400 dark:hover:bg-sky-400"
    },
    {
      hoverable: !0,
      color: "blue",
      class: "hover:bg-blue-400 dark:hover:bg-blue-400"
    },
    {
      hoverable: !0,
      color: "indigo",
      class: "hover:bg-indigo-400 dark:hover:bg-indigo-400"
    },
    {
      hoverable: !0,
      color: "violet",
      class: "hover:bg-violet-400 dark:hover:bg-violet-400"
    },
    {
      hoverable: !0,
      color: "purple",
      class: "hover:bg-purple-400 dark:hover:bg-purple-400"
    },
    {
      hoverable: !0,
      color: "fuchsia",
      class: "hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400"
    },
    {
      hoverable: !0,
      color: "pink",
      class: "hover:bg-pink-400 dark:hover:bg-pink-400"
    },
    {
      hoverable: !0,
      color: "rose",
      class: "hover:bg-rose-400 dark:hover:bg-rose-400"
    },
    {
      striped: !0,
      color: "default",
      class: "odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700"
    },
    {
      striped: !0,
      color: "primary",
      class: "odd:bg-primary-500 even:bg-primary-600 dark:odd:bg-primary-500 dark:even:bg-primary-600"
    },
    {
      striped: !0,
      color: "secondary",
      class: "odd:bg-secondary-500 even:bg-secondary-600 dark:odd:bg-secondary-500 dark:even:bg-secondary-600"
    },
    {
      striped: !0,
      color: "gray",
      class: "odd:bg-gray-500 even:bg-gray-600 dark:odd:bg-gray-500 dark:even:bg-gray-600"
    },
    // default, primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      striped: !0,
      color: "red",
      class: "odd:bg-red-500 even:bg-red-600 dark:odd:bg-red-500 dark:even:bg-red-600"
    },
    {
      striped: !0,
      color: "orange",
      class: "odd:bg-orange-500 even:bg-orange-600 dark:odd:bg-orange-500 dark:even:bg-orange-600"
    },
    {
      striped: !0,
      color: "amber",
      class: "odd:bg-amber-500 even:bg-amber-600 dark:odd:bg-amber-500 dark:even:bg-amber-600"
    },
    {
      striped: !0,
      color: "yellow",
      class: "odd:bg-yellow-500 even:bg-yellow-600 dark:odd:bg-yellow-500 dark:even:bg-yellow-600"
    },
    {
      striped: !0,
      color: "lime",
      class: "odd:bg-lime-500 even:bg-lime-600 dark:odd:bg-lime-500 dark:even:bg-lime-600"
    },
    {
      striped: !0,
      color: "green",
      class: "odd:bg-green-500 even:bg-green-600 dark:odd:bg-green-500 dark:even:bg-green-600"
    },
    {
      striped: !0,
      color: "emerald",
      class: "odd:bg-emerald-500 even:bg-emerald-600 dark:odd:bg-emerald-500 dark:even:bg-emerald-600"
    },
    {
      striped: !0,
      color: "teal",
      class: "odd:bg-teal-500 even:bg-teal-600 dark:odd:bg-teal-500 dark:even:bg-teal-600"
    },
    {
      striped: !0,
      color: "cyan",
      class: "odd:bg-cyan-500 even:bg-cyan-600 dark:odd:bg-cyan-500 dark:even:bg-cyan-600"
    },
    {
      striped: !0,
      color: "sky",
      class: "odd:bg-sky-500 even:bg-sky-600 dark:odd:bg-sky-500 dark:even:bg-sky-600"
    },
    {
      striped: !0,
      color: "blue",
      class: "odd:bg-blue-500 even:bg-blue-600 dark:odd:bg-blue-500 dark:even:bg-blue-600"
    },
    {
      striped: !0,
      color: "indigo",
      class: "odd:bg-indigo-500 even:bg-indigo-600 dark:odd:bg-indigo-500 dark:even:bg-indigo-600"
    },
    {
      striped: !0,
      color: "violet",
      class: "odd:bg-violet-500 even:bg-violet-600 dark:odd:bg-violet-500 dark:even:bg-violet-600"
    },
    {
      striped: !0,
      color: "purple",
      class: "odd:bg-purple-500 even:bg-purple-600 dark:odd:bg-purple-500 dark:even:bg-purple-600"
    },
    {
      striped: !0,
      color: "fuchsia",
      class: "odd:bg-fuchsia-500 even:bg-fuchsia-600 dark:odd:bg-fuchsia-500 dark:even:bg-fuchsia-600"
    },
    {
      striped: !0,
      color: "pink",
      class: "odd:bg-pink-500 even:bg-pink-600 dark:odd:bg-pink-500 dark:even:bg-pink-600"
    },
    {
      striped: !0,
      color: "rose",
      class: "odd:bg-rose-500 even:bg-rose-600 dark:odd:bg-rose-500 dark:even:bg-rose-600"
    }
  ]
}), Zs = h({
  base: "text-xs uppercase",
  variants: {
    color: {
      // default, primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      default: "text-gray-700 dark:text-gray-400 bg-gray-50 dark:bg-gray-700",
      primary: "text-white dark:text-white bg-primary-700 dark:bg-primary-700",
      secondary: "text-white dark:text-white bg-secondary-700 dark:bg-secondary-700",
      gray: "text-white dark:text-white bg-gray-700 dark:bg-gray-700",
      red: "text-white dark:text-white bg-red-700 dark:bg-red-700",
      orange: "text-white dark:text-white bg-orange-700 dark:bg-orange-700",
      amber: "text-white dark:text-white bg-amber-700 dark:bg-amber-700",
      yellow: "text-white dark:text-white bg-yellow-700 dark:bg-yellow-700",
      lime: "text-white dark:text-white bg-lime-700 dark:bg-lime-700",
      green: "text-white dark:text-white bg-green-700 dark:bg-green-700",
      emerald: "text-white dark:text-white bg-emerald-700 dark:bg-emerald-700",
      teal: "text-white dark:text-white bg-teal-700 dark:bg-teal-700",
      cyan: "text-white dark:text-white bg-cyan-700 dark:bg-cyan-700",
      sky: "text-white dark:text-white bg-sky-700 dark:bg-sky-700",
      blue: "text-white dark:text-white bg-blue-700 dark:bg-blue-700",
      indigo: "text-white dark:text-white bg-indigo-700 dark:bg-indigo-700",
      violet: "text-white dark:text-white bg-violet-700 dark:bg-violet-700",
      purple: "text-white dark:text-white bg-purple-700 dark:bg-purple-700",
      fuchsia: "text-white dark:text-white bg-fuchsia-700 dark:bg-fuchsia-700",
      pink: "text-white dark:text-white bg-pink-700 dark:bg-pink-700",
      rose: "text-white dark:text-white bg-rose-700 dark:bg-rose-700"
    },
    border: {
      true: "",
      false: ""
    },
    striped: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      color: "default",
      border: !0,
      class: ""
      //"bg-transparent dark:bg-transparent"
    },
    {
      color: "default",
      striped: !0,
      class: ""
      //"bg-transparent dark:bg-transparent border-gray-700"
    },
    {
      striped: !0,
      color: "blue",
      class: "border-blue-400"
    },
    {
      striped: !0,
      color: "green",
      class: "border-green-400"
    },
    {
      striped: !0,
      color: "red",
      class: "border-red-400"
    },
    {
      striped: !0,
      color: "yellow",
      class: "border-yellow-400"
    },
    {
      striped: !0,
      color: "purple",
      class: "border-purple-400"
    },
    {
      striped: !0,
      color: "indigo",
      class: "border-indigo-400"
    },
    {
      striped: !0,
      color: "pink",
      class: "border-pink-400"
    }
  ]
}), Js = h({
  base: "px-6 py-4 whitespace-nowrap font-medium"
}), Qs = h({
  base: "px-6 py-3"
});
h({
  slots: {
    root: "relative overflow-x-auto shadow-md sm:rounded-lg",
    inner: "p-4",
    search: "relative mt-1",
    svgDiv: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
    svg: "w-5 h-5",
    input: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    table: "w-full text-left text-sm"
  },
  variants: {
    color: {
      default: {
        svg: "text-gray-500 dark:text-gray-400",
        table: "text-gray-500 dark:text-gray-400"
      },
      blue: {
        svg: "text-blue-500 dark:text-blue-400",
        table: "text-blue-100 dark:text-blue-100"
      },
      green: {
        svg: "text-green-500 dark:text-green-400",
        table: "text-green-100 dark:text-green-100"
      },
      red: {
        svg: "text-red-500 dark:text-red-400",
        table: "text-red-100 dark:text-red-100"
      },
      yellow: {
        svg: "text-yellow-500 dark:text-yellow-400",
        table: "text-yellow-100 dark:text-yellow-100"
      },
      purple: {
        svg: "text-purple-500 dark:text-purple-400",
        table: "text-purple-100 dark:text-purple-100"
      },
      indigo: {
        svg: "text-indigo-500 dark:text-indigo-400",
        table: "text-indigo-100 dark:text-indigo-100"
      },
      pink: {
        svg: "text-pink-500 dark:text-pink-400",
        table: "text-pink-100 dark:text-pink-100"
      }
    },
    striped: {
      true: {
        table: "[&_tbody_tr:nth-child(odd)]:bg-white [&_tbody_tr:nth-child(odd)]:dark:bg-gray-900 [&_tbody_tr:nth-child(even)]:bg-gray-50 [&_tbody_tr:nth-child(even)]:dark:bg-gray-800"
      },
      false: {}
    },
    hoverable: {
      true: {
        table: "[&_tbody_tr]:hover:bg-gray-50 [&_tbody_tr]:dark:hover:bg-gray-600"
      },
      false: {}
    }
  },
  defaultVariants: {
    color: "default",
    striped: !1,
    hoverable: !1
  }
});
h({
  base: "relative border-s border-gray-200 dark:border-gray-700"
});
h({
  slots: {
    li: "mb-10 ms-6",
    span: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900",
    img: "rounded-full shadow-lg",
    outer: "p-4 bg-white rounded-lg border border-gray-200 shadow-xs dark:bg-gray-700 dark:border-gray-600",
    inner: "justify-between items-center mb-3 sm:flex",
    time: "mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0",
    title: "text-sm font-normal text-gray-500 lex dark:text-gray-300",
    text: "p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300"
  }
});
h({
  slots: {
    div: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
    time: "text-lg font-semibold text-gray-900 dark:text-white",
    ol: "mt-3 divide-y divider-gray-200 dark:divide-gray-700"
  }
});
h({
  slots: {
    base: "",
    a: "block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700",
    img: "me-3 mb-3 w-12 h-12 rounded-full sm:mb-0",
    div: "text-gray-600 dark:text-gray-400",
    title: "text-base font-normal",
    span: "inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400",
    svg: "me-1 h-3 w-3"
  }
});
h({
  variants: {
    order: {
      group: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
      horizontal: "sm:flex",
      activity: "relative border-s border-gray-200 dark:border-gray-700",
      vertical: "relative border-s border-gray-200 dark:border-gray-700",
      default: "relative border-s border-gray-200 dark:border-gray-700"
    }
  },
  defaultVariants: {
    order: "default"
  }
});
h({
  slots: {
    base: "",
    div: "",
    time: "",
    h3: "",
    svg: "w-3 h-3 text-primary-600 dark:text-primary-400"
  },
  variants: {
    order: {
      default: {
        base: "mb-10 ms-4",
        div: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      },
      vertical: {
        base: "mb-10 ms-6",
        div: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
      },
      horizontal: {
        base: "relative mb-6 sm:mb-0",
        div: "flex items-center",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      },
      activity: {
        base: "mb-10 ms-6",
        div: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      },
      group: {
        base: "",
        div: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
        time: "text-lg font-semibold text-gray-900 dark:text-white",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      }
    }
  },
  defaultVariants: {
    order: "default"
  }
});
h({
  slots: {
    base: "flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 gap-3",
    icon: "w-8 h-8 inline-flex items-center justify-center shrink-0 rounded-lg",
    content: "w-full text-sm font-normal",
    close: "ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
  },
  variants: {
    position: {
      "top-left": { base: "absolute top-5 start-5" },
      "top-right": { base: "absolute top-5 end-5" },
      "bottom-left": { base: "absolute bottom-5 start-5" },
      "bottom-right": { base: "absolute bottom-5 end-5" }
    },
    color: {
      // primary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        icon: "text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200",
        close: "text-primary-500 dark:text-primary-200 hover:text-primary-600 dark:hover:text-primary-500"
      },
      gray: {
        icon: "text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-200",
        close: "text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-500"
      },
      red: {
        icon: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
        close: "text-red-500 dark:text-red-200 hover:text-red-600 dark:hover:text-red-500"
      },
      orange: {
        icon: "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200",
        close: "text-orange-500 dark:text-orange-200 hover:text-orange-600 dark:hover:text-orange-500"
      },
      amber: {
        icon: "text-amber-500 bg-amber-100 dark:bg-amber-700 dark:text-amber-200",
        close: "text-amber-500 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-500"
      },
      yellow: {
        icon: "text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200",
        close: "text-yellow-500 dark:text-yellow-200 hover:text-yellow-600 dark:hover:text-yellow-500"
      },
      lime: {
        icon: "text-lime-500 bg-lime-100 dark:bg-lime-700 dark:text-lime-200",
        close: "text-lime-500 dark:text-lime-200 hover:text-lime-600 dark:hover:text-lime-500"
      },
      green: {
        icon: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
        close: "text-green-500 dark:text-green-200 hover:text-green-600 dark:hover:text-green-500"
      },
      emerald: {
        icon: "text-emerald-500 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-200",
        close: "text-emerald-500 dark:text-emerald-200 hover:text-emerald-600 dark:hover:text-emerald-500"
      },
      teal: {
        icon: "text-teal-500 bg-teal-100 dark:bg-teal-800 dark:text-teal-200",
        close: "text-teal-500 dark:text-teal-200 hover:text-teal-600 dark:hover:text-teal-500"
      },
      cyan: {
        icon: "text-cyan-500 bg-cyan-100 dark:bg-cyan-800 dark:text-cyan-200",
        close: "text-cyan-500 dark:text-cyan-200 hover:text-cyan-600 dark:hover:text-cyan-500"
      },
      sky: {
        icon: "text-sky-500 bg-sky-100 dark:bg-sky-800 dark:text-sky-200",
        close: "text-sky-500 dark:text-sky-200 hover:text-sky-600 dark:hover:text-sky-500"
      },
      blue: {
        icon: "text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200",
        close: "text-blue-500 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-500"
      },
      indigo: {
        icon: "text-indigo-500 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-200",
        close: "text-indigo-500 dark:text-indigo-200 hover:text-indigo-600 dark:hover:text-indigo-500"
      },
      violet: {
        icon: "text-violet-500 bg-violet-100 dark:bg-violet-800 dark:text-violet-200",
        close: "text-violet-500 dark:text-violet-200 hover:text-violet-600 dark:hover:text-violet-500"
      },
      purple: {
        icon: "text-purple-500 bg-purple-100 dark:bg-purple-800 dark:text-purple-200",
        close: "text-purple-500 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-500"
      },
      fuchsia: {
        icon: "text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-800 dark:text-fuchsia-200",
        close: "text-fuchsia-500 dark:text-fuchsia-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-500"
      },
      pink: {
        icon: "text-pink-500 bg-pink-100 dark:bg-pink-700 dark:text-pink-200",
        close: "text-pink-500 dark:text-pink-200 hover:text-pink-600 dark:hover:text-pink-500"
      },
      rose: {
        icon: "text-rose-500 bg-rose-100 dark:bg-rose-700 dark:text-rose-200",
        close: "text-rose-500 dark:text-rose-200 hover:text-rose-600 dark:hover:text-rose-500"
      }
    },
    align: {
      true: { base: "items-center" },
      false: { base: "items-start" }
    }
  }
});
h({
  base: "absolute px-3 py-2 rounded-lg text-sm z-50 pointer-events-none",
  variants: {
    type: {
      light: "bg-white text-gray-800 dark:bg-white dark:text-gray-800 border border-gray-200 dark:border-gray-200",
      auto: "bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700",
      dark: "bg-gray-800 text-white dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700"
    },
    color: {
      // default: "bg-gray-800 dark:bg-gray-300 dark:text-gray-800",
      primary: "bg-primary-600 dark:bg-primary-600",
      secondary: "bg-secondary-600 dark:bg-secondary-600",
      gray: "bg-gray-600 dark:bg-gray-600",
      red: "bg-red-600 dark:bg-red-600",
      orange: "bg-orange-600 dark:bg-orange-600",
      amber: "bg-amber-600 dark:bg-amber-600",
      yellow: "bg-yellow-400 dark:bg-yellow-400",
      lime: "bg-lime-600 dark:bg-lime-600",
      green: "bg-green-600 dark:bg-green-600",
      emerald: "bg-emerald-600 dark:bg-emerald-600",
      teal: "bg-teal-600 dark:bg-teal-600",
      cyan: "bg-cyan-600 dark:bg-cyan-600",
      sky: "bg-sky-600 dark:bg-sky-600",
      blue: "bg-blue-600 dark:bg-blue-600",
      indigo: "bg-indigo-600 dark:bg-indigo-600",
      violet: "bg-violet-600 dark:bg-violet-600",
      purple: "bg-purple-600 dark:bg-purple-600",
      fuchsia: "bg-fuchsia-600 dark:bg-fuchsia-600",
      pink: "bg-pink-600 dark:bg-pink-600",
      rose: "bg-rose-800 dark:bg-rose-800"
    }
  },
  defaultVariants: {
    type: "dark",
    color: void 0
  }
});
h({
  base: "inline-flex border border-gray-300 overflow-hidden",
  variants: {
    roundedSize: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full"
    }
  }
});
h({
  slots: {
    button: "relative flex items-center transition-all duration-200 focus:outline-none border-r last:border-r-0 dark:bg-white dark:text-gray-800",
    content: "flex items-center w-full overflow-hidden relative",
    text: "transition-all duration-200 ml-0",
    icon: "absolute left-0 flex-shrink-0 text-green-600"
  },
  variants: {
    selected: {
      true: {
        text: "ml-5"
      },
      false: {}
    },
    size: {
      sm: {
        button: "p-1 px-2 text-sm"
      },
      md: {
        button: "p-2 px-4 text-base"
      },
      lg: {
        button: "p-3 px-5 text-lg"
      },
      xl: {
        button: "p-4 px-6 text-xl"
      }
    },
    roundedSize: {
      sm: {
        button: "first:rounded-s-sm last:rounded-e-sm"
      },
      md: {
        button: "first:rounded-s-md last:rounded-e-md"
      },
      lg: {
        button: "first:rounded-s-lg last:rounded-e-lg"
      },
      xl: {
        button: "first:rounded-s-xl last:rounded-e-xl"
      },
      full: {
        button: "first:rounded-s-full last:rounded-e-full"
      }
    },
    color: {
      primary: {
        button: "data-[selected=true]:bg-primary-200 data-[selected=false]:hover:bg-gray-100"
      },
      secondary: {
        button: "data-[selected=true]:bg-secondary-200 data-[selected=false]:hover:bg-gray-100"
      },
      gray: {
        button: "data-[selected=true]:bg-gray-200 data-[selected=false]:hover:bg-gray-100"
      },
      red: {
        button: "data-[selected=true]:bg-red-200 data-[selected=false]:hover:bg-red-50"
      },
      orange: {
        button: "data-[selected=true]:bg-orange-200 data-[selected=false]:hover:bg-orange-50"
      },
      amber: {
        button: "data-[selected=true]:bg-amber-200 data-[selected=false]:hover:bg-amber-50"
      },
      yellow: {
        button: "data-[selected=true]:bg-yellow-200 data-[selected=false]:hover:bg-yellow-50"
      },
      lime: {
        button: "data-[selected=true]:bg-lime-200 data-[selected=false]:hover:bg-lime-50"
      },
      green: {
        button: "data-[selected=true]:bg-green-200 data-[selected=false]:hover:bg-green-50"
      },
      emerald: {
        button: "data-[selected=true]:bg-emerald-200 data-[selected=false]:hover:bg-emerald-50"
      },
      teal: {
        button: "data-[selected=true]:bg-teal-200 data-[selected=false]:hover:bg-teal-50"
      },
      cyan: {
        button: "data-[selected=true]:bg-cyan-200 data-[selected=false]:hover:bg-cyan-50"
      },
      sky: {
        button: "data-[selected=true]:bg-sky-200 data-[selected=false]:hover:bg-sky-50"
      },
      blue: {
        button: "data-[selected=true]:bg-blue-200 data-[selected=false]:hover:bg-blue-50"
      },
      indigo: {
        button: "data-[selected=true]:bg-indigo-200 data-[selected=false]:hover:bg-indigo-50"
      },
      violet: {
        button: "data-[selected=true]:bg-violet-200 data-[selected=false]:hover:bg-violet-50"
      },
      purple: {
        button: "data-[selected=true]:bg-purple-200 data-[selected=false]:hover:bg-purple-50"
      },
      fuchsia: {
        button: "data-[selected=true]:bg-fuchsia-200 data-[selected=false]:hover:bg-fuchsia-50"
      },
      pink: {
        button: "data-[selected=true]:bg-pink-200 data-[selected=false]:hover:bg-pink-50"
      },
      rose: {
        button: "data-[selected=true]:bg-rose-200 data-[selected=false]:hover:bg-rose-50"
      },
      none: {}
    }
  },
  defaultVariants: {
    selected: !1,
    color: "primary",
    size: "md",
    roundedSize: "md"
  }
});
h({
  slots: {
    base: "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 rounded-sm",
    div: "flex items-center"
  },
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        base: "text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600"
      },
      secondary: {
        base: "text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600"
      },
      gray: {
        base: "text-gray-600 focus:ring-gray-600 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
      },
      red: {
        base: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600"
      },
      orange: {
        base: "text-orange-600 focus:ring-orange-600 dark:ring-offset-orange-600 dark:focus:ring-orange-600"
      },
      amber: {
        base: "text-amber-600 focus:ring-amber-600 dark:ring-offset-amber-600 dark:focus:ring-amber-600"
      },
      yellow: {
        base: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400"
      },
      lime: {
        base: "text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700"
      },
      green: {
        base: "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600"
      },
      emerald: {
        base: "text-emerald-600 focus:ring-emerald-600 dark:ring-offset-emerald-600 dark:focus:ring-emerald-600"
      },
      teal: {
        base: "text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600"
      },
      cyan: {
        base: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600"
      },
      sky: {
        base: "text-sky-600 focus:ring-sky-600 dark:ring-offset-sky-600 dark:focus:ring-sky-600"
      },
      blue: {
        base: "text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700"
      },
      indigo: {
        base: "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700"
      },
      violet: {
        base: "text-violet-600 focus:ring-violet-600 dark:ring-offset-violet-600 dark:focus:ring-violet-600"
      },
      purple: {
        base: "text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600"
      },
      fuchsia: {
        base: "text-fuchsia-600 focus:ring-fuchsia-600 dark:ring-offset-fuchsia-600 dark:focus:ring-fuchsia-600"
      },
      pink: {
        base: "text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600"
      },
      rose: {
        base: "text-rose-600 focus:ring-rose-600 dark:ring-offset-rose-600 dark:focus:ring-rose-600"
      }
    },
    tinted: {
      true: { base: "dark:bg-gray-600 dark:border-gray-500" },
      false: { base: "dark:bg-gray-700 dark:border-gray-600" }
    },
    custom: {
      true: { base: "sr-only peer" }
    },
    rounded: {
      true: { base: "rounded-sm" }
    },
    inline: {
      true: {
        div: "inline-flex",
        false: "flex items-center"
      }
    },
    disabled: {
      true: {
        base: "cursor-not-allowed opacity-50 bg-gray-200 border-gray-300",
        div: "cursor-not-allowed opacity-70"
      }
    }
  },
  defaultVariants: {
    color: "primary",
    disabled: !1
  }
});
h({
  base: "",
  variants: {
    inline: {
      true: "inline-flex",
      false: "flex"
    },
    checked: {
      true: "outline-4 outline-green-500"
    }
  },
  defaultVariants: {
    inline: !0
  }
});
h({
  base: "flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
});
h({
  slots: {
    base: "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right p-2.5 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 text-sm rounded-lg border p-0! dark:text-gray-400",
    wrapper: "relative w-full",
    close: "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 end-0 p-2.5",
    svg: ""
  },
  variants: {
    size: {
      sm: { base: "text-xs ps-9 pe-9 p-2" },
      md: { base: "text-sm ps-10 pe-10 p-2.5" },
      lg: { base: "sm:text-base ps-11 pe-11 p-3" }
    }
  }
});
Ie(["click"]);
h({
  slots: {
    base: "relative",
    input: "block w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white focus:outline-hidden focus:ring-0 peer",
    label: "absolute text-sm duration-300 transform scale-75 z-10 origin-left rtl:origin-right peer-placeholder-shown:scale-100 peer-focus:scale-75",
    close: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black",
    combo: "absolute top-full right-0 left-0 z-10 mt-1 max-h-60 overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800",
    svg: ""
  },
  variants: {
    variant: {
      filled: {
        base: "relative",
        input: "rounded-t-lg border-0 border-b-2 bg-gray-50 dark:bg-gray-700",
        label: "-translate-y-4 start-2.5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4"
      },
      outlined: {
        base: "relative",
        input: "rounded-lg border",
        label: "-translate-y-4 bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 start-1"
      },
      standard: {
        base: "relative z-0",
        input: "border-0 border-b-2",
        label: "-translate-y-6 -z-10 peer-focus:start-0 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
      }
    },
    size: {
      small: {},
      default: {}
    },
    color: {
      default: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-primary-500 focus:border-primary-600",
        label: "text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 dark:peer-focus:text-primary-500"
      },
      primary: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-primary-500 focus:border-primary-600",
        label: "text-primary-500 dark:text-primary-400 peer-focus:text-primary-600 dark:peer-focus:text-primary-500"
      },
      secondary: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-secondary-500 focus:border-secondary-600",
        label: "text-secondary-500 dark:text-secondary-400 peer-focus:text-secondary-600 dark:peer-focus:text-secondary-500"
      },
      gray: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-gray-500 focus:border-gray-600",
        label: "text-gray-500 dark:text-gray-400 peer-focus:text-gray-600 dark:peer-focus:text-gray-500"
      },
      red: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-red-500 focus:border-red-600",
        label: "text-red-500 dark:text-red-400 peer-focus:text-red-600 dark:peer-focus:text-red-500"
      },
      orange: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-orange-500 focus:border-orange-600",
        label: "text-orange-500 dark:text-orange-400 peer-focus:text-orange-600 dark:peer-focus:text-orange-500"
      },
      amber: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-amber-500 focus:border-amber-600",
        label: "text-amber-500 dark:text-amber-400 peer-focus:text-amber-600 dark:peer-focus:text-amber-500"
      },
      yellow: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-yellow-500 focus:border-yellow-600",
        label: "text-yellow-500 dark:text-yellow-400 peer-focus:text-yellow-600 dark:peer-focus:text-yellow-500"
      },
      lime: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-lime-500 focus:border-lime-600",
        label: "text-lime-500 dark:text-lime-400 peer-focus:text-lime-600 dark:peer-focus:text-lime-500"
      },
      green: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-green-500 focus:border-green-600",
        label: "text-green-500 dark:text-green-400 peer-focus:text-green-600 dark:peer-focus:text-green-500"
      },
      emerald: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-emerald-500 focus:border-emerald-600",
        label: "text-emerald-500 dark:text-emerald-400 peer-focus:text-emerald-600 dark:peer-focus:text-emerald-500"
      },
      teal: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-teal-500 focus:border-teal-600",
        label: "text-teal-500 dark:text-teal-400 peer-focus:text-teal-600 dark:peer-focus:text-teal-500"
      },
      cyan: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-cyan-500 focus:border-cyan-600",
        label: "text-cyan-500 dark:text-cyan-400 peer-focus:text-cyan-600 dark:peer-focus:text-cyan-500"
      },
      sky: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-sky-500 focus:border-sky-600",
        label: "text-sky-500 dark:text-sky-400 peer-focus:text-sky-600 dark:peer-focus:text-sky-500"
      },
      blue: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600",
        label: "text-blue-500 dark:text-blue-400 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
      },
      indigo: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-indigo-500 focus:border-indigo-600",
        label: "text-indigo-500 dark:text-indigo-400 peer-focus:text-indigo-600 dark:peer-focus:text-indigo-500"
      },
      violet: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-violet-500 focus:border-violet-600",
        label: "text-violet-600 dark:text-violet-500 peer-focus:text-violet-600 dark:peer-focus:text-violet-500"
      },
      purple: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-purple-500 focus:border-purple-600",
        label: "text-purple-600 dark:text-purple-500 peer-focus:text-purple-600 dark:peer-focus:text-purple-500"
      },
      fuchsia: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-fuchsia-500 focus:border-fuchsia-600",
        label: "text-fuchsia-600 dark:text-fuchsia-500 peer-focus:text-fuchsia-600 dark:peer-focus:text-fuchsia-500"
      },
      pink: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-pink-500 focus:border-pink-600",
        label: "text-pink-600 dark:text-pink-500 peer-focus:text-pink-600 dark:peer-focus:text-pink-500"
      },
      rose: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-rose-500 focus:border-rose-600",
        label: "text-rose-600 dark:text-rose-500 peer-focus:text-rose-600 dark:peer-focus:text-rose-500"
      }
    }
  },
  compoundVariants: [
    {
      variant: "filled",
      size: "small",
      class: {
        input: "px-2.5 pb-1.5 pt-4",
        label: "top-3"
      }
    },
    {
      variant: "filled",
      size: "default",
      class: {
        input: "px-2.5 pb-2.5 pt-5",
        label: "top-4"
      }
    },
    {
      variant: "outlined",
      size: "small",
      class: {
        input: "px-2.5 pb-1.5 pt-3",
        label: "top-1"
      }
    },
    {
      variant: "outlined",
      size: "default",
      class: {
        input: "px-2.5 pb-2.5 pt-4",
        label: "top-2"
      }
    },
    {
      variant: "standard",
      size: "small",
      class: {
        input: "py-2 px-0",
        label: "top-3"
      }
    },
    {
      variant: "standard",
      size: "default",
      class: {
        input: "py-2.5 px-0",
        label: "top-3"
      }
    },
    {
      variant: "filled",
      color: "primary",
      class: {
        input: "dark:focus:border-primary-500 focus:border-primary-600"
      }
    }
  ],
  defaultVariants: {
    variant: "standard",
    size: "default",
    color: "primary"
  }
});
var $s = /* @__PURE__ */ G("<p><!></p>");
function ei(r, e) {
  fe(e, !0);
  let t = M(e, "color", 3, "gray"), a = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class",
    "color"
  ]);
  const o = Oe("helper"), n = /* @__PURE__ */ A(() => ri({ color: t(), class: te(o, e.class) }));
  var l = $s();
  we(l, () => ({ ...a, class: i(n) }));
  var c = q(l);
  J(c, () => e.children ?? Te), k(r, l), pe();
}
const ri = h({
  base: "text-xs font-normal text-gray-500 dark:text-gray-300",
  variants: {
    color: {
      disabled: "text-gray-400 dark:text-gray-500",
      primary: "text-primary-500 dark:text-primary-400",
      secondary: "text-secondary-500 dark:text-secondary-400",
      green: "text-green-500 dark:text-green-400",
      emerald: "text-emerald-500 dark:text-emerald-400",
      red: "text-red-500 dark:text-red-400",
      blue: "text-blue-500 dark:text-blue-400",
      yellow: "text-yellow-500 dark:text-yellow-400",
      orange: "text-orange-500 dark:text-orange-400",
      gray: "text-gray-500 dark:text-gray-400",
      teal: "text-teal-500 dark:text-teal-400",
      cyan: "text-cyan-500 dark:text-cyan-400",
      sky: "text-sky-500 dark:text-sky-400",
      indigo: "text-indigo-500 dark:text-indigo-400",
      lime: "text-lime-500 dark:text-lime-400",
      amber: "text-amber-500 dark:text-amber-400",
      violet: "text-violet-500 dark:text-violet-400",
      purple: "text-purple-500 dark:text-purple-400",
      fuchsia: "text-fuchsia-500 dark:text-fuchsia-400",
      pink: "text-pink-500 dark:text-pink-400",
      rose: "text-rose-500 dark:text-rose-400"
    }
  }
});
var ti = /* @__PURE__ */ G("<div><!></div>"), ai = /* @__PURE__ */ G("<input/> <!>", 1), oi = /* @__PURE__ */ G("<div><!></div>"), ni = /* @__PURE__ */ G("<!> <!> <!>", 1), li = /* @__PURE__ */ G('<div tabindex="-1" class="sr-only"></div>'), si = /* @__PURE__ */ G("<div><!></div>"), ii = (r, e, t) => e(i(t)), di = /* @__PURE__ */ G('<button type="button"><p> </p></button>'), gi = /* @__PURE__ */ G("<div></div>"), ci = /* @__PURE__ */ G("<div><!> <!></div>"), ui = /* @__PURE__ */ G("<div><!></div>"), bi = /* @__PURE__ */ G("<!> <!>", 1);
function fi(r, e) {
  fe(e, !0);
  const t = (re) => {
    var ke = ni(), Ae = D(ke);
    {
      var rr = (ue) => {
        var be = ti(), _e = q(be);
        J(_e, () => e.left), ee((Ce) => Z(be, 1, Ce), [
          () => $(i(U)({ class: te(f?.left, i(u).left) }))
        ]), k(ue, be);
      };
      F(Ae, (ue) => {
        e.left && ue(rr);
      });
    }
    var vr = ne(Ae, 2);
    {
      var He = (ue) => {
        var be = K(), _e = D(be);
        {
          let Ce = /* @__PURE__ */ A(() => ({ ...g, class: i(B)() }));
          J(_e, () => e.children, () => i(Ce));
        }
        k(ue, be);
      }, kr = (ue) => {
        var be = ai(), _e = D(be);
        we(
          _e,
          (qe) => ({
            ...g,
            oninput: Ne,
            onfocus: ce,
            onblur: gr,
            onkeydown: Ge,
            class: qe
          }),
          [
            () => i(B)({ class: te(f?.input, e.class) })
          ]
        ), Lt(_e, (qe) => o(qe), () => o());
        var Ce = ne(_e, 2);
        {
          var xr = (qe) => {
            {
              let lt = /* @__PURE__ */ A(() => i(j)({ class: te(f?.close, i(u).close) })), tr = /* @__PURE__ */ A(() => te(i(u).svg));
              vt(qe, {
                get class() {
                  return i(lt);
                },
                get color() {
                  return c();
                },
                "aria-label": "Clear search value",
                get svgClass() {
                  return i(tr);
                }
              });
            }
          };
          F(Ce, (qe) => {
            a() !== void 0 && a() !== "" && n() && qe(xr);
          });
        }
        $0(_e, a), k(ue, be);
      };
      F(vr, (ue) => {
        e.children ? ue(He) : ue(kr, !1);
      });
    }
    var ve = ne(vr, 2);
    {
      var he = (ue) => {
        var be = oi(), _e = q(be);
        J(_e, () => e.right), ee((Ce) => Z(be, 1, Ce), [
          () => $(i(P)({ class: te(f?.right, i(u).right) }))
        ]), k(ue, be);
      };
      F(ve, (ue) => {
        e.right && ue(he);
      });
    }
    k(re, ke);
  };
  let a = M(e, "value", 15), o = M(e, "elementRef", 15), n = M(e, "clearable", 3, !1), l = M(e, "color", 3, "default"), c = M(e, "clearableColor", 3, "none"), s = M(e, "data", 19, () => []), d = M(e, "maxSuggestions", 3, 5), g = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "left",
    "right",
    "value",
    "elementRef",
    "clearable",
    "size",
    "color",
    "class",
    "classes",
    "wrapperClass",
    "leftClass",
    "rightClass",
    "divClass",
    "clearableSvgClass",
    "clearableColor",
    "clearableClass",
    "clearableOnClick",
    "data",
    "maxSuggestions",
    "onSelect",
    "comboClass",
    "comboItemClass",
    "onInput",
    "onFocus",
    "onBlur",
    "onKeydown",
    "oninput",
    "onfocus",
    "onblur",
    "onkeydown"
  ]);
  e.wrapperClass, e.leftClass, e.rightClass, e.divClass, e.clearableSvgClass, e.clearableClass, e.comboClass;
  const u = /* @__PURE__ */ A(() => e.classes ?? {
    wrapper: e.wrapperClass,
    left: e.leftClass,
    right: e.rightClass,
    div: e.divClass,
    svg: e.clearableSvgClass,
    close: e.clearableClass,
    combo: e.comboClass,
    comboItem: e.comboItemClass
  }), f = Oe("input"), y = /* @__PURE__ */ A(() => e.oninput || e.onInput), b = /* @__PURE__ */ A(() => e.onfocus || e.onFocus), p = /* @__PURE__ */ A(() => e.onblur || e.onBlur), x = /* @__PURE__ */ A(() => e.onkeydown || e.onKeydown), T = /* @__PURE__ */ A(() => Array.isArray(s()) && s().length > 0);
  let m = sr("background"), w, I = sr("group"), L = !!I, v = /* @__PURE__ */ A(() => e.size || mi(I?.size) || "md");
  const E = /* @__PURE__ */ A(() => l() === "default" && m ? "tinted" : l()), _ = /* @__PURE__ */ A(() => pi({ size: i(v), color: i(E), grouped: L })), S = /* @__PURE__ */ A(() => i(_).base), B = /* @__PURE__ */ A(() => i(_).input), U = /* @__PURE__ */ A(() => i(_).left), P = /* @__PURE__ */ A(() => i(_).right), j = /* @__PURE__ */ A(() => i(_).close), O = /* @__PURE__ */ A(() => i(_).combo), z = /* @__PURE__ */ A(() => i(_).comboItem);
  Ma(() => {
    if (o()) {
      const re = o();
      re.value = "", a(""), ge(Y, !1), R(), w?.focus(), setTimeout(
        () => {
          re.focus();
        },
        100
      );
    }
    e.clearableOnClick && e.clearableOnClick();
  });
  let N = /* @__PURE__ */ Ve(!1), C = /* @__PURE__ */ Ve(Qe([])), X = /* @__PURE__ */ Ve(-1), Y = /* @__PURE__ */ Ve(
    !1
    // Track if backspace was used to clear
  );
  function R() {
    if (!i(T) || !i(N)) {
      ge(C, [], !0);
      return;
    }
    const re = (a() || "").toLowerCase(), ke = re.lastIndexOf(" "), Ae = ke === -1 ? re : re.substring(ke + 1);
    Ae === "" && !i(Y) ? ge(C, [], !0) : Ae ? ge(C, s().filter((rr) => rr.toLowerCase().includes(Ae)).slice(0, d()), !0) : i(Y) && ge(C, [...s()].slice(0, d()), !0), ge(X, -1);
  }
  Ta(() => {
    i(T) && R();
  });
  function oe(re) {
    String(a() || "").length > 0 && ge(Y, !1), R();
  }
  function Q(re) {
    ge(N, !0), R();
  }
  function se(re) {
    setTimeout(
      () => {
        ge(N, !1), ge(
          Y,
          !1
          // Reset flag when focus is lost
        ), ge(C, [], !0);
      },
      200
    );
  }
  function Be(re) {
    if (i(T) && ((re.key === "Backspace" || re.key === "Delete") && a().length <= 1 && ge(Y, !0), !!i(C).length))
      switch (re.key) {
        case "ArrowDown":
          re.preventDefault(), ge(X, (i(X) + 1) % i(C).length);
          break;
        case "ArrowUp":
          re.preventDefault(), ge(
            X,
            i(X) <= 0 ? i(C).length - 1 : i(X) - 1,
            !0
          );
          break;
        case "Enter":
          i(X) >= 0 && (re.preventDefault(), We(i(C)[i(X)]));
          break;
        case "Escape":
          re.preventDefault(), ge(C, [], !0);
          break;
      }
  }
  function Ne(re) {
    i(y) && i(y)(re), oe();
  }
  function ce(re) {
    i(b) && i(b)(re), Q();
  }
  function gr(re) {
    i(p) && i(p)(re), se();
  }
  function Ge(re) {
    i(x) && i(x)(re), Be(re);
  }
  function We(re) {
    const ke = a() || "", Ae = ke.lastIndexOf(" ");
    a(
      Ae === -1 ? re + " " : ke.substring(0, Ae + 1) + re + " "
      // Replace the whole value if no space, add trailing space
    ), e.onSelect && e.onSelect(re), ge(C, [], !0), ge(X, -1), o() && o().focus();
  }
  var Ee = bi(), ye = D(Ee);
  {
    var er = (re) => {
      var ke = li();
      Lt(ke, (Ae) => w = Ae, () => w), k(re, ke);
    };
    F(ye, (re) => {
      n() && re(er);
    });
  }
  var Je = ne(ye, 2);
  {
    var Wr = (re) => {
      var ke = ci(), Ae = q(ke);
      {
        var rr = (ve) => {
          var he = si(), ue = q(he);
          t(ue), ee((be) => Z(he, 1, be), [
            () => $(i(S)({ class: te(f?.base, i(u).div) }))
          ]), k(ve, he);
        }, vr = (ve) => {
          t(ve);
        };
        F(Ae, (ve) => {
          e.right || e.left || n() ? ve(rr) : ve(vr, !1);
        });
      }
      var He = ne(Ae, 2);
      {
        var kr = (ve) => {
          var he = gi();
          lr(he, 21, () => i(C), Tr, (ue, be, _e) => {
            var Ce = di();
            Ce.__click = [ii, We, be];
            var xr = q(Ce), qe = q(xr);
            ee(
              (lt) => {
                Z(Ce, 1, `w-full px-3 py-2 text-left ${_e === i(X) ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-50 dark:hover:bg-gray-700"} focus:outline-none`), Z(xr, 1, lt), Me(qe, i(be));
              },
              [
                () => $(i(z)({ class: te(f?.comboItem, i(u).comboItem) }))
              ]
            ), M0("mouseenter", Ce, () => ge(X, _e, !0)), k(ue, Ce);
          }), ee((ue) => Z(he, 1, ue), [
            () => $(i(O)({ class: te(f?.combo, i(u).combo) }))
          ]), k(ve, he);
        };
        F(He, (ve) => {
          i(T) && i(N) && i(C).length > 0 && ve(kr);
        });
      }
      ee((ve) => Z(ke, 1, ve), [
        () => $(te(i(T) ? "relative w-full" : "", f?.wrapper, i(u).wrapper))
      ]), k(re, ke);
    }, nt = (re) => {
      var ke = K(), Ae = D(ke);
      {
        var rr = (He) => {
          t(He);
        }, vr = (He) => {
          var kr = K(), ve = D(kr);
          {
            var he = (be) => {
              var _e = ui(), Ce = q(_e);
              t(Ce), ee((xr) => Z(_e, 1, xr), [
                () => $(i(S)({ class: te(f?.base, i(u).div) }))
              ]), k(be, _e);
            }, ue = (be) => {
              t(be);
            };
            F(
              ve,
              (be) => {
                e.right || e.left || n() ? be(he) : be(ue, !1);
              },
              !0
            );
          }
          k(He, kr);
        };
        F(
          Ae,
          (He) => {
            I ? He(rr) : He(vr, !1);
          },
          !0
        );
      }
      k(re, ke);
    };
    F(Je, (re) => {
      i(T) ? re(Wr) : re(nt, !1);
    });
  }
  k(r, Ee), pe();
}
Ie(["click"]);
const pi = h({
  slots: {
    base: "relative w-full",
    input: "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:outline-hidden",
    left: "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 pointer-events-none start-0 p-2.5",
    right: "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 end-0 p-2.5",
    close: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black",
    combo: "absolute top-full right-0 left-0 z-20 mt-1 max-h-60 overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800",
    comboItem: "text-gray-900 dark:text-gray-50",
    div: "",
    svg: "",
    wrapper: ""
  },
  variants: {
    size: {
      sm: { input: "text-xs px-2 py-1" },
      md: { input: "text-sm px-2.5 py-2.5" },
      lg: { input: "sm:text-base px-3 py-3" }
    },
    color: {
      default: {
        input: "border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
      },
      tinted: {
        input: "border border-gray-300 dark:border-gray-500 bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
      },
      primary: {
        input: "border border-primary-200 dark:border-primary-400 focus:ring-primary-500 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 bg-primary-50 text-primary-900 placeholder-primary-700 dark:text-primary-400 dark:placeholder-primary-500 dark:bg-gray-700"
      },
      secondary: {
        input: "border border-secondary-200 dark:border-secondary-400 focus:ring-secondary-500 focus:border-secondary-600 dark:focus:ring-secondary-500 dark:focus:border-secondary-500 bg-secondary-50 text-secondary-900 placeholder-secondary-700 dark:text-secondary-400 dark:placeholder-secondary-500 dark:bg-gray-700"
      },
      green: {
        input: "border border-green-200 dark:border-green-400 focus:ring-green-500 focus:border-green-600 dark:focus:ring-green-500 dark:focus:border-green-500 bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700"
      },
      emerald: {
        input: "border border-emerald-200 dark:border-emerald-400 focus:ring-emerald-500 focus:border-emerald-600 dark:focus:ring-emerald-500 dark:focus:border-emerald-500 bg-emerald-50 text-emerald-900 placeholder-emerald-700 dark:text-emerald-400 dark:placeholder-emerald-500 dark:bg-gray-700"
      },
      red: {
        input: "border border-red-200 dark:border-red-400 focus:ring-red-500 focus:border-red-600 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-400 dark:placeholder-red-500 dark:bg-gray-700"
      },
      blue: {
        input: "border border-blue-200 dark:border-blue-400 focus:ring-blue-500 focus:border-blue-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 dark:text-blue-400 dark:placeholder-blue-500 dark:bg-gray-700"
      },
      yellow: {
        input: "border border-yellow-200 dark:border-yellow-400 focus:ring-yellow-500 focus:border-yellow-600 dark:focus:ring-yellow-500 dark:focus:border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 dark:text-yellow-400 dark:placeholder-yellow-500 dark:bg-gray-700"
      },
      orange: {
        input: "border border-orange-200 dark:border-orange-400 focus:ring-orange-500 focus:border-orange-600 dark:focus:ring-orange-500 dark:focus:border-orange-500 bg-orange-50 text-orange-900 placeholder-orange-700 dark:text-orange-400 dark:placeholder-orange-500 dark:bg-gray-700"
      },
      gray: {
        input: "border border-gray-200 dark:border-gray-400 focus:ring-gray-500 focus:border-gray-600 dark:focus:ring-gray-500 dark:focus:border-gray-500 bg-gray-50 text-gray-900 placeholder-gray-700 dark:text-gray-400 dark:placeholder-gray-500 dark:bg-gray-700"
      },
      teal: {
        input: "border border-teal-200 dark:border-teal-400 focus:ring-teal-500 focus:border-teal-600 dark:focus:ring-teal-500 dark:focus:border-teal-500 bg-teal-50 text-teal-900 placeholder-teal-700 dark:text-teal-400 dark:placeholder-teal-500 dark:bg-gray-700"
      },
      cyan: {
        input: "border border-cyan-200 dark:border-cyan-400 focus:ring-cyan-500 focus:border-cyan-600 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 dark:text-cyan-400 dark:placeholder-cyan-500 dark:bg-gray-700"
      },
      sky: {
        input: "border border-sky-200 dark:border-sky-400 focus:ring-sky-500 focus:border-sky-600 dark:focus:ring-sky-500 dark:focus:border-sky-500 bg-sky-50 text-sky-900 placeholder-sky-700 dark:text-sky-400 dark:placeholder-sky-500 dark:bg-gray-700"
      },
      indigo: {
        input: "border border-indigo-200 dark:border-indigo-400 focus:ring-indigo-500 focus:border-indigo-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 bg-indigo-50 text-indigo-900 placeholder-indigo-700 dark:text-indigo-400 dark:placeholder-indigo-500 dark:bg-gray-700"
      },
      lime: {
        input: "border border-lime-200 dark:border-lime-400 focus:ring-lime-500 focus:border-lime-600 dark:focus:ring-lime-500 dark:focus:border-lime-500 bg-lime-50 text-lime-900 placeholder-lime-700 dark:text-lime-400 dark:placeholder-lime-500 dark:bg-gray-700"
      },
      amber: {
        input: "border border-amber-200 dark:border-amber-400 focus:ring-amber-500 focus:border-amber-600 dark:focus:ring-amber-500 dark:focus:border-amber-500 bg-amber-50 text-amber-900 placeholder-amber-700 dark:text-amber-400 dark:placeholder-amber-500 dark:bg-gray-700"
      },
      violet: {
        input: "border border-violet-200 dark:border-violet-400 focus:ring-violet-500 focus:border-violet-600 dark:focus:ring-violet-500 dark:focus:border-violet-500 bg-violet-50 text-violet-900 placeholder-violet-700 dark:text-violet-400 dark:placeholder-violet-500 dark:bg-gray-700"
      },
      purple: {
        input: "border border-purple-200 dark:border-purple-400 focus:ring-purple-500 focus:border-purple-600 dark:focus:ring-purple-500 dark:focus:border-purple-500 bg-purple-50 text-purple-900 placeholder-purple-700 dark:text-purple-400 dark:placeholder-purple-500 dark:bg-gray-700"
      },
      fuchsia: {
        input: "border border-fuchsia-200 dark:border-fuchsia-400 focus:ring-fuchsia-500 focus:border-fuchsia-600 dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500 bg-fuchsia-50 text-fuchsia-900 placeholder-fuchsia-700 dark:text-fuchsia-400 dark:placeholder-fuchsia-500 dark:bg-gray-700"
      },
      pink: {
        input: "border border-pink-200 dark:border-pink-400 focus:ring-pink-500 focus:border-pink-600 dark:focus:ring-pink-500 dark:focus:border-pink-500 bg-pink-50 text-pink-900 placeholder-pink-700 dark:text-pink-400 dark:placeholder-pink-500 dark:bg-gray-700"
      },
      rose: {
        input: "border border-rose-200 dark:border-rose-400 focus:ring-rose-500 focus:border-rose-600 dark:focus:ring-rose-500 dark:focus:border-rose-500 bg-rose-50 text-rose-900 placeholder-rose-700 dark:text-rose-400 dark:placeholder-rose-500 dark:bg-gray-700"
      }
    },
    grouped: {
      false: { input: "rounded-lg" },
      true: {
        input: "first:rounded-s-lg last:rounded-e-lg not-first:-ms-px"
      }
    }
  },
  defaultVariants: {
    size: "md",
    color: "default"
  }
});
function mi(r) {
  return r && r === "xs" ? "sm" : r === "xl" ? "lg" : r;
}
var yi = /* @__PURE__ */ G("<label><!></label>");
function hi(r, e) {
  fe(e, !0);
  let t = M(e, "color", 3, "gray"), a = M(e, "show", 3, !0), o = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "color",
    "show",
    "class"
  ]);
  const n = Oe("label");
  let l = /* @__PURE__ */ A(() => vi({ color: t(), class: te(n, e.class) }));
  var c = K(), s = D(c);
  {
    var d = (u) => {
      var f = yi();
      we(f, () => ({ ...o, class: i(l) }));
      var y = q(f);
      J(y, () => e.children), k(u, f);
    }, g = (u) => {
      var f = K(), y = D(f);
      J(y, () => e.children), k(u, f);
    };
    F(s, (u) => {
      a() ? u(d) : u(g, !1);
    });
  }
  k(r, c), pe();
}
const vi = h({
  base: "text-sm rtl:text-right font-medium block",
  variants: {
    color: {
      disabled: "text-gray-500 dark:text-gray-500",
      primary: "text-primary-700 dark:text-primary-500",
      secondary: "text-secondary-700 dark:text-secondary-500",
      green: "text-green-700 dark:text-green-500",
      emerald: "text-emerald-700 dark:text-emerald-500",
      red: "text-red-700 dark:text-red-500",
      blue: "text-blue-700 dark:text-blue-500",
      yellow: "text-yellow-700 dark:text-yellow-500",
      orange: "text-orange-700 dark:text-orange-500",
      gray: "text-gray-700 dark:text-gray-200",
      teal: "text-teal-700 dark:text-teal-500",
      cyan: "text-cyan-700 dark:text-cyan-500",
      sky: "text-sky-700 dark:text-sky-500",
      indigo: "text-indigo-700 dark:text-indigo-500",
      lime: "text-lime-700 dark:text-lime-500",
      amber: "text-amber-700 dark:text-amber-500",
      violet: "text-violet-700 dark:text-violet-500",
      purple: "text-purple-700 dark:text-purple-500",
      fuchsia: "text-fuchsia-700 dark:text-fuchsia-500",
      pink: "text-pink-700 dark:text-pink-500",
      rose: "text-rose-700 dark:text-rose-500"
    }
  }
});
h({
  slots: {
    div: "absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none",
    svg: "w-4 h-4 text-gray-500 dark:text-gray-400",
    input: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
    span: "absolute start-0 bottom-3 text-gray-500 dark:text-gray-400",
    floatingInput: "block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer",
    label: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
  },
  variants: {
    phoneType: {
      default: {},
      floating: {
        svg: "w-4 h-4 rtl:rotate-[270deg]"
      },
      countryCode: {
        input: "rounded-none rounded-e-lg"
      },
      copy: {},
      advanced: {}
    },
    phoneIcon: {
      true: { input: "ps-10" },
      false: {}
    }
  }
});
Ie(["change", "click"]);
h({
  slots: {
    base: "relative",
    select: "block w-full rtl:text-right",
    close: "absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black",
    svg: ""
  },
  variants: {
    underline: {
      true: {
        select: "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-hidden focus:ring-0 focus:border-gray-200 peer px-0!"
      },
      false: {
        select: "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-hidden focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      }
    },
    size: {
      sm: { select: "text-xs px-2.5 py-2.5" },
      md: { select: "text-sm px-2.5 py-2.5" },
      lg: { select: "text-base py-3 px-4" }
    },
    disabled: {
      true: {
        select: "cursor-not-allowed opacity-50"
      },
      false: {}
    }
  },
  defaultVariants: {
    underline: !1,
    size: "md"
  }
});
h({
  slots: {
    base: "relative border border-gray-300 flex items-center rounded-lg gap-2 dark:border-gray-600 ring-primary-500 dark:ring-primary-500 focus-visible:outline-hidden",
    select: "flex flex-wrap gap-2",
    dropdown: "absolute z-50 p-3 flex flex-col gap-1 max-h-64 bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-600 start-0 top-[calc(100%+1rem)] rounded-lg cursor-pointer overflow-y-scroll w-full",
    item: "py-2 px-3 rounded-lg text-gray-600 hover:text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-gray-600",
    close: "p-0 focus:ring-gray-400 dark:text-white",
    span: "",
    placeholder: "text-gray-400",
    svg: "ms-1 h-3 w-3 cursor-pointer text-gray-800 dark:text-white"
  },
  variants: {
    size: {
      sm: "px-2.5 py-2.5 min-h-[2.4rem] text-xs",
      md: "px-2.5 py-2.5 min-h-[2.7rem] text-sm",
      lg: "px-3 py-3 min-h-[3.2rem] sm:text-base"
    },
    disabled: {
      true: {
        base: "cursor-not-allowed opacity-50 pointer-events-none",
        item: "cursor-not-allowed opacity-50",
        close: "cursor-not-allowed"
      },
      false: { base: "focus-within:border-primary-500 dark:focus-within:border-primary-500 focus-within:ring-1" }
    },
    active: {
      true: {
        item: "bg-primary-100 text-primary-500 dark:bg-primary-500 dark:text-primary-100 hover:bg-primary-100 dark:hover:bg-primary-500 hover:text-primary-600 dark:hover:text-primary-100"
      }
    },
    selected: {
      true: {
        item: "bg-gray-100 text-black font-semibold hover:text-black dark:text-white dark:bg-gray-600 dark:hover:text-white"
      }
    }
  },
  // Add compoundVariants here
  compoundVariants: [
    {
      selected: !0,
      active: !0,
      class: {
        item: "bg-primary-200 dark:bg-primary-600 text-primary-700 dark:text-primary-100 font-semibold"
        // Adjust colors as needed
      }
    }
  ],
  defaultVariants: {
    underline: !1,
    size: "md"
  }
});
h({
  slots: {
    input: "flex items-center w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2",
    label: "flex items-center"
  },
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        input: "text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600"
      },
      secondary: {
        input: "text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600"
      },
      gray: {
        input: "text-gray-600 focus:ring-gray-500 dark:focus:ring-gray-600"
      },
      red: { input: "text-red-600 focus:ring-red-500 dark:focus:ring-red-600" },
      orange: {
        input: "text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600"
      },
      amber: {
        input: "text-amber-600 focus:ring-amber-500 dark:focus:ring-amber-600"
      },
      yellow: {
        input: "text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600"
      },
      lime: {
        input: "text-lime-600 focus:ring-lime-500 dark:focus:ring-lime-600"
      },
      green: {
        input: "text-green-600 focus:ring-green-500 dark:focus:ring-green-600"
      },
      emerald: {
        input: "text-emerald-600 focus:ring-emerald-500 dark:focus:ring-emerald-600"
      },
      teal: {
        input: "text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600"
      },
      cyan: {
        input: "text-cyan-600 focus:ring-cyan-500 dark:focus:ring-cyan-600"
      },
      sky: { input: "text-sky-600 focus:ring-sky-500 dark:focus:ring-sky-600" },
      blue: {
        input: "text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
      },
      indigo: {
        input: "text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600"
      },
      violet: {
        input: "text-violet-600 focus:ring-violet-500 dark:focus:ring-violet-600"
      },
      purple: {
        input: "text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600"
      },
      fuchsia: {
        input: "text-fuchsia-600 focus:ring-fuchsia-500 dark:focus:ring-fuchsia-600"
      },
      pink: {
        input: "text-pink-600 focus:ring-pink-500 dark:focus:ring-pink-600"
      },
      rose: {
        input: "text-rose-600 focus:ring-rose-500 dark:focus:ring-rose-600"
      }
    },
    tinted: {
      true: { input: "dark:bg-gray-600 dark:border-gray-500" },
      false: { input: "dark:bg-gray-700 dark:border-gray-600" }
    },
    custom: {
      true: { input: "sr-only peer" },
      false: { input: "relative" }
    },
    inline: {
      true: { label: "inline-flex" },
      false: { label: "flex" }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
h({
  base: "",
  variants: {
    inline: {
      true: "inline-flex",
      false: "flex"
    }
  },
  defaultVariants: {
    inline: !0
  }
});
h({
  base: "w-full bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700",
  variants: {
    size: {
      sm: "h-1 range-sm",
      md: "h-2",
      lg: "h-3 range-lg"
    },
    color: {
      // other colors do not work
      gray: "",
      red: "",
      blue: "",
      indigo: "",
      violet: "",
      purple: "",
      fuchsia: "",
      pink: "",
      rose: ""
    },
    appearance: {
      auto: "range accent-red-500",
      none: "appearance-none"
    }
  },
  compoundVariants: [
    {
      appearance: "auto",
      color: "gray",
      class: "accent-gray-500"
    },
    {
      appearance: "auto",
      color: "red",
      class: "accent-red-500"
    },
    {
      appearance: "auto",
      color: "blue",
      class: "accent-blue-500"
    },
    {
      appearance: "auto",
      color: "indigo",
      class: "accent-indigo-500"
    },
    {
      appearance: "auto",
      color: "violet",
      class: "accent-violet-500"
    },
    {
      appearance: "auto",
      color: "purple",
      class: "accent-purple-500"
    },
    {
      appearance: "auto",
      color: "fuchsia",
      class: "accent-fuchsia-500"
    },
    {
      appearance: "auto",
      color: "pink",
      class: "accent-pink-500"
    },
    {
      appearance: "auto",
      color: "rose",
      class: "accent-rose-500"
    }
  ]
});
h({
  slots: {
    base: "relative w-full",
    left: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
    icon: "text-gray-500 dark:text-gray-400",
    content: "absolute inset-y-0 end-0 flex items-center text-gray-500 dark:text-gray-400",
    input: "block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
    close: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black",
    svg: ""
  },
  variants: {
    size: {
      sm: {
        input: "text-xs p-2 ps-9 pe-9 ",
        icon: "w-3 h-3"
        // leftDiv: 'ps-2.5',
      },
      md: {
        input: "text-sm p-2.5 ps-10 pe-10",
        icon: "w-4 h-4"
        // leftDiv: 'ps-10',
      },
      lg: {
        input: "sm:text-base p-3 ps-11 pe-11",
        icon: "w-6 h-6"
        // leftDiv: 'ps-11',
      }
    }
  },
  defaultVariants: {
    size: "lg"
  }
});
h({
  slots: {
    base: "border bg-gray-50 border-gray-300 rounded-lg flex focus-within:ring-primary-500 focus-within:ring-1 focus-within:border-primary-500 scrollbar-hidden",
    tag: "flex items-center rounded-lg bg-gray-100 text-gray-900 border border-gray-300 my-1 ml-1 px-2 text-sm max-w-full min-w-fit",
    span: "items-center",
    close: "my-auto ml-1",
    input: "block text-sm m-2.5 p-0 bg-transparent border-none outline-none text-gray-900 h-min w-full min-w-fit focus:ring-0 placeholder-gray-400",
    info: "mt-1 text-sm text-blue-500 dark:text-blue-400",
    warning: "mt-1 text-sm text-yellow-400 dark:text-yellow-300",
    error: "mt-1 text-sm text-red-500 dark:text-red-400"
  }
});
Ie(["keydown", "input", "click"]);
h({
  slots: {
    div: "relative",
    base: "block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-hidden focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
    wrapper: "text-sm rounded-lg bg-gray-50 dark:bg-gray-600 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-500",
    inner: "py-2 px-4 bg-white dark:bg-gray-800",
    header: "py-2 px-3 border-gray-200 dark:border-gray-500",
    footer: "py-2 px-3 border-gray-200 dark:border-gray-500",
    addon: "absolute top-2 right-2 z-10",
    close: "absolute right-2 top-5 -translate-y-1/2 text-gray-400 hover:text-black",
    svg: ""
  },
  variants: {
    wrapped: {
      false: { wrapper: "p-2.5 text-sm focus:outline-hidden focus:ring-primary-500 border-gray-300 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50" }
    },
    hasHeader: {
      true: {
        header: "border-b"
      },
      false: {
        inner: "rounded-t-lg"
      }
    },
    hasFooter: {
      true: {
        footer: "border-t"
      },
      false: {
        inner: "rounded-b-lg"
      }
    }
  }
});
Ie(["click"]);
h({
  slots: {
    buttonGroup: "inline-flex rounded-lg shadow-sm",
    input: "block disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:ring-0 focus:outline-none",
    inputWithIcon: "relative px-2 pr-8",
    iconWrapper: "pointer-events-none absolute inset-y-0 end-0 top-0 flex items-center pe-3.5",
    icon: "h-4 w-4 text-gray-500 dark:text-gray-400",
    select: "text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 focus:ring-0 focus:outline-none block w-full border-l-1 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500",
    button: "!rounded-r-lg",
    buttonIcon: "ml-2 h-4 w-4",
    rangeSeparator: "flex items-center justify-center px-2 text-gray-500 dark:text-gray-400",
    rangeInputWrapper: "relative",
    rangeInput: "relative pr-8",
    rangeButton: "pointer-events-none absolute inset-y-0 top-0 right-0 flex items-center border-0 bg-transparent pe-3.5",
    dropdownContent: "p-4 last:rounded-r-lg",
    dropdownInner: "flex flex-col space-y-4",
    dropdownTimeRow: "flex space-x-4",
    dropdownTimeCol: "flex flex-col",
    dropdownTimeInput: "w-24 rounded-l-lg !border-r px-2",
    dropdownButton: "w-full !rounded-l-lg",
    toggleWrapper: "flex w-full flex-col space-y-2",
    toggleRow: "flex items-center justify-between",
    toggleTimeRow: "flex space-x-4 p-2.5",
    toggleTimeCol: "flex flex-col",
    toggleTimeInput: "w-24 rounded-lg !border-r px-2",
    inlineGrid: "grid w-full gap-2",
    inlineButton: "rounded-lg"
  },
  variants: {
    type: {
      default: {
        input: "rounded-e-lg"
      },
      select: {
        input: "w-1/3 rounded-l-lg rounded-e-none",
        select: "rounded-r-lg rounded-l-none"
      },
      dropdown: {
        input: "rounded-l-lg rounded-e-none"
      },
      range: {},
      "timerange-dropdown": {},
      "timerange-toggle": {},
      "inline-buttons": {}
    },
    columns: {
      1: {
        inlineGrid: "grid-cols-1"
      },
      2: {
        inlineGrid: "grid-cols-2"
      },
      3: {
        inlineGrid: "grid-cols-3"
      },
      4: {
        inlineGrid: "grid-cols-4"
      }
    },
    disabled: {
      true: {
        input: "disabled:cursor-not-allowed disabled:opacity-50"
      }
    }
  },
  defaultVariants: {
    type: "default",
    columns: 2,
    disabled: !1
  }
});
h({
  slots: {
    span: "me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:rtl:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:bg-gray-600 dark:border-gray-500 relative ",
    label: "flex items-center",
    input: "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 rounded-sm dark:bg-gray-700 dark:border-gray-600 sr-only peer"
  },
  variants: {
    disabled: {
      true: { label: "cursor-not-allowed opacity-50" }
    },
    checked: {
      true: "",
      false: ""
    },
    off_state_label: {
      true: { span: "ms-3" }
    },
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        span: "peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600"
      },
      secondary: {
        span: "peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600"
      },
      gray: {
        span: "peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 peer-checked:bg-gray-500"
      },
      red: {
        span: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600"
      },
      orange: {
        span: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500"
      },
      amber: {
        span: "peer-focus:ring-amber-300 dark:peer-focus:ring-amber-800 peer-checked:bg-amber-600"
      },
      yellow: {
        span: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400"
      },
      lime: {
        span: "peer-focus:ring-lime-300 dark:peer-focus:ring-lime-800 peer-checked:bg-lime-500"
      },
      green: {
        span: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600"
      },
      emerald: {
        span: "peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 peer-checked:bg-emerald-600"
      },
      teal: {
        span: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600"
      },
      cyan: {
        span: "peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 peer-checked:bg-cyan-600"
      },
      sky: {
        span: "peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 peer-checked:bg-sky-600"
      },
      blue: {
        span: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
      },
      indigo: {
        span: "peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 peer-checked:bg-indigo-600"
      },
      violet: {
        span: "peer-focus:ring-violet-300 dark:peer-focus:ring-violet-800 peer-checked:bg-violet-600"
      },
      purple: {
        span: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600"
      },
      fuchsia: {
        span: "peer-focus:ring-fuchsia-300 dark:peer-focus:ring-fuchsia-800 peer-checked:bg-fuchsia-600"
      },
      pink: {
        span: "peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 peer-checked:bg-pink-600"
      },
      rose: {
        span: "peer-focus:ring-rose-300 dark:peer-focus:ring-rose-800 peer-checked:bg-rose-600"
      }
    },
    size: {
      small: {
        span: "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4"
      },
      default: {
        span: "w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5"
      },
      large: {
        span: "w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6"
      }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
h({
  base: "inline-flex items-center hover:underline",
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "text-primary-600 dark:text-primary-500",
      secondary: "text-secondary-600 dark:text-secondary-500",
      gray: "text-gray-600 dark:text-gray-500",
      red: "text-red-600 dark:text-red-500",
      orange: "text-orange-600 dark:text-orange-500",
      amber: "text-amber-600 dark:text-amber-500",
      yellow: "text-yellow-600 dark:text-yellow-500",
      lime: "text-lime-600 dark:text-lime-500",
      green: "text-green-600 dark:text-green-500",
      emerald: "text-emerald-600 dark:text-emerald-500",
      teal: "text-teal-600 dark:text-teal-500",
      cyan: "text-cyan-600 dark:text-cyan-500",
      sky: "text-sky-600 dark:text-sky-500",
      blue: "text-blue-600 dark:text-blue-500",
      indigo: "text-indigo-600 dark:text-indigo-500",
      violet: "text-violet-600 dark:text-violet-500",
      purple: "text-purple-600 dark:text-purple-500",
      fuchsia: "text-fuchsia-600 dark:text-fuchsia-500",
      pink: "text-pink-600 dark:text-pink-500",
      rose: "text-rose-600 dark:text-rose-500"
    }
  }
});
h({
  base: "font-semibold text-gray-900 dark:text-white",
  variants: {
    border: {
      true: "border-s-4 border-gray-300 dark:border-gray-500",
      false: ""
    },
    italic: {
      true: "italic",
      false: ""
    },
    bg: {
      true: "bg-gray-50 dark:bg-gray-800",
      false: ""
    },
    alignment: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl"
    }
  },
  defaultVariants: {
    border: !1,
    italic: !0,
    bg: !1,
    alignment: "left",
    size: "lg"
  }
});
h({
  variants: {
    tag: {
      dt: "text-gray-500 md:text-lg dark:text-gray-400",
      dd: "text-lg font-semibold"
    }
  },
  defaultVariants: {
    tag: "dt"
  }
});
h({
  base: "font-bold text-gray-900 dark:text-white",
  variants: {
    tag: {
      h1: "text-5xl font-extrabold",
      h2: "text-4xl",
      h3: "text-3xl",
      h4: "text-2xl",
      h5: "text-xl",
      h6: "text-lg"
    }
  },
  defaultVariants: {
    tag: "h1"
  }
});
h({
  slots: {
    base: "h-px my-8 bg-gray-200 border-0 dark:bg-gray-700",
    div: "inline-flex items-center justify-center w-full",
    content: "absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:bg-gray-900"
  },
  variants: {
    withChildren: {
      true: {
        base: "w-full",
        container: "relative"
      }
    }
  },
  defaultVariants: {
    withChildren: !1
  }
});
h({
  slots: {
    base: "max-w-full h-auto",
    figure: "",
    caption: "mt-2 text-sm text-center text-gray-500 dark:text-gray-400"
  },
  variants: {
    size: {
      xs: { base: "max-w-xs", figure: "max-w-xs" },
      sm: { base: "max-w-sm", figure: "max-w-sm" },
      md: { base: "max-w-md", figure: "max-w-md" },
      lg: { base: "max-w-lg", figure: "max-w-lg" },
      xl: { base: "max-w-xl", figure: "max-w-xl" },
      "2xl": { base: "max-w-2xl", figure: "max-w-2xl" },
      full: { base: "max-w-full", figure: "max-w-full" },
      none: { base: "", figure: "" }
    },
    effect: {
      grayscale: {
        base: "cursor-pointer rounded-lg grayscale filter transition-all duration-300 hover:grayscale-0"
      },
      blur: { base: "blur-xs transition-all duration-300 hover:blur-none" },
      invert: {
        base: "invert filter transition-all duration-300 hover:invert-0"
      },
      sepia: {
        base: "sepia filter transition-all duration-300 hover:sepia-0"
      },
      saturate: {
        base: "saturate-50 filter transition-all duration-300 hover:saturate-100"
      },
      "hue-rotate": {
        base: "hue-rotate-60 filter transition-all duration-300 hover:hue-rotate-0"
      },
      none: {
        base: "transition-all duration-300"
      }
    }
  }
});
h({
  base: "grid grid-cols-1 sm:grid-cols-2"
});
h({
  base: "",
  variants: {
    tag: {
      ul: "list-disc",
      dl: "list-none",
      ol: "list-decimal"
    },
    position: {
      inside: "list-inside",
      outside: "list-outside"
    }
  },
  defaultVariants: {
    position: "inside",
    tag: "ul"
  }
});
h({
  base: "text-white dark:bg-blue-500 bg-blue-600 px-2 rounded-sm"
});
h({
  base: "text-gray-900 dark:text-white",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl"
    },
    weight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black"
    },
    space: {
      tighter: "tracking-tighter",
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest"
    },
    height: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
      3: "leading-3",
      4: "leading-4",
      5: "leading-5",
      6: "leading-6",
      7: "leading-7",
      8: "leading-8",
      9: "leading-9",
      10: "leading-10"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    },
    whitespace: {
      normal: "whitespace-normal",
      nowrap: "whitespace-nowrap",
      pre: "whitespace-pre",
      preline: "whitespace-pre-line",
      prewrap: "whitespace-pre-wrap"
    },
    italic: {
      true: "italic"
    },
    firstUpper: {
      true: "first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-left",
      false: ""
    },
    justify: {
      true: "text-justify",
      false: ""
    }
  }
});
h({
  base: "text-gray-500 dark:text-gray-400 font-semibold"
});
h({
  variants: {
    italic: {
      true: "italic"
    },
    underline: {
      true: "underline decoration-2 decoration-blue-400 dark:decoration-blue-600"
    },
    linethrough: {
      true: "line-through"
    },
    uppercase: {
      true: "uppercase"
    },
    gradient: {
      skyToEmerald: "text-transparent bg-clip-text bg-linear-to-r to-emerald-600 from-sky-400",
      purpleToBlue: "text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-500",
      pinkToOrange: "text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-orange-400",
      tealToLime: "text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-lime-300",
      redToYellow: "text-transparent bg-clip-text bg-linear-to-r from-red-600 to-yellow-500",
      indigoToCyan: "text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-400",
      fuchsiaToRose: "text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-rose-500",
      amberToEmerald: "text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-emerald-500",
      violetToRed: "text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-red-500",
      blueToGreen: "text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-teal-500 to-green-400",
      orangeToPurple: "text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-pink-500 to-purple-500",
      yellowToRed: "text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-indigo-400 to-red-600",
      none: ""
    },
    highlight: {
      blue: "text-blue-600 dark:text-blue-500",
      green: "text-green-600 dark:text-green-500",
      red: "text-red-600 dark:text-red-500",
      yellow: "text-yellow-600 dark:text-yellow-500",
      purple: "text-purple-600 dark:text-purple-500",
      pink: "text-pink-600 dark:text-pink-500",
      indigo: "text-indigo-600 dark:text-indigo-500",
      teal: "text-teal-600 dark:text-teal-500",
      orange: "text-orange-600 dark:text-orange-500",
      cyan: "text-cyan-600 dark:text-cyan-500",
      fuchsia: "text-fuchsia-600 dark:text-fuchsia-500",
      amber: "text-amber-600 dark:text-amber-500",
      lime: "text-lime-600 dark:text-lime-500",
      none: ""
    },
    decoration: {
      solid: "underline decoratio-solid",
      double: "underline decoration-double",
      dotted: "underline decoration-dotted",
      dashed: "underline decoration-dashed",
      wavy: "underline decoration-wavy",
      none: "decoration-none"
    },
    decorationColor: {
      // blue, green, red, yellow, purple, pink, indigo, teal, orange, cyan, fuchsia, amber, lime, none
      // radio
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "underline decoration-primary-400 dark:decoration-primary-600",
      secondary: "underline decoration-secondary-400 dark:decoration-secondary-600",
      gray: "underline decoration-gray-400 dark:decoration-gray-600",
      orange: "underline decoration-orange-400 dark:decoration-orange-600",
      red: "underline decoration-red-400 dark:decoration-red-600",
      yellow: "underline decoration-yellow-400 dark:decoration-yellow-600",
      lime: "underline decoration-lime-400 dark:decoration-lime-600",
      green: "underline decoration-green-400 dark:decoration-green-600",
      emerald: "underline decoration-emerald-400 dark:decoration-emerald-600",
      teal: "underline decoration-teal-400 dark:decoration-teal-600",
      cyan: "underline decoration-cyan-400 dark:decoration-cyan-600",
      sky: "underline decoration-sky-400 dark:decoration-sky-600",
      blue: "underline decoration-blue-400 dark:decoration-blue-600",
      indigo: "underline decoration-indigo-400 dark:decoration-indigo-600",
      violet: "underline decoration-violet-400 dark:decoration-violet-600",
      purple: "underline decoration-purple-400 dark:decoration-purple-600",
      fuchsia: "underline decoration-fuchsia-400 dark:decoration-fuchsia-600",
      pink: "underline decoration-pink-400 dark:decoration-pink-600",
      rose: "underline decoration-rose-400 dark:decoration-rose-600",
      none: "decoration-none"
    },
    decorationThickness: {
      1: "underline decoration-1",
      2: "underline decoration-2",
      4: "underline decoration-4",
      8: "underline decoration-8",
      0: "decoration-0"
    }
  }
});
const _r = {
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
  variant: r = "primary",
  size: e = "md",
  fullWidth: t = !1,
  disabled: a = !1
}) {
  return [
    _r.base,
    _r.variants[r],
    _r.sizeOverrides[e],
    t ? _r.layout.fullWidth : "",
    a ? _r.disabled : ""
  ].filter(Boolean).join(" ");
}
var xi = /* @__PURE__ */ hr('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>'), wi = /* @__PURE__ */ hr("<!><!>", 1);
function vd(r, e) {
  fe(e, !0);
  let t = M(e, "variant", 3, "primary"), a = M(e, "size", 3, "md"), o = M(e, "loading", 3, !1), n = M(e, "disabled", 3, !1), l = M(e, "fullWidth", 3, !1), c = /* @__PURE__ */ me(e, [
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
  const s = /* @__PURE__ */ A(() => ki({
    variant: t(),
    size: a(),
    fullWidth: l(),
    disabled: n()
  }));
  us(r, Gr(
    {
      get disabled() {
        return n();
      },
      get class() {
        return i(s);
      }
    },
    () => c,
    {
      children: (d, g) => {
        var u = wi(), f = D(u);
        {
          var y = (p) => {
            var x = xi(), T = q(x), m = ne(T);
            ee(() => {
              Z(x, 0, $(_r.spinner)), Z(T, 0, $(_r.spinnerCircle)), Z(m, 0, $(_r.spinnerPath));
            }), k(p, x);
          };
          F(f, (p) => {
            o() && p(y);
          });
        }
        var b = ne(f);
        J(b, () => e.children ?? Te), k(d, u);
      },
      $$slots: { default: !0 }
    }
  )), pe();
}
const ct = {
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
function _i({
  variant: r = "default",
  padding: e = "md",
  interactive: t = !1,
  hover: a = !1
}) {
  return [
    ct.base,
    ct.variants[r],
    ct.padding[e],
    t ? ct.interactive : "",
    a ? ct.hoverEffects : ""
  ].filter(Boolean).join(" ");
}
function kd(r, e) {
  fe(e, !0);
  let t = M(e, "variant", 3, "default"), a = M(e, "padding", 3, "md"), o = M(e, "hover", 3, !1), n = M(e, "interactive", 3, !1), l = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "padding",
    "hover",
    "interactive",
    "children"
  ]);
  const c = /* @__PURE__ */ A(() => _i({
    variant: t(),
    padding: a(),
    interactive: n(),
    hover: o()
  }));
  ys(r, Gr(
    {
      get class() {
        return i(c);
      }
    },
    () => l,
    {
      children: (s, d) => {
        var g = K(), u = D(g);
        J(u, () => e.children ?? Te), k(s, g);
      },
      $$slots: { default: !0 }
    }
  )), pe();
}
const ur = {
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
function Ci({
  variant: r = "default",
  size: e = "md"
}) {
  return [ur.base, ur.variants[r], ur.sizes[e]].filter(Boolean).join(" ");
}
var zi = /* @__PURE__ */ G("<div><!> <!> <!></div>");
function xd(r, e) {
  fe(e, !0);
  let t = M(e, "variant", 3, "default"), a = M(e, "size", 3, "md"), o = M(e, "error", 3, !1), n = M(e, "success", 3, !1), l = M(e, "helperText", 3, ""), c = M(e, "label", 3, ""), s = /* @__PURE__ */ me(e, [
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
  const d = /* @__PURE__ */ A(() => o() ? "error" : n() ? "success" : t()), g = /* @__PURE__ */ A(() => Ci({ variant: i(d), size: a() })), u = /* @__PURE__ */ A(() => [
    ur.helper,
    o() ? ur.helperError : n() ? ur.helperSuccess : ur.helperDefault
  ].join(" "));
  var f = zi(), y = q(f);
  {
    var b = (m) => {
      hi(m, {
        get for() {
          return e.id;
        },
        get class() {
          return ur.label;
        },
        children: (w, I) => {
          var L = ht();
          ee(() => Me(L, c())), k(w, L);
        },
        $$slots: { default: !0 }
      });
    };
    F(y, (m) => {
      c() && m(b);
    });
  }
  var p = ne(y, 2);
  fi(p, Gr(
    {
      get class() {
        return i(g);
      }
    },
    () => s
  ));
  var x = ne(p, 2);
  {
    var T = (m) => {
      ei(m, {
        get class() {
          return i(u);
        },
        children: (w, I) => {
          var L = ht();
          ee(() => Me(L, l())), k(w, L);
        },
        $$slots: { default: !0 }
      });
    };
    F(x, (m) => {
      l() && m(T);
    });
  }
  ee(() => Z(f, 1, $(ur.container))), k(r, f), pe();
}
const Ot = {
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
function Si(r) {
  return `${Ot.base} ${Ot.variants[r]}`;
}
function Ti(r, e, t) {
  e() && t() && t()();
}
var Ei = /* @__PURE__ */ G('<button type="button" aria-label="Remove badge"><svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>'), Ai = /* @__PURE__ */ G("<!> <!>", 1);
function wd(r, e) {
  fe(e, !0);
  let t = M(e, "variant", 3, "primary"), a = M(e, "removable", 3, !1), o = M(e, "onRemove", 3, void 0), n = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "removable",
    "onRemove",
    "children"
  ]);
  const l = /* @__PURE__ */ A(() => Si(t()));
  ss(r, Gr(
    {
      get class() {
        return i(l);
      }
    },
    () => n,
    {
      children: (c, s) => {
        var d = Ai(), g = D(d);
        J(g, () => e.children ?? Te);
        var u = ne(g, 2);
        {
          var f = (y) => {
            var b = Ei();
            b.__click = [Ti, a, o];
            var p = q(b);
            ee(() => {
              Z(b, 1, $(Ot.removeButton)), Z(p, 0, $(Ot.removeIcon));
            }), k(y, b);
          };
          F(u, (y) => {
            a() && y(f);
          });
        }
        k(c, d);
      },
      $$slots: { default: !0 }
    }
  )), pe();
}
Ie(["click"]);
const oa = {
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
function Ii({
  layout: r = "vertical",
  spacing: e = "md"
}) {
  return [oa.base, oa.layout[r], oa.spacing[e]].join(" ");
}
var Vi = /* @__PURE__ */ G("<form><!></form>");
function _d(r, e) {
  fe(e, !0);
  let t = M(e, "layout", 3, "vertical"), a = M(e, "spacing", 3, "md"), o = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "layout",
    "spacing",
    "onSubmit",
    "children"
  ]);
  const n = /* @__PURE__ */ A(() => Ii({ layout: t(), spacing: a() }));
  function l(d) {
    d.preventDefault();
    const g = new FormData(d.target);
    e.onSubmit && e.onSubmit(g);
  }
  var c = Vi();
  we(c, () => ({ class: i(n), onsubmit: l, ...o }));
  var s = q(c);
  J(s, () => e.children ?? Te), k(r, c), pe();
}
const Ur = {
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
function Pi({ position: r }) {
  return {
    container: [Ur.container, Ur.layout[r]].join(" "),
    list: Ur.tabList[r],
    panel: Ur.panel
  };
}
function Mi({
  position: r,
  active: e
}) {
  const t = Ur.buttonVariants[r], a = e ? "cursor-default" : "cursor-pointer";
  return [Ur.buttonBase, a, e ? t.active : t.inactive].join(" ");
}
var Bi = (r, e, t) => e(i(t).id), ji = /* @__PURE__ */ G('<button type="button" role="tab"> </button>'), Li = /* @__PURE__ */ G('<div><div role="tablist"></div> <div role="tabpanel"></div></div>');
function Cd(r, e) {
  fe(e, !0);
  let t = M(e, "position", 3, "top"), a = M(e, "items", 19, () => []), o = M(e, "activeId", 7, void 0), n = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "items",
    "activeId"
  ]);
  const l = /* @__PURE__ */ A(() => Pi({ position: t() })), c = /* @__PURE__ */ A(() => a().length > 0 ? a()[0].id : void 0), s = /* @__PURE__ */ A(() => o() || i(c));
  var d = Li();
  we(d, () => ({ class: i(l).container, ...n }));
  var g = q(d);
  lr(g, 21, a, (f) => f.id, (f, y) => {
    var b = ji();
    b.__click = [Bi, o, y];
    var p = q(b);
    ee(
      (x) => {
        Ye(b, "aria-selected", i(s) === i(y).id), Z(b, 1, x), Me(p, i(y).label);
      },
      [
        () => $(Mi({
          position: t(),
          active: i(s) === i(y).id
        }))
      ]
    ), k(f, b);
  });
  var u = ne(g, 2);
  lr(u, 21, a, Tr, (f, y) => {
    var b = K(), p = D(b);
    {
      var x = (T) => {
        var m = K(), w = D(m);
        J(w, () => i(y).content ?? Te), k(T, m);
      };
      F(p, (T) => {
        i(s) === i(y).id && T(x);
      });
    }
    k(f, b);
  }), ee(() => {
    Z(g, 1, $(i(l).list)), Ye(g, "aria-orientation", t() === "left" || t() === "right" ? "vertical" : "horizontal"), Z(u, 1, $(i(l).panel));
  }), k(r, d), pe();
}
Ie(["click"]);
const jr = {
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
function Ri(r) {
  switch (r) {
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
function Oi({
  size: r = "md"
} = {}) {
  const e = jr.sizes[r];
  return {
    content: `${jr.content} ${e}`.trim()
  };
}
const ar = {
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
function Ni({
  variant: r = "body",
  color: e = "primary",
  align: t,
  weight: a,
  truncate: o = !1,
  italic: n = !1,
  underline: l = !1,
  lineThrough: c = !1,
  noWrap: s = !1
} = {}) {
  const d = [ar.base, ar.variants[r], ar.colors[e]];
  return t && d.push(ar.align[t]), a && d.push(ar.weights[a]), o && d.push(ar.modifiers.truncate), n && d.push(ar.modifiers.italic), l && d.push(ar.modifiers.underline), c && d.push(ar.modifiers.lineThrough), s && d.push(ar.modifiers.noWrap), d.filter(Boolean).join(" ");
}
const Di = {
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
function Fi(r, e) {
  fe(e, !0);
  let t = M(e, "variant", 3, "body"), a = M(e, "color", 3, "primary"), o = M(e, "align", 3, void 0), n = M(e, "weight", 3, void 0), l = M(e, "as", 3, void 0), c = M(e, "truncate", 3, !1), s = M(e, "italic", 3, !1), d = M(e, "underline", 3, !1), g = M(e, "lineThrough", 3, !1), u = M(e, "noWrap", 3, !1), f = /* @__PURE__ */ me(e, [
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
  const y = l() || Di[t()] || "p", b = /* @__PURE__ */ A(() => Ni({
    variant: t(),
    color: a(),
    align: o(),
    weight: n(),
    truncate: c(),
    italic: s(),
    underline: d(),
    lineThrough: g(),
    noWrap: u()
  }));
  var p = K(), x = D(p);
  Wo(x, () => y, !1, (T, m) => {
    we(T, () => ({ class: i(b), ...f }));
    var w = K(), I = D(w);
    J(I, () => e.children ?? Te), k(m, w);
  }), k(r, p), pe();
}
function Gi(r, e, t, a) {
  e() && (t(
    !1
    // Trigger Flowbite's natural close mechanism
  ), a.onClose && a.onClose());
}
var Wi = /* @__PURE__ */ G('<div id="modal-title"><!></div>'), Hi = /* @__PURE__ */ G('<button type="button" aria-label="Close modal"><svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>'), qi = /* @__PURE__ */ G("<div><!> <!></div>"), Ui = /* @__PURE__ */ G("<div><!></div>"), Ki = /* @__PURE__ */ G("<div><!></div>"), Yi = /* @__PURE__ */ G("<!> <!> <!>", 1);
function zd(r, e) {
  fe(e, !0);
  let t = M(e, "open", 15, !1), a = M(e, "size", 3, "md"), o = M(e, "position", 3, "center"), n = M(e, "title", 3, ""), l = M(e, "closable", 3, !0);
  const c = /* @__PURE__ */ A(() => Ri(o())), s = /* @__PURE__ */ A(() => Oi({ size: a() }));
  js(r, {
    get size() {
      return a();
    },
    dismissable: !1,
    get outsideclose() {
      return l();
    },
    get placement() {
      return i(c);
    },
    get class() {
      return i(s).content;
    },
    get "data-position"() {
      return o();
    },
    get open() {
      return t();
    },
    set open(d) {
      t(d);
    },
    children: (d, g) => {
      var u = Yi(), f = D(u);
      {
        var y = (m) => {
          var w = qi(), I = q(w);
          {
            var L = (S) => {
              var B = K(), U = D(B);
              J(U, () => e.header), k(S, B);
            }, v = (S) => {
              var B = K(), U = D(B);
              {
                var P = (j) => {
                  var O = Wi(), z = q(O);
                  Fi(z, {
                    variant: "h5",
                    as: "h2",
                    children: (V, N) => {
                      var C = ht();
                      ee(() => Me(C, n())), k(V, C);
                    },
                    $$slots: { default: !0 }
                  }), k(j, O);
                };
                F(
                  U,
                  (j) => {
                    n() && j(P);
                  },
                  !0
                );
              }
              k(S, B);
            };
            F(I, (S) => {
              e.header ? S(L) : S(v, !1);
            });
          }
          var E = ne(I, 2);
          {
            var _ = (S) => {
              var B = Hi();
              B.__click = [Gi, l, t, e];
              var U = q(B);
              ee(() => {
                Z(B, 1, $(jr.closeButton)), Z(U, 0, $(jr.closeIcon));
              }), k(S, B);
            };
            F(E, (S) => {
              l() && S(_);
            });
          }
          ee(() => Z(w, 1, $(jr.header))), k(m, w);
        };
        F(f, (m) => {
          (e.header || n()) && m(y);
        });
      }
      var b = ne(f, 2);
      {
        var p = (m) => {
          var w = Ui(), I = q(w);
          J(I, () => e.body), ee(() => Z(w, 1, $(jr.body))), k(m, w);
        };
        F(b, (m) => {
          e.body && m(p);
        });
      }
      var x = ne(b, 2);
      {
        var T = (m) => {
          var w = Ki(), I = q(w);
          J(I, () => e.footer), ee(() => Z(w, 1, $(jr.footer))), k(m, w);
        };
        F(x, (m) => {
          e.footer && m(T);
        });
      }
      k(d, u);
    },
    $$slots: { default: !0 }
  }), pe();
}
Ie(["click"]);
const pr = {
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
function Xi({
  variant: r = "default",
  flush: e = !1
} = {}) {
  const t = pr.base, a = e ? pr.flush : pr.variants[r];
  return `${t} ${a}`.trim();
}
function Zi({
  isOpen: r = !1,
  arrowPosition: e = "right"
} = {}) {
  const t = `${pr.item.header} ${r ? pr.item.headerActive : ""} ${e === "left" ? "[&>svg:last-child]:hidden" : ""}`.trim();
  return {
    item: pr.item.base,
    header: t,
    content: pr.item.content
  };
}
var Ji = /* @__PURE__ */ hr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>'), Qi = /* @__PURE__ */ G("<!> <span> </span>", 1);
function Sd(r, e) {
  fe(e, !0);
  let t = M(e, "items", 19, () => []), a = M(e, "variant", 3, "default"), o = M(e, "flush", 3, !1), n = M(e, "multiple", 3, !1), l = M(e, "arrowPosition", 3, "right"), c = /* @__PURE__ */ me(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "items",
    "variant",
    "flush",
    "multiple",
    "arrowPosition"
  ]);
  const s = /* @__PURE__ */ A(() => Xi({ variant: a(), flush: o() }));
  let d = Qe(t().reduce(
    (g, u) => (g[u.id] = u.open ?? !1, g),
    {}
  ));
  ll(r, Gr(
    {
      get multiple() {
        return n();
      },
      get flush() {
        return o();
      },
      get class() {
        return i(s);
      }
    },
    () => c,
    {
      children: (g, u) => {
        var f = K(), y = D(f);
        lr(y, 17, t, (b) => b.id, (b, p) => {
          const x = /* @__PURE__ */ A(() => d[i(p).id]), T = /* @__PURE__ */ A(() => Zi({ isOpen: i(x), arrowPosition: l() }));
          {
            const m = (I) => {
              var L = Qi(), v = D(L);
              {
                var E = (B) => {
                  var U = Ji();
                  ee(() => Z(U, 0, `${pr.content.arrow ?? ""} ${i(x) ? "rotate-180" : ""}`)), k(B, U);
                };
                F(v, (B) => {
                  l() === "left" && B(E);
                });
              }
              var _ = ne(v, 2), S = q(_);
              ee(() => {
                Z(_, 1, $(pr.content.title)), Me(S, i(p).title);
              }), k(I, L);
            };
            let w = /* @__PURE__ */ A(() => ({
              button: i(T).header,
              content: i(T).content
            }));
            yl(b, {
              get class() {
                return i(T).item;
              },
              get classes() {
                return i(w);
              },
              get open() {
                return d[i(p).id];
              },
              set open(I) {
                d[i(p).id] = I;
              },
              header: m,
              children: (I, L) => {
                var v = K(), E = D(v);
                J(E, () => i(p).content), k(I, v);
              },
              $$slots: { header: !0, default: !0 }
            });
          }
        }), k(g, f);
      },
      $$slots: { default: !0 }
    }
  )), pe();
}
const de = {
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
function $i({ variant: r = "default" } = {}) {
  return {
    container: de.container,
    table: de.variants[r]
  };
}
function ed({
  isActive: r = !1,
  sortDirection: e = "asc"
} = {}) {
  const t = de.icons.sort;
  if (!r)
    return t;
  const a = `${t} ${de.icons.sortActive}`;
  return e === "asc" ? `${a} ${de.content.rotate180}` : a;
}
function rd({
  isExpanded: r = !1,
  hasExpandableContent: e = !1
} = {}) {
  const t = de.icons.expand;
  if (!e)
    return t;
  const a = `${t} ${de.icons.expandActive}`;
  return r ? `${a} ${de.content.rotate90}` : a;
}
function td({
  alignment: r = "left",
  isFirstColumn: e = !1
} = {}) {
  const t = (() => {
    switch (r) {
      case "center":
        return de.content.textCenter;
      case "right":
        return de.content.textRight;
      default:
        return de.content.textLeft;
    }
  })(), a = e ? de.content.firstColumnPadding : "";
  return `${t} ${de.body.cell} ${a}`.trim();
}
var ad = (r, e, t) => {
  i(e).sortable && t(i(e).key);
}, od = (r, e, t) => {
  (r.key === "Enter" || r.key === " ") && (r.preventDefault(), i(e).sortable && t(i(e).key));
}, nd = /* @__PURE__ */ G('<button type="button"><span> </span> <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>'), ld = /* @__PURE__ */ G("<div><span> </span></div>"), sd = (r, e, t, a) => {
  e(i(t)) && a(i(t).id);
}, id = (r, e, t, a) => {
  (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e(i(t)) && a(i(t).id));
}, dd = /* @__PURE__ */ hr('<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>'), gd = /* @__PURE__ */ G("<div></div>"), cd = /* @__PURE__ */ G('<button type="button"><!> <span> </span> <span> </span></button>'), ud = /* @__PURE__ */ G("<div> </div>"), bd = /* @__PURE__ */ G("<div><!></div>"), fd = /* @__PURE__ */ G("<!> <!>", 1), pd = /* @__PURE__ */ G("<!> <!> <!>", 1), md = /* @__PURE__ */ G("<div><!></div>");
function Td(r, e) {
  fe(e, !0);
  let t = M(e, "rows", 31, () => Qe([])), a = M(e, "variant", 3, "default"), o = M(e, "striped", 3, !0), n = M(e, "hoverable", 3, !0), l = M(e, "expandable", 3, !1), c = M(e, "sortable", 3, !1), s = /* @__PURE__ */ me(e, [
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
  const d = /* @__PURE__ */ A(() => $i({ variant: a() }));
  let g = /* @__PURE__ */ Ve(null), u = /* @__PURE__ */ Ve("asc");
  function f(S, B = 0) {
    let U = [];
    for (const P of S)
      U.push({ ...P, level: B }), P.expanded && P.children && P.children.length > 0 && U.push(...f(P.children, B + 1));
    return U;
  }
  const y = /* @__PURE__ */ A(() => f(t()));
  function b(S) {
    if (!c()) return;
    i(g) === S ? ge(u, i(u) === "asc" ? "desc" : "asc", !0) : (ge(g, S, !0), ge(u, "asc"));
    function B(U) {
      return [...U].sort((j, O) => {
        const z = j.data[S], V = O.data[S];
        return z === void 0 || V === void 0 ? 0 : i(u) === "asc" ? z.localeCompare(V) : V.localeCompare(z);
      }).map((j) => ({
        ...j,
        children: j.children ? B(j.children) : void 0
      }));
    }
    t(B(t()));
  }
  function p(S) {
    if (!l()) return;
    function B(U) {
      return U.map((P) => P.id === S ? { ...P, expanded: !P.expanded } : P.children ? { ...P, children: B(P.children) } : P);
    }
    t(B(t()));
  }
  function x(S) {
    return ed({
      isActive: c() && i(g) === S,
      sortDirection: i(u)
    });
  }
  function T(S, B) {
    return rd({ isExpanded: S, hasExpandableContent: B });
  }
  function m(S = "left", B = !1) {
    return td({ alignment: S, isFirstColumn: B });
  }
  function w(S = "left") {
    switch (S) {
      case "center":
        return de.content.textCenter;
      case "right":
        return de.content.textRight;
      default:
        return de.content.textLeft;
    }
  }
  function I(S = 0) {
    return S * 1.125;
  }
  function L(S) {
    return S.type === "folder" ? S.expanded ? "📂" : "📁" : "📄";
  }
  function v(S) {
    return l() && (S.children?.length || S.expandedContent);
  }
  var E = md(), _ = q(E);
  Ns(_, Gr(
    {
      get striped() {
        return o();
      },
      get hoverable() {
        return n();
      },
      get class() {
        return i(d).table;
      }
    },
    () => s,
    {
      children: (S, B) => {
        var U = pd(), P = D(U);
        kn(P, {
          get class() {
            return de.header.base;
          },
          children: (V, N) => {
            var C = K(), X = D(C);
            lr(X, 17, () => e.columns, Tr, (Y, R) => {
              {
                let oe = /* @__PURE__ */ A(() => i(R).width ? `width: ${i(R).width}` : ""), Q = /* @__PURE__ */ A(() => de.header.cell), se = /* @__PURE__ */ A(() => w(i(R).align));
                vn(Y, {
                  get style() {
                    return i(oe);
                  },
                  get class() {
                    return `${i(Q) ?? ""} ${i(se) ?? ""}`;
                  },
                  children: (Be, Ne) => {
                    var ce = K(), gr = D(ce);
                    {
                      var Ge = (Ee) => {
                        var ye = nd();
                        ye.__click = [ad, R, b], ye.__keydown = [od, R, b];
                        var er = q(ye), Je = q(er), Wr = ne(er, 2);
                        ee(
                          (nt) => {
                            Z(ye, 1, `${de.content.headerLabel ?? ""} ${de.header.sortable ?? ""}`), Ye(ye, "aria-label", `Sort by ${i(R).label}`), Me(Je, i(R).label), Z(Wr, 0, nt);
                          },
                          [() => $(x(i(R).key))]
                        ), k(Ee, ye);
                      }, We = (Ee) => {
                        var ye = ld(), er = q(ye), Je = q(er);
                        ee(() => {
                          Z(ye, 1, $(de.content.headerLabel)), Me(Je, i(R).label);
                        }), k(Ee, ye);
                      };
                      F(gr, (Ee) => {
                        i(R).sortable && c() ? Ee(Ge) : Ee(We, !1);
                      });
                    }
                    k(Be, ce);
                  },
                  $$slots: { default: !0 }
                });
              }
            }), k(V, C);
          },
          $$slots: { default: !0 }
        });
        var j = ne(P, 2);
        hn(j, {
          children: (V, N) => {
            var C = K(), X = D(C);
            lr(X, 17, () => i(y), Tr, (Y, R) => {
              var oe = fd(), Q = D(oe);
              {
                let Ne = /* @__PURE__ */ A(() => de.body.row), ce = /* @__PURE__ */ A(() => n() ? de.body.rowHover : ""), gr = /* @__PURE__ */ A(() => i(R).level && i(R).level > 0 ? de.body.rowNested : "");
                ha(Q, {
                  get class() {
                    return `${i(Ne) ?? ""} ${i(ce) ?? ""} ${i(gr) ?? ""}`;
                  },
                  children: (Ge, We) => {
                    var Ee = K(), ye = D(Ee);
                    lr(ye, 17, () => e.columns, Tr, (er, Je, Wr) => {
                      {
                        let nt = /* @__PURE__ */ A(() => i(Je).width ? `width: ${i(Je).width}` : ""), re = /* @__PURE__ */ A(() => m(i(Je).align, Wr === 0));
                        ya(er, {
                          get style() {
                            return i(nt);
                          },
                          get class() {
                            return i(re);
                          },
                          children: (ke, Ae) => {
                            var rr = K(), vr = D(rr);
                            {
                              var He = (ve) => {
                                var he = cd();
                                he.__click = [sd, v, R, p], he.__keydown = [id, v, R, p];
                                var ue = q(he);
                                {
                                  var be = (tr) => {
                                    var Pr = dd();
                                    ee((Yt) => Z(Pr, 0, Yt), [
                                      () => $(T(i(R).expanded || !1, v(i(R))))
                                    ]), k(tr, Pr);
                                  }, _e = (tr) => {
                                    var Pr = gd();
                                    ee(() => Z(Pr, 1, $(de.content.iconSpacer))), k(tr, Pr);
                                  };
                                  F(ue, (tr) => {
                                    v(i(R)) ? tr(be) : tr(_e, !1);
                                  });
                                }
                                var Ce = ne(ue, 2), xr = q(Ce), qe = ne(Ce, 2), lt = q(qe);
                                ee(
                                  (tr, Pr, Yt, xn) => {
                                    Z(he, 1, `${de.content.firstColumn ?? ""} ${tr ?? ""}`), Uo(he, `padding-left: ${Pr ?? ""}rem; padding-right: 1.5rem;`), Ye(he, "aria-expanded", i(R).expanded || !1), Ye(he, "aria-label", Yt), Z(Ce, 1, $(de.content.rowIcon)), Me(xr, xn), Z(qe, 1, $(de.content.rowName)), Me(lt, i(R).data[i(Je).key] || "");
                                  },
                                  [
                                    () => v(i(R)) ? de.body.cellExpandable : "",
                                    () => 1.5 + I(i(R).level),
                                    () => v(i(R)) ? `Toggle ${i(R).data.name || "item"}` : void 0,
                                    () => L(i(R))
                                  ]
                                ), k(ve, he);
                              }, kr = (ve) => {
                                var he = ud(), ue = q(he);
                                ee(() => {
                                  Z(he, 1, $(de.content.otherColumn)), Me(ue, i(R).data[i(Je).key] || "");
                                }), k(ve, he);
                              };
                              F(vr, (ve) => {
                                Wr === 0 ? ve(He) : ve(kr, !1);
                              });
                            }
                            k(ke, rr);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                    }), k(Ge, Ee);
                  },
                  $$slots: { default: !0 }
                });
              }
              var se = ne(Q, 2);
              {
                var Be = (Ne) => {
                  ha(Ne, {
                    children: (ce, gr) => {
                      {
                        let Ge = /* @__PURE__ */ A(() => 2.5 + I((i(R).level || 0) + 1));
                        ya(ce, {
                          get colspan() {
                            return e.columns.length;
                          },
                          get class() {
                            return de.content.expandedContent;
                          },
                          get style() {
                            return `padding: 1rem 1.5rem; padding-left: ${i(Ge) ?? ""}rem;`;
                          },
                          children: (We, Ee) => {
                            var ye = bd(), er = q(ye);
                            J(er, () => i(R).expandedContent), ee(() => Z(ye, 1, $(de.content.expandedText))), k(We, ye);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                    },
                    $$slots: { default: !0 }
                  });
                };
                F(se, (Ne) => {
                  l() && i(R).expanded && i(R).expandedContent && Ne(Be);
                });
              }
              k(Y, oe);
            }), k(V, C);
          },
          $$slots: { default: !0 }
        });
        var O = ne(j, 2);
        {
          var z = (V) => {
            var N = K(), C = D(N);
            J(C, () => e.children), k(V, N);
          };
          F(O, (V) => {
            e.children && V(z);
          });
        }
        k(S, U);
      },
      $$slots: { default: !0 }
    }
  )), ee(() => Z(E, 1, $(i(d).container))), k(r, E), pe();
}
Ie(["click", "keydown"]);
export {
  Sd as Accordion,
  wd as Badge,
  vd as Button,
  kd as Card,
  _d as Form,
  xd as Input,
  zd as Modal,
  Td as Table,
  Cd as Tabs,
  Fi as Text,
  pr as accordionStyles,
  Ot as badgeStyles,
  Xi as buildAccordionClasses,
  Zi as buildAccordionItemClasses,
  Si as buildBadgeClasses,
  ki as buildButtonClasses,
  _i as buildCardClasses,
  td as buildCellClasses,
  rd as buildExpandIconClasses,
  Ii as buildFormClasses,
  Ci as buildInputClasses,
  Oi as buildModalClasses,
  ed as buildSortIconClasses,
  Mi as buildTabButtonClasses,
  $i as buildTableClasses,
  Pi as buildTabsClasses,
  Ni as buildTextClasses,
  _r as buttonStyles,
  ct as cardStyles,
  oa as formStyles,
  Ri as getFlowbitePlacement,
  ur as inputStyles,
  jr as modalStyles,
  de as tableStyles,
  Ur as tabsStyles,
  ar as textStyles,
  Di as variantToElement
};
