!function(t){function e(e){for(var r,u,i=e[0],c=e[1],l=e[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(s&&s(e);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={20:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=function(t){return u.p+""+({}[t]||t)+".76153388aaab2ab47996.js"}(t);var c=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="./",u.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var s=c;a.push([522,15,14,19,18,11,12,17,16,13]),n()}({14:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return f})),n.d(e,"e",(function(){return p}));var r=n(3),o=n(16);function a(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var u=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("user/usererrorlog/",e,{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}(),i=function(t,e,n,o){r.a.post("/api/v1/appdata/filemodel/create/",n,{headers:{Authorization:e?"Token ".concat(e):"","Content-Type":"application/json"}}).then((function(e){t(e,"sucess",o)})).catch((function(e){t(e,e.response,o),p(e,e.response)}))},c=function(t,e,n){r.a.post("/api/v1/appdata/filemodel/create/",n,{headers:{Authorization:e?"Token ".concat(e):"","Content-Type":"multipart/form-data"}}).then((function(e){t(e,"sucess")})).catch((function(e){t(e,e.response),p(e,e.response)}))},l=function(t,e){r.a.post("user/social/signup/",e,{headers:{"Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){t(e,e.response),p(e,e.response)}))},s=function(t,e){r.a.post("user/phone/email/otp_verify/",e,{headers:{"Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){return t(e,e.response)}))},f=function(t,e,n){r.a.post("api/v1/appdata/gamedatalog/",n,{headers:{Authorization:e?"Token ".concat(e):"","Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){t(e,e.response),p(e,e.response)}))},p=function(t,e){console.log("========>>> error in frontend logged ",t);var n={error_title:"front end error",error_message:JSON.stringify(e),additional_info:JSON.stringify(t)};u(n)}},16:function(t,e,n){"use strict";e.a=function(t){return null===t||"null"===t?{Accept:"application/json"}:{Accept:"application/json",Authorization:t?"Token ".concat(JSON.parse(t)):""}}},165:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(5);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=new r.a({key:"ENGLISH",value:"ENGLISH"}),i=function(){var t=o(Object(r.b)(u),2);return{Language:t[0],setLanguage:t[1]}}},166:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n(14),o=n(5),a=n(3),u=n(16);function i(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var c=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.get("api/v1/appdata/level/list/".concat(e,"/"),{headers:Object(u.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){i(a,r,o,u,c,"next",t)}function c(t){i(a,r,o,u,c,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}();function l(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var s=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.get("api/v1/appdata/level/qr/".concat(e,"/"),{headers:Object(u.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){l(a,r,o,u,i,"next",t)}function i(t){l(a,r,o,u,i,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}();function f(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){f(a,r,o,u,i,"next",t)}function i(t){f(a,r,o,u,i,"throw",t)}u(void 0)}))}}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var h=new o.a(!1),m=new o.a(!1),y=function(){var t=v(Object(o.b)(h),2),e=t[0],n=t[1],a=v(Object(o.b)(m),2),u=a[0],i=a[1],l=v(Object(o.b)(m),2),f=l[0],d=l[1],y=v(Object(o.b)(m),2),b=y[0],g=y[1];return{ActiveLevelDetails:e,setActiveLevelDetails:n,levelStatusCode:u,levelLogError:f,levelErrorStatusCode:b,loadActiveleveldetails:function(t){return p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t){e.next=3;break}return e.next=3,c(t).then((function(t){var e;n(null===(e=t.data)||void 0===e?void 0:e.results[0]),i(t)})).catch((function(t){Object(r.e)(t,t.response),d(t),g(t.response)}));case 3:case"end":return e.stop()}}),e)})))()},loadActiveleveldetailsbyqr:function(t){return p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t).then((function(t){var e;n(null===(e=t.data)||void 0===e?void 0:e.results[0])})).catch((function(t){Object(r.e)(t,t.response)}));case 2:case"end":return e.stop()}}),e)})))()}}}},167:function(t,e,n){"use strict";n.d(e,"a",(function(){return A}));var r=n(5),o=n(72),a=n(3),u=n(16);function i(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var c=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.put("api/v1/appdata/instance/".concat(e,"/"),n,{headers:Object(u.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){i(a,r,o,u,c,"next",t)}function c(t){i(a,r,o,u,c,"throw",t)}u(void 0)}))});return function(t,n){return e.apply(this,arguments)}}();function l(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var s=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.post("api/v1/appdata/instance/info/",e,{headers:Object(u.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){l(a,r,o,u,i,"next",t)}function i(t){l(a,r,o,u,i,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}();function f(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var p=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.delete("api/v1/appdata/instance/".concat(e,"/"),{headers:Object(u.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){f(a,r,o,u,i,"next",t)}function i(t){f(a,r,o,u,i,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}(),v=n(14);function d(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){h(a,r,o,u,i,"next",t)}function i(t){h(a,r,o,u,i,"throw",t)}u(void 0)}))}}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||b(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var w=new r.a(!1),S=new r.a("undefined"==typeof localStorage?null:!!localStorage.getItem("TempActiveInstanceInfo")&&JSON.parse(String(localStorage.getItem("TempActiveInstanceInfo")))),A=function(){var t=y(Object(r.b)(w),2),e=t[0],n=t[1],a=y(Object(r.b)(S),2),u=a[0],i=a[1];return{instance:e,setinstance:n,activeInstanceData:u,setactiveInstanceData:i,loadinstance:function(){return m(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)(" ").then((function(t){n(t.data.results)})).catch((function(t){Object(v.e)(t,t.response)}));case 2:case"end":return t.stop()}}),t)})))()},loadinstancewithcallback:function(t){return m(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)(" ").then((function(e){t(e.data.results),n(e.data.results)})).catch((function(t){Object(v.e)(t,t.response)}));case 2:case"end":return e.stop()}}),e)})))()},loadactiveInstancebyID:function(t){return m(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,Object(o.a)(t).then((function(t){i(t.data.results[0])})).catch((function(t){Object(v.e)(t,t.response)}));case 3:case"end":return e.stop()}}),e)})))()},postinstance:function(t){return m(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t).then((function(t){console.log(t),n((function(e){return[].concat(d(e),[t.data])}))})).catch((function(t){console.log(t),Object(v.e)(t,t.response)}));case 2:case"end":return e.stop()}}),e)})))()},editinstance:function(t,e){return m(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c(t,e).then((function(r){console.log(r),n((function(n){return n&&n.map((function(n){var r;return String(n.id)===String(t)?((r=n).i_icon=e.i_icon,r.mascot=e.mascot,r.i_title=e.i_title,r.i_stitle=e.i_stitle,r.i_body=e.i_body,r.i_bodytype=e.i_bodytype,r.i_bodyoptions=e.i_bodyoptions,r.locations=e.locations,r.i_media=e.i_media,r.i_misc=e.i_misc,r.color_field=e.color_field,r):n}))}))})).catch((function(t){console.log(t),Object(v.e)(t,t.response)}));case 2:case"end":return r.stop()}}),r)})))()},deleteinstance:function(t){return m(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p(t).then((function(r){console.log(r),n(e&&e.filter((function(e){return e.id!==t})))})).catch((function(t){console.log(t),Object(v.e)(t,t.response)}));case 2:case"end":return r.stop()}}),r)})))()}}}},169:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(5),o=n(234),a=n(14);function u(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l=new r.a(!1),s=new r.a(!1),f=function(){var t=i(Object(r.b)(l),2),e=t[0],n=t[1],c=i(Object(r.b)(s),2),f=c[0],p=c[1],v=i(Object(r.b)(s),2),d=v[0],h=v[1],m=i(Object(r.b)(s),2),y=m[0],b=m[1];return{ActiveSubLevelDetails:e,setActiveSubLevelDetails:n,sublevelStatusCode:f,sublevelLogError:d,sublevelErrorStatusCode:y,loadActiveSubleveldetails:function(t){return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)(t).then((function(t){var e;n(null===(e=t.data)||void 0===e?void 0:e.results[0]),p(t)})).catch((function(t){Object(a.e)(t,t.response),h(t),b(t.response)}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))})();var e}}}},234:function(t,e,n){"use strict";var r=n(3),o=n(16);function a(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var u=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("api/v1/appdata/sublevel/level/".concat(e,"/"),{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}();e.a=u},3:function(t,e,n){"use strict";var r=n(237),o=n.n(r).a.create({baseURL:"https://apidc.mediacannibal.co/"});e.a=o},44:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n(14),o=n(72),a=n(5);function u(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l=function(t,e,n){e/=100,n/=100;var r=(1-Math.abs(2*n-1))*e,o=r*(1-Math.abs(t/60%2-1)),a=n-r/2,u=0,i=0,c=0;return 0<=t&&t<60?(u=r,i=o,c=0):60<=t&&t<120?(u=o,i=r,c=0):120<=t&&t<180?(u=0,i=r,c=o):180<=t&&t<240?(u=0,i=o,c=r):240<=t&&t<300?(u=o,i=0,c=r):300<=t&&t<360&&(u=r,i=0,c=o),u=Math.round(255*(u+a)).toString(16),i=Math.round(255*(i+a)).toString(16),c=Math.round(255*(c+a)).toString(16),1==u.length&&(u="0"+u),1==i.length&&(i="0"+i),1==c.length&&(c="0"+c),"#"+u+i+c},s=function(t){var e,n=0;(n=(e=function(t){var e=0,n=0,r=0;4==t.length?(e="0x"+t[1]+t[1],n="0x"+t[2]+t[2],r="0x"+t[3]+t[3]):7==t.length&&(e="0x"+t[1]+t[2],n="0x"+t[3]+t[4],r="0x"+t[5]+t[6]),e/=255,n/=255,r/=255;var o=Math.min(e,n,r),a=Math.max(e,n,r),u=a-o,i=0,c=0;return i=0==u?0:a==e?(n-r)/u%6:a==n?(r-e)/u+2:(e-n)/u+4,(i=Math.round(60*i))<0&&(i+=360),c=(a+o)/2,{h:i,s:+(100*(0==u?0:u/(1-Math.abs(2*c-1)))).toFixed(1),l:c=+(100*c).toFixed(1)}}(t)).h-12)>360?n-=360:n<0&&(n+=360);var r=0;(r=e.h-170)>360?r-=360:r<0&&(r+=360);return{color_11:"#ad43f5",color_12:"#78ce6a",color_13:"#EC7A4A",color_14:"#f5d343",color_15:"#76c2f6",color_24:"#1900ff",color_red:"#e00000",color_green:"#639A4D",color_m1:t,color_m2:l(n,50,45),color_m3:l(r,93,54),color_s1:l(e.h,30,70),color_s2:l(n,30,70),color_s3:l(r,30,70),color_t1:l(e.h,50,95),color_t2:l(n,50,95),color_t3:l(r,50,95)}},f=new a.a({color_11:"#ad43f5",color_12:"#78ce6a",color_13:"#EC7A4A",color_14:"#f5d343",color_15:"#76c2f6",color_24:"#1900ff",color_red:"#e00000",color_green:"#639A4D",color_m1:"#00253a",color_m2:"#3998ab",color_m3:"#f6901d",color_s1:"#9bb8c8",color_s2:"#9bc1c8",color_s3:"#c8b39b",color_t1:"#ebf3f8,",color_t2:"#ebf6f8",color_t3:"#f8f2eb"}),p=function(){var t=i(Object(a.b)(f),2),e=t[0],n=t[1];return{colourObj:e,setcolourObj:n,loadinstancecolor:function(t){return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)(t).then((function(t){var e;n(s(null===(e=t.data.results[0])||void 0===e?void 0:e.color_field))})).catch((function(t){Object(r.e)(t,t.response)}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))})();var e},loaddefaultcolor:function(){n(s("#00253a"))},setinstancecolor:function(t){n(s(t))}}}},5:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(0);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"_state",void 0),i(this,"subscribers",void 0),i(this,"index",void 0),i(this,"id",void 0),this._state=e,this.index=0,this.subscribers={},this.id=t.id++}var e,n,r;return e=t,(n=[{key:"pingSubscribers",value:function(t,e){for(var n in this.subscribers)this.subscribers[n](t,e)}},{key:"update",value:function(t){var e;e=t instanceof Function?t(this._state):t;var n=this._state;return this._state=e,this.pingSubscribers(n,e),e}},{key:"subscribe",value:function(t){var e=++this.index;this.subscribers[e]=t;var n=this.subscribers;return function(){delete n[e]}}},{key:"state",get:function(){return this._state}}])&&u(e.prototype,n),r&&u(e,r),t}();function l(t){var e=o(Object(r.useState)(t.state),2),n=e[0],a=e[1];Object(r.useLayoutEffect)((function(){return t.subscribe((function(t,e){a(e)}))}),[t.id]);return[n,function(e){t.update(e)}]}i(c,"id",0)},72:function(t,e,n){"use strict";var r=n(3),o=n(16);function a(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var u=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("api/v1/appdata/instance/info/?instance_id=".concat(e),{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}();e.a=u},90:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(5);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=new r.a("Splash"),i=function(){var t=o(Object(r.b)(u),2);return{ActiveScreen:t[0],setActiveScreen:t[1]}}},91:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(5);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=new r.a("undefined"==typeof localStorage?null:!!localStorage.getItem("AuthToken")&&JSON.parse(String(localStorage.getItem("AuthToken")))),i=function(){var t=o(Object(r.b)(u),2),e=t[0],n=t[1];return{auth:e,setAuth:n,login:function(t){n(t)},logout:function(){localStorage.clear(),sessionStorage.clear(),n(null)}}}},92:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(5);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=new r.a(""),i=function(){var t=o(Object(r.b)(u),2);return{ActivePopup:t[0],setActivePopup:t[1]}}},93:function(t,e,n){"use strict";n.d(e,"a",(function(){return A}));var r=n(5),o=n(3),a=n(16);function u(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var i=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("api/v1/appdata/level/info/?instance_id=".concat(e),{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}();function c(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var l=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("api/v1/appdata/level/info/",e,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){c(a,r,o,u,i,"next",t)}function i(t){c(a,r,o,u,i,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}();function s(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var f=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.put("api/v1/appdata/level/".concat(e,"/"),n,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){s(a,r,o,u,i,"next",t)}function i(t){s(a,r,o,u,i,"throw",t)}u(void 0)}))});return function(t,n){return e.apply(this,arguments)}}();function p(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var v=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("api/v1/appdata/level/".concat(e,"/"),{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){p(a,r,o,u,i,"next",t)}function i(t){p(a,r,o,u,i,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}(),d=n(14);function h(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||g(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){m(a,r,o,u,i,"next",t)}function i(t){m(a,r,o,u,i,"throw",t)}u(void 0)}))}}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||g(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){if(t){if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(t,e):void 0}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var S=new r.a(!1),A=function(){var t=b(Object(r.b)(S),2),e=t[0],n=t[1];return{level:e,setlevel:n,loadlevel:function(){return y(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("").then((function(t){n(t.data.results)})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return t.stop()}}),t)})))()},loadlevelwithid:function(t){return y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t).then((function(t){n(t.data.results)})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return e.stop()}}),e)})))()},postlevel:function(t){return y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t).then((function(t){console.log(t),n((function(e){return[].concat(h(e),[t.data])}))})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return e.stop()}}),e)})))()},editlevel:function(t,e){return y(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f(t,e).then((function(r){console.log(r),n((function(n){return n&&n.map((function(n){var r;return String(n.id)===String(t)?((r=n).l_level=e.l_level,r.instance_id=e.instance_id,r.l_icon=e.l_icon,r.l_qrcode=e.l_qrcode,r.l_title=e.l_title,r.l_stitle=e.l_stitle,r.l_body=e.l_body,r.l_bodytype=e.l_bodytype,r.l_bodyoptions=e.l_bodyoptions,r.locations=e.locations,r.l_media=e.l_media,r.l_misc=e.l_misc,r.completion_image=e.completion_image,r.clue_image=e.clue_image,r.l_qr_id=e.l_qr_id,r.unlock_after=e.unlock_after,r):n}))}))})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return r.stop()}}),r)})))()},deletelevel:function(t){return y(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v(t).then((function(r){console.log(r),n(e&&e.filter((function(e){return e.id!==t})))})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return r.stop()}}),r)})))()}}}}});
//# sourceMappingURL=main~ea1f58e8.76153388aaab2ab47996.js.map