(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{451:function(t,r,e){"use strict";var n=e(762),o=e.n(n).a.create({baseURL:"https://apidc.mediacannibal.com/"});r.a=o},452:function(t,r,e){"use strict";r.a=function(t){return null===t||"null"===t?{Accept:"application/json"}:{Accept:"application/json",Authorization:t?"Token ".concat(JSON.parse(t)):""}}},453:function(t,r,e){"use strict";e.d(r,"a",(function(){return f}));var n=e(558),o=e(455);function a(t,r,e,n,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?r(c):Promise.resolve(c).then(n,o)}function u(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,a=[],u=!0,i=!1;try{for(e=e.call(t);!(u=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var c=function(t,r,e){r/=100,e/=100;var n=(1-Math.abs(2*e-1))*r,o=n*(1-Math.abs(t/60%2-1)),a=e-n/2,u=0,i=0,c=0;return 0<=t&&t<60?(u=n,i=o,c=0):60<=t&&t<120?(u=o,i=n,c=0):120<=t&&t<180?(u=0,i=n,c=o):180<=t&&t<240?(u=0,i=o,c=n):240<=t&&t<300?(u=o,i=0,c=n):300<=t&&t<360&&(u=n,i=0,c=o),u=Math.round(255*(u+a)).toString(16),i=Math.round(255*(i+a)).toString(16),c=Math.round(255*(c+a)).toString(16),1==u.length&&(u="0"+u),1==i.length&&(i="0"+i),1==c.length&&(c="0"+c),"#"+u+i+c},l=function(t){var r,e=0;(e=(r=function(t){var r=0,e=0,n=0;4==t.length?(r="0x"+t[1]+t[1],e="0x"+t[2]+t[2],n="0x"+t[3]+t[3]):7==t.length&&(r="0x"+t[1]+t[2],e="0x"+t[3]+t[4],n="0x"+t[5]+t[6]),r/=255,e/=255,n/=255;var o=Math.min(r,e,n),a=Math.max(r,e,n),u=a-o,i=0,c=0;return i=0==u?0:a==r?(e-n)/u%6:a==e?(n-r)/u+2:(r-e)/u+4,(i=Math.round(60*i))<0&&(i+=360),c=(a+o)/2,{h:i,s:+(100*(0==u?0:u/(1-Math.abs(2*c-1)))).toFixed(1),l:c=+(100*c).toFixed(1)}}(t)).h-12)>360?e-=360:e<0&&(e+=360);var n=0;(n=r.h-170)>360?n-=360:n<0&&(n+=360);return{color_11:"#ad43f5",color_12:"#78ce6a",color_13:"#EC7A4A",color_14:"#f5d343",color_15:"#76c2f6",color_red:"#e00000",color_green:"#639A4D",color_m1:t,color_m2:c(e,50,45),color_m3:c(n,93,54),color_s1:c(r.h,30,70),color_s2:c(e,30,70),color_s3:c(n,30,70),color_t1:c(r.h,50,95),color_t2:c(e,50,95),color_t3:c(n,50,95)}},s=new o.a({color_11:"#ad43f5",color_12:"#78ce6a",color_13:"#EC7A4A",color_14:"#f5d343",color_15:"#76c2f6",color_red:"#e00000",color_green:"#639A4D",color_m1:"#00253a",color_m2:"#3998ab",color_m3:"#f6901d",color_s1:"#9bb8c8",color_s2:"#9bc1c8",color_s3:"#c8b39b",color_t1:"#ebf3f8,",color_t2:"#ebf6f8",color_t3:"#f8f2eb"}),f=function(){var t=u(Object(o.b)(s),2),r=t[0],e=t[1];return{colourObj:r,setcolourObj:e,loadinstancecolor:function(t){return(r=regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(n.a)(t).then((function(t){e(l(t.data.results[0].color_field))}));case 2:case"end":return r.stop()}}),r)})),function(){var t=this,e=arguments;return new Promise((function(n,o){var u=r.apply(t,e);function i(t){a(u,n,o,i,c,"next",t)}function c(t){a(u,n,o,i,c,"throw",t)}i(void 0)}))})();var r},loaddefaultcolor:function(){e(l("#00253a"))},setinstancecolor:function(t){e(l(t))}}}},455:function(t,r,e){"use strict";e.d(r,"a",(function(){return c})),e.d(r,"b",(function(){return l}));var n=e(1);function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,a=[],u=!0,i=!1;try{for(e=e.call(t);!(u=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return a(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function u(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var c=function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"_state",void 0),i(this,"subscribers",void 0),i(this,"index",void 0),i(this,"id",void 0),this._state=r,this.index=0,this.subscribers={},this.id=t.id++}var r,e,n;return r=t,(e=[{key:"pingSubscribers",value:function(t,r){for(var e in this.subscribers)this.subscribers[e](t,r)}},{key:"update",value:function(t){var r;r=t instanceof Function?t(this._state):t;var e=this._state;return this._state=r,this.pingSubscribers(e,r),r}},{key:"subscribe",value:function(t){var r=++this.index;this.subscribers[r]=t;var e=this.subscribers;return function(){delete e[r]}}},{key:"state",get:function(){return this._state}}])&&u(r.prototype,e),n&&u(r,n),t}();function l(t){var r=o(Object(n.useState)(t.state),2),e=r[0],a=r[1];Object(n.useLayoutEffect)((function(){return t.subscribe((function(t,r){a(r)}))}),[t.id]);return[e,function(r){t.update(r)}]}i(c,"id",0)},457:function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));var n=e(455);function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,a=[],u=!0,i=!1;try{for(e=e.call(t);!(u=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return a(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var u=new n.a("undefined"==typeof localStorage?null:!!localStorage.getItem("AuthToken")&&JSON.parse(String(localStorage.getItem("AuthToken")))),i=function(){var t=o(Object(n.b)(u),2),r=t[0],e=t[1];return{auth:r,setAuth:e,login:function(t){e(t)},logout:function(){localStorage.clear(),sessionStorage.clear(),e(null)}}}},459:function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));var n=e(455);function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,a=[],u=!0,i=!1;try{for(e=e.call(t);!(u=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return a(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var u=new n.a("Splash"),i=function(){var t=o(Object(n.b)(u),2);return{ActiveScreen:t[0],setActiveScreen:t[1]}}},510:function(t,r,e){"use strict";e.d(r,"a",(function(){return w}));var n=e(455),o=e(451),a=e(452);function u(t,r,e,n,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?r(c):Promise.resolve(c).then(n,o)}var i=function(){var t,r=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("user/list/",{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function i(t){u(a,n,o,i,c,"next",t)}function c(t){u(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();function c(t,r,e,n,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?r(c):Promise.resolve(c).then(n,o)}var l=function(){var t,r=(t=regeneratorRuntime.mark((function t(r,e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.put("user/edit_profile/".concat(r,"/"),e,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function u(t){c(a,n,o,u,i,"next",t)}function i(t){c(a,n,o,u,i,"throw",t)}u(void 0)}))});return function(t,e){return r.apply(this,arguments)}}();function s(t,r,e,n,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?r(c):Promise.resolve(c).then(n,o)}var f=function(){var t,r=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("user/profile/",{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function u(t){s(a,n,o,u,i,"next",t)}function i(t){s(a,n,o,u,i,"throw",t)}u(void 0)}))});return function(){return r.apply(this,arguments)}}();function d(t,r,e,n,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?r(c):Promise.resolve(c).then(n,o)}var h=function(){var t,r=(t=regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.put("user/profile/edit/",r,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function u(t){d(a,n,o,u,i,"next",t)}function i(t){d(a,n,o,u,i,"throw",t)}u(void 0)}))});return function(t){return r.apply(this,arguments)}}();function p(t,r,e,n,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?r(c):Promise.resolve(c).then(n,o)}function v(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function u(t){p(a,n,o,u,i,"next",t)}function i(t){p(a,n,o,u,i,"throw",t)}u(void 0)}))}}function m(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,a=[],u=!0,i=!1;try{for(e=e.call(t);!(u=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return y(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return y(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var b=new n.a(!1),g=new n.a("undefined"!=typeof localStorage&&(!!localStorage.getItem("UserDetails")&&JSON.parse(String(localStorage.getItem("UserDetails"))))),w=function(){var t=m(Object(n.b)(b),2),r=t[0],e=t[1],o=m(Object(n.b)(g),2),a=o[0],u=o[1];return{user:r,setuser:e,selfuser:a,setselfuser:u,loaduser:function(){return v(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().then((function(t){e(t.data),console.log("selfuser selfuser selfuser :",t.data)}));case 2:case"end":return t.stop()}}),t)})))()},edituser:function(t,r){return v(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l(t,r).then((function(n){e((function(e){return e&&e.map((function(e){var n;return String(e.id)===String(t)?((n=e).image=r.image,n.firstname=r.firstname,n.lastname=r.lastname,n.email=r.email,n.address=r.address,n.dob=r.dob,n.user_type=r.user_type,n.gender=r.gender,n.auth_type=r.auth_type,n.photo_url=r.photo_url,n.dial_code=r.dial_code,n.phone=r.phone,n):e}))}))})).catch((function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})))()},loadcurrentuser:function(){return v(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().then((function(t){console.log("currentuser :",t.data.result),u(t.data.result)}));case 2:case"end":return t.stop()}}),t)})))()},editprofileuser:function(t){return v(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,h(t).then((function(r){console.log("edit >>> :",t,r),u((function(r){var e=r;return e.firstname=t.firstname,e.lastname=t.lastname,e.email=t.email,e.image=t.image,e.photo_url=t.photo_url,e.dob=t.dob,e.gender=t.gender,e.address=t.address,e.dial_code=t.dial_code,e.phone=t.phone,localStorage.setItem("UserDetails",JSON.stringify(e)),e}))})).catch((function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()}}}},558:function(t,r,e){"use strict";var n=e(451),o=e(452);function a(t,r,e,n,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?r(c):Promise.resolve(c).then(n,o)}var u=function(){var t,r=(t=regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.a.get("api/v1/appdata/instance/info/?instance_id=".concat(r),{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var u=t.apply(r,e);function i(t){a(u,n,o,i,c,"next",t)}function c(t){a(u,n,o,i,c,"throw",t)}i(void 0)}))});return function(t){return r.apply(this,arguments)}}();r.a=u}}]);
//# sourceMappingURL=1.2b1f538c2283b90088f0.js.map