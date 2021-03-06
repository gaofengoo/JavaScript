/*
 AngularJS v1.4.6
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F, x, Oa) {
	'use strict';

	function va(a, b, c) {
		if (!a) throw ngMinErr("areq", b || "?", c || "required");
		return a
	}
	function wa(a, b) {
		if (!a && !b) return "";
		if (!a) return b;
		if (!b) return a;
		Y(a) && (a = a.join(" "));
		Y(b) && (b = b.join(" "));
		return a + " " + b
	}
	function Fa(a) {
		var b = {};
		a && (a.to || a.from) && (b.to = a.to, b.from = a.from);
		return b
	}
	function V(a, b, c) {
		var d = "";
		a = Y(a) ? a : a && M(a) && a.length ? a.split(/\s+/) : [];
		q(a, function(a, y) {
			a && 0 < a.length && (d += 0 < y ? " " : "", d += c ? b + a : a + b)
		});
		return d
	}
	function Ga(a) {
		if (a instanceof I) switch (a.length) {
		case 0:
			return [];
		case 1:
			if (1 === a[0].nodeType) return a;
			break;
		default:
			return I(Z(a))
		}
		if (1 === a.nodeType) return I(a)
	}
	function Z(a) {
		if (!a[0]) return a;
		for (var b = 0; b < a.length; b++) {
			var c = a[b];
			if (1 == c.nodeType) return c
		}
	}
	function Ha(a, b, c) {
		q(b, function(b) {
			a.addClass(b, c)
		})
	}
	function Ia(a, b, c) {
		q(b, function(b) {
			a.removeClass(b, c)
		})
	}
	function Q(a) {
		return function(b, c) {
			c.addClass && (Ha(a, b, c.addClass), c.addClass = null);
			c.removeClass && (Ia(a, b, c.removeClass), c.removeClass = null)
		}
	}
	function ia(a) {
		a = a || {};
		if (!a.$$prepared) {
			var b = a.domOperation || L;
			a.domOperation = function() {
				a.$$domOperationFired = !0;
				b();
				b = L
			};
			a.$$prepared = !0
		}
		return a
	}
	function ea(a, b) {
		xa(a, b);
		ya(a, b)
	}
	function xa(a, b) {
		b.from && (a.css(b.from), b.from = null)
	}
	function ya(a, b) {
		b.to && (a.css(b.to), b.to = null)
	}
	function R(a, b, c) {
		var d = (b.addClass || "") + " " + (c.addClass || ""),
			e = (b.removeClass || "") + " " + (c.removeClass || "");
		a = Ja(a.attr("class"), d, e);
		c.preparationClasses && (b.preparationClasses = $(c.preparationClasses, b.preparationClasses), delete c.preparationClasses);
		d = b.domOperation !== L ? b.domOperation : null;
		za(b, c);
		d && (b.domOperation = d);
		b.addClass = a.addClass ? a.addClass : null;
		b.removeClass = a.removeClass ? a.removeClass : null;
		return b
	}
	function Ja(a, b, c) {
		function d(a) {
			M(a) && (a = a.split(" "));
			var b = {};
			q(a, function(a) {
				a.length && (b[a] = !0)
			});
			return b
		}
		var e = {};
		a = d(a);
		b = d(b);
		q(b, function(a, b) {
			e[b] = 1
		});
		c = d(c);
		q(c, function(a, b) {
			e[b] = 1 === e[b] ? null : -1
		});
		var y = {
			addClass: "",
			removeClass: ""
		};
		q(e, function(b, c) {
			var e, d;
			1 === b ? (e = "addClass", d = !a[c]) : -1 === b && (e = "removeClass", d = a[c]);
			d && (y[e].length && (y[e] += " "), y[e] += c)
		});
		return y
	}
	function G(a) {
		return a instanceof x.element ? a[0] : a
	}
	function Ka(a, b, c) {
		var d = "";
		b && (d = V(b, "ng-", !0));
		c.addClass && (d = $(d, V(c.addClass, "-add")));
		c.removeClass && (d = $(d, V(c.removeClass, "-remove")));
		d.length && (c.preparationClasses = d, a.addClass(d))
	}
	function ja(a, b) {
		var c = b ? "-" + b + "s" : "";
		fa(a, [ga, c]);
		return [ga, c]
	}
	function ma(a, b) {
		var c = b ? "paused" : "",
			d = W + "PlayState";
		fa(a, [d, c]);
		return [d, c]
	}
	function fa(a, b) {
		a.style[b[0]] = b[1]
	}
	function $(a, b) {
		return a ? b ? a + " " + b : a : b
	}
	function Aa(a, b, c) {
		var d = Object.create(null),
			e = a.getComputedStyle(b) || {};
		q(c, function(a, b) {
			var c = e[a];
			if (c) {
				var l = c.charAt(0);
				if ("-" === l || "+" === l || 0 <= l) c = La(c);
				0 === c && (c = null);
				d[b] = c
			}
		});
		return d
	}
	function La(a) {
		var b = 0;
		a = a.split(/\s*,\s*/);
		q(a, function(a) {
			"s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
			a = parseFloat(a) || 0;
			b = b ? Math.max(a, b) : a
		});
		return b
	}
	function na(a) {
		return 0 === a || null != a
	}
	function Ba(a, b) {
		var c = N,
			d = a + "s";
		b ? c += "Duration" : d += " linear all";
		return [c, d]
	}
	function Ca() {
		var a = Object.create(null);
		return {
			flush: function() {
				a = Object.create(null)
			},
			count: function(b) {
				return (b = a[b]) ? b.total : 0
			},
			get: function(b) {
				return (b = a[b]) && b.value
			},
			put: function(b, c) {
				a[b] ? a[b].total++ : a[b] = {
					total: 1,
					value: c
				}
			}
		}
	}
	var L = x.noop,
		za = x.extend,
		I = x.element,
		q = x.forEach,
		Y = x.isArray,
		M = x.isString,
		oa = x.isObject,
		pa = x.isUndefined,
		qa = x.isDefined,
		Da = x.isFunction,
		ra = x.isElement,
		N, sa, W, ta;
	pa(F.ontransitionend) && qa(F.onwebkittransitionend) ? (N = "WebkitTransition", sa = "webkitTransitionEnd transitionend") : (N = "transition", sa = "transitionend");
	pa(F.onanimationend) && qa(F.onwebkitanimationend) ? (W = "WebkitAnimation", ta = "webkitAnimationEnd animationend") : (W = "animation", ta = "animationend");
	var ka = W + "Delay",
		ua = W + "Duration",
		ga = N + "Delay";
	F = N + "Duration";
	var Ma = {
		transitionDuration: F,
		transitionDelay: ga,
		transitionProperty: N + "Property",
		animationDuration: ua,
		animationDelay: ka,
		animationIterationCount: W + "IterationCount"
	},
		Na = {
			transitionDuration: F,
			transitionDelay: ga,
			animationDuration: ua,
			animationDelay: ka
		};
	x.module("ngAnimate", []).provider("$$body", function() {
		this.$get = ["$document", function(a) {
			return I(a[0].body)
		}]
	}).directive("ngAnimateChildren", [function() {
		return function(a, b, c) {
			a = c.ngAnimateChildren;
			x.isString(a) && 0 === a.length ? b.data("$$ngAnimateChildren", !0) : c.$observe("ngAnimateChildren", function(a) {
				b.data("$$ngAnimateChildren", "on" === a || "true" === a)
			})
		}
	}]).factory("$$rAFScheduler", ["$$rAF", function(a) {
		function b(a) {
			d = d.concat(a);
			c()
		}
		function c() {
			if (d.length) {
				for (var b = d.shift(), v = 0; v < b.length; v++) b[v]();
				e || a(function() {
					e || c()
				})
			}
		}
		var d, e;
		d = b.queue = [];
		b.waitUntilQuiet = function(b) {
			e && e();
			e = a(function() {
				e = null;
				b();
				c()
			})
		};
		return b
	}]).factory("$$AnimateRunner", ["$q", "$sniffer", "$$animateAsyncRun", function(a, b, c) {
		function d(a) {
			this.setHost(a);
			this._doneCallbacks = [];
			this._runInAnimationFrame = c();
			this._state = 0
		}
		d.chain = function(a, b) {
			function c() {
				if (d === a.length) b(!0);
				else a[d](function(a) {
					!1 === a ? b(!1) : (d++, c())
				})
			}
			var d = 0;
			c()
		};
		d.all = function(a, b) {
			function c(v) {
				l = l && v;
				++d === a.length && b(l)
			}
			var d = 0,
				l = !0;
			q(a, function(a) {
				a.done(c)
			})
		};
		d.prototype = {
			setHost: function(a) {
				this.host = a || {}
			},
			done: function(a) {
				2 === this._state ? a() : this._doneCallbacks.push(a)
			},
			progress: L,
			getPromise: function() {
				if (!this.promise) {
					var b = this;
					this.promise = a(function(a, c) {
						b.done(function(b) {
							!1 === b ? c() : a()
						})
					})
				}
				return this.promise
			},
			then: function(a, b) {
				return this.getPromise().then(a, b)
			},
			"catch": function(a) {
				return this.getPromise()["catch"](a)
			},
			"finally": function(a) {
				return this.getPromise()["finally"](a)
			},
			pause: function() {
				this.host.pause && this.host.pause()
			},
			resume: function() {
				this.host.resume && this.host.resume()
			},
			end: function() {
				this.host.end && this.host.end();
				this._resolve(!0)
			},
			cancel: function() {
				this.host.cancel && this.host.cancel();
				this._resolve(!1)
			},
			complete: function(a) {
				var b = this;
				0 === b._state && (b._state = 1, b._runInAnimationFrame(function() {
					b._resolve(a)
				}))
			},
			_resolve: function(a) {
				2 !== this._state && (q(this._doneCallbacks, function(b) {
					b(a)
				}), this._doneCallbacks.length = 0, this._state = 2)
			}
		};
		return d
	}]).factory("$$animateAsyncRun", ["$$rAF", function(a) {
		function b(b) {
			c.push(b);
			1 < c.length || a(function() {
				for (var a = 0; a < c.length; a++) c[a]();
				c = []
			})
		}
		var c = [];
		return function() {
			var a = !1;
			b(function() {
				a = !0
			});
			return function(c) {
				a ? c() : b(c)
			}
		}
	}]).provider("$$animateQueue", ["$animateProvider", function(a) {
		function b(a, b, c, q) {
			return d[a].some(function(a) {
				return a(b, c, q)
			})
		}
		function c(a, b) {
			a = a || {};
			var c = 0 < (a.addClass || "").length,
				d = 0 < (a.removeClass || "").length;
			return b ? c && d : c || d
		}
		var d = this.rules = {
			skip: [],
			cancel: [],
			join: []
		};
		d.join.push(function(a, b, d) {
			return !b.structural && c(b.options)
		});
		d.skip.push(function(a, b, d) {
			return !b.structural && !c(b.options)
		});
		d.skip.push(function(a, b, c) {
			return "leave" == c.event && b.structural
		});
		d.skip.push(function(a, b, c) {
			return c.structural && 2 === c.state && !b.structural
		});
		d.cancel.push(function(a, b, c) {
			return c.structural && b.structural
		});
		d.cancel.push(function(a, b, c) {
			return 2 === c.state && b.structural
		});
		d.cancel.push(function(a, b, c) {
			a = b.options;
			c = c.options;
			return a.addClass && a.addClass === c.removeClass || a.removeClass && a.removeClass === c.addClass
		});
		this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$body", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function(d, y, v, z, l, s, O, x, t, la, E) {
			function h(a, b) {
				var c = G(a),
					f = [],
					g = w[b];
				g && q(g, function(a) {
					a.node.contains(c) && f.push(a.callback)
				});
				return f
			}
			function S(a, b, c, f) {
				d(function() {
					q(h(b, a), function(a) {
						a(b, c, f)
					})
				})
			}
			function u(a, g, m) {
				function d(b, c, g, f) {
					S(c, a, g, f);
					b.progress(c, g, f)
				}
				function w(b) {
					var c = a,
						g = m;
					g.preparationClasses && (c.removeClass(g.preparationClasses), g.preparationClasses = null);
					g.activeClasses && (c.removeClass(g.activeClasses), g.activeClasses = null);
					Ea(a, m);
					ea(a, m);
					m.domOperation();
					e.complete(!b)
				}
				var B, h;
				if (a = Ga(a)) B = G(a), h = a.parent();
				m = ia(m);
				var e = new x;
				Y(m.addClass) && (m.addClass = m.addClass.join(" "));
				m.addClass && !M(m.addClass) && (m.addClass = null);
				Y(m.removeClass) && (m.removeClass = m.removeClass.join(" "));
				m.removeClass && !M(m.removeClass) && (m.removeClass = null);
				m.from && !oa(m.from) && (m.from = null);
				m.to && !oa(m.to) && (m.to = null);
				if (!B) return w(), e;
				var k = [B.className, m.addClass, m.removeClass].join(" ");
				if (!C(k)) return w(), e;
				var l = 0 <= ["enter", "move", "leave"].indexOf(g),
					u = !H || U.get(B),
					k = !u && A.get(B) || {},
					v = !! k.state;
				u || v && 1 == k.state || (u = !p(a, h, g));
				if (u) return w(), e;
				l && J(a);
				h = {
					structural: l,
					element: a,
					event: g,
					close: w,
					options: m,
					runner: e
				};
				if (v) {
					if (b("skip", a, h, k)) {
						if (2 === k.state) return w(), e;
						R(a, k.options, m);
						return k.runner
					}
					if (b("cancel", a, h, k)) if (2 === k.state) k.runner.end();
					else if (k.structural) k.close();
					else return R(a, k.options, h.options), k.runner;
					else if (b("join", a, h, k)) if (2 === k.state) R(a, m, {});
					else return Ka(a, l ? g : null, m), g = h.event = k.event, m = R(a, k.options, h.options), k.runner
				} else R(a, m, {});
				(v = h.structural) || (v = "animate" === h.event && 0 < Object.keys(h.options.to || {}).length || c(h.options));
				if (!v) return w(), f(a), e;
				var t = (k.counter || 0) + 1;
				h.counter = t;
				r(a, 1, h);
				y.$$postDigest(function() {
					var b = A.get(B),
						h = !b,
						b = b || {},
						J = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || c(b.options));
					if (h || b.counter !== t || !J) {
						h && (Ea(a, m), ea(a, m));
						if (h || l && b.event !== g) m.domOperation(), e.end();
						J || f(a)
					} else g = !b.structural && c(b.options, !0) ? "setClass" : b.event, r(a, 2), b = O(a, g, b.options), b.done(function(b) {
						w(!b);
						(b = A.get(B)) && b.counter === t && f(G(a));
						d(e, g, "close", {})
					}), e.setHost(b), d(e, g, "start", {})
				});
				return e
			}
			function J(a) {
				a = G(a).querySelectorAll("[data-ng-animate]");
				q(a, function(a) {
					var b = parseInt(a.getAttribute("data-ng-animate")),
						c = A.get(a);
					switch (b) {
					case 2:
						c.runner.end();
					case 1:
						c && A.remove(a)
					}
				})
			}
			function f(a) {
				a = G(a);
				a.removeAttribute("data-ng-animate");
				A.remove(a)
			}
			function B(a, b) {
				return G(a) === G(b)
			}
			function p(a, b, c) {
				c = B(a, l) || "HTML" === a[0].nodeName;
				var g = B(a, v),
					f = !1,
					d;
				for ((a = a.data("$ngAnimatePin")) && (b = a); b && b.length;) {
					g || (g = B(b, v));
					a = b[0];
					if (1 !== a.nodeType) break;
					var w = A.get(a) || {};
					f || (f = w.structural || U.get(a));
					if (pa(d) || !0 === d) a = b.data("$$ngAnimateChildren"), qa(a) && (d = a);
					if (f && !1 === d) break;
					g || (g = B(b, v), g || (a = b.data("$ngAnimatePin")) && (b = a));
					c || (c = B(b, l));
					b = b.parent()
				}
				return (!f || d) && g && c
			}
			function r(a, b, c) {
				c = c || {};
				c.state = b;
				a = G(a);
				a.setAttribute("data-ng-animate", b);
				c = (b = A.get(a)) ? za(b, c) : c;
				A.put(a, c)
			}
			var A = new s,
				U = new s,
				H = null,
				g = y.$watch(function() {
					return 0 === t.totalPendingRequests
				}, function(a) {
					a && (g(), y.$$postDigest(function() {
						y.$$postDigest(function() {
							null === H && (H = !0)
						})
					}))
				}),
				w = {},
				k = a.classNameFilter(),
				C = k ?
			function(a) {
				return k.test(a)
			} : function() {
				return !0
			}, Ea = Q(la);
			return {
				on: function(a, b, c) {
					b = Z(b);
					w[a] = w[a] || [];
					w[a].push({
						node: b,
						callback: c
					})
				},
				off: function(a, b, c) {
					function g(a, b, c) {
						var f = Z(b);
						return a.filter(function(a) {
							return !(a.node === f && (!c || a.callback === c))
						})
					}
					var f = w[a];
					f && (w[a] = 1 === arguments.length ? null : g(f, b, c))
				},
				pin: function(a, b) {
					va(ra(a), "element", "not an element");
					va(ra(b), "parentElement", "not an element");
					a.data("$ngAnimatePin", b)
				},
				push: function(a, b, c, g) {
					c = c || {};
					c.domOperation = g;
					return u(a, b, c)
				},
				enabled: function(a, b) {
					var c = arguments.length;
					if (0 === c) b = !! H;
					else if (ra(a)) {
						var g = G(a),
							f = U.get(g);
						1 === c ? b = !f : (b = !! b) ? f && U.remove(g) : U.put(g, !0)
					} else b = H = !! a;
					return b
				}
			}
		}]
	}]).provider("$$animation", ["$animateProvider", function(a) {
		function b(a) {
			return a.data("$$animationRunner")
		}
		var c = this.drivers = [];
		this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function(a, e, y, v, z, l) {
			function s(a) {
				function b(a) {
					if (a.processed) return a;
					a.processed = !0;
					var f = a.domNode,
						d = f.parentNode;
					e.put(f, a);
					for (var h; d;) {
						if (h = e.get(d)) {
							h.processed || (h = b(h));
							break
						}
						d = d.parentNode
					}(h || c).children.push(a);
					return a
				}
				var c = {
					children: []
				},
					d, e = new z;
				for (d = 0; d < a.length; d++) {
					var l = a[d];
					e.put(l.domNode, a[d] = {
						domNode: l.domNode,
						fn: l.fn,
						children: []
					})
				}
				for (d = 0; d < a.length; d++) b(a[d]);
				return function(a) {
					var b = [],
						c = [],
						d;
					for (d = 0; d < a.children.length; d++) c.push(a.children[d]);
					a = c.length;
					var h = 0,
						e = [];
					for (d = 0; d < c.length; d++) {
						var l = c[d];
						0 >= a && (a = h, h = 0, b.push(e), e = []);
						e.push(l.fn);
						l.children.forEach(function(a) {
							h++;
							c.push(a)
						});
						a--
					}
					e.length && b.push(e);
					return b
				}(c)
			}
			var O = [],
				x = Q(a);
			return function(t, z, E) {
				function h(a) {
					a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");
					var b = [];
					q(a, function(a) {
						var c = a.getAttribute("ng-animate-ref");
						c && c.length && b.push(a)
					});
					return b
				}
				function S(a) {
					var b = [],
						c = {};
					q(a, function(a, g) {
						var d = G(a.element),
							f = 0 <= ["enter", "move"].indexOf(a.event),
							d = a.structural ? h(d) : [];
						if (d.length) {
							var e = f ? "to" : "from";
							q(d, function(a) {
								var b = a.getAttribute("ng-animate-ref");
								c[b] = c[b] || {};
								c[b][e] = {
									animationID: g,
									element: I(a)
								}
							})
						} else b.push(a)
					});
					var d = {},
						f = {};
					q(c, function(c, e) {
						var h = c.from,
							r = c.to;
						if (h && r) {
							var J = a[h.animationID],
								k = a[r.animationID],
								B = h.animationID.toString();
							if (!f[B]) {
								var l = f[B] = {
									structural: !0,
									beforeStart: function() {
										J.beforeStart();
										k.beforeStart()
									},
									close: function() {
										J.close();
										k.close()
									},
									classes: u(J.classes, k.classes),
									from: J,
									to: k,
									anchors: []
								};
								l.classes.length ? b.push(l) : (b.push(J), b.push(k))
							}
							f[B].anchors.push({
								out: h.element,
								"in": r.element
							})
						} else h = h ? h.animationID : r.animationID, r = h.toString(), d[r] || (d[r] = !0, b.push(a[h]))
					});
					return b
				}
				function u(a, b) {
					a = a.split(" ");
					b = b.split(" ");
					for (var c = [], d = 0; d < a.length; d++) {
						var f = a[d];
						if ("ng-" !== f.substring(0, 3)) for (var h = 0; h < b.length; h++) if (f === b[h]) {
							c.push(f);
							break
						}
					}
					return c.join(" ")
				}
				function J(a) {
					for (var b = c.length - 1; 0 <= b; b--) {
						var d = c[b];
						if (y.has(d) && (d = y.get(d)(a))) return d
					}
				}
				function f(a, c) {
					a.from && a.to ? (b(a.from.element).setHost(c), b(a.to.element).setHost(c)) : b(a.element).setHost(c)
				}
				function B() {
					var a = b(t);
					!a || "leave" === z && E.$$domOperationFired || a.end()
				}
				function p(b) {
					t.off("$destroy", B);
					t.removeData("$$animationRunner");
					x(t, E);
					ea(t, E);
					E.domOperation();
					H && a.removeClass(t, H);
					t.removeClass("ng-animate");
					A.complete(!b)
				}
				E = ia(E);
				var r = 0 <= ["enter", "move", "leave"].indexOf(z),
					A = new v({
						end: function() {
							p()
						},
						cancel: function() {
							p(!0)
						}
					});
				if (!c.length) return p(), A;
				t.data("$$animationRunner", A);
				var U = wa(t.attr("class"), wa(E.addClass, E.removeClass)),
					H = E.tempClasses;
				H && (U += " " + H, E.tempClasses = null);
				O.push({
					element: t,
					classes: U,
					event: z,
					structural: r,
					options: E,
					beforeStart: function() {
						t.addClass("ng-animate");
						H && a.addClass(t, H)
					},
					close: p
				});
				t.on("$destroy", B);
				if (1 < O.length) return A;
				e.$$postDigest(function() {
					var a = [];
					q(O, function(c) {
						b(c.element) ? a.push(c) : c.close()
					});
					O.length = 0;
					var c = S(a),
						d = [];
					q(c, function(a) {
						d.push({
							domNode: G(a.from ? a.from.element : a.element),
							fn: function() {
								a.beforeStart();
								var c, d = a.close;
								if (b(a.anchors ? a.from.element || a.to.element : a.element)) {
									var g = J(a);
									g && (c = g.start)
								}
								c ? (c = c(), c.done(function(a) {
									d(!a)
								}), f(a, c)) : d()
							}
						})
					});
					l(s(d))
				});
				return A
			}
		}]
	}]).provider("$animateCss", ["$animateProvider", function(a) {
		var b = Ca(),
			c = Ca();
		this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$animate", function(a, e, y, v, z, l, s, O) {
			function x(a, b) {
				var c = a.parentNode;
				return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++S)) + "-" + a.getAttribute("class") + "-" + b
			}
			function t(h, f, l, p) {
				var r;
				0 < b.count(l) && (r = c.get(l), r || (f = V(f, "-stagger"), e.addClass(h, f), r = Aa(a, h, p), r.animationDuration = Math.max(r.animationDuration, 0), r.transitionDuration = Math.max(r.transitionDuration, 0), e.removeClass(h, f), c.put(l, r)));
				return r || {}
			}
			function la(a) {
				u.push(a);
				s.waitUntilQuiet(function() {
					b.flush();
					c.flush();
					for (var a = z(), d = 0; d < u.length; d++) u[d](a);
					u.length = 0
				})
			}
			function E(c, f, h) {
				f = b.get(h);
				f || (f = Aa(a, c, Ma), "infinite" === f.animationIterationCount && (f.animationIterationCount = 1));
				b.put(h, f);
				c = f;
				h = c.animationDelay;
				f = c.transitionDelay;
				c.maxDelay = h && f ? Math.max(h, f) : h || f;
				c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration);
				return c
			}
			var h = Q(e),
				S = 0,
				u = [];
			return function(a, c) {
				function d() {
					r()
				}
				function p() {
					r(!0)
				}
				function r(b) {
					if (!(s || S && z)) {
						s = !0;
						z = !1;
						c.$$skipPreparationClasses || e.removeClass(a, aa);
						e.removeClass(a, $);
						ma(g, !1);
						ja(g, !1);
						q(w, function(a) {
							g.style[a[0]] = ""
						});
						h(a, c);
						ea(a, c);
						if (c.onDone) c.onDone();
						m && m.complete(!b)
					}
				}
				function A(a) {
					n.blockTransition && ja(g, a);
					n.blockKeyframeAnimation && ma(g, !! a)
				}
				function u() {
					m = new y({
						end: d,
						cancel: p
					});
					la(L);
					r();
					return {
						$$willAnimate: !1,
						start: function() {
							return m
						},
						end: d
					}
				}
				function H() {
					function b() {
						if (!s) {
							A(!1);
							q(w, function(a) {
								g.style[a[0]] = a[1]
							});
							h(a, c);
							e.addClass(a, $);
							if (n.recalculateTimingStyles) {
								ha = g.className + " " + aa;
								ba = x(g, ha);
								D = E(g, ha, ba);
								X = D.maxDelay;
								I = Math.max(X, 0);
								K = D.maxDuration;
								if (0 === K) {
									r();
									return
								}
								n.hasTransitions = 0 < D.transitionDuration;
								n.hasAnimations = 0 < D.animationDuration
							}
							n.applyAnimationDelay && (X = "boolean" !== typeof c.delay && na(c.delay) ? parseFloat(c.delay) : X, I = Math.max(X, 0), D.animationDelay = X, da = [ka, X + "s"], w.push(da), g.style[da[0]] = da[1]);
							M = 1E3 * I;
							Q = 1E3 * K;
							if (c.easing) {
								var k, p = c.easing;
								n.hasTransitions && (k = N + "TimingFunction", w.push([k, p]), g.style[k] = p);
								n.hasAnimations && (k = W + "TimingFunction", w.push([k, p]), g.style[k] = p)
							}
							D.transitionDuration && m.push(sa);
							D.animationDuration && m.push(ta);
							H = Date.now();
							var u = M + 1.5 * Q;
							k = H + u;
							var p = a.data("$$animateCss") || [],
								z = !0;
							if (p.length) {
								var C = p[0];
								(z = k > C.expectedEndTime) ? v.cancel(C.timer) : p.push(r)
							}
							z && (u = v(d, u, !1), p[0] = {
								timer: u,
								expectedEndTime: k
							}, p.push(r), a.data("$$animateCss", p));
							a.on(m.join(" "), l);
							ya(a, c)
						}
					}

					function d() {
						var b = a.data("$$animateCss");
						if (b) {
							for (var c = 1; c < b.length; c++) b[c]();
							a.removeData("$$animateCss")
						}
					}
					function l(a) {
						a.stopPropagation();
						var b = a.originalEvent || a;
						a = b.$manualTimeStamp || b.timeStamp || Date.now();
						b = parseFloat(b.elapsedTime.toFixed(3));
						Math.max(a - H, 0) >= M && b >= K && (S = !0, r())
					}
					if (!s) if (g.parentNode) {
						var H, m = [],
							k = function(a) {
								if (S) z && a && (z = !1, r());
								else if (z = !a, D.animationDuration) if (a = ma(g, z), z) w.push(a);
								else {
									var b = w,
										c = b.indexOf(a);
									0 <= a && b.splice(c, 1)
								}
							},
							p = 0 < Z && (D.transitionDuration && 0 === T.transitionDuration || D.animationDuration && 0 === T.animationDuration) && Math.max(T.animationDelay, T.transitionDelay);
						p ? v(b, Math.floor(p * Z * 1E3), !1) : b();
						F.resume = function() {
							k(!0)
						};
						F.pause = function() {
							k(!1)
						}
					} else r()
				}
				var g = G(a);
				if (!g || !g.parentNode || !O.enabled()) return u();
				c = ia(c);
				var w = [],
					k = a.attr("class"),
					C = Fa(c),
					s, z, S, m, F, I, M, K, Q;
				if (0 === c.duration || !l.animations && !l.transitions) return u();
				var ca = c.event && Y(c.event) ? c.event.join(" ") : c.event,
					R = "",
					P = "";
				ca && c.structural ? R = V(ca, "ng-", !0) : ca && (R = ca);
				c.addClass && (P += V(c.addClass, "-add"));
				c.removeClass && (P.length && (P += " "), P += V(c.removeClass, "-remove"));
				c.applyClassesEarly && P.length && h(a, c);
				var aa = [R, P].join(" ").trim(),
					ha = k + " " + aa,
					$ = V(aa, "-active"),
					k = C.to && 0 < Object.keys(C.to).length;
				if (!(0 < (c.keyframeStyle || "").length || k || aa)) return u();
				var ba, T;
				0 < c.stagger ? (C = parseFloat(c.stagger), T = {
					transitionDelay: C,
					animationDelay: C,
					transitionDuration: 0,
					animationDuration: 0
				}) : (ba = x(g, ha), T = t(g, aa, ba, Na));
				c.$$skipPreparationClasses || e.addClass(a, aa);
				c.transitionStyle && (C = [N, c.transitionStyle], fa(g, C), w.push(C));
				0 <= c.duration && (C = 0 < g.style[N].length, C = Ba(c.duration, C), fa(g, C), w.push(C));
				c.keyframeStyle && (C = [W, c.keyframeStyle], fa(g, C), w.push(C));
				var Z = T ? 0 <= c.staggerIndex ? c.staggerIndex : b.count(ba) : 0;
				(ca = 0 === Z) && !c.skipBlocking && ja(g, 9999);
				var D = E(g, ha, ba),
					X = D.maxDelay;
				I = Math.max(X, 0);
				K = D.maxDuration;
				var n = {};
				n.hasTransitions = 0 < D.transitionDuration;
				n.hasAnimations = 0 < D.animationDuration;
				n.hasTransitionAll = n.hasTransitions && "all" == D.transitionProperty;
				n.applyTransitionDuration = k && (n.hasTransitions && !n.hasTransitionAll || n.hasAnimations && !n.hasTransitions);
				n.applyAnimationDuration = c.duration && n.hasAnimations;
				n.applyTransitionDelay = na(c.delay) && (n.applyTransitionDuration || n.hasTransitions);
				n.applyAnimationDelay = na(c.delay) && n.hasAnimations;
				n.recalculateTimingStyles = 0 < P.length;
				if (n.applyTransitionDuration || n.applyAnimationDuration) K = c.duration ? parseFloat(c.duration) : K, n.applyTransitionDuration && (n.hasTransitions = !0, D.transitionDuration = K, C = 0 < g.style[N + "Property"].length, w.push(Ba(K, C))), n.applyAnimationDuration && (n.hasAnimations = !0, D.animationDuration = K, w.push([ua, K + "s"]));
				if (0 === K && !n.recalculateTimingStyles) return u();
				if (null != c.delay) {
					var da = parseFloat(c.delay);
					n.applyTransitionDelay && w.push([ga, da + "s"]);
					n.applyAnimationDelay && w.push([ka, da + "s"])
				}
				null == c.duration && 0 < D.transitionDuration && (n.recalculateTimingStyles = n.recalculateTimingStyles || ca);
				M = 1E3 * I;
				Q = 1E3 * K;
				c.skipBlocking || (n.blockTransition = 0 < D.transitionDuration, n.blockKeyframeAnimation = 0 < D.animationDuration && 0 < T.animationDelay && 0 === T.animationDuration);
				xa(a, c);
				n.blockTransition || n.blockKeyframeAnimation ? A(K) : c.skipBlocking || ja(g, !1);
				return {
					$$willAnimate: !0,
					end: d,
					start: function() {
						if (!s) return F = {
							end: d,
							cancel: p,
							resume: null,
							pause: null
						}, m = new y(F), la(H), m
					}
				}
			}
		}]
	}]).provider("$$animateCssDriver", ["$$animationProvider", function(a) {
		a.drivers.push("$$animateCssDriver");
		this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$$body", "$sniffer", "$$jqLite", function(a, c, d, e, y, v, z) {
			function l(a) {
				return a.replace(/\bng-\S+\b/g, "")
			}
			function s(a, b) {
				M(a) && (a = a.split(" "));
				M(b) && (b = b.split(" "));
				return a.filter(function(a) {
					return -1 === b.indexOf(a)
				}).join(" ")
			}
			function O(c, e, u) {
				function v(a) {
					var b = {},
						c = G(a).getBoundingClientRect();
					q(["width", "height", "top", "left"], function(a) {
						var d = c[a];
						switch (a) {
						case "top":
							d += F.scrollTop;
							break;
						case "left":
							d += F.scrollLeft
						}
						b[a] = Math.floor(d) + "px"
					});
					return b
				}
				function f() {
					var c = l(u.attr("class") || ""),
						d = s(c, r),
						c = s(r, c),
						d = a(p, {
							to: v(u),
							addClass: "ng-anchor-in " + d,
							removeClass: "ng-anchor-out " + c,
							delay: !0
						});
					return d.$$willAnimate ? d : null
				}
				function z() {
					p.remove();
					e.removeClass("ng-animate-shim");
					u.removeClass("ng-animate-shim")
				}
				var p = I(G(e).cloneNode(!0)),
					r = l(p.attr("class") || "");
				e.addClass("ng-animate-shim");
				u.addClass("ng-animate-shim");
				p.addClass("ng-anchor");
				E.append(p);
				var A;
				c = function() {
					var c = a(p, {
						addClass: "ng-anchor-out",
						delay: !0,
						from: v(e)
					});
					return c.$$willAnimate ? c : null
				}();
				if (!c && (A = f(), !A)) return z();
				var t = c || A;
				return {
					start: function() {
						function a() {
							c && c.end()
						}
						var b, c = t.start();
						c.done(function() {
							c = null;
							if (!A && (A = f())) return c = A.start(), c.done(function() {
								c = null;
								z();
								b.complete()
							}), c;
							z();
							b.complete()
						});
						return b = new d({
							end: a,
							cancel: a
						})
					}
				}
			}
			function x(a, b, c, e) {
				var f = t(a, L),
					l = t(b, L),
					p = [];
				q(e, function(a) {
					(a = O(c, a.out, a["in"])) && p.push(a)
				});
				if (f || l || 0 !== p.length) return {
					start: function() {
						function a() {
							q(b, function(a) {
								a.end()
							})
						}
						var b = [];
						f && b.push(f.start());
						l && b.push(l.start());
						q(p, function(a) {
							b.push(a.start())
						});
						var c = new d({
							end: a,
							cancel: a
						});
						d.all(b, function(a) {
							c.complete(a)
						});
						return c
					}
				}
			}
			function t(c) {
				var d = c.element,
					e = c.options || {};
				c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone = e.domOperation));
				e.preparationClasses && (e.event = $(e.event, e.preparationClasses));
				c = a(d, e);
				return c.$$willAnimate ? c : null
			}
			if (!v.animations && !v.transitions) return L;
			var F = G(y);
			c = G(e);
			var E = I(F.parentNode === c ? F : c);
			Q(z);
			return function(a) {
				return a.from && a.to ? x(a.from, a.to, a.classes, a.anchors) : t(a)
			}
		}]
	}]).provider("$$animateJs", ["$animateProvider", function(a) {
		this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function(b, c, d) {
			function e(c) {
				c = Y(c) ? c : c.split(" ");
				for (var d = [], e = {}, s = 0; s < c.length; s++) {
					var q = c[s],
						y = a.$$registeredAnimations[q];
					y && !e[q] && (d.push(b.get(y)), e[q] = !0)
				}
				return d
			}
			var y = Q(d);
			return function(a, b, d, s) {
				function x() {
					s.domOperation();
					y(a, s)
				}
				function F(a, b, d, e, f) {
					switch (d) {
					case "animate":
						b = [b, e.from, e.to, f];
						break;
					case "setClass":
						b = [b, E, h, f];
						break;
					case "addClass":
						b = [b, E, f];
						break;
					case "removeClass":
						b = [b, h, f];
						break;
					default:
						b = [b, f]
					}
					b.push(e);
					if (a = a.apply(a, b)) if (Da(a.start) && (a = a.start()), a instanceof c) a.done(f);
					else if (Da(a)) return a;
					return L
				}
				function t(a, b, d, e, f) {
					var g = [];
					q(e, function(e) {
						var h = e[f];
						h && g.push(function() {
							var e, g, f = !1,
								l = function(a) {
									f || (f = !0, (g || L)(a), e.complete(!a))
								};
							e = new c({
								end: function() {
									l()
								},
								cancel: function() {
									l(!0)
								}
							});
							g = F(h, a, b, d, function(a) {
								l(!1 === a)
							});
							return e
						})
					});
					return g
				}
				function G(a, b, d, e, f) {
					var g = t(a, b, d, e, f);
					if (0 === g.length) {
						var h, k;
						"beforeSetClass" === f ? (h = t(a, "removeClass", d, e, "beforeRemoveClass"), k = t(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = t(a, "removeClass", d, e, "removeClass"), k = t(a, "addClass", d, e, "addClass"));
						h && (g = g.concat(h));
						k && (g = g.concat(k))
					}
					if (0 !== g.length) return function(a) {
						var b = [];
						g.length && q(g, function(a) {
							b.push(a())
						});
						b.length ? c.all(b, a) : a();
						return function(a) {
							q(b, function(b) {
								a ? b.cancel() : b.end()
							})
						}
					}
				}
				3 === arguments.length && oa(d) && (s = d, d = null);
				s = ia(s);
				d || (d = a.attr("class") || "", s.addClass && (d += " " + s.addClass), s.removeClass && (d += " " + s.removeClass));
				var E = s.addClass,
					h = s.removeClass,
					I = e(d),
					u, J;
				if (I.length) {
					var f, B;
					"leave" == b ? (B = "leave", f = "afterLeave") : (B = "before" + b.charAt(0).toUpperCase() + b.substr(1), f = b);
					"enter" !== b && "move" !== b && (u = G(a, b, s, I, B));
					J = G(a, b, s, I, f)
				}
				if (u || J) return {
					start: function() {
						function b(c) {
							f = !0;
							x();
							ea(a, s);
							h.complete(c)
						}
						var d, e = [];
						u && e.push(function(a) {
							d = u(a)
						});
						e.length ? e.push(function(a) {
							x();
							a(!0)
						}) : x();
						J && e.push(function(a) {
							d = J(a)
						});
						var f = !1,
							h = new c({
								end: function() {
									f || ((d || L)(void 0), b(void 0))
								},
								cancel: function() {
									f || ((d || L)(!0), b(!0))
								}
							});
						c.chain(e, b);
						return h
					}
				}
			}
		}]
	}]).provider("$$animateJsDriver", ["$$animationProvider", function(a) {
		a.drivers.push("$$animateJsDriver");
		this.$get = ["$$animateJs", "$$AnimateRunner", function(a, c) {
			function d(c) {
				return a(c.element, c.event, c.classes, c.options)
			}
			return function(a) {
				if (a.from && a.to) {
					var b = d(a.from),
						v = d(a.to);
					if (b || v) return {
						start: function() {
							function a() {
								return function() {
									q(d, function(a) {
										a.end()
									})
								}
							}
							var d = [];
							b && d.push(b.start());
							v && d.push(v.start());
							c.all(d, function(a) {
								e.complete(a)
							});
							var e = new c({
								end: a(),
								cancel: a()
							});
							return e
						}
					}
				} else return d(a)
			}
		}]
	}])
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map