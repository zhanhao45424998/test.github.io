(function(e){function t(t){for(var r,i,s=t[0],u=t[1],l=t[2],c=0,d=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return s.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"0c8c39e7"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var l=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"13b3":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="13b3"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-scene",{attrs:{renderer:"antialias: auto","tune-render":""}},[r("a-assets",[r("img",{attrs:{id:"skyTexture",src:n("afcc"),alt:"图片"}})]),r("a-sky",{attrs:{src:"#skyTexture"}}),r("a-light",{attrs:{type:"ambient",color:"#ffffff",intensity:"1"}}),r("a-light",{attrs:{type:"directional",color:"#ffffff",position:"0 400 350",intensity:"2"}}),r("a-camera",{attrs:{fov:"45",far:"2000",near:"1"}},[r("a-cursor")],1)],1)},a=[],i=n("fdab"),s={name:"Home",data:function(){return{}},components:{HelloWorld:i["a"]},mounted:function(){this.getList()},methods:{getList:function(){AFRAME.registerComponent("draw-canvas",{schema:{default:""},init:function(){this.canvas=document.getElementById(this.data),this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="#222266",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}})}}},u=s,l=n("2877"),c=Object(l["a"])(u,o,a,!1,null,null,null),f=c.exports,d=n("9483");Object(d["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var p=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Create"})},h=[],g=n("5a89"),m=n("4721"),b={name:"Create",data:function(){return{}},setup:function(){var e=new g["i"],t=new g["g"](75,window.innerWidth/window.innerHeight,3,1e3),r=new g["o"]({antialias:!0});r.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(r.domElement);var o=new g["a"](10,10,10),a=(new g["l"]).load(n("724e")),i=(new g["l"]).load(n("cf05")),s=(new g["l"]).load(n("724e")),u=(new g["l"]).load(n("724e")),l=(new g["l"]).load(n("724e")),c=(new g["l"]).load(n("724e")),f=[new g["f"]({map:a,side:g["b"]}),new g["f"]({map:i,side:g["b"]}),new g["f"]({map:s,side:g["b"]}),new g["f"]({map:u,side:g["b"]}),new g["f"]({map:l,side:g["b"]}),new g["f"]({map:c,side:g["b"]})],d=new g["e"](o,f);e.add(d),t.position.set(2,0,0),t.lookAt(e.position),new m["a"](t,r.domElement);var p=function n(){requestAnimationFrame(n),r.render(e,t)};p(),window.addEventListener("resize",(function(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}))}},w=b,_=Object(l["a"])(w,v,h,!1,null,null,null),y=_.exports;r["default"].use(p["a"]);var k=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],j=new p["a"]({mode:"history",base:"",routes:k}),x=j,E=n("2f62");r["default"].use(E["a"]);var O=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),C=n("8823"),P=n.n(C),S=n("5c96"),A=n.n(S);n("0fae");r["default"].config.productionTip=!1,r["default"].use(P.a),r["default"].use(A.a),new r["default"]({router:x,store:O,render:function(e){return e(f)}}).$mount("#app")},"724e":function(e,t,n){e.exports=n.p+"static/img/test.a5033f39.jpg"},a083:function(e,t,n){"use strict";n("b7e8")},afcc:function(e,t,n){e.exports=n.p+"static/img/puydesancy.fccb8fc8.jpg"},b7e8:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"static/img/logo.82b9c7a5.png"},fdab:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],a={name:"HelloWorld",props:{msg:String}},i=a,s=(n("a083"),n("2877")),u=Object(s["a"])(i,r,o,!1,null,"838abbb4",null);t["a"]=u.exports}});
//# sourceMappingURL=app.5f76ba03.js.map