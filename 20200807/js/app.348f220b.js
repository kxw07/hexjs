(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],s=0,p=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9e7a92a4"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"c1881e18"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var p=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("4160"),n("b64b"),n("159b");var r=n("5530"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("首頁")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("關於")]),e._v(" | "),n("router-link",{attrs:{to:"/products"}},[e._v("產品列表")]),e._v(" | "),n("router-link",{attrs:{to:"/orders"}},[e._v("訂單列表")]),e._v(" | "),n("router-link",{attrs:{to:"/cart"}},[e._v("購物車")])],1),n("router-view")],1)},u=[],i=(n("5c0b"),n("2877")),c={},l=Object(i["a"])(c,a,u,!1,null,null,null),s=l.exports,p=(n("d3b7"),n("8c4f"));o["a"].use(p["a"]);var f=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/products",name:"Products",component:function(){return n.e("about").then(n.bind(null,"e6dc"))}},{path:"/orders",name:"Orders",component:function(){return n.e("about").then(n.bind(null,"159d"))}},{path:"/cart",name:"Cart",component:function(){return n.e("about").then(n.bind(null,"b789"))},children:[{path:"info",name:"Info",component:function(){return n.e("about").then(n.bind(null,"a203"))}},{path:"payment",name:"Payment",component:function(){return n.e("about").then(n.bind(null,"0f75"))}}]}],d=new p["a"]({routes:f}),b=d,h=n("a7fe"),v=n.n(h),m=n("bc3a"),y=n.n(m),g=(n("4989"),n("ab8b"),n("9062")),_=n.n(g),w=(n("e40d"),n("2ef0")),O=n.n(w),j=n("1157"),k=n.n(j),P=n("7bb1"),E=n("4c93"),S=n("60d4"),x=n("1881"),C=n.n(x);o["a"].config.productionTip=!1,o["a"].use(v.a,y.a),o["a"].use(_.a),o["a"].use(C.a),o["a"].prototype._=O.a,o["a"].prototype.$=k.a,o["a"].prototype.$bus=new o["a"],Object.keys(E).forEach((function(e){P["d"](e,Object(r["a"])(Object(r["a"])({},E[e]),{},{message:S["a"][e]}))})),P["c"]({classes:{valid:"is-valid",invalid:"is-invalid"}}),new o["a"]({router:b,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.348f220b.js.map