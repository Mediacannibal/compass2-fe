(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{464:function(t,n,e){"use strict";var r=e(562),i=e.n(r).a.create({baseURL:"https://apidc.mediacannibal.com/"});n.a=i},465:function(t,n,e){"use strict";n.a=function(t){return null===t||"null"===t?{Accept:"application/json"}:{Accept:"application/json",Authorization:t?"Token ".concat(JSON.parse(t)):""}}},468:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return s}));var r=e(1);function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,i,a=[],o=!0,c=!1;try{for(e=e.call(t);!(o=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(t){c=!0,i=t}finally{try{o||null==e.return||e.return()}finally{if(c)throw i}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"_state",void 0),c(this,"subscribers",void 0),c(this,"index",void 0),c(this,"id",void 0),this._state=n,this.index=0,this.subscribers={},this.id=t.id++}var n,e,r;return n=t,(e=[{key:"pingSubscribers",value:function(t,n){for(var e in this.subscribers)this.subscribers[e](t,n)}},{key:"update",value:function(t){var n;n=t instanceof Function?t(this._state):t;var e=this._state;return this._state=n,this.pingSubscribers(e,n),n}},{key:"subscribe",value:function(t){var n=++this.index;this.subscribers[n]=t;var e=this.subscribers;return function(){delete e[n]}}},{key:"state",get:function(){return this._state}}])&&o(n.prototype,e),r&&o(n,r),t}();function s(t){var n=i(Object(r.useState)(t.state),2),e=n[0],a=n[1];Object(r.useLayoutEffect)((function(){return t.subscribe((function(t,n){a(n)}))}),[t.id]);return[e,function(n){t.update(n)}]}c(u,"id",0)},473:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"g",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"f",(function(){return c})),e.d(n,"e",(function(){return u})),e.d(n,"d",(function(){return s})),e.d(n,"a",(function(){return f}));var r=e(464),i=function(t,n,e,i){r.a.post("/api/v1/appdata/filemodel/create/",e,{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess",i)})).catch((function(n){return t(n,n.response,i)}))},a=function(t,n){r.a.get("/appdata/single_analytics/",{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},o=function(t,n){r.a.get("/appdata/Screensdata/",{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},c=function(t,n,e){r.a.post("/appdata/Screensdata/",e,{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},u=function(t,n){r.a.get("/appdata/analytics/?readlatest=0",{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},s=function(t,n){r.a.get("/appdata/analytics/?readlatest=1",{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},f=function(t,n){r.a.post("user/social/signup/",n,{headers:{"Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))}}}]);
//# sourceMappingURL=3.3131d88a98dc6bacece5.js.map