(window.webpackJsonp=window.webpackJsonp||[]).push([[46,47],{475:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return l}));var r=e(1);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"_state",void 0),a(this,"subscribers",void 0),a(this,"index",void 0),a(this,"id",void 0),this._state=n,this.index=0,this.subscribers={},this.id=t.id++}var n,e,r;return n=t,(e=[{key:"pingSubscribers",value:function(t,n){for(var e in this.subscribers)this.subscribers[e](t,n)}},{key:"update",value:function(t){var n;n=t instanceof Function?t(this._state):t;var e=this._state;return this._state=n,this.pingSubscribers(e,n),n}},{key:"subscribe",value:function(t){var n=++this.index;this.subscribers[n]=t;var e=this.subscribers;return function(){delete e[n]}}},{key:"state",get:function(){return this._state}}])&&u(n.prototype,e),r&&u(n,r),t}();function l(t){var n=o(Object(r.useState)(t.state),2),e=n[0],i=n[1];Object(r.useLayoutEffect)((function(){return t.subscribe((function(t,n){i(n)}))}),[t.id]);return[e,function(n){t.update(n)}]}a(c,"id",0)},494:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(475);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var u=new r.a("undefined"==typeof localStorage?null:!!localStorage.getItem("AuthToken")&&JSON.parse(String(localStorage.getItem("AuthToken")))),a=function(){var t=o(Object(r.b)(u),2),n=t[0],e=t[1];return{auth:n,setAuth:e,login:function(t){e(t)},logout:function(){localStorage.clear(),sessionStorage.clear(),e(null)}}}},530:function(t,n,e){"use strict";e.d(n,"a",(function(){return m}));var r=e(475),o=e(548),i=e(549),u=e(550),a=e(551);function c(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(r,o)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function u(t){l(i,r,o,u,a,"next",t)}function a(t){l(i,r,o,u,a,"throw",t)}u(void 0)}))}}function f(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}(t,n)||d(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,n){if(t){if("string"==typeof t)return y(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?y(t,n):void 0}}function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var p=new r.a(!1),m=function(){var t=f(Object(r.b)(p),2),n=t[0],e=t[1];return{level:n,setlevel:e,loadlevel:function(){return s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("").then((function(t){console.log("kjsaksahdfadfasdfas",t),e(t.data.results)}));case 2:case"end":return t.stop()}}),t)})))()},loadlevelwithid:function(t){return s(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.a)(t).then((function(t){console.log("kjsaksahdfadfasdfas",t),e(t.data.results)}));case 2:case"end":return n.stop()}}),n)})))()},postlevel:function(t){return s(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.a)(t).then((function(t){console.log(t),e((function(n){return[].concat(c(n),[t.data])}))})).catch((function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})))()},editlevel:function(t,n){return s(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(u.a)(t,n).then((function(r){console.log(r),e((function(e){return e&&e.map((function(e){var r;return String(e.id)===String(t)?((r=e).l_level=n.l_level,r.instance_id=n.instance_id,r.l_icon=n.l_icon,r.l_qrcode=n.l_qrcode,r.l_title=n.l_title,r.l_stitle=n.l_stitle,r.l_body=n.l_body,r.l_bodytype=n.l_bodytype,r.l_bodyoptions=n.l_bodyoptions,r.locations=n.locations,r.l_media=n.l_media,r.l_misc=n.l_misc,r.completion_image=n.completion_image,r.clue_image=n.clue_image,r.l_qr_id=n.l_qr_id,r):e}))}))})).catch((function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()},deletelevel:function(t){return s(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(a.a)(t).then((function(r){console.log(r),e(n&&n.filter((function(n){return n.id!==t})))})).catch((function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()}}}},562:function(t,n,e){"use strict";e.d(n,"a",(function(){return m}));var r=e(475),o=e(579),i=e(580),u=e(581),a=e(582);function c(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(r,o)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function u(t){l(i,r,o,u,a,"next",t)}function a(t){l(i,r,o,u,a,"throw",t)}u(void 0)}))}}function f(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}(t,n)||d(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,n){if(t){if("string"==typeof t)return y(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?y(t,n):void 0}}function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var p=new r.a(!1),m=function(){var t=f(Object(r.b)(p),2),n=t[0],e=t[1];return{logo:n,setlogo:e,loadlogo:function(){return s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("").then((function(t){e(t.data.results)}));case 2:case"end":return t.stop()}}),t)})))()},loadlogowithid:function(t){return s(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.a)(t).then((function(t){e(t.data.results)}));case 2:case"end":return n.stop()}}),n)})))()},postlogo:function(t){return s(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.a)(t).then((function(t){e((function(n){return[].concat(c(n),[t.data])}))})).catch((function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})))()},editlogo:function(t,n){return s(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(i.a)(t,n).then((function(r){e((function(e){return e&&e.map((function(e){var r;return String(e.id)===String(t)?((r=e).instance_id=n.instance_id,r.i_logo=n.i_logo,r.position=n.position,r.section=n.section,r):e}))}))})).catch((function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()},deletelogo:function(t){return s(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(a.a)(t).then((function(r){e(n&&n.filter((function(n){return n.id!==t})))})).catch((function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()}}}},583:function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var r=e(475),o=e(584),i=e(585);function u(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(r,o)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){u(i,r,o,a,c,"next",t)}function c(t){u(i,r,o,a,c,"throw",t)}a(void 0)}))}}function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var s=new r.a(!1),f=function(){var t=c(Object(r.b)(s),2),n=t[0],e=t[1];return{logoposition:n,setlogoposition:e,loadlogo_arrayposition:function(){return a(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)().then((function(t){console.log("loadlogo_arrayposition",t),e(t.data.results)}));case 2:case"end":return t.stop()}}),t)})))()},loadlogo_arrayposition_iid:function(t){return a(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.a)(t).then((function(t){console.log("loadlogo_arrayposition",t.data.results),e(t.data.results)}));case 2:case"end":return n.stop()}}),n)})))()}}}},595:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var r=e(475),o=e(596),i=e(597);function u(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(r,o)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){u(i,r,o,a,c,"next",t)}function c(t){u(i,r,o,a,c,"throw",t)}a(void 0)}))}}function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var s=new r.a(!1),f=new r.a("undefined"!=typeof localStorage&&(!!localStorage.getItem("UserDetails")&&JSON.parse(String(localStorage.getItem("UserDetails"))))),d=function(){var t=c(Object(r.b)(s),2),n=t[0],e=t[1],u=c(Object(r.b)(f),2),l=u[0],d=u[1];return{user:n,setuser:e,selfuser:l,setselfuser:d,loaduser:function(){return a(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)().then((function(t){e(t.data)}));case 2:case"end":return t.stop()}}),t)})))()},edituser:function(t,n){return a(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(i.a)(t,n).then((function(r){e((function(e){return e&&e.map((function(e){var r;return String(e.id)===String(t)?((r=e).image=n.image,r.firstname=n.firstname,r.lastname=n.lastname,r.email=n.email,r.address=n.address,r.dob=n.dob,r.user_type=n.user_type,r.gender=n.gender,r.auth_type=n.auth_type,r.photo_url=n.photo_url,r.dial_code=n.dial_code,r.phone=n.phone,r):e}))}))})).catch((function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()}}}},608:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var r=e(475),o=e(609);function i(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(r,o)}function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var c=new r.a(!1),l=function(){var t=u(Object(r.b)(c),2),n=t[0],e=t[1];return{leveldetails:n,setleveldetails:e,loadleveldetails:function(){return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)().then((function(t){console.log("getleveldetails",t),e(t.data.results)}));case 2:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function a(t){i(u,r,o,a,c,"next",t)}function c(t){i(u,r,o,a,c,"throw",t)}a(void 0)}))})();var t}}}},966:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var r=e(475),o=e(967),i=e(968),u=e(969),a=e(970),c=e(558);function l(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(r,o)}function f(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function u(t){s(i,r,o,u,a,"next",t)}function a(t){s(i,r,o,u,a,"throw",t)}u(void 0)}))}}function d(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}(t,n)||y(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,n){if(t){if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?p(t,n):void 0}}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var m=new r.a(!1),v=new r.a(!1),h=function(){var t=d(Object(r.b)(m),2),n=t[0],e=t[1],s=d(Object(r.b)(v),2),y=s[0],p=s[1];return{sublevel:n,setsublevel:e,sublevel1:y,setsublevel1:p,loadsublevel:function(){return f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("","").then((function(t){e(t.data.results)}));case 2:case"end":return t.stop()}}),t)})))()},loadsublevelwithid:function(t,n){return f(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(o.a)(t,n).then((function(t){e(t.data.results)}));case 2:case"end":return r.stop()}}),r)})))()},postsublevel:function(t){return f(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.a)(t).then((function(t){console.log(t),e((function(n){return[].concat(l(n),[t.data])}))})).catch((function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})))()},editsublevel:function(t,n){return f(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(u.a)(t,n).then((function(r){console.log(r),e((function(e){return e&&e.map((function(e){var r;return String(e.id)===String(t)?((r=e).instance_id=n.instance_id,r.level_id=n.level_id,r.sl_types=n.sl_types,r.sl_icon=n.sl_icon,r.sl_title=n.sl_title,r.sl_stitle=n.sl_stitle,r.sl_body=n.sl_body,r.sl_bodytype=n.sl_bodytype,r.sl_bodyoptions=n.sl_bodyoptions,r.sl_misc=n.sl_misc,r.sl_media=n.sl_media,r):e}))}))})).catch((function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()},deletesublevel:function(t){return f(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(a.a)(t).then((function(r){console.log(r),e(n&&n.filter((function(n){return n.id!==t})))})).catch((function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()},loadsublevel1_data_byid:function(t){return f(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(c.a)(t).then((function(t){console.log("getsublevel_data_byid",t),p(t.data.results)}));case 2:case"end":return n.stop()}}),n)})))()}}}}}]);
//# sourceMappingURL=46.656ee75dcda1709b526b.js.map