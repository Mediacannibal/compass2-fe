(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{447:function(t,r,n){"use strict";var e=n(750),o=n.n(e).a.create({baseURL:"https://apidc.mediacannibal.com/"});r.a=o},448:function(t,r,n){"use strict";r.a=function(t){return null===t||"null"===t?{Accept:"application/json"}:{Accept:"application/json",Authorization:t?"Token ".concat(JSON.parse(t)):""}}},449:function(t,r,n){"use strict";n.d(r,"a",(function(){return f}));var e=n(551),o=n(452);function a(t,r,n,e,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?r(c):Promise.resolve(c).then(e,o)}function u(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(a.push(e.value),!r||a.length!==r);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var c=function(t,r,n){r/=100,n/=100;var e=(1-Math.abs(2*n-1))*r,o=e*(1-Math.abs(t/60%2-1)),a=n-e/2,u=0,i=0,c=0;return 0<=t&&t<60?(u=e,i=o,c=0):60<=t&&t<120?(u=o,i=e,c=0):120<=t&&t<180?(u=0,i=e,c=o):180<=t&&t<240?(u=0,i=o,c=e):240<=t&&t<300?(u=o,i=0,c=e):300<=t&&t<360&&(u=e,i=0,c=o),u=Math.round(255*(u+a)).toString(16),i=Math.round(255*(i+a)).toString(16),c=Math.round(255*(c+a)).toString(16),1==u.length&&(u="0"+u),1==i.length&&(i="0"+i),1==c.length&&(c="0"+c),"#"+u+i+c},l=function(t){var r,n=0;(n=(r=function(t){var r=0,n=0,e=0;4==t.length?(r="0x"+t[1]+t[1],n="0x"+t[2]+t[2],e="0x"+t[3]+t[3]):7==t.length&&(r="0x"+t[1]+t[2],n="0x"+t[3]+t[4],e="0x"+t[5]+t[6]),r/=255,n/=255,e/=255;var o=Math.min(r,n,e),a=Math.max(r,n,e),u=a-o,i=0,c=0;return i=0==u?0:a==r?(n-e)/u%6:a==n?(e-r)/u+2:(r-n)/u+4,(i=Math.round(60*i))<0&&(i+=360),c=(a+o)/2,{h:i,s:+(100*(0==u?0:u/(1-Math.abs(2*c-1)))).toFixed(1),l:c=+(100*c).toFixed(1)}}(t)).h-12)>360?n-=360:n<0&&(n+=360);var e=0;(e=r.h-170)>360?e-=360:e<0&&(e+=360);return{color_11:"#ad43f5",color_12:"#78ce6a",color_13:"#EC7A4A",color_14:"#f5d343",color_15:"#76c2f6",color_red:"#e00000",color_green:"#639A4D",color_m1:t,color_m2:c(n,50,45),color_m3:c(e,93,54),color_s1:c(r.h,30,70),color_s2:c(n,30,70),color_s3:c(e,30,70),color_t1:c(r.h,50,95),color_t2:c(n,50,95),color_t3:c(e,50,95)}},s=new o.a(!1),f=function(){var t=u(Object(o.b)(s),2),r=t[0],n=t[1];return{colourObj:r,setcolourObj:n,loadinstancecolor:function(t){return(r=regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(e.a)(t).then((function(t){n(l(t.data.results[0].color_field))}));case 2:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var u=r.apply(t,n);function i(t){a(u,e,o,i,c,"next",t)}function c(t){a(u,e,o,i,c,"throw",t)}i(void 0)}))})();var r},loaddefaultcolor:function(){n(l("#00253a"))},setinstancecolor:function(t){n(l(t))}}}},452:function(t,r,n){"use strict";n.d(r,"a",(function(){return c})),n.d(r,"b",(function(){return l}));var e=n(1);function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(a.push(e.value),!r||a.length!==r);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return a(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function u(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function i(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var c=function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"_state",void 0),i(this,"subscribers",void 0),i(this,"index",void 0),i(this,"id",void 0),this._state=r,this.index=0,this.subscribers={},this.id=t.id++}var r,n,e;return r=t,(n=[{key:"pingSubscribers",value:function(t,r){for(var n in this.subscribers)this.subscribers[n](t,r)}},{key:"update",value:function(t){var r;r=t instanceof Function?t(this._state):t;var n=this._state;return this._state=r,this.pingSubscribers(n,r),r}},{key:"subscribe",value:function(t){var r=++this.index;this.subscribers[r]=t;var n=this.subscribers;return function(){delete n[r]}}},{key:"state",get:function(){return this._state}}])&&u(r.prototype,n),e&&u(r,e),t}();function l(t){var r=o(Object(e.useState)(t.state),2),n=r[0],a=r[1];Object(e.useLayoutEffect)((function(){return t.subscribe((function(t,r){a(r)}))}),[t.id]);return[n,function(r){t.update(r)}]}i(c,"id",0)},453:function(t,r,n){"use strict";n.d(r,"a",(function(){return i}));var e=n(452);function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(a.push(e.value),!r||a.length!==r);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return a(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var u=new e.a("undefined"==typeof localStorage?null:!!localStorage.getItem("AuthToken")&&JSON.parse(String(localStorage.getItem("AuthToken")))),i=function(){var t=o(Object(e.b)(u),2),r=t[0],n=t[1];return{auth:r,setAuth:n,login:function(t){n(t)},logout:function(){localStorage.clear(),sessionStorage.clear(),n(null)}}}},455:function(t,r,n){"use strict";n.d(r,"a",(function(){return i}));var e=n(452);function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(a.push(e.value),!r||a.length!==r);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return a(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var u=new e.a("Splash"),i=function(){var t=o(Object(e.b)(u),2);return{ActiveScreen:t[0],setActiveScreen:t[1]}}},492:function(t,r,n){"use strict";n.d(r,"a",(function(){return b}));var e=n(452),o=n(447),a=n(448);function u(t,r,n,e,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?r(c):Promise.resolve(c).then(e,o)}var i=function(){var t,r=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("user/list/",{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var r=this,n=arguments;return new Promise((function(e,o){var a=t.apply(r,n);function i(t){u(a,e,o,i,c,"next",t)}function c(t){u(a,e,o,i,c,"throw",t)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();function c(t,r,n,e,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?r(c):Promise.resolve(c).then(e,o)}var l=function(){var t,r=(t=regeneratorRuntime.mark((function t(r,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.put("user/edit_profile/".concat(r,"/"),n,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var r=this,n=arguments;return new Promise((function(e,o){var a=t.apply(r,n);function u(t){c(a,e,o,u,i,"next",t)}function i(t){c(a,e,o,u,i,"throw",t)}u(void 0)}))});return function(t,n){return r.apply(this,arguments)}}();function s(t,r,n,e,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?r(c):Promise.resolve(c).then(e,o)}var f=function(){var t,r=(t=regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.put("user/profile/edit/",r,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var r=this,n=arguments;return new Promise((function(e,o){var a=t.apply(r,n);function u(t){s(a,e,o,u,i,"next",t)}function i(t){s(a,e,o,u,i,"throw",t)}u(void 0)}))});return function(t){return r.apply(this,arguments)}}();function h(t,r,n,e,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?r(c):Promise.resolve(c).then(e,o)}function d(t){return function(){var r=this,n=arguments;return new Promise((function(e,o){var a=t.apply(r,n);function u(t){h(a,e,o,u,i,"next",t)}function i(t){h(a,e,o,u,i,"throw",t)}u(void 0)}))}}function p(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var e,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(a.push(e.value),!r||a.length!==r);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return v(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var m=new e.a(!1),y=new e.a("undefined"!=typeof localStorage&&(!!localStorage.getItem("UserDetails")&&JSON.parse(String(localStorage.getItem("UserDetails"))))),b=function(){var t=p(Object(e.b)(m),2),r=t[0],n=t[1],o=p(Object(e.b)(y),2),a=o[0],u=o[1];return{user:r,setuser:n,selfuser:a,setselfuser:u,loaduser:function(){return d(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().then((function(t){n(t.data)}));case 2:case"end":return t.stop()}}),t)})))()},edituser:function(t,r){return d(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t,r).then((function(e){n((function(n){return n&&n.map((function(n){var e;return String(n.id)===String(t)?((e=n).image=r.image,e.firstname=r.firstname,e.lastname=r.lastname,e.email=r.email,e.address=r.address,e.dob=r.dob,e.user_type=r.user_type,e.gender=r.gender,e.auth_type=r.auth_type,e.photo_url=r.photo_url,e.dial_code=r.dial_code,e.phone=r.phone,e):n}))}))})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},editprofileuser:function(t){return d(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f(t).then((function(r){u((function(r){return r&&r.map((function(r){var n;return(n=r).image=t.image,n.firstname=t.firstname,n.lastname=t.lastname,n.email=t.email,n.address=t.address,n.dob=t.dob,n.user_type=t.user_type,n.gender=t.gender,n.auth_type=t.auth_type,n.photo_url=t.photo_url,n.dial_code=t.dial_code,n.phone=t.phone,n}))}))})).catch((function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()}}}},551:function(t,r,n){"use strict";var e=n(447),o=n(448);function a(t,r,n,e,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?r(c):Promise.resolve(c).then(e,o)}var u=function(){var t,r=(t=regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.a.get("api/v1/appdata/instance/info/?instance_id=".concat(r),{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var r=this,n=arguments;return new Promise((function(e,o){var u=t.apply(r,n);function i(t){a(u,e,o,i,c,"next",t)}function c(t){a(u,e,o,i,c,"throw",t)}i(void 0)}))});return function(t){return r.apply(this,arguments)}}();r.a=u}}]);
//# sourceMappingURL=1.59884e4f85938cd59e73.js.map