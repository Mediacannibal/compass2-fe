!function(t){function n(n){for(var r,i,u=n[0],c=n[1],l=n[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(s&&s(n);p.length;)p.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,u=1;u<e.length;u++){var c=e[u];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={20:0},a=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var n=[],e=o[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise((function(n,r){e=o[t]=[n,r]}));n.push(e[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(t){return i.p+""+({}[t]||t)+".1f70e61a437fba617f2f.js"}(t);var c=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(l);var e=o[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,e[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="./",i.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var s=c;a.push([522,15,14,19,18,11,12,17,16,13]),e()}({14:function(t,n,e){"use strict";e.d(n,"c",(function(){return u})),e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return l})),e.d(n,"d",(function(){return s})),e.d(n,"f",(function(){return f})),e.d(n,"e",(function(){return p}));var r=e(3),o=e(16);function a(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}var i=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("user/usererrorlog/",n,{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)}))});return function(t){return n.apply(this,arguments)}}(),u=function(t,n,e,o){r.a.post("/api/v1/appdata/filemodel/create/",e,{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess",o)})).catch((function(n){t(n,n.response,o),p(n,n.response)}))},c=function(t,n,e){r.a.post("/api/v1/appdata/filemodel/create/",e,{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"multipart/form-data"}}).then((function(n){t(n,"sucess")})).catch((function(n){t(n,n.response),p(n,n.response)}))},l=function(t,n){r.a.post("user/social/signup/",n,{headers:{"Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){t(n,n.response),p(n,n.response)}))},s=function(t,n){r.a.post("user/phone/email/otp_verify/",n,{headers:{"Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},f=function(t,n,e){r.a.post("api/v1/appdata/gamedatalog/",e,{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){t(n,n.response),p(n,n.response)}))},p=function(t,n){console.log("========>>> error in frontend logged ",t);var e={error_title:"front end error",error_message:JSON.stringify(n),additional_info:JSON.stringify(t)};i(e)}},16:function(t,n,e){"use strict";n.a=function(t){return null===t||"null"===t?{Accept:"application/json"}:{Accept:"application/json",Authorization:t?"Token ".concat(JSON.parse(t)):""}}},165:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(8);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var i=new r.a({key:"ENGLISH",value:"ENGLISH"}),u=function(){var t=o(Object(r.b)(i),2);return{Language:t[0],setLanguage:t[1]}}},166:function(t,n,e){"use strict";e.d(n,"a",(function(){return y}));var r=e(14),o=e(8),a=e(3),i=e(16);function u(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}var c=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.get("api/v1/appdata/level/list/".concat(n,"/"),{headers:Object(i.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();function l(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}var s=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.get("api/v1/appdata/level/qr/".concat(n,"/"),{headers:Object(i.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){l(a,r,o,i,u,"next",t)}function u(t){l(a,r,o,i,u,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();function f(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function p(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){f(a,r,o,i,u,"next",t)}function u(t){f(a,r,o,i,u,"throw",t)}i(void 0)}))}}function v(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return d(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var h=new o.a(!1),m=new o.a(!1),y=function(){var t=v(Object(o.b)(h),2),n=t[0],e=t[1],a=v(Object(o.b)(m),2),i=a[0],u=a[1];return{ActiveLevelDetails:n,setActiveLevelDetails:e,levelLogError:i,loadActiveleveldetails:function(t){return p(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===t){n.next=3;break}return n.next=3,c(t).then((function(t){var n;e(null===(n=t.data)||void 0===n?void 0:n.results[0])})).catch((function(t){Object(r.e)(t,t.response),u(t)}));case 3:case"end":return n.stop()}}),n)})))()},loadActiveleveldetailsbyqr:function(t){return p(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s(t).then((function(t){var n;e(null===(n=t.data)||void 0===n?void 0:n.results[0])})).catch((function(t){Object(r.e)(t,t.response)}));case 2:case"end":return n.stop()}}),n)})))()}}}},167:function(t,n,e){"use strict";e.d(n,"a",(function(){return A}));var r=e(8),o=e(72),a=e(3),i=e(16);function u(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}var c=function(){var t,n=(t=regeneratorRuntime.mark((function t(n,e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.put("api/v1/appdata/instance/".concat(n,"/"),e,{headers:Object(i.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))});return function(t,e){return n.apply(this,arguments)}}();function l(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}var s=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.post("api/v1/appdata/instance/info/",n,{headers:Object(i.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){l(a,r,o,i,u,"next",t)}function u(t){l(a,r,o,i,u,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();function f(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}var p=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.delete("api/v1/appdata/instance/".concat(n,"/"),{headers:Object(i.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){f(a,r,o,i,u,"next",t)}function u(t){f(a,r,o,i,u,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}(),v=e(14);function d(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function m(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){h(a,r,o,i,u,"next",t)}function u(t){h(a,r,o,i,u,"throw",t)}i(void 0)}))}}function y(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||b(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,n){if(t){if("string"==typeof t)return g(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?g(t,n):void 0}}function g(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var w=new r.a(!1),S=new r.a("undefined"==typeof localStorage?null:!!localStorage.getItem("TempActiveInstanceInfo")&&JSON.parse(String(localStorage.getItem("TempActiveInstanceInfo")))),A=function(){var t=y(Object(r.b)(w),2),n=t[0],e=t[1],a=y(Object(r.b)(S),2),i=a[0],u=a[1];return{instance:n,setinstance:e,activeInstanceData:i,setactiveInstanceData:u,loadinstance:function(){return m(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)(" ").then((function(t){e(t.data.results)})).catch((function(t){Object(v.e)(t,t.response)}));case 2:case"end":return t.stop()}}),t)})))()},loadinstancewithcallback:function(t){return m(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.a)(" ").then((function(n){t(n.data.results),e(n.data.results)})).catch((function(t){Object(v.e)(t,t.response)}));case 2:case"end":return n.stop()}}),n)})))()},loadactiveInstancebyID:function(t){return m(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=3;break}return n.next=3,Object(o.a)(t).then((function(t){u(t.data.results[0])})).catch((function(t){Object(v.e)(t,t.response)}));case 3:case"end":return n.stop()}}),n)})))()},postinstance:function(t){return m(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s(t).then((function(t){console.log(t),e((function(n){return[].concat(d(n),[t.data])}))})).catch((function(t){console.log(t),Object(v.e)(t,t.response)}));case 2:case"end":return n.stop()}}),n)})))()},editinstance:function(t,n){return m(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c(t,n).then((function(r){console.log(r),e((function(e){return e&&e.map((function(e){var r;return String(e.id)===String(t)?((r=e).i_icon=n.i_icon,r.mascot=n.mascot,r.i_title=n.i_title,r.i_stitle=n.i_stitle,r.i_body=n.i_body,r.i_bodytype=n.i_bodytype,r.i_bodyoptions=n.i_bodyoptions,r.locations=n.locations,r.i_media=n.i_media,r.i_misc=n.i_misc,r.color_field=n.color_field,r):e}))}))})).catch((function(t){console.log(t),Object(v.e)(t,t.response)}));case 2:case"end":return r.stop()}}),r)})))()},deleteinstance:function(t){return m(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p(t).then((function(r){console.log(r),e(n&&n.filter((function(n){return n.id!==t})))})).catch((function(t){console.log(t),Object(v.e)(t,t.response)}));case 2:case"end":return r.stop()}}),r)})))()}}}},169:function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var r=e(8),o=e(234),a=e(14);function i(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var l=new r.a(!1),s=new r.a(!1),f=function(){var t=u(Object(r.b)(l),2),n=t[0],e=t[1],c=u(Object(r.b)(s),2),f=c[0],p=c[1];return{ActiveSubLevelDetails:n,setActiveSubLevelDetails:e,sublevelLogError:f,loadActiveSubleveldetails:function(t){return(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.a)(t).then((function(t){var n;e(null===(n=t.data)||void 0===n?void 0:n.results[0])})).catch((function(t){Object(a.e)(t,t.response),p(t)}));case 2:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function u(t){i(a,r,o,u,c,"next",t)}function c(t){i(a,r,o,u,c,"throw",t)}u(void 0)}))})();var n}}}},234:function(t,n,e){"use strict";var r=e(3),o=e(16);function a(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}var i=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("api/v1/appdata/sublevel/level/".concat(n,"/"),{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)}))});return function(t){return n.apply(this,arguments)}}();n.a=i},3:function(t,n,e){"use strict";var r=e(237),o=e.n(r).a.create({baseURL:"https://apidc.mediacannibal.co/"});n.a=o},44:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var r=e(14),o=e(72),a=e(8);function i(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var l=function(t,n,e){n/=100,e/=100;var r=(1-Math.abs(2*e-1))*n,o=r*(1-Math.abs(t/60%2-1)),a=e-r/2,i=0,u=0,c=0;return 0<=t&&t<60?(i=r,u=o,c=0):60<=t&&t<120?(i=o,u=r,c=0):120<=t&&t<180?(i=0,u=r,c=o):180<=t&&t<240?(i=0,u=o,c=r):240<=t&&t<300?(i=o,u=0,c=r):300<=t&&t<360&&(i=r,u=0,c=o),i=Math.round(255*(i+a)).toString(16),u=Math.round(255*(u+a)).toString(16),c=Math.round(255*(c+a)).toString(16),1==i.length&&(i="0"+i),1==u.length&&(u="0"+u),1==c.length&&(c="0"+c),"#"+i+u+c},s=function(t){var n,e=0;(e=(n=function(t){var n=0,e=0,r=0;4==t.length?(n="0x"+t[1]+t[1],e="0x"+t[2]+t[2],r="0x"+t[3]+t[3]):7==t.length&&(n="0x"+t[1]+t[2],e="0x"+t[3]+t[4],r="0x"+t[5]+t[6]),n/=255,e/=255,r/=255;var o=Math.min(n,e,r),a=Math.max(n,e,r),i=a-o,u=0,c=0;return u=0==i?0:a==n?(e-r)/i%6:a==e?(r-n)/i+2:(n-e)/i+4,(u=Math.round(60*u))<0&&(u+=360),c=(a+o)/2,{h:u,s:+(100*(0==i?0:i/(1-Math.abs(2*c-1)))).toFixed(1),l:c=+(100*c).toFixed(1)}}(t)).h-12)>360?e-=360:e<0&&(e+=360);var r=0;(r=n.h-170)>360?r-=360:r<0&&(r+=360);return{color_11:"#ad43f5",color_12:"#78ce6a",color_13:"#EC7A4A",color_14:"#f5d343",color_15:"#76c2f6",color_24:"#1900ff",color_red:"#e00000",color_green:"#639A4D",color_m1:t,color_m2:l(e,50,45),color_m3:l(r,93,54),color_s1:l(n.h,30,70),color_s2:l(e,30,70),color_s3:l(r,30,70),color_t1:l(n.h,50,95),color_t2:l(e,50,95),color_t3:l(r,50,95)}},f=new a.a({color_11:"#ad43f5",color_12:"#78ce6a",color_13:"#EC7A4A",color_14:"#f5d343",color_15:"#76c2f6",color_24:"#1900ff",color_red:"#e00000",color_green:"#639A4D",color_m1:"#00253a",color_m2:"#3998ab",color_m3:"#f6901d",color_s1:"#9bb8c8",color_s2:"#9bc1c8",color_s3:"#c8b39b",color_t1:"#ebf3f8,",color_t2:"#ebf6f8",color_t3:"#f8f2eb"}),p=function(){var t=u(Object(a.b)(f),2),n=t[0],e=t[1];return{colourObj:n,setcolourObj:e,loadinstancecolor:function(t){return(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.a)(t).then((function(t){var n;e(s(null===(n=t.data.results[0])||void 0===n?void 0:n.color_field))})).catch((function(t){Object(r.e)(t,t.response)}));case 2:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function u(t){i(a,r,o,u,c,"next",t)}function c(t){i(a,r,o,u,c,"throw",t)}u(void 0)}))})();var n},loaddefaultcolor:function(){e(s("#00253a"))},setinstancecolor:function(t){e(s(t))}}}},72:function(t,n,e){"use strict";var r=e(3),o=e(16);function a(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}var i=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("api/v1/appdata/instance/info/?instance_id=".concat(n),{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)}))});return function(t){return n.apply(this,arguments)}}();n.a=i},8:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return l}));var r=e(0);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_state",void 0),u(this,"subscribers",void 0),u(this,"index",void 0),u(this,"id",void 0),this._state=n,this.index=0,this.subscribers={},this.id=t.id++}var n,e,r;return n=t,(e=[{key:"pingSubscribers",value:function(t,n){for(var e in this.subscribers)this.subscribers[e](t,n)}},{key:"update",value:function(t){var n;n=t instanceof Function?t(this._state):t;var e=this._state;return this._state=n,this.pingSubscribers(e,n),n}},{key:"subscribe",value:function(t){var n=++this.index;this.subscribers[n]=t;var e=this.subscribers;return function(){delete e[n]}}},{key:"state",get:function(){return this._state}}])&&i(n.prototype,e),r&&i(n,r),t}();function l(t){var n=o(Object(r.useState)(t.state),2),e=n[0],a=n[1];Object(r.useLayoutEffect)((function(){return t.subscribe((function(t,n){a(n)}))}),[t.id]);return[e,function(n){t.update(n)}]}u(c,"id",0)},90:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(8);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var i=new r.a("Splash"),u=function(){var t=o(Object(r.b)(i),2);return{ActiveScreen:t[0],setActiveScreen:t[1]}}},91:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(8);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var i=new r.a("undefined"==typeof localStorage?null:!!localStorage.getItem("AuthToken")&&JSON.parse(String(localStorage.getItem("AuthToken")))),u=function(){var t=o(Object(r.b)(i),2),n=t[0],e=t[1];return{auth:n,setAuth:e,login:function(t){e(t)},logout:function(){localStorage.clear(),sessionStorage.clear(),e(null)}}}},92:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(8);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var i=new r.a(""),u=function(){var t=o(Object(r.b)(i),2);return{ActivePopup:t[0],setActivePopup:t[1]}}},93:function(t,n,e){"use strict";e.d(n,"a",(function(){return A}));var r=e(8),o=e(3),a=e(16);function i(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("api/v1/appdata/level/info/?instance_id=".concat(n),{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function u(t){i(a,r,o,u,c,"next",t)}function c(t){i(a,r,o,u,c,"throw",t)}u(void 0)}))});return function(t){return n.apply(this,arguments)}}();function c(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}var l=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("api/v1/appdata/level/info/",n,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){c(a,r,o,i,u,"next",t)}function u(t){c(a,r,o,i,u,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();function s(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}var f=function(){var t,n=(t=regeneratorRuntime.mark((function t(n,e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.put("api/v1/appdata/level/".concat(n,"/"),e,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){s(a,r,o,i,u,"next",t)}function u(t){s(a,r,o,i,u,"throw",t)}i(void 0)}))});return function(t,e){return n.apply(this,arguments)}}();function p(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}var v=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("api/v1/appdata/level/".concat(n,"/"),{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){p(a,r,o,i,u,"next",t)}function u(t){p(a,r,o,i,u,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}(),d=e(14);function h(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||g(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function y(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){m(a,r,o,i,u,"next",t)}function u(t){m(a,r,o,i,u,"throw",t)}i(void 0)}))}}function b(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||g(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,n){if(t){if("string"==typeof t)return w(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?w(t,n):void 0}}function w(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var S=new r.a(!1),A=function(){var t=b(Object(r.b)(S),2),n=t[0],e=t[1];return{level:n,setlevel:e,loadlevel:function(){return y(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("").then((function(t){e(t.data.results)})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return t.stop()}}),t)})))()},loadlevelwithid:function(t){return y(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u(t).then((function(t){e(t.data.results)})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return n.stop()}}),n)})))()},postlevel:function(t){return y(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l(t).then((function(t){console.log(t),e((function(n){return[].concat(h(n),[t.data])}))})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return n.stop()}}),n)})))()},editlevel:function(t,n){return y(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f(t,n).then((function(r){console.log(r),e((function(e){return e&&e.map((function(e){var r;return String(e.id)===String(t)?((r=e).l_level=n.l_level,r.instance_id=n.instance_id,r.l_icon=n.l_icon,r.l_qrcode=n.l_qrcode,r.l_title=n.l_title,r.l_stitle=n.l_stitle,r.l_body=n.l_body,r.l_bodytype=n.l_bodytype,r.l_bodyoptions=n.l_bodyoptions,r.locations=n.locations,r.l_media=n.l_media,r.l_misc=n.l_misc,r.completion_image=n.completion_image,r.clue_image=n.clue_image,r.l_qr_id=n.l_qr_id,r.unlock_after=n.unlock_after,r):e}))}))})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return r.stop()}}),r)})))()},deletelevel:function(t){return y(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v(t).then((function(r){console.log(r),e(n&&n.filter((function(n){return n.id!==t})))})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return r.stop()}}),r)})))()}}}}});
//# sourceMappingURL=main~ea1f58e8.1f70e61a437fba617f2f.js.map